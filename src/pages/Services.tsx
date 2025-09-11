import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain,
  Shield,
  Cloud,
  Server,
  BarChart3,
  Users,
  ShoppingCart,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Target,
  TrendingUp,
  Atom,
  Network,
  Eye,
  PenTool,
  Heart,
  Building,
  Truck,
  Lock,
  Smartphone,
  Mail,
  Video,
  Satellite,
  Leaf,
  Code,
  Zap,
  Star,
  Rocket,
  Globe,
  Cpu,
  ArrowRight,
  FileText,
  Workflow,
} from 'lucide-react';

export default function Services() {
  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Cutting-edge artificial intelligence solutions',
      color: 'from-blue-500 to-indigo-500',
      services: [
        {
          name: 'AI Business Intelligence',
          href: '/services/ai-business-intelligence',
          icon: Brain,
          description: 'Advanced analytics & ML insights',
        },
        {
          name: 'AI Compliance Assistant',
          href: '/services/ai-compliance-assistant',
          icon: Shield,
          description: 'Automated regulatory compliance',
        },
        {
          name: 'AI Sales Copilot',
          href: '/services/ai-sales-copilot',
          icon: Users,
          description: 'Intelligent sales optimization',
        },
        {
          name: 'AI-Powered SEO',
          href: '/services/ai-seo',
          icon: TrendingUp,
          description: 'Machine learning SEO optimization',
        },
        {
          name: 'Interview Assessment AI',
          href: '/services/interview-assessment',
          icon: Users,
          description: 'AI-powered candidate evaluation',
        },
        {
          name: 'AI Content Marketing Suite',
          href: '/services/ai-content-marketing-suite',
          icon: PenTool,
          description: 'Automated content creation',
        },
        {
          name: 'AI Customer Success Prediction',
          href: '/services/ai-customer-success-prediction',
          icon: TrendingUp,
          description: 'Predict customer churn & success',
        },
        {
          name: 'AI Supply Chain Optimization',
          href: '/services/ai-supply-chain-optimization',
          icon: Truck,
          description: 'Intelligent supply chain management',
        },
        {
          name: 'AI Cybersecurity Platform',
          href: '/services/ai-cybersecurity-platform',
          icon: Shield,
          description: 'Advanced threat detection & response',
        },
        {
          name: 'AI Customer Support',
          href: '/services/ai-customer-support-automation',
          icon: MessageCircle,
          description: 'Intelligent support automation',
        },
        {
          name: 'AI Project Management',
          href: '/services/ai-project-management',
          icon: Target,
          description: 'AI-driven project optimization',
        },
        {
          name: 'AI Financial Analytics',
          href: '/services/ai-financial-analytics',
          icon: DollarSign,
          description: 'Intelligent financial insights',
        },
        {
          name: 'AI Autonomous Research Assistant',
          href: '/services/ai-autonomous-research-assistant',
          icon: Brain,
          description: 'Self-directed research automation',
        },
        {
          name: 'AI Healthcare Platform',
          href: '/services/ai-healthcare-platform',
          icon: Heart,
          description: 'AI-powered healthcare solutions',
        },
        {
          name: 'AI Legal Document Automation',
          href: '/services/ai-legal-document-automation',
          icon: FileText,
          description: 'Automated legal document processing',
        },
        {
          name: 'AI Healthcare Analytics',
          href: '/services/ai-healthcare-analytics',
          icon: Heart,
          description: 'Healthcare data insights',
        },
        {
          name: 'AI Financial Trading',
          href: '/services/ai-financial-trading',
          icon: DollarSign,
          description: 'Algorithmic trading solutions',
        },
        {
          name: 'AI Content Creation Suite',
          href: '/services/ai-content-creation-suite',
          icon: PenTool,
          description: 'Comprehensive content creation tools',
        },
        {
          name: 'AI Workflow Orchestrator',
          href: '/services/ai-workflow-orchestrator',
          icon: Workflow,
          description: 'Intelligent workflow automation',
        },
        {
          name: 'AI Data Governance Platform',
          href: '/services/ai-data-governance-platform',
          icon: Shield,
          description: 'AI-powered compliance automation',
        },
        {
          name: 'AI Customer Experience Analytics',
          href: '/services/ai-customer-experience-analytics',
          icon: BarChart3,
          description: 'Customer sentiment & behavior analytics',
        },
        {
          name: 'AI Supply Chain Optimization',
          href: '/services/ai-supply-chain-optimization',
          icon: Truck,
          description: 'Intelligent supply chain management',
        },
        {
          name: 'AI Financial Risk Management',
          href: '/services/ai-financial-risk-management',
          icon: Shield,
          description: 'Real-time risk monitoring & optimization',
        },
      ],
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      description: 'Scalable cloud solutions and infrastructure management',
      color: 'from-cyan-500 to-blue-500',
      services: [
        {
          name: 'Cloud DevOps',
          href: '/services/cloud-devops',
          icon: Cloud,
          description: 'Infrastructure automation & scaling',
        },
        {
          name: 'IT Infrastructure',
          href: '/services/it-infrastructure',
          icon: Server,
          description: 'Enterprise infrastructure solutions',
        },
        {
          name: 'FinOps Advisor',
          href: '/services/finops-advisor',
          icon: DollarSign,
          description: 'Cloud cost optimization',
        },
        {
          name: 'Cloud FinOps Optimizer',
          href: '/services/cloud-finops-optimizer',
          icon: BarChart3,
          description: 'Financial operations automation',
        },
        {
          name: 'IT Consulting',
          href: '/it-consulting',
          icon: Cpu,
          description: 'Technology strategy & planning',
        },
        {
          name: 'Onsite IT Services',
          href: '/it-onsite-services',
          icon: Server,
          description: 'On-premise IT support',
        },
        {
          name: 'Enterprise Solutions',
          href: '/enterprise',
          icon: Building,
          description: 'Large-scale enterprise solutions',
        },
        {
          name: 'Healthcare Solutions',
          href: '/healthcare-solutions',
          icon: Heart,
          description: 'Healthcare IT infrastructure',
        },
        {
          name: 'Government Solutions',
          href: '/government-solutions',
          icon: Building,
          description: 'Public sector IT solutions',
        },
        {
          name: 'Manufacturing Solutions',
          href: '/manufacturing-solutions',
          icon: Truck,
          description: 'Manufacturing IT systems',
        },
        {
          name: 'Digital Transformation',
          href: '/services/digital-transformation',
          icon: Zap,
          description: 'Strategic technology consulting',
        },
        {
          name: 'Data Analytics',
          href: '/services/data-analytics',
          icon: BarChart3,
          description: 'Business intelligence & insights',
        },
      ],
    },
    {
      title: 'Cybersecurity & Privacy',
      icon: Shield,
      description: 'Advanced security and compliance solutions',
      color: 'from-red-500 to-orange-500',
      services: [
        {
          name: 'AI Cybersecurity Platform',
          href: '/services/ai-cybersecurity-platform',
          icon: Shield,
          description: 'Advanced AI-powered security',
        },
        {
          name: 'Security Headers & CSP',
          href: '/services/security-headers-csp',
          icon: Lock,
          description: 'Web security hardening',
        },
        {
          name: 'DSR Privacy Portal',
          href: '/services/dsr-portal',
          icon: Shield,
          description: 'GDPR/CCPA compliance',
        },
        {
          name: 'Zero Trust Network Access',
          href: '/services/zero-trust-network-access',
          icon: Lock,
          description: 'Modern security architecture',
        },
        {
          name: 'AI Autonomous Forensics',
          href: '/ai-autonomous-forensics',
          icon: Shield,
          description: 'Automated digital forensics',
        },
        {
          name: 'AI Autonomous Threat Intelligence',
          href: '/ai-autonomous-threat-intelligence',
          icon: Shield,
          description: 'Intelligent threat detection',
        },
        {
          name: 'AI Autonomous Mobile Security',
          href: '/ai-autonomous-mobile-security',
          icon: Smartphone,
          description: 'Mobile device security',
        },
        {
          name: 'AI Autonomous Governance',
          href: '/ai-autonomous-governance',
          icon: Shield,
          description: 'Automated security governance',
        },
      ],
    },
    {
      title: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      description: 'Niche software solutions for specific business needs',
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          name: 'Micro SaaS Platform',
          href: '/micro-saas',
          icon: ShoppingCart,
          description: 'Niche software solutions',
        },
        {
          name: 'Micro CRM',
          href: '/services/micro-crm',
          icon: Users,
          description: 'Customer relationship management',
        },
        {
          name: 'Helpdesk Platform',
          href: '/services/helpdesk',
          icon: MessageCircle,
          description: 'Customer support system',
        },
        {
          name: 'Website Analytics',
          href: '/services/website-analytics',
          icon: BarChart3,
          description: 'Performance tracking & insights',
        },
        {
          name: 'IT Helpdesk',
          href: '/services/it-helpdesk',
          icon: HelpCircle,
          description: 'IT support management',
        },
        {
          name: 'Affiliate Tracking',
          href: '/services/affiliate-tracking',
          icon: TrendingUp,
          description: 'Affiliate program management',
        },
        {
          name: 'Mobile Survey',
          href: '/services/mobile-survey',
          icon: Smartphone,
          description: 'Mobile survey solutions',
        },
        {
          name: 'Email Sequencer',
          href: '/services/email-sequencer',
          icon: Mail,
          description: 'Automated email campaigns',
        },
        {
          name: 'Podcast Transcription',
          href: '/services/podcast-transcription',
          icon: Video,
          description: 'Audio transcription services',
        },
        {
          name: 'Returns Management',
          href: '/services/returns-management',
          icon: Truck,
          description: 'Product returns processing',
        },
        {
          name: 'AI Auto Email Responder',
          href: '/services/ai-auto-email-responder',
          icon: Mail,
          description: 'Intelligent email automation',
        },
        {
          name: 'Customer Feedback Surveys',
          href: '/services/mobile-feedback-surveys',
          icon: MessageCircle,
          description: 'Customer feedback collection',
        },
        {
          name: 'AI Compliance Copilot',
          href: '/services/ai-compliance-copilot',
          icon: Shield,
          description: 'Compliance assistance',
        },
        {
          name: 'LLM Content Studio',
          href: '/services/llm-content-studio',
          icon: PenTool,
          description: 'AI content creation',
        },
        {
          name: 'AI Autonomous Code Reviewer',
          href: '/services/ai-autonomous-code-reviewer',
          icon: Code,
          description: 'Automated code review',
        },
      ],
    },
    {
      title: 'Emerging Technologies',
      icon: Atom,
      description: 'Next-generation technology solutions',
      color: 'from-indigo-500 to-purple-500',
      services: [
        {
          name: 'Quantum Computing',
          href: '/services/quantum-computing',
          icon: Atom,
          description: 'Next-gen computational power',
        },
        {
          name: 'AI Quantum Hybrid Platform',
          href: '/services/ai-quantum-hybrid-platform',
          icon: Atom,
          description: 'Quantum-AI integration',
        },
        {
          name: 'IoT Edge Computing',
          href: '/services/iot-edge-computing',
          icon: Network,
          description: 'Smart device networks',
        },
        {
          name: 'Digital Twin',
          href: '/services/digital-twin',
          icon: Eye,
          description: 'Virtual system replicas',
        },
        {
          name: 'Space Technology',
          href: '/space-tech',
          icon: Satellite,
          description: 'Space-based solutions',
        },
        {
          name: 'Green IT Solutions',
          href: '/green-it',
          icon: Leaf,
          description: 'Environmentally conscious IT',
        },
        {
          name: 'Sustainable Technology',
          href: '/services/sustainable-technology',
          icon: Leaf,
          description: 'Sustainable tech solutions',
        },
        {
          name: 'AI Predictive Maintenance',
          href: '/services/ai-predictive-maintenance',
          icon: TrendingUp,
          description: 'Predictive maintenance AI',
        },
        {
          name: 'Quantum Machine Learning',
          href: '/services/quantum-machine-learning',
          icon: Brain,
          description: 'Quantum-enhanced ML',
        },
        {
          name: 'AI Autonomous Scientific Researcher',
          href: '/ai-autonomous-scientific-researcher',
          icon: Brain,
          description: 'Automated research',
        },
        {
          name: 'AI Autonomous Prediction',
          href: '/ai-autonomous-prediction',
          icon: TrendingUp,
          description: 'Predictive analytics AI',
        },
      ],
    },
  ];

  const featuredServices = [
    {
      name: '2025 Innovative Services',
      href: '/innovative-services-landing-2025',
      icon: Star,
      description: 'Revolutionary Technology Services',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      name: '2025 Services Showcase',
      href: '/comprehensive-services-showcase-2025',
      icon: Star,
      description: 'Complete Service Portfolio',
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: '2025 Pricing Guide',
      href: '/comprehensive-pricing-guide-2025',
      icon: DollarSign,
      description: 'Complete Pricing & ROI Analysis',
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: '2025 New Services',
      href: '/new-innovative-services-2025',
      icon: Star,
      description: 'Latest AI-Powered Micro SAAS Solutions',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      name: '2026 Services Overview',
      href: '/ultimate-services-showcase-2026',
      icon: Star,
      description: 'Revolutionary AI & Quantum Solutions',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      name: '2027 Services Overview',
      href: '/comprehensive-services-showcase-2027',
      icon: Star,
      description: 'Cutting-edge Innovation & Emerging Tech',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      name: '2029 Cutting-Edge Services',
      href: '/zion-cutting-edge-services-2029',
      icon: Star,
      description: 'Future-ready Technology Solutions',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6'>
              Our Services
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'>
              Comprehensive technology solutions powered by cutting-edge AI,
              quantum computing, and emerging technologies
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={service.href}
                    className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${service.color} text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg`}
                  >
                    <service.icon className='w-5 h-5 mr-2' />
                    {service.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className='py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          <ServiceCard
            title='AI & Machine Learning'
            description='Transform your business with cutting-edge AI solutions including machine learning, natural language processing, and computer vision.'
            icon='🤖'
          />
          <ServiceCard
            title='Cybersecurity'
            description='Protect your digital assets with advanced security solutions, threat detection, and compliance management.'
            icon='🔒'
          />
          <ServiceCard
            title='Cloud Infrastructure'
            description='Scale your operations with robust cloud solutions, migration services, and infrastructure optimization.'
            icon='☁️'
          />
          <ServiceCard
            title='Digital Transformation'
            description='Modernize your business processes with comprehensive digital transformation strategies and implementation.'
            icon='🚀'
          />
          <ServiceCard
            title='Data Analytics'
            description='Unlock insights from your data with advanced analytics, business intelligence, and reporting solutions.'
            icon='📊'
          />
          <ServiceCard
            title='IoT Solutions'
            description='Connect and manage your devices with Internet of Things solutions for smart operations and monitoring.'
            icon='🌐'
          />
        </div>
      </section>

      {/* Additional Services */}
      <section className='py-20'>
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-center mb-8'>
            Specialized Solutions
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <Card className='p-6 bg-slate-800/50 border-slate-700'>
              <h3 className='text-xl font-semibold mb-4 text-blue-400'>
                Custom Development
              </h3>
              <p className='text-gray-300 mb-4'>
                Tailored software solutions built specifically for your business
                needs and requirements.
              </p>
              <ul className='text-sm text-gray-400 space-y-2'>
                <li>• Web Applications</li>
                <li>• Mobile Apps</li>
                <li>• API Development</li>
                <li>• System Integration</li>
              </ul>
            </Card>

            <Card className='p-6 bg-slate-800/50 border-slate-700'>
              <h3 className='text-xl font-semibold mb-4 text-blue-400'>
                Consulting Services
              </h3>
              <p className='text-gray-300 mb-4'>
                Expert guidance to help you make informed technology decisions
                and strategic planning.
              </p>
              <ul className='text-sm text-gray-400 space-y-2'>
                <li>• Technology Assessment</li>
                <li>• Architecture Design</li>
                <li>• Process Optimization</li>
                <li>• Training & Support</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold mb-6'>Ready to Get Started?</h2>
          <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
            Let's discuss how our services can help transform your business and
            drive growth.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors'>
              Get a Quote
            </button>
            <button className='border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors'>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20'>
        <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-400/20'
          >
            <h2 className='text-4xl font-bold text-white mb-6'>
              Ready to Transform Your Business?
            </h2>
            <p className='text-xl text-gray-300 mb-8'>
              Let's discuss how our cutting-edge solutions can drive innovation
              and growth for your organization.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                to='/contact'
                className='inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg'
              >
                <MessageCircle className='w-5 h-5 mr-2' />
                Get Started
              </Link>
              <Link
                to='/pricing'
                className='inline-flex items-center px-8 py-4 rounded-full border border-cyan-400/30 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-colors duration-300'
              >
                <DollarSign className='w-5 h-5 mr-2' />
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
