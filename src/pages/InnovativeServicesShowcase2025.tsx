import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Shield,
  Leaf,
  Users,
  Heart,
  BarChart3,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  DollarSign,
  Award,
  Clock,
  MessageCircle,
  FileText,
  Target,
  Activity,
  Monitor,
  Calculator,
  Search,
  Briefcase,
  Building,
  ShoppingCart,
  Lock,
  Eye,
  Database
} from 'lucide-react';

export default function InnovativeServicesShowcase2025() {
  const innovativeServices = [
    {
      name: 'AI Data Privacy Compliance Platform',
      description: 'Automate your data privacy compliance with AI-powered tools for GDPR, CCPA, LGPD, and more',
      icon: Shield,
      color: 'from-green-600 to-emerald-600',
      href: '/services/ai-data-privacy-compliance-platform',
      features: [
        'GDPR Compliance Automation',
        'CCPA & LGPD Support',
        'Data Discovery & Classification',
        'Privacy Impact Assessment',
        'Consent Management',
        'Data Subject Rights'
      ],
      pricing: 'From $299/month',
      benefits: [
        'Regulatory Compliance',
        'Automated Workflows',
        'Risk Mitigation',
        'Cost Savings'
      ],
      category: 'Compliance & Security'
    },
    {
      name: 'AI Carbon Footprint Management Platform',
      description: 'Transform your business sustainability with AI-powered carbon tracking and optimization',
      icon: Leaf,
      color: 'from-green-600 to-blue-600',
      href: '/services/ai-carbon-footprint-management-platform',
      features: [
        'Real-time Carbon Tracking',
        'AI-Powered Analytics',
        'Supply Chain Monitoring',
        'Automated Reporting',
        'Carbon Offset Integration',
        'Sustainability Scoring'
      ],
      pricing: 'From $199/month',
      benefits: [
        'Environmental Impact',
        'Cost Reduction',
        'ESG Compliance',
        'Stakeholder Trust'
      ],
      category: 'Sustainability & ESG'
    },
    {
      name: 'AI Talent Acquisition Platform',
      description: 'Transform your hiring process with AI-powered candidate matching and recruitment automation',
      icon: Users,
      color: 'from-blue-600 to-purple-600',
      href: '/services/ai-talent-acquisition-platform',
      features: [
        'AI-Powered Candidate Matching',
        'Intelligent Job Posting',
        'Automated Screening',
        'Predictive Analytics',
        'Multi-Channel Sourcing',
        'Interview Scheduling'
      ],
      pricing: 'From $199/month',
      benefits: [
        'Faster Hiring',
        'Better Quality Hires',
        'Cost Reduction',
        'Improved Experience'
      ],
      category: 'HR & Recruitment'
    },
    {
      name: 'AI Customer Experience Analytics Platform',
      description: 'Transform customer insights into actionable strategies with AI-powered analytics and optimization',
      icon: Heart,
      color: 'from-purple-600 to-pink-600',
      href: '/services/ai-customer-experience-analytics-platform',
      features: [
        'Real-time Sentiment Analysis',
        'Omnichannel Journey Mapping',
        'Predictive Customer Behavior',
        'Voice & Text Analytics',
        'Personalization Engine',
        'Customer Health Scoring'
      ],
      pricing: 'From $249/month',
      benefits: [
        'Improved Customer Satisfaction',
        'Higher Customer Retention',
        'Increased Revenue',
        'Better Customer Understanding'
      ],
      category: 'Customer Experience'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, count: innovativeServices.length },
    { id: 'Compliance & Security', name: 'Compliance & Security', icon: Shield, count: innovativeServices.filter(s => s.category === 'Compliance & Security').length },
    { id: 'Sustainability & ESG', name: 'Sustainability & ESG', icon: Leaf, count: innovativeServices.filter(s => s.category === 'Sustainability & ESG').length },
    { id: 'HR & Recruitment', name: 'HR & Recruitment', icon: Users, count: innovativeServices.filter(s => s.category === 'HR & Recruitment').length },
    { id: 'Customer Experience', name: 'Customer Experience', icon: Heart, count: innovativeServices.filter(s => s.category === 'Customer Experience').length }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredServices = innovativeServices.filter(service => {
    return selectedCategory === 'all' || service.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-futuristic pt-32">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 rounded-full text-sm font-medium mb-6"
            >
              <Star className="h-4 w-4 mr-2" />
              Innovative Services 2025
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Cutting-Edge
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Solutions
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8"
            >
              Discover our latest innovative AI-powered micro SAAS services and solutions 
              designed to transform businesses across industries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Request Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                      : 'border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-700/50'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  <span>{category.name}</span>
                  <span className="text-xs bg-gray-600 px-2 py-1 rounded-full">{category.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Innovative AI Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Our latest AI-powered solutions designed to address modern business challenges 
              and drive innovation across all sectors.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${service.color}`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-400 mb-6 text-lg">{service.description}</p>

                <div className="mb-6">
                  <div className="text-2xl font-bold text-blue-400 mb-2">{service.pricing}</div>
                  <p className="text-gray-500 text-sm">Transparent pricing with no hidden fees</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <TrendingUp className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={service.href}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Why Choose Zion Tech Group?
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex p-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI-First Approach</h3>
              <p className="text-gray-400">Built from the ground up with cutting-edge AI and machine learning</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex p-4 rounded-lg bg-gradient-to-r from-green-600 to-blue-600 mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Rapid Implementation</h3>
              <p className="text-gray-400">Get up and running in days, not months with our streamlined processes</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex p-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
              <p className="text-gray-400">Trusted by thousands of companies worldwide with measurable outcomes</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex p-4 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-400">Round-the-clock support to ensure your success</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-blue-500/30"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the AI revolution and discover how our innovative solutions can drive growth, 
              efficiency, and competitive advantage for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Get Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-8"
            >
              Get in Touch
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <Phone className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 transition-colors">
                  +1 302 464 0950
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <Mail className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <MapPin className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-blue-400 text-center">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
