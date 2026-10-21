"use client"

import {
  Shield,
  Code2,
  Globe,
  Rocket,
  Monitor,
  ShoppingCart,
} from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building end-to-end web applications with modern frameworks, scalable APIs, and clean architecture.",
    accent: "from-orange-500/10 to-amber-100/20",
    iconBg: "bg-orange-500/10 text-orange-700 group-hover:bg-orange-500/20",
    borderHover: "hover:border-orange-500/40",
    number: "01",
  },
  {
    icon: Shield,
    title: "Penetration Testing",
    description:
      "Identifying vulnerabilities through ethical hacking, security assessments, and comprehensive reporting.",
    accent: "from-orange-500/10 to-amber-100/20",
    iconBg: "bg-orange-500/10 text-orange-700 group-hover:bg-orange-500/20",
    borderHover: "hover:border-orange-500/40",
    number: "02",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Creating responsive, high-performance web apps with seamless user experiences and real-time capabilities.",
    accent: "from-orange-500/10 to-amber-100/20",
    iconBg: "bg-orange-500/10 text-orange-700 group-hover:bg-orange-500/20",
    borderHover: "hover:border-orange-500/40",
    number: "03",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description:
      "Designing conversion-focused landing pages with compelling visuals, fast loading, and SEO optimization.",
    accent: "from-orange-500/10 to-amber-100/20",
    iconBg: "bg-orange-500/10 text-orange-700 group-hover:bg-orange-500/20",
    borderHover: "hover:border-orange-500/40",
    number: "04",
  },
  {
    icon: Monitor,
    title: "Custom Softwares",
    description:
      "Developing tailored software solutions to automate workflows, manage data, and solve unique business problems.",
    accent: "from-orange-500/10 to-amber-100/20",
    iconBg: "bg-orange-500/10 text-orange-700 group-hover:bg-orange-500/20",
    borderHover: "hover:border-orange-500/40",
    number: "05",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Websites",
    description:
      "Building secure online stores with payment integration, inventory management, and optimized checkout flows.",
    accent: "from-orange-500/10 to-amber-100/20",
    iconBg: "bg-orange-500/10 text-orange-700 group-hover:bg-orange-500/20",
    borderHover: "hover:border-orange-500/40",
    number: "06",
  },
]

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: (typeof services)[0]
  index: number
  isVisible: boolean
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm p-6 transition-all duration-500",
        service.borderHover,
        "hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
      style={{ transitionDelay: isVisible ? `${200 + index * 100}ms` : "0ms" }}
    >
      {/* Background gradient on hover */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          service.accent
        )}
        aria-hidden="true"
      />

      {/* Number watermark */}
      <span
        className="absolute top-3 right-4 text-6xl font-black text-foreground/[0.03] group-hover:text-foreground/[0.06] transition-colors duration-500 select-none font-mono"
        aria-hidden="true"
      >
        {service.number}
      </span>

      <div className="relative z-10">
        {/* Icon */}
        <div
          className={cn(
            "inline-flex p-3 rounded-xl transition-all duration-400",
            service.iconBg
          )}
        >
          <service.icon className="h-6 w-6" />
        </div>

        {/* Title */}
        <h3 className="mt-5 text-lg font-bold text-foreground group-hover:text-foreground transition-colors duration-300">
          {service.title}
        </h3>

        {/* Divider */}
        <div className="mt-3 mb-3 h-px w-8 bg-border group-hover:w-12 group-hover:bg-primary/60 transition-all duration-500" />

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Bottom glow line */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          service.accent
        )}
        aria-hidden="true"
      />
    </div>
  )
}

export function AboutSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="about" className="relative py-28 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Header area */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div
            className={cn(
              "max-w-2xl transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <p className="text-primary font-mono text-sm tracking-wider uppercase mb-3">
              // About Me
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground text-balance leading-tight">
              Crafting <span className="text-primary">secure</span> &{" "}
              <span className="text-primary">scalable</span> digital solutions
            </h2>
          </div>

          <div
            className={cn(
              "max-w-md transition-all duration-700 delay-150",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <p className="text-muted-foreground leading-relaxed">
              I combine creative development with security-first thinking to deliver
              applications that are not only visually engaging but also resilient and
              production-ready.
            </p>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
