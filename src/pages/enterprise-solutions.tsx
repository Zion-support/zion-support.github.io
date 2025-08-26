import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building, Server, Database, Network, Code, Zap, Users, 
  Shield, Heart, Truck, Car, Rocket, Atom, Lightbulb, 
  TrendingUp, Palette, Target, Clock, Star, Globe, 
  FileText, Calendar, Video, CheckCircle, ArrowRight, 
  ChevronDown, ChevronRight, Phone, Mail, MapPin, Linkedin, 
  Twitter, Github, Youtube, Facebook, Instagram, AlertTriangle,
  Key, Fingerprint, Bug, Wifi, HardDrive, Cpu, PieChart,
  LineChart, Activity, TrendingDown, Filter, Search, Layers,
  Cloud, GitBranch, GitCommit, GitPullRequest, GitMerge, GitCompare, GitBranchPlus
} from 'lucide-react';

const EnterpriseSolutions: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const enterpriseServices = [
    {
      title: 'Digital Transformation',
      icon: Rocket,
      description: 'Complete digital transformation for enterprise organizations',
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'Digital Strategy', path: '/digital-strategy', description: 'Comprehensive digital roadmap' },
        { name: 'Process Automation', path: '/process-automation', description: 'Workflow and process optimization' },
        { name: 'Legacy Modernization', path: '/legacy-modernization', description: 'Modernize existing systems' },
        { name: 'Change Management', path: '/change-management', description: 'Organizational transformation support' },
        { name: 'Digital Culture', path: '/digital-culture', description: 'Foster innovation and agility' },
        { name: 'Technology Assessment', path: '/technology-assessment', description: 'Current state evaluation' }
      ]
    },
    {
      title: 'Enterprise Architecture',
      icon: Building,
      description: 'Scalable and robust enterprise architecture solutions',
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'Architecture Design', path: '/architecture-design', description: 'Enterprise system design' },
        { name: 'Technology Roadmap', path: '/technology-roadmap', description: 'Strategic technology planning' },
        { name: 'Integration Strategy', path: '/integration-strategy', description: 'System integration planning' },
        { name: 'Scalability Planning', path: '/scalability-planning', description: 'Growth-ready architecture' },
        { name: 'Performance Optimization', path: '/performance-optimization', description: 'System performance tuning' },
        { name: 'Architecture Governance', path: '/architecture-governance', description: 'Standards and compliance' }
      ]
    },
    {
      title: 'Enterprise Security',
      icon: Shield,
      description: 'Comprehensive security solutions for large organizations',
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'Zero Trust Architecture', path: '/zero-trust-network-architecture', description: 'Modern security model' },
        { name: 'Identity Management', path: '/identity-management', description: 'User access control' },
        { name: 'Data Protection', path: '/data-protection', description: 'Enterprise data security' },
        { name: 'Compliance Management', path: '/compliance-management', description: 'Regulatory compliance' },
        { name: 'Security Monitoring', path: '/security-monitoring', description: '24/7 security oversight' },
        { name: 'Incident Response', path: '/incident-response', description: 'Security incident handling' }
      ]
    },
    {
      title: 'Enterprise Data',
      icon: Database,
      description: 'Enterprise data management and analytics solutions',
      color: 'from-orange-500 to-red-500',
      services: [
        { name: 'Data Strategy', path: '/data-strategy', description: 'Enterprise data planning' },
        { name: 'Data Governance', path: '/data-governance', description: 'Data management policies' },
        { name: 'Master Data Management', path: '/master-data-management', description: 'Centralized data control' },
        { name: 'Data Quality', path: '/data-quality', description: 'Data validation and cleansing' },
        { name: 'Data Analytics', path: '/data-analytics', description: 'Business intelligence solutions' },
        { name: 'Data Privacy', path: '/data-privacy', description: 'Privacy and compliance' }
      ]
    },
    {
      title: 'Enterprise Integration',
      icon: Network,
      description: 'Seamless integration of enterprise systems and applications',
      color: 'from-indigo-500 to-purple-500',
      services: [
        { name: 'API Management', path: '/api-management', description: 'Enterprise API strategy' },
        { name: 'System Integration', path: '/system-integration', description: 'Connect disparate systems' },
        { name: 'Data Integration', path: '/data-integration', description: 'Unified data access' },
        { name: 'Workflow Integration', path: '/workflow-integration', description: 'Process automation' },
        { name: 'Cloud Integration', path: '/cloud-integration', description: 'Hybrid cloud solutions' },
        { name: 'Legacy Integration', path: '/legacy-integration', description: 'Modernize existing systems' }
      ]
    },
    {
      title: 'Enterprise Operations',
      icon: Cpu,
      description: 'Optimized enterprise operations and management',
      color: 'from-teal-500 to-cyan-500',
      services: [
        { name: 'IT Operations', path: '/it-operations', description: 'IT infrastructure management' },
        { name: 'DevOps Implementation', path: '/devops-implementation', description: 'Modern development practices' },
        { name: 'Cloud Operations', path: '/cloud-operations', description: 'Cloud infrastructure management' },
        { name: 'Monitoring & Alerting', path: '/monitoring-alerting', description: 'Proactive system monitoring' },
        { name: 'Performance Management', path: '/performance-management', description: 'System optimization' },
        { name: 'Disaster Recovery', path: '/disaster-recovery', description: 'Business continuity planning' }
      ]
    }
  ];

  const enterpriseTechnologies = [
    {
      name: 'Cloud Platforms',
      description: 'AWS, Azure, GCP enterprise solutions',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Enterprise Software',
      description: 'ERP, CRM, SCM systems',
      icon: Building,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Data Platforms',
      description: 'Snowflake, Databricks, BigQuery',
      icon: Database,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Integration Tools',
      description: 'MuleSoft, Boomi, Informatica',
      icon: Network,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Security Solutions',
      description: 'Okta, CyberArk, Palo Alto',
      icon: Shield,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Monitoring Tools',
      description: 'Splunk, Datadog, New Relic',
      icon: Eye,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const industries = [
    {
      name: 'Financial Services',
      description: 'Banking, insurance, and fintech solutions',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Healthcare',
      description: 'Medical systems and patient care',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Manufacturing',
      description: 'Industry 4.0 and smart manufacturing',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Retail',
      description: 'E-commerce and retail technology',
      icon: ShoppingCart,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Government',
      description: 'Public sector digital transformation',
      icon: Building,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Energy',
      description: 'Utilities and energy management',
      icon: Zap,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const benefits = [
    {
      title: 'Scalability',
      description: 'Grow with your business needs',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Efficiency',
      description: 'Streamline operations and processes',
      icon: Zap,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Security',
      description: 'Enterprise-grade protection',
      icon: Shield,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Compliance',
      description: 'Meet regulatory requirements',
      icon: CheckCircle,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Innovation',
      description: 'Stay ahead of the competition',
      icon: Lightbulb,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Cost Optimization',
      description: 'Reduce operational costs',
      icon: DollarSign,
      color: 'from-teal-500 to-cyan-500'
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      {/* Header */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <div className="p-4 bg-indigo-600/20 rounded-full">
              <Building className="h-16 w-16 text-indigo-400" />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            Enterprise Solutions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Transform your enterprise with scalable, secure, and innovative technology solutions. 
            From digital transformation to enterprise architecture, we deliver enterprise-grade excellence.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 text-lg"
            >
              Transform Your Enterprise
            </Link>
            <Link
              to="/request-quote"
              className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg"
            >
              Get Enterprise Assessment
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Enterprise Services Grid */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Comprehensive Enterprise Services
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {enterpriseServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-indigo-500/50 transition-all duration-300"
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
                      className="block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700/80 transition-all duration-300 border border-transparent hover:border-indigo-500/30 group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-white group-hover:text-indigo-400 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-400 mt-1">
                            {item.description}
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enterprise Technologies */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Enterprise Technologies We Master
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + (index * 0.1) }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 text-center hover:border-indigo-500/50 transition-all duration-300"
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
            Enterprise Solutions for Every Industry
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + (index * 0.1) }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 text-center hover:border-indigo-500/50 transition-all duration-300 group"
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

      {/* Benefits */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Benefits of Enterprise Solutions
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + (index * 0.1) }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 text-center hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Enterprise?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="text-xl text-gray-300 mb-8"
          >
            Let's discuss how our enterprise solutions can modernize your operations, 
            enhance security, and drive innovation across your organization.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 text-lg"
            >
              Schedule Enterprise Consultation
            </Link>
            <Link
              to="/case-studies"
              className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg"
            >
              View Enterprise Case Studies
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
            transition={{ delay: 1.7 }}
            className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-indigo-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-indigo-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
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
                    className="w-10 h-10 bg-gray-700 hover:bg-indigo-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 + (index * 0.1) }}
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
            <Link to="/privacy" className="hover:text-indigo-400 transition-colors mx-2">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-indigo-400 transition-colors mx-2">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-indigo-400 transition-colors mx-2">Cookie Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSolutions;