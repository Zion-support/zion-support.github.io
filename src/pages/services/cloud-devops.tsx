import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Cloud,
  Zap,
  Target,
  TrendingUp,
  Users,
  Heart,
  Building,
  Rocket,
  Cpu,
  Database,
  Network,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Lightbulb,
  Code,
  BarChart3,
  Activity,
  Eye,
  Lock,
  Server,
  Brain,
  CircuitBoard,
  Microscope,
  Flask,
  TestTube,
  Calculator,
  AlertTriangle,
  Security,
  Key,
  Fingerprint,
  Monitor,
  HardDrive,
  Wifi,
  Smartphone,
  GitBranch,
  GitCommit,
  GitPullRequest,
  GitMerge,
  Package,
  Settings,
  Terminal,
  Database as DatabaseIcon,
  Layers,
  Box,
  Container,
  FileText
} from 'lucide-react';

export function CloudDevOpsPage() {
  const cloudServices = [
    {
      category: 'Cloud Infrastructure',
      services: [
        {
          name: 'Cloud Migration',
          description: 'Seamless migration to cloud platforms with minimal downtime',
          icon: Cloud,
          href: '/services/cloud-migration',
          features: ['Assessment & Planning', 'Data Migration', 'Performance Optimization']
        },
        {
          name: 'Multi-Cloud Strategy',
          description: 'Optimize costs and performance across multiple cloud providers',
          icon: Globe,
          href: '/services/multi-cloud-strategy',
          features: ['Provider Selection', 'Cost Optimization', 'Unified Management']
        },
        {
          name: 'Cloud Security',
          description: 'Comprehensive security for cloud environments',
          icon: Security,
          href: '/services/cloud-security',
          features: ['Identity Management', 'Data Protection', 'Compliance']
        }
      ]
    },
    {
      category: 'DevOps & CI/CD',
      services: [
        {
          name: 'CI/CD Pipeline Automation',
          description: 'Automated software delivery pipelines for faster releases',
          icon: GitBranch,
          href: '/services/ci-cd-automation',
          features: ['Pipeline Design', 'Automated Testing', 'Deployment Automation']
        },
        {
          name: 'Infrastructure as Code',
          description: 'Manage infrastructure through code for consistency and reliability',
          icon: Code,
          href: '/services/infrastructure-as-code',
          features: ['Terraform', 'CloudFormation', 'Ansible']
        },
        {
          name: 'Container Orchestration',
          description: 'Manage containerized applications at scale',
          icon: Container,
          href: '/services/container-orchestration',
          features: ['Kubernetes', 'Docker Swarm', 'Service Mesh']
        }
      ]
    },
    {
      category: 'Monitoring & Observability',
      services: [
        {
          name: 'Application Performance Monitoring',
          description: 'Real-time monitoring and alerting for applications',
          icon: Activity,
          href: '/services/apm-monitoring',
          features: ['Performance Metrics', 'Error Tracking', 'User Experience']
        },
        {
          name: 'Infrastructure Monitoring',
          description: 'Comprehensive monitoring of cloud infrastructure',
          icon: Monitor,
          href: '/services/infrastructure-monitoring',
          features: ['Resource Utilization', 'Cost Monitoring', 'Capacity Planning']
        },
        {
          name: 'Log Management',
          description: 'Centralized log collection, analysis, and alerting',
          icon: FileText,
          href: '/services/log-management',
          features: ['Log Aggregation', 'Search & Analysis', 'Real-time Alerting']
        }
      ]
    },
    {
      category: 'Database & Storage',
      services: [
        {
          name: 'Database Management',
          description: 'Optimize and manage databases in the cloud',
          icon: DatabaseIcon,
          href: '/services/database-management',
          features: ['Performance Tuning', 'Backup & Recovery', 'Scaling']
        },
        {
          name: 'Data Storage Solutions',
          description: 'Scalable and secure data storage solutions',
          icon: HardDrive,
          href: '/services/data-storage',
          features: ['Object Storage', 'Block Storage', 'File Storage']
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Faster Delivery',
      description: 'Accelerate software delivery with automated pipelines'
    },
    {
      icon: Target,
      title: 'Improved Reliability',
      description: 'Reduce failures with automated testing and deployment'
    },
    {
      icon: TrendingUp,
      title: 'Cost Optimization',
      description: 'Optimize cloud costs and resource utilization'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Improve collaboration between development and operations'
    }
  ];

  const technologies = [
    'AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker',
    'Terraform', 'Ansible', 'Jenkins', 'GitLab CI', 'GitHub Actions',
    'Prometheus', 'Grafana', 'ELK Stack', 'Istio', 'Helm'
  ];

  const practices = [
    {
      practice: 'Continuous Integration',
      description: 'Automated code integration and testing',
      benefits: ['Early Bug Detection', 'Faster Feedback', 'Quality Assurance']
    },
    {
      practice: 'Continuous Deployment',
      description: 'Automated deployment to production',
      benefits: ['Faster Releases', 'Reduced Risk', 'Improved Reliability']
    },
    {
      practice: 'Infrastructure as Code',
      description: 'Manage infrastructure through version-controlled code',
      benefits: ['Consistency', 'Reproducibility', 'Version Control']
    },
    {
      practice: 'Monitoring & Observability',
      description: 'Comprehensive visibility into system performance',
      benefits: ['Proactive Issue Detection', 'Performance Optimization', 'User Experience']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-2xl flex items-center justify-center">
                <Cloud className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Cloud & DevOps
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Accelerate your digital transformation with modern cloud infrastructure 
              and DevOps practices. Scale efficiently, deploy faster, and innovate continuously.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 font-medium inline-flex items-center space-x-2"
              >
                <span>Start Your Cloud Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-200 font-medium"
              >
                View Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Cloud & DevOps?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Modern cloud and DevOps practices enable organizations to deliver value 
              faster, more reliably, and at scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Cloud & DevOps Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive portfolio covers cloud infrastructure, DevOps automation, 
              monitoring, and everything needed for modern software delivery.
            </p>
          </motion.div>

          <div className="space-y-12">
            {cloudServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-8 text-blue-400 flex items-center space-x-3">
                  <category.icon className="w-6 h-6" />
                  <span>{category.category}</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold mb-2">{service.name}</h4>
                          <p className="text-gray-400 text-sm">{service.description}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="text-sm font-medium text-gray-300 mb-2">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to={service.href}
                        className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Practices Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              DevOps Best Practices
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We implement proven DevOps practices to streamline your software delivery 
              process and improve team productivity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practices.map((practice, index) => (
              <motion.div
                key={practice.practice}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{practice.practice}</h3>
                <p className="text-gray-400 mb-4">{practice.description}</p>
                <div className="space-y-2">
                  {practice.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Cloud & DevOps Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We work with the latest cloud platforms, DevOps tools, and technologies 
              to deliver robust and scalable solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-indigo-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your DevOps?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's discuss how our cloud and DevOps expertise can accelerate your 
              software delivery and improve your team's productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 font-medium inline-flex items-center space-x-2"
              >
                <span>Start Your Transformation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-200 font-medium"
              >
                View Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default CloudDevOpsPage;