<<<<<<< HEAD
import React from 'react'; import { motion  } from 'framer-motion'; import { ; TrendingUp,; DollarSign,; Brain,; Zap,; CheckCircle,; Clock,; Shield,; Users,; BarChart3,; Lock,; Globe,; Award,; Star,; ArrowRight,; Phone,; Mail,; MapPin,; ExternalLink,; TrendingUp,; Target,; Cpu,; Activity;  } from 'lucide-react'; import { SEO } from '../../components/SEO'; ; export default function AIFinancialTrading() {; const features = [; {; icon: <Brain className="w-6 h-6" />,";"";" title: "AI-Powered Market Analysis",";"";" description: "Advanced machine learning algorithms analyze market patterns, sentiment, and trends with 92% accuracy";";" },;";" {;";"";" icon: <TrendingUp className="w-6 h-6" />,";"";" title: "Predictive Trading Signals",";"";" description: "Real-time trading signals based on AI analysis of multiple data sources and market indicators";";" },;";" {;";"";" icon: <Target className="w-6 h-6" />,";"";" title: "Portfolio Optimization",";"";" description: "Intelligent portfolio rebalancing and risk management with automated position sizing";";" },;";" {;";"";" icon: <Activity className="w-6 h-6" />,";"";" title: "Real-time Market Monitoring",";"";" description: "24/7 market surveillance with instant alerts for trading opportunities and risk events";";" },;";" {;";"";" icon: <Shield className="w-6 h-6" />,";"";" title: "Advanced Risk Management",";"";" description: "Multi-layered risk controls including stop-loss automation and position limit management";";" },;";" {;";"";" icon: <BarChart3 className="w-6 h-6" />,";"";" title: "Performance Analytics",";"";" description: "Comprehensive trading performance metrics, backtesting, and strategy optimization tools"; }; ];" ;";" const pricing = [;";" {;";"";" name: "Starter",";"";" price: "$299",";"";" period: "/month",;"";" features: [";"Basic AI trading signals",";"Portfolio tracking",";"Email alerts",";"Standard analytics",";"Basic risk management"; ],;" popular: false;";" },;";" {;";"";" name: "Professional",";"";" price: "$799",";"";" period: "/month",;"";" features: [";"Advanced AI algorithms",";"Real-time signals",";"Portfolio optimization",";"Priority support",";"Advanced analytics",";"API access",";"Custom strategies"; ],;" popular: true;";" },;";" {;";"";" name: "Institutional",";"";" price: "$1,999",";"";" period: "/month",;"";" features: [";"Custom AI models",";"White-label platform",";"Dedicated support",";"SLA guarantees",";"Advanced risk controls",";"Multi-account management",";"On-premise deployment"; ],; popular: false;" };";" ];";" ;"";" const benefits = [";"Increase trading returns by 25-40%",";"Reduce trading risks by 60%",";"Automate 80% of trading decisions",";"24/7 market monitoring and alerts",";"Professional-grade risk management",";"Access to institutional-level tools"; ];" ;";" const tradingStrategies = [;";" {;";"";" strategy: "Momentum Trading",";"";" description: "AI-powered momentum detection and trend following with dynamic position sizing",";"";" performance: "35% annual return";";" },;";" {;";"";" strategy: "Mean Reversion",";"";" description: "Statistical arbitrage using machine learning to identify overbought/oversold conditions",";"";" performance: "28% annual return";";" },;";" {;";"";" strategy: "Sentiment Analysis",";"";" description: "Social media and news sentiment analysis for market direction prediction",";"";" performance: "42% annual return";";" },;";" {;";"";" strategy: "Multi-Factor Models",";"";" description: "Combined technical, fundamental, and macroeconomic factor analysis",";"";" performance: "38% annual return";" };";" ];";" ;"";" return (";"";" <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;"";" <SEO ";"";" title="AI-Powered Financial Trading Platform - Zion Tech Group";"";" description="Revolutionary AI platform for financial trading, portfolio optimization, and risk management.Increase returns by 25-40% while reducing risks by 60%.";";" />;"";" {}";"";" <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">";"";" <div className="max-w-7xl mx-auto text-center">; <motion.div;" initial={{ opacity: 0, y: 20 }};";" animate={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" >";"";" <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;";" AI-Powered Financial Trading Platform;"";" </h1>";"";" <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;";" Transform your trading with intelligent algorithms, predictive analytics, and automated risk management.;";" Increase returns by 25-40% while reducing risks by 60%.;"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">;"";" <a";"";" href="https:
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function AiFinancialTrading() {
  const features = [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ]
  const benefits = [
    "Benefit 1",
    "Benefit 2",
    "Benefit 3"
  ]
  const useCases = [
    "Use Case 1",
    "Use Case 2",
    "Use Case 3"
  ]
  const pricing = [
      }
];
    {
      name: "Professional",
      price: "$799/mo",
      details: ["Up to 50 users", "Advanced features", "Priority support", "99.9% SLA"]
    }
  ];
    {
      name: "Enterprise",
      price: "$1,999/mo",
    }
  ];

  ]
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Database className="w-4 h-4 mr-2"  />
            AI-Powered Ai Financial Trading Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Ai Financial Trading Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your ai financial trading operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Ai Financial Trading Features</h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"  />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}

            </ul>
            <div className="mt-6 text-sm text-gray-600">
              Built with enterprise-grade security, SOC 2 compliance, and 99.9% uptime SLA.
            </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {pricing.map((tier, index) => (
                <div key={index} className="rounded-lg p-4 border border-gray-200 hover:border-indigo-300 transition-colors">
                  <div className="text-lg font-semibold mb-1">{tier.name}</div>
                  <div className="text-2xl font-bold text-indigo-600 mb-2">{tier.price}</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tier.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}

                  </ul>
                </div>
              ))}

            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/pricing" className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center">
                View Full Pricing <ArrowRight className="w-4 h-4 ml-2"  />
              </Link>
              <Link href="/contact" className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors inline-flex items-center">
                Contact Sales <Phone className="w-4 h-4 ml-2"  />
              </Link>
            </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <Zap className="w-6 h-6 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">Performance</h3>
                </div>
                <p className="text-gray-600">{benefit}</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((industry, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Target className="w-5 h-5 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
                </div>
                <p className="text-gray-600">Comprehensive ai financial trading solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Ai Financial Trading?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered ai financial trading platform today.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">
              Get Started <ArrowRight className="w-4 h-4 ml-2"  />
            </Link>
            <Link href="/demo" className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center">
              Schedule Demo <Mail className="w-4 h-4 ml-2"  />
            </Link>
          </div>
      </section>
    </div>
  ),
>>>>>>> main
