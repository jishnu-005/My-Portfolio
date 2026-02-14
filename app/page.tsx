"use client"

import { AnimatedBackground } from "@/components/animated-background"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Page() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px bg-border/50" />
        </div>
        <AboutSection />
        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px bg-border/50" />
        </div>
        <EducationSection />
        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px bg-border/50" />
        </div>
        <SkillsSection />
        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px bg-border/50" />
        </div>
        <ProjectsSection />
        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px bg-border/50" />
        </div>
        <ContactSection />
      </main>
      <Footer />
      <ThemeToggle />
    </>
  )
}
