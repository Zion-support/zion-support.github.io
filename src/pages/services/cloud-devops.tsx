import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Cloud,
  Zap,
  Target,
  Users,
  BarChart3,
  Brain,
  Shield,
  Rocket,
  Globe,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Star,
  TrendingUp,
  Activity,
  Code,
  Database,
  Server,
  Network,
  Eye,
  Heart,
  Building,
  Briefcase,
  TestTube,
  GraduationCap,
  HelpCircle,
  Lock,
  Cpu,
  Smartphone,
  Monitor,
  GitBranch,
  RefreshCw,
  ShoppingCart,
  Gamepad2,
  Video
} from 'lucide-react';

export function CloudDevOpsPage() {
  const cloudServices = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud infrastructure with minimal downtime',
      icon: Cloud,
      href: '/services/cloud-migration',
      features: ['Infrastructure Assessment', 'Migration Planning', 'Data Migration', 'Performance Optimization'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'DevOps Automation',
      description: 'Streamline development and operations with automated CI/CD pipelines',
      icon: RefreshCw,
      href: '/services/devops-automation',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Automated Testing', 'Deployment Automation'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Container Orchestration',
      description: 'Manage containerized applications with Kubernetes and Docker',
      icon: Server,
      href: '/services/container-orchestration',
      features: ['Kubernetes Management', 'Docker Optimization', 'Service Mesh', 'Auto-scaling'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Infrastructure as Code',
      description: 'Automate infrastructure provisioning and management',
      icon: Code,
      href: '/services/infrastructure-as-code',
      features: ['Terraform', 'CloudFormation', 'Ansible', 'Version Control'],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Cloud Security',
      description: 'Secure cloud infrastructure and applications',
      icon: Shield,
      href: '/services/cloud-security',
      features: ['Identity Management', 'Network Security', 'Data Protection', 'Compliance'],
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Monitoring & Observability',
      description: 'Comprehensive monitoring and logging solutions',
      icon: Monitor,
      href: '/services/monitoring-observability',
      features: ['Application Monitoring', 'Infrastructure Monitoring', 'Log Management', 'Alerting'],
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  const cloudCapabilities = [
    {
      title: 'Multi-Cloud Strategy',
      description: 'Optimize costs and avoid vendor lock-in with multi-cloud solutions',
      icon: Globe,
      features: ['AWS', 'Azure', 'Google Cloud', 'Hybrid Cloud']
    },
    {
      title: 'Serverless Computing',
      description: 'Build scalable applications without managing infrastructure',
      icon: Zap,
      features: ['Lambda Functions', 'Event-Driven Architecture', 'Auto-scaling', 'Cost Optimization']
    },
    {
      title: 'Microservices Architecture',
      description: 'Design and implement scalable microservices',
      icon: Network,
      features: ['Service Design', 'API Gateway', 'Service Discovery', 'Load Balancing']
    },
    {
      title: 'Database Solutions',
      description: 'Managed database services and optimization',
      icon: Database,
      features: ['RDS', 'NoSQL', 'Data Migration', 'Performance Tuning']
    }
  ];

  const industries = [
    { name: 'E-commerce', icon: ShoppingCart, description: 'Scalable online retail platforms' },
    { name: 'Finance', icon: Building, description: 'Secure financial applications and services' },
    { name: 'Healthcare', icon: Heart, description: 'HIPAA-compliant healthcare solutions' },
    { name: 'Gaming', icon: Gamepad2, description: 'High-performance gaming infrastructure' },
    { name: 'Media', icon: Video, description: 'Content delivery and streaming platforms' },
    { name: 'SaaS', icon: Cloud, description: 'Software-as-a-Service platforms' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/20 rounded-full mb-6">
              <Cloud className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">Cloud & DevOps</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Cloud & DevOps
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Accelerate your development and deployment with our cloud and DevOps solutions. 
              Build, deploy, and scale applications faster with automated infrastructure and 
              modern cloud technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-semibold text-lg border border-white/20 hover:border-white/40"
              >
                <span>View All Services</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cloud Capabilities */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Cloud & DevOps Capabilities</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive cloud and DevOps platform provides the tools and expertise 
              to modernize your infrastructure and accelerate development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-400 mb-4">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Cloud & DevOps Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our comprehensive range of cloud and DevOps services designed to 
              transform your development and deployment processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className={`h-32 bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                  <service.icon className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-blue-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.href}
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our cloud and DevOps solutions are tailored to meet the unique requirements 
              across diverse industry sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-400">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Benefits of Cloud & DevOps
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Modern cloud and DevOps practices deliver measurable improvements that drive 
            business agility and competitive advantage.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Faster Deployment</h3>
              <p className="text-blue-100">Automated CI/CD pipelines for rapid delivery</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Improved Reliability</h3>
              <p className="text-blue-100">Automated testing and deployment validation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Scalable Infrastructure</h3>
              <p className="text-blue-100">Auto-scaling and cloud-native architecture</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Start Cloud Journey</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
            >
              <span>Request a Quote</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Accelerate your development and deployment with modern cloud and DevOps practices. 
            Our experts are ready to help you build scalable, reliable infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Begin Transformation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/training"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
            >
              <span>Learn More</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CloudDevOpsPage;