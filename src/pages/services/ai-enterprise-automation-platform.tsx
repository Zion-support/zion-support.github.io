import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  Rocket, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Database,
  Network,
  Workflow,
  Bot,
  Globe,
  Lock,
  TrendingUp,
  DollarSign,
  Clock,
  Star,
  Award,
  Target,
  Lightbulb,
  Code,
  Server,
  Cloud,
  Smartphone,
  Monitor,
  ShieldCheck,
  Activity,
  MessageCircle,
  FileText,
  Settings,
  Palette,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Building2,
  Handshake,
  HelpCircle,
  ChevronRight,
  ChevronDown,
  Plus,
  Minus,
  Calendar,
  CreditCard,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function AIEnterpriseAutomationPlatform() {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [selectedPlan, setSelectedPlan] = React.useState('professional');

  const features = [
    {
      category: 'Core Automation',
      items: [
        'Multi-agent AI coordination',
        'Intelligent workflow orchestration',
        'Process mining & optimization',
        'Real-time decision automation',
        'Cross-platform integration'
      ]
    },
    {
      category: 'AI Capabilities',
      items: [
        'Natural language processing',
        'Predictive analytics',
        'Machine learning models',
        'Computer vision integration',
        'Sentiment analysis'
      ]
    },
    {
      category: 'Enterprise Features',
      items: [
        'Role-based access control',
        'Audit trails & compliance',
        'Multi-tenant architecture',
        'API-first design',
        'Custom branding'
      ]
    },
    {
      category: 'Integration & Security',
      items: [
        'SSO & LDAP support',
        'End-to-end encryption',
        'GDPR compliance',
        'SOC 2 Type II certified',
        'Real-time monitoring'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small teams getting started with automation',
      features: [
        'Up to 10 automation workflows',
        'Basic AI models',
        'Standard integrations',
        'Email support',
        'Basic analytics'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses with advanced automation needs',
      features: [
        'Up to 50 automation workflows',
        'Advanced AI models',
        'Premium integrations',
        'Priority support',
        'Advanced analytics',
        'Custom workflows',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,499',
      period: '/month',
      description: 'Full-scale enterprise automation with custom solutions',
      features: [
        'Unlimited automation workflows',
        'Custom AI model training',
        'All integrations',
        '24/7 dedicated support',
        'Custom analytics',
        'White-label solution',
        'On-premise deployment',
        'Custom SLA'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: '10x Faster Operations',
      description: 'Automate repetitive tasks and reduce manual work by 90%'
    },
    {
      icon: DollarSign,
      title: '30% Cost Reduction',
      description: 'Lower operational costs through intelligent automation'
    },
    {
      icon: TrendingUp,
      title: 'Improved Accuracy',
      description: 'Eliminate human errors with AI-powered precision'
    },
    {
      icon: Users,
      title: 'Enhanced Productivity',
      description: 'Focus your team on high-value strategic work'
    }
  ];

  const useCases = [
    {
      industry: 'Finance',
      examples: [
        'Automated loan processing',
        'Fraud detection systems',
        'Compliance reporting',
        'Customer onboarding'
      ]
    },
    {
      industry: 'Healthcare',
      examples: [
        'Patient scheduling automation',
        'Medical record processing',
        'Insurance claim handling',
        'Appointment reminders'
      ]
    },
    {
      industry: 'Manufacturing',
      examples: [
        'Quality control automation',
        'Supply chain optimization',
        'Predictive maintenance',
        'Inventory management'
      ]
    },
    {
      industry: 'Retail',
      examples: [
        'Order processing automation',
        'Customer service chatbots',
        'Inventory forecasting',
        'Personalized marketing'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO 
        title="AI Enterprise Automation Platform | Zion Tech Group"
        description="Transform your business operations with our AI-powered enterprise automation platform. Streamline workflows, reduce costs, and boost productivity."
        keywords="AI automation, enterprise automation, workflow automation, business process automation, AI platform"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/20 via-zion-blue to-zion-cyan/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-cyan text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Enterprise Automation
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Enterprise Automation
                <span className="block text-zion-cyan">Platform</span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Transform your business operations with intelligent automation. Our AI platform orchestrates complex workflows, 
                eliminates manual processes, and delivers unprecedented efficiency gains.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features for Enterprise Automation
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Everything you need to automate complex business processes with AI intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-zion-cyan mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Business Operations
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              See measurable results in weeks, not months
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Tailored automation solutions for your industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-purple/30 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-zion-cyan mb-4">{useCase.industry}</h3>
                <ul className="space-y-2">
                  {useCase.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="text-zion-slate-light text-sm flex items-center">
                      <ArrowRight className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-zion-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the plan that fits your automation needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-zion-blue-dark border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/20' 
                    : 'border-zion-purple/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan-dark hover:to-zion-purple-dark'
                    : 'bg-zion-blue border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-cyan">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of companies that have transformed their operations with AI automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-zion-blue font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Need Help Getting Started?</h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Our automation experts are here to help you succeed
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-zion-cyan mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-slate-light">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-zion-cyan mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-zion-cyan mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}