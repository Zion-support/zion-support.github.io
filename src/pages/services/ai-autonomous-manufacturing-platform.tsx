import React from 'react';
import { motion } from 'framer-motion';
import { 
  Factory, 
  Cpu, 
  Settings, 
  Zap, 
  Brain, 
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
  Cog,
  Wrench,
  Gauge as GaugeIcon,
  Map,
  Compass,
  Factory as FactoryIcon,
  Cpu as CpuIcon,
  Settings as SettingsIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
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

export default function AIAutonomousManufacturingPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Production Planning",
      description: "Intelligent algorithms that optimize production schedules and resource allocation",
      benefits: ["Dynamic scheduling", "Resource optimization", "Demand forecasting", "Capacity planning"]
    },
    {
      icon: Factory,
      title: "Autonomous Manufacturing Lines",
      description: "Self-optimizing production lines with minimal human intervention",
      benefits: ["Automated quality control", "Predictive maintenance", "Real-time monitoring", "Adaptive processes"]
    },
    {
      icon: Cpu,
      title: "Smart Equipment Management",
      description: "AI-driven monitoring and optimization of manufacturing equipment",
      benefits: ["Performance analytics", "Efficiency tracking", "Automated alerts", "Optimization suggestions"]
    },
    {
      icon: Settings,
      title: "Intelligent Process Control",
      description: "Advanced process automation with real-time optimization",
      benefits: ["Parameter optimization", "Quality assurance", "Process monitoring", "Automated adjustments"]
    },
    {
      icon: Zap,
      title: "Predictive Analytics",
      description: "Machine learning models that predict equipment failures and optimize maintenance",
      benefits: ["Failure prediction", "Maintenance scheduling", "Performance optimization", "Cost reduction"]
    },
    {
      icon: Shield,
      title: "Quality Assurance Automation",
      description: "AI-powered quality control with real-time defect detection",
      benefits: ["Visual inspection", "Statistical analysis", "Defect classification", "Quality reporting"]
    }
  ];

  const pricingPlans = [
    {
      name: "Startup",
      price: "$799",
      period: "/month",
      description: "Perfect for small manufacturing companies and startups",
      features: [
        "Up to 5 production lines",
        "Basic AI optimization",
        "Real-time monitoring",
        "Email support",
        "Basic analytics",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,999",
      period: "/month",
      description: "Ideal for growing manufacturing companies",
      features: [
        "Up to 20 production lines",
        "Advanced AI algorithms",
        "Predictive maintenance",
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
      price: "$4,999",
      period: "/month",
      description: "For large manufacturing corporations",
      features: [
        "Unlimited production lines",
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
      title: "40% Faster Production",
      description: "AI-optimized processes reduce cycle times and increase throughput"
    },
    {
      icon: DollarSign,
      title: "35% Cost Reduction",
      description: "Optimize resource usage, reduce waste, and minimize operational costs"
    },
    {
      icon: CheckCircle,
      title: "99.5% Quality Rate",
      description: "AI-powered quality control ensures consistent product quality"
    },
    {
      icon: Users,
      title: "Reduced Labor Costs",
      description: "Automate repetitive tasks and optimize human resource allocation"
    }
  ];

  const useCases = [
    {
      title: "Automotive Manufacturing",
      description: "Streamline vehicle production with intelligent assembly line optimization",
      icon: Factory
    },
    {
      title: "Electronics Production",
      description: "Optimize PCB assembly and component manufacturing processes",
      icon: Cpu
    },
    {
      title: "Food & Beverage",
      description: "Ensure quality and efficiency in food processing and packaging",
      icon: Settings
    },
    {
      title: "Pharmaceutical Manufacturing",
      description: "Maintain strict quality standards in drug production",
      icon: Shield
    }
  ];

  const stats = [
    { number: '500+', label: 'Production Lines', icon: Factory },
    { number: '40%', label: 'Faster Production', icon: Clock },
    { number: '99.5%', label: 'Quality Rate', icon: CheckCircle },
    { number: '35%', label: 'Cost Reduction', icon: DollarSign }
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
              AI Autonomous Manufacturing Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your manufacturing operations with AI-powered intelligence. Optimize production, 
              ensure quality, and maximize efficiency with unprecedented automation and insights.
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
              Powerful Features for Modern Manufacturing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge technology with deep manufacturing expertise to deliver 
              unprecedented operational efficiency and quality.
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
              Why Choose Our Manufacturing Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your manufacturing operations with AI-powered intelligence that increases productivity, 
              improves quality, and reduces costs.
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
              Perfect for Every Manufacturing Need
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From small workshops to large industrial facilities, our platform adapts to your specific manufacturing requirements.
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
              Choose the plan that fits your production scale and operational needs. All plans include a 14-day free trial.
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
              Ready to Transform Your Manufacturing Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of manufacturing companies who have already revolutionized their operations with AI-powered intelligence.
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