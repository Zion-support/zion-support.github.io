import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, Bot, TrendingUp, Target, MessageCircle, BarChart3, 
  DollarSign, Users, Check, ArrowRight, ExternalLink, Phone, Mail,
  Calendar, Shield, Filter, Headphones, Calculator, PieChart
} from 'lucide-react';
import SEO from '@/components/SEO';

export default function NewServicesShowcase2025() {
  const newServices = [
    {
      id: 'ai-project-management',
      title: 'AI Project Management Platform',
      description: 'Revolutionary AI-driven project management that predicts risks, optimizes resources, and ensures project success with intelligent automation.',
      icon: Calendar,
      color: 'from-blue-500 to-purple-600',
      bgColor: 'bg-blue-500/20',
      iconColor: 'text-blue-400',
      features: [
        'AI-powered task prioritization and scheduling',
        'Predictive resource allocation and capacity planning',
        'Automated risk assessment and mitigation suggestions',
        'Smart time tracking with productivity insights'
      ],
      benefits: [
        'Reduce project delivery time by 30-40%',
        'Improve team productivity by 25%',
        'Cut project costs by 20-35%',
        'Increase project success rate to 95%'
      ],
      pricing: '$49 - $399/month',
      route: '/services/ai-project-management',
      category: 'Project Management'
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support Automation',
      description: 'Transform customer support with AI that works 24/7, understands emotions, and provides instant, accurate responses while seamlessly connecting to human agents.',
      icon: Bot,
      color: 'from-green-500 to-blue-600',
      bgColor: 'bg-green-500/20',
      iconColor: 'text-green-400',
      features: [
        '24/7 AI chatbot with human-like conversations',
        'Multi-language support (50+ languages)',
        'Intelligent ticket routing and prioritization',
        'Sentiment analysis and emotion detection'
      ],
      benefits: [
        'Reduce support costs by 60-80%',
        'Improve customer satisfaction by 40%',
        'Handle 10x more support requests',
        '24/7 availability without human limitations'
      ],
      pricing: '$79 - $499/month',
      route: '/services/ai-customer-support-automation',
      category: 'Customer Support'
    },
    {
      id: 'ai-financial-analytics',
      title: 'AI Financial Analytics Platform',
      description: 'Advanced AI financial analytics providing real-time insights, predictive modeling, and automated reporting for investment and financial decision-making.',
      icon: TrendingUp,
      color: 'from-emerald-500 to-blue-600',
      bgColor: 'bg-emerald-500/20',
      iconColor: 'text-emerald-400',
      features: [
        'AI-powered financial forecasting and trend analysis',
        'Real-time market data integration and analysis',
        'Automated financial reporting and insights generation',
        'Risk assessment and portfolio optimization'
      ],
      benefits: [
        'Improve investment returns by 15-25%',
        'Reduce financial risk by 30-40%',
        'Save 20+ hours per week on financial analysis',
        'Make data-driven decisions with confidence'
      ],
      pricing: '$199 - $1,299/month',
      route: '/services/ai-financial-analytics',
      category: 'Financial Analytics'
    },
    {
      id: 'ai-marketing-automation',
      title: 'AI Marketing Automation Platform',
      description: 'Revolutionary AI marketing automation that personalizes campaigns, optimizes performance, and maximizes ROI through intelligent automation.',
      icon: Target,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-500/20',
      iconColor: 'text-purple-400',
      features: [
        'AI-powered audience segmentation and targeting',
        'Predictive customer behavior analysis',
        'Automated content personalization and optimization',
        'Multi-channel campaign orchestration'
      ],
      benefits: [
        'Increase conversion rates by 40-60%',
        'Reduce customer acquisition costs by 30%',
        'Improve customer lifetime value by 25%',
        'Save 15+ hours per week on marketing tasks'
      ],
      pricing: '$99 - $799/month',
      route: '/services/ai-marketing-automation',
      category: 'Marketing Automation'
    }
  ];

  const categories = ['All', 'Project Management', 'Customer Support', 'Financial Analytics', 'Marketing Automation'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? newServices 
    : newServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="New AI-Powered Micro SAAS Services 2025 - Zion Tech Group"
        description="Discover our revolutionary new AI-powered micro SAAS services for project management, customer support, financial analytics, and marketing automation."
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 mb-6"
          >
            <Zap className="w-4 h-4 mr-2" /> New AI-Powered Services 2025
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Revolutionary AI Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto"
          >
            Discover our cutting-edge AI-powered micro SAAS services that transform how businesses 
            manage projects, support customers, analyze finances, and automate marketing.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="https://ziontechgroup.com/contact" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
            >
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="tel:+13024640950" 
              className="px-8 py-4 border border-blue-400/30 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300 inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" /> Call Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:border-blue-500/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center`}>
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <span className="text-sm text-slate-400 bg-slate-700/50 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 2).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-slate-300">
                          <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400 mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-sm text-slate-300">
                          <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-blue-400">{service.pricing}</div>
                  <Link 
                    to={service.route}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with deep industry expertise to deliver 
              solutions that drive real business results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cutting-Edge AI Technology</h3>
              <p className="text-slate-300">Latest AI models and algorithms for maximum performance and accuracy</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enterprise-Grade Security</h3>
              <p className="text-slate-300">SOC 2 certified with bank-level security and compliance</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support Team</h3>
              <p className="text-slate-300">Dedicated support and implementation assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our AI-powered services to achieve 
            unprecedented growth and efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="https://ziontechgroup.com/contact" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
            >
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="px-8 py-4 border border-blue-400/30 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300 inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" /> Schedule Demo
            </a>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Phone</h4>
                <a href="tel:+13024640950" className="text-slate-300 hover:text-blue-400">
                  +1 302 464 0950
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Email</h4>
                <a href="mailto:kleber@ziontechgroup.com" className="text-slate-300 hover:text-blue-400">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Address</h4>
                <p className="text-slate-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Website</h4>
                <a 
                  href="https://ziontechgroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-blue-400 inline-flex items-center"
                >
                  ziontechgroup.com <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}