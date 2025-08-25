import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Search, 
  BookOpen, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Globe,
  Database,
  Microscope,
  TestTube
} from 'lucide-react';

const AIAutonomousResearch = () => {
  const researchCapabilities = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms that process and analyze research data autonomously'
    },
    {
      icon: Search,
      title: 'Intelligent Literature Review',
      description: 'Automated discovery and analysis of relevant research papers and publications'
    },
    {
      icon: BookOpen,
      title: 'Knowledge Synthesis',
      description: 'AI-driven synthesis of complex research findings into actionable insights'
    },
    {
      icon: Zap,
      title: 'Real-time Research',
      description: 'Continuous monitoring and analysis of emerging research trends and breakthroughs'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Automated validation and verification of research methodologies and results'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Research',
      description: 'Forecasting future research directions and identifying emerging opportunities'
    }
  ];

  const researchAreas = [
    {
      title: 'Biomedical Research',
      description: 'Drug discovery, genomics, and personalized medicine',
      icon: Microscope
    },
    {
      title: 'Climate Science',
      description: 'Environmental modeling, climate prediction, and sustainability research',
      icon: Globe
    },
    {
      title: 'Quantum Computing',
      description: 'Quantum algorithms, cryptography, and computational research',
      icon: Brain
    },
    {
      title: 'Materials Science',
      description: 'Nanomaterials, advanced composites, and material discovery',
      icon: TestTube
    },
    {
      title: 'Social Sciences',
      description: 'Behavioral analysis, policy research, and social impact studies',
      icon: Users
    },
    {
      title: 'Financial Research',
      description: 'Market analysis, risk assessment, and economic modeling',
      icon: TrendingUp
    }
  ];

  const researchTools = [
    {
      category: 'Data Analysis',
      tools: [
        'Statistical analysis automation',
        'Machine learning model training',
        'Data visualization generation',
        'Pattern recognition algorithms',
        'Anomaly detection systems'
      ]
    },
    {
      category: 'Literature Management',
      tools: [
        'Automated citation management',
        'Research paper summarization',
        'Knowledge graph construction',
        'Cross-reference analysis',
        'Plagiarism detection'
      ]
    },
    {
      category: 'Collaboration',
      tools: [
        'Real-time research sharing',
        'Team coordination automation',
        'Progress tracking systems',
        'Communication optimization',
        'Resource allocation'
      ]
    },
    {
      category: 'Publication Support',
      tools: [
        'Automated report generation',
        'Citation formatting',
        'Peer review assistance',
        'Publication tracking',
        'Impact analysis'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-zion-cyan/10 border border-zion-cyan/30 rounded-full px-4 py-2 mb-6">
              <Brain className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan text-sm font-medium">AI-Powered Research Automation</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI Autonomous
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Research</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Revolutionize your research capabilities with our AI autonomous research platform. 
              Accelerate discoveries, automate analysis, and unlock insights that were previously impossible to find.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/80 transition-all duration-300 transform hover:scale-105"
              >
                Start Research Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center justify-center px-8 py-4 border border-zion-cyan/50 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/20 transition-all duration-300"
              >
                Watch Research Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Research Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Research Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered tools designed to transform every aspect of the research process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-zion-cyan/30 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{capability.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-20 bg-zion-blue-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Research Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI research platform is designed to accelerate discoveries across diverse scientific domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div key={index} className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Tools Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Research Tools & Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive suite of AI-powered tools designed to streamline every aspect of research
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {researchTools.map((tool, index) => (
              <div key={index} className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">{tool.category}</h3>
                <ul className="space-y-3">
                  {tool.tools.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Accelerate Your Research?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading researchers and institutions that have already transformed their research capabilities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/80 transition-all duration-300"
              >
                Start Research Platform
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center justify-center px-8 py-4 border border-zion-cyan/50 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/20 transition-all duration-300"
              >
                Schedule Research Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
=======
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const AIAutonomousResearch: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Autonomous Research - Zion Tech Group</title>
        <meta name="description" content="Cutting-edge AI autonomous research platform providing intelligent research automation, data analysis, and breakthrough discovery capabilities for enterprises." />
        <meta name="keywords" content="AI research, autonomous research, research automation, data analysis, breakthrough discovery" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
              AI Autonomous Research
            </h1>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Intelligent Research Revolution
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Transform your research capabilities with our AI Autonomous Research platform. 
                Leverage advanced machine learning algorithms to automate research processes, 
                analyze vast datasets, and discover breakthrough insights across multiple domains.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Research Capabilities</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Autonomous literature review and analysis
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Intelligent hypothesis generation
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Cross-domain knowledge synthesis
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Predictive trend analysis
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Innovation Benefits</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      10x faster research cycles
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Enhanced breakthrough discovery
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Reduced research costs
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Competitive advantage acceleration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Accelerate Your Research Breakthroughs
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Experience the future of intelligent research with AI automation
              </p>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Researching
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-675b
  );
};

export default AIAutonomousResearch;