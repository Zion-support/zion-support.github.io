import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  BarChart3, 
  TrendingUp, 
  Brain, 
  Shield, 
  Globe, 
  Building, 
  Rocket, 
  Cpu, 
  Clock,
  CheckCircle,
  ArrowRight,
  Target,
  PieChart,
  Zap,
  Database,
  LineChart,
  MessageSquare
} from 'lucide-react';

export default function AIDataAnalytics() {
  const features = [
    {
      title: "Predictive Analytics",
      description: "AI-powered forecasting that predicts trends, behaviors, and outcomes with high accuracy",
      icon: Brain,
      benefits: ["Trend prediction", "Behavior forecasting", "Risk assessment", "Opportunity identification"]
    },
    {
      title: "Real-time Dashboards",
      description: "Interactive dashboards that provide instant insights and visualizations",
      icon: BarChart3,
      benefits: ["Live data updates", "Custom visualizations", "Interactive charts", "Mobile responsive"]
    },
    {
      title: "Natural Language Query",
      description: "Ask questions in plain English and get instant data insights",
      icon: MessageSquare,
      benefits: ["Plain English queries", "Instant answers", "No SQL required", "Contextual insights"]
    },
    {
      title: "Automated Insights",
      description: "AI automatically discovers patterns and insights in your data",
      icon: Zap,
      benefits: ["Pattern discovery", "Anomaly detection", "Correlation analysis", "Insight generation"]
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$249/month",
      description: "Perfect for small businesses starting with data analytics",
      features: [
        "Up to 100GB data",
        "Basic AI insights",
        "Email support",
        "Standard integrations",
        "Basic reporting"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      plan: "Professional",
      price: "$599/month",
      description: "Ideal for growing businesses with advanced analytics needs",
      features: [
        "Up to 1TB data",
        "Advanced AI analytics",
        "Priority support",
        "Custom integrations",
        "Advanced reporting",
        "Predictive modeling"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      plan: "Enterprise",
      price: "$1,599/month",
      description: "For large organizations requiring enterprise-grade analytics",
      features: [
        "Unlimited data",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label options",
        "Advanced security",
        "Custom development"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      description: "Optimize pricing, inventory, and customer behavior analysis",
      icon: Building,
      benefits: ["Price optimization", "Inventory management", "Customer segmentation", "Conversion analysis"]
    },
    {
      industry: "Healthcare",
      description: "Patient outcome prediction and resource optimization",
      icon: Building,
      benefits: ["Outcome prediction", "Resource planning", "Risk assessment", "Treatment optimization"]
    },
    {
      industry: "Finance",
      description: "Risk assessment, fraud detection, and market analysis",
      icon: Building,
      benefits: ["Risk modeling", "Fraud detection", "Market analysis", "Portfolio optimization"]
    },
    {
      industry: "Manufacturing",
      description: "Predictive maintenance and quality control optimization",
      icon: Building,
      benefits: ["Predictive maintenance", "Quality control", "Supply chain optimization", "Efficiency analysis"]
    }
  ];

  const benefits = [
    {
      title: "Faster Decisions",
      description: "Make data-driven decisions 10x faster with AI-powered insights",
      icon: Clock
    },
    {
      title: "Increased Revenue",
      description: "Drive 20-40% revenue growth through data-driven strategies",
      icon: TrendingUp
    },
    {
      title: "Cost Reduction",
      description: "Reduce operational costs by 15-30% with predictive analytics",
      icon: BarChart3
    },
    {
      title: "Competitive Edge",
      description: "Stay ahead of competition with predictive insights and trends",
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900">
      <SEO 
        title="AI Data Analytics - Zion Tech Group" 
        description="Transform your data into actionable insights with AI-powered analytics. Predict trends, optimize operations, and drive growth."
        keywords="AI data analytics, predictive analytics, business intelligence, data visualization, AI insights, data science"
        canonical="https://ziontechgroup.com/services/ai-data-analytics"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-600/20 to-teal-600/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-8">
            <BarChart3 className="w-20 h-20 mx-auto mb-6 text-green-400" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Data Analytics
              <span className="block text-3xl md:text-4xl text-green-400 mt-2">
                Transform Data into Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Unlock the hidden value in your data with AI-powered analytics that predict trends, 
              optimize operations, and drive informed decision-making across your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
                <button className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI-Powered Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI data analytics platform combines cutting-edge machine learning with intuitive 
              visualizations to deliver actionable insights that drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Business Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI data analytics solutions deliver measurable results that directly impact your bottom line.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your analytics needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-green-500 shadow-lg shadow-green-500/20' 
                  : 'border-gray-600 hover:border-green-500/40'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-green-400 mb-2">{plan.price}</div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'
                    : 'border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI data analytics adapts to your industry's unique requirements and data challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 border border-gray-600 hover:border-green-500/40">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {useCase.industry}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {useCase.description}
                </p>
                <ul className="space-y-1 text-left">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-400">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/50 to-emerald-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join thousands of businesses that have already revolutionized their decision-making with AI-powered data analytics.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}