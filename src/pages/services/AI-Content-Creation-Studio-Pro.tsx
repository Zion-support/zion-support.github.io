import React from 'react';
import { motion } from 'framer-motion';
import { 
  PenTool, 
  Brain, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Users, 
  Globe, 
  BarChart3, 
  Shield, 
  Clock, 
  TrendingUp, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink,
  FileText,
  Image,
  Video,
  Music,
  Palette,
  Target,
  Award,
  Rocket,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Lock,
  Eye,
  Search,
  Filter,
  Settings,
  Download,
  Upload,
  Share2,
  Copy,
  Edit3,
  Trash2,
  Save,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  RotateCcw,
  RotateCw,
  Crop,
  Scissors,
  Type,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Indent,
  Outdent,
  Quote,
  Code,
  Link,
  Unlink,
  Image as ImageIcon,
  Video as VideoIcon,
  Music as MusicIcon,
  File as FileIcon,
  Folder,
  Calendar,
  Clock as ClockIcon,
  Bell,
  Heart,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Send,
  Smile,
  Frown,
  Meh,
  Plus,
  Minus,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  MoreVertical,
  Grid,
  Layout,
  Sidebar,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Desktop,
  Server,
  Cloud,
  Wifi,
  Bluetooth,
  Battery,
  Power,
  WifiOff,
  BluetoothOff,
  BatteryOff,
  PowerOff
} from 'lucide-react';

