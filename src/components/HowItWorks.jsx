function HowItWorks() {
  const steps = [
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      ),
      title: "Removes Metadata",
      description: "Clears all identifying information embedded in the audio file."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      ),
      title: "Removes Spectral Watermarks",
      description: "Eliminates hidden watermarks detectable by spectral analysis."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h12M3.75 3h16.5M3.75 3v-1.5A2.25 2.25 0 0 0 1.5 3.75v16.5A2.25 2.25 0 0 0 3.75 22.5h16.5A2.25 2.25 0 0 0 22.5 20.25v-1.5M13.5 6h4.5M13.5 10.5h4.5M13.5 15h4.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      ),
      title: "Normalizes Statistical Patterns",
      description: "Adjusts audio patterns to appear naturally generated."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      ),
      title: "Adds Human-Like Imperfections",
      description: "Introduces subtle variations mimicking human recording imperfections."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      ),
      title: "Verifies & Reports",
      description: "Confirms removal and provides a detailed report of changes."
    }
  ];

  return (
    <section id="how-it-works" className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-gray-50 mb-12 animate-fade-in-up">
          What This Tool Actually Does
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col items-center text-center p-6 bg-white/5 dark:bg-white/5 rounded-lg shadow-[0_0_20px_rgba(0,170,255,0.1)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,170,255,0.3)] animate-fade-in-up animation-delay-${(index + 1) * 100}`}
            >
              {index < steps.length - 1 && (
                <div className="step-connector"></div>
              )}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 transition-transform duration-300 hover:scale-110">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
