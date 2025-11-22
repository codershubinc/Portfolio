
import NavBar from '@/components/custom/navBar'
import HeroSection from '@/components/custom/heroSection'
import AboutSection from '@/components/sections/AboutSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import SkillsSection from '@/components/sections/SkillsSection'
import JourneySection from '@/components/sections/JourneySection'
import { ContactSection, Footer } from '@/components/sections/ContactSection'
import { fetchGithubProfile, fetchGithubActivity } from '@/lib/github'

export default async function Home() {
  const [profile, activity] = await Promise.all([
    fetchGithubProfile(),
    fetchGithubActivity()
  ]);

  return (
    <div className="min-h-screen">
      <header>
        <NavBar />
      </header>
      <main role="main" aria-label="Portfolio content">
        <HeroSection githubProfile={profile} />
        <AboutSection githubActivity={activity} />
        <ProjectsSection />
        <SkillsSection />
        <JourneySection />
        <ContactSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
