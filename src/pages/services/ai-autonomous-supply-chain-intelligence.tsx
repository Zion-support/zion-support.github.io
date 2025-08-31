import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  TrendingUp, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Truck,
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function AIAutonomousSupplyChainIntelligence() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Demand Forecasting",
      description: "Predict market demand with 95% accuracy using advanced machine learning algorithms."
    },
    {
      icon: Shield,
      title: "Risk Management & Compliance",
      description: "Monitor supply chain risks and ensure regulatory compliance in real-time."
    },
    {
      icon: TrendingUp,
      title: "Inventory Optimization",
      description: "Automatically optimize inventory levels to reduce costs and improve efficiency."
    },
    {
      icon: Truck,
      title: "Logistics Optimization",
      description: "Optimize routes, carriers, and delivery schedules for maximum efficiency."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      features: ["Basic demand forecasting", "Inventory management", "Email support"]
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      features: ["Advanced AI analytics", "Risk management", "Priority support", "API access"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1299",
      period: "/month",
      features: ["Full platform access", "Custom integrations", "Dedicated support", "White-label options"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Autonomous Supply Chain Intelligence | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered supply chain intelligence platform for demand forecasting, inventory optimization, and risk management." />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-autonomous-supply-chain-intelligence" />
      </Helmet>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Supply Chain
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Autonomous Supply Chain
            <span className="text-zion-cyan"> Intelligence Platform</span>
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Transform your supply chain with AI-powered intelligence for demand forecasting, 
            inventory optimization, and automated risk management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/90 transition-all duration-300">
              View Pricing <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300">
              Request Demo
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Platform Features</h2>
            <p className="text-xl text-zion-slate-light">Advanced AI capabilities for modern supply chains</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-zion-slate-dark/50 border border-zion-purple/20 rounded-xl hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pricing Plans</h2>
            <p className="text-xl text-zion-slate-light">Choose the plan that fits your business needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                plan.popular ? 'border-zion-cyan bg-zion-slate-dark/80 scale-105' : 'border-zion-purple/20 bg-zion-slate-dark/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-zion-cyan text-white hover:bg-zion-cyan/90">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-zion-purple/20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Contact Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-2">
              <Phone className="w-6 h-6 text-zion-cyan" />
              <span className="text-zion-slate-light">+1 (302) 464-0950</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Mail className="w-6 h-6 text-zion-cyan" />
              <span className="text-zion-slate-light">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-6 h-6 text-zion-cyan" />
              <span className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}