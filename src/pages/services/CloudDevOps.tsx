import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { Cloud, Zap, Shield, Cpu, Database, Server, GitBranch, Package, Monitor, BarChart3, Settings, Users, Globe, Lock, RefreshCw, TrendingUp } from 'lucide-react';

export default function CloudDevOps() {
  const features = [
    {
      icon: Cloud,
      title: 'Multi-Cloud Strategy',
      description: 'Optimize costs and performance across AWS, Azure, and Google Cloud Platform',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Package,
      title: 'Container Orchestration',
      description: 'Kubernetes and containerization expertise for scalable microservices architecture',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: GitBranch,
      title: 'CI/CD Pipelines',
      description: 'Automated deployment pipelines with GitLab, Jenkins, and GitHub Actions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Monitor,
      title: 'Infrastructure Monitoring',
      description: 'Real-time monitoring and alerting with Prometheus, Grafana, and ELK stack',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'DevSecOps practices with automated security scanning and compliance checks',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Managed databases, backups, and disaster recovery solutions',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const services = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration from on-premises to cloud infrastructure',
      price: 'From $5,000',
      features: ['Infrastructure assessment', 'Migration planning', 'Data migration', 'Testing & validation']
    },
    {
      title: 'DevOps Implementation',
      description: 'Complete DevOps transformation with modern tools and practices',
      price: 'From $8,000',
      features: ['CI/CD setup', 'Infrastructure as Code', 'Monitoring & logging', 'Team training']
    },
    {
      title: 'Cloud Optimization',
      description: 'Cost optimization and performance tuning for existing cloud infrastructure',
      price: 'From $3,000',
      features: ['Cost analysis', 'Performance optimization', 'Resource scaling', 'Best practices']
    },
    {
      title: '24/7 Managed Services',
      description: 'Round-the-clock monitoring, maintenance, and support',
      price: 'From $2,500/month',
      features: ['Proactive monitoring', 'Incident response', 'Regular maintenance', 'Performance reports']
    }
  ];

  const technologies = [
    { name: 'AWS', icon: Cloud, description: 'Amazon Web Services' },
    { name: 'Azure', icon: Cloud, description: 'Microsoft Azure' },
    { name: 'GCP', icon: Cloud, description: 'Google Cloud Platform' },
    { name: 'Kubernetes', icon: Package, description: 'Container orchestration' },
    { name: 'Docker', icon: Package, description: 'Containerization' },
    { name: 'Terraform', icon: Settings, description: 'Infrastructure as Code' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Cloud DevOps Services - Zion Tech Group"
        description="Transform your infrastructure with our comprehensive Cloud DevOps services. From cloud migration to CI/CD implementation, we help businesses scale efficiently."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Cloud className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud DevOps
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your infrastructure with modern cloud technologies and DevOps practices. 
              Scale efficiently, deploy faster, and maintain reliability with our expert team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-slate-600 text-white font-semibold rounded-lg hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Cloud DevOps Services?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven methodologies to deliver 
              scalable, secure, and efficient cloud infrastructure solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Cloud DevOps Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your business needs and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                >
                  Get Quote
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Technologies We Master
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We work with the latest and most reliable cloud and DevOps technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-700 transition-all duration-300">
                  <tech.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-sm text-slate-400">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our Cloud DevOps services can help your business 
              scale efficiently and stay ahead of the competition.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-slate-600 text-white font-semibold rounded-lg hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}