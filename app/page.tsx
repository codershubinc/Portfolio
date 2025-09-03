
import NavBar from '@/components/custom/navBar'
import HeroSection from '@/components/custom/heroSection'
import AboutSection from '@/components/sections/AboutSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import SkillsSection from '@/components/sections/SkillsSection'
import JourneySection from '@/components/sections/JourneySection'
import { ContactSection, Footer } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <JourneySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
