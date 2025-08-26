import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, Cpu, Database, Shield, Cloud, BarChart3, Users, 
  Building, Heart, Truck, Car, Rocket, Atom, Lightbulb, 
  TrendingUp, Code, Palette, Target, Network, Eye, Clock, 
  Star, Globe, FileText, Calendar, Video, Zap, Lock, 
  CheckCircle, Server, ArrowRight, ChevronDown, ChevronRight,
  Phone, Mail, MapPin, Linkedin, Twitter, Github, Youtube, 
  Facebook, Instagram, ShoppingCart
} from 'lucide-react';

const AISolutions: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const aiServices = [
    {
      title: 'AI Autonomous Systems',
      icon: Brain,
      description: 'Complete autonomous AI solutions for business operations',
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'AI Autonomous Business Manager', path: '/ai-autonomous-business-manager', description: 'Autonomous business management' },
        { name: 'AI Autonomous Research Assistant', path: '/ai-autonomous-research-assistant', description: 'AI-powered research automation' },
        { name: 'AI Autonomous Business Platform', path: '/ai-autonomous-business-platform', description: 'Complete business platform' },
        { name: 'AI Autonomous Decision Engine', path: '/ai-autonomous-decision-engine', description: 'Smart decision making' },
        { name: 'AI Autonomous DevOps', path: '/ai-autonomous-devops', description: 'Automated DevOps' },
        { name: 'AI Autonomous Security', path: '/ai-autonomous-security', description: 'Intelligent security' }
      ]
    },
    {
      title: 'AI Business Solutions',
      icon: Building,
      description: 'AI-powered business intelligence and automation',
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'AI Business Intelligence Suite', path: '/ai-business-intelligence-suite', description: 'Business intelligence' },
        { name: 'AI Marketing Automation Platform', path: '/ai-marketing-automation-platform', description: 'Marketing automation' },
        { name: 'AI Sales Intelligence Platform', path: '/ai-sales-intelligence-platform', description: 'Sales intelligence' },
        { name: 'AI Customer Service Platform', path: '/ai-customer-service-platform', description: 'Customer service AI' },
        { name: 'AI HR & Recruitment Platform', path: '/ai-hr-recruitment-platform', description: 'HR recruitment AI' },
        { name: 'AI Project Management Suite', path: '/ai-project-management-suite', description: 'Project management AI' }
      ]
    },
    {
      title: 'AI Specialized Services',
      icon: Cpu,
      description: 'Industry-specific AI solutions and expertise',
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'AI Healthcare Physician', path: '/ai-autonomous-healthcare-physician', description: 'Medical AI solutions' },
        { name: 'AI Legal Counsel', path: '/ai-autonomous-legal-counsel', description: 'Legal AI assistance' },
        { name: 'AI Education Professor', path: '/ai-autonomous-education-professor', description: 'AI learning systems' },
        { name: 'AI Manufacturing', path: '/ai-autonomous-manufacturing', description: 'Smart manufacturing' },
        { name: 'AI Logistics', path: '/ai-autonomous-logistics', description: 'Smart logistics' },
        { name: 'AI Financial Planning', path: '/ai-financial-planning-platform', description: 'Financial planning AI' }
      ]
    },
    {
      title: 'AI Content & Creativity',
      icon: Palette,
      description: 'AI-powered content creation and creative solutions',
      color: 'from-orange-500 to-red-500',
      services: [
        { name: 'AI Content Generator', path: '/ai-content-generator', description: 'AI content creation' },
        { name: 'AI Creative Director', path: '/ai-autonomous-creative-director', description: 'AI creative solutions' },
        { name: 'AI Content Personalization Engine', path: '/ai-content-personalization-engine', description: 'Content personalization' },
        { name: 'AI Creativity Studio', path: '/ai-creativity-studio', description: 'Creative AI solutions' },
        { name: 'AI Meeting Notes', path: '/ai-meeting-notes', description: 'AI-powered meeting automation' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization' }
      ]
    },
    {
      title: 'AI Research & Development',
      icon: Atom,
      description: 'Cutting-edge AI research and development services',
      color: 'from-indigo-500 to-purple-500',
      services: [
        { name: 'AI Research', path: '/ai-autonomous-research', description: 'Research automation' },
        { name: 'AI Consciousness Evolution', path: '/ai-consciousness-evolution', description: 'Advanced AI consciousness' },
        { name: 'AI Ethics & Automation', path: '/ai-ethics-automation', description: 'AI ethics and governance' },
        { name: 'AI Governance Autonomous', path: '/ai-governance-autonomous', description: 'AI governance framework' },
        { name: 'AI Predictive Maintenance Platform', path: '/ai-predictive-maintenance-platform', description: 'Predictive maintenance' },
        { name: 'AI Emotional Intelligence Training', path: '/ai-emotional-intelligence-training', description: 'Emotional intelligence' }
      ]
    },
    {
      title: 'AI Infrastructure & Tools',
      icon: Server,
      description: 'AI infrastructure, platforms, and development tools',
      color: 'from-teal-500 to-cyan-500',
      services: [
        { name: 'AI Code Review', path: '/ai-autonomous-code-review', description: 'Automated code review' },
        { name: 'AI Data Management', path: '/ai-autonomous-data', description: 'Intelligent data handling' },
        { name: 'AI Testing', path: '/ai-autonomous-testing', description: 'Automated testing' },
        { name: 'AI Tools', path: '/ai-tools', description: 'AI development tools' },
        { name: 'AI Autonomous Ecosystem Manager', path: '/ai-autonomous-ecosystem-manager', description: 'Ecosystem management' },
        { name: 'AI Ethics & Governance Framework', path: '/ai-ethics-governance-framework', description: 'Ethics framework' }
      ]
    }
  ];

  const aiTechnologies = [
    {
      name: 'Machine Learning',
      description: 'Advanced ML algorithms and models for predictive analytics',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Natural Language Processing',
      description: 'Text analysis, language understanding, and generation',
      icon: FileText,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Computer Vision',
      description: 'Image and video analysis, object recognition',
      icon: Eye,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Deep Learning',
      description: 'Neural networks and deep learning architectures',
      icon: Network,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Reinforcement Learning',
      description: 'AI systems that learn through interaction',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Quantum AI',
      description: 'Quantum computing enhanced AI algorithms',
      icon: Atom,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'AI-powered medical diagnosis and treatment',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Finance',
      description: 'AI-driven financial analysis and trading',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Manufacturing',
      description: 'Smart manufacturing and predictive maintenance',
      icon: Building,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Retail',
      description: 'AI-powered customer insights and automation',
      icon: ShoppingCart,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Transportation',
      description: 'Autonomous vehicles and logistics optimization',
      icon: Truck,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Education',
      description: 'Personalized learning and educational AI',
      icon: Users,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', url: 'https://github.com/Zion-Holdings', icon: Github },
    { name: 'YouTube', url: 'https://youtube.com/@ziontechgroup', icon: Youtube },
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Header */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <div className="p-4 bg-blue-600/20 rounded-full">
              <Brain className="h-16 w-16 text-blue-400" />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            AI Solutions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Transform your business with cutting-edge artificial intelligence solutions. 
            From autonomous systems to specialized AI services, we deliver the future of technology today.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
            >
              Get Started with AI
            </Link>
            <Link
              to="/request-quote"
              className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg"
            >
              Request Quote
            </Link>
          </motion.div>
        </div>
      </div>

      {/* AI Services Grid */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Comprehensive AI Services
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-3">
                  {service.services.map((item, itemIndex) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700/80 transition-all duration-300 border border-transparent hover:border-blue-500/30 group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-400 mt-1">
                            {item.description}
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Technologies */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            AI Technologies We Master
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + (index * 0.1) }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                <p className="text-gray-300 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            AI Solutions for Every Industry
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + (index * 0.1) }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 text-center hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                <p className="text-gray-300 text-sm">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Business with AI?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="text-xl text-gray-300 mb-8"
          >
            Let's discuss how our AI solutions can revolutionize your operations, 
            enhance efficiency, and drive innovation across your organization.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/case-studies"
              className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg"
            >
              View Case Studies
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-blue-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-blue-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Address</h3>
                <p className="text-gray-300">{contactInfo.address}</p>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 + (index * 0.1) }}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/privacy" className="hover:text-blue-400 transition-colors mx-2">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-blue-400 transition-colors mx-2">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-blue-400 transition-colors mx-2">Cookie Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AISolutions;