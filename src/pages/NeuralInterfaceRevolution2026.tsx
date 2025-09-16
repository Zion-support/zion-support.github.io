import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Header';
import EnhancedFooter from '../components/EnhancedFooter';

const NeuralInterfaceRevolution2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold text-center mb-8 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Neural Interface Revolution 2026
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              The next generation of brain-computer interfaces that seamlessly 
              connect human consciousness with artificial intelligence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Technology
              </button>
              <button className="bg-gradient-to-r from-teal-600 to-cyan-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Try Neural Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Neural Interface Features */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white">Revolutionary Neural Interface Technology</h2>
          <p className="text-emerald-100 mb-6 text-center max-w-3xl mx-auto">
            Advanced brain-computer interfaces that read neural signals without surgery, enabling seamless mind-machine communication
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-emerald-800/30 to-teal-800/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30"
          >
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-white">Non-Invasive Neural Reading</h3>
            <p className="text-emerald-100 mb-4">
              Advanced EEG and fNIRS technology that reads brain activity without implants
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Real-time neural signal processing</li>
              <li>• 99.9% accuracy in thought recognition</li>
              <li>• Zero surgical intervention required</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-teal-800/30 to-cyan-800/30 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30"
          >
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-white">Thought-Controlled Computing</h3>
            <p className="text-teal-100 mb-4">
              Control devices and applications directly with your thoughts
            </p>
            <ul className="text-teal-200 space-y-2 text-sm">
              <li>• Instant device control</li>
              <li>• Multi-device synchronization</li>
              <li>• Learning adaptation algorithms</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-cyan-800/30 to-blue-800/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30"
          >
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-2xl font-bold mb-4 text-white">Neural Internet Access</h3>
            <p className="text-cyan-100 mb-4">
              Browse the internet and access information directly through neural signals
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• Direct neural web browsing</li>
              <li>• Instant information retrieval</li>
              <li>• Augmented reality integration</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Advanced Applications */}
      <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Advanced Neural Applications</h2>
            <p className="text-indigo-200 max-w-3xl mx-auto">
              Discover how neural interfaces are revolutionizing healthcare, education, and human-computer interaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-white">Medical Applications</h3>
              <p className="text-indigo-100 mb-6">
                Restore motor function, treat neurological disorders, and enhance cognitive abilities through advanced neural interfaces.
              </p>
              <ul className="text-indigo-200 space-y-2 text-sm">
                <li>• Paralysis rehabilitation</li>
                <li>• Memory enhancement</li>
                <li>• Neurological disorder treatment</li>
                <li>• Cognitive augmentation</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-white">Educational Revolution</h3>
              <p className="text-indigo-100 mb-6">
                Learn at unprecedented speeds through direct neural knowledge transfer and enhanced cognitive processing.
              </p>
              <ul className="text-indigo-200 space-y-2 text-sm">
                <li>• Direct knowledge transfer</li>
                <li>• Enhanced learning speeds</li>
                <li>• Neural memory optimization</li>
                <li>• Skill acquisition acceleration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join the neural interface revolution and experience the future of human-computer interaction today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/pages/NeuralInterfaceEvolution2026" className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-bold text-lg">
              🌟 Explore Neural Evolution →
            </a>
            <a href="/pages/UltimateTechRevolution2027" className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors font-bold text-lg border-2 border-white/30">
              🚀 Ultimate Tech Revolution →
            </a>
          </div>
        </div>
      </div>
      
      <EnhancedFooter />
    </div>
  );
};

export default NeuralInterfaceRevolution2026;