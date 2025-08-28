import React from 'react';
<<<<<<< HEAD
import { SEO } from '../../components/SEO';
import { Cloud, Code, Zap, Shield, BarChart3, ArrowRight, CheckCircle, Star, Users, Globe, Server, Database, Lock, RefreshCw, GitBranch, Docker, Kubernetes } from 'lucide-react';
import { Link } from 'react-router-dom';
=======
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
>>>>>>> origin/clean-merge-website-fixes

export default function CloudDevOps() {
  const services = [
    {
      name: 'Cloud Infrastructure',
      icon: Cloud,
      description: 'Scalable and secure cloud infrastructure design and implementation',
      features: [
        'Multi-cloud architecture design',
        'AWS, Azure, and GCP expertise',
        'Infrastructure as Code (IaC)',
        'Auto-scaling and load balancing',
        'High availability and disaster recovery',
        'Cost optimization strategies'
      ],
      benefits: [
        '99.9% uptime guarantee',
        '50% cost reduction',
        'Instant scalability',
        'Enhanced security posture'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'DevOps Automation',
      icon: Code,
      description: 'Streamline development and operations with intelligent automation',
      features: [
        'CI/CD pipeline automation',
        'Infrastructure automation',
        'Testing and deployment automation',
        'Monitoring and alerting',
        'Performance optimization',
        'Security automation'
      ],
      benefits: [
        '10x faster deployments',
        'Reduced human error',
        'Improved collaboration',
        'Faster time to market'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Container Orchestration',
      icon: Docker,
      description: 'Modern containerization and orchestration solutions',
      features: [
        'Docker containerization',
        'Kubernetes orchestration',
        'Microservices architecture',
        'Service mesh implementation',
        'Container security',
        'Monitoring and logging'
      ],
      benefits: [
        'Improved resource utilization',
        'Faster application deployment',
        'Better scalability',
        'Enhanced portability'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Security & Compliance',
      icon: Shield,
      description: 'Comprehensive security and compliance solutions',
      features: [
        'Identity and access management',
        'Network security',
        'Data encryption',
        'Compliance frameworks',
        'Security monitoring',
        'Incident response'
      ],
      benefits: [
        'Enhanced security posture',
        'Regulatory compliance',
        'Reduced security risks',
        '24/7 threat monitoring'
      ],
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Monitoring & Analytics',
      icon: BarChart3,
      description: 'Real-time monitoring and analytics for optimal performance',
      features: [
        'Application performance monitoring',
        'Infrastructure monitoring',
        'Log aggregation and analysis',
        'Real-time alerting',
        'Performance optimization',
        'Capacity planning'
      ],
      benefits: [
        'Proactive issue detection',
        'Improved performance',
        'Better resource planning',
        'Reduced downtime'
      ],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Database Management',
      icon: Database,
      description: 'Scalable and reliable database solutions',
      features: [
        'Database design and optimization',
        'High availability setup',
        'Backup and recovery',
        'Performance tuning',
        'Security hardening',
        'Migration services'
      ],
      benefits: [
        'Improved performance',
        'Enhanced reliability',
        'Better data security',
        'Reduced maintenance overhead'
      ],
      color: 'from-emerald-500 to-green-500'
    }
  ];

  const technologies = [
    { name: 'AWS', icon: Cloud, category: 'Cloud Platform' },
    { name: 'Azure', icon: Cloud, category: 'Cloud Platform' },
    { name: 'Google Cloud', icon: Cloud, category: 'Cloud Platform' },
    { name: 'Docker', icon: Docker, category: 'Containerization' },
    { name: 'Kubernetes', icon: Kubernetes, category: 'Orchestration' },
    { name: 'Terraform', icon: Code, category: 'Infrastructure' },
    { name: 'Jenkins', icon: RefreshCw, category: 'CI/CD' },
    { name: 'GitLab CI', icon: GitBranch, category: 'CI/CD' },
    { name: 'Ansible', icon: Zap, category: 'Automation' },
    { name: 'Prometheus', icon: BarChart3, category: 'Monitoring' },
    { name: 'Grafana', icon: BarChart3, category: 'Visualization' },
    { name: 'ELK Stack', icon: BarChart3, category: 'Logging' }
  ];

  const caseStudies = [
    {
      company: 'TechCorp Inc.',
      industry: 'E-commerce',
      challenge: 'Legacy infrastructure causing 40% downtime during peak seasons',
      solution: 'Migrated to AWS with auto-scaling and implemented CI/CD pipelines',
      results: [
        '99.9% uptime achieved',
        '60% reduction in infrastructure costs',
        'Deployment time reduced from 4 hours to 15 minutes'
      ]
    },
    {
      company: 'HealthPlus Systems',
      industry: 'Healthcare',
      challenge: 'Manual deployment processes causing delays and errors',
      solution: 'Implemented containerization with Kubernetes and automated CI/CD',
      results: [
        'Zero deployment errors',
        '90% faster deployment cycles',
        'Improved compliance and security'
      ]
    },
    {
<<<<<<< HEAD
      company: 'StartupXYZ',
      industry: 'SaaS',
      challenge: 'Need for rapid scaling and cost optimization',
      solution: 'Multi-cloud strategy with infrastructure as code and monitoring',
      results: [
        '10x faster scaling capability',
        '50% cost optimization',
        'Improved developer productivity'
      ]
=======
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
>>>>>>> origin/clean-merge-website-fixes
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Cloud DevOps Services - Zion Tech Group"
        description="Transform your infrastructure with our comprehensive Cloud DevOps services including cloud migration, automation, containerization, and security solutions."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-green-500/10"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud
              <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-green-500 bg-clip-text text-transparent"> DevOps</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Accelerate your digital transformation with modern cloud infrastructure, intelligent automation, 
              and DevOps best practices that drive efficiency and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get Cloud Assessment
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Cloud DevOps Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From cloud migration to continuous deployment, we provide end-to-end solutions that 
              modernize your infrastructure and accelerate your development cycles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="group p-8 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/50"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-cyan-400">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
=======
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
>>>>>>> origin/clean-merge-website-fixes
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
<<<<<<< HEAD

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-green-400">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <Zap className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/request-quote"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
=======
              </motion.div>
>>>>>>> origin/clean-merge-website-fixes
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Technology Stack */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and tools to deliver robust, scalable, and secure solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-slate-700/50 rounded-xl flex items-center justify-center group-hover:bg-slate-700 transition-colors duration-300">
                  <tech.icon className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="font-semibold text-white text-sm mb-1">{tech.name}</h3>
                <p className="text-xs text-gray-400">{tech.category}</p>
              </div>
=======
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
>>>>>>> origin/clean-merge-website-fixes
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Case Studies */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how we've transformed organizations with our Cloud DevOps solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{study.company}</h3>
                  <p className="text-sm text-blue-400 mb-1">{study.industry}</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">Challenge:</h4>
                    <p className="text-sm text-gray-300">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400 mb-2">Solution:</h4>
                    <p className="text-sm text-gray-300">{study.solution}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3">Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Cloud DevOps Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful cloud transformation and DevOps implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment & Planning',
                description: 'Evaluate current infrastructure and plan migration strategy',
                icon: BarChart3
              },
              {
                step: '02',
                title: 'Design & Architecture',
                description: 'Design scalable cloud architecture and DevOps workflows',
                icon: Code
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Execute migration and implement automation tools',
                icon: Zap
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Monitor performance and continuously optimize',
                icon: RefreshCw
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </div>
=======
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
>>>>>>> origin/clean-merge-website-fixes
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20">
        <div className="container-responsive">
          <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-green-500/10 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our Cloud DevOps solutions can modernize your infrastructure, 
              accelerate your development cycles, and drive operational excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get Started Today
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </div>
=======
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
>>>>>>> origin/clean-merge-website-fixes
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
}
=======
};

export default CloudDevOps;
>>>>>>> origin/clean-merge-website-fixes
