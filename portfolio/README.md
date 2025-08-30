# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 🌙 Dark/Light theme toggle
- ✨ Smooth animations with Framer Motion
- 📱 Mobile-first responsive design
- 🎯 Interactive components and smooth scrolling
- 📧 **Working contact form with EmailJS integration**
- 🚀 Optimized performance and SEO

## Contact Form

The contact form is now fully functional and will send actual emails to your inbox (asad.samo549@gmail.com). 

### Setup Options

1. **EmailJS (Recommended)** - More control, 200 emails/month free
2. **Formspree** - Simpler setup, 50 submissions/month free

See `CONTACT_FORM_SETUP.md` for detailed setup instructions.

### Quick Start

1. Choose your preferred solution (EmailJS or Formspree)
2. Follow the setup guide in `CONTACT_FORM_SETUP.md`
3. Update the configuration files with your credentials
4. Test the form - you'll receive emails in your inbox!

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up the contact form (see setup guide above)
4. Start development server: `npm start`
5. Build for production: `npm run build`

## Technologies Used

- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React Icons
- EmailJS (for contact form)

## Project Structure

```
src/
├── components/          # React components
│   ├── Contact.tsx     # EmailJS contact form
│   ├── ContactFormspree.tsx  # Formspree alternative
│   └── ui/             # UI components
├── lib/                # Utilities and config
│   ├── emailjs-config.ts  # EmailJS configuration
│   └── test-emailjs.ts    # EmailJS testing utility
└── ...
```

## Contact Form Features

- ✅ Real-time validation
- ✅ Email format verification
- ✅ Character count for messages
- ✅ Loading states and success/error messages
- ✅ Accessible form design
- ✅ Mobile-responsive layout
- ✅ Spam protection
- ✅ Professional email templates

## Support

If you need help setting up the contact form:
1. Check the setup guides in the documentation
2. Verify your configuration values
3. Test with the provided testing utilities
4. Check your email spam folder

## License

This project is open source and available under the [MIT License](LICENSE).
