import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  FileText,
  Video,
  Users,
  Settings,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Zap,
  Star,
  TrendingUp,
  Target,
  BarChart3,
  GraduationCap,
  Heart,
  ShoppingCart,
  Cpu,
  Lock,
  Globe,
  Sparkles,
  Flame,
  Thunder,
  Lightning,
  Sun,
  Moon,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Pi,
  Rho,
  Sigma,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega,
  Award,
  Eye,
  ArrowUpRight,
  Search,
  HelpCircle,
  BookOpen,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Support() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const supportCategories = [
    {
      name: 'Technical Support',
      icon: Settings,
      color: 'from-blue-600 to-cyan-600',
      description: 'Get help with technical issues and system problems',
      services: [
        { name: 'System Troubleshooting', href: '/support/technical/troubleshooting', description: 'Resolve system and application issues' },
        { name: 'Configuration Help', href: '/support/technical/configuration', description: 'Setup and configuration assistance' },
        { name: 'Performance Optimization', href: '/support/technical/performance', description: 'Improve system performance' },
        { name: 'Integration Support', href: '/support/technical/integration', description: 'Help with third-party integrations' }
      ]
    },
    {
      name: 'AI Services Support',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      description: 'Support for AI-powered services and solutions',
      services: [
        { name: 'AI Model Training', href: '/support/ai/training', description: 'AI model training and optimization' },
        { name: 'Data Processing', href: '/support/ai/data-processing', description: 'Data preparation and processing' },
        { name: 'Model Deployment', href: '/support/ai/deployment', description: 'AI model deployment assistance' },
        { name: 'Performance Monitoring', href: '/support/ai/monitoring', description: 'AI system monitoring and alerts' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-green-600 to-emerald-600',
      description: 'Cloud infrastructure and development operations support',
      services: [
        { name: 'Cloud Migration', href: '/support/cloud/migration', description: 'Cloud migration planning and execution' },
        { name: 'DevOps Pipeline', href: '/support/cloud/devops', description: 'CI/CD pipeline setup and maintenance' },
        { name: 'Infrastructure Scaling', href: '/support/cloud/scaling', description: 'Auto-scaling and load balancing' },
        { name: 'Cost Optimization', href: '/support/cloud/cost-optimization', description: 'Cloud cost management and optimization' }
      ]
    },
    {
      name: 'Security & Compliance',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      description: 'Security and compliance assistance',
      services: [
        { name: 'Security Audits', href: '/support/security/audits', description: 'Security assessment and compliance audits' },
        { name: 'Incident Response', href: '/support/security/incident-response', description: 'Security incident handling and recovery' },
        { name: 'Compliance Support', href: '/support/security/compliance', description: 'Regulatory compliance assistance' },
        { name: 'Vulnerability Management', href: '/support/security/vulnerability-management', description: 'Security vulnerability assessment and remediation' }
      ]
    },
    {
      name: 'Training & Documentation',
      icon: BookOpen,
      color: 'from-yellow-600 to-orange-600',
      description: 'Training resources and documentation support',
      services: [
        { name: 'User Training', href: '/support/training/user-training', description: 'End-user training and workshops' },
        { name: 'Technical Documentation', href: '/support/training/documentation', description: 'Technical guides and manuals' },
        { name: 'Video Tutorials', href: '/support/training/video-tutorials', description: 'Step-by-step video guides' },
        { name: 'Best Practices', href: '/support/training/best-practices', description: 'Industry best practices and guidelines' }
      ]
    }
  ];

  const supportChannels = [
    {
      name: 'Live Chat Support',
      icon: MessageCircle,
      description: 'Get instant help from our technical support team',
      availability: '24/7',
      responseTime: '< 2 minutes',
      color: 'from-green-600 to-emerald-600',
      href: '/support/chat'
    },
    {
      name: 'Phone Support',
      icon: Phone,
      description: 'Speak directly with our technical experts',
      availability: '24/7',
      responseTime: 'Immediate',
      color: 'from-blue-600 to-cyan-600',
      href: 'tel:+13024640950'
    },
    {
      name: 'Email Support',
      icon: Mail,
      description: 'Send detailed technical questions and get comprehensive answers',
      availability: '24/7',
      responseTime: '< 4 hours',
      color: 'from-purple-600 to-pink-600',
      href: 'mailto:kleber@ziontechgroup.com'
    },
    {
      name: 'Remote Support',
      icon: Settings,
      description: 'Get remote assistance and screen sharing support',
      availability: '24/7',
      responseTime: '< 15 minutes',
      color: 'from-orange-600 to-red-600',
      href: '/support/remote'
    }
  ];

  const priorityLevels = [
    {
      level: 'Critical',
      description: 'System down or major security breach',
      responseTime: 'Immediate',
      color: 'from-red-600 to-pink-600',
      examples: ['Complete system outage', 'Security breach', 'Data loss']
    },
    {
      level: 'High',
      description: 'Major functionality impacted',
      responseTime: '< 2 hours',
      color: 'from-orange-600 to-red-600',
      examples: ['Core feature down', 'Performance degradation', 'Integration failure']
    },
    {
      level: 'Medium',
      description: 'Minor functionality issues',
      responseTime: '< 8 hours',
      color: 'from-yellow-600 to-orange-600',
      examples: ['Feature not working', 'UI issues', 'Minor bugs']
    },
    {
      level: 'Low',
      description: 'General questions and requests',
      responseTime: '< 24 hours',
      color: 'from-green-600 to-emerald-600',
      examples: ['How-to questions', 'Feature requests', 'Documentation updates']
    }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    website: "https://ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    hours: "24/7 Support Available",
    emergency: "+1 302 464 0950 ext. 1"
  };

  const filteredServices = supportCategories.flatMap(category => 
    category.services.filter(service =>
      (selectedCategory === 'all' || category.name === selectedCategory) &&
      (service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
       service.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  );

  return (
    <>
      <SEO 
        title="Technical Support - Zion Tech Group"
        description="Get comprehensive technical support for all Zion Tech Group services. 24/7 support available via phone, chat, email, and remote assistance."
        canonical="/support"
        url="https://ziontechgroup.com/support"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center">
                <Settings className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Technical Support
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Get expert technical support for all our services. Our 24/7 support team is here to help you succeed 
              with comprehensive assistance, troubleshooting, and guidance.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for support topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/70 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400 text-lg rounded-xl"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-6 py-4 bg-slate-800/70 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white rounded-xl"
                >
                  <option value="all">All Categories</option>
                  {supportCategories.map(category => (
                    <option key={category.name} value={category.name}>{category.name}</option>
                  ))}
                </select>
              </div>
              {searchQuery && (
                <div className="text-sm text-slate-300">
                  Found {filteredServices.length} support topics matching "{searchQuery}"
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">How Can We Help You?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose from multiple support channels to get the technical assistance you need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={channel.href} className="block">
                  <div className="bg-slate-900 rounded-xl p-6 h-full hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${channel.color} flex items-center justify-center`}>
                      <channel.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {channel.name}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4">{channel.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="text-cyan-400">
                        <span className="font-semibold">Availability:</span> {channel.availability}
                      </div>
                      <div className="text-slate-300">
                        <span className="font-semibold">Response:</span> {channel.responseTime}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Priority Levels */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Support Priority Levels</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Understand how we prioritize and respond to different types of support requests
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {priorityLevels.map((priority, index) => (
              <motion.div
                key={priority.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 rounded-xl p-6"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${priority.color} flex items-center justify-center`}>
                  <div className="text-2xl font-bold text-white">{priority.level[0]}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{priority.level}</h3>
                <p className="text-slate-300 text-sm mb-4 text-center">{priority.description}</p>
                <div className="text-center mb-4">
                  <div className="text-lg font-bold text-cyan-400">{priority.responseTime}</div>
                  <div className="text-sm text-slate-400">Response Time</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-white mb-2">Examples:</div>
                  {priority.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center space-x-2 text-sm text-slate-300">
                      <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                      <span>{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Support Categories</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Browse support topics organized by service category and technical area
            </p>
          </motion.div>

          <div className="space-y-8">
            {supportCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-slate-900 rounded-xl p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                    <p className="text-slate-300">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: serviceIndex * 0.05 }}
                    >
                      <Link to={service.href} className="block">
                        <div className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-all duration-300 group h-full">
                          <h4 className="font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                            {service.name}
                          </h4>
                          <p className="text-sm text-slate-300 mb-4">
                            {service.description}
                          </p>
                          <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                            <span className="text-sm font-medium">Get Support</span>
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Emergency Support
            </h2>
            <p className="text-xl text-red-100 mb-8">
              For critical system issues or security breaches, contact our emergency support line immediately
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 mb-8">
              <div className="text-6xl font-bold text-white mb-4">{contactInfo.emergency}</div>
              <p className="text-white text-lg">Available 24/7 for critical issues</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.emergency}`}
                className="px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
              >
                Call Emergency Line
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                Contact Support Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Contact Information</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get in touch with our support team through multiple channels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone Support</h3>
              <a 
                href={`tel:${contactInfo.phone}`}
                className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-semibold"
              >
                {contactInfo.phone}
              </a>
              <p className="text-slate-300 text-sm mt-2">{contactInfo.hours}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Support</h3>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-semibold"
              >
                {contactInfo.email}
              </a>
              <p className="text-slate-300 text-sm mt-2">Response within 4 hours</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
              <a 
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-semibold"
              >
                {contactInfo.website.replace('https://', '')}
              </a>
              <p className="text-slate-300 text-sm mt-2">Visit our main site</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {contactInfo.address}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Technical Support?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Our expert team is ready to help you resolve any technical issues and get back to business quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
              </Link>
              <Link
                to="/help"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                Browse Help Center
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
