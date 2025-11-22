import { siteConfig } from "@/data/site";

// Helper to generate mock contribution data
const generateContributions = () => {
    const contributions = [];
    const today = new Date();
    const oneYearAgo = new Date(today);
    oneYearAgo.setFullYear(today.getFullYear() - 1);

    for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
        const dateStr = d.toISOString().split('T')[0];
        // Mock random contributions
        const count = Math.random() > 0.5 ? Math.floor(Math.random() * 5) + 1 : 0;
        contributions.push({
            color: count > 0 ? "#9be9a8" : "#ebedf0",
            contributionCount: count,
            contributionLevel: count > 0 ? "FIRST_QUARTILE" : "NONE",
            date: dateStr
        });
    }
    return contributions;
};

export const terminalData = {
    overview: {
        endpoint: "https://api.codershub.inc/v1/portfolio",
        response: {
            status: 200,
            message: "OK",
            data: {
                organization: "CodersHub Inc",
                type: "Open Source Collective",
                mission: "Building Developer Excellence",
                stack: ["Next.js", "TypeScript", "TailwindCSS", "Node.js"],
                maintainer: {
                    name: siteConfig.author.name,
                    github: siteConfig.author.github
                },
                github_stats: {
                    public_repos: 64,
                    followers: 5,
                    bio: "just coding && listening music @codershubinc",
                    location: "Earth",
                    blog: "codershubinc.tech",
                    avatar_url: "https://avatars.githubusercontent.com/u/90494823?v=4"
                },
                projects: {
                    count: "10+",
                    status: "Active Development",
                    link: "/projects"
                }
            },
            timestamp: new Date().toISOString()
        }
    },
    stack: {
        endpoint: "https://api.codershub.inc/v1/stack",
        response: {
            status: 200,
            data: {
                frontend: ["Next.js", "React", "TailwindCSS", "Framer Motion"],
                backend: ["Node.js", "Bun", "PostgreSQL", "Redis"],
                devops: ["Docker", "GitHub Actions", "Vercel", "AWS"],
                tools: ["VS Code", "Git", "Figma"]
            },
            timestamp: new Date().toISOString()
        }
    },
    languages: {
        endpoint: "https://api.codershub.inc/v1/languages",
        response: {
            status: 200,
            data: [
                { name: "TypeScript", proficiency: "Expert", usage: "90%" },
                { name: "Python", proficiency: "Advanced", usage: "75%" },
                { name: "Rust", proficiency: "Intermediate", usage: "40%" },
                { name: "Go", proficiency: "Intermediate", usage: "35%" }
            ],
            timestamp: new Date().toISOString()
        }
    },
    projects: {
        endpoint: "https://api.codershub.inc/v1/projects",
        response: {
            status: 200,
            data: [
                { id: 1, name: "VS Music", type: "VS Code Extension", stars: "1.2k+" },
                { id: 2, name: "GitHub New Tab", type: "Browser Addon", users: "5k+" },
                { id: 3, name: "Portfolio", type: "Web App", stack: "Next.js" }
            ],
            timestamp: new Date().toISOString()
        }
    },
    github: {
        endpoint: "https://api.github.com/users/codershubinc",
        response: {
            status: 200,
            data: {
                login: "codershubinc",
                public_repos: 42,
                followers: 150,
                following: 20,
                created_at: "2020-01-01T00:00:00Z"
            },
            timestamp: new Date().toISOString()
        }
    },
    activity: {
        endpoint: "https://github-contributions-api.deno.dev/codershubinc.json?flat=true",
        response: {
            status: 200,
            data: {
                contributions: generateContributions(),
                totalContributions: 1169
            },
            timestamp: new Date().toISOString()
        }
    }
};

export type TerminalData = typeof terminalData;
export type TerminalEndpoint = keyof TerminalData;
