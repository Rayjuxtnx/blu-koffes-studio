import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const stories = [
  {
    id: 'showcase1',
    title: 'The Human Moment',
    description: 'Exploring the depth of human emotion through candid portraiture. Each frame seeks to tell an unspoken story.',
    imageHint: 'portrait emotion',
  },
  {
    id: 'showcase2',
    title: 'City Breathes',
    description: "Capturing the relentless energy and quiet solitude of urban landscapes. The city isn't just a place; it's a living character.",
    imageHint: 'city night',
  },
  {
    id: 'showcase3',
    title: 'Design in Focus',
    description: 'A study of form, light, and shadow. Finding beauty in the details of architecture and product design.',
    imageHint: 'architecture shadow',
  },
];

export function Showcase() {
  return (
    <section id="showcase" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Story-Based Showcase</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            More than a gallery, this is a journey through visual narratives.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 md:gap-24">
          {stories.map((story, index) => {
            const image = PlaceHolderImages.find((img) => img.id === story.id);
            return (
              <div key={story.id} className="flex flex-col md:flex-row items-center gap-8 md:gap-12 even:md:flex-row-reverse group">
                <div className="md:w-1/2 w-full">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={story.title}
                      width={800}
                      height={600}
                      className="rounded-lg object-cover aspect-[4/3] shadow-2xl shadow-primary/20 transition-all duration-300 group-hover:shadow-primary/40 group-hover:scale-105"
                      data-ai-hint={story.imageHint}
                    />
                  )}
                </div>
                <div className="md:w-1/2 w-full text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-semibold font-headline text-primary mb-3">{story.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{story.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
