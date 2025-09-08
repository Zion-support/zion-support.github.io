import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield, Cpu, BarChart3, GitBranch, Server, Cloud, Workflow, AlertTriangle } from 'lucide-react';

const AutonomousDevOpsPlatform: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered Incident Detection",
      description: "Automatically detect, diagnose, and resolve infrastructure issues in real-time"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Predictive Maintenance",
      description: "AI algorithms predict potential issues before they impact your systems"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Continuous optimization of system performance and resource utilization"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security Automation",
      description: "Automated security scanning, patching, and compliance monitoring"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Multi-Cloud Management",
      description: "Unified management across AWS, Azure, Google Cloud, and Kubernetes"
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "24/7 Autonomous Operation",
      description: "Self-healing infrastructure that operates continuously without human intervention"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      features: [
        "Basic automation",
        "5 projects",
        "Standard support",
        "Basic monitoring",
        "CI/CD pipelines",
        "Basic security"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,899",
      period: "/month",
      features: [
        "AI automation",
        "Unlimited projects",
        "Priority support",
        "Advanced analytics",
        "Predictive maintenance",
        "Security automation",
        "Multi-cloud support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$3,999",
      period: "/month",
      features: [
        "Full autonomous suite",
        "Custom integrations",
        "Dedicated support",
        "White-label options",
        "Advanced AI models",
        "Custom workflows",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const automationCapabilities = [
    "Infrastructure as Code (IaC)",
    "Continuous Integration/Deployment",
    "Automated testing and quality gates",
    "Configuration management",
    "Monitoring and alerting",
    "Log aggregation and analysis",
    "Backup and disaster recovery",
    "Performance tuning"
  ];

  const integrations = [
    "GitHub & GitLab",
    "Jenkins & CircleCI",
    "AWS, Azure, Google Cloud",
    "Kubernetes & Docker",
    "Terraform & Ansible",
    "Prometheus & Grafana",
    "Slack & Microsoft Teams",
    "Jira & ServiceNow"
  ];

  const benefits = [
    {
      title: "Reduce Downtime",
      description: "AI-powered monitoring prevents 99.9% of potential outages",
      icon: "🔄"
    },
    {
      title: "Increase Efficiency",
      description: "Automate repetitive tasks and focus on strategic initiatives",
      icon: "⚡"
    },
    {
      title: "Cost Optimization",
      description: "Intelligent resource management reduces cloud costs by 30-50%",
      icon: "💰"
    },
    {
      title: "Faster Deployment",
      description: "Automated pipelines reduce deployment time from hours to minutes",
      icon: "🚀"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-orange-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              Autonomous DevOps Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Self-healing infrastructure with AI-powered automation. Automatically detect, diagnose, 
              and resolve infrastructure issues while optimizing performance and reducing operational overhead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                Platform Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Intelligent DevOps Automation
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our autonomous platform combines AI, machine learning, and advanced automation to revolutionize your DevOps operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-all duration-300"
              >
                <div className="text-orange-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your DevOps Operations
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the benefits of autonomous DevOps automation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Capabilities */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Automation
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end automation across your entire DevOps lifecycle
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {automationCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
              >
                <div className="flex items-center mb-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  <span className="text-lg font-semibold">{capability}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Connect with your existing tools and workflows for maximum efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-orange-500 transition-all duration-300">
                  <div className="text-2xl mb-2">🔗</div>
                  <p className="text-xs text-gray-300">{integration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your Automation Level
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your DevOps needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  tier.popular 
                    ? 'border-orange-500 ring-2 ring-orange-500/20' 
                    : 'border-gray-700'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-gray-400">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white'
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Comparison */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Competitive Advantage
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how our autonomous platform compares to traditional DevOps tools
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-400">GitLab</h3>
              <p className="text-gray-400 mb-4">$19/user/month</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Basic CI/CD</li>
                <li>• Manual monitoring</li>
                <li>• Limited automation</li>
                <li>• No AI features</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-xl p-6 border border-orange-500 ring-2 ring-orange-500/20"
            >
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Zion Tech Group</h3>
              <p className="text-gray-400 mb-4">$1,899/month</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• AI automation</li>
                <li>• Predictive maintenance</li>
                <li>• Autonomous operations</li>
                <li>• Advanced AI features</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-4 text-green-400">Jenkins</h3>
              <p className="text-gray-400 mb-4">Free</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Basic CI/CD</li>
                <li>• Manual configuration</li>
                <li>• No automation</li>
                <li>• Limited features</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Automate Your DevOps Today
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join forward-thinking teams that trust autonomous DevOps automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                Platform Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="grid md:grid-cols-3 gap-6 text-gray-300">
              <div>
                <p className="font-semibold mb-2">Phone</p>
                <p>+1 302 464 0950</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Email</p>
                <p>kleber@ziontechgroup.com</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Address</p>
                <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AutonomousDevOpsPlatform;