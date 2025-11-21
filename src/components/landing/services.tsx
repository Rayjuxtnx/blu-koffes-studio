import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Sparkles } from 'lucide-react';

const services = [
  {
    name: 'Portrait Experience',
    description: 'For individuals and couples who want to capture their essence.',
    features: ['1-2 hour session', 'Online gallery of 30+ edited images', 'Choice of location'],
  },
  {
    name: 'Event Storytelling',
    description: 'Documenting your special events with a narrative-driven approach.',
    features: ['Candid & posed shots', 'Full event coverage', 'Highlights video option'],
  },
  {
    name: 'Brand Vision Session',
    description: 'Creating a visual identity for your brand through compelling imagery.',
    features: ['Strategy consultation', 'Product & lifestyle shots', 'Commercial usage rights'],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">AI-Powered Experiences</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Boutique creative services tailored to your story. Let's collaborate.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.name} className="flex flex-col border-secondary/20 hover:border-primary/50 transition-colors duration-300 shadow-lg bg-background group">
              <CardHeader>
                <CardTitle className="text-2xl font-headline">{service.name}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <ul className="space-y-3 mb-6 flex-grow">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-1 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full mt-auto">
                  <Link href="/contact">
                    <Sparkles className="mr-2 h-4 w-4 transition-transform group-hover:scale-125" />
                    Start Inquiry
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
