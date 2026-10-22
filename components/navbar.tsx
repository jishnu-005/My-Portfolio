
"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#education" },
  { label: "Expertise", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="leap-nav">
      <nav className="leap-nav-inner" aria-label="Main navigation">
        <a
          className="leap-logo"
          href="#home"
          onClick={() => setOpen(false)}
          aria-label="Jishnu — home"
        >
          JISHNU<span className="leap-logo-dot">.</span>
        </a>

        <div className="leap-desktop-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}

          <a className="leap-nav-contact" href="#contact">
            Contact
            <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          type="button"
          className="leap-menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="leap-mobile-navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      <div
        id="leap-mobile-navigation"
        className={`leap-mobile-links ${open ? "is-open" : ""}`}
        inert={!open}
      >
        {[...links, { label: "Contact", href: "#contact" }].map(
          (link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
              <ArrowUpRight size={18} />
            </a>
          )
        )}
      </div>
    </header>
  );
}
