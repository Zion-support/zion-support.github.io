import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Code, 
  Workflow, 
  BarChart3, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  TrendingUp,
  Bot,
  Cpu,
  Database,
  Lock,
  Rocket,
  Target,
  Eye,
  FileText,
  MessageSquare,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Settings,
  GitBranch,
  Activity,
  Network,
  Server,
  Key,
  Fingerprint,
  Globe,
  Award,
  Lightbulb
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const InnovativeServicesShowcase2025: React.FC = () => {
  const featuredServices = [
    {
      icon: Code,
      title: "AI Autonomous Code Generator",
      description: "Revolutionize your development process with AI that generates production-ready code in 50+ programming languages.",
      features: [
        "AI-Powered Code Generation",
        "Multi-Language Support (50+ languages)",
        "Security-First Approach",
        "Intelligent Workflow Automation",
        "Git Integration & Version Control",
        "Database Schema Generation"
      ],
      pricing: {
        starter: "$299/month",
        professional: "$799/month",
        enterprise: "$2,499/month"
      },
      benefits: [
        "10x Faster Development",
        "70% Cost Reduction",
        "Higher Code Quality",
        "Team Productivity Boost"
      ],
      useCases: [
        "Web Application Development",
        "Mobile App Development",
        "Data Science & ML",
        "DevOps & Infrastructure"
      ],
      color: "from-blue-500 to-purple-600",
      link: "/services/ai-autonomous-code-generator",
      category: "AI Development"
    },
    {
      icon: Workflow,
      title: "AI Business Process Automation",
      description: "Transform your business operations with intelligent automation that learns, adapts, and scales efficiently.",
      features: [
        "Intelligent Process Discovery",
        "Visual Workflow Designer",
        "RPA Integration",
        "Multi-System Integration",
        "Enterprise Security",
        "Real-time Monitoring"
      ],
      pricing: {
        starter: "$499/month",
        professional: "$1,299/month",
        enterprise: "$3,999/month"
      },
      benefits: [
        "90% Time Savings",
        "60% Cost Reduction",
        "Error Elimination",
        "Scalable Operations"
      ],
      useCases: [
        "Finance & Accounting",
        "Human Resources",
        "Customer Service",
        "Sales & Marketing"
      ],
      color: "from-green-500 to-blue-600",
      link: "/services/ai-business-process-automation",
      category: "Business Automation"
    },
    {
      icon: BarChart3,
      title: "AI Predictive Analytics Platform",
      description: "Unlock the power of predictive analytics with AI that learns from your data and forecasts future trends.",
      features: [
        "Advanced ML Models",
        "Real-time Analytics",
        "AutoML Capabilities",
        "Multi-Data Source Integration",
        "Enterprise Security",
        "Predictive Monitoring"
      ],
      pricing: {
        starter: "$399/month",
        professional: "$1,199/month",
        enterprise: "$3,999/month"
      },
      benefits: [
        "Predict Future Trends",
        "Increase Revenue",
        "Reduce Risk",
        "Data-Driven Decisions"
      ],
      useCases: [
        "Customer Behavior Prediction",
        "Financial Risk Assessment",
        "Supply Chain Optimization",
        "Operational Efficiency"
      ],
      color: "from-purple-500 to-blue-600",
      link: "/services/ai-predictive-analytics-platform",
      category: "Data Analytics"
    },
    {
      icon: Shield,
      title: "AI Cybersecurity Threat Intelligence",
      description: "Stay ahead of cyber threats with AI-powered security intelligence that detects, analyzes, and responds in real-time.",
      features: [
        "AI-Powered Threat Detection",
        "24/7 Threat Monitoring",
        "Real-time Response",
        "Global Threat Intelligence",
        "Zero-Day Protection",
        "Advanced Analytics"
      ],
      pricing: {
        starter: "$599/month",
        professional: "$1,499/month",
        enterprise: "$4,999/month"
      },
      benefits: [
        "Real-time Protection",
        "Cost Reduction",
        "Compliance Ready",
        "Proactive Security"
      ],
      useCases: [
        "Malware & Ransomware",
        "Network Attacks",
        "Social Engineering",
        "Insider Threats"
      ],
      color: "from-red-500 to-orange-600",
      link: "/services/ai-cybersecurity-threat-intelligence",
      category: "Cybersecurity"
    }
  ];

  const industries = [
    {
      name: "Financial Services",
      description: "Bank-level security, compliance, and risk management",
      icon: "🏦",
      services: ["AI Predictive Analytics", "Cybersecurity", "Process Automation"]
    },
    {
      name: "Healthcare",
      description: "HIPAA-compliant solutions for patient data and medical systems",
      icon: "🏥",
      services: ["Predictive Analytics", "Cybersecurity", "Process Automation"]
    },
    {
      name: "Manufacturing",
      description: "OT security and operational efficiency optimization",
      icon: "🏭",
      services: ["Predictive Analytics", "Process Automation", "Cybersecurity"]
    },
    {
      name: "Retail & E-commerce",
      description: "Customer behavior prediction and operational optimization",
      icon: "🛍️",
      services: ["Predictive Analytics", "Process Automation", "Code Generation"]
    },
    {
      name: "Technology",
      description: "AI-powered development and infrastructure optimization",
      icon: "💻",
      services: ["Code Generation", "Predictive Analytics", "Process Automation"]
    },
    {
      name: "Government",
      description: "FedRAMP and FISMA compliance with advanced security",
      icon: "🏛️",
      services: ["Cybersecurity", "Predictive Analytics", "Process Automation"]
    }
  ];

  const testimonials = [
    {
      quote: "The AI Autonomous Code Generator has transformed our development workflow. We're building applications 10x faster with higher quality code.",
      author: "Sarah Chen",
      role: "CTO",
      company: "TechFlow Solutions",
      rating: 5
    },
    {
      quote: "AI Business Process Automation helped us reduce operational costs by 60% while improving accuracy and scalability.",
      author: "Michael Rodriguez",
      role: "Operations Director",
      company: "Global Manufacturing Inc",
      rating: 5
    },
    {
      quote: "The Predictive Analytics Platform gives us insights that were previously impossible. We're making data-driven decisions with confidence.",
      author: "Dr. Emily Watson",
      role: "Data Scientist",
      company: "InnovateCorp",
      rating: 5
    },
    {
      quote: "AI Cybersecurity Threat Intelligence provides peace of mind with real-time protection and automated response capabilities.",
      author: "David Thompson",
      role: "CISO",
      company: "SecureBank Financial",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="2025 Innovative Services Showcase - Zion Tech Group"
        description="Discover our cutting-edge AI services: Code Generation, Process Automation, Predictive Analytics, and Cybersecurity. Transform your business with innovative technology solutions."
        keywords="AI services, code generation, process automation, predictive analytics, cybersecurity, innovative technology"
        canonical="https://ziontechgroup.com/innovative-services-showcase-2025"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Lightbulb className="w-4 h-4 mr-2" />
              Innovation 2025
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              2025 Innovative Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Discover our cutting-edge AI services that are revolutionizing industries and transforming businesses. 
              From autonomous code generation to intelligent cybersecurity, we're building the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link 
                to="/services"
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Revolutionary AI Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Four groundbreaking services that will transform how you work, build, and secure your business
            </p>
          </motion.div>

          <div className="space-y-12">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-4`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-sm text-blue-400 font-medium">{service.category}</span>
                        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 mb-6 text-lg">{service.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-slate-300 text-sm">
                              <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-slate-300 text-sm">
                              <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link 
                        to={service.link}
                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-center"
                      >
                        Learn More
                      </Link>
                      <Link 
                        to="/contact"
                        className="px-6 py-3 border border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 text-center"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-slate-700/50 rounded-xl p-6">
                      <h4 className="text-white font-semibold mb-4 text-center">Pricing Plans</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300">Starter</span>
                          <span className="text-white font-semibold">{service.pricing.starter}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300">Professional</span>
                          <span className="text-white font-semibold">{service.pricing.professional}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300">Enterprise</span>
                          <span className="text-white font-semibold">{service.pricing.enterprise}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-700/50 rounded-xl p-6">
                      <h4 className="text-white font-semibold mb-4 text-center">Use Cases</h4>
                      <div className="space-y-2">
                        {service.useCases.map((useCase, useCaseIndex) => (
                          <div key={useCaseIndex} className="flex items-center text-slate-300 text-sm">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {useCase}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Tailored solutions for your industry's unique challenges and requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4 text-center">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{industry.name}</h3>
                <p className="text-slate-300 mb-4 text-center">{industry.description}</p>
                <div className="space-y-2">
                  {industry.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center text-slate-400 text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {service}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real results from real businesses that have transformed with our AI services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-blue-400">{testimonial.role}</div>
                  <div className="text-slate-400 text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-8"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto"
            >
              Join thousands of businesses that are already leveraging our innovative AI services to gain competitive advantages
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
              </Link>
              <Link 
                to="/services"
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Explore All Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-8"
            >
              Get in Touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto"
            >
              Ready to explore how our innovative AI services can transform your business? Our experts are here to help.
            </motion.p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            <Link 
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2025;