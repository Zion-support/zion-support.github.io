import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Mail, 
  Target, 
  BarChart3, 
  Users, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Phone,
  MapPin,
  Star,
  Clock,
  DollarSign,
  Globe,
  Smartphone,
  Monitor,
  Send,
  Edit,
  Eye,
  Heart,
  Share2,
  Download,
  Upload,
  Settings,
  Bell,
  Search,
  Filter,
  Grid,
  List,
  Plus,
  ExternalLink,
  Brain,
  MessageSquare,
  Calendar,
  PieChart,
  LineChart,
  Activity,
  Building2,
  Home,
  Car,
  GraduationCap,
  ShoppingBag,
  Briefcase,
  Palette,
  Music,
  Video,
  BookOpen,
  Camera,
  CreditCard,
  Headphones,
  Hash,
  ThumbsUp,
  Bookmark,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Shuffle,
  Repeat,
  Volume,
  Volume2,
  VolumeX,
  Mute,
  Unmute,
  Maximize,
  Minimize,
  Fullscreen,
  FullscreenExit,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  RefreshCw,
  SortAsc,
  SortDesc,
  Menu,
  QrCode,
  Tablet,
  Laptop,
  Desktop,
  Watch,
  Speaker,
  Microphone,
  Image,
  File,
  Folder,
  Archive,
  AlertCircle,
  Info,
  HelpCircle,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown
} from 'lucide-react';

