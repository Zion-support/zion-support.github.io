import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Workflow, 
  Zap, 
  Brain, 
  Users, 
  Target, 
  Shield, 
  Cloud, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Globe,
  Database,
  Activity,
  Eye,
  Settings,
  Download,
  Share2,
  Filter,
  Search,
  AlertTriangle,
  Lightbulb,
  BarChart,
  PieChart,
  LineChart,
  Cpu,
  Network,
  Lock,
  TrendingUp,
  BarChart3,
  Rocket,
  Handshake,
  Building2,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Award,
  HeadphonesIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIEnterpriseWorkflowAutomation() {
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Process Intelligence",
      description: "Advanced machine learning algorithms that automatically analyze, optimize, and predict workflow performance",
      benefits: ["Intelligent process optimization", "Predictive workflow analytics", "Automated bottleneck detection"]
    },
    {
      icon: Workflow,
      title: "Visual Workflow Designer",
      description: "Drag-and-drop interface for creating complex business processes with AI-assisted recommendations",
      benefits: ["Intuitive visual design", "AI-powered suggestions", "Template library"]
    },
    {
      icon: Zap,
      title: "Intelligent Automation Engine",
      description: "Automate repetitive tasks with AI that learns and improves over time",
      benefits: ["Self-learning automation", "Task prioritization", "Resource optimization"]
    },
    {
      icon: Users,
      title: "Collaborative Workflow Management",
      description: "Team-based workflow design and execution with real-time collaboration features",
      benefits: ["Real-time collaboration", "Role-based access control", "Version control"]
    },
    {
      icon: Target,
      title: "Performance Analytics & KPIs",
      description: "Comprehensive metrics and insights to measure and improve workflow efficiency",
      benefits: ["Real-time monitoring", "Custom KPI dashboards", "Performance alerts"]
    },
    {
      icon: Shield,
      title: "Enterprise Security & Compliance",
      description: "Bank-level security with compliance frameworks for regulated industries",
      benefits: ["SOC 2 Type II", "GDPR compliance", "Enterprise SSO"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small teams starting their automation journey",
      features: [
        "Up to 10 users",
        "Basic workflow templates",
        "Standard integrations",
        "Email support",
        "Basic analytics",
        "5 workflow automations"
      ],
      cta: "Start Free Trial",
      popular: false,
      marketPrice: "$800-1200/month",
      savings: "Save up to 58%"
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing businesses with complex workflow needs",
      features: [
        "Up to 50 users",
        "Advanced workflow templates",
        "Premium integrations",
        "Priority support",
        "Advanced analytics",
        "Unlimited automations",
        "Custom workflows",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true,
      marketPrice: "$2000-3500/month",
      savings: "Save up to 63%"
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large organizations requiring enterprise-grade automation",
      features: [
        "Unlimited users",
        "Custom workflow development",
        "Enterprise integrations",
        "24/7 dedicated support",
        "Custom analytics",
        "Advanced AI features",
        "White-label options",
        "Custom deployment"
      ],
      cta: "Contact Sales",
      popular: false,
      marketPrice: "$5000-8000/month",
      savings: "Save up to 63%"
    }
  ];

  const useCases = [
    {
      industry: "Financial Services",
      description: "Automate loan processing, compliance workflows, and risk assessment processes",
      roi: "300% ROI in 12 months",
      timeSaved: "70% reduction in processing time"
    },
    {
      industry: "Healthcare",
      description: "Streamline patient onboarding, claims processing, and administrative workflows",
      roi: "250% ROI in 18 months",
      timeSaved: "60% reduction in administrative tasks"
    },
    {
      industry: "Manufacturing",
      description: "Optimize production workflows, quality control, and supply chain processes",
      roi: "400% ROI in 12 months",
      timeSaved: "80% reduction in manual processes"
    },
    {
      industry: "Retail",
      description: "Automate inventory management, order processing, and customer service workflows",
      roi: "280% ROI in 15 months",
      timeSaved: "65% reduction in order processing time"
    }
  ];

  const integrations = [
    "Salesforce", "Microsoft 365", "Slack", "Teams", "Jira", "Asana",
    "Zapier", "HubSpot", "QuickBooks", "NetSuite", "SAP", "Oracle",
    "AWS", "Azure", "Google Cloud", "Shopify", "WooCommerce", "Magento"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  AI Enterprise Workflow
                </span>
                <br />
                <span className="text-white">Automation Platform</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your business operations with intelligent workflow automation powered by advanced AI. 
                Streamline processes, reduce costs, and boost productivity by up to 80%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity group"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 rounded-xl border border-zion-purple/30 text-zion-purple hover:bg-zion-purple/10 transition-colors">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Platform?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry-leading AI workflow automation with proven ROI and enterprise-grade security
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zion-slate-dark/50 to-zion-blue-dark/50 border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-purple/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-zion-cyan/20 rounded-xl">
                    <feature.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
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
      <section className="py-16 bg-gradient-to-r from-zion-slate-dark/30 to-zion-blue-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Competitive pricing with enterprise-grade features. Start free and scale as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-2xl shadow-zion-cyan/20 scale-105' 
                    : 'border-zion-purple/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                  
                  {/* Market Price Comparison */}
                  <div className="mt-4 p-3 bg-zion-slate-dark/50 rounded-lg">
                    <div className="text-xs text-gray-400 mb-1">Market Price Range</div>
                    <div className="text-sm font-semibold text-white">{plan.marketPrice}</div>
                    <div className="text-xs text-zion-cyan font-medium">{plan.savings}</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-blue-600 text-white hover:opacity-90'
                      : 'bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30 border border-zion-purple/30'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases & ROI */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Proven Results Across Industries</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our platform delivers measurable ROI and transforms business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zion-slate-dark/50 to-zion-blue-dark/50 border border-zion-purple/20 rounded-2xl p-8"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-zion-purple/20 rounded-xl">
                    <Building2 className="w-8 h-8 text-zion-purple" />
                  </div>
                  <h3 className="text-xl font-semibold">{useCase.industry}</h3>
                </div>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-zion-cyan/10 rounded-lg">
                    <div className="text-zion-cyan font-bold text-lg">{useCase.roi}</div>
                    <div className="text-xs text-gray-400">Return on Investment</div>
                  </div>
                  <div className="text-center p-3 bg-zion-purple/10 rounded-lg">
                    <div className="text-zion-purple font-bold text-lg">{useCase.timeSaved}</div>
                    <div className="text-xs text-gray-400">Time Savings</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 bg-gradient-to-r from-zion-slate-dark/30 to-zion-blue-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Seamless Integrations</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing tools and platforms for a unified workflow experience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-zion-slate-dark/50 border border-zion-purple/20 rounded-xl p-4 text-center hover:border-zion-purple/40 transition-colors"
              >
                <div className="text-zion-cyan font-medium text-sm">{integration}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl p-12"
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Workflows?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of companies that have automated their business processes and achieved remarkable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-zion-cyan to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-xl border border-zion-purple/30 text-zion-purple hover:bg-zion-purple/10 transition-colors"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-r from-zion-slate-dark/50 to-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-300">
              Our team of experts is ready to help you choose the right plan and get started
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="p-4 bg-zion-cyan/20 rounded-xl inline-block mb-4">
                <Phone className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-zion-cyan font-medium">+1 302 464 0950</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-zion-purple/20 rounded-xl inline-block mb-4">
                <Mail className="w-8 h-8 text-zion-purple" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-zion-purple font-medium">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-zion-cyan/20 rounded-xl inline-block mb-4">
                <MapPin className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-zion-cyan font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}