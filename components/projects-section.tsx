"use client"

import Image from "next/image"
import type { CSSProperties } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Flat Vue",
    description:
      "Integrated flat community management system connecting occupants, security, service providers, supermarkets, medical stores, and admin through a centralized communication platform.",
    techStack: ["HTML", "CSS", "Javascript", "Django", "SQLite"],
    image: "/images/projects/flat_vue.png",
    liveUrl: "https://flatvue.onrender.com",
    githubUrl: "#",
  },
  {
    title: "Moview",
    description:
      "Interactive movie review platform where users can share, explore, and engage with others’ opinions on their favorite films.",
    techStack: ["HTML", "CSS", "Javascript", "Django", "SQLite"],
    image: "/images/projects/moview.png",
    liveUrl: "https://moview-vek3.onrender.com",
    githubUrl: "#",
  },
  {
    title: "Xtrain Fitness",
    description:
      "Modern gym management and fitness platform with responsive design and high-performance UI built using Next.js and Tailwind CSS.",
    techStack: ["Next.js", "Tailwind CSS"],
    image: "/images/projects/xtrain_fitness.png",
    liveUrl: "http://xtrain-landingpage.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "WildGuard",
    description:
      "An AI-powered real-time wildlife detection and alert system that protects communities near forest areas through smart monitoring and instant emergency notifications.",
    techStack: ["HTML", "CSS", "Javascript", "Django", "CNN", "Google Teachable Machine", "SQLite"],
    image: "/images/projects/wildguard.png",
    liveUrl: "https://wildguard.pythonanywhere.com/",
    githubUrl: "#",
  },
  {
    title: "MediCare",
    description:
      "A QR-powered outpatient queue management system that streamlines hospital check-ins, reduces wait times, and enhances patient care with real-time tracking and instant alerts.",
    techStack: ["HTML", "CSS", "Javascript", "Django", "SQLite"],
    image: "/images/projects/medicare.png",
    liveUrl: "https://medicare-czh6.onrender.com",
    githubUrl: "#",
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const imageOnRight = index % 2 === 1

  return (
    <article
      className="project-sticky-card group relative min-w-0 overflow-hidden rounded-2xl border border-border/70 bg-card shadow-lg shadow-background/10 transition-[border-color,box-shadow] duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
      style={{ "--stack-index": index } as CSSProperties}
    >
      <div className="grid min-w-0 grid-cols-1 md:grid-cols-2 md:items-stretch">
        {/* Alternate the screenshot between left and right on wider screens. */}
        <div className={cn(
          "relative min-h-[210px] w-full overflow-hidden bg-muted sm:min-h-[260px] md:min-h-[340px]",
          imageOnRight && "md:order-2"
        )}>
          <Image
            src={project.image}
            alt={`${project.title} project screenshot`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 560px"
          />
          <div className="absolute inset-0 bg-background/10 transition-colors duration-500 group-hover:bg-transparent" aria-hidden="true" />
        </div>

        <div className={cn(
          "flex min-w-0 flex-col justify-center p-5 sm:p-7 lg:p-9",
          imageOnRight && "md:order-1"
        )}>
          <h3 className="mb-3 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary sm:text-2xl">
            {project.title}
          </h3>
          <p className="mb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {project.description}
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-xs text-primary"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-md hover:shadow-primary/25"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Live Demo
            </a>
            {project.githubUrl !== "#" && <a
              href={project.githubUrl}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>}
          </div>
        </div>
      </div>
    </article>
  )
}

export function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="projects" className="relative px-4 py-20 sm:px-6 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className={cn("text-center mb-16 transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-3">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground text-balance">
            Featured <span className="text-primary">Work</span>
          </h2>
        </div>

        <div className="project-sticky-stack mx-auto max-w-6xl">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
