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
  TrendingUp,
  Users,
  Zap
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
// Fallback stub of BreakthroughContent2026Banner if missing
const BreakthroughContent2026Banner = () => null;
import October2025MegaLaunchBanner from "../components/October2025MegaLaunchBanner";
import ContentPromotionBanner from "../components/ContentPromotionBanner";
import ContentValueTestimonials from "../components/ContentValueTestimonials";
import EnhancedNewsletterSignup from "../components/EnhancedNewsletterSignup";
import EnhancedPromotionalBanner from "../components/EnhancedPromotionalBanner";
import EnhancedTestimonials from "../components/EnhancedTestimonials";
import ComprehensivePromoBanner from "../components/ComprehensivePromoBanner";
import NewArticlesPromoBanner from "../components/NewArticlesPromoBanner";
import NewServicesPromoBanner from "../components/NewServicesPromoBanner";
import September30NewContentMegaBanner from "../components/September30NewContentMegaBanner";
import Header from "../components/Header";
import Revolutionary2026ContentMegaBanner from "../components/Revolutionary2026ContentMegaBanner";
import September30MegaBanner2025 from "../components/September30MegaBanner2025";
import LatestArticlesShowcase from "../components/LatestArticlesShowcase";
import LatestContentBanner from "../components/LatestContentBanner";
import LatestInsights from "../components/LatestInsights";
import ModernFeatures from "../components/ModernFeatures";
import NewContentAnnouncement from "../components/NewContentAnnouncement";
import NewContentAdvertisingBanner from "../components/NewContentAdvertisingBanner";
import NewContentPromoBanner from "../components/NewContentPromoBanner";
import NewContentShowcase from "../components/NewContentShowcase";
import NewContentShowcase2025 from "../components/NewContentShowcase2025";
import NewServicesShowcase from "../components/NewServicesShowcase";
import SuccessStoriesShowcase from "../components/SuccessStoriesShowcase";
import TrendingContentBanner from "../components/TrendingContentBanner";
// duplicate imports removed below
import { enhancedPromotionalBanners, getActiveEnhancedBanners, getFeaturedBanners } from "../content/enhanced-promotional-banners";
import { latestInsights } from "../content/insights";
import { posts } from "../content/posts";
import { newArticles2025 } from "../content/new-articles-2025";
import { featuredBlogPosts, featuredServices } from "../content/content-config";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Zion Tech Group - Leading AI & IT Solutions | Transform Your Business
        </title>
        <meta
          name="description"
          content="Zion Tech Group delivers cutting-edge AI and IT solutions that transform businesses. NEW 2025: AI Workflow Automation, Quantum Computing, Edge AI, Zero Trust Security. Expert consulting services with proven results."
        />
        <meta
          name="keywords"
          content="AI solutions, IT consulting, cybersecurity, machine learning, cloud infrastructure, digital transformation, AI workflow automation, quantum computing, edge AI, zero trust security, micro SAAS platforms, AI virtual assistant, data analytics"
        />
        <meta
          property="og:title"
          content="Zion Tech Group - Leading AI & IT Solutions"
        />
        <meta
          property="og:description"
          content="Transform your business with cutting-edge AI and IT solutions. NEW 2025: AI Workflow Automation, Quantum Computing, Edge AI, Zero Trust Security. Expert consulting with proven results."
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
          content="Transform your business with cutting-edge AI and IT solutions. NEW 2025: AI Workflow Automation, Quantum Computing, Edge AI, Zero Trust Security."
        />
        <link rel="canonical" href="https://ziontechgroup.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "description": "Leading AI and IT solutions provider specializing in AI workflow automation, quantum computing, edge AI, and zero trust security.",
            "url": "https://ziontechgroup.com",
            "logo": "https://ziontechgroup.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-ZION-TECH",
              "contactType": "customer service",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://linkedin.com/company/zion-tech-group",
              "https://twitter.com/ziontechgroup"
            ],
            "foundingDate": "2020",
            "numberOfEmployees": "50-100",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            },
            "services": [
              "AI Workflow Automation",
              "AI Virtual Assistant",
              "AI Data Analytics",
              "Quantum Computing Consulting",
              "Edge AI Solutions",
              "Zero Trust Security",
              "Cybersecurity",
              "Cloud Infrastructure"
            ]
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark relative overflow-hidden">
        <Header />
        
        {/* 🚀 SEPTEMBER 30, 2025 - MEGA BREAKTHROUGH ANNOUNCEMENT */}
        <div className="container mx-auto px-6 pt-8">
          <September30MegaBanner2025 />
        </div>
        
        {/* Enhanced Promotional Banners */}
        {getFeaturedBanners().slice(0, 4).map((banner) => (
          <EnhancedPromotionalBanner
            key={banner.id}
            banner={banner}
          />
        ))}
        
        <NewContentAnnouncement />
        <LatestContentBanner 
          variant="info"
          autoRotate
          rotationInterval={7000}
        />
        <NewContentPromoBanner 
        />
        {/* Fresh content banner promoting brand-new articles */}
        <div className="container mx-auto px-6 mt-6">
          <NewContentAdvertisingBanner />
          {/* Inline promo for new service */}
          <div className="mt-4">
            <ContentPromotionBanner
              variant="info"
              title="🧪 New Service: Edge Experimentation Suite"
              description="Privacy‑first A/B testing at <100ms with scoped IDs and on‑device metrics."
              ctaText="Learn more"
              ctaLink="/services/edge-experimentation-suite"
              dismissible={true}
            />
          </div>
        </div>
        <div className="container mx-auto px-6 mt-6">
          <TrendingContentBanner />
          {/* Inline promotion for brand-new content */}
          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-white text-sm mb-4">New this week</div>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/blog/ai-enterprise-transformation-2027" className="block rounded-lg border border-white/10 p-4 hover:border-indigo-400/40 transition-colors">
                <div className="text-indigo-300 text-xs mb-2">Enterprise AI</div>
                <div className="text-white font-semibold">AI Enterprise Transformation 2027</div>
                <div className="text-zion-slate-light text-sm mt-1">Executive playbook to plan, fund, and scale AI with measurable ROI.</div>
              </Link>
              <Link to="/blog/agentic-workflow-orchestration-2026" className="block rounded-lg border border-white/10 p-4 hover:border-emerald-400/40 transition-colors">
                <div className="text-emerald-300 text-xs mb-2">AI Operations</div>
                <div className="text-white font-semibold">Agentic Workflow Orchestration 2026</div>
                <div className="text-zion-slate-light text-sm mt-1">Budgets, KPI‑linked canaries, and rollback for safe velocity.</div>
              </Link>
            </div>
            {/* Freshly added posts */}
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <Link to="/blog/ai-2026-reliability-runbooks-v4" className="block rounded-lg border border-white/10 p-4 hover:border-cyan-400/40 transition-colors">
                <div className="text-cyan-300 text-xs mb-2">AI Operations</div>
                <div className="text-white font-semibold">AI 2026: Reliability Runbooks v4</div>
                <div className="text-zion-slate-light text-sm mt-1">Budgeted actions, KPI canaries, and instant rollback—v4 playbooks.</div>
              </Link>
              <Link to="/blog/edge-2026-consentless-metrics-v2" className="block rounded-lg border border-white/10 p-4 hover:border-rose-400/40 transition-colors">
                <div className="text-rose-300 text-xs mb-2">Analytics</div>
                <div className="text-white font-semibold">Edge 2026: Consentless Metrics v2</div>
                <div className="text-zion-slate-light text-sm mt-1">Zero‑PII signals at &lt;100ms with scoped IDs, edge aggregation, DP.</div>
              </Link>
            </div>
          </div>
        </div>

        {/* Newly added content promo */}
        <div className="container mx-auto px-6 mt-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-white text-sm mb-4">Just added</div>
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/blog/real-time-decision-engines-2026" className="block rounded-lg border border-white/10 p-4 hover:border-blue-400/40 transition-colors">
                <div className="text-blue-300 text-xs mb-2">Platform Engineering</div>
                <div className="text-white font-semibold">Real‑Time Decision Engines 2026</div>
                <div className="text-zion-slate-light text-sm mt-1">10M/sec under 1ms using warm pools, intent prefetching, and caches.</div>
              </Link>
              <Link to="/blog/federated-learning-enterprise-2026" className="block rounded-lg border border-white/10 p-4 hover:border-rose-400/40 transition-colors">
                <div className="text-rose-300 text-xs mb-2">Machine Learning</div>
                <div className="text-white font-semibold">Federated Learning 2026</div>
                <div className="text-zion-slate-light text-sm mt-1">Train across regions with secure aggregation and DP noise—no centralization.</div>
              </Link>
              <Link to="/blog/cognitive-financial-modeling-2027" className="block rounded-lg border border-white/10 p-4 hover:border-emerald-400/40 transition-colors">
                <div className="text-emerald-300 text-xs mb-2">FinTech AI</div>
                <div className="text-white font-semibold">AI Financial Modeling 2027</div>
                <div className="text-zion-slate-light text-sm mt-1">95%+ accuracy with KPI‑linked scorecards, evals, and rollback.</div>
              </Link>
            </div>
          </div>
        </div>
        
        {/* OCTOBER 2025 MEGA LAUNCH - 7 Revolutionary Articles */}
        <div className="container mx-auto px-6 mt-6">
          <October2025MegaLaunchBanner />
        </div>
        
        {/* SEPTEMBER 30, 2025 - 5 Revolutionary AI Breakthroughs */}
        <div className="container mx-auto px-6 mt-6 mb-6">
          <September30NewContentMegaBanner />
        </div>
        
        {/* BREAKTHROUGH CONTENT 2026 - September 30, 2025 */}
        <div className="container mx-auto px-6 mt-6">
          <Revolutionary2026ContentMegaBanner />
        </div>
        
        {/* New Comprehensive Promotional Banner */}
        <div className="container mx-auto px-6 mt-6">
          <ComprehensivePromoBanner variant="hero" showCount={4} />
        </div>
        
        {/* New Articles Promotional Banner */}
        <div className="container mx-auto px-6 mt-6">
          <NewArticlesPromoBanner variant="premium" showCount={3} />
        </div>
        
        {/* New Services Promotional Banner */}
        <div className="container mx-auto px-6 mt-6">
          <NewServicesPromoBanner variant="showcase" showCount={3} featuredOnly={true} />
        </div>
        
        {/* Content Promotion Banner */}
        <ContentPromotionBanner
          variant="info"
          title="🚀 Fresh: Incident Playbooks + Privacy‑Preserving Analytics"
          description="Budgeted actions, approvals, and DP‑backed telemetry you can ship today."
          ctaText="Read the latest"
          ctaLink="/blog/ai-incident-response-playbooks-2025"
          dismissible={true}
        />
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
              🚀 <strong>BREAKING: SEPT 30, 2025 - 8 GAME-CHANGING AI BREAKTHROUGHS!</strong> Real-Time Decision Engines (10M decisions/sec, &lt;1ms), 
              Neural Code Synthesis (95% accuracy, 90% dev time cut), Multimodal AI Fusion (98% cross-modal accuracy), AI Supply Chains (99.5% forecasts, 85% inventory cut), 
              Cognitive Assistants (92% satisfaction), Security Mesh (99.99% threat detection), Federated Learning (100% privacy), & AI Financial Modeling (95% prediction accuracy). 
              Transform your business with production-ready AI. Join 500+ companies achieving 10,000x performance gains!
            </p>

            {/* Special Promotion Banner */}
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-xl p-6 mb-8 animate-fade-in">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-green-400 animate-pulse" />
                <span className="text-lg font-bold text-green-400">🔥 BREAKTHROUGH: AI AUTONOMOUS INFRASTRUCTURE</span>
                <Sparkles className="w-6 h-6 text-green-400 animate-pulse" />
              </div>
            <p className="text-white text-lg font-semibold mb-2">
                🤖 Revolutionary AI Infrastructure that self-heals, self-optimizes, and self-scales automatically — plus new playbooks for safe automation.
              </p>
              <p className="text-zion-slate-light text-sm mb-4">
                Get 50% OFF Your First 3 Months + FREE AI Strategy Consultation • Valid until March 31, 2025
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/services/ai-autonomous-infrastructure-platform"
                  className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors text-center"
                >
                  Explore AI Autonomous Infrastructure
                </Link>
                <Link
                  to="/contact"
                  className="border border-green-400 text-green-400 px-6 py-2 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-colors text-center"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>

            {/* New Content Announcement */}
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-xl p-6 mb-8 animate-fade-in">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
                <span className="text-lg font-bold text-purple-400">🔥 SEPT 30, 2025: 8 REVOLUTIONARY BREAKTHROUGHS JUST PUBLISHED!</span>
                <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
              </div>
              <p className="text-white text-lg font-semibold mb-2">
                🚀 Production-Ready AI Revolution: Real-Time Engines (10M/sec, &lt;1ms), Neural Code Synthesis (95% accuracy), 
                Multimodal Fusion (98% accuracy), AI Supply Chains (99.5% forecasts), Cognitive Assistants (92% satisfaction), 
                Security Mesh (99.99% detection), Federated Learning (100% privacy), & Financial AI (95% predictions)!
              </p>
              <p className="text-zion-slate-light text-sm mb-4">
                These aren't theoretical concepts—deploy enterprise-grade AI in 4-10 weeks with 10,000x performance gains, 
                95%+ accuracy, and 300-500% ROI. Transform real-time decisions, development velocity, customer experience, 
                supply chains, security posture, data privacy, and financial modeling!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/blog"
                  className="bg-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-600 transition-colors text-center"
                >
                  Explore 8 Breakthroughs
                </Link>
                <Link
                  to="/contact"
                  className="border border-purple-400 text-purple-400 px-6 py-2 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-colors text-center"
                >
                  Schedule AI Strategy Call
                </Link>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <span className="bg-yellow-100/20 text-yellow-200 px-3 py-1 rounded-full text-xs font-medium border border-yellow-300/20">⚡ Real-Time AI</span>
                <span className="bg-blue-100/20 text-blue-200 px-3 py-1 rounded-full text-xs font-medium border border-blue-300/20">💻 Neural Code</span>
                <span className="bg-purple-100/20 text-purple-200 px-3 py-1 rounded-full text-xs font-medium border border-purple-300/20">🎭 Multimodal</span>
                <span className="bg-green-100/20 text-green-200 px-3 py-1 rounded-full text-xs font-medium border border-green-300/20">📦 Supply Chain</span>
                <span className="bg-indigo-100/20 text-indigo-200 px-3 py-1 rounded-full text-xs font-medium border border-indigo-300/20">🤖 Cognitive AI</span>
                <span className="bg-red-100/20 text-red-200 px-3 py-1 rounded-full text-xs font-medium border border-red-300/20">🛡️ Security Mesh</span>
                <span className="bg-slate-100/20 text-slate-200 px-3 py-1 rounded-full text-xs font-medium border border-slate-300/20">🔒 Federated</span>
                <span className="bg-emerald-100/20 text-emerald-200 px-3 py-1 rounded-full text-xs font-medium border border-emerald-300/20">💰 FinTech AI</span>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Insights Section */}
        {/* Promo ribbon for new content */}
        <div className="container mx-auto px-6">
          <div className="mb-6 rounded-full bg-gradient-to-r from-emerald-500/15 via-cyan-500/15 to-purple-500/15 border border-emerald-400/30 px-6 py-3 text-white text-sm inline-flex items-center gap-2 animate-pulse">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-bounce"></span>
            🚀 SEPT 30, 2025: 8 BREAKTHROUGH ARTICLES — Real-Time AI (10M/sec), Neural Code (95%), Multimodal (98%), Supply Chain (99.5%), Cognitive AI (92%), Security Mesh (99.99%), Federated Learning (100% privacy), Financial AI (95%)!
            <Link to="/blog" className="text-cyan-300 underline underline-offset-4 hover:text-white font-bold">Explore All 8 Breakthroughs →</Link>
          </div>
        </div>
        {/* <LatestInsights /> */}

        {/* New Content Showcase */}
        <NewContentShowcase />

        {/* New Content Showcase 2025 */}
        <NewContentShowcase2025 />

        {/* New Services Showcase */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4 mr-2" />
                New Services Available
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Latest AI & Security Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our newest services designed to accelerate your digital transformation 
                and protect your business from evolving threats.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <Zap className="w-12 h-12 text-blue-300" />
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">NEW</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">AI Automation Platform</h3>
                <p className="text-blue-100 mb-6">
                  Transform your business processes with intelligent automation. 
                  Reduce costs by 75% and increase efficiency by 10x.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-blue-100">
                    <CheckCircle className="w-5 h-5 mr-3 text-blue-300" />
                    <span className="text-sm">Process Mining & Discovery</span>
                  </div>
                  <div className="flex items-center text-blue-100">
                    <CheckCircle className="w-5 h-5 mr-3 text-blue-300" />
                    <span className="text-sm">Smart Automation Bots</span>
                  </div>
                  <div className="flex items-center text-blue-100">
                    <CheckCircle className="w-5 h-5 mr-3 text-blue-300" />
                    <span className="text-sm">Low-Code Workflow Builder</span>
                  </div>
                </div>
                <Link 
                  to="/services/ai-automation-platform" 
                  className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-white hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <Shield className="w-12 h-12 text-blue-400" />
                  <span className="bg-red-500/20 px-3 py-1 rounded-full text-sm font-medium border border-red-500/30">SECURE</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">AI Cybersecurity Suite</h3>
                <p className="text-gray-300 mb-6">
                  Advanced AI-powered security that detects and prevents threats 
                  with 99.9% accuracy and sub-minute response times.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span className="text-sm">Real-time Threat Detection</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span className="text-sm">Automated Incident Response</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span className="text-sm">Zero-Trust Architecture</span>
                  </div>
                </div>
                <Link 
                  to="/services/ai-cybersecurity-suite" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors"
                >
                  Explore Security
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Insights Section */}
        {/* <LatestInsights /> */}

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
            <div className="grid md:grid-cols-3 gap-6">
              {latestInsights.slice(0, 3).map((item) => (
              <article key={item.id} className="card hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs uppercase tracking-wider text-zion-cyan">{item.category}</div>
                    {"featured" in item && (item as any).featured && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-medium">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-zion-slate-light mb-4">{item.summary}</p>
                  <div className="flex items-center justify-between text-sm text-zion-slate">
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                    <span>{item.readMinutes} min read</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* New Content Announcement */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6 border border-white/30">
                <Sparkles className="w-4 h-4 mr-2" />
                Fresh: E2E AI Tracing, Edge Personalization, CI Policy Tests
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Latest Articles & Insights
              </h2>
              <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
                Stay ahead of the curve with our latest articles on AI automation, 
                cybersecurity, and emerging technologies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestInsights.slice(0, 3).map((insight) => (
                <div key={insight.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-wider text-indigo-300">{insight.category}</span>
                    {insight.featured && (
                      <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-medium">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{insight.title}</h3>
                  <p className="text-indigo-100 mb-4 text-sm">{insight.summary}</p>
                  <div className="flex items-center justify-between text-sm text-indigo-200">
                    <span>{new Date(insight.date).toLocaleDateString()}</span>
                    <span>{insight.readMinutes} min read</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                to="/blog" 
                className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 transition-all duration-300 hover:scale-105"
              >
                Read All Articles
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
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

        {/* Content Value Testimonials */}
        {/* <ContentValueTestimonials /> */}

        {/* Testimonials and Newsletter sections temporarily removed due to missing components */}

        {/* Latest Articles */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            {/* New Content Announcement */}
            <div className="bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 border border-purple-400/30 rounded-xl p-6 mb-10 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-5 h-5 text-purple-500 animate-pulse" />
                <span className="text-lg font-bold text-purple-700">🔥 SEPTEMBER 30, 2025: 8 REVOLUTIONARY BREAKTHROUGHS!</span>
                <Sparkles className="w-5 h-5 text-purple-500 animate-pulse" />
              </div>
            <p className="text-gray-700 font-semibold mb-2">
                ⚡ Real-Time AI (10M decisions/sec, &lt;1ms) | 💻 Neural Code Synthesis (95% accuracy, 90% time cut) | 
                🎭 Multimodal Fusion (98% accuracy) | 📦 AI Supply Chains (99.5% forecasts, 85% inventory cut) | 
                🤖 Cognitive Assistants (92% satisfaction) | 🛡️ Security Mesh (99.99% detection) | 🔒 Federated Learning (100% privacy) | 💰 Financial AI (95% accuracy)
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Deploy production-ready AI in 4-10 weeks achieving 10,000x performance gains, 95%+ accuracy, and 300-500% ROI. 
                Transform real-time decisions, development velocity, customer experience, supply chains, security, data privacy, and financial modeling 
                with breakthrough AI systems ready for enterprise deployment today!
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">⚡ Real-Time AI</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">💻 Neural Code</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">🎭 Multimodal</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">📦 Supply Chain</span>
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">🤖 Cognitive AI</span>
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-medium">🛡️ Security Mesh</span>
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium">🔒 Federated</span>
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">💰 FinTech AI</span>
              </div>
            </div>
            
            <div className="mb-10 flex items-end justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Articles</h2>
                <p className="text-gray-600">New: Platform ROI, Secure ML Supply Chain, and Enterprise RAG v2.</p>
              </div>
              <Link to="/blog" className="text-indigo-700 font-semibold hover:text-indigo-800">View all →</Link>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[...posts]
                .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
                .slice(0, 3)
                .map((post) => (
                <article key={post.slug} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="text-sm text-indigo-600 font-medium mb-2">{post.category}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.description}</p>
                    <Link to={`/blog/${post.slug}`} className="text-indigo-700 font-medium hover:text-indigo-800">Read more →</Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Just published promo – auto-highlights the three freshest posts */}
            <div className="mt-10 rounded-xl border border-indigo-200 bg-indigo-50 p-6">
              <div className="text-indigo-700 text-sm font-semibold mb-4">Just published</div>
              <div className="grid md:grid-cols-3 gap-4">
                {[...posts]
                  .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
                  .slice(0, 3)
                  .map((p) => (
                    <Link key={p.slug} to={`/blog/${p.slug}`} className="block rounded-lg border border-indigo-200 bg-white p-4 hover:border-indigo-400 transition-colors">
                      <div className="text-xs text-indigo-600 mb-1">{p.category}</div>
                      <div className="font-semibold text-gray-900">{p.title}</div>
                      <div className="text-gray-600 text-sm mt-1 line-clamp-2">{p.description}</div>
                    </Link>
                ))}
              </div>
            </div>
            
            {/* Blog CTA */}
            <div className="mt-12 text-center">
              <Link
                to="/blog"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              >
                <ArrowRight className="w-5 h-5" />
                Explore All Articles
              </Link>
            </div>
          </div>
        </section>

        {/* Case Studies Preview */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See how companies like yours are transforming their operations with our AI solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">RetailMax Corporation</h3>
                    <p className="text-sm text-gray-600">E-commerce</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">Reduced order processing time from 24 hours to 2 minutes with AI workflow automation.</p>
                <div className="text-2xl font-bold text-green-600">99% Time Reduction</div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">First National Bank</h3>
                    <p className="text-sm text-gray-600">Banking</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">Reduced customer wait times from 45 minutes to 2 minutes with AI virtual assistant.</p>
                <div className="text-2xl font-bold text-blue-600">95% Faster Response</div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Precision Manufacturing</h3>
                    <p className="text-sm text-gray-600">Manufacturing</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">Reduced production waste by 70% with AI data analytics and predictive maintenance.</p>
                <div className="text-2xl font-bold text-purple-600">70% Waste Reduction</div>
              </div>
            </div>
            
            <div className="text-center">
              <Link
                to="/case-studies"
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              >
                <Award className="w-5 h-5" />
                View All Success Stories
              </Link>
            </div>
          </div>
        </section>
        {/* New Content Promo */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold mb-2">Latest from Zion Insights</h2>
              <p className="text-white/90">New: KPI‑Linked Policy Tests, Serverless Inference Cost Playbook, Privacy‑First Telemetry.</p>
                </div>
                <Link to="/blog" className="bg-white text-indigo-700 hover:bg-indigo-50 px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 self-start md:self-auto">
                  Read the latest
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Inline featured list (auto-curated highlights) */}
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div className="bg-white/10 rounded-xl p-5">
                  <div className="text-sm text-purple-200 mb-1">Observability</div>
                  <div className="font-semibold text-white">E2E AI Tracing</div>
                </div>
                <div className="bg-white/10 rounded-xl p-5">
                  <div className="text-sm text-rose-200 mb-1">Edge Computing</div>
                  <div className="font-semibold text-white">Edge Personalization</div>
                </div>
                <div className="bg-white/10 rounded-xl p-5">
                  <div className="text-sm text-blue-200 mb-1">AI Governance</div>
                  <div className="font-semibold text-white">Policy Tests Quickstart</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Services Promotional Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/20 to-teal-100/20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <NewServicesPromoBanner variant="premium" showCount={3} featuredOnly={true} />
          </div>
        </section>

        {/* New Services Showcase */}
        <NewServicesShowcase />

        {/* Latest Articles Promotional Section */}
        <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-indigo-100/20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <NewArticlesPromoBanner variant="featured" showCount={4} autoRotate={true} />
          </div>
        </section>

        {/* Latest Articles Showcase */}
        <LatestArticlesShowcase />

        {/* Success Stories Showcase */}
        <SuccessStoriesShowcase />

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
