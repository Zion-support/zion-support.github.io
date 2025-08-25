import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Truck, 
  Package, 
  Globe, 
  Brain, 
  Shield, 
  Users, 
  BarChart3, 
  Clock, 
  DollarSign,
  ArrowRight,
  MapPin,
  Warehouse,
  Search,
  Edit3,
  Download,
  Eye,
  Lock,
  Smartphone,
  Headphones,
  Database,
  Zap,
  CheckCircle,
  AlertTriangle,
  FileText,
  Activity,
  Cpu,
  Network,
  Monitor,
  Route,
  Target,
  TrendingUp
} from 'lucide-react';

export default function AISupplyChainOptimization() {
  const features = [
    {
      icon: Brain,
      title: "AI Demand Forecasting",
      description: "Predict customer demand with 95% accuracy using advanced machine learning algorithms"
    },
    {
      icon: Route,
      title: "Route Optimization",
      description: "Optimize delivery routes in real-time for maximum efficiency and cost savings"
    },
    {
      icon: Warehouse,
      title: "Inventory Management",
      description: "Smart inventory tracking with automated reorder points and stock level optimization"
    },
    {
      icon: Globe,
      title: "Global Supply Chain",
      description: "End-to-end visibility across international suppliers, manufacturers, and distributors"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Identify and mitigate supply chain risks with AI-powered predictive analytics"
    },
    {
      icon: Zap,
      title: "Real-time Tracking",
      description: "Live tracking of shipments, inventory, and production status across the entire chain"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 100 SKUs",
        "Basic demand forecasting",
        "Standard route optimization",
        "Email support",
        "Basic reporting",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing businesses and mid-size companies",
      features: [
        "Up to 1,000 SKUs",
        "Advanced AI forecasting",
        "Multi-warehouse optimization",
        "Priority support",
        "Advanced analytics",
        "API integration",
        "Custom dashboards",
        "Supplier management"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$3,999",
      period: "/month",
      description: "For large corporations and global supply chains",
      features: [
        "Unlimited SKUs",
        "Custom AI models",
        "Multi-region optimization",
        "Dedicated support team",
        "White-label solution",
        "Custom integrations",
        "On-premise deployment",
        "Advanced compliance"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Reduce supply chain costs by 20-30% through optimized routes and inventory management"
    },
    {
      icon: Clock,
      title: "Faster Delivery",
      description: "Improve delivery times by 40% with AI-powered route optimization and demand forecasting"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Identify and address supply chain disruptions before they impact operations"
    },
    {
      icon: Users,
      title: "Customer Satisfaction",
      description: "Improve customer experience with accurate delivery estimates and real-time tracking"
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "Easily scale operations without proportional cost increases"
    },
    {
      icon: BarChart3,
      title: "Data Insights",
      description: "Gain valuable insights into supply chain performance and optimization opportunities"
    }
  ];

  const industries = [
    {
      icon: Package,
      title: "E-commerce",
      description: "Optimize fulfillment centers, last-mile delivery, and inventory management for online retailers"
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Streamline transportation, warehousing, and distribution operations for logistics providers"
    },
    {
      icon: Warehouse,
      title: "Manufacturing",
      description: "Optimize production planning, supplier management, and inventory control for manufacturers"
    },
    {
      icon: Globe,
      title: "Retail",
      description: "Improve store replenishment, omnichannel fulfillment, and demand forecasting for retailers"
    },
    {
      icon: Activity,
      title: "Healthcare",
      description: "Ensure critical medical supplies and equipment are available when and where needed"
    },
    {
      icon: Target,
      title: "Food & Beverage",
      description: "Optimize perishable goods management, cold chain logistics, and demand planning"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-orange-900 pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-6">
            <Truck className="w-4 h-4 mr-2" />
            AI-Powered Supply Chain Technology
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Supply Chain <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Optimization</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your supply chain with AI-powered optimization. Predict demand, optimize routes, manage inventory, and reduce costs with intelligent automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-600 text-white font-medium rounded-lg hover:from-orange-600 hover:to-yellow-700 transition-all duration-200 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link
              to="/request-demo"
              className="px-8 py-3 border border-orange-500 text-orange-400 font-medium rounded-lg hover:bg-orange-500/10 transition-all duration-200"
            >
              Request Demo
            </Link>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">30%</div>
            <div className="text-gray-400">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">40%</div>
            <div className="text-gray-400">Faster Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">95%</div>
            <div className="text-gray-400">Forecast Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-gray-400">Monitoring</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Advanced Supply Chain Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Industries We Serve
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{industry.title}</h3>
                <p className="text-gray-400">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Transparent Pricing Plans
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-orange-500 bg-orange-500/5' 
                    : 'border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-yellow-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-orange-400 mb-1">
                    {plan.price}
                  </div>
                  <div className="text-gray-400 mb-4">{plan.period}</div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
                  {plan.popular ? (
                    <span className="bg-gradient-to-r from-orange-500 to-yellow-600 text-white block">
                      {plan.cta}
                    </span>
                  ) : (
                    <span className="border border-gray-600 text-gray-300 block hover:border-orange-500 hover:text-orange-400">
                      {plan.cta}
                    </span>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose AI Supply Chain Optimization?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading companies who are already leveraging AI to transform their supply chain operations and gain competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-600 text-white font-medium rounded-lg hover:from-orange-600 hover:to-yellow-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial Today
              </Link>
              <Link
                to="/request-demo"
                className="px-8 py-3 border border-orange-500 text-orange-400 font-medium rounded-lg hover:bg-orange-500/10 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}