import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
  author?: string
  twitterHandle?: string
  jsonLd?: object
}

const SEO: React.FC<SEOProps> = ({
  title = 'StackForge - Build Apps in Seconds with AI',
  description = 'Create full-stack applications instantly with AI. No coding required. Deploy with one click. Build web apps, mobile apps, and APIs using natural language.',
  keywords = 'AI app builder, no-code platform, instant deployment, full-stack development, AI coding assistant, web app builder, mobile app builder, API builder, StackForge',
  image = '/stackforge-logo.png',
  url = 'https://stackforge.ai',
  type = 'website',
  author = 'StackForge',
  twitterHandle = '@stackforge',
  jsonLd
}) => {
  const fullTitle = title.includes('StackForge') ? title : `${title} | StackForge`
  const fullUrl = url.startsWith('http') ? url : `https://stackforge.ai${url}`
  const fullImage = image.startsWith('http') ? image : `https://stackforge.ai${image}`

  // Default JSON-LD structured data
  const defaultJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'StackForge',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web, macOS, Windows, Linux',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1024'
    },
    author: {
      '@type': 'Organization',
      name: 'StackForge',
      url: 'https://stackforge.ai'
    },
    description: description,
    screenshot: fullImage
  }

  const structuredData = jsonLd || defaultJsonLd

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="StackForge" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="google" content="notranslate" />
      <meta name="format-detection" content="telephone=no" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />

      {/* Mobile Meta Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="StackForge" />

      {/* PWA Meta Tags */}
      <meta name="theme-color" content="#6D28D9" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Preconnect to External Domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://stackforge.ai" />
    </Helmet>
  )
}

export default SEO