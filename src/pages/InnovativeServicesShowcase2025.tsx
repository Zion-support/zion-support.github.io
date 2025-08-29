import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Server, 
  Zap, 
  Rocket, 
  Star, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Users,
  Lock,
  Globe,
  Heart,
  Atom,
  ShoppingCart,
  DollarSign,
  MessageCircle,
  Settings,
  Cpu,
  Building,
  Crown,
  Sparkles,
  Flame,
  Thunder,
  Lightning,
  Sun,
  Moon,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Pi,
  Rho,
  Sigma,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega,
  Clock,
  Award,
  Target,
  Clock as ClockIcon
} from 'lucide-react';

import { SEO } from '@/components/SEO';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

// Enhanced service categories with new services
const enhancedServiceCategories = [
  {
    name: 'AI & Machine Learning',
    icon: Brain,
    color: 'from-purple-600 to-pink-600',
    description: 'Cutting-edge artificial intelligence solutions for business transformation',
    services: [
      {
        title: 'AI Business Intelligence',
        description: 'Advanced ML-powered business intelligence with predictive analytics and autonomous insights',
        price: '$1,299/month',
        features: ['Predictive Analytics', 'Natural Language Queries', 'Real-time Insights', 'Multi-source Integration'],
        href: '/services/ai-business-intelligence',
        icon: Brain
      },
      {
        title: 'AI Workflow Orchestrator',
        description: 'Intelligent process automation that learns and optimizes business workflows',
        price: '$899/month',
        features: ['Behavioral Learning', 'Process Optimization', 'Integration Connectors', 'Analytics Dashboard'],
        href: '/services/ai-workflow-orchestrator',
        icon: Zap
      },
      {
        title: 'AI Data Governance',
        description: 'AI-powered data protection, compliance, and governance automation',
        price: '$699/month',
        features: ['Automated Compliance', 'Data Protection', 'Privacy Controls', 'Audit Reporting'],
        href: '/services/ai-data-governance',
        icon: Shield
      },
      {
        title: 'AI Customer Success Platform',
        description: 'Proactive customer engagement with predictive churn detection and health scoring',
        price: '$799/month',
        features: ['Health Scoring', 'Churn Prediction', 'Proactive Engagement', 'CRM Integration'],
        href: '/services/ai-customer-success-platform',
        icon: Users
      },
      {
        title: 'AI Sales Copilot',
        description: 'AI-powered sales automation with predictive lead scoring and coaching',
        price: '$599/month',
        features: ['Lead Scoring', 'Sales Coaching', 'Revenue Forecasting', 'Market Intelligence'],
        href: '/services/ai-sales-copilot',
        icon: TrendingUp
      },
      {
        title: 'AI Compliance Assistant',
        description: 'Automated regulatory compliance for GDPR, SOC2, HIPAA, and more',
        price: '$499/month',
        features: ['Multi-framework Support', 'Automated Evidence', 'Real-time Alerts', 'Audit Reports'],
        href: '/services/ai-compliance-assistant',
        icon: CheckCircle
      }
    ]
  },
  {
    name: 'Micro SaaS Solutions',
    icon: ShoppingCart,
    color: 'from-green-600 to-emerald-600',
    description: 'Scalable software-as-a-service solutions for specific business needs',
    services: [
      {
        title: 'AI Content Optimizer Pro',
        description: 'AI-powered content optimization for SEO, readability, and engagement',
        price: '$199/month',
        features: ['SEO Optimization', 'Readability Scoring', 'Multi-language Support', 'A/B Testing'],
        href: '/services/ai-content-optimizer',
        icon: Brain
      },
      {
        title: 'Quantum Workflow Automation',
        description: 'Next-generation workflow automation using quantum-inspired algorithms',
        price: '$499/month',
        features: ['Quantum Algorithms', 'Complex Modeling', 'Real-time Optimization', 'Enterprise Integration'],
        href: '/services/quantum-workflow-automation',
        icon: Atom
      },
      {
        title: 'Edge AI Inference Engine',
        description: 'Lightweight AI engine for edge devices with offline capability',
        price: '$399/month',
        features: ['Edge Optimization', 'Low Latency', 'Offline Processing', 'Model Compression'],
        href: '/services/edge-ai-inference-engine',
        icon: Cpu
      },
      {
        title: 'Autonomous CRM Optimizer',
        description: 'AI-powered CRM that automatically optimizes customer relationships',
        price: '$599/month',
        features: ['Autonomous Lead Scoring', 'Predictive Behavior', 'Automated Follow-ups', 'Revenue Optimization'],
        href: '/services/autonomous-crm-optimizer',
        icon: Users
      },
      {
        title: 'Quantum Supply Chain Optimizer',
        description: 'Revolutionary supply chain optimization using quantum algorithms',
        price: '$799/month',
        features: ['Quantum Routing', 'Real-time Tracking', 'Demand Forecasting', 'Cost Optimization'],
        href: '/services/quantum-supply-chain-optimizer',
        icon: Rocket
      },
      {
        title: 'SOC 2 Compliance Automation',
        description: 'Automated evidence collection and control monitoring for SOC 2 audits',
        price: '$249/month',
        features: ['Evidence Collection', 'Control Dashboards', 'Policy Mapping', 'Audit Export'],
        href: '/services/soc2-compliance-automation-saas',
        icon: Shield
      }
    ]
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    color: 'from-blue-600 to-cyan-600',
    description: 'Scalable cloud infrastructure and automated deployment solutions',
    services: [
      {
        title: 'Cloud DevOps Platform',
        description: 'Comprehensive DevOps automation with CI/CD and infrastructure as code',
        price: '$1,299/month',
        features: ['CI/CD Automation', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring'],
        href: '/services/cloud-devops',
        icon: Cloud
      },
      {
        title: 'Cloud FinOps Optimizer',
        description: 'AI-powered cloud cost optimization and financial operations management',
        price: '$799/month',
        features: ['Cost Optimization', 'Resource Management', 'Budget Controls', 'ROI Analytics'],
        href: '/services/cloud-finops-optimizer',
        icon: DollarSign
      },
      {
        title: 'FinOps Advisor',
        description: 'Strategic financial operations consulting for cloud infrastructure',
        price: '$1,499/month',
        features: ['Strategic Planning', 'Cost Analysis', 'Optimization Strategies', 'Best Practices'],
        href: '/services/finops-advisor',
        icon: DollarSign
      },
      {
        title: 'Digital Transformation',
        description: 'End-to-end digital transformation consulting and implementation',
        price: '$25,000/project',
        features: ['Strategy Development', 'Technology Selection', 'Implementation', 'Change Management'],
        href: '/services/digital-transformation',
        icon: Rocket
      }
    ]
  },
  {
    name: 'Edge & IoT Solutions',
    icon: Server,
    color: 'from-indigo-600 to-purple-600',
    description: 'Ultra-low latency edge computing and IoT platform solutions',
    services: [
      {
        title: 'IoT & Edge Computing',
        description: 'Comprehensive IoT platform with edge computing capabilities',
        price: '$1,599/month',
        features: ['Device Management', 'Edge Processing', 'Real-time Analytics', 'Scalable Architecture'],
        href: '/services/iot-edge',
        icon: Cpu
      },
      {
        title: 'Edge Computing Platform',
        description: 'Ultra-low latency edge computing platform for real-time applications',
        price: '$2,199/month',
        features: ['Ultra-low Latency', 'Real-time Processing', 'Global Distribution', 'Auto-scaling'],
        href: '/services/edge-computing-platform',
        icon: Server
      },
      {
        title: 'Digital Twin Platform',
        description: 'Advanced simulation and monitoring platform for physical assets',
        price: '$1,899/month',
        features: ['3D Modeling', 'Real-time Monitoring', 'Predictive Analytics', 'Simulation Engine'],
        href: '/services/digital-twin',
        icon: Building
      },
      {
        title: 'Predictive Maintenance Suite',
        description: 'IoT-powered predictive maintenance with ML algorithms',
        price: '$349/month',
        features: ['ML Predictions', 'IoT Integration', 'Maintenance Scheduling', 'Cost Optimization'],
        href: '/services/predictive-maintenance-suite',
        icon: Clock
      }
    ]
  },
  {
    name: 'Cybersecurity & Compliance',
    icon: Shield,
    color: 'from-red-600 to-orange-600',
    description: 'Advanced security protocols and threat protection systems',
    services: [
      {
        title: 'AI Compliance Copilot',
        description: 'AI-powered security operations with automated threat response',
        price: '$1,199/month',
        features: ['AI Threat Detection', 'Automated Response', '24/7 Monitoring', 'Incident Management'],
        href: '/services/ai-compliance-copilot',
        icon: Shield
      },
      {
        title: 'Zero Trust Architecture',
        description: 'Comprehensive zero trust security implementation',
        price: '$15,000/project',
        features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Threat Detection'],
        href: '/services/zero-trust-network-architecture',
        icon: Lock
      },
      {
        title: 'AI Cybersecurity Suite',
        description: 'Advanced AI-powered cybersecurity solutions',
        price: '$2,499/month',
        features: ['AI Threat Hunting', 'Behavioral Analysis', 'Automated Response', 'Threat Intelligence'],
        href: '/services/ai-cybersecurity-suite',
        icon: Brain
      },
      {
        title: 'Quantum-Secure Communication',
        description: 'Future-proof communication with quantum-resistant encryption',
        price: '$199/month',
        features: ['Quantum Encryption', 'Secure File Sharing', 'Team Collaboration', 'End-to-end Security'],
        href: '/services/quantum-secure-communication-platform',
        icon: Atom
      }
    ]
  },
  {
    name: 'Emerging Technologies',
    icon: Star,
    color: 'from-yellow-600 to-orange-600',
    description: 'Next-generation technologies for future-ready businesses',
    services: [
      {
        title: 'Quantum Computing Solutions',
        description: 'Next-generation computational power for complex problems',
        price: '$5,999/month',
        features: ['Quantum Processing', 'Algorithm Development', 'Research Collaboration', 'Enterprise Deployment'],
        href: '/services/quantum-computing-solutions',
        icon: Atom
      },
      {
        title: 'Quantum AI Platform',
        description: 'Revolutionary platform combining quantum computing with AI',
        price: '$8,999/month',
        features: ['Quantum Neural Networks', 'Hybrid Processing', 'Advanced Training', 'Quantum Advantage'],
        href: '/services/quantum-ai-platform',
        icon: Brain
      },
      {
        title: 'Blockchain Enterprise Solutions',
        description: 'Enterprise-grade blockchain solutions for business transformation',
        price: '$3,999/month',
        features: ['Smart Contracts', 'DeFi Integration', 'Enterprise Security', 'Scalable Architecture'],
        href: '/services/blockchain-enterprise-solutions',
        icon: Lock
      },
      {
        title: 'Space Technology Solutions',
        description: 'Advanced space technology for satellite management and exploration',
        price: '$4,999/month',
        features: ['Satellite Management', 'Space Debris Tracking', 'Mission Planning', 'Data Analysis'],
        href: '/services/space-tech',
        icon: Planet
      },
      {
        title: 'Healthcare Technology',
        description: 'AI-powered healthcare solutions for diagnostics and patient care',
        price: '$2,999/month',
        features: ['Medical Imaging', 'Diagnostic AI', 'Patient Monitoring', 'Clinical Support'],
        href: '/services/healthcare-tech',
        icon: Heart
      },
      {
        title: 'Sustainability Solutions',
        description: 'Green IT solutions for environmental sustainability',
        price: '$1,799/month',
        features: ['Energy Optimization', 'Carbon Tracking', 'Green Infrastructure', 'Compliance Reporting'],
        href: '/services/sustainability',
        icon: Globe
      }
    ]
  }
];

const InnovativeServicesShowcase2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Innovative Services Showcase 2025 - Zion Tech Group"
        description="Explore our cutting-edge AI, IT, and Micro SaaS services for 2025. Discover innovative solutions that transform businesses and drive growth."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Star className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Innovative Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Showcase 2025
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge AI, IT, and Micro SaaS solutions that are transforming businesses 
              and driving innovation across industries. Experience the future of technology today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our innovative services span across AI, IT infrastructure, Micro SaaS, and emerging technologies, 
              providing end-to-end solutions for modern businesses.
            </p>
          </div>

          <div className="space-y-16">
            {enhancedServiceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50"
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                    <p className="text-slate-300">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-slate-700/50 rounded-2xl p-6 border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-600 flex items-center justify-center">
                          <service.icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{service.title}</h4>
                          <p className="text-sm text-cyan-400 font-medium">{service.price}</p>
                        </div>
                      </div>
                      
                      <p className="text-slate-300 text-sm mb-4">{service.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-sm text-slate-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Link
                        to={service.href}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                      >
                        Learn More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 text-center border border-cyan-500/20"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses already leveraging our innovative services to drive growth, 
              improve efficiency, and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Get Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2025;