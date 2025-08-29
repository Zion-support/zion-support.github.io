import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Calendar, 
  Users, 
  Target, 
  BarChart3, 
  Zap, 
  Brain, 
  Shield, 
  Clock, 
  TrendingUp, 
  CheckCircle,
  MessageSquare,
  FileText,
  GitBranch,
  AlertTriangle,
  Lightbulb,
  Rocket,
  Star,
  DollarSign,
  Globe,
  Lock,
  Play
} from 'lucide-react';

export default function AIProjectManagementPlatform() {
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
      description: 'AI-driven team matching and workload balancing for optimal project performance',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Target,
      title: 'Predictive Project Analytics',
      description: 'Machine learning models predict project completion times and identify potential bottlenecks',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Zap,
      title: 'Automated Workflow Orchestration',
      description: 'AI automates repetitive tasks and creates intelligent workflows based on project patterns',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: BarChart3,
      title: 'Real-time Performance Metrics',
      description: 'Advanced dashboards with AI insights on team productivity and project health',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Risk Assessment & Mitigation',
      description: 'AI continuously monitors project risks and suggests proactive mitigation strategies',
      color: 'from-red-500 to-pink-600'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams and startups',
      features: [
        'Up to 10 team members',
        'AI task prioritization',
        'Basic project templates',
        'Email support',
        '5GB storage',
        'Mobile app access'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'Up to 50 team members',
        'Advanced AI analytics',
        'Custom workflows',
        'Priority support',
        '25GB storage',
        'API access',
        'Advanced reporting',
        'Team collaboration tools'
      ],
      popular: true,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited team members',
        'Full AI suite',
        'Custom integrations',
        'Dedicated support',
        'Unlimited storage',
        'Advanced security',
        'White-label options',
        'Custom training'
      ],
      popular: false,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '30% Increase in Project Completion Rate',
      description: 'AI-driven insights help teams complete projects faster and more efficiently'
    },
    {
      icon: Clock,
      title: '50% Reduction in Planning Time',
      description: 'Automated scheduling and resource allocation save hours of manual planning'
    },
    {
      icon: Users,
      title: 'Improved Team Collaboration',
      description: 'AI-powered communication tools enhance team coordination and productivity'
    },
    {
      icon: Target,
      title: 'Better Resource Utilization',
      description: 'Intelligent resource allocation ensures optimal use of team skills and time'
    }
  ];

  const useCases = [
    {
      title: 'Software Development',
      description: 'Manage agile sprints, code reviews, and deployment pipelines with AI assistance',
      icon: GitBranch
    },
    {
      title: 'Marketing Campaigns',
      description: 'Coordinate multi-channel campaigns with AI-driven content optimization',
      icon: MessageSquare
    },
    {
      title: 'Product Launches',
      description: 'Streamline product development from ideation to market launch',
      icon: Rocket
    },
    {
      title: 'Event Planning',
      description: 'Organize complex events with AI-powered timeline management',
      icon: Calendar
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Project Management Platform - Zion Tech Group"
        description="Revolutionary AI-powered project management platform that automates workflows, predicts outcomes, and optimizes team performance. Start your free trial today!"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Project Management
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                AI Project Management
              </span>
              <br />
              <span className="text-white">Platform</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your project management with AI that predicts outcomes, automates workflows, 
              and optimizes team performance in real-time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold text-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <a
                href="/demo"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-purple-500/30 text-purple-300 font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powered by Advanced AI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform leverages cutting-edge artificial intelligence to revolutionize how you manage projects, 
              teams, and workflows.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your team size and needs. All plans include our core AI features.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative ${plan.popular ? 'transform scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-semibold">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-2 ${
                  plan.popular ? 'border-purple-500/50' : 'border-slate-600/30'
                } hover:border-purple-500/50 transition-all duration-300`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="/request-quote"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                        : 'border border-purple-500/30 text-purple-300 hover:bg-purple-500/10'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Organizations using our AI Project Management Platform see measurable improvements 
              in project success rates and team productivity.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-6"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform adapts to your specific industry needs and project requirements.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of teams already using AI to deliver projects faster, smarter, and more successfully.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold text-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-purple-500/30 text-purple-300 font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Sales
              </a>
            </div>
            
            <p className="text-sm text-gray-400 mt-6">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}