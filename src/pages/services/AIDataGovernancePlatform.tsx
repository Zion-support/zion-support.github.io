import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Database, 
  Lock, 
  Eye, 
  BarChart3, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Play,
  Clock,
  TrendingUp,
  Cpu,
  Network,
  Bot,
  Sparkles,
  Globe,
  Activity,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Globe2,
  MessageCircle,
  Search,
  FileText,
  Settings,
  Palette,
  Zap as ZapIcon2,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Star,
  Award,
  Rocket,
  Lightbulb,
  Handshake,
  Target as TargetIcon,
  Users2,
  Briefcase,
  Building,
  Truck,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Atom,
  Leaf as LeafIcon,
  Gamepad2 as Gamepad2Icon,
  Coins as CoinsIcon,
  Satellite as SatelliteIcon,
  Key,
  Fingerprint,
  AlertTriangle,
  Zap,
  Brain,
  Target,
  Workflow,
  BookOpen,
  FileCheck,
  UserCheck,
  Globe as GlobeIcon,
  Shield as ShieldIcon,
  Lock as LockIcon,
  Eye as EyeIcon,
  BarChart3 as BarChart3Icon,
  Users as UsersIcon,
  CheckCircle as CheckCircleIcon,
  ArrowRight as ArrowRightIcon,
  Play as PlayIcon,
  Clock as ClockIcon,
  TrendingUp as TrendingUpIcon,
  Cpu as CpuIcon,
  Network as NetworkIcon,
  Bot as BotIcon,
  Sparkles as SparklesIcon,
  Globe as GlobeIcon2,
  Activity as ActivityIcon,
  Code as CodeIcon,
  Server as ServerIcon,
  Chip as ChipIcon,
  Wifi as WifiIcon,
  ShieldCheck as ShieldCheckIcon,
  Globe2 as Globe2Icon,
  MessageCircle as MessageCircleIcon,
  Search as SearchIcon,
  FileText as FileTextIcon,
  Settings as SettingsIcon,
  Palette as PaletteIcon,
  Zap as ZapIcon3,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  DollarSign as DollarSignIcon,
  Star as StarIcon,
  Award as AwardIcon,
  Rocket as RocketIcon,
  Lightbulb as LightbulbIcon,
  Handshake as HandshakeIcon,
  Target as TargetIcon2,
  Users2 as Users2Icon,
  Briefcase as BriefcaseIcon,
  Building as BuildingIcon,
  Truck as TruckIcon,
  Leaf as LeafIcon2,
  Gamepad2 as Gamepad2Icon2,
  Coins as CoinsIcon2,
  Satellite as SatelliteIcon2,
  Atom as AtomIcon,
  Leaf as LeafIcon3,
  Gamepad2 as Gamepad2Icon3,
  Coins as CoinsIcon3,
  Satellite as SatelliteIcon3
} from 'lucide-react';

