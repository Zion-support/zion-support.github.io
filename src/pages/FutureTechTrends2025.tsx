import React from 'react';

const FutureTechTrends2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-6">
            🔮 FUTURE TECH TRENDS • 2025
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Future Technology Trends 2025
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Explore the emerging technologies that will shape our world in 2025 and beyond. 
            From quantum computing to synthetic intelligence, discover what's coming next.
          </p>
        </div>

        {/* Trend Overview */}
        <div className="bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 rounded-2xl p-10 mb-12 text-white">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">📈 Trend Overview</h2>
            <p className="text-xl opacity-90">The most significant technological shifts happening now</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">Exponential Growth</h3>
              <p className="text-sm opacity-90">
                Technology adoption rates are accelerating faster than ever before, 
                with new innovations reaching mainstream adoption in months rather than years.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-3">Global Integration</h3>
              <p className="text-sm opacity-90">
                Technologies are becoming increasingly interconnected, creating 
                complex ecosystems that span multiple industries and applications.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Impact</h3>
              <p className="text-sm opacity-90">
                The time between technology development and real-world impact 
                is shrinking, requiring faster adaptation and response strategies.
              </p>
            </div>
          </div>
        </div>

        {/* Top 10 Trends */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🏆 Top 10 Technology Trends 2025</h2>
            <p className="text-xl text-gray-600">The most impactful trends shaping our future</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <h3 className="text-lg font-semibold">Synthetic Intelligence</h3>
              </div>
              <p className="text-gray-600 mb-4">
                AI systems that can create and evolve their own intelligence, 
                transcending traditional programming limitations.
              </p>
              <div className="text-sm text-purple-600 font-semibold">Impact: Revolutionary</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <h3 className="text-lg font-semibold">Quantum-Neural Fusion</h3>
              </div>
              <p className="text-gray-600 mb-4">
                The convergence of quantum computing and neural networks, 
                enabling unprecedented computational capabilities.
              </p>
              <div className="text-sm text-blue-600 font-semibold">Impact: Transformative</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <h3 className="text-lg font-semibold">Neural Interfaces</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Direct brain-computer interfaces enabling thought-controlled 
                devices and enhanced cognitive capabilities.
              </p>
              <div className="text-sm text-green-600 font-semibold">Impact: Life-Changing</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                <h3 className="text-lg font-semibold">Autonomous Everything</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Fully autonomous systems in transportation, manufacturing, 
                healthcare, and daily life operations.
              </p>
              <div className="text-sm text-orange-600 font-semibold">Impact: Disruptive</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                <h3 className="text-lg font-semibold">Edge AI Computing</h3>
              </div>
              <p className="text-gray-600 mb-4">
                AI processing at the device level for real-time decision making 
                without cloud dependency.
              </p>
              <div className="text-sm text-indigo-600 font-semibold">Impact: Accelerating</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">6</div>
                <h3 className="text-lg font-semibold">Digital Twins 2.0</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Advanced digital replicas that can predict, simulate, 
                and optimize real-world systems in real-time.
              </p>
              <div className="text-sm text-teal-600 font-semibold">Impact: Predictive</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold text-sm">7</div>
                <h3 className="text-lg font-semibold">Extended Reality (XR)</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Seamless integration of virtual, augmented, and mixed reality 
                for immersive experiences and remote collaboration.
              </p>
              <div className="text-sm text-pink-600 font-semibold">Impact: Immersive</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">8</div>
                <h3 className="text-lg font-semibold">Sustainable Tech</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Green computing, renewable energy integration, and 
                carbon-neutral technology solutions.
              </p>
              <div className="text-sm text-yellow-600 font-semibold">Impact: Essential</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-slate-600 rounded-full flex items-center justify-center text-white font-bold text-sm">9</div>
                <h3 className="text-lg font-semibold">Blockchain 3.0</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Next-generation blockchain with improved scalability, 
                interoperability, and real-world applications.
              </p>
              <div className="text-sm text-gray-600 font-semibold">Impact: Foundational</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">10</div>
                <h3 className="text-lg font-semibold">Biocomputing</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Biological systems used for computation, including DNA storage 
                and protein-based processing.
              </p>
              <div className="text-sm text-emerald-600 font-semibold">Impact: Revolutionary</div>
            </div>
          </div>
        </div>

        {/* Industry Impact */}
        <div className="bg-white rounded-2xl p-10 shadow-lg mb-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🏭 Industry Impact Analysis</h2>
            <p className="text-xl text-gray-600">How these trends will transform different sectors</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">🏥</span>
              </div>
              <h3 className="font-semibold mb-3">Healthcare</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• AI diagnostics</li>
                <li>• Neural interfaces</li>
                <li>• Quantum drug discovery</li>
                <li>• Personalized medicine</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">🏭</span>
              </div>
              <h3 className="font-semibold mb-3">Manufacturing</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Autonomous factories</li>
                <li>• Digital twins</li>
                <li>• Predictive maintenance</li>
                <li>• Smart supply chains</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">🏦</span>
              </div>
              <h3 className="font-semibold mb-3">Finance</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Quantum cryptography</li>
                <li>• AI trading algorithms</li>
                <li>• Blockchain 3.0</li>
                <li>• Autonomous banking</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">🚗</span>
              </div>
              <h3 className="font-semibold mb-3">Transportation</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Autonomous vehicles</li>
                <li>• Smart infrastructure</li>
                <li>• Edge computing</li>
                <li>• Sustainable mobility</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Future Predictions */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-10 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🔮 Future Predictions</h2>
            <p className="text-xl text-gray-600">What to expect in the coming years</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4 text-center">2025</div>
              <h3 className="text-xl font-semibold mb-4 text-center">Near Future</h3>
              <ul className="space-y-2 text-sm">
                <li>• Quantum advantage in specific applications</li>
                <li>• Neural interfaces for medical use</li>
                <li>• Autonomous systems in controlled environments</li>
                <li>• Edge AI becoming mainstream</li>
                <li>• Digital twins in manufacturing</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4 text-center">2030</div>
              <h3 className="text-xl font-semibold mb-4 text-center">Medium Term</h3>
              <ul className="space-y-2 text-sm">
                <li>• Synthetic intelligence emergence</li>
                <li>• Quantum-neural fusion applications</li>
                <li>• Neural interfaces for consumers</li>
                <li>• Fully autonomous cities</li>
                <li>• Biocomputing prototypes</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4 text-center">2035</div>
              <h3 className="text-xl font-semibold mb-4 text-center">Long Term</h3>
              <ul className="space-y-2 text-sm">
                <li>• Artificial general intelligence</li>
                <li>• Quantum internet deployment</li>
                <li>• Mind-machine integration</li>
                <li>• Post-scarcity economics</li>
                <li>• Interplanetary computing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 rounded-2xl p-10 text-white">
          <h2 className="text-4xl font-bold mb-4">Stay Ahead of the Future</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Partner with Zion Tech Group to prepare your organization for the technological 
            revolution and capitalize on emerging opportunities.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/contact" className="bg-white text-violet-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Future-Proof Your Business
            </a>
            <a href="/pages/UltimateTechGuide2025" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
              Download Complete Guide
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureTechTrends2025;