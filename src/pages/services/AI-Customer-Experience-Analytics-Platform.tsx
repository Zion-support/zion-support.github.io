import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Rocket,
  Target,
  BarChart3,
  Users,
  Globe,
  Chip,
  Sparkles,
  Eye,
  Workflow,
  Activity,
  Monitor,
  Server,
  Cloud,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Heart,
  DollarSign,
  Clock,
  Award,
  ShieldCheck,
  Wifi,
  Smartphone,
  Tablet,
  Laptop,
  Bot,
  Settings,
  BarChart,
  Users2,
  Settings as SettingsIcon,
  Palette,
  MessageCircle,
  Bell,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  User,
  Smile,
  Frown,
  Meh,
  ThumbsUp,
  ThumbsDown,
  Activity as ActivityIcon,
  PieChart,
  LineChart,
  BarChart as BarChartIcon,
  TrendingDown,
  AlertCircle,
  Info,
  HelpCircle,
  Search,
  Filter,
  Download,
  Share,
  Bookmark,
  Star as StarIcon,
  Heart as HeartIcon,
  ShoppingCart,
  CreditCard,
  Package,
  Truck,
  Home,
  Building2,
  Factory,
  Store,
  Hospital,
  School,
  Building2,
  Car,
  Plane,
  Train,
  Ship,
  Bike,
  Walk,
  Run,
  Swim,
  Gym,
  Coffee,
  Food,
  Music,
  Video,
  Camera,
  Gamepad,
  Book,
  Newspaper,
  Magazine,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  Timer,
  Stopwatch,
  Hourglass,
  CalendarDays,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarRange,
  CalendarWeek,
  CalendarMonth,
  CalendarYear,
  Calendar as CalendarIcon2
} from 'lucide-react';

