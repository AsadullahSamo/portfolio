# Contact Form Setup Guide

This guide will help you set up a working contact form that actually sends emails to your inbox (asad.samo549@gmail.com).

## Option 1: EmailJS (Recommended)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

### Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your Gmail account (asad.samo549@gmail.com)
5. Note down the **Service ID** (you'll need this)

### Step 3: Create Email Template
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

### Step 4: Get Your Public Key
1. Go to "Account" → "API Keys" in your dashboard
2. Copy your **Public Key**

### Step 5: Update Configuration
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

## Option 2: Formspree (Simpler Alternative)

### Step 1: Create Formspree Account
1. Go to [Formspree.io](https://formspree.io/) and sign up
2. Verify your email address

### Step 2: Create a New Form
1. Click "New Form"
2. Give it a name (e.g., "Portfolio Contact Form")
3. Note down the **Form ID** (you'll need this)

### Step 3: Update the Form Action
1. Open `src/components/ContactFormspree.tsx`
2. Replace `YOUR_FORMSPREE_ID` with your actual Form ID:

```tsx
<form 
  action="https://formspree.io/f/YOUR_ACTUAL_FORM_ID" 
  method="POST" 
  onSubmit={handleSubmit}
>
```

### Step 4: Test the Form
1. Start your development server: `npm start`
2. Go to the contact section
3. Fill out the form and submit
4. Check your email (asad.samo549@gmail.com) for the message

## Testing Your Setup

### For EmailJS:
1. Start your development server: `npm start`
2. Go to the contact section
3. Fill out the form and submit
4. Check your email (asad.samo549@gmail.com) for the message

### For Formspree:
1. Use the `ContactFormspree.tsx` component instead of `Contact.tsx`
2. Update your `App.tsx` to import the Formspree version
3. Test the form as described above

## Troubleshooting

### EmailJS Issues:
- **"Service not found" error**: Make sure your Service ID is correct
- **"Template not found" error**: Make sure your Template ID is correct
- **"Invalid public key" error**: Make sure your Public Key is correct
- **Emails not arriving**: Check your spam folder and verify the service connection

### Formspree Issues:
- **Form not submitting**: Check that your Form ID is correct
- **Emails not arriving**: Check your spam folder and verify the form is active
- **Validation errors**: Make sure all required fields are filled

## Security Notes

### EmailJS:
- The public key is safe to expose in client-side code
- EmailJS handles the email sending securely
- Your Gmail credentials are stored securely on EmailJS servers

### Formspree:
- No API keys or credentials needed
- Formspree handles everything securely
- Your email is only used for receiving form submissions

## Free Tier Limits

### EmailJS:
- 200 emails per month on free tier
- Perfect for a portfolio website
- Upgrade if you need more emails

### Formspree:
- 50 submissions per month on free tier
- Good for low-traffic portfolios
- Upgrade if you need more submissions

## Switching Between Implementations

To switch from EmailJS to Formspree:

1. In your `App.tsx`, change the import:
```tsx
// From:
import { Contact } from './components/Contact'

// To:
import { ContactFormspree as Contact } from './components/ContactFormspree'
```

2. Follow the Formspree setup steps above

## Need Help?

If you encounter any issues:
1. Check the console for error messages
2. Verify all configuration values are correct
3. Test with a simple message first
4. Check your email spam folder

Both solutions are reliable and will get your contact form working properly!
