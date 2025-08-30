import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Cpu, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Settings,
  BarChart3,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  ShieldCheck,
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
  Cloud,
  Workflow,
  Bot,
  Eye,
  Stethoscope,
  ChartBar,
  Activity,
  Target,
  Award,
  Clock,
  AlertTriangle,
  Microscope,
  Pill,
  Monitor as MonitorIcon,
  FileText as FileTextIcon
} from 'lucide-react';

export default function InnovativeServicesShowcase2025() {
  const featuredServices = [
    {
      name: 'AI Enterprise Automation Platform',
      description: 'Transform business operations with intelligent automation and AI-powered workflow optimization',
      icon: Workflow,
      href: '/services/ai-enterprise-automation-platform',
      color: 'from-purple-600 to-pink-600',
      category: 'Enterprise AI',
      pricing: 'Starting at $2,500/month',
      features: ['Multi-agent coordination', 'Workflow automation', 'Enterprise integration', 'Predictive analytics']
    },
    {
      name: 'AI Cybersecurity Intelligence Platform',
      description: 'Advanced AI-powered threat detection and automated response for comprehensive security',
      icon: Shield,
      href: '/services/ai-cybersecurity-intelligence-platform',
      color: 'from-red-600 to-orange-600',
      category: 'Cybersecurity',
      pricing: 'Starting at $1,800/month',
      features: ['AI threat detection', 'Behavioral analytics', 'Automated response', 'Global intelligence']
    },
    {
      name: 'AI Financial Trading & Analytics Platform',
      description: 'Revolutionize trading with intelligent algorithms and real-time market analytics',
      icon: ChartBar,
      href: '/services/ai-financial-trading-analytics-platform',
      color: 'from-green-600 to-emerald-600',
      category: 'Financial AI',
      pricing: 'Starting at $3,000/month',
      features: ['AI trading algorithms', 'Predictive analytics', 'Real-time data', 'Portfolio management']
    },
    {
      name: 'AI Healthcare Predictive Analytics Platform',
      description: 'Transform healthcare delivery with predictive diagnostics and personalized treatment',
      icon: Heart,
      href: '/services/ai-healthcare-predictive-analytics-platform',
      color: 'from-pink-600 to-rose-600',
      category: 'Healthcare AI',
      pricing: 'Starting at $2,800/month',
      features: ['Disease prediction', 'Patient analytics', 'Clinical support', 'Population health']
    }
  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      services: [
        { name: 'AI Enterprise Automation', href: '/services/ai-enterprise-automation-platform' },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Content Generation', href: '/services/ai-content-generation-platform' },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation' },
        { name: 'AI Project Management', href: '/services/ai-project-management-platform' },
        { name: 'AI Customer Support', href: '/services/ai-customer-support-automation' }
      ]
    },
    {
      name: 'Cybersecurity & Security',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      services: [
        { name: 'AI Cybersecurity Intelligence', href: '/services/ai-cybersecurity-intelligence-platform' },
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite' },
        { name: 'AI Threat Detection', href: '/services/ai-cybersecurity-threat-detection' },
        { name: 'Zero Trust Architecture', href: '/services/zero-trust-network-architecture' },
        { name: 'Incident Response Platform', href: '/services/incident-response-platform' },
        { name: 'Security Headers Manager', href: '/services/security-headers-csp-manager' }
      ]
    },
    {
      name: 'Financial & Trading',
      icon: DollarSign,
      color: 'from-green-600 to-emerald-600',
      services: [
        { name: 'AI Financial Trading & Analytics', href: '/services/ai-financial-trading-analytics-platform' },
        { name: 'AI Financial Compliance Assistant', href: '/services/ai-financial-compliance-assistant' },
        { name: 'AI Financial Trading Platform', href: '/services/ai-financial-trading-platform' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor' },
        { name: 'Quantum AI Trading Platform', href: '/services/quantum-ai-trading-platform' }
      ]
    },
    {
      name: 'Healthcare & Life Sciences',
      icon: Heart,
      color: 'from-pink-600 to-rose-600',
      services: [
        { name: 'AI Healthcare Predictive Analytics', href: '/services/ai-healthcare-predictive-analytics-platform' },
        { name: 'AI Healthcare Analytics Platform', href: '/services/ai-healthcare-analytics-platform' },
        { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform' },
        { name: 'Healthcare Tech Solutions', href: '/services/healthcare-tech' },
        { name: 'AI HR Platform', href: '/services/ai-hr-platform' },
        { name: 'Interview Assessment AI', href: '/services/interview-assessment-ai' }
      ]
    },
    {
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600',
      services: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops' },
        { name: 'AI DevOps Automation', href: '/services/ai-devops-automation-platform' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: 'Digital Transformation', href: '/services/digital-transformation' },
        { name: 'Digital Twin Solutions', href: '/services/digital-twin' },
        { name: 'Green IT Solutions', href: '/services/green-it' }
      ]
    },
    {
      name: 'Quantum & Advanced Tech',
      icon: Atom,
      color: 'from-indigo-600 to-purple-600',
      services: [
        { name: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform' },
        { name: 'Quantum Computing Solutions', href: '/services/quantum-computing-solutions' },
        { name: 'Quantum Computing Elite', href: '/services/quantum-computing-elite' },
        { name: 'Quantum Computing as a Service', href: '/services/quantum-computing-as-a-service' },
        { name: 'Space Tech Solutions', href: '/services/space-tech' },
        { name: 'Sustainability Solutions', href: '/services/sustainability' }
      ]
    }
  ];

  const industrySolutions = [
    {
      industry: 'Manufacturing',
      description: 'AI-powered supply chain optimization, predictive maintenance, and quality control',
      icon: Cpu,
      services: ['AI Supply Chain Optimization', 'AI Predictive Maintenance', 'Digital Twin Solutions']
    },
    {
      industry: 'Healthcare',
      description: 'Predictive diagnostics, personalized medicine, and population health management',
      icon: Heart,
      services: ['AI Healthcare Analytics', 'Predictive Disease Detection', 'Clinical Decision Support']
    },
    {
      industry: 'Financial Services',
      description: 'AI trading algorithms, risk assessment, and compliance automation',
      icon: DollarSign,
      services: ['AI Financial Trading', 'AI Compliance Assistant', 'Risk Management']
    },
    {
      industry: 'Retail & E-commerce',
      description: 'Customer analytics, inventory optimization, and personalized marketing',
      icon: ShoppingCart,
      services: ['AI Marketing Automation', 'Customer Analytics', 'Inventory Optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO 
        title="Innovative Services Showcase 2025 | Zion Tech Group"
        description="Discover our comprehensive portfolio of AI-powered services and solutions. From enterprise automation to healthcare analytics, we're transforming industries with cutting-edge technology."
        keywords="AI services, innovative solutions, enterprise automation, cybersecurity, financial trading, healthcare analytics, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/20 via-zion-blue to-zion-cyan/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-zion-purple/20 text-zion-cyan px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>2025 Innovation Showcase</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovative Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                Showcase 2025
              </span>
            </h1>
            
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Explore our comprehensive portfolio of AI-powered services and solutions. From enterprise automation 
              to healthcare analytics, we're transforming industries with cutting-edge technology and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/pricing" className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Innovative Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our most advanced and transformative AI-powered solutions for 2025
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-purple/30 rounded-xl p-8 hover:border-zion-cyan/50 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="inline-block bg-zion-purple/20 text-zion-cyan px-3 py-1 rounded-full text-xs font-medium mb-2">
                      {service.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                  </div>
                </div>
                
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <p className="text-zion-cyan font-semibold mb-3">{service.pricing}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to={service.href}
                  className="inline-flex items-center space-x-2 text-zion-cyan hover:text-zion-cyan-light transition-colors font-semibold group-hover:translate-x-1 transition-transform duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20 bg-zion-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Explore our comprehensive range of AI-powered services across all major technology domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                </div>
                
                <ul className="space-y-3">
                  {category.services.map((service, idx) => (
                    <li key={idx}>
                      <Link 
                        to={service.href}
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center justify-between group"
                      >
                        <span>{service.name}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Tailored AI solutions designed for specific industry challenges and opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{solution.industry}</h3>
                </div>
                
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  {solution.description}
                </p>
                
                <ul className="space-y-2">
                  {solution.services.map((service, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Discover how our innovative AI services can drive growth, efficiency, and competitive advantage for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Get Started Today
              </Link>
              <Link to="/pricing" className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                View Pricing Plans
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
