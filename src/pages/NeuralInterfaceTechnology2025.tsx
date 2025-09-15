import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const NeuralInterfaceTechnology2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            🧬 NEURAL INTERFACE • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Neural Interface Technology 2025
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Bridge the gap between mind and machine with cutting-edge neural interface technology 
            that enables direct communication between the human brain and computers.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Neural Tech →
            </button>
            <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-lg">
              Join Research Program
            </button>
          </div>
        </div>

        {/* Technology Overview */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">🧠 Technology Overview</h2>
          <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 rounded-3xl p-12 text-white">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4">Non-Invasive BCI</h3>
                <p className="text-emerald-100 mb-4">
                  Advanced EEG and fNIRS technology for safe, comfortable brain-computer interfaces
                </p>
                <div className="text-3xl font-bold text-emerald-400">99.7% Accuracy</div>
              </div>
              
              <div className="text-center">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-4">Real-Time Processing</h3>
                <p className="text-emerald-100 mb-4">
                  Ultra-low latency neural signal processing for seamless human-computer interaction
                </p>
                <div className="text-3xl font-bold text-emerald-400">&lt;10ms Latency</div>
              </div>
              
              <div className="text-center">
                <div className="text-6xl mb-4">🔮</div>
                <h3 className="text-2xl font-bold mb-4">Thought Control</h3>
                <p className="text-emerald-100 mb-4">
                  Direct neural control of devices and applications through pure thought
                </p>
                <div className="text-3xl font-bold text-emerald-400">100% Intuitive</div>
              </div>
            </div>
          </div>
        </section>

        {/* Neural Interface Types */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">🔬 Neural Interface Types</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">📡</div>
              <h3 className="text-2xl font-bold mb-4">EEG-Based Interfaces</h3>
              <p className="text-gray-600 mb-6">
                Non-invasive brain-computer interfaces using electroencephalography 
                for real-time neural signal acquisition and processing.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• 256-Channel EEG System</li>
                <li>• Real-Time Signal Processing</li>
                <li>• Machine Learning Integration</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold mb-4">fNIRS Technology</h3>
              <p className="text-gray-600 mb-6">
                Functional near-infrared spectroscopy for measuring brain activity 
                through blood oxygenation changes.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Portable fNIRS Devices</li>
                <li>• High Spatial Resolution</li>
                <li>• Long-Term Monitoring</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4">Invasive Implants</h3>
              <p className="text-gray-600 mb-6">
                High-precision neural implants for direct neural signal recording 
                and stimulation with microelectrode arrays.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Microelectrode Arrays</li>
                <li>• Biocompatible Materials</li>
                <li>• Wireless Communication</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🌊</div>
              <h3 className="text-2xl font-bold mb-4">MEG Interfaces</h3>
              <p className="text-gray-600 mb-6">
                Magnetoencephalography-based interfaces for high-resolution 
                neural activity measurement and control.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Ultra-High Resolution</li>
                <li>• Deep Brain Access</li>
                <li>• Research Applications</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🎧</div>
              <h3 className="text-2xl font-bold mb-4">Hybrid Systems</h3>
              <p className="text-gray-600 mb-6">
                Multi-modal neural interfaces combining multiple technologies 
                for enhanced accuracy and reliability.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• EEG + fNIRS Fusion</li>
                <li>• Multi-Sensor Integration</li>
                <li>• Adaptive Algorithms</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🔮</div>
              <h3 className="text-2xl font-bold mb-4">Future Interfaces</h3>
              <p className="text-gray-600 mb-6">
                Next-generation neural interfaces using nanotechnology and 
                quantum sensing for unprecedented precision.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Nanoscale Sensors</li>
                <li>• Quantum Neural Networks</li>
                <li>• Molecular Interfaces</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">🚀 Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-600/10 to-teal-600/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-emerald-800">Medical Applications</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-emerald-800">Prosthetic Control</h4>
                    <p className="text-gray-600 text-sm">Direct neural control of prosthetic limbs with natural movement patterns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-emerald-800">Communication Aids</h4>
                    <p className="text-gray-600 text-sm">Enable communication for patients with locked-in syndrome</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-emerald-800">Rehabilitation</h4>
                    <p className="text-gray-600 text-sm">Neural feedback systems for stroke and spinal cord injury recovery</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-emerald-800">Mental Health</h4>
                    <p className="text-gray-600 text-sm">Real-time monitoring and intervention for depression and anxiety</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-600/10 to-cyan-600/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-teal-800">Consumer Applications</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-teal-800">Gaming & VR</h4>
                    <p className="text-gray-600 text-sm">Immersive gaming experiences controlled by thought and emotion</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-teal-800">Smart Home Control</h4>
                    <p className="text-gray-600 text-sm">Control home automation systems through neural commands</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-teal-800">Learning Enhancement</h4>
                    <p className="text-gray-600 text-sm">Accelerate learning through direct neural feedback and optimization</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-teal-800">Productivity Tools</h4>
                    <p className="text-gray-600 text-sm">Thought-controlled computers and productivity applications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">⚙️ Technical Specifications</h2>
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold mb-6">Neural Signal Processing</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Sampling Rate</span>
                    <span className="text-2xl font-bold text-emerald-400">10 kHz</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Signal Resolution</span>
                    <span className="text-2xl font-bold text-teal-400">24-bit</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Processing Latency</span>
                    <span className="text-2xl font-bold text-cyan-400">&lt;10ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Channel Count</span>
                    <span className="text-2xl font-bold text-yellow-400">256</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-6">Hardware Features</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="w-3 h-3 bg-emerald-400 rounded-full"></span>
                    <span>Wireless Communication</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-3 h-3 bg-teal-400 rounded-full"></span>
                    <span>Battery Life: 24+ Hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-3 h-3 bg-cyan-400 rounded-full"></span>
                    <span>Waterproof Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                    <span>Machine Learning Integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-3 h-3 bg-pink-400 rounded-full"></span>
                    <span>Real-Time Calibration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Development */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">🔬 Research & Development</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full">NATURE</span>
                <span className="text-sm text-gray-500">Jan 2025</span>
              </div>
              <h3 className="text-xl font-bold mb-3">"Non-Invasive Neural Control"</h3>
              <p className="text-gray-600 mb-4">
                Breakthrough research in non-invasive brain-computer interfaces achieving 99.7% accuracy
              </p>
              <a href="#" className="text-emerald-600 hover:text-emerald-700 font-semibold">Read Study →</a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full">SCIENCE</span>
                <span className="text-sm text-gray-500">Dec 2024</span>
              </div>
              <h3 className="text-xl font-bold mb-3">"Neural Plasticity Enhancement"</h3>
              <p className="text-gray-600 mb-4">
                Novel techniques for enhancing neural plasticity and accelerating learning
              </p>
              <a href="#" className="text-emerald-600 hover:text-emerald-700 font-semibold">Read Study →</a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-2 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full">NEURIPS</span>
                <span className="text-sm text-gray-500">Dec 2024</span>
              </div>
              <h3 className="text-xl font-bold mb-3">"Real-Time Neural Decoding"</h3>
              <p className="text-gray-600 mb-4">
                Advanced algorithms for real-time neural signal decoding and interpretation
              </p>
              <a href="#" className="text-emerald-600 hover:text-emerald-700 font-semibold">Read Study →</a>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Join the Neural Revolution</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Be among the first to experience the future of human-computer interaction. 
              Our neural interface technology is ready to transform how you interact with technology.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
                Try Neural Interface
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-600 transition-colors font-semibold text-lg">
                Join Research Program
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default NeuralInterfaceTechnology2025;