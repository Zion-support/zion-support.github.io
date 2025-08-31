import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users,
  Brain,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Activity,
  Eye,
  Target,
  Rocket,
  Award,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  FileText,
  Calendar,
  TrendingUp,
  Shield,
  MessageCircle,
  BarChart3,
  Settings,
  UserCheck,
  Briefcase,
  GraduationCap
} from 'lucide-react';

export default function AIHRManagementPlatform() {
  const features = [
    "AI-Powered Candidate Screening",
    "Automated Interview Scheduling",
    "Performance Analytics Dashboard",
    "Employee Onboarding Automation",
    "Smart Performance Reviews",
    "Talent Development Tracking",
    "Compensation Management",
    "Employee Engagement Surveys",
    "HR Compliance Monitoring",
    "Mobile-First Design",
    "Multi-Language Support",
    "Advanced Reporting & Analytics"
  ];

  const pricingPlans = [
    {
      name: "Startup",
      price: "$199",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 25 employees",
        "Basic HR management",
        "Employee database",
        "Basic reporting",
        "Email support",
        "Standard integrations"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Growth",
      price: "$499",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 100 employees",
        "AI-powered features",
        "Advanced analytics",
        "Custom workflows",
        "Priority support",
        "API access",
        "Advanced integrations"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited employees",
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "Custom development",
        "On-premise option",
        "Advanced security"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Better Hiring",
      description: "AI screening improves hiring quality by 40%"
    },
    {
      icon: Zap,
      title: "Faster Processes",
      description: "Automate 80% of repetitive HR tasks"
    },
    {
      icon: TrendingUp,
      title: "Improved Retention",
      description: "Data-driven insights increase retention by 35%"
    },
    {
      icon: Shield,
      title: "Compliance Ready",
      description: "Stay compliant with automated monitoring"
    }
  ];

  const hrMetrics = [
    { metric: "40%", label: "Faster Hiring" },
    { metric: "80%", label: "Task Automation" },
    { metric: "35%", label: "Retention Improvement" },
    { metric: "24/7", label: "AI Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              AI-Powered HR Management
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI HR Management Platform
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your HR operations with AI-powered automation. Streamline hiring, 
              performance management, and employee engagement with intelligent insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-purple-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300">
                <Eye className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HR Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {hrMetrics.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">{item.metric}</div>
                <div className="text-gray-400 text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comprehensive HR Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to manage your workforce efficiently and intelligently
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-green-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
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
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose AI HR Management?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Proven results and measurable business impact
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
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
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
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the plan that fits your organization's size and needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-green-500/50 bg-slate-700/50' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-purple-600 text-white hover:from-green-600 hover:to-purple-700'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your HR?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies already using our AI HR Management Platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-purple-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-400">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}