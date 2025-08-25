import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Target, 
  Shield, 
  Rocket, 
  Globe,
  BarChart3,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Lightbulb,
  Code,
  Database,
  Network,
  Cloud,
  Lock,
  Eye,
  Sparkles
} from 'lucide-react';

const QuantumNeuralNetworkPlatform: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Quantum Neural Processing",
      description: "Advanced neural networks powered by quantum computing principles for unprecedented processing speed and accuracy."
    },
    {
      icon: Cpu,
      title: "Hybrid Computing Architecture",
      description: "Seamlessly combines classical and quantum computing for optimal performance across all workloads."
    },
    {
      icon: Zap,
      title: "Real-time Learning",
      description: "Continuous adaptation and learning from data streams with minimal latency and maximum efficiency."
    },
    {
      icon: Target,
      title: "Precision Optimization",
      description: "Quantum-enhanced optimization algorithms that find optimal solutions faster than classical methods."
    },
    {
      icon: Shield,
      title: "Quantum-Safe Security",
      description: "Built-in security protocols that remain secure even against future quantum computing threats."
    },
    {
      icon: Rocket,
      title: "Scalable Architecture",
      description: "Horizontally scalable design that grows with your computational needs and business requirements."
    }
  ];

  const useCases = [
    {
      icon: BarChart3,
      title: "Financial Modeling",
      description: "Advanced risk assessment, portfolio optimization, and algorithmic trading with quantum precision."
    },
    {
      icon: Users,
      title: "Healthcare Analytics",
      description: "Drug discovery, patient diagnosis, and treatment optimization using quantum-enhanced AI."
    },
    {
      icon: Globe,
      title: "Climate Prediction",
      description: "Complex climate modeling and environmental impact assessment with unprecedented accuracy."
    },
    {
      icon: Code,
      title: "Software Development",
      description: "AI-powered code generation, testing, and optimization for faster development cycles."
    },
    {
      icon: Database,
      title: "Big Data Analytics",
      description: "Processing massive datasets with quantum speed for real-time business intelligence."
    },
    {
      icon: Network,
      title: "Network Optimization",
      description: "Traffic routing, load balancing, and network security optimization using quantum algorithms."
    }
  ];

  const benefits = [
    "10x faster processing compared to classical neural networks",
    "Quantum advantage in optimization problems",
    "Enhanced accuracy and reduced error rates",
    "Scalable architecture for enterprise workloads",
    "Future-proof quantum-safe security",
    "Seamless integration with existing systems"
  ];

  return (
    <>
      <Helmet>
        <title>Quantum Neural Network Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary quantum neural network platform combining quantum computing with advanced AI for unprecedented processing power and accuracy. Transform your business with quantum-enhanced intelligence." />
        <meta name="keywords" content="quantum neural networks, quantum computing, AI platform, quantum AI, neural processing, quantum optimization" />
        <link rel="canonical" href="https://ziontechgroup.com/quantum-neural-network-platform" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Quantum Neural
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Network Platform
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the future of AI with our revolutionary quantum neural network platform. 
              Combining quantum computing principles with advanced neural networks for unprecedented 
              processing power and intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-xl transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our quantum neural network platform delivers cutting-edge capabilities that redefine 
                what's possible with artificial intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-cyan-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 relative bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your Industry
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how quantum neural networks are revolutionizing various sectors 
                and creating new possibilities for innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Platform?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the competitive advantage that quantum neural networks provide 
                for your business operations and decision-making processes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8">
                <div className="text-center">
                  <Star className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Industry Leader</h3>
                  <p className="text-gray-300 mb-6">
                    Join the ranks of forward-thinking organizations already leveraging 
                    quantum neural networks for competitive advantage.
                  </p>
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-3xl p-12">
              <Lightbulb className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your journey with quantum neural networks today and discover 
                the unlimited potential of AI-powered intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-xl transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default QuantumNeuralNetworkPlatform;