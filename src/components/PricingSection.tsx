import React from 'react'
import { BadgeCheck, Star } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

const plans = [
  {
    name: 'Starter',
    price: '$19',
    period: '/mo',
    features: [
      'Unlimited projects',
      'Basic integrations',
      'Community support',
      'Single user',
    ],
    highlight: false,
    badge: null,
    button: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/mo',
    features: [
      'Everything in Starter',
      'Advanced integrations',
      'Priority support',
      'Team collaboration',
      'Custom workflows',
    ],
    highlight: true,
    badge: 'Most Popular',
    button: 'Upgrade to Pro',
  },
  {
    name: 'Lifetime',
    price: '$299',
    period: '/one-time',
    features: [
      'All Pro features',
      'Lifetime access',
      'Exclusive updates',
      'VIP support',
    ],
    highlight: false,
    badge: null,
    button: 'Buy Lifetime',
  },
]

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

const PricingSection: React.FC = () => {
  return (
    <>
      <Helmet>
        <style>{`
          @keyframes liquid-shine {
            0% { 
              transform: translateX(-100%);
              opacity: 0;
            }
            50% { 
              opacity: 1;
            }
            100% { 
              transform: translateX(100%);
              opacity: 0;
            }
          }
        `}</style>
      </Helmet>
      <section
        className="relative w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-transparent"
        aria-labelledby="pricing-heading"
      >
      <div className="max-w-7xl mx-auto">
        <h2
          id="pricing-heading"
          className="text-4xl md:text-5xl font-bold text-slate-50 mb-8 text-center tracking-tight"
        >
          Simple, transparent pricing
        </h2>
        <p className="text-lg md:text-xl text-slate-400 mb-12 text-center max-w-2xl mx-auto">
          Choose the plan that fits your team. No contracts, no hidden fees, cancel anytime.
        </p>
        <div
          className="hidden md:grid grid-cols-12 gap-0 items-stretch"
        >
          {/* Desktop: 3 cards, Pro centered and larger */}
          <div className="col-span-3 flex items-stretch">
            <div
              className="glass-card liquid-border relative flex flex-col transition-all duration-500 group w-full h-full"
              tabIndex={0}
              aria-label="Starter plan"
            >
              
              <div className="flex flex-col flex-1 p-8 gap-6 pt-10 pb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-slate-50 tracking-tight">
                  Starter
                </h3>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-50">
                    $19
                  </span>
                  <span className="text-base md:text-lg text-slate-400 font-medium">/mo</span>
                </div>
                <ul className="flex flex-col gap-2 mb-4">
                  {plans[0].features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-base md:text-lg text-slate-200"
                    >
                      <BadgeCheck className="w-4 h-4 text-purple-400 shrink-0" aria-hidden="true" />
                      <span className="text-slate-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-auto w-full relative flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-base md:text-lg text-white shadow-md transition-all duration-300 outline-none hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent active:scale-[0.98] overflow-hidden group/btn"
                  style={{
                    background: `linear-gradient(135deg, 
                      rgba(109,40,217,0.4), 
                      rgba(139,92,246,0.3))`,
                    backdropFilter: 'blur(20px) saturate(1.5)',
                    WebkitBackdropFilter: 'blur(20px) saturate(1.5)',
                    border: '1px solid rgba(139,92,246,0.2)',
                    boxShadow: `
                      inset 0 2px 4px 0 rgba(255,255,255,0.1),
                      inset 0 -2px 4px 0 rgba(139,92,246,0.05),
                      0 8px 20px rgba(109,40,217,0.2),
                      0 4px 8px rgba(0,0,0,0.2)
                    `,
                  }}
                  tabIndex={0}
                >
                  <span className="relative z-10">Get Started</span>
                  {/* Gradient overlay for depth */}
                  <div 
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1), transparent 50%)',
                    }}
                  />
                  {/* Animated shine */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 rounded-xl"
                    style={{
                      background: 'linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)',
                      transform: 'translateX(-100%)',
                      animation: 'liquid-shine 2s ease-in-out',
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-6 flex items-stretch">
            <div
              className="relative flex flex-col rounded-2xl md:rounded-3xl transition-all duration-500 hover:scale-[1.02] group w-full h-full z-10 scale-105 md:scale-110"
              style={{
                overflow: 'hidden',
                isolation: 'isolate',
                background: `linear-gradient(135deg, 
                  rgba(139,92,246,0.05) 0%, 
                  rgba(255,255,255,0.02) 50%,
                  rgba(139,92,246,0.03) 100%)`,
                backdropFilter: 'blur(20px) saturate(1.8)',
                WebkitBackdropFilter: 'blur(20px) saturate(1.8)',
                boxShadow: `
                  inset 0 2px 4px 0 rgba(255,255,255,0.06),
                  inset 0 -2px 4px 0 rgba(139,92,246,0.03),
                  0 25px 50px -12px rgba(139,92,246,0.25),
                  0 12px 24px -8px rgba(0,0,0,0.4)
                `,
                border: '1px solid rgba(139,92,246,0.15)',
              }}
              tabIndex={0}
              aria-label="Pro plan"
            >
              {/* Gradient border overlay - enhanced for Pro */}
              <div 
                className="absolute inset-0 rounded-2xl md:rounded-3xl pointer-events-none opacity-50"
                style={{
                  padding: '1px',
                  background: `linear-gradient(135deg, 
                    rgba(139,92,246,0.3), 
                    rgba(255,255,255,0.1),
                    rgba(139,92,246,0.2))`,
                  mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                  WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                  maskComposite: 'exclude',
                  WebkitMaskComposite: 'xor',
                }}
              />
              
              {/* Liquid glass shine effect - enhanced */}
              <div 
                className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `linear-gradient(115deg, 
                    transparent 0%, 
                    rgba(255,255,255,0.05) 45%, 
                    rgba(255,255,255,0.12) 50%, 
                    rgba(255,255,255,0.05) 55%,
                    transparent 100%)`,
                  transform: 'translateX(-100%)',
                  animation: 'liquid-shine 3s ease-in-out infinite',
                }}
              />
              
              {/* Top highlight - brighter for Pro */}
              <div 
                className="absolute top-0 left-8 right-8 h-px opacity-70 pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)',
                }}
              />
              
              {/* Purple glow effect */}
              <div 
                className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-30 pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 30px rgba(139,92,246,0.1)',
                }}
              />
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 text-slate-50 text-xs font-semibold shadow-lg border border-purple-400/40">
                <Star className="w-4 h-4 text-yellow-300" />
                Most Popular
              </div>
              <div className="flex flex-col flex-1 p-10 gap-6 pt-14 pb-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-purple-200 tracking-tight">
                  Pro
                </h3>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-purple-100">
                    $49
                  </span>
                  <span className="text-base md:text-lg text-slate-400 font-medium">/mo</span>
                </div>
                <ul className="flex flex-col gap-2 mb-4">
                  {plans[1].features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-base md:text-lg text-slate-200"
                    >
                      <BadgeCheck className="w-4 h-4 text-purple-400 shrink-0" aria-hidden="true" />
                      <span className="text-slate-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-auto w-full relative flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-base md:text-lg text-white shadow-md transition-all duration-300 outline-none hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent active:scale-[0.98] overflow-hidden group/btn"
                  style={{
                    background: `linear-gradient(135deg, 
                      rgba(109,40,217,0.5), 
                      rgba(139,92,246,0.4))`,
                    backdropFilter: 'blur(25px) saturate(1.8)',
                    WebkitBackdropFilter: 'blur(25px) saturate(1.8)',
                    border: '1px solid rgba(139,92,246,0.3)',
                    boxShadow: `
                      inset 0 3px 6px 0 rgba(255,255,255,0.15),
                      inset 0 -3px 6px 0 rgba(139,92,246,0.1),
                      0 12px 30px rgba(109,40,217,0.3),
                      0 6px 12px rgba(0,0,0,0.25),
                      0 0 0 2px rgba(139,92,246,0.15)
                    `,
                  }}
                  tabIndex={0}
                >
                  <span className="relative z-10 font-bold">Upgrade to Pro</span>
                  {/* Multiple gradient layers for enhanced glass effect */}
                  <div 
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.15), transparent 40%, rgba(139,92,246,0.05) 100%)',
                    }}
                  />
                  {/* Animated shine - stronger for Pro */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 rounded-xl"
                    style={{
                      background: 'linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)',
                      transform: 'translateX(-100%)',
                      animation: 'liquid-shine 2s ease-in-out',
                    }}
                  />
                  {/* Inner glow */}
                  <div 
                    className="absolute inset-0 rounded-xl pointer-events-none opacity-50"
                    style={{
                      boxShadow: 'inset 0 0 20px rgba(139,92,246,0.2)',
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-3 flex items-stretch">
            <div
              className="glass-card liquid-border relative flex flex-col transition-all duration-500 group w-full h-full"
              tabIndex={0}
              aria-label="Lifetime plan"
            >
              
              <div className="flex flex-col flex-1 p-8 gap-6 pt-10 pb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-slate-50 tracking-tight">
                  Lifetime
                </h3>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-50">
                    $299
                  </span>
                  <span className="text-base md:text-lg text-slate-400 font-medium">/one-time</span>
                </div>
                <ul className="flex flex-col gap-2 mb-4">
                  {plans[2].features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-base md:text-lg text-slate-200"
                    >
                      <BadgeCheck className="w-4 h-4 text-purple-400 shrink-0" aria-hidden="true" />
                      <span className="text-slate-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-auto w-full relative flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-base md:text-lg text-white shadow-md transition-all duration-300 outline-none hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent active:scale-[0.98] overflow-hidden group/btn"
                  style={{
                    background: `linear-gradient(135deg, 
                      rgba(109,40,217,0.4), 
                      rgba(139,92,246,0.3))`,
                    backdropFilter: 'blur(20px) saturate(1.5)',
                    WebkitBackdropFilter: 'blur(20px) saturate(1.5)',
                    border: '1px solid rgba(139,92,246,0.2)',
                    boxShadow: `
                      inset 0 2px 4px 0 rgba(255,255,255,0.1),
                      inset 0 -2px 4px 0 rgba(139,92,246,0.05),
                      0 8px 20px rgba(109,40,217,0.2),
                      0 4px 8px rgba(0,0,0,0.2)
                    `,
                  }}
                  tabIndex={0}
                >
                  <span className="relative z-10">Buy Lifetime</span>
                  {/* Gradient overlay for depth */}
                  <div 
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1), transparent 50%)',
                    }}
                  />
                  {/* Animated shine */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 rounded-xl"
                    style={{
                      background: 'linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)',
                      transform: 'translateX(-100%)',
                      animation: 'liquid-shine 2s ease-in-out',
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden grid grid-cols-1 gap-8 items-end">
          {plans.map((plan) => {
            const isPro = plan.highlight
            return (
              <div
                key={plan.name}
                className={classNames(
                  'relative flex flex-col rounded-2xl md:rounded-3xl transition-all duration-500 hover:scale-[1.01] group',
                  isPro ? 'z-10 scale-105' : 'z-0'
                )}
                style={{
                  overflow: 'hidden',
                  isolation: 'isolate',
                  background: isPro 
                    ? `linear-gradient(135deg, 
                        rgba(139,92,246,0.05) 0%, 
                        rgba(255,255,255,0.02) 50%,
                        rgba(139,92,246,0.03) 100%)`
                    : `linear-gradient(135deg, 
                        rgba(255,255,255,0.03) 0%, 
                        rgba(255,255,255,0.01) 50%,
                        rgba(139,92,246,0.02) 100%)`,
                  backdropFilter: isPro ? 'blur(20px) saturate(1.8)' : 'blur(20px) saturate(1.5)',
                  WebkitBackdropFilter: isPro ? 'blur(20px) saturate(1.8)' : 'blur(20px) saturate(1.5)',
                  boxShadow: isPro ? `
                    inset 0 2px 4px 0 rgba(255,255,255,0.06),
                    inset 0 -2px 4px 0 rgba(139,92,246,0.03),
                    0 25px 50px -12px rgba(139,92,246,0.25),
                    0 12px 24px -8px rgba(0,0,0,0.4)
                  ` : `
                    inset 0 1px 2px 0 rgba(255,255,255,0.05),
                    inset 0 -1px 2px 0 rgba(139,92,246,0.02),
                    0 10px 20px -5px rgba(139,92,246,0.15),
                    0 4px 8px -2px rgba(0,0,0,0.3)
                  `,
                  border: isPro ? '1px solid rgba(139,92,246,0.15)' : '1px solid rgba(255,255,255,0.02)',
                }}
                tabIndex={0}
                aria-label={`${plan.name} plan`}
              >
                {/* Gradient border overlay */}
                <div 
                  className="absolute inset-0 rounded-2xl md:rounded-3xl pointer-events-none"
                  style={{
                    padding: '1px',
                    background: isPro 
                      ? `linear-gradient(135deg, 
                          rgba(139,92,246,0.3), 
                          rgba(255,255,255,0.1),
                          rgba(139,92,246,0.2))`
                      : `linear-gradient(135deg, 
                          rgba(255,255,255,0.03), 
                          rgba(139,92,246,0.02),
                          rgba(255,255,255,0.01))`,
                    opacity: isPro ? 0.5 : 0.3,
                    mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                    WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                    maskComposite: 'exclude',
                    WebkitMaskComposite: 'xor',
                  }}
                />
                
                {/* Liquid glass shine effect */}
                <div 
                  className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
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
                    background: isPro 
                      ? 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)'
                      : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                  }}
                />
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 text-slate-50 text-xs font-semibold shadow-lg border border-purple-400/40">
                    <Star className="w-4 h-4 text-yellow-300" />
                    {plan.badge}
                  </div>
                )}
                <div className={classNames(
                  'flex flex-col flex-1 p-6 gap-6',
                  isPro ? 'pt-10 pb-8' : 'pt-8 pb-6'
                )}>
                  <h3 className={classNames(
                    'text-2xl md:text-3xl font-bold mb-2 text-slate-50 tracking-tight',
                    isPro && 'text-purple-200'
                  )}>
                    {plan.name}
                  </h3>
                  <div className="flex items-end gap-2 mb-2">
                    <span className={classNames(
                      'text-4xl md:text-5xl font-extrabold tracking-tight',
                      isPro ? 'text-purple-100' : 'text-slate-50'
                    )}>
                      {plan.price}
                    </span>
                    <span className="text-base md:text-lg text-slate-400 font-medium">{plan.period}</span>
                  </div>
                  <ul className="flex flex-col gap-2 mb-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-base md:text-lg text-slate-200"
                      >
                        <BadgeCheck className="w-4 h-4 text-purple-400 shrink-0" aria-hidden="true" />
                        <span className="text-slate-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`glass-button mt-auto w-full flex items-center justify-center font-semibold text-base md:text-lg text-white ${isPro ? 'border-purple-400/50' : ''}`}
                    tabIndex={0}
                  >
                    <span className="relative z-10">{plan.button}</span>
                    {/* Animated shine */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 rounded-xl"
                      style={{
                        background: isPro 
                          ? 'linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)'
                          : 'linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)',
                        transform: 'translateX(-100%)',
                        animation: 'liquid-shine 2s ease-in-out',
                      }}
                    />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
        <div className="mt-10 flex justify-center">
          <div 
            className="relative inline-flex items-center gap-2 px-5 py-3 rounded-2xl transition-all duration-500 hover:scale-[1.01] group"
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
            
            <BadgeCheck className="w-5 h-5 text-purple-400 relative z-10" />
            <span className="text-base md:text-lg font-medium text-slate-200 relative z-10">
              No hidden fees. What you see is what you pay.
            </span>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default PricingSection