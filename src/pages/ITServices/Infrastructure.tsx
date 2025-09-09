import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Database, 
  Network, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  MessageCircle,
  Globe,
  BarChart3,
  Settings,
  Code,
  Package,
  Monitor,
  Activity,
  Layers,
  PieChart,
  Target,
  TrendingUp,
  Cpu,
  HardDrive,
  Cloud,
  Lock
} from 'lucide-react';

const Infrastructure: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: 'Server Management',
      description: 'Comprehensive server infrastructure design, deployment, and management.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/20'
    },
    {
      icon: Database,
      title: 'Database Administration',
      description: 'Database design, optimization, and ongoing administration services.',
      color: 'text-green-400',
      bgColor: 'bg-green-600/20'
    },
    {
      icon: Network,
      title: 'Network Infrastructure',
      description: 'Network design, implementation, and ongoing management and monitoring.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-600/20'
    },
    {
      icon: Shield,
      title: 'Security Infrastructure',
      description: 'Comprehensive security infrastructure design and implementation.',
      color: 'text-orange-400',
      bgColor: 'bg-orange-600/20'
    }
  ];

  const solutions = [
    {
      title: 'Data Center Design',
      description: 'Design and implement scalable, reliable data center infrastructure.',
      icon: Server,
      features: ['High availability design', 'Redundancy planning', 'Scalability architecture', 'Performance optimization']
    },
    {
      title: 'Cloud Migration',
      description: 'Migrate existing infrastructure to cloud platforms with minimal downtime.',
      icon: Cloud,
      features: ['Migration planning', 'Data migration', 'Application migration', 'Post-migration support']
    },
    {
      title: 'Disaster Recovery',
      description: 'Implement comprehensive disaster recovery and business continuity solutions.',
      icon: Shield,
      features: ['Backup strategies', 'Recovery planning', 'Testing procedures', 'Documentation']
    },
    {
      title: 'Performance Optimization',
      description: 'Optimize infrastructure performance for better user experience.',
      icon: TrendingUp,
      features: ['Performance monitoring', 'Bottleneck identification', 'Optimization strategies', 'Ongoing maintenance']
    }
  ];

  const technologies = [
    'VMware',
    'Hyper-V',
    'AWS',
    'Azure',
    'GCP',
    'Docker',
    'Kubernetes',
    'Ansible'
  ];

  const benefits = [
    {
      title: 'Reliability',
      description: 'Build robust, fault-tolerant infrastructure that ensures business continuity.',
      icon: Shield,
      metric: '99.9% Uptime'
    },
    {
      title: 'Scalability',
      description: 'Design infrastructure that grows with your business needs.',
      icon: TrendingUp,
      metric: 'Unlimited Scale'
    },
    {
      title: 'Security',
      description: 'Implement enterprise-grade security measures to protect your data.',
      icon: Lock,
      metric: 'Enterprise Security'
    },
    {
      title: 'Cost Efficiency',
      description: 'Optimize infrastructure costs through proper design and management.',
      icon: Target,
      metric: '30% Cost Savings'
    }
  ];

  const testimonials = [
    {
      name: 'Robert Chen',
      role: 'CTO, Manufacturing Corp',
      content: 'Zion Tech Group designed and implemented our entire infrastructure, ensuring 99.9% uptime.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'IT Director, RetailChain',
      content: 'Their cloud migration expertise helped us reduce infrastructure costs by 40%.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'VP Technology, FinTech Corp',
      content: 'The disaster recovery solution they implemented saved us during a major outage.',
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
              <Server className="h-16 w-16 text-blue-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            IT
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Infrastructure
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Build robust, scalable, and secure IT infrastructure that powers your business. 
            From data centers to cloud solutions, we design and manage your technology foundation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Explore Infrastructure Solutions
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">Infrastructure Services</h2>
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">Infrastructure Solutions</h2>
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
              <h2 className="text-3xl font-bold text-white mb-4">Technologies We Use</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We leverage industry-leading technologies to build robust, scalable, 
                and secure infrastructure solutions for your business.
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Infrastructure?</h2>
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

        {/* Testimonials */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Client Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
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
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-12 border border-blue-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Build Your Infrastructure?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your IT infrastructure with robust, scalable, and secure solutions. 
              Partner with Zion Tech Group for enterprise-grade infrastructure services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Start Infrastructure Project
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Schedule Consultation
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                <MessageCircle className="inline mr-2 h-5 w-5" />
                Talk to Infrastructure Expert
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Infrastructure;