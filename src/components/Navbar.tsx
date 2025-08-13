import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { name: 'Product', href: '/#product' },
  { name: 'Templates', href: '/#templates' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'Download', href: '/download' },
  { name: 'Docs', href: '/#docs' },
  { name: 'Blog', href: '/#blog' },
]


const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="sticky top-0 z-50 w-full transition-all duration-300 ease-out"
      style={{
        ...(scrolled ? {
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
          borderBottom: '1px solid rgba(255,255,255,0.02)',
        } : {
          background: 'transparent',
        })
      }}
      aria-label="Main navigation"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 items-center min-h-[68px] gap-2">
          {/* Logo */}
          <div className="col-span-4 md:col-span-2 flex items-center">
            <a
              href="/"
              className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] rounded-xl px-2 py-1 transition-shadow duration-150"
              aria-label="StackForge Home"
            >
              <img 
                src="/stackforge-logo.png"
                alt="StackForge"
                className="h-14 w-auto"
              />
              <span className="text-xl font-extrabold tracking-tight text-[#F8FAFC] select-none drop-shadow-[0_1px_2px_rgba(109,40,217,0.10)]">
                StackForge
              </span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex col-span-4 md:col-span-8 justify-center">
            <ul className="flex gap-3 lg:gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-base font-medium px-3 py-2 rounded-lg transition-colors duration-200 ease-out text-[#CBD5E1] hover:text-[#F8FAFC] hover:bg-[#232634]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:bg-[#232634]/60"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex col-span-4 md:col-span-2 justify-end items-center space-x-2">
            <a
              href="#signin"
              className="text-sm font-medium px-3 py-1 rounded-md transition-colors duration-200 ease-out text-[#CBD5E1] hover:text-[#F8FAFC] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:bg-[#232634]/60"
            >
              Sign In
            </a>
            <a
              href="#start"
              className="relative group inline-flex items-center px-3 py-1 rounded-md font-semibold text-sm text-white transition-all duration-500 hover:scale-[1.02] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
              style={{
                overflow: 'hidden',
                isolation: 'isolate',
                background: `linear-gradient(135deg, 
                  rgba(139,92,246,0.15), 
                  rgba(139,92,246,0.1),
                  rgba(255,255,255,0.05))`,
                backdropFilter: 'blur(10px) saturate(1.5)',
                WebkitBackdropFilter: 'blur(10px) saturate(1.5)',
                boxShadow: `
                  inset 0 1px 2px 0 rgba(255,255,255,0.1),
                  0 4px 8px -2px rgba(139,92,246,0.3)
                `,
                border: '1px solid rgba(139,92,246,0.2)',
              }}
            >
              <span className="z-10">Start Free</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden col-span-8 justify-end">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-[#CBD5E1] hover:text-[#F8FAFC] hover:bg-[#232634]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] transition-colors duration-200 ease-out"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-0 z-50 transition-all duration-200 ease-out ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
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
            borderBottom: '1px solid rgba(255,255,255,0.02)',
          }}
        >
          <div className="flex items-center justify-between px-4 py-4">
            <a
              href="/"
              className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] rounded-xl px-2 py-1"
              aria-label="StackForge Home"
            >
              <img 
                src="/stackforge-logo.png"
                alt="StackForge"
                className="h-14 w-auto"
              />
              <span className="text-xl font-extrabold tracking-tight text-[#F8FAFC] select-none">
                StackForge
              </span>
            </a>
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-[#CBD5E1] hover:text-[#F8FAFC] hover:bg-[#232634]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] transition-colors duration-200 ease-out"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <ul className="flex flex-col gap-1 px-4 pb-4">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block w-full text-base font-medium px-4 py-3 rounded-lg transition-colors duration-200 ease-out text-[#CBD5E1] hover:text-[#F8FAFC] hover:bg-[#232634]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:bg-[#232634]/60"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#signin"
                className="block w-full text-sm font-medium px-3 py-1 rounded-md transition-colors duration-200 ease-out text-[#CBD5E1] hover:text-[#F8FAFC] hover:bg-[#232634]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:bg-[#232634]/60"
                onClick={() => setMobileOpen(false)}
              >
                Sign In
              </a>
            </li>
            <li>
              <a
                href="#start"
                className="relative group block w-full text-center mt-2 px-3 py-1 rounded-md font-semibold text-sm text-white transition-all duration-500 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
                style={{
                  overflow: 'hidden',
                  isolation: 'isolate',
                  background: `linear-gradient(135deg, 
                    rgba(139,92,246,0.15), 
                    rgba(139,92,246,0.1),
                    rgba(255,255,255,0.05))`,
                  backdropFilter: 'blur(10px) saturate(1.5)',
                  WebkitBackdropFilter: 'blur(10px) saturate(1.5)',
                  boxShadow: `
                    inset 0 1px 2px 0 rgba(255,255,255,0.1),
                    0 4px 8px -2px rgba(139,92,246,0.3)
                  `,
                  border: '1px solid rgba(139,92,246,0.2)',
                }}
                onClick={() => setMobileOpen(false)}
              >
                <span className="z-10">Start Free</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar