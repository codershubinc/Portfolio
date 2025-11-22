export interface SiteConfig {
    name: string;
    tagline: string;
    description: string;
    url: string;
    author: {
        name: string;
        url: string;
        twitter: string;
        github: string;
    };
    social: {
        github: string;
        twitter: string;
        portfolio: string;
        email: string;
    };
}

export const siteConfig: SiteConfig = {
    name: "CodersHub Inc",
    tagline: "Smart, open-source utilities for the modern developer",
    description: "A collection of practical, open-source projects designed to solve real-world developer problems.",
    url: "https://codershubinc.tech",
    author: {
        name: "Swapnil Ingle",
        url: "https://portfolio.codershubinc.tech",
        twitter: "https://twitter.com/codershubinc",
        github: "https://github.com/codershubinc"
    },
    social: {
        github: "https://github.com/codershubinc",
        twitter: "https://twitter.com/codershubinc",
        portfolio: "https://portfolio.codershubinc.tech",
        email: "mailto:ingleswapnil2004@gmail.com"
    }
};
