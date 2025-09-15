import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const SustainableTech2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full text-sm font-semibold mb-6">
            🌱 SUSTAINABLE TECH 2025
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Sustainable Technology 2025
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Leading the green revolution with sustainable technology solutions that reduce environmental impact 
            while delivering superior performance and cost savings for businesses worldwide.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Go Green Today
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-900 transition-colors">
              Sustainability Demo
            </button>
          </div>
        </div>

        {/* Green Tech Solutions */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">☀️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Renewable Energy Systems</h3>
            <p className="text-gray-300 mb-6">
              Advanced solar, wind, and hydroelectric systems with smart grid integration 
              and energy storage solutions for maximum efficiency.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Smart grid technology</li>
              <li>• Battery storage systems</li>
              <li>• Energy optimization AI</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">♻️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Circular Economy Tech</h3>
            <p className="text-gray-300 mb-6">
              Technology solutions that promote waste reduction, material recovery, 
              and sustainable resource management across supply chains.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Waste tracking systems</li>
              <li>• Material recovery AI</li>
              <li>• Supply chain optimization</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold text-white mb-4">Carbon Footprint Analytics</h3>
            <p className="text-gray-300 mb-6">
              Real-time monitoring and analytics of carbon emissions with AI-powered 
              recommendations for reducing environmental impact.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Real-time monitoring</li>
              <li>• Predictive analytics</li>
              <li>• Automated reporting</li>
            </ul>
          </div>
        </div>

        {/* Sustainability Impact */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">🌱 Environmental Impact</h2>
            <p className="text-xl text-gray-300">Making a real difference for our planet</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🌳</div>
              <h3 className="text-xl font-bold text-white mb-3">Carbon Neutral</h3>
              <p className="text-gray-300 text-sm">
                Achieve carbon neutrality with our comprehensive offset programs
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💧</div>
              <h3 className="text-xl font-bold text-white mb-3">Water Conservation</h3>
              <p className="text-gray-300 text-sm">
                Smart water management systems reducing consumption by 60%
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Energy Efficiency</h3>
              <p className="text-gray-300 text-sm">
                AI-optimized systems delivering 80% energy savings
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">♻️</div>
              <h3 className="text-xl font-bold text-white mb-3">Zero Waste</h3>
              <p className="text-gray-300 text-sm">
                Circular economy solutions achieving 95% waste reduction
              </p>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-green-400 mb-2">-80%</div>
            <div className="text-white font-semibold mb-2">Energy Reduction</div>
            <div className="text-gray-300 text-sm">Average energy savings across all implementations</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-green-400 mb-2">2.5M</div>
            <div className="text-white font-semibold mb-2">Tons CO2 Saved</div>
            <div className="text-gray-300 text-sm">Cumulative carbon emissions prevented</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-green-400 mb-2">95%</div>
            <div className="text-white font-semibold mb-2">Waste Reduction</div>
            <div className="text-gray-300 text-sm">Material waste eliminated through circular solutions</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-green-400 mb-2">$50M+</div>
            <div className="text-white font-semibold mb-2">Cost Savings</div>
            <div className="text-gray-300 text-sm">Total savings from sustainable technology adoption</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build a Sustainable Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the green revolution with sustainable technology solutions that protect our planet 
            while delivering exceptional business value and operational efficiency.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Start Green Journey
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-900 transition-colors">
              Calculate Impact
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SustainableTech2025;