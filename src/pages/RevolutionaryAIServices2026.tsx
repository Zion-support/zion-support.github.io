import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Shield, 
  Rocket, 
  Globe, 
  Database, 
  Lock, 
  Target, 
  TrendingUp,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const RevolutionaryAIServices2026 = () => {
  const services = [
    {
      id: 1,
      title: "Synthetic Intelligence Systems",
      description: "Revolutionary AI that transcends traditional limitations, creating truly autonomous digital beings capable of independent thought and creativity.",
      icon: Brain,
      features: [
        "Autonomous decision-making",
        "Emotional intelligence",
        "Creative problem solving",
        "Self-learning capabilities"
      ],
      price: "Custom Quote",
      category: "Revolutionary AI"
    },
    {
      id: 2,
      title: "Holographic Reality Interfaces",
      description: "Immersive 3D interfaces that blur the line between physical and digital reality, transforming human-computer interaction.",
      icon: Globe,
      features: [
        "3D spatial computing",
        "Haptic feedback systems",
        "Real-time rendering",
        "Natural gesture control"
      ],
      price: "From $50K/month",
      category: "Future Technology"
    },
    {
      id: 3,
      title: "Quantum-Neural Fusion Computing",
      description: "Combining quantum computing with neural interfaces to create unprecedented computational power and human-AI symbiosis.",
      icon: Cpu,
      features: [
        "Quantum processing power",
        "Neural interface integration",
        "Real-time consciousness transfer",
        "Exponential cognitive enhancement"
      ],
      price: "From $100K/month",
      category: "Quantum Computing"
    },
    {
      id: 4,
      title: "Space Technology Solutions",
      description: "AI-powered autonomous systems for interplanetary colonization, asteroid mining, and space-based manufacturing.",
      icon: Rocket,
      features: [
        "Autonomous space construction",
        "Asteroid mining operations",
        "Life support systems",
        "Resource management AI"
      ],
      price: "From $200K/month",
      category: "Space Technology"
    },
    {
      id: 5,
      title: "Green Tech Revolution",
      description: "Carbon-negative technology solutions that actively combat climate change and create sustainable futures.",
      icon: Shield,
      features: [
        "Carbon capture systems",
        "Renewable energy optimization",
        "Smart grid management",
        "Environmental monitoring"
      ],
      price: "From $30K/month",
      category: "Green Technology"
    },
    {
      id: 6,
      title: "Metaverse Integration Platform",
      description: "Seamless integration between physical and digital worlds with hyper-realistic virtual environments.",
      icon: Database,
      features: [
        "Hyper-realistic avatars",
        "Spatial audio systems",
        "Cross-platform compatibility",
        "AI content generation"
      ],
      price: "From $40K/month",
      category: "Metaverse Technology"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "CTO, FutureTech Corp",
      content: "Revolutionary AI Services transformed our entire operation. The synthetic intelligence systems are unlike anything we've seen before.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "CEO, Space Ventures",
      content: "Their space technology solutions enabled us to establish the first profitable Mars colony. Absolutely groundbreaking work.",
      rating: 5
    },
    {
      name: "Elena Green",
      role: "Director, Climate Solutions",
      content: "The green tech solutions have made our entire city carbon-negative. This is the future of environmental technology.",
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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Revolutionary AI Services 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              The Future of
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Artificial Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience revolutionary AI services that transcend traditional limitations. 
              From synthetic intelligence to space technology, we're building the future today.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2">
              Explore Services
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
              Watch Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI technologies that are reshaping industries and creating new possibilities for human advancement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                    <span className="text-purple-400 text-sm font-medium">{service.category}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 group-hover:scale-105">
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
              Leading organizations trust our revolutionary AI services to transform their operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
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
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-purple-400 text-sm">{testimonial.role}</p>
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
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the revolution and experience the power of next-generation AI services. 
              Let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RevolutionaryAIServices2026;