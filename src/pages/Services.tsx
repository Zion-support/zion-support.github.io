import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  Globe, 
  Cpu, 
  Zap, 
  Heart, 
  Scale, 
  Rocket,
  Atom,
  Target,
  TrendingUp,
  Users,
  PenTool,
  Eye,
  Server,
  Smartphone,
  Network,
  Clock,
  ShoppingCart,
  Lock,
  FileText,
  Settings,
  Key,
  Leaf,
  Building2,
  Car,
  Home,
  Factory,
  City,
  CheckCircle,
  ArrowUpRight,
  Play,
  MailIcon,
  BarChart3,
  Code,
  Truck,
  Gauge,
  GitFork,
  Award,
  Crown,
  Sparkles,
  Flame,
  Sun,
  Moon,
  Infinity
} from 'lucide-react';
import { SEO } from '../components/SEO';

const Services: React.FC = () => {
  const services = [
    {
      id: 'ai-business-intelligence',
      title: 'AI Business Intelligence',
      description: 'Advanced machine learning and data science solutions for business transformation',
      icon: Brain,
      features: [
        'Predictive Analytics & Forecasting',
        'Customer Behavior Analysis',
        'Market Trend Identification',
        'Real-time Data Processing',
        'Automated Decision Making',
        'Performance Optimization'
      ],
      color: 'from-purple-500 to-cyan-500'
    },
    {
      id: 'ai-healthcare',
      title: 'AI Healthcare Diagnostics',
      description: 'Revolutionary AI-powered healthcare solutions for improved patient outcomes',
      icon: Heart,
      features: [
        'Medical Image Analysis',
        'Diagnostic Assistance',
        'Patient Risk Assessment',
        'Treatment Optimization',
        'Drug Discovery Support',
        'Healthcare Workflow Automation'
      ],
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'ai-legal-tech',
      title: 'AI Legal Tech Platform',
      description: 'Intelligent legal document analysis and contract management solutions',
      icon: Scale,
      features: [
        'Contract Analysis & Review',
        'Legal Document Classification',
        'Compliance Monitoring',
        'Risk Assessment',
        'Legal Research Automation',
        'Document Generation'
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'ai-research',
      title: 'AI Research & Discovery',
      description: 'Accelerating scientific research with AI-powered discovery platforms',
      icon: Atom,
      features: [
        'Literature Review Automation',
        'Hypothesis Generation',
        'Data Pattern Recognition',
        'Research Collaboration Tools',
        'Publication Analysis',
        'Grant Opportunity Identification'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ai-green-tech',
      title: 'AI Green Technology',
      description: 'Sustainable technology solutions powered by artificial intelligence',
      icon: Leaf,
      features: [
        'Energy Consumption Optimization',
        'Carbon Footprint Tracking',
        'Sustainable Supply Chain',
        'Environmental Monitoring',
        'Green Building Management',
        'Renewable Energy Integration'
      ],
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 'ai-metaverse',
      title: 'AI Metaverse Platform',
      description: 'Next-generation virtual reality and augmented reality experiences',
      icon: Globe,
      features: [
        'Virtual World Creation',
        'AI-Powered Avatars',
        'Immersive Experiences',
        'Virtual Commerce',
        'Social Interaction Tools',
        'Content Generation'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-space-tech',
      title: 'AI Space Technology',
      description: 'Advanced AI solutions for space exploration and satellite operations',
      icon: Rocket,
      features: [
        'Satellite Data Analysis',
        'Space Debris Tracking',
        'Mission Planning',
        'Astronomical Research',
        'Space Weather Monitoring',
        'Autonomous Spacecraft'
      ],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'ai-fintech',
      title: 'AI FinTech Platform',
      description: 'Intelligent financial technology solutions for modern banking',
      icon: TrendingUp,
      features: [
        'Fraud Detection',
        'Risk Assessment',
        'Algorithmic Trading',
        'Customer Service Automation',
        'Credit Scoring',
        'Investment Analysis'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ai-supply-chain',
      title: 'AI Supply Chain',
      description: 'Optimized supply chain management with AI-driven insights',
      icon: Truck,
      features: [
        'Demand Forecasting',
        'Inventory Optimization',
        'Route Planning',
        'Supplier Risk Assessment',
        'Quality Control',
        'Cost Optimization'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'ai-qa',
      title: 'AI Quality Assurance',
      description: 'Automated quality testing and assurance for software and products',
      icon: CheckCircle,
      features: [
        'Automated Testing',
        'Bug Detection',
        'Performance Monitoring',
        'User Experience Testing',
        'Regression Testing',
        'Test Case Generation'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ai-marketing-automation',
      title: 'AI Marketing Automation',
      description: 'Intelligent marketing automation for personalized customer engagement',
      icon: Target,
      features: [
        'Customer Segmentation',
        'Personalized Content',
        'Campaign Optimization',
        'Lead Scoring',
        'Marketing Analytics',
        'A/B Testing Automation'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support',
      description: '24/7 intelligent customer support with natural language processing',
      icon: Users,
      features: [
        'Chatbot Support',
        'Ticket Classification',
        'Knowledge Base Management',
        'Customer Sentiment Analysis',
        'Automated Responses',
        'Support Ticket Routing'
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'ai-hr',
      title: 'AI HR & Recruitment',
      description: 'Streamlined human resources and recruitment processes',
      icon: Users,
      features: [
        'Resume Screening',
        'Candidate Matching',
        'Interview Scheduling',
        'Performance Analytics',
        'Employee Onboarding',
        'Talent Management'
      ],
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 'ai-content-creation',
      title: 'AI Content Creation',
      description: 'Automated content generation and optimization tools',
      icon: PenTool,
      features: [
        'Article Generation',
        'Social Media Content',
        'Email Marketing Copy',
        'SEO Optimization',
        'Content Personalization',
        'Multilingual Content'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'zero-trust-security',
      title: 'Zero Trust Security',
      description: 'Advanced cybersecurity with zero-trust architecture principles',
      icon: Shield,
      features: [
        'Identity Verification',
        'Access Control',
        'Network Segmentation',
        'Threat Detection',
        'Incident Response',
        'Security Monitoring'
      ],
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'ai-ethics-guardian',
      title: 'AI Ethics & Governance',
      description: 'Ensuring responsible AI development and deployment',
      icon: Scale,
      features: [
        'Bias Detection',
        'Fairness Monitoring',
        'Transparency Tools',
        'Compliance Management',
        'Ethical Guidelines',
        'Audit Trails'
      ],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions for modern digital threats',
      icon: Lock,
      features: [
        'Threat Intelligence',
        'Vulnerability Assessment',
        'Penetration Testing',
        'Security Training',
        'Incident Response',
        'Compliance Management'
      ],
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      description: 'Streamlined cloud infrastructure and development operations',
      icon: Cloud,
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'Continuous Integration',
        'Automated Deployment',
        'Monitoring & Logging',
        'Cost Optimization'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Comprehensive data analysis and business intelligence solutions',
      icon: BarChart3,
      features: [
        'Data Visualization',
        'Statistical Analysis',
        'Predictive Modeling',
        'Real-time Dashboards',
        'Data Warehousing',
        'ETL Processes'
      ],
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure',
      description: 'Robust and scalable IT infrastructure solutions',
      icon: Server,
      features: [
        'Network Design',
        'Server Management',
        'Storage Solutions',
        'Backup & Recovery',
        'Performance Monitoring',
        'Capacity Planning'
      ],
      color: 'from-gray-500 to-blue-500'
    },
    {
      id: 'digital-twin',
      title: 'Digital Twin Solutions',
      description: 'Virtual replicas for simulation and optimization',
      icon: Globe,
      features: [
        '3D Modeling',
        'Real-time Simulation',
        'Predictive Maintenance',
        'Performance Optimization',
        'Scenario Planning',
        'Integration Services'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'iot-edge',
      title: 'IoT & Edge Computing',
      description: 'Internet of Things and edge computing solutions',
      icon: Cpu,
      features: [
        'Sensor Integration',
        'Edge Analytics',
        'Real-time Processing',
        'Device Management',
        'Data Collection',
        'Automation Systems'
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'blockchain',
      title: 'Blockchain & Web3',
      description: 'Decentralized technology solutions for the future',
      icon: Network,
      features: [
        'Smart Contracts',
        'DeFi Solutions',
        'NFT Platforms',
        'Supply Chain Tracking',
        'Identity Management',
        'Decentralized Applications'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      description: 'Next-generation quantum computing solutions',
      icon: Atom,
      features: [
        'Quantum Algorithms',
        'Optimization Problems',
        'Cryptography',
        'Machine Learning',
        'Simulation',
        'Research Support'
      ],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'ai-workflow-automation',
      title: 'AI Workflow Automation',
      description: 'Intelligent automation of business processes',
      icon: Settings,
      features: [
        'Process Mapping',
        'Automation Design',
        'Integration Services',
        'Monitoring & Analytics',
        'Optimization',
        'Scalability'
      ],
      color: 'from-blue-500 to-green-500'
    },
    {
      id: 'ai-project-management',
      title: 'AI Project Management',
      description: 'AI-powered project management and collaboration tools',
      icon: Target,
      features: [
        'Task Automation',
        'Resource Allocation',
        'Risk Assessment',
        'Progress Tracking',
        'Team Collaboration',
        'Performance Analytics'
      ],
      color: 'from-purple-500 to-blue-500'
    },
    {
      id: 'ai-sales-intelligence',
      title: 'AI Sales Intelligence',
      description: 'Data-driven sales optimization and customer insights',
      icon: TrendingUp,
      features: [
        'Lead Scoring',
        'Customer Segmentation',
        'Sales Forecasting',
        'Pipeline Analytics',
        'Competitive Intelligence',
        'Performance Optimization'
      ],
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 'ai-innovation-management',
      title: 'AI Innovation Management',
      description: 'Managing innovation processes with artificial intelligence',
      icon: Sparkles,
      features: [
        'Idea Generation',
        'Innovation Tracking',
        'Market Analysis',
        'Portfolio Management',
        'Collaboration Tools',
        'Success Metrics'
      ],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO 
        title="AI & Technology Services | Zion Tech Group"
        description="Comprehensive AI, cloud, cybersecurity, and technology services. Transform your business with cutting-edge solutions from Zion Tech Group."
        keywords="AI services, cloud computing, cybersecurity, digital transformation, technology solutions"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Revolutionary
                </span>
                <br />
                <span className="text-white">Technology Services</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Transform your business with cutting-edge AI, cloud computing, cybersecurity, and digital transformation solutions. 
                Experience the future of technology with Zion Tech Group.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => scrollToSection('ai-business-intelligence')}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Explore AI Services
                </button>
                <button 
                  onClick={() => scrollToSection('cybersecurity')}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Security Solutions
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive Technology Services
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                From AI-powered solutions to robust infrastructure, we provide end-to-end technology services 
                that drive innovation and growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <button className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center group">
                      Learn More
                      <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Let's discuss how our technology services can drive innovation, efficiency, and growth for your organization.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Schedule a Consultation
                </button>
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Request a Quote
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
