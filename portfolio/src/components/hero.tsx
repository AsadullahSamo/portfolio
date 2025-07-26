'use client'

import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from './ui/button'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/yourusername',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/yourusername',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:your.email@example.com',
    icon: Mail,
  },
]

export function Hero() {
  const scrollToProjects = () => {
    if (typeof window !== 'undefined') {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    if (typeof window !== 'undefined') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToAbout = () => {
    if (typeof window !== 'undefined') {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center">
        {/* Greeting */}
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            👋 Hello, I'm
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="bg-gradient-to-r from-foreground via-primary to-purple-600 bg-clip-text text-transparent">
            Your Name
          </span>
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-primary mb-8">
          Full Stack Developer
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          I craft exceptional digital experiences through clean code, innovative solutions,
          and user-centered design. Passionate about building scalable applications that make a difference.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" onClick={scrollToProjects} className="group">
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" onClick={scrollToContact}>
            Get In Touch
            <Mail className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="secondary" size="lg">
            Download Resume
            <Download className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-accent transition-colors"
                aria-label={social.name}
              >
                <Icon className="h-6 w-6" />
              </a>
            )
          })}
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Learn more about me</span>
          <button
            onClick={scrollToAbout}
            className="p-2 rounded-full hover:bg-accent transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full opacity-60" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-purple-500 rounded-full opacity-40" />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-accent rounded-full opacity-50" />
    </section>
  )
}
