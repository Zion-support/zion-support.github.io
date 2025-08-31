import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Database, 
  Shield, 
  Brain, 
  Cpu, 
  Network, 
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Target,
  Handshake,
  Lightbulb,
  Cloud,
  Smartphone,
  Building,
  Heart,
  ShoppingCart,
  PenTool,
  Leaf,
  FileText,
  Sparkles,
  Workflow,
  Truck,
  ShieldCheck,
  TrendingDown,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  Calendar,
  Mail,
  Phone,
  MapPin,
  AlertTriangle,
  Fingerprint,
  Key,
  Server,
  Wifi,
  HardDrive,
  Monitor,
  Lock,
  Zap,
  Users,
  BarChart3,
  Eye,
  Search,
  Filter,
  Archive,
  RefreshCw
} from 'lucide-react';

export default function AIDataGovernancePlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Data Discovery",
      description: "Intelligent algorithms that automatically discover, classify, and catalog data across your entire organization."
    },
    {
      icon: Shield,
      title: "Compliance Automation",
      description: "Automated compliance monitoring for GDPR, CCPA, HIPAA, and other regulatory requirements with real-time alerts."
    },
    {
      icon: Database,
      title: "Data Quality Management",
      description: "AI-driven data quality assessment, cleansing, and validation to ensure data accuracy and reliability."
    },
    {
      icon: Eye,
      title: "Data Lineage Tracking",
      description: "Complete visibility into data origins, transformations, and usage across your data ecosystem."
    },
    {
      icon: Lock,
      title: "Access Control & Security",
      description: "Intelligent access management with role-based permissions and automated security policy enforcement."
    },
    {
      icon: Search,
      title: "Advanced Analytics",
      description: "Comprehensive data governance analytics with actionable insights and performance metrics."
    }
  ];

  const benefits = [
    "Reduce data governance costs by 60%",
    "Improve data quality by 85%",
    "Automate compliance reporting",
    "Real-time data monitoring",
    "Enhanced data security",
    "Streamlined data workflows",
    "Better decision making",
    "Regulatory compliance assurance"
  ];

  const pricingPlans = [
    {
      name: "Foundation",
      price: "$2,999",
      period: "/month",
      description: "Perfect for small organizations starting their data governance journey",
      features: [
        "Basic AI data discovery",
        "Standard compliance monitoring",
        "Data quality assessment",
        "Email support",
        "Basic reporting",
        "Up to 1TB data management"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$6,999",
      period: "/month",
      description: "Ideal for growing organizations with complex data governance needs",
      features: [
        "Advanced AI data discovery",
        "Full compliance automation",
        "Comprehensive data quality",
        "Priority support",
        "Advanced analytics",
        "Unlimited data management",
        "Custom policies",
        "API integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$14,999",
      period: "/month",
      description: "For large enterprises requiring maximum data governance capabilities",
      features: [
        "Full AI data governance suite",
        "Custom AI model development",
        "Advanced compliance features",
        "Dedicated support team",
        "Multi-tenant architecture",
        "Custom integrations",
        "SLA guarantees",
        "On-premise deployment option"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Healthcare",
      description: "HIPAA compliance, patient data governance, and clinical data quality management",
      icon: Heart
    },
    {
      industry: "Financial Services",
      description: "Regulatory compliance, risk management, and data lineage for financial reporting",
      icon: DollarSign
    },
    {
      industry: "Manufacturing",
      description: "Supply chain data governance, quality control, and operational data management",
      icon: Building
    },
    {
      industry: "Retail",
      description: "Customer data governance, privacy compliance, and analytics data quality",
      icon: ShoppingCart
    },
    {
      industry: "Technology",
      description: "Product data governance, user privacy, and platform data management",
      icon: Cpu
    },
    {
      industry: "Government",
      description: "Public data governance, security compliance, and transparency requirements",
      icon: Building
    }
  ];

  const complianceStandards = [
    "GDPR",
    "CCPA",
    "HIPAA",
    "SOX",
    "PCI DSS",
    "ISO 27001",
    "NIST",
    "FedRAMP"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Data Governance Platform - Zion Tech Group"
        description="Comprehensive AI-powered data governance platform for compliance, quality management, and data security. Transform your data operations."
        keywords="AI data governance, data compliance, data quality, data security, GDPR, HIPAA"
        canonicalUrl="https://ziontechgroup.com/services/AI-Data-Governance-Platform"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Data{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Governance Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Master your data with our AI-powered governance platform. From compliance automation to data quality management, 
              our technology ensures your data is secure, compliant, and valuable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-500 hover:to-purple-600 transition-all duration-200 hover:scale-105 shadow-lg shadow-indigo-500/25"
              >
                Get Started
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-indigo-400/50 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-400/10 transition-all duration-200"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Data Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform delivers measurable results that revolutionize how organizations manage and govern their data
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-400/50 transition-all duration-300"
              >
                <CheckCircle className="w-12 h-12 text-indigo-400 mb-4" />
                <p className="text-white text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-r from-indigo-500/5 to-purple-500/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Data Governance Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI capabilities designed specifically for comprehensive data governance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-400/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform serves diverse industries with specialized data governance solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-400/50 transition-all duration-300"
              >
                <useCase.icon className="w-12 h-12 text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-gradient-to-r from-indigo-500/5 to-purple-500/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Compliance Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform ensures compliance with all major regulatory and industry standards
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10 hover:border-indigo-400/50 transition-all duration-300 text-center"
              >
                <ShieldCheck className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
                <p className="text-white font-semibold">{standard}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Data Governance Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that transforms your data governance capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white/5 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-indigo-400/50 scale-105' 
                    : 'border-white/10 hover:border-indigo-400/30'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=AI%20Data%20Governance%20Platform%20-%20{plan.name}%20Plan"
                  className="w-full bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-indigo-500 hover:to-purple-600 transition-all duration-200 text-center block"
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Master Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to learn how our AI Data Governance Platform can transform your data operations
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-indigo-400 mb-3" />
                <p className="text-white font-semibold">Phone</p>
                <a href="tel:+13024640950" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-indigo-400 mb-3" />
                <p className="text-white font-semibold">Email</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-indigo-400 mb-3" />
                <p className="text-white font-semibold">Address</p>
                <p className="text-gray-300 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI%20Data%20Governance%20Platform%20Inquiry"
                className="px-8 py-4 bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-500 hover:to-purple-600 transition-all duration-200 hover:scale-105 shadow-lg shadow-indigo-500/25"
              >
                Request Demo
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-indigo-400/50 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-400/10 transition-all duration-200"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}