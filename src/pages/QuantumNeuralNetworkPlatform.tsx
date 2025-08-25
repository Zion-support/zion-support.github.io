import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Target, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Award,
  Globe,
  Shield,
  Cloud,
  Lock,
  Database,
  Network,
  Code,
  BarChart3,
  Lightbulb,
  Rocket,
  Clock,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Eye,
  Heart,
  Beaker
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const QuantumNeuralNetworkPlatform: React.FC = () => {
  const features = [
    {
      title: "Quantum-Classical Hybrid Processing",
      description: "Seamlessly integrate quantum and classical computing for optimal performance",
      icon: Cpu,
      benefits: ["Quantum advantage", "Classical stability", "Hybrid optimization"]
    },
    {
      title: "Advanced Neural Architecture",
      description: "State-of-the-art neural network designs optimized for quantum hardware",
      icon: Brain,
      benefits: ["Deep learning", "Quantum circuits", "Adaptive networks"]
    },
    {
      title: "Real-time Quantum Simulation",
      description: "Simulate quantum systems in real-time for research and development",
      icon: Zap,
      benefits: ["Instant results", "High accuracy", "Scalable simulation"]
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade security with quantum-resistant encryption",
      icon: Shield,
      benefits: ["Quantum-safe", "End-to-end encryption", "Compliance ready"]
    }
  ];

  const useCases = [
    {
      title: "Drug Discovery",
      description: "Accelerate pharmaceutical research with quantum molecular modeling",
      icon: Beaker,
      impact: "10x faster discovery"
    },
    {
      title: "Financial Modeling",
      description: "Revolutionize risk assessment and portfolio optimization",
      icon: BarChart3,
      impact: "95% accuracy improvement"
    },
    {
      title: "Climate Prediction",
      description: "Advanced climate modeling with quantum-enhanced algorithms",
      icon: Globe,
      impact: "Real-time forecasting"
    },
    {
      title: "AI Training",
      description: "Train complex AI models with quantum-accelerated computing",
      icon: Brain,
      impact: "100x speed increase"
    }
  ];

  const stats = [
    { icon: Users, value: "100+", label: "Research Partners", description: "Leading institutions worldwide" },
    { icon: TrendingUp, value: "99.9%", label: "Uptime", description: "Enterprise-grade reliability" },
    { icon: Award, value: "15+", label: "Patents", description: "Innovation leadership" },
    { icon: Globe, value: "50+", label: "Countries", description: "Global quantum network" }
  ];

  return (
    <>
      <SEOHead 
        customData={{
          title: "Quantum Neural Network Platform - Zion Tech Group",
          description: "Revolutionary quantum neural network platform combining quantum computing with advanced AI. Accelerate research, discovery, and innovation with our cutting-edge quantum-classical hybrid system.",
          keywords: ["quantum computing", "neural networks", "AI", "quantum AI", "quantum machine learning", "quantum simulation", "quantum research platform"],
          type: "website",
          url: "https://ziontechgroup.com/quantum-neural-network-platform"
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Quantum Neural Network Platform
              </h1>
              <p className="text-xl md:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto">
                Revolutionizing AI with the power of quantum computing. Experience unprecedented speed and accuracy in neural network processing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services/quantum-technology"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <stat.icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-cyan-300 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our quantum neural network platform combines cutting-edge quantum computing with advanced AI to deliver unprecedented capabilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <feature.icon className="h-12 w-12 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 text-center mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transformative Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our quantum neural network platform is revolutionizing industries across the globe.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0">
                      <useCase.icon className="h-12 w-12 text-cyan-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-semibold text-white mb-2">{useCase.title}</h3>
                      <p className="text-gray-300 mb-4">{useCase.description}</p>
                      <div className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {useCase.impact}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution and transform your organization with our cutting-edge neural network platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services/quantum-technology"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Explore Quantum Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default QuantumNeuralNetworkPlatform;