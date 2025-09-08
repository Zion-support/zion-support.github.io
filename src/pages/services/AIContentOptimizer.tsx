import React from 'react';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, 
  TrendingUp, 
  Target, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  Star,
  Users,
  Globe,
  Search,
  PenTool,
  Eye,
  MousePointer,
  Smartphone,
  Monitor
} from 'lucide-react';

const AIContentOptimizer: React.FC = () => {
  const features = [
    'AI-powered content analysis and optimization',
    'SEO performance scoring and recommendations',
    'Real-time content performance tracking',
    'Multi-platform content optimization',
    'A/B testing automation and insights',
    'Content personalization engine',
    'Competitor analysis and benchmarking',
    'Automated content scheduling',
    'Performance analytics dashboard',
    'Integration with major CMS platforms'
  ];

  const benefits = [
    'Increase organic traffic by 40-60%',
    'Improve content engagement rates by 35%',
    'Reduce content creation time by 50%',
    'Boost conversion rates by 25-40%',
    'Automated optimization saves 15+ hours/week',
    'Real-time performance monitoring',
    'Data-driven content strategy',
    'Scalable content optimization'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 50 content pieces/month',
        'Basic SEO optimization',
        'Performance analytics',
        'Email support',
        'Basic integrations'
      ]
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 200 content pieces/month',
        'Advanced AI optimization',
        'A/B testing automation',
        'Competitor analysis',
        'Priority support',
        'Advanced integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations with high content volume',
      features: [
        'Unlimited content pieces',
        'Custom AI models',
        'White-label solutions',
        'Dedicated account manager',
        'Custom integrations',
        '24/7 phone support'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO 
        title="AI Content Optimizer - Zion Tech Group"
        description="AI-powered content optimization platform that increases organic traffic by 40-60% and improves engagement rates by 35%. Get started from $299/month."
      />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <Brain className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">AI-Powered Content Optimization</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            AI Content Optimizer
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Transform your content performance with AI-powered optimization. Increase organic traffic by 40-60% and boost engagement rates by 35% through intelligent content analysis and automated optimization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              Start Free Trial
            </a>
            <a 
              href="#demo" 
              className="border border-slate-600 hover:border-purple-500 text-slate-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Watch Demo
            </a>
          </div>
        </motion.div>
      </section>

      {/* Key Metrics */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6">
              <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-purple-400 mb-2">40-60%</div>
              <div className="text-slate-300">Increase in Organic Traffic</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl p-6">
              <BarChart3 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-400 mb-2">35%</div>
              <div className="text-slate-300">Improvement in Engagement</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-6">
              <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-green-400 mb-2">50%</div>
              <div className="text-slate-300">Time Saved in Creation</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-xl p-6">
              <Target className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-orange-400 mb-2">25-40%</div>
              <div className="text-slate-300">Boost in Conversions</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Powerful Features for Content Success
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our AI-powered platform provides everything you need to optimize your content for maximum performance and engagement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
            >
              <CheckCircle className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">{feature}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Why Choose AI Content Optimizer?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-lg text-slate-200">{benefit}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Transparent Pricing
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Choose the plan that fits your content optimization needs. All plans include our core AI optimization features.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricing.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-slate-800/50 border rounded-xl p-8 ${
                plan.popular 
                  ? 'border-purple-500/50 bg-gradient-to-br from-slate-800/80 to-purple-900/20' 
                  : 'border-slate-700 hover:border-purple-500/50'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400 ml-1">{plan.period}</span>
                </div>
                <p className="text-slate-300">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="/contact"
                className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transform hover:scale-105'
                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-12"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Content Performance?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have increased their organic traffic and engagement with AI-powered content optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </a>
            <a 
              href="tel:+13024640950" 
              className="border border-slate-600 hover:border-purple-500 text-slate-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AIContentOptimizer;