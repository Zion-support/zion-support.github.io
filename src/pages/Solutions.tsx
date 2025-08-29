import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
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
  Building,
  Car,
  City,
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles,
  Users,
  Globe,
  Cpu,
  Database,
  Lock,
  Cloud,
  BarChart3,
  Target,
  Zap,
  Brain,
  Eye,
  Network,
  Clock,
  FileText,
  Settings,
  Key,
  ShieldCheck,
  Building2,
  Home,
  Play,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function Solutions() {
  const industrySolutions = [
    {
      id: 'healthcare',
      title: 'Healthcare Solutions',
      icon: Heart,
      description: 'Digital health transformation and medical AI solutions',
      features: ['AI Diagnostics', 'Patient Management', 'Telemedicine', 'Medical Imaging'],
      color: 'from-red-500 to-pink-500',
      benefits: ['Improved Patient Outcomes', 'Reduced Costs', 'Enhanced Efficiency', 'Better Care Coordination']
    },
    {
      id: 'financial',
      title: 'Financial Services',
      icon: TrendingUp,
      description: 'Fintech innovation and compliance solutions',
      features: ['AI Trading', 'Risk Management', 'Fraud Detection', 'Compliance Automation'],
      color: 'from-green-500 to-blue-500',
      benefits: ['Increased Revenue', 'Risk Mitigation', 'Regulatory Compliance', 'Operational Efficiency']
    },
    {
      id: 'legal',
      title: 'Legal Services',
      icon: Scale,
      description: 'Legal tech and document automation',
      features: ['Document Review', 'Contract Analysis', 'Legal Research', 'Compliance Monitoring'],
      color: 'from-blue-500 to-indigo-500',
      benefits: ['Faster Processing', 'Cost Reduction', 'Accuracy Improvement', 'Time Savings']
    },
    {
      id: 'research',
      title: 'Research & Academia',
      icon: Atom,
      description: 'Research automation and discovery platforms',
      features: ['Literature Review', 'Data Mining', 'Hypothesis Generation', 'Research Automation'],
      color: 'from-purple-500 to-pink-500',
      benefits: ['Accelerated Discovery', 'Cost Efficiency', 'Collaboration Enhancement', 'Innovation Boost']
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      icon: Factory,
      description: 'Smart manufacturing and Industry 4.0',
      features: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Process Automation'],
      color: 'from-orange-500 to-red-500',
      benefits: ['Increased Productivity', 'Quality Improvement', 'Cost Reduction', 'Operational Excellence']
    },
    {
      id: 'retail',
      title: 'Retail & E-commerce',
      icon: ShoppingCart,
      description: 'Digital retail transformation',
      features: ['Customer Analytics', 'Inventory Management', 'Personalization', 'Omnichannel Integration'],
      color: 'from-purple-500 to-indigo-500',
      benefits: ['Enhanced Customer Experience', 'Increased Sales', 'Operational Efficiency', 'Market Competitiveness']
    },
    {
      id: 'government',
      title: 'Government & Public Sector',
      icon: Shield,
      description: 'Public sector innovation and digital transformation',
      features: ['Citizen Services', 'Data Analytics', 'Process Automation', 'Security Enhancement'],
      color: 'from-blue-500 to-cyan-500',
      benefits: ['Improved Service Delivery', 'Cost Savings', 'Transparency', 'Efficiency Gains']
    },
    {
      id: 'energy',
      title: 'Energy & Sustainability',
      icon: Leaf,
      description: 'Sustainable energy and green technology',
      features: ['Energy Optimization', 'Carbon Footprint Analysis', 'Renewable Integration', 'Smart Grid Management'],
      color: 'from-green-500 to-emerald-500',
      benefits: ['Environmental Impact', 'Cost Reduction', 'Regulatory Compliance', 'Sustainability Goals']
    },
    {
      id: 'space',
      title: 'Space & Aerospace',
      icon: Rocket,
      description: 'Space technology and aerospace innovation',
      features: ['Satellite Operations', 'Space Debris Tracking', 'Mission Planning', 'Data Analysis'],
      color: 'from-indigo-500 to-purple-500',
      benefits: ['Mission Success', 'Cost Efficiency', 'Safety Enhancement', 'Innovation Leadership']
    },
    {
      id: 'education',
      title: 'Education & Training',
      icon: GraduationCap,
      description: 'Educational technology and learning platforms',
      features: ['Personalized Learning', 'Content Creation', 'Assessment Tools', 'Collaboration Platforms'],
      color: 'from-blue-500 to-indigo-500',
      benefits: ['Improved Learning Outcomes', 'Accessibility', 'Cost Efficiency', 'Engagement Enhancement']
    }
  ];

  const businessSolutions = [
    {
      id: 'enterprise',
      title: 'Enterprise Solutions',
      icon: Building2,
      description: 'Large-scale business transformations',
      features: ['Digital Transformation', 'Process Optimization', 'Data Integration', 'Change Management'],
      color: 'from-slate-500 to-blue-500',
      benefits: ['Scalability', 'Efficiency', 'Innovation', 'Competitive Advantage']
    },
    {
      id: 'smb',
      title: 'SMB Solutions',
      icon: Building,
      description: 'Small to medium business growth',
      features: ['Growth Strategy', 'Process Automation', 'Market Expansion', 'Technology Adoption'],
      color: 'from-green-500 to-blue-500',
      benefits: ['Growth Acceleration', 'Cost Efficiency', 'Market Reach', 'Operational Excellence']
    },
    {
      id: 'startup',
      title: 'Startup Solutions',
      icon: Zap,
      description: 'Accelerate your startup growth',
      features: ['MVP Development', 'Market Validation', 'Growth Hacking', 'Investor Readiness'],
      color: 'from-yellow-500 to-orange-500',
      benefits: ['Faster Growth', 'Market Validation', 'Investor Attraction', 'Competitive Edge']
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Industry Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transform your industry with cutting-edge AI solutions. From healthcare to manufacturing, 
              we deliver tailored solutions that drive innovation and growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Your Solution
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Tailored AI solutions designed for your specific industry challenges and opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                id={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {solution.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-green-400 mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {solution.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                              <Star className="w-4 h-4 text-green-400 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-slate-700/50">
                      <Link
                        to="/request-quote"
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                      >
                        Get Custom Solution
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Solutions */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Business Size Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Scalable solutions designed for businesses of all sizes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                id={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:bg-slate-800/70 text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {solution.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <ul className="space-y-3 mb-6 text-left">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-6 border-t border-slate-700/50">
                  <Link
                    to="/request-quote"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-3xl p-12 border border-slate-600/50">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Industry?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI solutions can address your specific industry challenges 
                and drive innovation in your business.
              </p>
              
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <a href={`tel:${contactInfo.phone}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-slate-300 text-sm">
                    {contactInfo.address}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/request-quote"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Your Quote
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
                >
                  Contact Our Team
                </Link>
                <Link
                  to="/demo"
                  className="px-8 py-4 border border-purple-400/50 text-purple-400 hover:bg-purple-400/10 font-semibold rounded-xl transition-all duration-300"
                >
                  <Play className="w-5 h-5 inline mr-2" />
                  Schedule Demo
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}