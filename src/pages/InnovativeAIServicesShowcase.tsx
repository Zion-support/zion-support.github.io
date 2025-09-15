import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, Sparkles, TrendingUp, Route, Users, PenTool, 
  CheckCircle, ArrowRight, ExternalLink, Phone, Mail,
  BarChart3, Shield, Briefcase, Package, Target
} from 'lucide-react';
import SEO from '@/components/SEO';

export default function InnovativeAIServicesShowcase() {
  const services = [
    {
      id: 'ai-project-manager',
      title: 'AI Project Manager',
      description: 'Transform your project management with AI-driven insights, automated planning, and intelligent resource optimization.',
      icon: Zap,
      color: 'from-blue-600 to-indigo-700',
      features: [
        'AI-powered project planning and scheduling',
        'Automated resource allocation and team management',
        'Real-time progress tracking with predictive analytics',
        'Intelligent risk assessment and mitigation'
      ],
      benefits: ['70% faster project planning', '40% higher success rate', '3x ROI within 6 months'],
      pricing: { starter: '$99/mo', professional: '$299/mo', enterprise: '$799/mo' },
      route: '/services/ai-project-manager'
    },
    {
      id: 'ai-content-marketing-suite',
      title: 'AI Content Marketing Suite',
      description: 'Transform your content marketing with AI that writes, optimizes, and distributes content across all channels.',
      icon: PenTool,
      color: 'from-purple-600 to-indigo-700',
      features: [
        'AI-powered content generation for blogs, social media, and emails',
        'Multi-language content creation and localization',
        'SEO optimization with keyword research and content planning',
        'Content performance analytics and A/B testing'
      ],
      benefits: ['10x more content output', '60% better SEO rankings', '70% cost reduction'],
      pricing: { starter: '$79/mo', professional: '$199/mo', enterprise: '$499/mo' },
      route: '/services/ai-content-marketing-suite'
    },
    {
      id: 'ai-financial-analytics',
      title: 'AI Financial Analytics Platform',
      description: 'Transform your financial decision-making with AI-driven insights, predictive analytics, and automated portfolio optimization.',
      icon: TrendingUp,
      color: 'from-green-600 to-emerald-700',
      features: [
        'AI-powered financial forecasting and trend analysis',
        'Real-time market data integration and analysis',
        'Automated financial reporting and compliance',
        'Risk assessment and portfolio optimization'
      ],
      benefits: ['25-40% better investment returns', '80% faster analysis time', '85% market prediction accuracy'],
      pricing: { starter: '$199/mo', professional: '$499/mo', enterprise: '$1,299/mo' },
      route: '/services/ai-financial-analytics'
    },
    {
      id: 'ai-hr-talent-platform',
      title: 'AI HR & Talent Platform',
      description: 'Transform your HR operations with AI-driven insights, automated workflows, and intelligent talent management.',
      icon: Users,
      color: 'from-orange-600 to-red-700',
      features: [
        'AI-powered candidate screening and matching',
        'Automated resume parsing and skill assessment',
        'Intelligent interview scheduling and feedback',
        'Employee performance analytics and insights'
      ],
      benefits: ['60% faster time-to-hire', '40% better candidate quality', '30% reduced hiring costs'],
      pricing: { starter: '$149/mo', professional: '$399/mo', enterprise: '$999/mo' },
      route: '/services/ai-hr-talent-platform'
    },
    {
      id: 'ai-supply-chain-optimization',
      title: 'AI Supply Chain Optimization',
      description: 'Transform your supply chain with AI-driven insights, predictive analytics, and automated optimization.',
      icon: Route,
      color: 'from-teal-600 to-cyan-700',
      features: [
        'AI-powered demand forecasting and inventory optimization',
        'Real-time supply chain visibility and tracking',
        'Automated route optimization and logistics planning',
        'Supplier performance analytics and risk assessment'
      ],
      benefits: ['20-30% reduced inventory costs', '25% improved delivery times', '40% fewer disruptions'],
      pricing: { starter: '$299/mo', professional: '$799/mo', enterprise: '$1,999/mo' },
      route: '/services/ai-supply-chain-optimization'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="Innovative AI Services Showcase - Zion Tech Group"
        description="Discover our comprehensive suite of AI-powered business solutions including project management, content marketing, financial analytics, HR talent management, and supply chain optimization."
      />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Innovative AI-Powered Solutions
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6"
          >
            AI Services That
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Transform Business
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-8"
          >
            Discover our comprehensive suite of AI-powered micro SaaS solutions designed to revolutionize 
            how businesses operate, scale, and succeed in the digital age.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-slate-900/60 backdrop-blur border border-cyan-400/15 hover:border-cyan-400/40 transition-all duration-300 rounded-2xl p-6 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-300 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-xs text-slate-300">
                        <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-300 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-xs text-slate-300">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-300 mb-2">Starting at:</h4>
                  <div className="text-lg font-bold text-white">{service.pricing.starter}</div>
                </div>
                
                <Link 
                  to={service.route}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-semibold group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-16 bg-slate-900/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-slate-300">Leading the AI revolution in business solutions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise-Grade Security</h3>
              <p className="text-slate-300">SOC 2 compliant, end-to-end encryption, and multi-factor authentication</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-slate-300">Track record of delivering measurable ROI and business transformation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Cutting-Edge AI</h3>
              <p className="text-slate-300">Latest AI technologies and continuous innovation in all our solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations already using our AI-powered solutions to drive growth, 
            efficiency, and competitive advantage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-cyan-50 transition-colors"
            >
              Start Free Trial
            </a>
            <a 
              href="tel:+13024640950"
              className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Call Us
            </a>
          </div>
          
          <div className="text-cyan-100 text-sm">
            Questions? Email <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:underline">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-white hover:underline">+1 302 464 0950</a>
          </div>
        </div>
      </section>

      {/* Contact & Website Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-slate-900/40 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Visit Our Website</h3>
            <p className="text-slate-300 mb-6">
              Learn more about our complete suite of AI-powered business solutions and discover 
              how we can help transform your organization.
            </p>
            <a 
              href="https://ziontechgroup.com" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold rounded-lg hover:from-cyan-300 hover:to-blue-400 transition-all duration-300"
            >
              Visit ziontechgroup.com <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}