import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Brain, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star,
  TrendingUp,
  Globe,
  Clock,
  Award,
  Target,
  BarChart3,
  Sparkles,
  Network,
  Database,
  Lock,
  Eye,
  Server,
  Smartphone,
  Wifi,
  Activity,
  Gauge,
  Shield,
  GitBranch,
  Code,
  Settings,
  Monitor,
  RefreshCw,
  Play,
  StopCircle,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import EnhancedSEO from '@/components/EnhancedSEO';

export default function CloudDevOps() {
  const features = [
    {
      icon: Cloud,
      title: "Multi-Cloud Management",
      description: "Unified management across AWS, Azure, GCP, and private clouds"
    },
    {
      icon: Zap,
      title: "CI/CD Automation",
      description: "Streamlined development and deployment pipelines with intelligent automation"
    },
    {
      icon: Monitor,
      title: "Infrastructure Monitoring",
      description: "Real-time monitoring and alerting for all cloud resources"
    },
    {
      icon: Shield,
      title: "DevSecOps",
      description: "Integrated security throughout the development lifecycle"
    }
  ];

  const benefits = [
    "Reduce deployment time by up to 80%",
    "Improve system reliability and uptime",
    "Lower infrastructure costs by 40%",
    "Enable faster feature delivery",
    "Automate repetitive operations"
  ];

  const useCases = [
    {
      title: "Application Development",
      description: "Accelerate development with cloud-native tools and automation",
      icon: Code
    },
    {
      title: "Microservices Architecture",
      description: "Build and deploy scalable microservices with container orchestration",
      icon: GitBranch
    },
    {
      title: "Data Infrastructure",
      description: "Manage big data pipelines and analytics platforms",
      icon: Database
    },
    {
      title: "Disaster Recovery",
      description: "Implement robust backup and recovery strategies",
      icon: RefreshCw
    }
  ];

  const devopsServices = [
    {
      name: "CI/CD Pipelines",
      description: "Automated build, test, and deployment workflows",
      icon: Play,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Infrastructure as Code",
      description: "Manage infrastructure using declarative configuration files",
      icon: Code,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Container Orchestration",
      description: "Deploy and manage containerized applications at scale",
      icon: GitBranch,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Monitoring & Logging",
      description: "Comprehensive observability and log management",
      icon: Monitor,
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Security & Compliance",
      description: "Automated security scanning and compliance checks",
      icon: Shield,
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Performance Optimization",
      description: "Continuous performance monitoring and optimization",
      icon: Gauge,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="Cloud DevOps Services - Zion Tech Group"
        description="Transform your development and operations with our cloud DevOps platform. Automated CI/CD, infrastructure as code, and multi-cloud management."
        canonical="/services/cloud-devops"
        url="https://ziontechgroup.com/services/cloud-devops"
        type="service"
        tags={['Cloud DevOps', 'CI/CD', 'Infrastructure as Code', 'Container Orchestration', 'Cloud Management']}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-cyan-900/20 to-indigo-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Cloud className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 text-sm font-medium">Cloud DevOps</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cloud
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  {" "}DevOps Platform
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your development and operations with our comprehensive cloud DevOps platform. 
                Automated CI/CD, infrastructure as code, and multi-cloud management to accelerate 
                your digital transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/schedule-demo"
                  className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 font-semibold rounded-lg transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced DevOps Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our platform combines cutting-edge DevOps practices with cloud expertise to deliver 
                unprecedented efficiency and reliability for your development teams.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DevOps Services Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive DevOps Services
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                From CI/CD to infrastructure management, our platform covers all aspects of modern DevOps.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {devopsServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our DevOps Platform?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Experience the future of development and operations with our comprehensive DevOps solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Platform Metrics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Deployment Speed</span>
                    <span className="text-blue-400 font-semibold">80% Faster</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Uptime</span>
                    <span className="text-blue-400 font-semibold">99.99%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Cost Reduction</span>
                    <span className="text-blue-400 font-semibold">40% Less</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Cloud Support</span>
                    <span className="text-blue-400 font-semibold">Multi-Cloud</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                DevOps Use Cases
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our DevOps platform addresses the most critical challenges in modern software development.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-gray-400">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/20 via-cyan-900/20 to-indigo-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your DevOps?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join leading organizations who are already using our DevOps platform 
                to accelerate development and improve operational efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                >
                  Get Your Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 font-semibold rounded-lg transition-all duration-300"
                >
                  Contact DevOps Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}