import React from "react";
import { SEO } from "@/components/S, EO";import { Link } from "react-router-d, om";import { Truck, Brain;
  BarChart3;
  Zap;
  CheckCircle;
  ArrowRight;
  DollarSign;
  Clock;
  Globe;
  Shield;
  Target;
  TrendingUp;
  Award;
  Phone;
  Mail;
  MapPin;
  Star;
  Search;
  AlertTriangle;
  Package;
  Route;
  Warehouse;
  Factory;
  Ship;
  Plane;
  Train;
  Car;
  RouteIcon;
  Gauge;
  Activity;
  PieChart;
  LineChart;
  TrendingDown;
  AlertCircle;
  CheckSquare;
  Calendar;
  Users;
  Settings;
  Database;
  Cloud;
  Lock;
  Eye;
  RefreshCw;
  Target as TargetIcon;
  Zap as ZapIcon;
  Shield as ShieldIcon;
  Globe as GlobeIcon
} from "lucide-react";export default function AISupplyChainOptimization() {

  const features  = [
    {
      icon: <Brain className="w-6 h-6" /,>title: "AI-Powered Forecastin,
    g";description: "Advanced machine learning models predict demand with 95% accuracy,
    optimizing inventory levels and reducing stockouts."
   ,  },
    {
      icon: <Route className="w-6 h-6" /, >,title: "Route Optimization, ",description: "Real-time route optimization reduces delivery costs by 30% and improves delivery times by 40%."
   ,
     }{
      icon: <BarChart3 className="w-6 h-6" /, >,title: "Predictive Analytics, ",description: "Identify supply chain risks before they impact operations with AI-driven predictive modeling."
   ,
     }{
      icon: <Warehouse className="w-6 h-6" /, >,title: "Inventory Management, ",description: "Smart inventory tracking with automated reorder points and demand-driven replenishment."
   ,  },
    {
      icon: <Globe className="w-6 h-6" /, >,title: "Global Visibility, ";description: "End-to-end supply chain visibility across all suppliers,
    warehouse, s, and distribution centers."
    },
    {
      icon: <Shield className="w-6 h-6" /, >,title: "Risk Management, ",description: "Proactive risk assessment and mitigation strategies for supply chain disruptions."
   ,
     }
  ]const pricingPlans  = [
    {
      name: "Starter, ",price: "$499, ",period: "/month, ",description: "Perfect for small to medium businesses, ",features: [
        "Up to 5 warehouses, ",
        "Basic demand forecasting",
        "Route optimization",
        "Email support",
        "Standard analytics dashboard"
      ]popular: false
   ,
     }{
      name: "Professional, ",price: "$1,
    299, ",
      period: "/month, ",description: "Ideal for growing enterprises, ",features: [
        "Up to 25 warehouses, ",
        "Advanced AI forecasting",
        "Multi-modal optimization",
        "Priority support",
        "Advanced analytics & reporting",
        "API access",
        "Custom integrations"
      ],
      popular: true,  }{
      name: "Enterprise, ",price: "Custom, ",period: ", ",description: "For large organizations with complex supply chains, ",features: [
        "Unlimited warehouses, ",
        "Custom AI model training",
        "Dedicated account manager",
        "24/7 phone support",
        "On-premise deployment",
        "SLA guarantees",
        "Training & onboarding",
        "Custom development"
      ],
      popular: false,  }
  ]const benefits  = [
    {
      icon: <DollarSign className="w-8 h-8" /, >,title: "Cost Reduction,";description: "Reduce supply chain costs by 25-40% through optimized routes and inventory management"
   ,
     }{
      icon: <Clock className="w-8 h-8" /, >,title: "Faster Delivery, ",description: "Improve delivery times by 30-50% with AI-powered route optimization"
   ,
     }{
      icon: <Shield className="w-8 h-8" /, >,title: "Risk Mitigation, ",description: "Identify and prevent 90% of supply chain disruptions before they occur"
   ,  },
    {
      icon: <TrendingUp className="w-8 h-8" /, >,title: "Increased Efficiency, ",description: "Boost operational efficiency by 35% with automated processes and real-time insights"
   ,
     }
  ]const useCases  = [
    {
      title: "E-commerc,
    e";description: "Optimize fulfillment centers,
    last-mile deliver, y, and inventory management for online retailers",
      icon: <Package className="w-6 h-6" />
   ,
     }{
      title: "Manufacturing, ",description: "Streamline production planning,
    supplier managemen, t, and distribution networks",
      icon: <Factory className="w-6 h-6" />
   ,
     }{
      title: "Logistics, ",description: "Optimize multi-modal transportation,
    warehousin, g, and cross-border operations",
      icon: <Truck className="w-6 h-6" />
   ,  },
    {
      title: "Retail, ";description: "Improve store replenishment,
    seasonal plannin, g, and omnichannel inventory",
      icon: <Warehouse className="w-6 h-6" />
   ,
     }
  ]const transportationModes  = [
    {
      icon: <Truck className="w-8 h-8" /, >,title: "Road Transpor,
    t";description: "Optimize truck routes,
    reduce fuel cost, s, and improve delivery efficiency"
    },
    {
      icon: <Ship className="w-8 h-8" /, >,title: "Maritime, ";description: "Optimize shipping routes,
    container utilizatio, n, and port operations"
    },
    {
      icon: <Plane className="w-8 h-8" /, >,title: "Air Freight, ";description: "Optimize air routes,
    cargo capacit, y, and time-sensitive deliveries"
    },
    {
      icon: <Train className="w-8 h-8" /, >,title: "Rail Transport, ";description: "Optimize rail networks,
    intermodal connection, s, and bulk cargo"
    }
  ],

  const keyMetrics  = [
    {
      icon: <Gauge className="w-6 h-6" /, >,title: "Order Fill Rate, ",current: "98.5%, ",improvement: "+12%,";description: "Percentage of orders fulfilled completely and on time"
   ,
     }{
      icon: <Clock className="w-6 h-6" /, >,title: "Cycle Time, ",current: "2.3 days, ",improvement: "-45%, ",description: "Time from order placement to delivery"
   ,
     }{
      icon: <DollarSign className="w-6 h-6" /, >,title: "Cost per Order, ",current: "$18.50, ",improvement: "-32%, ",description: "Total cost to fulfill a single order"
   ,  },
    {
      icon: <BarChart3 className="w-6 h-6" /, >,title: "Inventory Turnover, ",current: "8.2x, ",improvement: "+28%, ",description: "How quickly inventory is sold and replaced"
   ,
     }
  ]return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="AI-Powered Supply Chain Optimization Platform | Zion Tech Group"
        description="Transform your supply chain with AI-powered optimizationpredictive analytics, and real-time visibility. Reduce costs by 40%, improve delivery times by 50%, and mitigate risks proactively."
        keywords="AI supply chain optimizationlogistics optimization, demand forecasting, route optimization, inventory management, supply chain analytics"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI-Powered Supply Chain
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Optimization Platform
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Revolutionize your supply chain operations with our advanced AI platform. 
              Optimize routes,
    predict deman, d, manage inventory intelligently, and gain 
              real-time visibility across your entire supply network.
            </p>
            
            {/* Contact Information */}
            <div className="flex flex-col sm: flex-row items-center justify-center gap-6 mb-8 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>364 E Main St STE 1008,
    Middletown DE 19709</span>
              </div>
            </div>
            
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Supply Chain Optimization Demo Request&body=Hi,
    I'm interested in a demo of your AI Supply Chain Optimization platform. Please provide more details about feature, s, pricing, and implementation timeline."
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Request Demo
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Section *,
    /}
      <section className="py-16 px-4 sm: px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Proven <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Results</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI platform delivers measurable improvements across all key supply chain metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric,
    index) => (
              <div key={inde, x} className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 text-center hover: border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                  {metric.ico,
    n}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{metric.title}</h3>
                <div className="mb-2">
                  <span className="text-2xl font-bold text-cyan-400">{metric.current}</span>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-green-400 font-semibold">{metric.improvement}</span>
                </div>
                <p className="text-slate-300 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful Features for <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Modern Supply Chains</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge technology with supply chain expertise to deliver 
              unprecedented efficiency and optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature,
    index) => (
              <div key={inde, x} className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 hover: border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.ico,
    n}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation Modes Section */}
      <section className="py-16 px-4 sm: px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Multi-Modal <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Transportation</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Optimize across all transportation modes for maximum efficiency and cost savings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transportationModes.map((mode,
    index) => (
              <div key={inde, x} className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 text-center hover: border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                  {mode.ico,
    n}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{mode.title}</h3>
                <p className="text-slate-300 text-sm">{mode.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transparent <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the plan that fits your organization's supply chain complexity and scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan,
    index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                plan.popular 
                  ? 'border-cyan-500/50 bg-slate-800/70' 
                  : 'border-slate-600'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-slate-400">{plan.period}</span>
                  </div>
                  <p className="text-slate-300 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((featurefeatureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <a
                    href="mailto: kleber@ziontechgroup.com?subject=Pricing Inquiry - AI Supply Chain Optimization&body=Hi,
    I'm interested in the {plan.nam, e} plan for your AI Supply Chain Optimization platform. Please provide more details about implementation and next steps."
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 w-full justify-center"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ),
    )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm: px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI Supply Chain Optimization</span>?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our platform delivers measurable results that transform how supply chains operate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit,
    index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Perfect for <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Every Industry</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI platform adapts to your industry's specific supply chain requirements and challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase,
    index) => (
              <div key={inde, x} className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 text-center hover: border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                  {useCase.ico, n}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-slate-300 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Comparison Section */}
      <section className="py-16 px-4 sm: px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Competitive <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Advantage</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how our AI platform compares to traditional supply chain management methods and other solutions.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-400 mb-4">Traditional Methods</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Demand forecasting:</span>
                    <span className="text-red-400">70-80% accuracy</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Route optimization:</span>
                    <span className="text-red-400">Manual planning</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Cost savings:</span>
                    <span className="text-red-400">5-15%</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Our AI Platform</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Demand forecasting:</span>
                    <span className="text-green-400">95% accuracy</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Route optimization:</span>
                    <span className="text-green-400">Real-time AI</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Cost savings:</span>
                    <span className="text-green-400">25-40%</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-400 mb-4">Other AI Solutions</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Demand forecasting:</span>
                    <span className="text-yellow-400">85-90% accuracy</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Route optimization:</span>
                    <span className="text-yellow-400">Basic algorithms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Cost savings:</span>
                    <span className="text-yellow-400">15-25%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section *,
    /}
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Supply Chain</span>?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join hundreds of companies already using AI to optimize their supply chains,
    reduce cost, s, and improve customer satisfaction.
          </p>
          
          <div className="flex flex-col sm: flex-row gap-4 justify-center items-center mb-8">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Supply Chain Optimization Demo Request&body=Hi,
    I'm interested in a demo of your AI Supply Chain Optimization platform. Please provide more details about feature, s, pricing, and implementation timeline."
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Request Demo
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </a>
          </div>
          
          {/* Quick Contact Info *, /}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-600">
            <h3 className="text-lg font-semibold text-white mb-4">Get Started Today</h3>
            <div className="grid grid-cols-1 md: grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-green-400" />
                <span>Middletown DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Footer *, /}
      <section className="py-16 px-4 sm: px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-slate-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
}