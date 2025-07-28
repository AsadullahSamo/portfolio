import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const skillsWithProficiency = {
  frontend: [
    { name: 'React & Next.js', level: 95, description: 'Expert level - Built multiple production apps' },
    { name: 'TypeScript', level: 90, description: 'Advanced - Used in all major projects' },
    { name: 'Flutter', level: 85, description: 'Advanced - UnifyChat mobile app' },
    { name: 'Tailwind CSS', level: 90, description: 'Advanced - Preferred styling framework' },
    { name: 'Angular', level: 75, description: 'Proficient - Multiple projects experience' },
  ],
  backend: [
    { name: 'Node.js & Express', level: 95, description: 'Expert - 4 years experience' },
    { name: 'PostgreSQL', level: 85, description: 'Advanced - Complex database designs' },
    { name: 'Socket.io', level: 90, description: 'Advanced - Real-time systems expert' },
    { name: 'MongoDB & DynamoDB', level: 80, description: 'Proficient - NoSQL databases' },
    { name: 'REST APIs', level: 95, description: 'Expert - Designed scalable APIs' },
  ],
  ai: [
    { name: 'OpenAI Integration', level: 90, description: 'Advanced - NutriVerseAI implementation' },
    { name: 'Google Gemini', level: 85, description: 'Advanced - Multiple AI features' },
    { name: 'Machine Learning', level: 80, description: 'Proficient - Timetable optimization' },
    { name: 'OCR & Voice Recognition', level: 85, description: 'Advanced - Storyworth features' },
    { name: 'AI System Design', level: 85, description: 'Advanced - End-to-end AI solutions' },
  ],
  cloud: [
    { name: 'AWS Services', level: 80, description: 'Proficient - S3, SES, DynamoDB' },
    { name: 'Git & GitHub', level: 95, description: 'Expert - Version control mastery' },
    { name: 'Deployment & CI/CD', level: 85, description: 'Advanced - Vercel, Render experience' },
    { name: 'Database Design', level: 90, description: 'Advanced - Scalable architectures' },
    { name: 'Security Best Practices', level: 85, description: 'Advanced - JWT, encryption' },
  ]
}

interface SkillBarProps {
  name: string
  level: number
  description: string
  delay?: number
}

const SkillBar = ({ name, level, description, delay = 0 }: SkillBarProps) => {
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
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold text-sm">{name}</h4>
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
