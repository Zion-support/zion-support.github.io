import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  GitBranch, 
  Bug, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Rocket,
  Brain,
  Cpu,
  Database,
  Cloud,
  Lock,
  BarChart3,
  MessageSquare,
  GitPullRequest,
  TestTube,
  Play,
  Pause,
  RefreshCw,
  AlertTriangle,
  Eye,
  Search,
  Filter,
  Download,
  Upload,
  Settings,
  Monitor,
  Smartphone,
  Globe,
  Server,
  HardDrive,
  Network,
  Key,
  Fingerprint,
  ShieldCheck,
  Activity,
  Target,
  Award,
  Lightbulb,
  BookOpen,
  Video,
  Headphones,
  Calendar,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function DeveloperProductivityCopilot() {
  const features = [
    {
      icon: GitPullRequest,
      title: 'AI-Powered PR Reviews',
      description: 'Automated code review with intelligent suggestions for improvements, security vulnerabilities, and best practices.',
      benefits: ['Faster review cycles', 'Consistent code quality', 'Security vulnerability detection']
    },
    {
      icon: TestTube,
      title: 'Intelligent Test Generation',
      description: 'AI-generated test cases based on code analysis, ensuring comprehensive coverage and edge case testing.',
      benefits: ['Improved test coverage', 'Reduced manual testing time', 'Better bug detection']
    },
    {
      icon: Activity,
      title: 'CI/CD Insights',
      description: 'Real-time monitoring and optimization of your continuous integration and deployment pipelines.',
      benefits: ['Faster deployments', 'Reduced build failures', 'Performance optimization']
    },
    {
      icon: Brain,
      title: 'Code Quality Analysis',
      description: 'Advanced static analysis with AI-powered recommendations for code improvements and refactoring.',
      benefits: ['Better code maintainability', 'Reduced technical debt', 'Improved performance']
    }
  ];

  const capabilities = [
    {
      category: 'Code Review & Analysis',
      items: [
        'Automated PR review with AI insights',
        'Code quality scoring and metrics',
        'Security vulnerability detection',
        'Performance optimization suggestions',
        'Best practices enforcement',
        'Code duplication detection'
      ]
    },
    {
      category: 'Testing & Quality Assurance',
      items: [
        'AI-generated test cases',
        'Test coverage analysis',
        'Automated bug detection',
        'Regression testing automation',
        'Performance testing insights',
        'Security testing automation'
      ]
    },
    {
      category: 'CI/CD Optimization',
      items: [
        'Pipeline performance monitoring',
        'Build failure prediction',
        'Deployment optimization',
        'Resource utilization analysis',
        'Automated rollback triggers',
        'Performance benchmarking'
      ]
    },
    {
      category: 'Development Insights',
      items: [
        'Team productivity metrics',
        'Code review velocity tracking',
        'Technical debt monitoring',
        'Development trend analysis',
        'Resource allocation insights',
        'Project timeline optimization'
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: '10x Faster Development',
      description: 'Accelerate your development cycles with AI-powered automation and insights.',
      metric: '10x'
    },
    {
      icon: Shield,
      title: '99.9% Code Quality',
      description: 'Maintain exceptional code quality with automated analysis and recommendations.',
      metric: '99.9%'
    },
    {
      icon: TrendingUp,
      title: '50% Fewer Bugs',
      description: 'Reduce production bugs with intelligent testing and quality assurance.',
      metric: '50%'
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring and optimization of your development processes.',
      metric: '24/7'
    }
  ];

  const useCases = [
    {
      industry: 'Software Development',
      description: 'Accelerate development cycles and improve code quality for software teams.',
      examples: ['Web applications', 'Mobile apps', 'API development', 'Microservices']
    },
    {
      industry: 'DevOps & Infrastructure',
      description: 'Optimize CI/CD pipelines and infrastructure deployment processes.',
      examples: ['Cloud deployments', 'Container orchestration', 'Infrastructure as Code', 'Monitoring systems']
    },
    {
      industry: 'Quality Assurance',
      description: 'Automate testing processes and improve test coverage and accuracy.',
      examples: ['Unit testing', 'Integration testing', 'Performance testing', 'Security testing']
    },
    {
      industry: 'Code Review',
      description: 'Streamline code review processes with AI-powered insights and automation.',
      examples: ['Peer reviews', 'Security audits', 'Performance reviews', 'Architecture reviews']
    }
  ];

  const pricing = {
    starter: {
      name: 'Starter',
      price: '$99',
      period: 'per month',
      description: 'Perfect for small development teams',
      features: [
        'Up to 5 developers',
        'Basic code analysis',
        'Standard test generation',
        'Email support',
        'Basic CI/CD insights'
      ],
      cta: 'Get Started',
      popular: false
    },
    professional: {
      name: 'Professional',
      price: '$299',
      period: 'per month',
      description: 'Ideal for growing development teams',
      features: [
        'Up to 20 developers',
        'Advanced code analysis',
        'AI-powered test generation',
        'Priority support',
        'Advanced CI/CD insights',
        'Team productivity metrics',
        'Custom integrations'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    enterprise: {
      name: 'Enterprise',
      price: 'Custom',
      period: 'per month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited developers',
        'Full AI capabilities',
        'Custom AI models',
        'Dedicated support',
        'Advanced analytics',
        'Custom integrations',
        'On-premise deployment',
        'SLA guarantees'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  };

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <>
      <SEO
        title="Developer Productivity Copilot - AI-Powered Development Tools | Zion Tech Group"
        description="Transform your development workflow with our AI-powered Developer Productivity Copilot. Automated code reviews, intelligent testing, and CI/CD optimization."
        canonical="/services/developer-productivity-copilot"
        keywords="developer productivity, AI code review, automated testing, CI/CD optimization, code quality analysis"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
          <div className="container-responsive relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Code className="w-4 h-4" />
                Developer Productivity
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Developer Productivity{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Copilot
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Supercharge your development workflow with AI-powered tools that automate code reviews, 
                generate intelligent tests, and optimize your CI/CD pipelines for maximum productivity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                AI-Powered Development Tools
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our Developer Productivity Copilot combines cutting-edge AI with deep development expertise 
                to transform how you write, test, and deploy code.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-700/50 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Comprehensive Development Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From code review to deployment, our AI copilot handles every aspect of your development workflow.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {capabilities.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50"
                >
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    {category.category}
                  </h3>
                  
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <ArrowRight className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Transform Your Development Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience unprecedented productivity gains with AI-powered development automation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-slate-700/50 rounded-xl border border-slate-600/50"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    {benefit.metric}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Perfect for Every Development Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Whether you're building web apps, mobile solutions, or enterprise systems, our copilot adapts to your needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.industry}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {useCase.industry}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {useCase.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {useCase.examples.map((example, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your team size and development needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(pricing).map(([key, plan], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative p-8 rounded-xl border transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/50 scale-105'
                      : 'bg-slate-700/50 border-slate-600/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-white">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 ml-2">
                        {plan.period}
                      </span>
                    </div>
                    
                    <p className="text-gray-300">
                      {plan.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-slate-600 text-white hover:bg-slate-500'
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Development Workflow?
              </h2>
              
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of developers who have already accelerated their productivity with our AI copilot.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container-responsive">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Get in Touch
                </h2>
                
                <p className="text-xl text-gray-300 mb-8">
                  Ready to revolutionize your development process? Our team is here to help you get started.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span>{contactInfo.phone}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  
                  <div className="flex items-start gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="p-8 bg-slate-700/50 rounded-xl border border-slate-600/50"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Request a Demo
                </h3>
                
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="text"
                      placeholder="Company"
                      className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <textarea
                      placeholder="Tell us about your development needs..."
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
                  >
                    Request Demo
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}