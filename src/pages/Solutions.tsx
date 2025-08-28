import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Building2, 
  Building, 
  Rocket, 
  Shield, 
  Heart, 
  TrendingUp, 
  Users, 
  Globe, 
  Factory, 
  City,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Brain,
  Cloud,
  Cpu,
  Lock,
  Database,
  Network,
  BarChart3,
  Target,
  Award,
  Code,
  Truck,
  Server,
  Smartphone,
  Eye,
  Leaf,
  Scale,
  Car,
  Home,
  ShoppingCart,
  Factory as FactoryIcon,
  City as CityIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
=======
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Database, 
  Globe,
  Users,
  Building2,
  Rocket,
  Cpu,
  Lock,
  BarChart3
} from 'lucide-react';
>>>>>>> origin/clean-merge-website-fixes

export default function Solutions() {
  const solutions = [
    {
<<<<<<< HEAD
      name: 'Enterprise Solutions',
      icon: Building2,
      description: 'Large-scale business transformations and digital modernization',
      features: [
        'AI-Powered Process Automation',
        'Enterprise Data Analytics',
        'Cloud Migration & Optimization',
        'Digital Twin Implementation',
        'Cybersecurity & Compliance',
        'Legacy System Modernization'
      ],
      benefits: [
        '50% reduction in operational costs',
        '3x faster decision making',
        '99.9% system uptime',
        'Enhanced security posture'
      ],
      color: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      name: 'SMB Solutions',
      icon: Building,
      description: 'Small to medium business growth and efficiency solutions',
      features: [
        'AI-Powered Marketing Automation',
        'Customer Relationship Management',
        'Business Intelligence Dashboards',
        'Process Optimization',
        'Cloud Infrastructure Setup',
        'Cybersecurity Protection'
      ],
      benefits: [
        '40% increase in productivity',
        'Improved customer retention',
        'Reduced IT overhead',
        'Scalable growth foundation'
      ],
      color: 'from-purple-500 to-pink-500',
      featured: false
    },
    {
      name: 'Startup Solutions',
      icon: Rocket,
      description: 'Accelerate growth and build scalable foundations',
      features: [
        'MVP Development & Launch',
        'AI-Powered Growth Hacking',
        'Scalable Infrastructure Design',
        'Data-Driven Decision Making',
        'Customer Acquisition Automation',
        'Investor-Ready Analytics'
      ],
      benefits: [
        '10x faster market validation',
        '3x user engagement increase',
        'Reduced time to market',
        'Investor-ready metrics'
      ],
      color: 'from-green-500 to-emerald-500',
      featured: false
    },
    {
      name: 'Healthcare Solutions',
      icon: Heart,
      description: 'AI-powered healthcare innovation and patient care',
      features: [
        'Medical Image Analysis',
        'Patient Data Analytics',
        'Predictive Diagnostics',
        'Healthcare Process Automation',
        'Compliance & Security',
        'Telemedicine Platforms'
      ],
      benefits: [
        '30% improvement in diagnostic accuracy',
        '40% faster patient processing',
        'Enhanced patient outcomes',
        'Reduced healthcare costs'
      ],
      color: 'from-red-500 to-pink-500',
      featured: false
    },
    {
      name: 'Manufacturing Solutions',
      icon: Factory,
      description: 'Smart manufacturing and Industry 4.0 transformation',
      features: [
        'IoT Device Integration',
        'Predictive Maintenance',
        'Quality Control Automation',
        'Supply Chain Optimization',
        'Digital Twin Implementation',
        'Energy Efficiency Management'
      ],
      benefits: [
        '25% reduction in downtime',
        '20% improvement in quality',
        '15% energy cost savings',
        'Real-time production insights'
      ],
      color: 'from-orange-500 to-red-500',
      featured: false
    },
    {
      name: 'Financial Services',
      icon: Shield,
      description: 'Secure, compliant, and innovative financial technology',
      features: [
        'Fraud Detection & Prevention',
        'Risk Assessment & Management',
        'Regulatory Compliance',
        'Customer Experience Optimization',
        'Blockchain Integration',
        'Real-time Analytics'
      ],
      benefits: [
        '99.9% fraud detection accuracy',
        '60% faster risk assessment',
        'Full regulatory compliance',
        'Enhanced customer trust'
      ],
      color: 'from-indigo-500 to-purple-500',
      featured: false
=======
      icon: Brain,
      title: 'AI Solutions',
      description: 'Autonomous systems, machine learning models, and intelligent automation that transform business operations.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      link: '/services/ai'
    },
    {
      icon: Cloud,
      title: 'Cloud Platforms',
      description: 'Scalable cloud infrastructure, serverless architectures, and DevOps automation for modern applications.',
      features: ['Cloud Migration', 'Serverless Computing', 'DevOps Automation', 'Multi-Cloud Strategy'],
      link: '/services/cloud'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Zero-trust security, threat detection, and compliance automation to protect your digital assets.',
      features: ['Threat Detection', 'Identity Management', 'Compliance Automation', 'Security Audits'],
      link: '/services/cybersecurity'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'End-to-end business process modernization and optimization for the digital age.',
      features: ['Process Automation', 'Legacy Modernization', 'Change Management', 'Performance Optimization'],
      link: '/services/digital-transformation'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Advanced data processing, business intelligence, and real-time analytics for informed decision-making.',
      features: ['Big Data Processing', 'Business Intelligence', 'Real-time Analytics', 'Data Visualization'],
      link: '/services/data-analytics'
    },
    {
      icon: Globe,
      title: 'IoT Solutions',
      description: 'Connected devices, edge computing, and smart infrastructure for the Internet of Things.',
      features: ['Device Management', 'Edge Computing', 'Smart Infrastructure', 'Sensor Networks'],
      link: '/services/iot'
>>>>>>> origin/clean-merge-website-fixes
    }
  ];

  const industrySolutions = [
    {
<<<<<<< HEAD
      title: 'Retail & E-commerce',
      description: 'Digital transformation for modern retail',
      icon: ShoppingCart,
      color: 'from-purple-500 to-pink-500',
      solutions: ['AI-Powered Personalization', 'Inventory Optimization', 'Customer Analytics', 'Omnichannel Integration']
    },
    {
      title: 'Transportation & Logistics',
      description: 'Smart logistics and fleet management',
      icon: Truck,
      color: 'from-blue-500 to-cyan-500',
      solutions: ['Route Optimization', 'Fleet Tracking', 'Predictive Maintenance', 'Supply Chain Analytics']
    },
    {
      title: 'Real Estate',
      description: 'Property technology and market insights',
      icon: Home,
      color: 'from-green-500 to-emerald-500',
      solutions: ['Market Analysis', 'Property Valuation', 'Investment Analytics', 'Customer Relationship Management']
    },
    {
      title: 'Education',
      description: 'EdTech solutions for modern learning',
      icon: Brain,
      color: 'from-orange-500 to-red-500',
      solutions: ['Learning Analytics', 'Personalized Education', 'Administrative Automation', 'Student Engagement']
    }
  ];

  const technologyStack = [
    {
      category: 'AI & Machine Learning',
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI GPT', 'Computer Vision', 'NLP'],
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Cloud & Infrastructure',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'],
      icon: Cloud,
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'Data & Analytics',
      technologies: ['Apache Spark', 'Hadoop', 'Tableau', 'Power BI', 'Python', 'R'],
      icon: Database,
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'Security & Compliance',
      technologies: ['Zero Trust', 'SOC 2', 'GDPR', 'HIPAA', 'Penetration Testing', 'Security Monitoring'],
      icon: Lock,
      color: 'from-red-500 to-orange-500'
    }
  ];

  const successMetrics = [
    {
      metric: '500+',
      label: 'Projects Delivered',
      description: 'Successfully completed projects across industries',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500'
    },
    {
      metric: '99.9%',
      label: 'Client Satisfaction',
      description: 'Consistently high client satisfaction ratings',
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      metric: '50%',
      label: 'Cost Reduction',
      description: 'Average cost savings for our clients',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      metric: '3x',
      label: 'Performance Boost',
      description: 'Average performance improvement achieved',
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
=======
      icon: Building2,
      title: 'Enterprise Solutions',
      description: 'Scalable solutions for large organizations with complex requirements and global operations.',
      link: '/solutions/enterprise'
    },
    {
      icon: Users,
      title: 'Healthcare Solutions',
      description: 'Digital health platforms, patient management systems, and medical AI applications.',
      link: '/solutions/healthcare'
    },
    {
      icon: Lock,
      title: 'Financial Solutions',
      description: 'Secure fintech platforms, blockchain applications, and regulatory compliance systems.',
      link: '/solutions/financial'
    },
    {
      icon: Rocket,
      title: 'Manufacturing Solutions',
      description: 'Industry 4.0 technologies, smart factories, and supply chain optimization.',
      link: '/solutions/manufacturing'
>>>>>>> origin/clean-merge-website-fixes
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Solutions - Zion Tech Group"
        description="Comprehensive technology solutions for businesses of all sizes. From AI-powered automation to cloud infrastructure, we help organizations transform and grow."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full">
                <Building2 className="w-16 h-16 text-blue-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technology
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-500 bg-clip-text text-transparent"> Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive technology solutions. From AI-powered 
              automation to cloud infrastructure, we help organizations of all sizes innovate and grow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored technology solutions designed to meet the unique needs of your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  solution.featured 
                    ? 'bg-gradient-to-br from-slate-800 to-slate-700 ring-2 ring-blue-400/50' 
                    : 'bg-slate-800/50 hover:bg-slate-800'
                }`}
              >
                {solution.featured && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Featured
                    </div>
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{solution.name}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-2">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {solution.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized solutions designed for the unique challenges of your industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/50 hover:border-blue-500/50"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                
                <div className="space-y-2 mb-6">
                  {solution.solutions.map((item, idx) => (
                    <div key={idx} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Get Industry Solution
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with cutting-edge technologies to deliver robust, scalable, and secure solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologyStack.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/50"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center mx-auto mb-6`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{tech.category}</h3>
                
                <div className="space-y-2">
                  {tech.technologies.map((technology, idx) => (
                    <div key={idx} className="text-sm text-gray-300 bg-slate-700/50 px-3 py-2 rounded-lg">
                      {technology}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our track record speaks for itself - delivering measurable value to businesses across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mx-auto mb-6`}>
                  <metric.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="text-4xl font-bold text-white mb-2">{metric.metric}</div>
                <div className="text-lg font-semibold text-blue-400 mb-2">{metric.label}</div>
                <p className="text-gray-400 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our technology solutions can help you achieve your business goals. 
              Our experts are ready to create a customized plan for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                View Success Stories
              </Link>
            </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-6">
                <Rocket className="w-4 h-4 mr-2" />
                Technology Solutions
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
              End-to-end technology solutions that transform businesses and drive innovation across industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Core Technology Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our comprehensive suite of technology solutions designed to address modern business challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-zion-blue-dark/30 p-8 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group hover:bg-zion-blue-dark/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-zion-cyan mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to={solution.link}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-semibold transition-colors group-hover:translate-x-1"
                >
                  Learn More
                  <Rocket className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Tailored solutions designed for specific industries and business verticals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-zion-blue-dark/30 p-8 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
                    <p className="text-zion-slate-light mb-4">{solution.description}</p>
                    <Link 
                      to={solution.link}
                      className="text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors"
                    >
                      Explore Solution →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl text-zion-slate-light mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our solutions can help you achieve your business goals
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </Link>
            <Link to="/services">
              <button className="px-8 py-4 bg-transparent border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                View All Services
              </button>
            </Link>
>>>>>>> origin/clean-merge-website-fixes
          </motion.div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/clean-merge-website-fixes
