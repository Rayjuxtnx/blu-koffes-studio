import Link from 'next/link';
import { Camera, Instagram, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl font-headline mb-4">
              <Camera className="h-6 w-6 text-primary" />
              <span>Visionary Vault</span>
            </Link>
            <p className="text-muted-foreground text-sm">Visual stories crafted with precision.</p>
          </div>
          <div className="md:justify-self-center">
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/gallery" className="text-sm text-muted-foreground hover:text-foreground">Gallery</Link></li>
              <li><Link href="/#services" className="text-sm text-muted-foreground hover:text-foreground">Experiences</Link></li>
              <li><Link href="/#about" className="text-sm text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div className="md:justify-self-end">
            <h4 className="font-semibold text-lg mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Visionary Vault. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
