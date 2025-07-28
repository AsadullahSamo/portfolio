import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import {
  // React Icons - Technology specific icons
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiFlutter,
  SiTailwindcss,
  SiAngular,
  SiNodedotjs,
  SiPostgresql,
  SiSocketdotio,
  SiMongodb,
  SiAmazon,
  SiOpenai,
  SiGoogle,
  SiGithub,
  SiVercel
} from 'react-icons/si'
import {
  // Lucide icons for generic concepts
  Brain,
  Eye,
  Settings,
  Shield,
  Layers,
  Globe
} from 'lucide-react'

// For now, just use React icon for React & Next.js
const ReactNextIcon = SiReact

// Technology icon mapping
const getTechIcon = (techName: string) => {
  const iconMap: { [key: string]: any } = {
    // Frontend & Mobile
    'React & Next.js': ReactNextIcon,
    'TypeScript': SiTypescript,
    'Flutter': SiFlutter,
    'Tailwind CSS': SiTailwindcss,
    'Angular': SiAngular,

    // Backend & APIs
    'Node.js & Express': SiNodedotjs,
    'PostgreSQL': SiPostgresql,
    'Socket.io': SiSocketdotio,
    'MongoDB & DynamoDB': SiMongodb,
    'REST APIs': Globe,

    // AI & Machine Learning
    'OpenAI Integration': SiOpenai,
    'Google Gemini': SiGoogle,
    'Machine Learning': Brain,
    'OCR & Voice Recognition': Eye,
    'AI System Design': Settings,

    // Cloud & DevOps
    'AWS Services': SiAmazon,
    'Git & GitHub': SiGithub,
    'Deployment & CI/CD': SiVercel,
    'Database Design': Layers,
    'Security Best Practices': Shield,
  }

  return iconMap[techName] || SiReact
}

const skillsWithProficiency = {
  frontend: [
    { name: 'React & Next.js', level: 95, description: 'Expert level - Built multiple production apps', icon: getTechIcon('React & Next.js') },
    { name: 'TypeScript', level: 90, description: 'Advanced - Used in all major projects', icon: getTechIcon('TypeScript') },
    { name: 'Flutter', level: 85, description: 'Advanced - UnifyChat mobile app', icon: getTechIcon('Flutter') },
    { name: 'Tailwind CSS', level: 90, description: 'Advanced - Preferred styling framework', icon: getTechIcon('Tailwind CSS') },
    { name: 'Angular', level: 75, description: 'Proficient - Multiple projects experience', icon: getTechIcon('Angular') },
  ],
  backend: [
    { name: 'Node.js & Express', level: 95, description: 'Expert - 4 years experience', icon: getTechIcon('Node.js & Express') },
    { name: 'PostgreSQL', level: 85, description: 'Advanced - Complex database designs', icon: getTechIcon('PostgreSQL') },
    { name: 'Socket.io', level: 90, description: 'Advanced - Real-time systems expert', icon: getTechIcon('Socket.io') },
    { name: 'MongoDB & DynamoDB', level: 80, description: 'Proficient - NoSQL databases', icon: getTechIcon('MongoDB & DynamoDB') },
    { name: 'REST APIs', level: 95, description: 'Expert - Designed scalable APIs', icon: getTechIcon('REST APIs') },
  ],
  ai: [
    { name: 'OpenAI Integration', level: 90, description: 'Advanced - NutriVerseAI implementation', icon: getTechIcon('OpenAI Integration') },
    { name: 'Google Gemini', level: 85, description: 'Advanced - Multiple AI features', icon: getTechIcon('Google Gemini') },
    { name: 'Machine Learning', level: 80, description: 'Proficient - Timetable optimization', icon: getTechIcon('Machine Learning') },
    { name: 'OCR & Voice Recognition', level: 85, description: 'Advanced - Storyworth features', icon: getTechIcon('OCR & Voice Recognition') },
    { name: 'AI System Design', level: 85, description: 'Advanced - End-to-end AI solutions', icon: getTechIcon('AI System Design') },
  ],
  cloud: [
    { name: 'AWS Services', level: 80, description: 'Proficient - S3, SES, DynamoDB', icon: getTechIcon('AWS Services') },
    { name: 'Git & GitHub', level: 95, description: 'Expert - Version control mastery', icon: getTechIcon('Git & GitHub') },
    { name: 'Deployment & CI/CD', level: 85, description: 'Advanced - Vercel, Render experience', icon: getTechIcon('Deployment & CI/CD') },
    { name: 'Database Design', level: 90, description: 'Advanced - Scalable architectures', icon: getTechIcon('Database Design') },
    { name: 'Security Best Practices', level: 85, description: 'Advanced - JWT, encryption', icon: getTechIcon('Security Best Practices') },
  ]
}

interface SkillBarProps {
  name: string
  level: number
  description: string
  icon: any
  delay?: number
}

const SkillBar = ({ name, level, description, icon: Icon, delay = 0 }: SkillBarProps) => {
  const [animatedLevel, setAnimatedLevel] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevel(level)
    }, delay)
    return () => clearTimeout(timer)
  }, [level, delay])

  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: delay / 1000, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
            {name === 'React & Next.js' ? (
              <Icon />
            ) : (
              <Icon className="h-4 w-4" />
            )}
          </div>
          <h4 className="font-semibold text-sm">{name}</h4>
        </div>
        <span className="text-sm font-medium text-primary">{level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 mb-2">
        <motion.div
          className="bg-gradient-to-r from-primary to-purple-600 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${animatedLevel}%` }}
          transition={{ duration: 1.5, delay: delay / 1000, ease: "easeOut" }}
        />
      </div>
      <p className="text-xs text-muted-foreground">{description}</p>
    </motion.div>
  )
}



export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
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
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate software engineer from Karachi, Pakistan, specializing in AI-powered applications
              and enterprise-grade systems. Currently pursuing B.E. in Software Engineering at MUET with academic excellence,
              I've built production applications serving thousands of users worldwide.
            </p>
          </div>

          {/* Personal Story */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              {/* Profile Image */}
              <motion.div
                className="flex justify-center lg:justify-start"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                    <img
                      src="/profile.jpeg"
                      alt="Asadullah Samoon"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to a placeholder if image doesn't exist
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=Asadullah+Samoon&size=256&background=3b82f6&color=ffffff&bold=true`;
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🚀</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    My journey began with a fascination for solving complex problems through code. Over 4 years,
                    I've evolved from learning basic web development to architecting enterprise applications with
                    AI integration, serving over 10,000 real users in production environments.
                  </p>
                  <p>
                    From developing NutriVerseAI - a comprehensive nutrition platform with advanced AI features,
                    to building UnifyChat - an enterprise chat application with real-time messaging and file sharing,
                    I've consistently delivered production-ready solutions that make a real impact.
                  </p>
                  <p>
                    Currently pursuing my B.E. in Software Engineering at MUET while freelancing on Upwork,
                    I balance academic excellence with practical experience. When not coding,
                    I enjoy challenging games and exploring cutting-edge technologies.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-center mb-12">Technical Expertise & Proficiency</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skillsWithProficiency).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-lg mb-6 text-primary">
                    {category === 'ai' ? '🤖 AI & Machine Learning' :
                     category === 'cloud' ? '☁️ Cloud & DevOps' :
                     category === 'frontend' ? '🎨 Frontend & Mobile' :
                     category === 'backend' ? '⚙️ Backend & APIs' :
                     `${category} Development`}
                  </h4>
                  <div className="space-y-4">
                    {skillList.map((skill, skillIndex) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        description={skill.description}
                        icon={skill.icon}
                        delay={index * 200 + skillIndex * 100}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
