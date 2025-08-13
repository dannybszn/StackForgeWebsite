import React, { useRef, useEffect, useState } from 'react'
import { ChevronRight, Sparkles } from 'lucide-react'

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handle = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        if (rect.top < window.innerHeight - 100) setVisible(true)
      }
    }
    handle()
    window.addEventListener('scroll', handle)
    return () => window.removeEventListener('scroll', handle)
  }, [])

  return (
    <section
      aria-label="Hero"
      className="relative min-h-[85vh] w-full overflow-hidden flex items-center"
    >
      <div
        ref={sectionRef}
        className={`relative z-10 container mx-auto px-4 sm:px-8 lg:px-16 transition-all duration-700 ease-out ${
          visible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Hero content positioned in center-right area, far left on mobile */}
        <div className="max-w-2xl mx-4 sm:mx-auto lg:ml-auto lg:mr-[28rem] -mt-52 lg:-mt-[22rem]">
          {/* Small accent badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">AI-Powered Platform</span>
          </div>
          
          {/* Main headline - shorter and punchier */}
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Build Apps in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Minutes
            </span>
          </h1>
          
          {/* Simplified tagline */}
          <p className="text-lg text-gray-300 mb-8 max-w-lg">
            From idea to deployment with AI. No code required.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/download"
              className="glass-button group inline-flex items-center text-white font-semibold"
            >
              Download Now
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#learn-more"
              className="glass-button inline-flex items-center text-gray-200 font-semibold"
            >
              Watch Demo
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="flex items-center gap-6 mt-8 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              1-click deploy
            </span>
            <span>•</span>
            <span>BYO API keys</span>
            <span>•</span>
            <span>Flat pricing</span>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full p-1">
          <div className="w-1 h-2 bg-gray-400 rounded-full mx-auto animate-scroll"></div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero