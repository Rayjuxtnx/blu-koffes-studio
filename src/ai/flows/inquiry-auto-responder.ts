'use server';
/**
 * @fileOverview A flow for responding to custom project inquiries with AI-generated timelines and project plans.
 *
 * - respondToInquiry - A function that handles the inquiry response process.
 * - InquiryInput - The input type for the respondToInquiry function.
 * - InquiryOutput - The return type for the respondToInquiry function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InquiryInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('A detailed description of the custom project inquiry.'),
  desiredTimeline: z.string().describe('The desired timeline for the project.'),
  budget: z.string().describe('The estimated budget for the project. Assume currency is in Kenyan Shillings (Ksh) unless specified otherwise.'),
  contactInfo: z.string().describe('Contact information of the person submitting the inquiry.'),
});
export type InquiryInput = z.infer<typeof InquiryInputSchema>;

const InquiryOutputSchema = z.object({
  response: z.string().describe('A professional and welcoming introductory paragraph acknowledging the client\'s inquiry.'),
  suggestedTimeline: z.string().describe('A realistic and well-reasoned suggested timeline, considering the project scope.'),
  potentialProjectPlan: z
    .string()
    .describe('A high-level, potential project plan broken down into key phases (e.g., Pre-production, Production, Post-production).'),
});
export type InquiryOutput = z.infer<typeof InquiryOutputSchema>;

export async function respondToInquiry(input: InquiryInput): Promise<InquiryOutput> {
  return respondToInquiryFlow(input);
}

const inquiryResponsePrompt = ai.definePrompt({
  name: 'inquiryResponsePrompt',
  input: {schema: InquiryInputSchema},
  output: {schema: InquiryOutputSchema},
  prompt: `You are a professional photography consultant for "Blu Koffee Studio Consultancy". Your tone is professional, helpful, and confident.

  A potential client has submitted an inquiry. Based on the information provided, generate a compelling response.

  Client's Project Description: {{{projectDescription}}}
  Client's Desired Timeline: {{{desiredTimeline}}}
  Client's Budget: {{{budget}}}
  Client's Contact Information: {{{contactInfo}}}

  Your response MUST include three distinct parts:
  1.  **Response:** Start with a welcoming paragraph. Acknowledge their project and express excitement about the possibility of working with them.
  2.  **Suggested Timeline:** Analyze their desired timeline and project scope. Propose a realistic timeline, explaining your reasoning.
  3.  **Potential Project Plan:** Outline a high-level project plan with clear phases (e.g., Initial Consultation, Pre-production, Photoshoot, Post-production & Delivery).

  Keep the response concise, professional, and structured. Assume the budget is in Kenyan Shillings (Ksh) unless the client specified otherwise.
  `,
});

const respondToInquiryFlow = ai.defineFlow(
  {
    name: 'respondToInquiryFlow',
    inputSchema: InquiryInputSchema,
    outputSchema: InquiryOutputSchema,
  },
  async input => {
    const {output} = await inquiryResponsePrompt(input);
    return output!;
  }
);
