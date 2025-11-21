'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle } from 'lucide-react';

const sessionTypes = [
  { id: 'portrait', name: 'Portrait Experience' },
  { id: 'event', name: 'Event Storytelling' },
  { id: 'brand', name: 'Brand Vision Session' },
];

const bookingSchema = z.object({
  sessionType: z.string().min(1, 'Please select a session type'),
  date: z.date({ required_error: 'Please select a date' }),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export function Booking() {
  const [isBooked, setIsBooked] = useState(false);
  const { toast } = useToast();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = (data: BookingFormValues) => {
    console.log('Booking submitted:', data);
    setIsBooked(true);
    toast({
      title: 'Booking request sent!',
      description: 'We will confirm your booking via email shortly.',
    });
  };

  if (isBooked) {
    return (
      <section id="booking" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <Card className="max-w-2xl mx-auto p-8 bg-card border-secondary/20">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
                <p className="text-muted-foreground mb-6">Your booking request has been received. We'll be in touch within 24 hours to confirm the details.</p>
                <Button onClick={() => { setIsBooked(false); reset(); }}>Book Another Session</Button>
            </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Book Your Experience</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Let's create something beautiful together.
          </p>
        </div>
        <Card className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-card border-secondary/20">
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6">
              <div>
                <Label className="text-lg font-semibold mb-4 block">1. Choose Session Type</Label>
                <Controller
                  name="sessionType"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="space-y-3">
                      {sessionTypes.map((type) => (
                        <div key={type.id} className="flex items-center space-x-3">
                          <RadioGroupItem value={type.id} id={type.id} />
                          <Label htmlFor={type.id} className="font-normal">{type.name}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  )}
                />
                {errors.sessionType && <p className="text-destructive text-sm mt-2">{errors.sessionType.message}</p>}
              </div>
              <div>
                <Label className="text-lg font-semibold mb-4 block">3. Your Details</Label>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Controller name="name" control={control} render={({ field }) => <Input id="name" {...field} />} />
                    {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Controller name="email" control={control} render={({ field }) => <Input id="email" type="email" {...field} />} />
                    {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6 flex flex-col">
                <div>
                  <Label className="text-lg font-semibold mb-4 block">2. Select Date</Label>
                  <Controller
                    name="date"
                    control={control}
                    render={({ field }) => (
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                        initialFocus
                        className="rounded-md border"
                      />
                    )}
                  />
                  {errors.date && <p className="text-destructive text-sm mt-2">{errors.date.message}</p>}
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full mt-auto" size="lg">Request Booking</Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}
