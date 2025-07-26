'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from './theme-provider'
import { motion } from 'framer-motion'
import { NoSSR } from './no-ssr'

export function ThemeToggle() {
  const { theme, setTheme, mounted } = useTheme()

  const toggleTheme = () => {
    if (!mounted) return

    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    } else {
      setTheme('light')
    }
  }

  const getIcon = () => {
    if (theme === 'light') return <Sun className="h-5 w-5" />
    if (theme === 'dark') return <Moon className="h-5 w-5" />
    return <Sun className="h-5 w-5" /> // system default
  }

  const getLabel = () => {
    if (theme === 'light') return 'Switch to dark mode'
    if (theme === 'dark') return 'Switch to system mode'
    return 'Switch to light mode'
  }

  // Always render the same structure to prevent hydration mismatch
  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      aria-label={getLabel()}
      title={getLabel()}
      disabled={!mounted}
    >
      <div className="flex items-center justify-center">
        {getIcon()}
      </div>
    </button>
  )
}
