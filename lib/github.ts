
export const fetchGithubProfile = async () => {
    try {
        const response = await fetch("https://api.github.com/users/codershubinc", {
            next: { revalidate: 3600 } // Cache for 1 hour
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
        const response = await fetch("https://github-contributions-api.deno.dev/codershubinc.json?flat=true");
        if (!response.ok) throw new Error("Failed to fetch GitHub activity");
        return await response.json();
    } catch (error) {
        console.error("Error fetching GitHub activity:", error);
        return null;
    }
};
