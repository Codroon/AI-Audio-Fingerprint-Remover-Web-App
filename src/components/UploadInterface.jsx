import { useState, useEffect } from 'react';

function UploadInterface() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [selectedTier, setSelectedTier] = useState('standard');
  const [currentStep, setCurrentStep] = useState('upload'); // 'upload', 'tier', 'processing'
  const [progress, setProgress] = useState(0);
  const [showDownload, setShowDownload] = useState(false);

  const tiers = [
    { id: 'standard', name: 'Standard', price: '$5' },
    { id: 'pro', name: 'Pro', price: '$15' },
    { id: 'enterprise', name: 'Enterprise', price: '$50' }
  ];

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      setCurrentStep('tier');
    }
  };

  const handlePayment = () => {
    setCurrentStep('processing');
    setProgress(0);
    setShowDownload(false);
  };

  useEffect(() => {
    if (currentStep === 'processing' && progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setShowDownload(true);
            return 100;
          }
          return prev + 10;
        });
      }, 300);

      return () => clearInterval(interval);
    }
  }, [currentStep, progress]);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-background-light dark:bg-background-dark/50 rounded-xl shadow-lg p-6 sm:p-8 md:p-12 space-y-8">
            
            {/* Upload Container */}
            {currentStep === 'upload' && (
              <div className="relative block w-full border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-12 text-center hover:border-primary/70 dark:hover:border-primary glow-on-hover cursor-pointer animate-fade-in-up">
                <input
                  accept=".mp3,.wav,.flac,.m4a"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  id="audio-upload"
                  type="file"
                  onChange={handleFileUpload}
                />
                <div className="flex flex-col items-center justify-center space-y-4">
                  <svg className="w-20 h-20 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                    Drop your audio file here or click to upload
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    MP3, WAV, FLAC, M4A
                  </p>
                </div>
              </div>
            )}

            {/* Tier Selection */}
            {currentStep === 'tier' && (
              <div className="space-y-6 animate-fade-in-up">
                <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
                  Select a Tier
                </h2>
                <div className="flex justify-center">
                  <div className="inline-flex rounded-lg shadow-sm" role="group">
                    {tiers.map((tier, index) => (
                      <button
                        key={tier.id}
                        onClick={() => setSelectedTier(tier.id)}
                        className={`px-6 py-3 text-sm font-medium focus:z-10 focus:ring-2 focus:ring-primary/50 transition-all duration-300 hover:scale-105 ${
                          index === 0
                            ? 'rounded-l-lg'
                            : index === tiers.length - 1
                            ? 'rounded-r-lg'
                            : ''
                        } ${
                          selectedTier === tier.id
                            ? 'text-white bg-primary border border-primary hover:bg-primary/90'
                            : 'text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600'
                        }`}
                        type="button"
                      >
                        {tier.name}
                        <span className="block text-xs opacity-80">{tier.price}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={handlePayment}
                  className="w-full flex items-center justify-center gap-3 bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-200"
                >
                  <svg className="h-6 w-6 fill-white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Stripe</title>
                    <path d="M11.532 6.184c-1.325.228-2.222.748-2.69 1.554-.467.805-.48 1.983.084 3.342.564 1.36 1.638 2.274 2.92 2.766 1.282.492 2.23.758 2.699.97.47.212.704.423.704.686 0 .563-.532.998-1.583.998-1.325 0-2.31-.5-3.058-1.523l-1.64.998c.64 1.43 2.064 2.378 3.938 2.378 2.38 0 4.027-1.383 4.027-3.41 0-2.18-1.26-3.23-3.48-4.218-1.12-.492-2.132-.934-2.585-1.34-.454-.408-.639-.85-.639-1.372 0-.48.423-1.01 1.498-1.01.998 0 1.748.338 2.31.954l1.523-1.054c-.627-1.022-1.848-1.626-3.396-1.748L11.532 6.184zM4.5 6.5h2.155L9.36 17.5H7.135L6.03 14.55h-3.1L1.875 17.5H-.25L4.5 6.5zm.38 6.45h2.025l-1.012-3.092L4.88 12.95zM18.156 6.5l-2.024 7.272L14.07 6.5h-2.22l3.184 11h2.22l3.184-11h-2.28z"></path>
                  </svg>
                  <span>Pay with Stripe</span>
                </button>
              </div>
            )}

            {/* Processing Container */}
            {currentStep === 'processing' && (
              <div className="space-y-6 animate-fade-in-up">
                <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
                  Processing your audio...
                </h2>
                {!showDownload && (
                  <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div
                      className="bg-primary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    >
                      {progress}%
                    </div>
                  </div>
                )}
                {showDownload && (
                  <button className="w-full flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition-all duration-300 hover:scale-105 animate-scale-in">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span>Download Cleaned Audio</span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default UploadInterface;
