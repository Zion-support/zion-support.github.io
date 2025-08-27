import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Zap, 
  Database, 
  Server, 
  GitBranch, 
  Cpu, 
  Globe, 
  Shield,
  Rocket,
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Play,
  Clock,
  Award
} from 'lucide-react';

const CloudDevOps: React.FC = () => {
  const cloudServices = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamless migration to cloud platforms with minimal downtime and maximum efficiency.",
      features: ["Assessment & Planning", "Data Migration", "Application Modernization", "Performance Optimization"]
    },
    {
      icon: Server,
      title: "Infrastructure as Code",
      description: "Automated infrastructure provisioning and management using modern DevOps practices.",
      features: ["Terraform", "AWS CloudFormation", "Azure ARM", "Kubernetes"]
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
      icon: Zap,
      title: "DevOps Implementation",
      description: "Streamline development and operations with modern DevOps practices",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Automated Testing", "Monitoring & Logging"]
    },
    {
      icon: Cpu,
      title: "Container Orchestration",
      description: "Manage containerized applications at scale with Kubernetes",
      features: ["Cluster Management", "Service Discovery", "Load Balancing", "Auto-scaling"]
    }
  ];

  const cloudPlatforms = [
    { 
      name: "AWS", 
      features: ["EC2", "S3", "Lambda", "RDS", "CloudFormation"],
      description: "Amazon Web Services cloud platform solutions"
    },
    { 
      name: "Azure", 
      features: ["Virtual Machines", "Blob Storage", "Functions", "SQL Database", "ARM Templates"],
      description: "Microsoft Azure cloud services and solutions"
    },
    { 
      name: "Google Cloud", 
      features: ["Compute Engine", "Cloud Storage", "Cloud Functions", "Cloud SQL", "Deployment Manager"],
      description: "Google Cloud Platform infrastructure and services"
    },
    { 
      name: "Multi-Cloud", 
      features: ["Hybrid Solutions", "Cost Optimization", "Vendor Lock-in Prevention", "Best-of-Breed Services"],
      description: "Multi-cloud strategy and management"
    }
  ];

  const devOpsTools = [
    { category: "CI/CD", tools: ["Jenkins", "GitLab CI", "GitHub Actions", "CircleCI", "ArgoCD"] },
    { category: "Infrastructure", tools: ["Terraform", "Ansible", "Puppet", "Chef", "CloudFormation"] },
    { category: "Monitoring", tools: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic"] },
    { category: "Security", tools: ["Vault", "AWS IAM", "Azure AD", "Google IAM", "Prisma Cloud"] }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "Faster Deployment",
      description: "Deploy applications 10x faster with automated CI/CD pipelines"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Improve collaboration between development and operations teams"
    },
    {
      icon: BarChart3,
      title: "Better Monitoring",
      description: "Real-time visibility into application performance and infrastructure health"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Built-in security controls and compliance automation"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-6">
                <Cloud className="w-4 h-4 mr-2" />
                Cloud & DevOps
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Cloud &{' '}
              <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
                DevOps
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your infrastructure with cloud-native solutions and modern DevOps practices
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 bg-transparent border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                View Demo
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cloud Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cloud Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive cloud solutions to modernize your infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-zion-blue-dark/30 p-8 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group hover:bg-zion-blue-dark/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-medium text-zion-cyan mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cloud Platforms
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Expertise across all major cloud providers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cloudPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                className="bg-zion-blue-dark/30 p-8 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{platform.name}</h3>
                    <p className="text-zion-slate-light mb-4">{platform.description}</p>
                    
                    <div>
                      <h4 className="text-sm font-medium text-zion-cyan mb-3">Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {platform.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan rounded-full text-xs border border-zion-cyan/30"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Tools */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              DevOps Tools & Technologies
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Industry-leading tools for modern DevOps practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {devOpsTools.map((toolCategory, index) => (
              <motion.div
                key={index}
                className="bg-zion-blue-dark/30 p-6 rounded-xl border border-zion-cyan/20 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">{toolCategory.category}</h3>
                <div className="space-y-2">
                  {toolCategory.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="text-sm text-zion-slate-light">
                      {tool}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Our Cloud & DevOps Services?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The advantages of partnering with our expert team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-zion-blue-dark/30 p-8 rounded-xl border border-zion-cyan/20"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-zion-slate-light">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Infrastructure?
          </motion.h2>
          <motion.p 
            className="text-xl text-zion-slate-light mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our cloud and DevOps expertise can accelerate your digital transformation
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-4 bg-transparent border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
              Schedule Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CloudDevOps;
