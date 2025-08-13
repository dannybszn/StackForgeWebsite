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
              className="glass-card liquid-border group relative transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6D28D9] outline-none cursor-pointer flex flex-col items-center justify-between p-6 md:p-8 min-h-[220px] h-full"
            >
              <div
                className="liquid-glow flex items-center justify-center rounded-xl mb-5 w-14 h-14 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-110 relative z-10 glass-morphism"
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