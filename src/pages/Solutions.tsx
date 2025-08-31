import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Car, 
  Heart, 
  ShoppingCart, 
  GraduationCap, 
  Factory,
  Plane,
  Ship,
  Globe,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Brain,
  Cloud,
  Database,
  Users,
  TrendingUp,
  Target,
  Lightbulb
} from 'lucide-react';

export default function Solutions() {
  const [activeIndustry, setActiveIndustry] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Globe },
    { id: 'finance', name: 'Financial Services', icon: Building },
    { id: 'healthcare', name: 'Healthcare', icon: Heart },
    { id: 'retail', name: 'Retail & E-commerce', icon: ShoppingCart },
    { id: 'manufacturing', name: 'Manufacturing', icon: Factory },
    { id: 'education', name: 'Education', icon: GraduationCap },
    { id: 'transportation', name: 'Transportation', icon: Car },
    { id: 'aerospace', name: 'Aerospace & Defense', icon: Plane }
  ];

  const solutions = [
    {
      id: 'ai-powered-analytics',
      industry: 'finance',
      title: 'AI-Powered Financial Analytics',
      description: 'Advanced analytics and predictive modeling for financial institutions.',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      features: [
        'Risk assessment & management',
        'Fraud detection',
        'Portfolio optimization',
        'Market prediction',
        'Regulatory compliance',
        'Real-time monitoring'
      ],
      benefits: [
        'Reduced risk exposure',
        'Improved decision making',
        'Cost savings',
        'Enhanced security'
      ]
    },
    {
      id: 'healthcare-ai-platform',
      industry: 'healthcare',
      title: 'Healthcare AI Platform',
      description: 'Intelligent healthcare solutions for improved patient outcomes.',
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      features: [
        'Diagnostic assistance',
        'Patient monitoring',
        'Drug discovery',
        'Treatment optimization',
        'Predictive analytics',
        'Electronic health records'
      ],
      benefits: [
        'Improved accuracy',
        'Faster diagnosis',
        'Better patient care',
        'Cost reduction'
      ]
    },
    {
      id: 'retail-automation',
      industry: 'retail',
      title: 'Retail Automation & Analytics',
      description: 'Smart retail solutions for enhanced customer experience.',
      icon: ShoppingCart,
      color: 'from-blue-500 to-cyan-600',
      features: [
        'Inventory optimization',
        'Customer behavior analysis',
        'Personalized recommendations',
        'Supply chain management',
        'Demand forecasting',
        'Omnichannel integration'
      ],
      benefits: [
        'Increased sales',
        'Better inventory management',
        'Enhanced customer satisfaction',
        'Operational efficiency'
      ]
    },
    {
      id: 'smart-manufacturing',
      industry: 'manufacturing',
      title: 'Smart Manufacturing Solutions',
      description: 'Industry 4.0 solutions for modern manufacturing.',
      icon: Factory,
      color: 'from-green-500 to-emerald-600',
      features: [
        'Predictive maintenance',
        'Quality control',
        'Production optimization',
        'Supply chain visibility',
        'Energy management',
        'Safety monitoring'
      ],
      benefits: [
        'Reduced downtime',
        'Improved quality',
        'Cost savings',
        'Enhanced safety'
      ]
    },
    {
      id: 'educational-technology',
      industry: 'education',
      title: 'Educational Technology Platform',
      description: 'Innovative learning solutions for modern education.',
      icon: GraduationCap,
      color: 'from-indigo-500 to-purple-600',
      features: [
        'Personalized learning',
        'Adaptive assessments',
        'Content management',
        'Student analytics',
        'Collaborative tools',
        'Mobile learning'
      ],
      benefits: [
        'Improved learning outcomes',
        'Better engagement',
        'Cost effectiveness',
        'Accessibility'
      ]
    },
    {
      id: 'logistics-optimization',
      industry: 'transportation',
      title: 'Logistics & Supply Chain Optimization',
      description: 'Intelligent logistics solutions for efficient operations.',
      icon: Car,
      color: 'from-orange-500 to-red-600',
      features: [
        'Route optimization',
        'Fleet management',
        'Real-time tracking',
        'Demand forecasting',
        'Warehouse automation',
        'Last-mile delivery'
      ],
      benefits: [
        'Reduced costs',
        'Faster delivery',
        'Better efficiency',
        'Customer satisfaction'
      ]
    },
    {
      id: 'aerospace-ai',
      industry: 'aerospace',
      title: 'Aerospace AI Solutions',
      description: 'Advanced AI solutions for aerospace and defense.',
      icon: Plane,
      color: 'from-cyan-500 to-blue-600',
      features: [
        'Flight optimization',
        'Predictive maintenance',
        'Safety monitoring',
        'Mission planning',
        'Data analysis',
        'Simulation & training'
      ],
      benefits: [
        'Enhanced safety',
        'Cost reduction',
        'Improved performance',
        'Operational efficiency'
      ]
    },
    {
      id: 'cybersecurity-platform',
      industry: 'finance',
      title: 'Advanced Cybersecurity Platform',
      description: 'Comprehensive security solutions for financial institutions.',
      icon: Shield,
      color: 'from-yellow-500 to-orange-600',
      features: [
        'Threat detection',
        'Incident response',
        'Compliance management',
        'Risk assessment',
        'Security monitoring',
        'Employee training'
      ],
      benefits: [
        'Enhanced security',
        'Regulatory compliance',
        'Risk mitigation',
        'Customer trust'
      ]
    }
  ];

  const filteredSolutions = activeIndustry === 'all' 
    ? solutions 
    : solutions.filter(solution => solution.industry === activeIndustry);

  const useCases = [
    {
      title: 'Predictive Maintenance',
      description: 'AI-powered maintenance scheduling to prevent equipment failures.',
      icon: Target,
      benefits: ['Reduced downtime', 'Cost savings', 'Improved safety']
    },
    {
      title: 'Customer Segmentation',
      description: 'Intelligent customer analysis for personalized marketing.',
      icon: Users,
      benefits: ['Better targeting', 'Increased conversion', 'Customer satisfaction']
    },
    {
      title: 'Process Automation',
      description: 'Automate repetitive tasks to improve efficiency.',
      icon: Zap,
      benefits: ['Time savings', 'Error reduction', 'Scalability']
    },
    {
      title: 'Data Analytics',
      description: 'Transform raw data into actionable business insights.',
      icon: Database,
      benefits: ['Better decisions', 'Competitive advantage', 'Operational efficiency']
    }
  ];

  const successMetrics = [
    { metric: '40%', label: 'Average Cost Reduction', description: 'Across all implemented solutions' },
    { metric: '3.2x', label: 'ROI Improvement', description: 'For our enterprise clients' },
    { metric: '85%', label: 'Faster Implementation', description: 'Compared to traditional approaches' },
    { metric: '99.9%', label: 'Uptime Guarantee', description: 'For all production systems' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Industry Solutions - Zion Tech Group"
        description="Tailored technology solutions for finance, healthcare, retail, manufacturing, and more. Transform your industry with Zion Tech Group's innovative solutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Industry <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Tailored technology solutions designed specifically for your industry. 
              We understand your unique challenges and deliver innovative solutions that drive real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(industry.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeIndustry === industry.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-slate-700/30 text-gray-300 hover:bg-slate-600/50 hover:text-white border border-slate-600/50'
                }`}
              >
                <industry.icon className="w-5 h-5 mr-2" />
                {industry.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-700/30 rounded-2xl border border-slate-600/30 p-8 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {solution.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <span
                        key={benefitIndex}
                        className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-xs text-cyan-400"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Common Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Proven solutions that address common challenges across industries.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <useCase.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="text-xs text-cyan-400 bg-cyan-500/20 rounded px-2 py-1">
                        {benefit}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Proven Results</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our solutions deliver measurable business outcomes across all industries.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {successMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-cyan-400 mb-3">{metric.metric}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{metric.label}</h3>
                  <p className="text-gray-300 text-sm">{metric.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Implementation Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A structured approach to ensure successful solution deployment and maximum value.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Assessment',
                  description: 'Deep dive into your business needs and current infrastructure.'
                },
                {
                  step: '02',
                  title: 'Strategy',
                  description: 'Develop a comprehensive implementation roadmap.'
                },
                {
                  step: '03',
                  title: 'Implementation',
                  description: 'Agile development and deployment with continuous feedback.'
                },
                {
                  step: '04',
                  title: 'Optimization',
                  description: 'Continuous improvement and performance optimization.'
                }
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Industry?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our industry-specific solutions can address your unique challenges and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/case-studies"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
