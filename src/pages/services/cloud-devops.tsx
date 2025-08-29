import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Cpu, 
  Database, 
  Server, 
  Shield, 
  Zap, 
  TrendingUp, 
  Users, 
  Building, 
  Factory,
  CheckCircle,
  ArrowRight,
  Star,
  Brain,
  Eye,
  BarChart3,
  Network,
  Smartphone,
  Clock,
  Target,
  Rocket,
  Atom,
  Leaf,
  Gauge,
  GitFork,
  Code,
  Settings,
  Key,
  Lock,
  FileText,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  GitBranch,
  Package,
  Monitor,
  Activity,
  Layers,
  Globe,
  Terminal,
  Workflow,
  RefreshCw,
  AlertTriangle,
  CheckCircle2,
  XCircle
} from 'lucide-react';

export default function CloudDevOps() {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Design and deploy scalable cloud architectures on AWS, Azure, and Google Cloud'
    },
    {
      icon: GitBranch,
      title: 'CI/CD Pipelines',
      description: 'Automated build, test, and deployment pipelines for rapid software delivery'
    },
    {
      icon: Server,
      title: 'Container Orchestration',
      description: 'Kubernetes and Docker management for scalable application deployment'
    },
    {
      icon: Monitor,
      title: 'Monitoring & Observability',
      description: 'Real-time monitoring, logging, and alerting for proactive issue resolution'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'DevSecOps practices with automated security scanning and compliance checks'
    },
    {
      icon: Zap,
      title: 'Infrastructure as Code',
      description: 'Terraform, CloudFormation, and Ansible for reproducible infrastructure'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Faster Deployment',
      description: 'Reduce deployment time from days to minutes with automated pipelines'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Improved developer productivity and cross-team communication'
    },
    {
      icon: Building,
      title: 'Scalability',
      description: 'Auto-scaling infrastructure that grows with your business needs'
    },
    {
      icon: Factory,
      title: 'Quality Assurance',
      description: 'Automated testing and quality gates ensure reliable releases'
    },
    {
      icon: CheckCircle,
      title: 'Reduced Downtime',
      description: 'Zero-downtime deployments and automated rollback capabilities'
    },
    {
      icon: Leaf,
      title: 'Cost Optimization',
      description: 'Cloud cost management and resource optimization strategies'
    }
  ];

  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration from on-premises to cloud infrastructure'
    },
    {
      icon: GitBranch,
      title: 'DevOps Transformation',
      description: 'Cultural and technical transformation to DevOps practices'
    },
    {
      icon: Server,
      title: 'Kubernetes Management',
      description: 'Enterprise-grade Kubernetes deployment and management'
    },
    {
      icon: Monitor,
      title: 'Observability Stack',
      description: 'Comprehensive monitoring, logging, and tracing solutions'
    },
    {
      icon: Shield,
      title: 'Security Automation',
      description: 'Automated security scanning and compliance enforcement'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Application and infrastructure performance tuning'
    }
  ];

  const technologies = [
    {
      icon: Cloud,
      title: 'Cloud Platforms',
      description: 'AWS, Azure, Google Cloud Platform, and hybrid solutions'
    },
    {
      icon: GitBranch,
      title: 'CI/CD Tools',
      description: 'Jenkins, GitLab CI, GitHub Actions, and Azure DevOps'
    },
    {
      icon: Server,
      title: 'Containerization',
      description: 'Docker, Kubernetes, Helm, and container security'
    },
    {
      icon: Code,
      title: 'Infrastructure as Code',
      description: 'Terraform, CloudFormation, Ansible, and Pulumi'
    },
    {
      icon: Monitor,
      title: 'Monitoring',
      description: 'Prometheus, Grafana, ELK Stack, and APM tools'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Vault, AWS IAM, Azure AD, and security scanning tools'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-blue-400 text-sm font-medium mb-6">
              <Cloud className="w-4 h-4" />
              Cloud & DevOps Solutions
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Accelerate Your
              <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"> DevOps Journey</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your development and operations with modern cloud infrastructure, automated pipelines, and scalable DevOps practices. Deploy faster, scale efficiently, and maintain reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 px-8 py-4 border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                Schedule Demo
                <Eye className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive DevOps Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform provides end-to-end DevOps solutions to streamline your development and operations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our DevOps Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of modern DevOps practices and cloud-native architecture.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-900/50 border border-slate-700/50 rounded-xl hover:border-green-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our DevOps Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From strategy to implementation, we provide comprehensive DevOps services to transform your organization.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with industry-leading tools and technologies for maximum reliability and performance.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-900/50 border border-slate-700/50 rounded-xl hover:border-orange-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{tech.title}</h3>
                <p className="text-gray-400 leading-relaxed">{tech.description}</p>
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
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your DevOps?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Accelerate your development, improve reliability, and scale efficiently with our DevOps solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get Your Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                Contact Us
                <MessageCircle className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Let's Build Your DevOps Future
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Ready to revolutionize your development and operations? Our DevOps experts are here to guide you through every step of your transformation journey.
              </p>
              
              <div className="space-y-4">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group"
                >
                  <div className="p-2 bg-slate-700/50 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>{contactInfo.phone}</span>
                </a>
                
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group"
                >
                  <div className="p-2 bg-slate-700/50 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>{contactInfo.email}</span>
                </a>
                
                <div className="flex items-start gap-3 text-gray-300">
                  <div className="p-2 bg-slate-700/50 rounded-lg mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm leading-relaxed">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 bg-slate-900/50 border border-slate-700/50 rounded-xl"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Quick Contact Form</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Tell us about your DevOps needs"
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                  Send Message
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}