import React from 'react';
import { Card } from './ui/card';

// Enhanced Google AdSense-style banner ad (728x90)
export const BannerAd: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`w-full flex justify-center ${className}`}>
      <Card className="bg-white border border-gray-300 shadow-sm w-full max-w-[728px]">
        <div className="flex items-center justify-center h-[90px] relative">
          <div className="absolute top-1 left-2">
            <span className="text-[10px] text-gray-400 font-medium">Ads by Google</span>
          </div>
          <div className="text-center space-y-1">
            <div className="text-xs text-gray-500 font-medium">Advertisement</div>
            <div className="w-20 h-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-sm mx-auto opacity-70"></div>
            <div className="text-[10px] text-gray-400">728 × 90</div>
          </div>
          <div className="absolute bottom-1 right-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-[8px] font-bold">i</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

// Enhanced medium rectangle (300x250)
export const MediumRectangleAd: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <Card className={`bg-white border border-gray-300 shadow-sm w-[300px] ${className}`}>
      <div className="flex flex-col h-[250px] relative">
        <div className="absolute top-1 left-2">
          <span className="text-[10px] text-gray-400 font-medium">Ads by Google</span>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-2">
            <div className="text-xs text-gray-500 font-medium">Advertisement</div>
            <div className="w-24 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded mx-auto opacity-70"></div>
            <div className="text-[10px] text-gray-400">300 × 250</div>
          </div>
        </div>
        <div className="absolute bottom-1 right-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-[8px] font-bold">i</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

// Enhanced large rectangle (336x280)
export const LargeRectangleAd: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <Card className={`bg-white border border-gray-300 shadow-sm w-[336px] ${className}`}>
      <div className="flex flex-col h-[280px] relative">
        <div className="absolute top-1 left-2">
          <span className="text-[10px] text-gray-400 font-medium">Ads by Google</span>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-2">
            <div className="text-xs text-gray-500 font-medium">Advertisement</div>
            <div className="w-28 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded mx-auto opacity-70"></div>
            <div className="text-[10px] text-gray-400">336 × 280</div>
          </div>
        </div>
        <div className="absolute bottom-1 right-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-[8px] font-bold">i</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

// Enhanced mobile banner (320x50)
export const MobileBannerAd: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`w-full flex justify-center md:hidden ${className}`}>
      <Card className="bg-white border border-gray-300 shadow-sm w-full max-w-[320px]">
        <div className="flex items-center justify-center h-[50px] relative">
          <div className="absolute top-0.5 left-2">
            <span className="text-[8px] text-gray-400 font-medium">Ads by Google</span>
          </div>
          <div className="text-center space-y-0.5">
            <div className="text-[10px] text-gray-500 font-medium">Advertisement</div>
            <div className="w-16 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-sm mx-auto opacity-70"></div>
          </div>
          <div className="absolute bottom-0.5 right-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-[6px] font-bold">i</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

// Enhanced responsive ad
export const ResponsiveAd: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`w-full flex justify-center ${className}`}>
      <Card className="bg-white border border-gray-300 shadow-sm w-full max-w-[728px]">
        <div className="flex items-center justify-center min-h-[120px] p-4 relative">
          <div className="absolute top-1 left-2">
            <span className="text-[10px] text-gray-400 font-medium">Ads by Google</span>
          </div>
          <div className="text-center space-y-2">
            <div className="text-sm text-gray-500 font-medium">Advertisement</div>
            <div className="w-32 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded mx-auto opacity-70"></div>
            <div className="text-xs text-gray-400">Responsive</div>
          </div>
          <div className="absolute bottom-2 right-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-[8px] font-bold">i</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

// Enhanced skyscraper ad (160x600)
export const SkyscraperAd: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <Card className={`bg-white border border-gray-300 shadow-sm w-[160px] ${className}`}>
      <div className="flex flex-col h-[600px] relative">
        <div className="absolute top-1 left-1">
          <span className="text-[8px] text-gray-400 font-medium transform -rotate-90 origin-left">Ads by Google</span>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="text-xs text-gray-500 font-medium transform -rotate-90">Advertisement</div>
            <div className="w-6 h-32 bg-gradient-to-b from-cyan-500 to-blue-500 rounded mx-auto opacity-70"></div>
            <div className="text-[8px] text-gray-400 transform -rotate-90">160 × 600</div>
          </div>
        </div>
        <div className="absolute bottom-1 right-1">
          <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-[6px] font-bold">i</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

// Enhanced in-feed native ad
export const InFeedAd: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <Card className={`bg-white border border-gray-300 shadow-sm ${className}`}>
      <div className="p-4 relative">
        <div className="absolute top-1 left-2">
          <span className="text-[10px] text-gray-400 font-medium">Ads by Google</span>
        </div>
        <div className="flex items-start space-x-3 mt-3">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg opacity-70 flex-shrink-0 flex items-center justify-center">
            <div className="text-white text-xs font-bold">AD</div>
          </div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gradient-to-r from-gray-300 to-gray-400 rounded w-3/4"></div>
            <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2"></div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-green-600 font-medium">Sponsored</span>
              <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-[6px] font-bold">i</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

// Content break banner (468x60)
export const ContentBreakAd: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`w-full flex justify-center my-8 ${className}`}>
      <Card className="bg-white border border-gray-300 shadow-sm w-full max-w-[468px]">
        <div className="flex items-center justify-center h-[60px] relative">
          <div className="absolute top-1 left-2">
            <span className="text-[10px] text-gray-400 font-medium">Ads by Google</span>
          </div>
          <div className="text-center space-y-1">
            <div className="text-xs text-gray-500 font-medium">Advertisement</div>
            <div className="w-20 h-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-sm mx-auto opacity-70"></div>
            <div className="text-[10px] text-gray-400">468 × 60</div>
          </div>
          <div className="absolute bottom-1 right-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-[8px] font-bold">i</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};