// src/components/CustomCaptcha.js
'use client';
import { useState } from 'react';
import WhackAMole from './WhackAMole';

const CustomCaptcha = ({ onVerify }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isGameCompleted, setIsGameCompleted] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleGameComplete = (success) => {
    if (success) {
      setIsGameCompleted(true);
    }
  };

  const handleVerify = () => {
    setIsVerified(true);
    setIsExpanded(false);
    onVerify?.(true);
  };

  return (
    <div className="flex flex-col items-center">
      {!isExpanded ? (
        <div className="border border-gray-200 rounded-md p-3 bg-white shadow-sm">
          <div className="flex items-center gap-3">
            <div 
              className={`w-6 h-6 border ${
                isVerified 
                  ? 'bg-green-500' 
                  : 'border-gray-300 bg-white hover:bg-gray-50'
              } rounded-sm cursor-pointer transition-colors`}
              onClick={() => !isVerified && setIsExpanded(true)}
            >
              {isVerified && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className="text-gray-700">I&apos;m not a robot</span>
            <img 
              src="/recaptcha-logo.png" 
              alt="CAPTCHA" 
              className="h-8 opacity-70"
            />
          </div>
        </div>
      ) : (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
            {/* Header */}
            <div className="flex justify-between items-center mb-4 border-b pb-3">
              <h3 className="text-lg font-semibold text-gray-800">Verify you are human</h3>
              <button 
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Instructions */}
            <div className="mb-4 p-4 bg-blue-50 rounded-md text-sm border border-blue-100">
              <p className="font-medium text-gray-800 mb-2">Instructions:</p>
              <ul className="space-y-1.5 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Hit the moles that pop up from the holes
                </li>
                <li className="flex items-center gap-2 text-red-600">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                  Avoid hitting moles with headbands!
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Score 8 points to complete the challenge
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  Regular mole: +1 point
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                  Headband mole: -1 point
                </li>
              </ul>
            </div>

            {/* Game */}
            <div className="bg-white rounded-lg overflow-hidden">
              <WhackAMole onGameComplete={handleGameComplete} />
            </div>

            {/* Verify Button */}
            <div className="mt-4 flex justify-end border-t pt-3">
              <button
                onClick={handleVerify}
                disabled={!isGameCompleted}
                className={`
                  px-6 py-2 rounded-md font-medium transition-all
                  ${isGameCompleted 
                    ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-sm' 
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }
                `}
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomCaptcha;
