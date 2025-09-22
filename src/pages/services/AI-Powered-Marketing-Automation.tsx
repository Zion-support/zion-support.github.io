import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  TrendingUp, 
  BarChart3, 
  MessageCircle, 
  Users, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  Brain,
  Mail,
  Smartphone,
  Globe
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';

const AIPoweredMarketingAutomation = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Audience Targeting",
      description: "Intelligent customer segmentation and targeting using advanced machine learning algorithms",
      benefits: ["Behavioral analysis", "Predictive modeling", "Dynamic audience creation"]
    },
    {
      icon: MessageCircle,
      title: "Multi-Channel Campaign Automation",
      description: "Seamlessly orchestrate campaigns across email, social media, SMS, and web channels",
      benefits: ["Cross-channel consistency", "Automated workflows", "Real-time optimization"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics & Insights",
      description: "Comprehensive campaign performance tracking with AI-driven recommendations",
      benefits: ["ROI optimization", "Conversion tracking", "Predictive insights"]
    },
    {
      icon: Target,
      title: "Personalized Content Generation",
      description: "AI-generated personalized content for every customer touchpoint",
      benefits: ["Dynamic content creation", "A/B testing automation", "Personalization at scale"]
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "CMO, GrowthTech Solutions",
      content: "Increased our conversion rates by 85% and reduced campaign setup time by 70%.",
      rating: 5
    },
    {
      name: "David Park",
      role: "Marketing Director, InnovateCorp",
      content: "The AI insights have revolutionized our marketing strategy. Incredible results!",
      rating: 5
    }
  ];

  const channels = [
    { icon: Mail, name: "Email Marketing", description: "Automated email campaigns with personalization" },
    { icon: Smartphone, name: "SMS Marketing", description: "Targeted SMS campaigns and notifications" },
    { icon: Globe, name: "Social Media", description: "Multi-platform social media automation" },
    { icon: Target, name: "Web Personalization", description: "Dynamic website content and experiences" }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$299",
      period: "month",
      description: "Perfect for small businesses",
      features: [
        "Up to 10,000 contacts",
        "Basic automation workflows",
        "Email & SMS campaigns",
        "Standard analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "month",
      description: "Ideal for growing companies",
      features: [
        "Up to 50,000 contacts",
        "Advanced AI targeting",
        "Multi-channel campaigns",
        "Advanced analytics",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Unlimited contacts",
        "Custom AI models",
        "White-label solution",
        "Dedicated account manager",
        "Advanced integrations"
      ],
      popular: false
    }
  ];

  return (
    <>
      <SEO 
        title="AI-Powered Marketing Automation Platform - Zion Tech Group"
        description="Revolutionize your marketing with AI-driven automation, intelligent targeting, and multi-channel campaigns. Boost conversions and ROI."
        keywords="AI marketing automation, intelligent targeting, multi-channel campaigns, marketing analytics, customer segmentation"
      />
      
      <div className="min-h-screen bg-futuristic">
        {/* Hero Section */}
        <motion.section 
          className="pt-32 pb-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-zion-cyan to-zion-blue mb-8"
            >
              <Target className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Marketing Automation
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your marketing strategy with AI-driven automation, intelligent audience targeting, 
              and multi-channel campaign orchestration. Maximize ROI and customer engagement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="btn-futuristic inline-flex items-center"
              >
                Get Started <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="btn-futuristic-outline inline-flex items-center"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced Marketing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge AI technology to create, optimize, and scale your marketing campaigns
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 hover:border-zion-cyan/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-zion-cyan to-zion-blue mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Marketing Channels */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Multi-Channel Marketing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Reach your customers across all touchpoints with integrated marketing channels
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {channels.map((channel, index) => (
                <motion.div
                  key={channel.name}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-zion-cyan/50 transition-all duration-300 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-zion-cyan to-zion-blue mb-4">
                    <channel.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{channel.name}</h3>
                  <p className="text-sm text-gray-300">{channel.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { value: "85%", label: "Conversion Rate Increase", icon: TrendingUp },
                { value: "70%", label: "Campaign Setup Time Reduction", icon: Clock },
                { value: "95%", label: "Targeting Accuracy", icon: Target },
                { value: "24/7", label: "Automated Campaign Management", icon: Zap }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-zion-cyan to-zion-blue mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-lg font-semibold text-zion-cyan">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Marketing Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how leading brands are transforming their marketing with our AI platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-zion-cyan">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Pricing Section */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your marketing automation needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  className={`relative bg-slate-800/50 rounded-xl p-8 border transition-all duration-300 ${
                    plan.popular 
                      ? 'border-zion-cyan/50 ring-2 ring-zion-cyan/20' 
                      : 'border-slate-700/50'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      {plan.period && (
                        <span className="text-gray-300 ml-2">/{plan.period}</span>
                      )}
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/request-quote"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:shadow-lg hover:shadow-zion-cyan/25'
                        : 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies already using our AI-powered platform to boost conversions and ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="btn-futuristic inline-flex items-center"
              >
                Start Free Trial <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="btn-futuristic-outline inline-flex items-center"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default AIPoweredMarketingAutomation;