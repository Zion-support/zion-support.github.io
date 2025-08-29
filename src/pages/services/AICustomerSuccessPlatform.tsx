import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Heart, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  BarChart3,
  CheckCircle,
  MessageCircle,
  Target,
  Rocket,
  Star,
  Award,
  Clock,
  Globe,
  Lightbulb,
  ArrowRight,
  Play,
  Settings,
  Monitor,
  AlertTriangle
} from 'lucide-react';

export default function AICustomerSuccessPlatform() {
  const features = [
    {
      icon: Heart,
      title: "Predictive Customer Health",
      description: "AI algorithms predict customer churn and identify at-risk accounts before they leave"
    },
    {
      icon: Users,
      title: "Personalized Success Plans",
      description: "Automatically generate customized success strategies for each customer segment"
    },
    {
      icon: TrendingUp,
      title: "Real-time Engagement Tracking",
      description: "Monitor customer interactions and engagement levels across all touchpoints"
    },
    {
      icon: Shield,
      title: "Proactive Issue Resolution",
      description: "Identify and resolve customer issues before they become problems"
    },
    {
      icon: Zap,
      title: "Automated Success Workflows",
      description: "Streamline onboarding, training, and expansion processes with intelligent automation"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics & Insights",
      description: "Deep insights into customer behavior, satisfaction, and lifetime value"
    }
  ];

  const benefits = [
    {
      title: "Reduce Customer Churn",
      description: "Predict and prevent customer churn with AI-powered insights",
      metric: "Up to 40% reduction",
      icon: TrendingUp
    },
    {
      title: "Increase Customer Lifetime Value",
      description: "Drive expansion revenue through personalized success strategies",
      metric: "25% average increase",
      icon: Star
    },
    {
      title: "Improve Customer Satisfaction",
      description: "Proactive support and personalized experiences boost satisfaction scores",
      metric: "NPS improvement of 30+",
      icon: Heart
    },
    {
      title: "Scale Success Operations",
      description: "Handle more customers with fewer resources through intelligent automation",
      metric: "3x efficiency gain",
      icon: Rocket
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small SaaS companies with up to 500 customers",
      features: [
        "Up to 500 customers",
        "Basic AI insights",
        "Email support",
        "Standard integrations",
        "Basic analytics dashboard",
        "Success playbooks"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Growth",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing companies with 500-2,000 customers",
      features: [
        "Up to 2,000 customers",
        "Advanced AI predictions",
        "Priority support",
        "Custom integrations",
        "Advanced analytics",
        "Automated workflows",
        "Success scoring",
        "Churn prediction"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large organizations with unlimited customers",
      features: [
        "Unlimited customers",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label options",
        "Advanced security",
        "Custom development",
        "API access",
        "Multi-tenant support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const integrations = [
    { name: "Salesforce", category: "CRM" },
    { name: "HubSpot", category: "Marketing" },
    { name: "Intercom", category: "Support" },
    { name: "Slack", category: "Communication" },
    { name: "Zendesk", category: "Support" },
    { name: "Pipedrive", category: "Sales" },
    { name: "Mailchimp", category: "Email" },
    { name: "Stripe", category: "Payments" },
    { name: "QuickBooks", category: "Accounting" },
    { name: "Google Analytics", category: "Analytics" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Customer Success Platform - Zion Tech Group"
        description="Revolutionize customer success with AI-powered insights, predictive analytics, and automated workflows. Reduce churn and boost customer lifetime value."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              AI-Powered Customer Success
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Customer Success Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your customer success operations with AI-powered insights, predictive analytics, 
              and automated workflows that drive retention and expansion revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                Watch Demo
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Features for Customer Success
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to deliver exceptional customer experiences and drive business growth
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-pink-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Business Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See the measurable results our AI Customer Success Platform delivers
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-900 p-6 rounded-xl border border-slate-700"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300 mb-3">{benefit.description}</p>
                    <div className="inline-flex items-center px-3 py-1 bg-pink-600/20 text-pink-400 text-sm rounded-full">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {benefit.metric}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Connect with your existing tools and workflows for a unified customer success experience
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800 p-4 rounded-lg border border-slate-700 text-center hover:border-pink-500 transition-all duration-300"
              >
                <div className="text-white font-medium">{integration.name}</div>
                <div className="text-xs text-gray-400 mt-1">{integration.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your customer success needs
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-slate-900 p-8 rounded-xl border ${
                  plan.popular 
                    ? 'border-pink-500 ring-2 ring-pink-500/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
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
                      <CheckCircle className="w-5 h-5 text-pink-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-700 hover:to-purple-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Customer Success?
            </h2>
            <p className="text-xl text-pink-100 mb-8">
              Join leading SaaS companies that have revolutionized their customer success with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-pink-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}