'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'system'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  mounted: boolean
}

const initialState: ThemeProviderState = {
  theme: 'light', // Always start with light to ensure consistency
  setTheme: () => null,
  mounted: false,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'light', // Changed default to light for consistency
  storageKey = 'portfolio-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('light') // Always start with light
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Only after mounting, check localStorage and apply theme
    const storedTheme = localStorage.getItem(storageKey) as Theme
    const initialTheme = storedTheme || defaultTheme

    setTheme(initialTheme)

    // Apply theme immediately
    const root = document.documentElement
    root.classList.remove('light', 'dark')

    let actualTheme = initialTheme
    if (initialTheme === 'system') {
      actualTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    }

    root.classList.add(actualTheme)
    root.setAttribute('data-theme', actualTheme)
  }, [defaultTheme, storageKey])

  useEffect(() => {
    if (!mounted) return

    const root = document.documentElement
    root.classList.remove('light', 'dark')

    let actualTheme = theme
    if (theme === 'system') {
      actualTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    }

    root.classList.add(actualTheme)
    root.setAttribute('data-theme', actualTheme)
  }, [theme, mounted])

  const value = {
    theme,
    mounted,
    setTheme: (newTheme: Theme) => {
      if (mounted) {
        localStorage.setItem(storageKey, newTheme)
        setTheme(newTheme)
      }
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}
