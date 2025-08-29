import { motion } from "framer-motion";
import React from 'react';
import { SEO } from '../../components/SEO';









const AIMarketingAutomation: React.FC = () => {
  const serviceData = {
    title: "AI-Powered Marketing Automation",
    subtitle: "Intelligent marketing automation that personalizes campaigns, optimizes conversions, and scales your growth",
    description: "Revolutionize your marketing with our AI-powered automation platform that personalizes customer experiences, optimizes campaigns in real-time, and drives 300% more conversions. Automate your entire marketing funnel with intelligent insights and predictive analytics.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=600",
    category: "AI & Marketing",
    price: 1799,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$1,799 - $5,999/month",
    website: "https://ziontechgroup.com/services/ai-marketing-automation",
    contactEmail: "kleber@ziontechgroup.com",
    contactPhone: "+1 302 464 0950"
  };

  const features = [
    {
      title: "AI-Powered Personalization",
      description: "Dynamic content personalization that adapts to individual customer behavior and preferences",
      icon: "🎯"
    },
    {
      title: "Predictive Analytics",
      description: "AI algorithms predict customer behavior, churn risk, and lifetime value",
      icon: "🔮"
    },
    {
      title: "Automated Campaign Optimization",
      description: "Real-time campaign optimization that adjusts targeting, messaging, and timing automatically",
      icon: "⚡"
    },
    {
      title: "Customer Journey Automation",
      description: "Intelligent automation of multi-channel customer journeys and touchpoints",
      icon: "🛤️"
    },
    {
      title: "Advanced Segmentation",
      description: "AI-driven customer segmentation based on behavior, demographics, and predictive models",
      icon: "👥"
    },
    {
      title: "Multi-Channel Orchestration",
      description: "Seamless coordination across email, social media, web, and mobile channels",
      icon: "📱"
    }
  ];

  const benefits = [
    "Increase conversion rates by 300%",
    "Reduce customer acquisition costs by 50%",
    "Improve customer lifetime value by 200%",
    "Automate 90% of marketing tasks",
    "Personalize customer experiences at scale",
    "Real-time campaign optimization and insights"
  ];

  const useCases = [
    {
      title: "E-commerce Marketing",
      description: "Personalized product recommendations, abandoned cart recovery, and customer lifecycle automation",
      industry: "E-commerce & Retail"
    },
    {
      title: "B2B Marketing",
      description: "Lead nurturing, account-based marketing, and sales funnel automation",
      industry: "B2B & Enterprise"
    },
    {
      title: "SaaS Marketing",
      description: "User onboarding, feature adoption, and subscription retention automation",
      industry: "SaaS & Technology"
    },
    {
      title: "Financial Services Marketing",
      description: "Customer onboarding, product recommendations, and compliance-aware automation",
      industry: "Financial Services"
    }
  ];

  const pricingPlans = [
    {
      name: "Professional",
      price: 1799,
      currency: "$",
      period: "month",
      features: [
        "Up to 50,000 contacts",
        "Basic AI personalization",
        "Email automation",
        "Basic analytics dashboard",
        "5 marketing channels",
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
        "Up to 500,000 contacts",
        "Advanced AI personalization",
        "Multi-channel automation",
        "Advanced analytics & reporting",
        "Unlimited channels",
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
        "Unlimited contacts",
        "Custom AI models",
        "White-label solutions",
        "Dedicated account manager",
        "Custom compliance features",
        "On-premise deployment",
        "API access"
      ],
      popular: false
    }
  ];

  const competitors = [
    {
      name: "HubSpot Marketing Hub",
      price: "$3,200 - $12,000/month",
      pros: ["Market leader", "Comprehensive features"],
      cons: ["Very expensive", "Complex setup"]
    },
    {
      name: "Marketo",
      price: "$2,500 - $8,000/month",
      pros: ["Good for enterprise", "Advanced features"],
      cons: ["High cost", "Steep learning curve"]
    },
    {
      name: "Zion Tech Group AI Marketing",
      price: "$1,799 - $5,999/month",
      pros: ["Advanced AI", "Cost-effective", "Easy deployment"],
      cons: ["Newer platform", "Growing ecosystem"]
    }
  ];

  const faqs = [
    {
      question: "How does AI improve marketing personalization?",
      answer: "Our AI analyzes customer behavior, preferences, and interactions to create dynamic, personalized content and experiences that increase engagement and conversions."
    },
    {
      question: "Can I integrate with my existing marketing tools?",
      answer: "Yes! We support integration with major marketing platforms including HubSpot, Salesforce, Mailchimp, Facebook Ads, Google Ads, and many others."
    },
    {
      question: "How quickly can I see improvements in conversions?",
      answer: "Most customers see measurable improvements in conversion rates within 30 days, with full optimization benefits realized within 2-3 months."
    },
    {
      question: "Do you support compliance requirements?",
      answer: "Absolutely. Our platform includes built-in compliance features for GDPR, CCPA, CAN-SPAM, and other marketing regulations."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI-Powered Marketing Automation - Zion Tech Group"
        description="Revolutionize your marketing with AI automation. Increase conversions by 300%, reduce costs by 50%, and personalize at scale."
        keywords="AI marketing automation, marketing automation, customer personalization, campaign optimization, marketing analytics"
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
        title="Automate Your Marketing Today"
        description="Transform your marketing with AI-powered automation and see 300% more conversions in 30 days."
        buttonText="Get Marketing Assessment"
        buttonLink="/contact"
        contactEmail={serviceData.contactEmail}
        contactPhone={serviceData.contactPhone}
      />
    </div>
  );
};

export default AIMarketingAutomation;