export default function AIContentCreationStudioPro() {
  const features = [
    {
      category: 'Content Generation',
      items: [
        {
          name: 'Multi-Format Content Creation',
          description: 'Generate blogs, social media posts, emails, whitepapers, and more with AI-powered writing assistance',
          icon: FileText,
          benefits: ['10x faster content creation', 'Consistent brand voice', 'SEO-optimized content']
        },
        {
          name: 'AI Writing Assistant',
          description: 'Advanced AI writing tools with GPT-4 and Claude 3.5 integration for human-like content generation',
          icon: Brain,
          benefits: ['Natural language generation', 'Context-aware writing', 'Multiple writing styles']
        },
        {
          name: 'Video Content Generation',
          description: 'Create engaging video content with AI-generated scripts, voiceovers, and visual elements',
          icon: Video,
          benefits: ['Automated video scripts', 'AI voice synthesis', 'Visual content creation']
        },
        {
          name: 'Image Generation & Editing',
          description: 'Generate and edit images using AI with custom styles, branding, and professional quality',
          icon: Image,
          benefits: ['AI image generation', 'Brand-consistent visuals', 'Professional editing tools']
        }
      ]
    },
    {
      category: 'SEO & Optimization',
      items: [
        {
          name: 'SEO Optimization Engine',
          description: 'Automatic SEO optimization with keyword research, meta tags, and content structure analysis',
          icon: Search,
          benefits: ['Keyword optimization', 'Meta tag generation', 'Content structure analysis']
        },
        {
          name: 'Content Performance Analytics',
          description: 'Track content performance with detailed analytics, engagement metrics, and optimization recommendations',
          icon: BarChart3,
          benefits: ['Performance tracking', 'Engagement metrics', 'Optimization insights']
        },
        {
          name: 'Competitive Analysis',
          description: 'Analyze competitor content and identify opportunities for improvement and differentiation',
          icon: TrendingUp,
          benefits: ['Competitor insights', 'Opportunity identification', 'Market positioning']
        }
      ]
    },
    {
      category: 'Brand & Voice Management',
      items: [
        {
          name: 'Brand Voice Training',
          description: 'Train AI to understand and maintain your unique brand voice across all content',
          icon: Target,
          benefits: ['Consistent messaging', 'Brand personality', 'Voice customization']
        },
        {
          name: 'Content Style Guide',
          description: 'Maintain consistent content style with automated style checking and brand compliance',
          icon: Palette,
          benefits: ['Style consistency', 'Brand compliance', 'Automated checking']
        },
        {
          name: 'Multi-Language Support',
          description: 'Create content in 50+ languages with automatic translation and cultural adaptation',
          icon: Globe,
          benefits: ['Global reach', 'Cultural adaptation', 'Language optimization']
        }
      ]
    },
    {
      category: 'Collaboration & Workflow',
      items: [
        {
          name: 'Team Collaboration Tools',
          description: 'Collaborate with team members on content creation, review, and approval workflows',
          icon: Users,
          benefits: ['Team collaboration', 'Review workflows', 'Approval processes']
        },
        {
          name: 'Content Calendar Management',
          description: 'Plan and schedule content with automated publishing and social media integration',
          icon: Calendar,
          benefits: ['Content planning', 'Automated publishing', 'Social media integration']
        },
        {
          name: 'Version Control & History',
          description: 'Track content changes, maintain version history, and collaborate on iterations',
          icon: History,
          benefits: ['Change tracking', 'Version history', 'Collaboration support']
        }
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 10,000 words/month',
        'Basic AI writing assistance',
        '5 content templates',
        'Basic SEO optimization',
        'Email support',
        'Basic analytics'
      ],
      popular: false,
      cta: 'Get Started',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'Up to 100,000 words/month',
        'Advanced AI writing with GPT-4',
        'Unlimited content templates',
        'Full SEO optimization suite',
        'Priority email support',
        'Advanced analytics & reporting',
        'Team collaboration tools',
        'API access',
        'Custom brand voice training'
      ],
      popular: true,
      cta: 'Start Free Trial',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with advanced needs',
      features: [
        'Unlimited content generation',
        'All AI models included',
        'Custom AI model training',
        'Advanced security & compliance',
        'Dedicated account manager',
        'Custom integrations',
        'White-label solutions',
        'Advanced workflow automation',
        'Multi-language optimization',
        'Priority phone support'
      ],
      popular: false,
      cta: 'Contact Sales',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const benefits = [
    {
      title: '10x Faster Content Creation',
      description: 'Generate high-quality content in minutes instead of hours with AI-powered writing assistance',
      icon: Zap,
      metric: '10x',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Improved SEO Rankings',
      description: 'Automatically optimize content for search engines with our advanced SEO engine',
      icon: TrendingUp,
      metric: '40%',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Consistent Brand Messaging',
      description: 'Maintain consistent brand voice and messaging across all content channels',
      icon: Target,
      metric: '100%',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Reduced Content Costs',
      description: 'Significantly reduce content creation costs while maintaining quality and consistency',
      icon: DollarSign,
      metric: '60%',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const useCases = [
    {
      industry: 'Marketing & Advertising',
      description: 'Create compelling marketing campaigns, social media content, and advertising copy',
      examples: ['Social media posts', 'Email campaigns', 'Ad copy', 'Landing pages'],
      icon: Target
    },
    {
      industry: 'E-commerce',
      description: 'Generate product descriptions, marketing content, and customer communications',
      examples: ['Product descriptions', 'Category pages', 'Email marketing', 'Social media'],
      icon: ShoppingCart
    },
    {
      industry: 'B2B Services',
      description: 'Create professional content for thought leadership, case studies, and client communications',
      examples: ['Whitepapers', 'Case studies', 'Blog posts', 'Client proposals'],
      icon: Building
    },
    {
      industry: 'Media & Publishing',
      description: 'Generate articles, blog posts, and digital content for various platforms',
      examples: ['Blog articles', 'News content', 'Feature stories', 'Opinion pieces'],
      icon: FileText
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <PenTool className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Content Creation Studio Pro
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Revolutionize your content creation with our advanced AI-powered platform. 
              Generate high-quality, SEO-optimized content across multiple formats in minutes, 
              not hours. Maintain consistent brand voice while scaling your content production exponentially.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                <Star className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose AI Content Creation Studio Pro?</h2>
          <p className="text-xl text-gray-300">Transform your content creation process with cutting-edge AI technology</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{benefit.metric}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-300">Everything you need to create, optimize, and manage content at scale</p>
        </div>

        {features.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">{category.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">{item.name}</h4>
                      <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                      <ul className="space-y-1">
                        {item.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2 text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Use Cases */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Perfect For Every Industry</h2>
          <p className="text-xl text-gray-300">Discover how different industries leverage our AI content creation platform</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.industry}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <useCase.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{useCase.industry}</h3>
              </div>
              <p className="text-gray-300 mb-4">{useCase.description}</p>
              <div className="space-y-2">
                <h4 className="text-white font-medium">Examples:</h4>
                <ul className="space-y-1">
                  {useCase.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-center space-x-2 text-gray-300 text-sm">
                      <ArrowRight className="w-3 h-3 text-blue-400" />
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-300">Choose the plan that fits your content creation needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 ${
                plan.popular 
                  ? 'border-blue-500 ring-2 ring-blue-500/20' 
                  : 'border-white/20'
              } hover:border-white/40 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300">{plan.period}</span>
                </div>
                <p className="text-gray-300 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                  : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Content Creation?</h2>
          <p className="text-xl text-gray-300">Get in touch with our team to learn more about AI Content Creation Studio Pro</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-green-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-purple-400 mt-0.5" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <ExternalLink className="w-5 h-5 text-orange-400" />
                <a 
                  href={contactInfo.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {contactInfo.website}
                </a>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg">
              <h4 className="text-white font-semibold mb-3">Why Choose Zion Tech Group?</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Industry-leading AI technology expertise</li>
                <li>• Proven track record of successful implementations</li>
                <li>• 24/7 technical support and maintenance</li>
                <li>• Competitive pricing with premium features</li>
                <li>• Global network of technology partners</li>
                <li>• Future-proof technology solutions</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Request a Demo</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your company name"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your content creation needs..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 inline mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Creating Amazing Content Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already transforming their content creation with AI Content Creation Studio Pro. 
            Experience the future of content creation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Star className="w-5 h-5" />
              <span>Start Free Trial</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Contact Sales</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Placeholder icon components
const History = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ShoppingCart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
  </svg>
);

const Building = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const DollarSign = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
  </svg>
);