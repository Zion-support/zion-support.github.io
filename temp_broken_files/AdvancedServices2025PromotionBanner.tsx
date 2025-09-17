"use client";
import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const AdvancedServices2025PromotionBanner: React.FC = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [currentServicesetCurrentService] = useState(0);

  const services = [
    {
      title: "AI Strategy Consulting",
      icon: "🤖",
      description: "Comprehensive AI strategy development",
      features: ["Strategic Planning"ROI Optimization"],
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Machine Learning Development",
      icon: "🧠",
      description: "Custom ML models and algorithms",
      features: ["Custom Models"Advanced Analytics"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Intelligent Automation",
      icon: "⚡",
      description: "End-to-end automation solutions",
      features: ["Process Automation"95% Efficiency Gain"],
      color: "from-purple-500 to-pink-600"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }5000);

    return () => clearInterval(interval);
  }[]);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 py-12">
      {/* Animated background patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 text-black font-bold text-xl mb-6 animate-pulse shadow-2xl">
            🏆 PREMIUM AI SERVICES 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Advanced AI Services Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Unlock the full potential of artificial intelligence with our comprehensive suite of premium services designed to accelerate your digital transformation and maximize ROI.
          </p>
        </div>

        {/* Service showcase */}
        <div className="mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${services[currentService].color} flex items-center justify-center text-3xl`}>
                    {services[currentService].icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    {services[currentService].title}
                  </h3>
                </div>
                <p className="text-lg text-gray-300 mb-6">
                  {services[currentService].description}
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {services[currentService].features.map((featureindex) => (
                    <span 
                      key={index}
                      className={`px-4 py-2 bg-gradient-to-r ${services[currentService].color} text-white font-semibold rounded-full text-sm`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <a 
                  href="/ai-2025-advanced-services-showcase"
                  className={`inline-block px-8 py-4 bg-gradient-to-r ${services[currentService].color} text-white font-bold text-lg rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
                >
                  Explore Service →
                </a>
              </div>
              
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                    <div className="text-2xl font-bold text-emerald-400 mb-2">2,500%</div>
                    <div className="text-sm text-gray-300">Average ROI</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                    <div className="text-2xl font-bold text-blue-400 mb-2">99.9%</div>
                    <div className="text-sm text-gray-300">Success Rate</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                    <div className="text-2xl font-bold text-purple-400 mb-2">10,000x</div>
                    <div className="text-sm text-gray-300">Faster Processing</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                    <div className="text-2xl font-bold text-yellow-400 mb-2">24/7</div>
                    <div className="text-sm text-gray-300">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service dots indicator */}
        <div className="flex justify-center gap-3 mb-8">
          {services.map((_index) => (
            <button
              key={index}
              onClick={() => setCurrentService(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentService 
                  ? 'bg-white scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Pricing preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
            <h4 className="text-xl font-bold text-white mb-2">Starter</h4>
            <div className="text-3xl font-bold text-emerald-400 mb-4">$5,000<span className="text-sm text-gray-400">/month</span></div>
            <p className="text-gray-300 text-sm">Perfect for small businesses</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-800/50 to-teal-800/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/30 text-center transform scale-105">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
              MOST POPULAR
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Professional</h4>
            <div className="text-3xl font-bold text-emerald-400 mb-4">$15,000<span className="text-sm text-gray-400">/month</span></div>
            <p className="text-gray-300 text-sm">Ideal for growing companies</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
            <h4 className="text-xl font-bold text-white mb-2">Enterprise</h4>
            <div className="text-3xl font-bold text-purple-400 mb-4">Custom<span className="text-sm text-gray-400">/month</span></div>
            <p className="text-gray-300 text-sm">For large enterprises</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6">
            <a 
              href="/contact" 
              className="px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xl rounded-full hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Request Free Consultation
            </a>
            <a 
              href="/ai-2025-advanced-services-showcase" 
              className="px-10 py-5 border-2 border-emerald-400 text-emerald-300 font-bold text-xl rounded-full hover:bg-emerald-400 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              View All Services
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Free Initial Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span>30-Day Money Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span>24/7 Premium Support</span>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-8 left-8 w-4 h-4 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-16 right-12 w-6 h-6 bg-blue-400 rounded-full animate-ping opacity-75 animation-delay-1000"></div>
        <div className="absolute bottom-8 left-1/3 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-75 animation-delay-2000"></div>
        <div className="absolute bottom-16 right-1/3 w-5 h-5 bg-yellow-400 rounded-full animate-ping opacity-75 animation-delay-3000"></div>
      </div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </div>
  );
};

export default AdvancedServices2025PromotionBanner;