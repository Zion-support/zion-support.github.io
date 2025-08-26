
import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/comprehensive-services-showcase-2025" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Services
            </Link>
            <Link 
              to="/comprehensive-services-showcase-2025" 
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
=======
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Cpu, 
  Rocket, 
  Lock, 
  Users, 
  Globe,
  Zap,
  CheckCircle,
  Star,
  Award
} from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Expert Team",
    description: "Certified professionals"
  },
  {
    icon: Globe,
    value: "100+",
    label: "Countries Served",
    description: "Global presence"
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Customer Rating",
    description: "Satisfaction guaranteed"
  },
  {
    icon: Award,
    value: "50+",
    label: "Industry Awards",
    description: "Recognition of excellence"
  }
];

const aiServices = [
  {
    title: "AI-Powered Analytics",
    description: "Transform your data into actionable insights with advanced machine learning algorithms",
    features: ["Predictive Analytics", "Real-time Processing", "Custom Dashboards", "Automated Reporting"],
    path: "/services/ai-analytics",
    icon: Brain
  },
  {
    title: "Cybersecurity Solutions",
    description: "Protect your digital assets with enterprise-grade security measures",
    features: ["Threat Detection", "Data Encryption", "Compliance Management", "24/7 Monitoring"],
    path: "/services/cybersecurity",
    icon: Shield
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions designed for modern business needs",
    features: ["Multi-cloud Strategy", "Auto-scaling", "Disaster Recovery", "Cost Optimization"],
    path: "/services/cloud-devops",
    icon: Cloud
  }
];

const featuredServices = [
  {
    title: "AI Business Intelligence",
    price: "$2,500/month",
    category: "AI Solutions",
    description: "Advanced analytics platform with machine learning capabilities",
    rating: 4.9,
    reviewCount: 127,
    highlights: ["Real-time insights", "Custom dashboards", "API integration"],
    path: "/services/ai-business-intelligence",
    icon: Brain
  },
  {
    title: "Cybersecurity Suite",
    price: "$1,800/month",
    category: "Security",
    description: "Comprehensive security solution for enterprise protection",
    rating: 4.8,
    reviewCount: 89,
    highlights: ["Threat detection", "Compliance ready", "24/7 monitoring"],
    path: "/services/cybersecurity",
    icon: Shield
  },
  {
    title: "IoT Edge Platform",
    price: "$3,200/month",
    category: "IoT Solutions",
    description: "Edge computing platform for real-time data processing",
    rating: 4.7,
    reviewCount: 56,
    highlights: ["Low latency", "Scalable", "Real-time analytics"],
    path: "/services/iot-edge",
    icon: Cpu
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg font-semibold hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Services
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-pulse">
          <div className="w-4 h-4 bg-zion-cyan rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-1000">
          <div className="w-3 h-3 bg-zion-purple rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-pulse delay-2000">
          <div className="w-2 h-2 bg-zion-blue rounded-full opacity-60"></div>
        </div>
>>>>>>> main
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<<<<<<< HEAD
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">1000+</div>
              <div className="text-lg font-semibold mb-2">Services</div>
              <div className="text-sm text-gray-400">Cutting-edge solutions</div>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">1000%</div>
              <div className="text-lg font-semibold mb-2">ROI</div>
              <div className="text-sm text-gray-400">Guaranteed returns</div>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-lg font-semibold mb-2">Support</div>
              <div className="text-sm text-gray-400">Always available</div>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-lg font-semibold mb-2">Uptime</div>
              <div className="text-sm text-gray-400">Reliable service</div>
            </div>
=======
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-2 text-white">{stat.label}</div>
                <div className="text-sm text-zion-slate-light">{stat.description}</div>
              </motion.div>
            ))}
>>>>>>> main
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of technology with our revolutionary services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Services Inquiry"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </a>
            <a
              href="tel:+13024640950"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Email: kleber@ziontechgroup.com | Website: https://ziontechgroup.com</p>
          </div>
        </div>
      </section>
    </div>
=======
      {/* AI Services Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              AI-Powered Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover how artificial intelligence can transform your business operations and drive innovation
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-gradient-to-br from-zion-slate-dark to-zion-slate-light/10 p-8 rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.path}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-semibold group"
                >
                  Learn More
                  <Zap className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              Featured Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our most popular solutions trusted by businesses worldwide
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-gradient-to-br from-zion-slate-light/5 to-zion-slate-dark/50 rounded-2xl border border-zion-cyan/20 overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-zion-cyan">{service.price}</div>
                      <div className="text-sm text-zion-slate-light">{service.category}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-6">{service.description}</p>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-zion-slate-light'}`} />
                      ))}
                    </div>
                    <span className="text-zion-slate-light">({service.reviewCount} reviews)</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={service.path}
                    className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 rounded-lg font-semibold text-center block hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging Zion Tech Group's innovative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white text-zion-cyan rounded-lg font-semibold hover:bg-zion-slate-light transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-cyan transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
>>>>>>> main
  );
}
