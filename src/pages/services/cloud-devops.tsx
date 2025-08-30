import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Cpu, 
  Server, 
  Zap, 
  Network, 
  Database, 
  Code, 
  Users, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Activity,
  BarChart3,
  Globe,
  Heart,
  DollarSign,
  FileText,
  Calendar,
  Building,
  Phone,
  Mail,
  MapPin,
  Lock,
  Eye,
  Rocket,
  Target,
  TrendingUp,
  Shield,
  Brain,
  Atom
} from 'lucide-react';

export default function CloudDevOpsPage() {
  const cloudServices = [
    {
      category: 'Cloud Infrastructure',
      services: [
        {
          name: 'Cloud Migration',
          description: 'Seamless migration to cloud platforms with minimal downtime',
          icon: Cloud,
          features: ['Assessment & Planning', 'Data Migration', 'Application Migration', 'Performance Optimization'],
          href: '/services/cloud-migration'
        },
        {
          name: 'Multi-Cloud Strategy',
          description: 'Optimize costs and performance across multiple cloud providers',
          icon: Globe,
          features: ['Provider Selection', 'Cost Optimization', 'Performance Monitoring', 'Disaster Recovery'],
          href: '/services/multi-cloud-strategy'
        },
        {
          name: 'Cloud Architecture Design',
          description: 'Design scalable and resilient cloud architectures',
          icon: Building,
          features: ['Scalable Design', 'High Availability', 'Security First', 'Cost Optimization'],
          href: '/services/cloud-architecture'
        },
        {
          name: 'Cloud Cost Optimization',
          description: 'Reduce cloud costs while maintaining performance',
          icon: DollarSign,
          features: ['Cost Analysis', 'Resource Optimization', 'Reserved Instances', 'Auto-scaling'],
          href: '/services/cloud-cost-optimization'
        }
      ]
    },
    {
      category: 'DevOps & Automation',
      services: [
        {
          name: 'CI/CD Pipeline',
          description: 'Automated software delivery and deployment pipelines',
          icon: Code,
          features: ['Automated Testing', 'Continuous Integration', 'Continuous Deployment', 'Rollback Capability'],
          href: '/services/ci-cd-pipeline'
        },
        {
          name: 'Infrastructure as Code',
          description: 'Manage infrastructure using code and automation',
          icon: Server,
          features: ['Terraform', 'CloudFormation', 'Ansible', 'Version Control'],
          href: '/services/infrastructure-as-code'
        },
        {
          name: 'Container Orchestration',
          description: 'Manage containerized applications at scale',
          icon: Cpu,
          features: ['Kubernetes', 'Docker Swarm', 'Auto-scaling', 'Load Balancing'],
          href: '/services/container-orchestration'
        },
        {
          name: 'Monitoring & Observability',
          description: 'Comprehensive monitoring and observability solutions',
          icon: Activity,
          features: ['Application Monitoring', 'Infrastructure Monitoring', 'Log Management', 'Alerting'],
          href: '/services/monitoring-observability'
        }
      ]
    },
    {
      category: 'Specialized Cloud Services',
      services: [
        {
          name: 'Serverless Computing',
          description: 'Build and run applications without managing servers',
          icon: Zap,
          features: ['AWS Lambda', 'Azure Functions', 'Google Cloud Functions', 'Event-driven Architecture'],
          href: '/services/serverless-computing'
        },
        {
          name: 'Edge Computing',
          description: 'Process data closer to the source for better performance',
          icon: Network,
          features: ['CDN Integration', 'Edge Functions', 'Real-time Processing', 'Global Distribution'],
          href: '/services/edge-computing'
        },
        {
          name: 'Database Services',
          description: 'Managed database solutions for various use cases',
          icon: Database,
          features: ['Relational Databases', 'NoSQL Databases', 'Data Warehousing', 'Backup & Recovery'],
          href: '/services/database-services'
        },
        {
          name: 'Security & Compliance',
          description: 'Cloud security and compliance solutions',
          icon: Shield,
          features: ['Identity Management', 'Access Control', 'Data Encryption', 'Compliance Monitoring'],
          href: '/services/cloud-security'
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Faster Deployment',
      description: 'Automate deployment processes and reduce time to market'
    },
    {
      icon: Cloud,
      title: 'Scalability',
      description: 'Scale your infrastructure up or down based on demand'
    },
    {
      icon: DollarSign,
      title: 'Cost Efficiency',
      description: 'Optimize costs with pay-as-you-use cloud resources'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'High availability and disaster recovery capabilities'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime' },
    { number: '50%', label: 'Cost Reduction' },
    { number: '10x', label: 'Faster Deployment' },
    { number: '24/7', label: 'Monitoring' }
  ];

  const technologies = [
    {
      category: 'Cloud Platforms',
      tools: ['AWS', 'Azure', 'Google Cloud', 'Digital Ocean'],
      icon: Cloud
    },
    {
      category: 'DevOps Tools',
      tools: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI'],
      icon: Code
    },
    {
      category: 'Monitoring',
      tools: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog'],
      icon: Activity
    },
    {
      category: 'Infrastructure',
      tools: ['Terraform', 'Ansible', 'Puppet', 'Chef'],
      icon: Server
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center">
                <Cloud className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Cloud & DevOps
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your infrastructure with modern cloud solutions and DevOps practices. 
              Accelerate development, improve reliability, and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105">
                Start Cloud Journey
              </button>
              <button className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-200">
                DevOps Assessment
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Cloud & DevOps Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive cloud and DevOps solutions help organizations 
              modernize their infrastructure and accelerate digital transformation.
            </p>
          </motion.div>

          <div className="space-y-16">
            {cloudServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                <h3 className="text-3xl font-bold mb-8 text-center text-blue-400">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold">{service.name}</h4>
                      </div>
                      <p className="text-gray-300 mb-6">{service.description}</p>
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Technologies We Use</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We leverage industry-leading tools and technologies to deliver 
              robust and scalable cloud and DevOps solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                    <tech.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-400">{tech.category}</h3>
                </div>
                <ul className="space-y-2">
                  {tech.tools.map((tool, toolIndex) => (
                    <li key={toolIndex} className="text-sm text-gray-400 flex items-center">
                      <CheckCircle className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Why Choose Cloud & DevOps?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Modern cloud and DevOps practices deliver measurable benefits 
              that transform how organizations build and deploy software.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Infrastructure?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the cloud revolution and accelerate your digital transformation 
              with our expert cloud and DevOps services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105">
                Start Cloud Migration
              </button>
              <button className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-200">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}