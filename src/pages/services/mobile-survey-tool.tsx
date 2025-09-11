import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  BarChart3, 
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
  Filter,
  Search,
  Bell,
  Eye,
  Download,
  Upload,
  Share2,
  Settings,
  FileText,
  Database,
  Network,
  Globe,
  Monitor,
  Laptop,
  Server,
  Cloud,
  Lock,
  Code,
  Palette,
  Music,
  Video,
  BookOpen,
  Calendar,
  Heart,
  ShoppingBag,
  Briefcase,
  Home,
  Car,
  GraduationCap,
  ShoppingCart,
  Headphones,
  Camera,
  CreditCard,
  Building2,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  QrCode,
  Brain,
  Clock,
  Edit3,
  Send,
  ThumbsUp,
  ThumbsDown,
  Star as StarIcon,
  Award,
  Trophy
} from 'lucide-react';

const MobileSurveyTool = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Optimized for mobile devices with responsive design that adapts to any screen size."
    },
    {
      icon: Brain,
      title: "Adaptive Questioning",
      description: "Dynamic surveys that adapt based on user responses for more relevant data collection."
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Get instant insights with live analytics dashboard and comprehensive reporting tools."
    },
    {
      icon: Users,
      title: "Multi-Channel Distribution",
      description: "Share surveys via SMS, email, social media, QR codes, and embedded widgets."
    },
    {
      icon: Target,
      title: "Advanced Targeting",
      description: "Reach the right audience with demographic targeting and behavioral segmentation."
    },
    {
      icon: Shield,
      title: "Data Security & Privacy",
      description: "Enterprise-grade security with GDPR compliance and data encryption."
    }
  ];

  const benefits = [
    "Increase survey completion rates by 60%",
    "Reduce survey creation time by 80%",
    "Get 3x more responses with mobile optimization",
    "Real-time insights and analytics",
    "Advanced targeting and personalization",
    "Seamless integration with existing tools"
  ];

  const surveyTypes = [
    {
      icon: Users,
      title: "Customer Satisfaction",
      description: "Measure customer experience and satisfaction across all touchpoints."
    },
    {
      icon: TrendingUp,
      title: "Market Research",
      description: "Gather insights about market trends, preferences, and consumer behavior."
    },
    {
      icon: Star,
      title: "Employee Feedback",
      description: "Collect employee feedback and measure engagement and satisfaction."
    },
    {
      icon: ShoppingCart,
      title: "Product Feedback",
      description: "Get detailed feedback on products and services from real users."
    },
    {
      icon: Event,
      title: "Event Surveys",
      description: "Collect feedback from events, webinars, and conferences."
    },
    {
      icon: Award,
      title: "Brand Awareness",
      description: "Measure brand recognition, awareness, and perception in the market."
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$49/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 500 responses/month",
        "Basic survey templates",
        "Mobile-optimized design",
        "Standard analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 5,000 responses/month",
        "Advanced survey logic",
        "Custom branding",
        "Advanced analytics",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399/month",
      description: "For large organizations",
      features: [
        "Unlimited responses",
        "White-label solution",
        "Advanced integrations",
        "Custom reporting",
        "Dedicated support",
        "SSO integration"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <Helmet>
        <title>Mobile-First Survey Tool - Zion Tech Group</title>
        <meta name="description" content="Create engaging, mobile-optimized surveys that adapt based on user responses. Increase completion rates by 60% with our advanced survey platform." />
        <meta name="keywords" content="mobile survey tool, survey platform, market research, customer feedback, mobile surveys" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Smartphone className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Mobile-First Survey Tool
            </h1>
            <p className="text-xl mb-8 text-green-100">
              Create engaging, mobile-optimized surveys that adapt based on user responses. 
              Increase completion rates by 60% and get richer data with our intelligent survey platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300 flex items-center justify-center"
              >
                Start Creating Surveys
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                +1 302 464 0950
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Survey Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our mobile-first survey platform combines intuitive design with advanced functionality 
              to help you collect better data and make informed decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-3 bg-green-100 rounded-xl w-fit mb-6">
                  <feature.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Survey Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Survey Types for Every Need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From customer satisfaction to market research, our platform supports 
              all types of surveys with specialized templates and features.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {surveyTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-3 bg-blue-100 rounded-xl w-fit mb-6">
                  <type.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-600">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Survey Tool?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference of a mobile-first survey platform designed 
              for maximum engagement and data quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-white p-6 rounded-xl shadow-md">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your survey needs. All plans include our core 
              mobile-first features with no hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white p-8 rounded-2xl shadow-lg relative ${tier.popular ? 'ring-2 ring-green-500 transform scale-105' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">{tier.price}</div>
                  <p className="text-gray-600">{tier.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                    tier.popular
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Better Surveys?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
            Join thousands of businesses using our mobile-first survey platform to 
            collect better data and make informed decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              +1 302 464 0950
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-gray-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileSurveyTool;