import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Code, 
  Shield, 
  Zap, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Globe,
  Lock,
  Database,
  GitBranch,
  Bug
} from 'lucide-react';

const AIAutonomousCodeReview = () => {
  const codeReviewFeatures = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms that understand code patterns and identify issues'
    },
    {
      icon: Code,
      title: 'Automated Review',
      description: 'Continuous code analysis and review without human intervention'
    },
    {
      icon: Shield,
      title: 'Security Scanning',
      description: 'Automated detection of security vulnerabilities and code quality issues'
    },
    {
      icon: Zap,
      title: 'Real-time Feedback',
      description: 'Instant code quality feedback and improvement suggestions'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'AI-driven suggestions for code performance and efficiency improvements'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enhanced team collaboration with AI-powered code review insights'
    }
  ];

  const supportedLanguages = [
    {
      name: 'JavaScript/TypeScript',
      description: 'Full support for modern JavaScript and TypeScript development',
      icon: Code
    },
    {
      name: 'Python',
      description: 'Comprehensive Python code analysis and optimization',
      icon: Code
    },
    {
      name: 'Java',
      description: 'Enterprise Java development with advanced code review',
      icon: Code
    },
    {
      name: 'C++/C#',
      description: 'Performance-critical applications with detailed analysis',
      icon: Code
    },
    {
      name: 'Go',
      description: 'Modern Go development with best practices enforcement',
      icon: Code
    },
    {
      name: 'Rust',
      description: 'Memory-safe systems programming with AI insights',
      icon: Code
    }
  ];

  const reviewCapabilities = [
    {
      category: 'Code Quality',
      features: [
        'Automated style checking',
        'Best practices enforcement',
        'Code complexity analysis',
        'Documentation validation',
        'Naming convention checks'
      ]
    },
    {
      category: 'Security Analysis',
      features: [
        'Vulnerability detection',
        'Dependency scanning',
        'Input validation checks',
        'Authentication review',
        'Data protection analysis'
      ]
    },
    {
      category: 'Performance Review',
      features: [
        'Algorithm efficiency analysis',
        'Memory usage optimization',
        'Database query optimization',
        'Resource utilization review',
        'Scalability assessment'
      ]
    },
    {
      category: 'Integration & Workflow',
      features: [
        'Git integration',
        'CI/CD pipeline support',
        'Pull request automation',
        'Team collaboration tools',
        'Custom rule configuration'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-zion-cyan/10 border border-zion-cyan/30 rounded-full px-4 py-2 mb-6">
              <Brain className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan text-sm font-medium">AI-Powered Code Review</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI Autonomous
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Code Review</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Revolutionize your development workflow with AI-powered autonomous code review. 
              Get instant feedback, improve code quality, and accelerate development with intelligent analysis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/80 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center justify-center px-8 py-4 border border-zion-cyan/50 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/20 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Code Review Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered tools designed to transform your code review process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {codeReviewFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-zion-cyan/30 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Supported Languages Section */}
      <section className="py-20 bg-zion-blue-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Supported Languages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI code review platform supports all major programming languages and frameworks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportedLanguages.map((language, index) => {
              const Icon = language.icon;
              return (
                <div key={index} className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{language.name}</h3>
                  <p className="text-gray-300 leading-relaxed">{language.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Review Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Review Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive code analysis across multiple dimensions for better software quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {reviewCapabilities.map((capability, index) => (
              <div key={index} className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">{capability.category}</h3>
                <ul className="space-y-3">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Code Review?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading development teams that have already improved their code quality with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/80 transition-all duration-300"
              >
                Start Code Review Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center justify-center px-8 py-4 border border-zion-cyan/50 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/20 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousCodeReview;