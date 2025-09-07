import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Heart, 
  TrendingUp, 
  Scale, 
  Atom, 
  Factory, 
  ShoppingCart, 
  Shield, 
  Leaf, 
  Rocket,
  GraduationCap,
  Users,
  CheckCircle,
  ArrowUpRight,
  Globe,
  Cpu,
  Database,
  Network,
  Cloud,
  Lock,
  Brain,
  Target,
  Zap,
  Star,
  Award,
  Crown,
  Sparkles,
  Flame,
  Sun,
  Moon,
  Infinity,
  BarChart3,
  Code,
  Truck,
  Gauge,
  GitFork,
  PenTool,
  Eye,
  Server,
  Smartphone,
  Clock,
  ShoppingCart as CartIcon,
  FileText,
  Settings,
  Key,
  Car,
  Home,
  City
} from 'lucide-react';
import { SEO } from '../components/SEO';

const Solutions: React.FC = () => {
  const solutions = [
    {
      id: 'healthcare',
      title: 'Healthcare Solutions',
      description: 'Digital transformation solutions for modern healthcare organizations',
      icon: Heart,
      features: [
        'Electronic Health Records (EHR)',
        'Telemedicine Platforms',
        'AI-Powered Diagnostics',
        'Patient Management Systems',
        'Healthcare Analytics',
        'Compliance & Security'
      ],
      color: 'from-red-500 to-pink-500',
      benefits: [
        'Improved Patient Outcomes',
        'Reduced Administrative Burden',
        'Enhanced Data Security',
        'Streamlined Workflows',
        'Better Resource Allocation',
        'Regulatory Compliance'
      ]
    },
    {
      id: 'financial',
      title: 'Financial Services',
      description: 'Innovative fintech solutions for banking and financial institutions',
      icon: TrendingUp,
      features: [
        'Digital Banking Platforms',
        'AI-Powered Risk Assessment',
        'Fraud Detection Systems',
        'Compliance Management',
        'Customer Analytics',
        'Blockchain Integration'
      ],
      color: 'from-green-500 to-emerald-500',
      benefits: [
        'Enhanced Security',
        'Improved Customer Experience',
        'Reduced Operational Costs',
        'Better Risk Management',
        'Regulatory Compliance',
        'Increased Efficiency'
      ]
    },
    {
      id: 'legal',
      title: 'Legal Services',
      description: 'Technology solutions for modern legal practices',
      icon: Scale,
      features: [
        'Document Management Systems',
        'AI Legal Research',
        'Case Management',
        'Contract Analysis',
        'Compliance Monitoring',
        'Client Portal'
      ],
      color: 'from-blue-500 to-indigo-500',
      benefits: [
        'Improved Efficiency',
        'Better Client Service',
        'Reduced Manual Work',
        'Enhanced Security',
        'Cost Savings',
        'Competitive Advantage'
      ]
    },
    {
      id: 'research',
      title: 'Research & Academia',
      description: 'Advanced research tools and academic solutions',
      icon: Atom,
      features: [
        'Research Data Management',
        'Collaboration Platforms',
        'AI-Powered Analysis',
        'Publication Management',
        'Grant Tracking',
        'Knowledge Sharing'
      ],
      color: 'from-purple-500 to-violet-500',
      benefits: [
        'Accelerated Research',
        'Better Collaboration',
        'Data Integrity',
        'Increased Funding',
        'Global Reach',
        'Innovation Support'
      ]
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      description: 'Smart manufacturing and Industry 4.0 solutions',
      icon: Factory,
      features: [
        'IoT Integration',
        'Predictive Maintenance',
        'Quality Control Systems',
        'Supply Chain Optimization',
        'Production Analytics',
        'Automation Solutions'
      ],
      color: 'from-orange-500 to-red-500',
      benefits: [
        'Increased Productivity',
        'Reduced Downtime',
        'Better Quality Control',
        'Cost Optimization',
        'Real-time Monitoring',
        'Sustainable Operations'
      ]
    },
    {
      id: 'retail',
      title: 'Retail & E-commerce',
      description: 'Digital commerce and retail transformation solutions',
      icon: ShoppingCart,
      features: [
        'E-commerce Platforms',
        'Inventory Management',
        'Customer Analytics',
        'Omnichannel Solutions',
        'Payment Processing',
        'Marketing Automation'
      ],
      color: 'from-yellow-500 to-orange-500',
      benefits: [
        'Increased Sales',
        'Better Customer Experience',
        'Improved Inventory Management',
        'Reduced Costs',
        'Data-Driven Decisions',
        'Market Expansion'
      ]
    },
    {
      id: 'government',
      title: 'Government & Public Sector',
      description: 'Digital government and public service solutions',
      icon: Shield,
      features: [
        'Citizen Portals',
        'Digital Services',
        'Data Analytics',
        'Security & Compliance',
        'Process Automation',
        'Interagency Integration'
      ],
      color: 'from-gray-500 to-slate-500',
      benefits: [
        'Improved Citizen Services',
        'Increased Transparency',
        'Cost Reduction',
        'Better Security',
        'Operational Efficiency',
        'Public Trust'
      ]
    },
    {
      id: 'energy',
      title: 'Energy & Sustainability',
      description: 'Green technology and sustainable energy solutions',
      icon: Leaf,
      features: [
        'Renewable Energy Systems',
        'Energy Management',
        'Carbon Tracking',
        'Smart Grid Solutions',
        'Sustainability Analytics',
        'Green Building Tech'
      ],
      color: 'from-green-500 to-teal-500',
      benefits: [
        'Reduced Carbon Footprint',
        'Cost Savings',
        'Regulatory Compliance',
        'Improved Efficiency',
        'Environmental Impact',
        'Brand Enhancement'
      ]
    },
    {
      id: 'space',
      title: 'Space & Aerospace',
      description: 'Advanced space technology and aerospace solutions',
      icon: Rocket,
      features: [
        'Satellite Systems',
        'Space Data Analytics',
        'Mission Planning',
        'Aerospace Engineering',
        'Space Debris Tracking',
        'Astronomical Research'
      ],
      color: 'from-indigo-500 to-purple-500',
      benefits: [
        'Innovation Leadership',
        'Scientific Discovery',
        'Commercial Opportunities',
        'National Security',
        'Technology Advancement',
        'Global Collaboration'
      ]
    },
    {
      id: 'education',
      title: 'Education & Training',
      description: 'Digital learning and educational technology solutions',
      icon: GraduationCap,
      features: [
        'Learning Management Systems',
        'Virtual Classrooms',
        'AI-Powered Tutoring',
        'Student Analytics',
        'Content Creation Tools',
        'Assessment Platforms'
      ],
      color: 'from-blue-500 to-cyan-500',
      benefits: [
        'Improved Learning Outcomes',
        'Accessibility',
        'Cost Reduction',
        'Personalized Learning',
        'Global Reach',
        'Data-Driven Insights'
      ]
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
        title="Industry Solutions | Zion Tech Group"
        description="Comprehensive industry-specific solutions for healthcare, finance, manufacturing, retail, government, and more. Transform your industry with Zion Tech Group."
        keywords="industry solutions, healthcare solutions, financial services, manufacturing, retail, government, education, space technology"
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
                  Industry
                </span>
                <br />
                <span className="text-white">Solutions</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Transform your industry with cutting-edge technology solutions designed specifically for your business needs. 
                From healthcare to manufacturing, we deliver results that matter.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => scrollToSection('healthcare')}
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Healthcare Solutions
                </button>
                <button 
                  onClick={() => scrollToSection('financial')}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
                >
                  Financial Services
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Industry-Specific Solutions
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                We understand that each industry has unique challenges and requirements. 
                Our solutions are tailored to address your specific needs and drive measurable results.
              </p>
            </motion.div>

            <div className="space-y-16">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  id={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Content */}
                    <div>
                      <div className={`w-20 h-20 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6`}>
                        <solution.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">{solution.title}</h3>
                      <p className="text-lg text-slate-300 mb-6 leading-relaxed">{solution.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features</h4>
                          <ul className="space-y-2">
                            {solution.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-slate-300">
                                <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-green-400 mb-3">Benefits</h4>
                          <ul className="space-y-2">
                            {solution.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center text-slate-300">
                                <Star className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Visual/CTA */}
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl p-8 border border-slate-600/50">
                        <h4 className="text-xl font-semibold text-white mb-4">Ready to Transform?</h4>
                        <p className="text-slate-300 mb-6">
                          Let's discuss how our {solution.title.toLowerCase()} can drive innovation and growth for your organization.
                        </p>
                        <div className="space-y-3">
                          <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                            Schedule Consultation
                          </button>
                          <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                            Request Demo
                          </button>
                        </div>
                      </div>
                    </div>
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
                Ready to Transform Your Industry?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Our industry experts are ready to help you implement the right solutions for your business challenges.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Contact Our Experts
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Solutions;