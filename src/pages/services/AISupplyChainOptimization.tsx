import { motion } from "framer-motion";
import React from 'react';
import { SEO } from '../../components/SEO';









const AISupplyChainOptimization: React.FC = () => {
  const serviceData = {
    title: "AI-Powered Supply Chain Optimization",
    subtitle: "Intelligent supply chain management that predicts, optimizes, and automates your operations",
    description: "Transform your supply chain with AI-powered optimization that reduces costs by 25%, improves delivery times by 40%, and eliminates stockouts. Get real-time visibility and predictive insights across your entire supply network.",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&h=600",
    category: "AI & Supply Chain",
    price: 1899,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$1,899 - $5,999/month",
    website: "https://ziontechgroup.com/services/ai-supply-chain-optimization",
    contactEmail: "kleber@ziontechgroup.com",
    contactPhone: "+1 302 464 0950"
  };

  const features = [
    {
      title: "Predictive Demand Forecasting",
      description: "AI algorithms predict demand patterns with 95% accuracy using historical data and external factors",
      icon: "📊"
    },
    {
      title: "Inventory Optimization",
      description: "Automated inventory management that maintains optimal stock levels and reduces carrying costs",
      icon: "📦"
    },
    {
      title: "Route Optimization",
      description: "AI-powered route planning that reduces transportation costs and delivery times",
      icon: "🚚"
    },
    {
      title: "Supplier Risk Management",
      description: "Real-time monitoring of supplier performance and risk assessment",
      icon: "⚠️"
    },
    {
      title: "Real-time Visibility",
      description: "End-to-end supply chain visibility with real-time tracking and alerts",
      icon: "👁️"
    },
    {
      title: "Automated Procurement",
      description: "Intelligent procurement automation that optimizes purchasing decisions",
      icon: "🤖"
    }
  ];

  const benefits = [
    "Reduce supply chain costs by 25%",
    "Improve delivery times by 40%",
    "Eliminate stockouts and overstock situations",
    "Reduce inventory carrying costs by 30%",
    "Improve supplier performance by 35%",
    "Real-time visibility across the entire supply chain"
  ];

  const useCases = [
    {
      title: "Manufacturing Supply Chain",
      description: "Optimize raw material procurement, production planning, and distribution for manufacturing companies",
      industry: "Manufacturing"
    },
    {
      title: "Retail & E-commerce",
      description: "Streamline inventory management, demand forecasting, and last-mile delivery for retail operations",
      industry: "Retail & E-commerce"
    },
    {
      title: "Healthcare Supply Chain",
      description: "Ensure critical medical supplies availability and optimize pharmaceutical distribution",
      industry: "Healthcare"
    },
    {
      title: "Food & Beverage",
      description: "Optimize perishable goods supply chain with temperature monitoring and demand prediction",
      industry: "Food & Beverage"
    }
  ];

  const pricingPlans = [
    {
      name: "Professional",
      price: 1899,
      currency: "$",
      period: "month",
      features: [
        "Up to 1000 SKUs",
        "Basic demand forecasting",
        "Inventory optimization",
        "Route optimization",
        "Basic analytics dashboard",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: 3999,
      currency: "$",
      period: "month",
      features: [
        "Up to 10000 SKUs",
        "Advanced AI forecasting",
        "Multi-location optimization",
        "Supplier risk management",
        "Advanced analytics & reporting",
        "Priority support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Global",
      price: 5999,
      currency: "$",
      period: "month",
      features: [
        "Unlimited SKUs",
        "Custom AI models",
        "Global supply chain optimization",
        "Advanced risk analytics",
        "Dedicated account manager",
        "Custom compliance features",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const competitors = [
    {
      name: "SAP Supply Chain",
      price: "$5,000 - $15,000/month",
      pros: ["Enterprise-grade", "Comprehensive features"],
      cons: ["Very expensive", "Complex implementation"]
    },
    {
      name: "Oracle Supply Chain",
      price: "$4,500 - $12,000/month",
      pros: ["Good integration", "Robust platform"],
      cons: ["High cost", "Steep learning curve"]
    },
    {
      name: "Zion Tech Group AI Supply Chain",
      price: "$1,899 - $5,999/month",
      pros: ["Advanced AI", "Cost-effective", "Easy deployment"],
      cons: ["Newer platform", "Growing ecosystem"]
    }
  ];

  const faqs = [
    {
      question: "How accurate is the AI demand forecasting?",
      answer: "Our AI models achieve 95% accuracy in demand forecasting by analyzing historical data, market trends, seasonality, and external factors like weather and events."
    },
    {
      question: "Can I integrate with my existing ERP system?",
      answer: "Yes! We support integration with major ERP systems including SAP, Oracle, Microsoft Dynamics, NetSuite, and many others through our comprehensive API."
    },
    {
      question: "How quickly can I see results?",
      answer: "Most customers see measurable improvements within 30 days, with full optimization benefits realized within 3-6 months of implementation."
    },
    {
      question: "Do you support multi-location operations?",
      answer: "Absolutely. Our platform is designed for global operations with support for multiple warehouses, distribution centers, and international supply chains."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI-Powered Supply Chain Optimization - Zion Tech Group"
        description="Transform your supply chain with AI optimization. Reduce costs by 25%, improve delivery times by 40%, and eliminate stockouts."
        keywords="AI supply chain, supply chain optimization, demand forecasting, inventory management, route optimization"
      />
      
      <ServiceHero 
        title={serviceData.title}
        subtitle={serviceData.subtitle}
        description={serviceData.description}
        image={serviceData.heroImage}
        category={serviceData.category}
        price={serviceData.price}
        currency={serviceData.currency}
        pricingModel={serviceData.pricingModel}
        marketPrice={serviceData.marketPrice}
        website={serviceData.website}
        contactEmail={serviceData.contactEmail}
        contactPhone={serviceData.contactPhone}
      />

      <ServiceFeatures features={features} />
      <ServiceBenefits benefits={benefits} />
      <ServiceUseCases useCases={useCases} />
      <ServicePricing plans={pricingPlans} />
      <ServiceComparison competitors={competitors} />
      <ServiceFAQ faqs={faqs} />
      <ServiceCTA 
        title="Optimize Your Supply Chain Today"
        description="Transform your supply chain operations with AI-powered optimization and see results in 30 days."
        buttonText="Get Supply Chain Assessment"
        buttonLink="/contact"
        contactEmail={serviceData.contactEmail}
        contactPhone={serviceData.contactPhone}
      />
    </div>
  );
};

export default AISupplyChainOptimization;