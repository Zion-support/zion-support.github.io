import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Database, Users, Truck, Shield, Briefcase, Cpu, Wrench, Leaf, Atom,
  ArrowRight, ExternalLink, Phone, Mail, Zap, Target, Clock, Globe, Check
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function InnovativeServicesShowcase2025() {
  const services = [
    {
      id: 'ai-workflow-orchestrator',
      title: 'AI Workflow Orchestrator',
      description: 'Intelligent workflow automation that learns, optimizes, and orchestrates complex business processes with AI-powered decision making.',
      icon: Brain,
      price: 'From $299/month',
      features: [
        'AI-powered workflow automation and orchestration',
        'Intelligent process optimization and decision making',
        'Real-time workflow monitoring and analytics',
        'Multi-platform integration and API management'
      ],
      benefits: [
        'Reduce manual workflow processing by 85%',
        'Improve process efficiency by 60%',
        'Cut operational costs by 40%'
      ],
      path: '/services/ai-workflow-orchestrator',
      category: 'AI & Automation'
    },
    {
      id: 'ai-data-governance-platform',
      title: 'AI Data Governance Platform',
      description: 'Intelligent data governance that automatically discovers, classifies, and protects your data while ensuring full regulatory compliance.',
      icon: Database,
      price: 'From $499/month',
      features: [
        'AI-powered data discovery and classification',
        'Automated data quality assessment and monitoring',
        'Intelligent data lineage tracking and visualization',
        'Advanced data privacy and compliance automation'
      ],
      benefits: [
        'Ensure 100% regulatory compliance (GDPR, CCPA, HIPAA)',
        'Reduce data governance costs by 50%',
        'Improve data quality by 80%'
      ],
      path: '/services/ai-data-governance-platform',
      category: 'AI & Data'
    },
    {
      id: 'ai-customer-experience-analytics',
      title: 'AI Customer Experience Analytics',
      description: 'Transform customer insights into actionable intelligence with AI-powered analytics that predict, optimize, and enhance every customer interaction.',
      icon: Users,
      price: 'From $399/month',
      features: [
        'AI-powered customer journey mapping and analysis',
        'Real-time sentiment analysis and emotion detection',
        'Predictive customer behavior modeling',
        'Automated customer feedback collection and analysis'
      ],
      benefits: [
        'Increase customer satisfaction scores by 45%',
        'Reduce customer churn by 60%',
        'Improve customer lifetime value by 35%'
      ],
      path: '/services/ai-customer-experience-analytics',
      category: 'AI & Analytics'
    },
    {
      id: 'ai-supply-chain-optimization',
      title: 'AI Supply Chain Optimization',
      description: 'Revolutionize your supply chain with AI-powered optimization that predicts demand, optimizes inventory, and streamlines logistics for maximum efficiency.',
      icon: Truck,
      price: 'From $599/month',
      features: [
        'AI-powered demand forecasting and inventory optimization',
        'Real-time supply chain monitoring and risk assessment',
        'Intelligent route optimization and logistics planning',
        'Automated supplier performance analysis and scoring'
      ],
      benefits: [
        'Reduce supply chain costs by 25-40%',
        'Improve inventory accuracy by 90%',
        'Reduce lead times by 30-50%'
      ],
      path: '/services/ai-supply-chain-optimization',
      category: 'AI & Logistics'
    },
    {
      id: 'ai-financial-risk-management',
      title: 'AI Financial Risk Management',
      description: 'Intelligent financial risk management that automatically detects, assesses, and mitigates risks while ensuring regulatory compliance and optimizing returns.',
      icon: Shield,
      price: 'From $799/month',
      features: [
        'AI-powered credit risk assessment and scoring',
        'Real-time market risk monitoring and alerts',
        'Intelligent fraud detection and prevention',
        'Advanced portfolio risk analysis and optimization'
      ],
      benefits: [
        'Reduce credit losses by 40-60%',
        'Improve risk-adjusted returns by 25%',
        'Detect fraud with 99.5% accuracy'
      ],
      path: '/services/ai-financial-risk-management',
      category: 'AI & Finance'
    },
    {
      id: 'ai-hr-talent-acquisition',
      title: 'AI HR Talent Acquisition',
      description: 'Revolutionize your hiring process with AI-powered talent acquisition that finds, screens, and matches the perfect candidates for your organization.',
      icon: Briefcase,
      price: 'From $299/month',
      features: [
        'AI-powered candidate sourcing and matching',
        'Intelligent resume parsing and skill extraction',
        'Automated candidate screening and assessment',
        'Predictive candidate success modeling'
      ],
      benefits: [
        'Reduce time-to-hire by 60%',
        'Improve candidate quality by 45%',
        'Reduce recruitment costs by 40%'
      ],
      path: '/services/ai-hr-talent-acquisition',
      category: 'AI & HR'
    },
    {
      id: 'ai-iot-edge-computing',
      title: 'AI IoT Edge Computing',
      description: 'Transform your IoT infrastructure with AI-powered edge computing that processes data locally, reduces latency, and enables real-time intelligent decision making.',
      icon: Cpu,
      price: 'From $499/month',
      features: [
        'AI-powered edge computing and processing',
        'Real-time IoT device management and monitoring',
        'Intelligent edge analytics and decision making',
        'Advanced device connectivity and protocol support'
      ],
      benefits: [
        'Reduce latency by 80-90%',
        'Lower bandwidth costs by 60%',
        'Improve device reliability by 75%'
      ],
      path: '/services/ai-iot-edge-computing',
      category: 'AI & IoT'
    },
    {
      id: 'ai-predictive-maintenance',
      title: 'AI Predictive Maintenance',
      description: 'Transform your maintenance operations with AI-powered predictive maintenance that prevents failures, reduces downtime, and optimizes equipment performance.',
      icon: Wrench,
      price: 'From $399/month',
      features: [
        'AI-powered equipment health monitoring and analysis',
        'Real-time predictive maintenance scheduling',
        'Intelligent failure prediction and prevention',
        'Advanced sensor data analysis and processing'
      ],
      benefits: [
        'Reduce unplanned downtime by 70-90%',
        'Lower maintenance costs by 25-40%',
        'Extend equipment lifespan by 20-30%'
      ],
      path: '/services/ai-predictive-maintenance',
      category: 'AI & Maintenance'
    },
    {
      id: 'ai-sustainable-technology',
      title: 'AI Sustainable Technology',
      description: 'Transform your organization into a sustainability leader with AI-powered technology that optimizes energy, reduces waste, and minimizes environmental impact.',
      icon: Leaf,
      price: 'From $299/month',
      features: [
        'AI-powered energy consumption optimization',
        'Real-time sustainability monitoring and reporting',
        'Intelligent carbon footprint tracking and reduction',
        'Advanced waste management and recycling optimization'
      ],
      benefits: [
        'Reduce energy consumption by 25-40%',
        'Lower carbon footprint by 30-50%',
        'Improve resource efficiency by 35%'
      ],
      path: '/services/ai-sustainable-technology',
      category: 'AI & Sustainability'
    },
    {
      id: 'ai-quantum-machine-learning',
      title: 'AI Quantum Machine Learning',
      description: 'Revolutionize your computational capabilities with AI-powered quantum machine learning that solves previously impossible problems and accelerates innovation.',
      icon: Atom,
      price: 'From $1,999/month',
      features: [
        'Quantum-enhanced machine learning algorithms',
        'Hybrid quantum-classical computing solutions',
        'Advanced quantum neural network optimization',
        'Real-time quantum algorithm execution'
      ],
      benefits: [
        'Solve complex problems 100x faster than classical computing',
        'Improve machine learning accuracy by 40-60%',
        'Enable previously impossible computational tasks'
      ],
      path: '/services/ai-quantum-machine-learning',
      category: 'AI & Quantum Computing'
    }
  ];

  const categories = [...new Set(services.map(service => service.category))];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Innovative AI Services Showcase 2025 - Zion Tech Group"
        description="Discover our cutting-edge AI-powered micro SAAS services and solutions. From workflow orchestration to quantum machine learning, transform your business with intelligent technology."
      />
      
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6"
          >
            <Brain className="w-4 h-4 mr-2" /> Innovative AI Services 2025
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Innovative AI Services Showcase 2025
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zion-slate-light text-xl"
          >
            Discover our cutting-edge AI-powered micro SAAS services that are revolutionizing industries and transforming businesses worldwide.
          </motion.p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Service Categories</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <span key={category} className="px-4 py-2 bg-zion-cyan/10 text-zion-cyan rounded-full text-sm font-medium">
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-zion-slate-light/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-zion-cyan/10 rounded-lg">
                  <service.icon className="w-6 h-6 text-zion-cyan" />
                </div>
                <div className="ml-3">
                  <span className="text-xs text-zion-slate-light bg-zion-slate-light/10 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-zion-slate-dark mb-3">{service.title}</h3>
              <p className="text-zion-slate-light mb-4">{service.description}</p>
              
              <div className="mb-4">
                <div className="text-2xl font-bold text-zion-cyan mb-2">{service.price}</div>
                <div className="text-sm text-zion-slate-light">Starting price</div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-zion-slate-dark mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-zion-slate-dark">
                      <Check className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-zion-slate-dark mb-2">Key Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-sm text-zion-slate-dark">
                      <Zap className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <a 
                  href={service.path} 
                  className="w-full px-4 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors text-center font-medium inline-flex items-center justify-center"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-zion-cyan/5 to-zion-blue/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-zion-slate-dark mb-6">Why Choose Zion Tech Group?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'AI-First Approach',
                description: 'All our services are built with AI at the core, ensuring maximum efficiency and intelligence.'
              },
              {
                icon: Target,
                title: 'Industry Expertise',
                description: 'Deep domain knowledge across multiple industries with proven track records.'
              },
              {
                icon: Clock,
                title: 'Rapid Implementation',
                description: 'Quick deployment and onboarding with minimal disruption to your operations.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="p-4 bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-zion-slate-dark mb-2">{item.title}</h3>
                <p className="text-zion-slate-light">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-zion-slate-dark mb-6">Ready to Transform Your Business?</h2>
        <p className="text-zion-slate-light text-lg mb-8">
          Contact us today to learn how our innovative AI services can revolutionize your operations and drive unprecedented growth.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="tel:+13024640950" className="inline-flex items-center px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors">
            <Phone className="w-5 h-5 mr-2"/> +1 302 464 0950
          </a>
          <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-6 py-3 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan/5 transition-colors">
            <Mail className="w-5 h-5 mr-2"/> kleber@ziontechgroup.com
          </a>
        </div>
        
        <div className="text-sm text-zion-slate-light">
          Visit us at <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="text-zion-cyan hover:underline">ziontechgroup.com</a>
        </div>
      </section>
    </div>
  );
}