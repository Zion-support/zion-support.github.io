import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  BarChart3, 
  Smartphone, 
  Brain, 
  Users, 
  Target, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Shield,
  MessageSquare,
  DollarSign,
  Globe,
  Settings,
  FileText,
  Send,
  Inbox,
  Filter,
  Search,
  Bell,
  Eye,
  Download,
  Upload,
  Share2,
  ExternalLink,
  PieChart,
  LineChart,
  Activity,
  Award,
  Calendar,
  Clock,
  Database,
  Layers,
  Link,
  Lock,
  Maximize,
  Minimize,
  Monitor,
  MousePointer,
  Palette,
  Play,
  Plus,
  RefreshCw,
  Save,
  Scissors,
  Settings2,
  Sliders,
  Tag,
  ThumbsUp,
  Trash2,
  Upload as UploadIcon,
  User,
  UserCheck,
  UserPlus,
  Users2,
  Video,
  Volume2,
  Wifi,
  X,
  ZoomIn,
  ZoomOut
} from 'lucide-react';

const SmartSurveyAnalyticsPlatform = () => {
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Survey Design",
      description: "Intelligent survey builder that suggests optimal questions, formats, and flows based on your objectives and target audience.",
      benefits: ["Smart question suggestions", "Optimal survey flow", "A/B testing recommendations", "Mobile-first design"]
    },
    {
      icon: Smartphone,
      title: "Mobile-First Experience",
      description: "Responsive surveys optimized for mobile devices with touch-friendly interfaces and offline capabilities.",
      benefits: ["Mobile optimization", "Touch-friendly design", "Offline capabilities", "Cross-platform compatibility"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics Engine",
      description: "Real-time analytics with predictive insights, sentiment analysis, and automated reporting for data-driven decisions.",
      benefits: ["Real-time analytics", "Predictive insights", "Sentiment analysis", "Automated reporting"]
    },
    {
      icon: Users,
      title: "Audience Segmentation",
      description: "Intelligent audience targeting and segmentation with personalized survey experiences and dynamic content.",
      benefits: ["Smart targeting", "Personalized experiences", "Dynamic content", "Behavioral insights"]
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Automate survey distribution, follow-ups, and data collection with intelligent triggers and conditional logic.",
      benefits: ["Automated distribution", "Smart follow-ups", "Conditional logic", "Workflow optimization"]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with GDPR compliance, data encryption, and comprehensive audit trails for all activities.",
      benefits: ["GDPR compliant", "Data encryption", "Audit trails", "Enterprise security"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$149",
      period: "month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 1,000 responses/month",
        "Basic survey templates",
        "Standard analytics",
        "Email support",
        "5 team members",
        "Mobile optimization"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 responses/month",
        "Advanced survey builder",
        "AI-powered analytics",
        "Priority support",
        "25 team members",
        "Custom branding",
        "API access",
        "Advanced integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited responses",
        "Custom survey development",
        "Advanced AI analytics",
        "24/7 dedicated support",
        "Unlimited team members",
        "White-label solution",
        "Custom integrations",
        "SLA guarantee",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Customer Satisfaction Surveys",
      description: "Measure and improve customer satisfaction with intelligent surveys and real-time feedback analysis.",
      icon: ThumbsUp,
      results: ["95% response rate", "Real-time insights", "Automated follow-ups", "ROI tracking"]
    },
    {
      title: "Market Research",
      description: "Conduct comprehensive market research with advanced analytics and predictive insights.",
      icon: Target,
      results: ["Advanced analytics", "Predictive insights", "Market segmentation", "Trend analysis"]
    },
    {
      title: "Employee Engagement",
      description: "Monitor and improve employee engagement with pulse surveys and sentiment analysis.",
      icon: Users2,
      results: ["Pulse surveys", "Sentiment analysis", "Engagement tracking", "Actionable insights"]
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "Patient satisfaction surveys, clinical research, and healthcare quality assessments.",
      icon: Activity,
      benefits: ["HIPAA compliant", "Clinical research tools", "Patient feedback", "Quality metrics"]
    },
    {
      name: "Education",
      description: "Student feedback, course evaluations, and educational research surveys.",
      icon: Award,
      benefits: ["Student engagement", "Course evaluations", "Research tools", "Academic insights"]
    },
    {
      name: "Retail & E-commerce",
      description: "Customer experience surveys, product feedback, and market research.",
      icon: ShoppingCart,
      benefits: ["Customer insights", "Product feedback", "Market research", "Experience optimization"]
    },
    {
      name: "Financial Services",
      description: "Customer satisfaction, compliance surveys, and financial product feedback.",
      icon: DollarSign,
      benefits: ["Compliance ready", "Financial insights", "Customer satisfaction", "Risk assessment"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Helmet>
        <title>Smart Survey Analytics Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered survey platform with advanced analytics, mobile-first design, and intelligent insights for data-driven decisions." />
        <meta name="keywords" content="survey platform, analytics, market research, customer feedback, AI surveys, mobile surveys" />
        <link rel="canonical" href={`${contactInfo.website}/services/smart-survey-analytics-platform`} />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Smart Survey Analytics Platform
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Transform your data collection with AI-powered surveys, advanced analytics, and mobile-first design. 
              Get 95% response rates and actionable insights that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: {contactInfo.phone}
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-600 transition-colors flex items-center justify-center font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Survey Platform?</h2>
          <p className="text-xl text-gray-600">Revolutionary features that make survey creation and analysis effortless</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-gray-600">Tailored survey solutions for every industry</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the plan that fits your business needs</p>
          <div className="mt-4 p-4 bg-green-50 rounded-lg inline-block">
            <p className="text-green-800 font-semibold">
              💰 Market Price: $299-1,999/month | Save up to 50% with Zion Tech Group
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-lg p-8 relative ${plan.popular ? 'ring-2 ring-green-500 transform scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-3">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-colors flex items-center justify-center ${
                    plan.popular
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Started
                </a>
                <a
                  href={`mailto:${contactInfo.email}?subject=Inquiry about ${plan.name} Plan`}
                  className="w-full py-2 px-4 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real-World Applications</h2>
            <p className="text-xl text-gray-600">See how businesses are transforming with our survey platform</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-sm text-green-600">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Data Collection?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our smart survey platform to gather insights and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${contactInfo.phone}`}
              className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: {contactInfo.phone}
            </a>
            <a 
              href={`mailto:${contactInfo.email}`}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-600 transition-colors flex items-center justify-center font-semibold"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email: {contactInfo.email}
            </a>
          </div>
          <div className="mt-8 text-sm text-green-100">
            <p>📍 {contactInfo.address}</p>
            <p>🌐 <a href={contactInfo.website} className="hover:text-white underline">{contactInfo.website}</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartSurveyAnalyticsPlatform;