import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Search, 
  BookOpen, 
  FileText, 
  TrendingUp, 
  Target, 
  CheckCircle, 
  Star,
  ArrowRight,
  BarChart3,
  Users,
  Globe,
  Zap,
  Shield,
  Cpu,
  Database,
  Network,
  Rocket,
  Lightbulb,
  Code,
  Server,
  Eye,
  Sparkles,
  Activity,
  Gauge,
  Workflow,
  Palette,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Clock,
  ExternalLink,
  TestTube,
  Microscope,
  Flask,
  Atom,
  Satellite,
  Leaf,
  Building,
  Heart,
  Lock,
  Smartphone,
  Wifi,
  Cloud,
  Server,
  BarChart,
  PieChart,
  LineChart,
  ScatterChart
} from 'lucide-react';

export default function AIAutonomousResearchAssistant() {
  const features = [
    {
      icon: Brain,
      title: 'Autonomous Research Discovery',
      description: 'AI that independently identifies research gaps, formulates hypotheses, and designs experiments',
      benefits: ['24/7 research operation', 'Cross-domain knowledge synthesis', 'Novel hypothesis generation']
    },
    {
      icon: Search,
      title: 'Intelligent Literature Analysis',
      description: 'Advanced NLP algorithms that analyze millions of research papers in seconds',
      benefits: ['Real-time literature monitoring', 'Citation network analysis', 'Trend identification']
    },
    {
      icon: TestTube,
      title: 'Automated Experiment Design',
      description: 'AI-generated experimental protocols optimized for maximum research efficiency',
      benefits: ['Statistical power optimization', 'Resource allocation planning', 'Risk assessment']
    },
    {
      icon: BarChart3,
      title: 'Predictive Research Analytics',
      description: 'Machine learning models that predict research outcomes and success probabilities',
      benefits: ['Success rate prediction', 'Resource optimization', 'Timeline forecasting']
    }
  ];

  const researchDomains = [
    {
      title: 'Biomedical Research',
      description: 'Drug discovery, genomics, and clinical trials optimization',
      icon: Heart,
      price: '$20,000/month',
      features: ['Clinical trial design', 'Drug repurposing', 'Biomarker discovery']
    },
    {
      title: 'Materials Science',
      description: 'Novel material discovery and property prediction',
      icon: Atom,
      price: '$18,000/month',
      features: ['Crystal structure prediction', 'Material property optimization', 'Synthesis pathway design']
    },
    {
      title: 'Climate Science',
      description: 'Environmental modeling and climate change research',
      icon: Leaf,
      price: '$22,000/month',
      features: ['Climate modeling', 'Carbon capture optimization', 'Renewable energy research']
    },
    {
      title: 'Financial Research',
      description: 'Market analysis, risk assessment, and trading strategies',
      icon: TrendingUp,
      price: '$25,000/month',
      features: ['Market prediction models', 'Risk assessment', 'Portfolio optimization']
    }
  ];

  const pricing = [
    {
      name: 'Research Starter',
      price: '$8,000',
      period: '/month',
      description: 'Basic autonomous research capabilities for small teams',
      features: [
        'Literature analysis (1000 papers/month)',
        'Basic hypothesis generation',
        'Standard research templates',
        'Email support',
        'Basic analytics dashboard'
      ]
    },
    {
      name: 'Research Professional',
      price: '$25,000',
      period: '/month',
      description: 'Advanced research automation for growing organizations',
      features: [
        'Unlimited literature analysis',
        'Advanced hypothesis generation',
        'Custom research protocols',
        'Priority support',
        'Advanced analytics & predictions',
        'Multi-domain research support'
      ],
      popular: true
    },
    {
      name: 'Research Enterprise',
      price: '$75,000',
      period: '/month',
      description: 'Complete research automation for large institutions',
      features: [
        'Everything in Professional',
        'Custom AI model training',
        'Dedicated research scientist',
        '24/7 support',
        'White-label solutions',
        'API access & integrations'
      ]
    }
  ];

  const successMetrics = [
    {
      metric: '10x',
      description: 'Faster research discovery',
      icon: Rocket
    },
    {
      metric: '85%',
      description: 'Higher success rate',
      icon: Target
    },
    {
      metric: '24/7',
      description: 'Continuous operation',
      icon: Clock
    },
    {
      metric: 'Global',
      description: 'Research coverage',
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(59,130,246,0.1)_50%,transparent_70%)] animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full">
                <Brain className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6">
              AI Autonomous Research Assistant
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              The world's first truly autonomous AI research assistant that independently conducts research, 
              discovers new knowledge, and accelerates scientific breakthroughs across all domains.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                Start Research Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-400 rounded-full font-semibold text-lg hover:bg-blue-400 hover:text-gray-900 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full">
                    <metric.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  {metric.metric}
                </div>
                <p className="text-gray-300 text-sm md:text-base">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Revolutionary Research Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of research with our autonomous AI assistant
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-200">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Domains Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-indigo-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Research Domains
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI assistant specializes in multiple research domains
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchDomains.map((domain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg mr-3">
                    <domain.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{domain.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {domain.description}
                </p>
                
                <div className="text-blue-400 font-semibold text-lg mb-4">
                  {domain.price}
                </div>

                <ul className="space-y-2">
                  {domain.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-200 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Research Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect research automation plan for your organization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm rounded-2xl p-8 border ${
                  plan.popular 
                    ? 'border-blue-400/60 shadow-lg shadow-blue-500/25' 
                    : 'border-blue-500/20'
                } hover:border-blue-400/40 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-200">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                      : 'bg-blue-600/20 border border-blue-400 hover:bg-blue-600/30'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/50 to-indigo-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Ready to Revolutionize Research?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the research revolution and accelerate discoveries with autonomous AI research
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                Start Research Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-400 rounded-full font-semibold text-lg hover:bg-blue-400 hover:text-gray-900 transition-all duration-300"
              >
                Contact Research Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}