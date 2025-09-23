import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Zap, TrendingUp, GitFork, BarChart3, Clock, Star, ArrowRight } from 'lucide-react';
const AICodeReviewAssistant = () => {
    const features = [
        {
            title: "Automated Security Vulnerability Detection",
            description: "AI-powered scanning identifies security flaws, SQL injections, and common vulnerabilities before they reach production",
            icon: <Shield className="w-6 h-6"/>
        },
        {
            title: "Code Quality Scoring & Metrics",
            description: "Comprehensive code quality assessment with detailed metrics and improvement recommendations",
            icon: <BarChart3 className="w-6 h-6"/>
        },
        {
            title: "Best Practice Recommendations",
            description: "Intelligent suggestions for code improvements, design patterns, and industry best practices",
            icon: <CheckCircle className="w-6 h-6"/>
        },
        {
            title: "Git Integration & Automation",
            description: "Seamless integration with GitHub, GitLab, and Bitbucket with automated PR comments and reviews",
            icon: <GitFork className="w-6 h-6"/>
        }
    ];
    const benefits = [
        {
            metric: "40-60%",
            description: "Reduction in code review time",
            icon: <Clock className="w-5 h-5"/>
        },
        {
            metric: "25%",
            description: "Improvement in code quality",
            icon: <TrendingUp className="w-5 h-5"/>
        },
        {
            metric: "90%",
            description: "Security issues caught early",
            icon: <Shield className="w-5 h-5"/>
        },
        {
            metric: "24/7",
            description: "Automated review coverage",
            icon: <Zap className="w-5 h-5"/>
        }
    ];
    const pricingPlans = [
        {
            name: "Starter",
            price: "$199",
            period: "/month",
            description: "Perfect for small development teams",
            features: [
                "Up to 10 developers",
                "Basic security scanning",
                "GitHub integration",
                "Standard reporting",
                "Email support"
            ],
            popular: false
        },
        {
            name: "Professional",
            price: "$399",
            period: "/month",
            description: "Ideal for growing development teams",
            features: [
                "Up to 25 developers",
                "Advanced security scanning",
                "Multi-repo support",
                "Custom rule sets",
                "Priority support",
                "Team analytics"
            ],
            popular: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "",
            description: "For large organizations with complex needs",
            features: [
                "Unlimited developers",
                "Custom integrations",
                "Advanced compliance",
                "Dedicated support",
                "Custom training",
                "SLA guarantees"
            ],
            popular: false
        }
    ];
    const integrations = [
        "GitHub", "GitLab", "Bitbucket", "Jira", "Slack", "Microsoft Teams", "Discord", "Email"
    ];
    const useCases = [
        "Code quality improvement",
        "Security compliance",
        "Team productivity enhancement",
        "DevOps automation",
        "Code standardization",
        "Technical debt reduction"
    ];
    return (<>
      <Helmet>
        <title>AI Code Review Assistant — Zion Tech Group | Automated Code Quality & Security</title>
        <meta name="description" content="Transform your development workflow with our AI-powered code review assistant. Automated security scanning, quality metrics, and best practice recommendations."/>
        <meta property="og:title" content="AI Code Review Assistant — Zion Tech Group"/>
        <meta property="og:description" content="AI-powered code review system with security scanning, quality metrics, and automated recommendations."/>
        <meta property="og:url" content="https://ziontechgroup.com/services/ai-code-review-assistant"/>
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-code-review-assistant"/>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-6xl mb-6">
              🔍
            </motion.div>
            <motion.h1 className="text-4xl md:text-6xl font-bold mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              AI-Powered
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Code Review Assistant
              </span>
            </motion.h1>
            <motion.p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              Intelligent code review system that analyzes pull requests, identifies security vulnerabilities, 
              suggests improvements, and maintains code quality standards across your development team.
            </motion.p>
            
            {/* Key Metrics */}
            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
              {benefits.map((benefit, index) => (<div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{benefit.metric}</div>
                  <div className="text-sm text-gray-300">{benefit.description}</div>
                </div>))}
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
              <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                Start Free Trial
              </Link>
              <Link to="/enhanced-services" className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                View All Services
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features for Modern Development
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive code review capabilities that integrate seamlessly with your existing workflow
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (<motion.div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                  <div className="text-blue-400 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that best fits your team size and requirements
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (<motion.div key={index} className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 ${plan.popular
                ? 'border-blue-400 bg-blue-900/20'
                : 'border-white/20 hover:border-white/40'}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                  {plan.popular && (<div className="text-center mb-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>)}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-blue-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (<li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"/>
                        {feature}
                      </li>))}
                  </ul>
                  
                  <Link to="/contact" className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${plan.popular
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'}`}>
                    Get Started
                  </Link>
                </motion.div>))}
            </div>
          </div>
        </section>

        {/* Integrations & Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Integrations */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <h3 className="text-2xl font-bold text-white mb-6">Seamless Integrations</h3>
                <div className="grid grid-cols-2 gap-4">
                  {integrations.map((integration, index) => (<div key={index} className="flex items-center bg-white/10 rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3"/>
                      <span className="text-gray-300">{integration}</span>
                    </div>))}
                </div>
              </motion.div>

              {/* Use Cases */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <h3 className="text-2xl font-bold text-white mb-6">Perfect For</h3>
                <div className="space-y-3">
                  {useCases.map((useCase, index) => (<div key={index} className="flex items-center bg-white/10 rounded-lg p-3">
                      <Star className="w-5 h-5 text-yellow-400 mr-3"/>
                      <span className="text-gray-300">{useCase}</span>
                    </div>))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold text-white mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              Ready to Transform Your Code Review Process?
            </motion.h2>
            <motion.p className="text-xl text-gray-300 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              Join hundreds of development teams already using our AI-powered code review assistant
            </motion.p>
            
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5"/>
              </Link>
              <a href="tel:+13024640950" className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                Call: +1 302 464 0950
              </a>
            </motion.div>

            <motion.div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
              <h3 className="text-lg font-semibold text-white mb-4">Why Choose Our AI Code Review Assistant?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  AI-Powered Security Scanning
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Seamless Git Integration
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Custom Rule Configuration
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  24/7 Automated Coverage
                </div>
              </div>
            </motion.div>

            <motion.div className="mt-8 text-sm text-gray-400" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}>
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">https://ziontechgroup.com</a></p>
            </motion.div>
          </div>
        </section>
      </div>
    </>);
};
export default AICodeReviewAssistant;
