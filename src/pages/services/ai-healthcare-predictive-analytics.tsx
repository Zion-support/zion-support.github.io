import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { 
  Heart, 
  Brain, 
  TrendingUp, 
  Shield, 
  Zap, 
  Users, 
  Clock, 
  CheckCircle,
  ArrowRight,
  BarChart3,
  Activity,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AIHealthcarePredictiveAnalytics: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced ML Models',
      description: 'State-of-the-art machine learning algorithms trained on millions of healthcare data points'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Accuracy',
      description: '94% accuracy in disease prediction and patient outcome forecasting'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Enterprise-grade security with full HIPAA compliance and data encryption'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Instant analysis and predictions with sub-second response times'
    }
  ];

  const useCases = [
    {
      title: 'Early Disease Detection',
      description: 'Identify disease patterns before symptoms appear',
      impact: 'Reduce diagnosis time by 60%'
    },
    {
      title: 'Patient Risk Assessment',
      description: 'Predict patient deterioration and complications',
      impact: 'Improve outcomes by 40%'
    },
    {
      title: 'Treatment Optimization',
      description: 'Recommend personalized treatment plans',
      impact: 'Increase treatment success by 35%'
    },
    {
      title: 'Resource Planning',
      description: 'Forecast patient volumes and resource needs',
      impact: 'Reduce costs by 25%'
    }
  ];

  const benefits = [
    '94% prediction accuracy rate',
    'Real-time patient monitoring',
    'Automated risk scoring',
    'Integration with existing EHR systems',
    'Customizable prediction models',
    'Comprehensive audit trails'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center">
              <Brain className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Healthcare Predictive Analytics
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform healthcare delivery with AI-powered predictive analytics that achieve 94% accuracy 
            in disease prediction, patient outcome forecasting, and treatment optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700">
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
              <div className="text-3xl font-bold text-red-400 mb-2">94%</div>
              <div className="text-sm text-gray-300">Prediction Accuracy</div>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 text-white">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
              <div className="text-sm text-gray-300">Faster Diagnosis</div>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 text-white">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
              <div className="text-sm text-gray-300">Better Outcomes</div>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 text-white">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">25%</div>
              <div className="text-sm text-gray-300">Cost Reduction</div>
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
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
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
            Healthcare Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-white/5 border-white/10 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-red-400">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-green-400 font-medium">{useCase.impact}</span>
                  </div>
                </CardContent>
              </Card>
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

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-red-500/10 to-pink-600/10 border-red-500/20 text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                Ready to Transform Healthcare with AI?
              </h2>
              <p className="text-gray-300 mb-6">
                Join leading healthcare organizations using AI to improve patient outcomes and reduce costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700">
                    Start Your Journey
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

export default AIHealthcarePredictiveAnalytics;