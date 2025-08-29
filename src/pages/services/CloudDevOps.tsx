import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Zap, 
  Shield, 
  Rocket, 
  Cpu, 
  Database, 
  GitBranch, 
  Server, 
  Lock, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Play,
  Code,
  Settings,
  Monitor,
  Globe,
  Users,
  Clock,
  TrendingUp
} from 'lucide-react';

export default function CloudDevOps() {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Design, deploy, and manage scalable cloud architectures across AWS, Azure, and GCP',
      benefits: ['Auto-scaling', 'Load balancing', 'High availability', 'Cost optimization']
    },
    {
      icon: Zap,
      title: 'CI/CD Pipelines',
      description: 'Automate your development workflow with modern CI/CD tools and practices',
      benefits: ['Automated testing', 'Deployment automation', 'Version control', 'Rollback capabilities']
    },
    {
      icon: Shield,
      title: 'DevSecOps',
      description: 'Integrate security into your DevOps pipeline from the start',
      benefits: ['Security scanning', 'Compliance automation', 'Vulnerability management', 'Access control']
    },
    {
      icon: Rocket,
      title: 'Infrastructure as Code',
      description: 'Manage infrastructure using code with Terraform, CloudFormation, and Ansible',
      benefits: ['Version control', 'Reproducible deployments', 'Environment consistency', 'Automated provisioning']
    }
  ];

  const services = [
    {
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your applications to the cloud with minimal downtime',
      icon: Cloud,
      price: 'From $15,000'
    },
    {
      title: 'DevOps Transformation',
      description: 'Transform your development and operations processes for better efficiency',
      icon: Zap,
      price: 'From $25,000'
    },
    {
      title: 'Infrastructure Automation',
      description: 'Automate your infrastructure provisioning and management',
      icon: Code,
      price: 'From $20,000'
    },
    {
      title: 'Monitoring & Observability',
      description: 'Implement comprehensive monitoring and logging solutions',
      icon: Monitor,
      price: 'From $12,000'
    }
  ];

  const technologies = [
    { name: 'AWS', icon: Cloud, color: 'from-orange-500 to-red-600' },
    { name: 'Azure', icon: Cloud, color: 'from-blue-600 to-cyan-600' },
    { name: 'GCP', icon: Cloud, color: 'from-green-600 to-blue-600' },
    { name: 'Docker', icon: Server, color: 'from-blue-500 to-cyan-500' },
    { name: 'Kubernetes', icon: Cpu, color: 'from-blue-600 to-indigo-600' },
    { name: 'Terraform', icon: Code, color: 'from-purple-600 to-pink-600' },
    { name: 'Jenkins', icon: GitBranch, color: 'from-red-600 to-orange-600' },
    { name: 'GitLab CI', icon: GitBranch, color: 'from-orange-600 to-red-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Cloud DevOps Services - Zion Tech Group"
        description="Transform your development and operations with our comprehensive Cloud DevOps services. From infrastructure automation to CI/CD pipelines, we help you achieve faster deployments and better reliability."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 rounded-full px-6 py-2 mb-6">
              <Cloud className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">Cloud DevOps Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Accelerate Your
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Development</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your development and operations with modern DevOps practices, 
              cloud-native architectures, and automated infrastructure management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Get Started</span>
              </button>
              <button className="border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <ArrowRight className="w-5 h-5" />
                <span>Learn More</span>
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Cloud DevOps Services?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven methodologies to deliver 
              reliable, scalable, and secure cloud infrastructure solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300 mb-4">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Cloud DevOps Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From initial setup to ongoing optimization, we provide comprehensive 
              DevOps solutions tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-cyan-400/30 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    <div className="text-sm text-slate-400">Starting price</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 mb-6">{service.description}</p>
                
                <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Quote
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We leverage industry-leading tools and platforms to build robust, 
              scalable, and maintainable cloud infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-cyan-400/30 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your DevOps?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how our Cloud DevOps services can accelerate your development, 
              improve reliability, and reduce operational costs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 font-semibold px-8 py-4 rounded-lg transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}