import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Leaf, 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Clock, 
  DollarSign,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Database,
  Lock,
  Globe,
  Lightbulb,
  Target,
  Rocket,
  Award,
  Star,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Network,
  Server,
  Cloud,
  Workflow,
  Code,
  Monitor,
  Activity,
  Eye,
  Settings,
  Palette,
  Zap as ZapIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Clock as ClockIcon,
  DollarSign as DollarSignIcon,
  Leaf as LeafIcon,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle as MessageCircleIcon,
  Star as StarIcon,
  Users2,
  Cog,
  Palette as PaletteIcon,
  Menu,
  X,
  Video,
  GraduationCap,
  Handshake,
  ShoppingCart,
  ChevronRight,
  Calendar,
  Award as AwardIcon,
  BookOpen,
  Layers,
  Factory,
  HeartHandshake,
  Briefcase,
  PenTool,
  Layout,
  Truck,
  TreePine,
  Recycle,
  Sun,
  Wind,
  Droplets,
  Flame,
  Gauge,
  TrendingDown,
  Building2
} from 'lucide-react';

export default function AISustainabilityManagementPlatform() {
  return (
    <>
      <Helmet>
        <title>AI Sustainability Management Platform | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI-powered sustainability management platform for ESG compliance, carbon footprint tracking, and environmental impact optimization. Drive sustainability goals with intelligent insights." />
        <meta name="keywords" content="AI sustainability, ESG management, carbon footprint tracking, environmental management, sustainability platform, green technology, climate action" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-sustainability-management-platform" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Sustainability Management Platform | Zion Tech Group" />
        <meta property="og:description" content="Comprehensive AI-powered sustainability management platform for ESG compliance and environmental impact optimization." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services/ai-sustainability-management-platform" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Sustainability Management Platform | Zion Tech Group" />
        <meta name="twitter:description" content="Comprehensive AI-powered sustainability management platform for ESG compliance." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-8">
                <Leaf className="w-4 h-4 mr-2" />
                AI-Powered Sustainability
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                AI Sustainability
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400"> Management Platform</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your organization's environmental impact with our comprehensive AI-powered 
                sustainability platform. Track ESG metrics, optimize carbon footprint, and achieve 
                sustainability goals with intelligent insights and automated recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Sustainability Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="#demo" 
                  className="inline-flex items-center px-8 py-4 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300"
                >
                  Watch Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive Sustainability Management
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI platform provides end-to-end sustainability management capabilities, 
                from data collection to actionable insights and automated optimization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* ESG Tracking & Reporting */}
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-green-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">ESG Tracking & Reporting</h3>
                <p className="text-gray-300">
                  Comprehensive ESG metrics tracking with automated reporting for investors, 
                  regulators, and stakeholders. Real-time dashboards and compliance monitoring.
                </p>
              </div>

              {/* Carbon Footprint Analysis */}
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-green-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <TreePine className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Carbon Footprint Analysis</h3>
                <p className="text-gray-300">
                  AI-powered carbon footprint calculation across operations, supply chain, 
                  and product lifecycle with detailed breakdown and optimization recommendations.
                </p>
              </div>

              {/* Energy Efficiency Optimization */}
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-green-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Energy Efficiency Optimization</h3>
                <p className="text-gray-300">
                  Smart energy management with AI-driven optimization of consumption patterns, 
                  renewable energy integration, and demand response strategies.
                </p>
              </div>

              {/* Waste Management & Circular Economy */}
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-green-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <Recycle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Waste Management & Circular Economy</h3>
                <p className="text-gray-300">
                  Intelligent waste tracking, recycling optimization, and circular economy 
                  strategies with AI-powered material flow analysis and resource recovery.
                </p>
              </div>

              {/* Water & Resource Management */}
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-green-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Water & Resource Management</h3>
                <p className="text-gray-300">
                  Comprehensive water usage monitoring, conservation strategies, and resource 
                  optimization with predictive analytics and automated conservation measures.
                </p>
              </div>

              {/* Supply Chain Sustainability */}
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-green-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Supply Chain Sustainability</h3>
                <p className="text-gray-300">
                  End-to-end supply chain sustainability tracking with supplier assessment, 
                  carbon footprint mapping, and sustainable sourcing recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">How AI Sustainability Works</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform uses advanced AI to transform sustainability data into actionable insights 
                and automated optimization strategies
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Data Collection</h3>
                <p className="text-gray-300">
                  AI automatically collects sustainability data from IoT sensors, systems, and manual inputs
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">AI Analysis</h3>
                <p className="text-gray-300">
                  Machine learning algorithms analyze patterns, identify inefficiencies, and predict trends
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Generate Insights</h3>
                <p className="text-gray-300">
                  AI generates actionable insights and optimization recommendations for sustainability improvement
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Automated Action</h3>
                <p className="text-gray-300">
                  Platform automatically implements optimization strategies and tracks improvement results
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Industry Applications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our sustainability platform can transform your industry and drive 
                environmental responsibility across your organization
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Manufacturing */}
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-green-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-6">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Manufacturing</h3>
                <p className="text-gray-300">
                  Optimize production processes, reduce waste, improve energy efficiency, and 
                  implement circular economy principles with AI insights.
                </p>
              </div>

              {/* Retail & E-commerce */}
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-green-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Retail & E-commerce</h3>
                <p className="text-gray-300">
                  Sustainable packaging, green logistics, energy-efficient operations, and 
                  customer sustainability engagement tracking.
                </p>
              </div>

              {/* Financial Services */}
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-green-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Financial Services</h3>
                <p className="text-gray-300">
                  ESG investment analysis, green financing, sustainability risk assessment, 
                  and portfolio carbon footprint management.
                </p>
              </div>

              {/* Healthcare */}
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-green-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <HeartHandshake className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Healthcare</h3>
                <p className="text-gray-300">
                  Medical waste management, energy-efficient facilities, sustainable procurement, 
                  and patient sustainability education.
                </p>
              </div>

              {/* Transportation & Logistics */}
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-green-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mb-6">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Transportation & Logistics</h3>
                <p className="text-gray-300">
                  Route optimization, electric vehicle integration, fuel efficiency, and 
                  sustainable last-mile delivery solutions.
                </p>
              </div>

              {/* Real Estate */}
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-green-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Real Estate</h3>
                <p className="text-gray-300">
                  Green building certification, energy management, water conservation, and 
                  sustainable property development tracking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Sustainable Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the sustainability platform plan that fits your organization's needs and scale
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Sustainability Starter */}
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-green-500/50 transition-all duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Sustainability Starter</h3>
                  <div className="text-4xl font-bold text-green-400 mb-2">$399</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 5 locations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Basic ESG tracking
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Carbon footprint analysis
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Email support
                  </li>
                </ul>
                <a 
                  href="#contact" 
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
                >
                  Get Started
                </a>
              </div>

              {/* Sustainability Professional */}
              <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-xl p-8 border-2 border-green-500/50 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Sustainability Professional</h3>
                  <div className="text-4xl font-bold text-green-400 mb-2">$799</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 25 locations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced ESG analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    AI optimization recommendations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Supply chain sustainability
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Priority support
                  </li>
                </ul>
                <a 
                  href="#contact" 
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300"
                >
                  Get Started
                </a>
              </div>

              {/* Sustainability Enterprise */}
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-green-500/50 transition-all duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Sustainability Enterprise</h3>
                  <div className="text-4xl font-bold text-green-400 mb-2">$1,599</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited locations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Full AI sustainability suite
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom sustainability metrics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    White-label solutions
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    24/7 dedicated support
                  </li>
                </ul>
                <a 
                  href="#contact" 
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Sustainability Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your organization's environmental impact and achieve sustainability goals 
                with AI-powered insights and automation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <TrendingDown className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Reduce Environmental Impact</h3>
                    <p className="text-gray-300">
                      Achieve significant reductions in carbon emissions, waste generation, and 
                      resource consumption through AI-optimized processes and strategies.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Meet ESG Goals</h3>
                    <p className="text-gray-300">
                      Track and achieve ESG targets with comprehensive metrics, automated reporting, 
                      and stakeholder transparency.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Cost Savings</h3>
                    <p className="text-gray-300">
                      Reduce operational costs through energy efficiency, waste reduction, and 
                      resource optimization while improving sustainability performance.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Stakeholder Engagement</h3>
                    <p className="text-gray-300">
                      Enhance brand reputation and customer loyalty with transparent sustainability 
                      reporting and demonstrated environmental commitment.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Data-Driven Decisions</h3>
                    <p className="text-gray-300">
                      Make informed sustainability decisions with AI-powered analytics, predictive 
                      insights, and real-time performance monitoring.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Regulatory Compliance</h3>
                    <p className="text-gray-300">
                      Stay ahead of environmental regulations and compliance requirements with 
                      automated monitoring and reporting capabilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Go Green?</h2>
              <p className="text-xl text-gray-300 mb-12">
                Join leading organizations that are already using our AI sustainability platform 
                to drive environmental responsibility and achieve sustainability goals.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <a href="tel:+13024640950" className="text-green-400 hover:text-green-300 transition-colors">
                    +1 (302) 464-0950
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <a 
                    href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    Middletown, DE
                  </a>
                </div>
              </div>
              
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30">
                <h3 className="text-2xl font-bold text-white mb-6">Start Your Sustainability Journey</h3>
                <p className="text-gray-300 mb-8">
                  Schedule a personalized consultation and discover how our AI sustainability platform 
                  can transform your environmental impact and drive sustainability success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:kleber@ziontechgroup.com?subject=Sustainability Platform Consultation Request" 
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300"
                  >
                    Request Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                  <a 
                    href="tel:+13024640950" 
                    className="inline-flex items-center px-8 py-4 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}