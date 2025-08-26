import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cloud, Server, Database, Network, Code, Zap, Users, 
  Building, Heart, Truck, Car, Rocket, Atom, Lightbulb, 
  TrendingUp, Palette, Target, Clock, Star, Globe, 
  FileText, Calendar, Video, CheckCircle, ArrowRight, 
  ChevronDown, ChevronRight, Phone, Mail, MapPin, Linkedin, 
  Twitter, Github, Youtube, Facebook, Instagram, AlertTriangle,
  Key, Fingerprint, Bug, Wifi, HardDrive, Cpu, GitBranch,
  GitCommit, GitPullRequest, GitMerge, GitCompare, GitBranchPlus,
  Eye, Shield
} from 'lucide-react';

const CloudDevOps: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const cloudServices = [
    {
      title: 'Cloud Infrastructure',
      icon: Server,
      description: 'Scalable and reliable cloud infrastructure solutions',
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'Seamless cloud migration services' },
        { name: 'Infrastructure as Code', path: '/infrastructure-as-code', description: 'Automated infrastructure deployment' },
        { name: 'Multi-Cloud Strategy', path: '/multi-cloud-strategy', description: 'Hybrid and multi-cloud solutions' },
        { name: 'Cloud Cost Optimization', path: '/cloud-cost-optimization', description: 'Reduce cloud spending' },
        { name: 'Disaster Recovery', path: '/disaster-recovery', description: 'Business continuity solutions' },
        { name: 'Cloud Security', path: '/cloud-security', description: 'Comprehensive cloud security' }
      ]
    },
    {
      title: 'Container & Orchestration',
      icon: GitBranch,
      description: 'Modern containerization and orchestration solutions',
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'Docker Containers', path: '/docker-containers', description: 'Container deployment and management' },
        { name: 'Kubernetes Orchestration', path: '/kubernetes-orchestration', description: 'K8s cluster management' },
        { name: 'Container Security', path: '/container-security', description: 'Secure container environments' },
        { name: 'Microservices Architecture', path: '/microservices-architecture', description: 'Scalable microservices' },
        { name: 'Service Mesh', path: '/service-mesh', description: 'Istio and service mesh solutions' },
        { name: 'Container Registry', path: '/container-registry', description: 'Secure image management' }
      ]
    },
    {
      title: 'CI/CD Pipelines',
      icon: GitCommit,
      description: 'Automated development and deployment pipelines',
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'Jenkins Automation', path: '/jenkins-automation', description: 'Jenkins CI/CD pipelines' },
        { name: 'GitHub Actions', path: '/github-actions', description: 'GitHub workflow automation' },
        { name: 'GitLab CI/CD', path: '/gitlab-cicd', description: 'GitLab pipeline automation' },
        { name: 'Azure DevOps', path: '/azure-devops', description: 'Microsoft DevOps platform' },
        { name: 'AWS CodePipeline', path: '/aws-codepipeline', description: 'AWS CI/CD services' },
        { name: 'Pipeline Security', path: '/pipeline-security', description: 'Secure CI/CD practices' }
      ]
    },
    {
      title: 'Monitoring & Observability',
      icon: Eye,
      description: 'Comprehensive monitoring and observability solutions',
      color: 'from-orange-500 to-red-500',
      services: [
        { name: 'Application Performance Monitoring', path: '/apm', description: 'Real-time application monitoring' },
        { name: 'Infrastructure Monitoring', path: '/infrastructure-monitoring', description: 'Server and network monitoring' },
        { name: 'Log Management', path: '/log-management', description: 'Centralized log collection and analysis' },
        { name: 'Distributed Tracing', path: '/distributed-tracing', description: 'Request flow tracking' },
        { name: 'Alerting & Notifications', path: '/alerting-notifications', description: 'Proactive issue detection' },
        { name: 'Dashboard & Visualization', path: '/monitoring-dashboards', description: 'Custom monitoring dashboards' }
      ]
    },
    {
      title: 'DevOps Automation',
      icon: Zap,
      description: 'Intelligent automation for development and operations',
      color: 'from-indigo-500 to-purple-500',
      services: [
        { name: 'AI-Powered DevOps', path: '/ai-autonomous-devops', description: 'AI-driven DevOps automation' },
        { name: 'Configuration Management', path: '/configuration-management', description: 'Ansible, Chef, Puppet' },
        { name: 'Automated Testing', path: '/automated-testing', description: 'CI/CD integrated testing' },
        { name: 'Release Management', path: '/release-management', description: 'Automated release processes' },
        { name: 'Environment Management', path: '/environment-management', description: 'Dev, staging, production' },
        { name: 'Deployment Automation', path: '/deployment-automation', description: 'Zero-downtime deployments' }
      ]
    },
    {
      title: 'Cloud-Native Development',
      icon: Code,
      description: 'Modern cloud-native application development',
      color: 'from-teal-500 to-cyan-500',
      services: [
        { name: 'Serverless Architecture', path: '/serverless-architecture', description: 'FaaS and serverless solutions' },
        { name: 'API Development', path: '/api-development', description: 'RESTful and GraphQL APIs' },
        { name: 'Event-Driven Architecture', path: '/event-driven-architecture', description: 'Asynchronous processing' },
        { name: 'Cloud Functions', path: '/cloud-functions', description: 'AWS Lambda, Azure Functions' },
        { name: 'Database as a Service', path: '/database-as-a-service', description: 'Managed database solutions' },
        { name: 'Edge Computing', path: '/edge-computing', description: 'Distributed edge solutions' }
      ]
    }
  ];

  const cloudPlatforms = [
    {
      name: 'Amazon Web Services',
      description: 'AWS cloud infrastructure and services',
      icon: Cloud,
      color: 'from-orange-500 to-yellow-500'
    },
    {
      name: 'Microsoft Azure',
      description: 'Azure cloud platform and services',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Google Cloud Platform',
      description: 'GCP cloud infrastructure and AI',
      icon: Cloud,
      color: 'from-green-500 to-blue-500'
    },
    {
      name: 'IBM Cloud',
      description: 'Enterprise cloud and AI solutions',
      icon: Cloud,
      color: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Oracle Cloud',
      description: 'Oracle cloud infrastructure',
      icon: Cloud,
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Multi-Cloud',
      description: 'Hybrid and multi-cloud strategies',
      icon: GitBranchPlus,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const devOpsTools = [
    {
      name: 'Version Control',
      description: 'Git, GitHub, GitLab, Bitbucket',
      icon: GitBranch,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'CI/CD Tools',
      description: 'Jenkins, GitHub Actions, GitLab CI',
      icon: GitCommit,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Container Tools',
      description: 'Docker, Kubernetes, Helm',
      icon: GitMerge,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Monitoring',
      description: 'Prometheus, Grafana, ELK Stack',
      icon: Eye,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Configuration',
      description: 'Ansible, Terraform, Chef',
      icon: Code,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Security',
      description: 'SonarQube, Snyk, Trivy',
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    }
  ];

  const benefits = [
    {
      title: 'Faster Deployment',
      description: 'Automated CI/CD pipelines reduce deployment time',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Improved Reliability',
      description: 'Automated testing and monitoring increase stability',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Cost Optimization',
      description: 'Cloud cost management and resource optimization',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Scalability',
      description: 'Auto-scaling and elastic infrastructure',
      icon: Rocket,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Security',
      description: 'Built-in security and compliance features',
      icon: Shield,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Innovation',
      description: 'Access to cutting-edge cloud technologies',
      icon: Lightbulb,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', url: 'https://github.com/Zion-Holdings', icon: Github },
    { name: 'YouTube', url: 'https://youtube.com/@ziontechgroup', icon: Youtube },
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 text-white">
      {/* Header */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <div className="p-4 bg-blue-600/20 rounded-full">
              <Cloud className="h-16 w-16 text-blue-400" />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Cloud & DevOps Solutions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Accelerate your digital transformation with modern cloud infrastructure and DevOps practices. 
            From cloud migration to automated CI/CD pipelines, we deliver scalable solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
            >
              Start Your Cloud Journey
            </Link>
            <Link
              to="/request-quote"
              className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg"
            >
              Get Cloud Assessment
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Cloud Services Grid */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Comprehensive Cloud & DevOps Services
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cloudServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-3">
                  {service.services.map((item, itemIndex) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700/80 transition-all duration-300 border border-transparent hover:border-blue-500/30 group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-400 mt-1">
                            {item.description}
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Cloud Platforms */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Cloud Platforms We Support
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudPlatforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + (index * 0.1) }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                <p className="text-gray-300 text-sm">{platform.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* DevOps Tools */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            DevOps Tools & Technologies
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {devOpsTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + (index * 0.1) }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                <p className="text-gray-300 text-sm">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Benefits of Cloud & DevOps
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + (index * 0.1) }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Development & Operations?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="text-xl text-gray-300 mb-8"
          >
            Let's modernize your infrastructure, automate your processes, 
            and accelerate your time to market with cloud and DevOps solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/case-studies"
              className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg"
            >
              View Cloud Case Studies
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
            className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-blue-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-blue-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Address</h3>
                <p className="text-gray-300">{contactInfo.address}</p>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 + (index * 0.1) }}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/privacy" className="hover:text-blue-400 transition-colors mx-2">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-blue-400 transition-colors mx-2">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-blue-400 transition-colors mx-2">Cookie Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CloudDevOps;