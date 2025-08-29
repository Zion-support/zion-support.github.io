import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Target, 
  Users, 
  BarChart3, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Brain,
  Clock,
  DollarSign,
  ArrowRight,
  Truck,
  Package,
  Warehouse,
  Globe,
  Route
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const AISupplyChainOptimizationPlatform = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Demand Forecasting",
      description: "Advanced machine learning algorithms analyze historical data, market trends, and external factors to predict demand with unprecedented accuracy.",
      benefits: ["Reduce forecast errors by 50%", "Optimize inventory levels", "Prevent stockouts and overstock"]
    },
    {
      icon: Route,
      title: "Intelligent Route Optimization",
      description: "AI-driven logistics optimization that calculates the most efficient delivery routes, reducing fuel costs and delivery times.",
      benefits: ["Reduce transportation costs by 25%", "Faster delivery times", "Lower carbon footprint"]
    },
    {
      icon: Warehouse,
      title: "Smart Inventory Management",
      description: "Real-time inventory tracking with AI-powered reorder points, supplier performance analysis, and automated procurement recommendations.",
      benefits: ["Reduce carrying costs by 30%", "Automated reordering", "Supplier performance insights"]
    },
    {
      icon: Globe,
      title: "Global Supply Chain Visibility",
      description: "End-to-end visibility across your entire supply chain network with real-time tracking, risk assessment, and disruption alerts.",
      benefits: ["Complete supply chain transparency", "Proactive risk management", "Faster issue resolution"]
    }
  ];

  const integrations = [
    { name: "SAP", description: "Full ERP integration and data synchronization" },
    { name: "Oracle", description: "Enterprise resource planning integration" },
    { name: "Salesforce", description: "CRM and sales data integration" },
    { name: "Shopify", description: "E-commerce platform synchronization" },
    { name: "WMS Systems", description: "Warehouse management system integration" },
    { name: "TMS Platforms", description: "Transportation management system sync" }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: 499,
      period: "month",
      description: "Perfect for small businesses",
      features: [
        "Up to 100 SKUs",
        "Basic demand forecasting",
        "Inventory tracking",
        "Route optimization",
        "Basic analytics",
        "Email support",
        "Standard reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 1299,
      period: "month",
      description: "Ideal for growing companies",
      features: [
        "Up to 1000 SKUs",
        "Advanced AI features",
        "Real-time optimization",
        "Supplier analytics",
        "Full integrations",
        "Priority support",
        "Custom dashboards",
        "Advanced reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 2999,
      period: "month",
      description: "For large enterprises and networks",
      features: [
        "Unlimited SKUs",
        "Custom AI models",
        "Advanced analytics",
        "API access",
        "White-label options",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Robert Martinez",
      role: "Supply Chain Director",
      company: "Global Manufacturing Corp",
      content: "AI Supply Chain Optimization Platform has transformed our operations. We've reduced costs by 25% and improved delivery times significantly.",
      rating: 5
    },
    {
      name: "Jennifer Lee",
      role: "Logistics Manager",
      company: "E-commerce Solutions Inc",
      content: "The AI-powered demand forecasting and route optimization have given us a competitive edge. Our customers love the faster deliveries.",
      rating: 5
    },
    {
      name: "Michael Thompson",
      role: "Operations VP",
      company: "Retail Chain Partners",
      content: "Real-time visibility across our supply chain has improved our decision-making dramatically. We can now respond to issues before they become problems.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="AI Supply Chain Optimization Platform — Zion Tech Group | Intelligent Supply Chain Management"
        description="Transform your supply chain with AI-powered demand forecasting, route optimization, inventory management, and global visibility. Reduce costs by 25% and improve delivery times."
        keywords="AI supply chain, supply chain optimization, demand forecasting, route optimization, inventory management, logistics AI"
        canonical="https://ziontechgroup.com/services/ai-supply-chain-optimization-platform"
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2"/>
              AI-Powered Supply Chain Optimization
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Supply Chain
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"> Optimization Platform</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize your supply chain operations with intelligent automation. AI-powered demand forecasting, 
              route optimization, inventory management, and global visibility to reduce costs by 25% and improve efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
              >
                📞 Call +1 (302) 464-0950
              </a>
              <a 
                href="/request-quote" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              >
                Get Free Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose AI Supply Chain Optimization Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">25% Cost Reduction</h3>
              <p className="text-gray-300">AI-powered optimization and efficiency</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Route className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">50% Forecast Accuracy</h3>
              <p className="text-gray-300">Advanced demand prediction</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">30% Inventory Reduction</h3>
              <p className="text-gray-300">Smart inventory management</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Global Visibility</h3>
              <p className="text-gray-300">End-to-end supply chain transparency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful AI Features</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"/>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Seamless Integrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
                <h3 className="text-xl font-bold text-white mb-2">{integration.name}</h3>
                <p className="text-gray-300">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-slate-800/50 rounded-xl p-8 border ${
                tier.popular ? 'border-orange-500 bg-orange-500/10' : 'border-slate-700'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">${tier.price}</span>
                  <span className="text-gray-400">/{tier.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"/>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="/request-quote" 
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:scale-105' 
                      : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Supply Chain Professionals Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current"/>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                  <p className="text-gray-400">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Optimize Your Supply Chain?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading companies already using AI to streamline their supply chain operations and gain competitive advantages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
            >
              📞 Call +1 (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              ✉️ Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-orange-400 mb-4"/>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-white">
                +1 (302) 464-0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-orange-400 mb-4"/>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-orange-400 mb-4"/>
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300 text-center">
                364 E Main St STE 1008<br/>
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISupplyChainOptimizationPlatform;