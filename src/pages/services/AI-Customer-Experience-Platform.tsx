import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Zap,
  TrendingUp,
  Shield,
  Users,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Play,
  BarChart3,
  MessageCircle,
  Heart,
  Star,
  Smile,
  Target,
  Award,
  Phone,
  Mail,
  MapPin,
  Calendar,
  FileText,
  Code,
  Settings,
  Monitor,
  AlertTriangle,
  Lightbulb,
  Rocket,
  Sparkles,
  Eye,
  Search,
  Filter,
  Download,
  Share2,
  RefreshCw,
  Zap as ZapIcon,
  Globe2,
  Smartphone,
  Tablet,
  Laptop,
  Headphones,
  UserCheck,
  ThumbsUp,
  TrendingDown,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  Users2,
  UserPlus,
  UserMinus,
  UserX,
  UserCheck2,
  UserClock,
  UserStar,
  UserHeart,
  UserZap,
  UserShield,
  UserCog,
  UserEdit,
  UserSettings,
  UserSearch,
  UserVoice,
  UserVideo,
  UserImage,
  UserFile,
  UserFolder,
  UserDatabase,
  UserCloud,
  UserNetwork,
  UserServer,
  UserMonitor,
  UserLaptop,
  UserSmartphone,
  UserTablet,
  UserWatch,
  UserGlasses,
  UserHat,
  UserTie,
  UserSuit,
  UserDress,
  UserShirt,
  UserPants,
  UserShoes,
  UserBag,
  UserWallet,
  UserKey,
  UserLock,
  UserUnlock,
  UserKeyhole,
  UserFingerprint,
  UserEye,
  UserEar,
  UserNose,
  UserMouth,
  UserTongue,
  UserTeeth,
  UserHair,
  UserBeard,
  UserMustache,
  UserGlasses2,
  UserHat2,
  UserTie2,
  UserSuit2,
  UserDress2,
  UserShirt2,
  UserPants2,
  UserShoes2,
  UserBag2,
  UserWallet2,
  UserKey2,
  UserLock2,
  UserUnlock2,
  UserKeyhole2,
  UserFingerprint2,
  UserEye2,
  UserEar2,
  UserNose2,
  UserMouth2,
  UserTongue2,
  UserTeeth2,
  UserHair2,
  UserBeard2,
  UserMustache2
} from 'lucide-react';

