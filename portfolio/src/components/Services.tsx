import { motion } from 'framer-motion'
import {
  Code,
  Brain,
  Smartphone,
  Cloud,
  Zap,
  Users,
  Shield,
  Rocket,
  CheckCircle
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'

const services = [
  {
    icon: Brain,
    title: 'AI Integration & Development',
    description: 'Custom AI solutions using OpenAI, Gemini, and other cutting-edge APIs for intelligent applications.',
    features: [
      'OpenAI GPT Integration',
      'Google Gemini Implementation',
      'Voice Recognition (Whisper)',
      'OCR & Document Processing',
      'Machine Learning Solutions',
      'AI-Powered Features'
    ],
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20'
  },
  {
    icon: Code,
    title: 'Full-Stack Web Development',
    description: 'End-to-end web application development with modern technologies and scalable architectures.',
    features: [
      'React & Next.js Applications',
      'Node.js Backend Development',
      'PostgreSQL & MongoDB',
      'Real-time Features (Socket.io)',
      'RESTful API Design',
      'TypeScript Development'
    ],
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications with Flutter for iOS and Android with native performance.',
    features: [
      'Flutter Development',
      'Cross-platform Apps',
      'Material Design 3',
      'Real-time Messaging',
      'File Sharing Systems',
      'Push Notifications'
    ],
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps Solutions',
    description: 'Scalable cloud infrastructure, deployment automation, and performance optimization.',
    features: [
      'AWS Services (S3, SES, DynamoDB)',
      'Deployment Automation',
      'Database Design & Optimization',
      'Performance Monitoring',
      'Security Best Practices',
      'CI/CD Pipelines'
    ],
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20'
  },
  {
    icon: Users,
    title: 'Enterprise Solutions',
    description: 'Large-scale applications designed to handle thousands of users with enterprise-grade features.',
    features: [
      'Multi-tier Admin Systems',
      'User Management',
      'Role-based Access Control',
      'Scalable Architecture',
      'Data Analytics',
      'System Integration'
    ],
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/20'
  },
  {
    icon: Rocket,
    title: 'Consulting & Optimization',
    description: 'Technical consulting, code reviews, and performance optimization for existing applications.',
    features: [
      'Technical Architecture Review',
      'Performance Optimization',
      'Code Quality Assessment',
      'Technology Stack Consultation',
      'Project Planning',
      'Team Mentoring'
    ],
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/20'
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'Understanding your requirements, goals, and technical needs through detailed consultation.'
  },
  {
    step: '02',
    title: 'Design & Architecture',
    description: 'Creating scalable system architecture and user-centered design for optimal performance.'
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'Agile development with continuous testing, code reviews, and quality assurance.'
  },
  {
    step: '04',
    title: 'Deployment & Support',
    description: 'Seamless deployment with ongoing support, monitoring, and maintenance services.'
  }
]

export default function Services() {
  return (
    <section className="py-20 bg-muted/30">
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
            Services & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive development services from AI integration to enterprise solutions. 
            I help businesses build scalable, intelligent applications that drive growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full hover:shadow-lg transition-all duration-300 border-2 ${service.borderColor} hover:scale-105`}>
                  <CardHeader>
                    <div className={`inline-flex p-3 rounded-lg ${service.bgColor} w-fit mb-4`}>
                      <Icon className={`h-6 w-6 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            My Development Process
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-8" />
                  )}
                </div>
                <h4 className="text-lg font-semibold mb-3">{step.title}</h4>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with cutting-edge technology 
              and proven development practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Shield className="mr-2 h-4 w-4" />
                4+ Years Experience
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Users className="mr-2 h-4 w-4" />
                10,000+ Users Served
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Zap className="mr-2 h-4 w-4" />
                Fast Delivery
              </Badge>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
