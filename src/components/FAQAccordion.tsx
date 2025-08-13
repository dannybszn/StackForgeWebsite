import React, { useState, useRef, KeyboardEvent } from 'react'
import { ChevronDown } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

type FAQ = {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: 'What is StackForge?',
    answer:
      'StackForge is an AI-powered platform that lets you build full-stack applications using natural language. Simply describe what you want to build, and our AI generates production-ready code instantly.',
  },
  {
    question: 'Do I need coding experience to use StackForge?',
    answer:
      'No coding experience required! StackForge is designed for everyone - from non-developers who want to build apps to experienced developers who want to accelerate their workflow.',
  },
  {
    question: 'What kind of apps can I build?',
    answer:
      'You can build web apps, mobile apps, APIs, dashboards, e-commerce sites, SaaS platforms, and more. StackForge supports React, Next.js, Node.js, databases, authentication, and payment integrations.',
  },
  {
    question: 'How does deployment work?',
    answer:
      'One-click deployment to production! StackForge handles hosting, SSL certificates, domains, and scaling automatically. Your app goes live instantly with a shareable URL.',
  },
  {
    question: 'Can I export my code?',
    answer:
      'Yes! You own 100% of the code generated. Download your project anytime as a standard Git repository that you can edit in any IDE or deploy anywhere.',
  },
  {
    question: 'Is StackForge free to try?',
    answer:
      'Yes, StackForge offers a free tier to get started. Build and deploy apps immediately without a credit card. Upgrade for more resources and advanced features.',
  },
]

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const headersRef = useRef<Array<HTMLButtonElement | null>>([])

  // Generate FAQ Schema for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  const handleHeaderKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    idx: number
  ) => {
    const lastIdx = faqs.length - 1
    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault()
        const next = idx === lastIdx ? 0 : idx + 1
        headersRef.current[next]?.focus()
        break
      }
      case 'ArrowUp': {
        e.preventDefault()
        const prev = idx === 0 ? lastIdx : idx - 1
        headersRef.current[prev]?.focus()
        break
      }
      case 'Home': {
        e.preventDefault()
        headersRef.current[0]?.focus()
        break
      }
      case 'End': {
        e.preventDefault()
        headersRef.current[lastIdx]?.focus()
        break
      }
      case 'Enter':
      case ' ': {
        e.preventDefault()
        setOpenIndex(openIndex === idx ? null : idx)
        break
      }
      case 'Escape': {
        e.preventDefault()
        setOpenIndex(null)
        break
      }
    }
  }

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
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
          
          .faq-glass-item {
            position: relative;
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(20px) saturate(1.8);
            -webkit-backdrop-filter: blur(20px) saturate(1.8);
          }
          
          .faq-glass-item::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 16px;
            padding: 1px;
            background: linear-gradient(135deg, 
              rgba(255,255,255,0.1),
              rgba(139,92,246,0.05),
              rgba(255,255,255,0.05));
            -webkit-mask: 
              linear-gradient(#fff 0 0) content-box, 
              linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
          }
        `}</style>
      </Helmet>
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-6 md:gap-8 px-2 md:px-0 py-12">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx
        return (
          <div
            key={faq.question}
            role="region"
            aria-labelledby={`faq-header-${idx}`}
            className={`glass-accordion liquid-border relative transition-all duration-500 hover:scale-[1.01] group ${isOpen ? 'open' : ''}`}
          >
            <button
              ref={el => {
                headersRef.current[idx] = el
                return undefined
              }}
              id={`faq-header-${idx}`}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${idx}`}
              tabIndex={0}
              className="relative z-10 w-full flex flex-row items-center justify-between gap-6 px-7 py-5 md:py-6 text-left outline-none transition-all duration-150
                text-[1.09rem] md:text-lg font-semibold tracking-tight
                text-white/90 hover:text-white
                focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
                rounded-2xl"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              onKeyDown={e => handleHeaderKeyDown(e, idx)}
            >
              <span className="flex-1 pr-2">{faq.question}</span>
              <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                isOpen ? 'bg-purple-500/20 rotate-180' : 'bg-white/5'
              }`}>
                <ChevronDown
                  className={`w-5 h-5 transition-colors duration-300 ${
                    isOpen ? 'text-purple-400' : 'text-gray-400'
                  }`}
                  aria-hidden="true"
                />
              </div>
            </button>
            <div
              id={`faq-panel-${idx}`}
              role="region"
              aria-labelledby={`faq-header-${idx}`}
              className={`relative overflow-hidden transition-[max-height,opacity] duration-300 ease-out px-7 ${
                isOpen
                  ? 'max-h-96 opacity-100 py-3 md:py-4'
                  : 'max-h-0 opacity-0 py-0'
              }`}
            >
              <div 
                className="relative"
                style={{
                  borderTop: isOpen ? '1px solid rgba(139,92,246,0.1)' : 'none',
                  paddingTop: isOpen ? '0.75rem' : '0',
                  marginTop: isOpen ? '-0.25rem' : '0',
                }}
              >
                <div
                  className="text-gray-300/80 text-[0.99rem] md:text-base leading-relaxed relative z-10"
                  tabIndex={isOpen ? 0 : -1}
                >
                  {faq.answer}
                </div>
                {/* Subtle gradient overlay when open */}
                {isOpen && (
                  <div 
                    className="absolute -inset-4 pointer-events-none"
                    style={{
                      background: 'radial-gradient(ellipse at top left, rgba(139,92,246,0.03), transparent 60%)',
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        )
      })}
      </div>
    </>
  )
}

export default FAQAccordion