import { useEffect } from 'react'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  author?: string
  url?: string
  image?: string
  type?: string
}

export function SEOHead({
  title = "Your Name - Full Stack Developer",
  description = "Passionate full-stack developer creating exceptional digital experiences through clean code, innovative solutions, and user-centered design.",
  keywords = "full stack developer, web developer, react, typescript, javascript, node.js, portfolio",
  author = "Your Name",
  url = "https://yourportfolio.com",
  image = "https://yourportfolio.com/og-image.jpg",
  type = "website"
}: SEOHeadProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let meta = document.querySelector(selector) as HTMLMetaElement
      
      if (!meta) {
        meta = document.createElement('meta')
        if (property) {
          meta.setAttribute('property', name)
        } else {
          meta.setAttribute('name', name)
        }
        document.head.appendChild(meta)
      }
      
      meta.setAttribute('content', content)
    }

    // Basic meta tags
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    updateMetaTag('author', author)
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0')
    updateMetaTag('robots', 'index, follow')

    // Open Graph meta tags
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:type', type, true)
    updateMetaTag('og:url', url, true)
    updateMetaTag('og:image', image, true)
    updateMetaTag('og:site_name', 'Your Portfolio', true)

    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', image)
    updateMetaTag('twitter:creator', '@yourusername')

    // Additional SEO meta tags
    updateMetaTag('theme-color', '#3b82f6')
    updateMetaTag('msapplication-TileColor', '#3b82f6')

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)

    // Structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": author,
      "jobTitle": "Full Stack Developer",
      "description": description,
      "url": url,
      "image": image,
      "sameAs": [
        "https://github.com/yourusername",
        "https://linkedin.com/in/yourusername",
        "https://twitter.com/yourusername"
      ],
      "knowsAbout": [
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "Full Stack Development",
        "Web Development"
      ]
    }

    // Update or create structured data script
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]')
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script')
      structuredDataScript.setAttribute('type', 'application/ld+json')
      document.head.appendChild(structuredDataScript)
    }
    structuredDataScript.textContent = JSON.stringify(structuredData)

  }, [title, description, keywords, author, url, image, type])

  return null
}