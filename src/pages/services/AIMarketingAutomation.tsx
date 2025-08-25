import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Mail, 
  MessageSquare,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Award,
  Brain,
  Cpu,
  Eye,
  Lock,
  PieChart,
  LineChart
} from 'lucide-react';

const AIMarketingAutomation = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Campaign Optimization",
      description: "Machine learning algorithms that automatically optimize marketing campaigns for maximum ROI",
      benefits: ["Real-time optimization", "A/B testing automation", "Performance prediction", "Budget allocation"]
    },
    {
      icon: Target,
      title: "Intelligent Audience Segmentation",
      description: "Advanced customer segmentation using behavioral analysis and predictive modeling",
      benefits: ["Behavioral targeting", "Predictive segmentation", "Dynamic personas", "Cross-channel insights"]
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast customer behavior and campaign performance using historical data analysis",
      benefits: ["Churn prediction", "Lifetime value forecasting", "Campaign success prediction", "Market trend analysis"]
    },
    {
      icon: Users,
      title: "Personalized Content Generation",
      description: "AI-generated personalized content that resonates with individual customer preferences",
      benefits: ["Dynamic content", "Personalized messaging", "Multi-language support", "Brand voice consistency"]
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Intelligent automation of repetitive marketing tasks and customer journey management",
      benefits: ["Lead nurturing", "Email automation", "Social media management", "Customer onboarding"]
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Built-in compliance features for GDPR, CAN-SPAM, and other marketing regulations",
      benefits: ["GDPR compliance", "Data privacy", "Audit trails", "Secure data handling"]
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      title: "Personalized Product Recommendations",
      description: "AI-driven product suggestions based on browsing behavior and purchase history",
      metrics: ["35% conversion increase", "45% higher AOV", "60% customer retention"]
    },
    {
      industry: "SaaS",
      title: "Lead Scoring & Nurturing",
      description: "Automated lead qualification and personalized nurturing campaigns",
      metrics: ["50% faster lead conversion", "40% higher quality leads", "25% cost reduction"]
    },
    {
      industry: "Healthcare",
      title: "Patient Engagement",
      description: "Personalized health communication and appointment reminders",
      metrics: ["30% appointment adherence", "45% patient satisfaction", "20% operational efficiency"]
    },
    {
      industry: "Financial Services",
      title: "Customer Lifecycle Marketing",
      description: "Intelligent cross-selling and retention campaigns based on financial behavior",
      metrics: ["40% cross-sell success", "35% retention improvement", "50% customer lifetime value"]
    }
  ];

  const technologies = [
    {
      name: "Machine Learning",
      description: "Advanced ML algorithms for customer behavior analysis and prediction",
      icon: Brain
    },
    {
      name: "Natural Language Processing",
      description: "AI-powered content generation and sentiment analysis",
      icon: Eye
    },
    {
      name: "Predictive Analytics",
      description: "Data-driven forecasting and customer journey optimization",
      icon: LineChart
    },
    {
      name: "Marketing Automation",
      description: "Intelligent workflow automation and campaign management",
      icon: Zap
    },
    {
      name: "Customer Data Platform",
      description: "Unified customer data for comprehensive marketing insights",
      icon: Users
    },
    {
      name: "Real-Time Optimization",
      description: "Instant campaign adjustments based on live performance data",
      icon: Cpu
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$1,999",
      period: "/month",
      description: "Perfect for small businesses starting with AI marketing",
      features: [
        "Up to 10,000 contacts",
        "Basic AI optimization",
        "Email automation",
        "Standard reporting",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$4,999",
      period: "/month",
      description: "Advanced AI marketing for growing businesses",
      features: [
        "Up to 100,000 contacts",
        "Advanced AI optimization",
        "Multi-channel automation",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
        "A/B testing automation"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Full-scale AI marketing automation for large organizations",
      features: [
        "Unlimited contacts",
        "Full AI capabilities",
        "Custom AI models",
        "Advanced reporting",
        "24/7 dedicated support",
        "White-label solutions",
        "On-premise options",
        "Custom development"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              AI-Powered Marketing Automation
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Supercharge Your
              <br />
              Marketing with AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Transform your marketing campaigns with intelligent automation that learns, 
              optimizes, and delivers personalized experiences at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Why Choose AI Marketing Automation?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI-powered platform delivers intelligent marketing automation that 
            continuously learns and optimizes for maximum performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-gray-800/50 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/50">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Use Cases */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Industry Applications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how AI Marketing Automation is transforming businesses across different industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                  {useCase.industry}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{useCase.title}</h3>
              <p className="text-gray-300 mb-4">{useCase.description}</p>
              <div className="space-y-2">
                {useCase.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                    <span className="text-cyan-400 font-medium">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Powered by Cutting-Edge Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built on the latest AI and marketing technology for maximum performance and results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div key={index} className="bg-gray-800/50 rounded-2xl p-6 text-center hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{tech.name}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pricing */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Flexible pricing options designed to scale with your marketing needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div key={index} className={`relative bg-gray-800/50 rounded-2xl p-8 border ${
              tier.popular 
                ? 'border-cyan-500 shadow-lg shadow-cyan-500/20' 
                : 'border-gray-700/50'
            }`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-400">{tier.period}</span>
                </div>
                <p className="text-gray-300">{tier.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to="/contact"
                className={`w-full py-3 px-6 rounded-full font-semibold text-center transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                    : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading organizations that are already leveraging AI-powered marketing 
            automation to drive growth and customer engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Free Trial
            </Link>
            <Link
              to="/case-studies"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMarketingAutomation;