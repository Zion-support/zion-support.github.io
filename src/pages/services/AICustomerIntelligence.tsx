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
  Clock,
  CheckCircle,
  ArrowRight,
  Target,
  MessageSquare,
  PieChart,
  Zap
} from 'lucide-react';

export default function AICustomerIntelligence() {
  const features = [
    {
      title: "Predictive Customer Behavior",
      description: "AI algorithms that analyze customer patterns to predict future actions and preferences",
      icon: Brain,
      benefits: ["Behavior prediction", "Churn prevention", "Lifetime value forecasting", "Personalization insights"]
    },
    {
      title: "Real-time Sentiment Analysis",
      description: "Monitor customer sentiment across all channels in real-time with advanced NLP",
      icon: MessageSquare,
      benefits: ["Live sentiment tracking", "Multi-language support", "Emotion detection", "Trend analysis"]
    },
    {
      title: "Intelligent Segmentation",
      description: "Dynamic customer segmentation that automatically adapts to changing behaviors",
      icon: Target,
      benefits: ["Auto-segmentation", "Behavioral clustering", "Dynamic personas", "Predictive grouping"]
    },
    {
      title: "Customer Journey Mapping",
      description: "Visualize and optimize customer touchpoints with AI-powered journey analytics",
      icon: PieChart,
      benefits: ["Journey visualization", "Bottleneck identification", "Optimization suggestions", "ROI tracking"]
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$199/month",
      description: "Perfect for small businesses starting with customer intelligence",
      features: [
        "Up to 10,000 customers",
        "Basic AI insights",
        "Email support",
        "Standard integrations",
        "Basic reporting"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      plan: "Professional",
      price: "$499/month",
      description: "Ideal for growing businesses with advanced customer intelligence needs",
      features: [
        "Up to 100,000 customers",
        "Advanced AI analytics",
        "Priority support",
        "Custom integrations",
        "Advanced reporting",
        "Predictive modeling"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      plan: "Enterprise",
      price: "$1,299/month",
      description: "For large organizations requiring enterprise-grade customer intelligence",
      features: [
        "Unlimited customers",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label options",
        "Advanced security",
        "Custom development"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      description: "Personalize shopping experiences and predict customer preferences",
      icon: Building,
      benefits: ["Increased conversion", "Better recommendations", "Reduced cart abandonment", "Higher AOV"]
    },
    {
      industry: "SaaS",
      description: "Optimize user onboarding and reduce churn with predictive analytics",
      icon: Building,
      benefits: ["Lower churn rates", "Better onboarding", "Feature adoption", "Customer success"]
    },
    {
      industry: "Healthcare",
      description: "Improve patient engagement and predict health outcomes",
      icon: Building,
      benefits: ["Better engagement", "Outcome prediction", "Resource optimization", "Patient satisfaction"]
    },
    {
      industry: "Finance",
      description: "Enhance customer experience and predict financial needs",
      icon: Building,
      benefits: ["Better service", "Need prediction", "Risk assessment", "Customer retention"]
    }
  ];

  const benefits = [
    {
      title: "Increased Revenue",
      description: "Drive 15-30% revenue growth through personalized customer experiences",
      icon: TrendingUp
    },
    {
      title: "Reduced Churn",
      description: "Decrease customer churn by 20-40% with predictive insights",
      icon: Users
    },
    {
      title: "Better ROI",
      description: "Improve marketing ROI by 25-50% with targeted campaigns",
      icon: BarChart3
    },
    {
      title: "Faster Growth",
      description: "Accelerate business growth with data-driven customer strategies",
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <SEO 
        title="AI Customer Intelligence - Zion Tech Group" 
        description="Transform customer relationships with AI-powered intelligence. Predict behavior, personalize experiences, and drive growth."
        keywords="AI customer intelligence, customer analytics, predictive analytics, customer behavior, AI marketing, customer insights"
        canonical="https://ziontechgroup.com/services/ai-customer-intelligence"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-600/20 to-blue-600/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-8">
            <Users className="w-20 h-20 mx-auto mb-6 text-purple-400" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Customer Intelligence
              <span className="block text-3xl md:text-4xl text-purple-400 mt-2">
                Know Your Customers Like Never Before
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Leverage the power of artificial intelligence to understand, predict, and optimize customer 
              experiences across all touchpoints for maximum engagement and growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI customer intelligence platform combines cutting-edge machine learning with intuitive 
              analytics to deliver actionable insights that drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Business Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI customer intelligence solutions deliver measurable results that directly impact your bottom line.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your business needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
                  : 'border-gray-600 hover:border-purple-500/40'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">{plan.price}</div>
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
                
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white'
                    : 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI customer intelligence adapts to your industry's unique requirements and customer dynamics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 border border-gray-600 hover:border-purple-500/40">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {useCase.industry}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {useCase.description}
                </p>
                <ul className="space-y-1 text-left">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-400">
                      <CheckCircle className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Customer Intelligence?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join thousands of businesses that have already revolutionized their customer relationships with AI-powered intelligence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}