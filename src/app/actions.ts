'use server';
import { respondToInquiry, type InquiryInput, type InquiryOutput } from '@/ai/flows/inquiry-auto-responder';
import { z } from 'zod';

export interface InquiryState {
  message?: string | null;
  errors?: {
    projectDescription?: string[];
    desiredTimeline?: string[];
    budget?: string[];
    contactInfo?: string[];
  };
  data?: InquiryOutput | null;
}

const InquirySchema = z.object({
    projectDescription: z.string().min(10, 'Please provide a more detailed description (at least 10 characters).'),
    desiredTimeline: z.string().min(3, 'Please specify your desired timeline.'),
    budget: z.string().min(2, 'Please provide an estimated budget.'),
    contactInfo: z.string().email('Please provide a valid email address.'),
});

export async function createInquiry(prevState: InquiryState, formData: FormData): Promise<InquiryState> {
  const validatedFields = InquirySchema.safeParse({
    projectDescription: formData.get('projectDescription'),
    desiredTimeline: formData.get('desiredTimeline'),
    budget: formData.get('budget'),
    contactInfo: formData.get('contactInfo'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Send Inquiry.',
    };
  }

  try {
    const inquiryInput: InquiryInput = validatedFields.data;
    const result = await respondToInquiry(inquiryInput);
    return { 
        message: 'Success! Our AI has drafted a response.',
        data: result
    };
  } catch (e) {
    return {
      message: 'Database Error: Failed to process inquiry.',
    };
  }
}
