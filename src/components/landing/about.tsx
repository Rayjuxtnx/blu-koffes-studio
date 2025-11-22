import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckCircle } from 'lucide-react';
import { Card } from '../ui/card';

const values = [
  { name: 'Authenticity', description: 'Capturing genuine moments and real connections.' },
  { name: 'Creativity', description: 'Using light and composition to create timeless, artistic visuals.' },
  { name: 'Professionalism', description: 'Delivering a seamless and supportive experience from start to finish.' },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">The Artist Behind the Lens</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            A commitment to authenticity, creativity, and professionalism in every shot.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-background/50">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px]">Core Value</TableHead>
                  <TableHead>Our Philosophy</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {values.map((value) => (
                  <TableRow key={value.name}>
                    <TableCell className="font-medium flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        {value.name}
                    </TableCell>
                    <TableCell className="text-muted-foreground">{value.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Want to know more about the story behind the studio?</p>
            <Button asChild size="lg">
              <Link href="/about">Meet the Artist</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
