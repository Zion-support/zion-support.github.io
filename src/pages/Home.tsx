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
import ContentPromotionBanner from "../components/ContentPromotionBanner";
import ComprehensivePromoBanner from "../components/ComprehensivePromoBanner";
import NewArticlesPromoBanner from "../components/NewArticlesPromoBanner";
import NewServicesPromoBanner from "../components/NewServicesPromoBanner";
import ContentValueTestimonials from "../components/ContentValueTestimonials";
import EnhancedNewsletterSignup from "../components/EnhancedNewsletterSignup";
import EnhancedPromotionalBanner from "../components/EnhancedPromotionalBanner";
import EnhancedTestimonials from "../components/EnhancedTestimonials";
import Header from "../components/Header";
import LatestArticlesShowcase from "../components/LatestArticlesShowcase";
import LatestContentBanner from "../components/LatestContentBanner";
import LatestInsights from "../components/LatestInsights";
import ModernFeatures from "../components/ModernFeatures";
import NewContentAnnouncement from "../components/NewContentAnnouncement";
import NewContentPromoBanner from "../components/NewContentPromoBanner";
import NewContentShowcase from "../components/NewContentShowcase";
import NewContentShowcase2025 from "../components/NewContentShowcase2025";
import NewServicesShowcase from "../components/NewServicesShowcase";
import SuccessStoriesShowcase from "../components/SuccessStoriesShowcase";
import TrendingContentBanner from "../components/TrendingContentBanner";
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
        
        
        {/* Content Promotion Banner */}
        <ContentPromotionBanner
          variant="info"
          title="🚀 Fresh: Autonomous Runbooks + Privacy‑First Flags"
          description="Budgeted actions, approvals, and zero‑regret rollouts you can ship today."
          ctaText="Read the latest"
          ctaLink="/blog/ai-autonomous-incident-runbooks-2025"
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
              🚀 <strong>BREAKTHROUGH 2025:</strong> AI Autonomous Infrastructure, Quantum-AI Hybrid Computing & Zero Trust Security! 
              Transform your business with revolutionary AI solutions that self-heal, optimize, and scale automatically. 
              Join 500+ companies achieving unprecedented results!
            </p>

            {/* New Content Announcement */}
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-xl p-6 mb-8 animate-fade-in">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-blue-400 animate-pulse" />
                <span className="text-lg font-bold text-blue-400">🔥 BREAKTHROUGH CONTENT ALERT</span>
                <Sparkles className="w-6 h-6 text-blue-400 animate-pulse" />
              </div>
              <p className="text-white text-lg font-semibold mb-2">
                📚 Just Published: 3 Revolutionary Articles on AI Autonomous Infrastructure, Quantum-AI Hybrid Computing & AI Content Automation
              </p>
              <p className="text-zion-slate-light text-sm mb-4">
                Discover breakthrough insights on self-healing systems, quantum computing applications, and content automation that scales production 10x.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/blog"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors text-center"
                >
                  Read Latest Articles
                </Link>
                <Link
                  to="/case-studies"
                  className="border border-blue-400 text-blue-400 px-6 py-2 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-colors text-center"
                >
                  View Success Stories
                </Link>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <span className="bg-blue-100/20 text-blue-200 px-3 py-1 rounded-full text-xs font-medium border border-blue-300/20">AI Infrastructure</span>
                <span className="bg-purple-100/20 text-purple-200 px-3 py-1 rounded-full text-xs font-medium border border-purple-300/20">Quantum Computing</span>
                <span className="bg-green-100/20 text-green-200 px-3 py-1 rounded-full text-xs font-medium border border-green-300/20">Content Automation</span>
                <span className="bg-cyan-100/20 text-cyan-200 px-3 py-1 rounded-full text-xs font-medium border border-cyan-300/20">Case Studies</span>
              </div>
            </div>

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
            New: Edge LLM Caching, Governance Scorecards, Serverless Cost Playbook — read now
            <Link to="/insights" className="text-emerald-300 underline underline-offset-4 hover:text-white">View</Link>
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
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest AI Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our newest AI-powered solutions designed to accelerate your digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* New Services Showcase */}
        <NewServicesShowcase />

        {/* Latest Articles Promotional Section */}
        <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-indigo-100/20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles & Insights</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay ahead with our latest AI insights, technical guides, and industry best practices.
              </p>
            </div>
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
