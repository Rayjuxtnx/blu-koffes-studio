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

  const contactMethods = [
    { icon: Mail, text: 'blukoffee1@gmail.com', href: 'mailto:blukoffee1@gmail.com' },
    { icon: Phone, text: '+254795107535 (Call/WhatsApp)', href: 'tel:+254795107535' },
    { icon: MapPin, text: 'New York, NY' },
    { icon: Instagram, text: '@blukoffeestudio', href: '#' },
    { icon: Twitter, text: '@blukoffeestudio', href: '#' },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Contact & Inquiries</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Have a custom project in mind? Let our AI assistant help you get started or reach out directly below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
            <div className="mb-12">
                <h3 className="text-2xl font-semibold font-headline text-center mb-8">Direct Contact</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                    {contactMethods.slice(0,3).map((method, index) => (
                        <div key={index} className="bg-background/50 p-6 rounded-lg flex flex-col items-center justify-center">
                            <method.icon className="h-8 w-8 text-primary mb-3" />
                            {method.href ? (
                                <a href={method.href} className="text-sm text-muted-foreground hover:text-foreground">{method.text}</a>
                            ) : (
                                <span className="text-sm text-muted-foreground">{method.text}</span>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex justify-center gap-6 mt-6">
                     {contactMethods.slice(3).map((method, index) => (
                        <a key={index} href={method.href} className="text-muted-foreground hover:text-primary transition-colors">
                            <method.icon className="h-6 w-6" />
                        </a>
                    ))}
                </div>
            </div>

            <Card className="bg-background">
                <CardHeader className="text-center">
                    <CardTitle>Custom Project Inquiry</CardTitle>
                    <CardDescription>Fill out the form and our AI will generate a preliminary project plan and timeline for you.</CardDescription>
                </CardHeader>
                <CardContent>
                    {!state.data ? (
                    <form action={dispatch} className="space-y-4">
                        <div>
                            <Label htmlFor="projectDescription" className="sr-only">Project Description</Label>
                            <Textarea id="projectDescription" name="projectDescription" placeholder="Tell us about your project..." rows={4} />
                            {state.errors?.projectDescription && <p className="text-destructive text-sm mt-1">{state.errors.projectDescription}</p>}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="desiredTimeline" className="sr-only">Desired Timeline</Label>
                                <Input id="desiredTimeline" name="desiredTimeline" placeholder="e.g., 2-3 weeks" />
                                {state.errors?.desiredTimeline && <p className="text-destructive text-sm mt-1">{state.errors.desiredTimeline}</p>}
                            </div>
                            <div>
                                <Label htmlFor="budget" className="sr-only">Estimated Budget</Label>
                                <Input id="budget" name="budget" placeholder="e.g., $1000 - $1500" />
                                {state.errors?.budget && <p className="text-destructive text-sm mt-1">{state.errors.budget}</p>}
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="contactInfo" className="sr-only">Your Email</Label>
                            <Input id="contactInfo" name="contactInfo" type="email" placeholder="you@example.com" />
                            {state.errors?.contactInfo && <p className="text-destructive text-sm mt-1">{state.errors.contactInfo}</p>}
                        </div>
                        <SubmitButton />
                        {state.message && state.errors && <p className="text-destructive text-sm mt-2 text-center">{state.message}</p>}
                    </form>
                    ) : (
                    <div className="space-y-6 animate-in fade-in-50 duration-500 text-center">
                         <h3 className="text-xl font-semibold text-primary">AI-Generated Proposal</h3>
                         <p className="text-sm text-green-400">{state.message}</p>
                         <div className="space-y-4 text-sm p-4 border rounded-lg bg-background/50 text-left">
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
      </div>
    </section>
  );
}
