import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Building2, 
  Heart, 
  TrendingUp, 
  Shield, 
  Eye, 
  Leaf, 
  Rocket, 
  Users, 
  Zap, 
  Globe,
  ArrowRight,
  Star,
  CheckCircle,
  Target,
  Award,
  Cpu,
  Database,
  Cloud,
  Lock,
  Brain,
  Scale,
  Factory,
  ShoppingCart,
  GraduationCap,
  Building
} from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      title: 'Enterprise Solutions',
      description: 'Large-scale business transformations and digital modernization',
      icon: Building2,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Digital Transformation Consulting',
        'Enterprise Architecture Design',
        'Legacy System Modernization',
        'Scalable Infrastructure Solutions',
        'Enterprise Security & Compliance'
      ],
      href: '/solutions/enterprise'
    },
    {
      title: 'SMB Solutions',
      description: 'Small to medium business growth and technology adoption',
      icon: Building,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Cloud Migration Services',
        'Business Process Automation',
        'Cost-Effective IT Solutions',
        'Scalable Growth Planning',
        'SMB Security Solutions'
      ],
      href: '/solutions/smb'
    },
    {
      title: 'Startup Solutions',
      description: 'Accelerate your startup growth with cutting-edge technology',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500',
      features: [
        'MVP Development & Launch',
        'Scalable Architecture Design',
        'AI-Powered Growth Tools',
        'Investor-Ready Technology',
        'Rapid Prototyping'
      ],
      href: '/solutions/startup'
    },
    {
      title: 'Government Solutions',
      description: 'Public sector innovation and digital transformation',
      icon: Shield,
      color: 'from-indigo-500 to-purple-500',
      features: [
        'Digital Government Services',
        'Cybersecurity & Compliance',
        'Data Analytics & Reporting',
        'Citizen Experience Platforms',
        'Infrastructure Modernization'
      ],
      href: '/solutions/government'
    },
    {
      title: 'Healthcare Solutions',
      description: 'Digital health transformation and patient care innovation',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      features: [
        'AI-Powered Diagnostics',
        'Electronic Health Records',
        'Telemedicine Platforms',
        'Patient Data Security',
        'Healthcare Analytics'
      ],
      href: '/solutions/healthcare'
    },
    {
      title: 'Financial Solutions',
      description: 'Fintech innovation and regulatory compliance',
      icon: TrendingUp,
      color: 'from-emerald-500 to-green-500',
      features: [
        'AI Trading Platforms',
        'Risk Management Systems',
        'Regulatory Compliance',
        'Digital Banking Solutions',
        'Financial Analytics'
      ],
      href: '/solutions/financial'
    }
  ];

  const industries = [
    {
      name: 'Manufacturing',
      icon: Factory,
      description: 'Smart manufacturing and Industry 4.0 solutions',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Retail & E-commerce',
      icon: ShoppingCart,
      description: 'Digital commerce and customer experience platforms',
      color: 'from-purple-500 to-indigo-500'
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
      description: 'Space technology and satellite operations',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Education & Training',
      icon: GraduationCap,
      description: 'Digital learning and educational technology',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Legal Services',
      icon: Scale,
      description: 'Legal tech and compliance automation',
      color: 'from-slate-500 to-gray-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Solutions - Zion Tech Group"
        description="Comprehensive industry solutions for enterprise, SMB, startup, government, healthcare, and financial sectors. Transform your business with our cutting-edge technology solutions."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Industry-Leading
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with our comprehensive technology solutions designed for every industry and business size.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Main Solutions Grid */}
      <section className="py-20 relative">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Comprehensive Business Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From enterprise transformations to startup accelerations, we provide tailored solutions that drive growth and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  to={solution.href}
                  className="block p-8 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:bg-slate-700/50"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-slate-800/30 relative">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized technology solutions designed for the unique challenges and opportunities of your industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-br ${industry.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {industry.name}
                  </h3>
                  
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let our experts help you choose the right solution and implement it successfully. Get started with a free consultation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}