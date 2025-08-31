import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Target, 
  TrendingUp, 
  BarChart3, 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Globe,
  Eye,
  Settings,
  Download,
  Calendar,
  Analytics,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  GitBranch,
  Server,
  Database,
  Network,
  Lock,
  Activity,
  PieChart,
  LineChart,
  Filter,
  Search,
  AlertTriangle,
  Lightbulb,
  UserCheck,
  MousePointer,
  Smartphone,
  Monitor,
  Cpu,
  Workflow,
  Rocket,
  GitCommit,
  GitPullRequest,
  GitMerge,
  GitCompare
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIDevOpsAutomationPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Code Review",
      description: "Intelligent code analysis that automatically detects bugs, security vulnerabilities, and optimization opportunities",
      benefits: ["Automated bug detection", "Security vulnerability scanning", "Code quality scoring", "Performance optimization suggestions"]
    },
    {
      icon: Workflow,
      title: "Intelligent CI/CD Pipelines",
      description: "Self-optimizing continuous integration and deployment pipelines that learn from deployment patterns",
      benefits: ["Auto-scaling pipelines", "Smart test prioritization", "Deployment risk assessment", "Rollback automation"]
    },
    {
      icon: Activity,
      title: "Predictive Infrastructure Management",
      description: "AI-driven infrastructure scaling and optimization based on usage patterns and performance metrics",
      benefits: ["Auto-scaling resources", "Cost optimization", "Performance monitoring", "Capacity planning"]
    },
    {
      icon: Shield,
      title: "Automated Security Scanning",
      description: "Continuous security monitoring and vulnerability detection across your entire DevOps pipeline",
      benefits: ["Real-time threat detection", "Compliance monitoring", "Security policy enforcement", "Incident response automation"]
    },
    {
      icon: BarChart3,
      title: "Performance Analytics & Optimization",
      description: "Comprehensive performance monitoring with AI-powered optimization recommendations",
      benefits: ["Performance bottleneck detection", "Resource utilization analysis", "Cost optimization", "Performance forecasting"]
    },
    {
      icon: Zap,
      title: "Intelligent Incident Response",
      description: "AI-powered incident detection, classification, and automated resolution workflows",
      benefits: ["Proactive incident detection", "Automated troubleshooting", "Escalation management", "Post-incident analysis"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$899",
      period: "/month",
      description: "Perfect for small development teams and startups",
      features: [
        "Up to 10 developers",
        "Basic AI code review",
        "Standard CI/CD pipelines",
        "Basic security scanning",
        "Email support",
        "Standard monitoring"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$2,499",
      period: "/month",
      description: "Ideal for growing development teams and mid-size companies",
      features: [
        "Up to 50 developers",
        "Advanced AI code review",
        "Intelligent CI/CD pipelines",
        "Advanced security scanning",
        "Priority support",
        "Custom dashboards",
        "Performance optimization",
        "Advanced analytics"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$5,999",
      period: "/month",
      description: "For large organizations with complex DevOps needs",
      features: [
        "Unlimited developers",
        "Enterprise AI models",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Advanced security features",
        "White-label options",
        "Custom ML models"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Software Development Teams",
      description: "Accelerate development cycles with AI-powered code review, automated testing, and intelligent CI/CD pipelines",
      metrics: ["60% faster deployment cycles", "45% reduction in bugs", "80% improvement in code quality", "70% reduction in manual reviews"]
    },
    {
      title: "DevOps Engineering",
      description: "Streamline infrastructure management with predictive scaling, automated monitoring, and intelligent incident response",
      metrics: ["50% reduction in infrastructure costs", "90% faster incident resolution", "75% improvement in uptime", "60% reduction in manual tasks"]
    },
    {
      title: "Security Operations",
      description: "Enhance security posture with continuous monitoring, automated vulnerability detection, and compliance management",
      metrics: ["85% faster threat detection", "70% reduction in security incidents", "95% compliance automation", "60% improvement in response time"]
    }
  ];

  const benefits = [
    "Accelerate deployment cycles by 60%",
    "Reduce infrastructure costs by 50%",
    "Improve code quality by 80%",
    "Boost team productivity by 70%",
    "Enhance security posture by 85%",
    "Reduce manual tasks by 75%"
  ];

  const industries = [
    { name: "Software Development", icon: "💻", description: "Accelerate development cycles" },
    { name: "E-commerce", icon: "🛍️", description: "Optimize deployment pipelines" },
    { name: "Financial Services", icon: "💰", description: "Secure and compliant DevOps" },
    { name: "Healthcare", icon: "🏥", description: "HIPAA-compliant automation" },
    { name: "Manufacturing", icon: "🏭", description: "IoT and edge computing DevOps" },
    { name: "Telecommunications", icon: "📱", description: "Network infrastructure automation" }
  ];

  const metrics = [
    { icon: Rocket, label: "Deployment Speed", value: "60%", description: "Faster deployment cycles" },
    { icon: Shield, label: "Security Incidents", value: "-70%", description: "Reduction in security issues" },
    { icon: TrendingUp, label: "Code Quality", value: "+80%", description: "Improvement in code quality" },
    { icon: Clock, label: "Response Time", value: "<5min", description: "Average incident response" }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <Code className="w-4 h-4 mr-2 text-green-400" />
                AI-Powered DevOps Automation
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI DevOps <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Automation Platform</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform your DevOps with AI-powered automation. Accelerate deployments, improve code quality, 
                and optimize infrastructure with intelligent automation that learns and adapts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-16 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <metric.icon className="w-12 h-12 text-green-400" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-gray-400 mb-1">{metric.label}</div>
                  <div className="text-sm text-gray-500">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful Features for <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">DevOps Success</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to automate, optimize, and secure your DevOps pipeline
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
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
        <section className="py-20 bg-black/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your DevOps automation needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-zinc-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-green-500/50 shadow-2xl shadow-green-500/20' 
                      : 'border-zinc-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                      : 'bg-zinc-700 text-white hover:bg-zinc-600'
                  }`}>
                    {plan.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Applications</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how teams across industries are transforming their DevOps with AI automation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-center text-sm text-green-400">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-black/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Serving <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Industries</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our DevOps automation solutions work across diverse business sectors
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group cursor-pointer"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                  <p className="text-sm text-gray-400">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600/20 to-emerald-600/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">DevOps</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join thousands of teams already automating their DevOps with AI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Ready to revolutionize your DevOps? Contact our team today.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-6 h-6 text-green-400" />
                    <span className="text-white">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-6 h-6 text-green-400" />
                    <span className="text-white">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-6 h-6 text-green-400" />
                    <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://ziontechgroup.com/contact"
                    className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
                  >
                    Contact Us
                  </a>
                  <a
                    href="https://ziontechgroup.com/services"
                    className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300"
                  >
                    View All Services
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}