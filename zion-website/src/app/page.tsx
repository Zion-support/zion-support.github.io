import React from 'react'
import { getLatestUpdates } from '@/data/updates'
import { ChartBarIcon, CpuChipIcon, GlobeAltIcon, LightBulbIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const features = [
  { name: 'AI-Powered Research', description: 'Cutting-edge artificial intelligence that accelerates research and discovery across all domains.', icon: LightBulbIcon },
  { name: 'Quantum Computing', description: 'Next-generation quantum neural networks for solving complex computational problems.', icon: CpuChipIcon },
  { name: 'Global Solutions', description: 'Worldwide deployment of autonomous business operations and digital transformation.', icon: GlobeAltIcon },
  { name: 'Enterprise Security', description: 'Military-grade security protocols protecting your most valuable digital assets.', icon: ShieldCheckIcon },
  { name: 'Advanced Analytics', description: 'Real-time data processing and insights to drive informed decision making.', icon: ChartBarIcon },
  { name: 'Team Collaboration', description: 'Seamless collaboration tools for distributed teams and remote workforces.', icon: UserGroupIcon }
]

const stats = [
  { name: 'Global Clients', value: '1,000+' },
  { name: 'Patents Filed', value: '25+' },
  { name: 'Countries Served', value: '50+' },
  { name: 'Years of Innovation', value: '10+' }
]

const solutions = [
  {
    name: 'Autonomous Business Operations',
    description: 'AI-powered automation for end-to-end business processes with intelligent decision making and continuous optimization.',
    href: '/solutions/autonomous-business'
  },
  {
    name: 'IT Asset Management',
    description: 'Comprehensive asset lifecycle management with predictive analytics and automated compliance monitoring.',
    href: '/solutions/it-asset-management'
  }
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
        </div>
      </div>

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
              Transform your business with cutting-edge artificial intelligence, quantum computing, and autonomous solutions. Join the revolution that's reshaping industries worldwide.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/contact" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105">Get Started</a>
              <a href="/about" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">Learn More <span aria-hidden="true">→</span></a>
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
            {latest.map((item) => (
              <article key={item.title} className="flex flex-col items-start bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-2 text-xs text-blue-300">
                  <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2 py-0.5 ring-1 ring-inset ring-blue-500/20">{item.tag}</span>
                  <time dateTime={item.date} className="text-gray-400">{item.date ? new Date(item.date).toLocaleDateString() : 'Recent'}</time>
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
          <div className="mt-8 flex justify-center">
            <a href="/updates" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
              View all updates <span aria-hidden="true">→</span>
            </a>
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
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Trusted by leading organizations worldwide</h2>
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

      {/* Solutions showcase */}
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
                  <span className="relative z-10 rounded-full bg-gray-800 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-700 transition-colors duration-200">AI Platform</span>
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

      {/* CTA section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to transform your business?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Join the AI revolution and discover how our cutting-edge technology can accelerate your growth and innovation.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/contact" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 transition-all duration-200 hover:scale-105">Get Started</a>
            <a href="/solutions" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">View Solutions <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </div>
  )
}