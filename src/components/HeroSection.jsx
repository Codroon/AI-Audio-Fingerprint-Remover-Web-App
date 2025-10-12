function HeroSection({ onUploadClick }) {
  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-background-dark to-midnight-blue dark:from-background-dark dark:to-midnight-blue overflow-hidden">
      <div className="waveform-bg"></div>
      <main className="relative z-10 flex flex-col items-center text-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="glass-morphism rounded-xl p-8 md:p-12 lg:p-16 max-w-4xl w-full animate-scale-in">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-background-light dark:text-background-light mb-4 animate-fade-in-down">
            Remove Audio Fingerprints. Protect Your Sound.
          </h1>
          <p className="text-base md:text-lg text-subtle-text dark:text-subtle-text max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
            Effortlessly clean and anonymize your audio files with our cutting-edge AI, ensuring your creations remain untraceable and secure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <button 
              onClick={onUploadClick}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_0px_theme(colors.glow)] hover:scale-105 focus:outline-none focus:ring-4 focus:ring-glow/50"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <span>Upload Your Audio</span>
            </button>
          </div>
          <p className="text-subtle-text dark:text-subtle-text text-sm mt-6 animate-fade-in animation-delay-600">
            Supports MP3, WAV, FLAC and M4A
          </p>
        </div>
      </main>
    </section>
  )
}

export default HeroSection