export default function AICustomerExperienceAnalyticsPlatform() {
  const features = [
    {
      title: "Real-time Sentiment Analysis",
      description: "Instant analysis of customer emotions and satisfaction levels across all touchpoints",
      icon: Smile,
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "Predictive Customer Behavior",
      description: "AI-powered forecasting of customer actions and churn prediction",
      icon: TrendingUp,
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Omnichannel Journey Mapping",
      description: "Complete customer journey visualization across all platforms and interactions",
      icon: MapPin,
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Intelligent Feedback Processing",
      description: "Automated analysis and categorization of customer feedback and reviews",
      icon: MessageCircle,
      color: "from-orange-600 to-red-600"
    }
  ];

  const capabilities = [
    {
      title: "Customer Sentiment Tracking",
      description: "Monitor customer emotions and satisfaction in real-time across all channels",
      icon: Heart,
      benefits: ["Real-time sentiment scoring", "Emotion detection", "Satisfaction metrics", "Trend analysis"]
    },
    {
      title: "Journey Analytics",
      description: "Track and optimize customer touchpoints throughout their entire experience",
      icon: MapPin,
      benefits: ["Touchpoint mapping", "Conversion tracking", "Drop-off analysis", "Journey optimization"]
    },
    {
      title: "Predictive Analytics",
      description: "Forecast customer behavior and identify opportunities for improvement",
      icon: TrendingUp,
      benefits: ["Churn prediction", "Lifetime value forecasting", "Next-best-action recommendations", "Risk assessment"]
    },
    {
      title: "Feedback Intelligence",
      description: "Automated processing and analysis of customer feedback and reviews",
      icon: MessageCircle,
      benefits: ["Text analysis", "Sentiment classification", "Topic extraction", "Actionable insights"]
    },
    {
      title: "Performance Monitoring",
      description: "Track key customer experience metrics and KPIs in real-time",
      icon: BarChart3,
      benefits: ["Real-time dashboards", "Custom metrics", "Alert system", "Performance tracking"]
    },
    {
      title: "Integration Hub",
      description: "Seamless integration with existing CRM, support, and analytics tools",
      icon: Network,
      benefits: ["API-first approach", "Pre-built connectors", "Custom integrations", "Data synchronization"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses starting their CX analytics journey",
      features: [
        "Basic sentiment analysis",
        "Up to 10,000 customer interactions/month",
        "Standard analytics dashboard",
        "Email support",
        "Basic reporting",
        "3 user licenses"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing businesses requiring advanced CX analytics",
      features: [
        "Advanced sentiment analysis",
        "Up to 100,000 customer interactions/month",
        "Custom analytics dashboard",
        "Priority support",
        "Advanced reporting & insights",
        "API access",
        "10 user licenses",
        "Custom integrations"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large enterprises requiring maximum CX insights",
      features: [
        "Full CX analytics platform",
        "Unlimited customer interactions",
        "Custom AI model training",
        "24/7 dedicated support",
        "Custom development",
        "On-premise deployment",
        "White-label solutions",
        "Training & certification",
        "Unlimited user licenses"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      metric: "40%",
      description: "Increase in customer satisfaction",
      icon: Smile
    },
    {
      metric: "35%",
      description: "Reduction in customer churn",
      icon: TrendingDown
    },
    {
      metric: "50%",
      description: "Faster issue resolution",
      icon: Clock
    },
    {
      metric: "25%",
      description: "Increase in customer lifetime value",
      icon: DollarSign
    }
  ];

  const industries = [
    {
      name: "E-commerce",
      description: "Optimize online shopping experience and increase conversion rates",
      icon: ShoppingCart,
      useCases: ["Cart abandonment analysis", "Product recommendation optimization", "Checkout flow optimization"]
    },
    {
      name: "Healthcare",
      description: "Improve patient experience and care quality through data-driven insights",
      icon: Heart,
      useCases: ["Patient satisfaction tracking", "Care quality monitoring", "Appointment experience optimization"]
    },
    {
      name: "Financial Services",
      description: "Enhance customer experience in banking and financial products",
      icon: Building2,
      useCases: ["Service quality monitoring", "Customer journey optimization", "Product experience analysis"]
    },
    {
      name: "Hospitality",
      description: "Elevate guest experience and service quality in hotels and restaurants",
      icon: Building2,
      useCases: ["Guest satisfaction tracking", "Service quality monitoring", "Experience optimization"]
    }
  ];

  const metrics = [
    {
      name: "Net Promoter Score (NPS)",
      description: "Measure customer loyalty and likelihood to recommend",
      icon: Star
    },
    {
      name: "Customer Satisfaction Score (CSAT)",
      description: "Track overall customer satisfaction levels",
      icon: Smile
    },
    {
      name: "Customer Effort Score (CES)",
      description: "Measure ease of customer interactions",
      icon: TrendingDown
    },
    {
      name: "Customer Lifetime Value (CLV)",
      description: "Calculate long-term customer value",
      icon: DollarSign
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-zion-purple/20 text-zion-cyan border border-zion-purple/30">
                <Heart className="w-4 h-4 mr-2" />
                Customer Experience Intelligence
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              AI Customer Experience
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Analytics Platform
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
            >
              Transform customer insights into actionable intelligence with our AI-powered 
              analytics platform that reveals the true voice of your customers.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services/ai-customer-experience-analytics"
                className="inline-flex items-center px-8 py-4 border border-zion-purple/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-purple/20 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Customer Experience
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Data-driven insights that drive customer satisfaction and business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.metric}</div>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Analytics Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Cutting-edge AI capabilities that revolutionize customer experience analysis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive CX Analytics
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              End-to-end customer experience analysis and optimization
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-purple/30 rounded-xl p-8 hover:border-zion-purple/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center flex-shrink-0">
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{capability.title}</h3>
                    <p className="text-zion-slate-light mb-4">{capability.description}</p>
                    <ul className="space-y-2">
                      {capability.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
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

      {/* Metrics Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Key Customer Experience Metrics
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Track and optimize the metrics that matter most for customer satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{metric.name}</h3>
                <p className="text-zion-slate-light">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Tailored customer experience analytics for specific industry needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-purple/30 rounded-xl p-8 hover:border-zion-purple/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center flex-shrink-0">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                    <p className="text-zion-slate-light mb-4">{industry.description}</p>
                    <div className="space-y-2">
                      {industry.useCases.map((useCase, useCaseIndex) => (
                        <div key={useCaseIndex} className="text-zion-slate-light text-sm">
                          • {useCase}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Affordable Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the plan that fits your customer experience analytics needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-8 ${
                  plan.popular ? 'border-zion-cyan ring-2 ring-zion-cyan/20' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zion-slate-light">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan-dark hover:to-zion-purple-dark'
                      : 'bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30'
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
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Experience?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join thousands of businesses using AI-powered analytics to understand and 
              optimize their customer experience. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services/ai-customer-experience-analytics"
                className="inline-flex items-center px-8 py-4 border border-zion-purple/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-purple/20 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}