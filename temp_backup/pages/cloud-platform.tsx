import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Globe, Cloud, Server, Database, Zap, Shield, BarChart3, Rocket } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function CloudPlatform() {
  const services = [
    {
      icon: <Cloud className="w-12 h-12 text-cyan-400" />,
      title: "Multi-Cloud Solutions",
      description: "Comprehensive multi-cloud infrastructure and disaster recovery",
      href: "/multi-cloud-disaster-recovery"
    },
    {
      icon: <Server className="w-12 h-12 text-blue-400" />,
      title: "Kubernetes Management",
      description: "Advanced Kubernetes RBAC auditing and cluster management",
      href: "/kubernetes-rbac-auditor"
    },
    {
      icon: <Database className="w-12 h-12 text-purple-400" />,
      title: "Database Solutions",
      description: "High-availability PostgreSQL and database performance optimization",
      href: "/managed-postgres-ha"
    },
    {
      icon: <Zap className="w-12 h-12 text-green-400" />,
      title: "Serverless Platform",
      description: "Serverless cron management and cloud automation",
      href: "/serverless-cron-manager"
    },
    {
      icon: <Shield className="w-12 h-12 text-yellow-400" />,
      title: "Cloud Security",
      description: "Zero trust network architecture and cloud security",
      href: "/zero-trust-network-architecture"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-pink-400" />,
      title: "Cloud Monitoring",
      description: "Comprehensive cloud infrastructure monitoring and SLO tracking",
      href: "/status-pages-slo"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Cloud Infrastructure Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Building scalable, secure, and high-performance cloud infrastructure that powers 
                the future of digital transformation and business innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
                  onClick={() => window.location.href = service.href}
                >
                  <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-center">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Cloud Services</h2>
              <p className="text-xl text-gray-300">Comprehensive cloud infrastructure solutions</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Infrastructure as a Service</h3>
                <p className="text-gray-300 mb-4">
                  Scalable compute, storage, and networking resources
                </p>
                <a href="/services" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Learn More →
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.0 }}
                className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">AI-Powered Analytics</h3>
                <p className="text-gray-300 mb-4">
                  Intelligent insights and predictive analytics
                </p>
                <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Learn More →
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 }}
                className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Security & Compliance</h3>
                <p className="text-gray-300 mb-4">
                  Enterprise-grade security with compliance frameworks
                </p>
                <a href="/cybersecurity" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Learn More →
                </a>
              </motion.div>
=======
import Head from 'next/head';
import { Cloud, Shield, Globe, Server, Database, ArrowRight, Check } from 'lucide-react';


export default function CloudPlatformPage() {
  const features = [
    {
      icon: <Server className="w-8 h-8 text-white" />,
      title: 'Scalable Infrastructure',
      description: 'Auto-scaling compute resources that grow with your needs'
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: 'Managed Databases',
      description: 'Fully managed databases with automated backups and scaling'
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: 'Global CDN',
      description: 'Lightning-fast content delivery across the globe'
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Enterprise Security',
      description: 'SOC 2 compliant with advanced threat protection'
    }
  ];

  const benefits = [
    '99.99% uptime guarantee',
    'Global edge locations',
    'Real-time monitoring',
    'Automated scaling',
    'Pay-as-you-go pricing',
    '24/7 expert support'
  ];

  return (
    <>
      <Head>
        <title>Cloud Platform - Zion Tech Group</title>
        <meta name="description" content="Enterprise-grade cloud infrastructure with global reach, automated scaling, and 99.99% uptime guarantee." />
      </Head>

      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <Cloud className="w-4 h-4 mr-2" />
                Enterprise Cloud Infrastructure
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Cloud Platform
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Enterprise-grade cloud infrastructure with global reach, automated scaling, and 99.99% uptime guarantee.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact" className="shadow-2xl shadow-blue-500/25">
                Deploy Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact" className="border-white/20 hover:border-white/40">
                View Documentation
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Cloud Infrastructure Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Built for scale, performance, and reliability
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index} className="p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
>>>>>>> origin/auto/autonomy-17186719616
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Features */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Platform Features</h2>
              <p className="text-xl text-gray-300">Advanced capabilities for modern businesses</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 2.6 }}
                className="space-y-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Auto-scaling</h3>
                    <p className="text-gray-300">Intelligent resource scaling based on demand</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Multi-region deployment</h3>
                    <p className="text-gray-300">Global infrastructure for optimal performance</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">AI optimization</h3>
                    <p className="text-gray-300">Machine learning for cost and performance optimization</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 2.8 }}
                className="space-y-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Container orchestration</h3>
                    <p className="text-gray-300">Kubernetes-native platform management</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Server className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Serverless computing</h3>
                    <p className="text-gray-300">Pay-per-use serverless functions</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Team collaboration</h3>
                    <p className="text-gray-300">Built-in collaboration and access management</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Cloud Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">50%</div>
            <div className="text-gray-300">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-300">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">Support</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready for Cloud Transformation?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our cloud experts help you build a robust, scalable, and secure cloud infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default CloudPlatformPage;
=======
        {/* Benefits Section */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                  Why Choose Our Cloud Platform?
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1">
                        <Check className="w-4 h-4 text-blue-500" />
                      </div>
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20">
                  <div className="text-center">
                    <Cloud className="w-24 h-24 mx-auto mb-6 text-blue-400" />
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Global Infrastructure
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Deploy your applications across multiple regions for optimal performance
                    </p>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm">
                      <Globe className="w-4 h-4 mr-2" />
                      15+ regions worldwide
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Scale Your Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Deploy your applications on enterprise-grade cloud infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Free Trial
              </a>
              <a
                href="/contact" className="border-white text-white hover:bg-white hover:text-blue-600">
                Contact Sales
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
>>>>>>> origin/auto/autonomy-17186719616
