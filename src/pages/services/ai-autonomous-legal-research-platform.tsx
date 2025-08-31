import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  Scale, 
  FileText, 
  Brain, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Database,
  Eye,
  Settings,
  Download,
  Share2,
  Filter,
  AlertTriangle,
  Lightbulb,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  Target,
  TrendingUp,
  Lock,
  Cloud,
  Cpu,
  Network,
  Server,
  Database as DatabaseIcon,
  Code,
  Bot,
  Workflow,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Calendar,
  Award,
  Rocket,
  Leaf,
  Coins,
  Satellite,
  Gamepad2,
  Palette,
  Gauge,
  Wifi,
  ShieldCheck,
  Sparkles,
  Atom,
  Cpu as CpuIcon,
  Network as NetworkIcon,
  Server as ServerIcon,
  Code as CodeIcon,
  Bot as BotIcon,
  Workflow as WorkflowIcon,
  MessageCircle as MessageCircleIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  DollarSign as DollarSignIcon,
  Calendar as CalendarIcon,
  Award as AwardIcon,
  Rocket as RocketIcon,
  Leaf as LeafIcon,
  Coins as CoinsIcon,
  Satellite as SatelliteIcon,
  Gamepad2 as Gamepad2Icon,
  Palette as PaletteIcon,
  Gauge as GaugeIcon,
  Wifi as WifiIcon,
  ShieldCheck as ShieldCheckIcon,
  Sparkles as SparklesIcon,
  Atom as AtomIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIAutonomousLegalResearchPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Legal Research",
      description: "Advanced natural language processing that understands legal terminology and context",
      benefits: ["Semantic search", "Context-aware results", "Legal precedent analysis"]
    },
    {
      icon: Search,
      title: "Intelligent Case Law Search",
      description: "Find relevant cases, statutes, and regulations with unprecedented accuracy",
      benefits: ["Multi-jurisdiction search", "Citation tracking", "Related case discovery"]
    },
    {
      icon: BookOpen,
      title: "Comprehensive Legal Database",
      description: "Access to millions of legal documents, cases, and regulatory materials",
      benefits: ["Real-time updates", "Historical archives", "Multi-source integration"]
    },
    {
      icon: Scale,
      title: "Legal Analysis & Insights",
      description: "AI-generated summaries, key points, and legal reasoning analysis",
      benefits: ["Automated summaries", "Risk assessment", "Strategy recommendations"]
    },
    {
      icon: Zap,
      title: "Automated Citation Management",
      description: "Intelligent citation formatting and verification for legal documents",
      benefits: ["Auto-formatting", "Citation checking", "Bibliography generation"]
    },
    {
      icon: Shield,
      title: "Compliance Monitoring",
      description: "Track regulatory changes and ensure legal compliance across jurisdictions",
      benefits: ["Regulatory alerts", "Compliance dashboards", "Risk monitoring"]
    }
  ];

  const pricingPlans = [
    {
      name: "Legal Professional",
      price: "$199",
      period: "/month",
      description: "Perfect for individual lawyers and small law firms",
      features: [
        "Up to 3 users",
        "Basic legal research tools",
        "Standard case law database",
        "Email support",
        "Basic AI insights",
        "Citation management"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Law Firm",
      price: "$499",
      period: "/month",
      description: "Ideal for growing law firms and legal departments",
      features: [
        "Up to 10 users",
        "Advanced research algorithms",
        "Full legal database access",
        "Priority support",
        "Advanced AI insights",
        "Compliance monitoring",
        "Team collaboration tools"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large law firms and corporate legal departments",
      features: [
        "Unlimited users",
        "Custom AI models",
        "API access",
        "Dedicated support",
        "Custom integrations",
        "Advanced analytics",
        "White-label options"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "90% Time Savings",
      description: "Reduce legal research time from hours to minutes with AI-powered search and analysis"
    },
    {
      icon: CheckCircle,
      title: "95% Accuracy Rate",
      description: "Advanced AI algorithms ensure highly accurate legal research results and citations"
    },
    {
      icon: DollarSign,
      title: "40% Cost Reduction",
      description: "Lower research costs and increase billable hours with automated legal research"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Enable multiple team members to collaborate on research projects seamlessly"
    }
  ];

  const useCases = [
    {
      title: "Case Law Research",
      description: "Find relevant precedents and case law for ongoing litigation",
      icon: Search
    },
    {
      title: "Regulatory Compliance",
      description: "Stay updated on changing regulations and compliance requirements",
      icon: Shield
    },
    {
      title: "Contract Analysis",
      description: "Analyze contracts for legal risks and compliance issues",
      icon: FileText
    },
    {
      title: "Legal Strategy",
      description: "Develop winning legal strategies with comprehensive research insights",
      icon: Target
    }
  ];

  const stats = [
    { number: '10M+', label: 'Legal Documents', icon: Database },
    { number: '95%', label: 'Accuracy Rate', icon: CheckCircle },
    { number: '90%', label: 'Time Savings', icon: Clock },
    { number: '50+', label: 'Jurisdictions', icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous Legal Research Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize legal research with AI-powered intelligence. Access millions of legal documents, 
              get instant insights, and build stronger cases with unprecedented speed and accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-400 text-gray-300 font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features for Legal Professionals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge technology with deep legal expertise to deliver 
              unprecedented research capabilities.
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
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <feature.icon className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Legal Research Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your legal practice with AI-powered research that saves time, reduces costs, 
              and improves outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <benefit.icon className="h-12 w-12 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect for Every Legal Need
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From solo practitioners to large law firms, our platform adapts to your specific legal research requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <useCase.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your practice size and research needs. All plans include a 14-day free trial.
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
                className={`relative p-8 rounded-2xl border-2 ${
                  plan.popular 
                    ? 'border-blue-500 bg-gradient-to-br from-gray-800 to-gray-900' 
                    : 'border-gray-700 bg-gray-800/50'
                } backdrop-blur-sm`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Legal Research?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of legal professionals who have already revolutionized their practice with AI-powered research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-400 text-gray-300 font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
