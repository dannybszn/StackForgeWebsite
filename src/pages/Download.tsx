import React, { useEffect, useState } from 'react'
import { Code, Zap, Shield, Monitor } from 'lucide-react'
import SEO from '../components/SEO'

type Platform = 'mac' | 'windows' | 'linux' | 'mobile' | 'unknown'

const DownloadPage: React.FC = () => {
  const [platform, setPlatform] = useState<Platform>('unknown')
  
  useEffect(() => {
    const detectPlatform = (): Platform => {
      const userAgent = navigator.userAgent.toLowerCase()
      const platform = navigator.platform?.toLowerCase() || ''
      
      // Check for mobile first
      if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)) {
        return 'mobile'
      }
      
      // Check for desktop OS
      if (platform.includes('mac') || userAgent.includes('mac')) {
        return 'mac'
      }
      if (platform.includes('win') || userAgent.includes('win')) {
        return 'windows'
      }
      if (platform.includes('linux') || userAgent.includes('linux')) {
        return 'linux'
      }
      
      return 'unknown'
    }
    
    setPlatform(detectPlatform())
  }, [])

  const getDownloadButton = () => {
    if (platform === 'mobile') {
      return (
        <a
          href="#"
          className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl 
                   bg-[#1C1E26]/50 border border-[#2A2D3A] 
                   text-gray-400 font-medium cursor-not-allowed"
          onClick={(e) => e.preventDefault()}
        >
          <Monitor className="w-5 h-5" />
          Download from Desktop
        </a>
      )
    }

    const buttons = {
      mac: (
        <button
          disabled
          className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl 
                   bg-[#1C1E26]/50 border border-[#2A2D3A] 
                   text-gray-400 font-medium cursor-not-allowed"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Coming Soon
        </button>
      ),
      windows: (
        <button
          disabled
          className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl 
                   bg-[#1C1E26]/50 border border-[#2A2D3A] 
                   text-gray-400 font-medium cursor-not-allowed"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 5.5L3 18.5C3 19.88 4.12 21 5.5 21H12V19.5H5.5C4.95 19.5 4.5 19.05 4.5 18.5V5.5C4.5 4.95 4.95 4.5 5.5 4.5H12V3H5.5C4.12 3 3 4.12 3 5.5ZM8 7V9H10V7H8ZM10 10H8V12H10V10ZM8 13V15H10V13H8ZM11 7V9H13V7H11ZM13 10H11V12H13V10ZM11 13V15H13V13H11ZM14 7V9H16V7H14ZM16 10H14V12H16V10ZM14 13V15H16V13H14ZM21 5.5V18.5C21 19.88 19.88 21 18.5 21H12V19.5H18.5C19.05 19.5 19.5 19.05 19.5 18.5V5.5C19.5 4.95 19.05 4.5 18.5 4.5H12V3H18.5C19.88 3 21 4.12 21 5.5Z"/>
          </svg>
          Coming Soon
        </button>
      ),
      linux: (
        <button
          disabled
          className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl 
                   bg-[#1C1E26]/50 border border-[#2A2D3A] 
                   text-gray-400 font-medium cursor-not-allowed"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          Coming Soon
        </button>
      ),
      unknown: (
        <>
          <p className="text-gray-400 text-sm mb-4 text-center">Select your operating system:</p>
          <div className="space-y-3">
            <button
              disabled
              className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl 
                       bg-[#1C1E26]/50 border border-[#2A2D3A] 
                       text-gray-400 font-medium cursor-not-allowed"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Coming Soon - macOS
            </button>
            <button
              disabled
              className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl 
                       bg-[#1C1E26]/50 border border-[#2A2D3A] 
                       text-gray-400 font-medium cursor-not-allowed"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 5.5L3 18.5C3 19.88 4.12 21 5.5 21H12V19.5H5.5C4.95 19.5 4.5 19.05 4.5 18.5V5.5C4.5 4.95 4.95 4.5 5.5 4.5H12V3H5.5C4.12 3 3 4.12 3 5.5ZM8 7V9H10V7H8ZM10 10H8V12H10V10ZM8 13V15H10V13H8ZM11 7V9H13V7H11ZM13 10H11V12H13V10ZM11 13V15H13V13H11ZM14 7V9H16V7H14ZM16 10H14V12H16V10ZM14 13V15H16V13H14ZM21 5.5V18.5C21 19.88 19.88 21 18.5 21H12V19.5H18.5C19.05 19.5 19.5 19.05 19.5 18.5V5.5C19.5 4.95 19.05 4.5 18.5 4.5H12V3H18.5C19.88 3 21 4.12 21 5.5Z"/>
              </svg>
              Coming Soon - Windows
            </button>
            <button
              disabled
              className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl 
                       bg-[#1C1E26]/50 border border-[#2A2D3A] 
                       text-gray-400 font-medium cursor-not-allowed"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Coming Soon - Linux
            </button>
          </div>
        </>
      )
    }

    return buttons[platform] || buttons.unknown
  }

  return (
    <>
      <SEO 
        title="Download StackForge - Desktop App for Mac, Windows & Linux"
        description="Download StackForge desktop application to build and deploy full-stack applications with AI. Available for macOS, Windows, and Linux. Start building apps in seconds."
        keywords="download StackForge, desktop app, macOS app, Windows app, Linux app, AI development tool, app builder download, free app builder, vibe coder, vibe code"
        url="/download"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'StackForge Desktop',
          description: 'Desktop application for building full-stack applications with AI',
          url: 'https://stackforge.ai/download',
          applicationCategory: 'DeveloperApplication',
          operatingSystem: 'macOS 11.0+, Windows 10+, Ubuntu 20.04+',
          downloadUrl: 'https://stackforge.ai/download',
          softwareVersion: '1.0.0',
          fileSize: '150MB',
          requirements: 'macOS 11.0+, Windows 10+, or Ubuntu 20.04+',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
          }
        }}
      />
      <div className="min-h-screen bg-[#0E0F13] flex items-center justify-center px-4 py-12 sm:py-20">
      <div className="max-w-3xl w-full">
        {/* Main Card */}
        <div className="bg-[#13151D]/80 backdrop-blur-xl rounded-3xl border border-[#242A38] shadow-2xl p-8 sm:p-12 relative overflow-hidden">
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10 pointer-events-none" />
          
          {/* Content */}
          <div className="relative z-10">
            {/* Logo and Title */}
            <div className="flex flex-col items-center mb-8">
              <img 
                src="/stackforge-logo.png"
                alt="StackForge"
                className="h-32 sm:h-36 w-auto mb-6"
              />
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Welcome</h1>
              <p className="text-gray-400 text-center max-w-md text-sm sm:text-base">
                We're happy to have you on board and excited for you to explore everything that you can build with StackForge.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Code className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">Build full-stack apps</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Create complete applications with frontend, backend, databases, and APIs - all through natural language.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">Deploy instantly</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    One-click deployment to production with automatic scaling, SSL certificates, and global CDN.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">Enterprise-ready security</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Built-in authentication, secure API keys management, and compliance with industry standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Download Button(s) */}
            <div className="space-y-3">
              {getDownloadButton()}
            </div>

            {/* System Requirements or Mobile Notice */}
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[#242A38]">
              {platform === 'mobile' ? (
                <p className="text-yellow-500/80 text-xs text-center">
                  StackForge desktop app is required to build and deploy applications
                </p>
              ) : (
                <p className="text-gray-500 text-xs text-center">
                  {platform !== 'unknown' && `Detected OS: ${platform.charAt(0).toUpperCase() + platform.slice(1)} • `}
                  Requires macOS 11.0+, Windows 10+, or Ubuntu 20.04+
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="mt-6 sm:mt-8 text-center">
          <a href="/" className="text-gray-400 hover:text-purple-400 transition-colors text-sm sm:text-base">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default DownloadPage