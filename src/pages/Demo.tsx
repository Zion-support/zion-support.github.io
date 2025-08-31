import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, Download, Share2, Star, Users, Zap, Brain, Cloud, Shield, ShoppingCart, MessageCircle, BarChart3, Code, Globe, ArrowRight, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DemoService {
  id: string;
  name: string;
  description: string;
  icon: ;
  color: string;
  demoUrl: string;
  features: string[];
  pricing: string;
  status: 'live' | 'beta' | 'coming-soon';
    }

interface DemoResult {
  id: string;
  input: string;
  output: string;
  timestamp: string;
  service: string;
    }

const Demo: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [demoResults, setDemoResults] = useState<DemoResult[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const demoServices: DemoService[] = [
    { id: 'ai-content-creation',
      name: 'AI Content Creation',
      description: 'Generate high-quality content using advanced AI models',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      demoUrl: '/demo/ai-content-creation',
      features: ['Blog Posts', 'Marketing Copy', 'Product Descriptions', 'Social Media Content'],
      pricing: 'Starting at $29/month',
      status: 'live'
    },
    { id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      description: 'Transform your data into actionable insights',
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500',
      demoUrl: '/demo/ai-business-intelligence',
      features: ['Data Analysis', 'Predictive Analytics', 'Custom Dashboards', 'Real-time Reports'],
      pricing: 'Starting at $99/month',
      status: 'live'
    },
    { id: 'ai-cybersecurity',
      name: 'AI Cybersecurity',
      description: 'Advanced threat detection and security automation',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      demoUrl: '/demo/ai-cybersecurity',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance Monitoring'],
      pricing: 'Starting at $149/month',
      status: 'beta'
    },
    { id: 'cloud-devops',
      name: 'Cloud & DevOps',
      description: 'Streamline your cloud infrastructure and deployment',
      icon: Cloud,
      color: 'from-green-500 to-blue-500',
      demoUrl: '/demo/cloud-devops',
      features: ['Infrastructure as Code', 'CI/CD Pipelines', 'Monitoring & Alerting', 'Cost Optimization'],
      pricing: 'Starting at $79/month',
      status: 'live'
    },
    { id: 'micro-crm',
      name: 'Micro CRM',
      description: 'Lightweight customer relationship management solution',
      icon: Users,
      color: 'from-yellow-500 to-orange-500',
      demoUrl: '/demo/micro-crm',
      features: ['Contact Management', 'Lead Tracking', 'Sales Pipeline', 'Customer Analytics'],
      pricing: 'Starting at $19/month',
      status: 'live'
    },
    { id: 'ai-marketing-automation',
      name: 'AI Marketing Automation',
      description: 'Intelligent marketing campaigns and personalization',
      icon: Zap,
      color: 'from-indigo-500 to-purple-500',
      demoUrl: '/demo/ai-marketing-automation',
      features: ['Campaign Automation', 'Personalization', 'A/B Testing', 'ROI Analytics'],
      pricing: 'Starting at $49/month',
      status: 'beta'
    }
  ];

  const runDemo = async (serviceId: string) => {
    if (!currentInput.trim()) return;
    
    setIsLoading(true);
    setActiveDemo(serviceId);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const service = demoServices.find(s => s.id === serviceId);
    const newResult: DemoResult = { id: Date.now().toString(),
      input: currentInput,
      output: generateDemoOutput(serviceId, currentInput),
      timestamp: new Date().toLocaleTimeString(),
      service: service?.name || 'Unknown'
    };
    
    setDemoResults(prev => [newResult, ...prev]);
    setCurrentInput('');
    setIsLoading(false);
    setIsRunning(true);
  };

  const generateDemoOutput = (serviceId: string, input: string): string => {
    const outputs = {
      'ai-content-creation': `Generated content based on "${input}":\n\nHere's a comprehensive article that addresses your request. The AI has analyzed your input and created engaging, informative content that follows best practices for SEO and user engagement...`,
      'ai-business-intelligence': `Business Intelligence Analysis for "${input}":\n\nBased on your data query, here are the key insights:\n• Trend Analysis: Upward trajectory over the last 6 months\n• Performance Metrics: 23% improvement in efficiency\n• Recommendations: Focus on expanding successful initiatives...`,
      'ai-cybersecurity': `Security Assessment for "${input}":\n\nThreat Analysis Results:\n• Risk Level: Medium\n• Vulnerabilities Detected: 3\n• Security Score: 8.5/10\n• Recommendations: Implement additional authentication layers...`,
      'cloud-devops': `DevOps Pipeline Analysis for "${input}":\n\nDeployment Status:\n• Build: ✅ Successful\n• Tests: ✅ All passed\n• Deployment: ✅ Completed\n• Performance: 15% improvement in response time...`,
      'micro-crm': `CRM Analysis for "${input}":\n\nCustomer Insights:\n• Customer Lifetime Value: $2,450\n• Churn Risk: Low\n• Engagement Score: 8.7/10\n• Next Best Action: Schedule follow-up call...`,
      'ai-marketing-automation': `Marketing Campaign Analysis for "${input}":\n\nCampaign Performance:\n• Open Rate: 24.5%\n• Click Rate: 8.3%\n• Conversion Rate: 3.2%\n• ROI: 320%\n• Recommendations: Optimize subject lines...`
    };
    
    return outputs[serviceId as keyof typeof outputs] || 'Demo output not available for this service.';
  };

  const stopDemo = () => {
    setIsRunning(false);
    setActiveDemo(null);
  };

  const resetDemo = () => {
    setDemoResults([]);
    setCurrentInput('');
    setIsRunning(false);
    setActiveDemo(null);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'live':
        return <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">Live</span>;
      case 'beta':
        return <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">Beta</span>;
      case 'coming-soon':
        return <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full">Coming Soon</span>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6     }}
            className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Play className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Interactive Demos
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience Zion Tech Group's cutting-edge AI services and solutions firsthand. 
              Try our interactive demos and see the power of our technology in action.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Demo Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {demoServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-colors cursor-pointer"
              onClick={() => setActiveDemo(service.id)}>
              <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                {getStatusBadge(service.status)}
              </div>
              
              <p className="text-gray-300 text-sm mb-4">{service.description}</p>
              
              <div className="space-y-2 mb-4">
                {service.features.slice(0, 3).map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-blue-400 text-sm font-medium">{service.pricing}</span>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
                  Try Demo
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        {activeDemo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5     }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                {demoServices.find(s => s.id === activeDemo)?.name} Demo
              </h2>
              <div className="flex items-center space-x-3">
                <button
                  onClick={resetDemo}
                  className="flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white text-sm font-medium rounded-lg transition-colors">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </button>
                {isRunning ? (
                  <button
                    onClick={stopDemo}
                    className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors">
                    <Pause className="w-4 h-4 mr-2" />
                    Stop
                  </button>
                ) : (
                  <button
                    onClick={() => runDemo(activeDemo)}
                    disabled={!currentInput.trim() || isLoading}
                    className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white text-sm font-medium rounded-lg transition-colors">
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Play className="w-4 h-4 mr-2" />
                    )}
                    {isLoading ? 'Processing...' : 'Run Demo'}
                  </button>
                )}
              </div>
            </div>

            {/* Demo Input */}
            <div className="mb-6">
              <label className="block text-white font-medium mb-2">Input</label>
              <textarea
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                placeholder="Enter your input here to test the demo..."
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={3}
              />
            </div>

            {/* Demo Results */}
            {demoResults.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Demo Results</h3>
                {demoResults.map((result) => (
                  <div key={result.id} className="bg-white/5 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-400">{result.timestamp}</span>
                        <span className="text-sm text-blue-400">{result.service}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="text-gray-400 hover:text-white transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="text-gray-400 hover:text-white transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-300 mb-2">Input</h4>
                        <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                          {result.input}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-300 mb-2">Output</h4>
                        <div className="bg-white/10 rounded-lg p-3 text-sm text-white whitespace-pre-wrap">
                          {result.output}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Choose Our Demos?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience the power of our AI services with interactive, real-time demonstrations 
            that showcase the capabilities and value of our solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Real-time Processing</h3>
            <p className="text-gray-300 text-sm">See results instantly with our optimized AI processing</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">AI-Powered</h3>
            <p className="text-gray-300 text-sm">Leverage cutting-edge AI models and algorithms</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Cloud className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Cloud-Native</h3>
            <p className="text-gray-300 text-sm">Built for scalability and enterprise deployment</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Enterprise Ready</h3>
            <p className="text-gray-300 text-sm">Security, compliance, and reliability built-in</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the full power of our AI services. Schedule a personalized demo 
            or start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/schedule-demo"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors">
              <MessageCircle className="w-5 h-5 mr-2" />
              Schedule Full Demo
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors">
              <ShoppingCart className="w-5 h-5 mr-2" />
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;

