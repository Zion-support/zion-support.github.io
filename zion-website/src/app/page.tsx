import {
  ChartBarIcon,
  CpuChipIcon,
  GlobeAltIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import { getLatestUpdates } from '../data/updates'

const features = [
  {
    name: 'AI-Powered Research',
    description:
      'Cutting-edge artificial intelligence that accelerates research and discovery across all domains.',
    icon: LightBulbIcon
  },
  {
    name: 'Quantum Computing',
    description:
      'Next-generation quantum neural networks for solving complex computational problems.',
    icon: CpuChipIcon
  },
  {
    name: 'Global Solutions',
    description:
      'Worldwide deployment of autonomous business operations and digital transformation.',
    icon: GlobeAltIcon
  },
  {
    name: 'Enterprise Security',
    description:
      'Military-grade security protocols protecting your most valuable digital assets.',
    icon: ShieldCheckIcon
  },
  {
    name: 'Data Analytics',
    description: 'Advanced analytics and insights driving informed decision-making.',
    icon: ChartBarIcon
  },
  {
    name: 'Expert Team',
    description:
      'World-class researchers and engineers pushing the boundaries of technology.',
    icon: UserGroupIcon
  }
]

const stats = [
  { name: 'Research Papers Published', value: '150+' },
  { name: 'AI Models Deployed', value: '500+' },
  { name: 'Global Clients', value: '1000+' },
  { name: 'Patents Filed', value: '25+' }
]

const solutions = [
  {
    name: 'AI Research Assistant',
    description: 'Autonomous research platform that accelerates scientific discovery.',
    href: '/solutions/ai-autonomous-research'
  },
  {
    name: 'Quantum Neural Networks',
    description: 'Next-generation computing for complex problem solving.',
    href: '/solutions/quantum-neural-networks'
  },
  {
    name: 'Autonomous Business Operations',
    description: 'AI-powered automation for enterprise efficiency.',
    href: '/solutions/autonomous-business'
  },
  {
    name: 'IT Asset Management',
    description: 'Intelligent management of digital infrastructure.',
    href: '/solutions/it-asset-management'
  }
]

export default function HomePage() {
  return (
    <div className="bg-black">
      {/* Promo banner */}
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4 sm:p-5 text-center">
            <p className="text-sm sm:text-base font-semibold text-blue-200">
              New: Analytics & Security Copilots v1.0 —
              <a href="/updates/autonomous-analytics-copilot-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">analytics launch</a>
              <span className="mx-2 text-blue-300/60">|</span>
              <a href="/updates/autonomous-security-copilot-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">security launch</a>
              <span className="mx-2 text-blue-300/60">|</span>
              <a href="/updates/autonomous-knowledge-ops-suite-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">knowledge ops suite</a>
              <span className="mx-2 text-blue-300/60">|</span>
              <a href="/updates/production-guardrails-tool-use-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">guardrails guide</a>
              <span className="mx-2 text-blue-300/60">|</span>
              <a href="/updates" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">see all updates</a>
            </p>
          </div>
        </div>
      </div>
      {/* Hero section */}
      <div className="relative isolate px-6 pt-8 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Leading the Future of{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                AI & Technology
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Transform your business with cutting-edge artificial intelligence, quantum computing, and autonomous solutions. 
              Join the revolution that's reshaping industries worldwide.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105"
              >
                Get Started
              </a>
              <a href="/about" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
                Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
              <a
                href="/updates/autonomous-analytics-copilot-1-0"
                className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-200 hover:bg-indigo-500/20 transition-colors duration-200"
              >
                New Launch: Analytics Copilot v1.0
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/autonomous-security-copilot-1-0"
                className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200 hover:bg-blue-500/20 transition-colors duration-200"
              >
                New Launch: Security Copilot v1.0
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/agent-runbooks-live-evals"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/20 transition-colors duration-200"
              >
                New Guide: Agent Runbooks Live Evals
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/agentic-ops-control-center-1-0"
                className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-200 hover:bg-indigo-500/20 transition-colors duration-200"
              >
                New Launch: Agentic Ops Control Center
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/autonomous-finance-os-1-0"
                className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-2 text-sm font-semibold text-fuchsia-200 hover:bg-fuchsia-500/20 transition-colors duration-200"
              >
                Launch: Autonomous Finance OS v1.0
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/auto-data-governance-v3"
                className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-200 hover:bg-amber-500/20 transition-colors duration-200"
              >
                Launch: Data Governance v3
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/ai-research-assistant-2-0"
                className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-2 text-sm font-semibold text-teal-200 hover:bg-teal-500/20 transition-colors duration-200"
              >
                Launch: AI Research Assistant 2.0
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/ai-agent-safety-certification-beta"
                className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-200 hover:bg-green-500/20 transition-colors duration-200"
              >
                New: Agent Safety Certification (Beta)
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/ai-trends-radar-2025"
                className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200 hover:bg-blue-500/20 transition-colors duration-200"
              >
                Report: AI Trends Radar 2025
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/agent-benchmark-suite-v2"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/20 transition-colors duration-200"
              >
                Launch: Benchmark Suite v2
                <span aria-hidden>→</span>
              </a>
              <a
                href="/blog/ai-2026-policy-as-code-production-blueprint"
                className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-200 hover:bg-purple-500/20 transition-colors duration-200"
              >
                Blueprint: Policy‑as‑Code in Production
                <span aria-hidden>→</span>
              </a>
              <a
                href="/blog/ai-2026-agent-red-teaming-field-guide"
                className="inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-rose-500/10 px-4 py-2 text-sm font-semibold text-rose-200 hover:bg-rose-500/20 transition-colors duration-200"
              >
                Guide: Agent Red‑Teaming Field Guide
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/production-guardrails-tool-use-2026"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-colors duration-200"
              >
                Guide: Tool‑Use Guardrails 2026
                <span aria-hidden>→</span>
              </a>
              <a
                href="/blog/ai-2026-sovereign-ai-commerce"
                className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-200 hover:bg-amber-500/20 transition-colors duration-200"
              >
                New: Sovereign AI Commerce
                <span aria-hidden>→</span>
              </a>
              <a
                href="/blog/ai-2026-enterprise-rag-observability"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200 hover:bg-cyan-500/20 transition-colors duration-200"
              >
                Guide: Enterprise RAG Observability
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/autonomous-procurement-copilot-1-0"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/20 transition-colors duration-200"
              >
                Launch: Procurement Copilot v1.0
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/ai-governance-readiness-2026"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200 hover:bg-cyan-500/20 transition-colors duration-200"
              >
                Report: AI Governance Readiness
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/agent-ops-slo-dashboards-v2"
                className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-500/10 px-4 py-2 text-sm font-semibold text-lime-200 hover:bg-lime-500/20 transition-colors duration-200"
              >
                Feature: Agent Ops SLO v2
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/autonomous-compliance-auditor-1-1"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/20 transition-colors duration-200"
              >
                Launch: Compliance Auditor v1.1
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/agent-policy-as-code-starter-kit"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/20 transition-colors duration-200"
              >
                Launch: Policy-as-Code Starter Kit
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/ai-lab-research-datasets-portal"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200 hover:bg-cyan-500/20 transition-colors duration-200"
              >
                Report: Research Datasets Portal
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/secure-agent-operations-blueprint-2026"
                className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-200 hover:bg-purple-500/20 transition-colors duration-200"
              >
                Blueprint: Secure Agent Ops 2026
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/agentic-ops-control-center-2-2"
                className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-2 text-sm font-semibold text-fuchsia-200 hover:bg-fuchsia-500/20 transition-colors duration-200"
              >
                Launch: Ops Control Center v2.2
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/autonomous-compliance-copilot-1-0"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/20 transition-colors duration-200"
              >
                Launch: Compliance Copilot v1.0
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/ai-procurement-playbook-2026"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-colors duration-200"
              >
                Guide: AI Procurement 2026
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/ai-content-studio-2-1"
                className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-200 hover:bg-violet-500/20 transition-colors duration-200"
              >
                Product: Content Studio 2.1
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/ai-lab-research-portal-2-0"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200 hover:bg-cyan-500/20 transition-colors duration-200"
              >
                Launch: AI Lab Research Portal 2.0
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/production-rag-evals-starter-pack"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-colors duration-200"
              >
                Guide: Production RAG Evals Pack
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/autonomous-research-copilot-1-1"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/20 transition-colors duration-200"
              >
                Launch: Research Copilot v1.1
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/state-of-real-time-rag-2026"
                className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200 hover:bg-blue-500/20 transition-colors duration-200"
              >
                Report: Real-Time RAG 2026 Preview
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/autonomous-incident-response-1-0"
                className="inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-200 hover:bg-red-500/20 transition-colors duration-200"
              >
                Launch: Incident Response v1.0
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/enterprise-retrieval-observability-2026"
                className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-200 hover:bg-amber-500/20 transition-colors duration-200"
              >
                Report: Retrieval Observability 2026
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/ai-lab-research-portal"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200 hover:bg-cyan-500/20 transition-colors duration-200"
              >
                Launch: AI Lab Research Portal
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/autonomous-ops-control-center-2-0"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200 hover:bg-cyan-500/20 transition-colors duration-200"
              >
                Launch: Ops Control Center 2.0
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/mentor-office-hours"
                className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-200 hover:bg-green-500/20 transition-colors duration-200"
              >
                New: Mentor Office Hours
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/compliance-auditor-1-0"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/20 transition-colors duration-200"
              >
                Launch: Compliance Auditor v1.0
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/autonomous-support-copilot-1-2"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/20 transition-colors duration-200"
              >
                Launch: Support Copilot v1.2
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/genai-executive-course"
                className="inline-flex items-center gap-2 rounded-full border border-pink-400/30 bg-pink-500/10 px-4 py-2 text-sm font-semibold text-pink-200 hover:bg-pink-500/20 transition-colors duration-200"
              >
                New Course: GenAI for Executives
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/progress-streaks-badges"
                className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200 hover:bg-blue-500/20 transition-colors duration-200"
              >
                Feature: Streaks & Badges
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/agent-safety-toolkit-v1"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/20 transition-colors duration-200"
              >
                Launch: Agent Safety Toolkit v1
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/autonomous-ops-playbook-2026"
                className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-200 hover:bg-purple-500/20 transition-colors duration-200"
              >
                Course: AI Fundamentals v2.1
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/secure-prompt-engineering-2025"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-colors duration-200"
              >
                Guide: Secure Prompt Engineering 2025
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/state-of-ai-governance-2026-preview"
                className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-200 hover:bg-amber-500/20 transition-colors duration-200"
              >
                Report: AI Governance 2026 Preview
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/cost-aware-routing-live-evals"
                className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-200 hover:bg-sky-500/20 transition-colors duration-200"
              >
                Blueprint: Cost-Aware Routing
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/ai-compliance-readiness-2026"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-colors duration-200"
              >
                Report: AI Compliance Readiness 2026
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/autonomous-finance-os-1-1"
                className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-2 text-sm font-semibold text-fuchsia-200 hover:bg-fuchsia-500/20 transition-colors duration-200"
              >
                Launch: Autonomous Finance OS v1.1
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* What's New section */}
      <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">What's New</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Latest Updates</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Fresh content, announcements, and courses from Zion Academy. Visit the Updates page for more.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl lg:mt-16 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {getLatestUpdates(6).map((item) => (
              <article key={item.title} className="flex flex-col items-start bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg font-semibold leading-6 text-white">
                  <a href={item.href} className="hover:text-blue-400 transition-colors duration-200">
                    <span className="absolute inset-0" />
                    {item.title}
                  </a>
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-300">{item.summary}</p>
                <a href={item.href} className="mt-6 text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
                  Read more <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Latest on the blog */}
      <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Latest on the blog</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Just published</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            New articles on enterprise AI, security, and autonomous systems.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl lg:mt-16 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: 'AI 2026: Trustworthy Model Routing',
                summary:
                  'Policy‑aware, evaluation‑driven routing balancing quality, latency, and cost with audit evidence.',
                href: '/blog/ai-2026-trustworthy-model-routing'
              },
              {
                title: 'AI 2026: Policy‑as‑Code in Production — Blueprint',
                summary:
                  'Operationalize governance with executable policies, CI/CD gates, and audit‑ready evidence.',
                href: '/blog/ai-2026-policy-as-code-production-blueprint'
              },
              {
                title: 'AI 2026: Generative AI Risk Register',
                summary:
                  'Templates, owners, mitigations, and audit evidence to operationalize AI risk.',
                href: '/blog/ai-2026-generative-ai-risk-register'
              },
              {
                title: 'AI 2026: Real‑Time Retrieval Architectures',
                summary:
                  'Low‑latency hybrid retrieval patterns with grounding, evals, and rollout controls.',
                href: '/blog/ai-2026-real-time-retrieval-architectures'
              }
            ].map((item) => (
              <article key={item.title} className="flex flex-col items-start bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg font-semibold leading-6 text-white">
                  <a href={item.href} className="hover:text-blue-400 transition-colors duration-200">
                    <span className="absolute inset-0" />
                    {item.title}
                  </a>
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-300">{item.summary}</p>
                <a href={item.href} className="mt-6 text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
                  Read more <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Advanced Technology</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to accelerate innovation
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our comprehensive suite of AI and technology solutions empowers organizations to achieve breakthrough results 
            and maintain competitive advantage in the digital age.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col group">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href="/solutions" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Stats section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by leading organizations worldwide
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">Our track record speaks for itself</p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col bg-white/5 p-8 backdrop-blur-sm">
                <dt className="text-sm font-semibold leading-6 text-gray-300">{stat.name}</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to transform your business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Join the AI revolution and discover how our cutting-edge technology can accelerate your growth and innovation.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 hover:scale-105"
            >
              Get Started
            </a>
            <a href="/solutions" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
              View Solutions <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

