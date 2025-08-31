import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Users, 
  Globe, 
  Cpu, 
  Lock, 
  ShoppingCart, 
  MessageCircle, 
  BookOpen, 
  DollarSign, 
  Gauge, 
  HelpCircle, 
  Target, 
  Lightbulb, 
  Database, 
  Network, 
  Eye, 
  Heart, 
  Smartphone, 
  Monitor, 
  Server, 
  Atom, 
  Car, 
  Scale, 
  Leaf, 
  Factory, 
  Building, 
  Clock, 
  Phone, 
  Mail, 
  MapPin, 
  TrendingUp, 
  Bot, 
  Rocket,
  Microscope,
  Satellite,
  Wifi,
  ShieldCheck,
  FileText,
  BarChart3,
  PieChart,
  Activity,
  Zap,
  Cpu,
  Database,
  Globe2,
  Smartphone,
  Monitor,
  Server,
  Atom,
  Car,
  Scale,
  Leaf,
  Factory,
  Building,
  Clock,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Bot,
  Rocket,
  Microscope,
  Satellite,
  Wifi,
  ShieldCheck,
  FileText,
  BarChart3,
  PieChart,
  Activity,
  Zap,
  Cpu,
  Database,
  Globe2,
  Smartphone,
  Monitor,
  Server,
  Atom,
  Car,
  Scale,
  Leaf,
  Factory,
  Building,
  Clock,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Bot,
  Rocket,
  Microscope,
  Satellite,
  Wifi,
  ShieldCheck,
  FileText,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';

