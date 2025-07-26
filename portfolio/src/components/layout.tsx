'use client'

import { Navigation } from './navigation'
import { Footer } from './footer'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}
