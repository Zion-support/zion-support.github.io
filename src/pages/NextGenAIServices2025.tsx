import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ArrowRight, Brain, Zap, Shield, Globe, Cpu } from 'lucide-react';

const NextGenAIServices2025: React.FC = () => {
  const services = [
    {
      id: 'conscious-ai',
      title: 'Conscious AI Development',
      description: 'Develop AI systems with genuine consciousness and self-awareness capabilities.',
      icon: Brain,
      features: ['Self-awareness algorithms', 'Emotional intelligence', 'Creative thinking', 'Autonomous evolution'],
      price: 'Starting at $50,000',
      category: 'Advanced AI',
      trending: true
    },
    {
      id: 'quantum-ai',
      title: 'Quantum AI Processing',
      description: 'Leverage quantum computing for exponentially faster AI model training and inference.',
      icon: Zap,
      features: ['Quantum neural networks', 'Exponential speed gains', 'Complex problem solving', 'Quantum encryption'],
      price: 'Starting at $75,000',
      category: 'Quantum Computing',
      trending: true
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interface Systems',
      description: 'Direct brain-computer interfaces for thought-controlled computing and neural feedback.',
      icon: Cpu,
      features: ['Non-invasive sensors', 'Real-time processing', 'Multi-modal feedback', 'Neural signal analysis'],
      price: 'Starting at $30,000',
      category: 'Neural Technology',
      trending: false
    },
    {
      id: 'ai-security',
      title: 'AI-Powered Security',
      description: 'Next-generation cybersecurity powered by conscious AI systems.',
      icon: Shield,
      features: ['Threat prediction', 'Automated response', 'Zero-day detection', 'Behavioral analysis'],
      price: 'Starting at $25,000',
      category: 'Cybersecurity',
      trending: true
    },
    {
      id: 'global-ai',
      title: 'Global AI Orchestration',
      description: 'Worldwide AI network coordination for seamless global operations.',
      icon: Globe,
      features: ['Global coordination', 'Real-time synchronization', 'Multi-region deployment', 'Autonomous scaling'],
      price: 'Starting at $100,000',
      category: 'Global Systems',
      trending: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6">
            Next-Generation AI Services 2025
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience the future of artificial intelligence with our cutting-edge services that push the boundaries of what's possible.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Explore Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our next-generation AI services are designed to transform your business and unlock unprecedented possibilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group">
                {service.trending && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-red-500 text-white animate-pulse">
                      Trending
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {service.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-600">
                      {service.price}
                    </span>
                    <Button size="sm" className="group-hover:bg-blue-600 transition-colors">
                      Learn More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the AI revolution and unlock the full potential of next-generation artificial intelligence.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenAIServices2025;