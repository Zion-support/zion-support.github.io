import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const SustainableAI2025RevolutionBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🌱 SUSTAINABLE AI 2025</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Green AI Revolution: Carbon-Neutral Technology
            </h2>
            
            <p className="text-xl text-gray-200 leading-relaxed">
              Transform your business with sustainable AI solutions that reduce carbon footprint by 85% 
              while achieving 300% ROI. Join the green technology revolution and achieve carbon neutrality.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-400">85%</div>
                <div className="text-sm text-gray-200">Carbon Reduction</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400">300%</div>
                <div className="text-sm text-gray-200">ROI Achievement</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-400">100%</div>
                <div className="text-sm text-gray-200">Carbon Neutral</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/blog/ai-2025-sustainable-technology-revolution-complete-guide"
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Sustainable AI →
              </a>
              <a
                href="/case-studies/fortune-500-sustainable-ai-transformation-2025-ultimate-success"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-all duration-300"
              >
                View Success Story
              </a>
            </div>
          </div>
          
          {/* Right Content - Environmental Impact Visualization */}
          <div className="relative">
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🌍</span>
                </div>
                
                <h3 className="text-2xl font-bold">Environmental Impact</h3>
                
                <div className="space-y-4">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <div className="text-sm text-gray-200 mb-2">Carbon Footprint</div>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-semibold">Before: 2.8M tons</div>
                      <div className="text-lg font-semibold text-green-400">After: 420K tons</div>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '15%'}}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <div className="text-sm text-gray-200 mb-2">Energy Consumption</div>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-semibold">Before: 3.2B kWh</div>
                      <div className="text-lg font-semibold text-blue-400">After: 960M kWh</div>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '30%'}}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <div className="text-sm text-gray-200 mb-2">Waste Reduction</div>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-semibold">Before: 450K tons</div>
                      <div className="text-lg font-semibold text-yellow-400">After: 112K tons</div>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '25%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg p-4">
                  <div className="text-sm font-medium mb-1">Sustainability Status</div>
                  <div className="text-lg font-bold">CARBON NEUTRAL ACHIEVED</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-emerald-400 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-teal-400 rounded-full animate-pulse delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainableAI2025RevolutionBanner;