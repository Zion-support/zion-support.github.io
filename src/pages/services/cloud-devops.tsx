import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Cloud,
  Zap,
  Target,
  Users,
  BarChart3,
  Shield,
  Heart,
  Rocket,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Cpu,
  Eye,
  Lock,
  Activity,
  Code,
  Database,
  Network,
  Server,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Play,
  BookOpen,
  Lightbulb,
  Award,
  Clock,
  DollarSign,
  Brain,
  GitBranch,
  Box,
  Layers,
  Monitor,
  Settings,
  Database as DatabaseIcon,
  Layers
} from 'lucide-react';

export function CloudDevOpsPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const cloudServices = [
    {
      category: 'Cloud Infrastructure',
      services: [
        {
          title: 'Cloud Migration & Setup',
          description: 'Seamless migration to cloud platforms with optimized architecture',
          features: ['AWS/Azure/GCP Setup', 'Migration Planning', 'Cost Optimization', 'Performance Tuning'],
          price: '$8,500',
          duration: '6-10 weeks',
          icon: Cloud,
          href: '/services/cloud-migration'
        },
        {
          title: 'Multi-Cloud Strategy',
          description: 'Implement and manage multi-cloud environments for redundancy',
          features: ['Multi-Cloud Architecture', 'Load Balancing', 'Failover Systems', 'Cost Management'],
          price: '$12,000',
          duration: '8-12 weeks',
          icon: Globe,
          href: '/services/multi-cloud-strategy'
        },
        {
          title: 'Cloud Security & Compliance',
          description: 'Comprehensive security and compliance for cloud environments',
          features: ['Identity Management', 'Data Encryption', 'Compliance Auditing', 'Security Monitoring'],
          price: '$6,800',
          duration: '6-8 weeks',
          icon: Shield,
          href: '/services/cloud-security'
        }
      ]
    },
    {
      category: 'DevOps & CI/CD',
      services: [
        {
          title: 'CI/CD Pipeline Implementation',
          description: 'Automated build, test, and deployment pipelines',
          features: ['Jenkins/GitLab CI', 'Automated Testing', 'Deployment Automation', 'Rollback Systems'],
          price: '$5,500',
          duration: '4-6 weeks',
          icon: GitBranch,
          href: '/services/ci-cd-pipeline'
        },
        {
          title: 'Container Orchestration',
          description: 'Kubernetes and Docker implementation and management',
          features: ['Kubernetes Setup', 'Docker Containerization', 'Service Mesh', 'Auto-scaling'],
          price: '$7,200',
          duration: '6-8 weeks',
          icon: Layers,
          href: '/services/container-orchestration'
        },
        {
          title: 'Infrastructure as Code',
          description: 'Terraform and Ansible for infrastructure automation',
          features: ['Terraform Implementation', 'Ansible Automation', 'Version Control', 'Environment Management'],
          price: '$4,800',
          duration: '4-6 weeks',
          icon: Code,
          href: '/services/infrastructure-as-code'
        }
      ]
    },
    {
      category: 'Monitoring & Observability',
      services: [
        {
          title: 'Application Performance Monitoring',
          description: 'Comprehensive monitoring and alerting systems',
          features: ['Real-time Monitoring', 'Performance Metrics', 'Alert Management', 'Dashboard Creation'],
          price: '$3,500',
          duration: '4-5 weeks',
          icon: Monitor,
          href: '/services/apm-monitoring'
        },
        {
          title: 'Log Management & Analytics',
          description: 'Centralized logging and log analysis solutions',
          features: ['ELK Stack Setup', 'Log Aggregation', 'Search & Analytics', 'Retention Policies'],
          price: '$4,200',
          duration: '5-6 weeks',
          icon: DatabaseIcon,
          href: '/services/log-management'
        },
        {
          title: 'Infrastructure Monitoring',
          description: 'Server and infrastructure health monitoring',
          features: ['Server Monitoring', 'Network Monitoring', 'Resource Tracking', 'Capacity Planning'],
          price: '$3,800',
          duration: '4-6 weeks',
          icon: Server,
          href: '/services/infrastructure-monitoring'
        }
      ]
    },
    {
      category: 'Database & Storage',
      services: [
        {
          title: 'Database Management',
          description: 'Cloud database setup, optimization, and management',
          features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Scaling Solutions'],
          price: '$5,500',
          duration: '6-8 weeks',
          icon: Database,
          href: '/services/database-management'
        },
        {
          title: 'Data Backup & Recovery',
          description: 'Comprehensive backup strategies and disaster recovery',
          features: ['Backup Automation', 'Disaster Recovery', 'Data Retention', 'Testing & Validation'],
          price: '$4,500',
          duration: '4-6 weeks',
          icon: Shield,
          href: '/services/backup-recovery'
        }
      ]
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Globe },
    { id: 'services', name: 'Services', icon: Zap },
    { id: 'benefits', name: 'Benefits', icon: Star },
    { id: 'technologies', name: 'Technologies', icon: Cpu },
    { id: 'pricing', name: 'Pricing', icon: DollarSign }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and streamline development workflows',
      icon: Zap,
      color: 'text-blue-400'
    },
    {
      title: 'Faster Deployment',
      description: 'Reduce time-to-market with automated CI/CD pipelines',
      icon: Rocket,
      color: 'text-green-400'
    },
    {
      title: 'Cost Optimization',
      description: 'Optimize cloud resources and reduce infrastructure costs',
      icon: DollarSign,
      color: 'text-cyan-400'
    },
    {
      title: 'Scalability',
      description: 'Easily scale applications based on demand',
      icon: TrendingUp,
      color: 'text-purple-400'
    },
    {
      title: 'Reliability',
      description: 'Improve system reliability and reduce downtime',
      icon: Shield,
      color: 'text-yellow-400'
    },
    {
      title: 'Security',
      description: 'Enhanced security with automated compliance and monitoring',
      icon: Lock,
      color: 'text-orange-400'
    }
  ];

  const technologies = [
    {
      title: 'Cloud Platforms',
      description: 'Major cloud service providers and their services',
      icon: Cloud,
      platforms: ['Amazon Web Services (AWS)', 'Microsoft Azure', 'Google Cloud Platform (GCP)', 'IBM Cloud']
    },
    {
      title: 'Container Technologies',
      description: 'Containerization and orchestration tools',
                icon: Box,
      platforms: ['Docker', 'Kubernetes', 'Docker Compose', 'Helm Charts']
    },
    {
      title: 'CI/CD Tools',
      description: 'Continuous integration and deployment tools',
      icon: GitBranch,
      platforms: ['Jenkins', 'GitLab CI/CD', 'GitHub Actions', 'CircleCI']
    },
    {
      title: 'Infrastructure as Code',
      description: 'Automation and configuration management tools',
      icon: Code,
      platforms: ['Terraform', 'Ansible', 'CloudFormation', 'ARM Templates']
    },
    {
      title: 'Monitoring & Logging',
      description: 'Observability and monitoring solutions',
      icon: Monitor,
      platforms: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog']
    },
    {
      title: 'Databases',
      description: 'Cloud-native and traditional database solutions',
      icon: Database,
      platforms: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']
    }
  ];

  const pricingTiers = [
    {
      name: 'DevOps Starter',
      price: '$4,500',
      description: 'Basic DevOps implementation for small teams',
      features: [
        'Basic CI/CD Pipeline',
        'Cloud Migration',
        'Basic Monitoring',
        'Standard Support',
        '4-6 Week Delivery'
      ],
      bestFor: 'Small teams starting their DevOps journey'
    },
    {
      name: 'DevOps Professional',
      price: '$9,500',
      description: 'Comprehensive DevOps solutions for growing companies',
      features: [
        'Advanced CI/CD Pipeline',
        'Container Orchestration',
        'Infrastructure as Code',
        'Comprehensive Monitoring',
        'Priority Support',
        '8-12 Week Delivery'
      ],
      bestFor: 'Growing companies with DevOps requirements'
    },
    {
      name: 'DevOps Enterprise',
      price: '$18,000+',
      description: 'Full-scale enterprise DevOps infrastructure',
      features: [
        'Complete DevOps Platform',
        'Multi-Cloud Strategy',
        'Advanced Security',
        '24/7 Monitoring',
        'Dedicated DevOps Team',
        '16-24 Week Delivery',
        'Ongoing DevOps Partnership'
      ],
      bestFor: 'Large enterprises requiring enterprise DevOps'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Cloud className="w-4 h-4" />
                <span>Cloud & DevOps Solutions</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Accelerate with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                  {' '}Cloud & DevOps
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your development and operations with modern cloud infrastructure, 
                automated CI/CD pipelines, and scalable DevOps practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-cyan-700 transition-all duration-200"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center space-x-2 border border-gray-600 text-white px-8 py-3 rounded-lg font-medium hover:border-blue-500 hover:text-blue-400 transition-all duration-200"
                >
                  <span>View Pricing</span>
                  <DollarSign className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            {/* Overview Content */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Modern Cloud & DevOps for the Digital Age
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Cloud computing and DevOps practices have revolutionized how organizations 
                develop, deploy, and maintain software. Our solutions help you leverage 
                these technologies for maximum efficiency and innovation.
              </p>
            </div>

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500/30 transition-all duration-200"
                >
                  <div className={`w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-4`}>
                    <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            {/* DevOps Pipeline Visualization */}
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-8 rounded-lg border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                DevOps Pipeline Flow
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                  { title: 'Plan', description: 'Requirements & Design', icon: BookOpen },
                  { title: 'Code', description: 'Development', icon: Code },
                  { title: 'Build', description: 'CI/CD Pipeline', icon: GitBranch },
                  { title: 'Test', description: 'Automated Testing', icon: CheckCircle },
                  { title: 'Deploy', description: 'Production Release', icon: Rocket }
                ].map((phase, index) => (
                  <div key={phase.title} className="text-center">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <phase.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{phase.title}</h4>
                    <p className="text-gray-300 text-sm">{phase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'services' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Cloud & DevOps Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From cloud migration to complete DevOps transformation, we provide 
                comprehensive solutions for modern software development and operations.
              </p>
            </div>

            {cloudServices.map((category, categoryIndex) => (
              <div key={category.category} className="space-y-6">
                <h3 className="text-2xl font-semibold text-white border-b border-gray-700 pb-2">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (serviceIndex * 0.05) }}
                      className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500/30 transition-all duration-200 group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-400">{service.price}</div>
                          <div className="text-sm text-gray-400">{service.duration}</div>
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                      <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Link
                        to={service.href}
                        className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1 duration-200"
                      >
                        <span className="text-sm font-medium">Learn More</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === 'benefits' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Choose Our Cloud & DevOps Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the advantages of modern cloud infrastructure and DevOps practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex space-x-4"
                >
                  <div className={`w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Success Metrics */}
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-8 rounded-lg border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                DevOps Success Metrics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { metric: '10x', label: 'Faster Deployment', description: 'Reduced deployment time' },
                  { metric: '50%', label: 'Fewer Failures', description: 'Reduced production failures' },
                  { metric: '5x', label: 'Faster Recovery', description: 'Improved incident response' },
                  { metric: '30%', label: 'Cost Reduction', description: 'Lower infrastructure costs' }
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">{stat.metric}</div>
                    <div className="text-white font-medium mb-1">{stat.label}</div>
                    <div className="text-gray-300 text-sm">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'technologies' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Technologies We Work With
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage cutting-edge technologies to deliver robust and scalable solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <tech.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{tech.title}</h3>
                      <p className="text-gray-400 mb-4">{tech.description}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-white mb-2">Technologies:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {tech.platforms.map((platform, platformIndex) => (
                        <div key={platformIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-blue-400 flex-shrink-0" />
                          <span>{platform}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'pricing' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Cloud & DevOps Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Competitive pricing for enterprise-grade cloud and DevOps solutions with 
                flexible deployment options.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gray-800/50 p-8 rounded-lg border ${
                    tier.name === 'DevOps Professional' 
                      ? 'border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-cyan-500/10' 
                      : 'border-gray-700'
                  } relative`}
                >
                  {tier.name === 'DevOps Professional' && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold text-blue-400 mb-6">{tier.price}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-blue-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-sm text-gray-400 mb-6">
                    <strong>Best for:</strong> {tier.bestFor}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 rounded-lg font-medium transition-all duration-200 ${
                      tier.name === 'DevOps Professional'
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white'
                        : 'bg-gray-700 hover:bg-gray-600 text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Development & Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our cloud and DevOps solutions can accelerate your 
              software delivery and improve operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-cyan-700 transition-all duration-200"
              >
                <span>Start Your Transformation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center space-x-2 border border-gray-600 text-white px-8 py-3 rounded-lg font-medium hover:border-blue-500 hover:text-blue-400 transition-all duration-200"
              >
                <span>View Full Pricing</span>
                <DollarSign className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}