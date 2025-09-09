import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Clock, 
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
  MapPin,
  Phone,
  Truck,
  Server,
  Printer,
  Users
} from 'lucide-react';

const OnsiteSupport: React.FC = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Hardware Support',
      description: 'Onsite hardware installation, repair, and maintenance services.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/20'
    },
    {
      icon: Clock,
      title: '24/7 Emergency Support',
      description: 'Round-the-clock emergency onsite support for critical issues.',
      color: 'text-green-400',
      bgColor: 'bg-green-600/20'
    },
    {
      icon: MapPin,
      title: 'Multi-Location Support',
      description: 'Support services across multiple office locations and sites.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-600/20'
    },
    {
      icon: Truck,
      title: 'Equipment Deployment',
      description: 'Onsite equipment delivery, setup, and configuration.',
      color: 'text-orange-400',
      bgColor: 'bg-orange-600/20'
    }
  ];

  const solutions = [
    {
      title: 'Desktop & Laptop Support',
      description: 'Comprehensive support for all desktop and laptop computers.',
      icon: Monitor,
      features: ['Hardware diagnostics', 'Software installation', 'Virus removal', 'Data recovery']
    },
    {
      title: 'Network Infrastructure',
      description: 'Onsite network setup, troubleshooting, and maintenance.',
      icon: Workflow,
      features: ['Network installation', 'Cable management', 'Router configuration', 'Performance optimization']
    },
    {
      title: 'Server & Storage',
      description: 'Onsite server maintenance and storage system support.',
      icon: Server,
      features: ['Server maintenance', 'Storage expansion', 'Backup systems', 'Performance tuning']
    },
    {
      title: 'Print & Peripheral',
      description: 'Support for printers, scanners, and other peripheral devices.',
      icon: Printer,
      features: ['Device setup', 'Driver installation', 'Network printing', 'Maintenance']
    }
  ];

  const technologies = [
    'Windows',
    'macOS',
    'Linux',
    'Network Equipment',
    'Storage Systems',
    'Security Devices',
    'Mobile Devices',
    'Cloud Services'
  ];

  const benefits = [
    {
      title: 'Fast Response',
      description: 'Quick onsite response times for immediate issue resolution.',
      icon: Clock,
      metric: '2-4 Hour Response'
    },
    {
      title: 'Expert Technicians',
      description: 'Certified technicians with extensive onsite experience.',
      icon: Users,
      metric: 'Certified Experts'
    },
    {
      title: 'Cost Effective',
      description: 'Reduce downtime and avoid expensive emergency service calls.',
      icon: TrendingUp,
      metric: '40% Cost Savings'
    },
    {
      title: 'Preventive Maintenance',
      description: 'Regular onsite maintenance to prevent future issues.',
      icon: Shield,
      metric: 'Proactive Support'
    }
  ];

  const testimonials = [
    {
      name: 'Robert Martinez',
      role: 'IT Manager, Manufacturing Corp',
      content: 'Zion Tech Group\'s onsite support team resolved our critical server issue in under 2 hours.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'Operations Director, Retail Chain',
      content: 'Their 24/7 onsite support has been invaluable for our multi-location business.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO, Healthcare Network',
      content: 'The onsite team\'s expertise in healthcare IT compliance gives us peace of mind.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-orange-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-orange-600/20 rounded-full">
              <Wrench className="h-16 w-16 text-orange-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Onsite
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              {" "}Support
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional onsite IT support services delivered to your location. 
            Fast response times, expert technicians, and comprehensive solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Request Onsite Support
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#demo"
              className="px-8 py-3 border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">Onsite Support Services</h2>
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">Support Solutions</h2>
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
                  <solution.icon className="h-8 w-8 text-orange-400 mr-3" />
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
              <h2 className="text-3xl font-bold text-white mb-4">Technologies We Support</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our onsite technicians are certified and experienced with a wide range 
                of technologies and platforms.
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Onsite Support?</h2>
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
                  <div className="p-4 bg-orange-600/20 rounded-full">
                    <benefit.icon className="h-12 w-12 text-orange-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-3">{benefit.description}</p>
                <div className="text-2xl font-bold text-orange-400">{benefit.metric}</div>
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
          <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl p-12 border border-orange-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">Need Onsite IT Support?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get fast, reliable onsite IT support when you need it most. 
              Our expert technicians are ready to help at your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Schedule Onsite Visit
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Emergency Support
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                <Phone className="inline mr-2 h-5 w-5" />
                Call Support Hotline
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default OnsiteSupport;