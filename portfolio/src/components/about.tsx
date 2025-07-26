'use client'

import { Code, Palette, Zap, Users, Award, Coffee } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'

const skills = {
  frontend: [
    'React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3',
    'Tailwind CSS', 'Sass', 'Vue.js', 'Angular', 'Framer Motion'
  ],
  backend: [
    'Node.js', 'Express.js', 'Python', 'Django', 'FastAPI', 'PostgreSQL',
    'MongoDB', 'Redis', 'GraphQL', 'REST APIs', 'Prisma'
  ],
  tools: [
    'Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'VS Code',
    'Postman', 'Jest', 'Cypress', 'Webpack', 'Vite'
  ],
  soft: [
    'Problem Solving', 'Team Leadership', 'Communication', 'Agile/Scrum',
    'Project Management', 'Mentoring', 'Code Review', 'Documentation'
  ]
}

const highlights = [
  {
    icon: Code,
    title: '5+ Years Experience',
    description: 'Building scalable web applications with modern technologies and best practices.'
  },
  {
    icon: Zap,
    title: 'Performance Focused',
    description: 'Optimizing applications for speed, accessibility, and user experience.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Working effectively in cross-functional teams and mentoring junior developers.'
  },
  {
    icon: Palette,
    title: 'Design Minded',
    description: 'Creating beautiful, intuitive interfaces that users love to interact with.'
  },
  {
    icon: Award,
    title: 'Quality Driven',
    description: 'Writing clean, maintainable code with comprehensive testing and documentation.'
  },
  {
    icon: Coffee,
    title: 'Continuous Learning',
    description: 'Staying updated with latest technologies and industry best practices.'
  }
]

export function About() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div>
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate full-stack developer with a love for creating innovative solutions 
              that make a real impact. With expertise in modern web technologies, I bring ideas to life 
              through clean, efficient code and thoughtful user experiences.
            </p>
          </div>

          {/* Personal Story */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    My journey into software development began with curiosity and a desire to solve problems. 
                    What started as tinkering with HTML and CSS has evolved into a deep passion for building 
                    full-scale applications that serve real user needs.
                  </p>
                  <p>
                    Over the years, I've had the privilege of working with diverse teams, from startups to 
                    established companies, each experience teaching me valuable lessons about collaboration, 
                    innovation, and the importance of user-centered design.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                    projects, or sharing knowledge with the developer community through blog posts and mentoring.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {highlights.map((highlight, index) => {
                  const Icon = highlight.icon
                  return (
                    <div key={highlight.title}>
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex flex-col items-center text-center space-y-4">
                            <div className="p-3 rounded-full bg-primary/10">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <h4 className="font-semibold mb-2">{highlight.title}</h4>
                            <p className="text-sm text-muted-foreground">{highlight.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="space-y-4">
                  <h4 className="font-semibold capitalize text-lg">
                    {category === 'soft' ? 'Soft Skills' : `${category} Development`}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
