import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Brain, 
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
  Shield,
  Server
} from 'lucide-react';

const serviceCategories = [
  {
    title: "AI & Machine Learning",
    description: "Advanced artificial intelligence solutions",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    services: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "AI Automation"
    ]
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions and management",
    icon: Cloud,
    color: "from-blue-500 to-cyan-500",
    services: [
      "Cloud Migration",
      "Infrastructure as Code",
      "Container Orchestration",
      "Serverless Architecture",
      "Cloud Security"
    ]
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions",
    icon: Shield,
    color: "from-red-500 to-orange-500",
    services: [
      "Security Assessment",
      "Threat Detection",
      "Incident Response",
      "Compliance Management",
      "Security Training"
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
      "Data Visualization"
    ]
  },
  {
    title: "Software Development",
    description: "Custom software solutions",
    icon: Code,
    color: "from-green-500 to-teal-500",
    services: [
      "Web Applications",
      "Mobile Apps",
      "API Development",
      "Legacy Modernization",
      "Quality Assurance"
    ]
  },
  {
    title: "Digital Transformation",
    description: "Complete business transformation",
    icon: Rocket,
    color: "from-yellow-500 to-orange-500",
    services: [
      "Process Automation",
      "Technology Modernization",
      "Change Management",
      "Strategy Consulting"
    ]
  }
];

const services = [
  {
    title: "AI Automation Platform",
    description: "End-to-end AI automation solutions that streamline business processes",
    icon: Brain,
    price: "Starting at $5,000/month",
    features: ["Process Automation", "Intelligent Workflows", "Real-time Analytics", "24/7 Support"]
  },
  {
    title: "Cloud Migration Service",
    description: "Seamless migration to cloud infrastructure with zero downtime",
    icon: Cloud,
    price: "Starting at $10,000",
    features: ["Zero Downtime", "Cost Optimization", "Security Compliance", "Performance Monitoring"]
  },
  {
    title: "Cybersecurity Assessment",
    description: "Comprehensive security evaluation and protection strategies",
    icon: Shield,
    price: "Starting at $2,500",
    features: ["Vulnerability Assessment", "Penetration Testing", "Security Training", "Compliance Audit"]
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    company: "TechCorp",
    role: "CTO",
    content: "Zion Tech Group transformed our entire infrastructure. The AI automation platform alone saved us 40% in operational costs.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    company: "InnovateLabs",
    role: "CEO",
    content: "Outstanding cybersecurity services. They identified vulnerabilities we never knew existed and implemented robust protection.",
    rating: 5
  },
  {
    name: "Jennifer Park",
    company: "DataFlow Inc",
    role: "Head of Engineering",
    content: "The cloud migration was flawless. Our applications now run 3x faster with 50% lower infrastructure costs.",
    rating: 5
  }
];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Comprehensive technology solutions designed to drive innovation, 
              enhance security, and accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/case-studies"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer a comprehensive range of technology services to meet all your business needs
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-xl border border-zinc-700 hover:border-zinc-500 transition-all duration-300 transform hover:scale-105 h-full">
                  <div className={`bg-gradient-to-r ${category.color} p-4 rounded-lg w-16 h-16 mb-6 flex items-center justify-center`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {category.description}
                  </p>
                  <ul className="space-y-2">
                    {category.services.map((service, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and impactful solutions that deliver immediate value to your business
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-xl border border-zinc-700"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg w-16 h-16 mb-6 flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {service.description}
                </p>
                <div className="text-2xl font-bold text-blue-400 mb-4">
                  {service.price}
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-center block"
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from the businesses we've helped transform
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-xl border border-zinc-700"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Award key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-zinc-700 pt-4">
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our services can help transform your business and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;