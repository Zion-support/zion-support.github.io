import React from 'react';
import { motion } from 'framer-motion';
import { Code, Shield, Eye, AlertTriangle, CheckCircle, ArrowRight, Brain, Zap, Target, Globe, Lock, Clock, DollarSign, Star, Rocket, Cpu, Cloud, Database, Network, FileText, Search, Filter, Activity, Sparkles, Award, GitFork, Atom, Leaf, Gamepad2, Coins, Satellite, MessageCircle, Server, ShoppingCart, Smartphone, Users, Eye as EyeIcon, Heart, Building, Car, Plane, Ship, Truck, CreditCard, PiggyBank, Calculator, PieChart, LineChart, Activity as ActivityIcon, TrendingDown, AlertCircle, CheckCircle2, XCircle, Info, HelpCircle, Settings, RefreshCw, Download, Upload, Share2, ExternalLink, ArrowUpRight, ChevronRight, ChevronDown, ChevronUp, Minus, Plus, Equal, Divide, Percent, Hash, AtSign, Hash as HashIcon, AtSign as AtSignIcon, GitBranch, GitCommit, GitPullRequest, GitMerge, GitCompare, GitBranch as GitBranchIcon, GitCommit as GitCommitIcon, GitPullRequest as GitPullRequestIcon, GitMerge as GitMergeIcon, GitCompare as GitCompareIcon } from 'lucide-react';

const AICodeReviewSecurityScanner = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Vulnerability Detection',
      description: 'Advanced machine learning algorithms that analyze code patterns, identify security vulnerabilities, and suggest remediation strategies.',
      benefits: ['Automated vulnerability scanning', 'Pattern recognition', 'False positive reduction', 'Continuous learning']
    },
    {
      icon: Shield,
      title: 'Comprehensive Security Coverage',
      description: 'Cover all major security vulnerabilities including OWASP Top 10, CWE, and industry-specific security requirements.',
      benefits: ['OWASP Top 10 coverage', 'CWE compliance', 'Industry standards', 'Custom rule sets']
    },
    {
      icon: Code,
      title: 'Multi-Language Support',
      description: 'Support for all major programming languages including Python, JavaScript, Java, C#, Go, Rust, and more.',
      benefits: ['25+ programming languages', 'Framework-specific rules', 'Language-specific patterns', 'Cross-language analysis']
    },
    {
      icon: Eye,
      title: 'Real-time Code Analysis',
      description: 'Continuous monitoring of code changes with instant security feedback during development and CI/CD pipelines.',
      benefits: ['Real-time scanning', 'CI/CD integration', 'Instant feedback', 'Automated blocking']
    },
    {
      icon: AlertTriangle,
      title: 'Intelligent Risk Scoring',
      description: 'AI-driven risk assessment that prioritizes vulnerabilities based on severity, exploitability, and business impact.',
      benefits: ['Risk-based prioritization', 'Business context awareness', 'Exploitability assessment', 'Impact analysis']
    },
    {
      icon: GitBranch,
      title: 'Git Integration & Workflow',
      description: 'Seamless integration with Git workflows, pull request reviews, and automated security checks.',
      benefits: ['Pull request scanning', 'Branch protection', 'Automated reviews', 'Workflow integration']
    }
  ];

  const pricing = [
    {
      name: 'Developer',
      price: '$99',
      period: '/month',
      description: 'Perfect for individual developers',
      features: [
        'Up to 10 repositories',
        'Basic security scanning',
        'Standard vulnerability database',
        'Email support',
        'Basic reporting'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Team',
      price: '$299',
      period: '/month',
      description: 'Ideal for development teams',
      features: [
        'Up to 50 repositories',
        'Advanced AI scanning',
        'Full vulnerability database',
        'Priority support',
        'Custom rule sets',
        'API access',
        'CI/CD integration'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited repositories',
        'Custom AI models',
        'White-label solutions',
        '24/7 dedicated support',
        'Advanced integrations',
        'Custom workflows',
        'On-premise deployment'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Application Development',
      description: 'Integrate security scanning into your development workflow to catch vulnerabilities before they reach production.',
      icon: Code,
      benefits: ['Early vulnerability detection', 'Developer education', 'Secure coding practices', 'Quality assurance']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automate security checks in your CI/CD pipeline to ensure code quality and security at every stage.',
      icon: GitBranch,
      benefits: ['Automated security gates', 'Pipeline integration', 'Quality gates', 'Deployment safety']
    },
    {
      title: 'Code Review Process',
      description: 'Enhance your code review process with AI-powered security analysis and automated vulnerability detection.',
      icon: Eye,
      benefits: ['Automated security reviews', 'Pull request scanning', 'Reviewer assistance', 'Quality improvement']
    },
    {
      title: 'Compliance & Auditing',
      description: 'Meet regulatory requirements and maintain security standards with comprehensive code security auditing.',
      icon: Shield,
      benefits: ['Regulatory compliance', 'Security audits', 'Documentation', 'Risk assessment']
    }
  ];

  const vulnerabilityTypes = [
    {
      title: 'SQL Injection',
      description: 'Prevent unauthorized database access through malicious SQL queries.',
      icon: Database,
      examples: ['Parameterized queries', 'Input validation', 'ORM usage', 'Database permissions']
    },
    {
      title: 'Cross-Site Scripting (XSS)',
      description: 'Protect against malicious script injection in web applications.',
      icon: Globe,
      examples: ['Output encoding', 'Content Security Policy', 'Input sanitization', 'HTTPS enforcement']
    },
    {
      title: 'Authentication Bypass',
      description: 'Secure authentication mechanisms and prevent unauthorized access.',
      icon: Lock,
      examples: ['Multi-factor authentication', 'Session management', 'Password policies', 'Access controls']
    },
    {
      title: 'Insecure Dependencies',
      description: 'Identify and update vulnerable third-party libraries and dependencies.',
      icon: Package,
      examples: ['Dependency scanning', 'Vulnerability databases', 'Update automation', 'License compliance']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium mb-6">
              <Code className="w-4 h-4 mr-2" />
              AI-Powered Code Security
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Code Review
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Security Scanner
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your applications with AI-powered code security scanning that detects 
              vulnerabilities, enforces secure coding practices, and integrates seamlessly 
              with your development workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 flex items-center justify-center"
              >
                Schedule Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vulnerability Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Security Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI scanner detects all major types of security vulnerabilities with 
              industry-leading accuracy and minimal false positives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vulnerabilityTypes.map((vulnType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                    <vulnType.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{vulnType.title}</h3>
                    <p className="text-gray-300 mb-3">{vulnType.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Prevention Methods:</h4>
                  <ul className="space-y-1">
                    {vulnType.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <Minus className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced AI-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with comprehensive security analysis to deliver 
              accurate vulnerability detection and actionable remediation guidance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your development team's security needs. 
              All plans include our core AI-powered security scanning features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-green-500/50 ring-2 ring-green-500/20' 
                    : 'border-gray-700'
                } hover:border-green-500/50 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Development Workflow Integration
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Code Review Security Scanner integrates seamlessly with your existing 
              development tools and workflows to ensure security at every stage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Code?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading development teams that trust our AI-powered platform to 
              detect vulnerabilities and maintain secure coding practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 flex items-center justify-center"
              >
                Contact Sales
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AICodeReviewSecurityScanner;