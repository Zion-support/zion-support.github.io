import { motion } from "framer-motion";
import React from 'react';
import { SEO } from '../../components/SEO';









const AILegalResearchPlatform: React.FC = () => {

  const serviceData = {

    title: "AI-Powered Legal Research Platform",
    subtitle: "Intelligent legal research that accelerates case analysis, improves accuracy, and reduces research time",
    description: "Transform your legal practice with our AI-powered research platform that analyzes millions of legal documents, predicts case outcomes, and provides comprehensive legal insights. Reduce research time by 80%, improve case success rates by 60%, and stay ahead of legal developments.",
    heroImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&h=600",
    category: "AI & Legal Technology",
    price: 2199,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$2,199 - $6,999/month",
    website: "https://ziontechgroup.com/services/ai-legal-research-platform",
    contactEmail: "kleber@ziontechgroup.com",
    contactPhone: "+1 302 464 0950"
  };

  const features = [
    {

      title: "AI Case Analysis",
      description: "Advanced AI algorithms analyze case law, statutes, and legal precedents for relevant insights",
      icon: "🧠"
    },
    {

      title: "Predictive Case Outcomes",
      description: "AI-powered prediction of case outcomes based on historical data and legal patterns",
      icon: "🔮"
    },
    {

      title: "Intelligent Document Review",
      description: "Automated review and analysis of legal documents, contracts, and case files",
      icon: "📄"
    },
    {

      title: "Legal Research Automation",
      description: "Automated legal research workflows that save hours of manual work",
      icon: "⚡"
    },
    {

      title: "Compliance Monitoring",
      description: "Real-time monitoring of regulatory changes and compliance requirements",
      icon: "📋"
    },
    {

      title: "Multi-Jurisdiction Support",
      description: "Comprehensive coverage of federal, state, and international legal systems",
      icon: "🌍"
    }
  ];

  const benefits = [
    "Reduce legal research time by 80%",
    "Improve case success rates by 60%",
    "Increase research accuracy by 90%",
    "Automate document review processes",
    "Stay updated on regulatory changes",
    "Access comprehensive legal databases"
  ];

  const useCases = [
    {

      title: "Law Firms",
      description: "Comprehensive legal research platform for law firms of all sizes",
      industry: "Legal Services"
    },
    {

      title: "Corporate Legal Departments",
      description: "In-house legal research and compliance monitoring for corporations",
      industry: "Corporate Legal"
    },
    {

      title: "Government Agencies",
      description: "Legal research and regulatory compliance for government entities",
      industry: "Government & Public Sector"
    },
    {

      title: "Legal Education",
      description: "Advanced research tools for law schools and legal education institutions",
      industry: "Legal Education"
    }
  ];

  const pricingPlans = [
    {

      name: "Professional",
      price: 2199,
      currency: "$",
      period: "month",
      features: [
        "Up to 10 users",
        "Basic AI case analysis",
        "Document review tools",
        "Legal research automation",
        "Basic analytics dashboard",
        "Email support"
      ],
      popular: false
    },
    {

      name: "Enterprise",
      price: 4999,
      currency: "$",
      period: "month",
      features: [
        "Up to 100 users",
        "Advanced AI analysis",
        "Predictive case outcomes",
        "Compliance monitoring",
        "Advanced analytics & reporting",
        "Priority support",
        "Custom integrations"
      ],
      popular: true
    },
    {

      name: "Global",
      price: 6999,
      currency: "$",
      period: "month",
      features: [
        "Unlimited users",
        "Custom AI models",
        "Multi-jurisdiction support",
        "White-label solutions",
        "Dedicated account manager",
        "Custom compliance features",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const competitors = [
    {

      name: "Westlaw",
      price: "$5,000 - $15,000/month",
      pros: ["Industry standard", "Comprehensive database"],
      cons: ["Very expensive", "Complex interface"]
    },
    {

      name: "LexisNexis",
      price: "$4,500 - $12,000/month",
      pros: ["Good coverage", "Established platform"],
      cons: ["High cost", "Limited AI features"]
    },
    {

      name: "Zion Tech Group AI Legal",
      price: "$2,199 - $6,999/month",
      pros: ["Advanced AI", "Cost-effective", "Easy to use"],
      cons: ["Newer platform", "Growing database"]
    }
  ];

  const faqs = [
    {

      question: "How accurate is the AI case analysis?",
      answer: "Our AI achieves 90% accuracy in case analysis by analyzing millions of legal documents, precedents, and outcomes using advanced natural language processing and machine learning."
    },
    {

      question: "What legal databases do you cover?",
      answer: "We cover comprehensive legal databases including federal and state case law, statutes, regulations, administrative decisions, and international legal sources."
    },
    {

      question: "Can I integrate with my existing legal software?",
      answer: "Yes! We support integration with major legal practice management systems including Clio, PracticePanther, MyCase, and many others through our comprehensive API."
    },
    {

      question: "Do you support multiple jurisdictions?",
      answer: "Absolutely. Our platform covers federal, state, and international legal systems with jurisdiction-specific research tools and compliance monitoring."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI-Powered Legal Research Platform - Zion Tech Group"
        description="Transform your legal practice with AI research. Reduce research time by 80%, improve case success by 60%, and stay ahead of legal developments."
        keywords="AI legal research, legal technology, case analysis, document review, legal compliance"
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
        title="Transform Your Legal Practice Today"
        description="Join the future of legal research with our AI-powered platform and see 80% reduction in research time."
        buttonText="Get Legal Research Demo"
        buttonLink="/contact"
        contactEmail={serviceData.contactEmail}
        contactPhone={serviceData.contactPhone}
      />
    </div>
  );
};

export default AILegalResearchPlatform;