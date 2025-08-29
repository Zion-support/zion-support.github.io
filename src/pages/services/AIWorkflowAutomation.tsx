import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Zap, 
  Brain, 
  Clock, 
  TrendingUp, 
  Shield, 
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
  MapPin
} from 'lucide-react';

export default function AIWorkflowAutomation() {
  const features = [
    {
      icon: Brain,
      title: "Intelligent Process Mapping",
      description: "AI automatically analyzes and maps your existing workflows, identifying optimization opportunities and bottlenecks."
    },
    {
      icon: Zap,
      title: "Smart Automation Rules",
      description: "Create complex automation rules using natural language, with AI suggesting the most efficient paths."
    },
    {
      icon: Clock,
      title: "Real-time Monitoring",
      description: "Monitor workflow performance in real-time with predictive analytics and automated alerts."
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "AI continuously learns from your workflows to suggest improvements and optimize performance."
    },
    {
      icon: Shield,
      title: "Compliance Automation",
      description: "Automatically ensure compliance with industry regulations and internal policies."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless integration with your existing tools and team collaboration platforms."
    }
  ];

  const benefits = [
    "Reduce manual tasks by up to 80%",
    "Improve process efficiency by 60%",
    "Cut operational costs by 40%",
    "Ensure 99.9% compliance accuracy",
    "Scale operations without adding headcount",
    "Real-time visibility into all processes"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small teams getting started with workflow automation",
      features: [
        "Up to 10 workflows",
        "Basic AI insights",
        "Email support",
        "Standard integrations",
        "Basic reporting",
        "5 team members"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing businesses with complex workflow needs",
      features: [
        "Up to 50 workflows",
        "Advanced AI analytics",
        "Priority support",
        "Custom integrations",
        "Advanced reporting",
        "Unlimited team members",
        "API access",
        "Custom dashboards"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations requiring enterprise-grade automation",
      features: [
        "Unlimited workflows",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label solutions",
        "Advanced security",
        "Custom training",
        "SLA guarantees",
        "On-premise options"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Healthcare",
      description: "Automate patient intake, appointment scheduling, and medical record management",
      benefits: ["Improved patient care", "Reduced wait times", "Better compliance"]
    },
    {
      industry: "Finance",
      description: "Streamline loan processing, compliance checks, and risk assessment workflows",
      benefits: ["Faster approvals", "Reduced errors", "Better risk management"]
    },
    {
      industry: "Manufacturing",
      description: "Optimize production planning, quality control, and supply chain management",
      benefits: ["Increased efficiency", "Better quality", "Cost reduction"]
    },
    {
      industry: "Retail",
      description: "Automate inventory management, customer service, and order processing",
      benefits: ["Better inventory control", "Improved customer experience", "Faster order fulfillment"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Workflow Automation - Zion Tech Group"
        description="Transform your business processes with AI-powered workflow automation. Reduce manual tasks, improve efficiency, and scale operations intelligently."
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Automation
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              AI Workflow Automation
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business processes with intelligent automation. Our AI-powered platform 
              learns your workflows and continuously optimizes them for maximum efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
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
              Powerful Features for Intelligent Automation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform provides everything you need to automate, optimize, and scale your business workflows.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
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
              Transform Your Business Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See measurable results within weeks of implementing AI workflow automation.
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

      {/* Pricing Section */}
      <section className="py-20">
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
                className={`relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border-2 ${
                  plan.popular 
                    ? 'border-purple-500 from-purple-900/20 to-purple-800/20' 
                    : 'border-slate-600'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
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
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-700">
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
              Our AI workflow automation platform is designed to work across all industries.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-700 to-slate-600 p-6 rounded-xl border border-slate-500"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Workflows?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses that have transformed their operations with AI-powered workflow automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-700">
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
                Ready to transform your business with AI workflow automation? Our experts are here to help you get started.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-white">+1 302 464 0950</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-white">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-700 to-slate-600 p-8 rounded-xl border border-slate-500"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Request a Demo</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your workflow automation needs"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
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