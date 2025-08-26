import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Hospital, 
  Banknote, 
  ShoppingCart, 
  GraduationCap, 
  Landmark,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Shield,
  Zap,
  Users,
  Globe,
  Cpu,
  Database,
  Network,
  Brain,
  Cloud,
  Lock
} from 'lucide-react';

const Solutions = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Globe, count: 8 },
    { id: 'healthcare', name: 'Healthcare', icon: Hospital, count: 3 },
    { id: 'finance', name: 'Financial Services', icon: Banknote, count: 2 },
    { id: 'retail', name: 'Retail & E-commerce', icon: ShoppingCart, count: 2 },
    { id: 'manufacturing', name: 'Manufacturing', icon: Building2, count: 1 }
  ];

  const solutions = [
    {
      id: 1,
      title: 'AI-Powered Patient Care Platform',
      industry: 'healthcare',
      description: 'Intelligent healthcare management system that improves patient outcomes and operational efficiency.',
      challenges: [
        'Complex patient data management',
        'Compliance with HIPAA regulations',
        'Integration with existing systems',
        'Real-time decision support'
      ],
      solutions: [
        'AI-driven patient risk assessment',
        'Secure cloud infrastructure with HIPAA compliance',
        'Seamless EHR integration',
        'Predictive analytics for treatment optimization'
      ],
      results: [
        '30% reduction in readmission rates',
        '25% improvement in patient satisfaction',
        '40% faster diagnosis times',
        'Compliance with all healthcare regulations'
      ],
      technologies: ['AI/ML', 'Cloud Computing', 'Cybersecurity', 'Data Analytics'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Digital Banking Transformation',
      industry: 'finance',
      description: 'Modern banking platform that enhances customer experience and operational efficiency.',
      challenges: [
        'Legacy system modernization',
        'Enhanced security requirements',
        'Customer experience improvement',
        'Regulatory compliance'
      ],
      solutions: [
        'Microservices architecture implementation',
        'Advanced fraud detection systems',
        'Omnichannel customer experience',
        'Real-time compliance monitoring'
      ],
      results: [
        '50% faster transaction processing',
        '99.9% fraud detection accuracy',
        '45% increase in customer engagement',
        'Full regulatory compliance'
      ],
      technologies: ['Microservices', 'AI/ML', 'Blockchain', 'Cloud Security'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Smart Manufacturing IoT Platform',
      industry: 'manufacturing',
      description: 'Connected manufacturing system that optimizes production and reduces operational costs.',
      challenges: [
        'Equipment downtime and maintenance',
        'Production inefficiencies',
        'Quality control issues',
        'Supply chain optimization'
      ],
      solutions: [
        'IoT sensor network implementation',
        'Predictive maintenance algorithms',
        'Real-time quality monitoring',
        'Supply chain automation'
      ],
      results: [
        '35% reduction in equipment downtime',
        '20% increase in production efficiency',
        '15% improvement in product quality',
        '25% reduction in operational costs'
      ],
      technologies: ['IoT', 'AI/ML', 'Cloud Computing', 'Data Analytics'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'E-commerce Personalization Engine',
      industry: 'retail',
      description: 'AI-driven personalization platform that increases customer engagement and sales.',
      challenges: [
        'Customer behavior analysis',
        'Product recommendation accuracy',
        'Real-time personalization',
        'Cross-platform consistency'
      ],
      solutions: [
        'Machine learning recommendation engine',
        'Real-time customer behavior tracking',
        'Personalized marketing automation',
        'Unified customer experience platform'
      ],
      results: [
        '40% increase in conversion rates',
        '35% improvement in customer retention',
        '50% higher average order value',
        '25% reduction in cart abandonment'
      ],
      technologies: ['AI/ML', 'Big Data', 'Real-time Analytics', 'Marketing Automation'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Healthcare Data Analytics Platform',
      industry: 'healthcare',
      description: 'Comprehensive data analytics solution for healthcare providers and administrators.',
      challenges: [
        'Data silos and fragmentation',
        'Complex regulatory requirements',
        'Real-time insights generation',
        'Data security and privacy'
      ],
      solutions: [
        'Unified data warehouse architecture',
        'Compliance automation tools',
        'Real-time analytics dashboard',
        'Advanced encryption and access controls'
      ],
      results: [
        '60% faster data access and analysis',
        '100% regulatory compliance',
        'Real-time operational insights',
        'Enhanced data security posture'
      ],
      technologies: ['Data Warehousing', 'Business Intelligence', 'Cybersecurity', 'Compliance'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Financial Risk Management System',
      industry: 'finance',
      description: 'Advanced risk assessment and management platform for financial institutions.',
      challenges: [
        'Complex risk modeling requirements',
        'Real-time market data processing',
        'Regulatory reporting compliance',
        'Risk assessment accuracy'
      ],
      solutions: [
        'AI-powered risk modeling algorithms',
        'Real-time market data integration',
        'Automated compliance reporting',
        'Advanced analytics and visualization'
      ],
      results: [
        '90% improvement in risk assessment accuracy',
        'Real-time risk monitoring',
        'Automated compliance reporting',
        'Enhanced decision-making capabilities'
      ],
      technologies: ['AI/ML', 'Real-time Processing', 'Risk Analytics', 'Compliance'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const technologyCapabilities = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Advanced AI and machine learning solutions for intelligent automation and decision-making',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern applications and services',
      features: ['Multi-cloud Strategy', 'DevOps Automation', 'Container Orchestration', 'Serverless Architecture']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance',
      features: ['Zero Trust Security', 'Threat Detection', 'Compliance Management', 'Incident Response']
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights for better decision-making',
      features: ['Big Data Processing', 'Real-time Analytics', 'Business Intelligence', 'Data Visualization']
    },
    {
      icon: Network,
      title: 'IoT Solutions',
      description: 'Connected device solutions for smart operations and automation',
      features: ['Device Management', 'Data Collection', 'Remote Monitoring', 'Automation']
    },
    {
      icon: Cpu,
      title: 'Digital Transformation',
      description: 'End-to-end business modernization and digital strategy implementation',
      features: ['Process Automation', 'Legacy Modernization', 'Change Management', 'Digital Strategy']
    }
  ];

  const filteredSolutions = selectedIndustry === 'all' 
    ? solutions 
    : solutions.filter(solution => solution.industry === selectedIndustry);

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent"
          >
            Industry Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed"
          >
            Tailored technology solutions designed to address the unique challenges and opportunities 
            of your industry. From healthcare to finance, we deliver results that drive growth and innovation.
          </motion.p>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                  selectedIndustry === industry.id
                    ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/30'
                    : 'bg-zion-slate-darker text-zion-slate-light hover:bg-zion-slate-light hover:text-white border border-zion-slate-light/20'
                }`}
              >
                <industry.icon className="w-5 h-5" />
                <span>{industry.name}</span>
                <span className="text-sm opacity-75">({industry.count})</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-darker rounded-2xl border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300 overflow-hidden group"
              >
                {/* Solution Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm font-medium rounded-full border border-zion-cyan/30">
                      {solution.industry.charAt(0).toUpperCase() + solution.industry.slice(1)}
                    </span>
                  </div>
                </div>
                
                {/* Solution Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-zion-cyan transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {solution.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-zion-slate-light/10 text-zion-slate-light text-sm rounded-full border border-zion-slate-light/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Challenges & Solutions */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-zion-cyan" />
                        Challenges
                      </h4>
                      <ul className="space-y-2">
                        {solution.challenges.slice(0, 2).map((challenge, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-zion-slate-light">
                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-zion-cyan" />
                        Solutions
                      </h4>
                      <ul className="space-y-2">
                        {solution.solutions.slice(0, 2).map((sol, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-zion-slate-light">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-zion-cyan" />
                      Results
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {solution.results.slice(0, 4).map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <Link
                    to={`/case-studies/${solution.id}`}
                    className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors duration-300 group-hover:translate-x-1"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredSolutions.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No solutions found</h3>
              <p className="text-zion-slate-light mb-6">
                No solutions match your selected industry
              </p>
              <button
                onClick={() => setSelectedIndustry('all')}
                className="px-6 py-3 bg-zion-cyan text-white font-bold rounded-xl hover:bg-zion-cyan-dark transition-colors duration-300"
              >
                View All Solutions
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Technology Capabilities */}
      <section className="px-4 mb-20 bg-zion-slate-dark py-20">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              Technology Capabilities
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our comprehensive technology expertise enables us to deliver innovative solutions across all industries
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-darker p-8 rounded-2xl border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mb-6">
                  <capability.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  {capability.title}
                </h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {capability.description}
                </p>
                <div className="space-y-2">
                  {capability.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4">
        <div className="container mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan-dark to-zion-blue-dark p-12 rounded-2xl"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how our industry-specific solutions can address your unique challenges and drive innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue-dark hover:bg-zion-slate-light font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;