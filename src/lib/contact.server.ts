import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

// ─── Validation Schema ────────────────────────────────────────────────────────
export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
});

export type ContactInput = z.infer<typeof contactSchema>;

// ─── Diagnostic env dump ─────────────────────────────────────────────────────
function dumpEnv() {
  const keys = [
    "VITE_SUPABASE_URL",
    "VITE_SUPABASE_ANON_KEY",
    "VITE_RESEND_API_KEY",
    "VITE_RESEND_FROM_EMAIL",
    "SUPABASE_URL",
    "SUPABASE_ANON_KEY",
    "RESEND_API_KEY",
  ];

  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("[Contact] ENV DUMP (dev diagnostic):");

  // import.meta.env (Vite-injected at build time)
  for (const k of keys) {
    const val = (import.meta.env as Record<string, string | undefined>)[k];
    const display = val
      ? val.length > 12
        ? `"${val.slice(0, 8)}…${val.slice(-4)}" (len=${val.length})`
        : `"${val}"`
      : "MISSING";
    console.log(`  import.meta.env.${k} = ${display}`);
  }

  // process.env (Node.js runtime — available on Render)
  try {
    for (const k of keys) {
      const val = process.env[k];
      const display = val
        ? val.length > 12
          ? `"${val.slice(0, 8)}…${val.slice(-4)}" (len=${val.length})`
          : `"${val}"`
        : "MISSING";
      console.log(`  process.env.${k}      = ${display}`);
    }
  } catch (e) {
    console.log("  process.env: NOT available in this runtime");
  }
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
}

