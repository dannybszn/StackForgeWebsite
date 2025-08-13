import React, { useState, useMemo } from 'react'
import { FileText, Layout, Image, Code2, Palette, Layers, Globe, Database, Sparkles } from 'lucide-react'

type Template = {
  id: string
  name: string
  category: string
  icon: React.ReactNode
  preview?: string
}

const TEMPLATES: Template[] = [
  {
    id: '1',
    name: 'Landing Page',
    category: 'Web',
    icon: <Globe className="w-8 h-8 text-purple-400" aria-hidden="true" />,
  },
  {
    id: '2',
    name: 'Portfolio',
    category: 'Web',
    icon: <Layout className="w-8 h-8 text-pink-400" aria-hidden="true" />,
  },
  {
    id: '3',
    name: 'Dashboard',
    category: 'App',
    icon: <Layers className="w-8 h-8 text-blue-400" aria-hidden="true" />,
  },
  {
    id: '4',
    name: 'Blog',
    category: 'Content',
    icon: <FileText className="w-8 h-8 text-emerald-400" aria-hidden="true" />,
  },
  {
    id: '5',
    name: 'E-commerce',
    category: 'App',
    icon: <Database className="w-8 h-8 text-yellow-400" aria-hidden="true" />,
  },
  {
    id: '6',
    name: 'Image Gallery',
    category: 'Content',
    icon: <Image className="w-8 h-8 text-indigo-400" aria-hidden="true" />,
  },
  {
    id: '7',
    name: 'Code Snippet',
    category: 'Dev',
    icon: <Code2 className="w-8 h-8 text-cyan-400" aria-hidden="true" />,
  },
  {
    id: '8',
    name: 'Creative Studio',
    category: 'Design',
    icon: <Palette className="w-8 h-8 text-fuchsia-400" aria-hidden="true" />,
  },
  {
    id: '9',
    name: 'AI Starter',
    category: 'Dev',
    icon: <Sparkles className="w-8 h-8 text-purple-300" aria-hidden="true" />,
  },
]

const CATEGORIES = [
  { label: 'All', value: 'All' },
  ...Array.from(new Set(TEMPLATES.map(t => t.category))).map(c => ({
    label: c,
    value: c,
  })),
]

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

const TemplatesGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredTemplates = useMemo(() => {
    if (selectedCategory === 'All') return TEMPLATES
    return TEMPLATES.filter(t => t.category === selectedCategory)
  }, [selectedCategory])

  return (
    <section
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16 lg:py-24 flex flex-col items-center"
      aria-labelledby="templates-gallery-heading"
    >
      <h2
        id="templates-gallery-heading"
        className="text-3xl md:text-5xl font-bold mb-10 text-white text-center tracking-tight"
      >
        Templates
      </h2>
      <nav
        className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
        aria-label="Template categories"
      >
        {CATEGORIES.map(cat => (
          <button
            key={cat.value}
            type="button"
            className={classNames(
              'relative px-5 py-2 rounded-lg font-medium text-sm md:text-base transition-colors duration-120 outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2',
              selectedCategory === cat.value
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow'
                : 'bg-white/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-900/30'
            )}
            aria-pressed={selectedCategory === cat.value}
            tabIndex={0}
            onClick={() => setSelectedCategory(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </nav>
      <div
        className="w-full flex justify-center"
      >
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 w-full max-w-7xl"
          role="list"
          aria-label="Templates"
        >
          {filteredTemplates.map((template) => (
            <article
              key={template.id}
              tabIndex={0}
              aria-label={`${template.name} template`}
              className="group relative cursor-pointer"
            >
              
              {/* Card content with liquid glass */}
              <div 
                className="relative flex flex-col items-center justify-between min-h-[280px] p-6 rounded-3xl 
                          transform transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
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
                
                {/* Icon container with liquid glass */}
                <div className="relative mb-6 z-10">
                  <div className="absolute inset-0 bg-purple-500 rounded-2xl blur-2xl opacity-20 
                                  group-hover:opacity-40 transition-opacity duration-500" />
                  <div 
                    className="relative flex items-center justify-center w-20 h-20 rounded-2xl
                               transform group-hover:rotate-6 transition-all duration-300"
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
                    {template.icon}
                  </div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-purple-400 rounded-full opacity-0 
                                  group-hover:opacity-60 group-hover:animate-float-up" />
                  <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-pink-400 rounded-full opacity-0 
                                  group-hover:opacity-60 group-hover:animate-float-up animation-delay-200" />
                </div>
                
                {/* Text content */}
                <div className="flex flex-col items-center flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2 text-center 
                               group-hover:text-purple-300
                               transition-all duration-300">
                    {template.name}
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs font-medium
                                 bg-purple-500/10 text-purple-300 border border-purple-500/20
                                 group-hover:bg-purple-500/20 group-hover:border-purple-500/30
                                 transition-all duration-300">
                    {template.category}
                  </span>
                </div>
                
                {/* Bottom action indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
                              opacity-0 group-hover:opacity-100 transition-all duration-300 
                              group-hover:translate-y-0 translate-y-2 z-10">
                  <div className="flex items-center gap-2 text-xs text-purple-400">
                    <span>Use Template</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>
        {`
        @keyframes float-up {
          0% {
            transform: translateY(0) scale(0);
            opacity: 0;
          }
          50% {
            opacity: 0.6;
            transform: translateY(-20px) scale(1);
          }
          100% {
            transform: translateY(-40px) scale(0.8);
            opacity: 0;
          }
        }
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        .animate-float-up {
          animation: float-up 2s ease-out infinite;
        }
        .animate-shine {
          animation: shine 1s ease-out;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        `}
      </style>
    </section>
  )
}

export default TemplatesGallery