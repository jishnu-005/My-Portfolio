
"use client"

import { useState } from "react"
import type { FormEvent } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"
import { Send, Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const { ref, isVisible } = useScrollReveal()

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.")
      }

      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        message: "",
      })

      setTimeout(() => setIsSubmitted(false), 4000)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <div
          ref={ref}
          className={cn(
            "mb-14 text-center transition-all duration-700",
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          )}
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
            Contact
          </p>

          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Let's <span className="text-primary">Connect.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Have a project in mind? Let's make it happen.
          </p>
        </div>

        <div
          className={cn(
            "grid grid-cols-1 gap-12 transition-all delay-200 duration-700 md:grid-cols-5 lg:gap-16",
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          )}
        >
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 md:col-span-3"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                required
                value={formState.name}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    name: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-border bg-card/50 px-4 py-3 text-foreground backdrop-blur-sm transition-all duration-300 placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:shadow-lg focus:shadow-primary/5"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    email: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-border bg-card/50 px-4 py-3 text-foreground backdrop-blur-sm transition-all duration-300 placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:shadow-lg focus:shadow-primary/5"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Message
              </label>

              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    message: e.target.value,
                  })
                }
                className="w-full resize-none rounded-lg border border-border bg-card/50 px-4 py-3 text-foreground backdrop-blur-sm transition-all duration-300 placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:shadow-lg focus:shadow-primary/5"
                placeholder="Your message..."
              />
            </div>

            {/* Error Message */}
            {error && (
              <p className="rounded-lg border border-destructive/20 bg-destructive/10 px-4 py-2.5 text-sm text-destructive">
                {error}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? (
                "Sending..."
              ) : isSubmitted ? (
                "Message Sent!"
              ) : (
                <>
                  Send Message
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>

          {/* Minimal Contact Details */}
          <div className="flex flex-col justify-center md:col-span-2">
            <div className="mb-10">
              <h3 className="font-display text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
                Say Hello<span className="text-primary">.</span>
              </h3>
            </div>

            <div className="space-y-9">
              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail
                  size={23}
                  strokeWidth={1.8}
                  className="mt-1 shrink-0 text-primary"
                />

                <div className="min-w-0">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Email
                  </p>

                  <a
                    href="mailto:jishnuprakash469@gmail.com"
                    className="break-all text-sm font-semibold text-foreground transition-colors hover:text-primary sm:text-base"
                  >
                    jishnuprakash469@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone
                  size={23}
                  strokeWidth={1.8}
                  className="mt-1 shrink-0 text-primary"
                />

                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Phone
                  </p>

                  <a
                    href="tel:+917736849573"
                    className="text-base font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    +91 77368 49573
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <MapPin
                  size={23}
                  strokeWidth={1.8}
                  className="mt-1 shrink-0 text-primary"
                />

                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Location
                  </p>

                  <p className="text-base font-semibold text-foreground">
                    Thrissur, Kerala, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
