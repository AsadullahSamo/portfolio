'use client'

import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react'
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
    name: 'Twitter',
    href: 'https://twitter.com/yourusername',
    icon: Twitter,
  },
  {
    name: 'Email',
    href: 'mailto:your.email@example.com',
    icon: Mail,
  },
]

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              A passionate developer creating innovative solutions and beautiful user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {['Home', 'About', 'Projects', 'Experience', 'Education', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      const element = document.getElementById(link.toLowerCase())
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }
                  }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-background border border-border hover:bg-accent transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© 2024 Portfolio. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>using Next.js & Tailwind CSS</span>
          </div>

          {/* Back to Top Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="flex items-center space-x-2"
          >
            <ArrowUp className="h-4 w-4" />
            <span>Back to Top</span>
          </Button>
        </div>
      </div>
    </footer>
  )
}
