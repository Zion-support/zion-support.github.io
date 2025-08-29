import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { 
  TrendingUp, 
  Brain, 
  Target, 
  Users, 
  Zap, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  DollarSign,
  Clock,
  Filter,
  BarChart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AILeadScoring: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Scoring',
      description: 'Advanced machine learning algorithms that analyze lead behavior and predict conversion probability'
    },
    {
      icon: Target,
      title: 'Predictive Analytics',
      description: 'Score leads based on historical data, behavior patterns, and engagement metrics'
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'Dynamic scoring that updates as leads interact with your brand across channels'
    },
    {
      icon: Filter,
      title: 'Smart Segmentation',
      description: 'Automatically categorize leads by score ranges for targeted marketing campaigns'
    }
  ];

  const benefits = [
    'Increase conversion rates by 40%',
    'Reduce sales cycle time by 25%',
    'Improve lead qualification accuracy by 85%',
    'Boost sales team productivity by 30%',
    'Lower customer acquisition costs by 20%',
    'Real-time lead prioritization'
  ];

  const useCases = [
    {
      title: 'B2B Sales',
      description: 'Prioritize enterprise leads based on company size, industry, and engagement',
      metrics: '35% increase in qualified leads'
    },
    {
      title: 'E-commerce',
      description: 'Score customers based on browsing behavior, purchase history, and cart activity',
      metrics: '28% higher conversion rate'
    },
    {
      title: 'SaaS Companies',
      description: 'Evaluate trial users and freemium customers for upgrade potential',
      metrics: '42% improvement in trial-to-paid conversion'
    },
    {
      title: 'Real Estate',
      description: 'Score prospects based on search criteria, property views, and financial readiness',
      metrics: '31% faster deal closure'
    }
  ];

  const scoringFactors = [
    'Website engagement (pages viewed, time spent)',
    'Email interaction (opens, clicks, responses)',
    'Social media activity and engagement',
    'Content consumption and downloads',
    'Form submissions and inquiries',
    'Previous purchase history',
    'Company size and industry',
    'Geographic location and market',
    'Technology stack and tools used',
    'Budget and decision-making authority'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center">
              <Brain className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Lead Scoring Platform
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your sales process with AI-powered lead scoring that automatically prioritizes prospects, 
            increases conversion rates, and maximizes your sales team's efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/schedule-demo">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="bg-white/5 border-white/10 text-white">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
              <div className="text-sm text-gray-300">Conversion Increase</div>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 text-white">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">85%</div>
              <div className="text-sm text-gray-300">Scoring Accuracy</div>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 text-white">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">25%</div>
              <div className="text-sm text-gray-300">Faster Sales Cycle</div>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 text-white">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">30%</div>
              <div className="text-sm text-gray-300">Team Productivity</div>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Advanced AI-Powered Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Industry Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-white/5 border-white/10 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-400">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-green-400 font-medium">{useCase.metrics}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Scoring Factors */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Lead Scoring Factors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scoringFactors.map((factor, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{factor}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            How AI Lead Scoring Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 text-white text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">1. Data Collection</h3>
                <p className="text-gray-300">
                  Automatically gather lead data from multiple sources including website, CRM, email, and social media
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 text-white text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">2. AI Analysis</h3>
                <p className="text-gray-300">
                  Machine learning algorithms analyze behavior patterns and predict conversion probability
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 text-white text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">3. Smart Prioritization</h3>
                <p className="text-gray-300">
                  Automatically prioritize leads and route high-scoring prospects to your sales team
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-green-500/10 to-emerald-600/10 border-green-500/20 text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                Ready to Transform Your Lead Generation?
              </h2>
              <p className="text-gray-300 mb-6">
                Join thousands of companies using AI lead scoring to increase conversions and grow revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                    Start Your Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/schedule-demo">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    Book a Demo
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AILeadScoring;