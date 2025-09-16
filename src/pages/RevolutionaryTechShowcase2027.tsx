import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import UltimateContentShowcase2027 from '../components/UltimateContentShowcase2027';
import RevolutionaryTechBanner2027 from '../components/RevolutionaryTechBanner2027';
import InteractiveTechDemo2027 from '../components/InteractiveTechDemo2027';
import ClientSuccessStories2027 from '../components/ClientSuccessStories2027';

const RevolutionaryTechShowcase2027: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-6xl font-bold text-white mb-6">
              Revolutionary Technology Showcase 2027
            </h1>
            <p className="text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              Experience the future of technology with our groundbreaking innovations that are reshaping industries and transforming the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full text-xl font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300">
                Start Your Journey
              </button>
              <button className="bg-white/20 backdrop-blur-lg text-white px-8 py-4 rounded-full text-xl font-bold border border-white/30 hover:bg-white/30 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Revolutionary Tech Banner */}
        <RevolutionaryTechBanner2027 />

        {/* Ultimate Content Showcase */}
        <UltimateContentShowcase2027 />

        {/* Interactive Tech Demo */}
        <InteractiveTechDemo2027 />

        {/* Client Success Stories */}
        <ClientSuccessStories2027 />

        {/* Call to Action */}
        <div className="py-20 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Join thousands of companies that have already revolutionized their operations with our cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:from-green-600 hover:to-blue-700 transition-all duration-300">
                Get Started Today
              </button>
              <button className="bg-white/20 backdrop-blur-lg text-white px-12 py-4 rounded-full text-xl font-bold border border-white/30 hover:bg-white/30 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RevolutionaryTechShowcase2027;