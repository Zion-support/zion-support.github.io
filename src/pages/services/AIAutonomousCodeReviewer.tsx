import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Code, 
  Shield, 
  Zap, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle, 
  Star,
  ArrowRight,
  Github,
  Gitlab,
  Slack,
  MessageSquare,
  BarChart3,
  Settings,
  Lock,
  Globe,
  Smartphone,
  Database
} from 'lucide-react';

const AIAutonomousCodeReviewer: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: "Automated Code Review",
      description: "AI-powered analysis of code quality, security vulnerabilities, and performance issues across multiple programming languages.",
      benefits: ["Reduce review time by 70%", "Consistent code standards", "24/7 availability"]
    },
    {
      icon: Shield,
      title: "Security Analysis",
      description: "Advanced security scanning to detect vulnerabilities, security anti-patterns, and compliance issues in real-time.",
      benefits: ["Early vulnerability detection", "Security best practices", "Compliance checking"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Intelligent suggestions for code optimization, memory management, and performance improvements.",
      benefits: ["Performance insights", "Memory leak detection", "Optimization recommendations"]
    },
    {
      icon: TrendingUp,
      title: "Quality Metrics",
      description: "Comprehensive code quality metrics, technical debt analysis, and improvement recommendations.",
      benefits: ["Quality scoring", "Technical debt tracking", "Improvement roadmaps"]
    }
  ];

  const supportedLanguages = [
    "Python", "JavaScript", "TypeScript", "Java", "C#", "C++", "Go", "Rust", "PHP", "Ruby", "Swift", "Kotlin"
  ];

  const integrations = [
    { name: "GitHub", icon: Github, description: "Seamless integration with GitHub repositories and pull requests" },
    { name: "GitLab", icon: Gitlab, description: "Full support for GitLab CI/CD pipelines and merge requests" },
    { name: "Slack", icon: Slack, description: "Real-time notifications and alerts in Slack channels" },
    { name: "Jira", icon: MessageSquare, description: "Connect code reviews with Jira tickets and workflows" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small development teams",
      features: [
        "Up to 10 developers",
        "Basic code analysis",
        "Security scanning",
        "GitHub integration",
        "Email support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Ideal for growing development teams",
      features: [
        "Up to 50 developers",
        "Advanced AI analysis",
        "Performance optimization",
        "Multi-repository support",
        "Priority support",
        "Custom rules"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "/month",
      description: "For large organizations and enterprises",
      features: [
        "Unlimited developers",
        "Custom AI models",
        "Advanced security features",
        "API access",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Software Development Teams",
      description: "Automate code reviews and maintain consistent quality standards across development teams.",
      icon: Users
    },
    {
      title: "Code Quality Assurance",
      description: "Ensure high code quality and reduce technical debt through automated analysis.",
      icon: CheckCircle
    },
    {
      title: "Security Compliance",
      description: "Meet security requirements and compliance standards with automated security scanning.",
      icon: Shield
    },
    {
      title: "Performance Optimization",
      description: "Identify and fix performance bottlenecks through intelligent code analysis.",
      icon: Zap
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Autonomous Code Reviewer — Zion Tech Group | Automated Code Quality & Security</title>
        <meta name="description" content="Revolutionize your code review process with AI-powered automated analysis. Detect security vulnerabilities, optimize performance, and maintain code quality across multiple programming languages."/>
        <meta property="og:title" content="AI Autonomous Code Reviewer — Zion Tech Group"/>
        <meta property="og:description" content="AI-powered automated code review with security analysis, performance optimization, and quality metrics for development teams."/>
        <meta property="og:url" content="https://ziontechgroup.com/services/ai-autonomous-code-reviewer"/>
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-autonomous-code-reviewer"/>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-xl mr-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <span className="text-blue-400 text-lg font-medium">AI-Powered Development</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Autonomous
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Code Reviewer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your development workflow with AI-powered automated code review. 
              Detect security vulnerabilities, optimize performance, and maintain code quality 
              across multiple programming languages with 70% faster review times.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/services" className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose AI Code Review?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Leverage artificial intelligence to revolutionize your code review process
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/40 transition-all duration-300">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-lg w-fit mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Languages */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Multi-Language Support
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive code analysis across the most popular programming languages
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {supportedLanguages.map((language, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 text-center hover:border-blue-400/40 transition-all duration-300">
                  <Code className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <span className="text-white font-medium">{language}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Works with your existing development tools and workflows
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/40 transition-all duration-300">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-lg w-fit mb-4">
                    <integration.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{integration.name}</h3>
                  <p className="text-gray-300">{integration.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfect For
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Ideal solutions for various development scenarios
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-lg w-fit mb-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your team size and needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-blue-400 bg-gradient-to-br from-blue-600/20 to-cyan-600/20' 
                    : 'border-white/20 hover:border-blue-400/40'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium">
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
                  
                  <Link 
                    to={plan.cta === "Contact Sales" ? "/contact" : "/contact"}
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Code Review Process?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers who have already improved their code quality and security with AI-powered automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a href="tel:+13024640950" className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                Call +1 302 464 0950
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              Questions? Email us at <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAutonomousCodeReviewer;