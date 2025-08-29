import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  TrendingUp, 
  Shield, 
  Zap, 
  Users, 
  PenTool, 
  Truck, 
  Cloud,
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Clock,
  Target,
  Eye,
  Search,
  FileText,
  Cpu,
  Network,
  Heart,
  ShoppingCart,
  Building,
  BookOpen,
  Package,
  Warehouse,
  Route,
  Lock,
  Key,
  Monitor,
  Bug,
  Fingerprint,
  Server,
  Wifi,
  Smartphone,
  Tablet,
  Laptop,
  Camera,
  Video,
  Mic,
  Hash,
  Tag,
  Link as LinkIcon,
  ExternalLink,
  Play,
  Headphones
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function ComprehensiveServicesShowcase2025() {
  const featuredServices = [
    {
      name: 'AI Customer Success Prediction',
      description: 'Predict customer churn, identify upsell opportunities, and optimize customer success with 95%+ accuracy',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500',
      href: '/services/ai-customer-success-prediction',
      features: ['Churn prediction', 'Upsell optimization', 'Customer health scoring', 'Automated interventions'],
      pricing: 'Starting at $299/month',
      benefits: ['Reduce churn by 40%', 'Boost revenue by 25-35%', 'Improve satisfaction by 30%']
    },
    {
      name: 'AI Supply Chain Optimization',
      description: 'Transform your supply chain with AI-powered demand forecasting, route optimization, and inventory management',
      icon: Truck,
      color: 'from-blue-500 to-cyan-500',
      href: '/services/ai-supply-chain-optimization',
      features: ['Demand forecasting', 'Route optimization', 'Inventory management', 'Risk monitoring'],
      pricing: 'Starting at $499/month',
      benefits: ['Reduce costs by 25-40%', 'Improve delivery by 30-50%', 'Boost margins by 15-25%']
    },
    {
      name: 'AI Cybersecurity Platform',
      description: 'Protect your organization with AI-powered cybersecurity that detects 99.7% of threats and responds in seconds',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      href: '/services/ai-cybersecurity-platform',
      features: ['Threat detection', 'Zero-day prevention', 'Automated response', '360° visibility'],
      pricing: 'Starting at $799/month',
      benefits: ['99.7% threat detection', 'Response in seconds', 'Reduce costs by 40-60%']
    },
    {
      name: 'AI Content Marketing Suite',
      description: 'Create 10x more content with AI-powered generation, optimization, and distribution',
      icon: PenTool,
      color: 'from-green-500 to-emerald-500',
      href: '/services/ai-content-marketing-suite',
      features: ['Content generation', 'SEO optimization', 'Multi-format support', 'Performance analytics'],
      pricing: 'Starting at $199/month',
      benefits: ['10x content production', '40-60% better SEO', '35-50% higher engagement']
    }
  ];

  const allServices = [
    {
      category: 'AI & Machine Learning',
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain, description: 'Advanced analytics & ML insights' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', icon: Shield, description: 'Automated regulatory compliance' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', icon: Users, description: 'Intelligent sales optimization' },
        { name: 'AI-Powered SEO', href: '/services/ai-seo', icon: Search, description: 'Machine learning SEO optimization' },
        { name: 'AI Customer Success Prediction', href: '/services/ai-customer-success-prediction', icon: TrendingUp, description: 'Predict customer churn & success' },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', icon: Truck, description: 'Intelligent supply chain management' },
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', icon: Shield, description: 'Advanced threat detection & response' },
        { name: 'AI Content Marketing Suite', href: '/services/ai-content-marketing-suite', icon: PenTool, description: 'Automated content creation' },
        { name: 'AI Project Management', href: '/services/ai-project-management', icon: Target, description: 'AI-driven project optimization' },
        { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics', icon: DollarSign, description: 'Intelligent financial insights' }
      ]
    },
    {
      category: 'Cloud & Infrastructure',
      services: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure automation & scaling' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Server, description: 'Enterprise infrastructure solutions' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', icon: DollarSign, description: 'Cloud cost optimization' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', icon: TrendingUp, description: 'Financial operations automation' }
      ]
    },
    {
      category: 'Cybersecurity & Privacy',
      services: [
        { name: 'Security Headers & CSP', href: '/services/security-headers-csp', icon: Lock, description: 'Web security hardening' },
        { name: 'DSR Privacy Portal', href: '/services/dsr-portal', icon: Shield, description: 'GDPR/CCPA compliance' },
        { name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access', icon: Key, description: 'Modern security architecture' }
      ]
    },
    {
      category: 'Micro SaaS Solutions',
      services: [
        { name: 'Micro CRM', href: '/services/micro-crm', icon: Users, description: 'Customer relationship management' },
        { name: 'Helpdesk Platform', href: '/services/helpdesk', icon: PenTool, description: 'Customer support system' },
        { name: 'Website Analytics', href: '/services/website-analytics', icon: TrendingUp, description: 'Performance tracking & insights' },
        { name: 'IT Helpdesk', href: '/services/it-helpdesk', icon: Shield, description: 'IT support management' },
        { name: 'Affiliate Tracking', href: '/services/affiliate-tracking', icon: TrendingUp, description: 'Affiliate program management' },
        { name: 'Mobile Survey', href: '/services/mobile-survey', icon: Smartphone, description: 'Mobile survey solutions' }
      ]
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic AI features',
        'Standard integrations',
        'Email support',
        'Basic analytics',
        'Up to 1,000 users/endpoints'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced AI models',
        'Custom integrations',
        'Priority support',
        'Advanced analytics',
        'Up to 10,000 users/endpoints',
        'Custom workflows'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Custom AI models',
        'White-label solutions',
        'Dedicated support',
        'Custom development',
        'Unlimited users/endpoints',
        'Advanced security'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="2025 Comprehensive Services Showcase | Zion Tech Group"
        description="Discover our complete portfolio of AI-powered services, micro SaaS solutions, and IT services. Transform your business with cutting-edge technology solutions."
        keywords="AI services, micro SaaS, IT services, cybersecurity, supply chain optimization, content marketing, customer success, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              2025 Comprehensive Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our complete portfolio of AI-powered services, micro SaaS solutions, and IT services. 
              Transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105">
                Explore All Services
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Featured AI-Powered Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most innovative and impactful services that are transforming businesses across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{service.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Business Benefits:</h4>
                  <div className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-cyan-400">{service.pricing}</div>
                  <Link
                    to={service.href}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Categories */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of services across all technology domains
            </p>
          </motion.div>

          <div className="space-y-12">
            {allServices.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <Link
                      key={serviceIndex}
                      to={service.href}
                      className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-400/40 group-hover:to-blue-500/40 transition-all duration-300">
                          <service.icon className="w-6 h-6 text-cyan-400" />
                        </div>
                        <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h4>
                      </div>
                      <p className="text-gray-300 text-sm">{service.description}</p>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Flexible Pricing Options
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include a 14-day free trial 
              and our industry-leading 99.9% uptime guarantee.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 bg-gradient-to-br from-cyan-500/10 to-blue-500/10' 
                    : 'border-slate-700/50 hover:border-cyan-400/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how our comprehensive suite of AI-powered services can revolutionize your operations 
              and drive unprecedented business growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                +1 302 464 0950
              </a>
              <p className="text-sm text-slate-400 mt-2">Available 24/7 for urgent support</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                kleber@ziontechgroup.com
              </a>
              <p className="text-sm text-slate-400 mt-2">Response within 2 hours</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-slate-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
              <p className="text-sm text-slate-400 mt-2">Global remote support available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
