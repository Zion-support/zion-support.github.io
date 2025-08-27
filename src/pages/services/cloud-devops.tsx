import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Cloud, 
  Zap, 
  GitBranch, 
  Server, 
  Database, 
  CheckCircle, 
  ArrowRight,
  Users,
  Globe,
  Shield,
  BarChart3,
  Cpu
} from 'lucide-react';

export default function CloudDevOpsPage() {
  const features = [
    {
      icon: Cloud,
      title: "Multi-Cloud Solutions",
      description: "AWS, Azure, and Google Cloud expertise",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "CI/CD Pipelines",
      description: "Automated deployment and continuous integration",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: GitBranch,
      title: "Infrastructure as Code",
      description: "Terraform, CloudFormation, and Ansible",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Server,
      title: "Container Orchestration",
      description: "Kubernetes, Docker, and microservices",
      color: "from-orange-500 to-red-500"
    }
  ];

  const services = [
    {
      title: "Cloud Migration",
      description: "Seamless migration to cloud infrastructure",
      price: "$5,000+",
      features: ["Assessment & planning", "Data migration", "Performance optimization", "Cost optimization"]
    },
    {
      title: "DevOps Implementation",
      description: "Complete DevOps culture transformation",
      price: "$3,500/month",
      features: ["CI/CD setup", "Monitoring & logging", "Security integration", "Team training"]
    },
    {
      title: "Managed Cloud Services",
      description: "24/7 cloud infrastructure management",
      price: "$2,800/month",
      features: ["Monitoring & alerting", "Backup & recovery", "Security updates", "Performance tuning"]
    }
  ];

  const cloudSolutions = [
    {
      icon: Globe,
      title: "Global Infrastructure",
      description: "Multi-region deployment and CDN optimization"
    },
    {
      icon: Shield,
      title: "Cloud Security",
      description: "Identity management, encryption, and compliance"
    },
    {
      icon: BarChart3,
      title: "Monitoring & Analytics",
      description: "Real-time performance monitoring and cost tracking"
    },
    {
      icon: Cpu,
      title: "Serverless Architecture",
      description: "Event-driven, scalable serverless solutions"
    }
  ];

  return (
    <>
      <SEO 
        title="Cloud & DevOps Services - Zion Tech Group"
        description="Transform your infrastructure with cloud-native solutions and DevOps practices. Cloud migration, automation, and managed services."
        keywords="cloud services, DevOps, cloud migration, infrastructure as code, CI/CD, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"></div>
          <div className="container-responsive relative z-10">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">
                <Cloud className="w-4 h-4 mr-2" />
                Cloud & DevOps Services
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Scale Your Business with{' '}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Cloud & DevOps
                </span>
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Accelerate your digital transformation with cloud-native solutions and DevOps practices. 
                From migration to automation, we help you build scalable, resilient infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="btn-neon px-8 py-4 text-lg"
                >
                  Start Cloud Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="btn-outline px-8 py-4 text-lg"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-zion-slate-dark">
          <div className="container-responsive">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our{' '}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Cloud & DevOps
                </span>
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Our cloud experts help you build scalable, secure, and efficient infrastructure
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-zion-slate to-zion-slate-dark p-8 rounded-2xl border border-zion-slate-light hover:border-blue-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-zion-slate-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Solutions Section */}
        <section className="py-20 bg-zion-slate">
          <div className="container-responsive">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive{' '}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Cloud Solutions
                </span>
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                End-to-end cloud services designed for modern businesses
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cloudSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-zion-slate-dark to-zion-slate p-8 rounded-2xl border border-zion-slate-light hover:border-blue-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <solution.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {solution.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-zion-slate-light leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-zion-slate-dark">
          <div className="container-responsive">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Cloud Services
                </span>
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Professional cloud and DevOps services to accelerate your business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-zion-slate to-zion-slate-dark p-8 rounded-2xl border border-zion-slate-light hover:border-blue-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-zion-slate-light mb-4">
                        {service.description}
                      </p>
                      <div className="text-3xl font-bold text-blue-400">
                        {service.price}
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-zion-slate-light">
                          <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-105"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
          <div className="container-responsive text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Scale Your Infrastructure?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Join hundreds of companies already leveraging our cloud and DevOps expertise 
                to accelerate their digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="btn-neon px-8 py-4 text-lg"
                >
                  Start Cloud Migration
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/case-studies"
                  className="btn-outline px-8 py-4 text-lg"
                >
                  View Cloud Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}