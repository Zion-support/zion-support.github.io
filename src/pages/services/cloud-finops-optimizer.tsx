import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cloud, 
  TrendingDown, 
  DollarSign, 
  BarChart3, 
  Zap, 
  Shield, 
  Brain, 
  ArrowRight,
  CheckCircle,
  Star,
  PieChart,
  Activity,
  Clock,
  Target,
  Settings,
  Monitor,
  AlertTriangle,
  LineChart
} from 'lucide-react';

const CloudFinOpsOptimizer: React.FC = () => {
  const features = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost Optimization",
      description: "AI-powered cost analysis and recommendations to reduce cloud spending by up to 40%"
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Waste Detection",
      description: "Automatically identify and eliminate unused resources, idle instances, and over-provisioned services"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "Live dashboards showing cost trends, usage patterns, and optimization opportunities"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Forecast future costs and usage to prevent budget overruns and optimize resource planning"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Automated Optimization",
      description: "Intelligent auto-scaling and resource scheduling based on actual usage patterns"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Compliance Tracking",
      description: "Monitor cost allocation, tagging compliance, and budget adherence across all cloud services"
    }
  ];

  const benefits = [
    "Reduce cloud costs by 30-40% on average",
    "Eliminate 80% of resource waste",
    "Improve budget forecasting accuracy by 60%",
    "Automate 70% of cost optimization tasks",
    "Real-time cost visibility and alerts",
    "Multi-cloud cost management and optimization"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$1,800",
      period: "/month",
      description: "Perfect for small to medium cloud environments",
      features: [
        "Up to $50K monthly cloud spend",
        "Basic cost optimization",
        "Waste detection",
        "Cost monitoring dashboard",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$3,500",
      period: "/month",
      description: "Ideal for growing cloud operations",
      features: [
        "Up to $200K monthly cloud spend",
        "Advanced AI optimization",
        "Predictive analytics",
        "Automated cost controls",
        "Priority support",
        "Custom reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large-scale cloud operations",
      features: [
        "Unlimited cloud spend",
        "Custom AI models",
        "White-label solution",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations"
      ]
    }
  ];

  const cloudProviders = [
    { name: "AWS", icon: "☁️", description: "Comprehensive cost optimization for Amazon Web Services" },
    { name: "Azure", icon: "🔷", description: "Microsoft Azure cost management and optimization" },
    { name: "Google Cloud", icon: "🔵", description: "GCP cost optimization and resource management" },
    { name: "Multi-Cloud", icon: "🌐", description: "Unified cost management across multiple cloud providers" }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud FinOps Optimizer - Reduce Cloud Costs by 40% | Zion Tech Group</title>
        <meta name="description" content="Optimize your cloud costs with AI-powered FinOps. Reduce spending by 40%, eliminate waste, and automate cost optimization across AWS, Azure, and Google Cloud." />
        <meta name="keywords" content="cloud finops, cost optimization, cloud cost management, AWS optimization, Azure optimization, GCP optimization, cloud waste detection" />
        <link rel="canonical" href="https://ziontechgroup.com/services/cloud-finops-optimizer" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <Cloud className="w-4 h-4 mr-2 text-blue-400" />
                Cloud Cost Optimization
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cloud FinOps Optimizer
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  Slash Your Cloud Costs
                </span>
              </h1>
              <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
                Transform your cloud financial operations with AI-powered cost optimization. 
                Reduce spending by 40%, eliminate waste, and automate cost management across all cloud providers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                <div className="text-zinc-400">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
                <div className="text-zinc-400">Waste Elimination</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">60%</div>
                <div className="text-zinc-400">Forecast Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">70%</div>
                <div className="text-zinc-400">Task Automation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Providers Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">
                Supported Cloud Providers
              </h2>
              <p className="text-zinc-400">
                Optimize costs across all major cloud platforms
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {cloudProviders.map((provider, index) => (
                <div key={index} className="bg-zinc-800/30 border border-zinc-700/30 rounded-lg p-6 text-center hover:border-green-500/50 transition-all duration-300">
                  <div className="text-4xl mb-3">{provider.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{provider.name}</h3>
                  <p className="text-sm text-zinc-400">{provider.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful FinOps Features
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Our AI-powered platform provides comprehensive cloud cost optimization and financial operations management.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-zinc-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-800/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Cloud FinOps Optimizer?
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Join thousands of organizations who have transformed their cloud financial operations with AI-powered optimization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-zinc-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {benefits.slice(3).map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-zinc-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transparent Pricing Based on Cloud Spend
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Choose the plan that fits your cloud environment size and scale as you grow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`relative bg-zinc-800/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-green-500/50 bg-gradient-to-br from-zinc-800/50 to-green-900/20' 
                    : 'border-zinc-700/50'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-zinc-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-zinc-400">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                      : 'bg-zinc-700 text-white hover:bg-zinc-600'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Cloud Costs?
            </h2>
            <p className="text-xl text-zinc-300 mb-8">
              Start saving money today with AI-powered cloud cost optimization and FinOps automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudFinOpsOptimizer;