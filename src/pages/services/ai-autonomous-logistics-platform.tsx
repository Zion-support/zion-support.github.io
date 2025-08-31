import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Route, 
  Package, 
  Globe, 
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
  Warehouse,
  Navigation,
  Timer,
  Fuel,
  Gauge as GaugeIcon,
  Map,
  Compass,
  Truck as TruckIcon,
  Route as RouteIcon,
  Package as PackageIcon,
  Globe as GlobeIcon,
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
  Settings as SettingsIcon,
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

export default function AIAutonomousLogisticsPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Route Optimization",
      description: "Advanced algorithms that calculate the most efficient routes in real-time",
      benefits: ["Dynamic routing", "Traffic prediction", "Fuel optimization", "Multi-stop planning"]
    },
    {
      icon: Truck,
      title: "Autonomous Fleet Management",
      description: "Intelligent monitoring and control of logistics operations",
      benefits: ["Real-time tracking", "Predictive maintenance", "Driver safety", "Fleet analytics"]
    },
    {
      icon: Route,
      title: "Smart Supply Chain",
      description: "End-to-end visibility and optimization of supply chain operations",
      benefits: ["Inventory management", "Demand forecasting", "Supplier coordination", "Risk mitigation"]
    },
    {
      icon: Package,
      title: "Intelligent Warehousing",
      description: "AI-driven warehouse operations and inventory management",
      benefits: ["Automated picking", "Space optimization", "Order fulfillment", "Quality control"]
    },
    {
      icon: Globe,
      title: "Global Logistics Network",
      description: "Seamless coordination across international borders and time zones",
      benefits: ["Customs automation", "Multi-currency", "Regulatory compliance", "Global tracking"]
    },
    {
      icon: Zap,
      title: "Real-time Analytics",
      description: "Live insights and predictive analytics for operational excellence",
      benefits: ["Performance metrics", "Cost analysis", "Efficiency tracking", "Trend prediction"]
    }
  ];

  const pricingPlans = [
    {
      name: "Startup",
      price: "$599",
      period: "/month",
      description: "Perfect for small logistics companies and startups",
      features: [
        "Up to 10 vehicles",
        "Basic route optimization",
        "Real-time tracking",
        "Email support",
        "Basic analytics",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing logistics companies",
      features: [
        "Up to 50 vehicles",
        "Advanced AI routing",
        "Fleet management",
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
      price: "$2,999",
      period: "/month",
      description: "For large logistics corporations",
      features: [
        "Unlimited vehicles",
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
      title: "30% Faster Delivery",
      description: "AI-optimized routes reduce delivery times and improve customer satisfaction"
    },
    {
      icon: DollarSign,
      title: "25% Cost Reduction",
      description: "Optimize fuel consumption, reduce idle time, and minimize operational costs"
    },
    {
      icon: CheckCircle,
      title: "99.9% Uptime",
      description: "Reliable platform with advanced monitoring and automated failover systems"
    },
    {
      icon: Users,
      title: "Enhanced Customer Experience",
      description: "Real-time tracking and accurate delivery estimates improve customer satisfaction"
    }
  ];

  const useCases = [
    {
      title: "E-commerce Delivery",
      description: "Optimize last-mile delivery for online retail operations",
      icon: Package
    },
    {
      title: "Manufacturing Supply Chain",
      description: "Streamline raw material and finished goods logistics",
      icon: Warehouse
    },
    {
      title: "Cold Chain Logistics",
      description: "Specialized handling for temperature-sensitive products",
      icon: Truck
    },
    {
      title: "International Shipping",
      description: "Global logistics coordination and customs management",
      icon: Globe
    }
  ];

  const stats = [
    { number: '10K+', label: 'Vehicles Managed', icon: Truck },
    { number: '30%', label: 'Cost Reduction', icon: DollarSign },
    { number: '99.9%', label: 'Uptime', icon: CheckCircle },
    { number: '50+', label: 'Countries Served', icon: Globe }
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
              AI Autonomous Logistics Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your logistics operations with AI-powered intelligence. Optimize routes, 
              manage fleets, and deliver excellence with unprecedented efficiency and accuracy.
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
              Powerful Features for Modern Logistics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge technology with deep logistics expertise to deliver 
              unprecedented operational efficiency.
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
              Why Choose Our Logistics Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your logistics operations with AI-powered intelligence that saves time, reduces costs, 
              and improves customer satisfaction.
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
              Perfect for Every Logistics Need
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From small delivery companies to global logistics corporations, our platform adapts to your specific operational requirements.
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
              Choose the plan that fits your fleet size and operational needs. All plans include a 14-day free trial.
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
              Ready to Transform Your Logistics Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of logistics companies who have already revolutionized their operations with AI-powered intelligence.
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