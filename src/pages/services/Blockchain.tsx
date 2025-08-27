import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lock, 
  Network, 
  Zap, 
  Database, 
  Shield, 
  Users, 
  Globe,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Award,
  Clock,
  Target,
  Lightbulb,
  Brain,
  BarChart3,
  Cpu,
  Link as LinkIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Lock,
    title: 'Smart Contracts',
    description: 'Self-executing contracts with automated enforcement and transparency'
  },
  {
    icon: Network,
    title: 'DeFi Solutions',
    description: 'Decentralized finance platforms for lending, trading, and yield farming'
  },
  {
    icon: Database,
    title: 'Supply Chain',
    description: 'Transparent and traceable supply chain management solutions'
  },
  {
    icon: Shield,
    title: 'Identity Management',
    description: 'Secure, decentralized identity verification and management'
  },
  {
    icon: Users,
    title: 'NFT Platforms',
    description: 'Digital asset creation, trading, and marketplace solutions'
  },
  {
    icon: BarChart3,
    title: 'Token Economics',
    description: 'Custom token design and economic model development'
  }
];

const benefits = [
  'Eliminate intermediaries and reduce costs by 30-50%',
  'Ensure data immutability and transparency',
  'Enable trustless transactions and agreements',
  'Improve security and reduce fraud',
  'Create new business models and revenue streams',
  'Enable global, borderless transactions'
];

const solutions = [
  {
    title: 'Financial Services',
    description: 'DeFi platforms, cross-border payments, and asset tokenization',
    icon: BarChart3,
    industries: ['Banking', 'Insurance', 'Investment']
  },
  {
    title: 'Supply Chain',
    description: 'End-to-end traceability and transparency in logistics',
    icon: Network,
    industries: ['Manufacturing', 'Retail', 'Logistics']
  },
  {
    title: 'Healthcare',
    description: 'Secure patient data management and pharmaceutical tracking',
    icon: Shield,
    industries: ['Healthcare', 'Pharma', 'Medical Devices']
  },
  {
    title: 'Real Estate',
    description: 'Property tokenization and fractional ownership platforms',
    icon: Users,
    industries: ['Real Estate', 'Property Management', 'Investment']
  }
];

const testimonials = [
  {
    name: 'Rachel Thompson',
    role: 'CTO',
    company: 'DeFi Capital',
    content: 'Zion Tech Group\'s blockchain expertise helped us build a robust DeFi platform that processes millions in daily volume.',
    rating: 5
  },
  {
    name: 'Marcus Chen',
    role: 'Operations Director',
    company: 'Global Supply Chain',
    content: 'The blockchain supply chain solution has given us complete visibility and reduced fraud by 90%.',
    rating: 5
  },
  {
    name: 'Dr. Lisa Park',
    role: 'Medical Director',
    company: 'HealthTech Solutions',
    content: 'Our patient data is now more secure and accessible than ever, thanks to Zion\'s blockchain implementation.',
    rating: 5
  }
];

export default function Blockchain() {
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-purple via-zion-blue to-zion-cyan opacity-20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-zion-purple/10 border border-zion-purple/20 rounded-full px-6 py-3 mb-8">
              <Lock className="w-5 h-5 text-zion-purple" />
              <span className="text-zion-purple font-medium">Blockchain Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Business with
              <span className="text-gradient block">Blockchain Technology</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Build trust, transparency, and efficiency with our comprehensive blockchain solutions. 
              From DeFi to supply chain, unlock the power of decentralized technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="btn-futuristic px-8 py-4 text-lg font-semibold"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="btn-outline px-8 py-4 text-lg font-semibold">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Blockchain Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From smart contracts to DeFi platforms, we provide end-to-end blockchain solutions 
              that revolutionize how businesses operate and interact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-purple/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/5">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Blockchain?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the transformative benefits of decentralized technology and smart contracts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 bg-white/5 backdrop-blur-xl border border-zion-purple/20 rounded-xl p-6"
              >
                <CheckCircle className="w-6 h-6 text-zion-purple flex-shrink-0" />
                <span className="text-zion-slate-light">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Tailored blockchain solutions designed for your specific industry needs and challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-purple/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-blue to-zion-cyan rounded-2xl flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-zion-slate-light leading-relaxed mb-6">{solution.description}</p>
                <div className="mb-6">
                  <h4 className="text-zion-purple font-medium mb-2">Industries:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.industries.map((industry) => (
                      <span
                        key={industry}
                        className="px-3 py-1 bg-zion-purple/10 border border-zion-purple/20 rounded-full text-sm text-zion-purple"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center text-zion-purple hover:text-zion-purple-light transition-colors font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-white/5">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Blockchain Technology Stack
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Built on proven blockchain platforms and cutting-edge technologies for maximum security and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Ethereum', description: 'Smart contracts & DeFi', icon: Network },
              { name: 'Polygon', description: 'Scalable L2 solutions', icon: Zap },
              { name: 'Solana', description: 'High-performance blockchain', icon: Cpu },
              { name: 'IPFS', description: 'Decentralized storage', icon: Database }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-xl font-bold text-white mb-2">{tech.name}</div>
                <div className="text-zion-purple text-sm">{tech.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Real-World Use Cases
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover how leading companies are leveraging blockchain to solve real business challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cross-Border Payments',
                description: 'Instant, low-cost international transfers using stablecoins and DeFi protocols',
                icon: Globe,
                savings: 'Save 80% on fees'
              },
              {
                title: 'Supply Chain Tracking',
                description: 'End-to-end visibility of products from manufacturer to consumer',
                icon: Network,
                savings: 'Reduce fraud by 90%'
              },
              {
                title: 'Digital Identity',
                description: 'Self-sovereign identity management with zero-knowledge proofs',
                icon: Shield,
                savings: 'Improve security by 95%'
              }
            ].map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-zion-purple/20 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-zion-slate-light leading-relaxed mb-4">{useCase.description}</p>
                <div className="text-zion-cyan font-semibold">{useCase.savings}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/5">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about our blockchain solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-zion-purple/20 rounded-2xl p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-zion-slate-light mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-zion-purple text-sm">{testimonial.role}</div>
                  <div className="text-zion-slate-light text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join the blockchain revolution and unlock new possibilities for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="btn-futuristic px-8 py-4 text-lg font-semibold"
              >
                Get Blockchain Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="btn-outline px-8 py-4 text-lg font-semibold"
              >
                Talk to Blockchain Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}