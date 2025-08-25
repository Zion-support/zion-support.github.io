import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  BarChart3, 
  Users, 
  TrendingUp, 
  Zap, 
  Brain, 
  Mail, 
  MessageSquare,
  Calendar,
  Analytics,
  Eye,
  MousePointer,
  Smartphone,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Clock,
  DollarSign
} from 'lucide-react';

const AIMarketingAutomation: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Campaign Optimization",
      description: "Intelligent algorithms that automatically optimize marketing campaigns for maximum ROI and engagement.",
      benefits: ["Real-time performance analysis", "Automated A/B testing", "Predictive analytics"]
    },
    {
      icon: Target,
      title: "Precision Audience Targeting",
      description: "Advanced AI algorithms that identify and target the most valuable customer segments with laser precision.",
      benefits: ["Behavioral analysis", "Predictive segmentation", "Dynamic audience optimization"]
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Machine learning models that forecast customer behavior and campaign performance to drive strategic decisions.",
      benefits: ["Customer lifetime value prediction", "Churn prevention", "Revenue forecasting"]
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Streamlined marketing processes that run automatically, saving time and ensuring consistency across campaigns.",
      benefits: ["Multi-channel automation", "Trigger-based campaigns", "Workflow optimization"]
    }
  ];

  const useCases = [
    {
      title: "Email Marketing Automation",
      description: "Intelligent email campaigns that adapt to recipient behavior and preferences.",
      icon: Mail,
      features: ["Personalized content", "Optimal send times", "Behavioral triggers"]
    },
    {
      title: "Social Media Management",
      description: "AI-powered social media campaigns that engage audiences across all platforms.",
      icon: MessageSquare,
      features: ["Content optimization", "Audience engagement", "Performance tracking"]
    },
    {
      title: "Content Marketing",
      description: "Data-driven content strategies that resonate with target audiences and drive conversions.",
      icon: Eye,
      features: ["Topic optimization", "Content performance", "SEO integration"]
    },
    {
      title: "Lead Generation",
      description: "Automated lead scoring and nurturing processes that convert prospects into customers.",
      icon: Users,
      features: ["Lead scoring", "Nurturing campaigns", "Conversion tracking"]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses starting with marketing automation",
      features: [
        "Basic AI campaign optimization",
        "Email automation (up to 10,000 contacts)",
        "Social media scheduling",
        "Basic analytics dashboard",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Ideal for growing businesses with advanced automation needs",
      features: [
        "Advanced AI optimization",
        "Unlimited email automation",
        "Multi-channel campaigns",
        "Advanced analytics & reporting",
        "Predictive analytics",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "Comprehensive solution for large organizations",
      features: [
        "Full AI suite with custom models",
        "Unlimited everything",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom training & onboarding"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Marketing Automation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Marketing with
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> AI Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Leverage the power of artificial intelligence to automate, optimize, and scale your marketing campaigns. 
              Our AI-driven platform delivers personalized experiences that convert prospects into loyal customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200"
              >
                View Case Studies
              </Link>
            </div>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">300%</div>
              <div className="text-gray-400">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">85%</div>
              <div className="text-gray-400">Time Saved on Campaigns</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">2.5x</div>
              <div className="text-gray-400">Lead Generation Boost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-400">Automated Optimization</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Powerful AI-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI marketing automation platform combines cutting-edge technology with proven marketing strategies 
              to deliver exceptional results for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-purple-500/20 mr-4">
                    <feature.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Marketing Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From email campaigns to social media management, our AI platform handles every aspect of your marketing strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 text-center">
                <div className="p-4 rounded-lg bg-purple-500/20 inline-block mb-4">
                  <useCase.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{useCase.description}</p>
                <ul className="space-y-1 text-sm">
                  {useCase.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your business growth and marketing needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/50 rounded-xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-purple-500/50 scale-105' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                      : 'border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses that have already revolutionized their marketing with AI-powered automation. 
            Start your free trial today and see the difference AI can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}