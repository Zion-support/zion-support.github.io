import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Users,
  BarChart3,
  Brain,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Target,
  Activity,
  AlertTriangle,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Globe,
  Rocket,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Eye,
  Search,
  Filter,
  Download,
  Upload,
  Settings,
  Bell,
  UserCheck,
  UserX,
  RefreshCw,
  TrendingDown,
  PieChart,
  LineChart,
  BarChart,
  ScatterChart,
  Play,
  Calendar,
  Heart,
  ShoppingCart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AIPoweredCustomerChurnPredictor = () => {
  const features = [
    {
      title: "Advanced AI Algorithms",
      description: "Machine learning models trained on millions of customer interactions to predict churn with 95%+ accuracy",
      icon: Brain,
      color: "text-blue-500"
    },
    {
      title: "Real-time Monitoring",
      description: "Continuous monitoring of customer behavior patterns and instant alerts for at-risk customers",
      icon: Activity,
      color: "text-green-500"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast customer churn up to 90 days in advance with detailed risk scoring",
      icon: TrendingUp,
      color: "text-purple-500"
    },
    {
      title: "Behavioral Analysis",
      description: "Deep analysis of customer usage patterns, engagement metrics, and satisfaction indicators",
      icon: Eye,
      color: "text-orange-500"
    },
    {
      title: "Automated Interventions",
      description: "Smart automation triggers personalized retention campaigns and customer success actions",
      icon: Zap,
      color: "text-yellow-500"
    },
    {
      title: "Comprehensive Reporting",
      description: "Detailed dashboards with actionable insights and retention strategy recommendations",
      icon: BarChart3,
      color: "text-indigo-500"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses with up to 1,000 customers",
      features: [
        "Up to 1,000 customer profiles",
        "Basic churn prediction models",
        "Email alerts for at-risk customers",
        "Standard reporting dashboard",
        "Email support",
        "API access (1,000 calls/month)",
        "Basic integrations (CRM, email)",
        "7-day data retention"
      ],
      popular: false,
      cta: "Start Free Trial",
      link: "/contact"
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing businesses with up to 10,000 customers",
      features: [
        "Up to 10,000 customer profiles",
        "Advanced ML churn prediction",
        "Real-time monitoring & alerts",
        "Advanced analytics dashboard",
        "Priority support",
        "API access (10,000 calls/month)",
        "Advanced integrations",
        "30-day data retention",
        "Custom retention campaigns",
        "A/B testing for interventions",
        "Team collaboration tools"
      ],
      popular: true,
      cta: "Start Free Trial",
      link: "/contact",
      savings: "Save 20% annually"
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "Comprehensive solution for large organizations with unlimited customers",
      features: [
        "Unlimited customer profiles",
        "Custom ML model training",
        "Real-time predictive analytics",
        "Advanced intervention automation",
        "24/7 dedicated support",
        "Unlimited API access",
        "Custom integrations",
        "90-day data retention",
        "White-label solutions",
        "Advanced security features",
        "Custom reporting & analytics",
        "Dedicated customer success manager"
      ],
      popular: false,
      cta: "Contact Sales",
      link: "/contact"
    }
  ];

  const benefits = [
    {
      title: "Reduce Customer Churn by 40%",
      description: "Proactively identify and retain at-risk customers before they leave",
      icon: TrendingDown,
      color: "text-red-500"
    },
    {
      title: "Increase Customer Lifetime Value",
      description: "Improve retention rates and maximize revenue from existing customers",
      icon: DollarSign,
      color: "text-green-500"
    },
    {
      title: "Save on Customer Acquisition",
      description: "Retain existing customers instead of spending on expensive new customer acquisition",
      icon: Users,
      color: "text-blue-500"
    },
    {
      title: "Data-Driven Decisions",
      description: "Make informed decisions based on comprehensive customer behavior analytics",
      icon: BarChart3,
      color: "text-purple-500"
    }
  ];

  const useCases = [
    {
      title: "SaaS Companies",
      description: "Predict subscription cancellations and reduce churn in software-as-a-service businesses",
      icon: Cpu,
      examples: ["User engagement monitoring", "Feature adoption tracking", "Subscription renewal prediction"]
    },
    {
      title: "E-commerce",
      description: "Identify customers likely to abandon shopping carts or stop purchasing",
      icon: ShoppingCart,
      examples: ["Purchase pattern analysis", "Cart abandonment prediction", "Customer re-engagement campaigns"]
    },
    {
      title: "Financial Services",
      description: "Predict account closures and reduce customer attrition in banking and insurance",
      icon: DollarSign,
      examples: ["Account activity monitoring", "Service usage analysis", "Retention campaign automation"]
    },
    {
      title: "Healthcare",
      description: "Predict patient appointment cancellations and improve healthcare service retention",
      icon: Heart,
      examples: ["Appointment adherence tracking", "Treatment compliance monitoring", "Patient engagement optimization"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered Customer Churn Predictor
              </h1>
              <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto">
                Predict customer churn with 95%+ accuracy using advanced machine learning. 
                Proactively retain customers and boost your business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-zinc-400 text-zinc-300 font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-300"
                >
                  Watch Demo
                  <Play className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features for Churn Prevention
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our AI-powered platform combines advanced machine learning with comprehensive 
              customer analytics to help you predict and prevent customer churn.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-lg bg-slate-600/50 mb-4 ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Customer Retention Strategy
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Stop losing valuable customers and start building lasting relationships 
              with data-driven insights and proactive interventions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-slate-700/30 rounded-xl border border-slate-600/30"
              >
                <div className={`p-3 rounded-lg bg-slate-600/50 ${benefit.color}`}>
                  <benefit.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-zinc-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our AI-powered churn prediction platform is designed to work across 
              various industries and business models.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-blue-600/20 text-blue-400 mr-4">
                    <useCase.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                </div>
                <p className="text-zinc-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zinc-400">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include a 14-day free trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-700/50 p-8 rounded-xl border ${
                  tier.popular 
                    ? 'border-blue-500/50 bg-gradient-to-br from-slate-700/50 to-blue-900/20' 
                    : 'border-slate-600/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-zinc-400">{tier.period}</span>
                  </div>
                  <p className="text-zinc-300 mb-4">{tier.description}</p>
                  {tier.savings && (
                    <p className="text-green-400 text-sm font-semibold">{tier.savings}</p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zinc-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={tier.link}
                  className={`w-full inline-flex justify-center items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'bg-slate-600 text-white hover:bg-slate-500'
                  }`}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Stop Customer Churn?
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses that have transformed their customer retention 
              with our AI-powered churn prediction platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-zinc-400 text-zinc-300 font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-300"
              >
                Schedule Demo
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-zinc-300 hover:text-white transition-colors">
                +1 (302) 464-0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-zinc-300 hover:text-white transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-zinc-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Missing icon component
const ShoppingCart = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
  </svg>
);

const Play = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Heart = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

export default AIPoweredCustomerChurnPredictor;