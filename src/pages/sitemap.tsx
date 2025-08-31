import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Zap, 
  Brain, 
  Server, 
  Target, 
  Building2, 
  FileText,
  Rocket,
  Star,
  Atom,
  Cloud,
  Shield,
  Cpu,
  Network,
  Wifi,
  PenTool,
  TrendingUp,
  Users,
  Calendar,
  BookOpen,
  Video,
  GraduationCap,
  Lightbulb,
  MessageCircle,
  Workflow,
  BarChart3,
  Database,
  Monitor,
  Smartphone,
  Satellite,
  Leaf
} from 'lucide-react';

export default function Sitemap() {
  const mainPages = [
    { name: "Home", href: "/", icon: Globe },
    { name: "About Us", href: "/about", icon: Building2 },
    { name: "Contact", href: "/contact", icon: Users },
    { name: "Leadership", href: "/leadership", icon: Star },
    { name: "Careers", href: "/careers", icon: Rocket },
    { name: "News", href: "/news", icon: FileText },
    { name: "Events", href: "/events", icon: Calendar },
    { name: "Partners", href: "/partners", icon: Users },
    { name: "Help & Support", href: "/help", icon: MessageCircle },
    { name: "Pricing", href: "/pricing", icon: BarChart3 },
    { name: "Blog", href: "/blog", icon: BookOpen },
    { name: "Documentation", href: "/docs", icon: BookOpen },
    { name: "White Papers", href: "/white-papers", icon: FileText },
    { name: "Webinars", href: "/webinars", icon: Video },
    { name: "Training", href: "/training", icon: GraduationCap },
    { name: "Research & Development", href: "/research-development", icon: Lightbulb },
    { name: "Case Studies", href: "/case-studies", icon: FileText },
    { name: "Request Quote", href: "/request-quote", icon: TrendingUp },
    { name: "Marketplace", href: "/marketplace", icon: ShoppingCart },
    { name: "Sign Up", href: "/signup", icon: Users }
  ];

  const aiServices = [
    { name: "AI Enterprise Automation Platform", href: "/services/ai-enterprise-automation-platform", icon: Brain },
    { name: "AI Enterprise Intelligence Platform", href: "/services/ai-enterprise-intelligence-platform", icon: Brain },
    { name: "AI Data Analytics Platform", href: "/services/ai-data-analytics-platform", icon: BarChart3 },
    { name: "AI Business Intelligence", href: "/services/ai-business-intelligence", icon: TrendingUp },
    { name: "AI Cybersecurity Platform", href: "/services/ai-cybersecurity-platform", icon: Shield },
    { name: "AI Autonomous Research Assistant", href: "/services/ai-autonomous-research-assistant", icon: Brain },
    { name: "AI Financial Trading Platform", href: "/services/ai-financial-trading-platform", icon: TrendingUp },
    { name: "AI Healthcare Platform", href: "/services/ai-healthcare-platform", icon: Shield },
    { name: "AI Quantum Hybrid Platform", href: "/services/ai-quantum-hybrid-platform", icon: Atom },
    { name: "AI Quantum Neural Network Platform", href: "/services/ai-quantum-neural-network-platform", icon: Atom },
    { name: "AI Supply Chain Optimization", href: "/services/ai-supply-chain-optimization", icon: Workflow },
    { name: "AI Sales Copilot", href: "/services/ai-sales-copilot", icon: TrendingUp },
    { name: "AI Compliance Assistant", href: "/services/ai-compliance-assistant", icon: Shield },
    { name: "AI Content Creation Studio", href: "/services/ai-content-creation-studio", icon: PenTool },
    { name: "AI Business Intelligence Dashboard", href: "/services/ai-business-intelligence-dashboard", icon: BarChart3 },
    { name: "AI Customer Support Automation", href: "/services/ai-customer-support-automation", icon: MessageCircle },
    { name: "AI Project Management Platform", href: "/services/ai-project-management-platform", icon: Workflow },
    { name: "AI Marketing Automation Platform", href: "/services/ai-marketing-automation-platform", icon: TrendingUp }
  ];

  const itInfrastructureServices = [
    { name: "IT Infrastructure Management", href: "/services/it-infrastructure-management", icon: Server },
    { name: "Cloud & DevOps", href: "/services/cloud-devops", icon: Cloud },
    { name: "Cybersecurity", href: "/services/cybersecurity", icon: Shield },
    { name: "Digital Transformation", href: "/services/digital-transformation", icon: Rocket },
    { name: "AI Quantum Computing Solutions", href: "/services/ai-quantum-computing-solutions", icon: Atom },
    { name: "Edge Computing Solutions", href: "/services/edge-computing-solutions", icon: Cpu },
    { name: "Blockchain Enterprise Solutions", href: "/services/blockchain-enterprise-solutions", icon: Network },
    { name: "IoT & Edge Computing", href: "/services/iot-edge", icon: Wifi },
    { name: "Cloud FinOps Optimizer", href: "/services/cloud-finops-optimizer", icon: Cloud }
  ];

  const microSaasServices = [
    { name: "Micro SaaS Solutions Comprehensive", href: "/services/micro-saas-solutions-comprehensive", icon: Zap },
    { name: "AI Workflow Orchestrator", href: "/services/ai-workflow-orchestrator", icon: Workflow },
    { name: "AI Predictive Maintenance", href: "/services/ai-predictive-maintenance", icon: Activity },
    { name: "AI HR Platform", href: "/services/ai-hr-platform", icon: Users },
    { name: "AI Financial Trading Risk Management", href: "/services/ai-financial-trading-risk-management", icon: Shield }
  ];

  const emergingTechServices = [
    { name: "Space Technology", href: "/services/space-tech", icon: Satellite },
    { name: "Sustainability Solutions", href: "/services/sustainability", icon: Leaf },
    { name: "Green IT", href: "/services/green-it", icon: Leaf },
    { name: "Quantum Technology", href: "/services/quantum-technology", icon: Atom },
    { name: "AI IoT Edge Computing Platform", href: "/services/ai-iot-edge-computing-platform", icon: Wifi },
    { name: "AI DevOps Automation Platform", href: "/services/ai-devops-automation-platform", icon: Workflow },
    { name: "AI Cybersecurity Suite", href: "/services/ai-cybersecurity-suite", icon: Shield },
    { name: "AI Content Optimizer Pro", href: "/services/ai-content-optimizer-pro", icon: PenTool }
  ];

  const industrySolutions = [
    { name: "Healthcare Solutions", href: "/solutions/healthcare", icon: Shield },
    { name: "Financial Solutions", href: "/solutions/financial", icon: DollarSign },
    { name: "Manufacturing Solutions", href: "/solutions/manufacturing", icon: Cog },
    { name: "Government Solutions", href: "/solutions/government", icon: Building2 },
    { name: "Retail Solutions", href: "/solutions/retail", icon: ShoppingCart },
    { name: "Enterprise Solutions", href: "/enterprise", icon: Building2 },
    { name: "Digital Transformation", href: "/digital-transformation", icon: Rocket },
    { name: "Cloud Solutions", href: "/cloud-solutions", icon: Cloud },
    { name: "Emerging Technology", href: "/emerging-tech", icon: Lightbulb }
  ];

  const technologySolutions = [
    { name: "Quantum Edge Computing", href: "/solutions/quantum-edge-computing", icon: Atom },
    { name: "AI Autonomous Business", href: "/solutions/ai-autonomous-business", icon: Brain },
    { name: "Blockchain & Web3", href: "/solutions/blockchain-web3", icon: Network },
    { name: "IoT Edge Computing", href: "/solutions/iot-edge-computing", icon: Wifi },
    { name: "Space Technology", href: "/solutions/space-tech", icon: Satellite }
  ];

  const showcasePages = [
    { name: "Innovative Services Showcase 2026", href: "/innovative-services-showcase-2026", icon: Star },
    { name: "Comprehensive Services Showcase 2025", href: "/comprehensive-services-showcase-2025", icon: Star },
    { name: "Innovative AI Services Showcase 2025", href: "/innovative-ai-services-showcase-2025", icon: Star }
  ];

  const legalPages = [
    { name: "Privacy Policy", href: "/privacy", icon: Shield },
    { name: "Terms of Service", href: "/terms", icon: FileText },
    { name: "Cookie Policy", href: "/cookies", icon: FileText },
    { name: "Accessibility", href: "/accessibility", icon: Users },
    { name: "Security", href: "/security", icon: Shield },
    { name: "Compliance", href: "/compliance", icon: Shield }
  ];

  const renderSection = (title: string, items: any[], icon: any) => (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
        <icon className="w-5 h-5 mr-2 text-zion-cyan" />
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="text-zinc-400 hover:text-zion-cyan transition-colors text-sm flex items-center p-2 rounded hover:bg-zinc-800/50"
          >
            <item.icon className="w-4 h-4 mr-2 text-zinc-500" />
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Sitemap | Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all pages, services, and solutions organized by category." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/sitemap" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Globe className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Website
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {" "}Sitemap
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Complete overview of all pages, services, and solutions available on the Zion Tech Group website. 
                Navigate efficiently and find exactly what you're looking for.
              </p>
            </div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {renderSection("Main Pages", mainPages, Globe)}
            {renderSection("AI & Automation Services", aiServices, Brain)}
            {renderSection("IT & Infrastructure Services", itInfrastructureServices, Server)}
            {renderSection("Micro SaaS Services", microSaasServices, Zap)}
            {renderSection("Emerging Technology Services", emergingTechServices, Rocket)}
            {renderSection("Industry Solutions", industrySolutions, Target)}
            {renderSection("Technology Solutions", technologySolutions, Cpu)}
            {renderSection("Showcase Pages", showcasePages, Star)}
            {renderSection("Legal & Policy Pages", legalPages, Shield)}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-blue-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team for personalized assistance and custom solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Us
              </Link>
              <Link 
                to="/request-quote"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// Missing icon components
const ShoppingCart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
  </svg>
);

const DollarSign = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
  </svg>
);

const Cog = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const Activity = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);