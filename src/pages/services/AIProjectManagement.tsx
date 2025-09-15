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

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Advanced AI Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">AI-Powered Planning</h3>
              <p className="text-gray-300">Intelligent project planning with predictive analytics and automated resource allocation</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Smart Team Management</h3>
              <p className="text-gray-300">AI-driven team optimization and workload balancing for maximum productivity</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Risk Management</h3>
              <p className="text-gray-300">Proactive risk identification and automated mitigation strategies</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Workflow Automation</h3>
              <p className="text-gray-300">Intelligent automation of repetitive tasks and approval processes</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Global Collaboration</h3>
              <p className="text-gray-300">Real-time collaboration tools with AI-powered translation and timezone management</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Time Tracking</h3>
              <p className="text-gray-300">Intelligent time tracking with productivity insights and automated reporting</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Transparent Pricing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 p-8 text-center relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Badge variant="secondary" className="bg-blue-600 text-white">
                  Most Popular
                </Badge>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-white mb-2">$799</div>
              <div className="text-gray-400 mb-6">/month</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 25 users
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic AI insights
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  10 active projects
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Standard integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-white mb-2">$1,499</div>
              <div className="text-gray-400 mb-6">/month</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 100 users
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced AI analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited projects
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom workflows
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority support
                </li>
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Get Started
              </Button>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-white mb-2">$2,499</div>
              <div className="text-gray-400 mb-6">/month</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited users
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Full AI suite
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  White-label options
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
                </li>
              </ul>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Contact Sales
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Market Opportunity
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Market Size</h3>
              <p className="text-gray-300 mb-4">
                The global project management software market is valued at <strong className="text-white">$45.2 billion</strong> in 2024 and is expected to reach <strong className="text-white">$67.2 billion</strong> by 2026.
              </p>
              <p className="text-gray-300">
                AI-powered project management represents the fastest-growing segment with a CAGR of <strong className="text-white">28.4%</strong>.
              </p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">ROI & Benefits</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong className="text-white">300-500% ROI</strong> within 12 months</li>
                <li>• <strong className="text-white">40% faster</strong> project completion</li>
                <li>• <strong className="text-white">60% reduction</strong> in project costs</li>
                <li>• <strong className="text-white">95% improvement</strong> in risk management</li>
              </ul>
            </Card>
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
            Join thousands of organizations already using AI to revolutionize their project delivery.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center text-gray-300">
              <Phone className="w-5 h-5 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Mail className="w-5 h-5 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Schedule Demo
            </Button>
          </div>
          
          <p className="text-sm text-gray-400 mt-6">
            Visit us at <a href="https://ziontechgroup.com" className="text-blue-400 hover:underline">https://ziontechgroup.com</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default AIProjectManagement;