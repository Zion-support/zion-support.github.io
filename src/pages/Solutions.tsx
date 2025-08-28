import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Building, 
  Rocket, 
  Shield, 
  Heart, 
  TrendingUp, 
  Factory, 
  ShoppingCart, 
  GraduationCap, 
  Truck,
  ArrowRight,
  Star,
  Zap,
  Brain,
  Cloud,
  Lock,
  Globe,
  Cpu,
  Atom,
  Rocket as RocketIcon
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Solutions() {
  const solutions = [
    {
      category: 'Enterprise Solutions',
      icon: Building2,
      description: 'Large-scale business transformations and enterprise-grade solutions',
      color: 'from-blue-600 to-cyan-600',
      featured: true,
      solutions: [
        'Digital Transformation',
        'Enterprise AI Integration',
        'Cloud Migration',
        'Legacy System Modernization',
        'Enterprise Security',
        'Data Governance'
      ],
      href: '/solutions/enterprise'
    },
    {
      category: 'SMB Solutions',
      icon: Building,
      description: 'Small to medium business growth and optimization',
      color: 'from-green-600 to-emerald-600',
      featured: false,
      solutions: [
        'Business Process Automation',
        'AI-Powered Analytics',
        'Cloud Infrastructure',
        'Cybersecurity Protection',
        'Digital Marketing Tools',
        'Customer Relationship Management'
      ],
      href: '/solutions/smb'
    },
    {
      category: 'Startup Solutions',
      icon: Rocket,
      description: 'Accelerate your startup growth with cutting-edge technology',
      color: 'from-purple-600 to-pink-600',
      featured: true,
      solutions: [
        'MVP Development',
        'AI-Powered Products',
        'Cloud-Native Architecture',
        'Scalable Infrastructure',
        'Growth Analytics',
        'Investor-Ready Platforms'
      ],
      href: '/solutions/startup'
    },
    {
      category: 'Government Solutions',
      icon: Shield,
      description: 'Public sector innovation and digital government services',
      color: 'from-indigo-600 to-blue-600',
      featured: false,
      solutions: [
        'Digital Government Platforms',
        'Citizen Services',
        'Data Security & Compliance',
        'Process Automation',
        'Smart City Solutions',
        'Emergency Response Systems'
      ],
      href: '/solutions/government'
    },
    {
      category: 'Healthcare Solutions',
      icon: Heart,
      description: 'Digital health transformation and medical AI solutions',
      color: 'from-red-600 to-pink-600',
      featured: true,
      solutions: [
        'AI Diagnostics',
        'Patient Management Systems',
        'Telemedicine Platforms',
        'Medical Data Analytics',
        'Healthcare Security',
        'Clinical Decision Support'
      ],
      href: '/solutions/healthcare'
    },
    {
      category: 'Financial Solutions',
      icon: TrendingUp,
      description: 'Fintech innovation and financial compliance solutions',
      color: 'from-yellow-600 to-orange-600',
      featured: true,
      solutions: [
        'AI Trading Platforms',
        'Risk Management',
        'Compliance Automation',
        'Digital Banking',
        'Fraud Detection',
        'Financial Analytics'
      ],
      href: '/solutions/financial'
    },
    {
      category: 'Manufacturing Solutions',
      icon: Factory,
      description: 'Industry 4.0 and smart manufacturing solutions',
      color: 'from-gray-600 to-slate-600',
      featured: false,
      solutions: [
        'IoT Integration',
        'Predictive Maintenance',
        'Supply Chain Optimization',
        'Quality Control AI',
        'Digital Twin Solutions',
        'Smart Factory Systems'
      ],
      href: '/solutions/manufacturing'
    },
    {
      category: 'Retail Solutions',
      icon: ShoppingCart,
      description: 'Digital retail transformation and e-commerce solutions',
      color: 'from-blue-600 to-indigo-600',
      featured: false,
      solutions: [
        'E-commerce Platforms',
        'AI-Powered Personalization',
        'Inventory Management',
        'Customer Analytics',
        'Omnichannel Solutions',
        'Retail Automation'
      ],
      href: '/solutions/retail'
    },
    {
      category: 'Education Solutions',
      icon: GraduationCap,
      description: 'Educational technology and learning management solutions',
      color: 'from-purple-600 to-violet-600',
      featured: false,
      solutions: [
        'Learning Management Systems',
        'AI Tutoring',
        'Student Analytics',
        'Virtual Classrooms',
        'Assessment Tools',
        'Educational Content Creation'
      ],
      href: '/solutions/education'
    },
    {
      category: 'Transportation Solutions',
      icon: Truck,
      description: 'Smart transportation and logistics solutions',
      color: 'from-green-600 to-teal-600',
      featured: false,
      solutions: [
        'Fleet Management',
        'Route Optimization',
        'Supply Chain Tracking',
        'Autonomous Systems',
        'Traffic Management',
        'Logistics Analytics'
      ],
      href: '/solutions/transportation'
    }
  ];

  const technologies = [
    { name: 'Artificial Intelligence', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { name: 'Quantum Computing', icon: Atom, color: 'from-indigo-500 to-purple-500' },
    { name: 'Cloud & DevOps', icon: Cloud, color: 'from-blue-500 to-cyan-500' },
    { name: 'Cybersecurity', icon: Lock, color: 'from-red-500 to-orange-500' },
    { name: 'IoT & Edge', icon: Cpu, color: 'from-green-500 to-emerald-500' },
    { name: 'Blockchain', icon: Globe, color: 'from-yellow-500 to-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Solutions - Zion Tech Group"
        description="Comprehensive technology solutions for enterprises, SMBs, startups, and government organizations. AI, quantum computing, cybersecurity, and more."
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
              Solutions for Every
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Business Need
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              From startups to enterprises, we deliver cutting-edge technology solutions that drive innovation, 
              efficiency, and growth across all industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Your Solution
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Solution Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions are designed to address the unique challenges and opportunities 
              across different business types and industries.
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
                className="group"
              >
                <Link to={solution.href}>
                  <div className={`p-8 rounded-2xl border transition-all duration-300 transform hover:scale-105 ${
                    solution.featured
                      ? 'border-cyan-400/50 bg-gradient-to-br from-slate-800/50 to-slate-700/50 ring-2 ring-cyan-400/20'
                      : 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50'
                  }`}>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${solution.color}`}>
                        <solution.icon className="w-6 h-6 text-white" />
                      </div>
                      {solution.featured && (
                        <span className="inline-flex items-center gap-1 text-xs text-cyan-400">
                          <Star className="w-3 h-3" />
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {solution.category}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {solution.solutions.slice(0, 4).map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <Zap className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
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
              Powered by Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions leverage the latest advancements in AI, quantum computing, 
              and emerging technologies to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`p-6 rounded-xl bg-gradient-to-br ${tech.color} mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                  {tech.name}
                </h3>
              </motion.div>
            ))}
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
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let our experts analyze your needs and design a custom solution that drives 
              measurable results and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Talk to Our Experts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}