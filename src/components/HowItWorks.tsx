import React from 'react'
import { MessageSquare, Sparkles, Rocket } from 'lucide-react'
import { motion, useAnimation, useInView } from 'framer-motion'

const steps = [
  {
    icon: MessageSquare,
    title: 'Describe Your Idea',
    desc: 'Just chat with our AI. Describe your app in plain English - no coding knowledge needed.',
  },
  {
    icon: Sparkles,
    title: 'AI Builds Instantly',
    desc: 'Watch AI generate your app. Integrate auth, databases, and payments as needed - all with simple prompts.',
  },
  {
    icon: Rocket,
    title: 'Deploy in 1-Click',
    desc: 'Your app is ready! Push to production instantly with automatic scaling and built-in hosting.',
  },
]

const palette = {
  bg: 'bg-[#0E0F13]',
  surface: 'bg-[#13151D]',
  surfaceAlt: 'bg-[#191C26]',
  border: 'border-[#242A38]',
  text: 'text-[#F8FAFC]',
  textSubtle: 'text-[#CBD5E1]',
  textMuted: 'text-[#94A3B8]',
  primary: 'text-[#6D28D9]',
  primaryBg: 'bg-[#6D28D9]',
  focus: 'focus-visible:ring-2 focus-visible:ring-[#6D28D9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E0F13]',
}

type StepCardProps = {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  title: string
  desc: string
  index: number
  animate: boolean
}

function StepCard({ icon: Icon, title, desc, index, animate }: StepCardProps) {
  return (
    <motion.li
      className={`group relative flex flex-col items-center justify-start overflow-hidden w-full h-full`}
      tabIndex={0}
      initial={{ opacity: 0, y: 32 }}
      animate={animate ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.22,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.08 * index,
      }}
      aria-label={title}
    >
      {/* Gradient background that shifts on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${
        index === 0 ? 'from-purple-900/20 via-transparent to-pink-900/10' :
        index === 1 ? 'from-blue-900/20 via-transparent to-purple-900/10' :
        'from-pink-900/20 via-transparent to-orange-900/10'
      } opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Main card content with liquid glass */}
      <div 
        className="relative flex flex-col items-center justify-start rounded-3xl 
                   transition-all duration-500 w-full h-full px-8 py-10 md:px-6 md:py-8 xl:px-10 xl:py-12
                   group-hover:translate-y-[-4px] group-hover:scale-[1.02]"
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
          className="absolute inset-0 rounded-3xl pointer-events-none opacity-30"
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
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
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
        
        {/* Step number indicator */}
        <div className="absolute top-4 right-4 text-6xl font-bold text-purple-500/10 group-hover:text-purple-500/20 
                        transition-colors duration-300">
          {String(index + 1).padStart(2, '0')}
        </div>
        
        {/* Icon with liquid glass */}
        <div className="relative mb-8 md:mb-6 z-10">
          <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl scale-150 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span 
            className="relative flex items-center justify-center w-16 h-16 md:w-14 md:h-14 rounded-2xl 
                       transition-all duration-300 group-hover:scale-110"
            style={{
              background: `linear-gradient(135deg, 
                rgba(139,92,246,0.1), 
                rgba(255,255,255,0.05))`,
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(139,92,246,0.2)',
              boxShadow: `
                inset 0 1px 2px 0 rgba(255,255,255,0.1),
                0 4px 8px -2px rgba(139,92,246,0.2)
              `,
            }}
          >
            <Icon className={`w-8 h-8 md:w-7 md:h-7 text-purple-400 group-hover:text-purple-300 
                             transition-colors duration-300`} strokeWidth={2.2} />
          </span>
        </div>
        
        <h3 className={`text-2xl md:text-xl font-semibold mb-3 text-center ${palette.text} 
                       group-hover:text-transparent group-hover:bg-clip-text 
                       group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 
                       transition-all duration-300`}>
          {title}
        </h3>
        <p className={`text-lg md:text-base ${palette.textMuted} text-center leading-relaxed max-w-xs 
                      group-hover:text-gray-300 transition-colors duration-300`}>
          {desc}
        </p>
        
        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 
                        bg-gradient-to-r from-transparent via-purple-500 to-transparent 
                        group-hover:w-full transition-all duration-500" />
      </div>
    </motion.li>
  )
}

const HowItWorks: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-16% 0px' })
  const controls = useAnimation()

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <section
      ref={ref}
      aria-label="How StackForge Works"
      className="w-full py-20 md:py-32 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.h2
          className={`text-4xl md:text-5xl font-bold mb-14 md:mb-20 text-center ${palette.text} tracking-tight`}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        >
          How It Works
        </motion.h2>
        <motion.ol
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 w-full max-w-5xl xl:max-w-6xl"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
            hidden: {},
          }}
        >
          {steps.map((step, i) => (
            <StepCard
              key={step.title}
              icon={step.icon}
              title={step.title}
              desc={step.desc}
              index={i}
              animate={isInView}
            />
          ))}
        </motion.ol>
      </div>
    </section>
  )
}

export default HowItWorks