import 'server-only';
import { Project } from "@/types/project";

const GITHUB_USERNAME = "codershubinc";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export const fetchGithubProfile = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      next: { revalidate: 3600 }
    });
    if (!response.ok) throw new Error("Failed to fetch GitHub profile");
    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub profile:", error);
    return null;
  }
};

export const fetchGithubActivity = async () => {
  try {
    const response = await fetch(`https://github-contributions-api.deno.dev/${GITHUB_USERNAME}.json?flat=true`);
    if (!response.ok) throw new Error("Failed to fetch GitHub activity");
    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub activity:", error);
    return null;
  }
};

export const fetchGithubStreak = async () => {
  try {
    const response = await fetch(`https://github-readme-streak-stats-chi-three.vercel.app/?user=${GITHUB_USERNAME}&theme=radical&nocache=${Date.now()}&type=json`, {
      next: { revalidate: 3600 }
    });
    if (!response.ok) throw new Error("Failed to fetch GitHub streak");
    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub streak:", error);
    return null;
  }
};

export const fetchSpecificRepo = async (repoName: string): Promise<Project | null> => {
  try {
    const response = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}`, {
      next: { revalidate: 86400 } // 24 hours cache
    });
    if (!response.ok) return null;
    const repo = await response.json();
    return {
      id: repo.name,
      title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()),
      slug: repo.name,
      description: repo.description || "No description available",
      techStack: [repo.language, ...(repo.topics || [])].filter(Boolean).slice(0, 4),
      githubUrl: repo.html_url,
      liveUrl: repo.homepage || "",
      featured: true,
      imageUrl: `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`
    };
  } catch (error) {
    console.error(`Error fetching repo ${repoName}:`, error);
    return null;
  }
};

export const fetchPinnedRepos = async (): Promise<Project[]> => {
  // Always fetch myFlix as a featured project
  const myFlix = await fetchSpecificRepo("myFlix");

  if (!GITHUB_TOKEN) {
    console.warn("GITHUB_TOKEN not found, falling back to starred repos");
    const repos = await fetchGithubRepos();
    if (myFlix && !repos.find(r => r.id === myFlix.id)) {
      return [myFlix, ...repos];
    }
    return repos;
  }

  const query = `
    {
      user(login: "${GITHUB_USERNAME}") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              homepageUrl
              languages(first: 1) {
                nodes {
                  name
                }
              }
              repositoryTopics(first: 4) {
                nodes {
                  topic {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
    `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 },
    });

    if (!response.ok) throw new Error("Failed to fetch pinned repos");

    const json = await response.json();
    const pinnedItems = json.data?.user?.pinnedItems?.nodes || [];

    let projects: Project[] = [];

    if (pinnedItems.length > 0) {
      projects = pinnedItems.map((repo: any) => ({
        id: repo.name,
        title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()),
        slug: repo.name,
        description: repo.description || "No description available",
        techStack: [
          repo.languages?.nodes?.[0]?.name,
          ...(repo.repositoryTopics?.nodes?.map((t: any) => t.topic.name) || [])
        ].filter(Boolean).slice(0, 4),
        githubUrl: repo.url,
        liveUrl: repo.homepageUrl || "",
        featured: true,
        imageUrl: `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`
      }));
    } else {
      projects = await fetchGithubRepos();
    }

    // Add myFlix if it's not already in the list
    if (myFlix && !projects.find(p => p.id === myFlix.id)) {
      projects.unshift(myFlix);
    }

    return projects;

  } catch (error) {
    console.error("Error fetching pinned repos:", error);
    const repos = await fetchGithubRepos();
    if (myFlix && !repos.find(r => r.id === myFlix.id)) {
      return [myFlix, ...repos];
    }
    return repos;
  }
};

export const fetchGithubRepos = async (): Promise<Project[]> => {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=6`, {
      next: { revalidate: 3600 }
    });
    if (!response.ok) throw new Error("Failed to fetch GitHub repos");
    const repos = await response.json();

    return repos.map((repo: any) => ({
      id: repo.name,
      title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()),
      slug: repo.name,
      description: repo.description || "No description available",
      techStack: [repo.language, ...(repo.topics || [])].filter(Boolean).slice(0, 4),
      githubUrl: repo.html_url,
      liveUrl: repo.homepage || "",
      featured: false,
      imageUrl: `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`
    }));
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
};
