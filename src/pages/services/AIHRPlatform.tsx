import { motion } from "framer-motion";
import React from 'react';
import { SEO } from '../../components/SEO';









const AIHRPlatform: React.FC = () => {
  const serviceData = {
    title: "AI-Powered HR Platform",
    subtitle: "Intelligent human resources management that automates recruitment, optimizes performance, and enhances employee experience",
    description: "Transform your HR operations with our AI-powered platform that streamlines recruitment, automates performance management, and provides data-driven insights. Reduce hiring time by 60%, improve retention by 40%, and increase employee satisfaction scores.",
    heroImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&h=600",
    category: "AI & Human Resources",
    price: 1599,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$1,599 - $4,999/month",
    website: "https://ziontechgroup.com/services/ai-hr-platform",
    contactEmail: "kleber@ziontechgroup.com",
    contactPhone: "+1 302 464 0950"
  };

  const features = [
    {
      title: "AI-Powered Recruitment",
      description: "Intelligent candidate screening, matching, and assessment using advanced AI algorithms",
      icon: "🎯"
    },
    {
      title: "Performance Management",
      description: "Automated performance tracking, goal setting, and feedback systems",
      icon: "📊"
    },
    {
      title: "Employee Analytics",
      description: "Data-driven insights into employee engagement, productivity, and retention",
      icon: "📈"
    },
    {
      title: "Automated Onboarding",
      description: "Streamlined onboarding processes with personalized learning paths",
      icon: "🚀"
    },
    {
      title: "Talent Development",
      description: "AI-powered learning recommendations and career path planning",
      icon: "🎓"
    },
    {
      title: "Compliance Management",
      description: "Automated compliance tracking and reporting for HR regulations",
      icon: "📋"
    }
  ];

  const benefits = [
    "Reduce hiring time by 60%",
    "Improve employee retention by 40%",
    "Increase employee satisfaction scores by 35%",
    "Automate 80% of HR administrative tasks",
    "Reduce recruitment costs by 45%",
    "Improve diversity and inclusion metrics"
  ];

  const useCases = [
    {
      title: "Enterprise HR Management",
      description: "Comprehensive HR platform for large organizations with complex workforce management needs",
      industry: "Enterprise & Fortune 500"
    },
    {
      title: "Startup & Scale-up HR",
      description: "Streamlined HR solutions for growing companies that need efficient people management",
      industry: "Startups & Scale-ups"
    },
    {
      title: "Remote Workforce Management",
      description: "AI-powered tools for managing distributed teams and remote work environments",
      industry: "Remote-First Companies"
    },
    {
      title: "Manufacturing & Retail HR",
      description: "Specialized HR solutions for industries with high turnover and seasonal hiring needs",
      industry: "Manufacturing & Retail"
    }
  ];

  const pricingPlans = [
    {
      name: "Professional",
      price: 1599,
      currency: "$",
      period: "month",
      features: [
        "Up to 500 employees",
        "AI recruitment tools",
        "Basic performance management",
        "Employee analytics dashboard",
        "Standard onboarding",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: 3499,
      currency: "$",
      period: "month",
      features: [
        "Up to 5000 employees",
        "Advanced AI recruitment",
        "Comprehensive performance management",
        "Advanced analytics & reporting",
        "Custom onboarding workflows",
        "Priority support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Global",
      price: 4999,
      currency: "$",
      period: "month",
      features: [
        "Unlimited employees",
        "Custom AI models",
        "Multi-language support",
        "Global compliance features",
        "Dedicated account manager",
        "White-label solutions",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const competitors = [
    {
      name: "Workday",
      price: "$3,500 - $12,000/month",
      pros: ["Market leader", "Comprehensive features"],
      cons: ["Very expensive", "Complex implementation"]
    },
    {
      name: "BambooHR",
      price: "$2,000 - $6,000/month",
      pros: ["User-friendly", "Good for SMBs"],
      cons: ["Limited AI", "Basic features"]
    },
    {
      name: "Zion Tech Group AI HR",
      price: "$1,599 - $4,999/month",
      pros: ["Advanced AI", "Cost-effective", "Easy deployment"],
      cons: ["Newer platform", "Growing ecosystem"]
    }
  ];

  const faqs = [
    {
      question: "How does AI improve the recruitment process?",
      answer: "Our AI analyzes candidate profiles, resumes, and assessments to identify the best matches for your job requirements, reducing bias and improving hiring quality."
    },
    {
      question: "Can I integrate with my existing HR systems?",
      answer: "Yes! We support integration with major HR systems including Workday, BambooHR, ADP, Paychex, and many others through our comprehensive API."
    },
    {
      question: "How quickly can I see improvements in hiring?",
      answer: "Most customers see measurable improvements in hiring efficiency within 30 days, with full optimization benefits realized within 3-6 months."
    },
    {
      question: "Do you support international HR compliance?",
      answer: "Absolutely. Our platform includes compliance features for major markets including GDPR, CCPA, and various international labor laws."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI-Powered HR Platform - Zion Tech Group"
        description="Transform your HR operations with AI automation. Reduce hiring time by 60%, improve retention by 40%, and increase employee satisfaction."
        keywords="AI HR platform, HR automation, recruitment AI, performance management, employee analytics"
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
        title="Transform Your HR Operations Today"
        description="Join the future of HR with our AI-powered platform and see measurable improvements in 30 days."
        buttonText="Get HR Assessment"
        buttonLink="/contact"
        contactEmail={serviceData.contactEmail}
        contactPhone={serviceData.contactPhone}
      />
    </div>
  );
};

export default AIHRPlatform;