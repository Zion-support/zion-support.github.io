// @ts-nocheck
import { getLatestUpdates } from '@/data/updates'
import { ChartBarIcon, CpuChipIcon, GlobeAltIcon, LightBulbIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline'

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

export default function HomePage() {
  const latest = getLatestUpdates(6)

  return (
    <div className="bg-black min-h-screen">
      {/* Promo banner for fresh content */}
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4 sm:p-5 text-center">
          <p className="text-sm sm:text-base font-semibold text-blue-200">
            New: Production Evidence Bundles (2026) —
            <a href="/updates/production-evidence-bundles-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">blueprint</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Canary + Shadow Testing for Agents —
            <a href="/updates/canary-and-shadow-testing-for-agents-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">field guide</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Grounded Generation Guardrails —
            <a href="/updates/grounded-generation-guardrails-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">launch</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Failure Analysis Toolkit —
            <a href="/updates/autonomous-failure-analysis-toolkit-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">report</a>
            <span className="mx-2 text-blue-300/60">|</span>
            <a href="/updates" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">all updates</a>
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
            Fresh: Canary + Shadow Testing —
            <a href="/updates/canary-and-shadow-testing-for-agents-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">read the guide</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Evidence Bundles —
            <a href="/updates/production-evidence-bundles-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">blueprint</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Grounded Generation Guardrails —
            <a href="/updates/grounded-generation-guardrails-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">launch</a>
            <span className="mx-2 text-blue-300/60">|</span>
            See all <a href="/updates" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">updates</a>
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
      <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">What's New</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Latest Updates</p>
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
          </div>
        </div>
      </div>
    </div>
  )
}