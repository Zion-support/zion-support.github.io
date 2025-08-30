import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Cpu, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Settings,
  BarChart3,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  ShieldCheck,
  Globe2,
  Leaf,
  Satellite,
  Atom,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  DollarSign,
  Heart,
  Lock,
  Cloud,
  Target,
  Eye,
  RefreshCw,
  AlertTriangle,
  Smile,
  CheckSquare,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function InnovativeServicesShowcase2025() {
  const heroStats = [
    { label: 'AI Solutions', value: '50+', icon: Brain },
    { label: 'Enterprise Clients', value: '200+', icon: Building },
    { label: 'Success Rate', value: '98%', icon: CheckCircle },
    { label: 'Years Experience', value: '15+', icon: Star }
  ];

  const featuredServices = [
    {
      name: 'AI Edge Computing Platform',
      description: 'Deploy AI models directly to edge devices for real-time processing and reduced latency',
      icon: Cpu,
      href: '/services/ai-edge-computing-platform',
      color: 'from-purple-600 to-pink-600',
      features: ['Real-time AI processing', 'Edge security', 'IoT integration'],
      pricing: 'Starting at $2,500/month',
      category: 'AI Infrastructure'
    },
    {
      name: 'AI Digital Twin Platform',
      description: 'Create intelligent digital replicas with real-time data synchronization and AI analytics',
      icon: Monitor,
      href: '/services/ai-digital-twin-platform',
      color: 'from-blue-600 to-cyan-600',
      features: ['3D visualization', 'Predictive maintenance', 'Real-time sync'],
      pricing: 'Starting at $3,500/month',
      category: 'AI Analytics'
    },
    {
      name: 'AI Customer Experience Analytics',
      description: 'Transform customer experience with AI-powered analytics and personalization',
      icon: BarChart3,
      href: '/services/ai-customer-experience-analytics',
      color: 'from-green-600 to-emerald-600',
      features: ['Sentiment analysis', 'Journey mapping', 'Behavior prediction'],
      pricing: 'Starting at $1,500/month',
      category: 'Micro SAAS'
    },
    {
      name: 'AI Cybersecurity Platform',
      description: 'AI-powered threat detection and response for comprehensive security',
      icon: Shield,
      href: '/services/ai-cybersecurity-platform',
      color: 'from-red-600 to-orange-600',
      features: ['Threat detection', 'Real-time response', 'Compliance automation'],
      pricing: 'Starting at $5,000/month',
      category: 'AI Security'
    },
    {
      name: 'AI Healthcare Analytics Platform',
      description: 'Predictive diagnostics and care optimization powered by AI',
      icon: Heart,
      href: '/services/ai-healthcare-analytics-platform',
      color: 'from-green-600 to-emerald-600',
      features: ['Predictive analytics', 'Diagnostic support', 'Care optimization'],
      pricing: 'Starting at $8,000/month',
      category: 'AI Healthcare'
    },
    {
      name: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with predictive analytics and optimization',
      icon: Network,
      href: '/services/ai-supply-chain-optimization',
      color: 'from-orange-600 to-red-600',
      features: ['Demand forecasting', 'Route optimization', 'Inventory management'],
      pricing: 'Starting at $6,000/month',
      category: 'AI Operations'
    }
  ];

  const serviceCategories = [
    {
      name: 'AI Infrastructure',
      icon: Cpu,
      color: 'from-purple-600 to-pink-600',
      description: 'Scalable AI infrastructure and edge computing solutions',
      services: [
        { name: 'AI Edge Computing Platform', href: '/services/ai-edge-computing-platform' },
        { name: 'AI DevOps Automation Platform', href: '/services/ai-devops-automation-platform' },
        { name: 'AI IoT Edge Computing Platform', href: '/services/ai-iot-edge-computing-platform' }
      ]
    },
    {
      name: 'AI Analytics & Intelligence',
      icon: Brain,
      color: 'from-blue-600 to-cyan-600',
      description: 'Advanced analytics and business intelligence powered by AI',
      services: [
        { name: 'AI Digital Twin Platform', href: '/services/ai-digital-twin-platform' },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Content Optimizer Pro', href: '/services/ai-content-optimizer-pro' }
      ]
    },
    {
      name: 'AI Security & Compliance',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      description: 'Comprehensive cybersecurity and compliance solutions',
      services: [
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform' },
        { name: 'AI Cybersecurity Threat Detection', href: '/services/ai-cybersecurity-threat-detection' },
        { name: 'Zero Trust Network Architecture', href: '/services/ZeroTrustNetworkArchitecture' }
      ]
    },
    {
      name: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'from-green-600 to-emerald-600',
      description: 'Specialized software-as-a-service solutions for specific business needs',
      services: [
        { name: 'AI Customer Experience Analytics', href: '/services/ai-customer-experience-analytics' },
        { name: 'AI Project Management Platform', href: '/services/ai-project-management-platform' },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation' }
      ]
    }
  ];

  const benefits = [
    {
      title: "Cutting-Edge Innovation",
      description: "Access to the latest AI technologies and methodologies",
      icon: Sparkles,
      details: ["State-of-the-art AI models", "Latest research integration", "Continuous innovation"]
    },
    {
      title: "Scalable Solutions",
      description: "Solutions that grow with your business needs",
      icon: TrendingUp,
      details: ["Flexible architecture", "Pay-as-you-grow pricing", "Enterprise-grade scalability"]
    },
    {
      title: "Expert Support",
      description: "Dedicated support from AI and technology experts",
      icon: Users,
      details: ["24/7 technical support", "Implementation guidance", "Ongoing optimization"]
    },
    {
      title: "Proven Results",
      description: "Track record of successful implementations and measurable outcomes",
      icon: CheckCircle,
      details: ["98% client satisfaction", "Measurable ROI", "Case study validation"]
    }
  ];

  const testimonials = [
    {
      quote: "Zion Tech Group's AI Edge Computing Platform transformed our IoT infrastructure, reducing latency by 80% and enabling real-time decision making.",
      author: "Sarah Johnson",
      title: "CTO, SmartCity Solutions",
      company: "SmartCity Solutions"
    },
    {
      quote: "The AI Digital Twin Platform gave us unprecedented visibility into our manufacturing operations, improving efficiency by 35%.",
      author: "Michael Chen",
      title: "Operations Director",
      company: "Global Manufacturing Inc."
    },
    {
      quote: "AI Customer Experience Analytics helped us increase customer satisfaction scores by 40% and reduce churn by 25%.",
      author: "Emily Rodriguez",
      title: "VP of Customer Success",
      company: "E-commerce Plus"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              2025 Innovative Services Showcase
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Next-Generation
              <span className="block text-zion-cyan">AI Solutions</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Discover our cutting-edge AI, IT, and Micro SAAS solutions designed to transform 
              businesses and drive innovation in 2025 and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan-dark transition-colors"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/20 transition-colors"
              >
                Get Started
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {heroStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zion-slate-light">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Services 2025
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our most innovative and impactful solutions designed to address the 
              critical challenges of modern businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs text-zion-cyan bg-zion-cyan/20 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-4">
                  <span className="text-zion-cyan font-semibold">{service.pricing}</span>
                </div>

                <Link
                  to={service.href}
                  className="inline-flex items-center w-full justify-center px-4 py-2 bg-zion-cyan text-white rounded-lg font-medium hover:bg-zion-cyan-dark transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Service Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Explore our organized service categories designed to meet every aspect 
              of your business technology needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{category.name}</h3>
                    <p className="text-zion-slate-light">{category.description}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {category.services.map((service, idx) => (
                    <li key={idx}>
                      <Link 
                        to={service.href}
                        className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors"
                      >
                        <ArrowRight className="w-4 h-4 mr-3 flex-shrink-0" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              We deliver exceptional value through innovation, expertise, and proven results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light mb-4">{benefit.description}</p>
                <ul className="space-y-2 text-sm text-zion-slate-light">
                  {benefit.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <CheckSquare className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Hear from our clients about the transformative impact of our solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mr-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.author}</div>
                    <div className="text-zion-slate-light text-sm">{testimonial.title}</div>
                    <div className="text-zion-cyan text-sm">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-zion-slate-light italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join leading organizations that are already leveraging our innovative 
              solutions to gain competitive advantages and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan-dark transition-colors"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/20 transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-zion-cyan mb-2" />
              <span className="text-zion-slate-light text-sm">Phone</span>
              <a href="tel:+13024640950" className="text-white hover:text-zion-cyan transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-zion-cyan mb-2" />
              <span className="text-zion-slate-light text-sm">Email</span>
              <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-zion-cyan transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-zion-cyan mb-2" />
              <span className="text-zion-slate-light text-sm">Address</span>
              <span className="text-white text-center">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
