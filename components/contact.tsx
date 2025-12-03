"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Github, Linkedin, Code2, ExternalLink } from "lucide-react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "faizaqureshi883@gmail.com",
      href: "mailto:faizaqureshi883@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "faizaibrahim12",
      href: "https://github.com/faizaibrahim12",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Faiza Qureshi",
      href: "https://www.linkedin.com/in/faiza-qureshi-bb8753315/",
    },
    {
      icon: Code2,
      label: "Fiverr",
      value: "faizacodes",
      href: "https://www.fiverr.com/faizacodes",
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text text-center">Let&apos;s Connect</h2>

          <p className="text-center text-foreground/70 text-lg mb-12 max-w-2xl mx-auto">
            I&apos;m always open to new opportunities, collaborations, and interesting conversations. Feel free to reach
            out!
          </p>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contacts.map((contact, idx) => {
              const Icon = contact.icon
              return (
                <a
                  key={idx}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card border border-border rounded-lg p-6 hover-glow transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">{contact.label}</p>
                      <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                        {contact.value}
                      </p>
                    </div>
                    <ExternalLink
                      size={16}
                      className="ml-auto text-foreground/40 group-hover:text-accent transition-colors"
                    />
                  </div>
                </a>
              )
            })}
          </div>

          {/* CTA */}
          <div className="text-center bg-primary/10 border border-primary/20 rounded-lg p-12">
            <h3 className="text-2xl font-bold mb-4">Ready to work together?</h3>
            <p className="text-foreground/70 mb-6">
              Whether you have a question or just want to say hello, feel free to get in touch!
            </p>
            <a
              href="mailto:faizaqureshi883@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover-lift shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail size={20} /> Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
