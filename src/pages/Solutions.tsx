<<<<<<< HEAD
import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';

const Solutions: React.FC = () => {
  return()
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO "
        title="Solutions - Zion Tech Group"
        description="Explore industry and capability solutions including enterprise and healthcare."
      />"
      <div className="container-responsive py-16">"
        <h1 className="text-4xl font-bold mb-6">Solutions</h1>"
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">"
          <Link to="/solutions/enterprise" className="p-6 rounded-xl bg-slate-800/60 border border-slate-700 hover:border-cyan-400 transition">Enterprise</Link>"
          <Link to="/solutions/healthcare" className="p-6 rounded-xl bg-slate-800/60 border border-slate-700 hover:border-cyan-400 transition">Healthcare</Link>
        </div>
      </div>
    </div>) ;
};

export default Solutions;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
=======
import React from 'react';'
import { SEO } from '@/components/SEO';'
import { Link } from 'react-router-dom';import {
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954

  Brain,
  Cloud,
  Cpu,
  Database,
  Lock,
  Zap,
  Target,
  Award,
  Clock,
  DollarSign,
  Search,
  Filter'
} from 'lucide-react';

const solutionCategories = [
  {

    id: 'ai-ml',
    name: 'AI & Machine Learning',
    icon: Brain,
    description: 'Transform your business with intelligent automation and predictive insights',
    color: 'from-purple-500 to-indigo-600',
    solutions: ['
      'Predictive Analytics',Natural Language Processing',Computer Vision',Recommendation Systems',Chatbots & Virtual Assistants',Machine Learning Models'
    ]
  },
  {

    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: Shield,
    description: 'Protect your digital assets with enterprise-grade security solutions',
    color: 'from-red-500 to-pink-600',
    solutions: ['
      'Threat Detection & Response',Identity & Access Management',Security Compliance',Penetration Testing',Security Training',Incident Response'
    ]
  },
  {

    id: 'cloud-computing',
    name: 'Cloud Computing',
    icon: Cloud,
    description: 'Scale your infrastructure with flexible and cost-effective cloud solutions',
    color: 'from-blue-500 to-cyan-600',
    solutions: ['
      'Cloud Migration',Infrastructure as Code',Container Orchestration',Serverless Computing',Multi-cloud Strategy',Cloud Security'
    ]
  },
  {

    id: 'data-analytics',
    name: 'Data Analytics',
    icon: TrendingUp,
    description: 'Turn your data into actionable insights for better decision making',
    color: 'from-green-500 to-emerald-600',
    solutions: ['
      'Business Intelligence',Data Warehousing',Real-time Analytics',Predictive Modeling',Data Visualization',Big Data Processing'
    ]
  },
  {

    id: 'iot-edge',
    name: 'IoT & Edge Computing',
    icon: Zap,
    description: 'Connect devices and process data closer to the source for real-time insights',
    color: 'from-yellow-500 to-orange-600',
    solutions: ['
      'IoT Device Management',Edge Computing Platforms',Sensor Networks',Real-time Monitoring',Predictive Maintenance',Smart City Solutions'
    ]
  },
  {

    id: 'digital-transformation',
    name: 'Digital Transformation',
    icon: Globe,
    description: 'Modernize your business processes and customer experience',
    color: 'from-indigo-500 to-purple-600',
    solutions: ['
<<<<<<< HEAD
      'Process Automation',Customer Experience',;
      'Legacy Modernization',;
      'Digital Strategy',;
      'Change Management',;
      'Technology Consulting';
    ];
  };
=======
      'Process Automation','
      'Customer Experience',;'
      'Legacy Modernization',;'
      'Digital Strategy',;'
      'Change Management',;'      'Technology Consulting';
    ]};
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
];
;
const industrySolutions = [
  {

    industry: 'Healthcare',
    icon: Heart,
    solutions: ['
      'Electronic Health Records',Telemedicine Platforms',Medical Imaging AI',Patient Data Analytics',Healthcare Security',Regulatory Compliance'
    ],
    color: 'from-pink-500 to-rose-600'
  },
  {

    industry: 'Finance',
    icon: DollarSign,
    solutions: ['
      'Fintech Applications',Risk Management',Fraud Detection',Regulatory Compliance',Digital Banking',Blockchain Solutions'
    ],
    color: 'from-green-500 to-emerald-600'
  },
  {

    industry: 'Manufacturing',
    icon: Cpu,
    solutions: ['
      'Smart Manufacturing',Predictive Maintenance',Quality Control',Supply Chain Optimization',Industrial IoT',Automation Systems'
    ],
    color: 'from-blue-500 to-cyan-600'
  },
  {

    industry: 'Retail',
    icon: ShoppingCart,
    solutions: ['
      'E-commerce Platforms',Customer Analytics',Inventory Management',Omnichannel Solutions',Personalization',Supply Chain Management'
    ],
    color: 'from-purple-500 to-indigo-600'
  },
  {

    industry: 'Education',
    icon: BookOpen,
    solutions: ['
      'Learning Management Systems',Virtual Classrooms',Student Analytics',Content Management',Assessment Tools',Collaboration Platforms'
    ],
    color: 'from-yellow-500 to-orange-600'
  },
  {

    industry: 'Government',
    icon: Shield,
    solutions: ['
      'Digital Services',Data Security',Process Automation',;
      'Citizen Engagement',;
      'Regulatory Compliance',;
      'Infrastructure Management';
    ],;
    color: 'from-gray-500 to-slate-600';
  };
];
;
const featuredSolutions = [
  {

    id: 1,
    name: 'AI-Powered Business Intelligence',
    category: 'AI & ML',
    description: 'Transform your data into actionable insights with our advanced AI-powered analytics platform. Get real-time dashboards, predictive modeling, and automated reporting.',
    features: ['
      'Real-time data processing',Predictive analytics models',Custom dashboard creation',Automated reporting',Natural language queries',Mobile-responsive design'
    ],
    benefits: ['
      '30% faster decision making',Reduced manual reporting',Improved data accuracy',Enhanced user experience'
    ],
    price: 'Starting at $2,500/month',
    implementation: '4-8 weeks',
    icon: Brain,
    color: 'from-purple-500 to-indigo-600'
  },
  {

    id: 2,
    name: 'Zero-Trust Security Framework',
    category: 'Cybersecurity',
    description: 'Implement a comprehensive security framework that continuously verifies every user, device, and connection to protect your organization from modern threats.',
    features: ['
      'Identity verification',Device authentication',Network segmentation',Threat detection',Compliance monitoring',Incident response'
    ],
    benefits: ['
      '99.9% threat detection rate',Reduced security incidents',Compliance achievement',Lower insurance costs'
    ],
    price: 'Starting at $3,200/month',
    implementation: '6-12 weeks',
    icon: Shield,
    color: 'from-red-500 to-pink-600'
  },
  {

    id: 3,
    name: 'Cloud-Native Infrastructure',
    category: 'Cloud Computing',
    description: 'Build scalable, resilient, and cost-effective infrastructure using modern cloud-native technologies and best practices.',
    features: ['
      'Auto-scaling infrastructure',Container orchestration',CI/CD pipelines',Monitoring & alerting',Disaster recovery',Cost optimization'
    ],
    benefits: ['
      '50% infrastructure cost reduction',99.9% uptime guarantee',Faster deployment cycles',Improved scalability';
    ],;
    price: 'Starting at $1,800/month',;
    implementation: '8-16 weeks',;
    icon: Cloud,;
    color: 'from-blue-500 to-cyan-600';
  };
];

  const solutions = [
    // Enterprise Solutions
    {
      id: 'enterprise-digital-transformation',
      title: 'Enterprise Digital Transformation',
      description: 'Comprehensive digital transformation strategy and implementation for large organizations.',
      industry: 'enterprise',
      challenges: ['Legacy system modernization',Process automation',Data silo integration',Change management'],
      solutions: ['AI-powered workflow automation',Cloud migration strategy',Data governance framework',Employee training programs'],
      benefits: ['30% operational efficiency improvement',Reduced IT costs by 25%',Improved customer experience',Faster time to market'],
      technologies: ['AI/ML',Cloud Computing',Data Analytics',IoT',Blockchain'],
      icon: Building2,
      color: 'from-blue-500 to-cyan-500',
      href: '/solutions/enterprise-digital-transformation'
    },
    {

      title: 'Enterprise Solutions',
      icon: Building,
      description: 'Scalable enterprise-grade solutions for large organizations',
      color: 'from-blue-500 to-indigo-600',
      features: ['
        'Digital Transformation Consulting',Enterprise AI Integration',Scalable Cloud Infrastructure',Enterprise Security & Compliance',Business Process Automation',Data Governance & Analytics'
      ],
      useCases: ['
        'Fortune 500 Digital Transformation',Multi-national AI Implementation',Enterprise Security Modernization',Legacy System Migration'
      ],
      href: '/solutions/enterprise'
    },

    // Healthcare Solutions
    {

      title: 'Healthcare Solutions',
      icon: Heart,
      description: 'AI-powered healthcare solutions for improved patient outcomes',
      color: 'from-red-500 to-pink-600',
      features: ['
        'AI Diagnostic Tools',Patient Data Analytics',Healthcare Process Automation',Medical Imaging AI',Drug Discovery Support',Healthcare Compliance'
      ],
      useCases: ['
        'AI-Powered Diagnosis Systems',Patient Outcome Prediction',Medical Image Analysis',Healthcare Workflow Optimization'
      ],
      href: '/solutions/healthcare'
    },
    {

      title: 'Financial Services',
      icon: DollarSign,
      description: 'Advanced financial technology solutions for modern banking',
      color: 'from-green-500 to-emerald-600',
      features: ['
        'AI Trading Algorithms',Risk Management Systems',Fraud Detection AI',Financial Analytics',Regulatory Compliance',Customer Experience AI'
      ],
      useCases: ['
        'Algorithmic Trading Platforms',Real-time Risk Assessment',AI Fraud Prevention',Personalized Banking'
      ],
      href: '/solutions/financial'
    },

    // Financial Services Solutions
    {

      title: 'Manufacturing Solutions',
      icon: Truck,
      description: 'Smart manufacturing and Industry 4.0 solutions',
      color: 'from-orange-500 to-red-600',
      features: ['
        'Predictive Maintenance',Quality Control AI',Supply Chain Optimization',IoT Integration',Production Analytics',Smart Factory Solutions'
      ],
      useCases: ['
        'Predictive Maintenance Systems',Quality Control Automation',Supply Chain Optimization',Smart Factory Implementation'
      ],
      href: '/solutions/manufacturing'
    },
    {

      title: 'Government Solutions',
      icon: Shield,
      description: 'Secure and compliant government technology solutions',
      color: 'from-purple-500 to-indigo-600',
      features: ['
        'Cybersecurity & Compliance',Data Governance',Citizen Services AI',Infrastructure Management',Public Safety Systems',Regulatory Compliance'
      ],
      useCases: ['
        'Government Cybersecurity',Smart City Infrastructure',Citizen Service Automation',Public Safety AI'
      ],
      href: '/solutions/government'
    },

    // Manufacturing Solutions
    {

      title: 'Education Solutions',
      icon: BookOpen,
      description: 'Innovative educational technology for modern learning',
      color: 'from-cyan-500 to-blue-600',
      features: ['
        'AI Learning Platforms',Personalized Education',Student Analytics',Virtual Learning Environments',Assessment Automation',Educational Content AI'
      ],
      useCases: ['
        'Personalized Learning Systems',Student Performance Analytics',Virtual Classroom Platforms',AI-Powered Assessment'
      ],
      href: '/solutions/education'
    }
  ];

    // Retail & E-commerce Solutions
    {

      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Cutting-edge AI solutions for business transformation',
      color: 'from-purple-500 to-pink-600',
      solutions: ['
        'AI Business Intelligence',Machine Learning Platforms',Natural Language Processing',Computer Vision Systems',Predictive Analytics',AI Automation'
      ]
    },
    {

      title: 'Cloud & Infrastructure',
      icon: Cloud,
      description: 'Scalable cloud solutions and infrastructure management',
      color: 'from-blue-500 to-cyan-600',
      solutions: ['
        'Cloud Migration',DevOps Automation',Container Orchestration',Serverless Computing',Multi-cloud Management',Edge Computing'
      ]
    },

    // Education Solutions
    {

      title: 'Cybersecurity',
      icon: Shield,
      description: 'Advanced security solutions for modern threats',
      color: 'from-red-500 to-orange-600',
      solutions: ['
        'Zero Trust Security',AI Threat Detection',Compliance Management',Identity & Access Management',Security Automation',Incident Response'
      ]
    },

    // Government Solutions
    {

      title: 'Quantum Computing',
      icon: Atom,
      description: 'Next-generation quantum computing solutions',
      color: 'from-indigo-500 to-purple-600',
      solutions: ['
        'Quantum Algorithms',Quantum Machine Learning',Quantum Cryptography',Quantum Simulation',Hybrid Quantum-Classical',Quantum Optimization'
      ]
    }
  ];

  const filteredSolutions = activeIndustry === 'all' 
    ? solutions 
    : solutions.filter(solution => solution.industry === activeIndustry);
  return ("
    <div className = "min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      {/* Hero Section */}"
      <section className="pt-24 pb-16">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20 

}}
            animate = {

  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}"
            className="text-center"
          >"
            <div className="flex items-center justify-center space-x-3 mb-6">"
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/50">"
                <Target className="w-8 h-8 text-white" />              </div>
              <div>
      </section>

        {/* Industry Filter */}"
        <section className="py-16 px-4">"
          <div className="max-w-6xl mx-auto">"
            <div className="flex flex-wrap gap-4 justify-center">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center ${

                    selectedIndustry === industry.id'
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30''
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700/50'`
                  }`}
                >"
                  <industry.icon className="w-5 h-5 mr-2" />
                  {industry.name}
                </button>) ) }
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {categories.map (category => (<option key={category} value={category}>{category}</option>) ) }
                </select>
              </div>

              {/* Industry Filter */}
              <div>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {industries.map (industry => (<option key={industry} value={industry}>{industry}</option>) ) }
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Categories */}"
      <section className="py-16">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}"
            className="mb-12 text-center"
          >"
            <h2 className="text-3xl font-bold text-white mb-4">Solution Categories</h2>"
            <p className="text-zion-slate-light text-lg">Explore our comprehensive range of technology solutions</p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionCategories.map((category, index) => {

              const IconComponent = category.icon;
              return()                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}"
                  className="group cursor-pointer"
                >`
                  <Link to={`/solutions#${category.id}`}>"
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/30 transition-all duration-300 h-full">`
                      <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>"
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>"
                      <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3>"
                      <p className="text-zion-slate-light mb-4">{category.description}</p>"
                      <div className="space-y-2">
                        {category.solutions.slice(0, 4).map((solution, idx) => ("
                          <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">"
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            <span>{solution}</span>
                          </div>
                        ))}
                      </div>"
                      <div className="mt-4 flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors duration-300">"
                        <span className="text-sm font-medium">Learn More</span>"
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>) ;
            }) }          </div>
        </div>
      </section>

      {/* Industry Solutions */}"
      <section className="py-16">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}"
            className="mb-12 text-center"
          >"
            <h2 className="text-3xl font-bold text-white mb-4">Industry-Specific Solutions</h2>'"
            <p className="text-zion-slate-light text-lg">Tailored solutions designed for your industry's unique challenges</p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((industry, index) => {

              const IconComponent = industry.icon;
              return()                <motion.div
                  key={industry.industry}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}"
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/30 transition-all duration-300"
                >`
                  <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mb-4`}>"
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>"
                  <h3 className="text-xl font-bold text-white mb-3">{industry.industry}</h3>"
                  <div className="space-y-2">
                    {industry.solutions.slice(0, 4).map((solution, idx) => ("
                      <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">"
                        <CheckCircle className="w-3 h-3 text-green-400" />                        <span>{solution}</span>
                      </div>
                    ))}
                  </div>"
                  <div className="mt-4">
                    <Link`
                      to={`/solutions/${industry.industry.toLowerCase()}`}"
                      className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
                    >
                      View {industry.industry} Solutions"
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>) ;
            }) }          </div>
        </div>
      </section>

      {/* Featured Solutions */}"
      <section className="py-16">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}"
            className="mb-12 text-center"
          >"
            <h2 className="text-3xl font-bold text-white mb-4">Featured Solutions</h2>"
            <p className="text-zion-slate-light text-lg">Our most popular and impactful technology solutions</p>
          </motion.div>
"
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredSolutions.map((solution, index) => {

              const IconComponent = solution.icon;
              return()                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}"
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/30 transition-all duration-300"
                >
                  {/* Header */}"
                  <div className="flex items-start justify-between mb-4">"
                    <div className="flex items-center gap-3">`
                      <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center`}>"
                        <IconComponent className="w-8 h-8 text-white" />                      </div>
                      <div>"
                        <h3 className="text-xl font-bold text-white mb-1">{solution.name}</h3>"
                        <span className="text-sm text-zion-cyan">{solution.category}</span>
                      </div>
                    </div>"
                    <div className="text-right">"
                      <div className="text-2xl font-bold text-zion-cyan">{solution.price}</div>"
                      <div className="text-sm text-zion-slate-light">Starting Price</div>
                    </div>
                  </div>

                  {/* Description */}"
                  <p className="text-zion-slate-light mb-4">{solution.description}</p>

                  {/* Features */}"
                  <div className="mb-4">"
                    <h4 className="font-semibold text-white mb-2">Key Features</h4>"
                    <div className="grid grid-cols-1 gap-1">
                      {solution.features.slice(0, 4).map((feature, idx) => ("
                        <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">"
                          <CheckCircle className="w-3 h-3 text-green-400" />                          <span>{feature}</span>
                        </div>) ) }
                    </div>
                  </div>

                  {/* Benefits */}"
                  <div className="mb-4">"
                    <h4 className="font-semibold text-white mb-2">Business Benefits</h4>"
                    <div className="grid grid-cols-1 gap-1">
                      {solution.benefits.map((benefit, idx) => ("
                        <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">"
                          <Star className="w-3 h-3 text-yellow-400" />                          <span>{benefit}</span>
                        </div>) ) }
                    </div>
                  </div>

                  {/* Implementation & CTA */}"
                  <div className="flex items-center justify-between">"
                    <div className="text-sm text-zion-slate-light">"
                      <span className="flex items-center gap-1">"
                        <Clock className="w-4 h-4" />                        Implementation: {solution.implementation}
                      </span>
                    </div>
                    <Link`
                      to={`/solutions/${solution.id}`}"
                      className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
                    >
                      Learn More"
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>) ;
            }) }          </div>
        </div>
      </section>

      {/* CTA Section */}"
      <section className="py-16">"
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}"
            className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-3xl p-8"
          >"
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>"
            <p className="text-zion-slate-light text-lg mb-8">
              Let's discuss how our technology solutions can address your specific challenges 
              and drive measurable results for your organization.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link"
                to="/contact"
                className="inline-flex items-center bg-white text-zion-cyan px-8 py-4 rounded-xl hover:bg-zion-slate-light transition-all duration-300 font-medium text-lg"
              >
                Get Started Today"
                <ArrowRight className="ml-2 h-5 w-5" />              </Link>
              <Link"
                to="/case-studies"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-zion-cyan transition-all duration-300 font-medium text-lg"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
        </section>

      {/* Solution Categories */}"
      <section className="py-16">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20 

}}
            whileInView = {

  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}"
            className="mb-12 text-center"
          >;"
            <h2 className="text-3xl font-bold text-white mb-4">Solution Categories</h2>;"
            <p className="text-zion-slate-light text-lg">Explore our comprehensive range of technology solutions</p>;
          </motion.div>;
