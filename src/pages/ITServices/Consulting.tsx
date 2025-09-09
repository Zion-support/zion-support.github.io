import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
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
  TrendingUp,
  Cpu,
  Cloud,
  Shield,
  Database,
  Smartphone,
  Workflow,
  Lightbulb,
  Briefcase
} from 'lucide-react';

const Consulting: React.FC = () => {
  const services = [
    {
      icon: Lightbulb,
      title: 'Strategic Planning',
      description: 'Develop comprehensive IT strategies aligned with business objectives.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/20'
    },
    {
      icon: Target,
      title: 'Technology Assessment',
      description: 'Evaluate current technology stack and identify improvement opportunities.',
      color: 'text-green-400',
      bgColor: 'bg-green-600/20'
    },
    {
      icon: Users,
      title: 'Process Optimization',
      description: 'Streamline IT processes for maximum efficiency and productivity.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-600/20'
    },
    {
      icon: Briefcase,
      title: 'Vendor Management',
      description: 'Expert guidance in selecting and managing technology vendors.',
      color: 'text-orange-400',
      bgColor: 'bg-orange-600/20'
    }
  ];

  const solutions = [
    {
      title: 'IT Strategy Development',
      description: 'Create comprehensive IT roadmaps that drive business growth.',
      icon: Target,
      features: ['Business alignment', 'Technology roadmap', 'Resource planning', 'Risk assessment']
    },
    {
      title: 'Technology Architecture',
      description: 'Design scalable and secure technology architectures.',
      icon: Cpu,
      features: ['System design', 'Integration planning', 'Security architecture', 'Scalability planning']
    },
    {
      title: 'Digital Transformation',
      description: 'Guide organizations through digital transformation initiatives.',
      icon: TrendingUp,
      features: ['Change management', 'Process redesign', 'Technology adoption', 'Training programs']
    },
    {
      title: 'IT Governance',
      description: 'Establish effective IT governance and compliance frameworks.',
      icon: Shield,
      features: ['Policy development', 'Compliance frameworks', 'Risk management', 'Performance monitoring']
    }
  ];

  const technologies = [
    'Enterprise Architecture',
    'Cloud Strategy',
    'Security Frameworks',
    'Data Governance',
    'DevOps Practices',
    'Agile Methodologies',
    'ITIL Framework',
    'Risk Management'
  ];

  const benefits = [
    {
      title: 'Expert Guidance',
      description: 'Access to industry experts with deep technology and business knowledge.',
      icon: Users,
      metric: '15+ Years Experience'
    },
    {
      title: 'Cost Optimization',
      description: 'Identify cost-saving opportunities and optimize IT investments.',
      icon: TrendingUp,
      metric: '25% Cost Reduction'
    },
    {
      title: 'Risk Mitigation',
      description: 'Proactively identify and mitigate technology and business risks.',
      icon: Shield,
      metric: 'Risk Reduction'
    },
    {
      title: 'Strategic Alignment',
      description: 'Ensure IT initiatives directly support business objectives.',
      icon: Target,
      metric: '100% Alignment'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Smith',
      role: 'CIO, Healthcare Corp',
      content: 'Zion Tech Group helped us develop a comprehensive IT strategy that increased operational efficiency by 40%.',
      rating: 5
    },
    {
      name: 'Mark Wilson',
      role: 'CTO, Financial Services',
      content: 'Their consulting expertise guided us through a major technology transformation with minimal disruption.',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      role: 'VP IT, Manufacturing Inc',
      content: 'The strategic planning and vendor management consulting saved us millions in technology investments.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-green-600/20 rounded-full">
              <Users className="h-16 w-16 text-green-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            IT
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              {" "}Consulting
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Expert IT consulting services to align your technology with business goals. 
            Strategic guidance, process optimization, and technology expertise to drive success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Get Expert Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#demo"
              className="px-8 py-3 border border-green-500 text-green-400 hover:bg-green-500 hover:text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">Consulting Services</h2>
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">Consulting Solutions</h2>
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
                  <solution.icon className="h-8 w-8 text-green-400 mr-3" />
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
              <h2 className="text-3xl font-bold text-white mb-4">Areas of Expertise</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our consultants bring deep expertise across all aspects of IT strategy, 
                architecture, and digital transformation.
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Consulting?</h2>
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
                  <div className="p-4 bg-green-600/20 rounded-full">
                    <benefit.icon className="h-12 w-12 text-green-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-3">{benefit.description}</p>
                <div className="text-2xl font-bold text-green-400">{benefit.metric}</div>
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
          <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl p-12 border border-green-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">Ready for Expert IT Guidance?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your IT organization with strategic consulting services. 
              Partner with Zion Tech Group for expert guidance and proven results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Start Consultation
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-green-500 text-green-400 hover:bg-green-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Schedule Discovery Call
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                <MessageCircle className="inline mr-2 h-5 w-5" />
                Talk to Consultant
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Consulting;