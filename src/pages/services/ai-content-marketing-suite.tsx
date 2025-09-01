import React from 'react';
import { motion } from 'framer-motion';
import { 
<<<<<<< HEAD
  PenTool, 
  TrendingUp, 
  Target, 
  Users, 
  Zap, 
  ArrowRight,
  Brain,
  BarChart3,
  Clock,
  Star,
  Lightbulb,
  CheckCircle,
  Eye,
  Globe,
  PieChart,
  Monitor,
  FileText,
  Share2
=======
  PenTool, Brain, Zap, Globe, Users, BarChart3, 
  Lock, Cpu, Network, Eye, AlertTriangle, CheckCircle,
  ArrowRight, Star, Award, Phone, Mail, MapPin, TrendingUp,
  Target, Shield, Gauge, Clock, FileText, Search, MessageSquare
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AIContentMarketingSuite: React.FC = () => {
  const features = [
    {
      icon: PenTool,
      title: "AI Content Generation",
<<<<<<< HEAD
      description: "Create high-quality, engaging content automatically using advanced language models and AI algorithms."
    },
    {
      icon: TrendingUp,
      title: "Content Optimization",
      description: "Optimize your content for maximum engagement, SEO performance, and conversion rates."
=======
      description: "Generate high-quality, SEO-optimized content in seconds using advanced AI"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "AI-powered keyword research and content optimization for maximum visibility"
    },
    {
      icon: PenTool,
      title: "Content Planning",
      description: "Intelligent content calendar and topic suggestions based on trending data"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Comprehensive analytics to track content performance and ROI"
    },
    {
      icon: MessageSquare,
      title: "Social Media Management",
      description: "Automated social media posting and engagement optimization"
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
    },
    {
      icon: Target,
      title: "Audience Targeting",
<<<<<<< HEAD
      description: "Identify and target your ideal audience with personalized content strategies and messaging."
    },
    {
      icon: Users,
      title: "Multi-Channel Distribution",
      description: "Distribute your content across multiple channels and platforms for maximum reach and impact."
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Streamline your content creation and distribution processes with intelligent automation."
    },
    {
      icon: Brain,
      title: "Performance Analytics",
      description: "Track content performance and get insights to continuously improve your marketing strategies."
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Increased Engagement",
      description: "Boost audience engagement and interaction with AI-optimized content that resonates with your target market."
    },
    {
      icon: Lightbulb,
      title: "Better ROI",
      description: "Improve your marketing ROI with data-driven content strategies and automated optimization."
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "Save time on content creation and management while maintaining high quality and consistency."
    },
    {
      icon: Star,
      title: "Scalable Growth",
      description: "Scale your content marketing efforts efficiently without sacrificing quality or personalization."
    }
  ];

  const contentTypes = [
    {
      title: "Blog Posts & Articles",
      description: "Create engaging blog content that drives traffic and establishes thought leadership."
    },
    {
      title: "Social Media Content",
      description: "Generate platform-specific content for all major social media channels."
    },
    {
      title: "Email Marketing",
      description: "Create personalized email campaigns that drive engagement and conversions."
    },
    {
      title: "Video Content",
      description: "Generate video scripts and descriptions for multimedia marketing campaigns."
=======
      description: "AI-driven audience segmentation and personalized content delivery"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses and content creators",
      features: [
        "Up to 50 AI-generated articles/month",
        "Basic SEO optimization",
        "Content calendar",
        "Social media scheduling",
        "Basic analytics",
        "Email support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses and marketing teams",
      features: [
        "Up to 200 AI-generated articles/month",
        "Advanced SEO optimization",
        "AI content planning",
        "Social media automation",
        "Advanced analytics",
        "Priority support",
        "Custom templates",
        "Team collaboration"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "For large organizations and agencies",
      features: [
        "Unlimited AI-generated content",
        "Custom AI models",
        "White-label solution",
        "Advanced analytics",
        "API access",
        "Dedicated support",
        "Custom integrations",
        "Multi-brand management"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      title: "10x Content Production",
      description: "Generate high-quality content 10x faster than traditional methods",
      icon: Zap
    },
    {
      title: "SEO Dominance",
      description: "Achieve top search rankings with AI-optimized content",
      icon: Search
    },
    {
      title: "Cost Efficiency",
      description: "Reduce content creation costs by up to 80%",
      icon: DollarSign
    },
    {
      title: "24/7 Automation",
      description: "Automated content creation and distribution around the clock",
      icon: Clock
    }
  ];

  const contentTypes = [
    {
      title: "Blog Posts",
      description: "SEO-optimized blog articles with engaging headlines and meta descriptions",
      icon: FileText,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Social Media",
      description: "Platform-specific content for Facebook, Twitter, LinkedIn, and Instagram",
      icon: MessageSquare,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Email Marketing",
      description: "Personalized email campaigns with AI-driven subject lines and content",
      icon: Mail,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Video Scripts",
      description: "Engaging video scripts optimized for different platforms and audiences",
      icon: Eye,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Product Descriptions",
      description: "Compelling product descriptions that convert browsers into buyers",
      icon: Target,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Press Releases",
      description: "Professional press releases with newsworthy angles and SEO optimization",
      icon: TrendingUp,
      color: "from-indigo-500 to-purple-500"
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
<<<<<<< HEAD
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full">
                <PenTool className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Content Marketing Suite
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-pink-100">
              Transform your content marketing with AI-powered creation, optimization, and distribution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-pink-600 font-semibold rounded-lg hover:bg-pink-50 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-pink-600 transition-colors"
              >
                View All Services
              </Link>
=======
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
              <PenTool className="w-4 h-4 mr-2" />
              AI Content Marketing
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                {" "}Content Marketing Suite
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize your content marketing with AI-powered content generation, 
              SEO optimization, and automated distribution. Create 10x more content in 1/10th the time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                Watch Demo
              </button>
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Content Marketing Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform provides comprehensive content marketing capabilities to drive engagement and growth.
=======
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Content Marketing Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI suite handles every aspect of content marketing, from ideation to distribution, 
              ensuring maximum engagement and ROI for your brand.
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-pink-100 rounded-lg mb-6">
                  <feature.icon className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
=======
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Generated Content Types
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI can create any type of content you need, optimized for your audience 
              and designed to drive engagement and conversions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((contentType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${contentType.color} rounded-lg flex items-center justify-center mb-4`}>
                  <contentType.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{contentType.title}</h3>
                <p className="text-gray-300">{contentType.description}</p>
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Content Marketing Suite?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of AI-powered content marketing that drives real engagement and results.
=======
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Content Suite?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the future of content marketing with proven results 
              and industry-leading AI technology.
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
<<<<<<< HEAD
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-pink-100 rounded-lg">
                    <benefit.icon className="h-6 w-6 text-pink-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
=======
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Content Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Content Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform supports all major content types to meet your marketing needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contentTypes.map((contentType, index) => (
=======
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the perfect plan for your content marketing needs and team size.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {contentType.title}
                </h3>
                <p className="text-gray-600">
                  {contentType.description}
                </p>
=======
                className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  tier.popular 
                    ? 'border-orange-500 ring-2 ring-orange-500/20' 
                    : 'border-gray-700'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400">{tier.period}</span>
                  </div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}>
                  {tier.cta}
                </button>
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
=======
      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Content Marketing?
            </h2>
<<<<<<< HEAD
            <p className="text-xl mb-8 text-pink-100 max-w-3xl mx-auto">
              Join marketers who are already leveraging AI to create engaging content that drives results.
=======
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to learn more about implementing AI-powered content marketing 
              for your business.
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-orange-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-orange-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-pink-600 font-semibold rounded-lg hover:bg-pink-50 transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-pink-600 transition-colors"
              >
                Explore All Services
              </Link>
=======
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300">
                Schedule Demo
              </button>
              <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                Download Brochure
              </button>
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIContentMarketingSuite;
