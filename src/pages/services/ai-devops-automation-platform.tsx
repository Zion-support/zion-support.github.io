import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain,
  Cpu,
  Zap,
  Shield,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Calendar,
  DollarSign,
  Lock,
  Eye,
  Clock,
  Award,
  Rocket,
  Briefcase,
  Building,
  Database,
  Server,
  Network,
  Target,
  TrendingUp,
  FileText,
  Code,
  GitBranch,
  Cloud,
  Activity,
  BarChart3,
  Settings,
  Terminal,
  Workflow,
  GitCommit,
  GitPullRequest,
  GitMerge,
  GitBranchPlus,
  GitCompare,
  GitPullRequestClosed,
  GitPullRequestDraft,
  GitPullRequestNew,
  GitPullRequestClosed,
  GitPullRequestDraft,
  GitPullRequestNew,
  GitPullRequestClosed,
  GitPullRequestDraft,
  GitPullRequestNew
} from 'lucide-react';

export function AIDevOpsAutomationPlatform() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Code Review',
      description: 'Intelligent code analysis and automated review suggestions using machine learning',
      benefits: ['90% faster code reviews', 'Automated bug detection', 'Security vulnerability scanning']
    },
    {
      icon: Workflow,
      title: 'Intelligent CI/CD Pipelines',
      description: 'Self-optimizing continuous integration and deployment workflows',
      benefits: ['Auto-scaling pipelines', 'Smart test prioritization', 'Predictive deployment success']
    },
    {
      icon: Shield,
      title: 'Automated Security Scanning',
      description: 'Continuous security monitoring and automated vulnerability remediation',
      benefits: ['Real-time threat detection', 'Automated patch deployment', 'Compliance monitoring']
    },
    {
      icon: BarChart3,
      title: 'Performance Optimization',
      description: 'AI-driven performance analysis and automatic optimization recommendations',
      benefits: ['Auto-scaling optimization', 'Resource usage optimization', 'Performance bottleneck detection']
    },
    {
      icon: Activity,
      title: 'Predictive Monitoring',
      description: 'Proactive issue detection and automated incident response',
      benefits: ['Preventive maintenance', 'Automated incident resolution', 'Capacity planning']
    },
    {
      icon: GitBranch,
      title: 'Smart Git Operations',
      description: 'Intelligent branch management and automated merge conflict resolution',
      benefits: ['Automated conflict resolution', 'Smart branch strategies', 'Code quality gates']
    }
  ];

  const pricingPlans = [
    {
      name: 'Team',
      price: '$199',
      period: '/month',
      description: 'Perfect for development teams',
      features: [
        'Up to 10 developers',
        'Basic AI code review',
        'CI/CD pipelines',
        'Security scanning',
        'Email support',
        'GitHub/GitLab integration'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For growing organizations',
      features: [
        'Up to 50 developers',
        'Advanced AI features',
        'Custom pipelines',
        'Advanced security',
        'Priority support',
        'Custom integrations',
        'Dedicated account manager'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise Plus',
      price: 'Custom',
      period: '',
      description: 'For large enterprises',
      features: [
        'Unlimited developers',
        'Full AI platform access',
        'Custom AI models',
        'Advanced compliance',
        '24/7 dedicated support',
        'On-premise deployment',
        'White-label options'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Software Development Teams',
      description: 'Streamline development workflows with AI-powered automation',
      icon: Users,
      benefits: ['Faster development cycles', 'Higher code quality', 'Reduced technical debt']
    },
    {
      title: 'DevOps Engineers',
      description: 'Automate infrastructure management and deployment processes',
      icon: Server,
      benefits: ['Reduced manual work', 'Faster deployments', 'Better reliability']
    },
    {
      title: 'Quality Assurance Teams',
      description: 'Automated testing and quality gates with AI insights',
      icon: CheckCircle,
      benefits: ['Faster testing cycles', 'Better test coverage', 'Automated bug detection']
    },
    {
      title: 'Security Teams',
      description: 'Continuous security monitoring and automated threat response',
      icon: Shield,
      benefits: ['Real-time security', 'Automated remediation', 'Compliance automation']
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'DevOps Lead',
      company: 'TechFlow Solutions',
      content: 'Our deployment time reduced from hours to minutes with the AI automation platform.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'Engineering Manager',
      company: 'CloudScale Inc',
      content: 'The AI code review catches issues we used to miss, improving our code quality significantly.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'CTO',
      company: 'InnovateTech',
      content: 'We\'ve seen a 60% reduction in production incidents since implementing the platform.',
      rating: 5
    }
  ];

  const performanceMetrics = [
    {
      icon: Clock,
      title: '90% Faster',
      description: 'Code review process',
      metric: '90%'
    },
    {
      icon: Zap,
      title: '10x Faster',
      description: 'Deployment cycles',
      metric: '10x'
    },
    {
      icon: Shield,
      title: '99.9% Uptime',
      description: 'System reliability',
      metric: '99.9%'
    },
    {
      icon: TrendingUp,
      title: '60% Reduction',
      description: 'Production incidents',
      metric: '60%'
    }
  ];

  const integrations = [
    {
      icon: GitBranch,
      name: 'GitHub',
      description: 'Full GitHub integration with automated workflows'
    },
    {
      icon: GitBranch,
      name: 'GitLab',
      description: 'Complete GitLab CI/CD automation'
    },
    {
      icon: Cloud,
      name: 'AWS',
      description: 'Native AWS services integration'
    },
    {
      icon: Cloud,
      name: 'Azure',
      description: 'Microsoft Azure DevOps integration'
    },
    {
      icon: Cloud,
      name: 'Google Cloud',
      description: 'GCP services and Kubernetes support'
    },
    {
      icon: Server,
      name: 'Docker',
      description: 'Container orchestration and management'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-blue-900 to-cyan-900 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              AI DevOps Automation Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your DevOps with AI-powered automation. Deploy faster, code better, and maintain higher quality with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2"
              >
                Schedule Demo
                <Calendar className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Proven Performance Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of DevOps with AI automation that delivers measurable improvements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{metric.metric}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{metric.title}</h3>
                <p className="text-gray-400 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              AI-Powered DevOps Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence combined with DevOps best practices for unprecedented automation capabilities
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
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:border-green-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Works with your existing tools and platforms for a smooth transition to AI-powered DevOps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <integration.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{integration.name}</h3>
                <p className="text-gray-400">{integration.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Developer-Friendly Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access to AI-powered DevOps automation with pricing designed for teams of all sizes
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
                className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-green-500 shadow-lg shadow-green-500/20' 
                    : 'border-gray-600'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white'
                      : 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Designed for DevOps Excellence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform is tailored to meet the unique needs of various DevOps roles and organizations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-300 mb-4">{useCase.description}</p>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Trusted by DevOps Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what DevOps professionals say about the transformative impact of AI automation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-green-400 text-sm">{testimonial.role}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900 via-blue-900 to-cyan-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Automate Your DevOps?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading development teams in leveraging AI for unprecedented DevOps automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2"
              >
                Schedule Demo
                <Calendar className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-green-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Leading AI DevOps automation platform
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Proven track record in DevOps
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Dedicated DevOps support team
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Custom solutions for your team
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}