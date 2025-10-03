// import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TrendingUp } from 'lucide-react'';
import Header from '../../components/Header'';
import Footer from '../../components/Footer'';
// import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TrendingUp } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AIEmailMarketing: React.FC = () => {
  const features: [,
    {
      icon: Brain,,
      title: "AI Content Generation",,
      description: "Automatically generate personalized email content based on customer behavior, preferences, and engagement history.",,
      title: "AI Content Generation",,
      description: "Automatically generate personalized email content based on customer behavior, preferences, and engagement history.",,
      benefit: "300% increase in open rates",
    },
    {
      icon: Target,,
      title: "Smart Segmentation",,
      description: "AI-powered audience segmentation that identifies high-value customers and predicts optimal send times.",,
      title: "Smart Segmentation",,
      description: "AI-powered audience segmentation that identifies high-value customers and predicts optimal send times.",,
      benefit: "85% improvement in click-through rates",
    },
    {
      icon: BarChart3,,
      title: "Predictive Analytics",,
      description: "Advanced analytics that predict campaign performance and optimize subject lines, content, and timing.",,
      title: "Predictive Analytics",,
      description: "Advanced analytics that predict campaign performance and optimize subject lines, content, and timing.",,
      benefit: "250% ROI improvement",
    },
    {
      icon: Zap,,
      title: "Automated Campaigns",,
      description: "Intelligent automation that triggers personalized campaigns based on customer actions and lifecycle stages.",,
      title: "Automated Campaigns",,
      description: "Intelligent automation that triggers personalized campaigns based on customer actions and lifecycle stages.",,
      benefit: "70% reduction in manual work",
    },
    {
      icon: Clock,,
      title: "Optimal Timing",,
      description: "AI determines the best time to send emails to each individual recipient for maximum engagement.",,
      title: "Optimal Timing",,
      description: "AI determines the best time to send emails to each individual recipient for maximum engagement.",,
      benefit: "45% increase in engagement",
    },
    {
      icon: Shield,,
      title: "Deliverability Optimization",,
      description: "Advanced algorithms ensure maximum inbox placement and compliance with email regulations.",,
      title: "Deliverability Optimization",,
      description: "Advanced algorithms ensure maximum inbox placement and compliance with email regulations.",,
      benefit: "98% deliverability rate",
    }],
