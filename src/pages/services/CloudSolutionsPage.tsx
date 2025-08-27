import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Server, 
  Database, 
  Zap, 
  Shield, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Star,
  TrendingUp,
  Users,
  Lock,
  BarChart3,
  Settings
} from 'lucide-react';

const CloudSolutionsPage = () => {
  const cloudServices = [
    {
      id: 'cloud-migration',
      title: 'Cloud Migration',
      description: 'Seamless migration of applications and infrastructure to the cloud',
      icon: <Cloud className="w-8 h-8" />,
      features: ['Lift & Shift', 'Re-architecture', 'Hybrid Cloud', 'Multi-Cloud Strategy'],
      useCases: ['Legacy Modernization', 'Cost Optimization', 'Scalability', 'Disaster Recovery'],
      pricing: 'Starting from $5,000/month'
    },
    {
      id: 'devops-automation',
      title: 'DevOps Automation',
      description: 'Automate your development and deployment processes',
      icon: <Zap className="w-8 h-8" />,
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Automated Testing', 'Monitoring & Alerting'],
      useCases: ['Faster Deployments', 'Quality Assurance', 'Team Collaboration', 'Reduced Errors'],
      pricing: 'Starting from $3,500/month'
    },
    {
      id: 'container-orchestration',
      title: 'Container Orchestration',
      description: 'Manage and scale containerized applications efficiently',
      icon: <Server className="w-8 h-8" />,
      features: ['Kubernetes', 'Docker Management', 'Service Mesh', 'Auto-scaling'],
      useCases: ['Microservices', 'Application Scaling', 'Resource Optimization', 'High Availability'],
      pricing: 'Starting from $4,200/month'
    },
    {
      id: 'serverless-architecture',
      title: 'Serverless Architecture',
      description: 'Build scalable applications without managing infrastructure',
      icon: <Globe className="w-8 h-8" />,
      features: ['Function as a Service', 'Event-Driven', 'Auto-scaling', 'Pay-per-use'],
      useCases: ['Web Applications', 'API Development', 'Data Processing', 'IoT Backends'],
      pricing: 'Starting from $2,800/month'
    }
  ];

  const cloudProviders = [
    'AWS', 'Azure', 'Google Cloud', 'Digital Ocean', 'IBM Cloud', 'Oracle Cloud'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-6">
            <Cloud className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Cloud Solutions
            </span> & DevOps
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed mb-8">
            Transform your infrastructure with modern cloud solutions and DevOps practices. 
            From migration to automation, we help you build scalable, resilient systems.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">99.9%</div>
              <div className="text-zion-slate-light">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-purple mb-2">50%+</div>
              <div className="text-zion-slate-light">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-blue mb-2">10x</div>
              <div className="text-zion-slate-light">Faster Deployments</div>
            </div>
          </div>
        </motion.div>

        {/* Cloud Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {cloudServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/10"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <div className="text-right">
                  <div className="text-sm text-zion-cyan font-medium">{service.pricing}</div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use Cases */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.useCases.map((useCase, useCaseIndex) => (
                    <span
                      key={useCaseIndex}
                      className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/20"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to={`/services/cloud/${service.id}`}
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Cloud Providers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Cloud Providers We Work With
            </h2>
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              We have expertise across major cloud platforms and can help you choose 
              the best solution for your needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {cloudProviders.map((provider, index) => (
              <motion.div
                key={provider}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-blue-dark/20 border border-zion-cyan/20 rounded-lg p-4 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="text-zion-cyan font-medium">{provider}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* DevOps Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              DevOps Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Faster Delivery</h3>
              <p className="text-zion-slate-light">
                Reduce time-to-market with automated CI/CD pipelines
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Improved Security</h3>
              <p className="text-zion-slate-light">
                Security integrated into every stage of development
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-blue to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Better Quality</h3>
              <p className="text-zion-slate-light">
                Automated testing and continuous monitoring
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Scale in the Cloud?
          </h2>
          <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
            Let our cloud experts help you build a scalable, resilient infrastructure 
            that grows with your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105"
            >
              Get Cloud Consultation
            </Link>
            <Link
              to="/services/pricing"
              className="px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              View Cloud Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CloudSolutionsPage;