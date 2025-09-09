import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Users, 
  HardDrive, 
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  BarChart,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  TrendingUp,
  Award,
  Globe,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Clock,
  DollarSign,
  BarChart3,
  Globe2,
  Settings,
  Palette,
  Layers,
  Compass,
  BookOpen,
  Headphones,
  MessageSquare,
  Calendar,
  FileText,
  Download,
  ExternalLink,
  Cloud,
  X
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function ServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, color: 'from-zion-cyan to-zion-purple' },
    { id: 'ai', name: 'AI Services', icon: Brain, color: 'from-zion-cyan to-blue-500' },
    { id: 'it', name: 'IT Services', icon: Shield, color: 'from-green-500 to-emerald-500' },
    { id: 'saas', name: 'Micro SAAS', icon: Cpu, color: 'from-purple-500 to-pink-500' },
    { id: 'solutions', name: 'Industry Solutions', icon: HardDrive, color: 'from-orange-500 to-red-500' },
    { id: 'emerging', name: 'Emerging Tech', icon: Atom, color: 'from-indigo-500 to-purple-500' }
  ];

  const services = [
    // AI Services
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Platform',
      category: 'ai',
      description: 'Advanced AI-powered threat detection and response system with real-time monitoring',
      longDescription: 'Our AI Cybersecurity Platform leverages cutting-edge machine learning algorithms to detect, analyze, and respond to cyber threats in real-time. The system continuously learns from new threats, providing proactive protection for your organization.',
      features: [
        'Real-time threat detection and analysis',
        'AI behavioral analysis and anomaly detection',
        'Automated incident response and remediation',
        '24/7 monitoring and alerting',
        'Compliance reporting and audit trails',
        'Integration with existing security tools'
      ],
      benefits: [
        'Reduce false positives by 90%',
        'Cut incident response time by 75%',
        'Achieve 99.9% threat detection rate',
        'Comply with SOC2, ISO27001, and GDPR'
      ],
      pricing: {
        starter: '$2,999/month',
        professional: '$4,999/month',
        enterprise: 'Custom pricing'
      },
      icon: ShieldCheck,
      color: 'from-red-500 to-pink-500',
      link: '/services/ai-cybersecurity-platform',
      popular: true,
      marketPosition: 'Leading edge AI security solution',
      competitors: ['CrowdStrike', 'SentinelOne', 'Darktrace'],
      differentiator: 'Proprietary AI algorithms with 99.9% accuracy'
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Analytics Platform',
      category: 'ai',
      description: 'Predictive healthcare analytics and patient care optimization',
      longDescription: 'Transform healthcare delivery with our AI-powered analytics platform. Predict patient outcomes, optimize treatment plans, and improve operational efficiency while maintaining full HIPAA compliance.',
      features: [
        'Patient risk assessment and stratification',
        'Treatment optimization and recommendations',
        'Predictive diagnostics and early detection',
        'HIPAA-compliant data processing',
        'Real-time monitoring and alerts',
        'Integration with EHR systems'
      ],
      benefits: [
        'Improve patient outcomes by 30%',
        'Reduce readmission rates by 25%',
        'Optimize resource allocation by 40%',
        'Ensure full regulatory compliance'
      ],
      pricing: {
        starter: '$3,999/month',
        professional: '$6,999/month',
        enterprise: 'Custom pricing'
      },
      icon: Activity,
      color: 'from-blue-500 to-cyan-500',
      link: '/services/ai-healthcare-platform',
      popular: false,
      marketPosition: 'Innovative healthcare AI solution',
      competitors: ['IBM Watson Health', 'Google Health', 'Microsoft Healthcare'],
      differentiator: 'Specialized healthcare algorithms with clinical validation'
    },
    {
      id: 'ai-supply-chain',
      name: 'AI Supply Chain Optimization',
      category: 'ai',
      description: 'Intelligent supply chain management and optimization',
      longDescription: 'Revolutionize your supply chain with AI-powered optimization. Our platform provides real-time insights, predictive analytics, and automated decision-making to streamline operations and reduce costs.',
      features: [
        'Demand forecasting and planning',
        'Inventory optimization and management',
        'Route optimization and logistics',
        'Risk assessment and mitigation',
        'Cost analysis and optimization',
        'Supplier performance tracking'
      ],
      benefits: [
        'Reduce inventory costs by 20-30%',
        'Improve delivery times by 35%',
        'Cut supply chain costs by 25%',
        'Increase forecast accuracy by 40%'
      ],
      pricing: {
        starter: '$2,499/month',
        professional: '$4,499/month',
        enterprise: 'Custom pricing'
      },
      icon: Workflow,
      color: 'from-green-500 to-emerald-500',
      link: '/services/ai-supply-chain-optimization',
      popular: false,
      marketPosition: 'Advanced supply chain AI platform',
      competitors: ['Blue Yonder', 'Kinaxis', 'SAP Ariba'],
      differentiator: 'Real-time AI optimization with blockchain integration'
    },
    {
      id: 'ai-quantum',
      name: 'AI-Quantum Hybrid Platform',
      category: 'emerging',
      description: 'Next-generation quantum-AI hybrid computing platform',
      longDescription: 'Experience the future of computing with our revolutionary AI-Quantum Hybrid Platform. Combine the power of quantum computing with advanced AI to solve previously intractable problems.',
      features: [
        'Quantum algorithm optimization',
        'AI model acceleration',
        'Hybrid computing capabilities',
        'Research collaboration tools',
        'Custom development services',
        'Quantum-safe cryptography'
      ],
      benefits: [
        'Solve complex problems 1000x faster',
        'Accelerate AI training by 500x',
        'Enable breakthrough research',
        'Future-proof your technology stack'
      ],
      pricing: {
        starter: '$9,999/month',
        professional: '$19,999/month',
        enterprise: 'Custom pricing'
      },
      icon: Atom,
      color: 'from-purple-500 to-indigo-500',
      link: '/services/ai-quantum-hybrid-platform',
      popular: false,
      marketPosition: 'Cutting-edge quantum-AI platform',
      competitors: ['IBM Quantum', 'Google Quantum AI', 'Microsoft Quantum'],
      differentiator: 'First commercial hybrid quantum-AI platform'
    },

    // IT Services
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps Services',
      category: 'it',
      description: 'Comprehensive cloud infrastructure and DevOps automation',
      longDescription: 'Accelerate your digital transformation with our expert cloud and DevOps services. We help organizations migrate to the cloud, implement CI/CD pipelines, and optimize their infrastructure.',
      features: [
        'Cloud migration and strategy',
        'CI/CD pipeline implementation',
        'Infrastructure as Code (IaC)',
        'Monitoring and alerting setup',
        'Security and compliance',
        'Performance optimization'
      ],
      benefits: [
        'Reduce deployment time by 80%',
        'Cut infrastructure costs by 30%',
        'Improve system reliability by 99.9%',
        'Enable rapid scaling and growth'
      ],
      pricing: {
        starter: '$1,999/month',
        professional: '$3,999/month',
        enterprise: 'Custom pricing'
      },
      icon: Cloud,
      color: 'from-blue-500 to-indigo-500',
      link: '/services/cloud-devops',
      popular: false,
      marketPosition: 'Full-service cloud consulting',
      competitors: ['AWS Professional Services', 'Google Cloud Consulting', 'Microsoft Consulting'],
      differentiator: 'Multi-cloud expertise with cost optimization focus'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Services',
      category: 'it',
      description: 'Enterprise-grade cybersecurity and compliance solutions',
      longDescription: 'Protect your organization with our comprehensive cybersecurity services. From security audits to incident response, we provide end-to-end security solutions tailored to your needs.',
      features: [
        'Security audits and assessments',
        'Penetration testing and vulnerability scanning',
        'Compliance management (SOC2, ISO27001)',
        'Incident response and forensics',
        'Security training and awareness',
        'Threat intelligence and monitoring'
      ],
      benefits: [
        'Identify and fix security gaps',
        'Achieve compliance certifications',
        'Reduce security incident risk by 80%',
        'Build security-aware culture'
      ],
      pricing: {
        starter: '$2,999/month',
        professional: '$5,999/month',
        enterprise: 'Custom pricing'
      },
      icon: Lock,
      color: 'from-red-500 to-orange-500',
      link: '/services/cybersecurity',
      popular: false,
      marketPosition: 'Comprehensive security services',
      competitors: ['Deloitte', 'PwC', 'EY'],
      differentiator: 'Specialized cybersecurity with AI integration'
    },

    // Micro SAAS
    {
      id: 'ai-project-management',
      name: 'AI Project Management Platform',
      category: 'saas',
      description: 'Intelligent project management with AI-powered insights',
      longDescription: 'Transform your project management with AI-driven insights, automated task prioritization, and intelligent resource allocation. Our platform helps teams work smarter, not harder.',
      features: [
        'AI task prioritization and scheduling',
        'Resource optimization and allocation',
        'Risk prediction and mitigation',
        'Team collaboration tools',
        'Analytics and reporting dashboard',
        'Integration with popular tools'
      ],
      benefits: [
        'Increase project success rate by 40%',
        'Reduce project delays by 50%',
        'Improve team productivity by 35%',
        'Better resource utilization'
      ],
      pricing: {
        starter: '$99/month',
        professional: '$199/month',
        enterprise: '$399/month'
      },
      icon: Workflow,
      color: 'from-purple-500 to-pink-500',
      link: '/services/ai-project-management-platform',
      popular: true,
      marketPosition: 'AI-powered project management',
      competitors: ['Asana', 'Monday.com', 'ClickUp'],
      differentiator: 'AI-driven insights and automation'
    },
    {
      id: 'ai-hr-platform',
      name: 'AI HR Platform',
      category: 'saas',
      description: 'Comprehensive HR management with AI-powered recruitment',
      longDescription: 'Revolutionize your HR operations with our AI-powered platform. From recruitment to performance management, we provide intelligent solutions that streamline HR processes.',
      features: [
        'AI candidate matching and screening',
        'Performance analytics and tracking',
        'Employee engagement monitoring',
        'Compliance and policy management',
        'Integration APIs and webhooks',
        'Mobile-first design'
      ],
      benefits: [
        'Reduce time-to-hire by 60%',
        'Improve candidate quality by 40%',
        'Increase employee retention by 30%',
        'Streamline HR operations'
      ],
      pricing: {
        starter: '$149/month',
        professional: '$299/month',
        enterprise: '$599/month'
      },
      icon: Users,
      color: 'from-green-500 to-teal-500',
      link: '/services/ai-hr-platform',
      popular: false,
      marketPosition: 'Modern AI-powered HR platform',
      competitors: ['BambooHR', 'Workday', 'ADP'],
      differentiator: 'AI-driven recruitment and analytics'
    },

    // Industry Solutions
    {
      id: 'healthcare-solutions',
      name: 'Healthcare Technology Solutions',
      category: 'solutions',
      description: 'Comprehensive healthcare technology and compliance solutions',
      longDescription: 'Navigate the complex healthcare technology landscape with our specialized solutions. We help healthcare organizations implement secure, compliant, and efficient technology solutions.',
      features: [
        'HIPAA compliance and security',
        'Patient data protection',
        'Telemedicine platform development',
        'Medical device integration',
        'Regulatory compliance support',
        'Interoperability solutions'
      ],
      benefits: [
        'Ensure regulatory compliance',
        'Improve patient care quality',
        'Reduce administrative burden',
        'Enhance data security'
      ],
      pricing: {
        starter: '$3,999/month',
        professional: '$6,999/month',
        enterprise: 'Custom pricing'
      },
      icon: Activity,
      color: 'from-blue-500 to-cyan-500',
      link: '/solutions/healthcare',
      popular: false,
      marketPosition: 'Healthcare technology specialist',
      competitors: ['Epic Systems', 'Cerner', 'Allscripts'],
      differentiator: 'Modern, cloud-native healthcare solutions'
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing Solutions',
      category: 'emerging',
      description: 'Cutting-edge quantum computing applications and research',
      longDescription: 'Stay ahead of the curve with our quantum computing solutions. We help organizations explore and implement quantum computing applications for research, optimization, and innovation.',
      features: [
        'Quantum algorithm development',
        'Research collaboration and support',
        'Custom quantum applications',
        'Training and education programs',
        'Consulting and strategy',
        'Quantum-safe cryptography'
      ],
      benefits: [
        'Solve previously intractable problems',
        'Accelerate research and development',
        'Gain competitive advantage',
        'Future-proof your technology'
      ],
      pricing: {
        starter: '$7,999/month',
        professional: '$14,999/month',
        enterprise: 'Custom pricing'
      },
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      link: '/solutions/quantum-computing',
      popular: false,
      marketPosition: 'Quantum computing pioneer',
      competitors: ['IBM Quantum', 'Google Quantum AI', 'Microsoft Quantum'],
      differentiator: 'Commercial quantum applications and consulting'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Services Showcase 2025 - Zion Tech Group"
        description="Explore our comprehensive suite of AI services, IT solutions, and micro SAAS platforms. Cutting-edge technology solutions for modern businesses."
        keywords="AI services, IT solutions, micro SAAS, cybersecurity, healthcare, quantum computing, cloud services"
      />

      {/* Header */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Services Showcase
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
              {" "}2025
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto"
          >
            Discover our comprehensive suite of cutting-edge AI services, IT solutions, and innovative micro SAAS platforms. 
            Each service is designed to transform your business and drive innovation.
          </motion.p>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            <div className="flex items-center space-x-2 text-zion-slate-light">
              <Phone className="w-5 h-5 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2 text-zion-slate-light">
              <Mail className="w-5 h-5 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2 text-zion-slate-light">
              <MapPin className="w-5 h-5 text-zion-cyan" />
              <span>Middletown, DE 19709</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap justify-center gap-4 mb-12 px-4"
      >
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-zion-blue-dark text-zion-slate-light hover:bg-zion-purple/20 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{category.name}</span>
            </button>
          );
        })}
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/10 cursor-pointer ${
                  service.popular ? 'ring-2 ring-zion-cyan' : ''
                }`}
                onClick={() => handleServiceClick(service)}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-zion-slate-light text-sm">{service.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="w-4 h-4 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-zion-slate-light text-xs">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-center">
                      <span className="text-zion-cyan text-sm">+{service.features.length - 3} more features</span>
                    </div>
                  )}
                </div>

                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-white mb-1">
                    {service.pricing.starter}
                  </div>
                  <div className="text-zion-slate-light text-sm">Starting from</div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-center py-2 px-4 rounded-lg text-sm font-medium hover:from-zion-cyan-light hover:to-zion-purple transition-all duration-300">
                    Learn More
                  </button>
                  <button className="flex-1 bg-transparent border border-zion-purple text-zion-purple text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-zion-purple hover:text-white transition-all duration-300">
                    Get Quote
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${selectedService.color} rounded-xl flex items-center justify-center`}>
                  <selectedService.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedService.name}</h2>
                  <p className="text-zion-slate-light">{selectedService.description}</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-zion-slate-light hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Description</h3>
                <p className="text-zion-slate-light mb-6">{selectedService.longDescription}</p>

                <h3 className="text-lg font-semibold text-white mb-4">Features</h3>
                <ul className="space-y-2 mb-6">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-lg font-semibold text-white mb-4">Benefits</h3>
                <ul className="space-y-2 mb-6">
                  {selectedService.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <TrendingUp className="w-5 h-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-zion-slate-light">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Pricing</h3>
                <div className="space-y-3 mb-6">
                  {Object.entries(selectedService.pricing).map(([plan, price]) => (
                    <div key={plan} className="flex justify-between items-center p-3 bg-zion-blue border border-zion-purple/20 rounded-lg">
                      <span className="text-zion-slate-light capitalize">{plan}</span>
                      <span className="text-white font-semibold">{price}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-white mb-4">Market Position</h3>
                <p className="text-zion-slate-light mb-4">{selectedService.marketPosition}</p>

                <h3 className="text-lg font-semibold text-white mb-4">Competitors</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedService.competitors.map((competitor, index) => (
                    <span key={index} className="px-3 py-1 bg-zion-blue border border-zion-purple/20 rounded-full text-zion-slate-light text-sm">
                      {competitor}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-white mb-4">Key Differentiator</h3>
                <p className="text-zion-slate-light mb-6">{selectedService.differentiator}</p>

                <div className="space-y-3">
                  <a
                    href={selectedService.link}
                    className="block w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-center py-3 px-4 rounded-lg font-medium hover:from-zion-cyan-light hover:to-zion-purple transition-all duration-300"
                  >
                    View Service Details
                  </a>
                  <a
                    href="/contact"
                    className="block w-full bg-transparent border border-zion-purple text-zion-purple text-center py-3 px-4 rounded-lg font-medium hover:bg-zion-purple hover:text-white transition-all duration-300"
                  >
                    Get Custom Quote
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-zion-blue-dark border-t border-zion-purple/30 py-16"
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Let's discuss how our innovative services can help you achieve your goals. 
            Our team of experts is ready to provide personalized solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-medium hover:from-zion-cyan-light hover:to-zion-purple transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/25"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center space-x-2 bg-transparent border border-zion-purple text-zion-purple px-8 py-4 rounded-lg font-medium hover:bg-zion-purple hover:text-white transition-all duration-300"
            >
              <span>View Pricing</span>
              <DollarSign className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}