;

  const pricing: [,
    {
      name="Starter",
      price: "$79",
      period: "/month",
      description: "Perfect for small businesses starting with AI-powered email marketing",
      features: [,,
      name="Starter
      price: ", $79
      period: "/month
      description: ", Perfect for small businesses starting with AI-powered email marketing
      features: [,,",
        "Up to 10,000 subscribers",;
        "Basic AI content generation",;
        "Simple automation",;
        "Email support",;
        "Basic analytics",;
        "Standard templates",;
        "5 campaigns/month",;
        "Basic segmentation"],

      popular: false,
    },
    {
      name="Professional",
      price: "$199",
      period: "/month",
      description: "Ideal for growing businesses with advanced email marketing needs",
      features: [,,
      name="Professional
      price: ", $199
      period: "/month
      description: ", Ideal for growing businesses with advanced email marketing needs
      features: [,,",
        "Up to 50,000 subscribers",;
        "Advanced AI content generation",;
        "Smart automation workflows",;
        "Priority support",;
        "Advanced analytics & insights",;
        "Custom templates",;
        "Unlimited campaigns",;
        "Advanced segmentation",;
        "A/B testing",;
        "API access"],

      popular: true,
    },
    {
      name="Enterprise",
      price: "$599",
      period: "/month",
      description: "Complete solution for large organizations with enterprise requirements",
      features: [,,
      name="Enterprise
      price: ", $599
      period: "/month
      description: ", Complete solution for large organizations with enterprise requirements
      features: [,,",
        "Unlimited subscribers",;
        "Enterprise AI capabilities",;
        "Complex automation workflows",;
        "Dedicated account manager",;
        "Enterprise analytics suite",;
        "White-label templates",;
        "Unlimited campaigns",;
        "Advanced AI segmentation",;
        "Custom integrations",;
        "Advanced security features",;
        "SLA guarantee",;
        "Training & consultation"],

      popular: false,,
      name="Starter",,
      price: "$79",,
      period: "/month",,
      description: "Perfect for small businesses starting with AI-powered email marketing",,
      features: [,,
        "Up to 10,000 subscribers",
        "Basic AI content generation",
        "Simple automation",
        "Email support",
        "Basic analytics",
        "Standard templates",
        "5 campaigns/month",
        "Basic segmentation"],

      popular: false,
    },
    {
      name="Professional",,
      price: "$199",,
      period: "/month",,
      description: "Ideal for growing businesses with advanced email marketing needs",,
      features: [,,
        "Up to 50,000 subscribers",
        "Advanced AI content generation",
        "Smart automation workflows",
        "Priority support",
        "Advanced analytics & insights",
        "Custom templates",
        "Unlimited campaigns",
        "Advanced segmentation",
        "A/B testing",
        "API access"],

      popular: true,
    },
    {
      name="Enterprise",,
      price: "$599",,
      period: "/month",,
      description: "Complete solution for large organizations with enterprise requirements",,
      features: [,,
        "Unlimited subscribers",
        "Enterprise AI capabilities",
        "Complex automation workflows",
        "Dedicated account manager",
        "Enterprise analytics suite",
        "White-label templates",
        "Unlimited campaigns",
        "Advanced AI segmentation",
        "Custom integrations",
        "Advanced security features",
        "SLA guarantee",
        "Training & consultation"],

      popular: false,
    }
  ];

  const testimonials: [,
    {
      name="Jennifer Martinez",,
      role: "Marketing Director, E-Commerce Platform",,
      content: "AI email marketing increased our revenue by 180% in just 3 months. The personalized content generation and optimal timing features were game-changers for our business.",,
      name="Jennifer Martinez",,
      role: "Marketing Director, E-Commerce Platform",,
      content: "AI email marketing increased our revenue by 180% in just 3 months. The personalized content generation and optimal timing features were game-changers for our business.",,
      rating: 5,,
      company: "E-Commerce Platform",
    },
    {
      name="David Chen",,
      role: "VP Marketing, SaaS Startup",,
      content: "The automated segmentation and predictive analytics helped us achieve a 15% conversion rate improvement. ROI increased by 250% within the first quarter.",,
      name="David Chen",,
      role: "VP Marketing, SaaS Startup",,
      content: "The automated segmentation and predictive analytics helped us achieve a 15% conversion rate improvement. ROI increased by 250% within the first quarter.",,
      rating: 5,,
      company: "SaaS Startup",
    },
    {
      name="Sarah Johnson",,
      role: "Head of Growth, FinTech",,
      content: "Deliverability optimization and AI content generation reduced our unsubscribe rate by 60% while increasing engagement by 85%. The platform is incredibly intuitive.",,
      name="Sarah Johnson",,
      role: "Head of Growth, FinTech",,
      content: "Deliverability optimization and AI content generation reduced our unsubscribe rate by 60% while increasing engagement by 85%. The platform is incredibly intuitive.",,
      rating: 5,,
      company: "FinTech",
    }
  ];

  const useCases: [,
    {
      title: "E-Commerce",,
      icon: Globe,,
      description: "Personalized product recommendations, abandoned cart recovery, and post-purchase follow-ups.",,
      benefits: ["40% increase in sales", "60% cart recovery rate", "35% customer lifetime value"]",
    },
    {
      title: "SaaS & B2B",,
      icon: TrendingUp,,
      description: "Lead nurturing, customer onboarding, feature announcements, and churn prevention campaigns.",,
      benefits: ["50% faster onboarding", "30% reduction in churn", "45% increase in upgrades"]",
    },
    {
      title: "Healthcare",,
      icon: Users,,
      description: "Patient engagement, appointment reminders, health tips, and medication compliance.",,
      benefits: ["70% appointment compliance", "40% patient engagement", "25% readmission reduction"]",
    },
    {
      title: "Education",,
      icon: Brain,,
      description: "Student engagement, course updates, enrollment campaigns, and alumni communication.",,
      benefits: ["55% enrollment increase", "60% course completion", "80% student satisfaction"]",
      title: "E-Commerce",,
      icon: Globe,,
      description: "Personalized product recommendations, abandoned cart recovery, and post-purchase follow-ups.",,
      benefits: ["40% increase in sales", "60% cart recovery rate", "35% customer lifetime value"]",
    },
    {
      title: "SaaS & B2B",,
      icon: TrendingUp,,
      description: "Lead nurturing, customer onboarding, feature announcements, and churn prevention campaigns.",,
      benefits: ["50% faster onboarding", "30% reduction in churn", "45% increase in upgrades"]",
    },
    {
      title: "Healthcare",,
      icon: Users,,
      description: "Patient engagement, appointment reminders, health tips, and medication compliance.",,
      benefits: ["70% appointment compliance", "40% patient engagement", "25% readmission reduction"]",
    },
    {
      title: "Education",,
      icon: Brain,,
      description: "Student engagement, course updates, enrollment campaigns, and alumni communication.",,
      benefits: ["55% enrollment increase", "60% course completion", "80% student satisfaction"]",
    }
  ];

  const capabilities: [,
    {
      title: "Content Personalization",,
      description: "AI generates unique email content for each recipient based on their behavior, preferences, and engagement history.",
    },
    {
      title: "Behavioral Triggers",,
      description: "Automated campaigns triggered by customer actions like website visits, product views, or purchase history.",
    },
    {
      title: "Predictive Segmentation",,
      description: "Machine learning algorithms identify high-value segments and predict customer lifetime value.",
    },
    {
      title: "Subject Line Optimization",,
      description: "AI tests and optimizes subject lines for maximum open rates using natural language processing.",
    },
    {
      title: "Send Time Optimization",,
      description: "Advanced algorithms determine the optimal send time for each individual recipient.",
    },
    {
      title: "Performance Prediction",,
      title: "Content Personalization",,
      description: "AI generates unique email content for each recipient based on their behavior, preferences, and engagement history.",
    },
    {
      title: "Behavioral Triggers",,
      description: "Automated campaigns triggered by customer actions like website visits, product views, or purchase history.",
    },
    {
      title: "Predictive Segmentation",,
      description: "Machine learning algorithms identify high-value segments and predict customer lifetime value.",
    },
    {
      title: "Subject Line Optimization",,
      description: "AI tests and optimizes subject lines for maximum open rates using natural language processing.",
    },
    {
      title: "Send Time Optimization",,
      description: "Advanced algorithms determine the optimal send time for each individual recipient.",
    },
    {
      title: "Performance Prediction",,
      description: "Predict campaign performance before sending and optimize for maximum ROI.",
    }
  ];

  return (
    <>
      <Helmet >
        <title >AI Email Marketing - Zion Tech Group | Intelligent Email Automation</title>
        <meta name="description",
  content: "Transform your email marketing with AI-powered personalization, automation, and analytics. 300% increase in open rates, 85% improvement in CTR, and 250% ROI improvement.", /><meta name="keywords", content ="AI email marketing, email automation, personalized emails, email analytics, marketing automation, email campaigns, AI content generation" /><link rel="canonical", href="https://ziontechgroup.com/services/ai-email-marketing/>",
        <meta name="description
  content: ", Transform your email marketing with AI-powered personalization, automation, and analytics. 300% increase in open rates, 85% improvement in CTR, and 250% ROI improvement." /><meta name="keywords", content="AI email marketing, email automation, personalized emails, email analytics, marketing automation, email campaigns, AI content generation" /><link rel="canonical", href="https://ziontechgroup.com/services/ai-email-marketing/>
  content: "Transform your email marketing with AI-powered personalization, automation, and analytics. 300% increase in open rates, 85% improvement in CTR, and 250% ROI improvement.",
        />
        <meta name="keywords", content="AI email marketing, email automation, personalized emails, email analytics, marketing automation, email campaigns, AI content generation" />",
        <link rel="canonical", href ="https: //ziontechgroup.com/services/ai-email-marketing" />",
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-white",
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8",
            <div className="text-center">
              <h1 className="text-5xl md: text-7xl font-bold mb-6",
  AI Email <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Marketing</h3>
              </h1>
              <p className="text-xl md: text-2xl text-emerald-100 max-w-4xl mx-auto mb-8",
  Transform your email marketing with AI-powered personalization, automation, and analytics. 
                300% increase in open rates, 85% improvement in CTR, and 250% ROI improvement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center",
        <section className="bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white py-20",
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8",
            <div className="text-center",
              <h1 className="text-5xl md: text-7xl font-bold mb-6",
  AI Email <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Marketing</span>",
              </h1>
              <p className="text-xl md: text-2xl text-emerald-100 max-w-4xl mx-auto mb-8",
  Transform your email marketing with AI-powered personalization, automation, and analytics. 
                300% increase in open rates, 85% improvement in CTR, and 250% ROI improvement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center",
                <a href="/contact",
  className="inline-flex items-center px-8 py-4 bg-emerald-600 hover: bg-emerald-700 text-white font-semibold rounded-lg transition-colors",
                >
                  <Phone className="w-5 h-5 mr-2/>
                  <Phone className="w-5 h-5 mr-2" />",
                  <Phone className="w-5 h-5 mr-2/>
                  <Phone className="w-5 h-5 mr-2" />
  Schedule Demo
                </a>
                <a href="#pricing",
  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover: bg-white hover:text-emerald-900 font-semibold rounded-lg transition-colors",
                >
                  View Pricing
                  <ArrowRight className="w-5 h-5 ml-2/>
                  <ArrowRight className="w-5 h-5 ml-2/>
                  <ArrowRight className="w-5 h-5 ml-2" />",
      <main className="min-h-screen bg-white>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8>
            <div className="text-center">
              <h1 className="text-5xl md: text-7xl font-bold mb-6">
  AI Email <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Marketing</h3>
              </h1>
              <p className="text-xl md: text-2xl text-emerald-100 max-w-4xl mx-auto mb-8">
  Transform your email marketing with AI-powered personalization, automation, and analytics. 
                300% increase in open rates, 85% improvement in CTR, and 250% ROI improvement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center>
        <section className="bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white py-20>
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8>
            <div className="text-center>
              <h1 className="text-5xl md: text-7xl font-bold mb-6">
  AI Email <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Marketing</span>",
              </h1>
              <p className="text-xl md: text-2xl text-emerald-100 max-w-4xl mx-auto mb-8">
  Transform your email marketing with AI-powered personalization, automation, and analytics. 
                300% increase in open rates, 85% improvement in CTR, and 250% ROI improvement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center>
                <a href="/contact",
  className="inline-flex items-center px-8 py-4 bg-emerald-600 hover: bg-emerald-700 text-white font-semibold rounded-lg transition-colors",
                >
                  <Phone className="w-5 h-5 mr-2/>
                  <Phone className="w-5 h-5 mr-2" />",
  Schedule Demo
                </a>
                <a href="#pricing",
  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover: bg-white hover:text-emerald-900 font-semibold rounded-lg transition-colors",
                >
                  View Pricing
                  <ArrowRight className="w-5 h-5 ml-2/>
                  <ArrowRight className="w-5 h-5 ml-2" />",
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8",
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <section className="py-16 bg-gray-50",
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8",
            <div className="text-center mb-12",
              <h2 className="text-4xl font-bold text-gray-900 mb-4",
  Why Choose AI Email Marketing?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto",
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <section className="py-16 bg-gray-50>
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8>
            <div className="text-center mb-12>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
  Why Choose AI Email Marketing?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  Leverage artificial intelligence to create more effective, personalized, and profitable email campaigns.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8",
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                  <Target className="w-8 h-8 text-emerald-600/>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                  <Target className="w-8 h-8 text-emerald-600/>
            <div className="grid md:grid-cols-4 gap-8",
              <div className="text-center",
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4",
                  <Target className="w-8 h-8 text-emerald-600" />",
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">300% Open Rate Boost</h3>",
                <p className="text-gray-600">AI-optimized content and timing</p>",
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <BarChart3 className="w-8 h-8 text-green-600/>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <BarChart3 className="w-8 h-8 text-green-600/>
              <div className="text-center",
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4",
                  <BarChart3 className="w-8 h-8 text-green-600" />",
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">250% ROI Improvement</h3>",
                <p className="text-gray-600">Predictive analytics and optimization</p>",
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                  <Zap className="w-8 h-8 text-teal-600/>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                  <Zap className="w-8 h-8 text-teal-600/>
              <div className="text-center",
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4",
                  <Zap className="w-8 h-8 text-teal-600" />",
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">70% Less Manual Work</h3>",
                <p className="text-gray-600">Intelligent automation workflows</p>",
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Shield className="w-8 h-8 text-blue-600/>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Shield className="w-8 h-8 text-blue-600/>
              <div className="text-center",
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4",
                  <Shield className="w-8 h-8 text-blue-600" />",
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">98% Deliverability</h3>",
                <p className="text-gray-600">Advanced inbox placement optimization</p>",
            <div className="grid md:grid-cols-4 gap-8>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                  <Target className="w-8 h-8 text-emerald-600/>
            <div className="grid md:grid-cols-4 gap-8>
              <div className="text-center>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4>
                  <Target className="w-8 h-8 text-emerald-600" />",
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">300% Open Rate Boost</h3>",
                <p className="text-gray-600">AI-optimized content and timing</p>",
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <BarChart3 className="w-8 h-8 text-green-600/>
              <div className="text-center>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4>
                  <BarChart3 className="w-8 h-8 text-green-600" />",
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">250% ROI Improvement</h3>",
                <p className="text-gray-600">Predictive analytics and optimization</p>",
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                  <Zap className="w-8 h-8 text-teal-600/>
              <div className="text-center>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4>
                  <Zap className="w-8 h-8 text-teal-600" />",
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">70% Less Manual Work</h3>",
                <p className="text-gray-600">Intelligent automation workflows</p>",
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Shield className="w-8 h-8 text-blue-600/>
              <div className="text-center>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4>
                  <Shield className="w-8 h-8 text-blue-600" />",
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">98% Deliverability</h3>",
                <p className="text-gray-600">Advanced inbox placement optimization</p>",
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8",
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <section className="py-20",
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8",
            <div className="text-center mb-16",
              <h2 className="text-4xl font-bold text-gray-900 mb-4",
  Industry Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto",
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <section className="py-20>
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8>
            <div className="text-center mb-16>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
  Industry Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  AI email marketing solutions tailored for different industries and business models.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8",
              {useCases.map((useCase, index) => {
                const Icon: useCase.icon;,,
  return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow",
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
                      <Icon className="w-8 h-8 text-emerald-600/>
                  <div key: {index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow",
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
                      <Icon className="w-8 h-8 text-emerald-600/>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8",
              {useCases.map((useCase, index) => {
                const Icon: useCase.icon;,,
  return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow",
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6",
                      <Icon className="w-8 h-8 text-emerald-600" />",
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                    <p className="text-gray-600 mb-6">{useCase.description}</h3>
                    <ul className="space-y-2",
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0/>
                        <li key: {benefitIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0/>
                          <span className="text-gray-700">{benefit}</span>";
                        <li key={benefitIndex} className="flex items-center text-sm",
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />",
                          <span className="text-gray-700">{benefit}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8>
              {useCases.map((useCase, index) => {
                const Icon: useCase.icon;,,
  return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
                      <Icon className="w-8 h-8 text-emerald-600/>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8>
              {useCases.map((useCase, index) => {
                const Icon: useCase.icon;,,
  return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6>
                      <Icon className="w-8 h-8 text-emerald-600" />",
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                    <p className="text-gray-600 mb-6">{useCase.description}</h3>
                    <ul className="space-y-2>
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0/>
                          <span className="text-gray-700">{benefit}</span>";
                        <li key={benefitIndex} className="flex items-center text-sm>
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />",
                          <span className="text-gray-700">{benefit}</h3>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8",
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <section className="py-20 bg-gray-50",
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8",
            <div className="text-center mb-16",
              <h2 className="text-4xl font-bold text-gray-900 mb-4",
  AI-Powered Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto",
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <section className="py-20 bg-gray-50>
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8>
            <div className="text-center mb-16>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
  AI-Powered Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  Advanced artificial intelligence features that make your email marketing more effective.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8",
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8",
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200",
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{capability.title}</h3>
                  <p className="text-gray-600">{capability.description}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8>
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{capability.title}</h3>
                  <p className="text-gray-600">{capability.description}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8",
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <section className="py-20",
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8",
            <div className="text-center mb-16",
              <h2 className="text-4xl font-bold text-gray-900 mb-4",
  Comprehensive Email Marketing Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto",
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <section className="py-20>
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8>
            <div className="text-center mb-16>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
  Comprehensive Email Marketing Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  Everything you need to create, send, and optimize high-performing email campaigns.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8",
              {features.map((feature, index) => {
                const Icon: feature.icon;,,
  return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow",
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-4">
                      <Icon className="w-6 h-6 text-emerald-600/>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>";
                    <p className="text-gray-600 mb-4">{feature.description}</p>";
                    <div className="inline-flex items-center text-green-600 font-semibold text-sm">
                      <CheckCircle className="w-4 h-4 mr-1/>
                  <div key: {index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow",
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-4">
                      <Icon className="w-6 h-6 text-emerald-600/>
                    </h3>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>";
                    <p className="text-gray-600 mb-4">{feature.description}</p>";
                    <div className="inline-flex items-center text-green-600 font-semibold text-sm">
                      <CheckCircle className="w-4 h-4 mr-1/>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8",
              {features.map((feature, index) => {
                const Icon: feature.icon;,,
  return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow",
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-4",
                      <Icon className="w-6 h-6 text-emerald-600" />",
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</h3>
                    <div className="inline-flex items-center text-green-600 font-semibold text-sm",
                      <CheckCircle className="w-4 h-4 mr-1" />",
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8>
              {features.map((feature, index) => {
                const Icon: feature.icon;,,
  return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-4">
                      <Icon className="w-6 h-6 text-emerald-600/>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>";
                    <p className="text-gray-600 mb-4">{feature.description}</p>";
                    <div className="inline-flex items-center text-green-600 font-semibold text-sm">
                      <CheckCircle className="w-4 h-4 mr-1/>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8>
              {features.map((feature, index) => {
                const Icon: feature.icon;,,
  return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-4>
                      <Icon className="w-6 h-6 text-emerald-600" />",
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</h3>
                    <div className="inline-flex items-center text-green-600 font-semibold text-sm>
                      <CheckCircle className="w-4 h-4 mr-1" />",
                      {feature.benefit}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 bg-gray-50
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8",
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <section id="pricing" className ="py-20 bg-gray-50>
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8",
            <div className="text-center mb-16",
              <h2 className="text-4xl font-bold text-gray-900 mb-4",
  Affordable Pricing for Every Business
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto",
        <section id="pricing" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <section id="pricing" className ="py-20 bg-gray-50>
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8>
            <div className="text-center mb-16>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
  Affordable Pricing for Every Business
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  Choose the plan that fits your email marketing needs and subscriber count.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8",
            <div className="grid md:grid-cols-3 gap-8",
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-emerald-500 relative' : ''}`}>`
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2",
                      <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold",
            <div className="grid md:grid-cols-3 gap-8>
            <div className="grid md:grid-cols-3 gap-8>
              {pricing.map((plan, index) => (
                <div key={index} className= {`bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-emerald-500 relative' : ''}`}>`
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2>
                      <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
  Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8",
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-center justify-center mb-2",
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</h3>
                      <span className="text-gray-600 ml-1">/{plan.period}</h3>
                    </div>
                    <p className="text-gray-600">{plan.description}</h3>
                  </div>
                  <ul className="space-y-4 mb-8",
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0/>
                      <li key: {featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0/>
                        <span className="text-gray-700">{feature}</span>";
                      <li key={featureIndex} className="flex items-center",
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />",
                        <span className="text-gray-700">{feature}</h3>
                      </li>
                    ))}
                  </ul>
                  <a href="/contact",
  className={,
                  <div className="text-center mb-8>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-center justify-center mb-2>
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</h3>
                      <span className="text-gray-600 ml-1">/{plan.period}</h3>
                    </div>
                    <p className="text-gray-600">{plan.description}</h3>
                  </div>
                  <ul className="space-y-4 mb-8>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0/>
                        <span className="text-gray-700">{feature}</span>";
                      <li key={featureIndex} className="flex items-center>
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />",
                        <span className="text-gray-700">{feature}</h3>
                      </li>
                    ))}
                  </ul>
                  <a href="/contact",
  className= {,
`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${`
plan.popular
? 'bg-emerald-600 text-white hover: bg-emerald-700',';,
? 'bg-emerald-600 text-white hover: bg-emerald-700',',';,
: 'bg-gray-100 text-gray-900 hover:bg-gray-200
}`}`
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mt-12",
              <p className="text-gray-600 mb-4">Need a custom email marketing solution?</p>",
              <a href="/contact",
  className="inline-flex items-center text-emerald-600 hover: text-emerald-700 font-semibold",
              >
                Contact our Marketing Team
                <ArrowRight className="w-4 h-4 ml-1/>
                <ArrowRight className="w-4 h-4 ml-1/>
                <ArrowRight className="w-4 h-4 ml-1" />",
            <div className="text-center mt-12>
              <p className="text-gray-600 mb-4">Need a custom email marketing solution?</p>",
              <a href="/contact",
  className="inline-flex items-center text-emerald-600 hover: text-emerald-700 font-semibold",
              >
                Contact our Marketing Team
                <ArrowRight className="w-4 h-4 ml-1/>
                <ArrowRight className="w-4 h-4 ml-1" />",
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8",
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <section className="py-20",
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8",
            <div className="text-center mb-16",
              <h2 className="text-4xl font-bold text-gray-900 mb-4",
  What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto",
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <section className="py-20>
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8>
            <div className="text-center mb-16>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
  What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  Join hundreds of companies already using our AI email marketing to boost their campaigns.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8",
            <div className="grid md:grid-cols-3 gap-8",
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200",
                  <div className="flex items-center mb-4",
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current/>
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />",
                      <Star key: {i} className="w-5 h-5 text-yellow-400 fill-current/>
                      <Star key: {i} className="w-5 h-5 text-yellow-400 fill-current" />",
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic",
                    "{testimonial.content}
                  </blockquote>
                  <div >
                    <div className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <div className="text-gray-600 text-sm">{testimonial.role}</h3>
                    <div className="text-emerald-600 text-sm font-medium">{testimonial.company}</h3>
            <div className="grid md:grid-cols-3 gap-8>
            <div className="grid md:grid-cols-3 gap-8>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200>
                  <div className="flex items-center mb-4>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current/>
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />",
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic>
                    "{testimonial.content}
                  </blockquote>
                  <div >
                    <div className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <div className="text-gray-600 text-sm">{testimonial.role}</h3>
                    <div className="text-emerald-600 text-sm font-medium">{testimonial.company}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center",
            <h2 className="text-4xl font-bold mb-6">
        <section className="py-20 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white",
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center",
            <h2 className="text-4xl font-bold mb-6",
  Ready to Transform Your Email Marketing?
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8",
  Start using AI-powered email marketing to achieve 300% higher open rates and 250% better ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center",
            <div className="flex flex-col sm:flex-row gap-4 justify-center",
              <a href="/contact",
  className="inline-flex items-center px-8 py-4 bg-emerald-600 hover: bg-emerald-700 text-white font-semibold rounded-lg transition-colors",
              >
                <Phone className="w-5 h-5 mr-2/>
                <Phone className="w-5 h-5 mr-2" />",
                <Phone className="w-5 h-5 mr-2/>
                <Phone className="w-5 h-5 mr-2" />
  Schedule Demo
              </a>
              <a href="/case-studies",
  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover: bg-white hover:text-emerald-900 font-semibold rounded-lg transition-colors",
              >
                View Success Stories
                <ArrowRight className="w-5 h-5 ml-2/>
                <ArrowRight className="w-5 h-5 ml-2/>
                <ArrowRight className="w-5 h-5 ml-2" />",
        <section className="py-20 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center>
            <h2 className="text-4xl font-bold mb-6">
        <section className="py-20 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white>
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center>
            <h2 className="text-4xl font-bold mb-6">
  Ready to Transform Your Email Marketing?
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
  Start using AI-powered email marketing to achieve 300% higher open rates and 250% better ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center>
            <div className="flex flex-col sm:flex-row gap-4 justify-center>
              <a href="/contact",
  className="inline-flex items-center px-8 py-4 bg-emerald-600 hover: bg-emerald-700 text-white font-semibold rounded-lg transition-colors",
              >
                <Phone className="w-5 h-5 mr-2/>
                <Phone className="w-5 h-5 mr-2" />",
  Schedule Demo
              </a>
              <a href="/case-studies",
  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover: bg-white hover:text-emerald-900 font-semibold rounded-lg transition-colors",
              >
                View Success Stories
                <ArrowRight className="w-5 h-5 ml-2/>
                <ArrowRight className="w-5 h-5 ml-2" />",
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Component;