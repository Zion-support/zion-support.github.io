import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const RevolutionaryTech2025PromotionBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium">🔥 REVOLUTIONARY BREAKTHROUGH</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary Tech 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the most advanced technological innovations that are reshaping 
            industries and creating unprecedented opportunities for growth and transformation.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-lg font-bold mb-2">AI Revolution</h3>
            <p className="text-sm opacity-80">Next-generation artificial intelligence</p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-lg font-bold mb-2">Quantum Leap</h3>
            <p className="text-sm opacity-80">Quantum computing breakthroughs</p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-lg font-bold mb-2">Neural Networks</h3>
            <p className="text-sm opacity-80">Advanced neural interface technology</p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="text-lg font-bold mb-2">Autonomous Systems</h3>
            <p className="text-sm opacity-80">Self-governing intelligent systems</p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">500%</div>
            <div className="text-lg opacity-80">Average ROI Increase</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">1000+</div>
            <div className="text-lg opacity-80">Successful Implementations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">99.9%</div>
            <div className="text-lg opacity-80">Uptime Guarantee</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Transform Your Business Today</h3>
            <p className="text-xl opacity-90 mb-8">
              'Don', 't miss out on the revolutionary technologies that are shaping the future. 
              Join industry leaders who are already experiencing unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
              >
                Explore Our Solutions
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryTech2025PromotionBanner;