export default function AIDataGovernancePlatform() {
  const features = [
    {
      icon: Shield,
      title: "AI-Powered Data Discovery",
      description: "Automatically discover, classify, and catalog all data assets across your organization",
      benefits: ["Automated data mapping", "Intelligent classification", "Real-time discovery"]
    },
    {
      icon: Lock,
      title: "Advanced Access Control",
      description: "Granular permission management with AI-driven access recommendations and anomaly detection",
      benefits: ["Role-based access control", "AI threat detection", "Compliance monitoring"]
    },
    {
      icon: Eye,
      title: "Data Lineage & Tracking",
      description: "Complete visibility into data flow, transformations, and usage across your data ecosystem",
      benefits: ["End-to-end tracking", "Impact analysis", "Audit trails"]
    },
    {
      icon: BarChart3,
      title: "Compliance Automation",
      description: "Automated compliance monitoring for GDPR, CCPA, HIPAA, and other regulatory requirements",
      benefits: ["Real-time compliance", "Automated reporting", "Risk assessment"]
    }
  ];

  const useCases = [
    {
      title: "Financial Services Compliance",
      description: "Meet strict regulatory requirements with automated data governance and audit capabilities",
      icon: Building,
      examples: ["SOX compliance", "Basel III requirements", "Anti-money laundering"]
    },
    {
      title: "Healthcare Data Protection",
      description: "Ensure HIPAA compliance and protect sensitive patient information with AI-powered governance",
      icon: Shield,
      examples: ["Patient data privacy", "Clinical trial data", "Medical research compliance"]
    },
    {
      title: "Retail Customer Data",
      description: "Manage customer data responsibly while maintaining marketing effectiveness",
      icon: Users,
      examples: ["Customer consent management", "Personalization compliance", "Data retention policies"]
    },
    {
      title: "Government & Public Sector",
      description: "Secure sensitive government data while ensuring transparency and accountability",
      icon: Globe,
      examples: ["National security data", "Public records management", "Inter-agency data sharing"]
    }
  ];

  const pricing = [
    {
      name: "Foundation",
      price: "$499",
      period: "/month",
      description: "Essential data governance for small to medium organizations",
      features: [
        "Up to 10TB data management",
        "Basic AI classification",
        "Standard compliance templates",
        "Email support",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Comprehensive governance solution for growing enterprises",
      features: [
        "Up to 100TB data management",
        "Advanced AI capabilities",
        "Full compliance suite",
        "Priority support",
        "Advanced analytics",
        "Custom policies"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "Enterprise-grade solution for large organizations with complex requirements",
      features: [
        "Unlimited data management",
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-900 via-zion-slate-800 to-zion-slate-900">
      {/* Futuristic Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/5 via-transparent to-zion-cyan/5"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-purple/10 border border-zion-purple/20 text-zion-purple text-sm font-medium mb-8">
                <Shield className="w-4 h-4 mr-2" />
                AI-Powered Data Governance
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-zion-purple via-zion-cyan to-zion-purple bg-clip-text text-transparent">
                AI Data Governance Platform
              </h1>
              
              <p className="text-xl md:text-2xl text-zion-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Secure, govern, and manage your data with AI-powered intelligence. Automate compliance, 
                protect sensitive information, and ensure data quality across your entire organization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zion-purple/30 text-zion-purple font-semibold rounded-lg hover:bg-zion-purple/10 transition-all duration-300 flex items-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Data Governance Features
              </h2>
              <p className="text-xl text-zion-slate-300 max-w-3xl mx-auto">
                Our AI-powered platform provides enterprise-grade data governance capabilities that scale 
                with your organization's needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zion-slate-800/50 backdrop-blur-sm border border-zion-purple/20 rounded-xl p-8 hover:border-zion-purple/40 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-zion-slate-300 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-zion-slate-300">
                            <CheckCircle className="w-4 h-4 text-zion-purple mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry-Specific Solutions
              </h2>
              <p className="text-xl text-zion-slate-300 max-w-3xl mx-auto">
                Tailored data governance solutions designed for the unique compliance and security 
                requirements of different industries.
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
                  className="bg-zion-slate-800/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-4">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-zion-slate-300 mb-6">{useCase.description}</p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-zion-cyan">Compliance Areas:</h4>
                    <ul className="space-y-2">
                      {useCase.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center text-zion-slate-300">
                          <ArrowRight className="w-4 h-4 text-zion-purple mr-2 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transparent Pricing Plans
              </h2>
              <p className="text-xl text-zion-slate-300 max-w-3xl mx-auto">
                Choose the data governance solution that fits your organization's size and compliance needs. 
                All plans include our core AI capabilities and expert support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-zion-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-zion-purple/50 bg-zion-purple/5' 
                      : 'border-zion-slate-600/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-zion-slate-400">{plan.period}</span>
                    </div>
                    <p className="text-zion-slate-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-zion-slate-300">
                        <CheckCircle className="w-5 h-5 text-zion-purple mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-zion-purple to-zion-cyan text-white hover:shadow-lg hover:shadow-zion-purple/25'
                        : 'bg-zion-slate-700 text-white hover:bg-zion-slate-600'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-purple/10 via-zion-cyan/10 to-zion-purple/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Secure Your Data Future Today
              </h2>
              <p className="text-xl text-zion-slate-300 mb-8">
                Join leading organizations that trust our AI Data Governance Platform to protect their 
                most valuable asset - their data.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zion-purple/30 text-zion-purple font-semibold rounded-lg hover:bg-zion-purple/10 transition-all duration-300 flex items-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-zion-purple mb-4" />
                <p className="text-zion-slate-300">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-zion-purple mb-4" />
                <p className="text-zion-slate-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-zion-purple mb-4" />
                <p className="text-zion-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}