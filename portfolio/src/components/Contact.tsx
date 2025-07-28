import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { useState } from 'react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'asad.samo549@gmail.com',
    href: 'mailto:asad.samo549@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+92 311 3750872',
    href: 'tel:+923113750872',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Karachi, Pakistan',
    href: '#',
  },
]

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission (replace with actual form handling)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }
  }
  return (
    <section id="contact" className="py-20 bg-muted/30">
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
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life with AI-powered solutions and enterprise-grade development.
              Let's discuss your next project or explore opportunities for collaboration.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-8">Let's Connect</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Card className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                                {info.label}
                              </h4>
                              {info.href !== '#' ? (
                                <a
                                  href={info.href}
                                  className="text-lg font-medium hover:text-primary transition-colors"
                                >
                                  {info.value}
                                </a>
                              ) : (
                                <span className="text-lg font-medium">{info.value}</span>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>


            </motion.div>

            {/* Call to Action */}
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <CardContent>
                  <div className="flex items-center mb-6">
                    <MessageSquare className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-2xl font-semibold">Send a Message</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          <User className="inline h-4 w-4 mr-1" />
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          <Mail className="inline h-4 w-4 mr-1" />
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                        placeholder="Project inquiry, collaboration, etc."
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background resize-none"
                        placeholder="Tell me about your project, requirements, timeline, etc."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>

                    {submitStatus === 'success' && (
                      <div className="text-green-600 text-center font-medium">
                        ✅ Message sent successfully! I'll get back to you soon.
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="text-red-600 text-center font-medium">
                        ❌ Failed to send message. Please try again or email me directly.
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
