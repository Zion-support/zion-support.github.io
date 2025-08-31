import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  TrendingUp, 
  Target, 
  BarChart3, 
  Zap, 
  Shield, 
  Brain, 
  ArrowRight,
  CheckCircle,
  Star,
  MessageSquare,
  PieChart,
  Activity,
  Clock,
  DollarSign
} from 'lucide-react';

const AISalesCopilot: React.FC = () => {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Intelligent Lead Scoring",
      description: "AI-powered lead qualification with 95% accuracy using advanced ML algorithms"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Sales Performance Analytics",
      description: "Real-time insights into sales metrics, conversion rates, and revenue forecasting"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Automated Follow-ups",
      description: "Smart email sequences and follow-up scheduling based on prospect behavior"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Predictive Sales Intelligence",
      description: "Forecast sales outcomes and identify high-value opportunities before they close"
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Customer Segmentation",
      description: "Advanced clustering algorithms to segment prospects by behavior and potential"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "Live dashboards showing sales pipeline health and team performance"
    }
  ];

  const benefits = [
    "Increase sales conversion rates by 40%",
    "Reduce lead response time by 80%",
    "Automate 70% of repetitive sales tasks",
    "Improve sales forecasting accuracy by 60%",
    "Boost team productivity by 50%",
    "Generate 3x more qualified leads"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$2,200",
      period: "/month",
      description: "Perfect for small sales teams",
      features: [
        "Up to 5 users",
        "Basic lead scoring",
        "Email automation",
        "Sales analytics dashboard",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$4,500",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 25 users",
        "Advanced AI lead scoring",
        "Predictive analytics",
        "Custom integrations",
        "Priority support",
        "Advanced reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Unlimited users",
        "Custom AI models",
        "White-label solution",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom development"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Sales Copilot - Intelligent Sales Automation | Zion Tech Group</title>
        <meta name="description" content="Transform your sales process with AI-powered lead scoring, predictive analytics, and automated follow-ups. Increase conversions by 40% with our intelligent sales copilot." />
        <meta name="keywords" content="AI sales copilot, sales automation, lead scoring, predictive analytics, sales intelligence, CRM automation" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-sales-copilot" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                AI-Powered Sales Intelligence
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Sales Copilot
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Supercharge Your Sales
                </span>
              </h1>
              <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
                Transform your sales process with intelligent automation, predictive analytics, and AI-powered lead scoring. 
                Increase conversions by 40% while reducing manual work by 70%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-zinc-400">Increase in Conversions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
                <div className="text-zinc-400">Faster Lead Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">70%</div>
                <div className="text-zinc-400">Task Automation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">3x</div>
                <div className="text-zinc-400">More Qualified Leads</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful Features That Drive Results
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Our AI Sales Copilot combines cutting-edge machine learning with intuitive design to revolutionize your sales process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-zinc-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-800/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose AI Sales Copilot?
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Join thousands of sales teams who have transformed their performance with AI-powered intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-zinc-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {benefits.slice(3).map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-zinc-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Choose the plan that fits your team size and scale as you grow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`relative bg-zinc-800/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-500/50 bg-gradient-to-br from-zinc-800/50 to-cyan-900/20' 
                    : 'border-zinc-700/50'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-zinc-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-zinc-400">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-zinc-700 text-white hover:bg-zinc-600'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Sales Process?
            </h2>
            <p className="text-xl text-zinc-300 mb-8">
              Join the AI revolution and start closing more deals with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISalesCopilot;