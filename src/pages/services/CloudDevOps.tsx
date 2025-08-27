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
  CheckCircle,
  ArrowRight,
  Building2,
  Activity,
  Settings,
  BarChart3,
  Lock,
  Wifi,
  Monitor,
  Rocket,
  Target,
  RefreshCw
} from 'lucide-react';

const CloudDevOps: React.FC = () => {
  const cloudServices = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Migration",
      description: "Seamless migration to cloud platforms with minimal downtime and maximum efficiency",
      features: ["Assessment & Planning", "Data Migration", "Application Modernization", "Performance Optimization", "Cost Analysis", "Security Implementation"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Infrastructure as Code",
      description: "Automated infrastructure provisioning and management using modern DevOps practices",
      features: ["Terraform", "AWS CloudFormation", "Azure ARM", "Kubernetes", "Ansible", "Puppet"]
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "CI/CD Pipelines",
      description: "Streamline development and operations with automated pipelines and deployment",
      features: ["Jenkins", "GitLab CI", "GitHub Actions", "ArgoCD", "Automated Testing", "Deployment Automation"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "DevOps Implementation",
      description: "Transform your development and operations with modern DevOps practices",
      features: ["Process Optimization", "Tool Integration", "Team Training", "Performance Monitoring", "Security Integration", "Continuous Improvement"]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Container Orchestration",
      description: "Manage containerized applications at scale with Kubernetes and Docker",
      features: ["Cluster Management", "Service Discovery", "Load Balancing", "Auto-scaling", "Service Mesh", "Microservices"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cloud Security",
      description: "Comprehensive security for cloud environments with compliance and monitoring",
      features: ["Identity Management", "Access Control", "Data Encryption", "Compliance", "Threat Detection", "Security Monitoring"]
    }
  ];

  const benefits = [
    "Faster time-to-market with automated deployments",
    "Reduced infrastructure costs through cloud optimization",
    "Improved reliability and scalability",
    "Enhanced security and compliance",
    "Better collaboration between development and operations",
    "Increased operational efficiency and reduced manual work"
  ];

  const cloudPlatforms = [
    {
      name: "Amazon Web Services (AWS)",
      features: ["EC2", "S3", "Lambda", "RDS", "CloudFormation", "EKS"],
      icon: <Globe className="w-6 h-6" />
    },
    {
      name: "Microsoft Azure",
      features: ["Virtual Machines", "Blob Storage", "Functions", "SQL Database", "ARM Templates", "AKS"],
      icon: <Cloud className="w-6 h-6" />
    },
    {
      name: "Google Cloud Platform",
      features: ["Compute Engine", "Cloud Storage", "Cloud Functions", "Cloud SQL", "Deployment Manager", "GKE"],
      icon: <Server className="w-6 h-6" />
    }
  ];

  const devOpsTools = [
    {
      category: "CI/CD Tools",
      tools: ["Jenkins", "GitLab CI", "GitHub Actions", "CircleCI", "ArgoCD", "Tekton"],
      icon: <GitBranch className="w-6 h-6" />
    },
    {
      category: "Infrastructure Tools",
      tools: ["Terraform", "Ansible", "Puppet", "Chef", "CloudFormation", "Pulumi"],
      icon: <Settings className="w-6 h-6" />
    },
    {
      category: "Monitoring & Logging",
      tools: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic", "Jaeger"],
      icon: <Monitor className="w-6 h-6" />
    },
    {
      category: "Security Tools",
      tools: ["Vault", "AWS IAM", "Azure AD", "Google IAM", "Prisma Cloud", "Snyk"],
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const industries = [
    "Financial Services & Banking",
    "Healthcare & Life Sciences",
    "Manufacturing & Industry 4.0",
    "Retail & E-commerce",
    "Energy & Utilities",
    "Transportation & Logistics"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-3 bg-blue-600/20 rounded-full">
              <Cloud className="h-12 w-12 text-blue-400" />
            </div>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Cloud & DevOps Services
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform your infrastructure with modern cloud migration and DevOps practices. 
            Accelerate delivery, improve reliability, and reduce costs with our expert services.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/request-quote"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg inline-flex items-center gap-2"
            >
              Start Cloud Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Cloud Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Cloud & DevOps Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From cloud migration to DevOps transformation, we provide end-to-end solutions 
              that modernize your infrastructure and accelerate your development processes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, borderColor: '#3b82f6' }}
              >
                <div className="text-blue-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Cloud & DevOps?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modern cloud and DevOps practices deliver measurable benefits that transform 
              your business operations and create competitive advantages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-blue-400" />
                </div>
                <p className="text-lg text-gray-200">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Cloud Platforms We Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert implementation across all major cloud platforms with best practices 
              and optimization strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cloudPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-blue-400">
                    {platform.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{platform.name}</h3>
                </div>
                <ul className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Tools */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              DevOps Tools & Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive toolchain integration and expertise across the entire DevOps ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {devOpsTools.map((toolCategory, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-blue-400">
                    {toolCategory.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{toolCategory.category}</h3>
                </div>
                <ul className="space-y-2">
                  {toolCategory.tools.map((tool, toolIndex) => (
                    <li key={toolIndex} className="text-sm text-gray-300">
                      • {tool}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cloud and DevOps expertise spans across diverse industries, 
              delivering tailored solutions for unique business challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 text-center border border-slate-700 hover:border-blue-500 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, borderColor: '#3b82f6' }}
              >
                <p className="text-gray-200 font-medium text-sm">{industry}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Infrastructure?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how cloud migration and DevOps practices can accelerate your business 
            transformation and create new opportunities for growth and innovation.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/request-quote"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Start Transformation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CloudDevOps;