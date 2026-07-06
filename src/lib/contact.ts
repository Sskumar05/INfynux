import { z } from "zod";

// ─── Validation schema (shared between form and submit handler) ───────────────
export const contactSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be 100 characters or fewer")
    .trim(),

  email: z
    .string({ required_error: "Email is required" })
    .email("Please enter a valid email address")
    .max(254, "Email is too long")
    .trim(),

  message: z
    .string({ required_error: "Message is required" })
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be 5 000 characters or fewer")
    .trim(),
});

export type ContactInput = z.infer<typeof contactSchema>;
