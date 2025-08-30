import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Shield,
  Cloud,
  Cpu,
  Rocket,
  Lock,
  Globe,
  Heart,
  Code,
  Users,
  BarChart3,
  MessageCircle,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const microSAASSolutions = [
  {
    id: 'ai-legal-document-automation',
    title: 'AI Legal Document Automation',
    description: 'Transform legal practice with AI-powered document automation. Reduce costs by 70%, eliminate errors, and streamline workflows.',
    icon: Brain,
    features: ['AI-powered document analysis', 'Automated document generation', 'Compliance & risk management', 'Intelligent search & discovery'],
    href: '/services/ai-legal-document-automation',
    color: 'from-blue-600 to-cyan-600',
    price: '$299/month',
    badge: 'New'
  },
  {
    id: 'ai-healthcare-analytics',
    title: 'AI Healthcare Analytics Platform',
    description: 'Transform healthcare delivery with AI-powered analytics. Improve patient outcomes by 35%, reduce costs, and optimize operations.',
    icon: Heart,
    features: ['AI-powered predictive analytics', 'Real-time patient monitoring', 'Population health management', 'HIPAA-compliant security'],
    href: '/services/ai-healthcare-analytics',
    color: 'from-green-600 to-emerald-600',
    price: '$1,499/month',
    badge: 'Popular'
  },
  {
    id: 'ai-supply-chain-risk-management',
    title: 'AI Supply Chain Risk Management',
    description: 'Transform supply chain with intelligent risk management. Reduce disruptions by 60%, improve visibility, and ensure business continuity.',
    icon: Globe,
    features: ['AI-powered risk assessment', 'Early warning system', 'Global supply chain visibility', 'Compliance monitoring'],
    href: '/services/ai-supply-chain-risk-management',
    color: 'from-orange-600 to-red-600',
    price: '$899/month',
    badge: 'New'
  },
  {
    id: 'ai-quantum-computing-platform',
    title: 'AI Quantum Computing Platform',
    description: 'Transform computing capabilities with AI-powered quantum computing. Solve complex problems 1000x faster with quantum algorithms.',
    icon: Rocket,
    features: ['AI-enhanced quantum algorithms', 'Hybrid quantum-classical computing', 'Quantum machine learning', 'Quantum-safe security'],
    href: '/services/ai-quantum-computing-platform',
    color: 'from-purple-600 to-pink-600',
    price: '$2,499/month',
    badge: 'Premium'
  },
  {
    id: 'ai-business-intelligence',
    title: 'AI Business Intelligence',
    description: 'Transform your business data into actionable insights with our AI-powered BI platform.',
    icon: BarChart3,
    features: ['Predictive Analytics', 'Real-time Dashboards', 'Natural Language Queries', 'Automated Reporting'],
    href: '/micro-saas/ai-business-intelligence',
    color: 'from-blue-600 to-cyan-600',
    price: '$599/month',
    badge: 'Popular'
  },
  {
    id: 'customer-experience',
    title: 'Customer Experience Platform',
    description: 'Deliver exceptional customer experiences with our comprehensive CX management solution.',
    icon: Users,
    features: ['Customer Journey Mapping', 'Sentiment Analysis', 'Omnichannel Support', 'Personalization Engine'],
    href: '/micro-saas/customer-experience',
    color: 'from-purple-600 to-pink-600',
    price: '$399/month',
    badge: 'Popular'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Suite',
    description: 'Protect your digital assets with our comprehensive cybersecurity platform.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance Management'],
    href: '/micro-saas/cybersecurity',
    color: 'from-red-600 to-orange-600',
    price: '$799/month',
    badge: 'Popular'
  },
  {
    id: 'iot-edge',
    title: 'IoT Edge Computing',
    description: 'Harness the power of IoT and edge computing for real-time data processing.',
    icon: Cpu,
    features: ['Edge Analytics', 'Device Management', 'Data Streaming', 'Real-time Processing'],
    href: '/micro-saas/iot-edge',
    color: 'from-yellow-600 to-orange-600',
    price: '$699/month',
    badge: 'Popular'
  }
];

const benefits = [
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Get up and running in days, not months'
  },
  {
    icon: CheckCircle,
    title: 'Proven ROI',
    description: 'See measurable results within 30 days'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security and compliance'
  },
  {
    icon: Users,
    title: '24/7 Support',
    description: 'Expert support whenever you need it'
  }
];

export default function MicroSAAS() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zion-cyan/20 border border-zion-cyan/30 text-zion-cyan text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Code className="w-4 h-4" />
              Micro SAAS Solutions
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Powerful
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Micro SAAS
              </span>
              Solutions
            </h1>

            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your business with our suite of specialized, AI-powered micro SAAS applications.
              Each solution is designed to solve specific business challenges with maximum efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="inline-flex items-center gap-2 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                View Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue-dark/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Micro SAAS
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our micro SAAS solutions are built for modern businesses that need powerful,
              focused tools without the complexity of enterprise software.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-zion-cyan to-zion-purple mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our comprehensive suite of micro SAAS applications designed to
              address specific business challenges and drive growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAASSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                className="group bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-zion-cyan/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${solution.color}`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    {solution.badge && (
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        solution.badge === 'New' ? 'bg-green-500/20 text-green-400' :
                        solution.badge === 'Popular' ? 'bg-blue-500/20 text-blue-400' :
                        solution.badge === 'Premium' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {solution.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                    {solution.title}
                  </h3>

                  {solution.price && (
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-zion-cyan">{solution.price}</div>
                      <p className="text-xs text-zion-slate-light/60">Starting price</p>
                    </div>
                  )}

                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-zion-slate-light/80 text-sm">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={solution.href}
                    className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light font-semibold transition-colors group-hover:gap-3"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{service.rating}</span>
                      <span className="text-sm text-gray-400">({service.reviews})</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have already revolutionized their operations with our micro SAAS solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                <Rocket className="h-5 w-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join thousands of businesses that have already transformed their operations
              with our micro SAAS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="inline-flex items-center gap-2 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                Schedule a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
