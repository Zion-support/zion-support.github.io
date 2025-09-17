import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ArrowRight, Atom, Zap, Lock, Globe, Brain } from 'lucide-react';
const QuantumTechBreakthrough2025: React.FC = () => {
  const breakthroughs = [
    {
      id: 'quantum-ai',
      title: 'Quantum AI Processing',
      description: 'Revolutionary quantum algorithms that process information at speeds impossible with classical computers.',
      icon: Atom,
      impact: '1000x faster processing',
      applications: ['Drug discovery', 'Financial modeling', 'Climate simulation', 'Cryptography'],
      status: 'Production Ready'
    },
    {
      id: 'quantum-security',
      title: 'Quantum Cryptography',
      description: 'Unbreakable encryption using quantum principles for ultimate data security.',
      icon: Lock,
      impact: 'Unbreakable security',
      applications: ['Government communications', 'Banking', 'Healthcare', 'Military'],
      status: 'Deployed'
    },
    {
      id: 'quantum-networking',
      title: 'Quantum Internet',
      description: 'Global quantum network enabling instantaneous, secure communication worldwide.',
      icon: Globe,
      impact: 'Instant global communication',
      applications: ['Quantum cloud computing', 'Secure messaging', 'Global coordination', 'Space communication'],
      status: 'Pilot Phase'
    },
    {
      id: 'quantum-consciousness',
      title: 'Quantum Consciousness',
      description: 'Quantum-enhanced AI systems that exhibit genuine consciousness and awareness.',
      icon: Brain,
      impact: 'True AI consciousness',
      applications: ['Advanced robotics', 'Healthcare AI', 'Research assistance', 'Creative AI'],
      status: 'Research Phase'
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6">
            Quantum Technology Breakthrough 2025
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Witness the dawn of quantum computing revolution with our groundbreaking technologies that will reshape the future.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Explore Breakthroughs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Join the Revolution
            </Button>
          </div>
        </div>
      </div>
      {/* Breakthroughs Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary Quantum Breakthroughs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our quantum technology breakthroughs are pushing the boundaries of what's scientifically possible.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {breakthroughs.map((breakthrough) => {
            const IconComponent = breakthrough.icon;
            const statusColor = breakthrough.status === 'Production Ready' ? 'bg-green-500' :
                              breakthrough.status === 'Deployed' ? 'bg-blue-500' :
                              breakthrough.status === 'Pilot Phase' ? 'bg-yellow-500' : 'bg-purple-500';
            return (
              <Card key={breakthrough.id} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="absolute top-4 right-4 z-10">
                  <Badge className={`${statusColor} text-white`}>
                    {breakthrough.status}
                  </Badge>
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                      <IconComponent className="h-8 w-8 text-purple-600" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {breakthrough.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    {breakthrough.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Impact:</h4>
                    <p className="text-lg text-purple-600 font-bold">{breakthrough.impact}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {breakthrough.applications.map((app, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                          {app}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full group-hover:bg-purple-600 transition-colors">
                    Learn More About This Breakthrough
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
};
          })}
        </div>
      </div>
      {/* Quantum Stats */}
      <div className="bg-gradient-to-r from-gray-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Quantum Computing by the Numbers
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Our quantum breakthroughs are delivering unprecedented performance improvements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">1000x</div>
              <div className="text-lg">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-lg">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-lg">Security Level</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-lg">Quantum Operations</div>
            </div>
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready for the Quantum Future?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be among the first to experience the power of quantum computing and secure your place in the future.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Schedule Quantum Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Download Whitepaper
            </Button>
          </div>
        </div>
      </div>
    </div>
  );


export default QuantumTechBreakthrough2025;
