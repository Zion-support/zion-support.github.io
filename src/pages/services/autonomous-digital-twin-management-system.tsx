import React from 'react';
import { motion } from 'framer-motion';
import {

  Cpu, 
  Zap, 
  Brain, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Globe,
  Database,
  Activity,
  Eye,
  Settings,
  Download,
  Share2,
  Filter,
  Search,
  AlertTriangle,
  Lightbulb,
  BarChart,
  PieChart,
  LineChart,
  Activity as ActivityIcon,
  Eye as EyeIcon,
  Settings as SettingsIcon,
  Download as DownloadIcon,
  Share2 as Share2Icon,
  Filter as FilterIcon,
  Search as SearchIcon,
  AlertTriangle as AlertTriangleIcon,
  Lightbulb as LightbulbIcon,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  Target,
  Users,
  Shield,
  Cloud,
  Server,
  HardDrive,
  Wifi,
  Bluetooth,
  Smartphone,
  Monitor,
  Tablet,
  Laptop,
  Globe2,
  Database as DatabaseIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  CheckCircle as CheckCircleIcon,
  ArrowRight as ArrowRightIcon,
  Star as StarIcon,
  Clock as ClockIcon,
  Globe as GlobeIcon,
  Database as DatabaseIcon2,
  Activity as ActivityIcon2,
  Eye as EyeIcon2,
  Settings as SettingsIcon2,
  Download as DownloadIcon2,
  Share2 as Share2Icon2,
  Filter as FilterIcon2,
  Search as SearchIcon2,
  AlertTriangle as AlertTriangleIcon2,
  Lightbulb as LightbulbIcon2,
  BarChart as BarChartIcon2,
  PieChart as PieChartIcon2,
  LineChart as LineChartIcon2,
  Network,
  Lock,
  Key,
  Fingerprint,
  Radar,
  Satellite,
  Leaf,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AutonomousDigitalTwinManagementSystem() {

  const features = [
    {

      icon: Brain,
      title: "AI-Powered Twin Creation",
      description: "Advanced machine learning algorithms that automatically create and maintain digital twins of physical assets",
      benefits: ["Automated twin generation", "Real-time synchronization", "Intelligent asset mapping"]
    },
    {

      icon: Cpu,
      title: "Real-Time Data Integration",
      description: "Seamlessly integrate IoT sensors, SCADA systems, and enterprise data for comprehensive twin modeling",
      benefits: ["Multi-source integration", "Real-time updates", "Data validation"]
    },
    {

      icon: Zap,
      title: "Predictive Analytics & Maintenance",
      description: "AI-driven predictive maintenance that identifies potential failures before they occur",
      benefits: ["Failure prediction", "Maintenance optimization", "Cost reduction"]
    },
    {

      icon: Target,
      title: "Autonomous Decision Making",
      description: "Self-learning systems that make autonomous decisions to optimize asset performance",
      benefits: ["Autonomous optimization", "Performance improvement", "Efficiency gains"]
    },
    {

      icon: Shield,
      title: "Cybersecurity & Compliance",
      description: "Built-in security features and compliance monitoring for critical infrastructure",
      benefits: ["Threat protection", "Compliance monitoring", "Data security"]
    },
    {

      icon: Network,
      title: "Scalable Architecture",
      description: "Cloud-native architecture that scales from single assets to entire cities",
      benefits: ["Horizontal scaling", "Cloud deployment", "Edge computing"]
    }
  ];

  const pricingPlans = [
    {

      name: "Starter",
      price: "$799",
      period: "/month",
      description: "Perfect for small organizations starting with digital twin technology",
      features: [
        "Up to 10 digital twins",
        "Basic IoT integration",
        "Standard analytics",
        "Email support",
        "Monthly reports",
        "Basic AI insights"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {

      name: "Professional",
      price: "$1,999",
      period: "/month",
      description: "Ideal for growing companies with complex asset management needs",
      features: [
        "Up to 100 digital twins",
        "Advanced IoT integration",
        "Predictive analytics",
        "Priority support",
        "Real-time dashboards",
        "Advanced AI algorithms",
        "Custom integrations",
        "White-label options"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {

      name: "Enterprise",
      price: "$4,999",
      period: "/month",
      description: "For large organizations requiring enterprise-grade digital twin management",
      features: [
        "Unlimited digital twins",
        "Custom twin development",
        "Advanced AI models",
        "24/7 dedicated support",
        "Custom integrations",
        "Advanced security",
        "API access",
        "On-premise deployment"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {

      industry: "Manufacturing",
      description: "Create digital twins of production lines, equipment, and processes for optimization",
      metrics: ["Production efficiency", "Equipment uptime", "Quality improvement"]
    },
    {

      industry: "Smart Cities",
      description: "Manage urban infrastructure with digital twins for better city planning and operations",
      metrics: ["Infrastructure efficiency", "Resource optimization", "Citizen satisfaction"]
    },
    {

      industry: "Energy & Utilities",
      description: "Monitor power plants, grids, and renewable energy systems with intelligent twins",
      metrics: ["Energy efficiency", "Grid reliability", "Renewable integration"]
    },
    {

      industry: "Healthcare",
      description: "Create digital twins of medical devices and patient monitoring systems",
      metrics: ["Device reliability", "Patient outcomes", "Operational efficiency"]
    }
  ];

  const twinTypes = [
    { icon: Server, name: "Asset Twins", description: "Digital representations of physical equipment and machinery" },
    { icon: Network, name: "System Twins", description: "Complete system modeling including interdependencies" },
    { icon: Users, name: "Process Twins", description: "Workflow and business process digitalization" },
    { icon: Globe, name: "Environment Twins", description: "Environmental and contextual modeling" },
    { icon: Database, name: "Data Twins", description: "Data flow and information architecture modeling" },
    { icon: Shield, name: "Security Twins", description: "Cybersecurity and threat modeling systems" }
  ];

  const integrationCapabilities = [
    "IoT Sensors & Devices",
    "SCADA Systems",
    "ERP & MES Systems",
    "Cloud Platforms",
    "Edge Computing",
    "5G Networks",
    "Blockchain",
    "AI/ML Platforms"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              Autonomous Digital Twin Management System
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              The Future of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"> Asset Management</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Our autonomous digital twin management system creates intelligent, self-learning digital representations 
              of your physical assets, enabling predictive maintenance, optimization, and autonomous decision-making.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/25"
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              
              <button className="inline-flex items-center px-8 py-4 border-2 border-indigo-400/50 text-indigo-400 font-semibold rounded-xl hover:bg-indigo-400/10 hover:border-indigo-400 transition-all duration-300">
                <span className="flex items-center gap-2">
                  Watch Demo
                  <Play className="w-5 h-5" />
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Digital Twin Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge features that revolutionize how you manage and optimize your assets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Twin Types Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Twin Types
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Create digital representations of every aspect of your operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {twinTypes.map((twin, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-8 text-center hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <twin.icon className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{twin.name}</h3>
                <p className="text-gray-400">{twin.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Capabilities Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Seamless Integration Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Connect with your existing systems and infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrationCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 text-center hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-sm font-semibold text-white">{capability}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Future-Ready Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the digital twin solution that matches your organization's needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 ${

                  plan.popular 
                    ? 'border-indigo-500/50 shadow-lg shadow-indigo-500/25' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${

                  plan.popular
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored digital twin solutions for your industry's unique challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                <p className="text-gray-400 mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Metrics:</h4>
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center text-gray-300">
                      <TrendingUp className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" />
                      {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Asset Management?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Join organizations worldwide that are leveraging digital twins for the future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/25"
              >
                <span className="flex items-center gap-2">
                  Start Your Free Trial
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-indigo-400/50 text-indigo-400 font-semibold rounded-xl hover:bg-indigo-400/10 hover:border-indigo-400 transition-all duration-300"
              >
                Contact Digital Twin Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact Info */}
      <section className="py-12 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-gray-400">
            <p className="mb-2">
              <strong>Contact Us:</strong> Mobile: +1 302 464 0950 | Email: kleber@ziontechgroup.com
            </p>
            <p>
              <strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709
            </p>
            <p className="mt-2">
              <strong>Website:</strong> <a href="https://ziontechgroup.com" className="text-indigo-400 hover:text-indigo-300">https://ziontechgroup.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// Add missing icon components
const Play = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z"/>
  </svg>
);