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
  Search,
  FileText,
  Database,
  Network,
  Lock,
  Globe,
  Target,
  DollarSign,
  BarChart3,
  Settings,
  Rocket,
  BookOpen,
  Lightbulb,
  Microscope,
  FlaskConical
} from "lucide-react";
import { Link } from 'react-router-dom';

export default function AIAutonomousResearchAssistant() {
  return (
    <>
      <SEO 
        title="AI Autonomous Research Assistant - Revolutionary Research Automation | Zion Tech Group"
        description="Transform your research capabilities with our AI Autonomous Research Assistant. Automate literature reviews, data analysis, and hypothesis generation with unprecedented accuracy and speed."
        keywords="AI research assistant, autonomous research, AI literature review, research automation, scientific research AI, automated data analysis"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-20"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <Badge className="bg-zion-purple/20 border border-zion-purple/30 text-zion-purple mb-6">
              <Microscope className="h-4 w-4 mr-2" />
              Research Automation
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Autonomous
              <span className="bg-gradient-to-r from-zion-purple to-zion-cyan bg-clip-text text-transparent"> Research Assistant</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionize your research workflow with our AI Autonomous Research Assistant. Automate literature reviews, data analysis, and hypothesis generation with <span className="text-zion-cyan font-semibold">95% accuracy and 10x speed</span>.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">10x</div>
                <div className="text-gray-400 text-sm">Faster Research</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2">95%</div>
                <div className="text-gray-400 text-sm">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Continuous Analysis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">∞</div>
                <div className="text-gray-400 text-sm">Knowledge Base</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link to="/contact">
                <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-4 text-lg">
                  Start Research Automation
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
              Revolutionary Research Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Autonomous Research Assistant transforms how research is conducted across all industries and disciplines.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700 hover:border-zion-purple/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-zion-purple/20 rounded-lg">
                    <Search className="h-6 w-6 text-zion-purple" />
                  </div>
                  <CardTitle className="text-white">Intelligent Literature Review</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Automatically scan, analyze, and synthesize thousands of research papers in minutes, not months.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Multi-language support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Citation tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Trend analysis
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-zion-purple/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-zion-cyan/20 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-zion-cyan" />
                  </div>
                  <CardTitle className="text-white">Automated Data Analysis</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Process and analyze complex datasets with advanced statistical methods and machine learning algorithms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Statistical modeling
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Pattern recognition
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Predictive analytics
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-zion-purple/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Lightbulb className="h-6 w-6 text-green-400" />
                  </div>
                  <CardTitle className="text-white">Hypothesis Generation</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Generate testable hypotheses based on existing research and identify research gaps automatically.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Gap identification
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Novel insights
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Research directions
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-zion-purple/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-yellow-500/20 rounded-lg">
                    <FileText className="h-6 w-6 text-yellow-400" />
                  </div>
                  <CardTitle className="text-white">Automated Report Writing</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Generate comprehensive research reports, summaries, and publications with proper citations and formatting.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Multiple formats
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Citation management
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Peer review ready
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-zion-purple/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Database className="h-6 w-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-white">Knowledge Integration</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Connect disparate sources of information and create comprehensive knowledge graphs of your research domain.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Cross-domain linking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Relationship mapping
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Knowledge visualization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-zion-purple/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <FlaskConical className="h-6 w-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white">Experimental Design</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Optimize experimental designs and suggest methodologies based on research objectives and constraints.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Method optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Sample size calculation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Protocol generation
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
              Research Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our AI Autonomous Research Assistant is revolutionizing research across various industries and disciplines.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zion-purple/20 rounded-lg">
                  <BookOpen className="h-6 w-6 text-zion-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Academic Research</h3>
                  <p className="text-gray-300">Accelerate PhD research, grant applications, and publication processes with automated literature reviews and data analysis.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zion-cyan/20 rounded-lg">
                  <FlaskConical className="h-6 w-6 text-zion-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Pharmaceutical R&D</h3>
                  <p className="text-gray-300">Streamline drug discovery research by analyzing clinical trials, molecular interactions, and efficacy data.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <DollarSign className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Market Research</h3>
                  <p className="text-gray-300">Analyze market trends, consumer behavior, and competitive landscapes to inform business strategies.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-500/20 rounded-lg">
                  <Settings className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Technology Innovation</h3>
                  <p className="text-gray-300">Monitor technological trends, patent landscapes, and innovation opportunities in emerging fields.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 rounded-2xl p-8 border border-zion-purple/30">
              <h3 className="text-2xl font-bold text-white mb-6">Research Impact</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Research Speed</span>
                  <span className="text-zion-cyan font-semibold">10x Faster</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Literature Coverage</span>
                  <span className="text-green-400 font-semibold">100% Complete</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Accuracy Rate</span>
                  <span className="text-yellow-400 font-semibold">95%+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Cost Reduction</span>
                  <span className="text-purple-400 font-semibold">80% Less</span>
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
            Ready to Revolutionize Your Research?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Transform your research workflow with our AI Autonomous Research Assistant and achieve breakthrough discoveries faster than ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-zion-purple hover:bg-gray-100 px-8 py-4 text-lg">
                Start Research Automation
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