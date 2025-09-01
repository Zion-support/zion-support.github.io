import { motion } from "framer-motion";
import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import {

  Workflow, 
  Brain, 
  Link, 
  BarChart3, 
  Building, 
  FileText,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Zap
} from 'lucide-react';

const AIWorkflowAutomation: React.FC = () => {

  const serviceData = {

    title: "AI Workflow Automation Platform",
    subtitle: "Intelligent process automation that learns, adapts, and optimizes your business workflows",
    description: "Transform your business operations with our AI-powered workflow automation platform. Automate complex processes, reduce manual errors, and increase productivity by up to 300%.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=600",
    category: "AI & Automation",
    price: 1299,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$1,299 - $3,999/month",
    website: "https://ziontechgroup.com/services/ai-workflow-automation",
    contactEmail: "kleber@ziontechgroup.com",
    contactPhone: "+1 302 464 0950"
  };

  const features = [
    {

      title: "Intelligent Process Discovery",
      description: "AI automatically identifies and maps your existing workflows for optimization",
      icon: "🔍"
    },
    {

      title: "Adaptive Learning",
      description: "Machine learning algorithms continuously improve automation efficiency",
      icon: "🧠"
    },
    {

      title: "Multi-Platform Integration",
      description: "Seamlessly connect with 200+ business applications and tools",
      icon: "🔗"
    },
    {

      title: "Real-time Analytics",
      description: "Monitor workflow performance and identify bottlenecks instantly",
      icon: "📊"
    },
    {

      title: "Custom Workflow Builder",
      description: "Drag-and-drop interface for creating complex automation workflows",
      icon: "🏗️"
    },
    {

      title: "Compliance & Audit Trails",
      description: "Full audit trails and compliance reporting for regulatory requirements",
      icon: "📋"
    }
  ];

  const benefits = [
    "Reduce manual processing time by 80%",
    "Eliminate human errors in repetitive tasks",
    "Scale operations without proportional headcount increase",
    "Improve customer response times by 60%",
    "Reduce operational costs by 40-60%",
    "24/7 automated workflow execution"
  ];

  const useCases = [
    {

      title: "Customer Service Automation",
      description: "Automate ticket routing, response generation, and follow-up scheduling",
      industry: "All Industries"
    },
    {

      title: "Financial Process Automation",
      description: "Automate invoice processing, expense approvals, and financial reporting",
      industry: "Finance & Accounting"
    },
    {

      title: "HR Workflow Automation",
      description: "Streamline recruitment, onboarding, and employee lifecycle management",
      industry: "Human Resources"
    },
    {

      title: "Sales Process Automation",
      description: "Automate lead scoring, follow-up sequences, and proposal generation",
      industry: "Sales & Marketing"
    }
  ];

  const pricingPlans = [
    {

      name: "Starter",
      price: 1299,
      currency: "$",
      period: "month",
      features: [
        "Up to 10 automated workflows",
        "Basic AI learning capabilities",
        "5 platform integrations",
        "Email support",
        "Standard analytics dashboard"
      ],
      popular: false
    },
    {

      name: "Professional",
      price: 2499,
      currency: "$",
      period: "month",
      features: [
        "Up to 50 automated workflows",
        "Advanced AI learning algorithms",
        "25 platform integrations",
        "Priority support",
        "Advanced analytics & reporting",
        "Custom workflow templates"
      ],
      popular: true
    },
    {

      name: "Enterprise",
      price: 3999,
      currency: "$",
      period: "month",
      features: [
        "Unlimited automated workflows",
        "Custom AI model training",
        "Unlimited integrations",
        "Dedicated account manager",
        "Custom compliance features",
        "On-premise deployment options"
      ],
      popular: false
    }
  ];

  const competitors = [
    {

      name: "UiPath",
      price: "$2,500 - $8,000/month",
      pros: ["Enterprise-grade", "Robust features"],
      cons: ["Higher cost", "Complex setup"]
    },
    {

      name: "Automation Anywhere",
      price: "$1,800 - $6,000/month",
      pros: ["Good scalability", "Cloud-native"],
      cons: ["Limited AI", "Expensive"]
    },
    {

      name: "Zion Tech Group AI Workflow",
      price: "$1,299 - $3,999/month",
      pros: ["Advanced AI", "Cost-effective", "Easy setup"],
      cons: ["Newer platform", "Growing ecosystem"]
    }
  ];

  const faqs = [
    {

      question: "How long does it take to implement AI workflow automation?",
      answer: "Implementation typically takes 2-4 weeks depending on complexity. Our team handles the setup and provides comprehensive training."
    },
    {

      question: "Can I integrate with my existing business tools?",
      answer: "Yes! We support 200+ integrations including Salesforce, HubSpot, QuickBooks, Microsoft 365, and many more."
    },
    {

      question: "Is the platform secure and compliant?",
      answer: "Absolutely. We're SOC 2 Type II certified, GDPR compliant, and implement enterprise-grade security measures."
    },
    {

      question: "What kind of support do you provide?",
      answer: "We offer 24/7 technical support, dedicated account management for enterprise plans, and comprehensive training resources."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Workflow Automation Platform - Zion Tech Group"
        description="Transform your business with intelligent workflow automation. Reduce costs by 40-60% and increase productivity by 300%."
        keywords="AI workflow automation, business process automation, workflow optimization, AI automation platform"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Workflow className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {serviceData.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {serviceData.subtitle}
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-4xl mx-auto">
              {serviceData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
                <p className="text-sm text-gray-400">Starting at</p>
                <p className="text-3xl font-bold text-white">${serviceData.price.toLocaleString()}/{serviceData.pricingModel}</p>
                <p className="text-sm text-gray-400">Market: {serviceData.marketPrice}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href={`tel:${serviceData.contactPhone}`} 
                className="border border-purple-500 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
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
              Powerful Features for Modern Automation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI workflow automation platform combines cutting-edge technology with intuitive design to deliver unprecedented efficiency gains
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Business Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See measurable improvements in efficiency, cost reduction, and customer satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI workflow automation transforms different business functions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <span className="inline-block px-3 py-1 bg-slate-700 rounded-full text-sm text-gray-300">
                  {useCase.industry}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Automation Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border ${

                  plan.popular 
                    ? 'border-purple-500/50 ring-2 ring-purple-500/20' 
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
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">${plan.price.toLocaleString()}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${

                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white' 
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}
                >
                  Get Started
                </a>
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
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your Workflows?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses that have transformed their operations with AI-powered workflow automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href={`tel:${serviceData.contactPhone}`} 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call {serviceData.contactPhone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <a href={`tel:${serviceData.contactPhone}`} className="text-purple-400 hover:text-purple-300">
                {serviceData.contactPhone}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <a href={`mailto:${serviceData.contactEmail}`} className="text-purple-400 hover:text-purple-300">
                {serviceData.contactEmail}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">
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

export default AIWorkflowAutomation;