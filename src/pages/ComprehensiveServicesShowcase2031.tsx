import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Workflow, 
  BarChart3, 
  Shield, 
  Cloud, 
  Atom, 
  ShoppingCart, 
  Zap, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Target, 
  Lock, 
  Rocket, 
  Heart, 
  DollarSign, 
  Globe, 
  Cpu, 
  MessageCircle, 
  FileText, 
  PenTool, 
  Search, 
  Building,
  Award,
  Lightbulb,
  Eye,
  PieChart,
  Activity,
  Smartphone,
  Calculator,
  LineChart,
  AlertCircle,
  ShoppingCart as ShoppingCartIcon,
  Users as UsersIcon,
  HelpCircle,
  BookOpen,
  Settings,
  Key,
  Leaf,
  Scale,
  Factory,
  City,
  Play,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const ComprehensiveServicesShowcase2031: React.FC = () => {
  const featuredServices = [
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-cyan-500',
      services: [
        {
          name: 'AI Workflow Orchestrator',
          description: 'Transform business processes with intelligent workflow automation powered by advanced AI',
          href: '/services/ai-workflow-orchestrator',
          price: 'Starting at $299/month',
          features: ['AI-powered decision making', 'Visual workflow designer', 'Real-time automation', 'Smart task assignment'],
          benefits: ['70% increase in efficiency', '85% reduction in manual errors', '60% faster process completion'],
          icon: Workflow
        },
        {
          name: 'AI Customer Experience Analytics',
          description: 'Transform customer insights into actionable intelligence with AI-powered analytics',
          href: '/services/ai-customer-experience-analytics',
          price: 'Starting at $199/month',
          features: ['AI-powered sentiment analysis', 'Real-time analytics dashboard', 'Customer journey mapping', 'Predictive insights'],
          benefits: ['25% increase in conversion rates', '40% reduction in cart abandonment', 'Improved customer retention'],
          icon: BarChart3
        },
        {
          name: 'AI Financial Risk Management',
          description: 'Protect financial assets with AI-powered risk management and real-time monitoring',
          href: '/services/ai-financial-risk-management',
          price: 'Starting at $399/month',
          features: ['AI-powered risk assessment', 'Comprehensive risk monitoring', 'Predictive analytics', 'Real-time alerts'],
          benefits: ['45% reduction in risk exposure', '$2.1M average annual savings', '98% compliance rate'],
          icon: Shield
        }
      ]
    },
    {
      category: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          name: 'Cloud & DevOps',
          description: 'Streamline development and deployment with modern cloud infrastructure and automation',
          href: '/services/cloud-devops',
          price: 'Starting at $999/month',
          features: ['CI/CD pipelines', 'Infrastructure as code', 'Auto-scaling', 'Monitoring & alerting'],
          benefits: ['50% faster deployments', '40% reduction in infrastructure costs', '99.9% uptime'],
          icon: Cloud
        },
        {
          name: 'Digital Twin Platform',
          description: 'Create virtual replicas of physical systems for simulation and optimization',
          href: '/services/digital-twin',
          price: 'Starting at $1,499/month',
          features: ['3D modeling', 'Real-time simulation', 'Predictive analytics', 'IoT integration'],
          benefits: ['30% improvement in operational efficiency', 'Reduced maintenance costs', 'Better decision making'],
          icon: Globe
        }
      ]
    },
    {
      category: 'Security & Compliance',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      services: [
        {
          name: 'AI Cybersecurity Suite',
          description: 'Advanced AI-powered security solutions for comprehensive threat protection',
          href: '/services/ai-cybersecurity-suite',
          price: 'Starting at $799/month',
          features: ['AI threat detection', 'Behavioral analytics', 'Automated response', '24/7 monitoring'],
          benefits: ['99.9% threat detection accuracy', '90% faster response time', '75% reduction in false positives'],
          icon: Shield
        },
        {
          name: 'Zero Trust Network Access',
          description: 'Modern security architecture that verifies every user and device',
          href: '/services/zero-trust-network-access',
          price: 'Starting at $599/month',
          features: ['Identity verification', 'Least privilege access', 'Continuous monitoring', 'Secure remote access'],
          benefits: ['Enhanced security posture', 'Simplified access management', 'Compliance ready'],
          icon: Lock
        }
      ]
    },
    {
      category: 'Emerging Technologies',
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      services: [
        {
          name: 'AI Quantum Hybrid Platform',
          description: 'Revolutionary platform combining quantum computing with artificial intelligence',
          href: '/services/ai-quantum-hybrid-platform',
          price: 'Starting at $2,999/month',
          features: ['Quantum-classical hybrid processing', 'Quantum neural networks', 'Quantum-safe security', 'Custom AI training'],
          benefits: ['Unprecedented computational power', 'Advanced AI capabilities', 'Future-proof technology'],
          icon: Atom
        },
        {
          name: 'Space Technology Solutions',
          description: 'Innovative space-based technology solutions for terrestrial applications',
          href: '/services/space-tech',
          price: 'Starting at $1,999/month',
          features: ['Satellite data analysis', 'Space-based communications', 'Earth observation', 'Space infrastructure'],
          benefits: ['Global coverage', 'Real-time data', 'Innovative solutions'],
          icon: Rocket
        }
      ]
    },
    {
      category: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      color: 'from-orange-500 to-red-500',
      services: [
        {
          name: 'Micro CRM',
          description: 'Lightweight customer relationship management for small to medium businesses',
          href: '/services/micro-crm',
          price: 'Starting at $49/month',
          features: ['Contact management', 'Sales tracking', 'Email integration', 'Basic reporting'],
          benefits: ['Affordable CRM solution', 'Easy to use', 'Quick implementation'],
          icon: Users
        },
        {
          name: 'Helpdesk Platform',
          description: 'Streamlined customer support system with ticket management and automation',
          href: '/services/helpdesk',
          price: 'Starting at $79/month',
          features: ['Ticket management', 'Knowledge base', 'Automated responses', 'Performance analytics'],
          benefits: ['Improved customer satisfaction', 'Faster issue resolution', 'Reduced support costs'],
          icon: HelpCircle
        }
      ]
    }
  ];

  const pricingComparison = [
    {
      plan: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic AI features',
        'Standard integrations',
        'Email support',
        'Up to 5 team members',
        'Basic analytics'
      ],
      popular: false
    },
    {
      plan: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced AI capabilities',
        'Custom integrations',
        'Priority support',
        'Up to 25 team members',
        'Advanced analytics',
        'Custom dashboards'
      ],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Full AI suite',
        'White-label solutions',
        'Dedicated support',
        'Unlimited team members',
        'Custom development',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  const industrySolutions = [
    {
      industry: 'Financial Services',
      icon: DollarSign,
      services: ['AI Financial Risk Management', 'AI Trading Platform', 'Compliance Automation', 'Fraud Detection'],
      benefits: ['Reduced risk exposure', 'Improved compliance', 'Better decision making', 'Cost savings']
    },
    {
      industry: 'Healthcare',
      icon: Heart,
      services: ['AI Healthcare Analytics', 'Patient Experience Optimization', 'Predictive Diagnostics', 'Operational Efficiency'],
      benefits: ['Improved patient outcomes', 'Reduced costs', 'Better resource allocation', 'Enhanced care quality']
    },
    {
      industry: 'Manufacturing',
      icon: Factory,
      services: ['AI Predictive Maintenance', 'Supply Chain Optimization', 'Quality Control', 'Process Automation'],
      benefits: ['Reduced downtime', 'Lower costs', 'Improved quality', 'Increased efficiency']
    },
    {
      industry: 'Retail & E-commerce',
      icon: ShoppingCart,
      services: ['Customer Experience Analytics', 'Inventory Management', 'Personalization', 'Demand Forecasting'],
      benefits: ['Higher conversion rates', 'Better inventory management', 'Improved customer satisfaction', 'Increased sales']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
                <Star className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              2031 Comprehensive Services Showcase
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
              Discover our cutting-edge AI, micro SaaS, and emerging technology solutions designed to transform your business. 
              From intelligent automation to quantum computing, we deliver the future of technology today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Featured Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our most innovative and impactful solutions across all technology categories
          </p>
        </motion.div>

        {featuredServices.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">{category.category}</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <motion.div
                  key={serviceIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">{service.name}</h4>
                      <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                      <div className="text-lg font-bold text-blue-400 mb-4">{service.price}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-semibold text-blue-400 mb-2">Key Features:</h5>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-semibold text-green-400 mb-2">Benefits:</h5>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-300">
                          <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={service.href}
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-center inline-block"
                  >
                    Learn More
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pricing Comparison */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the plan that best fits your business needs. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingComparison.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${
                plan.popular 
                  ? 'border-blue-400/50 bg-gradient-to-b from-blue-500/10 to-transparent' 
                  : 'border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">{plan.plan}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                    : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                }`}
              >
                {plan.popular ? 'Start Free Trial' : 'Get Started'}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Industry-Specific Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tailored solutions designed for your specific industry challenges and opportunities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {industrySolutions.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">{industry.industry}</h3>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-400 mb-3">Key Services:</h4>
                  <ul className="space-y-2">
                    {industry.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-400 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {industry.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-gray-300">
                        <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/10"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that have already revolutionized their operations with our cutting-edge technology solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-gray-300">
          <p className="mb-4">
            Questions? Contact our team at{' '}
            <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
              kleber@ziontechgroup.com
            </a>
          </p>
          <p className="mb-4">
            Call us at{' '}
            <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">
              +1 (302) 464-0950
            </a>
          </p>
          <p>
            Visit us at{' '}
            <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
              ziontechgroup.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesShowcase2031;