;"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {solutionCategories.map((category, index) => {;
              const IconComponent = category.icon;
              return()                <motion.div
                  key = {category.id}
                  initial = {

  { opacity: 0,
  y: 20 

}}
                  whileInView = {

  { opacity: 1,
  y: 0 

}}
                  transition = {

  { duration: 0.6,
  delay: index * 0.1 

}}
                  viewport={{ once: true }}"
                  className="group cursor-pointer"
                >`
                  <Link to={`/solutions#${category.id}`}>"
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/30 transition-all duration-300 h-full">`
                      <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>"
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>"
                      <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3>"
                      <p className="text-zion-slate-light mb-4">{category.description}</p>"
                      <div className="space-y-2">
                        {category.solutions.slice(0, 4).map((solution, idx) => ("
                          <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">"
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            <span>{solution}</span>
                          </div>
                        ))}
                      </div>"
                      <div className="mt-4 flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors duration-300">;"
                        <span className="text-sm font-medium">Learn More</span>;"
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />;
                      </div>;
                    </div>;
                  </Link>;
                </motion.div>;) ;
            }) }          </div>
        </div>
      </section>

      {/* Industry Solutions */}"
      <section className = "py-16">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20 

}}
            whileInView = {

  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}"
            className="mb-12 text-center"
          >;"
            <h2 className="text-3xl font-bold text-white mb-4">Industry-Specific Solutions</h2>;'"
            <p className="text-zion-slate-light text-lg">Tailored solutions designed for your industry's unique challenges</p>;
          </motion.div>;
