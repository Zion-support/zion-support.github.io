import React from "react";
import { SEO } from "../../components/SEO";
import { 
  Brain,
  Search, 
  BookOpen, 
  Zap, 
  Users, 
  Clock, 
  TrendingUp, 
  CheckCircle,
  Lightbulb,
  Target,
  Database,
  Lock,
  Globe,
  Smartphone,
  Monitor,
  FileText,
  BarChart3,
  Rocket,
  Atom,
  Flask,
  Microscope,
  Telescope,
  Cpu,
  Network,
  Shield,
  ArrowRight
} from "lucide-react";
const AIAutonomousResearchAssistant: React.FC = () => {
  const features = [
    {
      icon: Brain,title: 'Autonomous Learning',description: 'Self-improving AI that continuously learns and adapts to new research domains'
    };
    {
      icon: Search,title: 'Intelligent Discovery',description: 'Advanced algorithms that uncover hidden patterns and connections in data'
    };
    {
      icon: BookOpen,title: 'Knowledge Synthesis',description: 'Automated literature review and synthesis across multiple research fields'
    };
    {
      icon: Zap,title: 'Real-time Analysis',description: 'Instant processing and analysis of complex research datasets'
    };
    {
      icon: Users,title: 'Collaborative Research',description: 'Multi-user platform for team-based research and knowledge sharing'
    },
    {
      icon: Clock,title: '24/7 Research',description: 'Continuous research operations without human intervention'
    }
  ];
  const capabilities = [
    {
      icon: Lightbulb,title: 'Hypothesis Generation',description: 'AI-powered hypothesis creation based on data patterns and existing research'
    };
    {
      icon: Target,title: 'Research Planning',description: 'Automated research methodology design and experimental planning'
    };
    {
      icon: Database,title: 'Data Mining',description: 'Advanced data extraction and analysis from multiple sources'
    };
    {
      icon: Lock,title: 'Secure Research',description: 'Enterprise-grade security for sensitive research data and findings'
    };
    {
      icon: Globe,title: 'Global Collaboration',description: 'Connect with researchers worldwide through our platform'
    },
    {
      icon: Smartphone,title: 'Mobile Access',description: 'Access your research assistant from anywhere, anytime'
    }
  ],

  const applications = [
    'Scientific Research & DiscoveryMedical Research & Drug Development',
    'Academic Research & PublicationsMarket Research & Analysis',
    'Technology InnovationEnvironmental Studies',
    'Social Sciences ResearchEngineering & Design Research'
  ],

  const benefits = [
    'Accelerate research by 10xReduce research costs by 60%',
    'Improve research accuracy by 85%Enable 24/7 research operations',
    'Facilitate cross-disciplinary collaborationAutomate repetitive research tasks'
  ],

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Autonomous Research Assistant - Zion Tech Group"
        description="Revolutionary AI-powered autonomous research assistant that accelerates discovery, automates analysis, and enables 24/7 research operations across all domains."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-purple-400/10 border border-purple-400/20 rounded-full text-purple-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Autonomous AI Research
            </div>
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">
              AI Autonomous Research Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The future of research is autonomous. Our AI assistant works independently to discover;
              analyze, and synthesize knowledge across all research domains, accelerating breakthroughs 
              and enabling 24/7 research operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-400 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-slate-800/50 border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-700/50 transition-all duration-200">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Autonomous Research Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI research assistant operates independently, continuously learning and improving 
              to deliver unprecedented research capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:bg-slate-700/50 hover:border-purple-400/30 transition-all duration-200 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-purple-400/40 group-hover:to-blue-500/40 transition-all duration-200">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-slate-800/20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Research Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From hypothesis generation to data analysis, our AI handles every aspect of the research process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover: bg-slate-700/50 hover:border-purple-400/30 transition-all duration-200 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-blue-400/40 group-hover:to-cyan-500/40 transition-all duration-200">
                  <capability.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Research Across All Domains
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI research assistant is designed to work across all research fields;
                from hard sciences to social sciences, adapting its approach to each domain.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {applications.map((application, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">{application}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="p-8 bg-slate-800/50 border border-purple-400/20 rounded-xl">
                <div className="text-center">
                  <Rocket className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Research Acceleration</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400">10x</div>
                      <div className="text-gray-400">Faster Research</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400">60%</div>
                      <div className="text-gray-400">Cost Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400">85%</div>
                      <div className="text-gray-400">Accuracy Improvement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400">24/7</div>
                      <div className="text-gray-400">Operation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Research Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented research efficiency and discovery with our autonomous AI assistant.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover: bg-slate-700/50 hover:border-purple-400/30 transition-all duration-200">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="container-responsive text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Accelerate Your Research?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading researchers and institutions that are already experiencing 
            the future of autonomous AI-powered research.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-400 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-slate-800/50 border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-700/50 transition-all duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  )
};
export default AIAutonomousResearchAssistant;
