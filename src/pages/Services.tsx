import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Cpu, 
  Lock, 
  Heart, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Lightbulb,
  Database,
  Network,
  Smartphone,
  Server
} from 'lucide-react';

export default function Services() {
  const serviceCategories = [
    {
      name: 'AI & Analytics',
      icon: Brain,
      description: 'Cutting-edge artificial intelligence and data analytics solutions',
      color: 'from-purple-600 to-pink-600',
      services: [
        {
          name: 'AI Business Intelligence',
          description: 'Transform your data into actionable insights with advanced AI algorithms',
          features: ['Predictive Analytics', 'Real-time Dashboards', 'Machine Learning Models', 'Data Visualization'],
          href: '/services/ai-business-intelligence',
          price: 'From $5,000',
          rating: 4.9,
          reviewCount: 127
        },
        {
          name: 'AI Sales Copilot',
          description: 'AI-powered sales automation and customer relationship management',
          features: ['Lead Scoring', 'Sales Forecasting', 'Customer Insights', 'Automated Follow-ups'],
          href: '/services/ai-sales-copilot',
          price: 'From $3,500',
          rating: 4.8,
          reviewCount: 89
        },
        {
          name: 'AI Compliance Assistant',
          description: 'Automated regulatory compliance and risk management solutions',
          features: ['Regulatory Monitoring', 'Risk Assessment', 'Compliance Reporting', 'Audit Trails'],
          href: '/services/ai-compliance-assistant',
          price: 'From $7,500',
          rating: 4.9,
          reviewCount: 156
        },
        {
          name: 'AI Workflow Orchestrator',
          description: 'Intelligent workflow automation with multi-agent coordination and real-time optimization',
          features: ['Process Orchestration', 'Multi-Agent Systems', 'Dynamic Adaptation', 'Performance Analytics'],
          href: '/services/ai-workflow-orchestrator',
          price: 'From $2,500',
          rating: 4.9,
          reviewCount: 89
        },
        {
          name: 'AI Data Governance',
          description: 'AI-powered data classification, compliance automation, and intelligent access control',
          features: ['Data Classification', 'Compliance Automation', 'Access Control', 'Data Lineage'],
          href: '/services/ai-data-governance',
          price: 'From $3,500',
          rating: 4.8,
          reviewCount: 134
        },
        {
          name: 'LLM Content Studio',
          description: 'AI-powered content generation and management platform',
          features: ['Content Creation', 'Brand Voice Consistency', 'SEO Optimization', 'Multi-language Support'],
          href: '/services/llm-content-studio',
          price: 'From $2,500',
          rating: 4.7,
          reviewCount: 203
        },
        // NEW INNOVATIVE AI SERVICES
        {
          name: 'Autonomous Business Intelligence',
          description: 'Self-learning AI platform that autonomously analyzes data and generates insights',
          features: ['Autonomous Analysis', 'Self-learning Algorithms', 'Predictive Modeling', 'Natural Language Generation'],
          href: '/services/autonomous-business-intelligence',
          price: 'From $7,999',
          rating: 4.9,
          reviewCount: 45
        },
        {
          name: 'Consciousness Simulation Platform',
          description: 'Breakthrough AI platform for consciousness research and AGI development',
          features: ['Neural Network Simulation', 'Consciousness Modeling', 'Research Tools', 'Collaborative Workspace'],
          href: '/services/consciousness-simulation',
          price: 'From $15,999',
          rating: 5.0,
          reviewCount: 12
        },
        {
          name: 'Quantum Neural Network Platform',
          description: 'Revolutionary platform combining quantum computing with neural networks',
          features: ['Quantum Neural Processing', 'Hybrid Classical-Quantum', 'Advanced Training', 'Quantum Advantage'],
          href: '/services/quantum-neural-network',
          price: 'From $19,999',
          rating: 5.0,
          reviewCount: 8
        },
        {
          name: 'AI Emotional Intelligence',
          description: 'Advanced emotional intelligence platform for human-AI interaction',
          features: ['Emotion Recognition', 'Sentiment Analysis', 'Behavioral Insights', 'Real-time Monitoring'],
          href: '/services/ai-emotional-intelligence',
          price: 'From $5,999',
          rating: 4.8,
          reviewCount: 67
        },
        {
          name: 'AI Creativity Platform',
          description: 'AI-enhanced creativity platform for design and innovation',
          features: ['AI Idea Generation', 'Design Assistance', 'Creative Collaboration', 'Workflow Optimization'],
          href: '/services/ai-creativity-platform',
          price: 'From $7,999',
          rating: 4.7,
          reviewCount: 89
        },
        {
          name: 'AI Education Platform',
          description: 'Personalized learning platform powered by artificial intelligence',
          features: ['Personalized Learning Paths', 'Adaptive Tutoring', 'Progress Tracking', 'Content Recommendation'],
          href: '/services/ai-education-platform',
          price: 'From $4,999',
          rating: 4.8,
          reviewCount: 156
        }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Scalable cloud infrastructure and automated deployment solutions',
      color: 'from-blue-600 to-cyan-600',
      services: [
        {
          name: 'Cloud DevOps',
          description: 'End-to-end cloud infrastructure and DevOps automation solutions',
          features: ['Infrastructure as Code', 'CI/CD Pipelines', 'Cloud Migration', 'Performance Optimization'],
          href: '/services/cloud-devops',
          price: 'From $8,000',
          rating: 4.8,
          reviewCount: 234
        },
        {
          name: 'Cloud FinOps Optimizer',
          description: 'Intelligent cloud cost optimization and financial operations management',
          features: ['Cost Analysis', 'Resource Optimization', 'Budget Management', 'ROI Tracking'],
          href: '/services/cloud-finops-optimizer',
          price: 'From $4,500',
          rating: 4.7,
          reviewCount: 178
        },
        {
          name: 'FinOps Advisor',
          description: 'Strategic financial operations consulting for cloud infrastructure',
          features: ['Cost Strategy', 'Budget Planning', 'Vendor Management', 'Performance Metrics'],
          href: '/services/finops-advisor',
          price: 'From $3,000',
          rating: 4.8,
          reviewCount: 145
        },
        // NEW INNOVATIVE CLOUD SERVICES
        {
          name: 'AI DevOps Automation',
          description: 'AI-powered DevOps platform for intelligent automation and optimization',
          features: ['AI-powered CI/CD', 'Automated Testing', 'Intelligent Monitoring', 'Performance Optimization'],
          href: '/services/ai-devops-automation',
          price: 'From $5,999',
          rating: 4.9,
          reviewCount: 67
        },
        {
          name: 'Quantum-Ready Data Centers',
          description: 'Future-proof data center infrastructure for quantum computing and AI workloads',
          features: ['Quantum-ready Architecture', 'AI-optimized Cooling', 'Energy Efficiency', 'Scalable Infrastructure'],
          href: '/services/quantum-ready-data-center',
          price: 'From $150,000',
          rating: 5.0,
          reviewCount: 15
        }
      ]
    },
    {
      name: 'Cybersecurity & Identity',
      icon: Shield,
      description: 'Advanced security solutions and identity management systems',
      color: 'from-red-600 to-pink-600',
      services: [
        {
          name: 'Zero Trust Network Architecture',
          description: 'Comprehensive zero trust security implementation with continuous verification',
          features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Threat Detection'],
          href: '/services/zero-trust-network-architecture',
          price: 'From $15,000',
          rating: 4.9,
          reviewCount: 189
        },
        {
          name: 'AI Compliance Copilot',
          description: 'AI-powered compliance automation and regulatory management',
          features: ['Regulatory Monitoring', 'Automated Compliance', 'Risk Assessment', 'Audit Preparation'],
          href: '/services/ai-compliance-copilot',
          price: 'From $6,500',
          rating: 4.8,
          reviewCount: 234
        },
        // NEW INNOVATIVE SECURITY SERVICES
        {
          name: 'AI Cybersecurity Threat Hunter',
          description: 'Intelligent cybersecurity platform for proactive threat detection and response',
          features: ['AI-powered Threat Hunting', 'Behavioral Analytics', 'Real-time Detection', 'Automated Response'],
          href: '/services/ai-cybersecurity-threat-hunter',
          price: 'From $4,499',
          rating: 4.9,
          reviewCount: 89
        },
        {
          name: 'Quantum-Enhanced Cryptography',
          description: 'Next-generation cryptography platform with quantum-resistant algorithms',
          features: ['Quantum-resistant Algorithms', 'Post-quantum Cryptography', 'Hybrid Encryption', 'Key Management'],
          href: '/services/quantum-enhanced-cryptography',
          price: 'From $7,999',
          rating: 5.0,
          reviewCount: 23
        },
        {
          name: 'Blockchain Identity Verification',
          description: 'Decentralized identity verification platform with privacy protection',
          features: ['Decentralized Identity', 'Zero-knowledge Proofs', 'Multi-factor Authentication', 'Privacy Protection'],
          href: '/services/blockchain-identity-verification',
          price: 'From $1,999',
          rating: 4.7,
          reviewCount: 156
        }
      ]
    },
    {
      name: 'Emerging Technologies',
      icon: Zap,
      description: 'Cutting-edge technologies including quantum computing, blockchain, and space tech',
      color: 'from-yellow-600 to-orange-600',
      services: [
        {
          name: 'Quantum Computing',
          description: 'Quantum computing solutions for complex problem solving and optimization',
          features: ['Quantum Algorithms', 'Hybrid Computing', 'Performance Optimization', 'Research Collaboration'],
          href: '/services/quantum-computing',
          price: 'From $25,000',
          rating: 4.9,
          reviewCount: 78
        },
        {
          name: 'Quantum AI Platform',
          description: 'Hybrid quantum-classical AI platform for unprecedented computational power',
          features: ['Quantum Neural Processing', 'Hybrid Algorithms', 'Quantum Advantage', 'AI Integration'],
          href: '/services/quantum-ai-platform',
          price: 'From $35,000',
          rating: 5.0,
          reviewCount: 34
        },
        {
          name: 'Blockchain Enterprise Solutions',
          description: 'Enterprise-grade blockchain solutions for business transformation',
          features: ['Smart Contracts', 'Supply Chain Tracking', 'Digital Identity', 'DeFi Applications'],
          href: '/services/blockchain-enterprise-solutions',
          price: 'From $20,000',
          rating: 4.8,
          reviewCount: 167
        },
        {
          name: 'Green IT Solutions',
          description: 'Sustainable technology solutions for environmental impact reduction',
          features: ['Energy Efficiency', 'Carbon Footprint Monitoring', 'Sustainable Procurement', 'Green Reporting'],
          href: '/services/green-it',
          price: 'From $12,000',
          rating: 4.7,
          reviewCount: 145
        },
        {
          name: 'Space Technology',
          description: 'Advanced space technology solutions for commercial and research applications',
          features: ['Satellite Systems', 'Space Data Analytics', 'Earth Observation', 'Space Communications'],
          href: '/services/space-tech',
          price: 'From $50,000',
          rating: 4.9,
          reviewCount: 56
        }
      ]
    },
    {
      name: 'Healthcare & Biotech',
      icon: Heart,
      description: 'AI-powered healthcare solutions and biotechnology innovations',
      color: 'from-pink-600 to-rose-600',
      services: [
        {
          name: 'Healthcare Technology',
          description: 'Comprehensive healthcare technology solutions for modern medical facilities',
          features: ['Electronic Health Records', 'Telemedicine', 'Patient Monitoring', 'Medical Imaging'],
          href: '/services/healthcare-tech',
          price: 'From $30,000',
          rating: 4.9,
          reviewCount: 234
        },
        {
          name: 'AI Healthcare Analytics',
          description: 'AI-powered healthcare analytics for improved patient outcomes',
          features: ['Patient Data Analysis', 'Predictive Medicine', 'Clinical Decision Support', 'Outcome Prediction'],
          href: '/services/ai-healthcare-analytics',
          price: 'From $25,000',
          rating: 4.8,
          reviewCount: 189
        },
        // NEW INNOVATIVE HEALTHCARE SERVICES
        {
          name: 'AI Healthcare Diagnostic Assistant',
          description: 'Advanced AI platform for medical diagnostics and treatment recommendations',
          features: ['AI-powered Image Analysis', 'Symptom Assessment', 'Treatment Recommendations', 'Risk Analysis'],
          href: '/services/ai-healthcare-diagnostic',
          price: 'From $3,499',
          rating: 4.9,
          reviewCount: 78
        },
        {
          name: 'Biotech & Healthcare Technology',
          description: 'Cutting-edge biotechnology solutions for healthcare innovation',
          features: ['AI-powered Diagnostics', 'Personalized Medicine', 'Drug Discovery', 'Clinical Trials'],
          href: '/services/biotech-healthcare-technology',
          price: 'From $45,000',
          rating: 4.8,
          reviewCount: 45
        }
      ]
    },
    {
      name: 'Business Solutions',
      icon: TrendingUp,
      description: 'AI-powered business solutions for operational excellence',
      color: 'from-teal-600 to-green-600',
      services: [
        {
          name: 'Customer Success AI',
          description: 'AI-powered customer success platform for retention and growth',
          features: ['Predictive Churn Modeling', 'Customer Health Scoring', 'Retention Campaigns', 'Success Metrics'],
          href: '/services/ai-customer-success-platform',
          price: 'From $1,499',
          rating: 4.8,
          reviewCount: 234
        },
        {
          name: 'AI Workflow Orchestrator',
          description: 'Intelligent workflow automation with multi-agent coordination',
          features: ['Process Orchestration', 'Multi-Agent Systems', 'Dynamic Adaptation', 'Performance Analytics'],
          href: '/services/ai-workflow-orchestrator',
          price: 'From $2,500',
          rating: 4.9,
          reviewCount: 89
        },
        {
          name: 'AI Data Governance',
          description: 'AI-powered data management and governance platform',
          features: ['Data Classification', 'Compliance Automation', 'Access Control', 'Data Lineage'],
          href: '/services/ai-data-governance',
          price: 'From $3,500',
          rating: 4.8,
          reviewCount: 134
        },
        {
          name: 'Enterprise RAG Search',
          description: 'Intelligent enterprise search with AI-powered insights',
          features: ['Hybrid Search', 'PII Redaction', 'Grounding Citations', 'Plugin Integration'],
          href: '/services/enterprise-rag-search',
          price: 'From $8,999',
          rating: 4.9,
          reviewCount: 67
        },
        {
          name: 'Agentic Copilot Suite',
          description: 'Task-driven AI agents for workflow automation across platforms',
          features: ['Guardrailed Tools', 'Human-in-the-loop', 'Audit Trails', 'Multi-platform Connectors'],
          href: '/services/agentic-copilot-suite',
          price: 'From $12,999',
          rating: 4.8,
          reviewCount: 89
        }
      ]
    },
    {
      name: 'Specialized Services',
      icon: Star,
      description: 'Specialized AI and technology solutions for unique business needs',
      color: 'from-indigo-600 to-purple-600',
      services: [
        {
          name: 'Legal AI Automation',
          description: 'AI-powered legal document automation and analysis platform',
          features: ['Contract Drafting', 'Clause Analysis', 'Risk Assessment', 'Compliance Checking'],
          href: '/services/ai-legal-document-automation',
          price: 'From $2,499',
          rating: 4.7,
          reviewCount: 156
        },
        {
          name: 'Quantum Supply Chain Optimizer',
          description: 'Revolutionary supply chain optimization using quantum algorithms',
          features: ['Quantum Route Optimization', 'Demand Forecasting', 'Inventory Optimization', 'Risk Assessment'],
          href: '/services/quantum-supply-chain-optimizer',
          price: 'From $3,999',
          rating: 4.9,
          reviewCount: 45
        },
        {
          name: 'AI Sales Copilot',
          description: 'AI-powered sales automation and customer relationship management',
          features: ['Lead Scoring', 'Sales Forecasting', 'Customer Insights', 'Automated Follow-ups'],
          href: '/services/ai-sales-copilot',
          price: 'From $3,500',
          rating: 4.8,
          reviewCount: 89
        },
        {
          name: 'Customer Feedback Surveys',
          description: 'AI-powered feedback collection and analysis platform',
          features: ['NPS/CSAT Surveys', 'AI Insights', 'Real-time Analytics', 'Actionable Recommendations'],
          href: '/services/mobile-feedback-surveys',
          price: 'From $1,500',
          rating: 4.7,
          reviewCount: 234
        },
        {
          name: 'AI Auto Email Responder',
          description: 'Intelligent email automation with AI-powered responses',
          features: ['Smart Responses', 'CRM Integration', 'Sentiment Analysis', 'Performance Tracking'],
          href: '/services/ai-auto-email-responder',
          price: 'From $2,500',
          rating: 4.8,
          reviewCount: 178
        }
      ]
    }
  ];

  const emergingTechnologies = [
    {
      name: 'Quantum Computing',
      icon: Cpu,
      description: 'Next-generation quantum computing solutions for complex problem-solving',
      href: '/services/quantum-computing',
      color: 'from-violet-600 to-purple-600'
    },
    {
      name: 'Blockchain Solutions',
      icon: Lock,
      description: 'Enterprise blockchain implementation and DeFi solutions',
      href: '/services/blockchain-enterprise-solutions',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      name: 'IoT & Edge Computing',
      icon: Network,
      description: 'Internet of Things and edge computing infrastructure',
      href: '/services/iot-edge',
      color: 'from-green-600 to-teal-600'
    },
    {
      name: 'Healthcare Technology',
      icon: Heart,
      description: 'AI-powered healthcare solutions and medical technology',
      href: '/services/healthcare-tech',
      color: 'from-red-600 to-pink-600'
    },
    {
      name: 'Sustainability Solutions',
      icon: Globe,
      description: 'Green technology and sustainability-focused solutions',
      href: '/services/sustainability',
      color: 'from-emerald-600 to-green-600'
    },
    {
      name: 'Space Technology',
      icon: Rocket,
      description: 'Advanced space technology and satellite solutions',
      href: '/services/space-tech',
      color: 'from-slate-600 to-gray-600'
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Proven Expertise',
      description: '15+ years of technology innovation and successful project delivery'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with advanced degrees and industry certifications'
    },
    {
      icon: Zap,
      title: 'Rapid Implementation',
      description: 'Quick turnaround times without compromising quality or security'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'ISO 27001 certified with SOC 2 Type II compliance'
    },
    {
      icon: Globe,
      title: 'Global Support',
      description: '24/7 support available across 25+ countries'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Innovation',
      description: 'Ongoing R&D investment in emerging technologies'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="Our Services - Zion Tech Group"
        description="Explore Zion Tech Group's comprehensive range of AI solutions, cloud services, cybersecurity, and digital transformation services. Transform your business with cutting-edge technology."
        keywords="AI services, cloud solutions, cybersecurity, digital transformation, technology consulting, Zion Tech Group services"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive AI-powered solutions and technology services designed to transform your business and drive innovation
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link 
              to="/pricing" 
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Service Categories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology solutions organized by category
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              >
                <div className="text-center mb-12">
                  <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{category.name}</h3>
                  <p className="text-xl text-slate-300 max-w-2xl mx-auto">{category.description}</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, x: serviceIndex % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                      className="group"
                    >
                      <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 h-full">
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <h4 className="text-2xl font-bold text-white mb-2">{service.name}</h4>
                            <p className="text-slate-300 mb-4">{service.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                            <div className="flex items-center justify-end mb-2">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-slate-600'}`} />
                              ))}
                              <span className="text-sm text-slate-400 ml-2">({service.reviewCount})</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-slate-300">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        
                        <Link 
                          to={service.href}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:scale-105 transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emerging Technologies */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Emerging Technologies
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Stay ahead of the curve with our cutting-edge technology solutions
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergingTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link to={tech.href} className="block h-full">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <tech.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {tech.name}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-slate-300">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's discuss how our AI-powered solutions can revolutionize your operations and drive growth
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link 
              to="/pricing" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

