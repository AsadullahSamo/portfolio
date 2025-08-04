import { motion } from 'framer-motion'
import {
  GraduationCap,
  Code,
  Rocket,
  Users,
  Brain,
  Trophy,
  Calendar,
  MapPin,
  ExternalLink,
  Award,
  Zap
} from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'



interface TimelineEvent {
  year: string
  title: string
  subtitle: string
  description: string
  icon: any
  color: string
  bgColor: string
  achievements: string[]
  type: string
  projects?: any[]
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '2021',
    title: 'Started Software Engineering Journey',
    subtitle: 'MUET, Jamshoro',
    description: 'Began B.E. in Software Engineering at Mehran University of Engineering & Technology, building strong foundations in programming and software development.',
    icon: GraduationCap,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    achievements: ['Academic Excellence', 'Programming Fundamentals', 'Data Structures & Algorithms'],
    type: 'education'
  },
  {
    year: '2022',
    title: 'First Development Projects',
    subtitle: 'Learning & Building',
    description: 'Started building real projects, learning React, Node.js, and database technologies. Developed first full-stack applications.',
    icon: Code,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    achievements: ['React Mastery', 'Node.js Backend', 'Database Design', 'Git Version Control'],
    type: 'development'
  },
  {
    year: '2023',
    title: 'AI Integration Expertise',
    subtitle: 'Advanced Technologies',
    description: 'Specialized in AI integration, working with OpenAI APIs, machine learning, and intelligent application development.',
    icon: Brain,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    achievements: ['OpenAI Integration', 'Machine Learning', 'AI-Powered Features', 'Constraint Optimization'],
    type: 'specialization'
  },
  {
    year: '2024',
    title: 'Enterprise Applications',
    subtitle: 'Production Scale',
    description: 'Built UnifyChat serving 10,000+ real users and developed NutriVerseAI with comprehensive AI features in just 2 months.',
    icon: Users,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    achievements: ['10k+ Active Users', 'Real-time Systems', 'Enterprise Architecture', 'Cross-platform Development'],
    type: 'milestone',
    projects: [
      { name: 'UnifyChat', users: '10,000+', link: 'https://unifychat.onrender.com' },
      { name: 'NutriVerseAI', timeline: '2 months', link: 'https://nutriverse-ai.vercel.app/' }
    ]
  },
  {
    year: '2025',
    title: 'Final Year & Advanced Projects',
    subtitle: 'Current Focus',
    description: 'Completing B.E. with FYP on Automated Timetable Generation, freelancing, and building advanced AI-powered solutions.',
    icon: Trophy,
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    achievements: ['FYP Project', 'Freelancing Success', 'Advanced AI Systems', 'Industry Recognition'],
    type: 'current',
    projects: [
      { name: 'Timetable Generation', type: 'AI-based FYP' },
      { name: 'Storyworth Clone', features: 'OCR, Voice, Payments' }
    ]
  }
]

const stats = [
  { label: 'Years of Experience', value: '4+', icon: Calendar },
  { label: 'Projects Completed', value: '4', icon: Rocket },
  { label: 'Active Users Served', value: '10K+', icon: Users },
  { label: 'Technologies Mastered', value: '20+', icon: Code },
  { label: 'Client Satisfaction', value: '100%', icon: Award },
  { label: 'Response Time', value: '<24h', icon: Zap }
]

export default function Timeline() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Journey & Growth
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From learning fundamentals to building enterprise applications serving thousands of users. 
            Here's how I've grown as a developer and AI integration specialist.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={event.year}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-2 md:-translate-x-2 z-10" />
                  
                  {/* Year Badge */}
                  <div className="absolute left-16 md:left-1/2 transform md:-translate-x-1/2 -translate-y-8">
                    <Badge variant="secondary" className="font-bold">
                      {event.year}
                    </Badge>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-lg ${event.bgColor} flex-shrink-0`}>
                            <Icon className={`h-6 w-6 ${event.color}`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                            <p className="text-primary font-medium mb-3">{event.subtitle}</p>
                            <p className="text-muted-foreground mb-4">{event.description}</p>
                            
                            {/* Achievements */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {event.achievements.map((achievement) => (
                                <Badge key={achievement} variant="outline" className="text-xs">
                                  {achievement}
                                </Badge>
                              ))}
                            </div>

                            {/* Projects */}
                            {event.projects && (
                              <div className="space-y-2">
                                <h4 className="font-semibold text-sm">Key Projects:</h4>
                                {event.projects.map((project) => (
                                  <div key={project.name} className="flex items-center justify-between text-sm bg-muted/50 rounded p-2">
                                    <span className="font-medium">{project.name}</span>
                                    <div className="flex items-center space-x-2">
                                      {'users' in project && project.users && (
                                        <Badge variant="secondary" className="text-xs">
                                          <Users className="h-3 w-3 mr-1" />
                                          {project.users}
                                        </Badge>
                                      )}
                                      {'timeline' in project && project.timeline && (
                                        <Badge variant="secondary" className="text-xs">
                                          <Calendar className="h-3 w-3 mr-1" />
                                          {project.timeline}
                                        </Badge>
                                      )}
                                      {'type' in project && project.type && (
                                        <Badge variant="secondary" className="text-xs">
                                          {project.type}
                                        </Badge>
                                      )}
                                      {'features' in project && project.features && (
                                        <Badge variant="secondary" className="text-xs">
                                          {project.features}
                                        </Badge>
                                      )}
                                      {'link' in project && project.link && (
                                        <a
                                          href={project.link}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-primary hover:text-primary/80"
                                        >
                                          <ExternalLink className="h-3 w-3" />
                                        </a>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Current Status */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-2xl font-bold">Currently Based in Hyderabad, Pakistan</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Pursuing B.E. in Software Engineering at MUET while building cutting-edge applications 
              and serving clients worldwide through freelancing.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="px-4 py-2">
                <GraduationCap className="mr-2 h-4 w-4" />
                Final Year Student
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Code className="mr-2 h-4 w-4" />
                Active Freelancer
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Brain className="mr-2 h-4 w-4" />
                AI Specialist
              </Badge>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
