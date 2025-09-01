import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Shield, 
  Bug, 
  Zap, 
  Eye, 
  Brain, 
  Lock, 
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  GitBranch,
  Database,
  Server,
  Globe,
  Clock,
  Award,
  Star,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Building,
  Users,
  TrendingUp,
  Target,
  Rocket,
  Sparkles,
  Cpu,
  Network,
  FileCode,
  Search,
  BarChart3,
  Settings,
  RefreshCw,
  GitPullRequest,
  GitCommit,
  GitMerge,
  GitCompare,
  GitBranch2,
  GitPullRequestClosed,
  GitCommit2,
  GitMerge2,
  GitCompare2,
  GitBranch3,
  GitPullRequestDraft,
  GitCommit3,
  GitMerge3,
  GitCompare3,
  GitBranch4,
  GitPullRequest2,
  GitCommit4,
  GitMerge4,
  GitCompare4,
  GitBranch5,
  GitPullRequest3,
  GitCommit5,
  GitMerge5,
  GitCompare5
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AICodeReviewSecurity() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Code Analysis',
      description: 'Advanced machine learning algorithms that understand code context and identify potential issues'
    },
    {
      icon: Shield,
      title: 'Security Vulnerability Detection',
      description: 'Comprehensive security scanning for OWASP Top 10, CWE, and custom security rules'
    },
    {
      icon: Bug,
      title: 'Automated Bug Detection',
      description: 'Static and dynamic analysis to catch bugs before they reach production'
    },
    {
      icon: Code,
      title: 'Multi-Language Support',
      description: 'Support for 50+ programming languages including Python, JavaScript, Java, C++, Go, Rust'
    },
    {
      icon: GitBranch,
      title: 'Git Integration',
      description: 'Seamless integration with GitHub, GitLab, Bitbucket, and Azure DevOps'
    },
    {
      icon: Zap,
      title: 'Real-time Analysis',
      description: 'Instant feedback on every commit, pull request, and code review'
    }
  ];

  const benefits = [
    'Reduce security vulnerabilities by 85%',
    'Decrease bug density by 60%',
    'Accelerate code review process by 3x',
    'Improve code quality and maintainability',
    'Ensure compliance with security standards',
    'Reduce technical debt and refactoring costs'
  ];

  const useCases = [
    {
      industry: 'Financial Services',
      applications: ['PCI DSS compliance', 'Secure coding standards', 'Fraud prevention', 'Regulatory compliance'],
      icon: Shield
    },
    {
      industry: 'Healthcare',
      applications: ['HIPAA compliance', 'Medical device security', 'Patient data protection', 'Clinical system validation'],
      icon: Lock
    },
    {
      industry: 'E-commerce',
      applications: ['Payment security', 'User data protection', 'API security', 'Mobile app security'],
      icon: Globe
    },
    {
      industry: 'Government',
      applications: ['FedRAMP compliance', 'FISMA requirements', 'National security standards', 'Public sector security'],
      icon: Building
    }
  ];

  const technologies = [
    'SonarQube Enterprise',
    'Snyk Security Platform',
    'Veracode Static Analysis',
    'Checkmarx SAST',
    'Fortify Static Code Analyzer',
    'CodeQL (GitHub)',
    'Semgrep',
    'Custom ML Models',
    'OpenAI Codex Integration',
    'GitHub Copilot Security'
  ];

  const pricingPlans = [
    {
      name: 'Developer',
      description: 'Perfect for individual developers and small teams',
      price: { monthly: 49, annual: 490 },
      features: [
        'Up to 5 repositories',
        'Basic security scanning',
        'Code quality metrics',
        'GitHub integration',
        'Email support',
        'Monthly security reports'
      ],
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      popular: false,
      cta: 'Start Free Trial',
      link: '/contact'
    },
    {
      name: 'Team',
      description: 'Ideal for development teams and growing companies',
      price: { monthly: 199, annual: 1990 },
      features: [
        'Up to 25 repositories',
        'Advanced security scanning',
        'Custom security rules',
        'Priority support',
        'Team collaboration tools',
        'API access',
        'Custom integrations',
        'Training sessions'
      ],
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex security needs',
      price: { monthly: 799, annual: 7990 },
      features: [
        'Unlimited repositories',
        'Custom security policies',
        'Dedicated security team',
        '24/7 priority support',
        'On-premise deployment',
        'Custom integrations',
        'White-label solutions',
        'SLA guarantees',
        'Compliance reporting'
      ],
      icon: Building,
      color: 'from-orange-500 to-red-500',
      popular: false,
      cta: 'Contact Sales',
      link: '/contact'
    }
  ];

  const securityFeatures = [
    {
      title: 'Static Application Security Testing (SAST)',
      description: 'Analyze source code for security vulnerabilities without executing the application',
      benefits: ['Early vulnerability detection', 'Cost-effective security testing', 'Comprehensive code coverage']
    },
    {
      title: 'Dynamic Application Security Testing (DAST)',
      description: 'Test running applications for security vulnerabilities from an external perspective',
      benefits: ['Real-world attack simulation', 'Runtime vulnerability detection', 'API security testing']
    },
    {
      title: 'Software Composition Analysis (SCA)',
      description: 'Identify and manage open source dependencies and their associated security risks',
      benefits: ['License compliance', 'Vulnerability tracking', 'Dependency management']
    },
    {
      title: 'Interactive Application Security Testing (IAST)',
      description: 'Combine SAST and DAST approaches for comprehensive security analysis',
      benefits: ['Hybrid security testing', 'Accurate vulnerability detection', 'Reduced false positives']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="AI-Powered Code Review & Security Analysis | Zion Tech Group"
        description="Advanced AI-powered code review and security analysis service. Detect vulnerabilities, improve code quality, and ensure compliance with industry standards. 50+ languages supported."
        keywords="AI code review, security analysis, static analysis, dynamic analysis, code quality, vulnerability detection, secure coding, OWASP, CWE, Git integration"
        canonical="https://ziontechgroup.com/services/ai-code-review-security"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Enterprise Security Solution
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Code Review & 
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Security Analysis</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Protect your codebase with advanced AI-powered security analysis. Detect vulnerabilities, 
              improve code quality, and ensure compliance with industry standards across 50+ programming languages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/20 transition-all duration-200"
              >
                Watch Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive code analysis and security testing powered by cutting-edge AI technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Detail */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Security Testing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Multiple testing approaches to ensure your applications are secure from every angle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
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

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Security Solution?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Proven results and comprehensive protection for your development workflow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Trusted by organizations across industries for their security needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <ul className="space-y-2 text-gray-300">
                  {useCase.applications.map((app, appIndex) => (
                    <li key={appIndex} className="text-sm">{app}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powered by Industry-Leading Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Integration with the most advanced security and code analysis tools
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-gray-300 text-sm font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your security needs and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-purple-500 bg-gradient-to-br from-purple-500/20 to-pink-500/20' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">
                    ${plan.price.monthly}
                    <span className="text-lg text-gray-300 font-normal">/month</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    ${plan.price.annual} billed annually (save 17%)
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.link}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Codebase?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers who trust our AI-powered security analysis to protect their applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/20 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Have questions about our security solutions? Our team is here to help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}