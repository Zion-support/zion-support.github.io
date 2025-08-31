import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  MessageCircle, 
  TrendingUp, 
  Shield, 
  Zap, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  Download, 
  Mail, 
  Target, 
  Activity, 
  Database, 
  Rocket,
  Brain,
  Eye,
  Clock,
  DollarSign,
  Star,
  Globe,
  Lock,
  Cpu,
  Workflow,
  Bot,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AICustomerSuccessPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Advanced machine learning algorithms analyze customer behavior patterns to predict churn risk and identify upsell opportunities.",
      benefits: ["Predictive churn analysis", "Behavioral segmentation", "Personalized recommendations", "Real-time insights"]
    },
    {
      icon: MessageCircle,
      title: "Intelligent Communication",
      description: "Automated, context-aware customer communication that adapts to individual preferences and engagement patterns.",
      benefits: ["Smart email campaigns", "Personalized messaging", "Multi-channel orchestration", "A/B testing automation"]
    },
    {
      icon: TrendingUp,
      title: "Proactive Success Management",
      description: "Identify and address customer issues before they become problems with proactive monitoring and intervention.",
      benefits: ["Early warning systems", "Automated interventions", "Success milestone tracking", "Performance optimization"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive metrics and visualizations for customer health, engagement, and business impact tracking.",
      benefits: ["Real-time dashboards", "Custom reporting", "ROI measurement", "Trend analysis"]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 Type II compliance, GDPR readiness, and advanced data protection.",
      benefits: ["End-to-end encryption", "Role-based access control", "Audit logging", "Data residency options"]
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      description: "Connect with your existing CRM, marketing automation, and business intelligence tools seamlessly.",
      benefits: ["API-first architecture", "Pre-built connectors", "Custom integrations", "Webhook support"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for growing businesses",
      features: [
        "Up to 1,000 customers",
        "Basic AI insights",
        "Email automation",
        "Standard analytics",
        "Email support",
        "Basic integrations"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for established companies",
      features: [
        "Up to 10,000 customers",
        "Advanced AI algorithms",
        "Multi-channel automation",
        "Advanced analytics",
        "Priority support",
        "Full integrations",
        "Custom reporting",
        "Success coaching"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Unlimited customers",
        "Custom AI models",
        "White-label solution",
        "Dedicated success manager",
        "24/7 phone support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "SaaS Companies",
      description: "Reduce churn by 40% and increase expansion revenue with intelligent customer success automation.",
      metrics: ["40% churn reduction", "25% increase in expansion revenue", "60% faster time to value"]
    },
    {
      title: "E-commerce Platforms",
      description: "Boost customer lifetime value and repeat purchase rates with personalized engagement strategies.",
      metrics: ["35% increase in LTV", "45% higher repeat purchase rate", "50% reduction in support tickets"]
    },
    {
      title: "Financial Services",
      description: "Enhance customer satisfaction and compliance with AI-powered relationship management.",
      metrics: ["30% improvement in NPS", "100% compliance adherence", "25% faster onboarding"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Success Platform - Zion Tech Group</title>
        <meta name="description" content="Transform customer success with AI-powered insights, automation, and predictive analytics. Reduce churn, increase revenue, and deliver exceptional customer experiences." />
        <meta name="keywords" content="AI customer success, customer success platform, churn prediction, customer analytics, customer engagement, SaaS customer success" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Platform
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Customer Success
                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"> Platform</span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Transform your customer success with AI-powered insights, predictive analytics, and intelligent automation. 
                Reduce churn by 40%, increase expansion revenue by 25%, and deliver exceptional customer experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-slate-400">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Free 14-day trial
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Cancel anytime
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI-Powered Features That Drive Results
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our platform combines cutting-edge AI technology with proven customer success methodologies 
                to deliver measurable business outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 mb-4">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
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
        <section className="py-20 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core AI features and 14-day free trial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular ? 'border-blue-500/50 ring-2 ring-blue-500/20' : 'border-white/10'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-slate-400 mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={plan.name === "Enterprise" ? "/contact" : "/contact"}
                    className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proven Results Across Industries
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                See how our AI Customer Success Platform delivers measurable business outcomes for companies like yours.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                  <p className="text-slate-400 mb-6">{useCase.description}</p>
                  
                  <div className="space-y-3">
                    {useCase.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm text-slate-300">
                        <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Success?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join hundreds of companies that have already reduced churn and increased revenue with our AI-powered platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
            
            <div className="mt-8 text-sm text-slate-400">
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 302 464 0950</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}