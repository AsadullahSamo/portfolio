import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { emailjsConfig } from '../lib/emailjs-config'

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
    value: 'Hyderabad, Pakistan',
    href: '#',
  },
]

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    // Check if EmailJS is properly configured
    if (emailjsConfig.serviceId === 'YOUR_EMAILJS_SERVICE_ID' ||
        emailjsConfig.templateId === 'YOUR_EMAILJS_TEMPLATE_ID' ||
        emailjsConfig.publicKey === 'YOUR_EMAILJS_PUBLIC_KEY') {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
      return
    }
    
    setIsSubmitting(true)

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        to_email: emailjsConfig.recipientEmail,
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      }

      // Send email using EmailJS
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Email sending failed:', error)
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

                  {/* Configuration Warning */}
                  {(emailjsConfig.serviceId === 'YOUR_EMAILJS_SERVICE_ID' ||
                    emailjsConfig.templateId === 'YOUR_EMAILJS_TEMPLATE_ID' ||
                    emailjsConfig.publicKey === 'YOUR_EMAILJS_PUBLIC_KEY') && (
                    <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-yellow-800">
                            EmailJS Not Configured
                          </h3>
                          <div className="mt-2 text-sm text-yellow-700">
                            <p>
                              To enable the contact form, please configure EmailJS. See{' '}
                              <a href="#emailjs-setup" className="font-medium underline hover:text-yellow-600">
                                EMAILJS_SETUP.md
                              </a>{' '}
                              for instructions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
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
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background ${
                            errors.name ? 'border-red-500' : 'border-border'
                          }`}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                        )}
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
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background ${
                            errors.email ? 'border-red-500' : 'border-border'
                          }`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
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
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background ${
                          errors.subject ? 'border-red-500' : 'border-border'
                        }`}
                        placeholder="Project inquiry, collaboration, etc."
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                      )}
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
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background resize-none ${
                          errors.message ? 'border-red-500' : 'border-border'
                        }`}
                        placeholder="Tell me about your project, requirements, timeline, etc. (minimum 10 characters)"
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                      )}
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-muted-foreground">
                          Minimum 10 characters
                        </span>
                        <span className={`text-xs ${
                          formData.message.length < 10 ? 'text-muted-foreground' : 'text-green-600'
                        }`}>
                          {formData.message.length}/10
                        </span>
                      </div>
                    </div>

                    {/* Form Status Indicator */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>
                        {Object.keys(errors).length === 0 && 
                         formData.name.trim() && 
                         formData.email.trim() && 
                         formData.subject.trim() && 
                         formData.message.trim().length >= 10
                          ? '✅ Form is ready to submit'
                          : '📝 Please fill in all required fields'}
                      </span>
                      <span className="text-xs">
                        {formData.message.length}/10 characters
                      </span>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className={`w-full ${
                        Object.keys(errors).length === 0 && 
                        formData.name.trim() && 
                        formData.email.trim() && 
                        formData.subject.trim() && 
                        formData.message.trim().length >= 10
                          ? 'bg-green-600 hover:bg-green-700' 
                          : ''
                      }`}
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
                        ✅ Thank you, {formData.name}! Your message has been sent successfully. I'll get back to you soon.
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="text-red-600 text-center font-medium">
                        ❌ Failed to send message. {emailjsConfig.serviceId === 'YOUR_EMAILJS_SERVICE_ID' ? 
                          'Please configure EmailJS first (see setup guide above).' : 
                          'Please try again or email me directly.'}
                      </div>
                    )}
                  </form>
                  
                  {/* EmailJS Powered Note */}
                  <div className="mt-4 text-center text-xs text-muted-foreground">
                    Powered by{' '}
                    <a 
                      href="https://www.emailjs.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      EmailJS
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
