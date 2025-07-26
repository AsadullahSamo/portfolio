'use client'


import { cn } from '@/lib/utils'

interface SectionProps {
  id: string
  className?: string
  children: React.ReactNode
  background?: 'default' | 'muted'
}

export function Section({ id, className, children, background = 'default' }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-20 scroll-mt-20',
        background === 'muted' && 'bg-muted/30',
        className
      )}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  )
}
