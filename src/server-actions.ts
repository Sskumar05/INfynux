import { createServerFn } from '@tanstack/react-start';
import { Resend } from 'resend';
import escape from 'lodash.escape';
import { z } from 'zod';



export const sendEnquiryNotifications = createServerFn({ method: 'POST' })
  .handler(async ({ data }: any) => {
    try {
      const apiKey = process.env.RESEND_API_KEY;
      const adminEmail = process.env.ADMIN_EMAIL;
      const fromEmail = process.env.FROM_EMAIL;

      if (!apiKey || !apiKey.startsWith('re_') || !adminEmail || !fromEmail) {
        console.error('Server Configuration Error: Missing or invalid RESEND_API_KEY, ADMIN_EMAIL, or FROM_EMAIL.');
        return { success: false, error: 'Email service is not properly configured.' };
      }

      const resend = new Resend(apiKey);
      const { name, email, message, company, phone, service, budget } = data;

      if (!name || !name.trim()) {
        return { success: false, error: 'Name is required.' };
      }

      if (!email || !email.trim()) {
        return { success: false, error: 'Email is required.' };
      }

      const emailSchema = z.string().email();
      if (!emailSchema.safeParse(email).success) {
        return { success: false, error: 'Invalid email format provided.' };
      }
      
      const safeName = escape(name);
      const safeEmail = escape(email);
      const safeMessage = escape(message);
      const safeCompany = company ? escape(company) : '';
      const safePhone = phone ? escape(phone) : '';
      const safeService = service ? escape(service) : '';
      const safeBudget = budget ? escape(budget) : '';
      
      const submissionDate = new Date().toLocaleString();

      console.log("USER EMAIL:", email);
      console.log("ADMIN EMAIL:", adminEmail);
      console.log("FROM EMAIL:", fromEmail);

      const isTestMode = process.env.NODE_ENV === 'development' || process.env.RESEND_TEST_MODE === 'true';
      let toUserEmail = email;
      let toAdminEmail = adminEmail;

      if (isTestMode) {
        console.log("RESEND TESTING MODE ACTIVE: Overriding 'to' recipients to 'delivered@resend.dev' to comply with Resend unverified domain limits.");
        toUserEmail = 'delivered@resend.dev';
        toAdminEmail = 'delivered@resend.dev';
      }

      const resendPayload = [
        {
          from: fromEmail,
          to: toUserEmail,
          subject: 'Thank You for Contacting INFYNUX',
          html: `
            <div style="font-family: Arial, sans-serif; padding: 24px; background: #ffffff; color: #333333; max-width: 600px; line-height: 1.6;">
              <p>Hi ${safeName},</p>
              <p>Thank you for reaching out to INFYNUX.</p>
              <p>We’ve received your enquiry successfully. Our team will review your requirements and get back to you as soon as possible.</p>
              <p>We appreciate your interest in working with us.</p>
              <br/>
              <p>Best regards,<br/><strong>INFYNUX Team</strong></p>
            </div>
          `
        },
        {
          from: fromEmail,
          to: toAdminEmail,
          subject: `New Website Enquiry — ${safeName}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 24px; background: #f9f9f9; color: #333333; max-width: 600px;">
              <h2 style="color: #4f46e5; border-bottom: 1px solid #dddddd; padding-bottom: 12px; margin-bottom: 20px;">
                New Enquiry Received
              </h2>
              <table style="width: 100%; border-collapse: collapse; text-align: left;">
                <tr><th style="padding: 8px 0; border-bottom: 1px solid #eeeeee; width: 100px;">Name:</th><td style="padding: 8px 0; border-bottom: 1px solid #eeeeee;">${safeName}</td></tr>
                <tr><th style="padding: 8px 0; border-bottom: 1px solid #eeeeee;">Email:</th><td style="padding: 8px 0; border-bottom: 1px solid #eeeeee;">${safeEmail}</td></tr>
                ${safePhone ? `<tr><th style="padding: 8px 0; border-bottom: 1px solid #eeeeee;">Phone:</th><td style="padding: 8px 0; border-bottom: 1px solid #eeeeee;">${safePhone}</td></tr>` : ''}
                ${safeCompany ? `<tr><th style="padding: 8px 0; border-bottom: 1px solid #eeeeee;">Company:</th><td style="padding: 8px 0; border-bottom: 1px solid #eeeeee;">${safeCompany}</td></tr>` : ''}
                ${safeService ? `<tr><th style="padding: 8px 0; border-bottom: 1px solid #eeeeee;">Service:</th><td style="padding: 8px 0; border-bottom: 1px solid #eeeeee;">${safeService}</td></tr>` : ''}
                ${safeBudget ? `<tr><th style="padding: 8px 0; border-bottom: 1px solid #eeeeee;">Budget:</th><td style="padding: 8px 0; border-bottom: 1px solid #eeeeee;">${safeBudget}</td></tr>` : ''}
                <tr><th style="padding: 8px 0; border-bottom: 1px solid #eeeeee;">Date:</th><td style="padding: 8px 0; border-bottom: 1px solid #eeeeee;">${submissionDate}</td></tr>
              </table>
              <div style="margin-top: 24px; padding: 16px; background: #ffffff; border: 1px solid #dddddd; border-radius: 4px;">
                <p style="margin: 0 0 8px 0; color: #666666; font-size: 14px;"><strong>Message / Enquiry Details:</strong></p>
                <p style="margin: 0; white-space: pre-wrap;">${safeMessage}</p>
              </div>
            </div>
          `
        }
      ];

      const response = await resend.batch.send(resendPayload);
      console.log("RESEND API RESPONSE:", JSON.stringify(response, null, 2));

      const { data: batchData, error: batchError } = response;

      if (batchError) {
        console.error('Resend API error:', { message: batchError.message, name: batchError.name });
        
        if (batchError.name === 'validation_error' && batchError.message.includes('testing email address')) {
            return { success: false, error: 'Resend Testing Mode Active: You can only send emails to verified testing recipients (like delivered@resend.dev) until a production domain is verified.' };
        }
        
        return { success: false, error: batchError.message };
      }

      return { success: true, message: 'Emails dispatched successfully', messageId: batchData?.data?.[0]?.id };
    } catch (error) {
      console.error('Server action email error:', error);
      return { success: false, error: 'Internal gateway communication breakdown' };
    }
  });
