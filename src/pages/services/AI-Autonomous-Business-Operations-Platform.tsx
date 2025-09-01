import React from 'react';
import { motion } from 'framer-motion';
import {

  Bot, 
  Brain, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  BarChart3,
  Lock,
  Globe,
  Award,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Eye,
  Search,
  Settings,
  Clock,
  Users,
  Database,
  Cpu,
  Network,
  Smartphone,
  Cog,
  Workflow,
  Automation,
  Robot,
  Target,
  LineChart,
  Gauge,
  Zap as ZapIcon
} from 'lucide-react';

const AIAutonomousBusinessOperationsPlatform: React.FC = () => {

  const features = [
    "AI-Powered Process Automation & Orchestration",
    "Intelligent Decision Making & Business Logic",
    "Autonomous Resource Allocation & Optimization",
    "Predictive Maintenance & Proactive Monitoring",
    "Self-Healing Systems & Error Recovery",
    "Adaptive Learning & Continuous Improvement",
    "Multi-Department Workflow Automation",
    "Real-time Performance Analytics & Insights",
    "Intelligent Customer Service & Support",
    "Automated Compliance & Risk Management"
  ];

  const benefits = [
    "Increase operational efficiency by 60%",
    "Reduce operational costs by 40-50%",
    "Eliminate 80% of manual tasks",
    "Improve decision accuracy by 90%",
    "Enable 24/7 autonomous operations"
  ];

  const useCases = [
    "Manufacturing & Production",
    "Financial Services & Banking",
    "E-commerce & Retail",
    "Healthcare & Pharmaceuticals",
    "Logistics & Transportation",
    "Energy & Utilities",
    "Telecommunications",
    "Professional Services"
  ];

  const pricingPlans = [
    {

      name: "Starter",
      price: "$799",
      period: "/month",
      description: "Perfect for small to medium businesses",
      features: [
        "Up to 10 automated processes",
        "Basic AI decision making",
        "Standard workflow automation",
        "Basic reporting",
        "Email support",
        "Standard integrations"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {

      name: "Professional",
      price: "$1,999",
      period: "/month",
      description: "Ideal for growing enterprises",
      features: [
        "Up to 50 automated processes",
        "Advanced AI decision making",
        "Complex workflow automation",
        "Advanced analytics",
        "API access",
        "Priority support",
        "Custom integrations",
        "Multi-department support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {

      name: "Enterprise",
      price: "$4,999",
      period: "/month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited automated processes",
        "Full AI suite",
        "Custom development",
        "24/7 dedicated support",
        "Advanced security",
        "White-label options",
        "Dedicated success manager",
        "Custom AI model training"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const technicalSpecs = [
    "AI Models: Custom Business Logic ML Models, Deep Learning Networks",
    "Security: SOC 2 Type II, ISO 27001, GDPR compliant",
    "Performance: Real-time processing, 99.99% uptime SLA",
    "Integrations: ERP, CRM, HR, Finance, IoT devices",
    "Scalability: Handles 100M+ operations/day",
    "Compliance: SOX, PCI DSS, HIPAA, ISO 9001 ready"
  ];

  const automationAreas = [
    "Finance & Accounting",
    "Human Resources",
    "Customer Service",
    "Sales & Marketing",
    "Operations & Logistics",
    "IT & Infrastructure",
    "Compliance & Legal",
    "Research & Development"
  ];

  const industries = [
    "Manufacturing",
    "Financial Services",
    "Retail",
    "Healthcare",
    "Logistics",
    "Energy",
    "Telecommunications",
    "Professional Services"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-purple-600/20 p-3 rounded-full">
                <Bot className="h-8 w-8 text-purple-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous Business Operations Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with fully autonomous AI operations. Increase efficiency by 60%, 
              reduce costs by 50%, and enable 24/7 autonomous decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Autonomous Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Leverage cutting-edge AI to automate your entire business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="bg-purple-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-purple-400" />
                </div>
                <p className="text-white text-lg font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to automate your business operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="bg-purple-600/20 p-2 rounded-lg mt-1">
                  <CheckCircle className="h-5 w-5 text-purple-400" />
                </div>
                <span className="text-white text-lg">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Automation
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Automate every aspect of your business operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {automationAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 text-center"
              >
                <div className="bg-purple-600/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Automation className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold">{area}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tailored solutions for every industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 text-center"
              >
                <div className="bg-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cog className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold">{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your automation needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-white/5 backdrop-blur-lg rounded-xl p-8 border ${

                  plan.popular 
                    ? 'border-purple-500/50 bg-purple-600/10' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${

                    plan.popular
                      ? 'bg-purple-600 hover:bg-purple-700 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Perfect For Every Business
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Versatile solutions for diverse business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 text-center"
              >
                <div className="bg-purple-600/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold">{useCase}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise-Grade Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with the latest AI and automation technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {technicalSpecs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="bg-green-600/20 p-2 rounded-lg mt-1">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                </div>
                <span className="text-white text-lg">{spec}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of organizations already operating autonomously
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousBusinessOperationsPlatform;