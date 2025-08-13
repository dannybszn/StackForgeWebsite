import React, { useEffect } from 'react'
import {
  Database,
  CreditCard,
  Lock,
  GitBranch,
  BarChart3,
  Image as AssetIcon,
} from 'lucide-react'

const features = [
  {
    name: 'Database',
    description: 'Reliable, scalable, and secure data storage for your app.',
    icon: Database,
    id: 'db',
  },
  {
    name: 'Payments',
    description: 'Seamless payment integrations for global commerce.',
    icon: CreditCard,
    id: 'payments',
  },
  {
    name: 'Authentication',
    description: 'Robust auth with SSO, OAuth, and multi-factor support.',
    icon: Lock,
    id: 'auth',
  },
  {
    name: 'Git Integration',
    description: 'Connect your repositories for automated workflows.',
    icon: GitBranch,
    id: 'git',
  },
  {
    name: 'PostHog Analytics',
    description: 'Actionable product analytics and event tracking.',
    icon: BarChart3,
    id: 'posthog',
  },
  {
    name: 'Assets',
    description: 'Manage and deliver images, videos, and files at scale.',
    icon: AssetIcon,
    id: 'assets',
  },
]


const FeaturesGrid: React.FC = () => {
  useEffect(() => {
    // Get all glass elements
    const glassElements = document.querySelectorAll('.glass-card')
    
    // Handle mouse movement over glass elements
    function handleMouseMove(this: HTMLElement, e: MouseEvent) {
      const rect = this.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      // Update filter turbulence based on mouse position
      const filter = document.querySelector('#glass-distortion feDisplacementMap')
      if (filter) {
        const scaleX = (x / rect.width) * 100
        const scaleY = (y / rect.height) * 100
        filter.setAttribute('scale', Math.min(scaleX, scaleY).toString())
      }
      
      // Add highlight effect
      const specular = this.querySelector('.glass-specular') as HTMLElement
      if (specular) {
        specular.style.background = `radial-gradient(
          circle at ${x}px ${y}px,
          rgba(255,255,255,0.15) 0%,
          rgba(255,255,255,0.05) 30%,
          rgba(255,255,255,0) 60%
        )`
      }
    }
    
    // Reset effects when mouse leaves
    function handleMouseLeave(this: HTMLElement) {
      const filter = document.querySelector('#glass-distortion feDisplacementMap')
      if (filter) {
        filter.setAttribute('scale', '77')
      }
      
      const specular = this.querySelector('.glass-specular') as HTMLElement
      if (specular) {
        specular.style.background = ''
        specular.style.boxShadow = 'inset 1px 1px 1px var(--highlight)'
      }
    }
    
    // Add mousemove effect for each glass element
    glassElements.forEach(element => {
      element.addEventListener('mousemove', handleMouseMove as EventListener)
      element.addEventListener('mouseleave', handleMouseLeave as EventListener)
    })
    
    // Cleanup
    return () => {
      glassElements.forEach(element => {
        element.removeEventListener('mousemove', handleMouseMove as EventListener)
        element.removeEventListener('mouseleave', handleMouseLeave as EventListener)
      })
    }
  }, [])

  return (
    <section
      aria-label="Platform Features"
      className="relative w-full py-16 md:py-24 z-10"
    >
      {/* SVG Filter for Glass Distortion - shared across all cards */}
      <svg style={{ display: 'none' }}>
        <filter id="glass-distortion">
          <feTurbulence type="turbulence" baseFrequency="0.008" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="77" />
        </filter>
      </svg>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10 items-stretch"
          role="list"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <article
                key={feature.id}
                tabIndex={0}
                aria-labelledby={`feature-title-${feature.id}`}
                className="glass-card group relative transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6D28D9] hover:scale-[1.02] hover:-translate-y-1 w-full h-full min-h-[220px]"
              >
                <div className="glass-filter"></div>
                <div className="glass-overlay"></div>
                <div className="glass-distortion-overlay"></div>
                <div className="glass-specular"></div>
                <div className="glass-content">
                  <div
                    className="flex items-center justify-center rounded-xl mb-5 w-14 h-14 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: 'rgba(139, 92, 246, 0.15)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                    }}
                    aria-hidden="true"
                  >
                    <Icon
                      className="w-8 h-8 md:w-9 md:h-9 text-white"
                      strokeWidth={2.2}
                      aria-hidden="true"
                    />
                  </div>
                  <h3
                    id={`feature-title-${feature.id}`}
                    className="text-center text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300"
                  >
                    {feature.name}
                  </h3>
                  <p className="text-center text-sm md:text-base text-gray-200 opacity-90 leading-snug">
                    {feature.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturesGrid