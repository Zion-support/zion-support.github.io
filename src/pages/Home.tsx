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
import ComprehensivePromoBanner from "../components/ComprehensivePromoBanner";
import ContentPromotionBanner from "../components/ContentPromotionBanner";
import ContentValueTestimonials from "../components/ContentValueTestimonials";
import EnhancedNewsletterSignup from "../components/EnhancedNewsletterSignup";
import EnhancedPromotionalBanner from "../components/EnhancedPromotionalBanner";
import EnhancedTestimonials from "../components/EnhancedTestimonials";
import Header from "../components/Header";
import October2025EdgeAIQuantumCryptoBanner from "../components/October2025EdgeAIQuantumCryptoBanner";
import October2025BreakthroughContentBanner from "../components/October2025BreakthroughContentBanner";
import October2025AIRevolutionBanner from "../components/October2025AIRevolutionBanner";
import LatestArticlesShowcase from "../components/LatestArticlesShowcase";
import LatestContentBanner from "../components/LatestContentBanner";
import LatestInsights from "../components/LatestInsights";
import ModernFeatures from "../components/ModernFeatures";
import NewArticlesPromoBanner from "../components/NewArticlesPromoBanner";
import NewContentAnnouncement from "../components/NewContentAnnouncement";
import NewContentPromoBanner from "../components/NewContentPromoBanner";
import NewContentShowcase from "../components/NewContentShowcase";
import NewContentShowcase2025 from "../components/NewContentShowcase2025";
import NewServicesPromoBanner from "../components/NewServicesPromoBanner";
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
        
        {/* 🎉 OCTOBER 4, 2025 - JUST RELEASED: 3 CUTTING-EDGE AI BREAKTHROUGHS */}
        <NewContentPromoBanner 
          className="border-b border-white/10" 
          variant="premium" 
          title="🎉 JUST RELEASED OCTOBER 4: 3 CUTTING-EDGE AI BREAKTHROUGHS — Advanced Reasoning Models, Synthetic Data Mastery & Multi-Modal AI Integration!"
          description="🔥 BRAND NEW TODAY: Master next-gen o1-style reasoning models achieving 95%+ accuracy (5x performance boost), generate unlimited training data with synthetic data (85% cost reduction, 10x faster development), and deploy multi-modal AI processing vision, language, audio & sensors simultaneously (92% better decisions). Transform your AI capabilities with these game-changing innovations!"
          ctaText="Explore Latest AI Breakthroughs"
          ctaLink="/blog"
          featuredItems={[
            { title: "Advanced AI Reasoning Models 2025 — Next-Gen o1-Style Systems Transform Enterprise (95%+ Accuracy, 5x Performance)", category: "AI Reasoning", link: "/blog/ai-2025-october-advanced-reasoning-models-breakthrough" },
            { title: "Synthetic Data Generation Mastery 2025 — Train World-Class AI Without Real Data (85% Cost Cut, 10x Faster)", category: "AI Training Data", link: "/blog/ai-2025-october-synthetic-data-generation-mastery" },
            { title: "Multi-Modal AI Integration 2025 — Unified Systems Processing Vision, Language, Audio & Sensors (92% Better Decisions)", category: "Multi-Modal AI", link: "/blog/ai-2025-october-multimodal-ai-integration-enterprise" }
          ]}
        />
        
        {/* 🔥 OCTOBER 1, 2025 - BRAND NEW: AI Revolution - Agents, Development Tools & Safety */}
        <October2025AIRevolutionBanner className="border-b border-white/10" />
        
        {/* 🎯 OCTOBER 3, 2025 - LATEST: AI Education, Neuromorphic Computing & Biotech Breakthroughs */}
        <NewContentPromoBanner 
          className="border-b border-white/10" 
          variant="premium" 
          title="🎯 JUST PUBLISHED OCTOBER 3: 3 REVOLUTIONARY AI BREAKTHROUGHS — Adaptive Learning, Neuromorphic Computing & Protein Design!"
          description="🔥 BRAND NEW TODAY: Transform education with adaptive learning systems (87% success rate, 3.2x faster mastery), deploy brain-inspired neuromorphic AI (1000x energy efficiency), and revolutionize drug discovery with AI protein design (95% accuracy, 10x faster R&D). Essential breakthroughs for forward-thinking innovators!"
          ctaText="Explore Latest Breakthroughs"
          ctaLink="/blog"
          featuredItems={[
            { title: "AI-Powered Adaptive Learning Systems — Next-Gen Personalized Education (87% Success Rate, 3.2x Faster Mastery)", category: "AI Education Tech", link: "/blog/ai-adaptive-learning-systems-personalized-education-2025" },
            { title: "Neuromorphic Computing Revolution — Brain-Inspired AI Architecture (1000x Energy Efficiency, Real-Time Learning)", category: "Neuromorphic AI", link: "/blog/neuromorphic-computing-brain-inspired-ai-2025" },
            { title: "AI-Driven Protein Design — Revolutionary Drug Discovery Breakthrough (95% Accuracy, 10x Faster R&D)", category: "AI BioTech", link: "/blog/ai-protein-design-drug-discovery-breakthrough-2025" }
          ]}
        />
        
        {/* 🚀 OCTOBER 3, 2025 - NEWEST BREAKTHROUGH CONTENT: Enterprise Automation + Quantum AI */}
        <October2025BreakthroughContentBanner />
        
        {/* 🚀 OCTOBER 1, 2025 - LATEST BREAKTHROUGH CONTENT: Edge AI + Quantum Crypto */}
        <October2025EdgeAIQuantumCryptoBanner />
        
        {/* 🔥 OCTOBER 1, 2025 - BRAND NEW: 4 PRODUCTION AI MASTERY GUIDES */}
        <NewContentPromoBanner 
          className="border-b border-white/10" 
          variant="premium" 
          title="🔥 JUST RELEASED: 4 Production AI Mastery Guides — Agent Orchestration, Cost Optimization, Security & Monitoring!"
          description="⚡ BRAND NEW OCTOBER 1, 2025: Master production AI with complete guides on orchestrating 10,000+ concurrent agents (99.95% reliability), slashing LLM costs 75% without quality loss, implementing zero-trust security architecture, and real-time model monitoring that detects issues before users notice. Save $10M+ annually with these battle-tested strategies!"
          ctaText="Read Production AI Guides"
          ctaLink="/blog"
          featuredItems={[
            { title: "AI Agent Orchestration at Scale — 10,000+ Concurrent Agents, 99.95% Reliability, 80% Less Overhead", category: "AI Architecture", link: "/blog/ai-2025-oct-agent-orchestration-at-scale" },
            { title: "LLM Cost Optimization Mastery — Cut Inference Costs 75% Without Quality Loss ($10M+ Savings)", category: "AI Operations", link: "/blog/ai-2025-oct-llm-cost-optimization-mastery" },
            { title: "Zero-Trust AI Security Architecture — Stop Prompt Injection, Data Exfiltration & Model Theft", category: "AI Security", link: "/blog/ai-2025-oct-zero-trust-ai-security-architecture" },
            { title: "Real-Time AI Model Monitoring — Detect Quality Degradation Before Users Notice (99.9% Accuracy)", category: "MLOps", link: "/blog/ai-2025-oct-real-time-model-monitoring-observability" }
          ]}
        />
        
        {/* Enhanced Promotional Banners */}
        {getFeaturedBanners().slice(0, 3).map((banner) => (
          <EnhancedPromotionalBanner
            key={banner.id}
            banner={banner}
            className="border-b border-white/10"
          />
        ))}
        
        <NewContentAnnouncement />
        
        {/* October 1, 2025 - 🎉 NEWEST: Latest AI Breakthrough Content */}
        <NewContentPromoBanner 
          className="border-b border-white/10" 
          variant="premium" 
          title="🎉 JUST PUBLISHED OCTOBER 1: 3 BREAKTHROUGH AI GUIDES — Edge Computing + 5G, Enterprise AI Adoption & Cybersecurity Revolution!"
          description="🚀 BRAND NEW TODAY: Deploy AI at the edge with 5G integration (sub-10ms latency, 90% bandwidth savings), master enterprise AI transformation (95% adoption, 450% ROI), and revolutionize security operations (99.7% threat detection, sub-60s response). Essential reading for forward-thinking organizations!"
          ctaText="Explore New Breakthroughs"
          ctaLink="/blog"
          featuredItems={[
            { title: "AI-Powered Edge Computing & 5G Integration — Sub-10ms Latency, 90% Bandwidth Savings, 1M+ Devices", category: "Edge AI & 5G", link: "/blog/ai-edge-computing-5g-integration-2025" },
            { title: "Enterprise AI Adoption Framework — 95% User Adoption, 4x Faster Implementation, 450% ROI", category: "Enterprise Strategy", link: "/blog/enterprise-ai-adoption-change-management-2025" },
            { title: "AI-Driven Cybersecurity Operations — 99.7% Detection Accuracy, Sub-60s Response, 85% Fewer False Positives", category: "AI Security", link: "/blog/ai-cybersecurity-threat-intelligence-2025" }
          ]}
        />
        
        {/* October 1, 2025 - 🚀 JUST RELEASED: Latest AI Platform & Testing Guides */}
        <NewContentPromoBanner 
          className="border-b border-white/10" 
          variant="premium" 
          title="🚀 JUST RELEASED OCTOBER 1: 3 Revolutionary Guides — Unified AI Platform, Autonomous Testing & Real-Time Streaming!"
          description="🔥 NEW TODAY: Master unified intelligence platforms (85% faster dev, 70% cost cut), autonomous testing revolution (92% bug detection), and sub-50ms real-time data streaming (10B+ events/sec). Transform your AI operations with battle-tested strategies!"
          ctaText="Read Latest Guides"
          ctaLink="/blog"
          featuredItems={[
            { title: "Unified Intelligence Platform — Build Next-Gen AI Ecosystems (85% Faster Development)", category: "AI Platform", link: "/blog/ai-2025-october-unified-intelligence-platform" },
            { title: "Autonomous Testing Revolution — AI-Powered QA at Scale (92% Bug Detection, 80% Faster)", category: "Quality Engineering", link: "/blog/ai-2025-october-autonomous-testing-revolution" },
            { title: "Real-Time AI Data Streaming — Sub-50ms Intelligence Pipelines (10B+ Events/Second)", category: "Data Engineering", link: "/blog/ai-2025-october-realtime-data-streaming" }
          ]}
        />
        
        {/* October 1, 2025 - 🔥 BREAKTHROUGH: Next-Gen AI Revolution */}
        <NewContentPromoBanner 
          className="border-b border-white/10" 
          variant="premium" 
          title="🚀 JUST LAUNCHED OCTOBER 1: Next-Gen AI Revolution — Multimodal Systems, Self-Optimizing Infrastructure & More!"
          description="🔥 BREAKING: 4 groundbreaking guides released today! Build multimodal AI (95% accuracy), deploy self-optimizing infrastructure (70% cost cut), develop responsible AI frameworks, and create hyper-personalized experiences (320% revenue growth)."
          ctaText="Explore Breakthrough Guides"
          ctaLink="/blog"
          featuredItems={[
            { title: "Multimodal AI Systems 2025 — Vision + Language + Audio Integration (95% Accuracy)", category: "AI Innovation", link: "/blog/multimodal-ai-systems-complete-guide-2025" },
            { title: "Self-Optimizing AI Infrastructure — 70% Cost Reduction, 99.99% Uptime, Zero Manual Work", category: "AI Infrastructure", link: "/blog/self-optimizing-ai-infrastructure-guide-2025" },
            { title: "Responsible AI Development Framework — Build Ethical AI Systems from Day One", category: "AI Ethics", link: "/blog/responsible-ai-development-framework-2025" },
            { title: "AI-Powered Hyper-Personalization — 4.5x Engagement, 320% Revenue Growth", category: "Customer Experience", link: "/blog/ai-powered-hyper-personalization-guide-2025" }
          ]}
        />
        
        {/* September 30, 2025 - LATEST: AI Infrastructure & Security Breakthroughs */}
        <NewContentPromoBanner 
          className="border-b border-white/10" 
          variant="premium" 
          title="🔥 JUST RELEASED: 3 Game-Changing Guides — AI Observability, Vector Databases & Security"
          description="NEW September 30, 2025: Master production AI with comprehensive guides on next-gen observability (99.9% uptime), vector databases at scale (sub-100ms queries), and AI-powered security scanning (90% fewer false positives)."
          ctaText="Read Latest Guides"
          ctaLink="/blog"
          featuredItems={[
            { title: "AI Observability 2.0: Complete Monitoring Revolution — 99.9% Uptime, 85% Faster Detection", category: "AI Operations", link: "/blog/ai-2025-september-30-observability-monitoring-revolution" },
            { title: "Vector Databases at Scale: Real-Time AI Applications — Sub-100ms Query Latency", category: "AI Infrastructure", link: "/blog/vector-databases-real-time-ai-applications-2025" },
            { title: "AI-Powered Code Review & Security Scanning — 90% Fewer False Positives, 95% Detection", category: "Security", link: "/blog/ai-powered-code-security-scanning-2025" }
          ]}
        />
        
        {/* September 30, 2025 - BREAKING: NEW ENTERPRISE GUIDES */}
        <NewContentPromoBanner 
          className="border-b border-white/10" 
          variant="premium" 
          title="🚨 BREAKING: 3 Mission-Critical Enterprise Guides Just Released!"
          description="NEW September 30, 2025: Complete guides for AI-Powered DevSecOps (95% faster security), Quantum-Ready Infrastructure (protect against Q-Day), and Enterprise AI Governance (navigate regulations with confidence)."
          ctaText="Read Essential Guides"
          ctaLink="/blog"
          featuredItems={[
            { title: "AI-Powered DevSecOps Guide 2025 — 95% Faster Security, 80% Fewer False Positives", category: "DevSecOps & AI", link: "/blog/ai-powered-devsecops-complete-guide-2025" },
            { title: "Quantum-Ready Cloud Infrastructure — Protect Against Q-Day with PQC Migration", category: "Quantum Computing", link: "/blog/quantum-ready-cloud-infrastructure-2025" },
            { title: "Enterprise AI Model Governance Framework — Navigate AI Regulations with Confidence", category: "AI Governance", link: "/blog/enterprise-ai-model-governance-framework-2025" }
          ]}
        />
        
        {/* October 2025 - BREAKTHROUGH AI CONTENT */}
        <NewContentPromoBanner 
          className="border-b border-white/10" 
          variant="premium" 
          title="🚀 BREAKTHROUGH: Production AI Guides — Cut Costs 60%, Ship Agents Reliably"
          description="NEW October 2025: Complete production guides for agentic workflows, LLM evaluation frameworks, and AI infrastructure cost optimization. Battle-tested strategies from companies saving millions annually."
          ctaText="Read Latest Guides"
          ctaLink="/blog"
          featuredItems={[
            { title: "Agentic Workflows in Production — Ship Reliable AI Agents with 99.9% Uptime", category: "AI Architecture", link: "/blog/ai-2025-oct-agentic-workflows-production-guide" },
            { title: "LLM Evaluation Frameworks 2025 — Reduce Hallucinations 75%", category: "AI Quality", link: "/blog/ai-2025-oct-llm-evaluation-frameworks" },
            { title: "AI Infrastructure Cost Optimization — Cut Spending 60% Without Quality Loss", category: "AI Operations", link: "/blog/ai-2025-oct-ai-infrastructure-cost-optimization" }
          ]}
        />
        
        {/* September 30, 2025 - NEW Content Launch */}
        <NewContentPromoBanner 
          className="border-b border-white/10" 
          variant="premium" 
          title="🎉 FRESH CONTENT: AI DevOps, Multi-Agent Systems, Security & Green AI"
          description="Brand new comprehensive guides published September 30, 2025: Transform your operations with AI-powered DevOps (10x velocity), master multi-agent architectures, secure your AI systems, and cut energy costs 60%."
          ctaText="Explore New Guides"
          ctaLink="/blog"
          featuredItems={[
            { title: "AI-Powered DevOps Transformation — 10x Deployment Velocity", category: "DevOps & AI", link: "/blog/ai-2025-devops-transformation-complete-guide" },
            { title: "Multi-Agent AI Systems for Enterprise — Production Patterns", category: "AI Architecture", link: "/blog/ai-2025-multi-agent-systems-enterprise-guide" },
            { title: "AI Security & Privacy Best Practices 2025 — Protect Your Systems", category: "AI Security", link: "/blog/ai-2025-security-privacy-best-practices" },
            { title: "Sustainable AI Infrastructure — Cut Energy Costs 60%", category: "AI Infrastructure", link: "/blog/ai-2025-sustainable-ai-infrastructure-guide" }
          ]}
        />
        
        <LatestContentBanner 
          className="border-b border-white/10" 
          variant="info"
          autoRotate
          rotationInterval={7000}
        />
        <NewContentPromoBanner 
          className="border-b border-white/10" 
          variant="premium" 
          title="🚀 NEW: Cut GenAI Costs 70%, 10x Dev Velocity, Sub-100ms AI"
          description="Latest insights on cost optimization, platform engineering golden paths, trustworthy AI governance, and real-time infrastructure at scale."
          ctaText="Read Latest Articles"
          ctaLink="/blog"
          featuredItems={[
            { title: "GenAI Cost Optimization — Cut 70% Without Quality Loss", category: "AI Operations", link: "/blog/ai-2025-oct-03-genai-cost-optimization-at-scale" },
            { title: "Platform Engineering Golden Paths — 10x Velocity in 90 Days", category: "Platform Engineering", link: "/blog/ai-2025-oct-03-platform-engineering-golden-paths" },
            { title: "Trustworthy AI Governance — Compliance to Advantage", category: "AI Governance", link: "/blog/ai-2025-oct-03-trustworthy-ai-governance-framework" },
            { title: "Real-Time AI Infrastructure — Sub-100ms at Global Scale", category: "AI Infrastructure", link: "/blog/ai-2025-oct-03-real-time-ai-infrastructure" },
            { title: "Reliable RAG Ops 2026", category: "GenAI", link: "/blog/reliable-rag-ops-2026" },
            { title: "Platform KPIs 2026", category: "Platform Engineering", link: "/blog/platform-kpis-2026" }
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
        <ContentPromotionBanner
          variant="success"
          title="🎯 October 2025 Update: GenAI Cost Optimization + Real-Time AI"
          description="New articles on cutting LLM costs 70%, achieving sub-100ms AI, trustworthy governance frameworks, and 10x developer velocity."
          ctaText="Explore Latest Insights"
          ctaLink="/blog"
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
              🎯 <strong>JUST PUBLISHED OCTOBER 3, 2025:</strong> 3 REVOLUTIONARY AI BREAKTHROUGHS — Adaptive Learning Systems (87% student success, 3.2x faster mastery), 
              Neuromorphic Computing (1000x energy efficiency, brain-inspired architecture), and AI Protein Design (95% accuracy, 10x faster drug discovery)! 
              🔥 <strong>PLUS OCTOBER 1, 2025:</strong> 4 PRODUCTION AI MASTERY GUIDES — AI Agent Orchestration at Scale (10,000+ concurrent agents, 99.95% reliability), 
              LLM Cost Optimization Mastery (cut costs 75%, save $10M+ annually), Zero-Trust AI Security Architecture, and Real-Time Model Monitoring (99.9% accuracy)! 
              Plus 10+ More Guides including Enterprise AI Automation (400% efficiency gains), Quantum-AI Hybrid Systems (1000x processing speed), 
              Edge Computing & 5G (sub-10ms latency), Enterprise AI Adoption (450% ROI), AI Cybersecurity (99.7% detection), 
              Unified AI Platform (85% faster dev), Autonomous Testing (92% bug detection), Multimodal AI (95% accuracy), and Self-Optimizing Infrastructure (70% cost cut)! 
              Transform your business with proven AI solutions delivering $50B+ in client results. 
              Join 500+ companies achieving 400-600% ROI with our expert guidance!
            </p>

            {/* October 3, 2025 - NEWEST BREAKTHROUGH CONTENT */}
            <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 rounded-xl p-6 mb-8 animate-fade-in shadow-2xl">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-pink-400 animate-pulse" />
                <span className="text-lg font-bold text-pink-400">🎯 OCTOBER 3, 2025: LATEST AI BREAKTHROUGHS</span>
                <Sparkles className="w-6 h-6 text-pink-400 animate-pulse" />
              </div>
              <p className="text-white text-lg font-semibold mb-2">
                ⚡ 3 REVOLUTIONARY GUIDES RELEASED TODAY: Adaptive Learning Systems (87% success rate, 3.2x faster mastery), Neuromorphic Computing (1000x energy efficiency), AI Protein Design (95% accuracy, 10x faster drug discovery)!
              </p>
              <p className="text-zion-slate-light text-sm mb-4">
                Transform education with personalized adaptive learning, deploy brain-inspired computing with massive energy savings, and revolutionize pharmaceutical R&D with AI-powered protein design.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/blog/ai-adaptive-learning-systems-personalized-education-2025"
                  className="bg-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-600 transition-colors text-center"
                >
                  Read Latest Breakthroughs
                </Link>
                <Link
                  to="/blog"
                  className="border border-pink-400 text-pink-400 px-6 py-2 rounded-lg font-semibold hover:bg-pink-400 hover:text-white transition-colors text-center"
                >
                  Explore All Content
                </Link>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <span className="bg-pink-100/20 text-pink-200 px-3 py-1 rounded-full text-xs font-medium border border-pink-300/20">Adaptive Learning</span>
                <span className="bg-purple-100/20 text-purple-200 px-3 py-1 rounded-full text-xs font-medium border border-purple-300/20">Neuromorphic AI</span>
                <span className="bg-fuchsia-100/20 text-fuchsia-200 px-3 py-1 rounded-full text-xs font-medium border border-fuchsia-300/20">AI BioTech</span>
                <span className="bg-rose-100/20 text-rose-200 px-3 py-1 rounded-full text-xs font-medium border border-rose-300/20">Drug Discovery</span>
              </div>
            </div>

            {/* October 1, 2025 - PRODUCTION AI MASTERY GUIDES */}
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 rounded-xl p-6 mb-8 animate-fade-in shadow-2xl">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-red-400 animate-pulse" />
                <span className="text-lg font-bold text-red-400">🔥 OCTOBER 1, 2025: 4 PRODUCTION AI MASTERY GUIDES RELEASED</span>
                <Sparkles className="w-6 h-6 text-red-400 animate-pulse" />
              </div>
              <p className="text-white text-lg font-semibold mb-2">
                ⚡ BRAND NEW TODAY: AI Agent Orchestration (10,000+ agents, 99.95% reliability), LLM Cost Optimization (75% savings, $10M+ annually), Zero-Trust Security (stop all attack vectors), Real-Time Monitoring (detect issues before users)!
              </p>
              <p className="text-zion-slate-light text-sm mb-4">
                Master production AI with battle-tested strategies from companies saving millions. Complete guides covering architecture, operations, security, and monitoring at scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/blog/ai-2025-oct-agent-orchestration-at-scale"
                  className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors text-center"
                >
                  Read Production AI Guides
                </Link>
                <Link
                  to="/blog"
                  className="border border-red-400 text-red-400 px-6 py-2 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-colors text-center"
                >
                  Explore All Content
                </Link>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <span className="bg-red-100/20 text-red-200 px-3 py-1 rounded-full text-xs font-medium border border-red-300/20">Agent Orchestration</span>
                <span className="bg-orange-100/20 text-orange-200 px-3 py-1 rounded-full text-xs font-medium border border-orange-300/20">Cost Optimization</span>
                <span className="bg-yellow-100/20 text-yellow-200 px-3 py-1 rounded-full text-xs font-medium border border-yellow-300/20">Zero-Trust Security</span>
                <span className="bg-pink-100/20 text-pink-200 px-3 py-1 rounded-full text-xs font-medium border border-pink-300/20">Model Monitoring</span>
                <span className="bg-purple-100/20 text-purple-200 px-3 py-1 rounded-full text-xs font-medium border border-purple-300/20">Production MLOps</span>
              </div>
            </div>
            
            {/* October 1, 2025 - ADDITIONAL BREAKTHROUGH CONTENT */}
            <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 rounded-xl p-6 mb-8 animate-fade-in shadow-2xl">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-emerald-400 animate-pulse" />
                <span className="text-lg font-bold text-emerald-400">🎉 OCTOBER 1, 2025: AI BREAKTHROUGHS</span>
                <Sparkles className="w-6 h-6 text-emerald-400 animate-pulse" />
              </div>
              <p className="text-white text-lg font-semibold mb-2">
                ⚡ 3 BREAKTHROUGH GUIDES: Edge AI & 5G Integration (sub-10ms latency, 90% bandwidth savings), Enterprise AI Adoption (95% user adoption, 450% ROI), AI Cybersecurity Operations (99.7% detection accuracy)!
              </p>
              <p className="text-zion-slate-light text-sm mb-4">
                Deploy real-time AI at the edge with 5G, lead successful enterprise AI transformation with proven frameworks, and revolutionize security operations with AI-powered threat intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/blog/ai-edge-computing-5g-integration-2025"
                  className="bg-emerald-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-600 transition-colors text-center"
                >
                  Read Breakthroughs
                </Link>
                <Link
                  to="/blog"
                  className="border border-emerald-400 text-emerald-400 px-6 py-2 rounded-lg font-semibold hover:bg-emerald-400 hover:text-white transition-colors text-center"
                >
                  Explore All Content
                </Link>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <span className="bg-emerald-100/20 text-emerald-200 px-3 py-1 rounded-full text-xs font-medium border border-emerald-300/20">Edge AI & 5G</span>
                <span className="bg-teal-100/20 text-teal-200 px-3 py-1 rounded-full text-xs font-medium border border-teal-300/20">Enterprise Transformation</span>
                <span className="bg-cyan-100/20 text-cyan-200 px-3 py-1 rounded-full text-xs font-medium border border-cyan-300/20">AI Security</span>
                <span className="bg-blue-100/20 text-blue-200 px-3 py-1 rounded-full text-xs font-medium border border-blue-300/20">Threat Intelligence</span>
              </div>
            </div>

            {/* October 1, 2025 - NEW BREAKTHROUGH CONTENT */}
            <div className="bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-400/30 rounded-xl p-6 mb-8 animate-fade-in shadow-2xl">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-violet-400 animate-pulse" />
                <span className="text-lg font-bold text-violet-400">🚀 OCTOBER 1, 2025: LATEST AI PLATFORM GUIDES</span>
                <Sparkles className="w-6 h-6 text-violet-400 animate-pulse" />
              </div>
              <p className="text-white text-lg font-semibold mb-2">
                ⚡ 3 NEW GUIDES RELEASED TODAY: Unified AI Platform (85% faster dev, 70% cost reduction), Autonomous Testing (92% bug detection, 80% faster), Real-Time Streaming (sub-50ms, 10B+ events/sec)!
              </p>
              <p className="text-zion-slate-light text-sm mb-4">
                Build next-generation AI ecosystems with unified intelligence platforms, revolutionize QA with autonomous testing, and process billions of events with ultra-low latency streaming.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/blog/ai-2025-october-unified-intelligence-platform"
                  className="bg-violet-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-violet-600 transition-colors text-center"
                >
                  Read Latest Guides
                </Link>
                <Link
                  to="/blog"
                  className="border border-violet-400 text-violet-400 px-6 py-2 rounded-lg font-semibold hover:bg-violet-400 hover:text-white transition-colors text-center"
                >
                  Explore All Content
                </Link>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <span className="bg-violet-100/20 text-violet-200 px-3 py-1 rounded-full text-xs font-medium border border-violet-300/20">Unified AI Platform</span>
                <span className="bg-emerald-100/20 text-emerald-200 px-3 py-1 rounded-full text-xs font-medium border border-emerald-300/20">Autonomous Testing</span>
                <span className="bg-blue-100/20 text-blue-200 px-3 py-1 rounded-full text-xs font-medium border border-blue-300/20">Real-Time Streaming</span>
                <span className="bg-indigo-100/20 text-indigo-200 px-3 py-1 rounded-full text-xs font-medium border border-indigo-300/20">Sub-50ms Latency</span>
              </div>
            </div>

            {/* October 1, 2025 - PREVIOUS BREAKTHROUGH CONTENT */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-xl p-6 mb-8 animate-fade-in shadow-2xl">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
                <span className="text-lg font-bold text-cyan-400">🚀 OCTOBER 1, 2025: NEXT-GEN AI REVOLUTION</span>
                <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
              </div>
              <p className="text-white text-lg font-semibold mb-2">
                ⚡ 4 GROUNDBREAKING GUIDES RELEASED TODAY: Multimodal AI (95% accuracy), Self-Optimizing Infrastructure (70% cost savings), Responsible AI Development, and Hyper-Personalization (320% revenue boost)!
              </p>
              <p className="text-zion-slate-light text-sm mb-4">
                Master cutting-edge AI technologies that are transforming industries. Real-world implementations, battle-tested architectures, and proven results from leading enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/blog/multimodal-ai-systems-complete-guide-2025"
                  className="bg-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors text-center"
                >
                  Read Breakthrough Guides
                </Link>
                <Link
                  to="/blog"
                  className="border border-cyan-400 text-cyan-400 px-6 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-colors text-center"
                >
                  Explore All Content
                </Link>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <span className="bg-cyan-100/20 text-cyan-200 px-3 py-1 rounded-full text-xs font-medium border border-cyan-300/20">Multimodal AI</span>
                <span className="bg-blue-100/20 text-blue-200 px-3 py-1 rounded-full text-xs font-medium border border-blue-300/20">Self-Optimizing Infrastructure</span>
                <span className="bg-purple-100/20 text-purple-200 px-3 py-1 rounded-full text-xs font-medium border border-purple-300/20">Responsible AI</span>
                <span className="bg-pink-100/20 text-pink-200 px-3 py-1 rounded-full text-xs font-medium border border-pink-300/20">Hyper-Personalization</span>
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

            {/* New Content Announcement - September 30, 2025 - LATEST */}
            <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 rounded-xl p-6 mb-8 animate-fade-in">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-emerald-400 animate-pulse" />
                <span className="text-lg font-bold text-emerald-400">🔥 JUST RELEASED: AI INFRASTRUCTURE & SECURITY BREAKTHROUGHS</span>
                <Sparkles className="w-6 h-6 text-emerald-400 animate-pulse" />
              </div>
              <p className="text-white text-lg font-semibold mb-2">
                ⚡ NEW SEPTEMBER 30, 2025: Master production AI with next-gen observability (99.9% uptime), vector databases at scale (sub-100ms queries), and AI security scanning (90% fewer false positives)!
              </p>
              <p className="text-zion-slate-light text-sm mb-4">
                Comprehensive guides covering real-time monitoring, semantic search architecture, RAG systems, and intelligent code review. Build production-ready AI applications with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/blog/ai-2025-september-30-observability-monitoring-revolution"
                  className="bg-emerald-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-600 transition-colors text-center"
                >
                  Explore AI Observability
                </Link>
                <Link
                  to="/blog"
                  className="border border-emerald-400 text-emerald-400 px-6 py-2 rounded-lg font-semibold hover:bg-emerald-400 hover:text-white transition-colors text-center"
                >
                  View All Guides
                </Link>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <span className="bg-emerald-100/20 text-emerald-200 px-3 py-1 rounded-full text-xs font-medium border border-emerald-300/20">AI Observability</span>
                <span className="bg-teal-100/20 text-teal-200 px-3 py-1 rounded-full text-xs font-medium border border-teal-300/20">Vector Databases</span>
                <span className="bg-cyan-100/20 text-cyan-200 px-3 py-1 rounded-full text-xs font-medium border border-cyan-300/20">RAG Systems</span>
                <span className="bg-red-100/20 text-red-200 px-3 py-1 rounded-full text-xs font-medium border border-red-300/20">AI Security</span>
                <span className="bg-orange-100/20 text-orange-200 px-3 py-1 rounded-full text-xs font-medium border border-orange-300/20">Code Review</span>
                <span className="bg-blue-100/20 text-blue-200 px-3 py-1 rounded-full text-xs font-medium border border-blue-300/20">Production AI</span>
              </div>
            </div>
            
            {/* New Content Announcement - September 30, 2025 - Enterprise */}
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 rounded-xl p-6 mb-8 animate-fade-in">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-red-400 animate-pulse" />
                <span className="text-lg font-bold text-red-400">🚨 BREAKING SEPTEMBER 30, 2025: MISSION-CRITICAL ENTERPRISE GUIDES</span>
                <Sparkles className="w-6 h-6 text-red-400 animate-pulse" />
              </div>
              <p className="text-white text-lg font-semibold mb-2">
                ⚡ JUST RELEASED: 3 essential guides — AI-Powered DevSecOps (95% faster security), Quantum-Ready Infrastructure (beat Q-Day threats), Enterprise AI Governance (navigate regulations)!
              </p>
              <p className="text-zion-slate-light text-sm mb-4">
                Protect your organization with battle-tested strategies. Secure DevOps pipelines without bottlenecks, prepare for quantum computing threats, and build compliant AI systems that regulators approve.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/blog/ai-powered-devsecops-complete-guide-2025"
                  className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors text-center"
                >
                  Read Enterprise Guides
                </Link>
                <Link
                  to="/contact"
                  className="border border-red-400 text-red-400 px-6 py-2 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-colors text-center"
                >
                  Get Expert Help
                </Link>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <span className="bg-cyan-100/20 text-cyan-200 px-3 py-1 rounded-full text-xs font-medium border border-cyan-300/20">AI-Powered DevSecOps</span>
                <span className="bg-purple-100/20 text-purple-200 px-3 py-1 rounded-full text-xs font-medium border border-purple-300/20">Quantum Cryptography</span>
                <span className="bg-green-100/20 text-green-200 px-3 py-1 rounded-full text-xs font-medium border border-green-300/20">AI Governance</span>
                <span className="bg-red-100/20 text-red-200 px-3 py-1 rounded-full text-xs font-medium border border-red-300/20">Security Automation</span>
                <span className="bg-yellow-100/20 text-yellow-200 px-3 py-1 rounded-full text-xs font-medium border border-yellow-300/20">Post-Quantum PQC</span>
                <span className="bg-blue-100/20 text-blue-200 px-3 py-1 rounded-full text-xs font-medium border border-blue-300/20">Compliance</span>
              </div>
            </div>
            
            {/* New Content Announcement - October 2025 */}
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-xl p-6 mb-8 animate-fade-in">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
                <span className="text-lg font-bold text-purple-400">🔥 OCTOBER 2025: PRODUCTION AI EXCELLENCE</span>
                <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
              </div>
              <p className="text-white text-lg font-semibold mb-2">
                ⚡ JUST RELEASED: Complete production guides for reliable agentic workflows (99.9% uptime), robust LLM evaluation (75% fewer hallucinations), and AI cost optimization (60% savings)!
              </p>
              <p className="text-zion-slate-light text-sm mb-4">
                Battle-tested patterns from companies saving millions annually. Ship AI agents with confidence, ensure consistent quality, and dramatically reduce infrastructure costs without sacrificing performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/blog"
                  className="bg-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-600 transition-colors text-center"
                >
                  Read Production Guides
                </Link>
                <Link
                  to="/contact"
                  className="border border-purple-400 text-purple-400 px-6 py-2 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-colors text-center"
                >
                  Get Expert Help
                </Link>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <span className="bg-emerald-100/20 text-emerald-200 px-3 py-1 rounded-full text-xs font-medium border border-emerald-300/20">Agentic Workflows</span>
                <span className="bg-purple-100/20 text-purple-200 px-3 py-1 rounded-full text-xs font-medium border border-purple-300/20">LLM Evaluation</span>
                <span className="bg-blue-100/20 text-blue-200 px-3 py-1 rounded-full text-xs font-medium border border-blue-300/20">Cost Optimization</span>
                <span className="bg-pink-100/20 text-pink-200 px-3 py-1 rounded-full text-xs font-medium border border-pink-300/20">Production Patterns</span>
                <span className="bg-indigo-100/20 text-indigo-200 px-3 py-1 rounded-full text-xs font-medium border border-indigo-300/20">Quality Frameworks</span>
                <span className="bg-cyan-100/20 text-cyan-200 px-3 py-1 rounded-full text-xs font-medium border border-cyan-300/20">AI Infrastructure</span>
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
                <span className="text-lg font-bold text-purple-700">🚀 BREAKTHROUGH CONTENT SERIES</span>
                <Sparkles className="w-5 h-5 text-purple-500 animate-pulse" />
              </div>
            <p className="text-gray-700 font-semibold mb-2">
                💡 Featured: Autonomous Cost Intelligence (60% Savings), Conversational Commerce (3.5x Conversions), Predictive Infrastructure (99.999% Uptime)
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Explore cutting-edge strategies for AI-driven cost optimization, revolutionary e-commerce experiences, zero-downtime operations, plus risk playbooks, privacy‑preserving agents, and serverless inference cost optimization.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">Cost Optimization</span>
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-medium">E-Commerce AI</span>
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">Infrastructure</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">DevOps</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">AI Governance</span>
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
