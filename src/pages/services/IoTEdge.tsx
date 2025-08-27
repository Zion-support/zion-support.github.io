import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Wifi, 
  Zap, 
  Database, 
  Shield, 
  Users, 
  Globe,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Award,
  Clock,
  Target,
  Lightbulb,
  Network,
  Smartphone,
  Cloud,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Cpu,
    title: 'Edge Computing',
    description: 'Process data closer to the source for faster response times and reduced latency'
  },
  {
    icon: Wifi,
    title: 'IoT Connectivity',
    description: 'Seamless device connectivity with multiple protocol support and mesh networking'
  },
  {
    icon: Database,
    title: 'Data Processing',
    description: 'Real-time data processing and analytics at the edge for instant insights'
  },
  {
    icon: Shield,
    title: 'Security & Privacy',
    description: 'End-to-end security for IoT devices and edge computing infrastructure'
  },
  {
    icon: Network,
    title: 'Network Management',
    description: 'Intelligent network orchestration and traffic optimization'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Monitoring',
    description: 'Comprehensive monitoring and predictive analytics for IoT ecosystems'
  }
];

const benefits = [
  'Reduce latency by up to 90%',
  'Lower bandwidth costs by 60%',
  'Improve response times by 10x',
  'Enable real-time decision making',
  'Reduce cloud dependency',
  'Enhance data privacy and security'
];

const solutions = [
  {
    title: 'Smart Manufacturing',
    description: 'IoT sensors and edge computing for predictive maintenance and quality control',
    icon: Cpu,
    industries: ['Manufacturing', 'Automotive', 'Electronics']
  },
  {
    title: 'Smart Cities',
    description: 'Connected infrastructure for traffic management, utilities, and public services',
    icon: Globe,
    industries: ['Municipal', 'Transportation', 'Utilities']
  },
  {
    title: 'Healthcare IoT',
    description: 'Connected medical devices and patient monitoring systems',
    icon: Users,
    industries: ['Healthcare', 'Pharmaceuticals', 'Medical Devices']
  },
  {
    title: 'Retail Analytics',
    description: 'Smart retail solutions with customer behavior tracking and inventory management',
    icon: BarChart3,
    industries: ['Retail', 'E-commerce', 'Fashion']
  }
];

const testimonials = [
  {
    name: 'Jennifer Adams',
    role: 'CTO',
    company: 'Smart Manufacturing Co',
    content: 'Zion Tech Group\'s IoT edge computing solution reduced our production downtime by 75% and improved quality control significantly.',
    rating: 5
  },
  {
    name: 'Carlos Rodriguez',
    role: 'IT Director',
    company: 'City Utilities',
    content: 'The smart city implementation has transformed how we manage our infrastructure. Real-time monitoring has never been easier.',
    rating: 5
  },
  {
    name: 'Dr. Sarah Kim',
    role: 'Medical Director',
    company: 'Advanced Healthcare',
    content: 'Our IoT medical devices now provide real-time patient data, enabling faster and more accurate diagnoses.',
    rating: 5
  }
];

export default function IoTEdge() {
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue via-zion-cyan to-zion-purple opacity-20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-zion-blue/10 border border-zion-blue/20 rounded-full px-6 py-3 mb-8">
              <Cpu className="w-5 h-5 text-zion-blue" />
              <span className="text-zion-blue font-medium">IoT & Edge Computing</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Power the Future with
              <span className="text-gradient block">IoT & Edge Computing</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Connect, process, and analyze data at the edge with our cutting-edge IoT solutions. 
              Transform your business with real-time insights and intelligent automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="btn-futuristic px-8 py-4 text-lg font-semibold"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="btn-outline px-8 py-4 text-lg font-semibold">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
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
              Comprehensive IoT & Edge Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From device connectivity to edge analytics, we provide end-to-end IoT solutions 
              that enable real-time decision making and intelligent automation.
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
                className="bg-white/5 backdrop-blur-xl border border-zion-blue/20 rounded-2xl p-8 hover:border-zion-blue/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-blue to-zion-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/5">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose IoT & Edge Computing?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the transformative power of processing data closer to where it's generated.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 bg-white/5 backdrop-blur-xl border border-zion-blue/20 rounded-xl p-6"
              >
                <CheckCircle className="w-6 h-6 text-zion-blue flex-shrink-0" />
                <span className="text-zion-slate-light">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
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
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Tailored IoT and edge computing solutions designed for your specific industry needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-zion-blue/20 rounded-2xl p-8 hover:border-zion-blue/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-zion-slate-light leading-relaxed mb-6">{solution.description}</p>
                <div className="mb-6">
                  <h4 className="text-zion-blue font-medium mb-2">Industries:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.industries.map((industry) => (
                      <span
                        key={industry}
                        className="px-3 py-1 bg-zion-blue/10 border border-zion-blue/20 rounded-full text-sm text-zion-blue"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center text-zion-blue hover:text-zion-blue-light transition-colors font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-white/5">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Technology Stack
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Built on cutting-edge technologies and industry standards for maximum compatibility and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'MQTT', description: 'Lightweight messaging protocol', icon: Wifi },
              { name: 'CoAP', description: 'Constrained application protocol', icon: Network },
              { name: 'Edge AI', description: 'Machine learning at the edge', icon: Brain },
              { name: '5G/LoRaWAN', description: 'High-speed connectivity', icon: Zap }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-zion-blue to-zion-cyan rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-xl font-bold text-white mb-2">{tech.name}</div>
                <div className="text-zion-blue text-sm">{tech.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about our IoT and edge computing solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-zion-blue/20 rounded-2xl p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-zion-slate-light mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-zion-blue text-sm">{testimonial.role}</div>
                  <div className="text-zion-slate-light text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white/5">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join the IoT revolution and unlock the power of edge computing for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="btn-futuristic px-8 py-4 text-lg font-semibold"
              >
                Get Your IoT Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="btn-outline px-8 py-4 text-lg font-semibold"
              >
                Talk to IoT Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}