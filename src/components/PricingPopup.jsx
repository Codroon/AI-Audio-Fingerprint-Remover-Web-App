import { useState } from 'react';

function PricingPopup({ isOpen, onClose, onSelectPlan, isUploading = false }) {
  const plans = [
    {
      id: 'standard',
      name: "Standard Removal",
      description: "Gentle clean-up for low-risk audio. Removes common metadata and basic spectral marks while preserving full quality.",
      price: "$0.50",
      priceUnit: "/audio minute",
      borderColor: "border-purple-500",
      buttonClass: "bg-purple-600 hover:bg-purple-700"
    },
    {
      id: 'professional',
      name: "Professional Shield",
      description: "Aggressive cleaning with advanced spectral analysis and humanized normalization. Perfect balance of quality and security.",
      price: "$1.00",
      priceUnit: "/audio minute",
      borderColor: "border-cyan-500",
      buttonClass: "bg-cyan-600 hover:bg-cyan-700",
      featured: true
    },
    {
      id: 'ultimate',
      name: "Ultimate Stealth",
      description: "Maximum anonymization. Removes all known fingerprints, runs multiple cleaning passes, and adds robust verification.",
      price: "$2.00",
      priceUnit: "/audio minute",
      borderColor: "border-pink-500",
      buttonClass: "bg-pink-600 hover:bg-pink-700"
    }
  ];

  const [selectedPlan, setSelectedPlan] = useState('professional');

  if (!isOpen) return null;

  const handleSelectPlan = () => {
    onSelectPlan(selectedPlan);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-background-light dark:bg-background-dark/90 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Choose Your Cleaning Plan
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-background-light dark:bg-background-dark/50 p-6 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                  selectedPlan === plan.id
                    ? `${plan.borderColor} shadow-lg scale-105`
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                } ${plan.featured ? 'ring-2 ring-primary/20' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex flex-col h-full">
                  <h3 className="font-heading text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow">
                    {plan.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 ml-1">
                      {plan.priceUnit}
                    </span>
                  </div>
                  <div className={`w-4 h-4 rounded-full border-2 mx-auto ${
                    selectedPlan === plan.id
                      ? `${plan.borderColor} bg-current`
                      : 'border-gray-300 dark:border-gray-600'
                  }`}>
                    {selectedPlan === plan.id && (
                      <div className="w-full h-full rounded-full bg-current"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <button
              onClick={onClose}
              className="px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSelectPlan}
              disabled={isUploading}
              className={`px-8 py-3 font-semibold rounded-lg transition-all duration-300 ${
                isUploading
                  ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                  : 'bg-primary text-white hover:bg-primary/90 hover:scale-105'
              }`}
            >
              {isUploading ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Uploading...
                </div>
              ) : (
                'Proceed'
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Loading Overlay */}
      {isUploading && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-60">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Uploading Your File
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Please wait while we process your audio file...
              </p>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-primary h-2 rounded-full animate-pulse" style={{ width: '100%' }}></div>
              </div>
              
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This may take a few moments
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PricingPopup;
