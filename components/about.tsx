"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
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

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-foreground/80">
              <p className="leading-relaxed">
                Hey! I&apos;m Faiza Ibrahim, a Frontend Developer based in Hyderabad, Sindh, Pakistan. I&apos;m
                passionate about building beautiful, performant web applications that solve real-world problems.
              </p>
              <p className="leading-relaxed">
                I specialize in the MERN stack (MongoDB, Express, React, Node.js) and have a deep interest in full-stack
                development and AI integration. I&apos;m constantly exploring new technologies and frameworks to enhance
                my skills.
              </p>
              <p className="leading-relaxed">
                Beyond coding, I&apos;m fascinated by the intersection of Web, AI, Cloud Computing, and Web3
                technologies. I love learning new things and sharing my knowledge with the community.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 hover-glow">
                <h3 className="text-lg font-semibold text-accent mb-2">Interests</h3>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li>✓ Web Development & UI/UX</li>
                  <li>✓ AI & Machine Learning Tools</li>
                  <li>✓ Cloud Technologies</li>
                  <li>✓ Web3 & Blockchain</li>
                  <li>✓ Open Source Contributions</li>
                  <li>✓ Full-Stack Development</li>
                </ul>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 hover-glow">
                <h3 className="text-lg font-semibold text-accent mb-2">Location</h3>
                <p className="text-foreground/70 text-sm">Hyderabad, Sindh, Pakistan 🇵🇰</p>
                <p className="text-foreground/60 text-xs mt-2">
                  Available for freelance projects & remote opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
