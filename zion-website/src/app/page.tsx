import React from 'react'
<<<<<<< HEAD
import Link from 'next/link'
import { LightBulbIcon, CpuChipIcon, GlobeAltIcon, ShieldCheckIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { getLatestUpdates } from '@/data/updates'

const features = [
  { name: 'AI-Powered Research', description: 'Cutting-edge artificial intelligence that accelerates research and discovery across all domains.', icon: LightBulbIcon },
  { name: 'Quantum Computing', description: 'Next-generation quantum neural networks for solving complex computational problems.', icon: CpuChipIcon },
  { name: 'Global Solutions', description: 'Worldwide deployment of autonomous business operations and digital transformation.', icon: GlobeAltIcon },
  { name: 'Enterprise Security', description: 'Military-grade security protocols protecting your most valuable digital assets.', icon: ShieldCheckIcon },
  { name: 'Data Analytics', description: 'Advanced analytics and insights driving informed decision-making.', icon: ChartBarIcon },
  { name: 'Expert Team', description: 'World-class researchers and engineers pushing the boundaries of technology.', icon: UserGroupIcon }
]
=======
import { getLatestUpdates } from '../data/updates'
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

export default function HomePage() {
  const latest = getLatestUpdates(6)
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://zion.app",
    "logo": "https://zion.app/logo.png",
    "description": "Leading AI and Technology Solutions for Enterprise Innovation",
    "foundingDate": "2020",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://zion.app/contact"
    },
    "sameAs": [
      "https://twitter.com/ziontech",
      "https://linkedin.com/company/zion-tech-group"
    ],
    "offers": {
      "@type": "Offer",
      "category": "AI and Technology Services",
      "description": "Cutting-edge AI, quantum computing, and autonomous solutions"
    }
  }

  return (
    <div className="bg-black min-h-screen">
<<<<<<< HEAD
      {/* Promo banner for fresh content */}
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4 sm:p-5 text-center">
          <p className="text-sm sm:text-base font-semibold text-blue-200">
            New: Agent Rollback Patterns —
            <a href="/blog/ai-2026-agent-rollback-patterns" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">read</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Real‑Time Model Routing Playbook —
            <a href="/updates/real-time-model-routing-playbook-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">blueprint</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Real‑Time Retrieval Architectures —
            <a href="/updates/real-time-retrieval-architectures-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">guide</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Agent Posture Monitor —
            <a href="/updates/real-time-agent-posture-monitor-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">launch</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Agent Safety Red‑Team Playbooks —
            <a href="/updates/agent-safety-redteam-playbooks-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">guide</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Real‑Time Guardrail Metrics v1.1 —
            <a href="/updates/real-time-guardrail-metrics-1-1" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">blueprint</a>
            <span className="mx-2 text-blue-300/60">|</span>
            New: Real‑Time Agent Benchmark Suite —
            <a href="/updates/real-time-agent-benchmark-suite-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">launch</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Agentic Evidence Hub —
            <a href="/updates/agentic-evidence-hub-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">launch</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Evidence‑Driven Rollback Playbook —
            <a href="/updates/evidence-driven-rollback-playbook-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">guide</a>
            <span className="mx-2 text-blue-300/60">|</span>
            New: Real‑Time Agent FinOps Dashboard —
            <a href="/updates/real-time-agent-finops-dashboard-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">launch</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Zero‑Downtime Agent Rollouts —
            <a href="/blog/ai-2026-zero-downtime-agent-rollouts" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">new guide</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Zero‑Trust Agent Controllers —
            <a href="/updates/zero-trust-agent-controllers-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">launch</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Agent Playbook Library v1.0 —
            <a href="/updates/agent-playbook-library-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">launch</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Change Management Runbook (2026) —
            <a href="/updates/agent-change-management-runbook-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">guide</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Evidence Vault v1.2 —
            <a href="/updates/evidence-vault-1-2" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">launch</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Autonomous Incident Response Copilot —
            <a href="/updates/autonomous-incident-response-copilot-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">launch</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Enterprise Retrieval Guardrails —
            <a href="/updates/enterprise-retrieval-guardrails-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">guide</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Evals‑in‑Prod Control Plane (2026) —
            <a href="/updates/evals-in-prod-control-plane-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">blueprint</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Trustworthy AI Evidence Vault —
            <a href="/updates/trustworthy-ai-evidence-vault-1-2" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">launch</a>
            <span className="mx-2 text-blue-300/60">|</span>
            New: Production Evidence Bundles (2026) —
            <a href="/updates/production-evidence-bundles-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">blueprint</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Agent Posture Management —
            <a href="/updates/agent-posture-management-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">blueprint</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Agent Evidence Bundles —
            <a href="/blog/ai-2026-agent-evidence-bundles-blueprint" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">blueprint</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Canary + Shadow Testing for Agents —
            <a href="/updates/canary-and-shadow-testing-for-agents-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">field guide</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Grounded Generation Guardrails —
            <a href="/updates/grounded-generation-guardrails-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">launch</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Real‑Time Guardrail Metrics —
            <a href="/updates/real-time-guardrail-metrics-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">guide</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Safety Governance Checklist —
            <a href="/updates/agent-safety-governance-checklist-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">new guide</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Autonomous Rollback Controller —
            <a href="/updates/autonomous-rollback-controller-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">new launch</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Failure Analysis Toolkit (2026) —
            <a href="/updates/autonomous-failure-analysis-toolkit-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">report</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Real‑Time Agent FinOps Dashboard —
            <a href="/updates/real-time-agent-finops-dashboard-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">launch</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Cost Optimizer v2.0 —
            <a href="/blog/ai-2026-real-time-agent-cost-optimizer-deep-dive" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">deep dive</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Guardrail Metrics Widgets —
            <a href="/updates/real-time-agent-metrics-widgets-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">launch</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Incident Simulation Toolkit v1.1 —
            <a href="/updates/incident-simulation-toolkit-1-1" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">guide</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Agent Safety Center —
            <a href="/updates/agent-safety-center-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">new launch</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Production Agent Change Windows —
            <a href="/updates/production-agent-change-windows-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">new guide</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Evidence Ledger for AI Systems —
            <a href="/updates/evidence-ledger-for-ai-systems-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">new blueprint</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Agent Posture Trends Q3 2025 —
            <a href="/updates/agent-posture-trends-q3-2025" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">new report</a>
            <span className="mx-2 text-blue-300/60">|</span>
            <a href="/updates" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">all updates</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Latest from AI Lab —
            <a href="/reports/ai-lab" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">read now</a>
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Leading the Future of{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">AI & Technology</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Transform your business with cutting-edge artificial intelligence, quantum computing, and autonomous solutions.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/contact" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500">
              Get Started
            </a>
            <a href="/about" className="text-sm font-semibold leading-6 text-white hover:text-blue-400">
              Learn More <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Promo banner for new content */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4 sm:p-5 text-center">
          <p className="text-sm sm:text-base font-semibold text-blue-200">
            Fresh: Real‑Time Model Routing Playbook —
            <a href="/updates/real-time-model-routing-playbook-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">new blueprint</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Real‑Time Retrieval Architectures —
            <a href="/updates/real-time-retrieval-architectures-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">new guide</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Fresh: Agent Posture Monitor —
            <a href="/updates/real-time-agent-posture-monitor-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">new launch</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Agent Safety Red‑Team Playbooks —
            <a href="/updates/agent-safety-redteam-playbooks-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">new guide</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Real‑Time Guardrail Metrics v1.1 —
            <a href="/updates/real-time-guardrail-metrics-1-1" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">new blueprint</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Fresh: Real‑Time Agent Benchmark Suite —
            <a href="/updates/real-time-agent-benchmark-suite-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">new launch</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Evidence‑Driven Rollback Playbook —
            <a href="/updates/evidence-driven-rollback-playbook-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">new guide</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Fresh: Real‑Time Agent FinOps Dashboard —
            <a href="/updates/real-time-agent-finops-dashboard-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">new launch</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Zero‑Downtime Agent Releases —
            <a href="/updates/zero-downtime-agent-releases-1758081600000" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">new guide</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Zero‑Trust Agent Controllers —
            <a href="/updates/zero-trust-agent-controllers-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">new launch</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Agent Playbook Library v1.0 —
            <a href="/updates/agent-playbook-library-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">new launch</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Change Management Runbook (2026) —
            <a href="/updates/agent-change-management-runbook-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">new guide</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Evidence Vault v1.2 —
            <a href="/updates/evidence-vault-1-2" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">new launch</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Agent Observability Blueprint (2026) —
            <a href="/updates/agent-observability-blueprint-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">new guide</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Evals‑in‑Prod Control Plane (2026) —
            <a href="/updates/evals-in-prod-control-plane-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">new blueprint</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Agent Posture Management —
            <a href="/updates/agent-posture-management-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">new blueprint</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Agent Evidence Bundles —
            <a href="/blog/ai-2026-agent-evidence-bundles-blueprint" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">new blog</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Trustworthy AI Evidence Vault —
            <a href="/updates/trustworthy-ai-evidence-vault-1-2" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">new launch</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Fresh: Canary + Shadow Testing —
            <a href="/updates/canary-and-shadow-testing-for-agents-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">read the guide</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Evidence Bundles —
            <a href="/updates/production-evidence-bundles-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">blueprint</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Evidence‑First Postmortems —
            <a href="/updates/evidence-first-incident-postmortems-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">report</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Agent Billing Controls —
            <a href="/updates/agent-billing-controls-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">launch</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Evaluating Multimodal RAG —
            <a href="/updates/field-guide-evaluating-multimodal-rag" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">field guide</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Grounded Generation Guardrails —
            <a href="/updates/grounded-generation-guardrails-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">launch</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Guardrail Metrics Widgets —
            <a href="/updates/real-time-agent-metrics-widgets-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">new launch</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Incident Simulation Toolkit v1.1 —
            <a href="/updates/incident-simulation-toolkit-1-1" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">new guide</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Knowledge Graph Builder —
            <a href="/updates/autonomous-knowledge-graph-builder-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">new launch</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Evidence‑First Release Management —
            <a href="/updates/evidence-first-release-management-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">new guide</a>
            <span className="mx-2 text-blue-300/60">|</span>
            See all <a href="/updates" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">updates</a>
            <span className="mx-2 text-blue-300/60">|</span>
            New: <a href="/reports/ai-lab/articles/new-ai-lab-content-evals-in-prod-rollback-1758134400000.md" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">Evals‑in‑Prod — Rollbacks</a>
          </p>
        </div>
      </div>

      {/* Latest Updates section */}
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Latest Updates</h2>
          <p className="mt-4 text-lg text-gray-300">
            Fresh content, announcements, and courses from Zion Academy. Visit the Updates page for more.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl lg:mt-16 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {latest.map((item) => (
              <div key={item.href} className="flex flex-col justify-between rounded-2xl bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div>
                  <div className="text-xs text-blue-300">{item.tag} • <time dateTime={item.date}>{item.date ? new Date(item.date).toLocaleDateString() : 'N/A'}</time></div>
                  <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-300">{item.summary}</p>
                </div>
                <div className="mt-4">
                  <a href={item.href} className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-200">
                    Read more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-400">Everything you need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Advanced technology solutions
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our comprehensive suite of AI and technology solutions empowers organizations to achieve breakthrough results and maintain competitive advantage in the digital age.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <feature.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-gray-900">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your business?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Join thousands of organizations already using our AI and technology solutions to drive innovation and growth.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/contact" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Get started today</a>
              <a href="/about" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">Learn more <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </div>
=======
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      {/* Hero Section with improved accessibility and performance */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-24 sm:py-36 lg:py-40">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Leading the Future of{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                AI & Technology
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Transform your business with cutting-edge AI, quantum computing, and autonomous solutions that drive innovation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
              <a 
                href="/contact" 
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 transform hover:scale-105"
                aria-label="Get started with our services"
              >
                Get Started
              </a>
              <a 
                href="/about" 
                className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200 flex items-center gap-1"
                aria-label="Learn more about our company"
              >
                Learn More 
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>

      {/* Enhanced promo banner with better accessibility */}
      <div className="mx-auto max-w-7xl px-6 mt-16">
        <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 sm:p-8 text-center backdrop-blur-sm">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="inline-flex items-center rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-300 ring-1 ring-blue-500/30">
              🚀 New Release
            </span>
          </div>
          <p className="text-sm sm:text-base font-semibold text-blue-200">
            AI Governance Maturity Model (2026) —
            <a 
              href="/updates/ai-governance-maturity-model-2026" 
              className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded"
              aria-label="Read the AI Governance Maturity Model framework"
            >
              read the framework
            </a>
            <span className="mx-2 text-blue-300/60" aria-hidden="true">|</span>
            See all <a 
              href="/updates" 
              className="underline decoration-blue-300/60 underline-offset-4 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded"
              aria-label="View all updates and announcements"
            >
              updates
            </a>
          </p>
        </div>
      </div>

      {/* Enhanced updates section with better performance */}
      <section className="mx-auto mt-16 max-w-7xl px-6 lg:px-8" aria-labelledby="updates-heading">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">What's New</h2>
          <p id="updates-heading" className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Latest Updates
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Fresh content, announcements, and cutting-edge research drops from our AI innovation labs.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 lg:mt-16 lg:max-w-none lg:grid-cols-3">
          {latest.map((item, index) => (
            <article 
              key={item.href} 
              className="group relative flex flex-col items-start bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-2 text-xs text-blue-300 mb-3">
                <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2 py-1 ring-1 ring-inset ring-blue-500/20 font-medium">
                  {item.tag}
                </span>
                {item.date && (
                  <time dateTime={item.date} className="text-gray-400">
                    {new Date(item.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </time>
                )}
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-blue-100 transition-colors duration-200">
                <a 
                  href={item.href} 
                  className="focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded"
                  aria-label={`Read more about ${item.title}`}
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  {item.title}
                </a>
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-300 line-clamp-3">
                {item.summary}
              </p>
              <div className="mt-6 flex items-center text-sm font-semibold leading-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-200">
                <a 
                  href={item.href}
                  className="flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded"
                  aria-label={`Read full article: ${item.title}`}
                >
                  Read more 
                  <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <a 
            href="/updates" 
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600/10 border border-blue-500/30 px-6 py-3 text-sm font-semibold text-blue-300 hover:text-white hover:bg-blue-600/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="View all updates and announcements"
          >
            View all updates 
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </section>

      {/* Enhanced footer section */}
      <footer className="mt-24 border-t border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold text-white">Innovation at Scale</h3>
              <p className="mt-2 text-sm text-gray-300">
                Transforming enterprises with cutting-edge AI, quantum computing, and autonomous solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li><a href="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Services</a></li>
                <li><a href="/solutions" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Solutions</a></li>
                <li><a href="/research" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Research</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
              <p className="mt-2 text-sm text-gray-300">
                Get the latest insights on AI innovation and enterprise technology.
              </p>
              <a 
                href="/updates" 
                className="mt-4 inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                Subscribe to updates <span aria-hidden="true" className="ml-1">→</span>
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2025 Zion Tech Group. Leading the future of AI & Technology.
            </p>
          </div>
        </div>
      </footer>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
    </div>
  )
}