import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  PenTool, 
  Zap, 
  Brain, 
  FileText, 
  Image, 
  Video, 
  CheckCircle,
  ArrowRight,
  Star,
  Crown,
  Rocket,
  TrendingUp,
  Users,
  Clock,
  Globe,
  Cpu,
  Database,
  Network,
  Code,
  Server,
  Cloud,
  Heart,
  Leaf,
  DollarSign,
  Calendar,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Building,
  Gauge,
  GitFork,
  Atom,
  Smartphone,
  Truck,
  Factory,
  City,
  CheckCircle2,
  Search,
  Filter,
  Activity,
  Palette,
  Type,
  Camera,
  Mic,
  Play,
  Music,
  Layers,
  BarChart3,
  Share2,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIContentCreationStudio() {
  const features = [
    {
      title: 'AI Text Generation',
      description: 'Advanced language models that create engaging, SEO-optimized content',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Visual Content Creation',
      description: 'AI-powered image and video generation with custom branding',
      icon: Image,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Multi-Format Output',
      description: 'Create content for blogs, social media, emails, and marketing campaigns',
      icon: Layers,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Brand Voice Consistency',
      description: 'Maintain your unique brand voice across all content automatically',
      icon: Type,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'SEO Optimization',
      description: 'Built-in SEO tools to maximize content visibility and engagement',
      icon: TrendingUp,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Content Analytics',
      description: 'Track performance and optimize content strategy with AI insights',
      icon: BarChart3,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: 99,
      period: 'month',
      description: 'Perfect for individual creators and small businesses',
      features: [
        'AI text generation (up to 50 articles/month)',
        'Basic image generation (up to 100 images/month)',
        'Standard templates',
        'Email support',
        'Up to 3 users',
        'Basic SEO tools',
        'Content analytics (basic)'
      ],
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      popular: false
    },
    {
      name: 'Professional',
      price: 299,
      period: 'month',
      description: 'Ideal for growing businesses and content teams',
      features: [
        'Unlimited AI text generation',
        'Advanced image and video generation',
        'Custom brand voice training',
        'Priority support',
        'Up to 10 users',
        'Advanced SEO optimization',
        'Comprehensive analytics',
        'Custom templates'
      ],
      icon: Crown,
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 799,
      period: 'month',
      description: 'For large organizations requiring maximum content creation capacity',
      features: [
        'Full AI content creation suite',
        'Custom AI model training',
        'Dedicated content strategist',
        '24/7 priority support',
        'Unlimited users',
        'White-label solutions',
        'SLA guarantees',
        'On-site training'
      ],
      icon: Star,
      color: 'from-orange-500 to-red-500',
      popular: false
    }
  ];

  const benefits = [
    'Increase content production by up to 500%',
    'Reduce content creation costs by 70%',
    'Improve SEO rankings with optimized content',
    'Maintain consistent brand voice',
    'Scale content across multiple platforms',
    'Real-time content performance insights'
  ];

  const contentTypes = [
    {
      title: 'Blog Posts',
      description: 'SEO-optimized articles and blog content',
      icon: FileText,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Social Media',
      description: 'Engaging posts for all social platforms',
      icon: Share2,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Marketing Copy',
      description: 'Compelling ads and marketing materials',
      icon: Target,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Video Content',
      description: 'AI-generated video scripts and content',
      icon: Video,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <SEO 
        title="AI Content Creation Studio | Zion Tech Group"
        description="Revolutionize your content creation with our AI Content Creation Studio. Generate engaging, SEO-optimized content at scale with cutting-edge AI technology."
        keywords="AI content creation, content generation, AI writing, content marketing, SEO content, AI copywriting"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-medium mb-6">
              <PenTool className="w-4 h-4 mr-2" />
              AI-Powered Content Creation
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Content Creation
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Studio
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your content strategy with AI-powered creation. Generate engaging, 
              SEO-optimized content at scale while maintaining your unique brand voice.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="#demo"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-emerald-500/30 text-emerald-300 font-semibold hover:bg-emerald-500/10 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Content Creation
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our studio combines advanced AI with creative expertise to produce exceptional content
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 h-full hover:border-emerald-500/50 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Create Any Type of Content
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From blog posts to social media, our AI handles every content format
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((contentType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${contentType.color} mb-4`}>
                  <contentType.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{contentType.title}</h3>
                <p className="text-gray-300">{contentType.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your content creation needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} mb-6`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700'
                        : 'border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Studio?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience unprecedented content creation efficiency with AI technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Content?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators already experiencing the future of AI-powered content creation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-emerald-500/30 text-emerald-300 font-semibold hover:bg-emerald-500/10 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}