import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Zap, 
  Shield, 
  Wrench, 
  Heart, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Star,
  Users,
  Globe,
  Database,
  Cpu,
  Cloud,
  Lock,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Rocket,
  Target,
  Award,
  Lightbulb
} from 'lucide-react';

export default function ComprehensiveServicesShowcase2026() {
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const featuredServices = [
    {
      id: "ai-energy-optimization-platform",
      title: "AI Energy Optimization Platform",
      description: "Intelligent energy management powered by AI. Optimize consumption, reduce costs by 25-40%, and achieve sustainability goals with real-time monitoring and predictive analytics.",
      icon: Zap,
      color: "from-green-500 to-blue-600",
      price: "From $2,999/month",
      benefits: [
        "Reduce energy costs by 25-40%",
        "Improve operational efficiency by 30%",
        "Extend equipment lifespan by 20%",
        "Achieve sustainability goals faster"
      ],
      features: [
        "AI-powered energy consumption analysis",
        "Real-time monitoring and alerts",
        "Predictive maintenance scheduling",
        "Smart grid integration"
      ],
      useCases: [
        "Manufacturing facilities",
        "Commercial buildings",
        "Data centers",
        "Industrial plants"
      ],
      href: "/services/ai-energy-optimization-platform"
    },
    {
      id: "ai-supply-chain-risk-management",
      title: "AI Supply Chain Risk Management",
      description: "Protect your supply chain with intelligent risk management. Monitor suppliers, predict disruptions, and mitigate risks in real-time with our AI-powered platform.",
      icon: Shield,
      color: "from-blue-500 to-purple-600",
      price: "From $3,999/month",
      benefits: [
        "Reduce supply chain disruptions by 60%",
        "Improve supplier performance by 40%",
        "Cut operational costs by 25%",
        "Enhance compliance and risk mitigation"
      ],
      features: [
        "Real-time supply chain monitoring",
        "AI-powered risk prediction and scoring",
        "Multi-tier supplier risk assessment",
        "Geopolitical risk analysis"
      ],
      useCases: [
        "Manufacturing companies",
        "Retail and e-commerce",
        "Healthcare and pharmaceuticals",
        "Automotive industry"
      ],
      href: "/services/ai-supply-chain-risk-management"
    },
    {
      id: "ai-predictive-maintenance-platform",
      title: "AI Predictive Maintenance Platform",
      description: "Transform your maintenance operations with AI-powered predictive maintenance. Reduce downtime by 70%, extend equipment lifespan, and optimize maintenance costs.",
      icon: Wrench,
      color: "from-orange-500 to-red-600",
      price: "From $2,499/month",
      benefits: [
        "Reduce unplanned downtime by 70%",
        "Extend equipment lifespan by 30%",
        "Cut maintenance costs by 25%",
        "Improve operational efficiency by 40%"
      ],
      features: [
        "AI-powered equipment health monitoring",
        "Predictive failure detection algorithms",
        "Real-time sensor data analysis",
        "Automated maintenance scheduling"
      ],
      useCases: [
        "Manufacturing plants",
        "Power generation facilities",
        "Oil and gas operations",
        "Transportation fleets"
      ],
      href: "/services/ai-predictive-maintenance-platform"
    },
    {
      id: "ai-fraud-detection-platform",
      title: "AI Fraud Detection Platform",
      description: "Protect your business with AI-powered fraud detection. Reduce fraud losses by 80%, improve detection accuracy by 90%, and prevent fraud in real-time.",
      icon: Shield,
      color: "from-red-500 to-pink-600",
      price: "From $4,999/month",
      benefits: [
        "Reduce fraud losses by 80%",
        "Improve detection accuracy by 90%",
        "Cut false positive rates by 60%",
        "Real-time fraud prevention"
      ],
      features: [
        "Real-time transaction monitoring",
        "AI-powered fraud pattern detection",
        "Behavioral biometrics analysis",
        "Device fingerprinting"
      ],
      useCases: [
        "Financial institutions",
        "E-commerce platforms",
        "Insurance companies",
        "Healthcare providers"
      ],
      href: "/services/ai-fraud-detection-platform"
    },
    {
      id: "ai-customer-experience-optimization",
      title: "AI Customer Experience Optimization",
      description: "Transform your customer experience with AI-powered optimization. Increase satisfaction by 45%, improve retention by 35%, and boost customer lifetime value.",
      icon: Heart,
      color: "from-pink-500 to-purple-600",
      price: "From $3,499/month",
      benefits: [
        "Increase customer satisfaction by 45%",
        "Improve customer retention by 35%",
        "Boost customer lifetime value by 50%",
        "Reduce customer churn by 40%"
      ],
      features: [
        "AI-powered customer journey mapping",
        "Real-time sentiment analysis",
        "Personalized experience recommendations",
        "Predictive customer behavior modeling"
      ],
      useCases: [
        "E-commerce platforms",
        "SaaS companies",
        "Financial services",
        "Healthcare providers"
      ],
      href: "/services/ai-customer-experience-optimization"
    }
  ];

  const stats = [
    {
      value: "25-80%",
      label: "Cost Reduction",
      description: "Average cost savings across all services"
    },
    {
      value: "60-90%",
      label: "Efficiency Improvement",
      description: "Performance enhancement metrics"
    },
    {
      value: "24/7",
      label: "AI Monitoring",
      description: "Continuous intelligent oversight"
    },
    {
      value: "500+",
      label: "Global Clients",
      description: "Trusted by businesses worldwide"
    }
  ];

  return (
    <>
      <SEO 
        title="Comprehensive AI Services Showcase 2026 - Zion Tech Group"
        description="Discover our comprehensive suite of AI-powered micro SAAS services for 2026. From energy optimization to fraud detection, transform your business with cutting-edge AI solutions."
        canonical="/comprehensive-services-showcase-2026"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-purple-500/20 rounded-full">
                  <Rocket className="h-12 w-12 text-purple-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Comprehensive AI Services Showcase 2026
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto">
                Discover our comprehensive suite of AI-powered micro SAAS services designed to transform your business. 
                From energy optimization to fraud detection, experience the future of intelligent business solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2"
                >
                  Explore All Services
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-800 transition-colors"
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="p-4 bg-purple-500/20 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="h-10 w-10 text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-purple-400 mb-2">{stat.label}</div>
                  <p className="text-slate-400">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Featured AI-Powered Services
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Explore our comprehensive suite of innovative micro SAAS services designed to transform 
                every aspect of your business operations.
              </p>
            </motion.div>

            <div className="space-y-12">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden hover:border-purple-500/50 transition-colors"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-3 bg-gradient-to-r ${service.color} rounded-full`}>
                          <service.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                          <p className="text-purple-400 font-semibold">{service.price}</p>
                        </div>
                      </div>
                      
                      <p className="text-slate-300 mb-6">{service.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Key Benefits</h4>
                          <ul className="space-y-2">
                            {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                                <span className="text-slate-300 text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                          <ul className="space-y-2">
                            {service.features.slice(0, 2).map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-blue-400 flex-shrink-0" />
                                <span className="text-slate-300 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
                        >
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="border border-slate-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors"
                        >
                          Schedule Demo
                        </motion.button>
                      </div>
                    </div>
                    
                    <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-700/50">
                      <h4 className="text-lg font-semibold text-white mb-4">Perfect For</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {service.useCases.map((useCase, useCaseIndex) => (
                          <div key={useCaseIndex} className="bg-slate-700/50 p-3 rounded-lg text-center">
                            <span className="text-slate-300 text-sm">{useCase}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Zion Tech Group Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                We combine cutting-edge AI technology with deep industry expertise to deliver 
                transformative solutions that drive real business results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <div className="p-4 bg-blue-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Brain className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">AI-First Approach</h3>
                <p className="text-slate-300">
                  Our services are built from the ground up with AI and machine learning at their core, 
                  ensuring maximum intelligence and automation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center"
              >
                <div className="p-4 bg-green-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
                <p className="text-slate-300">
                  Our clients consistently achieve significant improvements in efficiency, cost savings, 
                  and operational performance across all services.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="p-4 bg-purple-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Expert Support</h3>
                <p className="text-slate-300">
                  Dedicated support teams and on-site consultation ensure successful implementation 
                  and ongoing optimization of your AI solutions.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Contact our team to learn how our AI-powered services can revolutionize your operations 
                and drive unprecedented growth and efficiency.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <div className="p-4 bg-purple-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-slate-300">{contactInfo.phone}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center"
              >
                <div className="p-4 bg-purple-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-slate-300">{contactInfo.email}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="p-4 bg-purple-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-slate-300">{contactInfo.address}</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 mx-auto"
              >
                Schedule a Comprehensive Consultation
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}