'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: "What is your photography style?",
    answer: "My style is a blend of cinematic storytelling and authentic photojournalism. I focus on capturing genuine emotions and moments, using light and composition to create a timeless, artistic feel."
  },
  {
    question: "How long does it take to receive our photos?",
    answer: "For standard portrait sessions, the turnaround time is typically 2-3 weeks. For weddings and larger events, it's usually 6-8 weeks. You'll receive a private online gallery with your high-resolution, edited images."
  },
  {
    question: "Do you travel for shoots?",
    answer: "Absolutely! I love traveling for projects. Travel fees are assessed on a case-by-case basis, depending on the location and duration. Let's discuss your vision!"
  },
  {
    question: "What kind of equipment do you use?",
    answer: "I use top-of-the-line professional camera bodies and a variety of prime and zoom lenses to ensure the highest quality images. I also have a full range of lighting and audio equipment for any situation."
  },
  {
    question: "Can we request specific shots?",
    answer: "Yes, definitely! I encourage you to share your ideas and any specific shots you have in mind. We'll work together to create a shot list to ensure we capture everything you're dreaming of."
  },
  {
    question: "How do we book you?",
    answer: "You can start by filling out the inquiry form on our contact page. From there, we'll schedule a brief call to discuss your needs and make sure we're a good fit. A signed contract and a deposit are required to secure your date."
  }
];

export function Faq() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Frequently Asked Questions</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Have questions? We have answers. Here are some of the things we get asked most often.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map(faq => (
              <AccordionItem value={faq.question} key={faq.question}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
