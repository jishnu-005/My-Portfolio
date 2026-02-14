"use client"

import Image from "next/image"
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
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const { ref, isVisible } = useScrollReveal(0.15)

  return (
    <div
      ref={ref}
      className={cn(
        "group relative p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-primary/5 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" aria-hidden="true" />

      {/* Project Image */}
      <div className="relative w-full h-44 rounded-lg overflow-hidden mb-5 border border-border/30">
        <Image
          src={project.image}
          alt={`${project.title} project screenshot`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-mono rounded-full border border-primary/20 bg-primary/5 text-primary"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <a
          href={project.liveUrl}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-primary/25"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Live Demo
        </a>
        <a
          href={project.githubUrl}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground border border-border rounded-lg transition-all duration-300 hover:border-primary/50 hover:text-primary"
        >
          <Github className="h-3.5 w-3.5" />
          GitHub
        </a>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className={cn("text-center mb-16 transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-3">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Featured <span className="text-primary">Work</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
