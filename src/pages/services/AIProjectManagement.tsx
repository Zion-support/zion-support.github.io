import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Users, 
  Calendar, 
  TrendingUp, 
  Shield, 
  Zap, 
  CheckCircle, 
  Clock, 
  Target, 
  BarChart3,
  MessageSquare,
  FileText,
  GitBranch,
  AlertTriangle,
  Star,
  Award,
  Rocket,
  Globe,
  Lock,
  Cpu
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AIProjectManagement() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Task Prioritization',
      description: 'Intelligent algorithms automatically prioritize tasks based on deadlines, dependencies, and team capacity',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Users,
      title: 'Smart Team Collaboration',
      description: 'AI-driven insights for optimal team allocation and workload distribution',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Calendar,
      title: 'Predictive Timeline Management',
      description: 'Machine learning models predict project completion dates and identify potential delays',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Advanced analytics and reporting with AI-powered insights and recommendations',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Shield,
      title: 'Risk Assessment & Mitigation',
      description: 'AI identifies potential project risks and suggests mitigation strategies',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Intelligent automation of repetitive tasks and approval processes',
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small teams and startups',
      features: [
        'Up to 10 team members',
        'AI task prioritization',
        'Basic project templates',
        'Email support',
        'Mobile app access',
        'Basic reporting'
      ],
      popular: false,
      color: 'from-slate-600 to-slate-700'
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 50 team members',
        'Advanced AI features',
        'Custom workflows',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Custom integrations',
        'Team training'
      ],
      popular: true,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Full AI suite access',
        'Custom AI models',
        'Dedicated support',
        'Advanced security',
        'SLA guarantees',
        'On-site training',
        'White-label options'
      ],
      popular: false,
      color: 'from-purple-600 to-pink-700'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: '30% Faster Project Completion',
      description: 'AI optimization reduces project timelines significantly'
    },
    {
      icon: Users,
      title: 'Improved Team Productivity',
      description: 'Smart task allocation increases team efficiency by 40%'
    },
    {
      icon: Target,
      title: 'Better Resource Utilization',
      description: 'AI-driven insights optimize resource allocation'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Decisions',
      description: 'Comprehensive analytics for informed project decisions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Project Management Platform - Zion Tech Group"
        description="Revolutionary AI-powered project management solution that automates task prioritization, team collaboration, and timeline management."
      />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-8">
            <Brain className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
            AI Project Management Platform
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Transform your project management with AI-powered insights, automated workflows, and intelligent team collaboration. 
            Experience 30% faster project completion and 40% improved team productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/request-quote"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
            >
              Start Free Trial
            </a>
            <a
              href="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              Watch Demo
            </a>
          </div>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose AI Project Management?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful AI Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  tier.popular 
                    ? 'bg-gradient-to-br from-slate-800 to-slate-700 border-2 border-cyan-400 shadow-2xl shadow-cyan-400/20' 
                    : 'bg-slate-800/50 border border-slate-700'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-slate-400 mb-4">{tier.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-slate-400">{tier.period}</span>
                  </div>
                  <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-400/25'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    Get Started
                  </button>
                </div>

                <div className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12 border border-slate-600">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Project Management?</h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of teams already using AI-powered project management to deliver projects faster and more efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
              >
                Contact Sales
              </a>
              <a
                href="/request-quote"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Request Custom Quote
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}