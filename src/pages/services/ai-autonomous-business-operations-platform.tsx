import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Rocket,
  Target,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Workflow,
  Activity,
  BarChart3,
  Code,
  Server,
  Cloud,
  Lock,
  MessageCircle,
  Calendar,
  FileText,
  Settings,
  Cog,
  Monitor,
  Smartphone,
  Wifi,
  Eye,
  Search,
  Palette,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle as MessageCircleIcon,
  Star as StarIcon,
  Users2,
  Cog as CogIcon,
  ShoppingCart,
  Handshake,
  BookOpen,
  Video,
  GraduationCap,
  PenTool,
  Briefcase,
  Globe as GlobeIcon,
  Building as BuildingIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Server as ServerIcon,
  Cloud as CloudIcon,
  Lock as LockIcon,
  BarChart as BarChartIcon,
  Cpu as CpuIcon,
  Workflow as WorkflowIcon,
  Database as DatabaseIcon,
  Target as TargetIcon,
  Rocket as RocketIcon,
  Lightbulb as LightbulbIcon,
  Code as CodeIcon,
  Monitor as MonitorIcon,
  Smartphone as SmartphoneIcon,
  Network as NetworkIcon,
  Wifi as WifiIcon,
  Activity as ActivityIcon,
  Eye as EyeIcon,
  Search as SearchIcon,
  Settings as SettingsIcon,
  Palette as PaletteIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Clock as ClockIcon,
  DollarSign as DollarSignIcon,
  Atom as AtomIcon,
  Leaf as LeafIcon,
  Gamepad2 as GamepadIcon,
  Coins as CoinsIcon,
  Satellite as SatelliteIcon
} from 'lucide-react';

const AIAutonomousBusinessOperationsPlatform = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Decision Making",
      description: "Advanced machine learning algorithms that make autonomous business decisions based on real-time data analysis and predictive modeling."
    },
    {
      icon: Workflow,
      title: "Intelligent Process Automation",
      description: "End-to-end automation of complex business processes with AI-driven optimization and continuous improvement capabilities."
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics Dashboard",
      description: "Comprehensive business intelligence with live data visualization, KPI tracking, and predictive insights."
    },
    {
      icon: Shield,
      title: "Autonomous Security Management",
      description: "AI-powered threat detection, automated incident response, and continuous security monitoring and optimization."
    },
    {
      icon: Cloud,
      title: "Smart Resource Management",
      description: "Intelligent allocation and optimization of computing resources, storage, and network bandwidth based on demand patterns."
    },
    {
      icon: Users,
      title: "Autonomous Team Coordination",
      description: "AI-driven project management, task allocation, and team collaboration optimization across departments and locations."
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 40% through intelligent automation",
    "Improve decision-making speed by 300% with real-time AI insights",
    "Enhance customer satisfaction through proactive issue resolution",
    "Scale operations seamlessly without proportional cost increases",
    "Ensure 99.9% uptime with autonomous system monitoring",
    "Comply with industry regulations automatically through AI governance"
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses starting their autonomous journey",
      features: [
        "Basic AI decision making",
        "Process automation (up to 10 workflows)",
        "Real-time analytics dashboard",
        "Basic security monitoring",
        "Email support",
        "5 team members"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing businesses with complex operations",
      features: [
        "Advanced AI decision making",
        "Unlimited process automation",
        "Advanced analytics with ML insights",
        "Comprehensive security management",
        "Priority support",
        "Unlimited team members",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Full autonomous operations",
        "Custom AI model training",
        "White-label solutions",
        "Dedicated support team",
        "On-premise deployment options",
        "Custom compliance frameworks"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Manufacturing",
      description: "Autonomous production line management, predictive maintenance, and quality control optimization.",
      icon: Cog
    },
    {
      industry: "Healthcare",
      description: "Patient care automation, resource optimization, and compliance management.",
      icon: Shield
    },
    {
      industry: "Finance",
      description: "Risk assessment automation, fraud detection, and regulatory compliance.",
      icon: DollarSign
    },
    {
      industry: "Retail",
      description: "Inventory management, customer service automation, and demand forecasting.",
      icon: ShoppingCart
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>AI Autonomous Business Operations Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our AI Autonomous Business Operations Platform. Automate decision-making, optimize processes, and scale operations intelligently." />
        <meta name="keywords" content="AI automation, business operations, autonomous systems, process optimization, AI decision making" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-autonomous-business-operations-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous Business
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                {" "}Operations Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business operations with intelligent automation, AI-powered decision making, 
              and autonomous process optimization. Scale efficiently while reducing costs and improving outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              Revolutionary Autonomous Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with business intelligence to create truly autonomous operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Business Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience unprecedented efficiency and growth with autonomous business operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your business needs and scale as you grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  tier.popular 
                    ? 'border-cyan-500 shadow-lg shadow-cyan-500/25' 
                    : 'border-slate-700'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {tier.price}
                    <span className="text-lg text-gray-400">{tier.period}</span>
                  </div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`tel:${contactInfo.phone}`}
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform is designed to transform operations across various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{useCase.industry}</h3>
                </div>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Contact us today to learn how our AI Autonomous Business Operations Platform can revolutionize your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <a 
                href={`tel:${contactInfo.phone}`}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                {contactInfo.phone}
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                {contactInfo.email}
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 text-sm">{contactInfo.address}</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 mr-2" />
              Start Your Transformation Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousBusinessOperationsPlatform;