import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Server, 
  GitBranch, 
  Zap, 
  Shield, 
  Users, 
  Database, 
  Network,
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Download,
  MessageCircle,
  Globe,
  Cpu,
  HardDrive,
  Lock,
  BarChart3,
  Settings,
  Code,
  Package,
  Monitor
} from 'lucide-react';

const CloudDevOps: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Design, deploy, and manage scalable cloud solutions across AWS, Azure, and Google Cloud.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/20'
    },
    {
      icon: GitBranch,
      title: 'CI/CD Pipelines',
      description: 'Automate your development workflow with robust continuous integration and deployment pipelines.',
      color: 'text-green-400',
      bgColor: 'bg-green-600/20'
    },
    {
      icon: Server,
      title: 'Container Orchestration',
      description: 'Deploy and manage containerized applications with Kubernetes and Docker expertise.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-600/20'
    },
    {
      icon: Zap,
      title: 'Infrastructure as Code',
      description: 'Manage infrastructure programmatically with Terraform, CloudFormation, and Ansible.',
      color: 'text-orange-400',
      bgColor: 'bg-orange-600/20'
    }
  ];

  const solutions = [
    {
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your applications and data to the cloud with minimal downtime.',
      icon: Globe,
      features: ['Assessment & planning', 'Data migration', 'Application refactoring', 'Performance optimization']
    },
    {
      title: 'DevOps Automation',
      description: 'Streamline development and operations with automated workflows and tooling.',
      icon: Settings,
      features: ['Build automation', 'Testing automation', 'Deployment automation', 'Monitoring setup']
    },
    {
      title: 'Microservices Architecture',
      description: 'Design and implement scalable microservices with modern DevOps practices.',
      icon: Code,
      features: ['Service design', 'API development', 'Load balancing', 'Service discovery']
    },
    {
      title: 'Monitoring & Observability',
      description: 'Comprehensive monitoring and logging solutions for production environments.',
      icon: Monitor,
      features: ['Application monitoring', 'Infrastructure monitoring', 'Log aggregation', 'Alerting systems']
    }
  ];

  const technologies = [
    'AWS Services',
    'Azure Cloud',
    'Google Cloud Platform',
    'Kubernetes',
    'Docker',
    'Terraform',
    'Jenkins',
    'GitLab CI/CD',
    'Ansible',
    'Prometheus',
    'Grafana',
    'ELK Stack'
  ];

  const benefits = [
    {
      title: 'Faster Deployment',
      description: 'Reduce deployment time from days to minutes with automated CI/CD pipelines.',
      icon: Zap,
      metric: '10x faster'
    },
    {
      title: 'Improved Reliability',
      description: 'Achieve 99.9%+ uptime with automated monitoring and self-healing infrastructure.',
      icon: Shield,
      metric: '99.9% uptime'
    },
    {
      title: 'Cost Optimization',
      description: 'Reduce cloud costs by 30-40% through intelligent resource management and optimization.',
      icon: BarChart3,
      metric: '30-40% savings'
    },
    {
      title: 'Scalability',
      description: 'Scale your infrastructure automatically based on demand and traffic patterns.',
      icon: Cpu,
      metric: 'Auto-scaling'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Lee',
      role: 'VP Engineering, TechStart',
      content: 'Zion Tech Group transformed our deployment process. We went from weekly releases to daily deployments with zero downtime.',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'DevOps Lead, ScaleCorp',
      content: 'Their cloud migration expertise saved us months of work. The infrastructure is now more reliable and cost-effective.',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      role: 'CTO, Innovation Labs',
      content: 'The CI/CD pipeline they built is incredible. Our development velocity has increased dramatically.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-600/20 rounded-full">
              <Cloud className="h-16 w-16 text-blue-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Cloud &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}DevOps
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Accelerate your development and deployment with our comprehensive cloud infrastructure 
            and DevOps solutions. Build, deploy, and scale with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Start Cloud Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#demo"
              className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </a>
          </div>
        </motion.div>

        {/* Key Services */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Core DevOps Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`${service.bgColor} rounded-xl p-6 border border-slate-700`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <service.icon className={`h-8 w-8 ${service.color} mr-3`} />
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Solutions */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Comprehensive Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <solution.icon className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <div className="space-y-2">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technologies */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Technology Stack</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We leverage industry-leading tools and platforms to deliver robust, 
                scalable, and maintainable cloud infrastructure and DevOps solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  className="bg-slate-700/50 rounded-lg p-4 text-center border border-slate-600"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.05 }}
                >
                  <span className="text-gray-300 text-sm font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Benefits */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our DevOps?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-600/20 rounded-full">
                    <benefit.icon className="h-12 w-12 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-3">{benefit.description}</p>
                <div className="text-2xl font-bold text-blue-400">{benefit.metric}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Cloud Providers */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Cloud Platform Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-orange-600/20 rounded-full">
                  <Server className="h-16 w-16 text-orange-400" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">AWS</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive AWS solutions including EC2, S3, Lambda, RDS, and advanced services.
              </p>
              <div className="space-y-2 text-left">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-gray-300 text-sm">EC2 & Auto Scaling</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-gray-300 text-sm">S3 & CloudFront</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-gray-300 text-sm">Lambda & API Gateway</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-gray-300 text-sm">RDS & DynamoDB</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-600/20 rounded-full">
                  <Cloud className="h-16 w-16 text-blue-400" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Azure</h3>
              <p className="text-gray-300 mb-6">
                Full Azure cloud services with App Service, Functions, SQL Database, and DevOps tools.
              </p>
              <div className="space-y-2 text-left">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-gray-300 text-sm">App Service & Functions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-gray-300 text-sm">SQL Database & Cosmos DB</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-gray-300 text-sm">AKS & Container Registry</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-gray-300 text-sm">DevOps & Monitor</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-green-600/20 rounded-full">
                  <Globe className="h-16 w-16 text-green-400" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Google Cloud</h3>
              <p className="text-gray-300 mb-6">
                GCP solutions with Compute Engine, Cloud Run, BigQuery, and Kubernetes Engine.
              </p>
              <div className="space-y-2 text-left">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-gray-300 text-sm">Compute Engine & Cloud Run</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-gray-300 text-sm">BigQuery & Cloud SQL</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-gray-300 text-sm">GKE & Cloud Build</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-gray-300 text-sm">Cloud Functions & APIs</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* DevOps Process */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our DevOps Process</h2>
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-600/20 rounded-full">
                    <Code className="h-12 w-12 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">1. Plan & Design</h3>
                <p className="text-gray-300 text-sm">
                  Assess current infrastructure and design optimal cloud architecture
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-green-600/20 rounded-full">
                    <Package className="h-12 w-12 text-green-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">2. Build & Test</h3>
                <p className="text-gray-300 text-sm">
                  Implement infrastructure as code and automated testing pipelines
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-purple-600/20 rounded-full">
                    <Zap className="h-12 w-12 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">3. Deploy</h3>
                <p className="text-gray-300 text-sm">
                  Automated deployment with blue-green and canary strategies
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-orange-600/20 rounded-full">
                    <Monitor className="h-12 w-12 text-orange-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">4. Monitor</h3>
                <p className="text-gray-300 text-sm">
                  Continuous monitoring and optimization of performance
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Client Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.7 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-12 border border-blue-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your DevOps?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the cloud revolution and accelerate your development with 
              Zion Tech Group's expert DevOps team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Start Free Consultation
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Schedule Demo
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                <MessageCircle className="inline mr-2 h-5 w-5" />
                Talk to DevOps Expert
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default CloudDevOps;