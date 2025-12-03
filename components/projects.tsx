"use client"

import { useEffect, useRef, useState } from "react"
import { Github } from "lucide-react"

export default function Projects() {
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

  const projects = [
    {
      name: "TaskFlow",
      description:
        "A full-featured task management application with real-time updates, user authentication, and collaborative features.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/faizaibrahim12/taskflow",
    },
    {
      name: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark mode support.",
      tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/faizaibrahim12/website",
    },
    {
      name: "Basic Website",
      description:
        "A clean and minimal website template built with modern web technologies, perfect for personal or business use.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/faizaibrahim12/basic-website",
    },
    {
      name: "AI Chat Assistant",
      description:
        "An intelligent chatbot integrated with AI models, capable of understanding context and providing helpful responses.",
      tech: ["Next.js", "AI SDK", "React", "TypeScript"],
      github: "https://github.com/faizaibrahim12",
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 gradient-text">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-background border border-border rounded-lg overflow-hidden hover-glow transition-all duration-300"
              >
                {/* Project Header */}
                <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 border-b border-border">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {project.name}
                  </h3>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <p className="text-foreground/70 leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-accent/15 text-accent text-xs font-semibold rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary hover:bg-primary/30 rounded-lg transition-all duration-300 font-semibold text-sm"
                    >
                      <Github size={16} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="mt-16 text-center">
            <p className="text-foreground/60 mb-4">Interested in seeing more projects?</p>
            <a
              href="https://github.com/faizaibrahim12"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover-lift shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Github size={20} /> Visit GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
