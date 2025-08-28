import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Shield, 
  CheckCircle, 
  AlertTriangle,
  Zap,
  Brain,
  GitBranch,
  Clock,
  TrendingUp,
  Users,
  BarChart3,
  Lock,
  Globe,
  Smartphone,
  Database,
  Server,
  Cloud,
  Activity,
  Target,
  Award,
  ArrowRight,
  Play
} from 'lucide-react';

const AIAutonomousCodeReviewer: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-600" />,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms that understand code context, patterns, and best practices across multiple programming languages."
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Security Vulnerability Detection",
      description: "Automated scanning for security flaws, SQL injection, XSS attacks, and other critical security vulnerabilities in real-time."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-600" />,
      title: "Code Quality Assessment",
      description: "Comprehensive code quality metrics including complexity analysis, maintainability scores, and adherence to coding standards."
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-600" />,
      title: "Performance Optimization",
      description: "AI-driven suggestions for code optimization, memory management, and performance improvements based on industry best practices."
    },
    {
      icon: <GitBranch className="w-6 h-6 text-indigo-600" />,
      title: "Git Integration",
      description: "Seamless integration with Git workflows, automated PR reviews, and continuous code quality monitoring."
    },
    {
      icon: <Globe className="w-6 h-6 text-red-600" />,
      title: "Multi-Language Support",
      description: "Support for 50+ programming languages including Python, JavaScript, Java, C++, Go, Rust, and more."
    }
  ];

  const benefits = [
    "Reduce code review time by 70%",
    "Catch 95% of security vulnerabilities before deployment",
    "Improve code quality consistency across teams",
    "Automated compliance checking for industry standards",
    "Real-time feedback and learning recommendations",
    "Integration with existing CI/CD pipelines"
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$299",
      period: "per month",
      features: [
        "Up to 10 developers",
        "Basic security scanning",
        "Code quality metrics",
        "Git integration",
        "Email support",
        "5 programming languages"
      ]
    },
    {
      plan: "Professional",
      price: "$599",
      period: "per month",
      features: [
        "Up to 50 developers",
        "Advanced security analysis",
        "Performance optimization",
        "Custom rules engine",
        "Priority support",
        "15 programming languages",
        "API access"
      ]
    },
    {
      plan: "Enterprise",
      price: "$1,299",
      period: "per month",
      features: [
        "Unlimited developers",
        "Full security suite",
        "Custom AI training",
        "White-label solution",
        "24/7 dedicated support",
        "All programming languages",
        "Advanced analytics",
        "SLA guarantees"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-100 rounded-full">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Autonomous Code Reviewer
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Revolutionize your code review process with AI-powered autonomous analysis. 
              Detect security vulnerabilities, optimize performance, and maintain code quality 
              across your entire development team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Watch Demo
                <Play className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Intelligent Code Analysis Powered by AI
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our autonomous code reviewer uses advanced AI algorithms to provide 
              comprehensive analysis, security scanning, and optimization recommendations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transform Your Development Workflow
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience unprecedented efficiency and code quality with our AI-powered solution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that best fits your team size and requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-white p-8 rounded-xl shadow-lg border-2 ${
                  index === 1 ? 'border-blue-500 scale-105' : 'border-gray-200'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.plan}
                  </h3>
                  <div className="text-4xl font-bold text-blue-600 mb-1">
                    {plan.price}
                  </div>
                  <div className="text-gray-600">{plan.period}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://ziontechgroup.com/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    index === 1
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Code Review Process?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of developers who trust our AI-powered code review solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Sales
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
              <p className="text-gray-400">
                Empowering the future through innovative technology solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">+1 302 464 0950</p>
              <p className="text-gray-400">kleber@ziontechgroup.com</p>
              <p className="text-gray-400">364 E Main St STE 1008</p>
              <p className="text-gray-400">Middletown DE 19709</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>AI Solutions</li>
                <li>IT Services</li>
                <li>Micro SaaS</li>
                <li>Cybersecurity</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://ziontechgroup.com" className="text-gray-400 hover:text-white">
                  Website
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIAutonomousCodeReviewer;