import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Heart, 
  Brain, 
  MessageCircle, 
  Users, 
  BarChart3, 
  CheckCircle,
  ArrowRight,
  Star,
  DollarSign,
  Target,
  Rocket,
  Cpu,
  Database,
  Cloud,
  Lock,
  Globe,
  Phone,
  Mail,
  MapPin,
  Zap,
  TrendingUp,
  Shield,
  Clock,
  Eye,
  Smile,
  Award
} from 'lucide-react';

export default function AICustomerExperiencePlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Personalization",
      description: "Machine learning algorithms that understand customer preferences and deliver personalized experiences in real-time."
    },
    {
      icon: MessageCircle,
      title: "Intelligent Chat Support",
      description: "AI chatbots that provide instant, context-aware customer support across all channels and languages."
    },
    {
      icon: Users,
      title: "Customer Journey Mapping",
      description: "Visualize and optimize every touchpoint in the customer journey for maximum satisfaction and conversion."
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast customer behavior, identify churn risks, and proactively address customer needs before they arise."
    },
    {
      icon: Shield,
      title: "Sentiment Analysis",
      description: "Real-time monitoring of customer sentiment across all channels with automated alerting and response systems."
    },
    {
      icon: Zap,
      title: "Omnichannel Integration",
      description: "Seamlessly connect all customer touchpoints - web, mobile, social, email, and phone for consistent experiences."
    }
  ];

  const benefits = [
    "Increase customer satisfaction scores by 45%",
    "Reduce customer churn by 30%",
    "Improve response times by 70%",
    "Boost customer lifetime value by 60%",
    "Increase conversion rates by 35%",
    "Reduce support costs by 40%"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$399",
      period: "/month",
      description: "Perfect for small businesses starting their CX transformation journey",
      features: [
        "Up to 1,000 customers",
        "Basic AI personalization",
        "Email & chat support",
        "Standard integrations",
        "Basic analytics dashboard",
        "5 team members",
        "Email support"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$899",
      period: "/month",
      description: "Ideal for growing businesses with complex customer experience needs",
      features: [
        "Up to 10,000 customers",
        "Advanced AI personalization",
        "Multi-channel support",
        "Custom integrations",
        "Advanced analytics & reporting",
        "Unlimited team members",
        "Priority support",
        "API access",
        "Custom dashboards",
        "A/B testing tools"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "For large organizations requiring enterprise-grade customer experience management",
      features: [
        "Unlimited customers",
        "Custom AI models",
        "Full omnichannel support",
        "White-label solutions",
        "Advanced security & compliance",
        "Custom training & onboarding",
        "SLA guarantees",
        "24/7 dedicated support",
        "On-premise options",
        "Advanced automation workflows"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      description: "Personalized product recommendations, intelligent search, and seamless checkout experiences",
      benefits: ["Higher conversion rates", "Increased average order value", "Better customer retention"]
    },
    {
      industry: "Financial Services",
      description: "Personalized financial advice, proactive fraud detection, and seamless banking experiences",
      benefits: ["Improved trust", "Better compliance", "Higher customer satisfaction"]
    },
    {
      industry: "Healthcare",
      description: "Personalized patient care, appointment scheduling, and health monitoring",
      benefits: ["Better patient outcomes", "Improved efficiency", "Enhanced patient experience"]
    },
    {
      industry: "Travel & Hospitality",
      description: "Personalized travel recommendations, booking experiences, and customer service",
      benefits: ["Higher booking rates", "Better customer loyalty", "Improved service quality"]
    }
  ];

  const capabilities = [
    {
      category: "AI & Machine Learning",
      items: [
        "Natural Language Processing",
        "Predictive Analytics",
        "Sentiment Analysis",
        "Behavioral Modeling",
        "Recommendation Engines",
        "Automated Decision Making"
      ]
    },
    {
      category: "Customer Engagement",
      items: [
        "Multi-channel Communication",
        "Personalized Content",
        "Interactive Chatbots",
        "Voice & Video Support",
        "Social Media Integration",
        "Email Marketing Automation"
      ]
    },
    {
      category: "Analytics & Insights",
      items: [
        "Real-time Dashboards",
        "Customer Journey Analytics",
        "Performance Metrics",
        "ROI Tracking",
        "Competitive Analysis",
        "Predictive Reporting"
      ]
    },
    {
      category: "Integration & Security",
      items: [
        "API-first Architecture",
        "Third-party Integrations",
        "Data Encryption",
        "GDPR Compliance",
        "SOC 2 Certification",
        "Enterprise SSO"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Customer Experience Platform - Zion Tech Group"
        description="Transform customer interactions with AI-powered personalization, intelligent support, and predictive analytics. Boost satisfaction, reduce churn, and increase lifetime value."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 text-white text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              AI-Powered CX Platform
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              AI Customer Experience Platform
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Deliver exceptional customer experiences with AI-powered personalization, intelligent support, 
              and predictive analytics that understand and anticipate customer needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold rounded-lg hover:from-pink-700 hover:to-rose-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Powerful Features for Exceptional CX
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform provides everything you need to create memorable customer experiences that drive loyalty and growth.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-pink-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg flex items-center justify-center mb-4">
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
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Transform Your Customer Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See measurable improvements in customer satisfaction, retention, and business growth.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-lg text-white">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Platform Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to deliver exceptional customer experiences across all touchpoints.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600"
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg flex items-center justify-center mr-3">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include a 14-day free trial.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-slate-700 to-slate-600 p-8 rounded-xl border-2 ${
                  plan.popular 
                    ? 'border-pink-500 from-pink-900/20 to-pink-800/20' 
                    : 'border-slate-500'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white hover:from-pink-700 hover:to-rose-700'
                      : 'bg-slate-600 text-white hover:bg-slate-500'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI customer experience platform is designed to work across all industries.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl p-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Experience?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses that have revolutionized their customer experience with AI-powered personalization and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-pink-600 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Ready to revolutionize your customer experience? Our experts are here to help you get started.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-pink-400 mr-3" />
                  <span className="text-white">+1 302 464 0950</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-pink-400 mr-3" />
                  <span className="text-white">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-pink-400 mr-3" />
                  <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Request a Demo</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your customer experience needs"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold rounded-lg hover:from-pink-700 hover:to-rose-700 transition-all duration-300"
                >
                  Request Demo
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}