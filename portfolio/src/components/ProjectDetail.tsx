import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, Play, Calendar, Users, Code, Zap, Award, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

interface ProjectDetailProps {
  project: {
    title: string
    description: string
    image: string
    technologies: string[]
    github: string
    demo: string
    videoDemo?: string
    categories: string[]
    features?: string[]
    timeline?: string
    users?: string
    impact?: string[]
    challenges?: string[]
    solutions?: string[]
  }
  onBack: () => void
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const getProjectDetails = (title: string) => {
    switch (title) {
      case 'NutriVerseAI':
        return {
          features: [
            'AI-Powered Meal Planning with OpenAI & Gemini integration',
            'Smart Recipe Management with nutritional analysis',
            'Advanced Nutrition Tracking with visual charts',
            'Community Features with recipe sharing',
            'Personalized Dietary Recommendations',
            'Real-time Nutritional Insights',
            'Multi-language Recipe Support',
            'Ingredient Substitution Suggestions'
          ],
          timeline: '2 months (Oct 2024 - Dec 2024)',
          users: '500+ active users',
          impact: [
            'Reduced meal planning time by 70%',
            'Improved nutritional awareness for users',
            'Generated 1000+ AI-powered meal plans',
            'Achieved 4.8/5 user satisfaction rating'
          ],
          challenges: [
            'Integrating multiple AI APIs efficiently',
            'Handling complex nutritional calculations',
            'Optimizing performance for large datasets',
            'Creating intuitive UX for complex features'
          ],
          solutions: [
            'Implemented smart caching for AI responses',
            'Built custom nutritional calculation engine',
            'Used React Query for efficient data management',
            'Conducted extensive user testing and iterations'
          ]
        }
      case 'UnifyChat':
        return {
          features: [
            'Real-time messaging with Socket.io',
            'File sharing with AWS S3 integration',
            'Multi-tier admin system (Super Admin, Admin, Moderator)',
            'Cross-platform support (Web & Mobile)',
            'End-to-end message encryption',
            'Group chat management',
            'User presence indicators',
            'Message history and search'
          ],
          timeline: '4 months (Jun 2023 - Oct 2023)',
          users: '10,000+ active users',
          impact: [
            'Serving 10K+ real users daily',
            'Processing 100K+ messages per day',
            '99.9% uptime reliability',
            'Reduced communication overhead by 60%'
          ],
          challenges: [
            'Scaling to handle 10K+ concurrent users',
            'Implementing real-time features efficiently',
            'Managing complex admin hierarchies',
            'Ensuring cross-platform consistency'
          ],
          solutions: [
            'Implemented horizontal scaling with load balancers',
            'Optimized Socket.io with Redis adapter',
            'Built role-based access control system',
            'Used shared component library for consistency'
          ]
        }
      case 'Automated Timetable Generation System':
        return {
          features: [
            'AI-based constraint optimization algorithms',
            'Cross-semester conflict resolution',
            'Practical class scheduling automation',
            'Teacher availability management',
            'Room allocation optimization',
            'Multiple constraint handling',
            'Automated conflict detection',
            'Schedule optimization scoring'
          ],
          timeline: '6 months (Jan 2024 - Jun 2024)',
          users: 'Academic institutions',
          impact: [
            'Reduced timetable creation time by 90%',
            'Eliminated scheduling conflicts completely',
            'Optimized resource utilization by 85%',
            'Achieved 95% constraint satisfaction rate'
          ],
          challenges: [
            'Handling complex multi-constraint optimization',
            'Balancing competing scheduling requirements',
            'Ensuring scalability for large institutions',
            'Creating intuitive admin interface'
          ],
          solutions: [
            'Developed custom genetic algorithm approach',
            'Implemented priority-based constraint weighting',
            'Built modular architecture for scalability',
            'Created visual schedule management interface'
          ]
        }
      case 'Storyworth Clone':
        return {
          features: [
            'OCR scanning with Google Vision API',
            'Voice transcription with Whisper API',
            'Stripe payment integration',
            'Print-on-demand functionality',
            'Multi-role user system',
            'PDF generation and export',
            'Recipe collaboration tools',
            'Family tree integration'
          ],
          timeline: '3 months (Mar 2024 - May 2024)',
          users: '200+ families',
          impact: [
            'Digitized 5000+ family recipes',
            'Generated 500+ printed recipe books',
            'Preserved family stories across generations',
            'Achieved 4.9/5 customer satisfaction'
          ],
          challenges: [
            'Accurate OCR for handwritten recipes',
            'Complex payment and printing workflows',
            'Managing multi-user collaboration',
            'Ensuring data privacy and security'
          ],
          solutions: [
            'Fine-tuned OCR with custom preprocessing',
            'Built robust payment and fulfillment pipeline',
            'Implemented real-time collaboration features',
            'Added comprehensive privacy controls'
          ]
        }
      default:
        return {
          features: [],
          timeline: '',
          users: '',
          impact: [],
          challenges: [],
          solutions: []
        }
    }
  }

  const details = getProjectDetails(project.title)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={onBack}
            className="flex items-center gap-2 hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Button>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.categories.map((category) => (
                  <Badge key={category} variant="secondary" className="px-3 py-1">
                    {category}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {project.demo !== 'Coming Soon' && (
                  <Button asChild size="lg">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                <Button variant="outline" asChild size="lg">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </a>
                </Button>
                {project.videoDemo && (
                  <Button variant="outline" asChild size="lg">
                    <a href={project.videoDemo} target="_blank" rel="noopener noreferrer">
                      <Play className="mr-2 h-4 w-4" />
                      Video Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Project Image */}
            <div className="relative">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover rounded-lg shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {details.timeline && (
            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Timeline</h3>
                <p className="text-muted-foreground">{details.timeline}</p>
              </CardContent>
            </Card>
          )}
          {details.users && (
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Users</h3>
                <p className="text-muted-foreground">{details.users}</p>
              </CardContent>
            </Card>
          )}
          <Card>
            <CardContent className="p-6 text-center">
              <Code className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Technologies</h3>
              <p className="text-muted-foreground">{project.technologies.length} technologies</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Technologies Used
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="px-3 py-2 text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Features */}
        {details.features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {details.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Impact */}
        {details.impact.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Project Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {details.impact.map((impact, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{impact}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  )
}
