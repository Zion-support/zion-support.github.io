import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Code, 
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
      </div>

      {/* Featured Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Featured Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <service.icon className="h-12 w-12 text-cyan-400" />
                <h3 className="text-xl font-semibold text-white ml-4">
                  {service.name}
                </h3>
              </div>
              <p className="text-slate-300 mb-6">
                {service.description}
              </p>
              <Link
                to={service.path}
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
              >
                Learn More
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Service Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Service Categories
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700/30"
            >
              <div className="flex items-center mb-6">
                <category.icon className="h-10 w-10 text-cyan-400" />
                <h3 className="text-2xl font-semibold text-white ml-4">
                  {category.title}
                </h3>
              </div>
              <p className="text-slate-300 mb-6">
                {category.description}
              </p>
              <div className="space-y-3">
                {category.services.map((service, serviceIndex) => (
                  <Link
                    key={serviceIndex}
                    to={service.path}
                    className="block p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-200">
                          {service.name}
                        </h4>
                        <p className="text-slate-400 text-sm">
                          {service.description}
                        </p>
                      </div>
                      <svg className="h-5 w-5 text-slate-400 group-hover:text-cyan-400 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center border border-cyan-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let our experts help you implement the right technology solutions 
            to drive growth and innovation in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center px-8 py-3 border border-slate-600 text-base font-medium rounded-lg text-slate-300 hover:text-white hover:border-slate-500 transition-all duration-200"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
