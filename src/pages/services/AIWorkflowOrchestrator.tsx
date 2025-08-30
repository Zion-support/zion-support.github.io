import React from 'react';
import { motion  } from 'framer-motion';
import { SEO  } from '../components/SEO';
import { Brain, 
  Zap, 
  Workflow, 
  TrendingUp, 
  Shield, 
  Clock, 
  Users,
  CheckCircle,
  ArrowRight,
  Play,
  Pause,
  Settings,
  BarChart3,
  AlertTriangle,
  Lightbulb,
  Rocket,
  Target,
  Gauge,
  Database,
  Cloud,
  Lock,
  RefreshCw,
  Eye,
  Code,
  GitBranch,
  Calendar,
  DollarSign
 } from 'lucide-react';

const AIWorkflowOrchestrator: React.FC = (): JSX.Element => {
  const features = [
    {
      icon: Brain,
      title: "Intelligent Process Discovery",
      description: "AI automatically identifies and maps your business processes for optimization",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Workflow,
      title: "Visual Workflow Designer",
      description: "Drag-and-drop interface to create complex workflows without coding",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Settings,
      title: "Smart Automation Rules",
      description: "AI-powered decision trees that adapt to changing business conditions",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Real-time insights into workflow efficiency and bottleneck identification",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Built-in audit trails and role-based access control for enterprise security",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Clock,
      title: "Real-time Monitoring",
      description: "Live dashboard showing workflow status and performance metrics",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small teams getting started with workflow automation",
      features[
        "Up to 10 workflows",
        "Basic AI process discovery",
        "Standard templates",
        "Email support",
        "Basic analytics",
        "5 team members"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing businesses with complex workflow needs",
      features[
        "Up to 50 workflows",
        "Advanced AI orchestration",
        "Custom integrations",
        "Priority support",
        "Advanced analytics",
        "Unlimited team members",
        "Custom branding",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "For large organizations requiring enterprise-grade workflow management",
      features[
        "Unlimited workflows",
        "AI-powered optimization",
        "Custom AI models",
        "Dedicated support",
        "Advanced security",
        "Multi-tenant support",
        "Custom development",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    'Increase workflow efficiency by 70%',
    'Reduce manual errors by 85%',
    'Improve process completion time by 60%',
    'Reduce operational costs by 45%',
    'Enable 24/7 automated operations',
    'Provide real-time process visibility'
  ];

  const useCases = [
    'Enterprise process automation',
    'Manufacturing workflow optimization',
    'Healthcare process management',
    'Financial services automation',
    'Supply chain orchestration',
    'Customer service workflow automation'
  ];

  const tiers = [
    { 
      name: 'Workflow Starter', 
      price: '$499/mo', 
      details: ['Up to 100 workflows', 'Basic AI orchestration', 'Standard reporting', 'Email support'] 
    },
    { 
      name: 'Workflow Professional', 
      price: '$1,299/mo', 
      details: ['Up to 500 workflows', 'Advanced AI features', 'Custom dashboards', 'Priority support'] 
    },
    { 
      name: 'Workflow Enterprise', 
      price: '$3,999/mo', 
      details: ['Unlimited workflows', 'Full AI suite', 'White-label options', '24/7 support'] 
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Workflow className="w-4 h-4 mr-2" /> AI-powered workflow orchestration
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI Workflow Orchestrator</h1>
          <p className="text-zion-slate-light text-xl">Transform your business processes with AI-powered workflow orchestration that automates, optimizes, and orchestrates complex business operations.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Powerful Features for Modern Workflows
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to build, manage, and optimize intelligent business processes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className={`p-6 rounded-xl bg-gradient-to-br ${feature.color} bg-opacity-10 border border-opacity-20 hover:bg-opacity-20 transition-all duration-300 h-full`}>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-gray-300">
              See how AI Workflow Orchestrator transforms business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.metric}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300">
              Tailored workflows for your industry's unique challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">
            {useCases.map((useCase, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className={`p-6 rounded-xl bg-gradient-to-br ${useCase.color} bg-opacity-10 border border-opacity-20 hover:bg-opacity-20 transition-all duration-300 h-full`}>
                  <div className="flex items-start space-x-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${useCase.color}`}>
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-purple-300 mb-2">{useCase.industry}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                      <p className="text-gray-300">{useCase.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your workflow automation needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg: grid-cols-3 gap-8">
            {pricingPlans.map((plan, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-2 border-purple-500/50' 
                    : 'bg-slate-800/50 border border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Workflows?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using AI Workflow Orchestrator to streamline their operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
          
          <div className="bg-white border border-zion-slate-light/20 rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-semibold text-zion-slate-dark mb-4">Pricing Plans</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {tiers.map((t) => (
                <div key={t.name} className="rounded-lg p-4 border border-zion-slate-light/30">
                  <div className="text-lg font-semibold mb-1">{t.name}</div>
                  <div className="text-2xl font-bold text-zion-cyan mb-2">{t.price}</div>
                  <ul className="text-sm text-zion-slate-dark space-y-1">
                    {t.details.map((d) => (<li key={d}>{d}</li>))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-zion-slate-light/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-zion-slate-dark text-center mb-12">Use Cases & Industries</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <div key={useCase} className="bg-white rounded-xl p-6 shadow-md border border-zion-slate-light/20">
                <Target className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-semibold text-zion-slate-dark mb-3">{useCase}</h3>
                <p className="text-zion-slate-dark/70">Streamline your operations with AI-powered workflow automation and intelligent process orchestration.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Ready to Orchestrate Your Workflows?</h2>
          <p className="text-zion-slate-dark/70 text-lg">Get started with AI-powered workflow orchestration today</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Start Free Trial</h3>
            <p className="mb-6">Experience the power of AI-driven workflow automation with our 14-day free trial</p>
            <button className="bg-white text-zion-cyan px-6 py-3 rounded-lg font-semibold hover:bg-zion-slate-light transition-colors">
              Start Free Trial
            </button>
          </div>
          
          <div className="bg-zion-slate-dark rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Schedule Demo</h3>
            <p className="mb-6">See our platform in action with a personalized demo from our experts</p>
            <button className="bg-zion-cyan text-white px-6 py-3 rounded-lg font-semibold hover:bg-zion-cyan/80 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-zion-slate-dark text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="h-6 w-6 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="h-6 w-6 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Globe className="h-6 w-6 text-zion-cyan" />
              <span>https://ziontechgroup.com</span>
            </div>
          </div>
          <p className="text-zion-slate-light">
            Ready to revolutionize your workflow automation? Contact us today to learn how AI-powered orchestration can transform your business operations.
          </p>
        </div>
      </section>
    </div>
  )};

export default AIWorkflowOrchestrator;