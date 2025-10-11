function AboutUs() {
  return (
    <section id="about-us" className="w-full bg-background-light dark:bg-background-dark py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About AudioShield AI
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Your privacy is our priority. We built this tool to empower creators and protect their work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 dark:bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(108,99,255,0.3)] animate-fade-in-up animation-delay-100">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 mx-auto transition-transform duration-300 hover:scale-110">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-4">
              Privacy First
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              We process everything client-side. Your audio never leaves your device during analysis. No storage, no tracking, no data collection.
            </p>
          </div>

          <div className="bg-white/5 dark:bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(108,99,255,0.3)] animate-fade-in-up animation-delay-300">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 mx-auto transition-transform duration-300 hover:scale-110">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-4">
              AI-Powered
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              Advanced machine learning algorithms detect and remove all types of audio fingerprints while preserving quality and authenticity.
            </p>
          </div>

          <div className="bg-white/5 dark:bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(108,99,255,0.3)] animate-fade-in-up animation-delay-500">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 mx-auto transition-transform duration-300 hover:scale-110">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-4">
              Lightning Fast
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              Process hours of audio in minutes. Our optimized algorithms work efficiently without compromising on quality or security.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center animate-fade-in-up animation-delay-700">
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Built by creators, for creators. We understand the importance of protecting your intellectual property in the digital age.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
