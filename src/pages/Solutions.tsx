import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building, 
  Heart, 
  DollarSign, 
  Settings, 
  ShoppingCart, 
  Shield, 
  BookOpen, 
  Truck,
  Rocket,
  Target,
  Users,
  Globe,
  Code,
  Database,
  Network,
  Lock,
  Eye,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Brain,
  Cloud,
  Server,
  Cpu,
  Atom,
  Leaf
} from 'lucide-react';

const Solutions: React.FC = () => {
  const industrySolutions = [
    {
      title: 'Enterprise Solutions',
      description: 'Large-scale business solutions for Fortune 500 companies',
      icon: Building,
      color: 'from-blue-500 to-indigo-500',
      features: [
        'AI-Powered Business Intelligence',
        'Enterprise IT Infrastructure',
        'Cloud DevOps & Migration',
        'Data Analytics & BI',
        'Cybersecurity & Compliance',
        'Digital Transformation'
      ],
      benefits: [
        'Scalable architecture for growth',
        'Enterprise-grade security',
        '24/7 support & monitoring',
        'Custom integration capabilities'
      ],
      href: '/solutions'
    },
    {
      title: 'Healthcare Solutions',
      description: 'AI-powered healthcare technology and medical solutions',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      features: [
        'AI Healthcare Diagnostics',
        'Patient Data Analytics',
        'Medical AI Platform',
        'Healthcare Analytics',
        'HIPAA Compliant Solutions',
        'Telemedicine Integration'
      ],
      benefits: [
        'Improved patient outcomes',
        'Reduced diagnostic errors',
        'Streamlined workflows',
        'Compliance & security'
      ],
      href: '/solutions'
    },
    {
      title: 'Financial Solutions',
      description: 'Fintech and banking technology solutions',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      features: [
        'AI Financial Trading',
        'Risk Assessment & Analytics',
        'Fraud Detection Systems',
        'Regulatory Compliance',
        'Digital Banking Solutions',
        'Blockchain Integration'
      ],
      benefits: [
        'Enhanced security & compliance',
        'Real-time risk monitoring',
        'Automated compliance reporting',
        'Improved customer experience'
      ],
      href: '/solutions'
    },
    {
      title: 'Manufacturing Solutions',
      description: 'Industrial and manufacturing technology solutions',
      icon: Settings,
      color: 'from-orange-500 to-red-500',
      features: [
        'AI Predictive Maintenance',
        'IoT Edge Computing',
        'Digital Twin Platform',
        'Supply Chain Optimization',
        'Quality Assurance AI',
        'Industrial Automation'
      ],
      benefits: [
        'Reduced downtime & costs',
        'Improved efficiency',
        'Predictive maintenance',
        'Real-time monitoring'
      ],
      href: '/solutions'
    },
    {
      title: 'Retail Solutions',
      description: 'E-commerce and retail technology solutions',
      icon: ShoppingCart,
      color: 'from-purple-500 to-pink-500',
      features: [
        'AI Marketing Automation',
        'Customer Analytics',
        'Inventory Management',
        'Personalized Shopping',
        'Omnichannel Integration',
        'Supply Chain Optimization'
      ],
      benefits: [
        'Increased sales & conversion',
        'Better customer experience',
        'Optimized inventory',
        'Data-driven insights'
      ],
      href: '/solutions'
    },
    {
      title: 'Government Solutions',
      description: 'Public sector and government technology solutions',
      icon: Shield,
      color: 'from-gray-500 to-slate-500',
      features: [
        'Cybersecurity & Compliance',
        'Data Analytics & BI',
        'Digital Transformation',
        'Cloud Infrastructure',
        'AI-Powered Services',
        'Citizen Experience'
      ],
      benefits: [
        'Enhanced security & compliance',
        'Improved efficiency',
        'Better citizen services',
        'Cost optimization'
      ],
      href: '/solutions'
    },
    {
      title: 'Education Solutions',
      description: 'Educational technology and learning solutions',
      icon: BookOpen,
      color: 'from-blue-500 to-indigo-500',
      features: [
        'AI Education Platform',
        'Learning Analytics',
        'Personalized Learning',
        'Virtual Classrooms',
        'Student Performance Tracking',
        'Administrative Automation'
      ],
      benefits: [
        'Improved learning outcomes',
        'Personalized education',
        'Administrative efficiency',
        'Data-driven insights'
      ],
      href: '/solutions'
    },
    {
      title: 'Transportation Solutions',
      description: 'Logistics and transportation technology solutions',
      icon: Truck,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Route Optimization',
        'Fleet Management',
        'Supply Chain Analytics',
        'IoT Tracking Systems',
        'Predictive Maintenance',
        'Real-time Monitoring'
      ],
      benefits: [
        'Reduced fuel costs',
        'Improved delivery times',
        'Better fleet utilization',
        'Enhanced customer service'
      ],
      href: '/solutions'
    }
  ];

  const technologyPillars = [
    {
      title: 'Artificial Intelligence',
      description: 'Machine learning, deep learning, and AI-powered solutions',
      icon: Brain,
      color: 'from-purple-500 to-cyan-500',
      solutions: [
        'Business Intelligence',
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'Automated Decision Making'
      ]
    },
    {
      title: 'Cloud & DevOps',
      description: 'Cloud infrastructure, automation, and deployment solutions',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      solutions: [
        'Cloud Migration',
        'Infrastructure as Code',
        'Continuous Integration/Deployment',
        'Container Orchestration',
        'Serverless Architecture'
      ]
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Internet of Things and edge computing solutions',
      icon: Cpu,
      color: 'from-green-500 to-teal-500',
      solutions: [
        'Smart Sensors',
        'Real-time Processing',
        'Edge Analytics',
        'Device Management',
        'Data Collection'
      ]
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security and threat protection solutions',
      icon: Lock,
      color: 'from-red-500 to-orange-500',
      solutions: [
        'Threat Detection',
        'Identity Management',
        'Data Protection',
        'Compliance & Governance',
        'Incident Response'
      ]
    },
    {
      title: 'Quantum Computing',
      description: 'Next-generation quantum computing solutions',
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      solutions: [
        'Quantum Algorithms',
        'Optimization Problems',
        'Cryptography',
        'Research & Development',
        'Consulting Services'
      ]
    },
    {
      title: 'Sustainable Technology',
      description: 'Green technology and sustainability solutions',
      icon: Leaf,
      color: 'from-green-500 to-emerald-500',
      solutions: [
        'Energy Optimization',
        'Carbon Footprint Reduction',
        'Green Infrastructure',
        'Sustainable AI',
        'Environmental Monitoring'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Industry
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Tailored technology solutions designed specifically for your industry. From healthcare to finance, 
              manufacturing to retail, we deliver specialized solutions that drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                Get Custom Quote
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                Speak to Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Industry-Specific Solutions</h2>
          <p className="text-xl text-gray-300">Tailored technology solutions for your unique business needs</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industrySolutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-200 hover:shadow-xl"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6`}>
                <solution.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
              <p className="text-gray-300 mb-6">{solution.description}</p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features</h4>
                  <div className="space-y-2">
                    {solution.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Benefits</h4>
                  <div className="space-y-2">
                    {solution.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                to={solution.href}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technology Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Technology Pillars</h2>
          <p className="text-xl text-gray-300">Core technologies that power our industry solutions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologyPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-200 hover:shadow-xl"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6`}>
                <pillar.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{pillar.title}</h3>
              <p className="text-gray-300 mb-6">{pillar.description}</p>
              
              <div className="space-y-2 mb-6">
                {pillar.solutions.map((solution, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    <span>{solution}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/services"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Zion Tech Group */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
          <p className="text-xl text-gray-300">Proven expertise and results across industries</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Target,
              title: "Industry Expertise",
              description: "Deep understanding of industry-specific challenges and requirements"
            },
            {
              icon: Users,
              title: "Expert Team",
              description: "Certified professionals with years of industry experience"
            },
            {
              icon: TrendingUp,
              title: "Proven Results",
              description: "Track record of successful implementations and ROI"
            },
            {
              icon: Lock,
              title: "Security First",
              description: "Enterprise-grade security and compliance standards"
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Industry?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our industry-specific solutions can help you overcome challenges, 
            drive innovation, and achieve sustainable growth in your sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105"
            >
              Get Custom Quote
            </Link>
            <Link
              to="/demo"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Schedule Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Solutions;
