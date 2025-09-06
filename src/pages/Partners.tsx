import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Handshake, 
  Users, 
  Building, 
  Globe, 
  Star, 
  Award, 
  TrendingUp, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Heart, 
  Leaf, 
  Lock, 
  Cpu, 
  Database, 
  Network, 
  Eye, 
  MessageCircle, 
  Phone, 
  Mail, 
  Calendar, 
  Play, 
  BookOpen, 
  Code, 
  Settings, 
  BarChart3, 
  Crown, 
  Sparkles,
  Briefcase,
  GraduationCap,
  Lightbulb,
  Gauge,
  GitFork,
  Atom,
  Factory,
  City,
  Car,
  Home,
  ShoppingCart
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Partners() {
  const [activeTab, setActiveTab] = useState('overview');

  const partnerTypes = [
    {
      id: 'technology',
      name: 'Technology Partners',
      description: 'Integrate with leading technology platforms and tools',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      benefits: [
        'API access and documentation',
        'Technical support and training',
        'Co-marketing opportunities',
        'Revenue sharing programs',
        'Early access to new features',
        'Joint product development'
      ]
    },
    {
      id: 'consulting',
      name: 'Consulting Partners',
      description: 'Deliver value through strategic consulting and implementation',
      icon: Briefcase,
      color: 'from-purple-500 to-pink-500',
      benefits: [
        'Certification programs',
        'Sales and technical training',
        'Marketing materials and support',
        'Lead generation assistance',
        'Revenue sharing agreements',
        'Dedicated partner success manager'
      ]
    },
    {
      id: 'reseller',
      name: 'Reseller Partners',
      description: 'Sell our solutions to your customer base',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      benefits: [
        'Competitive pricing and margins',
        'Sales enablement tools',
        'Marketing support and materials',
        'Technical training and certification',
        'Lead registration and protection',
        'Performance-based incentives'
      ]
    },
    {
      id: 'strategic',
      name: 'Strategic Partners',
      description: 'Deep integration and joint go-to-market strategies',
      icon: Crown,
      color: 'from-orange-500 to-red-500',
      benefits: [
        'Exclusive partnership agreements',
        'Joint product development',
        'Shared intellectual property',
        'Strategic investment opportunities',
        'Board-level collaboration',
        'Global expansion support'
      ]
    }
  ];

  const partnerBenefits = [
    {
      title: 'Revenue Growth',
      description: 'Access new markets and revenue streams through our innovative solutions',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Technical Excellence',
      description: 'Leverage cutting-edge AI and technology solutions for your customers',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Market Expansion',
      description: 'Expand your service offerings and reach new customer segments',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Innovation Leadership',
      description: 'Stay ahead of the competition with next-generation technology',
      icon: Sparkles,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const successStories = [
    {
      company: 'TechCorp Solutions',
      industry: 'Technology Consulting',
      partnership: 'Technology Partner',
      results: [
        '40% increase in customer engagement',
        'New AI service offerings launched',
        'Expanded market presence in 3 regions'
      ],
      logo: '/images/partners/techcorp-logo.png',
      testimonial: 'Partnering with Zion Tech Group has transformed our service portfolio and opened new growth opportunities.'
    },
    {
      company: 'InnovateLab Inc',
      industry: 'Research & Development',
      partnership: 'Strategic Partner',
      results: [
        'Joint product development success',
        'Shared IP portfolio created',
        '50% revenue growth in 18 months'
      ],
      logo: '/images/partners/innovatelab-logo.png',
      testimonial: 'The strategic partnership has accelerated our innovation capabilities and market reach significantly.'
    },
    {
      company: 'DataFlow Analytics',
      industry: 'Data & Analytics',
      partnership: 'Reseller Partner',
      results: [
        'New customer acquisition increased 3x',
        'Average deal size grew 60%',
        'Customer satisfaction scores improved'
      ],
      logo: '/images/partners/dataflow-logo.png',
      testimonial: 'Reselling Zion Tech Group solutions has been a game-changer for our business growth and customer success.'
    }
  ];

  const partnershipProcess = [
    {
      step: 1,
      title: 'Initial Discussion',
      description: 'Schedule a call to discuss partnership opportunities and mutual goals',
      icon: MessageCircle,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: 2,
      title: 'Partnership Assessment',
      description: 'Evaluate fit, capabilities, and potential for mutual success',
      icon: Target,
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: 3,
      title: 'Agreement & Onboarding',
      description: 'Finalize partnership terms and begin onboarding process',
      icon: Handshake,
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: 4,
      title: 'Launch & Growth',
      description: 'Execute partnership strategy and scale successful initiatives',
      icon: Rocket,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: Heart, color: 'from-red-500 to-pink-500' },
    { name: 'Financial Services', icon: TrendingUp, color: 'from-emerald-500 to-green-500' },
    { name: 'Legal Services', icon: Shield, color: 'from-blue-500 to-indigo-500' },
    { name: 'Manufacturing', icon: Factory, color: 'from-orange-500 to-red-500' },
    { name: 'Retail & E-commerce', icon: ShoppingCart, color: 'from-pink-500 to-rose-500' },
    { name: 'Government', icon: Building, color: 'from-slate-500 to-gray-500' },
    { name: 'Education', icon: GraduationCap, color: 'from-cyan-500 to-blue-500' },
    { name: 'Energy', icon: Leaf, color: 'from-green-500 to-emerald-500' },
    { name: 'Space & Aerospace', icon: Rocket, color: 'from-indigo-500 to-purple-500' },
    { name: 'Transportation', icon: Car, color: 'from-blue-500 to-cyan-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Partners - Zion Tech Group"
        description="Join our partner ecosystem and grow your business with cutting-edge AI and technology solutions. Explore partnership opportunities and success stories."
        canonical="https://ziontechgroup.com/partners"
      />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Partner With Us
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Join our ecosystem of innovative partners and grow your business with cutting-edge AI and technology solutions. 
              Together, we can transform industries and create lasting value for our customers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact?type=partnership"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 inline-flex items-center gap-2"
              >
                Become a Partner
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="#partner-types"
                className="px-8 py-4 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-lg transition-all duration-300 inline-flex items-center gap-2"
              >
                Explore Opportunities
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Types */}
      <section id="partner-types" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Partnership Types</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the partnership model that best fits your business goals and capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{type.name}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{type.description}</p>
                <ul className="space-y-3 mb-6">
                  {type.benefits.slice(0, 4).map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact?type=partnership&category=${type.id}"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Partner With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advantages of joining our partner ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Partner Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our partners are achieving remarkable results and growing their businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center">
                    <Building className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{story.company}</h3>
                    <p className="text-sm text-gray-400">{story.industry}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                    {story.partnership}
                  </span>
                </div>
                <ul className="space-y-2 mb-6">
                  {story.results.map((result, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
                <blockquote className="text-gray-300 text-sm italic border-l-2 border-cyan-400/30 pl-4">
                  "{story.testimonial}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Partnership Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple steps to become a Zion Tech Group partner
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative">
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Partner with us to serve customers across diverse industries with AI-powered solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-sm font-medium text-white">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-400/20"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our ecosystem of innovative partners and start growing your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact?type=partnership"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 inline-flex items-center gap-2"
              >
                Start Partnership Discussion
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/resources"
                className="px-8 py-4 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-lg transition-all duration-300 inline-flex items-center gap-2"
              >
                Download Partner Kit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
