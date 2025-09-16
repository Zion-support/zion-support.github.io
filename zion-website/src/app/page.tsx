<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
<<<<<<< HEAD
  ChartBarIcon,
  { name: 'Global Clients', value: '1,000+' },
  { name: 'Patents Filed', value: '25+' },
]
>>>>>>> 6995d05efbf958465be8e251001703bdbc87a50a

const solutions = [
  { name: 'Global Clients', value: '1000+' },
  { name: 'Patents Filed', value: '25+' }
]

<<<<<<< HEAD
export default page;
=======
// @ts-nocheck
import { getLatestUpdates } from '@/data/updates'
import { ChartBarIcon, CpuChipIcon, GlobeAltIcon, LightBulbIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline'
=======
>>>>>>> cursor/create-and-deploy-new-content-2def
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 6b23b02814abc4e2b48cf43d809846f0fbf77db0
=======
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
import React from 'react'
import {
  ChartBarIcon,
  CpuChipIcon,
  GlobeAltIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7ef5dc338d47c97be3767ff413cd3dbb4ee379e3
=======
>>>>>>> cursor/create-and-deploy-new-content-81d0
>>>>>>> 6b23b02814abc4e2b48cf43d809846f0fbf77db0
=======
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
import { getLatestUpdates } from '../data/updates'
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5

const features = [
  { name: 'AI-Powered Research', description: 'Cutting-edge artificial intelligence that accelerates research and discovery across all domains.', icon: LightBulbIcon },
  { name: 'Quantum Computing', description: 'Next-generation quantum neural networks for solving complex computational problems.', icon: CpuChipIcon },
  { name: 'Global Solutions', description: 'Worldwide deployment of autonomous business operations and digital transformation.', icon: GlobeAltIcon },
  { name: 'Enterprise Security', description: 'Military-grade security protocols protecting your most valuable digital assets.', icon: ShieldCheckIcon },
  { name: 'Data Analytics', description: 'Advanced analytics and insights driving informed decision-making.', icon: ChartBarIcon },
  { name: 'Expert Team', description: 'World-class researchers and engineers pushing the boundaries of technology.', icon: UserGroupIcon },
]

const stats = [
  { name: 'Research Papers Published', value: '150+' },
  { name: 'AI Models Deployed', value: '500+' },
  { name: 'Global Clients', value: '1,000+' },
  { name: 'Patents Filed', value: '25+' },
]

const solutions = [
  { name: 'AI Research Assistant', description: 'Autonomous research platform that accelerates scientific discovery.', href: '/solutions/ai-autonomous-research' },
  { name: 'Quantum Neural Networks', description: 'Next-generation computing for complex problem solving.', href: '/solutions/quantum-neural-networks' },
  { name: 'Autonomous Business Operations', description: 'AI-powered automation for enterprise efficiency.', href: '/solutions/autonomous-business' },
  { name: 'IT Asset Management', description: 'Intelligent management of digital infrastructure.', href: '/solutions/it-asset-management' },
]

<<<<<<< HEAD
export default function HomePage() {
  const latest = getLatestUpdates(6)

  return (
    <div className="bg-black min-h-screen">
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
=======
const whatsNew = [
  {
<<<<<<< HEAD
    title: 'Agent Safety Red Teaming 2025',
    desc: 'Practical playbooks to probe, stress, and harden multi‑agent systems.',
    href: '/blog/agent-safety-red-teaming-2025',
    tag: 'New',
  },
  {
    title: 'AI Automation Case Studies 2025',
    desc: 'Five deployments with measurable KPIs from MTTR to margin uplift.',
    href: '/blog/ai-automation-case-studies-2025',
    tag: 'New',
  },
  {
=======
>>>>>>> cursor/create-and-deploy-new-content-2def
    title: 'Edge AI Inference v1.2',
    desc: 'Run models 3x faster on edge devices with quantization-aware serving.',
    href: '/solutions/edge-ai-inference',
    tag: 'New',
  },
<<<<<<< HEAD
]

=======
import { getLatestUpdates } from '../data/updates'

>>>>>>> 8431d4330936f866c5677d40e9bd7fbc17755535
=======
  {
    title: 'GenAI Content Studio',
    desc: 'Launch multi-channel AI content with approvals, analytics, and guardrails.',
    href: '/solutions/genai-content-studio',
    tag: 'New',
  },
  {
    title: 'Security Copilot',
    desc: 'AI-driven incident response and continuous posture hardening for enterprises.',
    href: '/solutions/security-copilot',
    tag: 'Beta',
  },
]

>>>>>>> cursor/create-and-deploy-new-content-2def
export default function HomePage() {
  return (
    <div className="bg-black">
      {/* Promo banner */}
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4 sm:p-5 text-center">
            <p className="text-sm sm:text-base font-semibold text-blue-200">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
              New: Real-Time Agent Cost Controller v1.0 —
              <a href="/updates/real-time-agent-cost-controller-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">cost controller</a>
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-3afb
<<<<<<< HEAD
>>>>>>> 8431d4330936f866c5677d40e9bd7fbc17755535
=======
>>>>>>> cursor/create-and-deploy-new-content-dc9e
>>>>>>> 6b23b02814abc4e2b48cf43d809846f0fbf77db0
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
              New: Real-Time AI Analytics Dashboard v3.0 —
              <a href="/updates/real-time-ai-analytics-dashboard-v3-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">analytics dashboard</a>
              <span className="mx-2 text-blue-300/60">|</span>
              AI Agent Orchestration Platform v2.0 —
              <a href="/updates/ai-agent-orchestration-platform-2-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">orchestration platform</a>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 8431d4330936f866c5677d40e9bd7fbc17755535
=======
              New: AI Autonomous Workflow Engine v1.0 —
              <a href="/updates/ai-autonomous-workflow-engine-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">workflow engine</a>
=======
              New: Real-Time Agent Cost Controller v1.0 —
              <a href="/updates/real-time-agent-cost-controller-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">cost controller</a>
>>>>>>> cursor/create-and-deploy-new-content-2def
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-dc9e
>>>>>>> 6b23b02814abc4e2b48cf43d809846f0fbf77db0
=======
              New: AI Autonomous Workflow Engine v1.0 —
              <a href="/updates/ai-autonomous-workflow-engine-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">workflow engine</a>
>>>>>>> cursor/create-and-deploy-new-content-23cd
=======
              New: Real-Time Agent Cost Controller v1.0 —
              <a href="/updates/real-time-agent-cost-controller-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">cost controller</a>
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
              <span className="mx-2 text-blue-300/60">|</span>
              <a href="/updates/autonomous-analytics-copilot-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">analytics launch</a>
              <span className="mx-2 text-blue-300/60">|</span>
              <a href="/updates/autonomous-security-copilot-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">security launch</a>
              <span className="mx-2 text-blue-300/60">|</span>
              <a href="/updates/autonomous-decision-engine-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">decision engine</a>
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-8472
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-3afb
<<<<<<< HEAD
>>>>>>> 8431d4330936f866c5677d40e9bd7fbc17755535
=======
>>>>>>> cursor/create-and-deploy-new-content-2def
=======
>>>>>>> cursor/create-and-deploy-new-content-dc9e
>>>>>>> 6b23b02814abc4e2b48cf43d809846f0fbf77db0
=======
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
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
                href="/updates/autonomous-data-quality-copilot-1-0"
                className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200 hover:bg-blue-500/20 transition-colors duration-200"
              >
<<<<<<< HEAD
                Launch: Data Quality Copilot v1.0
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/agent-benchmark-suite-v2"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/20 transition-colors duration-200"
              >
                Launch: Benchmark Suite v2
=======
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
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
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
                href="/blog/ai-2026-real-time-retrieval-architectures"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-colors duration-200"
              >
                New: Real‑Time Retrieval Architectures
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
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
          </div>
        </div>
      </div>

<<<<<<< HEAD
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

      {/* Featured section */}
      <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-purple-300">Featured</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Spotlight</p>
          <p className="mt-4 text-lg leading-8 text-gray-300">Don’t miss our newest blueprints and releases.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 lg:mt-14 lg:max-w-none lg:grid-cols-3">
          <a href="/updates/autonomous-experimentation-toolkit-1-0" className="rounded-2xl bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <div className="text-xs text-blue-300">Launch</div>
            <h3 className="mt-2 text-lg font-semibold text-white">Autonomous Experimentation Toolkit v1.0</h3>
            <p className="mt-2 text-sm text-gray-300">Safe A/Bs and shadow tests with eval gates and policy checks.</p>
            <span className="mt-4 inline-block text-sm font-semibold text-blue-400">Discover →</span>
          </a>
          <a href="/updates/evals-in-prod-best-practices-2026" className="rounded-2xl bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <div className="text-xs text-blue-300">Guide</div>
            <h3 className="mt-2 text-lg font-semibold text-white">Evals‑in‑Prod Best Practices</h3>
            <p className="mt-2 text-sm text-gray-300">Canaries, auto‑rollbacks, and metric gates for safe iteration.</p>
            <span className="mt-4 inline-block text-sm font-semibold text-blue-400">Read more →</span>
          </a>
          <a href="/updates/production-guardrails-multimodal-agents-2026" className="rounded-2xl bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <div className="text-xs text-blue-300">Guide</div>
            <h3 className="mt-2 text-lg font-semibold text-white">Production Guardrails for Multimodal Agents</h3>
            <p className="mt-2 text-sm text-gray-300">Continuous evals, risk tiers, and policy‑as‑code guardrails.</p>
            <span className="mt-4 inline-block text-sm font-semibold text-blue-400">Learn →</span>
          </a>
        </div>
      </div>

      {/* Latest updates */}
=======
      {/* Latest Updates section (auto from data/updates) */}
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
      <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">What's New</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Latest Updates</p>
<<<<<<< HEAD
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 lg:mt-14 lg:max-w-none lg:grid-cols-3">
          {latest.map((item) => (
            <article key={item.title} className="flex flex-col items-start bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-2 text-xs text-blue-300">
                <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2 py-0.5 ring-1 ring-inset ring-blue-500/20">{item.tag}</span>
                {item.date && (
                  <time dateTime={item.date} className="text-gray-400">{new Date(item.date).toLocaleDateString()}</time>
                )}
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
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
        <div className="mt-8 rounded-xl border border-blue-500/20 bg-blue-500/10 p-4 text-center">
          <p className="text-sm font-semibold text-blue-200">
            New: Autonomous Ops Control Center v2.4 —
            <a href="/updates/autonomous-ops-control-center-2-4" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">explore</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Also read: <a href="/updates/evals-in-prod-best-practices-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">Evals‑in‑Prod Guide</a>
            <span className="mx-2 text-blue-300/60">|</span>
            <a href="/updates/autonomous-failure-analysis-toolkit-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">Failure Analysis Toolkit</a>
            <span className="mx-2 text-blue-300/60">|</span>
            New report: <a href="/updates/state-of-enterprise-agent-safety-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">Enterprise Agent Safety (2026)</a>
          </p>
        </div>
      </div>

      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to transform your business?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Join the AI revolution and discover how our technology can accelerate your growth.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/contact" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100">Get Started</a>
            <a href="/solutions" className="text-sm font-semibold leading-6 text-white hover:text-blue-400">View Solutions <span aria-hidden="true">→</span></a>
=======
          <p className="mt-6 text-lg leading-8 text-gray-300">Fresh content and announcements. Visit Updates for more.</p>
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

      {/* What's New section */}
      <div id="whats-new" className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">What’s New</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Fresh releases and product updates
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Explore our latest capabilities rolling out across the platform.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {whatsNew.map((item) => (
              <article key={item.title} className="flex flex-col items-start bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-x-3 text-xs">
                  <span className="rounded-full bg-blue-600/20 text-blue-300 px-2 py-1.5 font-medium">{item.tag}</span>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold leading-6 text-white group-hover:text-blue-400 transition-colors duration-200">
                    <a href={item.href}>
                      <span className="absolute inset-0" />
                      {item.title}
                    </a>
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-300">{item.desc}</p>
                </div>
                <div className="mt-6">
                  <a href={item.href} className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by leading organizations worldwide
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Our track record speaks for itself
            </p>
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

      {/* Solutions showcase */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Our Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Flagship AI and Technology Platforms
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Discover how our innovative solutions are transforming industries and driving unprecedented growth.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {solutions.map((solution) => (
              <article
                key={solution.name}
                className="flex flex-col items-start group bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime="2024" className="text-gray-400">
                    2024
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-800 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-700 transition-colors duration-200">
                    AI Platform
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-blue-400 transition-colors duration-200">
                    <a href={solution.href}>
                      <span className="absolute inset-0" />
                      {solution.name}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">{solution.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-white">
                      <a href={solution.href} className="hover:text-blue-400 transition-colors duration-200">
                        <span className="absolute inset-0" />
                        Learn more
                      </a>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
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
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
          </div>
        </div>
      </div>
    </div>
  )
}
<<<<<<< HEAD
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
=======
const solutions = [
    href: '/solutions/autonomous-business'
    href: '/solutions/it-asset-management'
  }
    <div className="bg-black min-h-screen">
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Leading the Future of{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">AI & Technology</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Transform your business with cutting-edge artificial intelligence, quantum computing, and autonomous solutions. Join the revolution that's reshaping industries worldwide.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/contact" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105">Get Started</a>
              <a href="/about" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">Learn More <span aria-hidden="true">→</span></a>
              Transform your business with cutting-edge artificial intelligence, quantum computing, and autonomous solutions. 
              Join the revolution that's reshaping industries worldwide.
              </a>
              <a href="/news/ai-governance-blueprint-2025" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
                New: AI Governance Blueprint 2025 <span aria-hidden="true">→</span>
                href="/blog/ai-2026-enterprise-agent-observability-deep-dive"
              <a
                href="/blog/ai-2026-real-time-retrieval-architectures"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-colors duration-200"
              >
                New: Real‑Time Retrieval Architectures
                <span aria-hidden>→</span>
              </a>
              <a
              <a
                href="/updates/production-guardrails-playbook"
                className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-200 hover:bg-purple-500/20 transition-colors duration-200"
              >
                New: Production Guardrails Playbook
                <span aria-hidden>→</span>
              </a>

      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-24 lg:px-8">
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-24 lg:px-8">
            Fresh content, announcements, and courses from Zion Academy. Visit the Updates page for more.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl lg:mt-16 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {latest.map((item) => (
                title: 'AI 2026: Enterprise Agent Observability — Deep Dive',
                summary:
                  'Comprehensive observability patterns for production agent systems with distributed tracing, metrics, and alerting.',
                href: '/blog/ai-2026-enterprise-agent-observability-deep-dive'
                href: '/updates/dapp-challenge'
                href: '/updates/web3-learning-path'
          <p className="mt-6 text-lg leading-8 text-gray-300">Our comprehensive suite of AI and technology solutions empowers organizations to achieve breakthrough results and maintain competitive advantage in the digital age.</p>
            Our comprehensive suite of AI and technology solutions empowers organizations to achieve breakthrough results 
            and maintain competitive advantage in the digital age.
                  <p className="mt-6"><a href="/solutions" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200">Learn more <span aria-hidden="true">→</span></a></p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Trusted by leading organizations worldwide</h2>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by leading organizations worldwide
            </h2>
      {/* CTA section */}
                  <span className="relative z-10 rounded-full bg-gray-800 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-700 transition-colors duration-200">AI Platform</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-blue-400 transition-colors duration-200">
                    <a href={solution.href}><span className="absolute inset-0" />{solution.name}</a>
                  <span className="relative z-10 rounded-full bg-gray-800 px-3 py-1.5 font-medium text-gray-300">AI Platform</span>
                    <a href={solution.href}><span className="absolute inset-0" />{solution.name}</a>
                    <p className="font-semibold text-white">
                      <a href={solution.href} className="hover:text-blue-400 transition-colors duration-200"><span className="absolute inset-0" />Learn more</a>
                    </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Zion Tech Group</h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">AI, automation, and secure infrastructure.</p>
          <div className="mt-8">
            <a href="/updates" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">See all updates →</a>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <a href="/contact" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 hover:scale-105">Get Started</a>
            <a href="/solutions" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">View Solutions <span aria-hidden="true">→</span></a>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Join the AI revolution and discover how our technology can accelerate your growth and innovation.</p>
}

}
>>>>>>> 6995d05efbf958465be8e251001703bdbc87a50a
=======

>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
