import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  Rocket, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Database,
  Network,
  Workflow,
  Bot,
  Globe,
  Lock,
  TrendingUp,
  DollarSign,
  Clock,
  Star,
  Award,
  Target,
  Lightbulb,
  Code,
  Server,
  Cloud,
  Smartphone,
  Monitor,
  ShieldCheck,
  Activity,
  MessageCircle,
  FileText,
  Settings,
  Palette,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Building2,
  Handshake,
  HelpCircle,
  ChevronRight,
  ChevronDown,
  Plus,
  Minus,
  Calendar,
  CreditCard,
  Phone,
  Mail,
  MapPin,
  TrendingDown,
  LineChart,
  PieChart,
  BarChart,
  Target,
  Heart,
  Lock,
  Globe2,
  Leaf,
  Satellite,
  Atom,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  DollarSign,
  Heart,
  Lock,
  Cloud
} from 'lucide-react';

export default function ComprehensiveServicesShowcase2025() {
  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      services: [
        {
          name: 'AI Enterprise Automation Platform',
          description: 'Transform business operations with intelligent automation',
          href: '/services/ai-enterprise-automation-platform',
          price: 'From $299/month',
          features: ['Multi-agent AI coordination', 'Workflow automation', 'Process optimization']
        },
        {
          name: 'AI Cybersecurity Threat Intelligence',
          description: 'Advanced threat detection with AI precision',
          href: '/services/ai-cybersecurity-threat-intelligence',
          price: 'From $499/month',
          features: ['Real-time threat monitoring', 'AI-powered detection', 'Automated response']
        },
        {
          name: 'AI Business Intelligence',
          description: 'Data-driven insights for strategic decision making',
          href: '/services/ai-business-intelligence',
          price: 'From $399/month',
          features: ['Predictive analytics', 'Real-time dashboards', 'Custom reporting']
        }
      ]
    },
    {
      name: 'Quantum Computing',
      icon: Atom,
      color: 'from-blue-600 to-cyan-600',
      services: [
        {
          name: 'Quantum AI Trading Platform',
          description: 'Revolutionary trading with quantum computing power',
          href: '/services/quantum-ai-trading-platform',
          price: 'From $999/month',
          features: ['Quantum algorithms', 'AI market prediction', 'High-frequency trading']
        },
        {
          name: 'Quantum Computing Solutions',
          description: 'Enterprise quantum computing services',
          href: '/services/quantum-computing-solutions',
          price: 'From $1,999/month',
          features: ['Custom quantum algorithms', 'Research support', 'Optimization services']
        }
      ]
    },
    {
      name: 'Cybersecurity & Compliance',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      services: [
        {
          name: 'Zero Trust Network Architecture',
          description: 'Modern security framework for enterprise protection',
          href: '/services/zero-trust-network-architecture',
          price: 'From $799/month',
          features: ['Identity verification', 'Micro-segmentation', 'Continuous monitoring']
        },
        {
          name: 'Incident Response Platform',
          description: 'Rapid threat response and recovery',
          href: '/services/incident-response-platform',
          price: 'From $599/month',
          features: ['Automated response', 'Forensic analysis', 'Recovery automation']
        }
      ]
    },
    {
      name: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'from-green-600 to-emerald-600',
      services: [
        {
          name: 'Micro CRM Platform',
          description: 'Customer relationship management for small businesses',
          href: '/services/micro-crm',
          price: 'From $99/month',
          features: ['Contact management', 'Sales tracking', 'Email automation']
        },
        {
          name: 'AI Content Generator',
          description: 'AI-powered content creation and optimization',
          href: '/services/ai-content-generator',
          price: 'From $149/month',
          features: ['Content generation', 'SEO optimization', 'Multi-language support']
        }
      ]
    },
    {
      name: 'Healthcare Technology',
      icon: Heart,
      color: 'from-pink-600 to-rose-600',
      services: [
        {
          name: 'AI Healthcare Analytics Platform',
          description: 'Predictive healthcare with AI insights',
          href: '/services/ai-healthcare-analytics-platform',
          price: 'From $1,299/month',
          features: ['Patient analytics', 'Predictive diagnostics', 'Care optimization']
        },
        {
          name: 'Healthcare Tech Solutions',
          description: 'Comprehensive healthcare technology services',
          href: '/services/healthcare-tech',
          price: 'From $899/month',
          features: ['HIPAA compliance', 'Medical device integration', 'Patient portals']
        }
      ]
    },
    {
      name: 'Financial Technology',
      icon: DollarSign,
      color: 'from-yellow-600 to-orange-600',
      services: [
        {
          name: 'FinOps Advisor',
          description: 'Cloud financial operations optimization',
          href: '/services/finops-advisor',
          price: 'From $699/month',
          features: ['Cost optimization', 'Budget management', 'ROI analysis']
        },
        {
          name: 'AI Financial Compliance Assistant',
          description: 'Automated compliance and regulatory reporting',
          href: '/services/ai-financial-compliance-assistant',
          price: 'From $899/month',
          features: ['Regulatory compliance', 'Automated reporting', 'Risk assessment']
        }
      ]
    }
  ];

  const industrySolutions = [
    {
      name: 'Financial Services',
      icon: Building2,
      description: 'Banking, insurance, and fintech solutions',
      services: ['AI trading platforms', 'Compliance automation', 'Risk management', 'Fraud detection']
    },
    {
      name: 'Healthcare',
      icon: Heart,
      description: 'Medical technology and patient care solutions',
      services: ['AI diagnostics', 'Patient analytics', 'Medical device security', 'HIPAA compliance']
    },
    {
      name: 'Manufacturing',
      icon: Cpu,
      description: 'Industrial automation and smart manufacturing',
      services: ['IoT integration', 'Predictive maintenance', 'Quality control', 'Supply chain optimization']
    },
    {
      name: 'Retail & E-commerce',
      icon: ShoppingCart,
      description: 'Digital commerce and customer experience',
      services: ['AI personalization', 'Inventory management', 'Customer analytics', 'Payment security']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: 'From $99/month',
      features: ['Basic features', 'Standard support', 'Up to 5 users', 'Email support']
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      price: 'From $499/month',
      features: ['Advanced features', 'Priority support', 'Up to 25 users', 'Phone & email support']
    },
    {
      name: 'Enterprise',
      description: 'Full-scale solutions for large organizations',
      price: 'Custom pricing',
      features: ['Custom features', 'Dedicated support', 'Unlimited users', '24/7 support']
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO 
        title="Comprehensive Services Showcase 2025 | Zion Tech Group"
        description="Explore our comprehensive range of AI, IT, and Micro SAAS services. From quantum computing to cybersecurity, we have solutions for every business need."
        keywords="AI services, IT services, micro SAAS, quantum computing, cybersecurity, business automation, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/20 via-zion-blue to-zion-cyan/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-cyan text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Comprehensive Services Showcase 2025
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Complete Technology
                <span className="block text-zion-cyan">Solutions</span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Discover our comprehensive range of AI, IT, and Micro SAAS services designed to transform 
                your business operations and drive innovation across all industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/pricing"
                  className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Service Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive solutions across all technology domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{category.name}</h3>
                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="border-l-2 border-zion-purple/30 pl-4">
                      <h4 className="text-lg font-medium text-zion-cyan mb-2">{service.name}</h4>
                      <p className="text-zion-slate-light text-sm mb-2">{service.description}</p>
                      <p className="text-zion-cyan text-sm font-medium mb-2">{service.price}</p>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-zion-slate-light text-xs flex items-center">
                            <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={service.href}
                        className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light text-sm font-medium mt-2"
                      >
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 bg-zion-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Tailored technology solutions for your industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industrySolutions.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{industry.description}</p>
                <ul className="space-y-2 text-left">
                  {industry.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="text-zion-slate-light text-sm flex items-center">
                      <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Options
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the pricing tier that fits your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-zion-blue border rounded-xl p-8 ${
                  tier.name === 'Professional' 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/20' 
                    : 'border-zion-purple/30'
                }`}
              >
                {tier.name === 'Professional' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-zion-slate-light mb-4">{tier.description}</p>
                  <div className="text-3xl font-bold text-zion-cyan">{tier.price}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.name === 'Professional'
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan-dark hover:to-zion-purple-dark'
                      : 'bg-zion-blue border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                  }`}>
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-cyan">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let our technology experts help you choose the right solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-zion-blue font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue transition-all duration-300"
            >
              View Full Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Our technology experts are here to help you succeed
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-zion-cyan mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-slate-light">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-zion-cyan mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-zion-cyan mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
