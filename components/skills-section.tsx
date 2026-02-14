"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"
import { Monitor, Server, Database, ShieldCheck } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Monitor,
    skills: [
      { name: "HTML / CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 88 },
      { name: "Next.js", level: 82 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Python", level: 90 },
      { name: "Django", level: 85 },
      { name: "Node.js", level: 82 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 45 },
    ],
  },
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    skills: [
      { name: "Kali Linux", level: 92 },
      { name: "Nmap", level: 88 },
      { name: "Metasploit", level: 85 },
      { name: "Burp Suite", level: 83 },
    ],
  },
]

function SkillBar({ name, level, isVisible, delay }: { name: string; level: number; isVisible: boolean; delay: number }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs font-mono text-primary">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}

function SkillCard({
  category,
  index,
}: {
  category: (typeof skillCategories)[0]
  index: number
}) {
  const { ref, isVisible } = useScrollReveal(0.2)

  return (
    <div
      ref={ref}
      className={cn(
        "group p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-primary/5 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
          <category.icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
      </div>
      {category.skills.map((skill, i) => (
        <SkillBar
          key={skill.name}
          name={skill.name}
          level={skill.level}
          isVisible={isVisible}
          delay={index * 100 + i * 150}
        />
      ))}
    </div>
  )
}

export function SkillsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className={cn("text-center mb-16 transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-3">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Technologies <span className="text-primary">{"&"}</span> Tools
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
