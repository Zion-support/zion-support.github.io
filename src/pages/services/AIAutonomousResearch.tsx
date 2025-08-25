import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Brain, Zap, Shield, BarChart3, Users, ArrowRight, CheckCircle, Star, Flask } from 'lucide-react';

export default function AIAutonomousResearch() {
  const features = [
    {
      icon: Search,
      title: 'Intelligent Research Discovery',
      description: 'AI systems that autonomously discover and analyze research opportunities'
    },
    {
      icon: Brain,
      title: 'Automated Literature Review',
      description: 'Comprehensive analysis of existing research with intelligent insights'
    },
    {
      icon: Zap,
      title: 'Hypothesis Generation',
      description: 'AI-powered hypothesis development based on data patterns and trends'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Automated validation and verification of research methodologies'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Forecast research outcomes and identify promising directions'
    },
    {
      icon: Users,
      title: 'Collaborative Research',
      description: 'Enable seamless collaboration between human researchers and AI systems'
    }
  ];

  const researchAreas = [
    'Scientific Research',
    'Market Research',
    'Medical Research',
    'Technology Research',
    'Social Sciences',
    'Environmental Studies',
    'Business Intelligence',
    'Academic Research'
  ];

  const benefits = [
    'Accelerate research timelines by 3-5x',
    'Reduce research costs by 40-60%',
    'Improve research quality and accuracy',
    'Enable 24/7 research operations',
    'Discover hidden patterns and insights',
    'Scale research capabilities exponentially'
  ];

  const capabilities = [
    'Data Collection & Processing',
    'Literature Analysis',
    'Pattern Recognition',
    'Statistical Analysis',
    'Report Generation',
    'Trend Prediction',
    'Cross-reference Validation',
    'Research Optimization'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AI Autonomous Research
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your research capabilities with AI systems that work autonomously 
              to discover, analyze, and generate insights 24/7, accelerating breakthroughs 
              across all fields of study.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                Start Research
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/20 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Autonomous Research Intelligence
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI research systems operate independently, continuously learning and 
              improving to deliver breakthrough insights and discoveries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Comprehensive Research Coverage
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From scientific discovery to market intelligence, our AI systems excel across all research domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Flask className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg font-medium text-white">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Research Transformation Benefits
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See the measurable impact of AI-powered autonomous research on your organization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <Star className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Advanced Research Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI systems provide comprehensive research capabilities that go beyond human limitations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center">
                <span className="text-lg font-medium text-white">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Revolutionize Your Research?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of autonomous research and accelerate your discoveries today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <Link to="/contact" className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/20 transition-all duration-300 flex items-center justify-center">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Related Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our other AI and research solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/services/ai-autonomous-systems" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                  AI Autonomous Systems
                </h3>
                <p className="text-gray-400 mb-4">
                  Build intelligent systems that operate independently
                </p>
                <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            <Link to="/services/ai-autonomous-business-operations" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                  AI Autonomous Business Operations
                </h3>
                <p className="text-gray-400 mb-4">
                  Automate complex business processes with intelligent AI agents
                </p>
                <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            <Link to="/services/ai-autonomous-ecosystem" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                  AI Autonomous Ecosystem
                </h3>
                <p className="text-gray-400 mb-4">
                  Create interconnected AI systems for comprehensive automation
                </p>
                <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}