import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { motion } from 'framer-motion';
=======
import { Link } from 'react-router-dom';
>>>>>>> origin/main
import { 
<<<<<<< HEAD
=======
  Brain, 
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
  Target, 
  BarChart3, 
  Users, 
  TrendingUp, 
  Zap, 
<<<<<<< HEAD
<<<<<<< HEAD
  Eye,
  CheckCircle,
  Star,
  ArrowRight,
  Brain,
  Mail,
=======
  Brain, 
  Mail, 
>>>>>>> origin/main
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

<<<<<<< HEAD
const AIMarketingAutomation = () => {
=======
  Shield, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Rocket
} from 'lucide-react';

export default function AIMarketingAutomation() {
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
=======
const AIMarketingAutomation: React.FC = () => {
>>>>>>> origin/main
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Campaign Optimization",
      description: "Intelligent algorithms that automatically optimize marketing campaigns for maximum ROI and engagement.",
      benefits: ["Real-time performance analysis", "Automated A/B testing", "Predictive analytics"]
    },
    {
      icon: Target,
<<<<<<< HEAD
      title: "Intelligent Audience Targeting",
<<<<<<< HEAD
      description: "AI-powered segmentation and targeting for maximum campaign effectiveness",
      benefits: [
        "Behavioral pattern analysis",
        "Predictive customer modeling",
        "Real-time audience optimization",
        "Cross-channel targeting"
      ]
    },
    {
      icon: TrendingUp,
      title: "Predictive Campaign Optimization",
      description: "Automated campaign performance prediction and optimization",
      benefits: [
        "ROI forecasting",
        "A/B testing automation",
        "Budget optimization",
        "Performance prediction"
      ]
    },
    {
      icon: Users,
      title: "Personalized Content Generation",
      description: "AI-generated personalized content for each customer segment",
      benefits: [
        "Dynamic content creation",
        "Personalized messaging",
        "Multi-language support",
        "Brand voice consistency"
      ]
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics & Insights",
      description: "Live campaign performance monitoring and actionable insights",
      benefits: [
        "Real-time dashboards",
        "Predictive analytics",
        "Competitive intelligence",
        "Performance alerts"
      ]
=======
import { Link } from 'react-router-dom';
import { 
  Target, 
  BarChart3, 
  Users, 
  Mail, 
  MessageSquare, 
  TrendingUp, 
  Zap, 
  Brain, 
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  Clock,
  DollarSign,
  Globe,
  Smartphone,
  Monitor,
  Database,
  Lock,
  Sparkles,
  ShoppingCart,
  Building,
  FileText,
  Share2
} from 'lucide-react';

export default function AIMarketingAutomation() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Campaign Optimization",
      description: "Intelligent algorithms that automatically optimize marketing campaigns for maximum ROI and engagement."
    },
    {
      icon: Target,
      title: "Precision Audience Targeting",
      description: "Advanced segmentation and targeting using machine learning to identify high-value prospects."
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics & Insights",
      description: "Comprehensive dashboards providing actionable insights and performance metrics."
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
    },
    {
      icon: Zap,
      title: "Automated Workflow Management",
<<<<<<< HEAD
      description: "Streamlined marketing operations with intelligent automation",
      benefits: [
        "Campaign scheduling",
        "Lead nurturing automation",
        "Email sequence optimization",
        "Social media automation"
      ]
    },
    {
      icon: Eye,
      title: "Advanced Attribution Modeling",
      description: "Multi-touch attribution for accurate ROI measurement",
      benefits: [
        "Cross-channel attribution",
        "Customer journey mapping",
        "Conversion tracking",
        "ROI optimization"
      ]
=======
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
>>>>>>> origin/main
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
<<<<<<< HEAD
      industry: "Financial Services",
      applications: [
        "Customer retention campaigns",
        "Product cross-selling",
        "Risk-based messaging",
        "Compliance-aware marketing"
      ],
      icon: TrendingUp
=======
      description: "AI-powered audience segmentation and targeting for maximum campaign effectiveness"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast campaign performance and optimize strategies in real-time"
    },
    {
      icon: Users,
      title: "Personalized Content",
      description: "Dynamic content generation and personalization at scale"
    },
    {
      icon: BarChart3,
      title: "Performance Optimization",
      description: "Continuous learning and optimization of marketing campaigns"
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Streamlined marketing processes with intelligent automation"
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Built-in compliance features and enterprise-grade security"
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
=======
      description: "Streamlined marketing processes with intelligent automation and workflow optimization."
    },
    {
      icon: Users,
      title: "Personalized Customer Journeys",
      description: "Dynamic content personalization based on user behavior and preferences."
    },
    {
      icon: TrendingUp,
      title: "Predictive Performance Modeling",
      description: "AI-driven forecasting to predict campaign performance and optimize strategies."
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
=======
import { Link } from 'react-router-dom';
import { 
  Target, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Mail, 
  MessageSquare, 
  Zap,
  Brain,
  Globe,
  Rocket,
  Star,
  Palette,
  Monitor,
  Smartphone
} from 'lucide-react';

export default function AIMarketingAutomation() {
  const services = [
    {
      title: 'AI-Powered Campaign Management',
      description: 'Intelligent campaign automation that optimizes performance in real-time using machine learning algorithms.',
      icon: Target,
      features: [
        'Automated campaign optimization',
        'Real-time performance tracking',
        'A/B testing automation',
        'Dynamic content personalization',
        'Predictive analytics',
        'Cross-channel coordination'
      ],
      price: 'Starting at $2,499/month'
    },
    {
      title: 'Smart Content Generation',
      description: 'AI-driven content creation that generates personalized marketing materials across all channels.',
      icon: Palette,
      features: [
        'Automated content creation',
        'Personalized messaging',
        'Multi-language support',
        'Brand voice consistency',
        'SEO optimization',
        'Content performance analytics'
      ],
      price: 'Starting at $1,999/month'
    },
    {
      title: 'Customer Journey Automation',
      description: 'Intelligent journey mapping and automation that delivers personalized experiences at every touchpoint.',
      icon: Users,
      features: [
        'Behavioral tracking',
        'Predictive journey mapping',
        'Automated touchpoint delivery',
        'Personalization engines',
        'Conversion optimization',
        'Customer lifetime value tracking'
      ],
      price: 'Starting at $3,499/month'
    },
    {
      title: 'Marketing Analytics & Insights',
      description: 'Advanced analytics platform that provides actionable insights and ROI measurement.',
      icon: BarChart3,
      features: [
        'Real-time performance metrics',
        'ROI tracking and attribution',
        'Customer segmentation',
        'Predictive modeling',
        'Competitive analysis',
        'Custom reporting dashboards'
      ],
      price: 'Starting at $1,799/month'
    }
  ];

  const channels = [
    {
      title: 'Email Marketing',
      description: 'AI-powered email campaigns with personalization and automation',
      icon: Mail,
      features: ['Smart segmentation', 'Behavioral triggers', 'A/B testing', 'Performance optimization']
    },
    {
      title: 'Social Media',
      description: 'Automated social media management with intelligent content scheduling',
      icon: MessageSquare,
      features: ['Content scheduling', 'Engagement tracking', 'Trend analysis', 'Community management']
    },
    {
      title: 'Digital Advertising',
      description: 'Programmatic advertising with AI-driven optimization',
      icon: Monitor,
      features: ['Bid optimization', 'Audience targeting', 'Creative testing', 'Performance tracking']
    },
    {
      title: 'Mobile Marketing',
      description: 'Mobile-first marketing automation and push notification optimization',
      icon: Smartphone,
      features: ['Push notifications', 'In-app messaging', 'Location targeting', 'Mobile analytics']
>>>>>>> origin/cursor/website-audit-and-enhancement-0445
    }
  ];

  const benefits = [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      title: "Lead Generation",
      description: "Automated lead scoring and nurturing processes that convert prospects into customers.",
      icon: Users,
      features: ["Lead scoring", "Nurturing campaigns", "Conversion tracking"]
    }
  ];

  const pricing = [
>>>>>>> origin/main
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
<<<<<<< HEAD
      metric: "$1.2M",
      description: "Average annual ROI",
      icon: BarChart3
    },
    {
      metric: "24/7",
      description: "Campaign optimization",
      icon: Eye
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Marketing Director, E-commerce Retailer",
      quote: "The AI marketing automation platform increased our conversion rates by 300% while reducing our manual workload by 85%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      title: "VP Marketing, B2B SaaS Company",
      quote: "Our lead generation and nurturing processes are now completely automated and optimized for maximum ROI.",
      rating: 5
    },
    {
      name: "Alex Rodriguez",
      title: "CMO, Healthcare Network",
      quote: "The personalized patient engagement campaigns have significantly improved our patient satisfaction scores.",
      rating: 5
=======
    "Increase conversion rates by up to 300%",
    "Reduce marketing costs by 40-60%",
    "Improve customer engagement and retention",
    "Real-time campaign optimization",
    "Scalable personalization across all channels",
    "Comprehensive analytics and reporting"
=======
    "Increase conversion rates by up to 300%",
    "Reduce marketing costs by 40-60%",
    "Improve customer engagement by 200%",
    "Automate 80% of repetitive marketing tasks",
    "Real-time campaign optimization",
    "Advanced ROI tracking and attribution"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Basic AI campaign optimization",
        "Email marketing automation",
        "Social media scheduling",
        "Basic analytics dashboard",
        "Up to 5,000 contacts",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Advanced AI optimization",
        "Multi-channel automation",
        "Advanced segmentation",
        "Predictive analytics",
        "Up to 25,000 contacts",
        "Priority support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large organizations",
      features: [
        "Full AI suite access",
        "Custom AI models",
        "Advanced attribution",
        "Dedicated account manager",
        "Unlimited contacts",
        "24/7 phone support",
        "Custom development"
      ]
    }
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
  ];

  const useCases = [
    {
      title: "E-commerce Marketing",
<<<<<<< HEAD
      description: "Personalized product recommendations and dynamic pricing optimization"
    },
    {
      title: "B2B Lead Generation",
      description: "Intelligent lead scoring and nurturing campaigns"
    },
    {
      title: "Content Marketing",
      description: "AI-generated content and automated content distribution"
    },
    {
      title: "Social Media Marketing",
      description: "Automated social media management and engagement optimization"
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
=======
      description: "Automated product recommendations, abandoned cart recovery, and personalized shopping experiences.",
      icon: ShoppingCart
    },
    {
      title: "B2B Lead Generation",
      description: "Intelligent lead scoring, automated nurturing sequences, and account-based marketing.",
      icon: Building
    },
    {
      title: "Content Marketing",
      description: "AI-powered content optimization, automated distribution, and performance tracking.",
      icon: FileText
    },
    {
      title: "Social Media Management",
      description: "Automated posting, engagement monitoring, and trend analysis across all platforms.",
      icon: Share2
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
=======
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
>>>>>>> origin/main
=======
    {
      title: 'Increased ROI',
      description: 'Optimize campaigns in real-time for maximum return on investment',
      icon: TrendingUp
    },
    {
      title: 'Personalized Experiences',
      description: 'Deliver tailored content and offers to each customer segment',
      icon: Users
    },
    {
      title: 'Time Savings',
      description: 'Automate repetitive tasks and focus on strategic initiatives',
      icon: Zap
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Make informed marketing decisions based on real-time analytics',
      icon: Brain
>>>>>>> origin/cursor/website-audit-and-enhancement-0445
    }
  ];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
<<<<<<< HEAD
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 border border-orange-500/50 rounded-full text-orange-400 text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              AI-Powered Marketing
=======
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Marketing Automation
>>>>>>> origin/main
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Marketing with
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> AI Intelligence</span>
            </h1>
<<<<<<< HEAD
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your marketing with intelligent automation that personalizes campaigns, optimizes performance, 
              and delivers measurable ROI. Let AI handle the complexity while you focus on strategy.
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              AI-Powered Marketing Automation
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transform Your Marketing with
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}AI Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Automate your marketing campaigns with cutting-edge AI that learns, optimizes, and delivers results. 
              From email marketing to social media, our platform handles it all intelligently.
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
=======
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Leverage the power of artificial intelligence to automate, optimize, and scale your marketing campaigns. 
              Our AI-driven platform delivers personalized experiences that convert prospects into loyal customers.
>>>>>>> origin/main
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
<<<<<<< HEAD
                className="bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105"
=======
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
>>>>>>> origin/main
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
=======
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Brain className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Marketing Automation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your marketing with intelligent automation powered by artificial intelligence. 
              Optimize campaigns, personalize experiences, and drive results at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200">
                Watch Demo
              </button>
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
            </div>
<<<<<<< HEAD
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Key Benefits */}
=======
      {/* Features Section */}
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
<<<<<<< HEAD
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Marketing That Works Smarter
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI marketing automation platform delivers unprecedented results through intelligent optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:border-orange-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-orange-400 mb-2">{benefit.metric}</div>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
=======
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
=======
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
>>>>>>> origin/main
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
=======
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
>>>>>>> origin/main
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Features That Drive Results
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
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
<<<<<<< HEAD
=======
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
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
              </motion.div>
=======
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Powerful Features That Drive Results
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI marketing automation platform combines cutting-edge technology with proven strategies 
              to deliver exceptional results for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
=======
              </div>
>>>>>>> origin/main
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
=======
      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
>>>>>>> origin/main
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Marketing Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
<<<<<<< HEAD
              See how AI marketing automation transforms campaigns across different industries.
=======
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose AI Marketing Automation?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of marketing with intelligent automation that learns, adapts, and optimizes 
              your campaigns for maximum impact.
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<<<<<<< HEAD
=======
              From email campaigns to social media management, our AI platform handles every aspect of your marketing strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
>>>>>>> origin/main
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
<<<<<<< HEAD
              </motion.div>
=======
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose AI Marketing Automation?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience unprecedented growth and efficiency with our intelligent marketing solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Perfect For Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI marketing automation platform adapts to your specific needs and industry requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
=======
>>>>>>> origin/main
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl border transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/50 transform scale-105'
                    : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500 text-white">
                      <Star className="w-3 h-3 mr-1" />
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
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                      : 'border border-gray-600 text-white hover:border-purple-500 hover:text-purple-400'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A simple three-step process to revolutionize your marketing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">1. Connect & Analyze</h3>
              <p className="text-gray-300">
                Connect your data sources and let AI analyze customer behavior patterns and preferences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">2. AI Optimization</h3>
              <p className="text-gray-300">
                AI automatically optimizes campaigns, personalizes content, and targets the right audiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">3. Measure & Scale</h3>
              <p className="text-gray-300">
                Track performance in real-time and scale successful campaigns automatically.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
=======
>>>>>>> origin/main
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
=======
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Use Cases</h3>
              <div className="space-y-4">
                {useCases.map((useCase, index) => (
                  <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-cyan-400 mb-2">{useCase.title}</h4>
                    <p className="text-gray-300 text-sm">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations that are already leveraging AI to automate and optimize their marketing campaigns.
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI Marketing Automation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your marketing with AI-powered automation that personalizes experiences, 
              optimizes campaigns, and drives measurable results across all channels.
>>>>>>> origin/cursor/website-audit-and-enhancement-0445
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
                className="bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105"
=======
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
>>>>>>> origin/cursor/website-audit-and-enhancement-0445
              >
                Start Your Free Trial
              </Link>
              <Link
<<<<<<< HEAD
                to="/demo"
                className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-200"
              >
                Schedule Demo
              </Link>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of marketing automation and start seeing results today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200">
                Schedule Demo
              </button>
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
            </div>
          </motion.div>
=======
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses that have already revolutionized their marketing with AI automation.
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses that have already revolutionized their marketing with AI-powered automation. 
            Start your free trial today and see the difference AI can make.
>>>>>>> origin/main
=======
                to="/case-studies"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">AI Marketing Automation Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions that combine artificial intelligence with marketing expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      <p className="text-gray-400">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                  >
                    Get Started
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Marketing Channels Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Omnichannel Marketing Automation</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Seamlessly integrate and automate marketing across all customer touchpoints
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {channels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{channel.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{channel.description}</p>
                  <ul className="space-y-2 text-sm">
                    {channel.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-400">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose AI Marketing Automation?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of marketing with intelligent automation and AI-powered insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Marketing?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the marketing revolution with AI-powered automation that delivers results.
>>>>>>> origin/cursor/website-audit-and-enhancement-0445
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
<<<<<<< HEAD
<<<<<<< HEAD
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
=======
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200"
>>>>>>> origin/main
            >
              Schedule Demo
            </Link>
          </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
=======
>>>>>>> origin/main
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
};

export default AIMarketingAutomation;
=======
}
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
=======
}
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
=======
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Schedule a Demo
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/website-audit-and-enhancement-0445
