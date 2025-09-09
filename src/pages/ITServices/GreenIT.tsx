import React from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Zap, 
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
  Sun,
  Battery,
  Recycle
} from 'lucide-react';

const GreenIT: React.FC = () => {
  const services = [
    {
      icon: Leaf,
      title: 'Energy Efficiency',
      description: 'Optimize IT infrastructure for maximum energy efficiency and cost savings.',
      color: 'text-green-400',
      bgColor: 'bg-green-600/20'
    },
    {
      icon: Zap,
      title: 'Power Management',
      description: 'Implement intelligent power management solutions for IT equipment.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/20'
    },
    {
      icon: Sun,
      title: 'Renewable Energy',
      description: 'Integrate renewable energy sources into IT infrastructure.',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-600/20'
    },
    {
      icon: Recycle,
      title: 'Sustainable Practices',
      description: 'Adopt sustainable IT practices and circular economy principles.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-600/20'
    }
  ];

  const solutions = [
    {
      title: 'Data Center Optimization',
      description: 'Optimize data centers for energy efficiency and sustainability.',
      icon: Database,
      features: ['Cooling optimization', 'Energy monitoring', 'Efficient hardware', 'Green certifications']
    },
    {
      title: 'Virtualization & Cloud',
      description: 'Reduce physical infrastructure through virtualization and cloud solutions.',
      icon: Cloud,
      features: ['Server consolidation', 'Cloud migration', 'Resource optimization', 'Carbon footprint reduction']
    },
    {
      title: 'Green Procurement',
      description: 'Source environmentally responsible IT equipment and services.',
      icon: Package,
      features: ['Energy Star compliance', 'EPEAT certification', 'Sustainable suppliers', 'Lifecycle assessment']
    },
    {
      title: 'Waste Management',
      description: 'Implement responsible IT asset disposal and recycling programs.',
      icon: Recycle,
      features: ['Asset tracking', 'Secure disposal', 'Recycling programs', 'Compliance management']
    }
  ];

  const technologies = [
    'Energy Monitoring',
    'Smart Cooling',
    'Power Management',
    'Virtualization',
    'Cloud Computing',
    'Green Certifications',
    'Sustainable Hardware',
    'Waste Reduction'
  ];

  const benefits = [
    {
      title: 'Cost Savings',
      description: 'Reduce energy costs and operational expenses through efficiency.',
      icon: TrendingUp,
      metric: '30% Cost Reduction'
    },
    {
      title: 'Environmental Impact',
      description: 'Minimize carbon footprint and environmental impact.',
      icon: Leaf,
      metric: '40% Carbon Reduction'
    },
    {
      title: 'Compliance',
      description: 'Meet environmental regulations and sustainability standards.',
      icon: Shield,
      metric: '100% Compliance'
    },
    {
      title: 'Brand Value',
      description: 'Enhance brand reputation through sustainable practices.',
      icon: Star,
      metric: 'Enhanced Reputation'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Sustainability Director, Tech Corp',
      content: 'Zion Tech Group helped us achieve 40% energy savings in our data centers.',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'CTO, Green Manufacturing',
      content: 'Their green IT solutions aligned perfectly with our sustainability goals.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Operations, Eco Services',
      content: 'The green procurement program saved us money while improving our environmental impact.',
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
              <Leaf className="h-16 w-16 text-green-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Green
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              {" "}IT
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Sustainable IT solutions that reduce environmental impact while improving efficiency. 
            Build a greener future with our eco-friendly technology services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Go Green with IT
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">Green IT Services</h2>
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">Sustainable Solutions</h2>
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
              <h2 className="text-3xl font-bold text-white mb-4">Green Technologies</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We leverage cutting-edge green technologies to create sustainable, 
                energy-efficient IT solutions for your business.
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Green IT?</h2>
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
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Go Green?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your IT infrastructure with sustainable, energy-efficient solutions. 
              Partner with Zion Tech Group for a greener future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Start Green Initiative
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-green-500 text-green-400 hover:bg-green-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Sustainability Assessment
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                <MessageCircle className="inline mr-2 h-5 w-5" />
                Talk to Green IT Expert
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default GreenIT;