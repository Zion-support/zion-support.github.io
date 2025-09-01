import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Leaf, 
  Users, 
  Shield, 
  Brain, 
  Cpu, 
  Database, 
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
  BarChart3,
  Eye,
  Search,
  Filter,
  Archive,
  RefreshCw,
  Globe2,
  TreePine,
  Recycle,
  Sun,
  Wind,
  Droplets,
  Factory,
  Car,
  Plane
} from 'lucide-react';

export default function AIESGCompliancePlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered ESG Analytics",
      description: "Intelligent algorithms that analyze environmental, social, and governance data to provide actionable insights and compliance recommendations."
    },
    {
      icon: Leaf,
      title: "Environmental Impact Tracking",
      description: "Comprehensive monitoring of carbon footprint, energy consumption, waste management, and sustainability metrics across operations."
    },
    {
      icon: Users,
      title: "Social Responsibility Monitoring",
      description: "Track diversity metrics, labor practices, community engagement, and social impact initiatives with AI-driven insights."
    },
    {
      icon: Shield,
      title: "Governance Compliance",
      description: "Automated monitoring of board diversity, executive compensation, shareholder rights, and regulatory compliance requirements."
    },
    {
      icon: Database,
      title: "Real-time Reporting",
      description: "Automated ESG reporting for investors, regulators, and stakeholders with customizable dashboards and alerts."
    },
    {
      icon: Search,
      title: "Risk Assessment",
      description: "AI-powered identification and assessment of ESG risks with predictive analytics and mitigation strategies."
    }
  ];

  const benefits = [
    "Improve ESG scores by 40%",
    "Reduce compliance costs by 50%",
    "Enhanced investor confidence",
    "Better stakeholder engagement",
    "Risk mitigation",
    "Sustainable growth",
    "Regulatory compliance",
    "Competitive advantage"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$3,499",
      period: "/month",
      description: "Perfect for small organizations beginning their ESG journey",
      features: [
        "Basic ESG analytics",
        "Environmental tracking",
        "Standard reporting",
        "Email support",
        "Basic dashboards",
        "Up to 100 employees"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "/month",
      description: "Ideal for growing organizations with comprehensive ESG needs",
      features: [
        "Advanced ESG analytics",
        "Full sustainability tracking",
        "Comprehensive reporting",
        "Priority support",
        "Advanced dashboards",
        "Unlimited employees",
        "Custom metrics",
        "API integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$16,999",
      period: "/month",
      description: "For large enterprises requiring maximum ESG capabilities",
      features: [
        "Full ESG compliance suite",
        "Custom AI model development",
        "Advanced sustainability features",
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
      industry: "Manufacturing",
      description: "Environmental compliance, carbon footprint reduction, and sustainable production practices",
      icon: Factory
    },
    {
      industry: "Financial Services",
      description: "ESG investing, risk assessment, and sustainable finance compliance",
      icon: DollarSign
    },
    {
      industry: "Energy",
      description: "Renewable energy tracking, carbon emissions, and sustainability reporting",
      icon: Sun
    },
    {
      industry: "Transportation",
      description: "Fleet emissions, fuel efficiency, and sustainable logistics",
      icon: Truck
    },
    {
      industry: "Technology",
      description: "Green computing, data center efficiency, and sustainable product development",
      icon: Cpu
    },
    {
      industry: "Retail",
      description: "Supply chain sustainability, ethical sourcing, and customer engagement",
      icon: ShoppingCart
    }
  ];

  const esgMetrics = [
    "Carbon Footprint",
    "Energy Efficiency",
    "Water Management",
    "Waste Reduction",
    "Diversity & Inclusion",
    "Labor Standards",
    "Community Impact",
    "Board Governance"
  ];

  const sustainabilityGoals = [
    "Net Zero by 2030",
    "100% Renewable Energy",
    "Zero Waste Operations",
    "Gender Equality",
    "Fair Labor Practices",
    "Sustainable Supply Chain",
    "Circular Economy",
    "Biodiversity Protection"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI ESG Compliance Platform - Zion Tech Group"
        description="Comprehensive AI-powered ESG compliance platform for environmental, social, and governance sustainability. Transform your business with intelligent ESG solutions."
        keywords="AI ESG compliance, sustainability, environmental compliance, social responsibility, governance compliance"
        canonicalUrl="https://ziontechgroup.com/services/AI-ESG-Compliance-Platform"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI ESG{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Compliance Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Drive sustainable business growth with our AI-powered ESG compliance platform. Monitor environmental impact, 
              social responsibility, and governance practices with intelligent insights and automated reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/25"
              >
                Get Started
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-green-400/50 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200"
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
              Sustainable Business Transformation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform delivers measurable ESG improvements that drive business value and stakeholder confidence
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
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300"
              >
                <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
                <p className="text-white text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-r from-green-500/5 to-blue-500/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced ESG Compliance Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI capabilities designed specifically for comprehensive ESG compliance and sustainability
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
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Metrics */}
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
              Comprehensive ESG Metrics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Track and monitor all critical environmental, social, and governance metrics
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {esgMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10 hover:border-green-400/50 transition-all duration-300 text-center"
              >
                <Leaf className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <p className="text-white font-semibold">{metric}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-r from-green-500/5 to-blue-500/5">
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
              Our platform serves diverse industries with specialized ESG compliance solutions
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
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300"
              >
                <useCase.icon className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Goals */}
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
              Sustainability Goals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Achieve ambitious sustainability targets with AI-powered insights and automation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sustainabilityGoals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10 hover:border-green-400/50 transition-all duration-300 text-center"
              >
                <Target className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <p className="text-white font-semibold text-sm">{goal}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-r from-green-500/5 to-blue-500/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              ESG Compliance Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that transforms your ESG compliance capabilities
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
                    ? 'border-green-400/50 scale-105' 
                    : 'border-white/10 hover:border-green-400/30'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
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
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=AI%20ESG%20Compliance%20Platform%20-%20{plan.name}%20Plan"
                  className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 text-center block"
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
              Ready to Transform Your ESG Compliance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to learn how our AI ESG Compliance Platform can drive sustainable business growth
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-green-400 mb-3" />
                <p className="text-white font-semibold">Phone</p>
                <a href="tel:+13024640950" className="text-green-400 hover:text-green-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-green-400 mb-3" />
                <p className="text-white font-semibold">Email</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-green-400 mb-3" />
                <p className="text-white font-semibold">Address</p>
                <p className="text-gray-300 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI%20ESG%20Compliance%20Platform%20Inquiry"
                className="px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/25"
              >
                Request Demo
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-green-400/50 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200"
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