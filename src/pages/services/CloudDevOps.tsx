import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Zap, 
  Database, 
  Server, 
  GitBranch, 
  Cpu, 
  Globe, 
  Shield,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Settings,
  Lock,
  RefreshCw
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const cloudServices = [
  {
    icon: Cloud,
    title: 'Cloud Migration',
    description: 'Seamless migration to cloud platforms with minimal downtime and maximum efficiency.',
    features: ['Assessment & Planning', 'Data Migration', 'Application Modernization', 'Performance Optimization']
  },
  {
    icon: Server,
    title: 'Infrastructure as Code',
    description: 'Automated infrastructure provisioning and management using modern DevOps practices.',
    features: ['Terraform', 'AWS CloudFormation', 'Azure ARM', 'Kubernetes']
  },
  {
    icon: GitBranch,
    title: 'CI/CD Pipelines',
    description: 'Automated build, test, and deployment pipelines for faster, more reliable releases.',
    features: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'Azure DevOps']
  },
  {
    icon: Database,
    title: 'Database Management',
    description: 'Scalable database solutions with high availability and disaster recovery.',
    features: ['AWS RDS', 'Azure SQL', 'MongoDB Atlas', 'Redis']
  },
  {
    icon: Cpu,
    title: 'Container Orchestration',
    description: 'Manage and scale containerized applications efficiently with Kubernetes.',
    features: ['Cluster Management', 'Service Discovery', 'Load Balancing', 'Auto-scaling']
  },
  {
    icon: Shield,
    title: 'DevSecOps',
    description: 'Integrate security into every stage of the development lifecycle.',
    features: ['Security Scanning', 'Compliance Automation', 'Vulnerability Management', 'Access Control']
  }
];

const cloudPlatforms = [
  { 
    name: 'AWS', 
    description: 'Amazon Web Services cloud platform solutions',
    features: ['EC2', 'S3', 'Lambda', 'RDS', 'CloudFormation'],
    icon: '☁️'
  },
  { 
    name: 'Azure', 
    description: 'Microsoft Azure cloud services and solutions',
    features: ['Virtual Machines', 'Blob Storage', 'Functions', 'SQL Database', 'ARM Templates'],
    icon: '🔷'
  },
  { 
    name: 'Google Cloud', 
    description: 'Google Cloud Platform infrastructure and services',
    features: ['Compute Engine', 'Cloud Storage', 'Cloud Functions', 'Cloud SQL', 'Deployment Manager'],
    icon: '🔵'
  },
  { 
    name: 'Multi-Cloud', 
    description: 'Hybrid and multi-cloud strategy implementation',
    features: ['Cross-Platform Management', 'Load Balancing', 'Disaster Recovery', 'Cost Optimization'],
    icon: '🌐'
  }
];

const devOpsTools = [
  { 
    category: 'CI/CD', 
    tools: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'CircleCI', 'ArgoCD'],
    description: 'Automate your software delivery pipeline'
  },
  { 
    category: 'Infrastructure', 
    tools: ['Terraform', 'Ansible', 'Puppet', 'Chef', 'CloudFormation'],
    description: 'Manage infrastructure as code'
  },
  { 
    category: 'Monitoring', 
    tools: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'New Relic'],
    description: 'Comprehensive observability solutions'
  },
  { 
    category: 'Security', 
    tools: ['Vault', 'AWS IAM', 'Azure AD', 'Google IAM', 'Prisma Cloud'],
    description: 'Secure your cloud infrastructure'
  }
];

const benefits = [
  'Reduce infrastructure costs by 30-50%',
  'Deploy applications 10x faster',
  'Improve system reliability and uptime',
  'Enable rapid scaling and flexibility',
  'Automate repetitive tasks and reduce human error',
  'Enhance security and compliance'
];

export default function CloudDevOps() {
  return (
    <>
      <SEO 
        title="Cloud & DevOps Services | Zion Tech Group"
        description="Transform your infrastructure with Zion Tech Group's cloud migration and DevOps services. AWS, Azure, GCP expertise with modern DevOps practices."
        canonical="https://ziontechgroup.com/services/cloud-devops"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Cloud className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cloud & <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">DevOps</span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Transform your infrastructure with modern cloud solutions and DevOps practices. 
                Migrate to the cloud, automate deployments, and scale with confidence.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/contact" 
                  className="btn-primary px-8 py-3 text-lg font-semibold"
                >
                  Get Started
                </a>
                <a 
                  href="#services" 
                  className="btn-outline-white px-8 py-3 text-lg font-semibold"
                >
                  View Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cloud & DevOps Services
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Comprehensive cloud migration and DevOps implementation services to modernize 
                your infrastructure and accelerate software delivery.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cloudServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span className="text-zion-slate-light text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Platforms Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cloud Platforms
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Expert implementation across all major cloud platforms with multi-cloud 
                strategies for optimal performance and cost efficiency.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cloudPlatforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{platform.name}</h3>
                  <p className="text-zion-slate-light text-sm mb-4">{platform.description}</p>
                  <div className="space-y-1">
                    {platform.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-xs text-blue-400">
                        • {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DevOps Tools Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                DevOps Tools & Technologies
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                We leverage industry-leading tools and technologies to build robust, 
                scalable, and secure DevOps solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {devOpsTools.map((toolCategory, index) => (
                <motion.div
                  key={toolCategory.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{toolCategory.category}</h3>
                  <p className="text-zion-slate-light mb-4">{toolCategory.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {toolCategory.tools.map((tool, toolIndex) => (
                      <span 
                        key={toolIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-lg border border-blue-500/30"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Business Benefits
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Cloud migration and DevOps implementation deliver measurable business value 
                through improved efficiency, reduced costs, and enhanced agility.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <span className="text-zion-slate-light">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Implementation Process
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Our proven methodology ensures successful cloud migration and DevOps implementation 
                with minimal disruption to your operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Assess</h3>
                <p className="text-zion-slate-light text-sm">
                  Evaluate current infrastructure and identify migration opportunities
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Plan</h3>
                <p className="text-zion-slate-light text-sm">
                  Design cloud architecture and DevOps strategy
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Migrate</h3>
                <p className="text-zion-slate-light text-sm">
                  Execute migration with zero-downtime approach
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Optimize</h3>
                <p className="text-zion-slate-light text-sm">
                  Continuous improvement and performance optimization
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Infrastructure?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Take the first step towards modern cloud infrastructure and DevOps excellence. 
                Our experts are ready to guide you through your transformation journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/contact" 
                  className="btn-white px-8 py-3 text-lg font-semibold"
                >
                  Start Your Migration
                </a>
                <a 
                  href="/services" 
                  className="btn-outline-white px-8 py-3 text-lg font-semibold"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}