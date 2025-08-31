import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Workflow, 
  TrendingUp, 
  Shield, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Automation,
  Business,
  Operations,
  AI,
  Cloud,
  Security,
  Analytics,
  Integration,
  Zap,
  Brain,
  Cpu,
  Database,
  Network,
  Globe
} from 'lucide-react';

const AIAutonomousBusinessOperationsPlatform: React.FC = () => {
  const features = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Autonomous Decision Making",
      description: "AI-powered decision engines that operate independently with human oversight and approval workflows"
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Intelligent Process Automation",
      description: "End-to-end business process automation with machine learning optimization and continuous improvement"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Advanced forecasting and trend analysis to optimize business operations and resource allocation"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Compliance Automation",
      description: "Automated regulatory compliance monitoring and reporting with real-time alerts and audit trails"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Human-AI Collaboration",
      description: "Seamless integration between human workers and AI systems for optimal productivity and decision quality"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Optimization",
      description: "Continuous monitoring and optimization of business processes for maximum efficiency and cost savings"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$3,999",
      period: "/month",
      description: "Perfect for small businesses starting their automation journey",
      features: [
        "Up to 10 automated processes",
        "Basic AI decision support",
        "Standard compliance features",
        "Email support",
        "10GB data storage",
        "Basic analytics dashboard"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$8,999",
      period: "/month",
      description: "Ideal for growing businesses requiring advanced automation",
      features: [
        "Up to 50 automated processes",
        "Advanced AI decision engines",
        "Enhanced compliance automation",
        "Priority support",
        "50GB data storage",
        "Advanced analytics",
        "Custom workflow builder"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$24,999",
      period: "/month",
      description: "For large organizations requiring full autonomous operations",
      features: [
        "Unlimited automated processes",
        "Full autonomous decision making",
        "Enterprise compliance suite",
        "Dedicated support team",
        "Unlimited storage",
        "Custom AI models",
        "White-label solution",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Automation className="w-8 h-8" />,
      title: "Operational Excellence",
      description: "Achieve unprecedented efficiency through intelligent automation and optimization"
    },
    {
      icon: <Business className="w-8 h-8" />,
      title: "Cost Reduction",
      description: "Significantly reduce operational costs while improving quality and speed"
    },
    {
      icon: <Operations className="w-8 h-8" />,
      title: "Scalable Growth",
      description: "Scale your operations seamlessly without proportional cost increases"
    },
    {
      icon: <AI className="w-8 h-8" />,
      title: "Intelligent Insights",
      description: "Gain deep insights into your business operations with AI-powered analytics"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Native",
      description: "Built for modern cloud infrastructure with seamless scaling and deployment"
    },
    {
      icon: <Security className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-grade security with compliance automation and audit trails"
    }
  ];

  const useCases = [
    {
      title: "Finance & Banking",
      description: "Automated risk assessment, fraud detection, and regulatory compliance",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Healthcare",
      description: "Patient care automation, medical record management, and compliance monitoring",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Manufacturing",
      description: "Supply chain optimization, quality control, and predictive maintenance",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Retail & E-commerce",
      description: "Inventory management, customer service automation, and demand forecasting",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Autonomous Business Operations Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with fully autonomous AI operations. Automate complex decision-making, 
              optimize processes, and achieve unprecedented efficiency while maintaining human oversight and control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-colors"
              >
                Call +1 302 464 0950
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Autonomous Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of business operations with AI-powered automation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="text-blue-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how autonomous operations are transforming industries worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300 text-center"
              >
                <div className="text-blue-400 mb-4 flex justify-center">{useCase.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Autonomous Operations?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your organization with cutting-edge AI automation technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-blue-400 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your organization's automation needs and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                  plan.popular 
                    ? 'border-blue-500 ring-2 ring-blue-500/20' 
                    : 'border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://ziontechgroup.com/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-transparent border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the autonomous operations revolution and transform your business today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-colors"
              >
                Contact Sales Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Phone</h4>
              <a href="tel:+13024640950" className="text-white hover:text-blue-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Email</h4>
              <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-blue-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Address</h4>
              <p className="text-white">
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

export default AIAutonomousBusinessOperationsPlatform;