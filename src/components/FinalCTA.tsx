import React from 'react'

type FinalCTAProps = {
  headline: string
  subtext: string
  buttonText: string
  onButtonClick?: () => void
}

const FinalCTA: React.FC<FinalCTAProps> = ({
  headline,
  subtext,
  buttonText,
  onButtonClick,
}) => {
  return (
    <section className="w-full flex justify-center py-12 md:py-20 bg-transparent">
      <div className="w-full max-w-3xl flex flex-col items-center bg-[#13151D]/90 rounded-3xl backdrop-blur-md px-6 md:px-12 py-10 md:py-16 shadow-2xl border border-white/10 gap-8 md:gap-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] text-center leading-tight tracking-tight">
          {headline}
        </h2>
        <p className="text-lg md:text-xl text-[#CBD5E1] text-center max-w-2xl">
          {subtext}
        </p>
        <div className="w-full flex justify-center">
          <button
            type="button"
            onClick={onButtonClick}
            className="px-10 py-4 rounded-2xl bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white font-bold text-lg shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-[#8B5CF6]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#13151D] transition-all duration-150 ease-out hover:shadow-[0_0_0_4px_#6D28D9,0_8px_32px_0_#6D28D9] hover:scale-[1.04]"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA