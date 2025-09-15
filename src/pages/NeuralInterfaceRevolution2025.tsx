import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NeuralInterfaceRevolution2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('mind-reading');

  const demos = [
    { id: 'mind-reading', label: 'Mind Reading', icon: '🧠' },
    { id: 'thought-control', label: 'Thought Control', icon: '🎮' },
    { id: 'memory-enhancement', label: 'Memory Enhancement', icon: '💾' },
    { id: 'neural-feedback', label: 'Neural Feedback', icon: '🔄' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧬 NEURAL INTERFACE REVOLUTION • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Neural Interface Revolution
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Bridge the gap between mind and machine with direct neural interfaces that enable 
              seamless human-computer interaction through thought alone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Experience Neural Interface
              </button>
              <button className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400 hover:text-emerald-900 transition-all duration-300 font-semibold text-lg">
                Watch Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Neural Interface Technologies */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Neural Interface Technologies</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our cutting-edge neural interface technologies enable direct communication between the human brain 
            and digital systems, opening up unprecedented possibilities for human-computer interaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Non-Invasive BCI</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Advanced EEG-based brain-computer interfaces that read neural signals without surgery
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Real-time EEG processing</li>
              <li>• Machine learning algorithms</li>
              <li>• Wireless connectivity</li>
              <li>• Portable design</li>
            </ul>
            <div className="text-center">
              <span className="inline-block bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-lg text-sm font-semibold">
                Available Now
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🎮</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Thought Control</h3>
            <p className="text-purple-100 mb-6 text-center">
              Control devices and applications using only your thoughts and mental commands
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Device control via thoughts</li>
              <li>• Gaming applications</li>
              <li>• Accessibility solutions</li>
              <li>• Hands-free operation</li>
            </ul>
            <div className="text-center">
              <span className="inline-block bg-purple-500/20 text-purple-300 px-4 py-2 rounded-lg text-sm font-semibold">
                Beta Testing
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">💾</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Memory Enhancement</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Augment human memory with neural interfaces that can store and retrieve information
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Memory storage systems</li>
              <li>• Information retrieval</li>
              <li>• Learning acceleration</li>
              <li>• Cognitive enhancement</li>
            </ul>
            <div className="text-center">
              <span className="inline-block bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-lg text-sm font-semibold">
                Research Phase
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🔄</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Neural Feedback</h3>
            <p className="text-orange-100 mb-6 text-center">
              Real-time feedback systems that help users learn and optimize their neural control
            </p>
            <ul className="text-orange-200 space-y-2 mb-6 text-sm">
              <li>• Real-time feedback loops</li>
              <li>• Learning optimization</li>
              <li>• Performance monitoring</li>
              <li>• Adaptive training</li>
            </ul>
            <div className="text-center">
              <span className="inline-block bg-orange-500/20 text-orange-300 px-4 py-2 rounded-lg text-sm font-semibold">
                Prototype
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Interactive Neural Interface Demo</h2>
            <p className="text-xl text-gray-300">Experience the power of neural interfaces through our interactive demonstrations</p>
          </div>

          {/* Demo Tabs */}
          <div className="flex flex-wrap justify-center mb-8">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(demo.id)}
                className={`flex items-center space-x-2 px-6 py-3 m-2 rounded-lg font-semibold transition-all duration-300 ${
                  activeDemo === demo.id
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <span className="text-xl">{demo.icon}</span>
                <span>{demo.label}</span>
              </button>
            ))}
          </div>

          {/* Demo Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            {activeDemo === 'mind-reading' && (
              <div className="text-center">
                <div className="text-6xl mb-6">🧠</div>
                <h3 className="text-3xl font-bold text-white mb-6">Mind Reading Technology</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Our advanced neural interface can interpret your thoughts and convert them into digital commands. 
                  Think about moving your cursor, and watch it respond in real-time.
                </p>
                <div className="bg-slate-800 rounded-lg p-6 mb-6">
                  <div className="text-2xl text-emerald-400 mb-2">Neural Signal Strength: 85%</div>
                  <div className="w-full bg-slate-700 rounded-full h-4 mb-4">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-4 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <div className="text-gray-400">Thinking: "Move cursor to the right"</div>
                </div>
                <button className="bg-emerald-500 text-white px-8 py-3 rounded-lg hover:bg-emerald-600 transition-colors font-semibold">
                  Try Mind Reading Demo
                </button>
              </div>
            )}

            {activeDemo === 'thought-control' && (
              <div className="text-center">
                <div className="text-6xl mb-6">🎮</div>
                <h3 className="text-3xl font-bold text-white mb-6">Thought Control Gaming</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Control games and applications using only your thoughts. No hands, no voice commands - 
                  just pure mental control.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-slate-800 rounded-lg p-6">
                    <div className="text-lg font-semibold text-white mb-2">Game Control</div>
                    <div className="text-sm text-gray-400">Think "jump" to make the character jump</div>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-6">
                    <div className="text-lg font-semibold text-white mb-2">Device Control</div>
                    <div className="text-sm text-gray-400">Think "turn on" to control smart devices</div>
                  </div>
                </div>
                <button className="bg-emerald-500 text-white px-8 py-3 rounded-lg hover:bg-emerald-600 transition-colors font-semibold">
                  Start Thought Control
                </button>
              </div>
            )}

            {activeDemo === 'memory-enhancement' && (
              <div className="text-center">
                <div className="text-6xl mb-6">💾</div>
                <h3 className="text-3xl font-bold text-white mb-6">Memory Enhancement</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Augment your memory with neural interfaces that can store, organize, and retrieve 
                  information directly from your brain.
                </p>
                <div className="bg-slate-800 rounded-lg p-6 mb-6">
                  <div className="text-lg text-white mb-4">Memory Storage Status</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Personal Memories</span>
                      <span className="text-emerald-400">2.3 GB</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Work Information</span>
                      <span className="text-blue-400">1.8 GB</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Learning Data</span>
                      <span className="text-purple-400">3.1 GB</span>
                    </div>
                  </div>
                </div>
                <button className="bg-emerald-500 text-white px-8 py-3 rounded-lg hover:bg-emerald-600 transition-colors font-semibold">
                  Access Memory System
                </button>
              </div>
            )}

            {activeDemo === 'neural-feedback' && (
              <div className="text-center">
                <div className="text-6xl mb-6">🔄</div>
                <h3 className="text-3xl font-bold text-white mb-6">Neural Feedback Training</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Real-time feedback helps you optimize your neural control and improve your 
                  brain-computer interface performance.
                </p>
                <div className="bg-slate-800 rounded-lg p-6 mb-6">
                  <div className="text-lg text-white mb-4">Training Progress</div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Signal Clarity</span>
                        <span className="text-emerald-400">92%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{width: '92%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Response Time</span>
                        <span className="text-blue-400">0.3s</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Accuracy</span>
                        <span className="text-purple-400">88%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{width: '88%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="bg-emerald-500 text-white px-8 py-3 rounded-lg hover:bg-emerald-600 transition-colors font-semibold">
                  Start Training Session
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Applications Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Neural Interface Applications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how neural interfaces are transforming healthcare, accessibility, gaming, and more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🏥</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Medical Applications</h3>
                  <p className="text-gray-300 mb-6">
                    Restore mobility and communication for patients with paralysis, stroke, or neurodegenerative diseases 
                    through direct neural interfaces.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div>• Prosthetic limb control</div>
                    <div>• Communication devices for locked-in patients</div>
                    <div>• Rehabilitation therapy</div>
                    <div>• Pain management</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🏭</div>
              <h3 className="text-lg font-bold mb-2">Industrial Control</h3>
              <p className="text-emerald-100 text-sm">Precise control of complex machinery and robots</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="text-lg font-bold mb-2">Education & Training</h3>
              <p className="text-emerald-100 text-sm">Enhanced learning through neural feedback systems</p>
            </div>
          </div>
        </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">♿</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Accessibility Solutions</h3>
                  <p className="text-gray-300 mb-6">
                    Enable people with disabilities to interact with technology and the world around them 
                    using only their thoughts.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div>• Wheelchair control</div>
                    <div>• Computer navigation</div>
                    <div>• Environmental control</div>
                    <div>• Communication aids</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🎮</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Gaming & Entertainment</h3>
                  <p className="text-gray-300 mb-6">
                    Immersive gaming experiences where your thoughts control the action, creating 
                    unprecedented levels of immersion and interaction.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div>• Thought-controlled gaming</div>
                    <div>• Virtual reality integration</div>
                    <div>• Emotional gaming responses</div>
                    <div>• Multiplayer neural interfaces</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🧠</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Cognitive Enhancement</h3>
                  <p className="text-gray-300 mb-6">
                    Enhance human cognitive abilities through direct neural interfaces that can 
                    improve memory, learning, and decision-making.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div>• Memory augmentation</div>
                    <div>• Learning acceleration</div>
                    <div>• Focus enhancement</div>
                    <div>• Cognitive monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Connect Mind and Machine?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience the future of human-computer interaction with our revolutionary neural interface technology. 
            Join the neural revolution today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/pages/ComprehensiveServices2025" 
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore Neural Services
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400 hover:text-emerald-900 transition-all duration-300 font-semibold text-lg"
            >
              Schedule Neural Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralInterfaceRevolution2025;