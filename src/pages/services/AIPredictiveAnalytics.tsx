import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  TrendingUp, 
  Brain, 
  BarChart3, 
  Zap, 
  Target, 
  Globe, 
  Building, 
  Rocket, 
  Cpu, 
  Eye,
  CheckCircle,
  ArrowRight,
  ChartBar,
  LineChart,
  PieChart,
  Activity,
  Lightbulb,
  Clock,
  AlertTriangle,
  Database
} from 'lucide-react';

export default function AIPredictiveAnalytics() {
  const features = [
    {
      title: "Advanced Machine Learning Models",
      description: "State-of-the-art ML algorithms including deep learning, neural networks, and ensemble methods for accurate predictions.",
      icon: Brain,
      benefits: ["Deep learning", "Neural networks", "Ensemble methods", "AutoML optimization"]
    },
    {
      title: "Real-Time Data Processing",
      description: "Streaming analytics that process data in real-time, providing instant insights and predictions as events occur.",
      icon: Activity,
      benefits: ["Streaming analytics", "Real-time insights", "Event processing", "Instant predictions"]
    },
    {
      title: "Predictive Modeling Studio",
      description: "Interactive platform for building, testing, and deploying custom predictive models with drag-and-drop simplicity.",
      icon: ChartBar,
      benefits: ["Visual modeling", "Model testing", "Auto-deployment", "Version control"]
    },
    {
      title: "Automated Feature Engineering",
      description: "AI-powered feature selection and engineering that automatically identifies the most predictive variables for your models.",
      icon: Target,
      benefits: ["Auto feature selection", "Feature engineering", "Dimensionality reduction", "Correlation analysis"]
    },
    {
      title: "Forecasting & Trend Analysis",
      description: "Advanced time series analysis and forecasting capabilities for predicting future trends and patterns.",
      icon: LineChart,
      benefits: ["Time series analysis", "Seasonal forecasting", "Trend detection", "Anomaly detection"]
    },
    {
      title: "Business Intelligence Integration",
      description: "Seamless integration with existing BI tools and data warehouses for comprehensive analytics workflows.",
      icon: Database,
      benefits: ["BI integration", "Data warehouse", "ETL pipelines", "API connectivity"]
    }
  ];

  const useCases = [
    {
      industry: "Retail & E-commerce",
      applications: ["Demand forecasting", "Inventory optimization", "Customer churn prediction", "Price optimization"],
      roi: "25-40% increase in revenue",
      icon: Building
    },
    {
      industry: "Manufacturing",
      applications: ["Predictive maintenance", "Quality control", "Supply chain optimization", "Production planning"],
      roi: "30-50% reduction in downtime",
      icon: Building
    },
    {
      industry: "Healthcare",
      applications: ["Patient outcome prediction", "Disease progression", "Resource allocation", "Treatment optimization"],
      roi: "20-35% better outcomes",
      icon: Building
    },
    {
      industry: "Financial Services",
      applications: ["Risk assessment", "Fraud detection", "Credit scoring", "Market prediction"],
      roi: "40-60% risk reduction",
      icon: Building
    }
  ];

  const pricing = [
    {
      plan: "Analytics Starter",
      price: "$299/month",
      description: "Perfect for small teams getting started with predictive analytics",
      features: [
        "Up to 10 predictive models",
        "Basic ML algorithms",
        "Standard dashboards",
        "Email support",
        "Monthly data updates"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      plan: "AI Professional",
      price: "$899/month",
      description: "Ideal for growing businesses with advanced analytics needs",
      features: [
        "Up to 50 predictive models",
        "Advanced ML algorithms",
        "Real-time analytics",
        "Priority support",
        "Custom integrations",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      plan: "Enterprise AI",
      price: "Custom",
      description: "Tailored solutions for large organizations with complex analytics requirements",
      features: [
        "Unlimited models",
        "Custom ML algorithms",
        "Dedicated support",
        "SLA guarantees",
        "On-premise options",
        "Custom development"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Improved Decision Making",
      description: "Data-driven insights that enable better strategic decisions and resource allocation",
      icon: Lightbulb,
      metric: "40-60% better decisions"
    },
    {
      title: "Increased Operational Efficiency",
      description: "Optimized processes and reduced waste through predictive insights",
      icon: Zap,
      metric: "25-45% efficiency gain"
    },
    {
      title: "Better Risk Management",
      description: "Proactive identification and mitigation of potential risks and issues",
      icon: AlertTriangle,
      metric: "30-50% risk reduction"
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead of the competition with predictive insights and proactive strategies",
      icon: Rocket,
      metric: "Market leadership"
    }
  ];

  const analyticsTypes = [
    {
      type: "Descriptive Analytics",
      description: "Understanding what happened in the past through data analysis and reporting",
      icon: BarChart3,
      examples: ["Sales reports", "Performance metrics", "Trend analysis", "KPI dashboards"]
    },
    {
      type: "Diagnostic Analytics",
      description: "Understanding why something happened through root cause analysis",
      icon: Eye,
      examples: ["Root cause analysis", "Drill-down reports", "Correlation analysis", "Impact assessment"]
    },
    {
      type: "Predictive Analytics",
      description: "Forecasting future outcomes based on historical data and patterns",
      icon: TrendingUp,
      examples: ["Demand forecasting", "Risk prediction", "Customer behavior", "Market trends"]
    },
    {
      type: "Prescriptive Analytics",
      description: "Recommending actions to achieve desired outcomes",
      icon: Target,
      examples: ["Action recommendations", "Optimization suggestions", "Scenario planning", "Decision support"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      <SEO 
        title="AI-Powered Predictive Analytics Platform - Zion Tech Group" 
        description="Transform your business with AI-powered predictive analytics. Advanced machine learning, real-time insights, and actionable predictions for unprecedented business growth."
        keywords="AI predictive analytics, machine learning, predictive modeling, business intelligence, data analytics, forecasting"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Intelligence
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AI Predictive
            </span>
            <br />
            <span className="text-white">Analytics</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Unlock the future of your business with AI-powered predictive analytics that transform data into actionable insights and accurate predictions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-indigo-500/30 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Analytics Types Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Four Levels of Analytics Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From understanding the past to predicting the future, our platform provides comprehensive analytics capabilities at every level.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analyticsTypes.map((type, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-slate-600/30 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{type.type}</h3>
                <p className="text-gray-300 mb-4 text-sm">{type.description}</p>
                <ul className="space-y-2">
                  {type.examples.map((example, idx) => (
                    <li key={idx} className="text-xs text-gray-400 flex items-center">
                      <ArrowRight className="w-3 h-3 text-indigo-400 mr-2 flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your Business with AI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See measurable improvements in decision-making, efficiency, and competitive advantage with AI-powered predictive analytics.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-slate-700/50 to-slate-600/30 border border-slate-500/30 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="text-indigo-400 font-bold text-lg">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features That Drive Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI predictive analytics platform combines cutting-edge technology with intuitive design to deliver exceptional insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-slate-600/30 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <CheckCircle className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Success Across Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI predictive analytics is transforming businesses across different sectors with measurable ROI improvements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-600/30 border border-slate-500/30 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.industry}</h3>
                <ul className="space-y-2 mb-4">
                  {useCase.applications.map((application, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <ArrowRight className="w-3 h-3 text-indigo-400 mr-2 flex-shrink-0" />
                      {application}
                    </li>
                  ))}
                </ul>
                <div className="text-indigo-400 font-semibold text-sm">{useCase.roi}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Analytics Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business needs and analytics requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div 
                key={index}
                className={`relative p-8 rounded-2xl ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border-2 border-indigo-500/50' 
                    : 'bg-gradient-to-br from-slate-700/50 to-slate-600/30 border border-slate-500/30'
                } transition-all duration-300 hover:transform hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'
                    : 'border border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Predict Your Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join forward-thinking businesses that are already leveraging AI-powered predictive analytics for unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-indigo-500/30 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}