function resolveEnv(key: string): string | undefined {
  // Priority: import.meta.env VITE_ prefix → process.env VITE_ prefix → process.env plain
  const fromVite = (import.meta.env as Record<string, string | undefined>)[`VITE_${key}`];
  if (fromVite) return fromVite;
  try {
    return process.env[`VITE_${key}`] ?? process.env[key];
  } catch {
    return undefined;
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// ─── Server Function ──────────────────────────────────────────────────────────
export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator((raw: ContactInput) => {
    console.log("[Contact] ── inputValidator called ──");
    console.log("[Contact] Raw input:", JSON.stringify(raw));
    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      console.error("[Contact] ❌ Validation failed:", JSON.stringify(parsed.error.format()));
      throw parsed.error;
    }
    console.log("[Contact] ✅ Validation passed.");
    return parsed.data;
  })
  .handler(async ({ data }) => {
    const { name, email, message } = data;

    console.log("\n[Contact] ══════════════════════════════════════");
    console.log("[Contact] handler() START");
    console.log("[Contact] Payload:", JSON.stringify({ name, email, messageLen: message.length }));

    // ── ENV DUMP ────────────────────────────────────────────────────────────
    dumpEnv();

    // ── Resolve Supabase creds ──────────────────────────────────────────────
    const supabaseUrl = resolveEnv("SUPABASE_URL");
    const supabaseKey = resolveEnv("SUPABASE_ANON_KEY");

    console.log("[Contact] supabaseUrl resolved:", supabaseUrl ?? "❌ UNDEFINED");
    console.log("[Contact] supabaseKey resolved:", supabaseKey ? `✅ present (${supabaseKey.length} chars)` : "❌ UNDEFINED");

    if (!supabaseUrl || !supabaseKey) {
      const missing: string[] = [];
      if (!supabaseUrl) missing.push("VITE_SUPABASE_URL");
      if (!supabaseKey) missing.push("VITE_SUPABASE_ANON_KEY");
      const msg = `[ENV ERROR] Missing environment variables: ${missing.join(", ")}. Check your .env file and restart the dev server.`;
      console.error("[Contact] ❌", msg);
      throw new Error(msg);
    }

    // ── Build Supabase request ──────────────────────────────────────────────
    const supabaseEndpoint = `${supabaseUrl}/rest/v1/contact_inquiries`;
    const requestBody = JSON.stringify({ name, email, message });

    console.log("[Contact] Supabase endpoint:", supabaseEndpoint);
    console.log("[Contact] Request body:", requestBody);

    // ── Supabase INSERT ─────────────────────────────────────────────────────
    let dbRes: Response;
    try {
      dbRes = await fetch(supabaseEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          Prefer: "return=representation",
        },
        body: requestBody,
      });
    } catch (fetchErr: unknown) {
      const errMsg = fetchErr instanceof Error
        ? `${fetchErr.message}\nStack: ${fetchErr.stack}`
        : String(fetchErr);
      console.error("[Contact] ❌ fetch() to Supabase threw an exception:", errMsg);
      throw new Error(`[NETWORK ERROR] Could not reach Supabase: ${errMsg}`);
    }

    console.log("[Contact] Supabase HTTP status:", dbRes.status, dbRes.statusText);

    // Read body unconditionally so we always have it for logging
    let dbRawBody = "<failed to read body>";
    try {
      dbRawBody = await dbRes.text();
    } catch (readErr) {
      console.error("[Contact] ❌ Could not read Supabase response body:", readErr);
    }

    console.log("[Contact] Supabase response body:", dbRawBody);

    // Parse as JSON for structured logging if possible
    let dbJson: unknown = null;
    try {
      dbJson = JSON.parse(dbRawBody);
      console.log("[Contact] Supabase response JSON:", JSON.stringify(dbJson, null, 2));
    } catch {
      console.log("[Contact] Supabase response is not valid JSON (raw above).");
    }

    if (!dbRes.ok) {
      // Extract Supabase error details for the frontend
      let supabaseCode = String(dbRes.status);
      let supabaseMessage = dbRawBody;
      let supabaseHint = "";

      if (dbJson && typeof dbJson === "object" && dbJson !== null) {
        const j = dbJson as Record<string, unknown>;
        if (j.code) supabaseCode = String(j.code);
        if (j.message) supabaseMessage = String(j.message);
        if (j.hint) supabaseHint = String(j.hint);
        if (j.details) supabaseHint += ` | details: ${String(j.details)}`;
      }

      const diagMessage =
        `[SUPABASE INSERT FAILED] ` +
        `HTTP ${dbRes.status} ${dbRes.statusText} | ` +
        `code=${supabaseCode} | ` +
        `message=${supabaseMessage}` +
        (supabaseHint ? ` | hint=${supabaseHint}` : "");

      console.error("[Contact] ❌", diagMessage);

      // Surface the EXACT error to the frontend for diagnosis
      throw new Error(diagMessage);
    }

    // Parse inserted row
    let insertedId = "unknown";
    try {
      const rows = JSON.parse(dbRawBody) as { id?: string }[];
      insertedId = rows?.[0]?.id ?? "unknown";
    } catch {
      // body might be empty on minimal response
    }
    console.log("[Contact] ✅ Supabase INSERT succeeded. Row ID:", insertedId);

    // ── Resend config ───────────────────────────────────────────────────────
    const resendKey = resolveEnv("RESEND_API_KEY");
    const fromEmail = resolveEnv("RESEND_FROM_EMAIL") ?? "onboarding@resend.dev";
    const adminEmail = "yogeshwarandofficial@gmail.com";

    console.log("[Contact] resendKey resolved:", resendKey ? `✅ present (${resendKey.length} chars)` : "❌ MISSING");
    console.log("[Contact] fromEmail:", fromEmail);

    if (!resendKey) {
      console.warn("[Contact] ⚠️  No RESEND_API_KEY — skipping email. DB insert was successful.");
      return { ok: true, emailSent: false, insertedId, debug: "email skipped: no API key" };
    }

    const ts = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    // ── Admin email ─────────────────────────────────────────────────────────
    console.log("[Contact] Sending admin email to:", adminEmail);

    const adminPayload = {
      from: `INFYNUX <${fromEmail}>`,
      to: [adminEmail],
      reply_to: email,
      subject: `New enquiry from ${name} — INFYNUX`,
      html: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#05050F;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#05050F;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#0A0A1F;border-radius:16px;overflow:hidden;border:1px solid rgba(0,229,255,0.15);">
        <tr><td style="background:linear-gradient(135deg,rgba(0,229,255,0.12),rgba(123,47,190,0.12));padding:36px 40px 28px;border-bottom:1px solid rgba(255,255,255,0.06);">
          <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#00E5FF;">INFYNUX — Incoming Transmission</p>
          <h1 style="margin:0;font-size:26px;font-weight:700;color:#FFFFFF;">New Contact Request</h1>
        </td></tr>
        <tr><td style="padding:32px 40px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);width:90px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#64748B;vertical-align:top;">From</td>
              <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);font-size:15px;font-weight:600;color:#FFFFFF;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#64748B;vertical-align:top;">Reply-to</td>
              <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
                <a href="mailto:${safeEmail}" style="color:#00E5FF;text-decoration:none;font-size:15px;">${safeEmail}</a>
              </td>
            </tr>
          </table>
          <div style="margin-top:28px;">
            <p style="margin:0 0 10px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#64748B;">Message</p>
            <div style="background:#05050F;border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px 24px;font-size:15px;line-height:1.75;color:#CBD5E1;white-space:pre-wrap;">${safeMessage}</div>
          </div>
        </td></tr>
        <tr><td style="padding:20px 40px 32px;text-align:center;font-size:11px;color:#334155;border-top:1px solid rgba(255,255,255,0.05);">
          INFYNUX &middot; Thiruvarur, Tamil Nadu, India &middot; ${ts} IST
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`,
    };

    console.log("[Contact] Admin email payload (from/to/subject):", adminPayload.from, "→", adminPayload.to, "|", adminPayload.subject);

    let adminEmailRes: Response;
    let adminEmailBody = "<not sent>";
    try {
      adminEmailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify(adminPayload),
      });
      adminEmailBody = await adminEmailRes.text();
      console.log("[Contact] Admin email HTTP status:", adminEmailRes.status, adminEmailRes.statusText);
      console.log("[Contact] Admin email response body:", adminEmailBody);
      if (!adminEmailRes.ok) {
        console.error("[Contact] ⚠️  Admin email FAILED:", adminEmailRes.status, adminEmailBody);
      } else {
        console.log("[Contact] ✅ Admin email sent.");
      }
    } catch (emailErr: unknown) {
      const errMsg = emailErr instanceof Error ? emailErr.message : String(emailErr);
      console.error("[Contact] ❌ Admin email fetch threw:", errMsg);
    }

    // ── User confirmation email ─────────────────────────────────────────────
    console.log("[Contact] Sending confirmation email to user:", email);

    const userPayload = {
      from: `INFYNUX Solutions <${fromEmail}>`,
      to: [email],
      subject: "We received your message — INFYNUX",
      html: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#05050F;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#05050F;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#0A0A1F;border-radius:16px;overflow:hidden;border:1px solid rgba(0,229,255,0.15);">
        <tr><td style="background:linear-gradient(135deg,rgba(0,229,255,0.12),rgba(123,47,190,0.12));padding:36px 40px 28px;border-bottom:1px solid rgba(255,255,255,0.06);">
          <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#00E5FF;">INFYNUX Solutions</p>
          <h1 style="margin:0;font-size:26px;font-weight:700;color:#FFFFFF;">We received your message ✓</h1>
        </td></tr>
        <tr><td style="padding:32px 40px;">
          <p style="font-size:16px;line-height:1.7;color:#CBD5E1;margin:0 0 20px;">Hi <strong style="color:#FFFFFF;">${safeName}</strong>,</p>
          <p style="font-size:15px;line-height:1.75;color:#94A3B8;margin:0 0 24px;">
            Thanks for reaching out to INFYNUX. We've received your message and will get back to you within <strong style="color:#00E5FF;">one earth-day</strong>.
          </p>
          <div style="background:#05050F;border:1px solid rgba(0,229,255,0.1);border-radius:12px;padding:20px 24px;margin:0 0 28px;">
            <p style="margin:0 0 10px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#64748B;">Your message</p>
            <div style="font-size:14px;line-height:1.75;color:#94A3B8;white-space:pre-wrap;">${safeMessage}</div>
          </div>
          <p style="font-size:14px;line-height:1.7;color:#64748B;margin:0;">
            In the meantime, feel free to browse our
            <a href="https://infynuxsolutions.in/services" style="color:#00E5FF;text-decoration:none;">services</a>
            or reach us directly at
            <a href="mailto:support@infynuxsolutions.in" style="color:#00E5FF;text-decoration:none;">support@infynuxsolutions.in</a>.
          </p>
        </td></tr>
        <tr><td style="padding:20px 40px 32px;text-align:center;font-size:11px;color:#334155;border-top:1px solid rgba(255,255,255,0.05);">
          INFYNUX Solutions &middot; Thiruvarur, Tamil Nadu, India<br/>
          <a href="https://infynuxsolutions.in" style="color:#334155;text-decoration:none;">infynuxsolutions.in</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`,
    };

    let userEmailRes: Response;
    let userEmailBody = "<not sent>";
    try {
      userEmailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify(userPayload),
      });
      userEmailBody = await userEmailRes.text();
      console.log("[Contact] User email HTTP status:", userEmailRes.status, userEmailRes.statusText);
      console.log("[Contact] User email response body:", userEmailBody);
      if (!userEmailRes.ok) {
        console.error("[Contact] ⚠️  User confirmation email FAILED:", userEmailRes.status, userEmailBody);
      } else {
        console.log("[Contact] ✅ User confirmation email sent to:", email);
      }
    } catch (emailErr: unknown) {
      const errMsg = emailErr instanceof Error ? emailErr.message : String(emailErr);
      console.error("[Contact] ❌ User email fetch threw:", errMsg);
    }

    console.log("[Contact] ✅ handler() COMPLETE");
    console.log("[Contact] ══════════════════════════════════════\n");

    return {
      ok: true,
      insertedId,
      emailSent: true,
      adminEmailBody,
      userEmailBody,
    };
  });
