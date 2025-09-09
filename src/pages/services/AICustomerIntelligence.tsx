import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Users, 
  Brain, 
  TrendingUp, 
  Shield, 
  Globe, 
  Building, 
  Rocket, 
  Cpu, 
  BarChart3,
  Eye,
  Target,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Heart,
  ShoppingCart,
  Star,
  Activity,
  Zap,
  Lock
} from 'lucide-react';

export default function AICustomerIntelligence() {
  const features = [
    {
      title: "Real-Time Customer Behavior Analysis",
      description: "AI-powered tracking and analysis of customer interactions across all touchpoints in real-time.",
      icon: Eye,
      benefits: ["Behavioral patterns", "Intent prediction", "Engagement scoring", "Churn prediction"]
    },
    {
      title: "Predictive Customer Segmentation",
      description: "Advanced machine learning algorithms that automatically segment customers based on behavior, preferences, and potential value.",
      icon: Target,
      benefits: ["Dynamic segmentation", "Lifetime value prediction", "Personalization engine", "Automated targeting"]
    },
    {
      title: "Sentiment Analysis & Emotion Detection",
      description: "Natural language processing to understand customer sentiment, emotions, and satisfaction levels across all communication channels.",
      icon: Heart,
      benefits: ["Real-time sentiment", "Emotion tracking", "Satisfaction scoring", "Issue detection"]
    },
    {
      title: "Intelligent Recommendation Engine",
      description: "AI-powered product and service recommendations that learn from customer behavior and preferences to maximize conversion rates.",
      icon: Brain,
      benefits: ["Personalized recommendations", "Cross-selling opportunities", "Upselling optimization", "A/B testing"]
    },
    {
      title: "Customer Journey Mapping",
      description: "Comprehensive mapping of customer touchpoints and interactions to identify optimization opportunities and improve customer experience.",
      icon: Globe,
      benefits: ["Journey visualization", "Bottleneck identification", "Optimization suggestions", "ROI tracking"]
    },
    {
      title: "Advanced Analytics & Reporting",
      description: "Comprehensive dashboards and reports providing actionable insights into customer behavior, trends, and business performance.",
      icon: BarChart3,
      benefits: ["Custom dashboards", "Real-time metrics", "Predictive analytics", "Export capabilities"]
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      applications: ["Personalized shopping", "Cart abandonment recovery", "Product recommendations", "Customer retention"],
      roi: "35-55% increase in conversion",
      icon: ShoppingCart
    },
    {
      industry: "SaaS",
      applications: ["User onboarding", "Feature adoption", "Subscription optimization", "Customer success"],
      roi: "40-60% improvement in retention",
      icon: Building
    },
    {
      industry: "Healthcare",
      applications: ["Patient engagement", "Treatment adherence", "Appointment scheduling", "Health monitoring"],
      roi: "25-45% better outcomes",
      icon: Building
    },
    {
      industry: "Financial Services",
      applications: ["Risk assessment", "Product recommendations", "Fraud detection", "Customer service"],
      roi: "30-50% increase in satisfaction",
      icon: Building
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$199/month",
      description: "Perfect for small businesses starting with customer intelligence",
      features: [
        "Up to 10,000 customer profiles",
        "Basic analytics dashboard",
        "Email support",
        "Standard integrations",
        "Monthly reports"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      plan: "Professional",
      price: "$599/month",
      description: "Ideal for growing businesses with advanced customer intelligence needs",
      features: [
        "Up to 100,000 customer profiles",
        "Advanced AI algorithms",
        "Real-time analytics",
        "Priority support",
        "Custom integrations",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      plan: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations with complex requirements",
      features: [
        "Unlimited customer profiles",
        "Custom AI models",
        "Dedicated support",
        "SLA guarantees",
        "On-premise options",
        "Custom development"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Increased Customer Lifetime Value",
      description: "Better understanding leads to higher retention and increased spending",
      icon: TrendingUp,
      metric: "25-40% improvement"
    },
    {
      title: "Higher Conversion Rates",
      description: "Personalized experiences drive better engagement and conversions",
      icon: Target,
      metric: "30-50% increase"
    },
    {
      title: "Reduced Customer Churn",
      description: "Proactive identification and resolution of customer issues",
      icon: Users,
      metric: "20-35% reduction"
    },
    {
      title: "Improved Customer Satisfaction",
      description: "Better understanding leads to more relevant and helpful interactions",
      icon: Star,
      metric: "40-60% improvement"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900">
      <SEO 
        title="AI Customer Intelligence Platform - Zion Tech Group" 
        description="Transform customer relationships with AI-powered intelligence. Understand, predict, and optimize customer behavior for unprecedented business growth."
        keywords="AI customer intelligence, customer analytics, customer behavior analysis, predictive analytics, customer segmentation"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Intelligence
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              AI Customer
            </span>
            <br />
            <span className="text-white">Intelligence</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Unlock the power of customer data with AI-driven insights that transform how you understand, engage, and retain your customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Free Trial
            </button>
              <button className="px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                Watch Demo
              </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your Customer Relationships
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See measurable improvements in customer satisfaction, retention, and lifetime value with AI-powered customer intelligence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="text-purple-400 font-bold text-lg">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features That Drive Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI customer intelligence platform combines cutting-edge technology with intuitive design to deliver exceptional insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-slate-700/50 to-slate-600/30 border border-slate-500/30 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Success Across Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI customer intelligence is transforming businesses across different sectors with measurable ROI improvements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.industry}</h3>
                <ul className="space-y-2 mb-4">
                  {useCase.applications.map((application, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <ArrowRight className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
                      {application}
                    </li>
                  ))}
                </ul>
                <div className="text-purple-400 font-semibold text-sm">{useCase.roi}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Intelligence Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business needs and customer intelligence requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div 
                key={index}
                className={`relative p-8 rounded-2xl ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-2 border-purple-500/50' 
                    : 'bg-gradient-to-br from-slate-700/50 to-slate-600/30 border border-slate-500/30'
                } transition-all duration-300 hover:transform hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                    : 'border border-purple-500/30 text-purple-400 hover:bg-purple-500/10'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Understand Your Customers Better?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that have transformed their customer relationships with AI-powered intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}