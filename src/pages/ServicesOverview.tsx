import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Heart, 
  Building2, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  Cpu, 
  Rocket,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  DollarSign,
  ChartLine,
  Lock,
  Target,
  Microscope,
  Pill,
  Monitor,
  Database,
  TrafficCone,
  Lightbulb,
  Camera,
  Leaf,
  Car,
  Wifi,
  MapPin,
  Code,
  Cloud,
  Network,
  Lock,
  Globe,
  Cpu,
  Rocket
} from 'lucide-react';

export default function ServicesOverview() {
  const serviceCategories = [
    {
      title: "AI & Analytics Services",
      description: "Cutting-edge artificial intelligence and data analytics solutions",
      icon: Brain,
      services: [
        {
          name: "AI Business Intelligence",
          description: "Transform data into actionable insights with AI-powered analytics",
          path: "/micro-saas/ai-business-intelligence",
          price: "$2,500/mo",
          features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "AI Insights"],
          icon: BarChart3
        },
        {
          name: "AI Healthcare Analytics",
          description: "Revolutionary healthcare AI for diagnostics and patient care",
          path: "/micro-saas/ai-healthcare-analytics",
          price: "$12,000/mo",
          features: ["Disease Prediction", "Patient Monitoring", "Clinical Support", "HIPAA Compliant"],
          icon: Heart
        },
        {
          name: "AI Smart City Solutions",
          description: "Intelligent urban infrastructure and management systems",
          path: "/micro-saas/ai-smart-city-solutions",
          price: "$25,000/mo",
          features: ["Traffic Management", "Energy Optimization", "Public Safety", "Environmental Monitoring"],
          icon: Building2
        }
      ]
    },
    {
      title: "Financial Technology",
      description: "Next-generation financial services powered by AI and quantum computing",
      icon: DollarSign,
      services: [
        {
          name: "AI Quantum Finance",
          description: "Quantum AI-powered trading and financial analytics platform",
          path: "/micro-saas/ai-quantum-finance",
          price: "$15,000/mo",
          features: ["Quantum Trading", "Market Analytics", "Risk Assessment", "High-Frequency Trading"],
          icon: ChartLine
        }
      ]
    },
    {
      title: "Cybersecurity & Infrastructure",
      description: "Enterprise-grade security and infrastructure solutions",
      icon: Shield,
      services: [
        {
          name: "Cybersecurity Services",
          description: "Comprehensive security solutions for modern businesses",
          path: "/services/cybersecurity",
          price: "$3,200/mo",
          features: ["Threat Detection", "24/7 Monitoring", "Compliance", "Incident Response"],
          icon: Lock
        },
        {
          name: "Cloud & DevOps",
          description: "Scalable cloud infrastructure and automation solutions",
          path: "/services/cloud-devops",
          price: "$1,800/mo",
          features: ["Cloud Migration", "DevOps Automation", "Scalability", "Cost Optimization"],
          icon: Cloud
        }
      ]
    },
    {
      title: "Emerging Technologies",
      description: "Cutting-edge solutions in quantum computing, IoT, and blockchain",
      icon: Rocket,
      services: [
        {
          name: "Quantum Computing",
          description: "Quantum computing solutions for complex problem solving",
          path: "/services/quantum-computing",
          price: "$25,000/mo",
          features: ["Quantum Algorithms", "Optimization", "Simulation", "Research Support"],
          icon: Cpu
        },
        {
          name: "IoT & Edge Computing",
          description: "Connected devices and edge computing solutions",
          path: "/services/iot-edge",
          price: "$8,500/mo",
          features: ["Device Management", "Edge Analytics", "Real-time Processing", "Scalable Infrastructure"],
          icon: Network
        },
        {
          name: "Blockchain Services",
          description: "Distributed ledger technology and Web3 solutions",
          path: "/services/blockchain",
          price: "$12,000/mo",
          features: ["Smart Contracts", "DeFi Solutions", "NFT Platforms", "Enterprise Blockchain"],
          icon: Globe
        }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, Quantum Capital",
      content: "ZION's AI Quantum Finance platform has revolutionized our trading operations. The quantum algorithms provide insights we never had before.",
      rating: 5,
      company: "Quantum Capital"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Head of Research, Medical Institute",
      content: "The AI Healthcare Analytics has accelerated our research by 300%. We're bringing life-saving treatments to market faster than ever.",
      rating: 5,
      company: "Medical Institute"
    },
    {
      name: "Mayor Sarah Williams",
      role: "City of Innovation Bay",
      content: "ZION's Smart City Solutions have transformed our urban infrastructure. Traffic congestion is down 30% and energy costs have decreased by 25%.",
      rating: 5,
      company: "Innovation Bay"
    }
  ];

  const stats = [
    { value: "500+", label: "Happy Clients", description: "Trusted by businesses worldwide" },
    { value: "95%", label: "Success Rate", description: "Proven track record of delivery" },
    { value: "10+", label: "Years Experience", description: "Deep industry expertise" },
    { value: "25+", label: "Countries Served", description: "Global reach and support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-zion-purple/20 to-zion-blue/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-zion-cyan/30 to-zion-blue/30 rounded-full blur-2xl animate-pulse delay-2000"></div>
          </div>
        </div>

        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 px-4 py-2 rounded-full border border-zion-cyan/30 mb-6">
              <Code className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan font-medium">Comprehensive Services</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
              Our Services
            </h1>
            
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Discover our comprehensive suite of AI-powered micro SAAS services, IT solutions, and emerging technology platforms. 
              From quantum computing to smart cities, we're building the future of technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="button-primary px-8 py-4 text-lg flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="button-secondary px-8 py-4 text-lg"
              >
                Schedule Demo
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{stat.value}</div>
                  <div className="text-zion-slate-light text-sm">{stat.label}</div>
                  <div className="text-zion-slate-light text-xs mt-1">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 relative">
        <div className="container-responsive">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <div className="text-center mb-16">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <category.icon className="w-10 h-10 text-zion-cyan" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                  {category.title}
                </h2>
                <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                    className="card-futuristic p-8 hover:border-zion-cyan/40 transition-all duration-300 group hover:scale-105"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8 text-zion-cyan" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-zion-cyan">{service.price}</div>
                        <div className="text-xs text-zion-slate-light">Starting at</div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                    <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3 text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      to={service.path}
                      className="block w-full text-center button-primary"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              See what our clients say about our comprehensive service offerings
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card-futuristic p-6"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-zion-slate-light mb-6 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-zion-cyan">{testimonial.role}</div>
                    <div className="text-xs text-zion-slate-light">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join hundreds of businesses already using our AI-powered solutions to drive innovation and growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="button-primary px-8 py-4 text-lg"
              >
                Start Free Trial
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="button-secondary px-8 py-4 text-lg"
              >
                Schedule Consultation
              </motion.button>
            </div>

            <div className="mt-8 text-zion-slate-light">
              <p>Questions? Contact our team at <span className="text-zion-cyan">kleber@ziontechgroup.com</span></p>
              <p>Or call us at <span className="text-zion-cyan">+1 302 464 0950</span></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}