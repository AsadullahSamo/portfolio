import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Users, Calendar, Code, Trophy, Zap, Globe } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: 10000,
    suffix: '+',
    label: 'Active Users',
    description: 'Real users on UnifyChat platform',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: Calendar,
    value: 4,
    suffix: '',
    label: 'Years Experience',
    description: 'Professional development experience',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: Code,
    value: 4,
    suffix: '',
    label: 'Major Projects',
    description: 'Production-ready applications',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: Trophy,
    value: 100,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Successful project delivery',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
  },
  {
    icon: Zap,
    value: 2,
    suffix: ' Months',
    label: 'NutriVerseAI Dev',
    description: 'Comprehensive AI platform built',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
  },

]

interface CounterProps {
  value: number
  suffix: string
  duration?: number
}

const Counter = ({ value, suffix, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(value * easeOutQuart))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [value, duration])

  return (
    <span className="font-bold text-3xl md:text-4xl">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Achievements & Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real numbers that showcase the impact of my work and dedication to excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-lg ${stat.bgColor} mb-4`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>

                  {/* Counter */}
                  <div className="mb-2">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">{stat.description}</p>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional highlight */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
            <Trophy className="h-5 w-5" />
            <span className="font-medium">Currently pursuing B.E. in Software Engineering at MUET</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
