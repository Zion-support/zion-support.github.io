import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Target, 
  Zap, 
  Globe, 
  Users, 
  Shield, 
  Cpu, 
  Database,
  PieChart,
  Activity,
  Eye,
  Lightbulb,
  ArrowUpRight,
  CheckCircle,
  Building
} from 'lucide-react';

export default function AIBusinessIntelligence() {
  const features = [
    {
      title: "Predictive Analytics Engine",
      description: "Advanced ML algorithms that forecast trends, customer behavior, and business outcomes with 95% accuracy",
      icon: Brain,
      benefits: ["Future trend prediction", "Customer churn prevention", "Revenue forecasting", "Risk assessment"]
    },
    {
      title: "Real-time Data Processing",
      description: "Streaming analytics that processes data in milliseconds for instant business insights",
      icon: Zap,
      benefits: ["Live dashboards", "Instant alerts", "Real-time decision making", "Performance monitoring"]
    },
    {
      title: "Natural Language Querying",
      description: "Ask business questions in plain English and get instant, intelligent answers from your data",
      icon: Users,
      benefits: ["No-code analytics", "Democratized data access", "Faster insights", "Reduced training needs"]
    },
    {
      title: "Automated Reporting",
      description: "AI-generated reports that automatically identify key insights and anomalies in your data",
      icon: BarChart3,
      benefits: ["Time savings", "Consistent reporting", "Anomaly detection", "Actionable insights"]
    },
    {
      title: "Multi-source Data Integration",
      description: "Connect and analyze data from databases, APIs, cloud services, and external sources",
      icon: Database,
      benefits: ["Unified data view", "Comprehensive insights", "Reduced data silos", "Better decision making"]
    },
    {
      title: "Advanced Visualization",
      description: "Interactive charts, graphs, and dashboards that make complex data easy to understand",
      icon: PieChart,
      benefits: ["Better data comprehension", "Interactive exploration", "Professional presentations", "Mobile optimization"]
    }
  ];

  const useCases = [
    {
      industry: "Retail & E-commerce",
      applications: ["Customer segmentation", "Inventory optimization", "Price optimization", "Demand forecasting"],
      roi: "300-500%"
    },
    {
      industry: "Financial Services",
      applications: ["Risk assessment", "Fraud detection", "Portfolio optimization", "Customer insights"],
      roi: "400-600%"
    },
    {
      industry: "Healthcare",
      applications: ["Patient analytics", "Resource optimization", "Predictive diagnostics", "Operational efficiency"],
      roi: "250-400%"
    },
    {
      industry: "Manufacturing",
      applications: ["Predictive maintenance", "Quality control", "Supply chain optimization", "Performance analytics"],
      roi: "350-500%"
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$299",
      period: "per month",
      features: [
        "Up to 5 data sources",
        "Basic predictive analytics",
        "Standard reporting",
        "Email support",
        "5 user licenses"
      ],
      bestFor: "Small businesses starting with analytics"
    },
    {
      plan: "Professional",
      price: "$799",
      period: "per month",
      features: [
        "Up to 20 data sources",
        "Advanced ML algorithms",
        "Custom dashboards",
        "Priority support",
        "25 user licenses",
        "API access"
      ],
      bestFor: "Growing companies with complex data needs",
      popular: true
    },
    {
      plan: "Enterprise",
      price: "$2,499",
      period: "per month",
      features: [
        "Unlimited data sources",
        "Custom ML models",
        "White-label solutions",
        "24/7 dedicated support",
        "Unlimited users",
        "On-premise deployment",
        "Custom integrations"
      ],
      bestFor: "Large enterprises requiring advanced analytics"
    }
  ];

  const benefits = [
    {
      title: "10x Faster Insights",
      description: "Get business intelligence in minutes instead of days",
      icon: Zap,
      metric: "90% time reduction"
    },
    {
      title: "Data-Driven Decisions",
      description: "Make informed decisions based on comprehensive data analysis",
      icon: Target,
      metric: "40% better decisions"
    },
    {
      title: "Cost Optimization",
      description: "Identify cost-saving opportunities across your business",
      icon: TrendingUp,
      metric: "25-40% cost reduction"
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead with predictive insights and trend analysis",
      icon: ArrowUpRight,
      metric: "Market leadership"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="AI Business Intelligence & Analytics Platform - Zion Tech Group" 
        description="Transform your business data into actionable intelligence with our AI-powered analytics platform. Get predictive insights, real-time dashboards, and automated reporting."
        keywords="AI analytics, business intelligence, predictive analytics, data visualization, machine learning, business analytics"
        canonical="https://ziontechgroup.com/services/ai-business-intelligence"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Business Intelligence
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Transform Data into Actionable Intelligence
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Leverage the power of artificial intelligence to unlock hidden insights in your business data. 
            Our platform provides predictive analytics, real-time dashboards, and automated reporting 
            that drive better decisions and measurable business outcomes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Powerful AI-Powered Features
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our platform combines cutting-edge AI technology with intuitive design to deliver 
              business intelligence that transforms how you understand and act on your data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-zion-slate mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industry-Specific Applications
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              See how different industries leverage our AI Business Intelligence platform 
              to achieve remarkable results and competitive advantages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-4">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-zion-blue-dark">
                      {useCase.industry}
                    </h3>
                    <div className="text-zion-cyan font-semibold">
                      ROI: {useCase.roi}
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {useCase.applications.map((app, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Choose the plan that best fits your business needs and scale as you grow. 
              All plans include our core AI analytics capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 border-2 ${
                plan.popular ? 'border-zion-cyan scale-105' : 'border-zion-blue-light'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">
                    {plan.plan}
                  </h3>
                  <div className="text-4xl font-bold text-zion-cyan mb-1">
                    {plan.price}
                  </div>
                  <div className="text-zion-slate">
                    {plan.period}
                  </div>
                  <p className="text-sm text-zion-slate mt-2">
                    {plan.bestFor}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-zion-cyan hover:bg-zion-cyan-light text-white' 
                    : 'bg-zion-blue-light hover:bg-zion-blue text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Measurable Business Benefits
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our AI Business Intelligence platform delivers concrete, measurable results 
              that directly impact your bottom line and competitive position.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-zion-slate mb-3">
                  {benefit.description}
                </p>
                <div className="text-2xl font-bold text-zion-cyan">
                  {benefit.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Advanced Technology Stack
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Built on cutting-edge technologies that ensure scalability, security, and performance 
              for enterprise-grade business intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "Machine Learning", icon: Brain, color: "from-purple-500 to-pink-500" },
              { name: "Real-time Processing", icon: Zap, color: "from-blue-500 to-cyan-500" },
              { name: "Cloud Native", icon: Globe, color: "from-green-500 to-blue-500" },
              { name: "API First", icon: Cpu, color: "from-orange-500 to-red-500" },
              { name: "Security", icon: Shield, color: "from-indigo-500 to-purple-500" },
              { name: "Scalability", icon: TrendingUp, color: "from-teal-500 to-green-500" }
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-zion-blue-dark">
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business Intelligence?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Join thousands of businesses that have already transformed their data into 
            actionable intelligence with our AI-powered platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </div>
          
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Phone</h4>
                <p className="text-white">+1 302 464 0950</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Email</h4>
                <p className="text-white">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Website</h4>
                <p className="text-white">https://ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Address</h4>
                <p className="text-white">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}