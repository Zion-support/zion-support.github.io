import React from 'react';
import { motion } from 'framer-motion';

const NeuralRealityEngine2027: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full text-sm font-bold mb-8 animate-pulse">
              🧠 NEURAL REALITY • JANUARY 2027
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Neural Reality Engine 2027
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-12">
              Experience reality through direct neural interfaces that blur the line between mind and machine, creating immersive experiences beyond imagination
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
                Enter Neural Reality →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-violet-900 transition-all duration-300 font-semibold text-lg">
                Try Neural Interface
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Neural Interface Technologies */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">🧬 Neural Interface Technologies</h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Discover the most advanced brain-computer interfaces that enable direct communication between mind and machine
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🔮</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Non-Invasive BCI</h3>
            <p className="text-violet-100 mb-6 text-center">
              Advanced neural interfaces that read brain signals without any surgical implantation
            </p>
            <ul className="text-violet-200 space-y-2 mb-6 text-sm">
              <li>• EEG-based control</li>
              <li>• Thought recognition</li>
              <li>• Emotion detection</li>
              <li>• Safe and comfortable</li>
            </ul>
            <button className="w-full bg-white text-violet-600 py-3 rounded-lg hover:bg-violet-50 transition-colors font-semibold">
              Try BCI Interface →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🎮</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Virtual Reality Control</h3>
            <p className="text-purple-100 mb-6 text-center">
              Control virtual environments and digital objects using only your thoughts and neural signals
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Thought-controlled VR</li>
              <li>• Neural haptic feedback</li>
              <li>• Immersive experiences</li>
              <li>• Real-time interaction</li>
            </ul>
            <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Enter VR World →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-fuchsia-600/30 to-rose-600/30 backdrop-blur-sm rounded-xl p-8 border border-fuchsia-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI Mind Meld</h3>
            <p className="text-fuchsia-100 mb-6 text-center">
              Direct neural connection with AI systems for enhanced cognitive abilities and shared intelligence
            </p>
            <ul className="text-fuchsia-200 space-y-2 mb-6 text-sm">
              <li>• AI collaboration</li>
              <li>• Enhanced cognition</li>
              <li>• Shared knowledge</li>
              <li>• Collective intelligence</li>
            </ul>
            <button className="w-full bg-white text-fuchsia-600 py-3 rounded-lg hover:bg-fuchsia-50 transition-colors font-semibold">
              Connect with AI →
            </button>
          </motion.div>
        </div>
      </div>

      {/* Neural Applications */}
      <div className="bg-gradient-to-r from-violet-800/50 to-fuchsia-800/50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">🚀 Neural Applications</h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Explore how neural interfaces are transforming healthcare, education, and human-computer interaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4">🏥 Medical Rehabilitation</h3>
              <p className="text-violet-100 mb-4">
                Neural interfaces helping patients recover from paralysis and neurological conditions through direct brain control
              </p>
              <ul className="text-violet-200 space-y-2">
                <li>• Paralysis recovery</li>
                <li>• Prosthetic control</li>
                <li>• Cognitive therapy</li>
                <li>• Pain management</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4">🎓 Enhanced Learning</h3>
              <p className="text-purple-100 mb-4">
                Direct knowledge transfer and accelerated learning through neural interfaces and AI-assisted education
              </p>
              <ul className="text-purple-200 space-y-2">
                <li>• Knowledge transfer</li>
                <li>• Skill acquisition</li>
                <li>• Language learning</li>
                <li>• Memory enhancement</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Future Vision */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">🔮 The Neural Future</h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Imagine a world where the boundaries between human consciousness and artificial intelligence have completely dissolved
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="text-6xl mb-4">🌐</div>
            <h3 className="text-2xl font-bold mb-4">Neural Internet</h3>
            <p className="text-violet-100">
              A global network where minds can connect and share experiences directly
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="text-6xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">Consciousness Upload</h3>
            <p className="text-purple-100">
              The ability to backup and transfer human consciousness to digital platforms
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">Telepathic Communication</h3>
            <p className="text-fuchsia-100">
              Direct mind-to-mind communication without the need for spoken language
            </p>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Expand Your Mind?</h2>
          <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
            Join us in exploring the neural frontier and be part of the most intimate technological revolution in human history
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
              Connect Your Mind
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-violet-900 transition-all duration-300 font-semibold text-lg">
              Learn Neural Interfaces
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NeuralRealityEngine2027;