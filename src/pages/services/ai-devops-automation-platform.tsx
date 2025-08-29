import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Zap, 
  Brain, 
  GitBranch, 
  Server, 
  Cloud, 
  CheckCircle,
  ArrowRight,
  Code,
  Database,
  Network,
  Shield,
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
  Globe,
  Lock,
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

export default function AIDevOpsAutomationPlatform() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Pipeline Optimization',
      description: 'Machine learning algorithms that automatically optimize CI/CD pipelines for speed and reliability'
    },
    {
      icon: Zap,
      title: 'Intelligent Deployment Automation',
      description: 'Smart deployment strategies with automatic rollback and canary testing based on real-time metrics'
    },
    {
      icon: GitBranch,
      title: 'Advanced GitOps Workflows',
      description: 'Automated infrastructure management using Git as the single source of truth for deployments'
    },
    {
      icon: Server,
      title: 'Infrastructure as Code (IaC)',
      description: 'Automated infrastructure provisioning and management using Terraform, CloudFormation, and Kubernetes'
    },
    {
      icon: Cloud,
      title: 'Multi-Cloud Orchestration',
      description: 'Unified management across AWS, Azure, GCP, and on-premise environments with intelligent resource allocation'
    },
    {
      icon: Shield,
      title: 'Security-First Automation',
      description: 'Built-in security scanning, compliance checking, and vulnerability management in every pipeline stage'
    }
  ];

  const benefits = [
    'Reduce deployment time by 80%',
    'Decrease deployment failures by 90%',
    'Improve infrastructure efficiency by 60%',
    'Reduce manual DevOps tasks by 95%',
    'Accelerate time-to-market by 3x',
    'Lower operational costs by 40%'
  ];

  const useCases = [
    {
      industry: 'Financial Services',
      applications: ['Compliance automation', 'Secure deployment pipelines', 'Audit trail management', 'Risk mitigation'],
      icon: Shield
    },
    {
      industry: 'E-commerce',
      applications: ['High-frequency deployments', 'Load testing automation', 'Performance optimization', 'Scalability management'],
      icon: Globe
    },
    {
      industry: 'Healthcare',
      applications: ['HIPAA compliance automation', 'Patient data security', 'Clinical system deployment', 'Emergency rollback'],
      icon: Lock
    },
    {
      industry: 'Manufacturing',
      applications: ['IoT device management', 'Production system updates', 'Quality control automation', 'Supply chain integration'],
      icon: Cpu
    }
  ];

  const technologies = [
    'Kubernetes',
    'Docker',
    'Terraform',
    'Ansible',
    'Jenkins',
    'GitLab CI/CD',
    'GitHub Actions',
    'AWS CodePipeline',
    'Azure DevOps',
    'Google Cloud Build',
    'Prometheus',
    'Grafana',
    'ELK Stack',
    'Istio Service Mesh',
    'Helm Charts'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams and startups',
      price: { monthly: 199, annual: 1990 },
      features: [
        'Up to 5 applications',
        'Basic CI/CD pipelines',
        'GitHub integration',
        'Email support',
        'Standard templates',
        'Monthly reports'
      ],
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      popular: false,
      cta: 'Start Free Trial',
      link: '/contact'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing development teams',
      price: { monthly: 599, annual: 5990 },
      features: [
        'Up to 25 applications',
        'Advanced automation',
        'Multi-cloud support',
        'Priority support',
        'Custom templates',
        'Real-time monitoring',
        'API access',
        'Training sessions'
      ],
      icon: Building,
      color: 'from-blue-500 to-cyan-500',
      popular: true,
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex DevOps needs',
      price: { monthly: 1499, annual: 14990 },
      features: [
        'Unlimited applications',
        'Custom AI models',
        'Dedicated DevOps team',
        '24/7 priority support',
        'On-premise deployment',
        'White-label solutions',
        'SLA guarantees',
        'Compliance reporting'
      ],
      icon: Globe,
      color: 'from-purple-500 to-pink-500',
      popular: false,
      cta: 'Contact Sales',
      link: '/contact'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <SEO 
        title="AI-Powered DevOps Automation Platform | Zion Tech Group"
        description="Revolutionize your DevOps with AI-powered automation. Optimize pipelines, automate deployments, and manage infrastructure with intelligent automation."
        keywords="DevOps automation, CI/CD automation, infrastructure as code, GitOps, deployment automation, pipeline optimization"
        canonical="https://ziontechgroup.com/services/ai-devops-automation-platform"
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-medium mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              DevOps Automation Solution
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered DevOps 
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Automation Platform</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize your DevOps with intelligent automation. Optimize CI/CD pipelines, 
              automate deployments, and manage infrastructure with AI-powered insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-green-500 text-green-300 font-semibold rounded-lg hover:bg-green-500/20 transition-all duration-200"
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
              Advanced DevOps Automation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive automation platform powered by cutting-edge AI technology
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
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose Our DevOps Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your development and operations with proven automation results
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
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Trusted by organizations across industries for their DevOps automation needs
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
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
              Powered by Industry-Leading Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Integration with the most advanced DevOps and automation tools
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
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your DevOps automation needs
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
                    ? 'border-blue-500 bg-gradient-to-br from-blue-500/20 to-cyan-500/20' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your DevOps?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading companies using AI to revolutionize their development and operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-green-500 text-green-300 font-semibold rounded-lg hover:bg-green-500/20 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
              Have questions about our DevOps automation platform? Our team is here to help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-green-400 mb-4" />
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