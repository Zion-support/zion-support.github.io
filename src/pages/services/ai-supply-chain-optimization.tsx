import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Truck, 
  Package, 
  TrendingUp, 
  Shield, 
  Zap, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  Globe, 
  Brain,
  Eye,
  Clock,
  DollarSign,
  Star,
  Lock,
  Cpu,
  Workflow,
  Bot,
  Sparkles,
  MapPin,
  Activity,
  Database,
  Network,
  Settings,
  Users,
  Target,
  BarChart,
  PieChart,
  LineChart,
  Calendar,
  AlertTriangle,
  CheckSquare,
  FileText,
  MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AISupplyChainOptimization() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Demand Forecasting",
      description: "Advanced machine learning algorithms predict demand patterns with 95% accuracy, reducing stockouts and overstock situations.",
      benefits: ["95% forecast accuracy", "Real-time demand sensing", "Seasonal pattern recognition", "External factor integration"]
    },
    {
      icon: Network,
      title: "Network Optimization",
      description: "Optimize your supply chain network with AI-driven location analysis, routing optimization, and cost reduction strategies.",
      benefits: ["Optimal facility placement", "Route optimization", "Cost reduction up to 30%", "Multi-echelon optimization"]
    },
    {
      icon: Activity,
      title: "Real-Time Visibility",
      description: "End-to-end supply chain visibility with real-time tracking, predictive analytics, and proactive issue resolution.",
      benefits: ["Real-time tracking", "Predictive delays", "Proactive alerts", "Performance monitoring"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive supply chain analytics with customizable dashboards, KPI tracking, and actionable insights.",
      benefits: ["Custom dashboards", "KPI tracking", "Trend analysis", "Performance benchmarking"]
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Identify and mitigate supply chain risks with AI-powered risk assessment and contingency planning.",
      benefits: ["Risk scoring", "Contingency planning", "Supplier assessment", "Compliance monitoring"]
    },
    {
      icon: Zap,
      title: "Automated Optimization",
      description: "Continuous supply chain optimization with automated decision-making and real-time adjustments.",
      benefits: ["Auto-replenishment", "Dynamic pricing", "Inventory optimization", "Supplier selection"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small to medium businesses",
      features: [
        "Up to 100 SKUs",
        "Basic demand forecasting",
        "Standard analytics",
        "Email support",
        "Basic integrations",
        "Monthly reports"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing enterprises",
      features: [
        "Up to 1,000 SKUs",
        "Advanced AI algorithms",
        "Real-time optimization",
        "Priority support",
        "Full integrations",
        "Custom dashboards",
        "Risk management",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Unlimited SKUs",
        "Custom AI models",
        "White-label solution",
        "Dedicated manager",
        "24/7 phone support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const industrySolutions = [
    {
      title: "Manufacturing",
      description: "Optimize production planning, inventory management, and supplier relationships for maximum efficiency.",
      metrics: ["25% reduction in lead times", "30% inventory cost reduction", "40% improvement in on-time delivery"]
    },
    {
      title: "Retail & E-commerce",
      description: "Streamline omnichannel operations with intelligent inventory allocation and demand forecasting.",
      metrics: ["35% reduction in stockouts", "20% increase in inventory turnover", "50% faster order fulfillment"]
    },
    {
      title: "Healthcare & Pharmaceuticals",
      description: "Ensure critical supply availability with predictive analytics and risk mitigation strategies.",
      metrics: ["99.9% supply availability", "60% reduction in expired inventory", "100% compliance adherence"]
    },
    {
      title: "Logistics & Transportation",
      description: "Optimize routes, reduce costs, and improve delivery performance with AI-driven insights.",
      metrics: ["30% reduction in transportation costs", "25% improvement in delivery times", "40% increase in capacity utilization"]
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Reduce supply chain costs by 20-30% through intelligent optimization and automation.",
      value: "20-30% cost reduction"
    },
    {
      icon: Clock,
      title: "Faster Delivery",
      description: "Improve delivery performance and reduce lead times with optimized routing and planning.",
      value: "25% faster delivery"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Identify and address supply chain risks before they impact your business operations.",
      value: "90% risk reduction"
    },
    {
      icon: TrendingUp,
      title: "Increased Efficiency",
      description: "Boost overall supply chain efficiency with AI-powered automation and optimization.",
      value: "40% efficiency improvement"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Supply Chain Optimization Platform - Zion Tech Group</title>
        <meta name="description" content="Transform your supply chain with AI-powered optimization, demand forecasting, and real-time visibility. Reduce costs by 30%, improve delivery by 25%, and boost efficiency by 40%." />
        <meta name="keywords" content="AI supply chain, supply chain optimization, demand forecasting, inventory optimization, logistics optimization, supply chain analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-8">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Optimization
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Supply Chain
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"> Optimization</span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Transform your supply chain with AI-powered optimization, demand forecasting, and real-time visibility. 
                Reduce costs by 30%, improve delivery by 25%, and boost efficiency by 40%.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-200">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-slate-400">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Free 30-day trial
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  No setup fees
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Cancel anytime
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transform Your Supply Chain Performance
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our AI-powered platform delivers measurable results across all key supply chain metrics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-slate-400 mb-4">{benefit.description}</p>
                  <div className="text-2xl font-bold text-green-400">{benefit.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI-Powered Features That Drive Results
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our platform combines cutting-edge AI technology with proven supply chain methodologies 
                to deliver measurable business outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 mb-4">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry-Specific Solutions
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Tailored supply chain optimization solutions for your specific industry challenges and requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industrySolutions.map((solution, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">{solution.title}</h3>
                  <p className="text-slate-400 mb-6">{solution.description}</p>
                  
                  <div className="space-y-3">
                    {solution.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm text-slate-300">
                        <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core AI features and 30-day free trial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular ? 'border-green-500/50 ring-2 ring-green-500/20' : 'border-white/10'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-slate-400 mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={plan.name === "Enterprise" ? "/contact" : "/contact"}
                    className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join hundreds of companies that have already transformed their supply chain operations with our AI-powered platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
            
            <div className="mt-8 text-sm text-slate-400">
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-green-400 hover:text-green-300">+1 302 464 0950</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}