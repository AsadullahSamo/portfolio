import emailjs from '@emailjs/browser'
import { emailjsConfig } from './emailjs-config'

export async function testEmailJS() {
  console.log('Testing EmailJS configuration...')
  console.log('Service ID:', emailjsConfig.serviceId)
  console.log('Template ID:', emailjsConfig.templateId)
  console.log('Public Key:', emailjsConfig.publicKey ? 'Set' : 'Not set')
  
  // Check if configuration is complete
  if (emailjsConfig.serviceId === 'YOUR_EMAILJS_SERVICE_ID' ||
      emailjsConfig.templateId === 'YOUR_EMAILJS_TEMPLATE_ID' ||
      emailjsConfig.publicKey === 'YOUR_EMAILJS_PUBLIC_KEY') {
    console.error('❌ EmailJS is not properly configured!')
    console.error('Please update src/lib/emailjs-config.ts with your actual values')
    return false
  }
  
  try {
    console.log('✅ Configuration looks good, testing email send...')
    
    const templateParams = {
      to_email: emailjsConfig.recipientEmail,
      from_name: 'Test User',
      from_email: 'test@example.com',
      subject: 'Test Message from Portfolio',
      message: 'This is a test message to verify EmailJS is working correctly.',
      reply_to: 'test@example.com',
    }
    
    const result = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      templateParams,
      emailjsConfig.publicKey
    )
    
    console.log('✅ Test email sent successfully!')
    console.log('Result:', result)
    return true
    
  } catch (error) {
    console.error('❌ Test email failed:', error)
    return false
  }
}

// Function to test from browser console
if (typeof window !== 'undefined') {
  (window as any).testEmailJS = testEmailJS
  console.log('To test EmailJS, run: testEmailJS() in the console')
}
