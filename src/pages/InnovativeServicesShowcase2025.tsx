import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Rocket, 
  Satellite, 
  Heart, 
  Bot, 
  Workflow, 
  Zap, 
  Shield, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Star,
  TrendingUp,
  Globe,
  Cpu,
  Cloud,
  AI,
  Innovation,
  Technology,
  Future
} from 'lucide-react';

const InnovativeServicesShowcase2025: React.FC = () => {
  const innovativeServices = [
    {
      title: "AI Quantum Neural Interface",
      description: "Revolutionary quantum-enhanced neural networks for unprecedented AI performance",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-600 to-pink-600",
      features: [
        "Quantum neural processing",
        "Hybrid AI architecture",
        "Real-time learning",
        "Quantum security",
        "Scalable performance",
        "Multi-user access"
      ],
      pricing: "$2,999 - $19,999/month",
      link: "/services/ai-quantum-neural-interface"
    },
    {
      title: "AI Autonomous Business Operations Platform",
      description: "Fully autonomous AI operations for unprecedented business efficiency",
      icon: <Bot className="w-8 h-8" />,
      color: "from-blue-600 to-cyan-600",
      features: [
        "Autonomous decision making",
        "Intelligent process automation",
        "Predictive analytics",
        "Compliance automation",
        "Human-AI collaboration",
        "Real-time optimization"
      ],
      pricing: "$3,999 - $24,999/month",
      link: "/services/ai-autonomous-business-operations-platform"
    },
    {
      title: "AI Space Technology Platform",
      description: "Cutting-edge AI technology for space exploration and operations",
      icon: <Satellite className="w-8 h-8" />,
      color: "from-indigo-600 to-purple-600",
      features: [
        "Satellite intelligence",
        "Launch optimization",
        "Space traffic management",
        "Space security",
        "Mission control AI",
        "Autonomous operations"
      ],
      pricing: "$4,999 - $39,999/month",
      link: "/services/ai-space-technology-platform"
    },
    {
      title: "AI Mental Health Support Platform",
      description: "AI-powered mental health care with privacy and accessibility",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-600 to-rose-600",
      features: [
        "AI-powered therapy",
        "Emotional intelligence",
        "24/7 support",
        "Privacy & security",
        "Real-time monitoring",
        "Professional integration"
      ],
      pricing: "$99 - $999/month",
      link: "/services/ai-mental-health-support-platform"
    }
  ];

  const benefits = [
    {
      icon: <Innovation className="w-8 h-8" />,
      title: "Cutting-Edge Innovation",
      description: "Stay ahead with the latest AI breakthroughs and emerging technologies"
    },
    {
      icon: <Technology className="w-8 h-8" />,
      title: "Advanced Technology",
      description: "Leverage state-of-the-art AI, quantum computing, and space technology"
    },
    {
      icon: <Future className="w-8 h-8" />,
      title: "Future-Ready Solutions",
      description: "Build tomorrow's capabilities with today's most advanced platforms"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Competitive Advantage",
      description: "Gain market leadership through innovative technology adoption"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description: "Transform industries and solve world-class challenges"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Excellence Guaranteed",
      description: "Enterprise-grade solutions with proven performance and reliability"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      description: "Perfect for startups and research institutions",
      price: "From $99",
      period: "/month",
      features: [
        "Basic AI capabilities",
        "Standard support",
        "Core features",
        "Community access"
      ]
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses and organizations",
      price: "From $2,999",
      period: "/month",
      features: [
        "Advanced AI features",
        "Priority support",
        "Custom integrations",
        "Professional tools"
      ]
    },
    {
      name: "Enterprise",
      description: "For large organizations requiring maximum capabilities",
      price: "From $19,999",
      period: "/month",
      features: [
        "Full platform access",
        "Dedicated support",
        "Custom development",
        "White-label options"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              2025 Innovative Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of technology with our revolutionary AI, quantum computing, 
              space technology, and mental health platforms. Transform your organization today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white font-semibold rounded-lg transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Innovative Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our cutting-edge platforms that are reshaping industries and defining the future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {innovativeServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="text-lg font-semibold text-purple-400 mb-2">Pricing:</div>
                  <div className="text-white">{service.pricing}</div>
                </div>

                <a
                  href={service.link}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Innovative Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your organization with cutting-edge technology and proven results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-purple-400 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Flexible Pricing Options
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your organization's needs and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://ziontechgroup.com/contact"
                  className="w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors bg-transparent border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white"
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the technology revolution and transform your organization today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white font-semibold rounded-lg transition-colors"
              >
                Contact Sales Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-purple-400 mb-2">Phone</h4>
              <a href="tel:+13024640950" className="text-white hover:text-purple-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-400 mb-2">Email</h4>
              <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-purple-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-400 mb-2">Address</h4>
              <p className="text-white">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2025;