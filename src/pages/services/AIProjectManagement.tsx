import React from 'react';
import { SEO } from '../../components/SEO';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { CheckCircle, Brain, TrendingUp, Users, Shield, Zap, Globe, Clock, Phone, Mail } from 'lucide-react';

const AIProjectManagement: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Project Management Platform - Zion Tech Group"
        description="Revolutionary AI-powered project management platform that automates planning, resource allocation, and risk management with predictive analytics and intelligent workflow optimization."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Platform
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              AI Project Management Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your project management with AI that predicts risks, optimizes resources, and automates complex workflows. 
              Get 40% faster project completion and 60% cost reduction.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
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
            Why Choose AI Project Management?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 p-6 text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">40% Faster Completion</h3>
              <p className="text-gray-300">AI-optimized workflows and resource allocation reduce project timelines significantly</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6 text-center">
              <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">60% Cost Reduction</h3>
              <p className="text-gray-300">Intelligent resource optimization and risk prevention minimize project costs</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6 text-center">
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">95% Risk Prediction</h3>
              <p className="text-gray-300">Advanced AI algorithms predict and prevent project risks before they occur</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Advanced AI Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">AI-Powered Planning</h3>
                  <p className="text-gray-300">Automated project planning with intelligent task breakdown, dependency mapping, and resource optimization</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Predictive Risk Management</h3>
                  <p className="text-gray-300">Machine learning algorithms identify potential risks and suggest mitigation strategies in real-time</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Smart Resource Allocation</h3>
                  <p className="text-gray-300">AI-driven resource optimization based on skills, availability, and project requirements</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Automated Reporting</h3>
                  <p className="text-gray-300">Intelligent report generation with insights, trends, and actionable recommendations</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Real-time Collaboration</h3>
                  <p className="text-gray-300">Integrated communication tools with AI-powered meeting summaries and action item tracking</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Performance Analytics</h3>
                  <p className="text-gray-300">Advanced analytics dashboard with team performance metrics and productivity insights</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Integration Hub</h3>
                  <p className="text-gray-300">Seamless integration with 100+ popular tools including Slack, Jira, Microsoft Teams, and more</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Mobile Optimization</h3>
                  <p className="text-gray-300">Full-featured mobile app with offline capabilities and push notifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
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
                <span className="text-4xl font-bold text-white">$299</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 10 team members
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic AI planning
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
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Start Free Trial
              </Button>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-center relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge variant="secondary" className="bg-white text-blue-600">Most Popular</Badge>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$799</span>
                <span className="text-blue-100">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Up to 100 team members
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
              <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                Get Started
              </Button>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge variant="secondary">Enterprise</Badge>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Ultimate</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$1,499</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited team members
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
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Contact Sales
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Market Analysis & ROI
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">$45.2B</div>
              <div className="text-gray-300">Global Project Management Market (2026)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">300-500%</div>
              <div className="text-gray-300">Average ROI for AI-Powered PM</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">40%</div>
              <div className="text-gray-300">Faster Project Completion</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">60%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Transform Your Project Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies already using AI to revolutionize their project workflows.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Globe className="w-5 h-5 text-blue-400" />
              <span>ziontechgroup.com</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Schedule Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Download Whitepaper
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIProjectManagement;