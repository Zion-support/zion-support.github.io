import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Server, ArrowRight, Play, CheckCircle, Target, Users, Clock, 
  Globe, Code, Database, BarChart3, Eye, MessageSquare, Shield, 
  Lock, FileText, Zap, HardDrive, Monitor, Settings, Cloud, Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ITServices = [
  {
    id: 'cloud-migration',
    title: 'Cloud Migration',
    description: 'Seamless migration to cloud infrastructure',
    category: 'cloud',
    features: ['Infrastructure assessment', 'Migration planning', 'Data transfer'],
    useCases: ['Cost optimization', 'Scalability improvement', 'Disaster recovery'],
    link: '/contact'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions',
    category: 'security',
    features: ['Threat detection', 'Vulnerability assessment', 'Security monitoring'],
    useCases: ['Data protection', 'Compliance', 'Incident response'],
    link: '/contact'
  },
  {
    id: 'devops',
    title: 'DevOps & Automation',
    description: 'Streamline development and operations',
    category: 'devops',
    features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring'],
    useCases: ['Faster deployments', 'Reduced errors', 'Improved collaboration'],
    link: '/contact'
  },
  {
    id: 'database',
    title: 'Database Management',
    description: 'Optimize and secure your databases',
    category: 'database',
    features: ['Performance tuning', 'Backup strategies', 'Security hardening'],
    useCases: ['Data optimization', 'Business continuity', 'Compliance'],
    link: '/contact'
  },
  {
    id: 'networking',
    title: 'Network Infrastructure',
    description: 'Robust and scalable networking solutions',
    category: 'networking',
    features: ['Network design', 'Security implementation', 'Performance monitoring'],
    useCases: ['Connectivity', 'Security', 'Scalability'],
    link: '/contact'
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    description: 'Strategic IT guidance and planning',
    category: 'consulting',
    features: ['Technology assessment', 'Strategic planning', 'Implementation support'],
    useCases: ['Digital transformation', 'Technology selection', 'Process improvement'],
    link: '/contact'
  }
];

const categories = [
  { name: "All", value: "all", icon: <Globe className="h-4 w-4" /> },
  { name: "Cloud", value: "cloud", icon: <Cloud className="h-4 w-4" /> },
  { name: "Security", value: "security", icon: <Shield className="h-4 w-4" /> },
  { name: "DevOps", value: "devops", icon: <Zap className="h-4 w-4" /> },
  { name: "Database", value: "database", icon: <Database className="h-4 w-4" /> },
  { name: "Networking", value: "networking", icon: <Globe className="h-4 w-4" /> },
  { name: "Consulting", value: "consulting", icon: <CheckCircle className="h-4 w-4" /> },
  { name: "Managed Services", value: "managed services", icon: <Settings className="h-4 w-4" /> },
  { name: "Data Center", value: "data center", icon: <Server className="h-4 w-4" /> },
  { name: "Development", value: "development", icon: <Code className="h-4 w-4" /> },
  { name: "Training", value: "training", icon: <Users className="h-4 w-4" /> },
  { name: "Recovery", value: "recovery", icon: <HardDrive className="h-4 w-4" /> },
  { name: "Compliance", value: "compliance", icon: <FileText className="h-4 w-4" /> },
  { name: "Hardware", value: "hardware", icon: <Server className="h-4 w-4" /> },
  { name: "Project Management", value: "project management", icon: <BarChart3 className="h-4 w-4" /> },
  { name: "Support", value: "support", icon: <Monitor className="h-4 w-4" /> }
];

const technologies = [
  { title: 'Cloud Platforms', icon: Cloud, description: 'AWS, Azure, GCP' },
  { title: 'DevOps Tools', icon: Zap, description: 'Docker, Kubernetes, Jenkins' },
  { title: 'Security', icon: Shield, description: 'Firewalls, IDS/IPS, SIEM' },
  { title: 'Databases', icon: Database, description: 'SQL, NoSQL, Big Data' },
  { title: 'Networking', icon: Globe, description: 'Cisco, Juniper, SDN' },
  { title: 'Monitoring', icon: Monitor, description: 'Prometheus, Grafana, ELK' }
];

const ITServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  
  const filteredServices = selectedCategory === "all" 
    ? ITServices 
    : ITServices.filter(service => service.category.toLowerCase() === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Server className="w-20 h-20 text-zion-cyan mx-auto mb-8" />
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                IT <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto">
                Comprehensive IT services to modernize, secure, and optimize your technology infrastructure. 
                From cloud migration to cybersecurity, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 inline" />
                </Link>
                <button className="px-8 py-4 bg-zion-slate-dark/50 border border-zion-cyan/20 text-zion-cyan font-semibold rounded-xl hover:bg-zion-slate-dark/70 transition-all duration-300">
                  <Play className="w-5 h-5 inline mr-2" />
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.value
                    ? 'bg-zion-cyan text-white'
                    : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark/70'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">IT Solutions</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive IT services designed to drive efficiency and growth
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Server className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-zion-slate-light">{service.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Use Cases:</h4>
                    <ul className="space-y-1">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <li key={useCaseIndex} className="flex items-center gap-2 text-zion-slate-light">
                          <Target className="w-4 h-4 text-zion-purple" />
                          <span className="text-sm">{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Link 
                  to={service.link}
                  className="inline-block px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 inline" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technology <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Cutting-edge technologies and platforms we specialize in
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{tech.title}</h3>
                <p className="text-zion-slate-light">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Transform</span> Your IT?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's discuss how our IT services can revolutionize your operations and drive growth
            </p>
            <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <Users className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">Free Consultation</h3>
                  <p className="text-zion-slate-light mb-4">
                    Schedule a free IT strategy session with our experts
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                  >
                    Book Consultation
                  </Link>
                </div>
                <div className="text-center">
                  <Clock className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">Quick Start</h3>
                  <p className="text-zion-slate-light mb-4">
                    Get started with IT improvements in as little as 2 weeks
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-block px-6 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 text-zion-cyan font-semibold rounded-xl hover:bg-zion-slate-dark/70 transition-all duration-300"
                  >
                    Start Project
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;
