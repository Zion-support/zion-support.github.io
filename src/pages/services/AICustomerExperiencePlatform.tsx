import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  MessageCircle, 
  Heart, 
  Brain, 
  TrendingUp, 
  Shield, 
  Users, 
  BarChart3, 
  Clock,
  Target,
  Award,
  Globe,
  Cpu,
  Zap,
  Star,
  Smartphone,
  Headphones
} from 'lucide-react';

export default function AICustomerExperiencePlatform() {
  const features = [
    {
      title: "Intelligent Chatbots & Virtual Assistants",
      description: "AI-powered conversational agents that understand context and provide personalized support",
      icon: MessageCircle,
      benefits: ["24/7 availability", "Multi-language support", "Context awareness", "Seamless handoff"]
    },
    {
      title: "Predictive Customer Analytics",
      description: "Machine learning algorithms that predict customer behavior and churn risk",
      icon: Brain,
      benefits: ["Churn prediction", "Lifetime value analysis", "Behavioral insights", "Proactive engagement"]
    },
    {
      title: "Personalized Content & Recommendations",
      description: "AI-driven content personalization based on customer preferences and behavior",
      icon: Target,
      benefits: ["Dynamic content", "Product recommendations", "Personalized offers", "Behavioral targeting"]
    },
    {
      title: "Sentiment Analysis & Voice of Customer",
      description: "Real-time analysis of customer feedback across all channels",
      icon: Heart,
      benefits: ["Real-time monitoring", "Sentiment tracking", "Trend analysis", "Alert system"]
    },
    {
      title: "Omnichannel Experience Management",
      description: "Seamless customer experience across web, mobile, social, and traditional channels",
      icon: Smartphone,
      benefits: ["Channel integration", "Consistent messaging", "Cross-channel analytics", "Unified customer view"]
    },
    {
      title: "Automated Customer Journey Mapping",
      description: "AI-powered journey optimization and personalization at scale",
      icon: Zap,
      benefits: ["Journey automation", "Personalized touchpoints", "A/B testing", "Conversion optimization"]
    }
  ];

  const pricingTiers = [
    {
      name: "Growth",
      price: "$499",
      period: "per month",
      features: [
        "Up to 10,000 monthly interactions",
        "Basic AI chatbot",
        "Email support",
        "Standard analytics",
        "Basic integrations"
      ],
      bestFor: "Small businesses and startups"
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "per month",
      features: [
        "Up to 100,000 monthly interactions",
        "Advanced AI features",
        "Priority support",
        "Advanced analytics",
        "Premium integrations",
        "Custom branding"
      ],
      bestFor: "Growing businesses"
    },
    {
      name: "Enterprise",
      price: "$3,999",
      period: "per month",
      features: [
        "Unlimited interactions",
        "Full AI capabilities",
        "Custom integrations",
        "24/7 dedicated support",
        "Enterprise analytics",
        "White-label solution",
        "Custom development"
      ],
      bestFor: "Large organizations"
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      examples: [
        "Personalized product recommendations",
        "Intelligent search and filtering",
        "Automated customer support",
        "Abandoned cart recovery"
      ]
    },
    {
      industry: "Banking & Finance",
      examples: [
        "Personalized financial advice",
        "Fraud detection alerts",
        "Account management support",
        "Investment recommendations"
      ]
    },
    {
      industry: "Healthcare",
      examples: [
        "Appointment scheduling",
        "Health information support",
        "Medication reminders",
        "Telemedicine assistance"
      ]
    },
    {
      industry: "Travel & Hospitality",
      examples: [
        "Personalized travel planning",
        "Booking assistance",
        "Local recommendations",
        "Customer service automation"
      ]
    }
  ];

  const benefits = [
    {
      metric: "85%",
      description: "Improvement in customer satisfaction",
      icon: Star
    },
    {
      metric: "60%",
      description: "Reduction in support costs",
      icon: TrendingUp
    },
    {
      metric: "40%",
      description: "Increase in customer retention",
      icon: Heart
    },
    {
      metric: "3.2x",
      description: "Faster response times",
      icon: Clock
    }
  ];

  const customerSuccessStories = [
    {
      company: "TechCorp Solutions",
      industry: "SaaS",
      results: "45% increase in customer satisfaction scores",
      implementation: "3 months"
    },
    {
      company: "Global Retail Chain",
      industry: "Retail",
      results: "60% reduction in customer service costs",
      implementation: "6 months"
    },
    {
      company: "Healthcare Network",
      industry: "Healthcare",
      results: "80% improvement in appointment scheduling efficiency",
      implementation: "4 months"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="AI Customer Experience Platform - Zion Tech Group" 
        description="Transform customer interactions with AI-powered CX platform. Improve satisfaction by 85%, reduce support costs by 60%, and increase retention by 40%."
        keywords="AI customer experience, customer experience platform, AI chatbot, customer analytics, personalization, omnichannel"
        canonical="https://ziontechgroup.com/services/ai-customer-experience-platform"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Customer Experience Platform
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Deliver Exceptional Customer Experiences with AI
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transform customer interactions with our AI-powered platform. Improve satisfaction by 85%, 
            reduce support costs by 60%, and increase customer retention by 40% through intelligent automation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:kleber@ziontechgroup.com?subject=AI Customer Experience Platform Demo Request"
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Request Demo
            </a>
            <a 
              href="tel:+13024640950"
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Transform Customer Experience with AI
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our AI-powered platform delivers measurable improvements in customer satisfaction and business outcomes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-zion-cyan mb-2">
                  {benefit.metric}
                </div>
                <p className="text-zion-slate font-medium">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Powerful AI-Powered Features
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Everything you need to deliver exceptional customer experiences at scale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-zion-slate mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Choose the plan that fits your business needs and scale as you grow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 border-2 ${
                tier.name === 'Professional' 
                  ? 'border-zion-cyan scale-105' 
                  : 'border-zion-blue-light'
              }`}>
                {tier.name === 'Professional' && (
                  <div className="bg-zion-cyan text-white text-sm font-semibold px-3 py-1 rounded-full text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">
                  {tier.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-zion-cyan">{tier.price}</span>
                  <span className="text-zion-slate">{tier.period}</span>
                </div>
                <p className="text-zion-slate mb-6">{tier.bestFor}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=AI Customer Experience Platform - ${tier.name} Plan Inquiry`}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                    tier.name === 'Professional'
                      ? 'bg-zion-cyan hover:bg-zion-cyan-light text-white'
                      : 'bg-zion-blue-light hover:bg-zion-blue text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industry-Specific Use Cases
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              See how AI customer experience transforms different industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-4 text-center">
                  {useCase.industry}
                </h3>
                <ul className="space-y-2">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start text-sm text-zion-slate">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Customer Success Stories
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Real results from businesses that have transformed their customer experience with our platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customerSuccessStories.map((story, index) => (
              <div key={index} className="bg-zion-blue-light rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                  {story.company}
                </h3>
                <p className="text-sm text-zion-slate mb-2">{story.industry}</p>
                <p className="text-zion-cyan font-semibold mb-2">{story.results}</p>
                <p className="text-xs text-zion-slate">Implementation: {story.implementation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Information */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Market Analysis & ROI
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Understand the market opportunity and potential return on investment
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-zion-blue-dark mb-6">Market Overview</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-zion-blue-dark font-semibold">Market Size</span>
                    <span className="text-zion-cyan font-bold">$15.7B</span>
                  </div>
                  <p className="text-sm text-zion-slate">Global customer experience platform market (2024)</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-zion-blue-dark font-semibold">Growth Rate</span>
                    <span className="text-green-600 font-bold">18.9% CAGR</span>
                  </div>
                  <p className="text-sm text-zion-slate">Expected annual growth through 2030</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-zion-blue-dark font-semibold">Average ROI</span>
                    <span className="text-purple-600 font-bold">287%</span>
                  </div>
                  <p className="text-sm text-zion-slate">Within 12 months of implementation</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-zion-blue-dark mb-6">Competitive Advantages</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-zion-cyan rounded-full w-3 h-3 mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-zion-blue-dark">Advanced AI Capabilities</h4>
                    <p className="text-zion-slate">State-of-the-art machine learning for superior customer understanding</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-zion-purple rounded-full w-3 h-3 mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-zion-blue-dark">Omnichannel Integration</h4>
                    <p className="text-zion-slate">Seamless experience across all customer touchpoints</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-zion-green rounded-full w-3 h-3 mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-zion-blue-dark">Rapid Implementation</h4>
                    <p className="text-zion-slate">Deploy and see results in weeks, not months</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Join leading businesses that have revolutionized customer interactions with AI-powered experiences
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Customer Experience Platform Demo Request"
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Demo
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
          
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Phone</h4>
                <p className="text-white">+1 302 464 0950</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Email</h4>
                <p className="text-white">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Website</h4>
                <p className="text-white">https://ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Address</h4>
                <p className="text-white">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}