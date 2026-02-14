"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"
import { GraduationCap } from "lucide-react"

const educationData = [
  {
    degree: "Studying Advanced Diploma in Cyber Defense (ADCD)",
    institution: "Redteam Hacker Academy, Thrissur",
    year: "2025 - Ongoing",
    description:
      "Advanced training in cyber defense, focusing on penetration testing, vulnerability assessment, and ethical hacking methodologies.",
  },
  {
    degree: "Python-Django Full-stack Developer",
    institution: "Grapesgenix Technical Solutions, Thrissur",
    year: "2024 - 2025",
    description:
      "Completed intensive training in full-stack web development using Python and Django, focusing on building scalable, real-world web applications.",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Sree Rama Government Polytechnic College, Thriprayar",
    year: "2023 - 2025",
    description:
      "Focused on core computer engineering concepts including programming, networking, databases, and system development.",
  },
]

function TimelineItem({
  item,
  index,
}: {
  item: (typeof educationData)[0]
  index: number
}) {
  const { ref, isVisible } = useScrollReveal(0.2)
  const isLeft = index % 2 === 0

  return (
    <div ref={ref} className="relative flex items-center w-full mb-12 last:mb-0">
      {/* Desktop layout */}
      <div className="hidden md:flex w-full items-center">
        <div className={cn("w-5/12", isLeft ? "text-right pr-8" : "order-3 text-left pl-8")}>
          <div
            className={cn(
              "group p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-primary/5 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5",
              isVisible
                ? isLeft
                  ? "opacity-100 translate-x-0"
                  : "opacity-100 translate-x-0"
                : isLeft
                ? "opacity-0 -translate-x-8"
                : "opacity-0 translate-x-8"
            )}
          >
            <span className="inline-block text-xs font-mono text-primary mb-2 px-2 py-1 rounded-md bg-primary/10">
              {item.year}
            </span>
            <h3 className="text-lg font-bold text-foreground mb-1">{item.degree}</h3>
            <p className="text-sm text-primary/80 font-medium mb-2">{item.institution}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        </div>

        {/* Center node */}
        <div className="w-2/12 flex justify-center order-2">
          <div
            className={cn(
              "w-12 h-12 rounded-full border-2 border-primary bg-background flex items-center justify-center transition-all duration-500 z-10",
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            )}
          >
            <GraduationCap className="h-5 w-5 text-primary" />
          </div>
        </div>

        <div className={cn("w-5/12", isLeft ? "order-3" : "")} />
      </div>

      {/* Mobile layout */}
      <div className="flex md:hidden w-full items-start gap-4">
        <div className="flex flex-col items-center">
          <div
            className={cn(
              "w-10 h-10 rounded-full border-2 border-primary bg-background flex items-center justify-center transition-all duration-500 shrink-0 z-10",
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            )}
          >
            <GraduationCap className="h-4 w-4 text-primary" />
          </div>
          {index < educationData.length - 1 && (
            <div className="w-0.5 h-full bg-primary/20 mt-2" />
          )}
        </div>
        <div
          className={cn(
            "flex-1 group p-5 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          )}
        >
          <span className="inline-block text-xs font-mono text-primary mb-2 px-2 py-1 rounded-md bg-primary/10">
            {item.year}
          </span>
          <h3 className="text-base font-bold text-foreground mb-1">{item.degree}</h3>
          <p className="text-sm text-primary/80 font-medium mb-2">{item.institution}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  )
}

export function EducationSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="education" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className={cn("text-center mb-16 transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-3">Education</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            My Learning <span className="text-primary">Journey</span>
          </h2>
        </div>

        {/* Timeline line (desktop only) */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" aria-hidden="true" />
          {educationData.map((item, index) => (
            <TimelineItem key={item.degree} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
