"use client"

import { useEffect, useRef, useState } from "react"

export default function Skills() {
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

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs", "Python"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Vercel", "VS Code", "Postman", "Firebase"],
    },
    {
      title: "AI & Emerging Tech",
      skills: ["AI Tools & Agents", "Machine Learning Basics", "Prompt Engineering", "Web3 Concepts"],
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 gradient-text">Skills & Technologies</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="group bg-card border border-border rounded-lg p-8 hover-glow transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-accent mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-primary/20 border border-primary/30 text-foreground text-sm font-medium rounded-full hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
