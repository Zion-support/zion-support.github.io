// @ts-nocheck
import React from 'react'
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

const latest = getLatestUpdates(3)

export default function HomePage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Promo banner for fresh content */}
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4 sm:p-5 text-center">
          <p className="text-sm sm:text-base font-semibold text-blue-200">
            New: Evidence Vault v1.1 —
            <a href="/updates/agent-evidence-vault-1-1" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">see what's new</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Also: Agent Risk Dashboard v1.1 —
            <a href="/updates/agent-risk-dashboard-1-1" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">launch details</a>
            <span className="mx-2 text-blue-300/60">|</span>
            Guide: Multimodal Agents Guardrails (2026) —
            <a href="/updates/production-guardrails-multimodal-agents-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">read the guide</a>
            <span className="mx-2 text-blue-300/60">|</span>
            <a href="/updates" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">all updates</a>
          </p>
        </div>
      </div>

      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              Announcing our next wave of AI innovations.{' '}
              <a href="/updates" className="font-semibold text-blue-400"><span className="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Next-Generation AI Research Platform
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Pioneering the future of artificial intelligence with autonomous research systems, quantum computing, and enterprise-grade solutions that transform how businesses operate.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/contact" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105">Get Started</a>
              <a href="/about" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">Learn More <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
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
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {latest.map((update) => (
              <div key={update.id} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <div className="h-5 w-5 flex-none rounded-full bg-blue-500" aria-hidden="true" />
                  <a href={update.href} className="hover:text-blue-400 transition-colors duration-200">
                    {update.title}
                  </a>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{update.excerpt}</p>
                  <p className="mt-6">
                    <a href={update.href} className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200">
                      Read more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Features section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-400">Advanced Technology</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Cutting-Edge Solutions</p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our platform combines the latest in AI research, quantum computing, and enterprise automation to deliver unprecedented results.
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

      {/* Stats section */}
      <div className="bg-white/5 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat, statIdx) => (
              <div key={statIdx} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Solutions section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-400">Solutions</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Explore Our Platform</p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Discover how our AI-powered solutions can transform your business operations and accelerate innovation.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {solutions.map((solution) => (
              <div key={solution.name} className="flex flex-col justify-between rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 xl:p-10">
                <div>
                  <h3 className="text-xl font-semibold leading-8 text-white">{solution.name}</h3>
                  <p className="mt-4 text-base leading-7 text-gray-300">{solution.description}</p>
                </div>
                <a href={solution.href} className="mt-6 inline-flex items-center gap-x-2 text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-blue-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Join thousands of enterprises already using our AI platform to accelerate innovation and drive growth.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/contact" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 hover:scale-105">Get Started</a>
              <a href="/about" className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors duration-200">Learn More <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}