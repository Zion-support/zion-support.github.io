import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  Database,
  Cpu,
  Network,
  Lock,
  Eye,
  Target,
  Award,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';

const AIBusinessIntelligenceElite: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Analytics Engine",
      description: "Powered by GPT-4 and Claude 3.5 Sonnet for intelligent data interpretation and insights generation"
    },
    {
      icon: BarChart3,
      title: "Real-time Business Intelligence",
      description: "Live dashboards with predictive analytics and trend forecasting capabilities"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "SOC 2 Type II compliant with end-to-end encryption and role-based access control"
    },
    {
      icon: Zap,
      title: "Automated Reporting",
      description: "AI-generated executive summaries and automated KPI tracking"
    },
    {
      icon: Users,
      title: "Multi-User Collaboration",
      description: "Team-based analytics with real-time collaboration and sharing capabilities"
    },
    {
      icon: Globe,
      title: "Global Data Integration",
      description: "Connect to 500+ data sources including CRM, ERP, databases, and cloud platforms"
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$2,500",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 10 data sources",
        "Basic AI analytics",
        "Standard reporting",
        "Email support",
        "5 user licenses"
      ]
    },
    {
      name: "Professional",
      price: "$5,000",
      period: "/month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Up to 50 data sources",
        "Advanced AI analytics",
        "Custom dashboards",
        "Priority support",
        "25 user licenses",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$12,000",
      period: "/month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited data sources",
        "Full AI suite",
        "Custom development",
        "24/7 dedicated support",
        "Unlimited users",
        "White-label options"
      ]
    }
  ];

  const useCases = [
    {
      title: "Financial Analytics",
      description: "Real-time financial reporting, budget tracking, and cash flow analysis with AI-powered forecasting"
    },
    {
      title: "Sales Intelligence",
      description: "Sales performance tracking, lead scoring, and revenue optimization using machine learning"
    },
    {
      title: "Customer Analytics",
      description: "Customer behavior analysis, segmentation, and lifetime value prediction"
    },
    {
      title: "Operational Efficiency",
      description: "Process optimization, resource allocation, and performance monitoring"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                <Brain className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Business Intelligence Elite
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Transform your business data into actionable intelligence with our cutting-edge AI-powered analytics platform. 
              Get real-time insights, predictive analytics, and automated reporting that drives growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-zion-slate text-white font-semibold rounded-lg hover:bg-zion-slate-light transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
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
              Powerful Features for Modern Businesses
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with intuitive design to deliver 
              business intelligence that actually drives results.
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
                className="bg-zion-slate p-8 rounded-xl border border-zion-slate-light hover:border-purple-500 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg w-fit mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing for Every Business
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI analytics engine 
              and 24/7 customer support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-zion-slate-dark p-8 rounded-xl border-2 ${
                  plan.popular 
                    ? 'border-purple-500 shadow-2xl shadow-purple-500/25' 
                    : 'border-zion-slate-light'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://ziontechgroup.com/contact"
                  className="w-full inline-flex justify-center items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
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
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              See how businesses across industries are using our AI Business Intelligence platform 
              to drive growth and efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate p-8 rounded-xl border border-zion-slate-light"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-zion-slate-light">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Get in touch with our team to discuss how AI Business Intelligence Elite can help 
              your organization make data-driven decisions and achieve sustainable growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-fit mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <a 
                href="tel:+13024640950" 
                className="text-zion-slate-light hover:text-white transition-colors duration-300"
              >
                +1 (302) 464-0950
              </a>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-fit mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="text-zion-slate-light hover:text-white transition-colors duration-300"
              >
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-fit mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-slate-light">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://ziontechgroup.com/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-zion-slate-light">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-zion-slate-light mb-4">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://ziontechgroup.com" 
              className="text-zion-slate-light hover:text-white transition-colors duration-300"
            >
              Visit Website
              <ExternalLink className="inline ml-1 h-4 w-4" />
            </a>
            <a 
              href="https://ziontechgroup.com/privacy" 
              className="text-zion-slate-light hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="https://ziontechgroup.com/terms" 
              className="text-zion-slate-light hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIBusinessIntelligenceElite;