import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Satellite, 
  Rocket, 
  Globe, 
  Cpu, 
  Database, 
  Network, 
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon,
  BarChart3,
  Bot,
  Shield,
  Smartphone,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  GitFork,
  Eye,
  Sparkles,
  MessageSquare,
  FileText,
  Search,
  Clock,
  DollarSign,
  Target,
  Lightbulb,
  ShieldX,
  Globe2,
  CpuIcon,
  Network2,
  SmartphoneIcon,
  BarChart3Icon,
  CodeIcon,
  ServerIcon,
  ChipIcon,
  WifiIcon,
  ShieldCheckIcon,
  BotIcon,
  GitForkIcon,
  EyeIcon,
  SparklesIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  MessageSquareIcon,
  FileTextIcon,
  SearchIcon,
  ClockIcon,
  DollarSignIcon,
  TargetIcon,
  LightbulbIcon,
  ShieldXIcon,
  Globe2Icon,
  Atom,
  Zap,
  Users,
  TrendingUp,
  Orbit,
  Telescope,
  Planet
} from 'lucide-react';

const SpaceTechInnovation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      category: "Satellite Mission Planning",
      items: [
        "Orbital Mechanics Calculations",
        "Launch Window Optimization",
        "Mission Trajectory Design",
        "Fuel Consumption Analysis",
        "Collision Avoidance Planning",
        "Mission Lifecycle Management"
      ]
    },
    {
      category: "Space Data Analytics",
      items: [
        "Satellite Telemetry Processing",
        "Earth Observation Data Analysis",
        "Space Weather Monitoring",
        "Astronomical Data Processing",
        "Real-time Data Visualization",
        "Predictive Analytics & Forecasting"
      ]
    },
    {
      category: "Satellite Communication Systems",
      items: [
        "Ground Station Network Management",
        "Signal Processing & Optimization",
        "Bandwidth Allocation & Management",
        "Inter-satellite Communication",
        "Emergency Communication Protocols",
        "Global Coverage Optimization"
      ]
    },
    {
      category: "Space Debris Tracking",
      items: [
        "Debris Detection & Monitoring",
        "Collision Risk Assessment",
        "Debris Mitigation Strategies",
        "Orbital Cleanup Planning",
        "Space Traffic Management",
        "Regulatory Compliance Monitoring"
      ]
    },
    {
      category: "Space Weather Monitoring",
      items: [
        "Solar Flare Detection",
        "Geomagnetic Storm Monitoring",
        "Radiation Belt Analysis",
        "Spacecraft Protection Systems",
        "Early Warning Systems",
        "Impact Assessment & Mitigation"
      ]
    },
    {
      category: "AI-Powered Space Operations",
      items: [
        "Autonomous Satellite Operations",
        "Intelligent Mission Planning",
        "Predictive Maintenance Systems",
        "Anomaly Detection & Response",
        "Machine Learning Optimization",
        "Cognitive Space Systems"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Explorer",
      price: "$5,999",
      period: "/month",
      description: "Essential space technology platform for research institutions",
      features: [
        "Basic Satellite Mission Planning",
        "Space Data Analytics Dashboard",
        "Communication System Management",
        "Email & Chat Support",
        "Integration with 15+ Space Platforms",
        "Monthly Space Weather Reports"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Innovator",
      price: "$14,999",
      period: "/month",
      description: "Advanced space technology solutions for growing space companies",
      features: [
        "Full Mission Planning Suite",
        "Advanced Space Data Analytics",
        "Comprehensive Communication Systems",
        "Priority Support (6-hour response)",
        "Integration with 35+ Space Platforms",
        "Custom Mission Templates",
        "Advanced AI-Powered Operations",
        "API Access & Webhooks"
      ],
      popular: true,
      color: "from-violet-500 to-purple-500"
    },
    {
      name: "Pioneer",
      price: "$29,999",
      period: "/month",
      description: "Complete space technology infrastructure for major space organizations",
      features: [
        "Unlimited Mission Planning",
        "Enterprise Space Analytics",
        "Global Communication Networks",
        "Custom Space Operations Development",
        "24/7 Dedicated Support",
        "Integration with 100+ Space Platforms",
        "White-label Solutions",
        "On-premise Deployment",
        "SLA Guarantees",
        "Custom Compliance Frameworks"
      ],
      popular: false,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "Mission Success",
      description: "Increase mission success rates with advanced planning and monitoring"
    },
    {
      icon: Database,
      title: "Data Insights",
      description: "Extract valuable insights from space data and telemetry"
    },
    {
      icon: Network,
      title: "Global Connectivity",
      description: "Maintain reliable communication across global satellite networks"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Reduce mission risks with advanced monitoring and prediction"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Achieve comprehensive coverage of Earth and space assets"
    },
    {
      icon: TrendingUp,
      title: "Operational Efficiency",
      description: "Optimize operations and reduce costs with AI-powered systems"
    }
  ];

  const useCases = [
    {
      industry: "Satellite Communications",
      description: "Manage global satellite networks, optimize bandwidth, and ensure reliable communications",
      results: "99.9% uptime, 40% bandwidth optimization, global coverage"
    },
    {
      industry: "Earth Observation",
      description: "Process satellite imagery, monitor environmental changes, and analyze global patterns",
      results: "Real-time data processing, 95% accuracy improvement, automated analysis"
    },
    {
      industry: "Space Research",
      description: "Plan scientific missions, analyze space data, and conduct research operations",
      results: "Mission success rate 98%, 60% faster data analysis, breakthrough discoveries"
    },
    {
      industry: "Commercial Space",
      description: "Support commercial space operations, satellite launches, and space tourism",
      results: "Cost reduction 30%, safety improvement 99.9%, regulatory compliance"
    },
    {
      industry: "Government & Defense",
      description: "Secure space operations, national security monitoring, and defense applications",
      results: "National security compliance, classified operations, infrastructure protection"
    }
  ];

  const spaceMissions = [
    {
      type: "Low Earth Orbit (LEO)",
      description: "Satellites orbiting 160-2,000 km above Earth",
      applications: "Communication, Earth observation, scientific research",
      examples: "Starlink, GPS, International Space Station"
    },
    {
      type: "Medium Earth Orbit (MEO)",
      description: "Satellites orbiting 2,000-35,786 km above Earth",
      applications: "Navigation, communication, scientific research",
      examples: "GPS satellites, Galileo, GLONASS"
    },
    {
      type: "Geostationary Orbit (GEO)",
      description: "Satellites orbiting 35,786 km above Earth",
      applications: "Weather monitoring, communication, broadcasting",
      examples: "Weather satellites, TV broadcasting, internet"
    },
    {
      type: "Deep Space",
      description: "Missions beyond Earth's orbit",
      applications: "Planetary exploration, scientific research, astronomy",
      examples: "Mars rovers, Voyager probes, James Webb Telescope"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-violet-500 to-purple-500 rounded-3xl p-6 mx-auto mb-8">
              <Satellite className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Space Technology
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                Innovation Platform
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize space operations with our cutting-edge platform. From satellite mission planning 
              to space data analytics, we're enabling the future of space exploration and commercialization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border-2 border-violet-400 text-violet-400 font-semibold rounded-lg hover:bg-violet-400 hover:text-white transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Demo
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { id: 'overview', name: 'Overview', icon: Eye },
            { id: 'features', name: 'Features', icon: CheckCircle },
            { id: 'pricing', name: 'Pricing', icon: DollarSign },
            { id: 'benefits', name: 'Benefits', icon: Star },
            { id: 'missions', name: 'Space Missions', icon: Rocket },
            { id: 'use-cases', name: 'Use Cases', icon: Target },
            { id: 'contact', name: 'Contact', icon: MessageSquare }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">The Future of Space Technology</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our Space Technology Innovation Platform represents the next generation of space operations. 
                Combining cutting-edge AI, advanced analytics, and proven space engineering principles to 
                revolutionize how we explore and utilize space.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-700 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl p-4 mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Platform Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-4 mx-auto mb-4">
                    <Satellite className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Mission Planning</h4>
                  <p className="text-gray-300">Advanced orbital mechanics and mission optimization</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4 mx-auto mb-4">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Data Analytics</h4>
                  <p className="text-gray-300">Real-time space data processing and insights</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full p-4 mx-auto mb-4">
                    <Network className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Communication</h4>
                  <p className="text-gray-300">Global satellite communication networks</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Features Tab */}
        {activeTab === 'features' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Space Technology Features</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our platform provides everything you need for modern space operations, from mission planning 
                to real-time monitoring and data analysis.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {features.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg p-2 mr-3">
                      <Satellite className="w-4 h-4 text-white" />
                    </div>
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Space Technology Investment</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Choose the plan that best fits your space technology needs. All plans include our core 
                space operations features with different levels of customization and support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-gray-800 rounded-2xl p-8 ${
                    plan.popular ? 'ring-2 ring-violet-500' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-violet-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-white mb-1">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 bg-gradient-to-r ${plan.color} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300`}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-300 mb-6">
                Need a custom solution? Contact us for enterprise pricing and custom development.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Sales
              </a>
            </div>
          </motion.div>
        )}

        {/* Benefits Tab */}
        {activeTab === 'benefits' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Platform?</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our Space Technology Innovation Platform delivers measurable results that transform 
                space operations and enable new possibilities in space exploration and commercialization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6 flex items-start"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl p-4 mr-4 flex-shrink-0">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Performance Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                  <p className="text-gray-300">Mission Success Rate</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
                  <p className="text-gray-300">Cost Reduction</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-violet-400 mb-2">24/7</div>
                  <p className="text-gray-300">Global Monitoring</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Space Missions Tab */}
        {activeTab === 'missions' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Space Mission Types</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our platform supports all types of space missions, from low Earth orbit communications 
                to deep space exploration and everything in between.
              </p>
            </div>

            <div className="space-y-6">
              {spaceMissions.map((mission, index) => (
                <motion.div
                  key={mission.type}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{mission.type}</h3>
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl p-3">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{mission.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-violet-400 font-semibold mb-2">Applications:</h4>
                      <p className="text-gray-300 text-sm">{mission.applications}</p>
                    </div>
                    <div>
                      <h4 className="text-purple-400 font-semibold mb-2">Examples:</h4>
                      <p className="text-gray-300 text-sm">{mission.examples}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Mission Support Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Pre-Launch Planning</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Orbital trajectory optimization</li>
                    <li>• Launch window calculation</li>
                    <li>• Fuel consumption analysis</li>
                    <li>• Risk assessment & mitigation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">In-Orbit Operations</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Real-time mission monitoring</li>
                    <li>• Anomaly detection & response</li>
                    <li>• Performance optimization</li>
                    <li>• Mission extension planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Use Cases Tab */}
        {activeTab === 'use-cases' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Industry Applications</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our platform has been successfully implemented across various space-related industries, 
                delivering measurable results and transforming space operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.industry}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.industry}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                    <h4 className="text-green-400 font-semibold mb-2">Results Achieved:</h4>
                    <p className="text-green-300 text-sm">{useCase.results}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Launch Your Space Technology Journey</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Ready to revolutionize your space operations? Contact our team to schedule 
                a personalized demo and discuss your specific space technology needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-violet-400 mr-4 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Phone</h4>
                      <a href="tel:+13024640950" className="text-violet-400 hover:text-violet-300 transition-colors">
                        +1 (302) 464-0950
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-violet-400 mr-4 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Email</h4>
                      <a href="mailto:kleber@ziontechgroup.com" className="text-violet-400 hover:text-violet-300 transition-colors">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-violet-400 mr-4 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Address</h4>
                      <p className="text-gray-300">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Globe className="w-6 h-6 text-violet-400 mr-4 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Website</h4>
                      <a href="https://ziontechgroup.com" className="text-violet-400 hover:text-violet-300 transition-colors">
                        https://ziontechgroup.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-lg">
                  <h4 className="text-white font-semibold mb-3">Why Choose Zion Tech Group?</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Industry-leading space technology expertise</li>
                    <li>• Proven track record of successful implementations</li>
                    <li>• 24/7 technical support and mission monitoring</li>
                    <li>• Competitive pricing with premium space features</li>
                    <li>• Global network of space technology partners</li>
                    <li>• Future-proof space technology solutions</li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Request a Demo</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Space Industry</label>
                    <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-violet-500">
                      <option value="">Select your space industry</option>
                      <option value="satellite-communications">Satellite Communications</option>
                      <option value="earth-observation">Earth Observation</option>
                      <option value="space-research">Space Research</option>
                      <option value="commercial-space">Commercial Space</option>
                      <option value="government-defense">Government & Defense</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                      placeholder="Tell us about your space technology needs and mission requirements..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <MessageSquare className="w-5 h-5 inline mr-2" />
                    Request Demo
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Explore the Final Frontier?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
               Join the organizations already revolutionizing space operations with our Space Technology 
               Innovation Platform. The future of space exploration is here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-violet-400 text-violet-400 font-semibold rounded-lg hover:bg-violet-400 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SpaceTechInnovation;