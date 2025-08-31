import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  BarChart3, 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Database,
  Network,
  Smartphone,
  Server,
  Clock,
  DollarSign,
  Users,
  Building2,
  Factory,
  Truck,
  Heart,
  ShoppingCart,
  TrendingUp,
  PieChart,
  LineChart,
  Activity,
  Eye,
  Target,
  Lightbulb
} from 'lucide-react';

export default function AIBusinessIntelligencePlatform() {
  const features = [
    {
      title: "Predictive Analytics",
      description: "AI-powered forecasting and trend analysis for strategic decision-making",
      icon: TrendingUp,
      benefits: ["Revenue forecasting", "Demand prediction", "Risk assessment", "Market trend analysis"]
    },
    {
      title: "Natural Language Query",
      description: "Ask questions in plain English and get instant insights from your data",
      icon: Brain,
      benefits: ["Conversational analytics", "Voice queries", "Multi-language support", "Context-aware responses"]
    },
    {
      title: "Real-time Dashboards",
      description: "Live monitoring and visualization of key business metrics",
      icon: Activity,
      benefits: ["Live data updates", "Custom widgets", "Mobile responsive", "Interactive charts"]
    },
    {
      title: "Automated Insights",
      description: "AI automatically discovers patterns and anomalies in your data",
      icon: Lightbulb,
      benefits: ["Pattern recognition", "Anomaly detection", "Auto-alerts", "Smart recommendations"]
    }
  ];

  const capabilities = [
    {
      category: "Data Integration",
      icon: Database,
      features: [
        "Connect to 100+ data sources",
        "Real-time data streaming",
        "ETL/ELT automation",
        "Data quality monitoring"
      ]
    },
    {
      category: "Advanced Analytics",
      icon: BarChart3,
      features: [
        "Machine learning models",
        "Statistical analysis",
        "Time series forecasting",
        "Clustering algorithms"
      ]
    },
    {
      category: "Visualization",
      icon: PieChart,
      features: [
        "Interactive charts",
        "Custom dashboards",
        "Mobile-first design",
        "White-label options"
      ]
    },
    {
      category: "Collaboration",
      icon: Users,
      features: [
        "Team workspaces",
        "Comment system",
        "Version control",
        "Access management"
      ]
    }
  ];

  const useCases = [
    {
      industry: "Financial Services",
      icon: DollarSign,
      applications: ["Risk management", "Fraud detection", "Portfolio optimization", "Regulatory compliance"]
    },
    {
      industry: "Healthcare",
      icon: Heart,
      applications: ["Patient analytics", "Resource optimization", "Clinical research", "Population health"]
    },
    {
      industry: "Manufacturing",
      icon: Factory,
      applications: ["Quality control", "Predictive maintenance", "Supply chain optimization", "Performance monitoring"]
    },
    {
      industry: "Retail",
      icon: ShoppingCart,
      applications: ["Customer segmentation", "Inventory optimization", "Sales forecasting", "Market basket analysis"]
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$3,500",
      period: "/month",
      description: "Perfect for small businesses starting with AI-powered analytics",
      features: [
        "Up to 5 users",
        "Basic AI insights",
        "Standard data connectors",
        "Email support",
        "Basic dashboards"
      ]
    },
    {
      plan: "Professional",
      price: "$12,000",
      period: "/month",
      description: "Ideal for growing enterprises",
      features: [
        "Up to 25 users",
        "Advanced AI analytics",
        "All data connectors",
        "Priority support",
        "Custom dashboards",
        "API access"
      ]
    },
    {
      plan: "Enterprise",
      price: "$35,000",
      period: "/month",
      description: "For large-scale deployments",
      features: [
        "Unlimited users",
        "Custom AI models",
        "On-premise deployment",
        "24/7 dedicated support",
        "White-label solutions",
        "Advanced security"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="AI Business Intelligence Platform | Zion Tech Group"
        description="Revolutionary AI-powered Business Intelligence Platform with predictive analytics, natural language queries, and automated insights. Transform your data into actionable intelligence."
        keywords="AI business intelligence, predictive analytics, BI platform, data analytics, business insights, AI analytics, data visualization"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6"
          >
            <BarChart3 className="w-4 h-4 mr-2" />
            AI Business Intelligence Platform
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            AI-Powered
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Business Intelligence
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Transform your business data into actionable intelligence with our revolutionary AI-powered BI platform. 
            Get predictive insights, natural language queries, and automated analytics that drive strategic decisions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold"
            >
              Start Your AI BI Journey
            </a>
            <a
              href="#demo"
              className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold"
            >
              Watch Demo
            </a>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Revolutionary AI BI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines the power of artificial intelligence with business intelligence 
              to deliver unprecedented insights and decision-making capabilities.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 mb-4">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
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

      {/* Platform Capabilities */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Platform Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to transform your data into actionable business intelligence
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3">
                  {capability.category}
                </h3>
                
                <ul className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-300">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI-powered BI is transforming industries across the globe
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3">
                  {useCase.industry}
                </h3>
                
                <ul className="space-y-2">
                  {useCase.applications.map((application, appIndex) => (
                    <li key={appIndex} className="text-sm text-gray-300">
                      • {application}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs and scale as you grow
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${
                  plan.plan === 'Professional' 
                    ? 'border-cyan-500/50 bg-gradient-to-b from-cyan-500/10 to-transparent' 
                    : 'border-white/10 hover:border-cyan-500/50'
                }`}
              >
                {plan.plan === 'Professional' && (
                  <div className="inline-flex items-center px-3 py-1 bg-cyan-500 text-white text-sm font-medium rounded-full mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.plan}
                </h3>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                
                <p className="text-gray-300 mb-6">
                  {plan.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.plan === 'Professional'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
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
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-500/20 to-blue-600/20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI-Powered BI?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join the future of business intelligence with our AI-powered platform. 
              Experience predictive analytics, natural language queries, and automated insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold"
              >
                Start Your Free Trial
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold"
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}