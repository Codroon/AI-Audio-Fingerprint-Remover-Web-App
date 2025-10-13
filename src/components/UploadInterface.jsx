import { useState, useEffect, forwardRef } from 'react';
import PricingPopup from './PricingPopup';
import StatusPopup from './StatusPopup';

const UploadInterface = forwardRef((props, ref) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [selectedTier, setSelectedTier] = useState('professional');
  const [currentStep, setCurrentStep] = useState('upload'); // 'upload', 'processing'
  const [progress, setProgress] = useState(0);
  const [showDownload, setShowDownload] = useState(false);
  const [showPricingPopup, setShowPricingPopup] = useState(false);
  const [showStatusPopup, setShowStatusPopup] = useState(false);
  const [jobId, setJobId] = useState(null);
  const [paymentUrl, setPaymentUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [showUploadLoading, setShowUploadLoading] = useState(false);

  // Map pricing tiers to API levels
  const getApiLevel = (tier) => {
    switch (tier) {
      case 'standard':
        return 'moderate';
      case 'professional':
        return 'aggressive';
      case 'ultimate':
        return 'extreme';
      default:
        return 'moderate';
    }
  };

  const uploadFile = async (file, level) => {
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('level', level);

      const response = await fetch('https://ai-audio-b8gu.onrender.com/upload', {
        method: 'POST',
        body: formData,
        headers: {
          'ngrok-skip-browser-warning': 'true',
          'Accept': 'application/json',
        },
        mode: 'cors',
        credentials: 'omit'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Upload error:', error);
      throw error;
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      setShowPricingPopup(true);
    }
  };

  const handlePlanSelection = async (planId) => {
    setSelectedTier(planId);
    setShowPricingPopup(false);
    setShowUploadLoading(true);
    
    try {
      const apiLevel = getApiLevel(planId);
      const response = await uploadFile(uploadedFile, apiLevel);
      
      // Save the job ID, payment URL and show status popup
      setJobId(response.job_id);
      setPaymentUrl(response.payment_url);
      setShowStatusPopup(true);
      
      // Also update the processing step for the UI
      setCurrentStep('processing');
      setProgress(0);
      setShowDownload(false);
    } catch (error) {
      console.error('Failed to upload file:', error);
      // You could show an error message here
      alert('Failed to upload file. Please try again.');
    } finally {
      setShowUploadLoading(false);
    }
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
    <div ref={ref} className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-4xl mx-auto">
          {/* Heading Section */}
          {currentStep === 'upload' && (
            <div className="text-center mb-8 animate-fade-in-down">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Upload Your Audio File
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Start by uploading your audio file. We support MP3, WAV, FLAC, and M4A formats.
              </p>
            </div>
          )}
          
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
      
      {/* Pricing Popup */}
      <PricingPopup
        isOpen={showPricingPopup}
        onClose={() => setShowPricingPopup(false)}
        onSelectPlan={handlePlanSelection}
        isUploading={isUploading}
      />
      
      {/* Status Popup */}
      <StatusPopup
        isOpen={showStatusPopup}
        onClose={() => setShowStatusPopup(false)}
        jobId={jobId}
        paymentUrl={paymentUrl}
      />
      
      {/* Upload Loading Overlay */}
      {showUploadLoading && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Uploading Your File
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Please wait while we process your audio file and prepare it for cleaning...
              </p>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-4">
                <div className="bg-primary h-3 rounded-full animate-pulse" style={{ width: '100%' }}></div>
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
});

export default UploadInterface;
