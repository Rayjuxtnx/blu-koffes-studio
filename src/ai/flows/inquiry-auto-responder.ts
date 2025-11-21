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
  budget: z.string().describe('The estimated budget for the project.'),
  contactInfo: z.string().describe('Contact information of the person submitting the inquiry.'),
});
export type InquiryInput = z.infer<typeof InquiryInputSchema>;

const InquiryOutputSchema = z.object({
  response: z.string().describe('The AI-generated response to the inquiry.'),
  suggestedTimeline: z.string().describe('A suggested timeline for the project.'),
  potentialProjectPlan: z
    .string()
    .describe('A potential project plan based on the inquiry.'),
});
export type InquiryOutput = z.infer<typeof InquiryOutputSchema>;

export async function respondToInquiry(input: InquiryInput): Promise<InquiryOutput> {
  return respondToInquiryFlow(input);
}

const inquiryResponsePrompt = ai.definePrompt({
  name: 'inquiryResponsePrompt',
  input: {schema: InquiryInputSchema},
  output: {schema: InquiryOutputSchema},
  prompt: `You are a professional photographer responding to a custom project inquiry.

  Based on the following information provided by the client, generate a response that includes a suggested timeline and a potential project plan.

  Project Description: {{{projectDescription}}}
  Desired Timeline: {{{desiredTimeline}}}
  Budget: {{{budget}}}
  Contact Information: {{{contactInfo}}}

  Respond in a professional and helpful tone, providing realistic expectations and demonstrating your expertise.
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
