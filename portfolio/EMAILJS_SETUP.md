# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to make your contact form actually send emails to your inbox.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your Gmail account (asad.samo549@gmail.com)
5. Note down the **Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**Email Body:**
```
You have received a new message from your portfolio contact form:

**Name:** {{from_name}}
**Email:** {{from_email}}
**Subject:** {{subject}}

**Message:**
{{message}}

---
This message was sent from your portfolio website contact form.
```

4. Save the template and note down the **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys" in your dashboard
2. Copy your **Public Key**

## Step 5: Update Configuration

1. Open `src/lib/emailjs-config.ts`
2. Replace the placeholder values with your actual IDs:

```typescript
export const emailjsConfig = {
  serviceId: 'YOUR_ACTUAL_SERVICE_ID', // From Step 2
  templateId: 'YOUR_ACTUAL_TEMPLATE_ID', // From Step 3
  publicKey: 'YOUR_ACTUAL_PUBLIC_KEY', // From Step 4
  recipientEmail: 'asad.samo549@gmail.com'
}
```

## Step 6: Test the Form

1. Start your development server: `npm start`
2. Go to the contact section
3. Fill out the form and submit
4. Check your email (asad.samo549@gmail.com) for the message

## Troubleshooting

- **"Service not found" error**: Make sure your Service ID is correct
- **"Template not found" error**: Make sure your Template ID is correct
- **"Invalid public key" error**: Make sure your Public Key is correct
- **Emails not arriving**: Check your spam folder and verify the service connection

## Security Notes

- The public key is safe to expose in client-side code
- EmailJS handles the email sending securely
- Your Gmail credentials are stored securely on EmailJS servers

## Free Tier Limits

- EmailJS free tier allows 200 emails per month
- Perfect for a portfolio website
- Upgrade if you need more emails

## Alternative: Formspree

If you prefer an even simpler solution, you can use [Formspree](https://formspree.io/):

1. Sign up at Formspree
2. Create a new form
3. Replace the EmailJS implementation with Formspree's form action
4. No configuration needed - just add the form action URL

Let me know if you need help with any of these steps!
