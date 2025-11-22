import type { Metadata, Viewport } from "next";

// Site configuration
export const siteConfig = {
    name: "Swapnil Ingle",
    title: "Swapnil Ingle - Full Stack Developer | CodersHub Inc",
    description: "Full Stack Developer specializing in Next.js, TypeScript, React, and VS Code extensions. Open-source creator and software engineer at CodersHub Inc.",
    url: "https://portfolio.codershubinc.tech",
    image: "/avatar.jpeg",
    creator: "@codershubinc",
    company: "CodersHub Inc",
    email: "contact@codershubinc.tech",
    social: {
        github: "https://github.com/codershubinc",
        linkedin: "https://www.linkedin.com/in/swapnil-ingle",
        twitter: "https://twitter.com/codershubinc"
    }
};

// Viewport configuration
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#0f172a' },
        { media: '(prefers-color-scheme: dark)', color: '#0f172a' }
    ],
};

// Main metadata configuration
export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.name} - Developer Portfolio`
    },
    description: siteConfig.description,
    keywords: [
        "Swapnil Ingle",
        "Full Stack Developer",
        "React Developer",
        "Next.js Developer",
        "TypeScript Developer",
        "VS Code Extension Developer",
        "CodersHub Inc",
        "Open Source",
        "Software Engineer",
        "Web Developer",
        "JavaScript",
        "Node.js",
        "Portfolio"
    ],
    authors: [{ name: siteConfig.name, url: siteConfig.social.github }],
    creator: siteConfig.name,
    publisher: siteConfig.company,
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteConfig.url,
        title: siteConfig.title,
        description: siteConfig.description,
        siteName: `${siteConfig.name} Portfolio`,
        images: [
            {
                url: siteConfig.image,
                width: 1200,
                height: 630,
                alt: `${siteConfig.name} - Full Stack Developer`,
                type: 'image/jpeg',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.title,
        description: siteConfig.description,
        creator: siteConfig.creator,
        images: [siteConfig.image],
    },
    alternates: {
        canonical: siteConfig.url,
    },
    category: 'technology',
    classification: 'Portfolio Website',
    other: {
        'contact:email': siteConfig.email,
        'profile:first_name': 'Swapnil',
        'profile:last_name': 'Ingle',
        'article:author': siteConfig.name,
    },
};