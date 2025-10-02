import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, Bot, BarChart3, Shield, Cloud, Database,
  Smartphone, Globe, Cpu, Lock, Users, FileText,
  TrendingUp, Settings, Headphones, Code,
  Brain, Target, CheckCircle, Star,
  Mail, MessageCircle
} from 'lucide-react';

const ComprehensiveServices: React.FC = () => {
  const microSaasServices = [
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator Pro',
      description: 'Generate high-quality blog posts, social media content, and marketing copy with advanced AI. Includes SEO optimization and brand voice training.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice training', 'Content scheduling', 'Analytics dashboard'],
      pricing: 'Starting at $29/month',
      icon: FileText,
      color: 'from-blue-600 to-purple-600',
      link: '/services/ai-content-generator'
    },
    {
      id: 'smart-appointment-scheduler',
      title: 'Smart Appointment Scheduler',
      description: 'Healthcare-focused SaaS for online appointments, virtual consultations, patient data management, and automated reminders.',
      features: ['Virtual consultations', 'Patient data storage', 'Automated reminders', 'Payment integration', 'Calendar sync'],
      pricing: 'Starting at $49/month',
      icon: Users,
      color: 'from-green-600 to-teal-600',
      link: '/services/smart-appointment-scheduler'
    },
    {
      id: 'ai-email-marketing',
      title: 'AI Email Marketing Platform',
      description: 'Transform your email marketing with AI-powered personalization, automation, and analytics. 300% increase in open rates and 250% ROI improvement.',
      features: ['AI content generation', 'Smart segmentation', 'Predictive analytics', 'Automated campaigns', 'Optimal timing'],
      pricing: 'Starting at $79/month',
      icon: Mail,
      color: 'from-emerald-600 to-green-600',
      link: '/services/ai-email-marketing'
    },
    {
      id: 'api-integration-hub',
      title: 'API Integration Hub',
      description: 'Connect your software with 500+ platforms and services. Pre-built connectors, custom integrations, and real-time data sync.',
      features: ['500+ pre-built connectors', 'Custom integrations', 'Real-time sync', 'Error handling', 'Analytics'],
      pricing: 'Starting at $39/month',
      icon: Code,
      color: 'from-orange-600 to-red-600',
      link: '/services/api-integration-hub'
    },
    {
      id: 'remote-collaboration-suite',
      title: 'Remote Collaboration Suite',
      description: 'All-in-one platform combining video conferencing, project management, and team messaging for distributed teams.',
      features: ['HD video conferencing', 'Project management', 'Team messaging', 'File sharing', 'Screen sharing'],
      pricing: 'Starting at $19/user/month',
      icon: Globe,
      color: 'from-purple-600 to-pink-600',
      link: '/services/remote-collaboration-suite'
    },
    {
      id: 'smart-contract-audit',
      title: 'Smart Contract Audit Service',
      description: 'Professional smart contract auditing with 99.8% vulnerability detection rate. Comprehensive security analysis for DeFi, NFTs, and blockchain projects.',
      features: ['99.8% vulnerability detection', '5-10 day delivery', '50+ audits completed', '100% compliance', 'Expert team'],
      pricing: 'Starting at $2,500',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      link: '/services/smart-contract-audit'
    }
  ];

  const aiServices = [
    {
      id: 'ai-workflow-automation',
      title: 'AI Workflow Automation',
      description: 'Transform your business processes with intelligent automation that reduces costs by 75% and increases efficiency by 10x.',
      features: ['Process mining', 'RPA integration', 'Machine learning models', 'Real-time monitoring', 'Custom workflows'],
      pricing: 'Custom pricing',
      icon: Zap,
      color: 'from-blue-600 to-purple-600',
      link: '/services/ai-workflow-automation'
    },
    {
      id: 'ai-virtual-assistant',
      title: 'AI Virtual Assistant',
      description: 'Deploy AI-powered virtual assistants that handle customer inquiries 24/7 with 95% accuracy and multilingual support.',
      features: ['24/7 availability', '95% accuracy rate', 'Multilingual support', 'CRM integration', 'Voice & text'],
      pricing: 'Starting at $199/month',
      icon: Bot,
      color: 'from-purple-600 to-pink-600',
      link: '/services/ai-virtual-assistant'
    },
    {
      id: 'ai-predictive-analytics',
      title: 'AI Predictive Analytics',
      description: 'Transform your business with advanced AI predictive analytics that deliver 94% accuracy in forecasting, customer behavior prediction, and risk assessment.',
      features: ['94% prediction accuracy', 'Real-time forecasting', 'Customer lifetime value', 'Revenue forecasting', 'Risk assessment']
      pricing: 'Starting at $299/month',
      icon: BarChart3,
      color: 'from-indigo-600 to-purple-600',
      link: '/services/ai-predictive-analytics'
    },
    {
      id: 'conversational-ai',
      title: 'Conversational AI',
      description: 'Deploy advanced conversational AI with 96% accuracy, 150+ language support, and multi-modal conversations for customer support, sales, and engagement.',
      features: ['96% conversation accuracy', '150+ languages', 'Multi-modal support', 'Real-time processing', 'Enterprise security'],
      pricing: 'Starting at $399/month',
      icon: MessageCircle,
      color: 'from-violet-600 to-pink-600',
      link: '/services/conversational-ai'
    },
    {
      id: 'ai-data-analytics',
      title: 'AI Data Analytics Platform',
      description: 'Turn raw data into actionable insights with advanced machine learning, predictive analytics, and automated reporting.'
      features: ['Predictive analytics', 'Automated reporting', 'Real-time dashboards', 'Data visualization', 'ML models'],
      pricing: 'Starting at $299/month',
      icon: BarChart3,
      color: 'from-green-600 to-teal-600',
      link: '/services/ai-data-analytics'
    },
    {
      id: 'edge-computing-ai',
      title: 'Edge Computing AI',
      description: 'Deploy AI at the edge for real-time processing with sub-10ms response times. Transform IoT, industrial, and smart city applications.'
      features: ['Sub-10ms response times', 'Offline capability', '90% latency reduction', 'Unlimited scale', 'Real-time analytics']
      pricing: 'Starting at $1,999/month',
      icon: Cpu,
      color: 'from-teal-600 to-blue-600',
      link: '/services/edge-computing-ai'
    },
    {
      id: 'ai-document-processing',
      title: 'Intelligent Document Processing',
      description: 'Extract, classify, and process documents automatically with 99% accuracy using advanced OCR and NLP technologies.'
      features: ['99% accuracy', 'OCR technology', 'NLP processing', 'Document classification', 'Data extraction']
      pricing: 'Starting at $149/month',
      icon: FileText,
      color: 'from-indigo-600 to-blue-600',
      link: '/services/ai-document-processing'
    },
    {
      id: 'ai-cognitive-automation',
      title: 'Real-Time Cognitive Automation',
      description: 'Advanced AI system that learns and adapts to your business processes in real-time, optimizing performance continuously.'
      features: ['Real-time learning', 'Adaptive algorithms', 'Performance optimization', 'Self-healing systems', 'Continuous improvement']
      pricing: 'Custom pricing',
      icon: Brain,
      color: 'from-cyan-600 to-blue-600',
      link: '/services/ai-cognitive-automation'
    },
    {
      id: 'ai-cybersecurity',
      title: 'Advanced Cybersecurity AI',
      description: 'AI-powered security solutions that detect and prevent threats in real-time with advanced behavioral analysis.'
      features: ['Real-time threat detection', 'Behavioral analysis', 'Automated response', 'Threat intelligence', 'Compliance monitoring']
      pricing: 'Starting at $399/month',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      link: '/services/ai-cybersecurity'
    }
  ];

  const itServices = [
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Services'
      description: 'Seamless migration to cloud platforms with zero downtime. AWS, Azure, and GCP certified experts.'
      features: ['Zero downtime migration', 'Multi-cloud support', 'Cost optimization', 'Security compliance', '24/7 support']
      pricing: 'Starting at $5,000',
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600',
      link: '/services/cloud-migration'
    },
    {
      id: 'devops-automation',
      title: 'DevOps Automation'
      description: 'Complete DevOps transformation with CI/CD pipelines, infrastructure as code, and automated testing.'
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Automated testing', 'Monitoring & alerting', 'Security scanning']
      pricing: 'Starting at $3,000/month',
      icon: Settings,
      color: 'from-green-600 to-emerald-600',
      link: '/services/devops-automation'
    },
    {
      id: 'database-optimization',
      title: 'Database Optimization'
      description: 'Optimize database performance, implement backup strategies, and ensure data security and compliance.'
      features: ['Performance tuning', 'Backup strategies', 'Data security', 'Compliance', 'Monitoring']
      pricing: 'Starting at $2,500',
      icon: Database,
      color: 'from-purple-600 to-violet-600',
      link: '/services/database-optimization'
    },
    {
      id: 'mobile-app-development',
      title: 'Mobile App Development'
      description: 'Native and cross-platform mobile app development with modern frameworks and best practices.'
      features: ['Native & cross-platform', 'Modern frameworks', 'App store optimization', 'Performance optimization', 'Maintenance']
      pricing: 'Starting at $15,000',
      icon: Smartphone,
      color: 'from-pink-600 to-rose-600',
      link: '/services/mobile-app-development'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Solutions'
      description: 'Cutting-edge quantum computing services for optimization, cryptography, and advanced simulations.'
      features: ['Quantum algorithms', 'Cryptography', 'Optimization problems', 'Simulation', 'Research & development']
      pricing: 'Custom pricing',
      icon: Cpu,
      color: 'from-indigo-600 to-purple-600',
      link: '/services/quantum-computing'
    },
    {
      id: 'blockchain-web3',
      title: 'Blockchain & Web3 Development'
      description: 'Smart contracts, DeFi solutions, NFT platforms, and blockchain infrastructure development.'
      features: ['Smart contracts', 'DeFi solutions', 'NFT platforms', 'Blockchain infrastructure', 'Token development']
      pricing: 'Starting at $10,000',
      icon: Lock,
      color: 'from-yellow-600 to-orange-600',
      link: '/services/blockchain-web3'
    }
  ];

  const ServiceCard = ({ service }: { service: any }) => {
    const Icon = service.icon;
    return (
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
        <div className={`bg-gradient-to-br ${service.color} p-6 text-white`}>
          <Icon className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="text-white/90 mb-4">{service.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
              {service.pricing}
            </span>
            <Link 
              to={service.link}
              className="text-white hover:text-white/80 transition-colors"
            >
              Learn More →
            </Link>
          </div>
        </div>
        <div className="p-6">
          <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {service.features.map((feature: string, index: number) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Comprehensive <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our full range of cutting-edge AI, micro SaaS, and IT solutions designed to transform your business operations and drive measurable results.
          </p>
          
          {/* Contact CTA */}
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6">Contact us today for a free consultation and custom pricing.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
              >
                Email Us
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              364 E Main St STE 1008, Middletown, DE 19709
            </p>
          </div>
        </div>

        {/* Micro SaaS Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Micro SaaS Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized software-as-a-service solutions designed for specific business needs with affordable pricing and quick deployment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* AI Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI & Machine Learning Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced artificial intelligence solutions that automate processes, analyze data, and provide intelligent insights for your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* IT Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">IT & Technology Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT services including cloud migration, DevOps automation, and cutting-edge technology implementations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional value through innovation, expertise, and customer-focused solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Expertise</h3>
              <p className="text-gray-600">10+ years of experience in AI and IT solutions</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Measurable Results</h3>
              <p className="text-gray-600">Average 75% cost reduction and 10x efficiency gains</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock technical support and maintenance</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailored solutions designed for your specific needs</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our technology solutions can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
              >
                Email Us Today
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ComprehensiveServices;