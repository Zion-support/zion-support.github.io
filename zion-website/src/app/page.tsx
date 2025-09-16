<<<<<<< HEAD
import {
  ChartBarIcon,
  CpuChipIcon,
  GlobeAltIcon,
  LightBulbIcon,
  ShieldCheckIcon,
=======
import { 
  LightBulbIcon, 
  CpuChipIcon, 
  GlobeAltIcon, 
  ShieldCheckIcon,
  ChartBarIcon,
>>>>>>> origin/feat/case-studies-content
  UserGroupIcon
} from '@heroicons/react/24/outline'
import { getLatestUpdates } from '../data/updates'

const features = [
<<<<<<< HEAD
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
=======
  { name: 'AI-Powered Research', description: 'Cutting-edge AI that accelerates research and discovery across all domains.', icon: LightBulbIcon },
  { name: 'Quantum Computing', description: 'Next-generation quantum neural networks for complex problem solving.', icon: CpuChipIcon },
  { name: 'Global Solutions', description: 'Worldwide deployment of autonomous operations and digital transformation.', icon: GlobeAltIcon },
  { name: 'Enterprise Security', description: 'Security protocols protecting your most valuable digital assets.', icon: ShieldCheckIcon },
  { name: 'Data Analytics', description: 'Advanced analytics and insights driving decisions.', icon: ChartBarIcon },
  { name: 'Expert Team', description: 'World-class researchers and engineers pushing boundaries.', icon: UserGroupIcon },
>>>>>>> origin/feat/case-studies-content
]

const stats = [
  { name: 'Research Papers Published', value: '150+' },
  { name: 'AI Models Deployed', value: '500+' },
<<<<<<< HEAD
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
=======
  { name: 'Global Clients', value: '1,000+' },
  { name: 'Patents Filed', value: '25+' },
]

const solutions = [
  { name: 'AI Research Assistant', description: 'Autonomous research platform accelerating discovery.', href: '/solutions/ai-autonomous-research' },
  { name: 'Quantum Neural Networks', description: 'Next-generation computing for complex problem solving.', href: '/solutions/quantum-neural-networks' },
  { name: 'Autonomous Business Operations', description: 'AI-powered automation for enterprise efficiency.', href: '/solutions/autonomous-business' },
  { name: 'IT Asset Management', description: 'Intelligent management of digital infrastructure.', href: '/solutions/it-asset-management' },
>>>>>>> origin/feat/case-studies-content
]

export default function HomePage() {
  const latest = getLatestUpdates(6)
  return (
<<<<<<< HEAD
    <div className="bg-black min-h-screen">
=======
<<<<<<< HEAD
    <div className="bg-black min-h-screen">
=======
    <div className="bg-black">
<<<<<<< HEAD
>>>>>>> 37ed813ec17d3cae6d99bab99107b0e185e588a7
>>>>>>> cursor/create-and-deploy-new-content-d7eb
      {/* Promo banner */}
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4 sm:p-5 text-center">
            <p className="text-sm sm:text-base font-semibold text-blue-200">
              New today: Enterprise Agent Observability Deep Dive, Autonomous Business Operations Guide, and more —
              <a href="/updates" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">see all updates</a>
            </p>
          </div>
        </div>
      </div>
      {/* Hero section */}
      <div className="relative isolate px-6 pt-8 lg:px-8">
=======
      <div className="relative isolate px-6 pt-14 lg:px-8">
>>>>>>> origin/feat/case-studies-content
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Leading the Future of{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">AI & Technology</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
<<<<<<< HEAD
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
              <a href="/news/ai-governance-blueprint-2025" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
                New: AI Governance Blueprint 2025 <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
              <a
<<<<<<< HEAD
                href="/blog/ai-2026-enterprise-agent-observability-deep-dive"
=======
                href="/updates/autonomous-ops-sre-for-agents"
                className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-200 hover:bg-green-500/20 transition-colors duration-200"
              >
                New: Autonomous Ops & SRE for Agents
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/ai-governance-toolkit"
                className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200 hover:bg-blue-500/20 transition-colors duration-200"
              >
                New: AI Governance Toolkit v2
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/autonomous-ops-playbook-2026"
>>>>>>> origin/feature/autonomous-ops-sre-content
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
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
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
            {latest.map((item) => (
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
<<<<<<< HEAD
<<<<<<< HEAD
                title: 'AI 2026: Enterprise Agent Observability — Deep Dive',
                summary:
<<<<<<< HEAD
                  'Comprehensive observability patterns for production agent systems with distributed tracing, metrics, and alerting.',
                href: '/blog/ai-2026-enterprise-agent-observability-deep-dive'
=======
                title: 'AI 2026: Autonomous Ops and SRE for Agents',
                summary: 'Run agentic systems with SLOs, guardrails, and incident runbooks.',
                href: '/blog/ai-2026-autonomous-ops-sre-for-agents'
>>>>>>> origin/feature/autonomous-ops-sre-content
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
              },
              {
                title: 'Community Challenge: Build a DApp',
                summary: 'Join our DApp challenge and win prizes up to $1000 in ZION tokens.',
                href: '/updates/dapp-challenge'
              },
              {
                title: 'New Learning Path: Web3 Fundamentals',
                summary: 'Beginner-friendly path covering blockchain basics, NFTs, and Web3 security.',
                href: '/updates/web3-learning-path'
>>>>>>> origin/feature/updates-content
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
=======
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Advanced Technology</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Everything you need to accelerate innovation</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">Our comprehensive suite of AI and technology solutions empowers organizations to achieve breakthrough results and maintain competitive advantage.</p>
>>>>>>> origin/feat/case-studies-content
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
<<<<<<< HEAD
                  <p className="mt-6">
                    <a href="/solutions" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
=======
                  <p className="mt-6"><a href="/solutions" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200">Learn more <span aria-hidden="true">→</span></a></p>
>>>>>>> origin/feat/case-studies-content
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
<<<<<<< HEAD
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by leading organizations worldwide
            </h2>
=======
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Trusted by leading organizations worldwide</h2>
>>>>>>> origin/feat/case-studies-content
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

<<<<<<< HEAD
      {/* CTA section */}
=======
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
                  <span className="relative z-10 rounded-full bg-gray-800 px-3 py-1.5 font-medium text-gray-300">AI Platform</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-blue-400 transition-colors duration-200">
                    <a href={solution.href}><span className="absolute inset-0" />{solution.name}</a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">{solution.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-white"><a href={solution.href} className="hover:text-blue-400 transition-colors duration-200"><span className="absolute inset-0" />Learn more</a></p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

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
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to transform your business?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Join the AI revolution and discover how our technology can accelerate your growth and innovation.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
<<<<<<< HEAD
            <a
              href="/contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 hover:scale-105"
            >
              Get Started
            </a>
            <a href="/solutions" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
              View Solutions <span aria-hidden="true">→</span>
            </a>
=======
            <a href="/contact" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 hover:scale-105">Get Started</a>
            <a href="/solutions" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">View Solutions <span aria-hidden="true">→</span></a>
>>>>>>> origin/feat/case-studies-content
          </div>
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/feat/case-studies-content
