import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { Button } from './ui/button'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/AsadullahSamo',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/asadullah-samo-212680266/',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:asad.samo549@gmail.com',
    icon: Mail,
  },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
              Asadullah Samoon
            </h3>
            <p className="text-muted-foreground text-sm">
              Full Stack Developer specializing in AI-Enhanced Applications from Karachi, Pakistan.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center space-y-2 p-4 rounded-lg bg-muted hover:bg-accent transition-colors"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    aria-label={social.name}
                  >
                    <Icon className="h-6 w-6 group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium">{social.name}</span>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Back to Top */}
          <motion.div
            className="flex justify-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="group"
            >
              <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </Button>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-8 pt-8 border-t border-border text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            © {currentYear} Made with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> by Asadullah Samoon
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
