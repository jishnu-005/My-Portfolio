"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight, MoveRight } from "lucide-react"

const typingTexts = [
  "Building secure web applications.",
  "Penetration testing & vulnerability assessment.",
  "Crafting elegant user interfaces.",
  "Building custom software.",
]

export function HeroSection() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i + 1) % typingTexts.length), 3600)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="leap-hero scroll-mt-24">
      <div className="leap-hero-main">
        <div className="leap-hero-copy">
          <div className="leap-kicker"><span className="leap-status" /> AVAILABLE FOR FREELANCE WORK <span className="leap-index">/ 2026</span></div>
          <h1>Building Better<br/><span>Digital</span> Products<span className="leap-period">.</span></h1>
          <p className="leap-hero-intro">Full-Stack Developer &amp; Ethical Hacker. I build great digital experiences that are thoughtful, fast, and secure.</p>
          <div className="leap-hero-actions">
            <a className="leap-button leap-button-yellow" href="#projects">Explore my work <ArrowUpRight size={19}/></a>
            <a className="leap-button leap-button-purple" href="#contact">Let&apos;s talk <MoveRight size={19}/></a>
          </div>
        </div>
        <div className="leap-hero-side" aria-label="Development and security specializations">
          <div className="leap-side-head"><span>WHAT I DO</span><span>01 — 03</span></div>
          <div className="leap-feature-row"><span className="leap-feature-number">01</span><div><h3>Full-stack development</h3><p>Ideas turned into scalable, delightful web experiences.</p></div><ArrowUpRight size={21}/></div>
          <div className="leap-feature-row"><span className="leap-feature-number">02</span><div><h3>Cybersecurity</h3><p>Secure by design, tested against real-world threats.</p></div><ArrowUpRight size={21}/></div>
          <div className="leap-feature-row"><span className="leap-feature-number">03</span><div><h3>Digital experiences</h3><p>Interfaces where clarity and performance come first.</p></div><ArrowUpRight size={21}/></div>
          <div className="leap-hero-note"><span className="leap-purple-dot"/> {typingTexts[index]}</div>
        </div>
      </div>
      <div className="leap-hero-bottom"><span>DESIGN. DEVELOP. SECURE.</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>
  )
}
