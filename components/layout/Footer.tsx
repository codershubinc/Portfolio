import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/site';
import { SocialMediaLinks } from '@/components/ui/SocialIcon';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background text-foreground">
      {/* Main Footer Content */}
      <div className="py-12 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex flex-row items-center gap-4 mb-6">
                <Image
                  src="/assets/ch.ico.png"
                  alt="CodersHub Inc Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-xl font-bold">{siteConfig.name}</span>
              </div>
              <p className="text-muted-foreground text-lg mb-6 max-w-md leading-relaxed">
                {siteConfig.description}
              </p>
              <div className="flex flex-row items-center justify-start">
                <SocialMediaLinks
                  size="lg"
                  color="gray"
                  hoverEffect={true}
                  orientation="horizontal"
                  gap="lg"
                />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">
                Quick Links
              </h3>
              <nav className="space-y-4">
                <Link
                  href="/projects"
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  All Projects
                </Link>
                <Link
                  href="/contact"
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Contact
                </Link>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  GitHub Organization
                </a>
              </nav>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-xl font-semibold mb-6">
                Resources
              </h3>
              <nav className="space-y-4">
                <a
                  href="https://github.com/codershubinc/codershubinc.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Source Code
                </a>
                <a
                  href="https://github.com/codershubinc/codershubinc.tech/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Report Issues
                </a>
                <a
                  href={siteConfig.author.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  About Creator
                </a>
              </nav>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-border">
            <div className="max-w-md mx-auto text-center lg:text-left lg:mx-0">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Stay Updated
              </h3>
              <p className="text-muted-foreground mb-6 text-sm md:text-base">
                Get notified about new projects and updates. No spam, ever.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-sm md:text-base"
                />
                <button className="px-4 md:px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-lg transition-colors duration-200 text-sm md:text-base">
                  Subscribe
                </button>
              </div>
              <p className="text-muted-foreground text-xs md:text-sm mt-3">
                By subscribing, you agree to our privacy policy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6 md:py-8 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 text-muted-foreground text-sm md:text-base">
              <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
              <div className="flex flex-row items-center gap-4 md:gap-6">
                <Link href="/privacy" className="hover:text-primary transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-primary transition-colors duration-200">
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2 text-muted-foreground text-sm md:text-base">
              <span>Made with</span>
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span>by</span>
              <a
                href={siteConfig.author.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-primary transition-colors duration-200"
              >
                {siteConfig.author.name}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
