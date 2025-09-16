import React from 'react';

const GreenTechRevolution2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-teal-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center text-white">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full text-sm font-semibold mb-6">
              🌱 GREEN TECH REVOLUTION 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Sustainable Technology Revolution
            </h1>
            <p className="text-2xl text-green-200 mb-8 max-w-4xl mx-auto">
              Lead the transformation to a sustainable future with cutting-edge green technology solutions that combat climate change, 
              reduce carbon footprints, and create a cleaner, more efficient world for generations to come.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
                Join the Revolution →
              </button>
              <button className="border-2 border-green-400 text-green-300 px-8 py-4 rounded-xl hover:bg-green-400 hover:text-green-900 transition-all duration-300 font-semibold text-lg">
                View Impact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white border border-white/20">
            <div className="text-4xl mb-4">☀️</div>
            <h3 className="text-2xl font-bold mb-4">Advanced Solar Technology</h3>
            <p className="text-green-200 mb-6">
              Next-generation solar panels with 50% higher efficiency, flexible designs, and integrated energy storage systems.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-green-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                50% Higher Efficiency
              </div>
              <div className="flex items-center text-sm text-green-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Flexible Installation
              </div>
              <div className="flex items-center text-sm text-green-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Integrated Storage
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white border border-white/20">
            <div className="text-4xl mb-4">💨</div>
            <h3 className="text-2xl font-bold mb-4">Wind Energy Innovation</h3>
            <p className="text-green-200 mb-6">
              Revolutionary wind turbines with vertical axis design, silent operation, and 40% more energy generation capacity.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-green-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Vertical Axis Design
              </div>
              <div className="flex items-center text-sm text-green-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Silent Operation
              </div>
              <div className="flex items-center text-sm text-green-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                40% More Power
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white border border-white/20">
            <div className="text-4xl mb-4">🔋</div>
            <h3 className="text-2xl font-bold mb-4">Energy Storage Solutions</h3>
            <p className="text-green-200 mb-6">
              Advanced battery technology with 10x longer lifespan, faster charging, and 100% recyclable materials.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-green-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                10x Longer Lifespan
              </div>
              <div className="flex items-center text-sm text-green-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Ultra-Fast Charging
              </div>
              <div className="flex items-center text-sm text-green-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                100% Recyclable
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white border border-white/20">
            <div className="text-4xl mb-4">🌊</div>
            <h3 className="text-2xl font-bold mb-4">Hydroelectric Innovation</h3>
            <p className="text-green-200 mb-6">
              Micro-hydroelectric systems for small-scale energy generation with minimal environmental impact and maximum efficiency.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-green-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Micro-Scale Systems
              </div>
              <div className="flex items-center text-sm text-green-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Minimal Impact
              </div>
              <div className="flex items-center text-sm text-green-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                High Efficiency
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white border border-white/20">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold mb-4">Carbon Capture Technology</h3>
            <p className="text-green-200 mb-6">
              Revolutionary carbon capture systems that remove CO2 from the atmosphere and convert it into useful products.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-green-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Direct Air Capture
              </div>
              <div className="flex items-center text-sm text-green-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                CO2 Conversion
              </div>
              <div className="flex items-center text-sm text-green-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Scalable Solutions
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white border border-white/20">
            <div className="text-4xl mb-4">♻️</div>
            <h3 className="text-2xl font-bold mb-4">Circular Economy Solutions</h3>
            <p className="text-green-200 mb-6">
              Advanced recycling and waste management systems that create zero-waste production cycles and sustainable materials.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-green-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Zero-Waste Production
              </div>
              <div className="flex items-center text-sm text-green-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Material Recovery
              </div>
              <div className="flex items-center text-sm text-green-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Sustainable Materials
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Showcase */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center text-white mb-16">
          <h2 className="text-5xl font-bold mb-6">Revolutionary Green Technology</h2>
          <p className="text-xl text-green-200 max-w-4xl mx-auto">
            Our green technology solutions represent the pinnacle of sustainable innovation, combining cutting-edge science 
            with environmental responsibility to create a cleaner, more efficient future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">🌍 Environmental Impact</h3>
              <p className="text-green-200 mb-4">
                Our technologies have reduced carbon emissions by 75% and increased renewable energy adoption by 300%.
              </p>
              <div className="w-full bg-green-900/50 rounded-full h-3 mb-2">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 h-3 rounded-full" style={{width: '75%'}}></div>
              </div>
              <span className="text-sm text-green-300">75% Carbon Reduction</span>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">⚡ Energy Efficiency</h3>
              <p className="text-green-200 mb-4">
                Advanced energy management systems that optimize power consumption and maximize renewable energy utilization.
              </p>
              <div className="w-full bg-green-900/50 rounded-full h-3 mb-2">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 h-3 rounded-full" style={{width: '90%'}}></div>
              </div>
              <span className="text-sm text-green-300">90% Energy Efficiency</span>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">🔄 Sustainability Score</h3>
              <p className="text-green-200 mb-4">
                Comprehensive sustainability metrics that measure environmental, social, and economic impact across all operations.
              </p>
              <div className="w-full bg-green-900/50 rounded-full h-3 mb-2">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 h-3 rounded-full" style={{width: '95%'}}></div>
              </div>
              <span className="text-sm text-green-300">95% Sustainability Score</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-3xl p-12 text-center">
            <div className="text-8xl mb-6">🌱</div>
            <h3 className="text-3xl font-bold text-white mb-4">Green Tech Metrics</h3>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-green-300">1M+</div>
                <div className="text-sm text-green-200">Tons CO2 Saved</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-green-300">500+</div>
                <div className="text-sm text-green-200">Green Projects</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-green-300">99%</div>
                <div className="text-sm text-green-200">Renewable Energy</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-green-300">0</div>
                <div className="text-sm text-green-200">Waste to Landfill</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stories */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center text-white mb-16">
          <h2 className="text-5xl font-bold mb-6">Real-World Impact</h2>
          <p className="text-xl text-green-200 max-w-4xl mx-auto">
            See how our green technology solutions are making a real difference in communities around the world, 
            creating sustainable jobs and protecting our planet for future generations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white border border-white/20">
            <div className="text-5xl mb-4">🏭</div>
            <h3 className="text-xl font-bold mb-3">Industrial Transformation</h3>
            <p className="text-green-200 text-sm mb-4">
              Helped 200+ factories transition to 100% renewable energy, reducing their carbon footprint by 80%.
            </p>
            <div className="text-green-400 font-semibold">+200 Factories</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white border border-white/20">
            <div className="text-5xl mb-4">🏘️</div>
            <h3 className="text-xl font-bold mb-3">Smart Cities</h3>
            <p className="text-green-200 text-sm mb-4">
              Deployed smart grid technology in 50+ cities, improving energy efficiency by 60% and reducing costs by 40%.
            </p>
            <div className="text-green-400 font-semibold">+50 Cities</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white border border-white/20">
            <div className="text-5xl mb-4">🌾</div>
            <h3 className="text-xl font-bold mb-3">Agricultural Innovation</h3>
            <p className="text-green-200 text-sm mb-4">
              Implemented precision agriculture solutions that increased crop yields by 35% while reducing water usage by 50%.
            </p>
            <div className="text-green-400 font-semibold">+35% Yield</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Join the Green Revolution</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Be part of the solution to climate change. Together, we can create a sustainable future for our planet and future generations.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-white text-green-600 px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black/50 py-8">
        <div className="container mx-auto px-4 text-center text-white">
          <p>&copy; 2026 Zion Tech Group. All rights reserved. | Green Tech Revolution</p>
        </div>
      </div>
    </div>
  );
};

export default GreenTechRevolution2026;