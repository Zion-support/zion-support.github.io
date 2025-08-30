import React from 'react.ts';
import { SEO  } from "../../components/SEO";
import { motion  } from 'framer-motion.ts';
import { Cloud, Zap, Shield, Cpu, Database, Server, GitBranch, Docker, Kubernetes, Aws, Azure, Gcp, Monitor, BarChart3, Settings, Users, Globe, Lock, RefreshCw, TrendingUp  } from 'lucide-react';

export default function CloudDevOps(...args[]):  {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Design and implement scalable cloud architectures on AWS, Azure, and GCP'
    },
    {
      icon: Docker,
      title: 'Container Orchestration',
      description: 'Kubernetes and Docker expertise for scalable microservices architecture',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: GitBranch,
      title: 'GitOps Workflows',
      description: 'Infrastructure as code and automated deployment management'
    },
    {
      icon: Monitor,
      title: 'Monitoring & Logging',
      description: 'Comprehensive monitoring, alerting, and centralized logging solutions'
    },;
    {;
      icon: Shield,;
      title: 'Security & Compliance',;
      description: 'DevSecOps practices and compliance automation for cloud environments';
    };
  ];

  const benefits = [
    'Deploy 10x faster with automated pipelines',;
    'Reduce infrastructure costs by 40%',;
    'Achieve 99.9% uptime with monitoring',;
    'Scale applications automatically',;
    'Improve team productivity by 60%',;
    'Ensure security and compliance';
  ];

  const services = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration from on-premises to cloud infrastructure',
      price: 'From $5,000',
      features['Infrastructure assessment', 'Migration planning', 'Data migration', 'Testing & validation']
    },
    {
      title: 'DevOps Implementation',
      description: 'Complete DevOps transformation with modern tools and practices',
      price: 'From $8,000',
      features['CI/CD setup', 'Infrastructure as Code', 'Monitoring & logging', 'Team training']
    },
    {
      title: 'Cloud Optimization',
      description: 'Cost optimization and performance tuning for existing cloud infrastructure',
      price: 'From $3,000',
      features['Cost analysis', 'Performance optimization', 'Resource scaling', 'Best practices']
    },
<<<<<<< HEAD
    {
      title: '24/7 Managed Services',
      description: 'Round-the-clock monitoring, maintenance, and support',
      price: 'From $2,500/month',
      features['Proactive monitoring', 'Incident response', 'Regular maintenance', 'Performance reports']
    };
  ];

  const technologies = [
    { name: 'AWS', icon: Aws, description: 'Amazon Web Services' },
    { name: 'Azure', icon: Azure, description: 'Microsoft Azure' },
    { name: 'GCP', icon: Gcp, description: 'Google Cloud Platform' },
    { name: 'Kubernetes', icon: Kubernetes, description: 'Container orchestration' },
    { name: 'Docker', icon: Docker, description: 'Containerization' },
    { name: 'Terraform', icon: Settings, description: 'Infrastructure as Code' }
=======;
    {;
      icon: Database,;
      title: 'Database Management',;
      description: 'Automated database provisioning, backups, and scaling';
    };
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      description: 'Scalable infrastructure for high-traffic online stores'
    },
    {
      industry: 'SaaS Platforms',
      description: 'Multi-tenant applications with automated scaling'
    },
    {
      industry: 'Financial Services',
      description: 'Secure, compliant cloud infrastructure for banking applications';
    },;
    {;
      industry: 'Healthcare',;
      description: 'HIPAA-compliant cloud solutions for medical applications';
    };
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  ];

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 





}}
            animate = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Cloud className="w-4 h-4 mr-2" />
              Cloud & DevOps Solutions
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud
              <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"> DevOps</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your development and operations with our comprehensive Cloud DevOps 
              solutions that enable rapid delivery, scalability, and operational excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200 flex items-center justify-center">
                <Settings className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 





}}
            whileInView = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive DevOps Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform provides all the tools you need to implement modern DevOps 
              practices and achieve operational excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)  => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 





}}
                whileInView = {
  { opacity: 1,
  y: 0 





}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 





}}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 





}}
            whileInView = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Core DevOps Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From infrastructure automation to continuous deployment, we provide 
              end-to-end DevOps solutions for modern applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  x: index % 2 === 0 ? -20 : 20 





}}
                whileInView = {
  { opacity: 1,
  x: 0 





}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 





}}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 





}}
            whileInView = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience measurable improvements in deployment speed, reliability, and operational efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <motion.div
                  key={index}
                  initial = {
  { opacity: 0,
  x: -20 





}}
                  whileInView = {
  { opacity: 1,
  x: 0 





}}
                  transition = {
  { duration: 0.5,
  delay: index * 0.1 





}}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <motion.div
                  key={index + 3}
                  initial = {
  { opacity: 0,
  x: 20 





}}
                  whileInView = {
  { opacity: 1,
  x: 0 





}}
                  transition = {
  { duration: 0.5,
  delay: index * 0.1 





}}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 





}}
            whileInView = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our DevOps solutions adapt to various industries, providing tailored 
              automation and infrastructure for your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index)  => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 





}}
                whileInView = {
  { opacity: 1,
  y: 0 





}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 





}}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-blue-500/30 transition-all duration-200"
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
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
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

          <div className="grid grid-cols-2 md: grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index)  => (
              <motion.div
                key={tech.name}
                initial = {
  { opacity: 0,
  scale: 0.8 
}}
                whileInView = {
  { opacity: 1,
  scale: 1 
}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 
}}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-700 transition-all duration-300">
                  <tech.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.industry}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 





}}
            whileInView = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Start Your DevOps Journey Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join organizations worldwide that use our DevOps solutions to accelerate 
              development and achieve operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 flex items-center justify-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200">
                Contact Sales
              </button>
<<<<<<< HEAD
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )}
=======;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};

export default CloudDevOps;

>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
