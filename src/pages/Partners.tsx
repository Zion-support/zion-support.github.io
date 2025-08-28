import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Users, 
  Handshake, 
  Star, 
  Award, 
  TrendingUp, 
  Globe,
  ArrowRight,
  CheckCircle,
  Building2,
  Zap,
  Brain,
  Cloud,
  Shield,
  Heart,
  Leaf,
  Rocket,
  Atom,
  Eye,
  Target,
  Gauge,
  Crown,
  Sparkles,
  Flame,
  Infinity,
  Server,
  Smartphone,
  Network,
  Clock,
  ShoppingCart,
  FileText,
  Settings,
  Key,
  Globe2,
  ShieldCheck,
  Scale,
  Car,
  Home,
  Factory,
  City,
  CheckCircle2,
  MessageCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function Partners() {
  const partnershipTypes = [
    {
      title: 'Technology Partners',
      icon: Brain,
      description: 'Strategic partnerships with leading technology companies',
      color: 'from-blue-500 to-cyan-500',
      benefits: [
        'Access to cutting-edge technology',
        'Joint product development',
        'Shared intellectual property',
        'Co-marketing opportunities',
        'Technical support collaboration',
        'Innovation labs access'
      ]
    },
    {
      title: 'Channel Partners',
      icon: Users,
      description: 'Distribution and sales partnerships worldwide',
      color: 'from-green-500 to-emerald-500',
      benefits: [
        'Expanded market reach',
        'Local market expertise',
        'Cultural adaptation support',
        'Regulatory compliance help',
        'Customer relationship management',
        'Revenue sharing opportunities'
      ]
    },
    {
      title: 'Strategic Alliances',
      icon: Handshake,
      description: 'Long-term strategic partnerships for market leadership',
      color: 'from-purple-500 to-pink-500',
      benefits: [
        'Market leadership positioning',
        'Shared vision and goals',
        'Resource pooling',
        'Risk sharing',
        'Innovation acceleration',
        'Competitive advantage'
      ]
    },
    {
      title: 'Academic Partners',
      icon: Rocket,
      description: 'Research and development partnerships with universities',
      color: 'from-orange-500 to-red-500',
      benefits: [
        'Access to research facilities',
        'Student talent pipeline',
        'Joint research projects',
        'Academic publications',
        'Grant opportunities',
        'Innovation ecosystem'
      ]
    }
  ];

  const currentPartners = [
    {
      name: 'Microsoft',
      logo: 'M',
      category: 'Technology Partner',
      description: 'Strategic partnership for cloud and AI solutions',
      partnership: '5+ years',
      projects: 12,
      featured: true
    },
    {
      name: 'Amazon Web Services',
      logo: 'AWS',
      category: 'Cloud Partner',
      description: 'Cloud infrastructure and AI services collaboration',
      partnership: '3+ years',
      projects: 8,
      featured: true
    },
    {
      name: 'Stanford University',
      logo: 'SU',
      category: 'Academic Partner',
      description: 'AI research and development collaboration',
      partnership: '2+ years',
      projects: 5,
      featured: false
    },
    {
      name: 'IBM',
      logo: 'IBM',
      category: 'Technology Partner',
      description: 'Quantum computing and enterprise solutions',
      partnership: '4+ years',
      projects: 10,
      featured: false
    },
    {
      name: 'MIT',
      logo: 'MIT',
      category: 'Academic Partner',
      description: 'Advanced research in AI and robotics',
      partnership: '3+ years',
      projects: 6,
      featured: false
    },
    {
      name: 'Google Cloud',
      logo: 'GC',
      category: 'Cloud Partner',
      description: 'AI and machine learning platform collaboration',
      partnership: '2+ years',
      projects: 7,
      featured: false
    }
  ];

  const partnershipBenefits = [
    {
      icon: TrendingUp,
      title: 'Revenue Growth',
      description: 'Access new markets and customer segments through partner networks'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Expand your business presence worldwide with local partners'
    },
    {
      icon: Brain,
      title: 'Innovation Access',
      description: 'Leverage partner technologies and research capabilities'
    },
    {
      icon: Users,
      title: 'Expert Network',
      description: 'Connect with industry experts and thought leaders'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Share risks and costs in new market ventures'
    },
    {
      icon: Zap,
      title: 'Speed to Market',
      description: 'Accelerate product development and market entry'
    }
  ];

  const partnershipProcess = [
    {
      step: 1,
      title: 'Initial Discussion',
      description: 'Explore mutual interests and partnership potential',
      duration: '1-2 weeks'
    },
    {
      step: 2,
      title: 'Partnership Assessment',
      description: 'Evaluate strategic fit and business alignment',
      duration: '2-4 weeks'
    },
    {
      step: 3,
      title: 'Agreement Development',
      description: 'Negotiate terms and develop partnership agreement',
      duration: '4-8 weeks'
    },
    {
      step: 4,
      title: 'Launch & Execution',
      description: 'Implement partnership and begin collaboration',
      duration: 'Ongoing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Partnerships - Zion Tech Group"
        description="Join our global network of technology partners, channel partners, and strategic alliances. Grow your business with Zion Tech Group partnerships."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Strategic
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent"> Partnerships</span>
              <br />
              for Success
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join our global network of technology partners, channel partners, and strategic alliances. 
              Together, we're building the future of technology and business innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">
                Become a Partner
              </button>
              <button className="px-8 py-4 border border-green-400/50 text-green-400 hover:bg-green-400/10 font-semibold rounded-lg transition-all duration-300">
                View Partnership Opportunities
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Partnership Types
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer various partnership models to suit different business needs and objectives. 
              Choose the partnership type that aligns with your goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-slate-700/50 bg-slate-800/30 hover:border-green-400/30 transition-all duration-300"
              >
                <div className={`p-4 rounded-xl bg-gradient-to-br ${type.color} w-fit mb-6`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {type.title}
                </h3>
                
                <p className="text-gray-300 mb-6 text-lg">
                  {type.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full mt-6 px-6 py-3 bg-green-500/20 hover:bg-green-500/30 text-green-400 font-medium rounded-lg transition-all duration-300 border border-green-400/30">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Current Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're proud to work with industry leaders and innovative organizations 
              that share our vision for the future of technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  partner.featured
                    ? 'border-green-400/50 bg-gradient-to-br from-green-500/10 to-emerald-500/10'
                    : 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50'
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-lg ${
                    partner.featured
                      ? 'bg-gradient-to-br from-green-500 to-emerald-500'
                      : 'bg-gradient-to-br from-slate-600 to-slate-700'
                  }`}>
                    {partner.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {partner.name}
                    </h3>
                    <span className="text-sm text-gray-400">
                      {partner.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm">
                  {partner.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-400">Partnership:</span>
                    <p className="text-white font-medium">{partner.partnership}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Projects:</span>
                    <p className="text-white font-medium">{partner.projects}</p>
                  </div>
                </div>

                {partner.featured && (
                  <span className="inline-flex items-center gap-1 mb-4 text-xs text-green-400">
                    <Star className="w-3 h-3" />
                    Featured Partner
                  </span>
                )}

                <button className="w-full px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-white text-sm font-medium rounded-lg transition-all duration-300">
                  View Details
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our partnerships deliver measurable value and create opportunities 
              for mutual growth and success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Partnership Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our streamlined partnership process ensures a smooth onboarding experience 
              and quick time to value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 mb-3 text-sm">
                  {step.description}
                </p>
                <span className="text-green-400 text-sm font-medium">
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our network of successful partners and start building the future together. 
              Let's discuss how we can create value for both our organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">
                Start Partnership Discussion
              </button>
              <button className="px-8 py-4 border border-green-400/50 text-green-400 hover:bg-green-400/10 font-semibold rounded-lg transition-all duration-300">
                Download Partnership Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
