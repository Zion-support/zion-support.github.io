import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  FileText, 
  Zap, 
  Globe, 
  Lock,
  BarChart3,
  ArrowRight,
  Play,
  Users,
  Clock,
  Star,
  Headphones,
  Database,
  Eye,
  Search,
  TrendingUp
} from 'lucide-react';

export default function AIComplianceAssistant() {
  return (
    <>
      <Helmet>
        <title>AI Compliance Assistant - Automated Regulatory Compliance | Zion Tech Group</title>
        <meta name="description" content="Stay compliant with automated regulatory monitoring, real-time compliance checks, and AI-powered risk assessment. Reduce compliance costs and eliminate manual errors." />
        <meta name="keywords" content="AI compliance, regulatory compliance, compliance automation, risk assessment, compliance monitoring, regulatory technology" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-compliance-assistant" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-darker">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-8">
                <Shield className="w-4 h-4 mr-2" />
                AI-Powered Compliance Automation
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Compliance Assistant
                <span className="block text-zion-cyan">Stay Compliant, Stay Ahead</span>
              </h1>
              
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Automate regulatory compliance with AI-powered monitoring, real-time risk assessment, 
                and automated reporting. Reduce compliance costs by 60% while eliminating manual errors.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://ziontechgroup.com/contact" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="#demo" 
                  className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose AI Compliance Assistant?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Transform your compliance operations with intelligent automation and real-time monitoring
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Real-time Monitoring</h3>
                <p className="text-zion-slate-light">
                  Continuous monitoring of regulatory changes and compliance status across all jurisdictions.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Risk Assessment</h3>
                <p className="text-zion-slate-light">
                  AI-powered risk scoring and automated alerts for potential compliance violations.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Automated Reporting</h3>
                <p className="text-zion-slate-light">
                  Generate compliance reports automatically with customizable templates and scheduling.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Multi-Jurisdiction</h3>
                <p className="text-zion-slate-light">
                  Support for global regulations including GDPR, CCPA, SOX, HIPAA, and industry-specific standards.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Cost Reduction</h3>
                <p className="text-zion-slate-light">
                  Reduce compliance costs by up to 60% through automation and reduced manual effort.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
                <p className="text-zion-slate-light">
                  Bank-level security with SOC 2 Type II compliance and end-to-end encryption.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Compliance Features
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Everything you need to automate and streamline your compliance operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Regulatory Change Monitoring</h3>
                      <p className="text-zion-slate-light">
                        AI continuously monitors regulatory bodies and automatically alerts you to relevant changes that affect your business.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Automated Compliance Checks</h3>
                      <p className="text-zion-slate-light">
                        Run automated compliance audits against current regulations with detailed reports and actionable recommendations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Policy Management</h3>
                      <p className="text-zion-slate-light">
                        Centralized policy management with version control, approval workflows, and automated distribution to stakeholders.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Incident Management</h3>
                      <p className="text-zion-slate-light">
                        Track and manage compliance incidents with automated workflows, escalation rules, and resolution tracking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BarChart3 className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Compliance Dashboard</h3>
                  <p className="text-zion-slate-light mb-6">
                    Real-time visibility into your compliance status across all regulations and jurisdictions.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-zion-cyan">99.9%</div>
                      <div className="text-sm text-zion-slate-light">Compliance Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-zion-cyan">60%</div>
                      <div className="text-sm text-zion-slate-light">Cost Reduction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Regulations */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Supported Regulations & Standards
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Comprehensive coverage across major regulatory frameworks and industry standards
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Data Privacy</h3>
                <p className="text-sm text-zion-slate-light">GDPR, CCPA, LGPD, PIPEDA</p>
              </div>
              
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Financial</h3>
                <p className="text-sm text-zion-slate-light">SOX, Basel III, Dodd-Frank</p>
              </div>
              
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Healthcare</h3>
                <p className="text-sm text-zion-slate-light">HIPAA, HITECH, FDA</p>
              </div>
              
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Cybersecurity</h3>
                <p className="text-sm text-zion-slate-light">NIST, ISO 27001, SOC 2</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Choose the plan that fits your compliance needs. All plans include a 30-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                  <div className="text-4xl font-bold text-zion-cyan mb-2">$199</div>
                  <div className="text-zion-slate-light">per month</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Up to 5 regulations
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Basic compliance monitoring
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Standard reporting
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Email support
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Up to 100 users
                  </li>
                </ul>
                
                <a 
                  href="https://ziontechgroup.com/contact" 
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
                >
                  Start Free Trial
                </a>
              </div>
              
              {/* Professional Plan */}
              <div className="bg-zion-blue-dark/50 border-2 border-zion-cyan rounded-xl p-8 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                  <div className="text-4xl font-bold text-zion-cyan mb-2">$499</div>
                  <div className="text-zion-slate-light">per month</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Up to 25 regulations
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Advanced AI monitoring
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Custom reporting
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Policy management
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Priority support
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Up to 500 users
                  </li>
                </ul>
                
                <a 
                  href="https://ziontechgroup.com/contact" 
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
                >
                  Start Free Trial
                </a>
              </div>
              
              {/* Enterprise Plan */}
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                  <div className="text-4xl font-bold text-zion-cyan mb-2">Custom</div>
                  <div className="text-zion-slate-light">contact us</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Unlimited regulations
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Custom AI models
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    White-label solutions
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Custom integrations
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Dedicated account manager
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    24/7 phone support
                  </li>
                </ul>
                
                <a 
                  href="https://ziontechgroup.com/contact" 
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Compliance?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join hundreds of organizations who have already transformed their compliance operations with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com/contact" 
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
              >
                <Headphones className="w-5 h-5 mr-2" />
                Call +1 (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}