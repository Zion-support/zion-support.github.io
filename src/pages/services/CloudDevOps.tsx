import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Cloud, 
  Server, 
  Database, 
  Shield, 
  Zap, 
  GitBranch, 
  Monitor, 
  Lock,
  ArrowRight,
  CheckCircle,
  Play,
  Settings,
  Globe,
  Cpu,
  HardDrive,
  Network
} from 'lucide-react';

const CloudDevOps: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamless migration to cloud platforms with minimal downtime and maximum efficiency.",
      features: ["AWS Migration", "Azure Migration", "GCP Migration", "Hybrid Cloud Setup"]
    },
    {
      icon: GitBranch,
      title: "CI/CD Pipelines",
      description: "Automated build, test, and deployment pipelines for faster, more reliable releases.",
      features: ["Jenkins", "GitHub Actions", "GitLab CI", "Azure DevOps"]
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Scalable database solutions with high availability and disaster recovery.",
      features: ["AWS RDS", "Azure SQL", "MongoDB Atlas", "Redis"]
    },
    {
      icon: Shield,
      title: "DevOps Security",
      description: "Security-first DevOps practices with automated compliance and threat detection.",
      features: ["Security Scanning", "Compliance Automation", "IAM Management", "Secrets Management"]
    },
    {
      icon: Monitor,
      title: "Monitoring & Observability",
      description: "Comprehensive monitoring and logging for proactive issue detection and resolution.",
      features: ["Prometheus", "Grafana", "ELK Stack", "Datadog"]
    },
    {
      icon: Zap,
      title: "Infrastructure as Code",
      description: "Automated infrastructure provisioning and management using code and templates.",
      features: ["Terraform", "CloudFormation", "ARM Templates", "Ansible"]
    }
  ];

  const platforms = [
    {
      name: "AWS",
      description: "Amazon Web Services cloud platform solutions",
      icon: "☁️"
    },
    {
      name: "Azure",
      description: "Microsoft Azure cloud services and solutions",
      icon: "🔷"
    },
    {
      name: "Google Cloud",
      description: "Google Cloud Platform infrastructure and services",
      icon: "🔵"
    },
    {
      name: "Multi-Cloud",
      description: "Hybrid and multi-cloud strategy implementation",
      icon: "🌐"
    }
  ];

  const tools = [
    {
      category: "CI/CD",
      tools: ["Jenkins", "GitLab CI", "GitHub Actions", "CircleCI", "ArgoCD"]
    },
    {
      category: "Infrastructure",
      tools: ["Terraform", "Ansible", "Puppet", "Chef", "CloudFormation"]
    },
    {
      category: "Monitoring",
      tools: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic"]
    },
    {
      category: "Security",
      tools: ["Vault", "AWS IAM", "Azure AD", "Google IAM", "Prisma Cloud"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud & DevOps — Zion Tech Group | Cloud Migration & DevOps Services</title>
        <meta name="description" content="Transform your infrastructure with Zion Tech Group's cloud migration and DevOps services. AWS, Azure, GCP expertise with modern DevOps practices."/>
        <meta property="og:title" content="Cloud & DevOps — Zion Tech Group"/>
        <meta property="og:description" content="Expert cloud migration and DevOps implementation services for modern infrastructure."/>
        <meta property="og:url" content="https://ziontechgroup.com/services/cloud-devops"/>
        <link rel="canonical" href="https://ziontechgroup.com/services/cloud-devops"/>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
                <Cloud className="w-4 h-4 mr-2"/>
                Cloud & DevOps
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cloud & DevOps
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your infrastructure with modern cloud solutions and DevOps practices. 
                Accelerate delivery, improve reliability, and scale with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Get Started
                </Link>
                <Link to="/request-quote" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cloud & DevOps Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud and DevOps solutions to modernize your infrastructure and accelerate development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Platform Expertise */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cloud Platform Expertise
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Deep expertise across all major cloud platforms with certified professionals and proven methodologies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{platform.name}</h3>
                  <p className="text-gray-300 text-sm">{platform.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DevOps Tools & Technologies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                DevOps Tools & Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Master the tools and technologies that power modern DevOps practices and cloud-native applications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((toolCategory, index) => (
                <motion.div
                  key={toolCategory.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-4">{toolCategory.category}</h3>
                  <div className="space-y-2">
                    {toolCategory.tools.map((tool, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        {tool}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our cloud and DevOps experts help you modernize your infrastructure, 
              implement best practices, and accelerate your development cycles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Start Your Cloud Journey
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudDevOps;
