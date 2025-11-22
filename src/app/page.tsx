
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import SkillsSection from '@/components/sections/SkillsSection'
import JourneySection from '@/components/sections/JourneySection'
import { ContactSection } from '@/components/sections/ContactSection'
import { fetchGithubActivity, fetchPinnedRepos, fetchGithubStreak } from '@/lib/api/github'

export default async function Home() {
  const [activity, projects, streak] = await Promise.all([
    fetchGithubActivity(),
    fetchPinnedRepos(),
    fetchGithubStreak()
  ]);

  return (
    <div className="min-h-screen">
      <main role="main" aria-label="Portfolio content">
        <HeroSection />
        <AboutSection githubActivity={activity} githubStreak={streak} />
        <ProjectsSection projects={projects} />
        <SkillsSection />
        <JourneySection />
        <ContactSection />
      </main>
    </div>
  );
}
