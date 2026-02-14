"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Send } from "lucide-react"

const typingTexts = [
  "Building secure web applications.",
  "Penetration testing & vulnerability assessment.",
  "Crafting elegant user interfaces.",
  "Building Custom Softwares",
]

export function HeroSection() {
  const [currentText, setCurrentText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = typingTexts[textIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(charIndex + 1), 50)
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(charIndex - 1), 30)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setTextIndex((prev) => (prev + 1) % typingTexts.length)
    }

    setCurrentText(current.substring(0, charIndex))

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20"
    >
      {/* Floating glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" aria-hidden="true" />
      <div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-mono mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Available for freelance work
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 animate-fade-up text-balance" style={{ animationDelay: "0.1s" }}>
          Full-Stack Developer{" "}
          <span className="text-primary">{"&"}</span>{" "}
          <br className="hidden sm:block" />
          Ethical Hacker
        </h1>

        <div className="h-8 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <span className="font-mono text-muted-foreground text-lg">
            {currentText}
            <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-blink align-middle" />
          </span>
        </div>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 animate-fade-up leading-relaxed" style={{ animationDelay: "0.3s" }}>
          I craft secure, scalable, and performant web applications while identifying
          vulnerabilities before the bad actors do. Where code meets security.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-3.5 border border-border bg-card/50 backdrop-blur-sm text-foreground rounded-lg font-medium transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-0.5"
          >
            Contact Me
            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
