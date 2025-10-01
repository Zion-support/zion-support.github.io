import {
  ArrowRight,
  Award,
  CheckCircle,
  Globe,
  Rocket,
  Shield,
  Sparkles,
  Star,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import AdvertisingBanner from "../components/AdvertisingBanner";
import EnhancedTestimonials from "../components/EnhancedTestimonials";
import Header from "../components/Header";
import ModernFeatures from "../components/ModernFeatures";
import LatestInsights from "../components/LatestInsights";
import { latestInsights } from "../content/insights";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Zion Tech Group - Leading AI & IT Solutions | Transform Your Business
        </title>
        <meta
          name="description"
          content="Zion Tech Group delivers cutting-edge AI and IT solutions that transform businesses. Enterprise security, AI innovation, and expert consulting services."
        />
        <meta
          name="keywords"
          content="AI solutions, IT consulting, cybersecurity, machine learning, cloud infrastructure, digital transformation"
        />
        <meta
          property="og:title"
          content="Zion Tech Group - Leading AI & IT Solutions"
        />
        <meta
          property="og:description"
          content="Transform your business with cutting-edge AI and IT solutions"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Zion Tech Group - Leading AI & IT Solutions"
        />
        <meta
          name="twitter:description"
          content="Transform your business with cutting-edge AI and IT solutions"
        />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>
      <AdvertisingBanner />
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark relative overflow-hidden">
        <Header />
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-40 left-1/2 w-60 h-60 bg-zion-cyan rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-8 animate-fade-in border border-zion-cyan/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Trusted by 500+ companies worldwide
              <Rocket className="w-4 h-4 ml-2 animate-bounce" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-zion-blue-light to-zion-purple-light bg-clip-text text-transparent animate-gradient bg-300%">
                Zion Tech Group
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in">
              🚀 <strong>NEW IN 2025:</strong> Revolutionary AI-Powered Micro SAAS Platform! 
              Transform your business with our cutting-edge AI solutions, enterprise-grade security, 
              and next-generation cloud infrastructure. Join 500+ companies already scaling with us!
            </p>

            {/* NEW CONTENT ANNOUNCEMENT - OCTOBER 1, 2025 */}
            <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-2 border-emerald-400/50 rounded-xl p-6 mb-6 animate-fade-in shadow-2xl">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Rocket className="w-6 h-6 text-emerald-400 animate-bounce" />
                <span className="text-xl font-bold text-emerald-300">🚀 BREAKING: OCTOBER 1, 2025 - MAJOR RELEASE!</span>
                <Rocket className="w-6 h-6 text-emerald-400 animate-bounce" />
              </div>
              <p className="text-white text-2xl font-bold mb-3">
                Revolutionary New Content: Multimodal AI, Intelligent Automation & Real-World Success
              </p>
              <div className="grid md:grid-cols-4 gap-3 text-sm text-emerald-100 mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="font-semibold">Multimodal AI Breakthrough</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="font-semibold">Intelligent Automation Platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="font-semibold">$89M Bank Success Story</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="font-semibold">Enterprise Automation Suite</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/blog/ai-2025-oct-01-multimodal-enterprise-breakthrough"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Read Multimodal AI Guide
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/case-studies/global-bank-automation-success-2025"
                  className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View $89M Case Study
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Special Promotion Banner */}
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-xl p-6 mb-8 animate-fade-in">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-green-400 animate-pulse" />
                <span className="text-lg font-bold text-green-400">LIMITED TIME OFFER</span>
                <Sparkles className="w-6 h-6 text-green-400 animate-pulse" />
              </div>
              <p className="text-white text-lg font-semibold mb-2">
                🎯 Get 50% OFF Your First 3 Months + FREE AI Strategy Consultation
              </p>
              <p className="text-zion-slate-light text-sm">
                Valid until March 31, 2025 • No setup fees • Cancel anytime
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-2xl mx-auto">
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-zion-cyan group-hover:text-zion-blue-light transition-colors">
                  500+
                </div>
                <div className="text-sm text-zion-slate-light">
                  Projects Delivered
                </div>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-zion-cyan group-hover:text-zion-blue-light transition-colors">
                  99.9%
                </div>
                <div className="text-sm text-zion-slate-light">Uptime SLA</div>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-zion-cyan group-hover:text-zion-blue-light transition-colors">
                  24/7
                </div>
                <div className="text-sm text-zion-slate-light">Support</div>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-zion-cyan group-hover:text-zion-blue-light transition-colors">
                  5★
                </div>
                <div className="text-sm text-zion-slate-light">
                  Client Rating
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get Started
              </Link>
            </div>
          </div>
        </section>

        {/* NEW CONTENT HIGHLIGHT SECTION - OCTOBER 1, 2025 */}
        <section className="container mx-auto px-6 py-16 relative z-10">
          <div className="bg-gradient-to-br from-emerald-900/50 via-teal-900/40 to-cyan-900/50 rounded-2xl border-2 border-emerald-300/60 p-8 md:p-12 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-4 w-4 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-emerald-300 font-bold text-xl uppercase tracking-wider">🎉 OCTOBER 1, 2025 - REVOLUTIONARY NEW CONTENT!</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Transform Your Enterprise with Our Latest AI Breakthroughs
            </h2>
            
            <p className="text-xl text-emerald-50 mb-8 max-w-3xl">
              From multimodal AI achieving 95%+ accuracy to intelligent automation delivering $89M savings - 
              explore cutting-edge solutions and proven success stories.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Multimodal AI Guide */}
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-xl p-6 border-2 border-emerald-400/50 hover:border-emerald-300/80 transition-all hover:scale-105 hover:shadow-2xl">
                <div className="text-emerald-300 text-sm font-bold mb-2 uppercase">🧠 NEW: Technical Guide</div>
                <h3 className="text-xl font-bold text-white mb-3">Multimodal AI Breakthrough</h3>
                <p className="text-emerald-50 text-sm mb-4 leading-relaxed">
                  Vision + Language + Audio fusion achieving 95% accuracy. 300% productivity gains and $180M+ value creation.
                </p>
                <Link 
                  to="/blog/ai-2025-oct-01-multimodal-enterprise-breakthrough" 
                  className="inline-flex items-center text-emerald-200 hover:text-white font-bold text-sm bg-emerald-600/30 hover:bg-emerald-600/50 px-4 py-2 rounded-lg transition-all"
                >
                  Read 14-Min Guide <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              {/* Intelligent Automation Platform */}
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-6 border-2 border-cyan-400/50 hover:border-cyan-300/80 transition-all hover:scale-105 hover:shadow-2xl">
                <div className="text-cyan-300 text-sm font-bold mb-2 uppercase">⚙️ NEW: Platform Overview</div>
                <h3 className="text-xl font-bold text-white mb-3">Intelligent Automation</h3>
                <p className="text-cyan-50 text-sm mb-4 leading-relaxed">
                  End-to-end automation achieving 90% reduction in manual tasks. $127M+ avg savings with 99.8% accuracy.
                </p>
                <Link 
                  to="/blog/ai-2025-oct-01-intelligent-automation-platform" 
                  className="inline-flex items-center text-cyan-200 hover:text-white font-bold text-sm bg-cyan-600/30 hover:bg-cyan-600/50 px-4 py-2 rounded-lg transition-all"
                >
                  Explore Platform <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              {/* Case Study */}
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-6 border-2 border-purple-400/50 hover:border-purple-300/80 transition-all hover:scale-105 hover:shadow-2xl">
                <div className="text-purple-300 text-sm font-bold mb-2 uppercase">💰 NEW: Success Story</div>
                <h3 className="text-xl font-bold text-white mb-3">$89M Bank Transformation</h3>
                <p className="text-purple-50 text-sm mb-4 leading-relaxed">
                  Global bank achieves 87% automation, 99.7% accuracy, and ROI of 2,340% in just 6 months.
                </p>
                <Link 
                  to="/case-studies/global-bank-automation-success-2025" 
                  className="inline-flex items-center text-purple-200 hover:text-white font-bold text-sm bg-purple-600/30 hover:bg-purple-600/50 px-4 py-2 rounded-lg transition-all"
                >
                  View Case Study <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              {/* Enterprise Service */}
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-xl p-6 border-2 border-blue-400/50 hover:border-blue-300/80 transition-all hover:scale-105 hover:shadow-2xl">
                <div className="text-blue-300 text-sm font-bold mb-2 uppercase">🚀 NEW: Service Launch</div>
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Automation Suite</h3>
                <p className="text-blue-50 text-sm mb-4 leading-relaxed">
                  Complete automation platform with process mining, workflow orchestration, and AI decision-making.
                </p>
                <Link 
                  to="/services/enterprise-ai-automation-suite" 
                  className="inline-flex items-center text-blue-200 hover:text-white font-bold text-sm bg-blue-600/30 hover:bg-blue-600/50 px-4 py-2 rounded-lg transition-all"
                >
                  View Service <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/40 rounded-xl p-5 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-6 h-6 text-yellow-400" />
                <span className="text-yellow-300 font-bold text-lg">LIMITED TIME OFFER - OCTOBER 2025</span>
              </div>
              <p className="text-white text-base mb-2">
                🎁 <strong>50% OFF</strong> implementation + <strong>FREE 90-day trial</strong> of Enterprise Automation Suite
              </p>
              <p className="text-yellow-100 text-sm">
                First 20 enterprises only • Includes free ROI assessment & white-glove onboarding • Expires Oct 31, 2025
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link 
                to="/blog" 
                className="btn-primary flex items-center gap-2 text-lg px-8 py-4"
              >
                <Sparkles className="w-6 h-6" />
                Explore All New Content
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Insights Section */}
        {/* Promo ribbon for new content */}
        <div className="container mx-auto px-6">
          <div className="mb-6 rounded-full bg-emerald-500/15 border border-emerald-400/30 px-6 py-3 text-emerald-200 text-sm inline-flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            New: Edge inference patterns and North‑Star metrics just dropped — read now
            <Link to="/insights" className="text-emerald-300 underline underline-offset-4 hover:text-white">View</Link>
          </div>
        </div>
        <LatestInsights />
        <div className="container mx-auto px-6">
          <div className="rounded-xl bg-indigo-600/15 border border-indigo-400/30 px-6 py-4 text-indigo-200 text-sm flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-indigo-400 animate-ping"></span>
              <span className="font-medium">Fresh on the blog:</span>
              <span className="hidden sm:inline">Edge Inference Patterns • North‑Star Metrics</span>
            </div>
            <Link to="/blog" className="text-indigo-200 underline underline-offset-4 hover:text-white">Read now</Link>
          </div>
        </div>

        {/* New Services Showcase */}
        <section className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 text-red-400 text-sm font-medium mb-6 animate-pulse">
              🔥 HOT NEW SERVICES - 2025
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 animate-slide-up">
              Revolutionary AI-Powered Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Transform your business with our cutting-edge AI micro SAAS platform. 
              From workflow automation to predictive analytics - we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl border-2 border-green-500/30 bg-green-500/10">
              <div className="bg-green-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors border border-green-500/30 shadow-lg">
                <Zap className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                AI Workflow Automation
              </h3>
              <p className="text-zion-slate-light mb-4">
                Reduce manual tasks by 80% with intelligent process automation. 
                Starting at just $99/month.
              </p>
              <div className="bg-green-500/20 rounded-lg p-3 mb-4">
                <div className="text-green-400 font-bold text-lg">💰 Save $50,000+ annually</div>
                <div className="text-green-300 text-sm">Average ROI in 3 months</div>
              </div>
              <Link to="/services/ai-workflow-automation" className="btn-primary w-full text-center">
                Start Free Trial
              </Link>
            </div>

            <div className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl border-2 border-blue-500/30 bg-blue-500/10">
              <div className="bg-blue-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors border border-blue-500/30 shadow-lg">
                <Users className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                AI Virtual Assistant
              </h3>
              <p className="text-zion-slate-light mb-4">
                24/7 intelligent customer support and business operations. 
                Starting at just $79/month.
              </p>
              <div className="bg-blue-500/20 rounded-lg p-3 mb-4">
                <div className="text-blue-400 font-bold text-lg">📈 40% increase in conversions</div>
                <div className="text-blue-300 text-sm">90% faster response time</div>
              </div>
              <Link to="/services/ai-virtual-assistant" className="btn-primary w-full text-center">
                Get Started Now
              </Link>
            </div>

            <div className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl border-2 border-purple-500/30 bg-purple-500/10">
              <div className="bg-purple-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors border border-purple-500/30 shadow-lg">
                <Target className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                AI Data Analytics
              </h3>
              <p className="text-zion-slate-light mb-4">
                Transform data into actionable insights with machine learning. 
                Starting at just $149/month.
              </p>
              <div className="bg-purple-500/20 rounded-lg p-3 mb-4">
                <div className="text-purple-400 font-bold text-lg">🎯 60% better decisions</div>
                <div className="text-purple-300 text-sm">70% risk reduction</div>
              </div>
              <Link to="/services/ai-data-analytics" className="btn-primary w-full text-center">
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 animate-slide-up">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              We deliver exceptional technology solutions that drive business
              growth and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="bg-zion-blue/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zion-blue/30 transition-colors border border-zion-blue/30 shadow-lg">
                <Shield className="w-8 h-8 text-zion-blue-light group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Enterprise Security
              </h3>
              <p className="text-zion-slate-light mb-4">
                Advanced cybersecurity solutions protecting your business from
                evolving threats.
              </p>
              <ul className="space-y-2 text-sm text-zion-slate">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-zion-cyan" />
                  SOC 2 Compliance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-zion-cyan" />
                  Penetration Testing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-zion-cyan" />
                  24/7 Monitoring
                </li>
              </ul>
            </div>

            <div className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="bg-zion-purple/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zion-purple/30 transition-colors border border-zion-purple/30 shadow-lg">
                <Zap className="w-8 h-8 text-zion-purple-light group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                AI Innovation
              </h3>
              <p className="text-zion-slate-light mb-4">
                Cutting-edge artificial intelligence solutions that transform
                your operations.
              </p>
              <ul className="space-y-2 text-sm text-zion-slate">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-zion-cyan" />
                  Machine Learning
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-zion-cyan" />
                  Natural Language Processing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-zion-cyan" />
                  Computer Vision
                </li>
              </ul>
            </div>

            <div className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="bg-zion-cyan/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zion-cyan/30 transition-colors border border-zion-cyan/30 shadow-lg">
                <Users className="w-8 h-8 text-zion-cyan group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Expert Team
              </h3>
              <p className="text-zion-slate-light mb-4">
                World-class engineers and consultants dedicated to your success.
              </p>
              <ul className="space-y-2 text-sm text-zion-slate">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-zion-cyan" />
                  10+ Years Experience
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-zion-cyan" />
                  Certified Professionals
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-zion-cyan" />
                  Dedicated Support
                </li>
              </ul>
            </div>

            <div className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="bg-zion-blue-light/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zion-blue-light/30 transition-colors border border-zion-blue-light/30 shadow-lg">
                <Globe className="w-8 h-8 text-zion-blue-light group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Global Reach
              </h3>
              <p className="text-zion-slate-light mb-4">
                Serving clients worldwide with localized expertise and support.
              </p>
              <ul className="space-y-2 text-sm text-zion-slate">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-zion-cyan" />
                  50+ Countries
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-zion-cyan" />
                  Local Support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-zion-cyan" />
                  24/7 Availability
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Latest Insights */}
        <section className="container mx-auto px-6 py-16 relative z-10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-white">Latest Insights</h3>
            <Link to="/insights" className="text-zion-cyan hover:underline">View all</Link>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {latestInsights.slice(0, 4).map((item) => (
              <article key={item.id} className="card hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-zion-cyan mb-2">{item.category}</div>
                  <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-zion-slate-light mb-4">{item.summary}</p>
                  <div className="text-sm text-zion-slate flex items-center justify-between">
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                    <span>{item.readMinutes} min read</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-zion-slate-dark py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/10 to-zion-purple/10 opacity-50"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 animate-slide-up">
                What Our Clients Say
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto animate-fade-in">
                Don&apos;t just take our word for it. Here&apos;s what our
                clients have to say about working with us.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <p className="text-zion-slate-light mb-6 italic">
                  &ldquo;Zion Tech Group transformed our entire digital
                  infrastructure. Their AI solutions increased our efficiency by
                  300%.&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-white">Sarah Johnson</div>
                  <div className="text-sm text-zion-slate">CEO, TechCorp</div>
                </div>
              </div>

              <div className="card text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <p className="text-zion-slate-light mb-6 italic">
                  &ldquo;Outstanding team and exceptional results. They
                  delivered our mobile app ahead of schedule and under
                  budget.&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-white">Michael Chen</div>
                  <div className="text-sm text-zion-slate">
                    CTO, InnovateLab
                  </div>
                </div>
              </div>

              <div className="card text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <p className="text-zion-slate-light mb-6 italic">
                  &ldquo;The security solutions they implemented gave us
                  complete peace of mind. Highly recommended!&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-white">
                    Emily Rodriguez
                  </div>
                  <div className="text-sm text-zion-slate">
                    Security Director, FinanceFirst
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modern Features Section */}
        <ModernFeatures />

        {/* Enhanced Testimonials Section */}
        <EnhancedTestimonials />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue to-zion-purple relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6 animate-slide-up">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto animate-fade-in">
              Join thousands of companies that trust Zion Tech Group for their
              technology needs. Let&apos;s build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue hover:bg-zion-slate-light px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 group"
              >
                <Target className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Start Your Journey Today
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-zion-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </section>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;
