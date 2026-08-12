import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { Hono } from 'hono';
import serverModule from './dist/server/server.js';

const app = new Hono();

import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY || 're_your_api_key');

// 1. Serve static files (CSS, JS, images) from the client build
app.use('/*', serveStatic({ root: './dist/client' }));

// API Endpoint for Contact Form
app.post('/api/contact', async (c) => {
  try {
    const { name, email, company, message } = await c.req.json();

    if (!name || !email || !message) {
      return c.json({ success: false, error: 'Required input fields are missing' }, 400);
    }

    await resend.emails.send({
      from: 'Infynux Alerts <onboarding@resend.dev>',
      to: 'naveendseven@gmail.com',
      subject: `New Inquiry from ${name} ${company ? `(${company})` : ''}`,
      html: `
        <div style="font-family: monospace; padding: 24px; background: #0B0B0C; color: #FBF9F4; max-width: 600px;">
          <h2 style="color: #E0B840; border-bottom: 1px solid #222224; padding-bottom: 12px; margin-bottom: 20px;">
            // INFYNUX SYSTEM INBOUND INQUIRY
          </h2>
          <p style="margin: 8px 0;"><strong>Sender Name:</strong> ${name}</p>
          <p style="margin: 8px 0;"><strong>Email Endpoint:</strong> ${email}</p>
          <p style="margin: 8px 0;"><strong>Company Matrix:</strong> ${company || 'None Specified'}</p>
          <div style="margin-top: 24px; padding: 16px; border: 1px solid #222224; background: #121214;">
            <p style="color: #88888C; margin: 0 0 8px 0;">[ TRANSMITTED MESSAGE MANIFEST ]</p>
            <p style="line-height: 1.6; margin: 0;">${message}</p>
          </div>
        </div>
      `,
    });

    return c.json({ success: true, message: 'Message payload routed successfully' });
  } catch (error) {
    console.error('Email routing error:', error);
    return c.json({ success: false, error: 'Internal gateway communication breakdown' }, 500);
  }
});

// 2. Route all other requests to the TanStack Start SSR fetch handler
app.all('*', async (c) => {
  // In Node.js, c.executionCtx throws an error since there is no execution context
  let ctx;
  try {
    ctx = c.executionCtx;
  } catch (e) {
    ctx = undefined;
  }
  return await serverModule.fetch(c.req.raw, c.env, ctx);
});

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

console.log(`Starting Render optimized Node server on port ${port}...`);

serve({
  fetch: app.fetch,
  port: port
}, (info) => {
  console.log(`Server is running at http://localhost:${info.port}`);
});
