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
import October2025SupplyChainRevolutionBanner from "../components/October2025SupplyChainRevolutionBanner";
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

        {/* 🔥🔥🔥 BRAND NEW: October 1, 2025 - REAL-TIME PREDICTIVE ANALYTICS - JUST RELEASED! 🔥🔥🔥 */}
        <section className="container mx-auto px-6 py-12 relative z-10">
          <div className="bg-gradient-to-br from-red-900/60 via-orange-900/50 to-yellow-900/60 rounded-3xl border-2 border-red-400/70 p-8 md:p-10 shadow-2xl hover:shadow-red-500/30 transition-all duration-500 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-flex h-4 w-4 rounded-full bg-red-400 animate-ping shadow-lg"></span>
              <span className="text-red-300 font-extrabold text-2xl uppercase tracking-wider">🚨 JUST RELEASED - October 1, 2025</span>
              <span className="inline-flex h-4 w-4 rounded-full bg-red-400 animate-ping shadow-lg"></span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center leading-tight">
              ⚡ Real-Time Predictive Analytics Revolution: <span className="bg-gradient-to-r from-yellow-300 to-red-300 bg-clip-text text-transparent">Sub-100ms Insights, $50M+ Value Creation</span>
            </h2>
            
            <p className="text-xl text-red-100 mb-6 text-center max-w-4xl mx-auto leading-relaxed">
              Stop analyzing yesterday's data. Act on this-second insights with our breakthrough platform delivering 92% accuracy, 10x faster insights, and 8,300% average ROI. Transform data into decisions in milliseconds.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-br from-red-800/50 to-orange-800/50 backdrop-blur rounded-xl p-5 border border-red-400/40 hover:border-red-300/70 transition-all hover:scale-105">
                <div className="text-red-300 text-sm font-bold mb-2 uppercase flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Technical Breakthrough
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Sub-100ms Predictions at Scale</h3>
                <p className="text-red-100 text-sm mb-3">
                  Edge-first architecture achieving 92% accuracy with continuous model adaptation. 10x faster than traditional analytics.
                </p>
                <Link 
                  to="/blog/ai-2025-oct-01-real-time-predictive-analytics-breakthrough" 
                  className="inline-flex items-center text-yellow-300 hover:text-white font-bold text-sm group"
                >
                  Read Full Article (14 min)
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-gradient-to-br from-green-800/50 to-emerald-800/50 backdrop-blur rounded-xl p-5 border border-green-400/40 hover:border-green-300/70 transition-all hover:scale-105">
                <div className="text-green-300 text-sm font-bold mb-2 uppercase flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  $214M Proven Success
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Fintech Fraud Prevention</h3>
                <p className="text-green-100 text-sm mb-3">
                  Fortune 500 fintech: 98.7% fraud detection, 0.3% false positives, 47ms decisions, $214M saved in first year. 1,780% ROI.
                </p>
                <Link 
                  to="/case-studies/ai-2025-oct-01-fintech-real-time-fraud-prevention-214m-success" 
                  className="inline-flex items-center text-green-300 hover:text-white font-bold text-sm group"
                >
                  Read Case Study
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-gradient-to-br from-cyan-800/50 to-blue-800/50 backdrop-blur rounded-xl p-5 border border-cyan-400/40 hover:border-cyan-300/70 transition-all hover:scale-105">
                <div className="text-cyan-300 text-sm font-bold mb-2 uppercase flex items-center gap-2">
                  <Rocket className="w-4 h-4" />
                  Platform Service Launch
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Deploy in 12 Weeks</h3>
                <p className="text-cyan-100 text-sm mb-3">
                  Three service tiers from $15K/month. Includes implementation, training, 24/7 support. 100% of clients achieve ROI within 6 months.
                </p>
                <Link 
                  to="/services/ai-2025-october-real-time-predictive-analytics-platform" 
                  className="inline-flex items-center text-cyan-300 hover:text-white font-bold text-sm group"
                >
                  Explore Service Tiers
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-800/40 to-red-800/40 rounded-xl p-5 border border-yellow-400/40 mb-6">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-400" />
                Real-World Impact Across Industries
              </h3>
              <div className="grid md:grid-cols-2 gap-3 text-yellow-100 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div><span className="font-bold text-white">E-Commerce:</span> 43% conversion increase, $87M revenue lift</div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div><span className="font-bold text-white">Fraud Detection:</span> 98.7% accuracy, $214M fraud prevented</div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div><span className="font-bold text-white">Manufacturing:</span> 89% downtime reduction, $42M savings</div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div><span className="font-bold text-white">Dynamic Pricing:</span> $67M revenue increase, 12% margin boost</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link 
                to="/services/ai-2025-october-real-time-predictive-analytics-platform" 
                className="btn-primary flex items-center gap-2 text-lg px-8 py-4 shadow-xl hover:shadow-2xl"
              >
                <Zap className="w-6 h-6" />
                Start Free Assessment
                <ArrowRight className="w-6 h-6" />
              </Link>
              <Link 
                to="/contact" 
                className="btn-secondary text-lg px-8 py-4"
              >
                Schedule Demo
              </Link>
            </div>

            <div className="mt-6 text-center">
              <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-yellow-500/20 border border-yellow-400/50 rounded-full px-6 py-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                  <span className="text-yellow-200 font-bold">OCTOBER LAUNCH SPECIAL:</span>
                </div>
                <span className="text-white font-semibold">Free $50K Proof-of-Concept + 25% Off First Year (10 spots left!)</span>
              </div>
            </div>
          </div>
        </section>

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

            {/* NEW CONTENT ANNOUNCEMENT */}
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-xl p-6 mb-6 animate-fade-in">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Rocket className="w-6 h-6 text-purple-400 animate-bounce" />
                <span className="text-lg font-bold text-purple-400">🔥 JUST RELEASED - OCTOBER 1, 2025</span>
                <Rocket className="w-6 h-6 text-purple-400 animate-bounce" />
              </div>
              <p className="text-white text-xl font-bold mb-3">
                NEW: Edge AI Production Guide + North Star Metrics Framework + $127M Case Study
              </p>
              <div className="grid md:grid-cols-4 gap-3 text-sm text-zion-slate-light mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Sub-10ms Edge Inference Patterns</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Proven AI Product Success Metrics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>$127M Manufacturing ROI Story</span>
                </div>
              </div>
              <Link
                to="/blog/ai-2025-oct-01-enterprise-ai-transformation-roadmap"
                className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore New Content
                <ArrowRight className="w-4 h-4" />
              </Link>
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

        {/* 🚀🚀🚀 BREAKTHROUGH: OCTOBER 1, 2025 - AGENT SWARM REVOLUTION - #1 PRIORITY! 🚀🚀🚀 */}
        {/* 💎💎💎 JUST PUBLISHED: 100,000+ Agents, $890M Healthcare Success, 95% Cost Reduction! 💎💎💎 */}
        <section className="container mx-auto px-6 py-16 relative z-10">
          <div className="bg-gradient-to-br from-purple-900/50 via-blue-900/40 to-cyan-900/50 rounded-3xl border-2 border-purple-400/60 p-8 md:p-12 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-4 w-4 rounded-full bg-purple-400 animate-pulse shadow-lg shadow-purple-400/50"></span>
              <span className="text-purple-300 font-bold text-xl uppercase tracking-wider animate-pulse">🚨 BREAKTHROUGH ANNOUNCEMENT - October 1, 2025</span>
              <span className="inline-flex h-4 w-4 rounded-full bg-purple-400 animate-pulse shadow-lg shadow-purple-400/50"></span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              🤖 Revolutionary Agent Swarm Platform: <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">100,000+ AI Agents Working in Perfect Harmony</span>
            </h2>
            
            <p className="text-2xl text-purple-100 mb-8 max-w-4xl leading-relaxed">
              We've just launched the most advanced multi-agent AI system in history. Deploy coordinated swarms of 100,000+ specialized agents achieving 99.999% reliability, sub-second response times, and 95% cost reduction.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-purple-900/40 backdrop-blur-sm rounded-xl p-6 border border-purple-400/40 hover:border-purple-300/70 transition-all hover:scale-105">
                <div className="text-purple-300 text-sm font-semibold mb-3 uppercase flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Revolutionary Platform
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">100,000+ Agents Coordinated</h3>
                <p className="text-purple-100 text-base mb-4">
                  Deploy massive swarms of specialized AI agents working autonomously. Sub-second latency, 99.999% uptime, and 95% cost reduction vs traditional systems.
                </p>
                <Link 
                  to="/blog/ai-2025-oct-01-revolutionary-agent-swarm-orchestration" 
                  className="inline-flex items-center text-purple-300 hover:text-white font-bold text-base group"
                >
                  Read Technical Deep-Dive (18 min) 
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-green-900/40 backdrop-blur-sm rounded-xl p-6 border border-green-400/40 hover:border-green-300/70 transition-all hover:scale-105">
                <div className="text-green-300 text-sm font-semibold mb-3 uppercase flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  $890M Success Story
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Global Healthcare Transformation</h3>
                <p className="text-green-100 text-base mb-4">
                  See how a 150M-patient healthcare network deployed 75,000 agents achieving 98.7% diagnostic accuracy, 89% faster diagnoses, and $890M annual value creation.
                </p>
                <Link 
                  to="/case-studies/ai-2025-oct-01-global-healthcare-agent-swarm-890m-success" 
                  className="inline-flex items-center text-green-300 hover:text-white font-bold text-base group"
                >
                  Read Full Case Study 
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-cyan-900/40 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/40 hover:border-cyan-300/70 transition-all hover:scale-105">
                <div className="text-cyan-300 text-sm font-semibold mb-3 uppercase flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Enterprise Service Launch
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Agent Swarm Platform Services</h3>
                <p className="text-cyan-100 text-base mb-4">
                  Production-ready platform starting at $240K. Deploy in 90 days with 2,344% ROI. Includes 200+ pre-built agents, 24/7 support, and guaranteed results.
                </p>
                <Link 
                  to="/services/ai-2025-october-agent-swarm-platform-services" 
                  className="inline-flex items-center text-cyan-300 hover:text-white font-bold text-base group"
                >
                  Explore Service Tiers 
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-800/30 to-cyan-800/30 rounded-xl p-6 border border-purple-400/30 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Star className="w-8 h-8 text-yellow-400" />
                Why This Changes Everything
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-purple-100">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-white">100,000+ Agent Coordination:</span> First platform to orchestrate massive agent swarms at enterprise scale
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-white">Sub-Second Response:</span> Agent-to-agent communication and task execution in under 1 second
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-white">95% Cost Reduction:</span> Slash infrastructure and operational costs by 95% vs traditional systems
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-white">Proven Results:</span> $890M value creation in healthcare, 50+ enterprise deployments
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link 
                to="/services/ai-2025-october-agent-swarm-platform-services" 
                className="btn-primary flex items-center gap-3 text-lg px-8 py-4 shadow-xl hover:shadow-2xl"
              >
                <Rocket className="w-6 h-6" />
                Start Your Agent Swarm
                <ArrowRight className="w-6 h-6" />
              </Link>
              <Link 
                to="/contact" 
                className="btn-secondary text-lg px-8 py-4"
              >
                Schedule Strategy Session
              </Link>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 bg-yellow-500/20 border border-yellow-400/40 rounded-full px-6 py-3">
                <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                <span className="text-yellow-200 font-bold">LIMITED OFFER:</span>
                <span className="text-white">First 10 enterprises get FREE $250K proof-of-concept + 25% off implementation</span>
              </div>
            </div>
          </div>
        </section>

        {/* 🚀🚀🚀 ABSOLUTE NEWEST: OCTOBER 1, 2025 - SUPPLY CHAIN REVOLUTION - #1 TOP PRIORITY! 🚀🚀🚀 */}
        {/* 💎💎💎 JUST PUBLISHED TODAY: $4.2B Value Creation, 2,847% ROI, 98.7% On-Time Delivery, Autonomous Intelligence! 💎💎💎 */}
        <section className="container mx-auto px-6 relative z-10">
          <October2025SupplyChainRevolutionBanner />
        </section>

        {/* NEW CONTENT HIGHLIGHT SECTION */}
        <section className="container mx-auto px-6 py-16 relative z-10">
          <div className="bg-gradient-to-br from-emerald-900/40 via-teal-900/30 to-cyan-900/40 rounded-2xl border-2 border-emerald-400/50 p-8 md:p-12 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-3 w-3 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-emerald-400 font-bold text-lg uppercase tracking-wider">🔥 Just Published - October 1, 2025</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Production-Ready AI Resources: Edge Inference, Metrics & Real ROI
            </h2>
            
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl">
              Learn from real-world deployments: Edge AI patterns achieving sub-10ms latency, North Star metrics that predict success, and a $127M manufacturing transformation.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Blog Post 1 - Hybrid Cloud */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 hover:border-blue-400/60 transition-all hover:scale-105 hover:shadow-xl">
                <div className="text-blue-400 text-sm font-semibold mb-2 uppercase">🚀 Service Launch</div>
                <h3 className="text-lg font-bold text-white mb-3">Edge AI Platform</h3>
                <p className="text-blue-100 text-sm mb-4">Deploy intelligence at the edge with less than 10ms latency. Starting at $4,999/mo</p>
                <Link 
                  to="/blog/ai-2025-oct-hybrid-cloud-transformation-enterprise" 
                  className="inline-flex items-center text-blue-300 hover:text-white font-semibold text-sm"
                >
                  Read Guide (15 min) <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              {/* Blog Post 2 - Legal AI */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:border-purple-400/60 transition-all hover:scale-105 hover:shadow-xl">
                <div className="text-purple-400 text-sm font-semibold mb-2 uppercase">⚖️ Legal Tech</div>
                <h3 className="text-lg font-bold text-white mb-3">GenAI Legal Revolution</h3>
                <p className="text-purple-100 text-sm mb-4">
                  90% faster contracts, $12M annual savings, 24/7 compliance. How Fortune 500 legal teams operate now.
                </p>
                <Link 
                  to="/blog/ai-2025-oct-generative-ai-legal-compliance-revolution" 
                  className="inline-flex items-center text-purple-300 hover:text-white font-semibold text-sm"
                >
                  Learn More (18 min) <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              {/* Case Study - Retail AI */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-green-400/30 hover:border-green-400/60 transition-all hover:scale-105 hover:shadow-xl">
                <div className="text-green-400 text-sm font-semibold mb-2 uppercase">💰 $214M Success</div>
                <h3 className="text-lg font-bold text-white mb-3">Retail AI Personalization</h3>
                <p className="text-green-100 text-sm mb-4">
                  Fortune 100 retailer: 47% conversion lift, 62% engagement boost in 9 months. Full implementation story.
                </p>
                <Link 
                  to="/case-studies/ai-2025-oct-retail-ai-personalization-success-story" 
                  className="inline-flex items-center text-green-300 hover:text-white font-semibold text-sm"
                >
                  Read Case Study <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link 
                to="/blog" 
                className="btn-primary flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Explore All Content
                <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="text-emerald-200 text-sm flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span><span className="font-bold">Limited Time:</span> Free AI strategy consultation with any service</span>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Insights Section */}
        {/* Promo ribbon for new content */}
        <div className="container mx-auto px-6">
          <div className="mb-6 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-400/40 px-6 py-3 text-emerald-200 text-sm inline-flex items-center gap-2 animate-fade-in">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            NEW TODAY: Production Edge AI Guide (12 min) + North‑Star Metrics Framework (10 min) + $127M Case Study
            <Link to="/blog/ai-2025-oct-edge-inference-patterns-production-guide" className="text-emerald-300 underline underline-offset-4 hover:text-white">Read</Link>
          </div>
        </div>
        <LatestInsights />
        <div className="container mx-auto px-6">
          <div className="rounded-xl bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-400/40 px-6 py-4 text-indigo-200 text-sm flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-2 w-2 rounded-full bg-indigo-400 animate-ping"></span>
              <span className="font-medium">Fresh on the blog:</span>
              <span className="hidden sm:inline">Edge AI Production Guide • North‑Star Metrics • $127M Manufacturing Case Study</span>
            </div>
            <Link to="/blog" className="text-indigo-300 hover:text-white font-semibold underline underline-offset-4 transition-colors">
              Explore Now →
            </Link>
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
