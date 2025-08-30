import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Cloud,
  Zap,
  Target,
  TrendingUp,
  Users,
  Shield,
  Cpu,
  Rocket,
  Eye,
  Activity,
  Code,
  Database,
  Server,
  Network,
  BarChart3,
  Heart,
  Building,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Play,
  ChevronRight,
  Brain,
  GitBranch,
  Docker,
  Kubernetes,
  Monitor,
  Settings,
  RefreshCw,
  Layers
} from 'lucide-react';

export default function CloudDevOpsPage() {
  const cloudServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Design and implement scalable cloud infrastructure solutions',
      icon: Cloud,
      href: '/services/cloud-infrastructure',
      features: ['Multi-cloud Strategy', 'Auto-scaling', 'Load Balancing', 'High Availability'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'DevOps Automation',
      description: 'Streamline development and operations with automated pipelines',
      icon: GitBranch,
      href: '/services/devops-automation',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Automated Testing', 'Deployment Automation'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Container Orchestration',
      description: 'Manage containerized applications with Kubernetes and Docker',
      icon: Docker,
      href: '/services/container-orchestration',
      features: ['Kubernetes Management', 'Docker Containers', 'Service Mesh', 'Microservices'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Monitoring & Observability',
      description: 'Comprehensive monitoring and logging solutions for cloud applications',
      icon: Monitor,
      href: '/services/monitoring-observability',
      features: ['Real-time Monitoring', 'Log Aggregation', 'Performance Metrics', 'Alert Management'],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Security & Compliance',
      description: 'Ensure cloud security and regulatory compliance',
      icon: Shield,
      href: '/services/cloud-security',
      features: ['Identity Management', 'Data Encryption', 'Compliance Monitoring', 'Threat Detection'],
      color: 'from-red-500 to-pink-600'
    },
    {
      title: 'Cost Optimization',
      description: 'Optimize cloud costs and resource utilization',
      icon: TrendingUp,
      href: '/services/cloud-cost-optimization',
      features: ['Resource Optimization', 'Cost Monitoring', 'Budget Management', 'Performance Tuning'],
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const devOpsCapabilities = [
    {
      title: 'Continuous Integration',
      description: 'Automate code integration and testing processes',
      icon: RefreshCw,
      features: ['Automated Builds', 'Code Quality Checks', 'Unit Testing', 'Integration Testing']
    },
    {
      title: 'Continuous Deployment',
      description: 'Automate deployment processes for faster delivery',
      icon: Rocket,
      features: ['Automated Deployments', 'Blue-Green Deployments', 'Rollback Capabilities', 'Environment Management']
    },
    {
      title: 'Infrastructure as Code',
      description: 'Manage infrastructure through code and automation',
      icon: Code,
      features: ['Terraform', 'CloudFormation', 'Ansible', 'Version Control']
    },
    {
      title: 'Monitoring & Logging',
      description: 'Comprehensive observability and monitoring solutions',
      icon: Activity,
      features: ['Application Monitoring', 'Infrastructure Monitoring', 'Log Management', 'Performance Analytics']
    }
  ];

  const cloudProviders = [
    { name: 'AWS', icon: Cloud, description: 'Amazon Web Services solutions and optimization' },
    { name: 'Azure', icon: Cloud, description: 'Microsoft Azure cloud services and integration' },
    { name: 'Google Cloud', icon: Cloud, description: 'Google Cloud Platform solutions' },
    { name: 'Multi-Cloud', icon: Globe, description: 'Hybrid and multi-cloud strategies' },
    { name: 'Private Cloud', icon: Server, description: 'On-premises and private cloud solutions' },
    { name: 'Edge Computing', icon: Network, description: 'Edge computing and distributed systems' }
  ];

  const benefits = [
    { name: 'Faster Delivery', icon: Zap, description: 'Accelerate software delivery cycles' },
    { name: 'Improved Quality', icon: CheckCircle, description: 'Better code quality and reliability' },
    { name: 'Cost Reduction', icon: TrendingUp, description: 'Lower infrastructure and operational costs' },
    { name: 'Scalability', icon: Layers, description: 'Easily scale applications and infrastructure' },
    { name: 'Security', icon: Shield, description: 'Enhanced security and compliance' },
    { name: 'Innovation', icon: Brain, description: 'Foster innovation and experimentation' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-indigo-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Cloud className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Cloud & DevOps
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your development and operations with modern cloud infrastructure and DevOps practices 
              that accelerate delivery and improve reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 flex items-center justify-center group"
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/solutions"
                className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-200 flex items-center justify-center group"
              >
                View Solutions
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cloud Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Cloud & DevOps Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive cloud infrastructure and DevOps solutions designed to modernize your operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-transform"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">DevOps Capabilities</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive DevOps practices and tools to streamline your development and operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {devOpsCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                    <capability.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">{capability.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">{capability.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {capability.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Cloud Providers We Support</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Expertise across major cloud platforms and multi-cloud strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cloudProviders.map((provider, index) => (
              <motion.div
                key={provider.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <provider.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{provider.name}</h3>
                <p className="text-gray-400 text-sm">{provider.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Benefits of Cloud & DevOps</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transform your organization with modern cloud and DevOps practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.name}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Pipeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">DevOps Pipeline</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive DevOps pipeline that automates your entire software delivery process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {[
              { name: 'Plan', icon: Target, description: 'Requirements and planning' },
              { name: 'Code', icon: Code, description: 'Development and version control' },
              { name: 'Build', icon: Settings, description: 'Automated builds and testing' },
              { name: 'Test', icon: CheckCircle, description: 'Quality assurance and testing' },
              { name: 'Deploy', icon: Rocket, description: 'Production deployment' }
            ].map((stage, index) => (
              <motion.div
                key={stage.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{stage.name}</h3>
                <p className="text-gray-400 text-sm">{stage.description}</p>
                {index < 4 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-blue-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 via-cyan-900/20 to-indigo-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our cloud and DevOps solutions can accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 flex items-center justify-center group"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-200 flex items-center justify-center group"
              >
                View Case Studies
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}