;"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {industrySolutions.map((industry, index) => {;
              const IconComponent = industry.icon;
              return()                <motion.div
                  key = {industry.industry}
                  initial = {

  { opacity: 0,
  y: 20 

}}
                  whileInView = {

  { opacity: 1,
  y: 0 

}}
                  transition = {

  { duration: 0.6,
  delay: index * 0.1 

}}
                  viewport={{ once: true }}"
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/30 transition-all duration-300"
                >`
                  <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mb-4`}>"
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>"
                  <h3 className="text-xl font-bold text-white mb-3">{industry.industry}</h3>"
                  <div className="space-y-2">
                    {industry.solutions.slice(0, 4).map((solution, idx) => ("
                      <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">"
                        <CheckCircle className="w-3 h-3 text-green-400" />                        <span>{solution}</span>
                      </div>
                    ))}
                  </div>"
                  <div className="mt-4">
                    <Link`
                      to={`/solutions/${industry.industry.toLowerCase()}`}"
                      className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300";
                    >;
                      View {industry.industry} Solutions;"
                      <ArrowRight className="ml-2 h-4 w-4" />;
                    </Link>;
                  </div>;
                </motion.div>;) ;
            }) }          </div>
        </div>
      </section>;

      {/* Featured Solutions */}"
      <section className = "py-16">;"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20 

}}
            whileInView = {

  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}"
            className="mb-12 text-center"
          >;"
            <h2 className="text-3xl font-bold text-white mb-4">Featured Solutions</h2>;"
            <p className="text-zion-slate-light text-lg">Our most popular and impactful technology solutions</p>;
          </motion.div>;
;"
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {filteredSolutions.map((solution, index) => {;
              const IconComponent = solution.icon;
              return()                <motion.div
                  key = {solution.id}
                  initial = {

  { opacity: 0,
  y: 20 

}}
                  whileInView = {

  { opacity: 1,
  y: 0 

}}
                  transition = {

  { duration: 0.6,
  delay: index * 0.1 

}}
                  viewport={{ once: true }}"
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/30 transition-all duration-300"
                >"
                  <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">"
                    <solution.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  "
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>"
                  <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                  
                  {/* Features */}"
                  <div className="mb-6">"
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features</h4>"
                    <div className="grid grid-cols-2 gap-2">
                      {solution.features.slice(0, 4).map((feature, idx) => ("
                        <div key={idx} className="flex items-center space-x-2 text-gray-300 text-sm">"
                          <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />                          <span>{feature}</span>
                        </div>) ) }
                    </div>
                  </div>

                  {/* Benefits */}"
                  <div className="mb-6">"
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Benefits</h4>"
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, idx) => ("
                        <li key={idx} className="flex items-start space-x-2 text-gray-300 text-sm">"
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{benefit}</span>
                        </li>) ) }
                    </ul>
                  </div>

                  {/* Actions */}"
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">"
                    <div className="flex space-x-2">
                      {solution.demo && ("
                        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-500 transition-colors duration-300">"
                          <Play className="w-4 h-4 mr-1 inline" />                          Demo
                        </button>
                      )}
                      {solution.trial && ("
                        <button className="px-4 py-2 border border-blue-600 text-blue-400 text-sm font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300">
                          Start Trial
                        </button>) }
                    </div>
                    <Link`
                      to={`/solutions/${solution.id}`}"
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                    >
                      Learn More;"
                      <ArrowRight className="ml-2 h-4 w-4" />;
                    </Link>;
                  </div>;
                </motion.div>;) ;
            }) }          </div>
        </motion.div>

      {/* CTA Section */}"
      <section className = "py-16">"
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20 

}}
            whileInView = {

  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}"
            className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-3xl p-8"
          >"
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>"
            <p className="text-gray-300 mb-6">
              Let our experts help you find the perfect solution for your industry and business needs.
            </p>"
            <div className="flex flex-wrap justify-center gap-4">
              <Link"
                to="/contact"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold"
              >
                Get Started
              </Link>
              <Link"
                to="/request-quote"
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 font-semibold"
              >
                Request Quote
              </Link>
              <Link"
                to="/case-studies"
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 font-semibold"
              >
                View Case Studies;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;) ;
}
      </div>
    </div>
  );
}
'"`