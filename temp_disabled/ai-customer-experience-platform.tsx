import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  MessageCircle, 
  Users, 
  TrendingUp, 
  Zap, 
  Shield, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  DollarSign,
  BarChart3,
  Smile,
  Target,
  Rocket,
  Brain,
  Eye,
  Settings,
  Palette,
  ShoppingCart
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AICustomerExperiencePlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Personalization",
      description: "Machine learning algorithms that understand customer behavior and deliver personalized experiences in real-time"
    },
    {
      icon: MessageCircle,
      title: "Omnichannel Communication",
      description: "Seamless customer interactions across email, chat, social media, and voice channels"
    },
    {
      icon: Eye,
      title: "Customer Journey Analytics",
      description: "Track and analyze every touchpoint to optimize the customer experience journey"
    },
    {
      icon: Zap,
      title: "Real-time Response",
      description: "Instant customer support and automated responses that never keep customers waiting"
    },
    {
      icon: Shield,
      title: "Data Privacy & Security",
      description: "Enterprise-grade security with GDPR compliance and customer data protection"
    },
    {
      icon: Palette,
      title: "Customizable Interface",
      description: "White-label solutions and customizable dashboards to match your brand identity"
    }
  ];

  const useCases = [
    {
      title: "E-commerce Personalization",
      description: "AI-driven product recommendations and personalized shopping experiences",
      icon: ShoppingCart
    },
    {
      title: "Customer Support Automation",
      description: "Intelligent chatbots and automated ticket routing for faster resolution",
      icon: MessageCircle
    },
    {
      title: "Customer Feedback Analysis",
      description: "Sentiment analysis and feedback categorization for actionable insights",
      icon: BarChart3
    },
    {
      title: "Loyalty Program Optimization",
      description: "AI-powered rewards and retention strategies based on customer behavior",
      icon: Heart
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$399",
      period: "/month",
      description: "Perfect for small businesses starting their CX journey",
      features: [
        "Up to 1,000 customers",
        "Basic AI personalization",
        "Email & chat support",
        "Standard analytics",
        "Basic integrations",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$899",
      period: "/month",
      description: "Ideal for growing businesses with advanced CX needs",
      features: [
        "Up to 10,000 customers",
        "Advanced AI personalization",
        "Omnichannel support",
        "Advanced analytics",
        "API access",
        "Custom dashboards",
        "Priority support",
        "Advanced integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "For large organizations with complex customer experience needs",
      features: [
        "Unlimited customers",
        "Custom AI models",
        "White-label solutions",
        "Dedicated support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantees",
        "On-premise options"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Customer Satisfaction",
      description: "Improve customer satisfaction scores with personalized experiences",
      metric: "85%",
      icon: Smile
    },
    {
      title: "Customer Retention",
      description: "Increase customer loyalty and reduce churn with better experiences",
      metric: "40%",
      icon: Heart
    },
    {
      title: "Response Time",
      description: "Reduce customer response times with AI automation",
      metric: "90%",
      icon: Clock
    },
    {
      title: "Revenue Growth",
      description: "Drive revenue through improved customer experience and loyalty",
      metric: "25%",
      icon: TrendingUp
    }
  ];

  const integrations = [
    "Shopify", "WooCommerce", "Salesforce", "HubSpot", "Zendesk", "Intercom",
    "Mailchimp", "Klaviyo", "Facebook", "Instagram", "Twitter", "LinkedIn",
    "Google Analytics", "Mixpanel", "Amplitude", "Segment", "Zapier", "Webhooks"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <SEO 
        title="AI-Powered Customer Experience Platform | Zion Tech Group"
        description="Revolutionary AI platform that transforms customer interactions with personalized experiences, omnichannel communication, and intelligent automation."
        keywords="AI customer experience, customer experience platform, AI personalization, omnichannel communication, customer analytics"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-8">
              <Heart className="w-4 h-4 mr-2" />
              AI-Powered Customer Experience
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Customer
              <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Experience Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform customer interactions with AI-powered personalization, omnichannel communication, 
              and intelligent automation. Deliver exceptional experiences that drive loyalty and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-blue-500/30 text-blue-300 font-semibold hover:bg-blue-500/10 transition-all duration-200"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary CX Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI platform combines cutting-edge technology with deep customer experience expertise 
              to deliver unprecedented personalization and automation capabilities.
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
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Customer Interactions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From e-commerce to customer support, our AI platform revolutionizes 
              how you engage with customers across every touchpoint.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl p-8 border border-blue-500/20"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                </div>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your customer experience needs. All plans include our core AI capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border-2 border-blue-500/50' 
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Measurable Results
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See the impact of AI-powered customer experience on your business metrics and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{benefit.metric}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Connect with your existing tools and platforms for a unified customer experience ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-blue-500/30 transition-all duration-200 text-center"
              >
                <span className="text-gray-300 font-medium text-sm">{integration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Customer Experience?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses who have already revolutionized their customer 
              experience with AI-powered personalization and automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/schedule-demo"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-blue-500/30 text-blue-300 font-semibold hover:bg-blue-500/10 transition-all duration-200"
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}