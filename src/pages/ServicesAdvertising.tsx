import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Atom, 
  Heart, 
  Cpu, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Star,
  Users,
  Clock,
  Phone,
  Mail,
  MapPin,
  Eye,
  BarChart3,
  Target,
  PieChart,
  LineChart,
  Activity,
  Cloud,
  Lock,
  Database,
  Network,
  Microscope,
  Rocket,
  Lightbulb,
  Code,
  Server,
  Smartphone,
  Monitor,
  Car,
  Factory,
  Building,
  Leaf,
  Space,
  ShoppingCart,
  BookOpen,
  DollarSign,
  Award,
  TrendingUp as TrendingUpIcon
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const ServicesAdvertising = () => {
  const allServices = [
    {
      title: "AI Edge Computing Platform",
      description: "Real-time AI processing at the edge with 5G integration and global deployment",
      icon: Cpu,
      category: "Edge Computing",
      price: "From $2,500/month",
      features: ["Edge AI Processing", "5G Integration", "Global Edge Network", "Hybrid Cloud", "ML Model Optimization"],
      benefits: ["Ultra-low latency", "Real-time processing", "Global scalability", "Cost optimization"],
      useCases: ["IoT Smart Cities", "Autonomous Vehicles", "Industrial IoT", "Healthcare Monitoring"],
      link: "/services/ai-edge-computing-platform",
      color: "from-cyan-500 to-blue-600",
      popular: true,
      marketSize: "$45.2B by 2027",
      roi: "300-500%"
    },
    {
      title: "AI Quantum Financial Trading Platform",
      description: "Revolutionary quantum computing-powered trading with AI algorithms",
      icon: TrendingUp,
      category: "Financial Technology",
      price: "From $5,000/month",
      features: ["Quantum AI Algorithms", "Quantum Entanglement", "Predictive Analytics", "High-Frequency Trading", "Portfolio Optimization"],
      benefits: ["94.7% arbitrage success", "23.7% average returns", "Ultra-fast execution", "Risk management"],
      useCases: ["Hedge Funds", "Investment Banks", "Trading Firms", "Institutional Investors"],
      link: "/services/ai-quantum-financial-trading-platform",
      color: "from-green-500 to-emerald-600",
      popular: true,
      marketSize: "$28.7B by 2026",
      roi: "400-800%"
    },
    {
      title: "AI Healthcare Diagnostics Platform",
      description: "Advanced medical imaging and diagnostic AI for improved patient outcomes",
      icon: Heart,
      category: "Healthcare Technology",
      price: "From $3,500/month",
      features: ["AI-Powered Diagnosis", "Medical Imaging AI", "Predictive Analytics", "HIPAA Compliant", "Real-time Processing"],
      benefits: ["96.8% radiology accuracy", "80% faster diagnosis", "25% cost reduction", "30% better outcomes"],
      useCases: ["Hospitals", "Medical Clinics", "Diagnostic Centers", "Healthcare Networks"],
      link: "/services/ai-healthcare-diagnostics-platform",
      color: "from-red-500 to-pink-600",
      popular: true,
      marketSize: "$67.4B by 2028",
      roi: "250-400%"
    },
    {
      title: "AI Quantum Neural Network Platform",
      description: "Next-generation quantum neural networks for complex problem solving",
      icon: Brain,
      category: "Quantum AI",
      price: "From $8,000/month",
      features: ["Quantum Neural Networks", "Hybrid Quantum-Classical", "Advanced Optimization", "Real-time Learning", "Scalable Architecture"],
      benefits: ["1000x faster training", "Unlimited scalability", "Quantum advantage", "Future-proof technology"],
      useCases: ["Research Institutions", "Tech Companies", "Government Agencies", "Universities"],
      link: "/services/ai-quantum-neural-network-platform",
      color: "from-purple-500 to-indigo-600",
      popular: false,
      marketSize: "$15.3B by 2027",
      roi: "500-1000%"
    },
    {
      title: "AI Autonomous Business Operations Platform",
      description: "Fully autonomous business process automation and optimization",
      icon: Rocket,
      category: "Business Automation",
      price: "From $6,500/month",
      features: ["Autonomous Operations", "Process Optimization", "Intelligent Decision Making", "Predictive Maintenance", "Resource Management"],
      benefits: ["90% efficiency increase", "24/7 operation", "Cost reduction", "Scalable growth"],
      useCases: ["Manufacturing", "Logistics", "Retail", "Service Industries"],
      link: "/services/ai-autonomous-business-operations-platform",
      color: "from-orange-500 to-red-600",
      popular: false,
      marketSize: "$23.8B by 2026",
      roi: "200-350%"
    },
    {
      title: "AI Customer Experience Analytics Platform",
      description: "Comprehensive customer behavior analysis and predictive insights",
      icon: Users,
      category: "Customer Analytics",
      price: "From $4,500/month",
      features: ["Behavioral Analytics", "Predictive Insights", "Real-time Monitoring", "Personalization Engine", "Sentiment Analysis"],
      benefits: ["40% customer retention", "35% conversion increase", "Real-time insights", "Personalized experiences"],
      useCases: ["E-commerce", "SaaS Companies", "Retail Chains", "Service Providers"],
      link: "/services/ai-customer-experience-analytics-platform",
      color: "from-blue-500 to-cyan-600",
      popular: false,
      marketSize: "$18.9B by 2027",
      roi: "180-300%"
    }
  ];

  const industrySolutions = [
    {
      title: "Manufacturing AI",
      description: "Smart manufacturing with predictive maintenance and quality control",
      icon: Factory,
      price: "From $12,000/month",
      marketSize: "$32.1B by 2026"
    },
    {
      title: "Financial Services AI",
      description: "AI-powered financial analysis and risk management",
      icon: BarChart3,
      price: "From $15,000/month",
      marketSize: "$45.8B by 2027"
    },
    {
      title: "Healthcare AI",
      description: "Comprehensive healthcare AI solutions and diagnostics",
      icon: Heart,
      price: "From $20,000/month",
      marketSize: "$67.4B by 2028"
    },
    {
      title: "Retail AI",
      description: "Intelligent retail solutions and customer analytics",
      icon: ShoppingCart,
      price: "From $8,000/month",
      marketSize: "$28.3B by 2026"
    },
    {
      title: "Transportation AI",
      description: "Smart transportation and logistics optimization",
      icon: Car,
      price: "From $18,000/month",
      marketSize: "$35.2B by 2027"
    },
    {
      title: "Education AI",
      description: "Personalized learning and educational technology",
      icon: BookOpen,
      price: "From $6,000/month",
      marketSize: "$19.7B by 2026"
    }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  const stats = [
    { label: "Services Delivered", value: "500+", icon: CheckCircle },
    { label: "Client Satisfaction", value: "98%", icon: Star },
    { label: "ROI Average", value: "350%", icon: TrendingUpIcon },
    { label: "Global Reach", value: "25+ Countries", icon: Globe }
  ];

  return (
    <>
      <SEO 
        title="AI & Technology Services Advertising | Zion Tech Group"
        description="Discover our comprehensive suite of AI, quantum computing, and technology services. Transform your business with cutting-edge solutions from Zion Tech Group."
        keywords="AI services, quantum computing, edge computing, healthcare AI, financial AI, business automation, Zion Tech Group, technology services"
        canonical="https://ziontechgroup.com/services-advertising"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full px-6 py-3 mb-8">
                <Award className="w-6 h-6 text-cyan-400" />
                <span className="text-cyan-400 text-lg font-medium">Premium Technology Services</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8">
                AI & Technology
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              
              <p className="text-2xl text-gray-300 mb-10 leading-relaxed max-w-4xl mx-auto">
                Transform your business with our cutting-edge AI, quantum computing, and technology solutions. 
                Experience unprecedented innovation, efficiency, and competitive advantage.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-2 shadow-2xl"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-6 h-6" />
                </Link>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center space-x-3 border-2 border-cyan-500/30 text-cyan-400 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300"
                >
                  <Phone className="w-6 h-6" />
                  <span>Call Now</span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center"
                  >
                    <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Featured Technology Services
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our most advanced and transformative services designed to reshape industries 
                and drive the future of technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {allServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 ${
                    service.popular ? 'border-cyan-500/50 bg-gradient-to-br from-slate-800/80 to-cyan-900/20' : 'border-slate-700/50'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        ⭐ Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-start space-x-6 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="inline-flex items-center space-x-2 bg-slate-700/50 rounded-full px-3 py-1 mb-3">
                        <span className="text-xs text-gray-300">{service.category}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl font-bold text-cyan-400">{service.price}</div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Market Size</div>
                        <div className="text-lg font-semibold text-green-400">{service.marketSize}</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 3).map((feature) => (
                            <li key={feature} className="flex items-center space-x-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Benefits</h4>
                        <ul className="space-y-2">
                          {service.benefits.slice(0, 3).map((benefit) => (
                            <li key={benefit} className="flex items-center space-x-2 text-sm text-gray-300">
                              <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-2">Use Cases</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.useCases.map((useCase) => (
                          <span key={useCase} className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-slate-700/30 rounded-lg p-4 mb-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-gray-400">Expected ROI</div>
                          <div className="text-2xl font-bold text-green-400">{service.roi}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-400">Market Size</div>
                          <div className="text-lg font-semibold text-blue-400">{service.marketSize}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    to={service.link}
                    className={`block w-full text-center py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      service.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transform hover:-translate-y-1'
                        : 'border-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                  >
                    Learn More & Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions Section */}
        <section className="py-20 bg-slate-800/20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Industry-Specific Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Tailored AI and technology solutions designed specifically for your industry's 
                unique challenges and opportunities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industrySolutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <div className="text-cyan-400 font-semibold mb-2">{solution.price}</div>
                  <div className="text-sm text-gray-400 mb-4">Market: {solution.marketSize}</div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-4xl mx-auto">
                Join the technology revolution with Zion Tech Group. Our innovative services 
                are designed to drive growth, efficiency, and competitive advantage.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">Free Consultation</h3>
                  <p className="text-gray-300">Get expert advice on implementing our solutions</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">Custom Solutions</h3>
                  <p className="text-gray-300">Tailored solutions for your specific needs</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">24/7 Support</h3>
                  <p className="text-gray-300">Round-the-clock technical support</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-5 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-2 shadow-2xl"
                >
                  <span>Start Your Transformation</span>
                  <ArrowRight className="w-6 h-6" />
                </Link>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center space-x-3 border-2 border-cyan-500/30 text-cyan-400 px-12 py-5 rounded-xl font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300"
                >
                  <Phone className="w-6 h-6" />
                  <span>Call {contactInfo.phone}</span>
                </a>
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-gray-400 mb-4">Visit our website for more information</p>
                <a 
                  href={contactInfo.website} 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contactInfo.website}
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesAdvertising;

