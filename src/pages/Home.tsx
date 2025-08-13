import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BenefitsStrip from '../components/BenefitsStrip'
import FeaturesGrid from '../components/FeaturesGrid'
import HowItWorks from '../components/HowItWorks'
import TemplatesGallery from '../components/TemplatesGallery'
import IntegrationsWall from '../components/IntegrationsWall'
import PricingSection from '../components/PricingSection'
import FAQAccordion from '../components/FAQAccordion'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'
import ScrollingBackground from '../components/ScrollingBackground'
import SEO from '../components/SEO'

function Home() {
  return (
    <>
      <SEO 
        title="StackForge - Build Full-Stack Apps with AI in Seconds"
        description="Transform your ideas into production-ready applications instantly. StackForge uses AI to generate complete web apps, mobile apps, and APIs from natural language. No coding required. Vibe code your way to success."
        keywords="AI app builder, vibe coder, no-code platform, instant deployment, full-stack development, AI coding assistant, web app builder, mobile app builder, API builder, visual development, low-code platform, vibe code, build my saas, free app builder"
        url="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'StackForge',
          description: 'AI-powered platform for building full-stack applications instantly',
          url: 'https://stackforge.ai',
          applicationCategory: 'DeveloperApplication',
          operatingSystem: 'Web',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            priceValidUntil: '2025-12-31',
            availability: 'https://schema.org/InStock'
          },
          featureList: [
            'AI-powered code generation',
            'One-click deployment',
            'Database integration',
            'Payment processing',
            'Authentication system',
            'Real-time collaboration'
          ]
        }}
      />
      <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-slate-100 font-sans antialiased">
      <ScrollingBackground />
      <nav className="sticky top-0 z-50">
        <Navbar />
      </nav>
      <main className="w-full mx-auto flex flex-col gap-8 sm:gap-12 md:gap-16">
        <section
          id="hero"
          className="relative isolate"
          aria-label="Hero"
        >
          <Hero />
        </section>
        <section
          id="benefits"
          className="relative z-10 container mx-auto px-2 sm:px-4 py-12"
          aria-label="Benefits"
        >
          <h2 className="relative z-10 text-4xl md:text-6xl font-extrabold mb-12 text-center text-white drop-shadow-2xl bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Why Choose StackForge
          </h2>
          <BenefitsStrip />
        </section>
        <section
          id="features"
          className="relative z-10 container mx-auto px-2 sm:px-4 py-12"
          aria-label="Features"
        >
          <h2 className="relative z-10 text-4xl md:text-6xl font-extrabold mb-12 text-center text-white drop-shadow-2xl bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <FeaturesGrid />
        </section>
        <section
          id="how-it-works"
          className="relative z-10 container mx-auto px-2 sm:px-4"
          aria-label="How it works"
        >
          <HowItWorks />
        </section>
        <section
          id="templates"
          className="relative z-10 container mx-auto px-2 sm:px-4 py-12"
          aria-label="Templates Gallery"
        >
          <TemplatesGallery />
        </section>
        <section
          id="integrations"
          className="relative z-10 container mx-auto px-2 sm:px-4 py-12"
          aria-label="Integrations"
        >
          <h2 className="relative z-10 text-4xl md:text-6xl font-extrabold mb-12 text-center text-white drop-shadow-2xl bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Seamless Integrations
          </h2>
          <IntegrationsWall />
        </section>
        {/* Testimonials section hidden for now */}
        {/* <section
          id="testimonials"
          className="relative z-10 container mx-auto px-2 sm:px-4 py-12"
          aria-label="Testimonials"
        >
          <h2 className="relative z-10 text-4xl md:text-6xl font-extrabold mb-12 text-center text-white drop-shadow-2xl bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <TestimonialsSlider />
        </section> */}
        <section
          id="pricing"
          className="relative z-10 container mx-auto px-2 sm:px-4 py-12"
          aria-label="Pricing"
        >
          <h2 className="relative z-10 text-4xl md:text-6xl font-extrabold mb-12 text-center text-white drop-shadow-2xl bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <PricingSection />
        </section>
        <section
          id="faq"
          className="relative z-10 container mx-auto px-2 sm:px-4 py-12"
          aria-label="Frequently Asked Questions"
        >
          <h2 className="relative z-10 text-4xl md:text-6xl font-extrabold mb-12 text-center text-white drop-shadow-2xl bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <FAQAccordion />
        </section>
        <section
          id="final-cta"
          className="relative z-10 container mx-auto px-2 sm:px-4"
          aria-label="Final Call to Action"
        >
          <FinalCTA
            headline="Ready to get started?"
            subtext="Join thousands of happy users and supercharge your workflow today."
            buttonText="Get Started"
          />
        </section>
      </main>
      <footer className="w-full mt-8">
        <Footer />
      </footer>
    </div>
    </>
  )
}

export default Home