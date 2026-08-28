import { createServerFn } from '@tanstack/react-start';
import { Resend } from 'resend';

export const sendContactEmail = createServerFn({ method: 'POST' })
  .handler(async ({ data }: { data: { name: string; email: string; company?: string; message: string } }) => {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY || 're_your_api_key');
      const { name, email, company, message } = data;

      if (!name || !email || !message) {
        return { success: false, error: 'Required input fields are missing' };
      }

      const { data: responseData, error: resendError } = await resend.emails.send({
        from: 'Infynux Alerts <onboarding@resend.dev>',
        to: 'naveendseven@gmail.com', // NOTE: Once you verify your domain, you can change this back to support@infynuxsolutions.in
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

      if (resendError) {
        console.error('Resend API blocked the request:', resendError);
        return { success: false, error: resendError.message };
      }

      return { success: true, message: 'Message payload routed successfully' };
    } catch (error) {
      console.error('Email routing error:', error);
      return { success: false, error: 'Internal gateway communication breakdown' };
    }
  });
