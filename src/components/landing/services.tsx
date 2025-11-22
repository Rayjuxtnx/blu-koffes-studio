import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Camera, Heart, Cake, Users, Gift, GraduationCap } from 'lucide-react';

const services = [
  {
    name: 'Studio Portrait',
    description: 'Classic and timeless portraits captured in a professional studio setting.',
    icon: Camera,
  },
  {
    name: 'Wedding / Proposals',
    description: 'Capturing the magic of your most important day with elegance and emotion.',
    icon: Heart,
  },
  {
    name: 'Birthdays',
    description: 'Fun and vibrant photos to celebrate another year of life and create lasting memories.',
    icon: Cake,
  },
  {
    name: 'Family Photos',
    description: 'Beautifully composed group photos that your family will cherish for generations.',
    icon: Users,
  },
  {
    name: 'Baby Bump',
    description: 'Tender and artistic maternity shoots to celebrate the beauty of pregnancy.',
    icon: Gift,
  },
  {
    name: 'Graduations',
    description: 'Commemorate your academic achievements with proud and professional portraits.',
    icon: GraduationCap,
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Photography Experiences</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Boutique creative services tailored to your story. Let's collaborate.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.name} className="flex flex-col bg-background border-secondary/20 transition-all duration-300 hover:shadow-primary/20 hover:shadow-2xl hover:-translate-y-2 group text-center">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4 ring-4 ring-primary/20 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-headline">{service.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                <Button asChild className="w-full mt-auto">
                  <Link href="/contact">
                    <Sparkles className="mr-2 h-4 w-4 transition-transform group-hover:animate-ping" />
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
