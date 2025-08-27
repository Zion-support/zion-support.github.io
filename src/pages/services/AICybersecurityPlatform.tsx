import React from 'react';
import { SEO } from '../../components/SEO';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { CheckCircle, Brain, TrendingUp, Shield, Zap, Globe, Clock, Phone, Mail, Lock, Eye, AlertTriangle, Users, Database, Network, Cpu } from 'lucide-react';

const AICybersecurityPlatform: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Cybersecurity Platform - Zion Tech Group"
        description="Revolutionary AI-powered cybersecurity platform that provides 99.9% threat detection, zero false positives, and automated response with advanced machine learning algorithms."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Security
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              AI Cybersecurity Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Protect your organization with AI that detects threats in real-time, prevents attacks before they happen, 
              and provides 99.9% threat detection with zero false positives.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose AI Cybersecurity?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 p-6 text-center">
              <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">99.9% Threat Detection</h3>
              <p className="text-gray-300">Advanced AI algorithms identify and neutralize threats before they can cause damage</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6 text-center">
              <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Zero False Positives</h3>
              <p className="text-gray-300">Machine learning eliminates false alarms, reducing alert fatigue by 95%</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6 text-center">
              <div className="w-16 h-16 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Real-time Response</h3>
              <p className="text-gray-300">Automated threat response in milliseconds, 100x faster than human operators</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6 text-center">
              <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">90% Cost Reduction</h3>
              <p className="text-gray-300">Automated security operations reduce manual intervention and operational costs</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Advanced Security Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">AI Threat Detection</h3>
                  <p className="text-gray-300">Machine learning algorithms analyze network traffic, user behavior, and system logs to identify sophisticated threats</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Behavioral Analytics</h3>
                  <p className="text-gray-300">User and entity behavior analytics (UEBA) detect insider threats and compromised accounts</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Automated Response</h3>
                  <p className="text-gray-300">Intelligent automation blocks threats, isolates compromised systems, and initiates incident response</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Threat Intelligence</h3>
                  <p className="text-gray-300">Real-time threat feeds and global intelligence sharing for proactive defense</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Endpoint Protection</h3>
                  <p className="text-gray-300">Advanced endpoint detection and response (EDR) with AI-powered malware analysis</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Network Security</h3>
                  <p className="text-gray-300">AI-driven network traffic analysis, intrusion detection, and firewall optimization</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Cloud Security</h3>
                  <p className="text-gray-300">Multi-cloud security monitoring, configuration management, and compliance tracking</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Compliance Automation</h3>
                  <p className="text-gray-300">Automated compliance reporting for SOC 2, ISO 27001, GDPR, and industry standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Comprehensive Security Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Network className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Network Security</h3>
              <p className="text-gray-300">AI-powered intrusion detection, traffic analysis, and network segmentation</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Endpoint Security</h3>
              <p className="text-gray-300">Advanced EDR with behavioral analysis and automated threat response</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="w-12 h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Data Protection</h3>
              <p className="text-gray-300">Encryption, access control, and data loss prevention with AI monitoring</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Identity & Access</h3>
              <p className="text-gray-300">Multi-factor authentication, privileged access management, and user behavior analytics</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cloud Security</h3>
              <p className="text-gray-300">Multi-cloud security, configuration management, and compliance monitoring</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Incident Response</h3>
              <p className="text-gray-300">Automated incident detection, response orchestration, and forensic analysis</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Competitive Pricing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge variant="secondary">Starter</Badge>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$599</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 100 endpoints
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic AI threat detection
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Standard reporting
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
              </ul>
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Start Free Trial
              </Button>
            </Card>
            
            <Card className="bg-gradient-to-br from-red-600 to-orange-600 p-8 text-center relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge variant="secondary" className="bg-white text-red-600">Most Popular</Badge>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$1,599</span>
                <span className="text-red-100">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Up to 1,000 endpoints
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Advanced AI features
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Custom dashboards
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  API access
                </li>
              </ul>
              <Button className="w-full bg-white text-red-600 hover:bg-gray-100">
                Get Started
              </Button>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge variant="secondary">Enterprise</Badge>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Ultimate</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$3,999</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited endpoints
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Full AI capabilities
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  White-label options
                </li>
              </ul>
              <Button className="w-full bg-orange-600 hover:bg-orange-700">
                Contact Sales
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Market Analysis & ROI
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">$376.3B</div>
              <div className="text-gray-300">Global Cybersecurity Market (2026)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">400-800%</div>
              <div className="text-gray-300">Average ROI for AI Security</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">99.9%</div>
              <div className="text-gray-300">Threat Detection Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">90%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Secure Your Organization?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies already protected by AI-powered cybersecurity.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Phone className="w-5 h-5 text-red-400" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Mail className="w-5 h-5 text-red-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Globe className="w-5 h-5 text-red-400" />
              <span>ziontechgroup.com</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Schedule Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Download Security Report
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecurityPlatform;