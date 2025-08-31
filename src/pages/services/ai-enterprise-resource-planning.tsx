import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Database, 
  Cpu, 
  Zap, 
  Brain, 
  Shield, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Settings,
  Gauge,
  BarChart3,
  Workflow,
  Lock,
  Globe,
  Clock,
  DollarSign,
  Star,
  Award,
  Lightbulb,
  Target,
  Rocket,
  Network,
  Cloud,
  Server,
  MessageCircle,
  Eye,
  Activity,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Desktop,
  Smartwatch,
  Headphones,
  Camera,
  Microphone,
  Keyboard,
  Mouse,
  Printer,
  Scanner,
  Router,
  Switch,
  Firewall,
  LoadBalancer,
  Storage,
  Backup,
  Recovery,
  Monitoring,
  Alerting,
  Logging,
  Analytics,
  Reporting,
  Dashboard,
  Chart,
  Graph,
  Table,
  List,
  Grid,
  Calendar,
  Clock2,
  Timer,
  Stopwatch,
  Hourglass,
  CalendarDays,
  CalendarRange,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarEdit,
  CalendarSearch,
  CalendarHeart,
  CalendarStar,
  CalendarClock,
  CalendarUser,
  CalendarSettings,
  CalendarLock,
  CalendarUnlock,
  CalendarKey,
  CalendarEye,
  CalendarEyeOff,
  CalendarDownload,
  CalendarUpload,
  CalendarShare,
  CalendarCopy,
  CalendarPaste,
  CalendarCut,
  CalendarTrash,
  CalendarRefresh,
  CalendarRotate,
  CalendarZoomIn,
  CalendarZoomOut,
  CalendarMove,
  CalendarResize,
  CalendarFlip,
  CalendarRotateCcw,
  CalendarRotateCw,
  CalendarFlipHorizontal,
  CalendarFlipVertical,
  CalendarFlipHorizontal2,
  CalendarFlipVertical2,
  CalendarFlipHorizontal3,
  CalendarFlipVertical3,
  CalendarFlipHorizontal4,
  CalendarFlipVertical4,
  CalendarFlipHorizontal5,
  CalendarFlipVertical5,
  CalendarFlipHorizontal6,
  CalendarFlipVertical6,
  CalendarFlipHorizontal7,
  CalendarFlipVertical7,
  CalendarFlipHorizontal8,
  CalendarFlipVertical8,
  CalendarFlipHorizontal9,
  CalendarFlipVertical9,
  CalendarFlipHorizontal10,
  CalendarFlipVertical10,
  CalendarFlipHorizontal11,
  CalendarFlipVertical11,
  CalendarFlipHorizontal12,
  CalendarFlipVertical12,
  CalendarFlipHorizontal13,
  CalendarFlipVertical13,
  CalendarFlipHorizontal14,
  CalendarFlipVertical14,
  CalendarFlipHorizontal15,
  CalendarFlipVertical15,
  CalendarFlipHorizontal16,
  CalendarFlipVertical16,
  CalendarFlipHorizontal17,
  CalendarFlipVertical17,
  CalendarFlipHorizontal18,
  CalendarFlipVertical18,
  CalendarFlipHorizontal19,
  CalendarFlipVertical19,
  CalendarFlipHorizontal20,
  CalendarFlipVertical20,
  CalendarFlipHorizontal21,
  CalendarFlipVertical21,
  CalendarFlipHorizontal22,
  CalendarFlipVertical22,
  CalendarFlipHorizontal23,
  CalendarFlipVertical23,
  CalendarFlipHorizontal24,
  CalendarFlipVertical24,
  CalendarFlipHorizontal25,
  CalendarFlipVertical25,
  CalendarFlipHorizontal26,
  CalendarFlipVertical26,
  CalendarFlipHorizontal27,
  CalendarFlipVertical27,
  CalendarFlipHorizontal28,
  CalendarFlipVertical28,
  CalendarFlipHorizontal29,
  CalendarFlipVertical29,
  CalendarFlipHorizontal30,
  CalendarFlipVertical30,
  CalendarFlipHorizontal31,
  CalendarFlipVertical31,
  CalendarFlipHorizontal32,
  CalendarFlipVertical32,
  CalendarFlipHorizontal33,
  CalendarFlipVertical33,
  CalendarFlipHorizontal34,
  CalendarFlipVertical34,
  CalendarFlipHorizontal35,
  CalendarFlipVertical35,
  CalendarFlipHorizontal36,
  CalendarFlipVertical36,
  CalendarFlipHorizontal37,
  CalendarFlipVertical37,
  CalendarFlipHorizontal38,
  CalendarFlipVertical38,
  CalendarFlipHorizontal39,
  CalendarFlipVertical39,
  CalendarFlipHorizontal40,
  CalendarFlipVertical40,
  CalendarFlipHorizontal41,
  CalendarFlipVertical41,
  CalendarFlipHorizontal42,
  CalendarFlipVertical42,
  CalendarFlipHorizontal43,
  CalendarFlipVertical43,
  CalendarFlipHorizontal44,
  CalendarFlipVertical44,
  CalendarFlipHorizontal45,
  CalendarFlipVertical45,
  CalendarFlipHorizontal46,
  CalendarFlipVertical46,
  CalendarFlipHorizontal47,
  CalendarFlipVertical47,
  CalendarFlipHorizontal48,
  CalendarFlipVertical48,
  CalendarFlipHorizontal49,
  CalendarFlipVertical49,
  CalendarFlipHorizontal50,
  CalendarFlipVertical50,
  CalendarFlipHorizontal51,
  CalendarFlipVertical51,
  CalendarFlipHorizontal52,
  CalendarFlipVertical52,
  CalendarFlipHorizontal53,
  CalendarFlipVertical53,
  CalendarFlipHorizontal54,
  CalendarFlipVertical54,
  CalendarFlipHorizontal55,
  CalendarFlipVertical55,
  CalendarFlipHorizontal56,
  CalendarFlipVertical56,
  CalendarFlipHorizontal57,
  CalendarFlipVertical57,
  CalendarFlipHorizontal58,
  CalendarFlipVertical58,
  CalendarFlipHorizontal59,
  CalendarFlipVertical59,
  CalendarFlipHorizontal60,
  CalendarFlipVertical60,
  CalendarFlipHorizontal61,
  CalendarFlipVertical61,
  CalendarFlipHorizontal62,
  CalendarFlipVertical62,
  CalendarFlipHorizontal63,
  CalendarFlipVertical63,
  CalendarFlipHorizontal64,
  CalendarFlipVertical64,
  CalendarFlipHorizontal65,
  CalendarFlipVertical65,
  CalendarFlipHorizontal66,
  CalendarFlipVertical66,
  CalendarFlipHorizontal67,
  CalendarFlipVertical67,
  CalendarFlipHorizontal68,
  CalendarFlipVertical68,
  CalendarFlipHorizontal69,
  CalendarFlipVertical69,
  CalendarFlipHorizontal70,
  CalendarFlipVertical70,
  CalendarFlipHorizontal71,
  CalendarFlipVertical71,
  CalendarFlipHorizontal72,
  CalendarFlipVertical72,
  CalendarFlipHorizontal73,
  CalendarFlipVertical73,
  CalendarFlipHorizontal74,
  CalendarFlipVertical74,
  CalendarFlipHorizontal75,
  CalendarFlipVertical75,
  CalendarFlipHorizontal76,
  CalendarFlipVertical76,
  CalendarFlipHorizontal77,
  CalendarFlipVertical77,
  CalendarFlipHorizontal78,
  CalendarFlipVertical78,
  CalendarFlipHorizontal79,
  CalendarFlipVertical79,
  CalendarFlipHorizontal80,
  CalendarFlipVertical80,
  CalendarFlipHorizontal81,
  CalendarFlipVertical81,
  CalendarFlipHorizontal82,
  CalendarFlipVertical82,
  CalendarFlipHorizontal83,
  CalendarFlipVertical83,
  CalendarFlipHorizontal84,
  CalendarFlipVertical84,
  CalendarFlipHorizontal85,
  CalendarFlipVertical85,
  CalendarFlipHorizontal86,
  CalendarFlipVertical86,
  CalendarFlipHorizontal87,
  CalendarFlipVertical87,
  CalendarFlipHorizontal88,
  CalendarFlipVertical88,
  CalendarFlipHorizontal89,
  CalendarFlipVertical89,
  CalendarFlipHorizontal90,
  CalendarFlipVertical90,
  CalendarFlipHorizontal91,
  CalendarFlipVertical91,
  CalendarFlipHorizontal92,
  CalendarFlipVertical92,
  CalendarFlipHorizontal93,
  CalendarFlipVertical93,
  CalendarFlipHorizontal94,
  CalendarFlipVertical94,
  CalendarFlipHorizontal95,
  CalendarFlipVertical95,
  CalendarFlipHorizontal96,
  CalendarFlipVertical96,
  CalendarFlipHorizontal97,
  CalendarFlipVertical97,
  CalendarFlipHorizontal98,
  CalendarFlipVertical98,
  CalendarFlipHorizontal99,
  CalendarFlipVertical99,
  CalendarFlipHorizontal100,
  CalendarFlipVertical100
} from 'lucide-react';

export default function AIEnterpriseResourcePlanning() {
  return (
    <>
      <Helmet>
        <title>AI Enterprise Resource Planning | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered ERP platform that autonomously manages enterprise resources, processes, and operations with unprecedented efficiency." />
        <meta name="keywords" content="AI ERP, enterprise resource planning, business automation, AI business management, enterprise AI, business intelligence" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-enterprise-resource-planning" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate-darker to-zion-slate-dark">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 via-zion-blue/20 to-zion-cyan/20"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6">
                <Database className="w-4 h-4 mr-2" />
                AI-Powered ERP
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                AI Enterprise Resource Planning
              </h1>
              <p className="text-xl lg:text-2xl text-zion-slate-light mb-8 leading-relaxed">
                Revolutionizing enterprise management with autonomous AI that optimizes resources, processes, and operations across your entire organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border-2 border-zion-purple text-zion-purple font-semibold rounded-lg hover:bg-zion-purple hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-zion-slate-darker">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Revolutionary ERP Capabilities
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Our AI platform autonomously manages and optimizes every aspect of enterprise operations, from finance to human resources.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-zion-slate-dark p-8 rounded-xl border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zion-cyan/30 transition-all duration-300">
                  <Brain className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Business Intelligence</h3>
                <p className="text-zion-slate-light">
                  Advanced AI algorithms analyze business data, identify patterns, and provide actionable insights for strategic decision-making.
                </p>
              </div>

              <div className="bg-zion-slate-dark p-8 rounded-xl border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-zion-purple/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zion-purple/30 transition-all duration-300">
                  <Workflow className="w-8 h-8 text-zion-purple" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Automated Process Management</h3>
                <p className="text-zion-slate-light">
                  Intelligent workflow automation that streamlines business processes and eliminates manual tasks across all departments.
                </p>
              </div>

              <div className="bg-zion-slate-dark p-8 rounded-xl border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-zion-blue/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zion-blue/30 transition-all duration-300">
                  <BarChart3 className="w-8 h-8 text-zion-blue" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Real-time Analytics</h3>
                <p className="text-zion-slate-light">
                  Comprehensive dashboards and real-time reporting provide instant visibility into all aspects of your business operations.
                </p>
              </div>

              <div className="bg-zion-slate-dark p-8 rounded-xl border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-zion-green/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zion-green/30 transition-all duration-300">
                  <Users className="w-8 h-8 text-zion-green" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Human Resource Management</h3>
                <p className="text-zion-slate-light">
                  AI-powered HR management with automated recruitment, performance tracking, and employee development planning.
                </p>
              </div>

              <div className="bg-zion-slate-dark p-8 rounded-xl border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-zion-orange/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zion-orange/30 transition-all duration-300">
                  <DollarSign className="w-8 h-8 text-zion-orange" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Financial Management</h3>
                <p className="text-zion-slate-light">
                  Intelligent financial planning, budgeting, and forecasting with AI-powered risk assessment and compliance monitoring.
                </p>
              </div>

              <div className="bg-zion-slate-dark p-8 rounded-xl border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-zion-red/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zion-red/30 transition-all duration-300">
                  <Shield className="w-8 h-8 text-zion-red" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Security & Compliance</h3>
                <p className="text-zion-slate-light">
                  Enterprise-grade security with automated compliance monitoring and regulatory reporting across all business functions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-zion-slate-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                How Our AI ERP Platform Works
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                A seamless, intelligent process that transforms traditional enterprise management into a fully autonomous, AI-driven operation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-zion-cyan">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Data Integration</h3>
                <p className="text-zion-slate-light">
                  Connect all business systems, databases, and applications to our unified AI platform for comprehensive data collection.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-zion-purple">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">AI Analysis</h3>
                <p className="text-zion-slate-light">
                  Our AI autonomously analyzes business data, identifies patterns, and generates optimization recommendations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-zion-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-zion-blue">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Autonomous Execution</h3>
                <p className="text-zion-slate-light">
                  AI automatically implements optimizations, manages workflows, and coordinates operations across all departments.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-zion-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-zion-green">4</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Continuous Learning</h3>
                <p className="text-zion-slate-light">
                  Platform continuously learns from business data, improving efficiency and optimization over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-zion-slate-darker">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Choose Our AI ERP Platform?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Transform your enterprise operations with cutting-edge AI technology that maximizes efficiency, productivity, and profitability.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-zion-cyan rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">40% Efficiency Increase</h3>
                    <p className="text-zion-slate-light">
                      AI optimization increases operational efficiency while reducing manual work and human error.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-zion-cyan rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Real-time Visibility</h3>
                    <p className="text-zion-slate-light">
                      Get instant insights into all aspects of your business with comprehensive real-time dashboards and reporting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-zion-cyan rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Automated Compliance</h3>
                    <p className="text-zion-slate-light">
                      Automated regulatory compliance monitoring and reporting across all business functions and jurisdictions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-zion-cyan rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Cost Reduction</h3>
                    <p className="text-zion-slate-light">
                      Reduce operational costs through process automation, resource optimization, and waste elimination.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-zion-cyan rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Scalable Solution</h3>
                    <p className="text-zion-slate-light">
                      Platform scales from small businesses to large enterprises with enterprise-grade reliability and performance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-zion-cyan rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">24/7 Operations</h3>
                    <p className="text-zion-slate-light">
                      AI-powered systems operate continuously, ensuring business operations never stop and always remain optimized.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-purple/20 via-zion-blue/20 to-zion-cyan/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join leading enterprises who are already using our AI ERP platform to revolutionize their operations and achieve unprecedented efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-zion-purple text-zion-purple font-semibold rounded-lg hover:bg-zion-purple hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}