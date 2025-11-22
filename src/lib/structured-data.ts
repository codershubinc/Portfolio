import { siteConfig } from './seo';

// JSON-LD Structured Data for SEO
export const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": siteConfig.name,
    "jobTitle": "Full Stack Developer",
    "description": siteConfig.description,
    "url": siteConfig.url,
    "image": `${siteConfig.url}${siteConfig.image}`,
    "sameAs": [
        siteConfig.social.github,
        siteConfig.social.linkedin,
        siteConfig.social.twitter
    ],
    "worksFor": {
        "@type": "Organization",
        "name": siteConfig.company,
        "url": "https://codershubinc.tech"
    },
    "knowsAbout": [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "VS Code Extensions",
        "Full Stack Development",
        "Open Source Development",
        "Web Development"
    ],
    "hasOccupation": {
        "@type": "Occupation",
        "name": "Software Developer",
        "occupationLocation": {
            "@type": "Place",
            "name": "Remote"
        }
    }
};

// Website Schema
export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": `${siteConfig.name} Portfolio`,
    "url": siteConfig.url,
    "description": siteConfig.description,
    "author": {
        "@type": "Person",
        "name": siteConfig.name
    },
    "inLanguage": "en-US"
};

// Combined JSON-LD data
export const structuredData = {
    "@context": "https://schema.org",
    "@graph": [personSchema, websiteSchema]
};