const AICustomerExperiencePlatform: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Personalization',
      description: 'Machine learning algorithms that understand customer behavior and deliver personalized experiences',
      benefits: ['Dynamic content', 'Personalized recommendations', 'Behavioral targeting', 'Predictive personalization']
    },
    {
      icon: MessageCircle,
      title: 'Omnichannel Communication',
      description: 'Seamless customer interactions across all channels with unified messaging',
      benefits: ['Email, SMS, Chat', 'Social media integration', 'Voice & video calls', 'Unified inbox']
    },
    {
      icon: Heart,
      title: 'Sentiment Analysis',
      description: 'Real-time emotion detection and sentiment tracking for proactive customer care',
      benefits: ['Emotion detection', 'Sentiment scoring', 'Mood tracking', 'Proactive alerts']
    },
    {
      icon: Users,
      title: 'Customer Journey Mapping',
      description: 'Visualize and optimize every touchpoint in the customer lifecycle',
      benefits: ['Journey visualization', 'Touchpoint analysis', 'Optimization suggestions', 'Conversion tracking']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive insights into customer behavior, satisfaction, and loyalty metrics',
      benefits: ['Behavioral analytics', 'Satisfaction scores', 'Loyalty metrics', 'ROI tracking']
    },
    {
      icon: Shield,
      title: 'Privacy & Compliance',
      description: 'Enterprise-grade security with GDPR, CCPA, and SOC2 compliance',
      benefits: ['Data encryption', 'Privacy controls', 'Compliance reporting', 'Audit trails']
    }
  ];

  const customerTouchpoints = [
    {
      stage: 'Awareness',
      touchpoints: ['Social media', 'Content marketing', 'SEO/PPC', 'Influencer partnerships'],
      aiFeatures: ['Content optimization', 'Audience targeting', 'Trend prediction', 'ROI optimization']
    },
    {
      stage: 'Consideration',
      touchpoints: ['Website experience', 'Product demos', 'Case studies', 'Webinars'],
      aiFeatures: ['Personalized content', 'Dynamic pricing', 'Recommendation engine', 'A/B testing']
    },
    {
      stage: 'Purchase',
      touchpoints: ['Checkout process', 'Payment options', 'Order confirmation', 'Welcome series'],
      aiFeatures: ['Fraud detection', 'Payment optimization', 'Upsell suggestions', 'Loyalty rewards']
    },
    {
      stage: 'Retention',
      touchpoints: ['Customer support', 'Product usage', 'Feedback collection', 'Loyalty programs'],
      aiFeatures: ['Predictive support', 'Usage analytics', 'Sentiment analysis', 'Churn prevention']
    }
  ];

  const industrySolutions = [
    {
      industry: 'E-commerce & Retail',
      challenges: ['Cart abandonment', 'Customer retention', 'Personalization', 'Customer service'],
      solutions: ['AI-powered recommendations', 'Behavioral retargeting', 'Chatbot support', 'Loyalty optimization'],
      roi: '250-400%',
      metrics: ['Conversion rates', 'Customer lifetime value', 'Cart abandonment', 'Repeat purchases']
    },
    {
      industry: 'SaaS & Technology',
      challenges: ['User onboarding', 'Feature adoption', 'Customer success', 'Churn reduction'],
      solutions: ['Smart onboarding flows', 'Feature discovery', 'Success tracking', 'Predictive churn'],
      roi: '300-500%',
      metrics: ['User activation', 'Feature adoption', 'Customer satisfaction', 'Retention rates']
    },
    {
      industry: 'Healthcare',
      challenges: ['Patient engagement', 'Care coordination', 'Satisfaction scores', 'Outcome tracking'],
      solutions: ['Patient portals', 'Care reminders', 'Satisfaction monitoring', 'Outcome analytics'],
      roi: '200-350%',
      metrics: ['Patient satisfaction', 'Engagement rates', 'Care outcomes', 'Provider efficiency']
    },
    {
      industry: 'Financial Services',
      challenges: ['Trust building', 'Service quality', 'Compliance', 'Customer retention'],
      solutions: ['Trust scoring', 'Service monitoring', 'Compliance automation', 'Loyalty programs'],
      roi: '180-300%',
      metrics: ['Trust scores', 'Service quality', 'Compliance rates', 'Customer retention']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$1,200',
      period: '/month',
      description: 'Perfect for small businesses starting their CX journey',
      features: [
        'Up to 1,000 customers',
        'Basic AI personalization',
        'Email & chat support',
        'Standard analytics',
        '3 team members',
        'Basic integrations',
        'Email support'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$3,800',
      period: '/month',
      description: 'Ideal for growing companies with advanced CX needs',
      features: [
        'Up to 10,000 customers',
        'Advanced AI personalization',
        'Omnichannel communication',
        'Advanced analytics & reporting',
        '15 team members',
        'Premium integrations',
        'Priority support',
        'Custom dashboards',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large enterprises with unlimited customers',
      features: [
        'Unlimited customers',
        'Custom AI models',
        'White-label solutions',
        'Dedicated support team',
        'Unlimited team members',
        'Custom integrations',
        'On-premise option',
        'Advanced compliance'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Adams',
      role: 'VP of Customer Experience',
      company: 'RetailTech Solutions',
      content: 'Zion Tech Group\'s CX platform transformed our customer relationships. We increased customer satisfaction by 45% and reduced churn by 30%.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Mark Wilson',
      role: 'Customer Success Director',
      company: 'SaaS Innovations',
      content: 'The AI-powered personalization and predictive analytics have revolutionized how we engage with customers, leading to 60% higher engagement rates.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Sarah Chen',
      role: 'Marketing Manager',
      company: 'HealthTech Pro',
      content: 'Our patient engagement improved dramatically with the personalized communication features, resulting in 40% better health outcomes.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>AI-Powered CX Platform</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Customer Experience
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Platform</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Revolutionize customer relationships with AI-powered personalization, omnichannel communication, 
              and predictive analytics. Deliver exceptional experiences that drive loyalty and growth.
            </p>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-cyan-400 mb-2">45%</div>
              <div className="text-gray-300">Higher Satisfaction</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-cyan-400 mb-2">60%</div>
              <div className="text-gray-300">Better Engagement</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-cyan-400 mb-2">30%</div>
              <div className="text-gray-300">Reduced Churn</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Start Free Trial</span>
            </button>
            <button className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-200 flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Schedule Demo</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Powerful CX Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with intuitive design to deliver 
              the most advanced customer experience solution available.
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
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Journey Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Complete Customer Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Optimize every touchpoint in the customer lifecycle with AI-powered insights and automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {customerTouchpoints.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{stage.stage}</h3>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-cyan-400 mb-3">Touchpoints:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {stage.touchpoints.map((touchpoint, touchpointIndex) => (
                      <div key={touchpointIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        <span>{touchpoint}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-cyan-400 mb-3">AI Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {stage.aiFeatures.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                        <Brain className="w-4 h-4 text-cyan-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored CX solutions designed for your industry's unique challenges and opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-white">{solution.industry}</h3>
                  <div className="text-2xl font-bold text-cyan-400">{solution.roi}</div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-cyan-400 mb-3">Challenges:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {solution.challenges.map((challenge, challengeIndex) => (
                      <div key={challengeIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <AlertTriangle className="w-4 h-4 text-yellow-400" />
                        <span>{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-medium text-cyan-400 mb-3">Solutions:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {solution.solutions.map((sol, solIndex) => (
                      <div key={solIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-cyan-400 mb-3">Key Metrics:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {solution.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                        <BarChart3 className="w-4 h-4 text-cyan-400" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your CX needs. All plans include our core AI customer experience features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular
                    ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-blue-600/10'
                    : 'border-white/10 hover:border-cyan-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center space-x-1 mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of satisfied customers who have transformed their customer experience with AI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Customer Experience?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your AI-powered CX journey today and see the transformation in just 30 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center space-x-2">
                <Rocket className="w-5 h-5" />
                <span>Start Free Trial</span>
              </button>
              <button className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-200 flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Talk to Expert</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICustomerExperiencePlatform;