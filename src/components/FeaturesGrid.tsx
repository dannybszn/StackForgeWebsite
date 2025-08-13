import React from 'react'
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
  return (
    <section
      aria-label="Platform Features"
      className="relative w-full py-16 md:py-24 z-10"
    >
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
              className="group relative rounded-2xl transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6D28D9] hover:shadow-[0_0_0_4px_rgba(109,40,217,0.18)] hover:z-10 outline-none cursor-pointer flex flex-col items-center justify-between p-6 md:p-8 min-h-[220px] h-full hover:scale-[1.02] hover:-translate-y-1"
              style={{
                overflow: 'hidden',
                isolation: 'isolate',
                background: `linear-gradient(135deg, 
                  rgba(255,255,255,0.03) 0%, 
                  rgba(255,255,255,0.01) 50%,
                  rgba(139,92,246,0.02) 100%)`,
                backdropFilter: 'blur(20px) saturate(1.5)',
                WebkitBackdropFilter: 'blur(20px) saturate(1.5)',
                boxShadow: `
                  inset 0 1px 2px 0 rgba(255,255,255,0.05),
                  inset 0 -1px 2px 0 rgba(139,92,246,0.02),
                  0 10px 20px -5px rgba(139,92,246,0.15),
                  0 4px 8px -2px rgba(0,0,0,0.3)
                `,
                border: '1px solid rgba(255,255,255,0.02)',
              }}
            >
              {/* Gradient border overlay */}
              <div 
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-30"
                style={{
                  padding: '1px',
                  background: `linear-gradient(135deg, 
                    rgba(255,255,255,0.03), 
                    rgba(139,92,246,0.02),
                    rgba(255,255,255,0.01))`,
                  mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                  WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                  maskComposite: 'exclude',
                  WebkitMaskComposite: 'xor',
                }}
              />
              
              {/* Liquid glass shine effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `linear-gradient(115deg, 
                    transparent 0%, 
                    rgba(255,255,255,0.03) 45%, 
                    rgba(255,255,255,0.08) 50%, 
                    rgba(255,255,255,0.03) 55%,
                    transparent 100%)`,
                  transform: 'translateX(-100%)',
                  animation: 'liquid-shine 3s ease-in-out infinite',
                }}
              />
              
              {/* Top highlight */}
              <div 
                className="absolute top-0 left-8 right-8 h-px opacity-50 pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                }}
              />
              <div
                className="flex items-center justify-center rounded-xl mb-5 w-14 h-14 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-110 relative z-10"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(139,92,246,0.1), 
                    rgba(255,255,255,0.05))`,
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(139,92,246,0.15)',
                  boxShadow: `
                    inset 0 1px 2px 0 rgba(255,255,255,0.1),
                    0 4px 8px -2px rgba(139,92,246,0.2)
                  `,
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
                className="text-center text-lg md:text-xl font-semibold text-white mb-1 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300"
              >
                {feature.name}
              </h3>
              <p className="text-center text-sm md:text-base text-gray-200 opacity-90 leading-snug mt-1 relative z-10 group-hover:text-gray-100 transition-colors duration-300">
                {feature.description}
              </p>
            </article>
          )
        })}
      </div>
      </div>
    </section>
  )
}

export default FeaturesGrid