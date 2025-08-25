import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Code, 
  Search, 
  Shield, 
  Users, 
  BarChart3, 
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Award,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Eye,
  BarChart,
  Rocket,
  Layers,
  Workflow,
  Monitor,
  Settings,
  Cloud,
  Server,
  Bug,
  Zap,
  FileCode,
  GitBranch
} from 'lucide-react';

const AIAutonomousCodeReview = () => {
  const reviewFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms that understand code context and identify potential issues"
    },
    {
      icon: Code,
      title: "Multi-Language Support",
      description: "Support for all major programming languages including Python, JavaScript, Java, C++, and more"
    },
    {
      icon: Shield,
      title: "Security Scanning",
      description: "Automated detection of security vulnerabilities, code injection risks, and compliance issues"
    },
    {
      icon: Bug,
      title: "Bug Detection",
      description: "Intelligent identification of logical errors, performance issues, and code smells"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless integration with development workflows and team collaboration tools"
    },
    {
      icon: Zap,
      title: "Real-Time Review",
      description: "Instant code review feedback as you write code, not just after submission"
    }
  ];

  const reviewTypes = [
    {
      title: "Security Review",
      description: "Comprehensive security analysis including vulnerability scanning and threat assessment",
      icon: Shield,
      capabilities: ["Vulnerability detection", "Security best practices", "Compliance checking", "Threat modeling"]
    },
    {
      title: "Code Quality Review",
      description: "Analysis of code structure, readability, and adherence to coding standards",
      icon: Code,
      capabilities: ["Code style checking", "Complexity analysis", "Documentation review", "Best practices"]
    },
    {
      title: "Performance Review",
      description: "Identification of performance bottlenecks and optimization opportunities",
      icon: Zap,
      capabilities: ["Performance profiling", "Memory usage analysis", "Algorithm optimization", "Scalability review"]
    },
    {
      title: "Architecture Review",
      description: "High-level code architecture and design pattern analysis",
      icon: Layers,
      capabilities: ["Design pattern validation", "Architecture assessment", "Dependency analysis", "Scalability review"]
    }
  ];

  const benefits = [
    "Reduce code review time by 80%",
    "Improve code quality by 60%",
    "Catch bugs before production",
    "Enhance security posture",
    "Maintain coding standards",
    "Accelerate development cycles",
    "Reduce technical debt",
    "Improve team productivity"
  ];

  const integrations = [
    "GitHub",
    "GitLab",
    "Bitbucket",
    "Azure DevOps",
    "Jenkins",
    "CircleCI",
    "GitHub Actions",
    "VS Code"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Code className="w-12 h-12 text-cyan-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                AI Autonomous Code Review
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Revolutionize your code review process with AI-powered autonomous analysis that catches issues, 
              improves quality, and accelerates development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                <Play className="mr-2 w-5 h-5" />
                Demo Review
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Review Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Intelligent Code Analysis
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered code review system provides comprehensive analysis across multiple dimensions 
              to ensure your code is secure, efficient, and maintainable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviewFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Review Types
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From security analysis to performance optimization, our AI covers every aspect of code quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {reviewTypes.map((type, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{type.title}</h3>
                    <p className="text-gray-300 text-sm">{type.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {type.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {capability}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Development Transformation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented improvements in code quality and development efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center hover:border-cyan-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Works with your existing development tools and workflows
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center hover:border-cyan-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GitBranch className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{integration}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-blue-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Code Review?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of code quality with AI-powered autonomous code review. 
            Start catching issues before they reach production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousCodeReview;