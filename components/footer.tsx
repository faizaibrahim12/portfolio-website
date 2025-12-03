"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/faizaibrahim12", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/faiza-qureshi-bb8753315/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:faizaqureshi883@gmail.com", label: "Email" },
  ]

  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 gradient-text">Faiza Ibrahim</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Frontend Developer & Aspiring Full-Stack & AI Developer from Hyderabad, Sindh, Pakistan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#home" className="text-foreground/60 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-foreground/60 hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-foreground/60 hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-foreground/60 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((link, idx) => {
                const Icon = link.icon
                return (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-accent/30 hover:text-accent transition-all duration-300"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-foreground/60">
          <p>© {currentYear} Faiza Ibrahim. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={16} className="text-accent" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
