import Link from 'next/link';
import { Camera, Instagram, Twitter, Facebook } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import Image from 'next/image';

export function Footer() {
  const Logo = () => (
    <>
    {siteConfig.logoUrl ? (
      <Image src={siteConfig.logoUrl} alt="Blu Koffee Studio Consultancy Logo" width={40} height={40} className="rounded-sm" />
    ) : (
      <Camera className="h-8 w-8 text-primary" />
    )}
    <span className="text-2xl">Blu Koffee Studio Consultancy</span>
    </>
  )

  const navLinks = [
    { href: '/gallery', label: 'Gallery' },
    { href: '/#services', label: 'Experiences' },
    { href: '/#about', label: 'About' },
    { href: '/contact', label: 'Inquire' },
    { href: '/faq', label: 'FAQ' },
  ];

  const socialLinks = [
    { href: '#', icon: Instagram },
    { href: '#', icon: Twitter },
    { href: '#', icon: Facebook },
  ];

  return (
    <footer className="bg-background/80 border-t border-border mt-12 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col items-center justify-center text-center">
          <Link href="/" className="flex flex-col items-center gap-3 font-bold font-headline mb-4">
            <Logo />
          </Link>
          <p className="max-w-md mx-auto text-muted-foreground text-sm mb-6">
            Visual stories crafted with precision, capturing the moments that matter with an artist's eye and a storyteller's heart.
          </p>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((social) => (
                <Link key={social.href} href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                    <social.icon className="h-6 w-6" />
                </Link>
            ))}
          </div>
          <div className="text-xs text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Blu Koffee Studio Consultancy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
