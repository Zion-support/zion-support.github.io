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
  Zap,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ContentPromotionBanner from "../components/ContentPromotionBanner";
import ComprehensivePromoBanner from "../components/ComprehensivePromoBanner";
import NewArticlesPromoBanner from "../components/NewArticlesPromoBanner";
import NewServicesPromoBanner from "../components/NewServicesPromoBanner";
import EnhancedPromotionalBanner from "../components/EnhancedPromotionalBanner";
import Header from "../components/Header";
import LatestArticlesShowcase from "../components/LatestArticlesShowcase";
import LatestContentBanner from "../components/LatestContentBanner";
import LatestInsights from "../components/LatestInsights";
import ModernFeatures from "../components/ModernFeatures";
import NewContentAnnouncement from "../components/NewContentAnnouncement";
import NewContentPromoBanner from "../components/NewContentPromoBanner";
import NewServicesShowcase from "../components/NewServicesShowcase";
import SuccessStoriesShowcase from "../components/SuccessStoriesShowcase";
import TrendingContentBanner from "../components/TrendingContentBanner";
import { getFeaturedBanners } from "../content/enhanced-promotional-banners";
import { latestInsights } from "../content/insights";
import { blogPosts } from "../content/blog-posts";

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
      {/* <AdvertisingBanner /> */}
      {/* Promo: New Enterprise AI Governance Blueprint */}
      <NewContentPromoBanner 
        className="border-b border-white/10" 
        variant="premium" 
        title="🛡️ NEW: Enterprise AI Governance 2025 — Scorecards & Guardrails"
        description="Ship AI safely with policy tests in CI, KPI-linked scorecards, budget-aware routing, and instant rollback."
        ctaText="Read Governance Blueprint"
        ctaLink="/blog/ai-2025-oct-01-enterprise-ai-governance-blueprint"
        featuredItems={[
          { title: "Enterprise AI Governance — Zero‑Regret Rollouts", category: "AI Governance", link: "/blog/ai-2025-oct-01-enterprise-ai-governance-blueprint" },
          { title: "Agent Copilots — Guardrails That Scale", category: "AI Agents", link: "/blog/ai-2025-oct-01-enterprise-agent-copilots" },
          { title: "Cache Playbook PRO — 60–85% Cost ↓", category: "GenAI Engineering", link: "/blog/ai-2025-oct-02-cache-playbook-pro" }
        ]}
      />
      <NewContentPromoBanner 
        className="border-b border-white/10" 
        variant="premium" 
        title="🚀 NEW TODAY: Enterprise Agent Copilots — 10x Velocity, Safe by Design"
        description="Ship AI copilots with budgets, policy gates, and instant rollback. 10x speed, 40–70% cost cuts, 99.9% uptime."
        ctaText="Read the Guide"
        ctaLink="/blog/ai-2025-oct-01-enterprise-agent-copilots"
        featuredItems={[
          { title: "Enterprise Agent Copilots — Guardrails That Scale", category: "AI Agents", link: "/blog/ai-2025-oct-01-enterprise-agent-copilots" },
          { title: "Runtime Scorecards v2 — SLIs → KPIs With Budgets", category: "Ops", link: "/blog/ai-governance-runtime-scorecards-v2-2026" },
          { title: "Edge A/B <100ms — Consentless Metrics", category: "Edge", link: "/blog/edge-private-experimentation-v2-2026" }
        ]}
      />
      
      {/* 🧠🧠🧠 BRAND NEW OCTOBER 2025 - JUST RELEASED: COGNITIVE COMPUTING REVOLUTION - TOP PRIORITY! 🧠🧠🧠 */}
      {/* Featured: Multi-Agent Orchestration (97.8% Automation, $847M Value), Cognitive AI Transformation (98.5% Accuracy, $1.2B Value), Fortune 20 Telecom Case Study ($4.7B Success, 3,602% ROI) */}
      {/* <October2025CognitiveRevolutionBanner /> */}
      
      {/* <November2025GameChangersBanner /> */}
      {/* <January2026RevolutionaryBanner /> */}
      {/* <October2025UltimateEnterpriseBanner /> */}
      {/* <October2025CuttingEdgeInnovationsBanner /> */}
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark relative overflow-hidden">
        <Header />
        {/* New This Week promo - highlights latest featured posts */}
        <div className="container mx-auto px-4 py-6">
          <div className="bg-white/10 border border-white/15 rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-white text-xl font-semibold">New This Week</h2>
              <Link to="/blog" className="text-zion-cyan hover:underline flex items-center gap-1">
                View all
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {blogPosts
                .filter((p) => p.featured)
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .slice(0, 2)
                .map((post) => (
                  <Link key={post.slug} to={`/blog/${post.slug}`} className="block group">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10 group-hover:border-zion-cyan/40 transition-colors">
                      <div className="text-xs uppercase tracking-wide text-zion-cyan mb-1">{post.category}</div>
                      <div className="text-white font-medium mb-1">{post.title}</div>
                      <div className="text-zion-slate-light text-sm">{post.readTime} • {new Date(post.date).toLocaleDateString()}</div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>

        {/* Auto: Highlight the very latest featured article */}
        <div className="container mx-auto px-4 py-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-white text-xl font-semibold">Just Published</h2>
              <Link to="/blog" className="text-zion-cyan hover:underline flex items-center gap-1">
                View all
                <ArrowRight size={16} />
              </Link>
            </div>
            {(() => {
              const latest = [...blogPosts]
                .filter(p => p.featured)
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
              if (!latest) return null;
              return (
                <Link to={`/blog/${latest.slug}`} className="block group">
                  <div className="bg-white/5 rounded-lg p-5 border border-white/10 group-hover:border-zion-cyan/40 transition-colors">
                    <div className="text-xs uppercase tracking-wide text-zion-cyan mb-1">{latest.category}</div>
                    <div className="text-white text-2xl font-semibold mb-1">{latest.title}</div>
                    <div className="text-zion-slate-light text-sm">{latest.readTime} • {new Date(latest.date).toLocaleDateString()}</div>
                  </div>
                </Link>
              );
            })()}
          </div>
        </div>
        
        {/* Enhanced Promotional Banners */}
        {getFeaturedBanners().slice(0, 3).map((banner) => (
          <EnhancedPromotionalBanner
            key={banner.id}
            banner={banner}
            className="border-b border-white/10"
          />
        ))}
        
        <NewContentAnnouncement />
        <LatestContentBanner 
          className="border-b border-white/10" 
          variant="info"
          autoRotate
          rotationInterval={7000}
        />
        <NewContentPromoBanner 
          className="border-b border-white/10" 
          variant="premium" 
          title="New: Agent Blue‑Green Releases, Edge LLM Caching, Platform SLO Guardrails"
          description="Ship agents safely with instant rollback, keep prompts fast at the edge, and prevent regressions with SLO scorecards."
          ctaText="Explore new content"
          ctaLink="/blog"
          featuredItems={[
            { title: "Agent Blue‑Green Releases 2026", category: "GenAI", link: "/blog/agent-blue-green-releases-2026" },
            { title: "Edge LLM Safety Caching 2026", category: "Architecture", link: "/blog/edge-llm-safety-caching-2026" },
            { title: "Platform SLO Guardrails 2026", category: "Platform Engineering", link: "/blog/platform-slo-guardrails-2026" }
          ]}
        />
        <div className="container mx-auto px-6 mt-6">
          <TrendingContentBanner />
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
        <ContentPromotionBanner />
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

        {/* 🔥🔥🔥 BRAND NEW: October 1, 2025 - NEXT-GEN AGENTIC AI - REVOLUTIONARY BREAKTHROUGH! 🔥🔥🔥 */}
        <section className="container mx-auto px-6 py-12 relative z-10">
          <div className="bg-gradient-to-br from-purple-900/70 via-indigo-900/60 to-blue-900/70 rounded-3xl border-4 border-purple-400/80 p-8 md:p-12 shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 animate-pulse-slow mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="inline-flex h-5 w-5 rounded-full bg-purple-400 animate-ping shadow-xl"></span>
              <span className="text-purple-200 font-extrabold text-3xl uppercase tracking-wider drop-shadow-lg">🚀 BREAKTHROUGH LAUNCH - October 1, 2025 🚀</span>
              <span className="inline-flex h-5 w-5 rounded-full bg-purple-400 animate-ping shadow-xl"></span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 text-center leading-tight drop-shadow-2xl">
              🤖 Next-Gen Agentic AI: <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent animate-gradient">$890M Value, 94% Efficiency, Revolutionary Results</span>
            </h2>
            
            <p className="text-2xl text-purple-100 mb-8 text-center max-w-5xl mx-auto leading-relaxed font-semibold">
              The AI revolution isn't coming—it's here. Deploy 150+ autonomous AI agents that think, learn, collaborate, and execute. Transform your entire enterprise with $127M average savings, 94% efficiency gains, and 18-month competitive advantage.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-purple-800/60 to-indigo-800/60 backdrop-blur-lg rounded-2xl p-6 border-2 border-purple-400/50 hover:border-purple-300/80 transition-all hover:scale-105 hover:shadow-2xl">
                <div className="text-purple-300 text-sm font-bold mb-3 uppercase flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Revolutionary Technology
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Autonomous AI Agents</h3>
                <p className="text-purple-100 text-base mb-4 leading-relaxed">
                  150+ specialized AI agents working 24/7 with 98.7% decision accuracy, continuous learning, and zero downtime. Handles complexity that would overwhelm human teams.
                </p>
                <Link 
                  to="/blog/ai-2025-oct-01-next-gen-agentic-ai-enterprise-breakthrough" 
                  className="inline-flex items-center text-purple-300 hover:text-white font-bold text-base group"
                >
                  Read Full Article (16 min) →
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>

              <div className="bg-gradient-to-br from-green-800/60 to-emerald-800/60 backdrop-blur-lg rounded-2xl p-6 border-2 border-green-400/50 hover:border-green-300/80 transition-all hover:scale-105 hover:shadow-2xl">
                <div className="text-green-300 text-sm font-bold mb-3 uppercase flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Proven $890M Success
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Fortune 50 Transformation</h3>
                <p className="text-green-100 text-base mb-4 leading-relaxed">
                  $890M value creation in 12 months. 94% operational efficiency, 97% employee satisfaction, 18-month competitive advantage. Real results, real transformation.
                </p>
                <Link 
                  to="/case-studies/ai-2025-oct-01-fortune-50-agentic-ai-transformation-890m-success" 
                  className="inline-flex items-center text-green-300 hover:text-white font-bold text-base group"
                >
                  Read Case Study →
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>

              <div className="bg-gradient-to-br from-blue-800/60 to-cyan-800/60 backdrop-blur-lg rounded-2xl p-6 border-2 border-blue-400/50 hover:border-blue-300/80 transition-all hover:scale-105 hover:shadow-2xl">
                <div className="text-blue-300 text-sm font-bold mb-3 uppercase flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Enterprise Platform Ready
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Deploy in 4-6 Weeks</h3>
                <p className="text-blue-100 text-base mb-4 leading-relaxed">
                  From $25K/month with 340% ROI in year one. Includes 150+ pre-built agents, 24/7 support, and full training. Start transforming today.
                </p>
                <Link 
                  to="/services/october-2025-next-gen-agentic-ai-platform" 
                  className="inline-flex items-center text-blue-300 hover:text-white font-bold text-base group"
                >
                  Explore Platform & Pricing →
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-800/50 to-indigo-800/50 rounded-2xl p-6 border-2 border-purple-400/50 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Star className="w-7 h-7 text-yellow-400" />
                Enterprise Impact Across All Functions
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-purple-100 text-base">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div><span className="font-bold text-white">Operations:</span> 94% efficiency gain, $340M cost savings annually</div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div><span className="font-bold text-white">Customer Service:</span> 97% satisfaction, 24/7 multilingual support</div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div><span className="font-bold text-white">Innovation:</span> 5 new products launched, 83% faster time-to-market</div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div><span className="font-bold text-white">Revenue Growth:</span> $550M new revenue from AI-enabled services</div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div><span className="font-bold text-white">Employee Experience:</span> 97% satisfaction, 3,200 hours saved/year</div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div><span className="font-bold text-white">Market Position:</span> 18-month competitive advantage established</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
              <Link 
                to="/services/october-2025-next-gen-agentic-ai-platform" 
                className="btn-primary flex items-center gap-3 text-xl px-10 py-5 shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all"
              >
                <Sparkles className="w-7 h-7" />
                Start Your Transformation
                <ArrowRight className="w-7 h-7" />
              </Link>
              <Link 
                to="/contact" 
                className="btn-secondary text-xl px-10 py-5 transform hover:scale-105 transition-all"
              >
                Schedule Strategic Assessment
              </Link>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-yellow-500/30 border-2 border-yellow-400/70 rounded-full px-8 py-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                  <span className="text-yellow-200 font-bold text-lg">🎁 OCTOBER LAUNCH OFFER:</span>
                </div>
                <span className="text-white font-bold text-lg">50% Off First 3 Months + Free $250K Custom Development (Limited Time!)</span>
              </div>
            </div>

            <div className="mt-6 text-center text-purple-200 text-sm">
              <p className="flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                <span className="font-semibold">Trusted by 89 Fortune 500 Companies</span>
                <span className="mx-2">•</span>
                <span className="font-semibold">$4.2B Total Value Created</span>
                <span className="mx-2">•</span>
                <span className="font-semibold">98.7% Client Satisfaction</span>
              </p>
            </div>
          </div>
        </section>

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
              🚀 <strong>BREAKTHROUGH 2025:</strong> AI Autonomous Infrastructure, Quantum-AI Hybrid Computing & Zero Trust Security! 
              Transform your business with revolutionary AI solutions that self-heal, optimize, and scale automatically. 
              Join 500+ companies achieving unprecedented results!
            </p>

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

        {/* 🚀 OCTOBER 2, 2025 - BREAKTHROUGH: NEXT-GEN ENTERPRISE AI SYSTEMS! 🚀 */}
        {/* <October2025NewBreakthroughBanner /> */}

        {/* 🌟🌟🌟 NEWEST LAUNCH: OCTOBER 1, 2025 - SMART CITY DIGITAL TWIN REVOLUTION - FEATURED! 🌟🌟🌟 */}
        {/* 🏙️🏙️🏙️ JUST PUBLISHED: $1.8B Savings, Phoenix Success Story, 97% Prediction Accuracy! 🏙️🏙️🏙️ */}
        <section className="container mx-auto px-6 py-16 relative z-10">
          <div className="bg-gradient-to-br from-indigo-900/50 via-blue-900/40 to-teal-900/50 rounded-3xl border-2 border-indigo-400/60 p-8 md:p-12 shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-4 w-4 rounded-full bg-indigo-400 animate-pulse shadow-lg shadow-indigo-400/50"></span>
              <span className="text-indigo-300 font-bold text-xl uppercase tracking-wider animate-pulse">🌟 NEW BREAKTHROUGH - October 1, 2025</span>
              <span className="inline-flex h-4 w-4 rounded-full bg-indigo-400 animate-pulse shadow-lg shadow-indigo-400/50"></span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              🏙️ Smart City Digital Twin Revolution: <span className="bg-gradient-to-r from-indigo-300 to-teal-300 bg-clip-text text-transparent">Phoenix Saves $1.8B Annually with AI-Powered City Intelligence</span>
            </h2>
            
            <p className="text-2xl text-indigo-100 mb-8 max-w-4xl leading-relaxed">
              Transform your entire city into an intelligent, self-optimizing system. See how Phoenix deployed 50,000+ IoT sensors and AI predictive models to achieve 97% infrastructure failure prediction, 68% traffic reduction, and $1.8B in annual savings.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-indigo-900/40 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/40 hover:border-indigo-300/70 transition-all hover:scale-105">
                <div className="text-indigo-300 text-sm font-semibold mb-3 uppercase flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Technical Deep-Dive
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Digital Twins for Smart Cities</h3>
                <p className="text-indigo-100 text-base mb-4">
                  Learn how to create a living virtual replica of your city with 50,000+ IoT sensors, real-time AI prediction, and autonomous optimization. 97% accuracy predicting infrastructure failures 30 days ahead.
                </p>
                <Link 
                  to="/blog/ai-2025-oct-01-smart-city-digital-twins-revolution" 
                  className="inline-flex items-center text-indigo-300 hover:text-white font-bold text-base group"
                >
                  Read Technical Guide (16 min) 
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-green-900/40 backdrop-blur-sm rounded-xl p-6 border border-green-400/40 hover:border-green-300/70 transition-all hover:scale-105">
                <div className="text-green-300 text-sm font-semibold mb-3 uppercase flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  $1.8B Success Story
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Phoenix Digital Twin Transformation</h3>
                <p className="text-green-100 text-base mb-4">
                  See how Phoenix saved $1.8B annually through AI-powered city management. 68% traffic reduction, 54% energy savings, 89% faster emergency response, and 92% citizen satisfaction.
                </p>
                <Link 
                  to="/case-studies/phoenix-smart-city-digital-twin-1-8b-success" 
                  className="inline-flex items-center text-green-300 hover:text-white font-bold text-base group"
                >
                  Read Full Case Study 
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-teal-900/40 backdrop-blur-sm rounded-xl p-6 border border-teal-400/40 hover:border-teal-300/70 transition-all hover:scale-105">
                <div className="text-teal-300 text-sm font-semibold mb-3 uppercase flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Service Launch
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Smart City Digital Twin Platform</h3>
                <p className="text-teal-100 text-base mb-4">
                  Deploy our proven platform in your city. Starting at $24M with 650% ROI over 3 years. 12-month deployment, comprehensive support, and guaranteed results.
                </p>
                <Link 
                  to="/services/ai-2025-october-smart-city-digital-twin-platform" 
                  className="inline-flex items-center text-teal-300 hover:text-white font-bold text-base group"
                >
                  Explore Service Tiers 
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* New Content Announcement */}
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-xl p-6 mb-8 animate-fade-in">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
                <span className="text-lg font-bold text-purple-400">🚀 BREAKTHROUGH 2026 CONTENT</span>
                <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
              </div>
              <p className="text-white text-lg font-semibold mb-2">
                🎯 Just Released: 12 Revolutionary Articles + 6 New AI Services + 6 Success Stories on AI Platform Architecture, Multi-Modal AI, Edge Computing & More
              </p>
              <p className="text-zion-slate-light text-sm mb-4">
                Discover breakthrough insights on AI platform architecture, multi-modal AI applications, edge AI deployment, AI ethics frameworks, performance monitoring, and real-world success stories from Fortune 500 companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/blog"
                  className="bg-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-600 transition-colors text-center"
                >
                  Read Latest Articles
                </Link>
                <Link
                  to="/services"
                  className="bg-indigo-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-600 transition-colors text-center"
                >
                  Explore New Services
                </Link>
                <Link
                  to="/case-studies"
                  className="border border-purple-400 text-purple-400 px-6 py-2 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-colors text-center"
                >
                  View Success Stories
                </Link>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <span className="bg-purple-100/20 text-purple-200 px-3 py-1 rounded-full text-xs font-medium border border-purple-300/20">AI Architecture</span>
                <span className="bg-rose-100/20 text-rose-200 px-3 py-1 rounded-full text-xs font-medium border border-rose-300/20">Multi-Modal AI</span>
                <span className="bg-blue-100/20 text-blue-200 px-3 py-1 rounded-full text-xs font-medium border border-blue-300/20">Edge Computing</span>
                <span className="bg-emerald-100/20 text-emerald-200 px-3 py-1 rounded-full text-xs font-medium border border-emerald-300/20">AI Ethics</span>
                <span className="bg-cyan-100/20 text-cyan-200 px-3 py-1 rounded-full text-xs font-medium border border-cyan-300/20">Performance Monitoring</span>
                <span className="bg-orange-100/20 text-orange-200 px-3 py-1 rounded-full text-xs font-medium border border-orange-300/20">Success Stories</span>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Insights Section */}
        {/* Promo ribbon for new content */}
        <div className="container mx-auto px-6">
          <div className="mb-6 rounded-full bg-emerald-500/15 border border-emerald-400/30 px-6 py-3 text-emerald-200 text-sm inline-flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            NEW TODAY: Production Edge AI Guide (12 min) + North‑Star Metrics Framework (10 min) + $127M Case Study
            <Link to="/blog/ai-2025-oct-edge-inference-patterns-production-guide" className="text-emerald-300 underline underline-offset-4 hover:text-white">Read</Link>
          </div>
        </div>
        <LatestInsights />
        <div className="container mx-auto px-6">
          <div className="rounded-xl bg-indigo-600/15 border border-indigo-400/30 px-6 py-4 text-indigo-200 text-sm flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-indigo-400 animate-ping"></span>
              <span className="font-medium">Fresh on the blog:</span>
              <span className="hidden sm:inline">Edge AI Production Guide • North‑Star Metrics • $127M Manufacturing Case Study</span>
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

        {/* New Services Promotional Banner */}
        {/* <NewServicesPromoBanner2026 /> */}

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

        {/* New Content Announcement */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6 border border-white/30">
                <Sparkles className="w-4 h-4 mr-2" />
                Fresh: Edge LLM Caching, KPI Scorecards, Serverless Cost Playbook
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
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/30 rounded-xl p-6 mb-10">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-5 h-5 text-purple-500 animate-pulse" />
                <span className="text-lg font-bold text-purple-700">🚀 BREAKTHROUGH 2026 CONTENT</span>
                <Sparkles className="w-5 h-5 text-purple-500 animate-pulse" />
              </div>
            <p className="text-gray-700 font-semibold mb-2">
                🎯 Just Released: 12 Revolutionary Articles on AI Platform Architecture, Multi-Modal AI, Edge Computing, AI Ethics & Performance Monitoring
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Master next-generation AI with comprehensive guides on scalable architecture, multi-modal applications, edge deployment, ethical frameworks, and real-time monitoring systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">AI Architecture</span>
                <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-xs font-medium">Multi-Modal AI</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">Edge Computing</span>
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">AI Ethics</span>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">Performance</span>
                <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-medium">Monitoring</span>
              </div>
            </div>
            
            <div className="mb-10 flex items-end justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Articles</h2>
                <p className="text-gray-600">New: AI Platform Architecture, Multi-Modal AI, Edge Computing, AI Ethics Framework, and Performance Monitoring.</p>
              </div>
              <Link to="/blog" className="text-indigo-700 font-semibold hover:text-indigo-800">View all →</Link>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[...blogPosts]
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4 mr-2" />
                New Success Stories Available
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See how Fortune 500 companies are transforming their operations with our breakthrough AI solutions. New: Enterprise AI Platform Modernization, Multi-Modal AI, Edge AI Deployment & More.
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
                  <p className="text-white/90">New: Autonomous Incident Runbooks, Privacy‑First Feature Flags, Platform ROI Scorecards Quickstart.</p>
                </div>
                <Link to="/blog" className="bg-white text-indigo-700 hover:bg-indigo-50 px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 self-start md:self-auto">
                  Read the latest
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Inline featured list (auto-curated highlights) */}
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div className="bg-white/10 rounded-xl p-5">
                  <div className="text-sm text-purple-200 mb-1">AI Operations</div>
                  <div className="font-semibold text-white">Autonomous Incident Runbooks</div>
                </div>
                <div className="bg-white/10 rounded-xl p-5">
                  <div className="text-sm text-rose-200 mb-1">Architecture</div>
                  <div className="font-semibold text-white">Privacy‑First Feature Flags</div>
                </div>
                <div className="bg-white/10 rounded-xl p-5">
                  <div className="text-sm text-blue-200 mb-1">AI Strategy</div>
                  <div className="font-semibold text-white">Platform ROI Scorecards</div>
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
