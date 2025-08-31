import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Chip, 
  TrendingUp, 
  Zap, 
  Network, 
  BarChart3,
  CheckCircle, 
  ArrowRight,
  Star,
  Users,
  Globe,
  Rocket,
  Target,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Clock,
  ShieldCheck,
  Activity,
  Workflow,
  Database,
  Server,
  Lock,
  Cpu,
  Wifi,
  Atom,
  MessageCircle,
  Calendar,
  PenTool,
  FileText,
  Building2,
  Handshake,
  BookOpen,
  Video,
  GraduationCap,
  Lightbulb as LightbulbIcon
} from 'lucide-react';

const ComprehensiveServicesOverview = () => {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      services: [
        {
          name: "AI Business Intelligence Suite",
          description: "Comprehensive BI platform with AI-powered analytics and predictive insights",
          price: "$299/month",
          features: ["AI-powered analytics", "Interactive dashboards", "Predictive analytics", "Data integration"],
          href: "/services/ai-business-intelligence-suite"
        },
        {
          name: "AI Enterprise Automation Platform",
          description: "Complete business process automation with AI decision making",
          price: "$399/month",
          features: ["Process automation", "Workflow orchestration", "AI decision making", "Integration hub"],
          href: "/services/ai-enterprise-automation-platform"
        },
        {
          name: "AI Supply Chain Optimization Platform",
          description: "End-to-end supply chain optimization with AI-powered insights",
          price: "$499/month",
          features: ["Demand forecasting", "End-to-end visibility", "Route optimization", "Risk management"],
          href: "/services/ai-supply-chain-optimization-platform"
        },
        {
          name: "AI Cybersecurity Platform",
          description: "Advanced threat detection and security automation",
          price: "$599/month",
          features: ["Threat detection", "Automated response", "Security analytics", "Compliance monitoring"],
          href: "/services/ai-cybersecurity-platform"
        }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      services: [
        {
          name: "Cloud DevOps Platform",
          description: "Comprehensive cloud infrastructure and DevOps automation",
          price: "$199/month",
          features: ["Multi-cloud management", "CI/CD pipelines", "Infrastructure as code", "Monitoring & alerting"],
          href: "/services/cloud-devops"
        },
        {
          name: "Edge Computing Solutions",
          description: "Ultra-low latency IoT and edge computing platform",
          price: "$299/month",
          features: ["IoT platforms", "Real-time analytics", "5G integration", "Edge AI"],
          href: "/services/edge-computing-solutions"
        },
        {
          name: "Cloud FinOps Optimizer",
          description: "Cloud cost optimization and financial management platform",
          price: "$199/month",
          features: ["Cost optimization", "Resource management", "Budget tracking", "ROI analysis"],
          href: "/services/cloud-finops-optimizer"
        }
      ]
    },
    {
      title: "Micro SaaS Solutions",
      icon: Zap,
      color: "from-indigo-500 to-purple-500",
      services: [
        {
          name: "AI Sales Copilot",
          description: "Intelligent sales automation and lead management platform",
          price: "$99/month",
          features: ["Lead scoring", "Sales automation", "CRM integration", "Performance analytics"],
          href: "/services/ai-sales-copilot"
        },
        {
          name: "AI Project Management Platform",
          description: "AI-powered project planning and team collaboration",
          price: "$149/month",
          features: ["Smart planning", "Resource optimization", "Risk assessment", "Team collaboration"],
          href: "/services/ai-project-management-platform"
        },
        {
          name: "AI Marketing Automation Platform",
          description: "Intelligent marketing campaign management and optimization",
          price: "$129/month",
          features: ["Campaign automation", "A/B testing", "Customer segmentation", "ROI tracking"],
          href: "/services/ai-marketing-automation-platform"
        }
      ]
    },
    {
      title: "Industry Solutions",
      icon: Target,
      color: "from-green-500 to-emerald-500",
      services: [
        {
          name: "Healthcare AI Platform",
          description: "AI-powered healthcare analytics and patient care optimization",
          price: "$799/month",
          features: ["Patient analytics", "Clinical decision support", "Resource optimization", "Compliance management"],
          href: "/services/ai-healthcare-platform"
        },
        {
          name: "Financial Trading Platform",
          description: "AI-powered financial trading and risk management",
          price: "$999/month",
          features: ["Algorithmic trading", "Risk assessment", "Market analysis", "Portfolio optimization"],
          href: "/services/ai-financial-trading-platform"
        },
        {
          name: "Manufacturing AI Solutions",
          description: "Smart manufacturing and predictive maintenance platform",
          price: "$599/month",
          features: ["Predictive maintenance", "Quality control", "Supply chain optimization", "Performance analytics"],
          href: "/solutions/manufacturing"
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "Fast Implementation",
      value: "Days, not months",
      description: "Get up and running with our AI solutions in days, not months"
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Security",
      value: "Bank-level",
      description: "Bank-level security with SOC 2 compliance and end-to-end encryption"
    },
    {
      icon: Users,
      title: "24/7 Support",
      value: "Always available",
      description: "Round-the-clock technical support and customer success management"
    },
    {
      icon: Globe,
      title: "Global Infrastructure",
      value: "Multi-continent",
      description: "Deployed across multiple continents for optimal performance"
    },
    {
      icon: Star,
      title: "Customer Satisfaction",
      value: "98%+",
      description: "Exceptional customer satisfaction with proven ROI and results"
    },
    {
      icon: LightbulbIcon,
      title: "Innovation Leader",
      value: "Cutting-edge",
      description: "Leading-edge AI technology and continuous innovation"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp Inc.",
      content: "Zion Tech Group's AI Business Intelligence Suite transformed our data analytics. We now have real-time insights that drive our strategic decisions.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "VP of Operations",
      company: "Global Manufacturing Co.",
      content: "The AI Supply Chain Platform reduced our operational costs by 25% and improved delivery times by 40%. Game-changing technology.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Digital Director",
      company: "Retail Innovations",
      content: "Their AI Marketing Automation Platform increased our conversion rates by 35% and reduced marketing costs by 20%.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-8 shadow-2xl shadow-purple-500/25">
              <Lightbulb className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Comprehensive Services Overview
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our complete portfolio of AI-powered solutions designed to transform your business. 
              From enterprise automation to specialized industry solutions, we have everything you need.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <span className="flex items-center gap-2">
                  Explore All Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="px-8 py-4 border-2 border-purple-400/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-400" />
                <span className="text-sm">SOC 2 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-sm">500+ Clients Worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-sm">4.9/5 Customer Rating</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive suite of AI-powered solutions delivers measurable results 
              that directly impact your bottom line.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-2xl font-bold text-purple-400 mb-2">
                  {benefit.value}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive AI-powered solutions across all major business domains.
            </p>
          </motion.div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              >
                <div className="text-center mb-12">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl mb-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Cutting-edge solutions designed to transform your business operations and drive growth.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      className="group"
                    >
                      <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 h-full hover:border-purple-500/50 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105">
                        <div className="flex justify-between items-start mb-6">
                          <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                            {service.name}
                          </h4>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-purple-400">{service.price}</div>
                            <div className="text-sm text-gray-400">per month</div>
                          </div>
                        </div>
                        
                        <p className="text-gray-400 mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <ul className="space-y-3 mb-6">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                              <CheckCircle className="w-4 h-4 text-purple-400" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex items-center justify-between">
                          <a
                            href={service.href}
                            className="flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </a>
                          <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders have to say 
              about working with Zion Tech Group.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="text-center">
                  <div className="text-white font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-3xl p-12 md:p-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Join hundreds of organizations that have already accelerated their digital 
              transformation with Zion Tech Group. Let's discuss how we can help you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="px-8 py-4 border-2 border-purple-400/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-purple-400" />
                <span>Custom Solutions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Ready to revolutionize your business? Our team of experts is here to help 
                you choose the perfect solutions for your needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-gray-300">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-300">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Request Information</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                />
                <textarea
                  placeholder="Tell us about your business needs..."
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesOverview;
