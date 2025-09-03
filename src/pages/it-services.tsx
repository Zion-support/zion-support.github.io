import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Server, 
  Cloud, 
  Shield, 
  Database, 
  Network, 
  Cpu, 
  Zap, 
  Users, 
  Building, 
  Globe, 
  Lock, 
  BarChart3, 
  Monitor, 
  Smartphone, 
  Laptop, 
  Desktop,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Settings,
  Code,
  Terminal,
  GitBranch,
  Container,
  Layers,
  HardDrive,
  Wifi,
  Router,
  Key,
  Eye,
  AlertTriangle,
  FileText,
  PieChart,
  LineChart,
  Activity,
  Target,
  Lightbulb,
  Rocket,
  Brain,
  Workflow
} from 'lucide-react';

export default function ITServices() {
  const itServiceCategories = [
    {
      category: 'Cloud Infrastructure & DevOps',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      description: 'Scalable cloud solutions and automated development operations for modern businesses',
      services: [
        {
          name: 'Cloud Migration & Modernization',
          description: 'End-to-end cloud migration services with modern architecture and optimization.',
          features: ['Cloud Strategy', 'Migration Planning', 'Architecture Design', 'Data Migration', 'Performance Optimization', 'Cost Management'],
          pricing: 'From $15,000',
          marketPrice: '$25,000-50,000',
          benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability and performance', 'Enhanced security and compliance'],
          link: '/services/cloud-migration'
        },
        {
          name: 'DevOps Automation',
          description: 'Automated CI/CD pipelines and infrastructure management for faster deployments.',
          features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Automated Testing', 'Deployment Automation', 'Monitoring & Alerting'],
          pricing: 'From $8,000',
          marketPrice: '$15,000-30,000',
          benefits: ['Deploy 10x faster', 'Reduce deployment errors by 90%', 'Improve team productivity'],
          link: '/services/devops-automation'
        },
        {
          name: 'Container Orchestration',
          description: 'Kubernetes and Docker solutions for scalable containerized applications.',
          features: ['Kubernetes Setup', 'Container Management', 'Auto-scaling', 'Service Mesh', 'Monitoring'],
          pricing: 'From $12,000',
          marketPrice: '$20,000-40,000',
          benefits: ['Scale applications automatically', 'Improve resource utilization', 'Simplify deployment management'],
          link: '/services/container-orchestration'
        }
      ]
    },
    {
      category: 'Cybersecurity & Compliance',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      description: 'Enterprise-grade security solutions and regulatory compliance for data protection',
      services: [
        {
          name: 'Advanced Cybersecurity Suite',
          description: 'Comprehensive cybersecurity platform with threat detection and compliance monitoring.',
          features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Monitoring', 'Incident Response', 'Security Analytics', '24/7 Monitoring'],
          pricing: 'From $8,000',
          marketPrice: '$15,000-30,000',
          benefits: ['Detect threats 5x faster', 'Reduce security incidents by 80%', 'Ensure compliance'],
          link: '/services/cybersecurity-suite'
        },
        {
          name: 'Network Security',
          description: 'Advanced network protection with firewalls, intrusion detection, and monitoring.',
          features: ['Firewall Management', 'Intrusion Detection', 'Network Monitoring', 'VPN Solutions', 'Security Audits'],
          pricing: 'From $6,000',
          marketPrice: '$10,000-20,000',
          benefits: ['Protect against cyber attacks', 'Monitor network traffic', 'Ensure secure remote access'],
          link: '/services/network-security'
        },
        {
          name: 'Compliance Management',
          description: 'Automated compliance monitoring for GDPR, HIPAA, SOX, and other regulations.',
          features: ['Compliance Monitoring', 'Audit Trails', 'Policy Management', 'Risk Assessment', 'Reporting'],
          pricing: 'From $5,000',
          marketPrice: '$8,000-15,000',
          benefits: ['Ensure regulatory compliance', 'Reduce audit preparation time', 'Minimize compliance risks'],
          link: '/services/compliance-management'
        }
      ]
    },
    {
      category: 'Data Management & Analytics',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      description: 'Comprehensive data solutions and business intelligence for data-driven decisions',
      services: [
        {
          name: 'Data Engineering & Analytics Platform',
          description: 'Complete data solution with engineering, warehousing, and analytics capabilities.',
          features: ['Data Engineering', 'ETL/ELT Pipelines', 'Data Warehousing', 'Business Intelligence', 'Analytics Dashboards', 'Data Governance'],
          pricing: 'From $12,000',
          marketPrice: '$20,000-40,000',
          benefits: ['Make data-driven decisions', 'Improve data quality', 'Accelerate insights'],
          link: '/services/data-engineering'
        },
        {
          name: 'Business Intelligence Solutions',
          description: 'Advanced analytics and reporting solutions for business insights and decision making.',
          features: ['Data Visualization', 'Custom Dashboards', 'Predictive Analytics', 'Report Automation', 'Self-Service BI'],
          pricing: 'From $7,000',
          marketPrice: '$12,000-25,000',
          benefits: ['Gain actionable insights', 'Improve decision making', 'Reduce reporting time'],
          link: '/services/business-intelligence'
        },
        {
          name: 'Data Governance & Quality',
          description: 'Comprehensive data governance framework with quality management and compliance.',
          features: ['Data Quality Management', 'Data Lineage', 'Metadata Management', 'Data Catalog', 'Privacy Controls'],
          pricing: 'From $9,000',
          marketPrice: '$15,000-30,000',
          benefits: ['Ensure data quality', 'Improve data trust', 'Meet compliance requirements'],
          link: '/services/data-governance'
        }
      ]
    },
    {
      category: 'Network & Infrastructure',
      icon: Network,
      color: 'from-purple-500 to-indigo-500',
      description: 'Enterprise networking and infrastructure solutions for reliable connectivity',
      services: [
        {
          name: 'Network Design & Implementation',
          description: 'Enterprise network architecture design and implementation for optimal performance.',
          features: ['Network Architecture', 'LAN/WAN Design', 'Wireless Solutions', 'Network Security', 'Performance Optimization'],
          pricing: 'From $10,000',
          marketPrice: '$18,000-35,000',
          benefits: ['Improve network performance', 'Enhance security', 'Reduce downtime'],
          link: '/services/network-design'
        },
        {
          name: 'Infrastructure Management',
          description: 'Comprehensive infrastructure monitoring, management, and optimization services.',
          features: ['Server Management', 'Storage Solutions', 'Backup & Recovery', 'Performance Monitoring', 'Capacity Planning'],
          pricing: 'From $6,000',
          marketPrice: '$10,000-20,000',
          benefits: ['Reduce downtime', 'Optimize performance', 'Lower operational costs'],
          link: '/services/infrastructure-management'
        },
        {
          name: 'IT Support & Maintenance',
          description: '24/7 IT support and maintenance services for uninterrupted business operations.',
          features: ['24/7 Support', 'Remote Monitoring', 'Preventive Maintenance', 'Help Desk', 'System Updates'],
          pricing: 'From $3,000/month',
          marketPrice: '$5,000-10,000/month',
          benefits: ['Minimize downtime', 'Proactive issue resolution', 'Expert technical support'],
          link: '/services/it-support'
        }
      ]
    }
  ];

  const stats = [
    { number: '500+', label: 'IT Projects Completed', icon: Server },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Clock },
    { number: '24/7', label: 'Support Available', icon: Users },
    { number: '50+', label: 'Certified Engineers', icon: Star }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Track record of successful IT implementations with measurable business outcomes.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Military-grade security measures to protect your data and infrastructure.'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Fast implementation with minimal disruption to your business operations.'
    },
    {
      icon: DollarSign,
      title: 'Cost Optimization',
      description: 'Reduce IT costs while improving performance and reliability.'
    }
  ];

  return (
    <>
      <SEO 
        title="IT Services - Zion Tech Group" 
        description="Comprehensive IT services including cloud migration, cybersecurity, data management, and infrastructure solutions. Enterprise-grade technology services for modern businesses."
        keywords="IT services, cloud migration, cybersecurity, data management, infrastructure, DevOps, network security, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Enterprise
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> IT Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive IT solutions for modern businesses. From cloud migration to cybersecurity, 
              we provide enterprise-grade technology services that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                to="#services"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-6 border border-cyan-400/20">
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to meet the evolving needs of modern businesses
            </p>
          </motion.div>

          <div className="space-y-16">
            {itServiceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50"
              >
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{category.category}</h3>
                    <p className="text-gray-300 mt-2">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                      className="bg-gradient-to-br from-slate-700/50 to-slate-600/50 rounded-xl p-6 border border-slate-500/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                    >
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                      
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="text-sm text-gray-300 flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-lg font-bold text-white">{service.pricing}</span>
                          <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                        </div>
                        <p className="text-sm text-green-400 font-medium">Save up to 40% vs market rates</p>
                      </div>

                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h5>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, index) => (
                            <li key={index} className="text-sm text-gray-300 flex items-center">
                              <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to={service.link}
                        className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide enterprise-grade IT solutions that deliver measurable business value
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies already leveraging our IT services to drive growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Get Started Today
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-300">
                Ready to discuss your IT needs? Contact us today.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}