"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-4xl w-full">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Greeting */}
          <div className="text-center mb-6">
            <p className="text-accent font-semibold text-lg">Welcome to my portfolio</p>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 leading-tight">
            <span className="text-foreground">Hi, I&apos;m </span>
            <span className="gradient-text">Faiza Ibrahim</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-center text-foreground/70 mb-8 max-w-2xl mx-auto">
            Frontend Developer | MERN Stack Enthusiast | Aspiring Full-Stack & AI Developer
          </p>

          {/* Tagline */}
          <p className="text-center text-foreground/60 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting beautiful, performant web experiences with React, Next.js, and modern web technologies. Based in
            Hyderabad, Sindh, Pakistan. Always learning and exploring the intersection of Web, AI, Cloud, and Web3.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#projects"
              className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover-lift shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center animate-bounce">
            <a href="#about" className="text-accent/50 hover:text-accent transition-colors">
              <ArrowDown size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
