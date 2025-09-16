import { getLatestUpdates } from "../data/updates"

export default function HomePage() {
  const latest = getLatestUpdates(6)
  return (
    <div className="bg-black">
      {/* Promo banner */}
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4 sm:p-5 text-center">
            <p className="text-sm sm:text-base font-semibold text-blue-200">
              New: Real-Time Agent Cost Controller v1.0 —
              <a href="/updates/real-time-agent-cost-controller-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">cost controller</a>
              <span className="mx-2 text-blue-300/60">|</span>
              <a href="/updates/autonomous-analytics-copilot-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">analytics launch</a>
              <span className="mx-2 text-blue-300/60">|</span>
              <a href="/updates/autonomous-security-copilot-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">security launch</a>
              <span className="mx-2 text-blue-300/60">|</span>
              <a href="/updates/autonomous-decision-engine-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">decision engine</a>
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
              <a href="#whats-new" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
                What’s New <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
              <a
                href="/updates/autonomous-analytics-copilot-1-0"
                className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200 hover:bg-blue-500/20 transition-colors duration-200"
              >
                New Launch: Analytics Copilot v1.0
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/autonomous-it-ops-copilot-1-0"
                className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-200 hover:bg-indigo-500/20 transition-colors duration-200"
              >
                New Launch: Analytics Copilot v1.0
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/autonomous-innovation-hub-1-0"
                className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-200 hover:bg-purple-500/20 transition-colors duration-200"
              >
                Launch: Innovation Hub v1.0
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
                href="/updates/real-time-agent-cost-controller-1-0"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/20 transition-colors duration-200"
              >
                Launch: Cost Controller v1.0
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
              <a
                href="/updates/autonomous-retail-fulfillment"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/20 transition-colors duration-200"
              >
                Case Study: Autonomous Retail Fulfillment
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* What's New section (Latest Updates from data) */}
      <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">What's New</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Latest Updates</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Transform your business with cutting-edge artificial intelligence, quantum computing, and autonomous solutions.
            Join the revolution that is reshaping industries worldwide.
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
        </div>
        
        <div className="mt-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Latest Updates</h2>
            <p className="mt-4 text-lg text-gray-300">Stay informed with our latest content and announcements</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {latest.map((item) => (
              <div key={item.title} className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-3">
                  <a href={item.href} className="hover:text-blue-400 transition-colors duration-200">
                    {item.title}
                  </a>
                </h3>
                <p className="text-sm text-gray-300 mb-4">{item.summary}</p>
                <a href={item.href} className="text-sm font-semibold text-blue-400 hover:text-blue-300">
                  Read more <span aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
