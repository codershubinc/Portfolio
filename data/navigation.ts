import { siteConfig } from "./site";

export interface NavItem {
    title: string;
    href: string;
    external?: boolean;
}

export interface NavigationConfig {
    main: NavItem[];
    footer: {
        quickLinks: NavItem[];
        resources: NavItem[];
        legal: NavItem[];
    };
}

export const navigationConfig: NavigationConfig = {
    main: [
        { title: "Projects", href: "/projects" },
        { title: "Contact", href: "/contact" },
    ],
    footer: {
        quickLinks: [
            { title: "All Projects", href: "/projects" },
            { title: "Contact", href: "/contact" },
            { title: "GitHub Organization", href: siteConfig.links.githubOrg, external: true },
        ],
        resources: [
            { title: "Source Code", href: siteConfig.links.sourceCode, external: true },
            { title: "Report Issues", href: siteConfig.links.githubIssues, external: true },
            { title: "About Creator", href: siteConfig.author.url, external: true },
        ],
        legal: [
            { title: "Privacy Policy", href: "/privacy" },
            { title: "Terms of Service", href: "/terms" },
        ]
    }
};
