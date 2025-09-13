import React from 'react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Star,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Cpu,
  Database,
  Network,
  Lock,
  Globe,
  Target,
  DollarSign,
  BarChart3,
  Settings,
  Rocket
} from "lucide-react";
import { Link } from 'react-router-dom';

export default function AIQuantumHybridPlatform() {
  return (
    <>
      <SEO 
        title="AI Quantum Hybrid Platform - Revolutionary Computing Solutions | Zion Tech Group"
        description="Experience the future of computing with our AI Quantum Hybrid Platform. Achieve unprecedented processing power and solve complex problems 1000x faster than traditional systems."
        keywords="quantum computing, AI hybrid platform, quantum AI, quantum machine learning, quantum algorithms, hybrid computing"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%253E%253Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%253E%253Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.05%22%253E%253Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-20"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <Badge className="bg-zion-purple/20 border border-zion-purple/30 text-zion-purple mb-6">
              <Cpu className="h-4 w-4 mr-2" />
              Quantum Computing
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Quantum Hybrid
              <span className="bg-gradient-to-r from-zion-purple to-zion-cyan bg-clip-text text-transparent"> Platform</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the future of computing with our revolutionary AI Quantum Hybrid Platform. Achieve <span className="text-zion-cyan font-semibold">1000x faster processing</span> and solve complex problems that were previously impossible.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">1000x</div>
                <div className="text-gray-400 text-sm">Faster Processing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2">99.9%</div>
                <div className="text-gray-400 text-sm">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Quantum Operations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">∞</div>
                <div className="text-gray-400 text-sm">Possibilities</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link to="/contact">
                <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-4 text-lg">
                  Request Quantum Demo
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white px-8 py-4 text-lg">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Quantum Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Quantum Hybrid Platform combines the best of classical and quantum computing to deliver unprecedented performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700 hover:border-zion-purple/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-zion-purple/20 rounded-lg">
                    <Brain className="h-6 w-6 text-zion-purple" />
                  </div>
                  <CardTitle className="text-white">Quantum AI Processing</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Leverage quantum algorithms for machine learning tasks, achieving exponential speedups in pattern recognition and optimization.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Quantum neural networks
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Superposition-based learning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Entanglement optimization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-zion-purple/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-zion-cyan/20 rounded-lg">
                    <Database className="h-6 w-6 text-zion-cyan" />
                  </div>
                  <CardTitle className="text-white">Quantum Database</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Store and retrieve information using quantum superposition, enabling instant access to massive datasets.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Quantum key-value storage
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Instant parallel queries
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Quantum encryption
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-zion-purple/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Network className="h-6 w-6 text-green-400" />
                  </div>
                  <CardTitle className="text-white">Quantum Networking</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Ultra-secure quantum communication channels with guaranteed information transfer and perfect security.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Quantum key distribution
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Teleportation protocols
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Entanglement networks
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-zion-purple/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-yellow-500/20 rounded-lg">
                    <Lock className="h-6 w-6 text-yellow-400" />
                  </div>
                  <CardTitle className="text-white">Quantum Security</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Unbreakable security using quantum cryptography principles that are mathematically proven to be secure.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Quantum encryption
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Tamper detection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Perfect privacy
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-zion-purple/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-white">Quantum Optimization</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Solve complex optimization problems in logistics, finance, and resource allocation with quantum algorithms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Traveling salesman problems
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Portfolio optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Supply chain optimization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-zion-purple/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Settings className="h-6 w-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white">Hybrid Integration</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Seamlessly integrate quantum capabilities with your existing classical computing infrastructure.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    API compatibility
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Cloud integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Legacy system support
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our AI Quantum Hybrid Platform is transforming industries across the globe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zion-purple/20 rounded-lg">
                  <Target className="h-6 w-6 text-zion-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Drug Discovery</h3>
                  <p className="text-gray-300">Accelerate pharmaceutical research by simulating molecular interactions 1000x faster than classical computers.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zion-cyan/20 rounded-lg">
                  <DollarSign className="h-6 w-6 text-zion-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Financial Modeling</h3>
                  <p className="text-gray-300">Optimize trading strategies and risk assessment with quantum Monte Carlo simulations.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <Globe className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Climate Modeling</h3>
                  <p className="text-gray-300">Model complex climate systems and predict weather patterns with unprecedented accuracy.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-500/20 rounded-lg">
                  <Rocket className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Space Exploration</h3>
                  <p className="text-gray-300">Optimize mission planning and navigation for space missions with quantum algorithms.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 rounded-2xl p-8 border border-zion-purple/30">
              <h3 className="text-2xl font-bold text-white mb-6">Quantum Advantage</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Processing Speed</span>
                  <span className="text-zion-cyan font-semibold">1000x Faster</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Energy Efficiency</span>
                  <span className="text-green-400 font-semibold">99% Less Power</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Security Level</span>
                  <span className="text-yellow-400 font-semibold">Unbreakable</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Scalability</span>
                  <span className="text-purple-400 font-semibold">Exponential</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-cyan">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience Quantum Computing?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join the quantum revolution and transform your business with our AI Quantum Hybrid Platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-zion-purple hover:bg-gray-100 px-8 py-4 text-lg">
                Schedule Quantum Demo
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple px-8 py-4 text-lg">
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}