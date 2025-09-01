import { motion } from "framer-motion";
import React from 'react';
import { SEO } from '../../components/SEO';









const AIEducationPlatform: React.FC = () => {
  const serviceData = {
    title: "AI-Powered Education Platform",
    subtitle: "Intelligent learning platform that personalizes education, adapts to student needs, and improves learning outcomes",
    description: "Revolutionize education with our AI-powered platform that creates personalized learning experiences, provides intelligent tutoring, and tracks student progress in real-time. Improve learning outcomes by 200%, reduce dropout rates by 60%, and create engaging educational experiences.",
    heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&h=600",
    category: "AI & Education Technology",
    price: 1399,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$1,399 - $4,999/month",
    website: "https://ziontechgroup.com/services/ai-education-platform",
    contactEmail: "kleber@ziontechgroup.com",
    contactPhone: "+1 302 464 0950"
  };

  const features = [
    {
      title: "Personalized Learning Paths",
      description: "AI algorithms create customized learning experiences based on individual student needs and learning styles",
      icon: "🎯"
    },
    {
      title: "Intelligent Tutoring",
      description: "AI-powered virtual tutors that provide personalized guidance and support 24/7",
      icon: "🤖"
    },
    {
      title: "Adaptive Content",
      description: "Dynamic content that adjusts difficulty and presentation based on student performance",
      icon: "📚"
    },
    {
      title: "Progress Analytics",
      description: "Real-time tracking of student progress with detailed insights and recommendations",
      icon: "📊"
    },
    {
      title: "Interactive Assessments",
      description: "AI-generated assessments that adapt to student knowledge and provide instant feedback",
      icon: "✅"
    },
    {
      title: "Collaborative Learning",
      description: "AI-facilitated group learning and peer collaboration tools",
      icon: "👥"
    }
  ];

  const benefits = [
    "Improve learning outcomes by 200%",
    "Reduce student dropout rates by 60%",
    "Personalize education for every student",
    "Provide 24/7 intelligent tutoring",
    "Track progress in real-time",
    "Create engaging learning experiences"
  ];

  const useCases = [
    {
      title: "K-12 Education",
      description: "Comprehensive learning platform for primary and secondary education institutions",
      industry: "K-12 Education"
    },
    {
      title: "Higher Education",
      description: "Advanced learning platform for universities and colleges",
      industry: "Higher Education"
    },
    {
      title: "Corporate Training",
      description: "Employee training and development platform for businesses",
      industry: "Corporate Training"
    },
    {
      title: "Online Learning",
      description: "Virtual learning platform for remote and hybrid education",
      industry: "Online Education"
    }
  ];

  const pricingPlans = [
    {
      name: "Professional",
      price: 1399,
      currency: "$",
      period: "month",
      features: [
        "Up to 1000 students",
        "Basic AI personalization",
        "Learning management system",
        "Progress tracking",
        "Basic analytics dashboard",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: 2999,
      currency: "$",
      period: "month",
      features: [
        "Up to 10000 students",
        "Advanced AI personalization",
        "Intelligent tutoring",
        "Advanced analytics & reporting",
        "Custom learning paths",
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
        "Unlimited students",
        "Custom AI models",
        "White-label solutions",
        "Multi-language support",
        "Dedicated account manager",
        "Custom compliance features",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const competitors = [
    {
      name: "Blackboard",
      price: "$3,000 - $10,000/month",
      pros: ["Market leader", "Comprehensive features"],
      cons: ["Very expensive", "Complex interface"]
    },
    {
      name: "Canvas",
      price: "$2,500 - $8,000/month",
      pros: ["User-friendly", "Good features"],
      cons: ["High cost", "Limited AI"]
    },
    {
      name: "Zion Tech Group AI Education",
      price: "$1,399 - $4,999/month",
      pros: ["Advanced AI", "Cost-effective", "Easy to use"],
      cons: ["Newer platform", "Growing ecosystem"]
    }
  ];

  const faqs = [
    {
      question: "How does AI personalize learning for each student?",
      answer: "Our AI analyzes student performance, learning styles, and preferences to create customized learning paths, content recommendations, and adaptive assessments that optimize learning outcomes."
    },
    {
      question: "What subjects and grade levels do you support?",
      answer: "We support all major subjects including math, science, language arts, social studies, and more, across all grade levels from K-12 to higher education and corporate training."
    },
    {
      question: "Can I integrate with my existing educational software?",
      answer: "Yes! We support integration with major learning management systems including Blackboard, Canvas, Moodle, Google Classroom, and many others through our comprehensive API."
    },
    {
      question: "How do you ensure student data privacy and security?",
      answer: "We implement enterprise-grade security measures and comply with FERPA, COPPA, and other educational privacy regulations to protect student data."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI-Powered Education Platform - Zion Tech Group"
        description="Revolutionize education with AI-powered learning. Improve outcomes by 200%, reduce dropouts by 60%, and personalize education for every student."
        keywords="AI education platform, personalized learning, intelligent tutoring, educational technology, learning analytics"
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
        title="Transform Education Today"
        description="Join the future of education with our AI-powered platform and see 200% improvement in learning outcomes."
        buttonText="Get Education Demo"
        buttonLink="/contact"
        contactEmail={serviceData.contactEmail}
        contactPhone={serviceData.contactPhone}
      />
    </div>
  );
};

export default AIEducationPlatform;