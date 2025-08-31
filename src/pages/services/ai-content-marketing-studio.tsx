import React from 'react';
import { motion } from 'framer-motion';
import { SEOOptimizer } from '../../components/SEOOptimizer';
import { 
  PenTool, 
  TrendingUp, 
  BarChart3, 
  Target, 
  Zap, 
  Shield, 
  Globe, 
  Clock, 
  DollarSign, 
  CheckCircle,
  ArrowRight,
  Brain,
  Cpu,
  Database,
  Network,
  Activity,
  Users,
  Building2,
  Rocket,
  Lightbulb,
  Star,
  Phone,
  Mail,
  MapPin,
  Eye,
  MousePointer,
  FileText,
  MessageCircle,
  Analytics,
  Monitor,
  Smartphone,
  Laptop,
  Palette,
  Camera,
  Video,
  Mic,
  Edit3,
  Share2,
  Heart,
  BookOpen
} from 'lucide-react';

const AIContentMarketingStudio = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Content Generation",
      description: "Advanced AI algorithms that create high-quality, engaging content across all formats including blogs, social media, and marketing copy."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Audience Intelligence",
      description: "AI-powered audience analysis that identifies content preferences, engagement patterns, and optimal posting times for maximum reach."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Content Performance Analytics",
      description: "Real-time analytics and predictive insights that optimize content strategy and maximize engagement across all channels."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Channel Distribution",
      description: "Automated content distribution across social media, email, blogs, and other channels with platform-specific optimization."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Brand Voice Consistency",
      description: "AI ensures consistent brand messaging and tone across all content while maintaining authenticity and engagement."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "ROI Measurement",
      description: "Comprehensive tracking of content performance, conversion rates, and return on investment across all marketing campaigns."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$1,800",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "AI Content Generation (up to 50 pieces/month)",
        "Basic Audience Analysis",
        "Social Media Management",
        "Content Calendar Planning",
        "Email Support",
        "Basic Analytics Dashboard"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$3,500",
      period: "/month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "AI Content Generation (up to 200 pieces/month)",
        "Advanced Audience Intelligence",
        "Multi-Channel Distribution",
        "Brand Voice Optimization",
        "Priority Support",
        "Custom Content Strategies",
        "Advanced Analytics"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$8,000",
      period: "/month",
      description: "For large-scale content operations",
      features: [
        "Unlimited Content Generation",
        "Custom AI Models",
        "White-label Solutions",
        "24/7 Dedicated Support",
        "API Access",
        "Advanced Security Features",
        "Custom Development"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: "Content Engagement",
      value: "250%",
      description: "Average increase in content engagement rates"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-400" />,
      title: "Audience Reach",
      value: "180%",
      description: "Expanded audience reach across channels"
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-400" />,
      title: "Content Views",
      value: "300%",
      description: "More content views and impressions"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-cyan-400" />,
      title: "Marketing ROI",
      value: "400%",
      description: "Improved return on marketing investment"
    }
  ];

  const contentTypes = [
    {
      icon: <FileText className="w-12 h-12 text-zion-cyan" />,
      title: "Blog Posts & Articles",
      description: "SEO-optimized long-form content that drives organic traffic and establishes thought leadership."
    },
    {
      icon: <Share2 className="w-12 h-12 text-zion-purple" />,
      title: "Social Media Content",
      description: "Engaging posts, stories, and campaigns optimized for each platform's unique audience."
    },
    {
      icon: <Mail className="w-12 h-12 text-zion-green" />,
      title: "Email Marketing",
      description: "Personalized email campaigns with AI-driven segmentation and automation."
    },
    {
      icon: <Video className="w-12 h-12 text-zion-orange" />,
      title: "Video Content",
      description: "Short-form videos, tutorials, and promotional content for maximum engagement."
    },
    {
      icon: <Camera className="w-12 h-12 text-zion-pink" />,
      title: "Visual Content",
      description: "Infographics, images, and visual assets that enhance brand storytelling."
    },
    {
      icon: <Mic className="w-12 h-12 text-zion-yellow" />,
      title: "Podcast Content",
      description: "Audio content and show notes optimized for discoverability and engagement."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="AI Content Marketing Studio | Zion Tech Group"
        description="Revolutionize your content marketing with our AI-powered studio. Create engaging content, optimize for all channels, and maximize audience engagement with intelligent automation."
        keywords="AI content marketing, content generation, social media marketing, email marketing, content optimization, marketing automation"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/10 border border-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
              <PenTool className="w-4 h-4 mr-2" />
              AI Content Marketing
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI Content
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Marketing Studio</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your content marketing with intelligent AI automation, audience intelligence, and multi-channel optimization. 
              Create engaging content that drives results across all platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Content Marketing Studio Demo"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Request Demo
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 (302) 464-0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Content Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our AI studio combines cutting-edge technology with proven marketing strategies to deliver unprecedented content performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-zion-cyan mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-zion-slate-light leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Content for Every Channel
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our AI studio creates optimized content for every platform and audience, ensuring maximum engagement and reach.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((contentType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 border border-zion-purple/20 rounded-xl p-8 text-center hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex justify-center mb-6">
                  {contentType.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {contentType.title}
                </h3>
                <p className="text-zion-slate-light leading-relaxed">
                  {contentType.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Join hundreds of companies already transforming their content marketing with our AI-powered studio.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {benefit.value}
                </div>
                <h3 className="text-lg font-semibold text-zion-cyan mb-2">
                  {benefit.title}
                </h3>
                <p className="text-zion-slate-light text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the plan that fits your content marketing needs. All plans include our core AI features and dedicated support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-zion-slate-dark/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/20' 
                    : 'border-zion-purple/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-zion-slate-light mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan/90 hover:to-zion-purple/90'
                    : 'bg-zion-slate-dark border border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10'
                }">
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Content Marketing?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join the future of content marketing with AI-powered creation and intelligent optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Content Marketing Studio Demo"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-zion-cyan mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                +1 (302) 464-0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-zion-cyan mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-zion-cyan mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-zion-slate-light">
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

export default AIContentMarketingStudio;