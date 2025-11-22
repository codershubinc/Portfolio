
import NavBar from '@/components/custom/navBar'
import HeroSection from '@/components/custom/heroSection'
import AboutSection from '@/components/sections/AboutSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import Ski5lsSection from '@/components/sections/SkillsSection'
import JourneySection from '@/components/sections/JourneySection'
import { ContactSection, Footer } from '@/components/sections/ContactSection'
import { fetchGithubProfile, fetchGithubActivity, fetchPinnedRepos } from '@/lib/api/github'

export default async function Home() {
  const [profile, activity, projects] = await Promise.all([
    fetchGithubProfile(),
    fetchGithubActivity(),
    fetchPinnedRepos()
  ]);

  return (
    <div className="min-h-screen">
      <header>
        <NavBar />
      </header>
      <main role="main" aria-label="Portfolio content">
        <HeroSection githubProfile={profile} />
        <AboutSection githubActivity={activity} />
        <ProjectsSection projects={projects} />
        <Ski5lsSection />
        <JourneySection />
        <ContactSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
