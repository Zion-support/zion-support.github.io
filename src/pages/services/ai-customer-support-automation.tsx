import React from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { MessageCircle, Brain, Users, Clock, Shield, CheckCircle, Star, Award, Rocket, ArrowRight, Phone, Video, Zap, TrendingUp, BarChart3, Target, Globe, Heart, Settings, Monitor, Smartphone, Laptop, Headphones              } from 'lucide-react.ts';
import { SEO              } from '@/components/SEO';

export default function AICustomerSupportAutomation(...args: any[]): any {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Chatbots",
      description: "Intelligent chatbots that understand natural language and provide instant, accurate responses 24/7",
      benefits: ["Natural language processing", "Multi-language support", "Context-aware conversations"]
    },
    {
      icon: Brain,
      title: "Smart Ticket Routing",
      description: "Automatically categorize and route support tickets to the right agents based on content analysis",
      benefits: ["Intelligent categorization", "Priority-based routing", "Reduced response times"]
    },
    {
      icon: MessageCircle,
      title: "Omnichannel Support",
      description: "Unified support across email, chat, social media, and phone with consistent experience",
      benefits: ["Channel integration", "Unified customer history", "Seamless transitions"]
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Anticipate customer needs and potential issues before they arise using AI algorithms",
      benefits: ["Issue prevention", "Proactive support", "Customer satisfaction improvement"]
    },
    {
      icon: Users,
      title: "Agent Productivity Tools",
      description: "AI-powered tools that help support agents provide faster, more accurate responses",
      benefits: ["Response suggestions", "Knowledge base integration", "Performance analytics"]
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Streamline support processes with intelligent automation and workflow management",
      benefits: ["Process automation", "Escalation rules", "SLA management"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses starting with AI support",
      features: [
        "Up to 1,000 conversations/month",
        "Basic AI chatbot",
        "Email & chat support",
        "Basic analytics",
        "Email support",
        "Standard integrations"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for growing companies with moderate support volume",
      features: [
        "Up to 10,000 conversations/month",
        "Advanced AI chatbot",
        "Omnichannel support",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
        "Agent productivity tools",
        "Multi-language support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large organizations with high support volume and complex needs",
      features: [
        "Unlimited conversations",
        "Custom AI models",
        "Advanced automation",
        "Predictive analytics",
        "24/7 dedicated support",
        "Custom development",
        "Advanced security",
        "On-premise deployment"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      description: "Handle product inquiries, order tracking, and returns with intelligent automation",
      metrics: ["Response time reduction", "Customer satisfaction", "Support cost savings"]
    },
    {
      industry: "SaaS",
      description: "Provide technical support, feature explanations, and onboarding assistance",
      metrics: ["Ticket resolution time", "User activation", "Churn reduction"]
    },
    {
      industry: "Healthcare",
      description: "Manage appointment scheduling, general inquiries, and basic health information",
      metrics: ["Patient satisfaction", "Staff efficiency", "Wait time reduction"]
    },
    {
      industry: "Financial Services",
      description: "Handle account inquiries, transaction support, and basic financial guidance",
      metrics: ["Support efficiency", "Compliance adherence", "Customer retention"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Provide instant support around the clock without additional staffing costs"
    },
    {
      icon: TrendingUp,
      title: "Increased Efficiency",
      description: "Handle more support requests with faster response times and automated processes"
    },
    {
      icon: Users,
      title: "Improved Satisfaction",
      description: "Deliver consistent, accurate, and personalized support experiences"
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Reduce support costs while improving service quality and coverage"
    }
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
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Bot className="w-4 h-4 mr-2" />
              AI-Powered Customer Support
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Customer Support with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"> AI Automation</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Revolutionize your customer support with intelligent AI chatbots, automated workflows, and predictive analytics. 
              Provide 24/7 support while reducing costs and improving customer satisfaction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              
              <button className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300">
                <span className="flex items-center gap-2">
                  Watch Demo
                  <Play className="w-5 h-5" />
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose AI-Powered Support?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how AI automation can transform your customer support operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features for Modern Support
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to automate and optimize your customer support operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)              => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that best fits your support needs and scale as you grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index)              => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-4 bg-slate-700/30 rounded-lg p-4"
              >
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Flexible Solutions for Every Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our range of AI-powered customer support solutions designed to 
              meet your specific business needs and scale with your growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {solutions.map((solution, index)              => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-500/50 bg-gradient-to-br from-slate-800/50 to-cyan-900/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
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

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored support automation for different industries and use cases
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 lg:grid-cols-6 gap-6">
            {useCases.map((useCase, index)              => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.industry}</h3>
                <p className="text-gray-400 mb-4">{useCase.description}</p>
                
                <div>
                  <h4 className="text-cyan-400 font-medium mb-2">Key Metrics:</h4>
                  <ul className="space-y-1">
                    {useCase.metrics.map((metric, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <Target className="w-3 h-3 text-cyan-400 mr-2" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Join thousands of businesses that have already revolutionized their support operations with AI automation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Missing icon components
const DollarSign = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
  </svg>
);

const Target = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);