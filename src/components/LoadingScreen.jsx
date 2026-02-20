import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-[#0f172a] flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-[#22d3ee]/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-[#22d3ee] rounded-full animate-spin"></div>
        </div>
        <h2 className="text-2xl font-bold text-[#22d3ee] mb-2">Loading Portfolio</h2>
        <div className="flex gap-2 justify-center">
          <div className="w-2 h-2 bg-[#22d3ee] rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
          <div className="w-2 h-2 bg-[#10b981] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          <div className="w-2 h-2 bg-[#22d3ee] rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;