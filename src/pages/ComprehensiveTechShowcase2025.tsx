import React, { useState, useEffect } from 'react';
import RevolutionaryContentBanner2025 from '../components/RevolutionaryContentBanner2025';
import InteractiveTechShowcase2025 from '../components/InteractiveTechShowcase2025';
import CaseStudiesShowcase2025 from '../components/CaseStudiesShowcase2025';
import TechTrendsShowcase2025 from '../components/TechTrendsShowcase2025';

const ComprehensiveTechShowcase2025: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6">
              🚀 COMPREHENSIVE TECHNOLOGY SHOWCASE • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6">
              The Ultimate Technology Experience
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Explore the most advanced technology solutions, interactive demonstrations, 
              real-world case studies, and future trends all in one comprehensive showcase.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#revolutionary-banner" className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg hover:scale-105">
                Revolutionary Technology
              </a>
              <a href="#interactive-showcase" className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg hover:scale-105">
                Interactive Demos
              </a>
              <a href="#case-studies" className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg hover:scale-105">
                Case Studies
              </a>
              <a href="#tech-trends" className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg hover:scale-105">
                Future Trends
              </a>
            </div>
          </div>
        </div>

        {/* Revolutionary Content Banner */}
        <div id="revolutionary-banner" className="py-20">
          <RevolutionaryContentBanner2025 />
        </div>

        {/* Interactive Technology Showcase */}
        <div id="interactive-showcase" className="py-20">
          <InteractiveTechShowcase2025 />
        </div>

        {/* Case Studies Showcase */}
        <div id="case-studies" className="py-20">
          <CaseStudiesShowcase2025 />
        </div>

        {/* Technology Trends Showcase */}
        <div id="tech-trends" className="py-20">
          <TechTrendsShowcase2025 />
        </div>

        {/* Additional Features Section */}
        <div className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">Why Choose Our Technology Solutions?</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                We combine cutting-edge innovation with proven results to deliver 
                technology solutions that transform businesses and drive success.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4">Precision Engineering</h3>
                <p className="opacity-80">Every solution is crafted with meticulous attention to detail and precision engineering principles.</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-4">Lightning Fast</h3>
                <p className="opacity-80">Experience unprecedented speed and performance with our optimized technology solutions.</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🔒</div>
                <h3 className="text-2xl font-bold mb-4">Enterprise Security</h3>
                <p className="opacity-80">Bank-level security and compliance standards protect your most sensitive data and operations.</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4">Future Ready</h3>
                <p className="opacity-80">Built for tomorrow's challenges with scalable, adaptable technology architecture.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join thousands of successful organizations that have revolutionized their operations 
              with our cutting-edge technology solutions. Start your transformation journey today.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-6 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="/pages/ComprehensiveServices2025"
                className="border-2 border-purple-600 text-purple-600 px-12 py-6 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold text-xl"
              >
                View All Services
              </a>
              <a
                href="/pages/InnovationLanding2025"
                className="border-2 border-blue-600 text-blue-600 px-12 py-6 rounded-lg hover:bg-blue-50 transition-all duration-300 font-semibold text-xl"
              >
                Explore Innovations
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveTechShowcase2025;