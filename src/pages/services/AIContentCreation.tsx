import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  PenTool, 
  Brain, 
  Shield, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Award, 
  Clock, 
  DollarSign,
  Database,
  BarChart3,
  Zap,
  Globe,
  Lock,
  Eye,
  Activity,
  TrendingUp,
  FileText,
  Search,
  Target,
  MessageSquare,
  Image,
  Video,
  Music,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function AIContentCreation() {
  const features = [
    { icon: PenTool, title: 'AI Content Generation', description: 'Generate high-quality, engaging content across multiple formats and languages' },
    { icon: Search, title: 'SEO Optimization', description: 'AI-powered SEO optimization for maximum search engine visibility' },
    { icon: Target, title: 'Audience Targeting', description: 'Intelligent content personalization based on audience demographics and behavior' },
    { icon: BarChart3, title: 'Performance Analytics', description: 'Comprehensive analytics to track content performance and ROI' },
    { icon: MessageSquare, title: 'Social Media Automation', description: 'Automated social media content creation and scheduling' },
    { icon: Zap, title: 'Multi-format Support', description: 'Create content for blogs, social media, emails, and marketing campaigns' }
  ];

  const benefits = [
    { icon: CheckCircle, title: '10x Faster Creation', description: 'Generate content 10x faster than traditional methods' },
    { icon: DollarSign, title: 'Cost Reduction', description: 'Reduce content creation costs by 60-80%' },
    { icon: Users, title: 'Increased Engagement', description: 'Improve audience engagement by 40-70%' },
    { icon: Shield, title: 'Brand Consistency', description: 'Maintain consistent brand voice across all content' },
    { icon: Zap, title: 'Scalable Solution', description: 'Scale content production without increasing team size' },
    { icon: TrendingUp, title: 'Better SEO Results', description: 'Improve search rankings and organic traffic' }
  ];

  const contentTypes = [
    { title: 'Blog Posts & Articles', description: 'SEO-optimized blog content and long-form articles', icon: FileText },
    { title: 'Social Media Content', description: 'Engaging posts for all major social platforms', icon: MessageSquare },
    { title: 'Email Marketing', description: 'Personalized email campaigns and newsletters', icon: Mail },
    { title: 'Marketing Copy', description: 'Compelling ad copy and marketing materials', icon: Target },
    { title: 'Product Descriptions', description: 'SEO-optimized product descriptions and catalog content', icon: ShoppingCart },
    { title: 'Video Scripts', description: 'Professional video scripts and storyboards', icon: Video }
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$800',
      period: 'monthly',
      description: 'Perfect for small businesses and startups',
      features: ['Up to 50 content pieces/month', 'Basic AI generation', 'SEO optimization', 'Standard support', '2 content formats'],
      cta: 'Get Started',
      popular: false
    },
    {
      plan: 'Professional',
      price: '$1,800',
      period: 'monthly',
      description: 'Ideal for growing businesses and agencies',
      features: ['Up to 200 content pieces/month', 'Advanced AI generation', 'Priority support', 'All content formats', 'Analytics dashboard', 'Custom templates'],
      cta: 'Get Started',
      popular: true
    },
    {
      plan: 'Enterprise',
      price: 'Custom',
      period: 'monthly',
      description: 'For large organizations with high content needs',
      features: ['Unlimited content pieces', 'Custom AI models', '24/7 dedicated support', 'White-label options', 'API access', 'Custom integrations'],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-400 text-sm font-medium mb-6">
              <PenTool className="w-4 h-4 mr-2" />
              AI Content Creation
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6">
              AI Content Creation
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your content marketing with AI-powered content generation, optimization, and automation. 
              Create engaging, SEO-optimized content at scale while maintaining your brand voice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get Your Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center px-8 py-4 border border-blue-400/50 text-blue-400 hover:bg-blue-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced AI Content Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge natural language processing with content marketing expertise 
              to deliver engaging, optimized content that drives results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 mb-4 inline-block">
                  <feature.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Content Creation?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver measurable improvements in content performance, efficiency, and ROI through 
              our proven AI technology and content marketing expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 mb-4 inline-block">
                  <benefit.icon className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Content Types We Create
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform generates high-quality content across all major formats and platforms 
              to meet your comprehensive content marketing needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentTypes.map((contentType, index) => (
              <motion.div
                key={contentType.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:border-blue-400/30 transition-all duration-300 text-center"
              >
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 mb-4 inline-block">
                  <contentType.icon className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{contentType.title}</h3>
                <p className="text-gray-400">{contentType.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your content creation needs and scale as your business grows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 backdrop-blur-xl rounded-2xl border p-8 ${
                  plan.popular 
                    ? 'border-blue-400/50 ring-2 ring-blue-400/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold rounded-full">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-1">{plan.price}</div>
                  <div className="text-gray-400">{plan.period}</div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.plan === 'Enterprise' ? '/contact' : '/request-quote'}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white transform hover:scale-105 shadow-lg hover:shadow-blue-500/25'
                      : 'border border-blue-400/50 text-blue-400 hover:bg-blue-400/10'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-3xl p-12 border border-blue-400/20"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Content?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI content creation platform can boost your content marketing, 
              improve SEO rankings, and drive more engagement with your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-blue-400/50 text-blue-400 hover:bg-blue-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}