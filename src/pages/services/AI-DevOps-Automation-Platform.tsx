import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Cpu, 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Database,
  Network,
  Smartphone,
  Server,
  Clock,
  DollarSign,
  Users,
  Building2,
  Factory,
  Truck,
  Heart,
  ShoppingCart,
  TrendingUp,
  PieChart,
  LineChart,
  Activity,
  Eye,
  Target,
  Lightbulb,
  Code,
  GitBranch,
  Play,
  Settings,
  Monitor,
  AlertTriangle
} from 'lucide-react';

export default function AIDevOpsAutomationPlatform() {
  const features = [
    {
      title: "Intelligent CI/CD Pipelines",
      description: "AI-powered continuous integration and deployment with automated testing and deployment decisions",
      icon: GitBranch,
      benefits: ["Automated testing", "Smart deployment", "Rollback automation", "Performance optimization"]
    },
    {
      title: "Predictive Infrastructure Management",
      description: "AI-driven infrastructure scaling and optimization based on usage patterns",
      icon: Brain,
      benefits: ["Auto-scaling", "Resource optimization", "Cost reduction", "Performance prediction"]
    },
    {
      title: "Automated Security Scanning",
      description: "Continuous security monitoring and vulnerability detection with AI-powered threat analysis",
      icon: Shield,
      benefits: ["Real-time scanning", "Threat detection", "Compliance monitoring", "Automated patching"]
    },
    {
      title: "Smart Monitoring & Alerting",
      description: "Intelligent monitoring with predictive analytics and automated incident response",
      icon: Monitor,
      benefits: ["Predictive alerts", "Auto-remediation", "Performance insights", "Root cause analysis"]
    }
  ];

  const capabilities = [
    {
      category: "Infrastructure as Code",
      icon: Code,
      features: [
        "Terraform automation",
        "Kubernetes management",
        "Multi-cloud deployment",
        "Configuration management"
      ]
    },
    {
      category: "Testing & Quality",
      icon: Play,
      features: [
        "Automated testing",
        "Code quality analysis",
        "Performance testing",
        "Security testing"
      ]
    },
    {
      category: "Monitoring & Observability",
      icon: Activity,
      features: [
        "Application monitoring",
        "Infrastructure metrics",
        "Log analysis",
        "Distributed tracing"
      ]
    },
    {
      category: "Security & Compliance",
      icon: Shield,
      features: [
        "Vulnerability scanning",
        "Compliance checking",
        "Access management",
        "Audit logging"
      ]
    }
  ];

  const useCases = [
    {
      industry: "Technology",
      icon: Cpu,
      applications: ["Microservices deployment", "Cloud migration", "Performance optimization", "Security automation"]
    },
    {
      industry: "Financial Services",
      icon: DollarSign,
      applications: ["Compliance automation", "Risk management", "High availability", "Security monitoring"]
    },
    {
      industry: "Healthcare",
      icon: Heart,
      applications: ["HIPAA compliance", "Patient data security", "System reliability", "Emergency response"]
    },
    {
      industry: "E-commerce",
      icon: ShoppingCart,
      applications: ["Scalability management", "Performance optimization", "Security monitoring", "Deployment automation"]
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$4,000",
      period: "/month",
      description: "Perfect for small teams starting with AI DevOps automation",
      features: [
        "Up to 10 applications",
        "Basic AI automation",
        "Standard monitoring",
        "Email support",
        "Basic security scanning"
      ]
    },
    {
      plan: "Professional",
      price: "$15,000",
      period: "/month",
      description: "Ideal for growing development teams",
      features: [
        "Up to 50 applications",
        "Advanced AI automation",
        "Priority support",
        "Advanced monitoring",
        "Custom integrations",
        "Advanced security"
      ]
    },
    {
      plan: "Enterprise",
      price: "$45,000",
      period: "/month",
      description: "For large-scale enterprise deployments",
      features: [
        "Unlimited applications",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label solutions",
        "Advanced security",
        "On-premise option"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="AI DevOps Automation Platform | Zion Tech Group"
        description="Revolutionary AI-powered DevOps Automation Platform with intelligent CI/CD, predictive infrastructure, and automated security. Transform your development operations."
        keywords="AI DevOps, DevOps automation, CI/CD automation, infrastructure automation, DevOps platform, AI-powered DevOps"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6"
          >
            <Cpu className="w-4 h-4 mr-2" />
            AI DevOps Automation Platform
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            AI-Powered
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              DevOps Automation
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Transform your development operations with our revolutionary AI-powered DevOps Automation Platform. 
            Automate CI/CD pipelines, optimize infrastructure, and enhance security with intelligent automation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold"
            >
              Start Your DevOps Journey
            </a>
            <a
              href="#demo"
              className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold"
            >
              Watch Demo
            </a>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Revolutionary DevOps Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines the power of artificial intelligence with DevOps automation 
              to deliver unprecedented levels of efficiency and reliability.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 mb-4">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Platform Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to automate and optimize your DevOps operations
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3">
                  {capability.category}
                </h3>
                
                <ul className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-300">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI-powered DevOps is transforming industries across the globe
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3">
                  {useCase.industry}
                </h3>
                
                <ul className="space-y-2">
                  {useCase.applications.map((application, appIndex) => (
                    <li key={appIndex} className="text-sm text-gray-300">
                      • {application}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs and scale as you grow
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${
                  plan.plan === 'Professional' 
                    ? 'border-cyan-500/50 bg-gradient-to-b from-cyan-500/10 to-transparent' 
                    : 'border-white/10 hover:border-cyan-500/50'
                }`}
              >
                {plan.plan === 'Professional' && (
                  <div className="inline-flex items-center px-3 py-1 bg-cyan-500 text-white text-sm font-medium rounded-full mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.plan}
                </h3>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                
                <p className="text-gray-300 mb-6">
                  {plan.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.plan === 'Professional'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-500/20 to-blue-600/20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your DevOps Operations?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join the future of DevOps with our AI-powered automation platform. 
              Experience intelligent CI/CD, predictive infrastructure, and automated security.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold"
              >
                Start Your Free Trial
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold"
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}