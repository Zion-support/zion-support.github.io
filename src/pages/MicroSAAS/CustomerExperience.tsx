import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  MessageCircle, 
  Users, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  MessageCircle as MessageIcon,
  Globe,
  Server,
  BarChart3,
  Settings,
  Code,
  Package,
  Monitor,
  Network,
  Lock,
  Activity,
  Layers,
  PieChart,
  Target,
  Smile,
  TrendingUp
} from 'lucide-react';

const CustomerExperience: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'Customer Journey Mapping',
      description: 'Visualize and optimize every touchpoint in the customer experience.',
      color: 'text-pink-400',
      bgColor: 'bg-pink-600/20'
    },
    {
      icon: MessageCircle,
      title: 'Omnichannel Support',
      description: 'Provide seamless support across all customer communication channels.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/20'
    },
    {
      icon: Users,
      title: 'Customer Analytics',
      description: 'Deep insights into customer behavior, preferences, and satisfaction.',
      color: 'text-green-400',
      bgColor: 'bg-green-600/20'
    },
    {
      icon: Zap,
      title: 'Personalization Engine',
      description: 'Deliver tailored experiences based on customer data and behavior.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-600/20'
    }
  ];

  const capabilities = [
    {
      title: 'Feedback Management',
      description: 'Collect, analyze, and act on customer feedback from multiple sources.',
      icon: MessageIcon,
      features: ['Survey tools', 'Review management', 'Sentiment analysis', 'Action planning']
    },
    {
      title: 'Customer Segmentation',
      description: 'Identify and target customer segments for personalized experiences.',
      icon: PieChart,
      features: ['Behavioral analysis', 'Demographic targeting', 'Value-based segments', 'Dynamic grouping']
    },
    {
      title: 'Loyalty Programs',
      description: 'Build and manage customer loyalty and retention programs.',
      icon: Star,
      features: ['Reward systems', 'Tier management', 'Gamification', 'Retention tracking']
    },
    {
      title: 'Customer Success',
      description: 'Proactively manage customer success and reduce churn.',
      icon: Target,
      features: ['Onboarding automation', 'Health scoring', 'Proactive outreach', 'Success metrics']
    }
  ];

  const benefits = [
    {
      title: 'Increased Satisfaction',
      description: 'Delight customers with personalized, seamless experiences.',
      icon: Smile,
      metric: '95% Satisfaction'
    },
    {
      title: 'Higher Retention',
      description: 'Reduce churn and increase customer lifetime value.',
      icon: Heart,
      metric: '40% Retention'
    },
    {
      title: 'Better Conversion',
      description: 'Improve conversion rates with optimized customer journeys.',
      icon: TrendingUp,
      metric: '25% Conversion'
    },
    {
      title: 'Brand Advocacy',
      description: 'Turn satisfied customers into brand advocates.',
      icon: Star,
      metric: 'Brand Advocates'
    }
  ];

  const testimonials = [
    {
      name: 'Lisa Thompson',
      role: 'Customer Success Manager, TechCorp',
      content: 'Customer Experience platform transformed our support operations and improved satisfaction scores.',
      rating: 5
    },
    {
      name: 'Robert Chen',
      role: 'Marketing Director, RetailChain',
      content: 'Personalization engine increased our conversion rates and customer engagement significantly.',
      rating: 5
    },
    {
      name: 'Amanda Wilson',
      role: 'VP Customer Experience, StartupXYZ',
      content: 'Customer journey mapping helped us identify and fix critical pain points in our funnel.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-pink-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-pink-600/20 rounded-full">
              <Heart className="h-16 w-16 text-pink-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Customer
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              {" "}Experience
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your customer relationships with intelligent experience management. 
            Deliver personalized, seamless experiences that drive loyalty and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#demo"
              className="px-8 py-3 border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </a>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`${feature.bgColor} rounded-xl p-6 border border-slate-700`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <feature.icon className={`h-8 w-8 ${feature.color} mr-3`} />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Capabilities */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <capability.icon className="h-8 w-8 text-pink-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{capability.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{capability.description}</p>
                <div className="space-y-2">
                  {capability.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Benefits */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Customer Experience?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-pink-600/20 rounded-full">
                    <benefit.icon className="h-12 w-12 text-pink-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-3">{benefit.description}</p>
                <div className="text-2xl font-bold text-pink-400">{benefit.metric}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Customer Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-2xl p-12 border border-pink-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Customer Experience?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using our platform to deliver exceptional customer experiences, 
              increase loyalty, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Start Free Trial
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Schedule Demo
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                <MessageIcon className="inline mr-2 h-5 w-5" />
                Contact Sales
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default CustomerExperience;