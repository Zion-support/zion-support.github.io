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
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
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
                href="/updates/ai-platform-2-0"
                className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-200 hover:bg-indigo-500/20 transition-colors duration-200"
              >
                New: AI Platform 2.0
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/customer-win-finance"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/20 transition-colors duration-200"
              >
                Win: Finance MTTR -42%
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
                href="/updates/autonomous-sales-copilot-1-0"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/20 transition-colors duration-200"
              >
                Launch: Sales Copilot v1.0
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
                New: 2025 AI Trends Radar
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/evaluating-real-world-rag-latency"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-colors duration-200"
              >
                Guide: Real-World RAG Latency
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/autonomous-ops-playbook-2026"
                className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-200 hover:bg-purple-500/20 transition-colors duration-200"
              >
                Launch: Autonomous Ops Playbook
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/rag-production-patterns"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-colors duration-200"
              >
                Guide: RAG Production Patterns
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/enterprise-retrieval-observability-2026"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/20 transition-colors duration-200"
              >
                Guide: Retrieval Observability 2026
                <span aria-hidden>→</span>
              </a>
              <a
                href="/updates/agentic-ops-mttr-case-study"
                className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-200 hover:bg-sky-500/20 transition-colors duration-200"
              >
                Case Study: Agentic Ops MTTR
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* What's New section */}
      <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
        <div className="mb-8 rounded-2xl bg-blue-600/10 border border-blue-500/30 px-6 py-4 text-blue-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-sm">
              New: Explore our latest content, courses, and launches in Updates.
            </p>
            <a
              href="/updates"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3.5 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition-colors duration-200"
            >
              View Updates
            </a>
          </div>
        </div>
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
                title: 'AI 2026: Multimodal Agents Enterprise Blueprint',
                summary: 'Design, deploy, and scale multimodal agents with measurable ROI.',
                href: '/blog/ai-2026-multimodal-agents-enterprise-blueprint'
              },
              {
                title: 'AI 2026: LLM Evals Maturity Model',
                summary: 'Evaluation-first framework with quality gates and policy-as-code.',
                href: '/blog/ai-2026-llm-evals-maturity-model'
              },
              {
                title: 'AI 2026: Enterprise Retrieval Observability',
                summary: 'Tracing, SLIs, and evals for reliable retrieval-augmented systems.',
                href: '/blog/ai-2026-enterprise-retrieval-observability'
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

