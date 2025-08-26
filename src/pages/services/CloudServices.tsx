import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Server, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  CheckCircle,
  ArrowRight,
  Play,
  Database,
  Globe,
  Lock
} from 'lucide-react';

export default function CloudServices() {
  const cloudServices = [
    {
      title: "Cloud Migration",
      description: "Seamlessly migrate your infrastructure to the cloud with minimal downtime and maximum efficiency",
      icon: Cloud,
      features: ["Infrastructure assessment", "Migration planning", "Data migration", "Performance optimization"]
    },
    {
      title: "DevOps & CI/CD",
      description: "Accelerate development with automated pipelines and continuous integration/deployment",
      icon: Zap,
      features: ["Pipeline automation", "Container orchestration", "Infrastructure as code", "Monitoring & alerting"]
    },
    {
      title: "Cloud Security",
      description: "Protect your cloud assets with enterprise-grade security and compliance solutions",
      icon: Shield,
      features: ["Identity management", "Data encryption", "Compliance auditing", "Threat detection"]
    },
    {
      title: "Cloud Optimization",
      description: "Optimize costs and performance with intelligent cloud resource management",
      icon: TrendingUp,
      features: ["Cost optimization", "Performance tuning", "Auto-scaling", "Resource monitoring"]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Scalability",
      description: "Scale your infrastructure up or down based on demand with cloud-native solutions"
    },
    {
      icon: Users,
      title: "Cost Efficiency",
      description: "Reduce capital expenses and pay only for the resources you actually use"
    },
    {
      icon: CheckCircle,
      title: "Reliability",
      description: "Achieve 99.9%+ uptime with redundant infrastructure and automated failover"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Deploy your applications globally with edge computing and CDN capabilities"
    }
  ];

  const platforms = [
    {
      name: "AWS",
      description: "Amazon Web Services - Comprehensive cloud platform with extensive service offerings",
      icon: "☁️",
      features: ["EC2, S3, Lambda", "RDS, DynamoDB", "CloudFormation", "CloudWatch"]
    },
    {
      name: "Azure",
      description: "Microsoft Azure - Enterprise-grade cloud platform with strong integration capabilities",
      icon: "🔷",
      features: ["Virtual Machines", "Azure SQL", "Functions", "Monitor"]
    },
    {
      name: "Google Cloud",
      description: "Google Cloud Platform - Advanced AI/ML capabilities with global infrastructure",
      icon: "🔵",
      features: ["Compute Engine", "Cloud Storage", "Cloud Functions", "BigQuery"]
    },
    {
      name: "Multi-Cloud",
      description: "Hybrid and multi-cloud strategies for optimal performance and cost management",
      icon: "🌐",
      features: ["Load balancing", "Data replication", "Disaster recovery", "Cost optimization"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6">
              <Cloud className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Cloud & DevOps
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your infrastructure with modern cloud solutions and DevOps practices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud solutions to modernize your infrastructure and accelerate development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cloudServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Cloud?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the transformative benefits of cloud computing and DevOps practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Platforms Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cloud Platforms
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with all major cloud providers to deliver the best solution for your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{platform.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{platform.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{platform.description}</p>
                <ul className="space-y-1">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs text-gray-500">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Tools Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              DevOps Tools & Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modern tools and practices to streamline your development and operations
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Docker", icon: "🐳" },
              { name: "Kubernetes", icon: "☸️" },
              { name: "Terraform", icon: "🏗️" },
              { name: "Jenkins", icon: "🔧" },
              { name: "GitLab CI", icon: "🦊" },
              { name: "Ansible", icon: "⚡" },
              { name: "Prometheus", icon: "📊" },
              { name: "Grafana", icon: "📈" },
              { name: "ELK Stack", icon: "🔍" },
              { name: "Vault", icon: "🔐" },
              { name: "Consul", icon: "🏛️" },
              { name: "Istio", icon: "🛡️" }
            ].map((tool, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-cyan-500 transition-all duration-300 text-center group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-2">{tool.icon}</div>
                <div className="text-sm text-gray-300 font-medium">{tool.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's modernize your systems with cloud-native solutions and DevOps best practices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Cloud Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/services"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}