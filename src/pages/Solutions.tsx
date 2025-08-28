import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  ShoppingCart, 
  GraduationCap, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Target,
  BarChart3,
  Cpu,
  Cloud,
  Lock,
  Brain,
  Database,
  Network,
  Server,
  Smartphone,
  Code,
  Settings,
  Gauge,
  Eye,
  Leaf,
  Atom,
  RocketIcon,
  Crown,
  Sparkles
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const Solutions: React.FC = () => {
  const solutions = [
    {
      category: 'Enterprise Solutions',
      icon: Building2,
      color: 'from-blue-500 to-cyan-500',
      description: 'Large-scale business transformations and digital modernization',
      features: [
        'Digital Transformation Consulting',
        'Enterprise Architecture Design',
        'Legacy System Modernization',
        'Scalable Infrastructure Solutions',
        'Enterprise Security & Compliance',
        'Business Process Optimization'
      ],
      benefits: [
        'Reduced operational costs by 30-40%',
        'Improved efficiency and productivity',
        'Enhanced security and compliance',
        'Scalable growth infrastructure'
      ],
      href: '/services#enterprise'
    },
    {
      category: 'SMB Solutions',
      icon: Building,
      color: 'from-green-500 to-emerald-500',
      description: 'Growth-focused solutions for small to medium businesses',
      features: [
        'Business Process Automation',
        'Cloud Migration & Management',
        'Digital Marketing Solutions',
        'Customer Relationship Management',
        'Financial Technology Integration',
        'Operational Efficiency Tools'
      ],
      benefits: [
        'Accelerated growth and market expansion',
        'Improved customer engagement',
        'Reduced manual processes',
        'Competitive advantage through technology'
      ],
      href: '/services#smb'
    },
    {
      category: 'Startup Solutions',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500',
      description: 'Accelerate your startup growth with cutting-edge technology',
      features: [
        'MVP Development & Launch',
        'Scalable Architecture Design',
        'AI-Powered Growth Tools',
        'Market Analysis & Intelligence',
        'Investor-Ready Technology',
        'Rapid Prototyping & Iteration'
      ],
      benefits: [
        'Faster time to market',
        'Investor-ready technology stack',
        'Scalable foundation for growth',
        'Competitive advantage through innovation'
      ],
      href: '/services#startup'
    },
    {
      category: 'Government Solutions',
      icon: Shield,
      color: 'from-indigo-500 to-purple-500',
      description: 'Public sector innovation and digital government transformation',
      features: [
        'Digital Government Platforms',
        'Cybersecurity & Compliance',
        'Data Analytics & Reporting',
        'Citizen Experience Enhancement',
        'Process Automation & Efficiency',
        'Interoperability Solutions'
      ],
      benefits: [
        'Improved citizen services',
        'Enhanced security and compliance',
        'Operational cost reduction',
        'Better data-driven decision making'
      ],
      href: '/services#government'
    },
    {
      category: 'Healthcare Solutions',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      description: 'Digital health transformation and medical AI solutions',
      features: [
        'AI-Powered Diagnostics',
        'Electronic Health Records',
        'Telemedicine Platforms',
        'Patient Engagement Tools',
        'Clinical Decision Support',
        'Healthcare Analytics'
      ],
      benefits: [
        'Improved patient outcomes',
        'Reduced healthcare costs',
        'Enhanced diagnostic accuracy',
        'Better patient experience'
      ],
      href: '/services#healthcare'
    },
    {
      category: 'Financial Solutions',
      icon: TrendingUp,
      color: 'from-emerald-500 to-green-500',
      description: 'Fintech innovation and financial technology solutions',
      features: [
        'AI-Powered Risk Management',
        'Blockchain & Web3 Solutions',
        'Digital Banking Platforms',
        'Regulatory Compliance Tools',
        'Financial Analytics & BI',
        'Payment Processing Systems'
      ],
      benefits: [
        'Enhanced security and compliance',
        'Improved risk management',
        'Better customer experience',
        'Operational efficiency gains'
      ],
      href: '/services#financial'
    }
  ];

  const industrySolutions = [
    {
      industry: 'Manufacturing',
      icon: Factory,
      description: 'Smart manufacturing and Industry 4.0 solutions',
      solutions: ['IoT Integration', 'Predictive Maintenance', 'Quality Control AI', 'Supply Chain Optimization']
    },
    {
      industry: 'Retail & E-commerce',
      icon: ShoppingCart,
      description: 'Digital retail transformation and customer experience',
      solutions: ['E-commerce Platforms', 'Customer Analytics', 'Inventory Management', 'Omnichannel Solutions']
    },
    {
      industry: 'Education & Training',
      icon: GraduationCap,
      description: 'EdTech solutions and digital learning platforms',
      solutions: ['Learning Management Systems', 'AI Tutoring', 'Student Analytics', 'Virtual Classrooms']
    },
    {
      industry: 'Energy & Sustainability',
      icon: Leaf,
      description: 'Green technology and sustainable energy solutions',
      solutions: ['Smart Grid Management', 'Energy Analytics', 'Sustainability Reporting', 'Carbon Footprint Tracking']
    },
    {
      industry: 'Space & Aerospace',
      icon: RocketIcon,
      description: 'Space technology and aerospace innovation',
      solutions: ['Satellite Operations', 'Mission Planning', 'Data Analysis', 'Ground Station Management']
    },
    {
      industry: 'Research & Academia',
      icon: Atom,
      description: 'Scientific research and academic technology solutions',
      solutions: ['Research Data Management', 'Collaboration Platforms', 'Analytics Tools', 'Publication Systems']
    }
  ];

  const successMetrics = [
    { metric: '500+', label: 'Successful Projects', icon: CheckCircle, color: 'text-green-400' },
    { metric: '98%', label: 'Client Satisfaction', icon: Star, color: 'text-yellow-400' },
    { metric: '40%', label: 'Average Cost Reduction', icon: TrendingUp, color: 'text-blue-400' },
    { metric: '3x', label: 'Performance Improvement', icon: Gauge, color: 'text-purple-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Solutions - Zion Tech Group"
        description="Comprehensive technology solutions for enterprises, SMBs, startups, and government organizations. Transform your business with our AI-powered solutions."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container-responsive relative z-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Intelligent Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From enterprise transformations to startup acceleration, we deliver cutting-edge technology solutions 
              that drive growth, efficiency, and innovation across all industries.
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
      </section>

      {/* Main Solutions Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Solutions for Every Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you're a startup looking to scale, an enterprise seeking transformation, 
              or a government agency modernizing services, we have the expertise and solutions you need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/10"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{solution.category}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                
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
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <Star className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={solution.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors group-hover:translate-x-1"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored technology solutions designed for the unique challenges and opportunities 
              of your specific industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((industry, index) => (
              <motion.div
                key={industry.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-600/50 transition-all duration-300 border border-slate-600/50 hover:border-cyan-400/30"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{industry.industry}</h3>
                <p className="text-gray-300 mb-4 text-sm">{industry.description}</p>
                
                <ul className="space-y-2">
                  {industry.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                      {solution}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions have delivered measurable results for businesses of all sizes 
              across diverse industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className={`w-10 h-10 ${metric.color}`} />
                </div>
                <div className={`text-4xl font-bold ${metric.color} mb-2`}>{metric.metric}</div>
                <div className="text-gray-300 text-sm">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our intelligent solutions can help you achieve your business goals 
              and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Schedule a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;