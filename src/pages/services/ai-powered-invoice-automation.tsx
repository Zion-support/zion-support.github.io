import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FileText,
  Brain,
  Zap,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Clock,
  Users,
  BarChart3,
  Activity,
  Eye,
  Shield,
  Mail,
  Phone,
  MapPin,
  Play,
  Calendar,
  TrendingUp,
  Target,
  Cpu,
  Database,
  Network,
  ShoppingCart,
  Receipt,
  Calculator,
  CreditCard
} from 'lucide-react';

const AIPoweredInvoiceAutomation = () => {
  const features = [
    {
      title: "AI Document Processing",
      description: "Automatically extract data from invoices, receipts, and financial documents with 99% accuracy",
      icon: Brain,
      color: "text-blue-500"
    },
    {
      title: "Smart Data Extraction",
      description: "Intelligent recognition of line items, amounts, dates, vendor information, and tax details",
      icon: Eye,
      color: "text-green-500"
    },
    {
      title: "Automated Workflows",
      description: "Streamline approval processes with intelligent routing and automated notifications",
      icon: Zap,
      color: "text-purple-500"
    },
    {
      title: "Real-time Analytics",
      description: "Comprehensive dashboards showing spending patterns, vendor analysis, and cost optimization",
      icon: BarChart3,
      color: "text-orange-500"
    },
    {
      title: "Multi-format Support",
      description: "Process PDFs, images, scanned documents, and digital invoices from any source",
      icon: FileText,
      color: "text-yellow-500"
    },
    {
      title: "Integration Ready",
      description: "Seamlessly integrate with accounting software, ERP systems, and payment platforms",
      icon: Network,
      color: "text-indigo-500"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses processing up to 500 invoices monthly",
      features: [
        "Up to 500 invoices/month",
        "Basic AI data extraction",
        "Standard approval workflows",
        "Email support",
        "Basic reporting dashboard",
        "PDF and image support",
        "CSV export",
        "5 user accounts"
      ],
      popular: false,
      cta: "Start Free Trial",
      link: "/contact"
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for growing businesses with up to 2,000 monthly invoices",
      features: [
        "Up to 2,000 invoices/month",
        "Advanced AI processing",
        "Custom approval workflows",
        "Priority support",
        "Advanced analytics",
        "Multi-format support",
        "API access",
        "Unlimited users",
        "Custom integrations",
        "Automated notifications"
      ],
      popular: true,
      cta: "Start Free Trial",
      link: "/contact",
      savings: "Save 20% annually"
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "Comprehensive solution for large organizations with unlimited processing",
      features: [
        "Unlimited invoices/month",
        "Custom AI model training",
        "Advanced workflow automation",
        "24/7 dedicated support",
        "Custom reporting",
        "White-label solutions",
        "Advanced security",
        "Dedicated account manager"
      ],
      popular: false,
      cta: "Contact Sales",
      link: "/contact"
    }
  ];

  const benefits = [
    {
      title: "Save 80% on Processing Time",
      description: "Reduce manual data entry from hours to minutes with AI automation",
      icon: Clock,
      color: "text-blue-500"
    },
    {
      title: "Reduce Processing Costs by 60%",
      description: "Eliminate manual errors and reduce operational overhead significantly",
      icon: DollarSign,
      color: "text-green-500"
    },
    {
      title: "Improve Accuracy to 99%",
      description: "AI-powered validation ensures data accuracy and compliance",
      icon: CheckCircle,
      color: "text-purple-500"
    },
    {
      title: "Real-time Visibility",
      description: "Track spending patterns and optimize cash flow with instant insights",
      icon: BarChart3,
      color: "text-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered Invoice Automation
              </h1>
              <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto">
                Automate invoice processing with 99% accuracy. Save time, reduce costs, 
                and eliminate manual data entry forever.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-zinc-400 text-zinc-300 font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-300"
                >
                  Watch Demo
                  <Play className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Invoice Automation Features
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our AI platform transforms how you process invoices, from data extraction 
              to approval workflows and payment processing.
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
                className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:border-green-500/50 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-lg bg-slate-600/50 mb-4 ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Invoice Processing
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Stop wasting time on manual invoice processing and start focusing on 
              what matters most - growing your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-slate-700/30 rounded-xl border border-slate-600/30"
              >
                <div className={`p-3 rounded-lg bg-slate-600/50 ${benefit.color}`}>
                  <benefit.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-zinc-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include a 14-day free trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-700/50 p-8 rounded-xl border ${
                  tier.popular 
                    ? 'border-green-500/50 bg-gradient-to-br from-slate-700/50 to-green-900/20' 
                    : 'border-slate-600/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-zinc-400">{tier.period}</span>
                  </div>
                  <p className="text-zinc-300 mb-4">{tier.description}</p>
                  {tier.savings && (
                    <p className="text-green-400 text-sm font-semibold">{tier.savings}</p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zinc-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={tier.link}
                  className={`w-full inline-flex justify-center items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
                      : 'bg-slate-600 text-white hover:bg-slate-500'
                  }`}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600/20 to-blue-600/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Invoices?
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses that have transformed their invoice processing 
              with our AI-powered automation platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-zinc-400 text-zinc-300 font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-300"
              >
                Schedule Demo
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-zinc-300 hover:text-white transition-colors">
                +1 (302) 464-0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-zinc-300 hover:text-white transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-zinc-300">
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

export default AIPoweredInvoiceAutomation;