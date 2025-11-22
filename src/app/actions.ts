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
    projectDescription: z.string().min(1, 'Project description is required.'),
    desiredTimeline: z.string().min(1, 'Desired timeline is required.'),
    budget: z.string().min(1, 'Estimated budget is required.'),
    contactInfo: z.string().email('A valid email address is required.'),
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
