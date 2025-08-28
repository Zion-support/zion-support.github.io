import React from 'react';
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

export default function Solutions() {
  const solutions = [
    {
      category: 'Enterprise Solutions',
      icon: Building2,
      description: 'Large-scale business transformations and digital modernization',
      features: [
        'AI-Powered Enterprise Architecture',
        'Digital Transformation Consulting',
        'Legacy System Modernization',
        'Enterprise Data Strategy',
        'Scalable Cloud Infrastructure',
        'Enterprise Security & Compliance'
      ],
      color: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      category: 'SMB Solutions',
      icon: Building,
      description: 'Small to medium business growth and optimization',
      features: [
        'Business Process Automation',
        'Cloud Migration Services',
        'Data Analytics & Reporting',
        'Cybersecurity Implementation',
        'Digital Marketing Tools',
        'Customer Relationship Management'
      ],
      color: 'from-green-500 to-emerald-500',
      featured: false
    },
    {
      category: 'Startup Solutions',
      icon: Rocket,
      description: 'Accelerate your startup growth with cutting-edge technology',
      features: [
        'MVP Development & Launch',
        'AI-Powered Growth Tools',
        'Scalable Infrastructure Setup',
        'Market Analysis & Insights',
        'Investor Presentation Tools',
        'Growth Hacking Automation'
      ],
      color: 'from-orange-500 to-red-500',
      featured: true
    },
    {
      category: 'Government Solutions',
      icon: Shield,
      description: 'Public sector innovation and digital transformation',
      features: [
        'Digital Government Platforms',
        'Citizen Service Automation',
        'Data Security & Compliance',
        'Workflow Optimization',
        'Transparency & Reporting',
        'Emergency Response Systems'
      ],
      color: 'from-indigo-500 to-purple-500',
      featured: false
    },
    {
      category: 'Healthcare Solutions',
      icon: Heart,
      description: 'Digital health transformation and patient care optimization',
      features: [
        'AI-Powered Diagnostics',
        'Electronic Health Records',
        'Telemedicine Platforms',
        'Patient Data Analytics',
        'Medical Device Integration',
        'Healthcare Compliance Systems'
      ],
      color: 'from-red-500 to-pink-500',
      featured: true
    },
    {
      category: 'Financial Solutions',
      icon: TrendingUp,
      description: 'Fintech innovation and regulatory compliance',
      features: [
        'AI Trading Algorithms',
        'Risk Management Systems',
        'Regulatory Compliance Tools',
        'Fraud Detection Systems',
        'Customer Analytics',
        'Blockchain Integration'
      ],
      color: 'from-emerald-500 to-green-500',
      featured: true
    }
  ];

  const industrySolutions = [
    {
      name: 'Manufacturing',
      icon: FactoryIcon,
      description: 'Smart manufacturing and Industry 4.0 solutions',
      color: 'from-gray-500 to-slate-500'
    },
    {
      name: 'Retail & E-commerce',
      icon: ShoppingCart,
      description: 'Digital commerce and customer experience optimization',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Energy & Sustainability',
      icon: Leaf,
      description: 'Green technology and renewable energy solutions',
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'Space & Aerospace',
      icon: Rocket,
      description: 'Space technology and aerospace innovation',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Education & Training',
      icon: Users,
      description: 'Digital learning platforms and educational technology',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Legal Services',
      icon: Scale,
      description: 'Legal technology and compliance automation',
      color: 'from-amber-500 to-orange-500'
    }
  ];

  const benefits = [
    {
      title: 'Scalable Architecture',
      description: 'Built to grow with your business needs',
      icon: Network
    },
    {
      title: 'AI-Powered Insights',
      description: 'Data-driven decision making and automation',
      icon: Brain
    },
    {
      title: 'Security First',
      description: 'Enterprise-grade security and compliance',
      icon: Lock
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring',
      icon: Server
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Solutions - Zion Tech Group"
        description="Comprehensive technology solutions for enterprises, SMBs, startups, government, healthcare, and financial services. Transform your business with our cutting-edge AI and technology solutions."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Technology Solutions for
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Every Industry
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From startups to enterprises, healthcare to finance, we deliver cutting-edge 
              technology solutions that drive innovation, efficiency, and growth across all sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Your Solution
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Main Solutions Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Business Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored technology solutions designed to meet the unique challenges and opportunities 
              of different business types and industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  solution.featured
                    ? 'border-cyan-400/50 bg-gradient-to-br from-slate-800/50 to-slate-700/50 ring-2 ring-cyan-400/20'
                    : 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50'
                }`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${solution.color}`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-bold text-white">{solution.category}</h3>
                      {solution.featured && (
                        <Star className="w-5 h-5 text-cyan-400" />
                      )}
                    </div>
                    <p className="text-gray-300">{solution.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <a
                    href="/request-quote"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specialized technology solutions designed for the unique requirements 
              and challenges of specific industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrySolutions.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50 transition-all duration-300 hover:scale-105"
              >
                <div className={`p-3 rounded-lg bg-gradient-to-br ${industry.color} w-fit mb-4`}>
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{industry.description}</p>
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                >
                  Explore Solutions
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our Solutions?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We deliver technology solutions that provide measurable business value 
              and competitive advantage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
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
              Let's discuss how our technology solutions can help you achieve your business goals 
              and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}