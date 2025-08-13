import React from 'react'

const benefits = [
  { label: 'NoCode→Code' },
  { label: 'Flat Fee/BYO keys' },
  { label: '1-click Deploy' },
]

const BenefitsStrip: React.FC = () => {
  return (
    <section
      aria-label="Key Benefits"
      className="relative w-full flex justify-center bg-transparent z-10"
    >
      <ul
        className="
          w-full max-w-5xl
          flex flex-col sm:flex-row justify-between items-center
          gap-4 sm:gap-6 lg:gap-8
          px-4 sm:px-6 lg:px-12
          py-4 lg:py-6
        "
      >
        {benefits.map((benefit) => (
          <li
            key={benefit.label}
            className="group relative w-full sm:flex-1 sm:min-w-[140px] md:min-w-[180px] max-w-xs"
          >
            <div
              className="flex items-center justify-center h-14 sm:h-16 rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-0.5 cursor-default"
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
              tabIndex={0}
              aria-label={benefit.label}
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
              
              <span className="text-base sm:text-lg font-semibold text-slate-50 text-center px-4 sm:px-6 relative z-10">{benefit.label}</span>
            </div>
          </li>
        ))}
      </ul>
      <style>
        {`
          @keyframes liquid-shine {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(200%);
            }
          }
        `}
      </style>
    </section>
  )
}

export default BenefitsStrip