import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Workflow, 
  Zap, 
  CheckCircle, 
  BarChart3, 
  Sparkles, 
  ArrowRight, 
  Brain,
  Clock,
  Shield,
  Users,
  Cpu,
  Database
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIWorkflowAutomation() {
  const features = [
    'AI-powered process mapping and optimization',
    'Automated workflow creation with drag-and-drop interface',
    'Intelligent task routing and prioritization',
    'Real-time performance analytics and insights',
    'Integration with 100+ business applications',
    'Custom AI models for industry-specific workflows',
    'Predictive maintenance and error prevention',
    'Multi-language support and localization'
  ];

  const benefits = [
    'Reduce manual work by 70-85%',
    'Improve process efficiency by 60%',
    'Cut operational costs by 40-50%',
    'Reduce human errors by 90%',
    'Scale operations without proportional headcount increase',
    '24/7 automated operations with AI monitoring'
  ];

  const useCases = [
    'Customer onboarding automation',
    'Invoice processing and approval workflows',
    'HR recruitment and onboarding',
    'Sales lead qualification and routing',
    'Quality assurance and testing automation',
    'Compliance monitoring and reporting'
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$299',
      period: '/month',
      features: ['Up to 10 workflows', '5 integrations', 'Basic AI models', 'Email support'],
      recommended: false
    },
    {
      plan: 'Professional',
      price: '$799',
      period: '/month',
      features: ['Up to 50 workflows', '25 integrations', 'Advanced AI models', 'Priority support', 'Custom templates'],
      recommended: true
    },
    {
      plan: 'Enterprise',
      price: '$2,499',
      period: '/month',
      features: ['Unlimited workflows', 'Unlimited integrations', 'Custom AI models', 'Dedicated support', 'White-label options'],
      recommended: false
    }
  ];

  const techStack = [
    { name: 'OpenAI GPT-4', url: 'https://openai.com/', category: 'AI/ML' },
    { name: 'LangChain', url: 'https://www.langchain.com/', category: 'AI Framework' },
    { name: 'Node.js', url: 'https://nodejs.org/', category: 'Backend' },
    { name: 'React', url: 'https://reactjs.org/', category: 'Frontend' },
    { name: 'PostgreSQL', url: 'https://www.postgresql.org/', category: 'Database' },
    { name: 'Redis', url: 'https://redis.io/', category: 'Cache' },
    { name: 'Docker', url: 'https://www.docker.com/', category: 'Containerization' },
    { name: 'Kubernetes', url: 'https://kubernetes.io/', category: 'Orchestration' }
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      <SEO 
        title="AI Workflow Automation - Zion Tech Group"
        description="Transform your business operations with AI-powered workflow automation. Reduce manual work by 70-85% and improve efficiency by 60%."
        canonical="/services/ai-workflow-automation"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Workflow Automation</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your business operations with intelligent automation that learns, adapts, and scales with your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                Visit Our Site
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
          <motion.div 
            className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features for <span className="text-cyan-400">Modern Businesses</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Our AI workflow automation platform combines cutting-edge technology with intuitive design
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <p className="text-slate-300 text-sm">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Measurable <span className="text-cyan-400">Business Impact</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              See real results with our AI-powered workflow automation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="ml-3 text-lg font-semibold text-white">Benefit {index + 1}</h3>
                </div>
                <p className="text-slate-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Popular <span className="text-cyan-400">Use Cases</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Discover how businesses are transforming their operations
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">{useCase}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent <span className="text-cyan-400">Pricing</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative bg-slate-800/50 border rounded-xl p-8 ${
                  plan.recommended 
                    ? 'border-cyan-500/50 bg-slate-800/70' 
                    : 'border-slate-700/50'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-all duration-300 ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built with <span className="text-cyan-400">Modern Technology</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Our platform leverages the latest technologies for optimal performance
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <motion.a
                key={index}
                href={tech.url}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800/60 border border-slate-700/60 rounded-lg p-4 text-center hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-sm text-cyan-400 mb-1">{tech.category}</div>
                <div className="text-white font-semibold">{tech.name}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to <span className="text-cyan-400">Automate</span> Your Workflows?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their operations with AI-powered automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-400">
              Questions? Email <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:underline">kleber@ziontechgroup.com</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}