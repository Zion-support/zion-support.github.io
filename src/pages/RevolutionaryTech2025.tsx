import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Brain, Shield, Globe, Rocket } from 'lucide-react';

const RevolutionaryTech2025: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces enabling thought-controlled computing and enhanced cognitive capabilities.",
      stats: "99.7% accuracy rate"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quantum Processing Power",
      description: "Revolutionary quantum processors delivering unprecedented computational speed and efficiency.",
      stats: "1000x faster processing"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Cybersecurity",
      description: "Next-generation security protocols protecting against quantum-level threats and AI-powered attacks.",
      stats: "99.99% threat detection"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global AI Network",
      description: "Distributed AI systems working in harmony across the globe for maximum efficiency and coverage.",
      stats: "200+ countries connected"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Space Technology Integration",
      description: "Advanced space-based computing and communication systems for interplanetary operations.",
      stats: "Mars-ready infrastructure"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      company: "TechCorp Global",
      content: "This technology has revolutionized our entire operation. The neural interface alone has increased our productivity by 400%.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "AI Research Director",
      company: "Future Labs",
      content: "The quantum processing capabilities are beyond anything we've seen. It's like having a supercomputer in your pocket.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Cybersecurity Expert",
      company: "SecureNet Solutions",
      content: "The security protocols are absolutely bulletproof. We've tested every possible attack vector and nothing gets through.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-8 animate-pulse">
              🚀 REVOLUTIONARY TECHNOLOGY 2025
            </div>
            <h1 className="text-6xl font-bold text-white mb-6">
              The Future is <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Now</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the most advanced technology ever created. Neural interfaces, quantum computing, 
              and AI systems that will transform how we live, work, and think.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2">
                Explore Technology <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Revolutionary Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technology that pushes the boundaries of what's possible
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <div className="text-blue-400 font-bold">{feature.stats}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">What Experts Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Industry leaders share their experience with our revolutionary technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <div className="font-bold text-white">{testimonial.name}</div>
                <div className="text-gray-400">{testimonial.role}</div>
                <div className="text-blue-400">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 border border-white/20"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Experience the Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of innovators who are already using our revolutionary technology to transform their businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2">
              Get Started Now <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTech2025;