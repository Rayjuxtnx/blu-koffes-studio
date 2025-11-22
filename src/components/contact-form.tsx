'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { createInquiry } from '@/app/actions';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Instagram, Loader2, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react';

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending} className="w-full">
            {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
            {pending ? 'Submitting...' : 'Get AI-Powered Response'}
        </Button>
    );
}

export function ContactForm() {
  const initialState = { message: null, errors: {}, data: null };
  const [state, dispatch] = useFormState(createInquiry, initialState);

  return (
    <section id="contact" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Contact & Inquiries</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Have a custom project in mind? Let our AI assistant help you get started.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
                <Card className="bg-background">
                    <CardHeader>
                        <CardTitle>Custom Project Inquiry</CardTitle>
                        <CardDescription>Fill out the form and our AI will generate a preliminary project plan and timeline for you.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {!state.data ? (
                        <form action={dispatch} className="space-y-4">
                            <div>
                                <Label htmlFor="projectDescription">Project Description</Label>
                                <Textarea id="projectDescription" name="projectDescription" placeholder="Tell us about your project..." rows={4} />
                                {state.errors?.projectDescription && <p className="text-destructive text-sm mt-1">{state.errors.projectDescription}</p>}
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="desiredTimeline">Desired Timeline</Label>
                                    <Input id="desiredTimeline" name="desiredTimeline" placeholder="e.g., 2-3 weeks" />
                                    {state.errors?.desiredTimeline && <p className="text-destructive text-sm mt-1">{state.errors.desiredTimeline}</p>}
                                </div>
                                <div>
                                    <Label htmlFor="budget">Estimated Budget</Label>
                                    <Input id="budget" name="budget" placeholder="e.g., $1000 - $1500" />
                                    {state.errors?.budget && <p className="text-destructive text-sm mt-1">{state.errors.budget}</p>}
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="contactInfo">Your Email</Label>
                                <Input id="contactInfo" name="contactInfo" type="email" placeholder="you@example.com" />
                                {state.errors?.contactInfo && <p className="text-destructive text-sm mt-1">{state.errors.contactInfo}</p>}
                            </div>
                            <SubmitButton />
                            {state.message && state.errors && <p className="text-destructive text-sm mt-2">{state.message}</p>}
                        </form>
                        ) : (
                        <div className="space-y-6 animate-in fade-in-50 duration-500">
                             <h3 className="text-xl font-semibold text-primary">AI-Generated Proposal</h3>
                             <p className="text-sm text-green-400">{state.message}</p>
                             <div className="space-y-4 text-sm p-4 border rounded-lg bg-background/50">
                                <h4 className="font-semibold">Initial Response:</h4>
                                <p className="text-muted-foreground">{state.data.response}</p>
                                <h4 className="font-semibold pt-2">Suggested Timeline:</h4>
                                <p className="text-muted-foreground">{state.data.suggestedTimeline}</p>
                                <h4 className="font-semibold pt-2">Potential Project Plan:</h4>
                                <p className="text-muted-foreground whitespace-pre-wrap">{state.data.potentialProjectPlan}</p>
                             </div>
                             <p className="text-xs text-muted-foreground italic">This is an automated response. A team member will be in touch with you shortly at your provided email.</p>
                        </div>
                        )}
                    </CardContent>
                </Card>
            </div>
            <div className="lg:col-span-2 space-y-8">
                <div>
                    <h3 className="text-2xl font-semibold font-headline mb-4">Direct Contact</h3>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary" /><a href="mailto:contact@blukoffeestudioconsultancy.com" className="text-muted-foreground hover:text-foreground">contact@blukoffeestudioconsultancy.com</a></div>
                        <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /><span className="text-muted-foreground">(555) 123-4567</span></div>
                        <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" /><span className="text-muted-foreground">New York, NY</span></div>
                        <div className="flex items-center gap-3 pt-2"><Instagram className="h-5 w-5 text-primary" /><a href="#" className="text-muted-foreground hover:text-foreground">@blukoffeestudio</a></div>
                        <div className="flex items-center gap-3"><Twitter className="h-5 w-5 text-primary" /><a href="#" className="text-muted-foreground hover:text-foreground">@blukoffeestudio</a></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
