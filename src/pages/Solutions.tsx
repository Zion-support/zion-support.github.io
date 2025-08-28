import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  TrendingUp, 
  Scale, 
  Eye, 
  Factory, 
  ShoppingCart, 
  Shield, 
  Leaf, 
  Rocket, 
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Zap,
  Brain,
  Cloud,
  Lock,
  Database,
  Globe,
  Building
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Solutions() {
  const solutions = [
    {
      category: 'Healthcare Solutions',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      description: 'Digital health transformation with AI-powered diagnostics and patient care',
      features: [
        'AI Medical Imaging Analysis',
        'Predictive Healthcare Analytics',
        'Patient Data Management',
        'Telemedicine Platforms',
        'Drug Discovery AI',
        'Clinical Trial Optimization'
      ],
      benefits: [
        'Improved diagnostic accuracy',
        'Reduced healthcare costs',
        'Enhanced patient outcomes',
        'Streamlined workflows'
      ]
    },
    {
      category: 'Financial Services',
      icon: TrendingUp,
      color: 'from-emerald-500 to-green-500',
      description: 'Fintech innovation with AI-driven risk management and compliance',
      features: [
        'AI Risk Assessment',
        'Fraud Detection Systems',
        'Algorithmic Trading',
        'Regulatory Compliance',
        'Customer Analytics',
        'Portfolio Optimization'
      ],
      benefits: [
        'Enhanced risk management',
        'Improved compliance',
        'Better customer insights',
        'Increased operational efficiency'
      ]
    },
    {
      category: 'Legal Services',
      icon: Scale,
      color: 'from-blue-500 to-indigo-500',
      description: 'AI-powered legal tech for document analysis and compliance',
      features: [
        'Document Review AI',
        'Contract Analysis',
        'Legal Research Automation',
        'Compliance Monitoring',
        'Case Prediction',
        'E-Discovery Solutions'
      ],
      benefits: [
        'Faster document processing',
        'Improved accuracy',
        'Cost reduction',
        'Enhanced compliance'
      ]
    },
    {
      category: 'Research & Academia',
      icon: Eye,
      color: 'from-purple-500 to-violet-500',
      description: 'Scientific research acceleration with AI and quantum computing',
      features: [
        'Research Data Analysis',
        'Literature Review AI',
        'Hypothesis Generation',
        'Experimental Design',
        'Publication Analytics',
        'Collaboration Platforms'
      ],
      benefits: [
        'Accelerated research',
        'Better insights',
        'Improved collaboration',
        'Enhanced reproducibility'
      ]
    },
    {
      category: 'Manufacturing',
      icon: Factory,
      color: 'from-orange-500 to-red-500',
      description: 'Smart manufacturing with IoT and AI optimization',
      features: [
        'Predictive Maintenance',
        'Quality Control AI',
        'Supply Chain Optimization',
        'Production Planning',
        'Energy Management',
        'Safety Monitoring'
      ],
      benefits: [
        'Reduced downtime',
        'Improved quality',
        'Lower costs',
        'Enhanced safety'
      ]
    },
    {
      category: 'Retail & E-commerce',
      icon: ShoppingCart,
      color: 'from-pink-500 to-rose-500',
      description: 'Customer experience optimization with AI and analytics',
      features: [
        'Customer Behavior Analysis',
        'Personalized Recommendations',
        'Inventory Optimization',
        'Price Intelligence',
        'Customer Service AI',
        'Market Trend Analysis'
      ],
      benefits: [
        'Increased sales',
        'Better customer experience',
        'Optimized inventory',
        'Competitive pricing'
      ]
    },
    {
      category: 'Government & Public Sector',
      icon: Shield,
      color: 'from-slate-500 to-gray-500',
      description: 'Public sector innovation with secure digital solutions',
      features: [
        'Digital Government Services',
        'Cybersecurity Solutions',
        'Data Analytics',
        'Process Automation',
        'Citizen Engagement',
        'Resource Optimization'
      ],
      benefits: [
        'Improved efficiency',
        'Enhanced security',
        'Better citizen services',
        'Cost savings'
      ]
    },
    {
      category: 'Energy & Sustainability',
      icon: Leaf,
      color: 'from-green-500 to-teal-500',
      description: 'Green technology solutions for sustainable energy management',
      features: [
        'Renewable Energy Optimization',
        'Smart Grid Management',
        'Energy Efficiency Analytics',
        'Carbon Footprint Tracking',
        'Sustainability Reporting',
        'Green Building Solutions'
      ],
      benefits: [
        'Reduced energy costs',
        'Environmental impact',
        'Compliance support',
        'Operational efficiency'
      ]
    },
    {
      category: 'Space & Aerospace',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500',
      description: 'Advanced space technology with AI and quantum computing',
      features: [
        'Satellite Operations',
        'Mission Planning AI',
        'Space Data Analytics',
        'Autonomous Systems',
        'Communication Networks',
        'Space Debris Tracking'
      ],
      benefits: [
        'Enhanced mission success',
        'Improved safety',
        'Cost optimization',
        'Innovation leadership'
      ]
    },
    {
      category: 'Education & Training',
      icon: GraduationCap,
      color: 'from-amber-500 to-orange-500',
      description: 'Next-generation learning with AI and immersive technology',
      features: [
        'Personalized Learning',
        'AI Tutoring Systems',
        'Virtual Reality Training',
        'Assessment Analytics',
        'Content Creation AI',
        'Learning Management'
      ],
      benefits: [
        'Improved learning outcomes',
        'Personalized experience',
        'Cost-effective training',
        'Scalable education'
      ]
    }
  ];

  const enterpriseFeatures = [
    'Scalable Architecture',
    'Enterprise Security',
    '24/7 Support',
    'Custom Integration',
    'Compliance Ready',
    'Performance Monitoring'
  ];

  const smbFeatures = [
    'Quick Deployment',
    'Affordable Pricing',
    'Essential Features',
    'Easy Management',
    'Mobile Access',
    'Basic Support'
  ];

  const startupFeatures = [
    'Rapid Prototyping',
    'MVP Development',
    'Scalable Foundation',
    'Investor Ready',
    'Growth Analytics',
    'Technical Support'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Industry Solutions - Zion Tech Group"
        description="Transform your industry with our cutting-edge AI, quantum computing, and innovative technology solutions. Tailored solutions for healthcare, finance, legal, manufacturing, and more."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Industry Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with our cutting-edge AI, quantum computing, and innovative technology solutions. 
              Tailored for your industry, designed for your success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </a>
              <a
                href="/request-quote"
                className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Request Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our solutions are designed to address the unique challenges and opportunities 
              of each industry, leveraging cutting-edge technology for maximum impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{solution.category}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{solution.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Size Solutions */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Solutions for Every Business Size
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From startups to enterprise organizations, we have solutions that scale with your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Enterprise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl border border-cyan-400/50 p-8 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Solutions</h3>
              <p className="text-gray-400 mb-6">
                Comprehensive solutions for large organizations with complex requirements and global operations.
              </p>
              <ul className="space-y-3 mb-8 text-left">
                {enterpriseFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Enterprise Inquiry
              </a>
            </motion.div>

            {/* SMB */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl border border-slate-600 p-8 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">SMB Solutions</h3>
              <p className="text-gray-400 mb-6">
                Cost-effective solutions designed for small to medium businesses looking to grow and compete.
              </p>
              <ul className="space-y-3 mb-8 text-left">
                {smbFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
              >
                SMB Inquiry
              </a>
            </motion.div>

            {/* Startup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl border border-slate-600 p-8 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Startup Solutions</h3>
              <p className="text-gray-400 mb-6">
                Rapid development and deployment solutions to help startups move fast and scale efficiently.
              </p>
              <ul className="space-y-3 mb-8 text-left">
                {startupFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
              >
                Startup Inquiry
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl border border-cyan-400/30 p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our industry-specific solutions can drive innovation, 
              efficiency, and growth for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Schedule Consultation
              </a>
              <a
                href="/request-quote"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Get Custom Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}