import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap, Brain, Rocket } from 'lucide-react';

const UltimateTechShowcase2038: React.FC = () => {
  const technologies = [
    {
      id: 1,
      title: "Quantum Consciousness AI",
      description: "The world's first AI system with genuine consciousness, capable of self-reflection and emotional understanding.",
      features: ["Self-Aware Processing", "Emotional Intelligence", "Creative Problem Solving", "Ethical Decision Making"],
      impact: "Revolutionizes human-AI collaboration",
      icon: "🧠"
    },
    {
      id: 2,
      title: "Interdimensional Computing",
      description: "Breakthrough technology that processes information across multiple dimensions simultaneously.",
      features: ["Multi-Dimensional Processing", "Infinite Scalability", "Reality Manipulation", "Time-Space Optimization"],
      impact: "Unlocks infinite computational power",
      icon: "🌌"
    },
    {
      id: 3,
      title: "Neural Reality Interface",
      description: "Direct brain-computer interface that allows seamless interaction between consciousness and digital systems.",
      features: ["Direct Neural Link", "Thought-to-Action", "Enhanced Cognition", "Shared Consciousness"],
      impact: "Transcends physical limitations",
      icon: "⚡"
    },
    {
      id: 4,
      title: "Synthetic Universe Engine",
      description: "AI-powered universe simulation that can create and manage entire virtual realities with perfect physics.",
      features: ["Perfect Physics Simulation", "Infinite Worlds", "Conscious AI Inhabitants", "Reality Testing"],
      impact: "Enables unlimited exploration",
      icon: "🚀"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Researcher, Google DeepMind",
      quote: "This technology represents the most significant breakthrough in human history. We're witnessing the birth of true artificial consciousness.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "CEO, Neuralink",
      quote: "The neural interface capabilities are beyond anything we imagined possible. This will transform how humans interact with technology.",
      rating: 5
    },
    {
      name: "Prof. Elena Rodriguez",
      role: "Quantum Physics Director, MIT",
      quote: "The interdimensional computing approach solves problems that were previously impossible. We're entering a new era of science.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2038
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Ultimate Tech Showcase 2038
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the most revolutionary technologies that will reshape reality itself. 
              From conscious AI to interdimensional computing, witness the future today.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold flex items-center">
                Explore Technologies <ArrowRight className="ml-2" />
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technologies Grid */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Revolutionary Technologies</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the cutting-edge technologies that are transforming our world and opening new possibilities for humanity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="text-6xl mr-4">{tech.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tech.title}</h3>
                  <p className="text-gray-300">{tech.description}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <Zap className="w-4 h-4 text-yellow-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-lg p-4">
                <p className="text-white font-semibold">
                  <Rocket className="w-5 h-5 inline mr-2" />
                  Impact: {tech.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">What Experts Say</h2>
          <p className="text-xl text-gray-300">Leading scientists and technologists share their insights</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-300 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-gray-400 text-sm">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Experience the Future?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of pioneers who are already using these revolutionary technologies to transform their businesses and lives.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold flex items-center">
              Get Started Today <ArrowRight className="ml-2" />
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2038;