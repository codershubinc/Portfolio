import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-foreground">
          CodersHub  Inc
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/projects" className="text-sm font-medium text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors">
            Projects
          </Link>
          <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors">
            Contact
          </Link>
          <ThemeToggle />
          <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white border-none">
            <Link href="/contact">Hire Me</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
