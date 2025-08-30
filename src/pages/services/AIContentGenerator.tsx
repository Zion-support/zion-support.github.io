import React from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { Link  } from 'react-router-dom.ts';
import { PenTool, Brain, Zap, Shield, BarChart3, Smartphone, Globe, TrendingUp, Target, Bell, Settings, FileText, Database, Cloud, Server, Award, BookOpen, Users, Clock, CheckCircle, Edit3, Type, Image, Video, Music  } from 'lucide-react.ts';
import { SEO  } from '@/components/SEO';

export default function AIContentGenerator(...args[]):  {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Writing",
      description: "Advanced language models that generate high-quality, engaging content in multiple styles and tones."
    },
    {
      icon: PenTool,
      title: "Multi-format Content",
      description: "Create blog posts, articles, social media content, emails, and marketing copy with AI assistance."
    },
    {
      icon: Zap,
      title: "Instant Generation",
      description: "Generate content in seconds with customizable templates and intelligent suggestions."
    },
    {
      icon: BarChart3,
      title: "SEO Optimization",
      description: "AI-powered SEO recommendations and keyword optimization for better search rankings."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Create and edit content on  device with our responsive platform and mobile apps."
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Generate content in over 50 languages with native-level quality and cultural adaptation."
    }
  ];

  const contentTypes = [
    {
      icon: Edit3,
      title: "Blog Posts & Articles",
      description: "Long-form content with research, citations, and engaging narratives"
    },
    {
      icon: Type,
      title: "Social Media Content",
      description: "Platform-optimized posts for Twitter, LinkedIn, Instagram, and Facebook"
    },
    {
      icon: FileText,
      title: "Marketing Copy",
      description: "Compelling ad copy, landing pages, and promotional materials"
    },
    {
      icon: Mail,
      title: "Email Campaigns",
      description: "Newsletters, drip campaigns, and personalized email content"
    },
    {
      icon: Image,
      title: "Visual Content",
      description: "AI-generated images, infographics, and visual assets"
    },
    {
      icon: Video,
      title: "Video Scripts",
      description: "Scripts for YouTube, TikTok, and marketing videos"
    }
  ];

  const pricingPlans = [
    {
      name: "Content Creator",
      price: "$39",
      period: "/month",
      description: "Perfect for individual creators and small businesses",
      features[
        "Up to 100 content pieces/month",
        "Basic AI writing tools",
        "5 content templates",
        "Standard SEO suggestions",
        "Mobile app access",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Content Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses and content teams",
      features[
        "Up to 500 content pieces/month",
        "Advanced AI capabilities",
        "Unlimited templates",
        "Advanced SEO tools",
        "Priority support",
        "API access",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Content Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations with high-volume content needs",
      features[
        "Unlimited content generation",
        "Custom AI models",
        "White-label solutions",
        "Dedicated content manager",
        "Advanced analytics",
        "Custom training",
        "On-premise options"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Save Time & Resources",
      description: "Generate high-quality content in minutes instead of hours, freeing up your team for strategic work.",
      icon: Clock
    },
    {
      title: "Improve Content Quality",
      description: "AI-powered suggestions and optimization improve readability, engagement, and SEO performance.",
      icon: TrendingUp
    },
    {
      title: "Scale Content Production",
      description: "Create unlimited content without increasing headcount or compromising quality.",
      icon: Globe
    },
    {
      title: "Maintain Brand Consistency",
      description: "Ensure all content follows your brand guidelines and voice with AI-powered style guides.",
      icon: Shield
    }
  ];

  const useCases = [
    {
      icon: Users,
      title: "Marketing Teams",
      description: "Generate campaign content, social media posts, and promotional materials"
    },
    {
      icon: BookOpen,
      title: "Content Creators",
      description: "Create blog posts, articles, and long-form content efficiently"
    },
    {
      icon: Globe,
      title: "E-commerce",
      description: "Generate product descriptions, category pages, and marketing copy"
    },
    {
      icon: Settings,
      title: "Agencies",
      description: "Scale client content production with AI-powered tools"
    },
    {
      icon: Target,
      title: "Startups",
      description: "Create professional content without large marketing budgets"
    },
    {
      icon: Award,
      title: "Enterprises",
      description: "Maintain consistent brand voice across global content operations"
    }
  ];

  return (
    <>
      <SEO 
        title="AI Content Generator - Zion Tech Group"
        description="Professional AI-powered content generation platform for creating high-quality blog posts, social media content, marketing copy, and more with intelligent automation."
        canonical="/services/ai-content-generator"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
                    AI Content Generator
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  Professional AI-powered content generation platform for creating high-quality blog posts, social media content, 
                  marketing copy, and more. Transform your content creation with intelligent automation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/request-quote"
                    className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/contact"
                    className="px-8 py-4 border-2 border-pink-500 text-pink-400 rounded-lg font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300"
                  >
                    Schedule Demo
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Powerful AI Content Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create engaging, high-quality content with AI assistance
              </p>
            </div>
            
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-pink-500 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Create Any Type of Content
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From blog posts to social media content, our AI handles it all
              </p>
            </div>
            
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
              {contentTypes.map((type, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{type.title}</h3>
                  <p className="text-gray-300">{type.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Perfect for Every Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Whether you're a solo creator or enterprise team, our platform scales with you
              </p>
            </div>
            
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-pink-500 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Why Choose Our AI Content Platform?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional content creation tools that transform how you write and publish
              </p>
            </div>
            
            <div className="grid md: grid-cols-2 gap-8">
              {benefits.map((benefit, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Transparent Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the content generation plan that fits your needs
              </p>
            </div>
            
            <div className="grid md: grid-cols-3 gap-8">
              {pricingPlans.map((plan, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular 
                      ? 'border-pink-500 ring-2 ring-pink-500/20' 
                      : 'border-slate-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/request-quote"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-pink-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Content Creation?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of creators using our AI platform to generate amazing content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/request-quote"
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/contact"
                  className="px-8 py-4 border-2 border-pink-500 text-pink-400 rounded-lg font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300"
                >
                  Contact Sales
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )}