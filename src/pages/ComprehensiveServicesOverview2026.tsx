import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Network, 
  Heart, 
  Zap, 
  Globe, 
  Users, 
  DollarSign,
  Target,
  CheckCircle,
  Star,
  ArrowRight,
  Activity,
  BarChart3,
  TrendingUp,
  PieChart,
  LineChart,
  Calculator,
  Route,
  Gauge,
  Lock,
  Eye,
  Truck,
  Package,
  Warehouse,
  Smartphone,
  Monitor,
  Phone,
  Mail,
  MapPin,
  Stethoscope,
  Pill,
  Microscope,
  Database,
  Truck,
  Package,
  Warehouse
} from 'lucide-react';
import { SEO } from '../components/SEO';

const ComprehensiveServicesOverview2026 = () => {
  const serviceCategories = [
    {
      title: "AI-Powered Cybersecurity",
      description: "Advanced threat intelligence and protection",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      services: [
        {
          name: "AI Cybersecurity Threat Intelligence",
          description: "Real-time threat detection with 99.7% accuracy and automated incident response",
          price: "From $299/month",
          features: ["AI-powered threat detection", "Real-time monitoring", "Automated response", "Global threat correlation"],
          link: "/services/ai-cybersecurity-threat-intelligence"
        }
      ]
    },
    {
      title: "AI Supply Chain Optimization",
      description: "Intelligent logistics and inventory management",
      icon: Network,
      color: "from-blue-500 to-cyan-500",
      services: [
        {
          name: "AI Supply Chain Optimization",
          description: "End-to-end supply chain visibility with AI-driven forecasting and route optimization",
          price: "From $499/month",
          features: ["Demand forecasting", "Route optimization", "Inventory management", "Risk assessment"],
          link: "/services/ai-supply-chain-optimization"
        }
      ]
    },
    {
      title: "AI Healthcare Analytics",
      description: "Patient care optimization and clinical insights",
      icon: Heart,
      color: "from-green-500 to-emerald-500",
      services: [
        {
          name: "AI Healthcare Analytics",
          description: "Patient monitoring and diagnostic support with 94%+ accuracy",
          price: "From $799/month",
          features: ["Patient analytics", "Real-time monitoring", "Diagnostic support", "HIPAA compliance"],
          link: "/services/ai-healthcare-analytics"
        }
      ]
    },
    {
      title: "AI Financial Services",
      description: "Intelligent financial analytics and trading",
      icon: DollarSign,
      color: "from-purple-500 to-pink-500",
      services: [
        {
          name: "AI Financial Analytics",
          description: "Advanced financial modeling and risk management with predictive insights",
          price: "From $399/month",
          features: ["AI forecasting", "Risk assessment", "Portfolio optimization", "Real-time analytics"],
          link: "/services/ai-financial-analytics"
        },
        {
          name: "AI Financial Trading",
          description: "Algorithmic trading and market analysis with AI-driven insights",
          price: "From $599/month",
          features: ["Algorithmic trading", "Market analysis", "Risk management", "Performance optimization"],
          link: "/services/ai-financial-trading"
        }
      ]
    },
    {
      title: "AI Business Intelligence",
      description: "Data-driven decision making and insights",
      icon: Brain,
      color: "from-indigo-500 to-blue-500",
      services: [
        {
          name: "AI Business Intelligence",
          description: "Comprehensive business analytics and intelligent reporting",
          price: "From $299/month",
          features: ["Data analytics", "Predictive insights", "Custom dashboards", "Real-time reporting"],
          link: "/services/ai-business-intelligence"
        }
      ]
    },
    {
      title: "AI Content & Marketing",
      description: "Intelligent content creation and optimization",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      services: [
        {
          name: "AI Content Creation Suite",
          description: "Automated content generation and optimization for marketing",
          price: "From $199/month",
          features: ["Content generation", "SEO optimization", "Multi-language support", "Brand consistency"],
          link: "/services/ai-content-creation-suite"
        },
        {
          name: "AI-Powered SEO",
          description: "Intelligent search engine optimization and performance tracking",
          price: "From $149/month",
          features: ["Keyword optimization", "Performance tracking", "Competitor analysis", "ROI measurement"],
          link: "/services/ai-seo"
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Proven Results",
      value: "25-95%",
      description: "Measurable improvements across all services"
    },
    {
      icon: TrendingUp,
      title: "ROI",
      value: "300-800%",
      description: "Exceptional return on investment"
    },
    {
      icon: Clock,
      title: "Implementation",
      value: "2-4 weeks",
      description: "Fast deployment and setup"
    },
    {
      icon: Star,
      title: "Customer Satisfaction",
      value: "98%",
      description: "Highly rated by clients"
    }
  ];

  const testimonials = [
    {
      name: "David Chen",
      role: "CTO",
      company: "GlobalTech Solutions",
      content: "Zion Tech Group's AI services have transformed our operations. The cybersecurity platform alone has prevented multiple attacks.",
      rating: 5
    },
    {
      name: "Sarah Rodriguez",
      role: "Operations Director",
      company: "Manufacturing Corp",
      content: "The supply chain optimization platform reduced our costs by 35% and improved delivery times by 45%.",
      rating: 5
    },
    {
      name: "Dr. Emily Thompson",
      role: "Chief Medical Officer",
      company: "Healthcare Systems",
      content: "Our patient outcomes have improved dramatically with the AI healthcare analytics platform.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="Comprehensive AI Services Overview 2026 - Zion Tech Group"
        description="Explore our complete suite of AI-powered services including cybersecurity, supply chain optimization, healthcare analytics, and more. Start transforming your business today."
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
              <Brain className="w-4 h-4 mr-2 text-purple-400" />
              Comprehensive AI Services 2026
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Complete AI Services
              </span>
              <br />
              <span className="text-white">Suite</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with our comprehensive suite of AI-powered services. From cybersecurity to healthcare, 
              supply chain to finance - we have the intelligent solutions you need to succeed in 2026 and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 flex items-center group"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="border border-purple-400/30 text-purple-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-400/10 transition-all duration-300 flex items-center group"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven results and exceptional value across all our AI-powered services
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className="glass rounded-2xl p-8 border border-white/20 hover:border-purple-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">{benefit.value}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our AI Services Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions designed to address every aspect of modern business challenges
            </p>
          </motion.div>
          
          <div className="space-y-12">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-8 border border-white/20 backdrop-blur-sm"
              >
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mr-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-xl text-gray-300">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold text-white">{service.name}</h4>
                        <span className="text-purple-400 font-semibold">{service.price}</span>
                      </div>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      
                      <div className="mb-6">
                        <h5 className="text-white font-semibold mb-3">Key Features:</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <a
                        href={service.link}
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-semibold group"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real businesses using our AI services
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8 border border-white/20 backdrop-blur-sm"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-purple-400">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of organizations that trust our AI-powered services to drive innovation, 
              improve efficiency, and achieve remarkable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 flex items-center justify-center group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+13024640950"
                className="border border-purple-400/30 text-purple-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-400/10 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-purple-400 mb-4" />
              <div className="text-white font-semibold">Phone</div>
              <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-purple-400 mb-4" />
              <div className="text-white font-semibold">Email</div>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-purple-400 mb-4" />
              <div className="text-white font-semibold">Address</div>
              <div className="text-gray-300 text-center">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesOverview2026;
