import { motion } from 'framer-motion'
import { ExternalLink, Github, Play, Filter, Eye } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useState } from 'react'
import { ProjectDetail } from './ProjectDetail'

const projects = [
  {
    title: 'NutriVerseAI',
    description: 'A comprehensive AI-powered nutrition platform with smart meal planning, recipe management, advanced nutrition tracking, and community features. Built in 2 months with cutting-edge AI integration.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&h=300&fit=crop&auto=format&q=80',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'OpenAI', 'Gemini API', 'Tailwind CSS', 'Drizzle ORM'],
    github: 'https://github.com/AsadullahSamo/NutriVerseAI',
    demo: 'https://nutriverse-ai.vercel.app/',
    featured: true,
    videoDemo: 'https://www.youtube.com/watch?v=0L-h_AwWGW4',
    categories: ['AI-Powered', 'Full-Stack', 'Enterprise']
  },
  {
    title: 'UnifyChat',
    description: 'Enterprise-grade chat application serving 10,000+ real users. Features real-time messaging, file sharing, multi-tier admin system, and cross-platform support with Flutter and Node.js.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&auto=format&q=80',
    technologies: ['Flutter', 'Node.js', 'Socket.io', 'AWS DynamoDB', 'AWS S3', 'JWT', 'Material Design 3'],
    github: 'https://github.com/AsadullahSamo/UnifyChat',
    demo: 'https://unifychat.onrender.com',
    featured: true,
    videoDemo: 'https://www.youtube.com/watch?v=-roAfH4vf8U',
    categories: ['Enterprise', 'Mobile', 'Full-Stack']
  },
  {
    title: 'Automated Timetable Generation System',
    description: 'AI-based FYP project that generates optimized timetables with multiple constraints including cross-semester conflict resolution, practical class scheduling, and teacher availability management.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop&auto=format&q=80',
    technologies: ['AI Algorithms', 'Constraint Optimization', 'Python', 'Machine Learning', 'Django', 'Next.js', 'Tailwind CSS'],
    github: 'https://github.com/AsadullahSamo/timetable-generation',
    demo: 'Coming Soon',
    featured: true,
    categories: ['AI-Powered', 'Academic']
  },
  {
    title: 'Storyworth Clone',
    description: 'Comprehensive collaborative recipe book platform with OCR scanning, voice transcription, Stripe payments, and print-on-demand integration. Features multi-role system and PDF generation.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop&auto=format&q=80',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS S3', 'Google Vision API', 'Whisper API'],
    github: 'https://github.com/AsadullahSamo/Storyworth',
    demo: 'https://storyworth.vercel.app/',
    featured: true,
    categories: ['AI-Powered', 'Full-Stack', 'Enterprise']
  },
]

const filterCategories = ['All', 'AI-Powered', 'Enterprise', 'Full-Stack', 'Mobile', 'Academic']

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.categories.includes(activeFilter))

  // If a project is selected, show the detail view
  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Showcasing production-ready applications with AI integration, real-time features, and enterprise-grade architecture.
              These projects demonstrate my expertise in building scalable solutions that serve thousands of users.
            </p>
          </div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {filterCategories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className="transition-all duration-300"
              >
                <Filter className="mr-2 h-4 w-4" />
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                      {project.videoDemo && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.videoDemo} target="_blank" rel="noopener noreferrer">
                            <Play className="h-4 w-4 mr-1" />
                            Video
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* View Details Button */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/AsadullahSamo" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View All Projects on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
