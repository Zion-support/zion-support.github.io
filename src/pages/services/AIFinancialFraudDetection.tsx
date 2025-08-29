import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  TrendingUp, 
  AlertTriangle, 
  Clock, 
  BarChart3, 
  CheckCircle,
  Play,
  Star,
  Award,
  DollarSign,
  Target,
  Zap,
  Brain,
  Globe,
  Rocket,
  Eye,
  Lock,
  Activity,
  Cpu,
  Database
} from 'lucide-react';

export default function AIFinancialFraudDetection() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Fraud Detection",
      description: "Advanced machine learning algorithms that detect fraudulent transactions in real-time with 99.9% accuracy"
    },
    {
      icon: Shield,
      title: "Real-time Protection",
      description: "Instant fraud detection and blocking before transactions are processed, protecting your business 24/7"
    },
    {
      icon: Activity,
      title: "Behavioral Analysis",
      description: "Learn customer patterns and detect anomalies that indicate potential fraud or suspicious activity"
    },
    {
      icon: Eye,
      title: "Multi-layered Security",
      description: "Combines AI, machine learning, and rule-based systems for comprehensive fraud protection"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive fraud analytics dashboard with detailed insights and reporting capabilities"
    },
    {
      icon: Lock,
      title: "Compliance Ready",
      description: "Built-in compliance features for PCI DSS, SOC2, and other financial security standards"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses processing up to 10,000 transactions monthly",
      features: [
        "Up to 10,000 transactions/month",
        "Basic AI fraud detection",
        "Email support",
        "Standard integrations",
        "Basic reporting",
        "Email alerts"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing businesses with 10,000-100,000 monthly transactions",
      features: [
        "Up to 100,000 transactions/month",
        "Advanced AI algorithms",
        "Priority support",
        "Custom integrations",
        "Advanced analytics",
        "Real-time alerts",
        "Custom rules engine"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$3,999",
      period: "/month",
      description: "For large organizations processing 100,000+ transactions monthly",
      features: [
        "Unlimited transactions",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label options",
        "Advanced security features",
        "Custom SLA guarantees",
        "API access & webhooks"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Prevent Fraud Losses",
      description: "Stop fraudulent transactions before they cost your business money"
    },
    {
      icon: Clock,
      title: "Real-time Protection",
      description: "24/7 monitoring and instant fraud detection and blocking"
    },
    {
      icon: TrendingUp,
      title: "Reduce False Positives",
      description: "AI algorithms minimize legitimate transaction rejections"
    },
    {
      icon: BarChart3,
      title: "Compliance & Reporting",
      description: "Meet regulatory requirements with comprehensive fraud reporting"
    }
  ];

  const fraudTypes = [
    {
      title: "Payment Card Fraud",
      description: "Detect stolen credit cards, counterfeit cards, and unauthorized transactions",
      protection: "99.9% detection rate",
      icon: CreditCard
    },
    {
      title: "Account Takeover",
      description: "Identify suspicious login patterns and unauthorized account access",
      protection: "Real-time blocking",
      icon: Lock
    },
    {
      title: "Identity Theft",
      description: "Detect synthetic identities and stolen personal information",
      protection: "Advanced verification",
      icon: User
    },
    {
      title: "Transaction Fraud",
      description: "Identify unusual spending patterns and suspicious transactions",
      protection: "Instant alerts",
      icon: AlertTriangle
    }
  ];

  const industries = [
    {
      name: "E-commerce",
      description: "Protect online stores from payment fraud and chargebacks",
      metrics: ["40% reduction in chargebacks", "99.9% fraud detection", "Real-time protection"]
    },
    {
      name: "Financial Services",
      description: "Secure banking, lending, and investment platforms",
      metrics: ["60% fraud prevention", "Compliance ready", "Advanced analytics"]
    },
    {
      name: "Healthcare",
      description: "Protect patient data and prevent insurance fraud",
      metrics: ["HIPAA compliant", "Real-time monitoring", "Custom rules"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Financial Fraud Detection
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Protect Your Business with
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                {" "}AI Fraud Detection
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stop financial fraud in its tracks with our advanced AI-powered detection system. 
              Real-time protection with 99.9% accuracy, protecting your business 24/7 from fraudulent transactions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg font-semibold text-white hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border-2 border-red-500 text-red-400 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                <Play className="w-5 h-5 inline mr-2" />
                Watch Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Fraud Detection Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to protect your business from financial fraud
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fraud Types Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Fraud Protection
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Protect against all types of financial fraud with our AI-powered detection system
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fraudTypes.map((fraud, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <fraud.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{fraud.title}</h3>
                <p className="text-gray-300 mb-4">{fraud.description}</p>
                <div className="inline-flex items-center px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-sm">
                  {fraud.protection}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tailored fraud protection for your industry's unique challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{industry.name}</h3>
                <p className="text-gray-300 mb-6">{industry.description}</p>
                <div className="space-y-2">
                  {industry.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center text-red-400">
                      <Shield className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Fraud Detection?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Protect your business with intelligent fraud prevention
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
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
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your fraud protection needs. All plans include a 14-day free trial.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-red-500/50 bg-gradient-to-br from-red-500/10 to-orange-500/10' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.name === "Enterprise" ? "/contact" : "/signup"}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
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
      <section className="py-20 px-4 bg-gradient-to-r from-red-600/20 to-orange-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Protect Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that trust our AI fraud detection to protect their financial transactions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg font-semibold text-white hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
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