export default function InnovativeAIServicesShowcase2025() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-cyan-500 to-blue-500' },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, color: 'from-indigo-500 to-purple-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'healthcare', name: 'Healthcare Tech', icon: Heart, color: 'from-pink-500 to-rose-500' },
    { id: 'fintech', name: 'Financial Tech', icon: DollarSign, color: 'from-green-500 to-emerald-500' },
    { id: 'iot-edge', name: 'IoT & Edge', icon: Cpu, color: 'from-teal-500 to-cyan-500' },
    { id: 'blockchain', name: 'Blockchain', icon: Lock, color: 'from-yellow-500 to-orange-500' },
    { id: 'micro-saas', name: 'Micro SaaS', icon: Cloud, color: 'from-blue-500 to-indigo-500' },
    { id: 'sustainability', name: 'Sustainability', icon: Leaf, color: 'from-emerald-500 to-teal-500' }
  ];

  const innovativeServices = [
    // AI & Machine Learning Services
    {
      id: 'ai-autonomous-research-assistant',
      name: 'AI Autonomous Research Assistant',
      category: 'ai-ml',
      description: 'Advanced AI-powered research automation platform that conducts comprehensive research, analyzes data, and generates insights autonomously.',
      features: [
        'Natural Language Processing for research queries',
        'Automated data collection from multiple sources',
        'Intelligent data analysis and pattern recognition',
        'Automated report generation with insights',
        'Multi-language support for global research',
        'Integration with academic databases and journals',
        'Real-time research updates and notifications',
        'Collaborative research workspace'
      ],
      benefits: [
        'Reduce research time by 80%',
        'Improve research accuracy and comprehensiveness',
        'Enable 24/7 autonomous research operations',
        'Facilitate cross-disciplinary research insights',
        'Automate literature reviews and meta-analyses'
      ],
      pricing: '$299/month',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      link: '/services/ai-autonomous-research-assistant',
      marketPrice: '$500-800/month',
      competitors: ['OpenAI Research', 'Anthropic Claude', 'Google Research AI']
    },
    {
      id: 'ai-cybersecurity-platform',
      name: 'AI Cybersecurity Platform',
      category: 'cybersecurity',
      description: 'Next-generation AI-powered cybersecurity platform that provides real-time threat detection, automated response, and predictive security analytics.',
      features: [
        'AI-powered threat detection and analysis',
        'Behavioral analytics for anomaly detection',
        'Automated incident response and remediation',
        'Predictive security analytics',
        'Zero-day threat prevention',
        'Advanced malware detection and analysis',
        'Security orchestration and automation',
        'Compliance monitoring and reporting'
      ],
      benefits: [
        'Detect threats 10x faster than traditional methods',
        'Reduce false positives by 90%',
        'Automate 85% of security responses',
        'Provide 24/7 security monitoring',
        'Ensure compliance with industry standards'
      ],
      pricing: '$399/month',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      link: '/services/ai-cybersecurity-platform',
      marketPrice: '$600-1200/month',
      competitors: ['CrowdStrike', 'SentinelOne', 'Darktrace']
    },
    {
      id: 'ai-healthcare-platform',
      name: 'AI Healthcare Analytics Platform',
      category: 'healthcare',
      description: 'Comprehensive AI platform for healthcare analytics, patient monitoring, and predictive medicine with HIPAA compliance.',
      features: [
        'AI-powered patient data analysis',
        'Predictive disease modeling and risk assessment',
        'Real-time patient monitoring and alerts',
        'Medical image analysis and diagnosis support',
        'Drug interaction and side effect prediction',
        'Population health analytics and trends',
        'Clinical decision support system',
        'HIPAA-compliant data security'
      ],
      benefits: [
        'Improve diagnostic accuracy by 25%',
        'Reduce patient readmission rates by 30%',
        'Enable early disease detection and prevention',
        'Optimize treatment plans and outcomes',
        'Reduce healthcare costs through predictive analytics'
      ],
      pricing: '$299/month',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      link: '/services/ai-healthcare-platform',
      marketPrice: '$400-800/month',
      competitors: ['Epic Systems', 'Cerner', 'IBM Watson Health']
    },
    {
      id: 'ai-quantum-hybrid-platform',
      name: 'AI Quantum Hybrid Platform',
      category: 'quantum',
      description: 'Revolutionary hybrid quantum-classical computing platform that combines quantum processing with classical AI for unprecedented computational power.',
      features: [
        'Hybrid quantum-classical computing architecture',
        'Quantum machine learning algorithms',
        'Quantum optimization for complex problems',
        'Quantum cryptography and security',
        'Quantum simulation capabilities',
        'Classical AI integration and orchestration',
        'Scalable quantum computing resources',
        'Real-time quantum-classical workflow management'
      ],
      benefits: [
        'Solve complex problems 1000x faster',
        'Enable breakthroughs in drug discovery and materials science',
        'Revolutionize financial modeling and optimization',
        'Advance AI capabilities beyond current limitations',
        'Provide quantum advantage for specific applications'
      ],
      pricing: '$999/month',
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      link: '/services/ai-quantum-hybrid-platform',
      marketPrice: '$1500-3000/month',
      competitors: ['IBM Quantum', 'Google Quantum AI', 'Microsoft Azure Quantum']
    },
    {
      id: 'ai-supply-chain-optimization',
      name: 'AI Supply Chain Optimization',
      category: 'ai-ml',
      description: 'Intelligent supply chain optimization platform that uses AI to predict demand, optimize inventory, and streamline logistics operations.',
      features: [
        'AI-powered demand forecasting and planning',
        'Dynamic inventory optimization',
        'Route optimization and logistics planning',
        'Supplier performance analytics',
        'Risk assessment and mitigation',
        'Real-time supply chain visibility',
        'Automated procurement recommendations',
        'Sustainability and cost optimization'
      ],
      benefits: [
        'Reduce inventory costs by 20-30%',
        'Improve delivery times by 25%',
        'Reduce supply chain disruptions by 40%',
        'Optimize supplier relationships and costs',
        'Enhance sustainability and compliance'
      ],
      pricing: '$249/month',
      icon: Factory,
      color: 'from-blue-500 to-cyan-500',
      link: '/services/ai-supply-chain-optimization',
      marketPrice: '$300-600/month',
      competitors: ['SAP Ariba', 'Oracle Supply Chain', 'Blue Yonder']
    },
    {
      id: 'ai-customer-experience-analytics',
      name: 'AI Customer Experience Analytics',
      category: 'ai-ml',
      description: 'Advanced customer experience analytics platform that uses AI to understand customer behavior, predict churn, and optimize engagement strategies.',
      features: [
        'Real-time customer behavior tracking',
        'AI-powered sentiment analysis',
        'Predictive churn modeling',
        'Customer journey mapping and optimization',
        'Personalization and recommendation engines',
        'Multi-channel experience analytics',
        'Customer lifetime value prediction',
        'Automated customer service optimization'
      ],
      benefits: [
        'Increase customer retention by 35%',
        'Improve customer satisfaction scores by 40%',
        'Reduce customer acquisition costs by 25%',
        'Enable personalized customer experiences',
        'Optimize customer service operations'
      ],
      pricing: '$179/month',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      link: '/services/ai-customer-experience-analytics',
      marketPrice: '$250-500/month',
      competitors: ['Adobe Analytics', 'Google Analytics 360', 'Mixpanel']
    },
    {
      id: 'ai-financial-trading-platform',
      name: 'AI Financial Trading Platform',
      category: 'fintech',
      description: 'Sophisticated AI-powered financial trading platform that provides algorithmic trading, risk management, and market analysis.',
      features: [
        'AI-powered market analysis and prediction',
        'Algorithmic trading strategies',
        'Real-time risk management and monitoring',
        'Portfolio optimization and rebalancing',
        'Market sentiment analysis',
        'Automated trade execution',
        'Comprehensive reporting and analytics',
        'Regulatory compliance monitoring'
      ],
      benefits: [
        'Improve trading performance by 15-25%',
        'Reduce trading risks through AI analysis',
        'Enable 24/7 automated trading operations',
        'Optimize portfolio allocation and returns',
        'Ensure regulatory compliance and risk management'
      ],
      pricing: '$599/month',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      link: '/services/ai-financial-trading-platform',
      marketPrice: '$800-1500/month',
      competitors: ['Bloomberg Terminal', 'Thomson Reuters', 'FactSet']
    },
    {
      id: 'ai-project-management-platform',
      name: 'AI Project Management Platform',
      category: 'ai-ml',
      description: 'Intelligent project management platform that uses AI to optimize resource allocation, predict project risks, and improve team collaboration.',
      features: [
        'AI-powered project planning and scheduling',
        'Resource optimization and allocation',
        'Risk prediction and mitigation',
        'Team performance analytics',
        'Automated task assignment and prioritization',
        'Real-time project monitoring and alerts',
        'Predictive project completion analysis',
        'Integration with popular project tools'
      ],
      benefits: [
        'Improve project completion rates by 30%',
        'Reduce project delays by 40%',
        'Optimize resource utilization by 25%',
        'Enhance team collaboration and productivity',
        'Enable data-driven project decisions'
      ],
      pricing: '$199/month',
      icon: Target,
      color: 'from-orange-500 to-red-500',
      link: '/services/ai-project-management-platform',
      marketPrice: '$250-500/month',
      competitors: ['Asana', 'Monday.com', 'ClickUp']
    },
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation Platform',
      category: 'ai-ml',
      description: 'Advanced workflow automation platform that uses AI to streamline business processes, reduce manual work, and improve operational efficiency.',
      features: [
        'AI-powered process discovery and mapping',
        'Intelligent workflow design and optimization',
        'Automated task execution and routing',
        'Process performance analytics and insights',
        'Integration with enterprise systems',
        'Custom automation rules and triggers',
        'Real-time workflow monitoring',
        'Scalable automation architecture'
      ],
      benefits: [
        'Reduce manual work by 60-80%',
        'Improve process efficiency by 40%',
        'Reduce errors and compliance risks',
        'Enable 24/7 automated operations',
        'Scale operations without proportional headcount increase'
      ],
      pricing: '$149/month',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      link: '/services/ai-workflow-automation',
      marketPrice: '$200-400/month',
      competitors: ['UiPath', 'Automation Anywhere', 'Blue Prism']
    },
    {
      id: 'ai-content-optimizer-pro',
      name: 'AI Content Optimizer Pro',
      category: 'ai-ml',
      description: 'Professional AI content optimization platform that enhances content quality, SEO performance, and engagement through intelligent analysis.',
      features: [
        'AI-powered content quality analysis',
        'SEO optimization recommendations',
        'Content performance prediction',
        'Multi-language content optimization',
        'Brand voice and tone consistency',
        'Content plagiarism detection',
        'Automated content enhancement',
        'Performance analytics and insights'
      ],
      benefits: [
        'Improve content engagement by 45%',
        'Boost SEO rankings by 30%',
        'Reduce content creation time by 50%',
        'Ensure brand consistency across all content',
        'Optimize content for target audiences'
      ],
      pricing: '$79/month',
      icon: FileText,
      color: 'from-blue-500 to-indigo-500',
      link: '/services/ai-content-optimizer-pro',
      marketPrice: '$100-200/month',
      competitors: ['Grammarly', 'Hemingway Editor', 'Surfer SEO']
    },
    {
      id: 'ai-devops-automation-platform',
      name: 'AI DevOps Automation Platform',
      category: 'ai-ml',
      description: 'Intelligent DevOps automation platform that uses AI to optimize deployment pipelines, monitor system health, and predict infrastructure issues.',
      features: [
        'AI-powered deployment optimization',
        'Intelligent infrastructure monitoring',
        'Predictive issue detection and resolution',
        'Automated scaling and resource management',
        'Performance optimization recommendations',
        'Security vulnerability scanning',
        'Compliance monitoring and reporting',
        'Integration with popular DevOps tools'
      ],
      benefits: [
        'Reduce deployment failures by 70%',
        'Improve system performance by 35%',
        'Reduce infrastructure costs by 25%',
        'Enable proactive issue resolution',
        'Ensure continuous compliance and security'
      ],
      pricing: '$199/month',
      icon: Server,
      color: 'from-teal-500 to-cyan-500',
      link: '/services/ai-devops-automation-platform',
      marketPrice: '$300-600/month',
      competitors: ['GitLab', 'Jenkins', 'CircleCI']
    },
    {
      id: 'ai-iot-edge-computing-platform',
      name: 'AI IoT Edge Computing Platform',
      category: 'iot-edge',
      description: 'Advanced IoT edge computing platform that brings AI processing to the edge for real-time decision making and reduced latency.',
      features: [
        'Edge AI processing and inference',
        'Real-time data analysis and decision making',
        'Intelligent device management and monitoring',
        'Predictive maintenance and analytics',
        'Secure edge-to-cloud communication',
        'Scalable edge computing architecture',
        'Integration with IoT devices and sensors',
        'Edge security and privacy protection'
      ],
      benefits: [
        'Reduce latency by 90% for real-time applications',
        'Lower bandwidth costs by 60%',
        'Enable offline AI processing capabilities',
        'Improve privacy and data security',
        'Scale IoT deployments efficiently'
      ],
      pricing: '$279/month',
      icon: Cpu,
      color: 'from-emerald-500 to-teal-500',
      link: '/services/ai-iot-edge-computing-platform',
      marketPrice: '$400-800/month',
      competitors: ['AWS IoT Greengrass', 'Azure IoT Edge', 'Google Cloud IoT']
    },
    {
      id: 'blockchain-enterprise-solutions',
      name: 'Blockchain Enterprise Solutions',
      category: 'blockchain',
      description: 'Enterprise-grade blockchain solutions that provide secure, transparent, and efficient business processes with smart contract automation.',
      features: [
        'Enterprise blockchain infrastructure',
        'Smart contract development and deployment',
        'Decentralized application (DApp) development',
        'Cross-chain interoperability solutions',
        'Regulatory compliance and governance',
        'Performance optimization and scaling',
        'Integration with enterprise systems',
        'Comprehensive security and audit tools'
      ],
      benefits: [
        'Reduce transaction costs by 40-60%',
        'Improve transparency and traceability',
        'Enable secure and immutable record keeping',
        'Automate complex business processes',
        'Ensure regulatory compliance and auditability'
      ],
      pricing: '$349/month',
      icon: Lock,
      color: 'from-yellow-500 to-orange-500',
      link: '/services/blockchain-enterprise-solutions',
      marketPrice: '$500-1000/month',
      competitors: ['IBM Blockchain', 'Microsoft Azure Blockchain', 'Amazon Managed Blockchain']
    },
    {
      id: 'green-it-solutions',
      name: 'Green IT Solutions',
      category: 'sustainability',
      description: 'Sustainable technology solutions that help organizations reduce their environmental impact while improving operational efficiency.',
      features: [
        'Energy-efficient infrastructure optimization',
        'Carbon footprint monitoring and reduction',
        'Sustainable data center solutions',
        'Green software development practices',
        'Renewable energy integration',
        'Waste reduction and recycling programs',
        'Environmental compliance monitoring',
        'Sustainability reporting and analytics'
      ],
      benefits: [
        'Reduce energy costs by 25-40%',
        'Lower carbon footprint by 30-50%',
        'Improve corporate sustainability ratings',
        'Meet environmental compliance requirements',
        'Enhance brand reputation and customer loyalty'
      ],
      pricing: '$199/month',
      icon: Leaf,
      color: 'from-emerald-500 to-teal-500',
      link: '/services/green-it-solutions',
      marketPrice: '$250-500/month',
      competitors: ['Dell Green IT', 'HP Sustainable IT', 'Lenovo Green Technology']
    },
    {
      id: 'micro-crm-platform',
      name: 'Micro CRM Platform',
      category: 'micro-saas',
      description: 'Lightweight, affordable CRM solution designed specifically for small businesses and startups with essential customer management features.',
      features: [
        'Contact and lead management',
        'Sales pipeline tracking',
        'Email integration and automation',
        'Basic reporting and analytics',
        'Mobile app access',
        'Team collaboration tools',
        'Integration with popular tools',
        'Affordable pricing for small teams'
      ],
      benefits: [
        'Reduce customer acquisition costs by 20%',
        'Improve customer retention by 25%',
        'Streamline sales processes and workflows',
        'Enable better customer relationship management',
        'Affordable solution for small businesses'
      ],
      pricing: '$29/month',
      icon: Users,
      color: 'from-blue-500 to-indigo-500',
      link: '/services/micro-crm',
      marketPrice: '$50-100/month',
      competitors: ['HubSpot', 'Salesforce', 'Pipedrive']
    },
    {
      id: 'employee-scheduling-saas',
      name: 'Employee Scheduling SaaS',
      category: 'micro-saas',
      description: 'Intelligent employee scheduling platform that optimizes workforce management, reduces scheduling conflicts, and improves employee satisfaction.',
      features: [
        'AI-powered shift optimization',
        'Employee availability tracking',
        'Automated scheduling algorithms',
        'Mobile app for employees',
        'Time tracking and attendance',
        'Overtime and compliance monitoring',
        'Integration with payroll systems',
        'Real-time schedule updates'
      ],
      benefits: [
        'Reduce scheduling conflicts by 80%',
        'Improve employee satisfaction by 30%',
        'Reduce administrative overhead by 50%',
        'Ensure compliance with labor laws',
        'Optimize workforce utilization'
      ],
      pricing: '$39/month',
      icon: Clock,
      color: 'from-purple-500 to-pink-500',
      link: '/services/employee-scheduling-saas',
      marketPrice: '$60-120/month',
      competitors: ['When I Work', 'Sling', 'Homebase']
    },
    {
      id: 'returns-management-saas',
      name: 'Returns Management SaaS',
      category: 'micro-saas',
      description: 'Comprehensive returns management platform for e-commerce businesses that streamlines the returns process and improves customer experience.',
      features: [
        'Automated returns processing',
        'Return reason analysis and reporting',
        'Customer self-service portal',
        'Integration with e-commerce platforms',
        'Return shipping label generation',
        'Refund processing automation',
        'Returns analytics and insights',
        'Customer communication tools'
      ],
      benefits: [
        'Reduce returns processing time by 60%',
        'Improve customer satisfaction by 35%',
        'Reduce return fraud and abuse',
        'Optimize inventory management',
        'Increase customer lifetime value'
      ],
      pricing: '$49/month',
      icon: ShoppingCart,
      color: 'from-orange-500 to-red-500',
      link: '/services/returns-management-saas',
      marketPrice: '$80-150/month',
      competitors: ['ReturnLogic', 'Happy Returns', 'Returnly']
    },
    {
      id: 'mobile-survey-tool',
      name: 'Mobile Survey Tool',
      category: 'micro-saas',
      description: 'Mobile-first survey platform that enables businesses to collect customer feedback, measure satisfaction, and gain actionable insights.',
      features: [
        'Mobile-optimized survey design',
        'Multi-channel survey distribution',
        'Real-time response collection',
        'Advanced analytics and reporting',
        'Custom survey templates',
        'Integration with CRM systems',
        'Automated follow-up campaigns',
        'Multi-language support'
      ],
      benefits: [
        'Increase survey response rates by 40%',
        'Improve data quality and accuracy',
        'Enable real-time customer feedback',
        'Reduce survey creation time by 50%',
        'Provide actionable customer insights'
      ],
      pricing: '$19/month',
      icon: Smartphone,
      color: 'from-green-500 to-emerald-500',
      link: '/services/mobile-survey',
      marketPrice: '$30-60/month',
      competitors: ['SurveyMonkey', 'Typeform', 'Qualtrics']
    },
    {
      id: 'ai-auto-email-responder',
      name: 'AI Auto Email Responder',
      category: 'ai-ml',
      description: 'Intelligent email automation platform that uses AI to generate personalized responses, manage email workflows, and improve communication efficiency.',
      features: [
        'AI-powered email response generation',
        'Personalized email templates',
        'Automated email categorization',
        'Smart email routing and prioritization',
        'Integration with email clients',
        'Response quality monitoring',
        'Multi-language support',
        'Analytics and performance insights'
      ],
      benefits: [
        'Reduce email response time by 80%',
        'Improve response quality and consistency',
        'Automate routine email communications',
        'Enable 24/7 email responsiveness',
        'Improve customer service efficiency'
      ],
      pricing: '$79/month',
      icon: MessageCircle,
      color: 'from-cyan-500 to-blue-500',
      link: '/services/ai-auto-email-responder',
      marketPrice: '$100-200/month',
      competitors: ['Gmail Smart Compose', 'Boomerang', 'Mixmax']
    }
  ];

  const filteredServices = innovativeServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Innovative AI Services
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              2025 Showcase
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Discover cutting-edge AI solutions that transform businesses and drive innovation. 
            From autonomous research to quantum computing, we're pushing the boundaries of what's possible.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
            >
              Get Started Today
            </Link>
            <a
              href="tel:+13024640950"
              className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-6 pb-16">
        <div className="container mx-auto">
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search Bar */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search innovative services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 pb-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-800/70 group"
              >
                {/* Service Header */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                        <Check className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-cyan-400 font-medium">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-3 uppercase tracking-wide">Key Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start text-sm text-gray-300">
                        <TrendingUp className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing and Market Info */}
                <div className="mb-6 p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Our Price:</span>
                    <span className="text-xl font-bold text-cyan-400">{service.pricing}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Market Price:</span>
                    <span className="text-sm text-gray-300">{service.marketPrice}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Competitive with: {service.competitors.join(', ')}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col gap-2">
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/contact"
                    className="w-full bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 rounded-lg font-medium text-center transition-colors duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/20 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our innovative AI services are designed to drive growth, improve efficiency, and create competitive advantages. 
              Let's discuss how we can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
              >
                Start Your Journey
              </Link>
              <a
                href="tel:+13024640950"
                className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                +1 (302) 464-0950
              </a>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-2">Contact Information</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Search icon component
const Search = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);