const AIEmailMarketingAutomation: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Content Generation",
      description: "Automatically create compelling email content, subject lines, and CTAs that drive engagement and conversions.",
      benefits: ["Increase open rates by 45%", "Boost click-through rates by 60%", "Generate personalized content", "A/B test automatically"]
    },
    {
      icon: Target,
      title: "Smart Segmentation",
      description: "AI-powered audience segmentation based on behavior, preferences, and engagement patterns for maximum relevance.",
      benefits: ["Dynamic audience segments", "Behavioral targeting", "Predictive analytics", "Real-time segmentation"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive email performance tracking with AI insights to optimize your campaigns continuously.",
      benefits: ["Real-time performance metrics", "Predictive analytics", "ROI tracking", "Campaign optimization suggestions"]
    },
    {
      icon: Calendar,
      title: "Intelligent Scheduling",
      description: "AI determines the optimal send times for each subscriber to maximize engagement and deliverability.",
      benefits: ["Optimal send time prediction", "Timezone optimization", "Frequency capping", "Deliverability optimization"]
    },
    {
      icon: Users,
      title: "Personalization Engine",
      description: "Advanced personalization that creates unique email experiences for each subscriber based on their data.",
      benefits: ["Dynamic content personalization", "Product recommendations", "Behavioral triggers", "Lifecycle automation"]
    },
    {
      icon: Zap,
      title: "Automation Workflows",
      description: "Sophisticated email automation sequences that nurture leads and customers throughout their journey.",
      benefits: ["Welcome series automation", "Abandoned cart recovery", "Win-back campaigns", "Lifecycle nurturing"]
    }
  ];

  const automationTypes = [
    {
      name: "Welcome Series",
      description: "Onboard new subscribers with a personalized welcome sequence",
      icon: Heart,
      color: "from-green-400 to-emerald-500",
      results: "40% higher engagement"
    },
    {
      name: "Abandoned Cart",
      description: "Recover lost sales with intelligent cart abandonment emails",
      icon: ShoppingBag,
      color: "from-red-400 to-orange-500",
      results: "25% recovery rate"
    },
    {
      name: "Win-Back Campaigns",
      description: "Re-engage inactive subscribers with targeted win-back sequences",
      icon: RefreshCw,
      color: "from-purple-400 to-pink-500",
      results: "15% reactivation rate"
    },
    {
      name: "Birthday & Anniversary",
      description: "Celebrate special occasions with personalized automated emails",
      icon: Calendar,
      color: "from-blue-400 to-cyan-500",
      results: "60% higher open rates"
    },
    {
      name: "Product Recommendations",
      description: "AI-powered product suggestions based on purchase history",
      icon: Target,
      color: "from-yellow-400 to-orange-500",
      results: "35% increase in sales"
    },
    {
      name: "Post-Purchase Follow-up",
      description: "Nurture customers after purchase with relevant content and offers",
      icon: CheckCircle,
      color: "from-indigo-400 to-purple-500",
      results: "50% repeat purchase rate"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$197/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 5,000 subscribers",
        "Unlimited emails",
        "Basic automation workflows",
        "Email templates library",
        "Basic analytics",
        "Email support",
        "Mobile app access"
      ],
      popular: false,
      color: "from-gray-400 to-gray-600"
    },
    {
      name: "Professional",
      price: "$497/month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "Up to 25,000 subscribers",
        "Advanced automation workflows",
        "AI content generation",
        "Advanced segmentation",
        "A/B testing",
        "Priority support",
        "Team collaboration",
        "Custom integrations",
        "Advanced analytics"
      ],
      popular: true,
      color: "from-blue-400 to-cyan-500"
    },
    {
      name: "Enterprise",
      price: "$1,297/month",
      description: "For large organizations and agencies",
      features: [
        "Unlimited subscribers",
        "White-label solution",
        "Advanced AI features",
        "Custom automation workflows",
        "Dedicated account manager",
        "API access",
        "Custom reporting",
        "Multi-brand management",
        "Advanced deliverability tools"
      ],
      popular: false,
      color: "from-purple-400 to-pink-500"
    }
  ];

  const integrations = [
    { name: "Shopify", icon: ShoppingBag, color: "from-green-400 to-emerald-500" },
    { name: "WooCommerce", icon: ShoppingBag, color: "from-purple-400 to-pink-500" },
    { name: "Salesforce", icon: Users, color: "from-blue-400 to-indigo-500" },
    { name: "HubSpot", icon: Target, color: "from-orange-400 to-red-500" },
    { name: "Zapier", icon: Zap, color: "from-yellow-400 to-orange-500" },
    { name: "WordPress", icon: Globe, color: "from-blue-500 to-blue-600" },
    { name: "Magento", icon: ShoppingBag, color: "from-orange-500 to-red-500" },
    { name: "BigCommerce", icon: ShoppingBag, color: "from-blue-500 to-indigo-500" }
  ];

  const useCases = [
    {
      title: "E-commerce Stores",
      description: "Increase sales with automated product recommendations, abandoned cart recovery, and customer lifecycle emails.",
      results: "Average 40% increase in email revenue"
    },
    {
      title: "SaaS Companies",
      description: "Improve user onboarding, reduce churn, and increase upgrades with targeted email sequences.",
      results: "Average 30% reduction in churn rate"
    },
    {
      title: "Service Businesses",
      description: "Nurture leads, book appointments, and maintain client relationships with automated follow-ups.",
      results: "Average 50% increase in appointment bookings"
    },
    {
      title: "Content Creators",
      description: "Build engaged audiences with newsletter automation, content promotion, and subscriber nurturing.",
      results: "Average 60% increase in subscriber engagement"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <Helmet>
        <title>AI Email Marketing Automation - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered email marketing automation platform that increases open rates by 45% and boosts conversions by 60%. Advanced segmentation, personalization, and analytics." />
        <meta name="keywords" content="AI email marketing, email automation, email marketing platform, email segmentation, email personalization, email analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-email-marketing-automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium mb-6">
              <Mail className="w-4 h-4 mr-2" />
              AI-Powered Email Marketing
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Email Marketing Automation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your email marketing with AI that creates, segments, and optimizes campaigns automatically. 
              Increase open rates by 45% and boost conversions by 60%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
              </a>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-cyan-400 mb-2">45%</div>
              <div className="text-gray-300">Average Open Rate Increase</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-green-400 mb-2">60%</div>
              <div className="text-gray-300">Click-Through Rate Boost</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-purple-400 mb-2">25%</div>
              <div className="text-gray-300">Cart Recovery Rate</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-gray-300">Deliverability Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI email marketing platform combines machine learning with email marketing expertise to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Types */}
      <section className="py-20 px-4 bg-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Automation Workflows
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pre-built automation sequences that nurture leads and customers throughout their entire journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationTypes.map((automation, index) => (
              <div key={index} className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${automation.color} rounded-xl flex items-center justify-center mb-6`}>
                  <automation.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{automation.name}</h3>
                <p className="text-gray-300 mb-6">{automation.description}</p>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full text-sm font-medium">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  {automation.results}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite tools and platforms to create a unified marketing ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${integration.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <integration.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{integration.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI features with no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`p-8 rounded-xl border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-cyan-400 bg-gradient-to-br from-cyan-400/10 to-blue-500/10' 
                  : 'border-white/20 bg-white/5'
              }`}>
                {plan.popular && (
                  <div className="text-center mb-6">
                    <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full text-sm font-medium">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href="tel:+13024640950" 
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 mb-4">Need a custom solution for your enterprise?</p>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="inline-flex items-center px-6 py-3 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Contact Sales
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses like yours are achieving remarkable growth with our AI email marketing automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full text-sm font-medium">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  {useCase.results}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Email Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our AI email marketing automation to increase engagement, drive sales, and grow their customer base.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email: kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📍 364 E Main St STE 1008 Middletown DE 19709</p>
              <p>🌐 https://ziontechgroup.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIEmailMarketingAutomation;