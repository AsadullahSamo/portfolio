import { motion } from 'framer-motion'
import { useState } from 'react'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'

const skillCategories = {
  frontend: {
    title: 'Frontend Development',
    color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 88 },
      { name: 'JavaScript', level: 95 },
      { name: 'HTML5', level: 98 },
      { name: 'CSS3', level: 92 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Sass/SCSS', level: 85 },
      { name: 'Vue.js', level: 75 },
      { name: 'Angular', level: 70 },
      { name: 'Framer Motion', level: 85 }
    ]
  },
  backend: {
    title: 'Backend Development',
    color: 'bg-green-500/10 text-green-600 dark:text-green-400',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'Python', level: 85 },
      { name: 'Django', level: 80 },
      { name: 'FastAPI', level: 75 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 82 },
      { name: 'Redis', level: 75 },
      { name: 'GraphQL', level: 78 },
      { name: 'REST APIs', level: 92 },
      { name: 'Prisma', level: 80 }
    ]
  },
  tools: {
    title: 'Tools & Technologies',
    color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'Vercel', level: 90 },
      { name: 'Figma', level: 85 },
      { name: 'VS Code', level: 98 },
      { name: 'Postman', level: 88 },
      { name: 'Jest', level: 82 },
      { name: 'Cypress', level: 75 },
      { name: 'Webpack', level: 78 },
      { name: 'Vite', level: 85 }
    ]
  },
  soft: {
    title: 'Soft Skills',
    color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
    skills: [
      { name: 'Problem Solving', level: 95 },
      { name: 'Team Leadership', level: 88 },
      { name: 'Communication', level: 92 },
      { name: 'Agile/Scrum', level: 85 },
      { name: 'Project Management', level: 80 },
      { name: 'Mentoring', level: 85 },
      { name: 'Code Review', level: 90 },
      { name: 'Documentation', level: 88 }
    ]
  }
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('frontend')
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section className="py-20 bg-muted/30">
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
              Technical <span className="text-primary">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical expertise and proficiency levels 
              across different technologies and tools.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(skillCategories).map(([key, category]) => (
              <motion.button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? category.color + ' shadow-lg'
                    : 'bg-background hover:bg-accent text-muted-foreground hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.title}
              </motion.button>
            ))}
          </div>

          {/* Skills Display */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-8 text-center">
                  {skillCategories[activeCategory as keyof typeof skillCategories].title}
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className="space-y-3"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {skill.level}%
                        </Badge>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ 
                            width: `${skill.level}%`,
                            scale: hoveredSkill === skill.name ? 1.02 : 1
                          }}
                          transition={{ 
                            duration: 0.8, 
                            delay: index * 0.05,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { label: 'Years Experience', value: '5+' },
              { label: 'Projects Completed', value: '50+' },
              { label: 'Technologies Mastered', value: '30+' },
              { label: 'Happy Clients', value: '25+' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}