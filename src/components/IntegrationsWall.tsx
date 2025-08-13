import React from 'react'
import { CreditCard, Database, ShieldCheck, GitBranch, BarChart, Zap } from 'lucide-react'

const integrations = [
  {
    name: 'Stripe',
    descriptor: 'Payments',
    icon: CreditCard,
    ariaLabel: 'Stripe – Payments',
  },
  {
    name: 'Supabase',
    descriptor: 'Backend',
    icon: Zap,
    ariaLabel: 'Supabase – Backend',
  },
  {
    name: 'Prisma',
    descriptor: 'DB',
    icon: Database,
    ariaLabel: 'Prisma – Database',
  },
  {
    name: 'Auth',
    descriptor: 'Authentication',
    icon: ShieldCheck,
    ariaLabel: 'Auth – Authentication',
  },
  {
    name: 'Git',
    descriptor: 'Version Control',
    icon: GitBranch,
    ariaLabel: 'Git – Version Control',
  },
  {
    name: 'PostHog',
    descriptor: 'Analytics',
    icon: BarChart,
    ariaLabel: 'PostHog – Analytics',
  },
]

const IntegrationsWall: React.FC = () => {
  return (
    <section
      aria-labelledby="integrations-wall-title"
      className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 md:py-20 lg:py-28"
    >
      <ul
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-10"
        role="list"
      >
        {integrations.map((integration) => {
          const Icon = integration.icon
          return (
            <li
              key={integration.name}
              className="flex items-stretch"
            >
              <button
                type="button"
                tabIndex={0}
                aria-label={integration.ariaLabel}
                className="group relative w-full flex flex-col items-center justify-center p-6 md:p-8 gap-2 rounded-2xl transition-all duration-500 hover:scale-[1.05] hover:z-20 outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
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
                
                {/* Hover glow */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 0 20px rgba(139,92,246,0.05)',
                  }}
                />
                <span
                  className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full transition-all duration-300 group-hover:scale-110 z-10"
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
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-purple-400 drop-shadow-[0_0_8px_rgba(139,92,246,0.3)] relative z-10" />
                  <div 
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(139,92,246,0.2), transparent 70%)',
                    }}
                  />
                </span>
                <span className="mt-3 text-lg md:text-xl font-semibold text-white text-center relative z-10">
                  {integration.name}
                </span>
                {integration.descriptor && (
                  <span className="text-sm md:text-base text-purple-300 font-medium opacity-90 text-center relative z-10">
                    {integration.descriptor}
                  </span>
                )}
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default IntegrationsWall