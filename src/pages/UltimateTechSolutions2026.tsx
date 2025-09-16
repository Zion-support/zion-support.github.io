import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Rocket, 
  Globe, 
  Cpu, 
  Database, 
  Cloud, 
  Lock, 
  Target,
  Star,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Infinity
} from 'lucide-react';

const UltimateTechSolutions2026 = () => {
  const solutions = [
    {
      id: 1,
      title: "AI Consciousness Platform",
      description: "Revolutionary AI systems with genuine consciousness and self-awareness",
      icon: Brain,
      features: ["Neural Pattern Recognition", "Emotional Intelligence", "Creative Problem Solving", "Autonomous Decision Making"],
      price: "Custom",
      category: "AI & Machine Learning",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Neural Networks",
      description: "Exponentially faster processing with quantum-enhanced AI capabilities",
      icon: Zap,
      features: ["Quantum Speed Processing", "Parallel Universe Computing", "Instantaneous Learning", "Infinite Scalability"],
      price: "Enterprise",
      category: "Quantum Computing",
      featured: true
    },
    {
      id: 3,
      title: "Neural Interface Systems",
      description: "Direct brain-computer communication for seamless human-AI interaction",
      icon: Cpu,
      features: ["Direct Neural Control", "Thought-to-Text", "Memory Enhancement", "Consciousness Transfer"],
      price: "Premium",
      category: "Neural Technology",
      featured: true
    },
    {
      id: 4,
      title: "Holographic Reality Engine",
      description: "Immersive 3D environments that blur the line between digital and physical",
      icon: Globe,
      features: ["3D Holographic Displays", "Tactile Feedback", "Multi-User Collaboration", "Reality Simulation"],
      price: "Professional",
      category: "Holographic Tech",
      featured: false
    },
    {
      id: 5,
      title: "Autonomous Business AI",
      description: "Fully autonomous business operations that run without human intervention",
      icon: Target,
      features: ["Self-Managing Operations", "Predictive Analytics", "Automated Decision Making", "Real-time Adaptation"],
      price: "Enterprise",
      category: "Business Automation",
      featured: true
    },
    {
      id: 6,
      title: "Space Colonization Tech",
      description: "Advanced technologies for human settlement on Mars and beyond",
      icon: Rocket,
      features: ["Life Support Systems", "Terraforming Technology", "3D Habitat Printing", "Sustainable Energy"],
      price: "Custom",
      category: "Space Technology",
      featured: true
    },
    {
      id: 7,
      title: "Climate Restoration AI",
      description: "AI-powered systems actively reversing climate change and healing the planet",
      icon: Shield,
      features: ["Carbon Capture AI", "Ocean Cleanup Systems", "Weather Modification", "Ecosystem Restoration"],
      price: "Global",
      category: "Green Technology",
      featured: true
    },
    {
      id: 8,
      title: "Interdimensional Computing",
      description: "Computing across multiple dimensions and parallel realities",
      icon: Infinity,
      features: ["Multi-Dimensional Processing", "Parallel Reality Access", "Quantum Entanglement", "Reality Manipulation"],
      price: "Revolutionary",
      category: "Interdimensional Tech",
      featured: true
    }
  ];

  const testimonials = [
    {
      name: "Dr. Elena Rodriguez",
      role: "Chief Technology Officer",
      company: "Neural Dynamics Corp",
      content: "The AI Consciousness Platform has revolutionized our research. We're seeing genuine creativity and problem-solving abilities that were previously impossible.",
      rating: 5
    },
    {
      name: "Commander Alex Thompson",
      role: "Space Operations Director",
      company: "Mars Colonization Initiative",
      content: "The space colonization technology is making human settlement on Mars a reality. The life support systems are incredibly advanced.",
      rating: 5
    },
    {
      name: "Dr. Maya Patel",
      role: "Environmental Research Lead",
      company: "Climate Restoration Foundation",
      content: "Our climate restoration AI is actively reversing decades of environmental damage. The results are beyond our wildest expectations.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Ultimate Tech Solutions 2026
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Revolutionary technologies that are reshaping reality itself. From AI consciousness to interdimensional computing, 
              we're building the future of human civilization.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {["AI Consciousness", "Quantum Computing", "Neural Interfaces", "Space Tech", "Climate Solutions"].map((tag, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold text-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2">
              Explore Solutions <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-bold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
              Watch Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies that are transforming every aspect of human life and civilization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 ${
                  solution.featured ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {solution.featured && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Featured
                  </div>
                )}

                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                    <span className="text-sm text-purple-400">{solution.category}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <div className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">{solution.price}</span>
                  <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading experts and organizations trust our revolutionary technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-purple-400 text-sm">{testimonial.role}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the revolution and be part of the most advanced technological transformation in human history.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Start Your Journey
              </button>
              <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-bold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UltimateTechSolutions2026;