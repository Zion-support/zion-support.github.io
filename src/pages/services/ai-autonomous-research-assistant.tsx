import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  Brain, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle,
  ArrowRight,
  Star,
  Database,
  Eye,
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
  Network,
  Server,
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
  Microscope,
  TestTube,
  Flask,
  Beaker,
  Search as SearchIcon,
  BookOpen as BookOpenIcon,
  Brain as BrainIcon,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Clock as ClockIcon,
  Users as UsersIcon,
  CheckCircle as CheckCircleIcon,
  ArrowRight as ArrowRightIcon,
  Star as StarIcon,
  Database as DatabaseIcon,
  Eye as EyeIcon,
  Download as DownloadIcon,
  Share2 as Share2Icon,
  Filter as FilterIcon,
  AlertTriangle as AlertTriangleIcon,
  Lightbulb as LightbulbIcon,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  Activity as ActivityIcon,
  Target as TargetIcon,
  TrendingUp as TrendingUpIcon,
  Lock as LockIcon,
  Cloud as CloudIcon,
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

export default function AIAutonomousResearchAssistant() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Research",
      description: "Advanced natural language processing that understands research context and requirements",
      benefits: ["Context-aware analysis", "Semantic understanding", "Intelligent synthesis", "Pattern recognition"]
    },
    {
      icon: Search,
      title: "Comprehensive Literature Review",
      description: "Automated discovery and analysis of relevant research papers and publications",
      benefits: ["Multi-source search", "Citation analysis", "Trend identification", "Gap analysis"]
    },
    {
      icon: BookOpen,
      title: "Intelligent Data Analysis",
      description: "AI-driven analysis of research data with statistical insights and visualization",
      benefits: ["Statistical analysis", "Data visualization", "Trend detection", "Correlation analysis"]
    },
    {
      icon: Zap,
      title: "Automated Report Generation",
      description: "Intelligent synthesis of research findings into comprehensive reports",
      benefits: ["Auto-summarization", "Citation management", "Format optimization", "Multi-language support"]
    },
    {
      icon: Shield,
      title: "Research Validation",
      description: "AI-powered verification of research methodology and data integrity",
      benefits: ["Methodology review", "Data validation", "Bias detection", "Quality assessment"]
    },
    {
      icon: Workflow,
      title: "Collaborative Research",
      description: "Team-based research coordination with AI-powered insights sharing",
      benefits: ["Team collaboration", "Knowledge sharing", "Progress tracking", "Version control"]
    }
  ];

  const pricingPlans = [
    {
      name: "Student",
      price: "$99",
      period: "/month",
      description: "Perfect for students and individual researchers",
      features: [
        "Up to 3 research projects",
        "Basic AI assistance",
        "Literature review tools",
        "Email support",
        "Basic analytics",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Academic",
      price: "$299",
      period: "/month",
      description: "Ideal for academic researchers and institutions",
      features: [
        "Up to 10 research projects",
        "Advanced AI algorithms",
        "Comprehensive databases",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Custom integrations"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$899",
      period: "/month",
      description: "For research organizations and corporations",
      features: [
        "Unlimited research projects",
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "Advanced reporting",
        "Multi-tenant setup",
        "Custom development"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "80% Time Savings",
      description: "Reduce research time from weeks to days with AI-powered automation"
    },
    {
      icon: CheckCircle,
      title: "95% Accuracy Rate",
      description: "Advanced AI algorithms ensure highly accurate research insights and analysis"
    },
    {
      icon: DollarSign,
      title: "60% Cost Reduction",
      description: "Lower research costs and increase productivity with automated processes"
    },
    {
      icon: Users,
      title: "Enhanced Collaboration",
      description: "Enable multiple researchers to collaborate seamlessly on projects"
    }
  ];

  const useCases = [
    {
      title: "Academic Research",
      description: "Streamline literature reviews and data analysis for academic publications",
      icon: BookOpen
    },
    {
      title: "Market Research",
      description: "Conduct comprehensive market analysis and competitive intelligence",
      icon: Search
    },
    {
      title: "Scientific Discovery",
      description: "Accelerate scientific research with AI-powered insights and validation",
      icon: Microscope
    },
    {
      title: "Policy Research",
      description: "Analyze policy implications and conduct impact assessments",
      icon: Shield
    }
  ];

  const stats = [
    { number: '1M+', label: 'Research Papers', icon: Database },
    { number: '95%', label: 'Accuracy Rate', icon: CheckCircle },
    { number: '80%', label: 'Time Savings', icon: Clock },
    { number: '50+', label: 'Research Fields', icon: Brain }
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
              AI Autonomous Research Assistant
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your research with AI-powered intelligence. Discover insights, analyze data, 
              and generate reports with unprecedented speed and accuracy.
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
              Powerful Features for Modern Research
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge technology with deep research expertise to deliver 
              unprecedented research capabilities and insights.
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
              Why Choose Our Research Assistant?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your research process with AI-powered intelligence that saves time, improves accuracy, 
              and enhances collaboration.
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
              Perfect for Every Research Need
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From academic research to market analysis, our platform adapts to your specific research requirements.
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
              Choose the plan that fits your research needs and budget. All plans include a 14-day free trial.
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
              Ready to Transform Your Research?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of researchers who have already revolutionized their work with AI-powered intelligence.
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