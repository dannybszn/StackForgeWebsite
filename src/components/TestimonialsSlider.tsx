import React, { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Testimonial = {
  avatar: string
  name: string
  role: string
  text: string
}

const testimonials: Testimonial[] = [
  {
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'James Carter',
    role: 'Product Manager',
    text: 'This platform transformed our workflow. The intuitive design and seamless integration saved us countless hours!',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Ava Smith',
    role: 'Lead Designer',
    text: 'Absolutely love the glassy UI and accessibility features. It’s a joy to use every day!',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    name: 'Liam Johnson',
    role: 'Full Stack Developer',
    text: 'The smooth animations and responsive layout make this tool stand out from the rest.',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    name: 'Sophia Lee',
    role: 'QA Engineer',
    text: 'Accessibility is top-notch. Keyboard navigation and focus rings work perfectly!',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/77.jpg',
    name: 'Noah Brown',
    role: 'CTO',
    text: 'A must-have for any modern team. The testimonial slider is a showcase of thoughtful design.',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    name: 'Olivia Davis',
    role: 'Marketing Lead',
    text: 'Our clients are always impressed by the slick, glassy testimonial section. Highly recommended!',
  },
]

function getVisibleCount(width: number) {
  if (width < 640) return 1
  if (width < 1024) return 2
  if (width < 1280) return 3
  return 4
}

const TestimonialsSlider: React.FC = () => {
  const [current, setCurrent] = useState(0)
  const [visibleCount, setVisibleCount] = useState(getVisibleCount(window.innerWidth))
  const sliderRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount(window.innerWidth))
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - visibleCount)

  const goTo = (idx: number) => {
    setCurrent(Math.max(0, Math.min(idx, maxIndex)))
  }

  const next = () => goTo(current + visibleCount)
  const prev = () => goTo(current - visibleCount)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (document.activeElement && sliderRef.current && sliderRef.current.contains(document.activeElement)) {
        if (e.key === 'ArrowLeft') {
          prev()
        } else if (e.key === 'ArrowRight') {
          next()
        }
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [current, visibleCount])

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }
  const onTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const dx = touchEndX.current - touchStartX.current
      if (Math.abs(dx) > 50) {
        if (dx < 0) next()
        else prev()
      }
    }
    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <section
      className="w-full py-12 md:py-20 xl:py-28 bg-transparent"
      aria-label="Testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-0 mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-[#F8FAFC] tracking-tight text-center md:text-left">
            What our users say
          </h2>
          <div className="flex justify-center md:justify-end gap-4">
            <button
              aria-label="Previous testimonials"
              onClick={prev}
              disabled={current === 0}
              className="group rounded-full border border-[#8B5CF6] bg-white/10 hover:bg-gradient-to-r hover:from-[#6D28D9] hover:to-[#8B5CF6] transition-all duration-200 ease-out p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 disabled:opacity-40"
              tabIndex={0}
              type="button"
            >
              <ChevronLeft className="w-7 h-7 text-[#F8FAFC] group-hover:text-white" />
            </button>
            <button
              aria-label="Next testimonials"
              onClick={next}
              disabled={current >= maxIndex}
              className="group rounded-full border border-[#8B5CF6] bg-white/10 hover:bg-gradient-to-r hover:from-[#6D28D9] hover:to-[#8B5CF6] transition-all duration-200 ease-out p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 disabled:opacity-40"
              tabIndex={0}
              type="button"
            >
              <ChevronRight className="w-7 h-7 text-[#F8FAFC] group-hover:text-white" />
            </button>
          </div>
        </div>
        <div
          ref={sliderRef}
          className="relative overflow-hidden"
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimonials slider"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <ul
            className="flex transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] gap-8 md:gap-10 xl:gap-12"
            style={{
              transform: `translateX(-${(100 / visibleCount) * current}%)`,
              width: `${(100 / visibleCount) * testimonials.length}%`,
            }}
            aria-live="polite"
          >
            {testimonials.map((t) => (
              <li
                key={t.name + t.role}
                className={`flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-1 md:px-2 xl:px-4 outline-none`}
                style={{
                  maxWidth: `${100 / visibleCount}%`,
                }}
                tabIndex={0}
                aria-label={`Testimonial from ${t.name}, ${t.role}`}
                role="group"
              >
                <div
                  className="flex flex-col h-full bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-7 md:p-8 xl:p-10 gap-7 md:gap-8 xl:gap-10 transition-all duration-200 ease-out hover:shadow-2xl hover:border-[#8B5CF6] hover:bg-gradient-to-br hover:from-[#6D28D9]/30 hover:to-[#8B5CF6]/30 focus-within:ring-2 focus-within:ring-[#8B5CF6] focus-within:ring-offset-2"
                >
                  <div className="flex items-center gap-5 md:gap-6">
                    <img
                      src={t.avatar}
                      alt={`${t.name} avatar`}
                      className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[#8B5CF6] object-cover"
                    />
                    <div>
                      <div className="text-lg md:text-xl font-semibold text-[#F8FAFC]">{t.name}</div>
                      <div className="text-base md:text-lg text-[#94A3B8]">{t.role}</div>
                    </div>
                  </div>
                  <blockquote className="text-base md:text-lg xl:text-xl text-[#CBD5E1] leading-relaxed">
                    “{t.text}”
                  </blockquote>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center mt-10 gap-2">
          {Array.from({ length: Math.ceil(testimonials.length / visibleCount) }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3.5 h-3.5 rounded-full border-2 border-[#8B5CF6] transition-all duration-200 ease-out ${current === i * visibleCount ? 'bg-[#8B5CF6]' : 'bg-transparent'} focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]`}
              onClick={() => goTo(i * visibleCount)}
              tabIndex={0}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSlider