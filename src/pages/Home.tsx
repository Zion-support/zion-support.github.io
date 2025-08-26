import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Rocket, 
  Users, 
  Award, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  BarChart3,
  FileImage,
  MessageCircle,
  Video,
  FileText,
  Heart,
  ShoppingCart,
  Settings,
  HelpCircle,
  BookOpen,
  Briefcase,
  Target,
  Lightbulb,
  ShieldCheck,
  Server,
  Smartphone,
  Monitor,
  Wifi,
  Bluetooth,
  Satellite,
  Atom,
  Dna,
  Microscope,
  Flask,
  TestTube,
  Syringe,
  Stethoscope,
  HeartPulse,
  BrainCircuit,
  Eye,
  Ear,
  Hand,
  Foot,
  Bone,
  Tooth,
  Pill,
  Syringe,
  Stethoscope,
  HeartPulse,
  BrainCircuit,
  Eye,
  Ear,
  Hand,
  Foot,
  Bone,
  Tooth,
  Pill
} from 'lucide-react';

const Home: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Global Clients",
      description: "Serving businesses worldwide"
    },
    {
      icon: Globe,
      value: "25+",
      label: "Countries",
      description: "Global presence"
    },
    {
      icon: Code,
      value: "1000+",
      label: "Projects",
      description: "Successfully delivered"
    },
    {
      icon: Shield,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable service"
    }
  ];

  const services = [
    {
      icon: Brain,
      title: "AI Services",
      description: "Cutting-edge artificial intelligence solutions",
      link: "/ai-services",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "Micro SAAS",
      description: "Scalable software-as-a-service platforms",
      link: "/micro-saas",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Server,
      title: "IT Services",
      description: "Comprehensive IT infrastructure solutions",
      link: "/it-services",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Emerging Tech",
      description: "Next-generation technology innovations",
      link: "/emerging-tech",
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion Tech Group transformed our digital infrastructure. Their AI solutions increased our efficiency by 300%.",
      avatar: "/api/placeholder/100/100"
    },
    {
      name: "Michael Chen",
      role: "CEO, InnovateLab",
      content: "The team's expertise in emerging technologies helped us stay ahead of the competition.",
      avatar: "/api/placeholder/100/100"
    },
    {
      name: "Emily Rodriguez",
      role: "Director, DataFlow",
      content: "Outstanding service and innovative solutions. They truly understand our business needs.",
      avatar: "/api/placeholder/100/100"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                Welcome to <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto">
                Pioneering the future of technology with cutting-edge AI, innovative solutions, 
                and transformative digital experiences that drive business growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 inline" />
                </Link>
                <Link 
                  to="/services"
                  className="px-8 py-4 bg-zion-slate-dark/50 border border-zion-cyan/20 text-zion-cyan font-semibold rounded-xl hover:bg-zion-slate-dark/70 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-xl font-semibold text-zion-cyan mb-2">{stat.label}</div>
                <p className="text-zion-slate-light">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={service.link}>
                  <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group-hover:scale-105">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                    <p className="text-zion-slate-light text-center">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Trusted by industry leaders worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-zion-cyan">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-zion-slate-light italic">"{testimonial.content}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's discuss how our innovative solutions can drive your success
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 inline" />
              </Link>
              <Link 
                to="/about"
                className="px-8 py-4 bg-zion-slate-dark/50 border border-zion-cyan/20 text-zion-cyan font-semibold rounded-xl hover:bg-zion-slate-dark/70 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
