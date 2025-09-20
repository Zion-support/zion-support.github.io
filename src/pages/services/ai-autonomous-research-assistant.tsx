import React from "react"
import { SEO } from "../../components/SEO"
import { 
  Brain
  Search, 
  BookOpen, 
  Zap, 
  Users, 
  Clock, 
  TrendingUp, 
  CheckCircle
  Lightbulb
  Target
  Database
  Lock
  Globe
  Smartphone
  Monitor
  FileText
  BarChart3
  Rocket
  Atom
  Flask
  Microscope
  Telescope
  Cpu
  Network
  Shield
  ArrowRight
} from "lucide-react"
const,
  AIAutonomousResearchAssistan: t: React.FC = () () => {
  const features = [
    {
      ico,
  n: Brain,tit,
  l: e: 'Autonomous Learning',descripti,
  o: n: 'Self-improving AI that continuously learns and adapts to new research domains'
    }, {
      ic,
  o: n: Search,tit,
  l: e: 'Intelligent Discovery',descripti,
  o: n: 'Advanced algorithms that uncover hidden patterns and connections in data'
    }, {
      ic,
  o: n: BookOpen,tit,
  l: e: 'Knowledge Synthesis',descripti,
  o: n: 'Automated literature review and synthesis across multiple research fields'
    }, {
      ic,
  o: n: Zap,tit,
  l: e: 'Real-time Analysis',descripti,
  o: n: 'Instant processing and analysis of complex research datasets'
    }, {
      ic,
  o: n: Users,tit,
  l: e: 'Collaborative Research',descripti,
  o: n: 'Multi-user platform for team-based research and knowledge sharing'
    }, {
      ic,
  o: n: Clock,tit,
  l: e: '24/7 Research',descripti,
  o: n: 'Continuous research operations without human intervention'
    }
  ]
  const capabilities = [
    {
      ic,
  o: n: Lightbulb,tit,
  l: e: 'Hypothesis Generation',descripti,
  o: n: 'AI-powered hypothesis creation based on data patterns and existing research'
    }, {
      ic,
  o: n: Target,tit,
  l: e: 'Research Planning',descripti,
  o: n: 'Automated research methodology design and experimental planning'
    }, {
      ic,
  o: n: Database,tit,
  l: e: 'Data Mining',descripti,
  o: n: 'Advanced data extraction and analysis from multiple sources'
    }, {
      ic,
  o: n: Lock,tit,
  l: e: 'Secure Research',descripti,
  o: n: 'Enterprise-grade security for sensitive research data and findings'
    }, {
      ic,
  o: n: Globe,tit,
  l: e: 'Global Collaboration',descripti,
  o: n: 'Connect with researchers worldwide through our platform'
    }, {
      ic,
  o: n: Smartphone,tit,
  l: e: 'Mobile Access',descripti,
  o: n: 'Access your research assistant from anywhere, anytime'
    }
  ]

  const applications = [
    'Scientific Research & DiscoveryMedical Research & Drug Development'
    'Academic Research & PublicationsMarket Research & Analysis'
    'Technology InnovationEnvironmental Studies'
    'Social Sciences ResearchEngineering & Design Research'
  ]

  const benefits = [
    'Accelerate research by 10xReduce research costs by 60%'
    'Improve research accuracy by 85%Enable 24/7 research operations'
    'Facilitate cross-disciplinary collaborationAutomate repetitive research tasks'
  ]

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
            <h1 className="text-5xl,
  m: d: text-6xl font-bold text-white mb-6">
              AI Autonomous Research Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The future of research is autonomous. Our AI assistant works independently to discover
              analyze, and synthesize knowledge across all research domains, accelerating breakthroughs 
              and enabling 24/7 research operations.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-400 to-blue-500 text-white font-semibold rounded-lg,
  hove: r:from-purple-500,
  hove: r:to-blue-600 transition-all duration-200,
  hove: r:scale-105 shadow-lg">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-slate-800/50 border border-slate-600 text-white font-semibold rounded-lg hove,
  r:bg-slate-700/50 transition-all duration-200">
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
          
          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl,
  hove: r: bg-slate-700/50,
  hove: r:border-purple-400/30 transition-all duration-200,
  hove: r:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hov,
  e: r:from-purple-400/40 group-hove,
  r:to-blue-500/40 transition-all duration-200">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 group-hov,
  e: r:text-gray-300 transition-colors">
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
          
          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl,
  hove: r: bg-slate-700/50,
  hove: r:border-purple-400/30 transition-all duration-200,
  hove: r:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-lg flex items-center justify-center mb-4 group-hov,
  e: r:from-blue-400/40 group-hove,
  r:to-cyan-500/40 transition-all duration-200">
                  <capability.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-400 group-hov,
  e: r:text-gray-300 transition-colors">
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
          <div className="grid grid-cols-1,
  l: g:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Research Across All Domains
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI research assistant is designed to work across all research fields
                from hard sciences to social sciences, adapting its approach to each domain.
              </p>
              <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-4">
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
          
          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl,
  hove: r: bg-slate-700/50 hove,
  r:border-purple-400/30 transition-all duration-200">
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
          <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-400 to-blue-500 text-white font-semibold rounded-lg,
  hove: r:from-purple-500,
  hove: r:to-blue-600 transition-all duration-200,
  hove: r:scale-105 shadow-lg">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-slate-800/50 border border-slate-600 text-white font-semibold rounded-lg hove,
  r:bg-slate-700/50 transition-all duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
export default AIAutonomousResearchAssistant