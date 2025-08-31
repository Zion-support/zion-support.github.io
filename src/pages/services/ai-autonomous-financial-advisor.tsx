import React from 'react';
import { motion } from 'framer-motion';
import { EnhancedSEO, SEOConfigs } from '../../components/EnhancedSEO.tsx';
import { SEO } from "@/components/SEO";
import {
  TrendingUp,
  Shield,
  Brain,
  DollarSign,
  BarChart3,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Target,
  Globe,
  Lock,
  Activity,
  PieChart,
  LineChart,
  Cpu,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  Cloud,
  Rocket,
  Lightbulb,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AIAutonomousFinancialAdvisor = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Investment Analysis",
      description: "Advanced machine learning algorithms analyze market trends, company fundamentals, and global economic indicators in real-time."
    },
    {
      icon: BarChart3,
      title: "Portfolio Optimization",
      description: "Intelligent portfolio rebalancing and optimization based on risk tolerance, market conditions, and investment goals."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies using predictive analytics and scenario modeling."
    },
    {
      icon: TrendingUp,
      title: "Market Prediction",
      description: "AI-driven market forecasting with sentiment analysis, technical indicators, and fundamental analysis."
    },
    {
      icon: Users,
      title: "Personalized Advice",
      description: "Tailored financial recommendations based on individual financial situation, goals, and risk tolerance."
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "24/7 portfolio monitoring with instant alerts and automated responses to market changes."
    }
  ];

  const benefits = [
    "Increase portfolio returns by 15-25% annually",
    "Reduce investment risk through AI-powered diversification",
    "Save 20+ hours per month on financial research",
    "Access institutional-grade investment strategies",
    "Real-time market insights and alerts",
    "Tax-optimized investment recommendations"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for individual investors",
      features: [
        "Basic portfolio analysis",
        "Monthly rebalancing",
        "Risk assessment",
        "Email alerts",
        "Basic reporting"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for active investors",
      features: [
        "Advanced AI analysis",
        "Weekly rebalancing",
        "Real-time monitoring",
        "Priority support",
        "Advanced reporting",
        "Tax optimization"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "For financial institutions",
      features: [
        "Custom AI models",
        "Daily rebalancing",
        "API access",
        "Dedicated support",
        "White-label solution",
        "Compliance reporting"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Individual Investors",
      description: "Automated portfolio management with personalized investment strategies",
      icon: Users
    },
    {
      title: "Financial Advisors",
      description: "AI-powered tools to enhance client service and portfolio performance",
      icon: TrendingUp
    },
    {
      title: "Institutional Investors",
      description: "Enterprise-grade financial analysis and portfolio optimization",
      icon: Building2
    },
    {
      title: "Retirement Planning",
      description: "Long-term investment strategies optimized for retirement goals",
      icon: Target
    }
  ];

  return (
    <EnhancedSEO data={SEOConfigs.aiAutonomousFinancialAdvisor}>
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate-dark to-zion-blue-dark">
        <SEO
          title="AI Autonomous Financial Advisor - Intelligent Investment Management"
          description="Transform your investment strategy with AI-powered financial advice, portfolio optimization, and real-time market analysis. Get institutional-grade investment management at affordable prices."
          keywords="AI financial advisor, investment management, portfolio optimization, risk management, market analysis, financial planning, AI investing, robo-advisor"
          canonical="https://ziontechgroup.com/services/ai-autonomous-financial-advisor"
        />
        
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-blue-900/20 to-cyan-900/20"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                New for 2026
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Autonomous
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                  Financial Advisor
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize your investment strategy with AI-powered financial advice, 
                intelligent portfolio optimization, and real-time market analysis. 
                Get institutional-grade investment management at affordable prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+1 302 464 0950"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-green-400/50 text-green-400 font-semibold rounded-xl hover:bg-green-400/10 hover:border-green-400 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Get Quote
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-zion-blue-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Intelligent Financial Management
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our AI-powered platform combines advanced machine learning with financial expertise 
                to deliver personalized investment strategies and portfolio optimization.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zion-blue-dark border border-zion-purple/30 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our AI Financial Advisor?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Experience the future of financial management with AI-powered insights, 
                automated portfolio optimization, and personalized investment strategies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-lg text-white">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-zion-blue-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transparent Pricing
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Choose the plan that best fits your investment needs and budget. 
                All plans include our core AI-powered features and expert support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-zion-blue-dark border rounded-2xl p-8 ${
                    plan.popular 
                      ? 'border-green-400/50 bg-green-500/5' 
                      : 'border-zion-purple/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-cyan-500 text-white hover:from-green-600 hover:to-cyan-600'
                      : 'bg-zion-purple/20 text-zion-purple border border-zion-purple/30 hover:bg-zion-purple/30'
                  }`}>
                    {plan.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Perfect For Every Investor
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Whether you're an individual investor, financial advisor, or institutional client, 
                our AI platform adapts to your specific needs and goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <useCase.icon className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {useCase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Investment Strategy?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of investors who have already revolutionized their financial management 
                with AI-powered insights and automated portfolio optimization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href="tel:+1 302 464 0950"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-green-400/50 text-green-400 font-semibold rounded-xl hover:bg-green-400/10 hover:border-green-400 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Get Free Consultation
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Free 30-day trial</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>24/7 expert support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <a href="tel:+1 302 464 0950" className="text-gray-300 hover:text-green-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-green-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </EnhancedSEO>
  );
};

// Missing icon component
const Building2 = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

export default AIAutonomousFinancialAdvisor;