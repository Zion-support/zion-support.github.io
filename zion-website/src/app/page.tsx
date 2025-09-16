>>>>>>> cursor/create-and-deploy-new-content-502e
import {
  ChartBarIcon,
  CpuChipIcon,
  GlobeAltIcon,
  LightBulbIcon,
  ShieldCheckIcon,
>>>>>>> cursor/create-and-deploy-new-content-634d
import { getLatestUpdates } from '../data/updates'
=======
import React from 'react'
import { LightBulbIcon, CpuChipIcon, GlobeAltIcon, ShieldCheckIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const features = [
>>>>>>> cursor/create-and-deploy-new-content-502e
  {
    name: 'AI-Powered Research',
    description:
      'Cutting-edge artificial intelligence that accelerates research and discovery across all domains.',
    icon: LightBulbIcon
  },
  {
    name: 'Quantum Computing',
>>>>>>> cursor/create-and-deploy-new-content-502e
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
=======
    description: 'Next-generation quantum neural networks for solving complex computational problems.',
    icon: CpuChipIcon,
  },
  {
    name: 'Global Solutions',
    description: 'Worldwide deployment of autonomous business operations and digital transformation.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Enterprise Security',
    description: 'Military-grade security protocols protecting your most valuable digital assets.',
    icon: ShieldCheckIcon,
>>>>>>> origin/feat/news-and-fixes
>>>>>>> cursor/create-and-deploy-new-content-502e
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
  { name: 'AI-Powered Research', description: 'Cutting-edge artificial intelligence that accelerates research and discovery across all domains.', icon: LightBulbIcon },
  { name: 'Quantum Computing', description: 'Next-generation quantum neural networks for solving complex computational problems.', icon: CpuChipIcon },
  { name: 'Global Solutions', description: 'Worldwide deployment of autonomous business operations and digital transformation.', icon: GlobeAltIcon },
  { name: 'Enterprise Security', description: 'Military-grade security protocols protecting your most valuable digital assets.', icon: ShieldCheckIcon },
  { name: 'Data Analytics', description: 'Advanced analytics and insights driving informed decision-making.', icon: ChartBarIcon },
  { name: 'Expert Team', description: 'World-class researchers and engineers pushing the boundaries of technology.', icon: UserGroupIcon },
>>>>>>> cursor/create-and-deploy-new-content-502e
]

const stats = [
  { name: 'Research Papers Published', value: '150+' },
  { name: 'AI Models Deployed', value: '500+' },
>>>>>>> cursor/create-and-deploy-new-content-502e
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
>>>>>>> cursor/create-and-deploy-new-content-502e
  },
  {
    name: 'IT Asset Management',
    description: 'Intelligent management of digital infrastructure.',
  { name: 'AI Research Assistant', description: 'Autonomous research platform that accelerates scientific discovery.', href: '/solutions/ai-autonomous-research' },
  { name: 'Quantum Neural Networks', description: 'Next-generation computing for complex problem solving.', href: '/solutions/quantum-neural-networks' },
  { name: 'Autonomous Business Operations', description: 'AI-powered automation for enterprise efficiency.', href: '/solutions/autonomous-business' },
  { name: 'IT Asset Management', description: 'Intelligent management of digital infrastructure.', href: '/solutions/it-asset-management' },
>>>>>>> cursor/create-and-deploy-new-content-502e
]

const whatsNew = [
  { title: 'ContentForge AI v2', description: 'Major upgrade with SEO briefs, brand voice trainer, and new templates.', href: '/services', badge: 'New' },
  { title: 'SecureShield Audit Playbooks', description: 'Actionable remediation guides added to all cybersecurity audits.', href: '/services', badge: 'Update' },
]
>>>>>>> 17fc7cb9c7c9c1144afdca822c756f504221b8d0

export default function HomePage() {
  return (
>>>>>>> cursor/create-and-deploy-new-content-de62
=======
=======
    <div className="bg-black">
>>>>>>> cursor/create-and-deploy-new-content-a12c
=======
>>>>>>> cursor/create-and-deploy-new-content-8069
>>>>>>> cursor/create-and-deploy-new-content-502e
      {/* Promo banner */}
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4 sm:p-5 text-center">
            <p className="text-sm sm:text-base font-semibold text-blue-200">
              New: Real-Time AI Analytics Dashboard v3.0 —
              <a href="/updates/real-time-ai-analytics-dashboard-v3-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">analytics dashboard</a>
              <span className="mx-2 text-blue-300/60">|</span>
              AI Agent Orchestration Platform v2.0 —
              <a href="/updates/ai-agent-orchestration-platform-2-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">orchestration platform</a>
=======
>>>>>>> cursor/create-and-deploy-new-content-3afb
              <span className="mx-2 text-blue-300/60">|</span>
              <a href="/updates" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">see all updates</a>
            </p>
>>>>>>> cursor/create-and-deploy-new-content-f175
          </div>
        </div>
      </div>
      {/* Hero section */}
      <div className="relative isolate px-6 pt-8 lg:px-8">
=======
>>>>>>> cursor/create-and-deploy-new-content-502e
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Leading the Future of{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">AI & Technology</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
>>>>>>> cursor/create-and-deploy-new-content-502e
              <a
                href="/contact"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105"
              >
                Get Started
>>>>>>> cursor/create-and-deploy-new-content-502e
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
              <a
>>>>>>> cursor/create-and-deploy-new-content-502e
                className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-200 hover:bg-purple-500/20 transition-colors duration-200"
              >
                Deep Dive: Agent Observability
                <span aria-hidden>→</span>
              </a>
              <a
                href="/blog/ai-2026-autonomous-business-operations-complete-guide"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-colors duration-200"
              >
                Guide: Autonomous Business Ops
                <span aria-hidden>→</span>
              </a>
              <a
>>>>>>> cursor/create-and-deploy-new-content-502e
                href="/blog/ai-2026-policy-as-code-production-blueprint"
                className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-200 hover:bg-amber-500/20 transition-colors duration-200"
              >
                Blueprint: Policy‑as‑Code
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/production-guardrails-playbook"
                className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-200 hover:bg-purple-500/20 transition-colors duration-200"
              >
                New: Production Guardrails Playbook
                <span aria-hidden>→</span>
              </a>
=======
              Transform your business with cutting-edge artificial intelligence, quantum computing, and autonomous solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/contact" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105">Get Started</a>
              <a href="/about" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">Learn More <span aria-hidden="true">→</span></a>
>>>>>>> origin/feat/case-studies-content
=======
>>>>>>> origin/feat/content-promo
=======
                href="/updates/autonomous-retail-fulfillment"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/20 transition-colors duration-200"
              >
                Case Study: Autonomous Retail Fulfillment
                <span aria-hidden>→</span>
              </a>
>>>>>>> origin/feat/content-sept15-1757928952
=======
>>>>>>> origin/feat/news-and-fixes
=======
            </div>
            {/* Promo banner */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-white/5 px-5 py-2 text-sm text-gray-200 ring-1 ring-white/10">
              <span className="inline-flex h-2 w-2 rounded-full bg-purple-400"></span>
              <span>New research: Quantum Neural Networks in Production</span>
              <a href="/research" className="font-semibold text-blue-400 hover:text-blue-300">Read now →</a>
>>>>>>> origin/feat/research-article-promo
>>>>>>> cursor/create-and-deploy-new-content-376e
>>>>>>> cursor/create-and-deploy-new-content-502e
            </div>
          </div>
        </div>
      </div>
>>>>>>> cursor/create-and-deploy-new-content-502e
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">What’s New</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Latest updates and releases</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 lg:mt-16 lg:max-w-none lg:grid-cols-2">
          {whatsNew.map((item) => (
            <article key={item.title} className="flex flex-col items-start bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <span className="mb-3 inline-flex items-center rounded-full bg-blue-600/20 px-3 py-1 text-xs font-medium text-blue-400">{item.badge}</span>
              <h3 className="text-lg font-semibold leading-6 text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">{item.description}</p>
              <a href={item.href} className="mt-6 text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">Learn more <span aria-hidden="true">→</span></a>
            </article>
          ))}
        </div>
      </div>

=======
>>>>>>> cursor/create-and-deploy-new-content-502e
      {/* Latest on the blog */}
      <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Latest on the blog</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Just published</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            New articles on enterprise AI, security, and autonomous systems.
=======
            Fresh content, announcements, and courses from Zion Academy.
>>>>>>> origin/feat/content-promo
=======
            Fresh content, announcements, research drops, and courses from Zion Academy.
>>>>>>> origin/feat/homepage-content-updates
>>>>>>> cursor/create-and-deploy-new-content-502e
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl lg:mt-16 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {[
              {
>>>>>>> cursor/create-and-deploy-new-content-502e
              },
              {
                title: 'AI 2026: Autonomous Business Operations — Complete Guide',
                summary:
                  'End-to-end guide to implementing autonomous business operations with AI agents, covering strategy, architecture, and rollout.',
                href: '/blog/ai-2026-autonomous-business-operations-complete-guide'
              },
              {
                title: 'AI 2026: Policy‑as‑Code in Production — Blueprint',
                summary:
                  'Operationalize governance with executable policies, CI/CD gates, and audit‑ready evidence.',
                href: '/blog/ai-2026-policy-as-code-production-blueprint'
=======
                  'Comprehensive blockchain course covering smart contracts, DeFi, L2 scaling, and security.',
                href: '/updates/advanced-blockchain-course'
=======
                title: 'New Article: AI Governance Blueprint 2025',
                summary:
                  'Practical guardrails for deploying autonomous AI with verifiable policy and audits.',
                href: '/blog/ai-governance-blueprint-2025'
>>>>>>> origin/feature/new-content-2025
=======
                title: 'New Course: Advanced Blockchain Development',
                summary:
                  'Comprehensive blockchain course covering smart contracts, DeFi, L2 scaling, and security.',
                href: '/updates',
>>>>>>> origin/feat/content-promo
              },
              {
                title: 'Community Challenge: Build a DApp',
                summary: 'Join our DApp challenge and win prizes up to $1000 in ZION tokens.',
>>>>>>> cursor/create-and-deploy-new-content-502e
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
=======
>>>>>>> origin/feat/news-and-fixes

=======

>>>>>>> origin/feat/research-article-promo
      {/* Features section */}
>>>>>>> cursor/create-and-deploy-new-content-376e
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Advanced Technology</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Everything you need to accelerate innovation</p>
>>>>>>> cursor/create-and-deploy-new-content-502e
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
>>>>>>> cursor/create-and-deploy-new-content-502e
                  <p className="mt-6">
                    <a href="/solutions" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
=======
                  <p className="mt-6"><a href="/solutions" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200">Learn more <span aria-hidden="true">→</span></a></p>
>>>>>>> origin/feat/case-studies-content
>>>>>>> cursor/create-and-deploy-new-content-376e
>>>>>>> cursor/create-and-deploy-new-content-502e
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
>>>>>>> cursor/create-and-deploy-new-content-502e
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

      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Our Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Flagship AI and Technology Platforms</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">Discover how our innovative solutions are transforming industries and driving unprecedented growth.</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {solutions.map((solution) => (
              <article key={solution.name} className="flex flex-col items-start group bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime="2024" className="text-gray-400">2024</time>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">{solution.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

>>>>>>> cursor/create-and-deploy-new-content-502e
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
>>>>>>> cursor/create-and-deploy-new-content-f175
            {latest.map((item) => (
              <article key={item.href} className="rounded-2xl bg-white/5 p-6">
                <h3 className="text-white font-semibold"><a href={item.href}>{item.title}</a></h3>
                <p className="mt-2 text-sm text-gray-300">{item.summary}</p>
              </article>
            ))}
=======
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to transform your business?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Join the AI revolution and discover how our cutting-edge technology can accelerate your growth and innovation.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/contact" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 hover:scale-105">Get Started</a>
            <a href="/solutions" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">View Solutions <span aria-hidden="true">→</span></a>
>>>>>>> 17fc7cb9c7c9c1144afdca822c756f504221b8d0
=======
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Customer Success</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Explore our Case Studies</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">Real-world outcomes from organizations using our AI solutions.</p>
        </div>
        <div className="mt-10 text-center">
          <a href="/case-studies" className="inline-flex items-center rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 transition-all duration-200 hover:scale-105">View Case Studies</a>
        </div>
      </div>

>>>>>>> origin/feat/case-studies-content
=======
      {/* CTA section */}
>>>>>>> origin/feat/content-promo
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to transform your business?</h2>
>>>>>>> cursor/create-and-deploy-new-content-502e
            <a
              href="/contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 hover:scale-105"
            >
              Get Started
            </a>
            <a href="/solutions" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
              View Solutions <span aria-hidden="true">→</span>
            </a>
>>>>>>> cursor/create-and-deploy-new-content-502e
          </div>
        </div>
      </div>
    </div>
  )
>>>>>>> cursor/create-and-deploy-new-content-502e
