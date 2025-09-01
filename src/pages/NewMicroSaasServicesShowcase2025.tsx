import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  FileText, 
  Brain, 
  TrendingUp, 
  Truck, 
  Shield, 
  Users, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  Star,
  ArrowRight,
  Lock,
  Globe,
  Smartphone,
  Heart,
  DollarSign,
  Package,
  Route,
  Target,
  Zap,
  StarIcon
} from 'lucide-react';

const NewMicroSaasServicesShowcase2025: React.FC = () => {
  const services = [
    {
      icon: <FileText className="w-12 h-12" />,
      title: "AI Legal Document Automation Platform",
      description: "Transform your legal practice with AI-powered document automation, compliance monitoring, and collaborative workflows.",
      features: [
        "Smart document generation with AI templates",
        "Real-time compliance monitoring",
        "Collaborative editing workflows",
        "Advanced analytics dashboard",
        "HIPAA and legal compliance",
        "24/7 AI support"
      ],
      pricing: {
        starter: "$99/month",
        professional: "$299/month",
        enterprise: "$799/month"
      },
      benefits: [
        "Reduce document creation time by 80%",
        "Eliminate 95% of compliance errors",
        "Save $50,000+ annually",
        "Improve client satisfaction"
      ],
      link: "/services/ai-legal-document-automation-platform",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI Healthcare Analytics Platform",
      description: "Revolutionize healthcare delivery with AI-powered analytics, predictive insights, and population health management.",
      features: [
        "AI-powered disease prediction",
        "Real-time patient monitoring",
        "Population health insights",
        "Care team collaboration",
        "HIPAA compliance",
        "Multi-specialty support"
      ],
      pricing: {
        starter: "$2,499/month",
        professional: "$4,999/month",
        enterprise: "$9,999/month"
      },
      benefits: [
        "Reduce readmission rates by 25%",
        "Improve patient outcomes by 30%",
        "Save $2M+ annually",
        "Reduce physician burnout"
      ],
      link: "/services/ai-healthcare-analytics-platform",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "AI Financial Trading Platform",
      description: "Transform your trading with AI-powered financial analysis, algorithmic trading, and intelligent risk management.",
      features: [
        "AI-powered market predictions",
        "Real-time market analysis",
        "Intelligent risk management",
        "Multi-strategy support",
        "High-frequency trading",
        "Performance analytics"
      ],
      pricing: {
        starter: "$499/month",
        professional: "$1,999/month",
        enterprise: "$4,999/month"
      },
      benefits: [
        "Increase trading profits by 35%",
        "Reduce trading losses by 40%",
        "Execute trades 10x faster",
        "Access institutional-grade tools"
      ],
      link: "/services/ai-financial-trading-platform",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "AI Supply Chain Optimization Platform",
      description: "Optimize your supply chain with AI-powered demand forecasting, route optimization, and inventory management.",
      features: [
        "AI demand forecasting",
        "Route optimization",
        "Risk management",
        "Supplier management",
        "Inventory optimization",
        "Real-time visibility"
      ],
      pricing: {
        starter: "$799/month",
        professional: "$2,499/month",
        enterprise: "$5,999/month"
      },
      benefits: [
        "Reduce supply chain costs by 25-35%",
        "Improve delivery performance by 40%",
        "Reduce inventory costs by 30%",
        "99% on-time delivery rates"
      ],
      link: "/services/ai-supply-chain-optimization-platform",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: "AI Real Estate Investment Platform",
      description: "Transform your real estate investments with AI-powered market analysis, property valuation, and portfolio management.",
      features: [
        "AI market analysis",
        "Property valuation AI",
        "ROI prediction engine",
        "Location intelligence",
        "Investment calculator",
        "Portfolio management"
      ],
      pricing: {
        starter: "$149/month",
        professional: "$399/month",
        enterprise: "$1,299/month"
      },
      benefits: [
        "Increase investment returns by 25-40%",
        "Save weeks of research time",
        "Reduce investment risk",
        "Optimize portfolio performance"
      ],
      link: "/services/ai-real-estate-investment-platform",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const overallBenefits = [
    {
      icon: <StarIcon className="w-8 h-8" />,
      title: "Cutting-Edge AI Technology",
      description: "Leverage the latest advances in artificial intelligence and machine learning"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise-Grade Security",
      description: "Bank-level security with SOC 2 compliance and data encryption"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rapid Implementation",
      description: "Get up and running in days, not months with our streamlined onboarding"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Support",
      description: "24/7 technical support and dedicated customer success managers"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>New Micro SAAS Services 2025 - Zion Tech Group</title>
        <meta name="description" content="Discover our revolutionary new micro SAAS services for 2025. AI-powered solutions for legal, healthcare, financial trading, and supply chain optimization." />
        <meta name="keywords" content="micro SAAS, AI services, legal automation, healthcare analytics, financial trading, supply chain optimization, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/new-micro-saas-services-2025" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              New Micro SAAS Services
              <span className="text-blue-400 block">2025</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionary AI-powered micro SAAS solutions designed to transform your business. 
              From legal automation to healthcare analytics, financial trading to supply chain optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                <Smartphone className="mr-2 w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
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
              Revolutionary AI-Powered Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Five cutting-edge micro SAAS services designed for the modern enterprise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <div className="text-white">{service.icon}</div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Pricing:</h4>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-gray-400">Starter</div>
                      <div className="text-white font-semibold">{service.pricing.starter}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-400">Professional</div>
                      <div className="text-white font-semibold">{service.pricing.professional}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-400">Enterprise</div>
                      <div className="text-white font-semibold">{service.pricing.enterprise}</div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={service.link}
                  className="w-full block text-center py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-300"
                >
                  Learn More
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overall Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
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
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Proven expertise in delivering enterprise-grade AI solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {overallBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-blue-400 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
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
            <p className="text-xl text-blue-100 mb-8">
              Join leading companies using our AI-powered micro SAAS solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Need Help Choosing the Right Service?
          </h3>
          <p className="text-gray-300 mb-6">
            Our AI experts are here to guide you to the perfect solution for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-gray-300">
              <Smartphone className="w-5 h-5 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Globe className="w-5 h-5 mr-2" />
              <span>ziontechgroup.com</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Lock className="w-5 h-5 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewMicroSaasServicesShowcase2025;