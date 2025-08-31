import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Calendar, 
  Users, 
  Target, 
  TrendingUp, 
  Shield, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Clock,
  BarChart3,
  MessageSquare,
  FileText,
  Globe,
  Rocket,
  Cpu,
  Database,
  Cloud,
  Lock,
  Play
} from 'lucide-react';

const AIIntelligentProjectManagementPlatform: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Task Prioritization',
      description: 'Intelligent algorithms automatically prioritize tasks based on deadlines, dependencies, and team capacity',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Predictive Resource Allocation',
      description: 'ML models predict resource needs and automatically assign team members based on skills and availability',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Real-time Risk Assessment',
      description: 'Continuous monitoring and AI-driven risk prediction to prevent project delays and budget overruns',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Automated Progress Tracking',
      description: 'Smart dashboards and automated reporting with predictive completion estimates',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Intelligent Communication Hub',
      description: 'AI-powered meeting scheduling, automated follow-ups, and smart notification systems',
      icon: MessageSquare,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Advanced Analytics & Insights',
      description: 'Deep project analytics with actionable insights and performance optimization recommendations',
      icon: BarChart3,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small teams and startups',
      features: [
        'Up to 10 team members',
        'AI task prioritization',
        'Basic risk assessment',
        'Standard reporting',
        'Email support',
        '5GB storage'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'Up to 50 team members',
        'Advanced AI features',
        'Predictive resource allocation',
        'Custom dashboards',
        'Priority support',
        '25GB storage',
        'API access',
        'Advanced analytics'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited team members',
        'Full AI suite',
        'Custom AI model training',
        'White-label solution',
        'Dedicated support',
        'Unlimited storage',
        'Advanced security',
        'Custom integrations',
        'On-premise option'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const benefits = [
    {
      title: '30% Faster Project Completion',
      description: 'AI-driven optimization reduces project timelines significantly',
      icon: Clock,
      metric: '30%'
    },
    {
      title: '25% Cost Reduction',
      description: 'Eliminate inefficiencies and optimize resource allocation',
      icon: TrendingUp,
      metric: '25%'
    },
    {
      title: '99.9% Uptime',
      description: 'Enterprise-grade reliability with guaranteed SLA',
      icon: Shield,
      metric: '99.9%'
    },
    {
      title: '24/7 AI Support',
      description: 'Round-the-clock intelligent assistance and monitoring',
      icon: Brain,
      metric: '24/7'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Project Management
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Intelligent Project Management
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Powered by AI
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your project management with AI-driven insights, predictive analytics, and intelligent automation. 
              Deliver projects faster, smarter, and more efficiently than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Revolutionary AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the future of project management with cutting-edge AI capabilities that adapt to your workflow.
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
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of teams who have transformed their project delivery with our AI platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">{benefit.metric}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your team size and needs. All plans include a 14-day free trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-lg border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-blue-500 bg-blue-500/10' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-1">
                    {plan.price}
                    <span className="text-lg text-gray-400 font-normal">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the AI revolution and experience unprecedented project success rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300">
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                <MessageSquare className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIIntelligentProjectManagementPlatform;