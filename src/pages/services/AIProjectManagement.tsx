import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  Brain, 
  CheckCircle, 
  Clock, 
  DollarSign,
  BarChart3,
  Target,
  Rocket,
  Star,
  Award,
  Globe,
  Lock,
  Cloud,
  Smartphone,
  Monitor,
  Database,
  Cpu,
  Network,
  Server,
  ShieldCheck,
  Zap as Lightning,
  Brain as AI,
  Users as Team,
  Calendar as Schedule,
  TrendingUp as Analytics,
  CheckCircle as Success,
  Clock as Time,
  DollarSign as Money,
  BarChart3 as Charts,
  Target as Goals,
  Rocket as Launch,
  Star as Quality,
  Award as Recognition,
  Globe as Worldwide,
  Lock as Security,
  Cloud as CloudIcon,
  Smartphone as Mobile,
  Monitor as Desktop,
  Database as Data,
  Cpu as Processor,
  Network as NetworkIcon,
  Server as ServerIcon
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIProjectManagement() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Task Prioritization',
      description: 'Intelligent algorithms automatically prioritize tasks based on deadlines, dependencies, and team capacity',
      benefits: ['Reduces manual planning time by 80%', 'Optimizes resource allocation', 'Improves project delivery timelines']
    },
    {
      icon: Users,
      title: 'Smart Team Collaboration',
      description: 'AI-driven insights for team performance, workload balancing, and communication optimization',
      benefits: ['Real-time collaboration analytics', 'Automated conflict resolution', 'Enhanced team productivity tracking']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Risk Management',
      description: 'Machine learning models identify potential project risks before they become critical issues',
      benefits: ['Early risk detection', 'Proactive mitigation strategies', 'Reduced project failures by 60%']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics Dashboard',
      description: 'Comprehensive project metrics, KPIs, and performance indicators with AI-powered insights',
      benefits: ['Real-time project health monitoring', 'Customizable reporting', 'Data-driven decision making']
    },
    {
      icon: Zap,
      title: 'Automated Workflow Orchestration',
      description: 'Intelligent automation of repetitive tasks, approvals, and project processes',
      benefits: ['Eliminates manual bottlenecks', 'Accelerates project delivery', 'Reduces human error']
    },
    {
      icon: Shield,
      title: 'Enterprise Security & Compliance',
      description: 'Bank-level security with SOC2, GDPR, and HIPAA compliance for enterprise use',
      benefits: ['Enterprise-grade security', 'Regulatory compliance', 'Data protection standards']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small teams and startups',
      features: [
        'Up to 10 team members',
        'Basic AI task prioritization',
        'Standard project templates',
        'Email support',
        'Basic analytics dashboard',
        'Mobile app access'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 50 team members',
        'Advanced AI insights',
        'Custom project templates',
        'Priority support',
        'Advanced analytics & reporting',
        'API access',
        'Integrations (Slack, Jira, etc.)',
        'Time tracking & billing'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Full AI suite capabilities',
        'Custom enterprise templates',
        '24/7 dedicated support',
        'Advanced security & compliance',
        'Custom integrations',
        'White-label options',
        'On-premise deployment',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      industry: 'Software Development',
      description: 'Manage agile sprints, code reviews, and deployment pipelines with AI-powered insights',
      benefits: ['Faster release cycles', 'Better bug tracking', 'Improved code quality metrics']
    },
    {
      industry: 'Marketing Agencies',
      description: 'Coordinate campaigns, creative workflows, and client deliverables efficiently',
      benefits: ['Streamlined client communication', 'Better resource allocation', 'Improved campaign ROI']
    },
    {
      industry: 'Construction & Engineering',
      description: 'Track project milestones, resource allocation, and compliance requirements',
      benefits: ['Better timeline management', 'Reduced cost overruns', 'Improved safety compliance']
    },
    {
      industry: 'Healthcare',
      description: 'Manage clinical trials, patient care coordination, and regulatory compliance',
      benefits: ['Enhanced patient outcomes', 'Streamlined compliance', 'Better resource utilization']
    }
  ];

  const integrations = [
    { name: 'Slack', icon: MessageCircle, description: 'Real-time notifications and team communication' },
    { name: 'Microsoft Teams', icon: Users, description: 'Seamless integration with Office 365 ecosystem' },
    { name: 'Jira', icon: Bug, description: 'Sync with development workflows and issue tracking' },
    { name: 'Salesforce', icon: TrendingUp, description: 'Connect project data with CRM and sales processes' },
    { name: 'QuickBooks', icon: DollarSign, description: 'Automatic time tracking and invoicing' },
    { name: 'Google Workspace', icon: Mail, description: 'Calendar integration and document collaboration' }
  ];

  return (
    <>
      <SEO 
        title="AI-Powered Project Management - Zion Tech Group"
        description="Transform your project management with AI-driven insights, intelligent automation, and predictive analytics. Boost productivity and reduce project risks."
        canonical="/services/ai-project-management"
        url="https://ziontechgroup.com/services/ai-project-management"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  AI-Powered Project Management
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
                  Revolutionize your project management with intelligent automation, predictive analytics, and AI-driven insights that boost productivity by 300%
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#pricing" 
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                  >
                    View Pricing
                  </a>
                  <a 
                    href="/contact" 
                    className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                  >
                    Schedule Demo
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Why Choose AI Project Management?
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our AI-powered platform delivers unprecedented efficiency and insights for modern project teams
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-slate-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-400">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Transparent Pricing
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Choose the plan that fits your team size and requirements. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-slate-800/80 p-8 rounded-xl border ${
                    plan.popular 
                      ? 'border-blue-500 ring-2 ring-blue-500/20' 
                      : 'border-slate-700'
                  } hover:border-blue-500 transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-slate-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}>
                    {plan.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Industry Use Cases
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our AI project management platform adapts to various industries and workflows
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-slate-800/80 p-6 rounded-xl border border-slate-700"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">{useCase.industry}</h3>
                  <p className="text-slate-300 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-400">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Seamless Integrations
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Connect with your existing tools and workflows for maximum productivity
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/80 p-4 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <integration.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-1">{integration.name}</h4>
                  <p className="text-xs text-slate-400">{integration.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of teams already using AI-powered project management to boost productivity and deliver projects on time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </a>
              <a 
                href="/contact" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}