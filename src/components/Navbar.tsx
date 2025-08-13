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
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Product')

  return (
    <>
      {/* SVG Filter for Glass Distortion */}
      <svg style={{ display: 'none' }}>
        <filter id="glass-distortion">
          <feTurbulence type="turbulence" baseFrequency="0.008" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="77" />
        </filter>
      </svg>

      <nav 
        className="glass-nav sticky top-0 z-50 w-full"
        aria-label="Main navigation"
      >
        <div className="glass-filter"></div>
        <div className="glass-overlay"></div>
        <div className="glass-specular"></div>
        <div className="glass-content">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
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
                  <span className="text-xl font-extrabold tracking-tight text-white select-none drop-shadow-[0_1px_2px_rgba(109,40,217,0.10)]">
                    StackForge
                  </span>
                </a>
              </div>

              {/* Desktop Nav Links */}
              <div className="hidden md:flex">
                <ul className="nav-list">
                  {NAV_LINKS.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className={`nav-item ${activeLink === link.name ? 'active' : ''}`}
                        onClick={() => setActiveLink(link.name)}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Desktop CTAs */}
              <div className="hidden md:flex items-center space-x-3">
                <a
                  href="#signin"
                  className="nav-item"
                >
                  Sign In
                </a>
                <a
                  href="#start"
                  className="nav-item active"
                >
                  Start Free
                </a>
              </div>

              {/* Mobile Hamburger */}
              <div className="flex md:hidden">
                <button
                  type="button"
                  className="nav-item"
                  aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={mobileOpen}
                  onClick={() => setMobileOpen((v) => !v)}
                >
                  {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-x-0 top-[80px] z-50 glass-nav mx-4 rounded-b-xl">
          <div className="glass-filter"></div>
          <div className="glass-overlay"></div>
          <div className="glass-specular"></div>
          <div className="glass-content">
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`nav-item block w-full ${activeLink === link.name ? 'active' : ''}`}
                    onClick={() => {
                      setActiveLink(link.name)
                      setMobileOpen(false)
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="border-t border-white/10 pt-2 mt-2">
                <a
                  href="#signin"
                  className="nav-item block w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign In
                </a>
              </li>
              <li>
                <a
                  href="#start"
                  className="nav-item active block w-full text-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Start Free
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar