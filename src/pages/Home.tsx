import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { UltimateServicesShowcase } from '@/components/UltimateServicesShowcase';
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
  Lock,
  Phone,
  Mail,
  MapPin,
  Cpu,
  Network,
  Smartphone,
  BarChart3,
  Heart,
  Leaf,
  Scale
} from 'lucide-react';

const Home: React.FC = () => {
  const heroFeatures = [
    { icon: Brain, title: 'AI-Powered Solutions', description: 'Cutting-edge artificial intelligence for modern businesses' },
    { icon: Shield, title: 'Cybersecurity Excellence', description: 'Advanced protection for your digital assets' },
    { icon: Cloud, title: 'Cloud Infrastructure', description: 'Scalable cloud solutions for growth' },
    { icon: Zap, title: 'Digital Transformation', description: 'Transform your business with innovative technology' }
  ];

  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Global Clients",
      description: "Serving businesses worldwide"
    },
    {
      icon: Award,
      value: "25+",
      label: "Countries",
      description: "Global presence"
    },
    {
      icon: Shield,
      value: "1000+",
      label: "Projects",
      description: "Successfully delivered"
    },
    {
      icon: Cloud,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable service"
    }
  ];

  const services = [
    {
      title: "AI & Analytics",
      description: "Cutting-edge artificial intelligence services including machine learning, natural language processing, and computer vision",
      icon: Brain,
      link: "/innovative-services-2026",
      features: ["Machine Learning", "NLP", "Computer Vision", "Predictive Analytics"],
      color: "from-purple-500 to-pink-500",
      price: "From $1,799/month",
      roi: "200-400% ROI"
    },
    {
      title: "Cybersecurity & Infrastructure",
      description: "Advanced security solutions including quantum-safe cryptography, AI-powered threat detection, and zero-trust architecture",
      icon: Shield,
      link: "/innovative-services-2026",
      features: ["Quantum-Safe Security", "AI Threat Detection", "Zero-Trust", "IoT Security"],
      color: "from-red-500 to-orange-500",
      price: "From $2,999/month",
      roi: "300-600% ROI"
    },
    {
      title: "DevOps & Automation",
      description: "Self-healing DevOps platforms with AI-powered incident detection, automated scaling, and predictive maintenance",
      icon: Cpu,
      link: "/innovative-services-2026",
      features: ["AI Autonomous DevOps", "Predictive Maintenance", "Auto-scaling", "Multi-cloud"],
      color: "from-green-500 to-emerald-500",
      price: "From $3,499/month",
      roi: "300-500% ROI"
    },
    {
      title: "Emerging Technologies",
      description: "Next-generation solutions including blockchain, IoT, quantum computing, and clean energy management",
      icon: Zap,
      link: "/innovative-services-2026",
      features: ["Blockchain", "IoT", "Quantum Computing", "Clean Energy"],
      color: "from-yellow-500 to-orange-500",
      price: "From $2,499/month",
      roi: "250-450% ROI"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300%.",
      rating: 5,
      avatar: "👩‍💼",
      company: "Fortune 500 Tech Company"
    },
    {
      name: "Michael Chen",
      role: "CEO, StartupXYZ",
      content: "The talent we found through Zion was exceptional. They delivered our MVP in record time.",
      rating: 5,
      avatar: "👨‍💻",
      company: "AI Startup"
    },
    {
      name: "Emily Rodriguez",
      role: "IT Director, GlobalCorp",
      content: "Outstanding cybersecurity services. They helped us achieve SOC2 compliance in just 6 months.",
      rating: 5,
      avatar: "👩‍🔒",
      company: "Global Financial Services"
    }
  ];

  const innovations = [
    {
      title: "AI-Powered Business Intelligence",
      description: "Transform data into actionable insights with our advanced AI analytics platform",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      link: "/innovative-services-2026"
    },
    {
      title: "Quantum-Safe Cybersecurity",
      description: "Future-proof your security with post-quantum cryptography and AI threat detection",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      link: "/innovative-services-2026"
    },
    {
      title: "Edge AI Computing",
      description: "Bring AI to the edge with distributed computing for real-time decision making",
      icon: Zap,
      color: "from-amber-500 to-yellow-500",
      link: "/innovative-services-2026"
    },
    {
      title: "Blockchain Supply Chain",
      description: "Ensure transparency and traceability across your global supply network",
      icon: Network,
      color: "from-yellow-500 to-orange-500",
      link: "/innovative-services-2026"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <SEOHead 
        title="Zion Tech Group - Revolutionary AI, IT Infrastructure & Micro SAAS Solutions"
        description="Leading the future of technology with revolutionary AI, IT infrastructure, and innovative micro SAAS solutions that transform businesses worldwide."
        keywords="AI solutions, IT infrastructure, micro SAAS, cybersecurity, cloud services, business transformation, Zion Tech Group"
        canonical="https://ziontechgroup.com"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -inset-10 opacity-20">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent neon-text">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services. 
                Transform your business with cutting-edge technology that drives innovation and growth.
              </p>
              
              {/* Contact Information */}
              <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-3xl p-6 mb-8 max-w-3xl mx-auto">
                <h3 className="text-lg font-semibold text-white mb-4">Get Started Today</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center text-cyan-400">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center justify-center text-cyan-400">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center text-cyan-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Middletown, DE</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/innovative-services-2026"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 neon-glow"
                >
                  Explore Our Services
                </Link>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>

          {/* Hero Features */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {heroFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-white font-semibold mb-2">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Our Innovative Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover cutting-edge micro SAAS solutions that transform industries and drive innovation. 
                From AI-powered platforms to quantum-safe cybersecurity.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  {/* Service Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-700/50 rounded-lg text-xs text-gray-300">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price and ROI */}
                  <div className="mb-6">
                    <div className="text-lg font-semibold text-cyan-400 mb-1">{service.price}</div>
                    <div className="text-sm text-green-400">{service.roi}</div>
                  </div>

                  {/* CTA */}
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200 group-hover:translate-x-1"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Innovations Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Cutting-Edge Innovations
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leading the way in emerging technologies that will define the future of business and society.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {innovations.map((innovation, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  {/* Innovation Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${innovation.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <innovation.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Innovation Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    {innovation.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {innovation.description}
                  </p>

                  {/* CTA */}
                  <Link
                    to={innovation.link}
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-200 group-hover:translate-x-1"
                  >
                    Explore Innovation
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  What Our Clients Say
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join hundreds of companies already leveraging our cutting-edge technology solutions.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300"
                >
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className="text-3xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                      <div className="text-gray-400 text-xs">{testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-md border border-cyan-500/20 rounded-3xl p-12"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of companies already leveraging our cutting-edge technology solutions. 
                Get in touch to discuss how we can help you achieve your goals.
              </p>
              
              {/* Contact Details */}
              <div className="bg-slate-800/50 rounded-2xl p-8 mb-8 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                    <h4 className="text-white font-semibold mb-2">Phone</h4>
                    <p className="text-cyan-400">+1 302 464 0950</p>
                  </div>
                  <div className="text-center">
                    <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                    <h4 className="text-white font-semibold mb-2">Email</h4>
                    <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                    <h4 className="text-white font-semibold mb-2">Address</h4>
                    <p className="text-cyan-400">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 neon-glow"
                >
                  Get Started Today
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
