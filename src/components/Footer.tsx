import { Twitter, Github, Linkedin, Heart } from 'lucide-react'

const COMPANY_NAME = 'StackForge'

const productLinks = [
  { label: 'Product', href: '/#features' },
  { label: 'Templates', href: '/#templates' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Docs', href: '/#docs' },
  { label: 'Blog', href: '/#blog' },
]

const companyLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Careers', href: '/#careers' },
  { label: 'Blog', href: '/#blog' },
  { label: 'Contact', href: '/#contact' },
]

const legalLinks = [
  { label: 'Terms', href: '/#terms' },
  { label: 'Privacy', href: '/#privacy' },
  { label: 'Security', href: '/#security' },
]

const socials = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/',
    icon: Twitter,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/',
    icon: Linkedin,
  },
]

function Footer() {
  return (
    <footer
        className="relative z-10 mt-24"
        aria-label="Footer"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative rounded-2xl md:rounded-3xl transition-all duration-500 hover:scale-[1.005] group p-8 md:p-12 lg:p-16 mb-8"
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
                0 10px 20px -5px rgba(139,92,246,0.1),
                0 4px 8px -2px rgba(0,0,0,0.2)
              `,
              border: '1px solid rgba(255,255,255,0.02)',
            }}
          >
            {/* Gradient border overlay */}
            <div 
              className="absolute inset-0 rounded-2xl md:rounded-3xl pointer-events-none opacity-30"
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
              className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background: `linear-gradient(115deg, 
                  transparent 0%, 
                  rgba(255,255,255,0.03) 45%, 
                  rgba(255,255,255,0.06) 50%, 
                  rgba(255,255,255,0.03) 55%,
                  transparent 100%)`,
                transform: 'translateX(-100%)',
                animation: 'liquid-shine 4s ease-in-out infinite',
              }}
            />
            
            {/* Top highlight */}
            <div 
              className="absolute top-0 left-16 right-16 h-px opacity-30 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
              }}
            />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12">
            <section className="lg:col-span-3 flex flex-col gap-2" aria-labelledby="footer-product">
              <h2 id="footer-product" className="text-lg font-semibold text-white mb-2 tracking-tight">
                Product
              </h2>
              <nav aria-label="Product links" className="flex flex-col gap-1">
                {productLinks.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-gray-200 hover:text-purple-400 focus:text-purple-400 transition-colors rounded-lg px-2 py-1 outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent hover:bg-purple-500/10 focus:bg-purple-500/10"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </section>
            <section className="lg:col-span-3 flex flex-col gap-2" aria-labelledby="footer-company">
              <h2 id="footer-company" className="text-lg font-semibold text-white mb-2 tracking-tight">
                Company
              </h2>
              <nav aria-label="Company links" className="flex flex-col gap-1">
                {companyLinks.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-gray-200 hover:text-purple-400 focus:text-purple-400 transition-colors rounded-lg px-2 py-1 outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent hover:bg-purple-500/10 focus:bg-purple-500/10"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </section>
            <section className="lg:col-span-2 flex flex-col gap-2" aria-labelledby="footer-legal">
              <h2 id="footer-legal" className="text-lg font-semibold text-white mb-2 tracking-tight">
                Legal
              </h2>
              <nav aria-label="Legal links" className="flex flex-col gap-1">
                {legalLinks.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-gray-200 hover:text-purple-400 focus:text-purple-400 transition-colors rounded-lg px-2 py-1 outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent hover:bg-purple-500/10 focus:bg-purple-500/10"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </section>
            <section className="lg:col-span-4 flex flex-col h-full" aria-labelledby="footer-socials">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h2 id="footer-socials" className="text-lg font-semibold text-white mb-2 tracking-tight">
                    Socials
                  </h2>
                  <nav aria-label="Social media" className="flex flex-row gap-4">
                    {socials.map(({ label, href, icon: Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="group relative rounded-xl transition-all duration-300 hover:scale-110 p-2 flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, 
                            rgba(255,255,255,0.05), 
                            rgba(139,92,246,0.02))`,
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255,255,255,0.05)',
                          boxShadow: `
                            inset 0 1px 2px 0 rgba(255,255,255,0.05),
                            0 4px 8px -2px rgba(139,92,246,0.1)
                          `,
                        }}
                      >
                        <Icon className="w-6 h-6 text-gray-200 group-hover:text-purple-400 group-focus:text-purple-400 transition-colors relative z-10" />
                        <div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                          style={{
                            background: 'radial-gradient(circle at center, rgba(139,92,246,0.15), transparent 70%)',
                          }}
                        />
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="hidden lg:flex mt-8 text-sm text-gray-400 items-end gap-2">
                  <img 
                    src="/stackforge-logo.png"
                    alt="StackForge"
                    className="h-12 w-auto"
                  />
                  <div className="flex items-center">
                    <span className="font-semibold text-white">{COMPANY_NAME}</span>
                    <span className="mx-2 text-white/20">|</span>
                    Building the future of developer productivity.
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pb-8 lg:pb-10 px-2">
          <div className="text-sm text-gray-400 text-center lg:text-left flex items-center gap-2">
            <span>© 2024 <span className="font-semibold text-white">{COMPANY_NAME}</span>. All rights reserved.</span>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> on StackForge
            </span>
          </div>
          <div className="flex gap-4">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group relative rounded-xl transition-all duration-300 hover:scale-110 p-2 flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(255,255,255,0.05), 
                    rgba(139,92,246,0.02))`,
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  boxShadow: `
                    inset 0 1px 2px 0 rgba(255,255,255,0.05),
                    0 4px 8px -2px rgba(139,92,246,0.1)
                  `,
                }}
              >
                <Icon className="w-5 h-5 text-gray-300 group-hover:text-purple-400 group-focus:text-purple-400 transition-colors relative z-10" />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(139,92,246,0.15), transparent 70%)',
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer