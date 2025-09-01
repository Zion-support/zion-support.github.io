import React from 'react';
import { motion } from 'framer-motion';
import { 
  Route, 
  Users, 
  Target, 
  Zap, 
  Shield, 
  Brain, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Globe,
  Database,
  PieChart,
  LineChart,
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
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  Activity as ActivityIcon,
  Eye as EyeIcon,
  Settings as SettingsIcon,
  Download as DownloadIcon,
  Share2 as Share2Icon,
  Filter as FilterIcon,
  Search as SearchIcon,
  AlertTriangle as AlertTriangleIcon,
  Lightbulb as LightbulbIcon,
  Map,
  Navigation,
  Compass,
  TrendingUp,
  UserCheck,
  MessageSquare,
  Mail,
  Phone,
  Smartphone,
  Monitor,
  Tablet
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AICustomerJourneyOrchestrationPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Journey Mapping",
      description: "Advanced machine learning algorithms that automatically map and optimize customer touchpoints across all channels",
      benefits: ["Automated journey discovery", "Real-time optimization", "Predictive path analysis"]
    },
    {
      icon: Route,
      title: "Multi-Channel Orchestration",
      description: "Seamlessly orchestrate customer interactions across email, SMS, web, mobile apps, and social media",
      benefits: ["Unified customer experience", "Cross-channel consistency", "Automated channel switching"]
    },
    {
      icon: Target,
      title: "Personalized Journey Optimization",
      description: "Dynamically adjust customer journeys based on real-time behavior, preferences, and context",
      benefits: ["Real-time personalization", "Contextual optimization", "Behavioral adaptation"]
    },
    {
      icon: Users,
      title: "Customer Segmentation & Targeting",
      description: "Advanced AI segmentation that identifies micro-segments and predicts optimal journey paths",
      benefits: ["Micro-segmentation", "Predictive targeting", "Dynamic persona creation"]
    },
    {
      icon: Zap,
      title: "Automated Journey Triggers",
      description: "Intelligent automation that triggers personalized journeys based on customer actions and milestones",
      benefits: ["Smart triggers", "Milestone tracking", "Automated responses"]
    },
    {
      icon: Shield,
      title: "Privacy-First Journey Management",
      description: "GDPR-compliant journey orchestration with built-in consent management and data protection",
      benefits: ["GDPR compliance", "Consent management", "Data privacy controls"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses starting their customer journey automation",
      features: [
        "Up to 10,000 customers",
        "Basic journey templates",
        "Email & SMS channels",
        "Standard analytics",
        "Email support",
        "Basic AI insights"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
        description: "Ideal for growing companies with complex customer journeys",
      features: [
        "Up to 100,000 customers",
        "Advanced journey builder",
        "All communication channels",
        "Advanced AI optimization",
        "Priority support",
        "Custom integrations",
        "White-label options",
        "Advanced analytics"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large organizations requiring enterprise-grade journey orchestration",
      features: [
        "Unlimited customers",
        "Custom journey development",
        "Advanced security features",
        "24/7 dedicated support",
        "Custom AI models",
        "Advanced data governance",
        "API access",
        "On-premise deployment"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      description: "Create personalized shopping journeys from discovery to post-purchase support",
      metrics: ["Conversion rates", "Customer lifetime value", "Cart abandonment reduction"]
    },
    {
      industry: "SaaS",
      description: "Optimize user onboarding, feature adoption, and retention journeys",
      metrics: ["User activation", "Feature adoption", "Churn reduction"]
    },
    {
      industry: "Financial Services",
      description: "Build trust through personalized financial journey experiences",
      metrics: ["Account activation", "Product adoption", "Customer satisfaction"]
    },
    {
      industry: "Healthcare",
      description: "Create patient-centric care journeys from appointment to follow-up",
      metrics: ["Patient engagement", "Appointment adherence", "Outcome improvement"]
    }
  ];

  const channels = [
    { icon: Mail, name: "Email", description: "Personalized email campaigns and automation" },
    { icon: MessageSquare, name: "SMS", description: "Text message notifications and updates" },
    { icon: Monitor, name: "Web", description: "Website personalization and optimization" },
    { icon: Smartphone, name: "Mobile App", description: "In-app messaging and push notifications" },
    { icon: Tablet, name: "Social Media", description: "Social platform integration and messaging" },
    { icon: Phone, name: "Voice", description: "Call center integration and IVR optimization" }
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
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
              <Route className="w-4 h-4 mr-2" />
              AI-Powered Customer Journey Orchestration
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Orchestrate Customer Journeys
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Like Never Before</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Our AI-powered platform automatically maps, optimizes, and orchestrates customer journeys across all channels, 
              delivering personalized experiences that drive engagement, conversion, and loyalty.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              
              <button className="inline-flex items-center px-8 py-4 border-2 border-purple-400/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300">
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
              Powerful Features for Journey Orchestration
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to create, optimize, and manage customer journeys at scale
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
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Channels Section */}
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
              Orchestrate Across All Channels
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Seamlessly manage customer interactions across every touchpoint
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {channels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-8 text-center hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <channel.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{channel.name}</h3>
                <p className="text-gray-400">{channel.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that fits your business needs and scale as you grow
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
                    ? 'border-purple-500/50 shadow-lg shadow-purple-500/25' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
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
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored journey orchestration for your industry
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
                      <TrendingUp className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Journeys?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Join thousands of businesses using AI to create exceptional customer experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
              >
                <span className="flex items-center gap-2">
                  Start Your Free Trial
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300"
              >
                Contact Sales Team
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
              <strong>Website:</strong> <a href="https://ziontechgroup.com" className="text-purple-400 hover:text-purple-300">https://ziontechgroup.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// Add Play icon component
const Play = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z"/>
  </svg>
);