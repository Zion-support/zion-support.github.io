import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Heart, 
  TrendingUp, 
  Zap, 
  Users, 
  Database, 
  Globe,
  CheckCircle,
  Star,
  Clock,
  Target,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';

const InnovativeServicesShowcase2025: React.FC = () => {
  const featuredServices = [
    {
      id: 1,
      name: "AI-Powered Enterprise Resource Planning",
      description: "Transform business operations with intelligent automation, predictive analytics, and real-time optimization powered by cutting-edge AI technology.",
      category: "Enterprise AI",
      price: "From $299/month",
      features: [
        "AI-powered demand forecasting with 95% accuracy",
        "Real-time inventory optimization using machine learning",
        "Predictive maintenance scheduling for equipment",
        "Intelligent workforce planning and scheduling"
      ],
      benefits: [
        "Reduce operational costs by 25-40%",
        "Improve inventory turnover by 30-50%",
        "Increase workforce productivity by 20-35%",
        "Reduce planning cycle time from weeks to hours"
      ],
      icon: Brain,
      color: "from-blue-600 to-purple-700",
      link: "/services/ai-enterprise-resource-planning"
    },
    {
      id: 2,
      name: "AI Cybersecurity Threat Intelligence",
      description: "Stay ahead of cyber threats with our advanced AI-powered security platform that provides real-time threat detection, intelligence, and automated response.",
      category: "Cybersecurity AI",
      price: "From $199/month",
      features: [
        "Real-time threat detection with 99.9% accuracy using AI/ML",
        "Advanced behavioral analysis and anomaly detection",
        "Zero-day threat identification and mitigation",
        "Global threat intelligence sharing network"
      ],
      benefits: [
        "Reduce security incidents by 85-95%",
        "Decrease incident response time from hours to minutes",
        "Achieve 99.9% threat detection accuracy",
        "Comply with industry security standards automatically"
      ],
      icon: Shield,
      color: "from-red-600 to-purple-700",
      link: "/services/ai-cybersecurity-threat-intelligence"
    },
    {
      id: 3,
      name: "AI Healthcare Predictive Analytics",
      description: "Transform healthcare delivery with intelligent predictive analytics, early disease detection, and personalized treatment optimization powered by AI.",
      category: "Healthcare AI",
      price: "From $399/month",
      features: [
        "AI-powered disease prediction with 94% accuracy",
        "Real-time patient monitoring and early warning systems",
        "Predictive analytics for treatment outcomes",
        "Automated medical image analysis and diagnosis"
      ],
      benefits: [
        "Reduce hospital readmissions by 30-45%",
        "Improve diagnostic accuracy by 25-40%",
        "Decrease treatment costs by 20-35%",
        "Reduce medical errors by 60-80%"
      ],
      icon: Heart,
      color: "from-green-600 to-blue-700",
      link: "/services/ai-healthcare-predictive-analytics"
    },
    {
      id: 4,
      name: "AI Financial Trading Platform",
      description: "Revolutionize your trading with intelligent algorithms, real-time market analysis, and automated portfolio optimization powered by cutting-edge AI technology.",
      category: "Financial AI",
      price: "From $99/month",
      features: [
        "AI-powered market prediction with 87% accuracy",
        "Real-time algorithmic trading and execution",
        "Advanced risk management and portfolio optimization",
        "Multi-asset trading (stocks, forex, crypto, commodities)"
      ],
      benefits: [
        "Increase trading returns by 25-40%",
        "Reduce trading costs by 30-50%",
        "Minimize portfolio risk by 40-60%",
        "Achieve 24/7 market coverage with automated trading"
      ],
      icon: TrendingUp,
      color: "from-blue-600 to-green-700",
      link: "/services/ai-financial-trading-platform"
    }
  ];

  const additionalServices = [
    {
      name: "AI Supply Chain Optimization",
      description: "Optimize supply chains with AI-powered demand forecasting and inventory management",
      price: "From $199/month",
      link: "/services/ai-supply-chain-optimization"
    },
    {
      name: "AI Cybersecurity Platform",
      description: "Comprehensive cybersecurity solution with advanced threat detection",
      price: "From $299/month",
      link: "/services/ai-cybersecurity-platform"
    },
    {
      name: "AI Healthcare Platform",
      description: "End-to-end healthcare AI solution for hospitals and clinics",
      price: "From $499/month",
      link: "/services/ai-healthcare-platform"
    },
    {
      name: "AI Quantum Hybrid Platform",
      description: "Next-generation quantum computing and AI hybrid solutions",
      price: "From $999/month",
      link: "/services/ai-quantum-hybrid-platform"
    }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    website: "https://ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown DE 19709"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full">
                <Brain className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Innovative AI Services 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-blue-100">
              Discover Zion Tech Group's cutting-edge micro SAAS, IT infrastructure, and AI services 
              that are transforming industries and driving digital innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Explore Services
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured AI Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our flagship AI-powered solutions that deliver measurable business impact 
              and competitive advantages across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className="w-12 h-12 text-white" />
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                  <p className="text-white/90">{service.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                    <a 
                      href={service.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 2).map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <Star className="w-3 h-3 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                        Key Benefits
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <Target className="w-3 h-3 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Additional AI Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our complete portfolio of AI-powered solutions designed 
              to meet diverse business needs and industry requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-600">{service.price}</span>
                  <a 
                    href={service.link}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    View Details →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with industry expertise to deliver 
              solutions that drive real business value and competitive advantage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-First Approach</h3>
              <p className="text-gray-600">
                We leverage the latest AI and machine learning technologies to create 
                intelligent solutions that adapt and improve over time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Security</h3>
              <p className="text-gray-600">
                All our solutions are built with enterprise-grade security and compliance 
                standards to protect your business and data.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Support</h3>
              <p className="text-gray-600">
                Our team of AI experts and industry specialists provide comprehensive 
                support and guidance throughout your implementation journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact us today to learn how our AI-powered solutions can drive 
              innovation and growth in your organization.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-200 mb-2" />
                <p className="text-blue-100">Call Us</p>
                <p className="font-semibold">{contactInfo.phone}</p>
              </div>
              
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-200 mb-2" />
                <p className="text-blue-100">Email Us</p>
                <p className="font-semibold">{contactInfo.email}</p>
              </div>
              
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-200 mb-2" />
                <p className="text-blue-100">Visit Us</p>
                <p className="font-semibold text-sm">{contactInfo.address}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`mailto:${contactInfo.email}?subject=AI Services Inquiry`}
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Started Today
              </a>
              <a 
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
              >
                Visit Website <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2025;
