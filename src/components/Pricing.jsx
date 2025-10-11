function Pricing() {
  const plans = [
    {
      name: "Standard Removal",
      description: "Gentle clean-up for low-risk audio. Removes common metadata and basic spectral marks while preserving full quality.",
      price: "$0.49",
      priceUnit: "/audio minute",
      shadow: "shadow-purple",
      buttonClass: "bg-primary/20 dark:bg-primary/20 text-primary hover:bg-primary/30 dark:hover:bg-primary/30"
    },
    {
      name: "Professional Shield",
      description: "Aggressive cleaning with advanced spectral analysis and humanized normalization. Perfect balance of quality and security.",
      price: "$0.99",
      priceUnit: "/audio minute",
      shadow: "shadow-cyan",
      buttonClass: "bg-primary text-white hover:bg-primary/90",
      featured: true
    },
    {
      name: "Ultimate Stealth",
      description: "Maximum anonymization. Removes all known fingerprints, runs multiple cleaning passes, and adds robust verification.",
      price: "$1.99",
      priceUnit: "/audio minute",
      shadow: "shadow-magenta",
      buttonClass: "bg-primary/20 dark:bg-primary/20 text-primary hover:bg-primary/30 dark:hover:bg-primary/30"
    }
  ];

  return (
    <section id="pricing" className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-background-dark via-background-dark to-gray-900 p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {plans.map((plan, index) => (
          <div 
            key={index}
            className={`relative bg-background-light dark:bg-background-dark/50 p-8 rounded-DEFAULT backdrop-blur-sm border border-white/10 ${plan.shadow} transition-all duration-300 hover:scale-105 animate-scale-in animation-delay-${(index + 2) * 100}`}
          >
            <div className="flex flex-col h-full">
              <h2 className="font-heading text-2xl font-semibold text-gray-900 dark:text-white">
                {plan.name}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 flex-grow">
                {plan.description}
              </p>
              <div className="my-6">
                <span className="text-5xl font-bold text-gray-900 dark:text-white">
                  {plan.price}
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  {plan.priceUnit}
                </span>
              </div>
              <button className={`mt-8 w-full font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 ${plan.buttonClass}`}>
                Select Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
