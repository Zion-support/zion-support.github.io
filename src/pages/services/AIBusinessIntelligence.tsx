import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  TrendingUp, 
  BarChart3, 
  Database, 
  Zap, 
  Shield, 
  Users, 
  Globe, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Clock,
  Target,
  PieChart,
  LineChart,
  Activity,
  Eye,
  Search,
  Filter,
  Download,
  Share2,
  Settings,
  Lock,
  Cloud,
  Smartphone,
  Monitor,
  ShoppingBag,
  GraduationCap,
  Home
} from 'lucide-react';

export default function AIBusinessIntelligence() {
  const features = [
    {
      title: "Predictive Analytics Engine",
      description: "AI-powered forecasting that predicts future trends, customer behavior, and business outcomes with 95%+ accuracy",
      icon: Brain,
      color: "text-purple-400",
      details: [
        "Machine learning algorithms",
        "Time series forecasting",
        "Anomaly detection",
        "Scenario modeling"
      ]
    },
    {
      title: "Real-Time Dashboards",
      description: "Live monitoring dashboards that update in real-time with customizable widgets and interactive visualizations",
      icon: Activity,
      color: "text-cyan-400",
      details: [
        "Customizable layouts",
        "Real-time data streaming",
        "Interactive charts",
        "Mobile responsive"
      ]
    },
    {
      title: "Natural Language Query",
      description: "Ask questions in plain English and get instant insights from your data using advanced NLP technology",
      icon: Search,
      color: "text-green-400",
      details: [
        "Natural language processing",
        "Voice commands",
        "Smart suggestions",
        "Context awareness"
      ]
    },
    {
      title: "Advanced Data Visualization",
      description: "Beautiful, interactive charts and graphs that make complex data easy to understand and act upon",
      icon: PieChart,
      color: "text-yellow-400",
      details: [
        "100+ chart types",
        "Interactive elements",
        "Custom themes",
        "Export capabilities"
      ]
    },
    {
      title: "Automated Insights",
      description: "AI automatically discovers hidden patterns, correlations, and opportunities in your data",
      icon: Eye,
      color: "text-red-400",
      details: [
        "Pattern recognition",
        "Correlation analysis",
        "Opportunity detection",
        "Alert system"
      ]
    },
    {
      title: "Multi-Data Source Integration",
      description: "Connect to any data source - databases, APIs, cloud services, and spreadsheets",
      icon: Database,
      color: "text-blue-400",
      details: [
        "100+ connectors",
        "Real-time sync",
        "Data transformation",
        "ETL automation"
      ]
    }
  ];

  const useCases = [
    {
      title: "Sales Performance Analytics",
      description: "Track sales metrics, forecast revenue, and identify high-value opportunities",
      icon: TrendingUp,
      metrics: ["Revenue forecasting", "Sales pipeline analysis", "Customer lifetime value", "Conversion optimization"]
    },
    {
      title: "Customer Behavior Analysis",
      description: "Understand customer patterns, preferences, and predict churn risk",
      icon: Users,
      metrics: ["Customer segmentation", "Behavioral analysis", "Churn prediction", "Personalization insights"]
    },
    {
      title: "Financial Planning & Analysis",
      description: "Monitor financial health, forecast cash flow, and optimize resource allocation",
      icon: BarChart3,
      metrics: ["Cash flow forecasting", "Budget tracking", "Cost analysis", "ROI optimization"]
    },
    {
      title: "Operational Intelligence",
      description: "Monitor business operations in real-time and identify efficiency improvements",
      icon: Activity,
      metrics: ["Process monitoring", "Efficiency metrics", "Bottleneck identification", "Performance optimization"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$1,200",
      period: "/month",
      description: "Perfect for small businesses starting their AI journey",
      features: [
        "Up to 5 users",
        "Basic AI models",
        "Standard dashboards",
        "Email support",
        "Monthly reports",
        "Basic integrations"
      ],
      popular: false,
      color: "from-gray-600 to-gray-700"
    },
    {
      name: "Professional",
      price: "$2,500",
      period: "/month",
      description: "Ideal for growing businesses with advanced analytics needs",
      features: [
        "Up to 25 users",
        "Advanced AI models",
        "Custom dashboards",
        "Priority support",
        "Real-time analytics",
        "Advanced integrations",
        "Custom AI training",
        "API access"
      ],
      popular: true,
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "Enterprise",
      price: "$5,000",
      period: "/month",
      description: "For large organizations requiring enterprise-grade BI solutions",
      features: [
        "Unlimited users",
        "Custom AI models",
        "White-label dashboards",
        "24/7 dedicated support",
        "Advanced security",
        "Custom development",
        "On-premise options",
        "SLA guarantees"
      ],
      popular: false,
      color: "from-purple-600 to-pink-600"
    }
  ];

  const benefits = [
    {
      title: "10x Faster Insights",
      description: "Get answers to complex business questions in seconds, not days",
      icon: Zap,
      color: "text-yellow-400"
    },
    {
      title: "95%+ Accuracy",
      description: "AI-powered predictions with industry-leading accuracy rates",
      icon: Target,
      color: "text-green-400"
    },
    {
      title: "Real-Time Updates",
      description: "Always have the latest data with real-time synchronization",
      icon: Clock,
      color: "text-cyan-400"
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade security with SOC 2 compliance and data encryption",
      icon: Shield,
      color: "text-red-400"
    },
    {
      title: "Scalable Architecture",
      description: "Grows with your business from startup to enterprise",
      icon: TrendingUp,
      color: "text-purple-400"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring",
      icon: Users,
      color: "text-blue-400"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "Patient analytics, treatment outcomes, and operational efficiency",
      icon: Monitor,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Finance",
      description: "Risk assessment, fraud detection, and portfolio optimization",
      icon: BarChart3,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Retail",
      description: "Customer behavior, inventory optimization, and sales forecasting",
      icon: ShoppingBag,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Manufacturing",
      description: "Supply chain optimization, quality control, and predictive maintenance",
      icon: Settings,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Education",
      description: "Student performance, learning analytics, and institutional insights",
      icon: GraduationCap,
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "Real Estate",
      description: "Market analysis, property valuation, and investment insights",
      icon: Home,
      color: "from-gray-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEO 
        title="AI Business Intelligence Platform - Zion Tech Group" 
        description="Transform your business data into actionable insights with our AI-powered business intelligence platform. Real-time analytics, predictive modeling, and automated insights."
        keywords="ai business intelligence, predictive analytics, data visualization, business analytics, ai insights, real-time dashboards"
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Business Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-cyan-300 mb-8 font-medium">
              Transform Data into Actionable Intelligence
            </p>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed">
              Our AI-powered BI platform delivers real-time insights, predictive analytics, and automated 
              intelligence that helps you make data-driven decisions faster than ever before.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#features" className="futuristic-btn text-lg px-8 py-4 group">
                <span>Explore Features</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a href="/contact" className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500/20 hover:border-cyan-500 transition-all duration-300">
                Get Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advanced capabilities that make our BI platform the most intelligent in the market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card p-6 hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className={`w-16 h-16 mx-auto mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Business Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our AI BI platform transforms different aspects of your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.title}
                className="glass-card p-8 hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <useCase.icon className="w-16 h-16 text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our AI BI Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the competitive advantage of AI-powered business intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <benefit.icon className={`w-16 h-16 mx-auto mb-6 ${benefit.color} group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored BI solutions designed for your industry's unique challenges and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={industry.name}
                className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${industry.color} p-4`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs with our flexible pricing options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`glass-card p-8 text-center relative ${
                  plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-300 mb-8">{plan.description}</p>
                
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full futuristic-btn text-center ${
                    plan.popular ? 'bg-gradient-to-r from-cyan-500 to-blue-600' : ''
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business Intelligence?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of businesses that have already revolutionized their decision-making with our AI-powered BI platform
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a
                  href="/contact"
                  className="futuristic-btn text-lg px-8 py-4 group"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500/20 hover:border-cyan-500 transition-all duration-300 group"
                >
                  <span>Schedule Demo</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}