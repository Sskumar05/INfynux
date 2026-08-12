import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendContactEmail } from '../../server-actions';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const handleFormSubmit = async (data: ContactFormData) => {
    setIsSending(true);
    setFeedback(null);
    
    try {
      const result = await sendContactEmail({ data });

      if (result.success) {
        setFeedback({ type: 'success', text: 'MESSAGE PACKET SENT SUCCESSFULLY // EXPECT RESPONSE IN < 24 HOURS' });
        reset();
      } else {
        setFeedback({ type: 'error', text: 'ROUTING ERROR // TERMINAL ROUTE FAULT' });
      }
    } catch {
      setFeedback({ type: 'error', text: 'NETWORK EXCEPTION // PIPELINE CONGESTION' });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex-1 flex flex-col">
          <label className="sr-only">Name</label>
          <input 
            {...register('name', { required: "Name is required" })}
            type="text" 
            placeholder="Name *" 
            className="w-full bg-transparent border-b-[1.5px] border-[var(--color-text-ink)] py-4 text-[var(--color-ink)] focus:outline-none focus:border-b-2 focus:border-[var(--color-gold)] transition-all placeholder-[var(--color-text-muted-dark)]" 
          />
          {errors.name && <span className="text-[10px] font-mono text-rose-500 mt-1">{errors.name.message}</span>}
        </div>
        <div className="flex-1 flex flex-col">
          <label className="sr-only">Email</label>
          <input 
            {...register('email', { required: "Destination channel is required" })}
            type="email" 
            placeholder="Email *" 
            className="w-full bg-transparent border-b-[1.5px] border-[var(--color-text-ink)] py-4 text-[var(--color-ink)] focus:outline-none focus:border-b-2 focus:border-[var(--color-gold)] transition-all placeholder-[var(--color-text-muted-dark)]" 
          />
          {errors.email && <span className="text-[10px] font-mono text-rose-500 mt-1">{errors.email.message}</span>}
        </div>
      </div>
      <div className="flex flex-col">
        <label className="sr-only">Company (Optional)</label>
        <input 
          {...register('company')}
          type="text" 
          placeholder="Company (Optional)" 
          className="w-full bg-transparent border-b-[1.5px] border-[var(--color-text-ink)] py-4 text-[var(--color-ink)] focus:outline-none focus:border-b-2 focus:border-[var(--color-gold)] transition-all placeholder-[var(--color-text-muted-dark)]" 
        />
      </div>
      <div className="flex flex-col">
        <label className="sr-only">Message</label>
        <textarea 
          {...register('message', { required: "Project context manifest is empty" })}
          placeholder="Message *" 
          rows={4}
          className="w-full bg-transparent border-b-[1.5px] border-[var(--color-text-ink)] py-4 text-[var(--color-ink)] focus:outline-none focus:border-b-2 focus:border-[var(--color-gold)] transition-all placeholder-[var(--color-text-muted-dark)] resize-none" 
        />
        {errors.message && <span className="text-[10px] font-mono text-rose-500 mt-1">{errors.message.message}</span>}
      </div>
      
      <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-4">
        <button 
          type="submit" 
          disabled={isSending}
          className="bg-[var(--color-ink)] text-[var(--color-paper)] px-8 py-4 font-mono text-[10px] uppercase tracking-widest font-bold hover:bg-[var(--color-gold)] transition-colors w-fit disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSending ? "SENDING..." : "SEND MESSAGE"}
        </button>

        {feedback && (
          <span className={`text-xs font-mono tracking-wide ${feedback.type === 'success' ? 'text-emerald-400' : 'text-rose-500'}`}>
            {feedback.text}
          </span>
        )}
      </div>
    </form>
  );
}
