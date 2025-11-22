export interface Project {
    id: string;
    title: string;
    slug: string;
    techStack: string[];
    description: string;
    githubUrl: string;
    liveUrl: string;
    icon?: string; // SVG string or icon name
    tagline?: string;
    featured?: boolean;
    downloadLink?: string;
}
