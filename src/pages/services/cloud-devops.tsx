import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Server, 
  GitBranch, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Star,
  Award,
  Database,
  Network,
  Shield,
  Cpu,
  BarChart3,
  Users
} from 'lucide-react';

const CloudDevOpsServicesPage = () => {
  const services = [
    {
      title: 'Cloud Infrastructure',
      description: 'Design and implement scalable cloud architectures on AWS, Azure, and Google Cloud.',
      features: ['Multi-Cloud Strategy', 'Auto-scaling', 'Load Balancing', 'High Availability'],
      icon: Cloud
    },
    {
      title: 'DevOps Automation',
      description: 'Streamline development and deployment with CI/CD pipelines and automation tools.',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Automated Testing', 'Deployment Automation'],
      icon: GitBranch
    },
    {
      title: 'Container Orchestration',
      description: 'Manage containerized applications with Kubernetes and Docker solutions.',
      features: ['Kubernetes Management', 'Docker Optimization', 'Service Mesh', 'Microservices'],
      icon: Server
    },
    {
      title: 'Monitoring & Observability',
      description: 'Comprehensive monitoring and logging solutions for optimal performance.',
      features: ['Real-time Monitoring', 'Log Aggregation', 'Performance Metrics', 'Alerting Systems'],
      icon: BarChart3
    }
  ];

  const benefits = [
    '50% faster deployment cycles',
    '99.9% uptime guarantee',
    'Reduced infrastructure costs by 30%',
    'Automated scaling and optimization',
    'Enhanced security and compliance',
    '24/7 monitoring and support'
  ];

  const technologies = [
    'AWS', 'Azure', 'Google Cloud',
    'Kubernetes', 'Docker', 'Terraform',
    'Jenkins', 'GitLab CI', 'GitHub Actions',
    'Prometheus', 'Grafana', 'ELK Stack'
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full px-6 py-3 mb-8">
              <Cloud className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan font-medium">Cloud & DevOps Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Accelerate Your
              <span className="text-gradient"> Digital Transformation</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Modernize your infrastructure with cloud-native solutions and DevOps practices 
              that drive innovation, efficiency, and scalability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Cloud Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                DevOps Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Cloud & DevOps Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From cloud migration to continuous deployment, we provide end-to-end solutions 
              that transform your development and operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                
                <p className="text-zion-slate-light mb-6 text-lg">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Cloud & DevOps Services?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the benefits of modern cloud infrastructure and DevOps practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg text-zion-slate-light">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Technologies We Master
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We work with the latest and most reliable technologies to deliver 
              cutting-edge cloud and DevOps solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium text-white">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join the cloud revolution and accelerate your development with modern DevOps practices. 
              Our experts are ready to guide your transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Start Cloud Migration
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Download DevOps Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CloudDevOpsServicesPage;