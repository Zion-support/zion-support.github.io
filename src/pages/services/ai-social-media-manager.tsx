import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Share2, 
  TrendingUp, 
  Users, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  Star,
  Award,
  DollarSign,
  Globe,
  Smartphone,
  Database,
  Settings,
  Shield,
  Activity,
  Target,
  MessageSquare,
  Calendar,
  Bell,
  AlertCircle,
  Search,
  Filter,
  Download,
  HelpCircle,
  ExternalLink,
  Cpu,
  Network,
  Lock,
  Play,
  Pause,
  RotateCcw,
  RefreshCw,
  Upload,
  File,
  Folder,
  Archive,
  Edit,
  Plus,
  Info,
  Clock,
  Brain,
  Bot,
  Workflow,
  Camera,
  Image,
  Video,
  Music,
  Heart,
  ThumbsUp,
  Eye,
  Zap,
  Sparkles
} from 'lucide-react';

export default function AISocialMediaManager() {
  const features = [
    {
      icon: Brain,
      title: "AI Content Generation",
      description: "Generate engaging posts, captions, and hashtags using advanced AI that understands your brand voice and audience preferences.",
      benefits: ["Generate 100+ posts in minutes", "Brand voice consistency", "Trending hashtag suggestions", "Multi-language support"]
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI-powered optimal posting times based on your audience activity, engagement patterns, and platform algorithms.",
      benefits: ["Optimal posting times", "Cross-platform scheduling", "Content calendar automation", "Engagement prediction"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive analytics and insights to track performance, audience growth, and ROI across all social platforms.",
      benefits: ["Real-time performance tracking", "Audience insights", "ROI measurement", "Competitor analysis"]
    },
    {
      icon: Users,
      title: "Community Management",
      description: "AI-powered community management with automated responses, sentiment analysis, and engagement optimization.",
      benefits: ["Automated responses", "Sentiment monitoring", "Engagement optimization", "Crisis management alerts"]
    }
  ];

  const platforms = [
    {
      name: "Facebook",
      icon: "📘",
      features: ["Post scheduling", "Story management", "Ad integration", "Group management"]
    },
    {
      name: "Instagram",
      icon: "📷",
      features: ["Feed posts", "Stories & Reels", "IGTV management", "Shopping integration"]
    },
    {
      name: "Twitter",
      icon: "🐦",
      features: ["Tweet scheduling", "Thread management", "Trend monitoring", "Engagement tracking"]
    },
    {
      name: "LinkedIn",
      icon: "💼",
      features: ["Professional posts", "Company page management", "B2B networking", "Lead generation"]
    },
    {
      name: "TikTok",
      icon: "🎵",
      features: ["Video scheduling", "Trend analysis", "Hashtag optimization", "Creator tools"]
    },
    {
      name: "YouTube",
      icon: "📺",
      features: ["Video optimization", "Thumbnail generation", "SEO optimization", "Analytics tracking"]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$79/month",
      description: "Perfect for small businesses",
      features: [
        "3 social media accounts",
        "50 posts per month",
        "Basic AI content generation",
        "Standard analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$199/month",
      description: "Ideal for growing brands",
      features: [
        "10 social media accounts",
        "Unlimited posts",
        "Advanced AI features",
        "Comprehensive analytics",
        "Priority support",
        "Team collaboration",
        "Custom branding"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$499/month",
      description: "For large organizations",
      features: [
        "Unlimited accounts",
        "Unlimited posts",
        "Full AI suite",
        "Advanced analytics",
        "24/7 dedicated support",
        "White-label options",
        "Custom integrations",
        "API access"
      ],
      popular: false
    }
  ];

  const successMetrics = [
    {
      metric: "300%",
      description: "Increase in engagement",
      icon: TrendingUp
    },
    {
      metric: "5x",
      description: "Faster content creation",
      icon: Clock
    },
    {
      metric: "85%",
      description: "Time saved on management",
      icon: Zap
    },
    {
      metric: "250%",
      description: "ROI improvement",
      icon: DollarSign
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>AI Social Media Manager - Zion Tech Group</title>
        <meta name="description" content="Transform your social media with AI-powered content generation, scheduling, and analytics. Increase engagement by 300% and save 85% of your time." />
        <meta name="keywords" content="AI social media manager, social media automation, content generation, social media analytics, social media scheduling" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-social-media-manager" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-700 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
              <Share2 className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">AI-Powered Social Media</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Social Media Manager
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 mb-8 max-w-4xl mx-auto">
              Transform your social media presence with AI-powered content generation, 
              smart scheduling, and advanced analytics. Increase engagement by 300%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start Growing Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="#demo" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-pink-600 transition-colors"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-pink-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{metric.metric}</div>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to dominate social media with AI-powered automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-pink-600" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              All Major Platforms Supported
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Manage all your social media accounts from one powerful dashboard
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{platform.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{platform.name}</h3>
                </div>
                <ul className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 3-step process to transform your social media presence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Connect & Configure</h3>
              <p className="text-gray-600">
                Connect your social media accounts and configure your brand voice, target audience, and content preferences
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. AI Content Creation</h3>
              <p className="text-gray-600">
                Our AI generates engaging content, suggests optimal posting times, and creates a content calendar
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Analyze & Optimize</h3>
              <p className="text-gray-600">
                Track performance, analyze engagement, and continuously optimize your social media strategy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your social media needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 ${tier.popular ? 'ring-2 ring-pink-500' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold text-pink-600 mb-2">{tier.price}</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    tier.popular 
                      ? 'bg-pink-600 text-white hover:bg-pink-700' 
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

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied customers who transformed their social media
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;AI Social Media Manager increased our engagement by 300% and saved us 20 hours per week. The AI content generation is incredible!&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">Marketing Director, TechCorp</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;The analytics and insights are game-changing. We can now make data-driven decisions and our ROI has improved by 250%.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-900">Mike Chen</p>
                  <p className="text-sm text-gray-600">CEO, StartupXYZ</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;Finally, a tool that understands our brand voice and creates content that resonates with our audience. Highly recommended!&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-900">Emily Rodriguez</p>
                  <p className="text-sm text-gray-600">Brand Manager, FashionCo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Social Media?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Join thousands of brands already growing with AI-powered social media management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a 
              href="tel:+13024640950" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-pink-600 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-pink-600 mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
              <a href="tel:+13024640950" className="text-gray-600 hover:text-pink-600">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-pink-600 mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-600 hover:text-pink-600">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="w-8 h-8 text-pink-600 mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
              <p className="text-gray-600 text-center">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}