import React, { useEffect, useState } from 'react'

const ScrollingBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0)
  const [documentHeight, setDocumentHeight] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY)
      })
    }
    
    const updateHeight = () => {
      setDocumentHeight(document.documentElement.scrollHeight - window.innerHeight)
    }
    
    handleScroll()
    updateHeight()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', updateHeight)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateHeight)
    }
  }, [])

  // Calculate scroll progress as percentage of total scrollable distance
  const scrollProgress = documentHeight > 0 ? scrollY / documentHeight : 0
  
  // Adjust transition points based on viewport width
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  
  // On mobile, distribute transitions more evenly across the scroll
  // On desktop, keep original behavior
  const firstTransition = isMobile 
    ? Math.min(Math.max(scrollProgress * 5 - 0.75, 0), 1)  // 15% to 35% of scroll
    : Math.min(Math.max((scrollY - 500) / 1200, 0), 1)
    
  const secondTransition = isMobile
    ? Math.min(Math.max(scrollProgress * 5 - 2, 0), 1)  // 40% to 60% of scroll
    : Math.min(Math.max((scrollY - 1900) / 1200, 0), 1)
    
  const thirdTransition = isMobile
    ? Math.min(Math.max(scrollProgress * 5 - 3.25, 0), 1)  // 65% to 85% of scroll
    : Math.min(Math.max((scrollY - 3300) / 1200, 0), 1)

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* First Screenshot - Empty state */}
      <div 
        className="absolute inset-0 will-change-transform"
        style={{ 
          opacity: 1 - firstTransition,
          transform: `translateY(${firstTransition * -25}%) scale(${1 - firstTransition * 0.08})`,
        }}
      >
        <img 
          src="/stackforge-screenshot1.png"
          alt="StackForge Empty State"
          className="w-[150%] sm:w-full h-full object-cover object-left lg:object-center"
        />
      </div>
      
      {/* Second Screenshot - Chat/AI interface (screenshot3) */}
      <div 
        className="absolute inset-0 will-change-transform"
        style={{ 
          opacity: Math.max(0, firstTransition - secondTransition),
          transform: `translateY(${(1 - firstTransition) * 25 + secondTransition * -25}%) scale(${0.92 + firstTransition * 0.08 - secondTransition * 0.08})`,
        }}
      >
        <img 
          src="/stackforge-screenshot3.png"
          alt="StackForge AI Interface"
          className="w-[150%] sm:w-full h-full object-cover object-left lg:object-center"
        />
      </div>

      {/* Third Screenshot - Desktop project (screenshot2) */}
      <div 
        className="absolute inset-0 will-change-transform"
        style={{ 
          opacity: Math.max(0, secondTransition - thirdTransition),
          transform: `translateY(${(1 - secondTransition) * 25 + thirdTransition * -25}%) scale(${0.92 + secondTransition * 0.08 - thirdTransition * 0.08})`,
        }}
      >
        <img 
          src="/stackforge-screenshot2.png"
          alt="StackForge Desktop Project"
          className="w-[150%] sm:w-full h-full object-cover object-left lg:object-center"
        />
      </div>

      {/* Fourth Screenshot - Mobile view (screenshot4) */}
      <div 
        className="absolute inset-0 will-change-transform"
        style={{ 
          opacity: thirdTransition,
          transform: `translateY(${(1 - thirdTransition) * 25}%) scale(${0.92 + thirdTransition * 0.08})`,
        }}
      >
        <img 
          src="/stackforge-screenshot4.png"
          alt="StackForge Mobile View"
          className="w-[150%] sm:w-full h-full object-cover object-left lg:object-center"
        />
      </div>

      {/* Simple gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E0F13]/30 via-[#0E0F13]/50 to-[#0E0F13]/80" />
      
      {/* Side vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E0F13]/40 via-transparent to-[#0E0F13]/40" />
      
      {/* Subtle animated glow that follows scroll */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(109,40,217,${Math.sin(scrollY * 0.001) * 0.1 + 0.1}) 0%, transparent 70%)`,
          filter: 'blur(60px)',
          transform: `translate(-50%, -50%) translateY(${scrollY * 0.1}px)`,
        }}
      />
    </div>
  )
}

export default ScrollingBackground