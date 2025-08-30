import React from 'react';
import { motion } from 'framer-motion';
import { 
  Workflow, 
  Zap, 
  Brain, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Clock, 
  TrendingUp, 
  Shield,
  BarChart3,
  Code,
  Database,
  Globe,
  Cpu,
  Lock,
  Star,
  Award,
  Rocket,
  Lightbulb
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AIWorkflowOrchestrator: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Decision Making',
      description: 'Intelligent workflow routing and decision automation using advanced machine learning algorithms'
    },
    {
      icon: Workflow,
      title: 'Visual Workflow Designer',
      description: 'Drag-and-drop interface for creating complex business processes without coding'
    },
    {
      icon: Zap,
      title: 'Real-time Automation',
      description: 'Instant workflow execution with sub-second response times and 99.9% uptime'
    },
    {
      icon: Target,
      title: 'Smart Task Assignment',
      description: 'AI-driven resource allocation based on skills, availability, and workload optimization'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive performance metrics, bottleneck identification, and optimization recommendations'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 Type II compliant with role-based access control and audit trails'
    }
  ];

  const useCases = [
    {
      title: 'Customer Service Automation',
      description: 'Automate ticket routing, escalation, and resolution workflows',
      icon: Users,
      benefits: ['60% faster response times', '80% reduction in manual tasks', 'Improved customer satisfaction']
    },
    {
      title: 'Sales Process Optimization',
      description: 'Streamline lead qualification, proposal generation, and contract workflows',
      icon: Target,
      benefits: ['40% increase in conversion rates', '50% faster deal closure', 'Automated follow-up sequences']
    },
    {
      title: 'HR & Recruitment',
      description: 'Automate candidate screening, interview scheduling, and onboarding processes',
      icon: Users,
      benefits: ['70% faster hiring process', 'Reduced administrative overhead', 'Improved candidate experience']
    },
    {
      title: 'Financial Operations',
      description: 'Automate invoice processing, approval workflows, and financial reporting',
      icon: TrendingUp,
      benefits: ['90% faster invoice processing', 'Reduced errors and fraud', 'Real-time financial insights']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small teams and basic workflow automation',
      features: [
        'Up to 10 workflows',
        'Basic AI decision making',
        'Standard integrations',
        'Email support',
        'Basic analytics dashboard',
        'Up to 5 team members'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses with complex workflow needs',
      features: [
        'Up to 50 workflows',
        'Advanced AI algorithms',
        'Custom integrations',
        'Priority support (4-hour response)',
        'Advanced analytics & reporting',
        'Up to 25 team members',
        'Workflow templates library',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations with enterprise-scale automation needs',
      features: [
        'Unlimited workflows',
        'Custom AI model training',
        'White-label solutions',
        'Dedicated account manager',
        'Custom integrations development',
        'Unlimited team members',
        'Advanced security features',
        'SLA guarantees'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
                <Workflow className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Workflow Orchestrator
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
              Transform your business processes with intelligent workflow automation powered by advanced AI. 
              Orchestrate complex workflows, automate decision-making, and optimize operations in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Why Choose AI Workflow Orchestrator?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our platform combines cutting-edge AI with intuitive workflow design to deliver unprecedented automation capabilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg w-fit mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Use Cases */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Transform Your Business Processes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how AI Workflow Orchestrator can revolutionize your operations across different departments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-400 mb-3">Key Benefits:</h4>
                {useCase.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the plan that best fits your workflow automation needs. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${
                tier.popular 
                  ? 'border-blue-400/50 bg-gradient-to-b from-blue-500/10 to-transparent' 
                  : 'border-white/10'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">{tier.name}</h3>
                <p className="text-gray-400 mb-6">{tier.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-400">{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={tier.cta === 'Contact Sales' ? '/contact' : '/contact'}
                className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                    : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                }`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/10"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Workflows?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that have already automated their processes with AI Workflow Orchestrator
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-gray-300">
          <p className="mb-4">
            Questions? Contact our team at{' '}
            <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
              kleber@ziontechgroup.com
            </a>
          </p>
          <p>
            Call us at{' '}
            <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">
              +1 (302) 464-0950
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIWorkflowOrchestrator;
