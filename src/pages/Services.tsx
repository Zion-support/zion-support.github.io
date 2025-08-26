import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Code,
  Database,
  Network,
  Smartphone,
  Globe,
  Zap,
  Cpu,
  Lock,
  BarChart3,
  Users,
  Rocket,
  Target,
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function Services() {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      services: [
        "AI-Powered Business Intelligence",
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "AI Chatbots & Virtual Assistants"
      ]
    },
    {
      title: "Cybersecurity",
      description: "Advanced security and compliance solutions",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      services: [
        "Zero Trust Architecture",
        "Threat Detection & Response",
        "Penetration Testing",
        "Security Audits & Compliance",
        "Incident Response",
        "Vulnerability Assessment"
      ]
    },
    {
      title: "Cloud & Infrastructure",
      description: "Scalable cloud solutions and DevOps",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      services: [
        "Cloud Migration",
        "DevOps Automation",
        "Infrastructure as Code",
        "Container Orchestration",
        "Serverless Architecture",
        "Multi-Cloud Management"
      ]
    },
    {
      title: "Software Development",
      description: "Custom software and application development",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      services: [
        "Web Application Development",
        "Mobile App Development",
        "API Development",
        "Microservices Architecture",
        "Legacy System Modernization",
        "Quality Assurance & Testing"
      ]
    },
    {
      title: "Data & Analytics",
      description: "Data-driven insights and business intelligence",
      icon: Database,
      color: "from-indigo-500 to-purple-500",
      services: [
        "Data Engineering",
        "Business Intelligence",
        "Data Warehousing",
        "Real-time Analytics",
        "Data Visualization",
        "Big Data Processing"
      ]
    },
    {
      title: "IoT & Edge Computing",
      description: "Connected devices and edge processing solutions",
      icon: Network,
      color: "from-teal-500 to-green-500",
      services: [
        "IoT Platform Development",
        "Edge Computing Solutions",
        "Sensor Integration",
        "Device Management",
        "Real-time Monitoring",
        "Smart City Solutions"
      ]
    }
  ];

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Our Technology Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8"
          >
            Comprehensive technology solutions designed to drive innovation, efficiency, and growth for your business.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/comprehensive-services">
              <button className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                View All Services
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </button>
            </Link>
            <Link to="/contact">
              <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                Get Free Consultation
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-zion-cyan font-semibold mb-1">{stat.label}</p>
                <p className="text-zion-slate-light text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our comprehensive range of technology services designed to meet your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-zion-slate-light mb-6">{category.description}</p>
                <ul className="space-y-3 mb-6">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
                <Link to="/comprehensive-services">
                  <button className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-white py-3 rounded-lg font-semibold transition-all duration-300">
                    Learn More
                    <ArrowRight className="inline ml-2 h-4 w-4" />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Our technology experts are here to help you find the perfect solution for your business needs. 
              Get personalized recommendations and expert guidance.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-zion-slate-light mb-8">
              <div className="flex items-center justify-center gap-3">
                <Phone className="h-6 w-6 text-zion-cyan" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>+1 302 464 0950</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="h-6 w-6 text-zion-cyan" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p>kleber@ziontechgroup.com</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="h-6 w-6 text-zion-cyan" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <button className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  <Phone className="inline mr-2 h-4 w-4" />
                  Schedule Free Consultation
                </button>
              </Link>
              <Link to="/contact">
                <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  <Mail className="inline mr-2 h-4 w-4" />
                  Request Custom Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our team of experts can create tailored solutions to meet your specific business requirements. 
            Let's discuss how we can help transform your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <button className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                <Phone className="inline mr-2 h-5 w-5" />
                Schedule Consultation
              </button>
            </Link>
            <Link to="/contact">
              <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                <Mail className="h-5 w-5 mr-2" />
                Request Custom Quote
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
