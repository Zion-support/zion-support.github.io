<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import React from 'react'
import {
  ChartBarIcon,
  CpuChipIcon,
  GlobeAltIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
>>>>>>> cursor/create-and-deploy-new-content-81d0
>>>>>>> cursor/create-and-deploy-new-content-634d
import { getLatestUpdates } from '../data/updates'
=======
import React from 'react'
import { LightBulbIcon, CpuChipIcon, GlobeAltIcon, ShieldCheckIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline'

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

const whatsNew = [
  { title: 'ContentForge AI v2', description: 'Major upgrade with SEO briefs, brand voice trainer, and new templates.', href: '/services', badge: 'New' },
  { title: 'SecureShield Audit Playbooks', description: 'Actionable remediation guides added to all cybersecurity audits.', href: '/services', badge: 'Update' },
]
>>>>>>> 17fc7cb9c7c9c1144afdca822c756f504221b8d0

export default function HomePage() {
  return (
<<<<<<< HEAD
    <div className="bg-black min-h-screen">
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-f175
      {/* Promo banner */}
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4 sm:p-5 text-center">
            <p className="text-sm sm:text-base font-semibold text-blue-200">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-3afb
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-dc9e
>>>>>>> cursor/create-and-deploy-new-content-6f13
              New: Real-Time AI Analytics Dashboard v3.0 —
              <a href="/updates/real-time-ai-analytics-dashboard-v3-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">analytics dashboard</a>
              <span className="mx-2 text-blue-300/60">|</span>
              AI Agent Orchestration Platform v2.0 —
              <a href="/updates/ai-agent-orchestration-platform-2-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">orchestration platform</a>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-dc9e
=======
>>>>>>> cursor/create-and-deploy-new-content-6f13
              New: AI Autonomous Workflow Engine v1.0 —
              <a href="/updates/ai-autonomous-workflow-engine-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">workflow engine</a>
              <span className="mx-2 text-blue-300/60">|</span>
              <a href="/updates/autonomous-analytics-copilot-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">analytics launch</a>
              <span className="mx-2 text-blue-300/60">|</span>
              <a href="/updates/autonomous-security-copilot-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">security launch</a>
              <span className="mx-2 text-blue-300/60">|</span>
              <a href="/updates/autonomous-decision-engine-1-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">decision engine</a>
>>>>>>> cursor/create-and-deploy-new-content-8472
=======
>>>>>>> cursor/create-and-deploy-new-content-3afb
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-dc9e
>>>>>>> cursor/create-and-deploy-new-content-6f13
              <span className="mx-2 text-blue-300/60">|</span>
              <a href="/updates" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">see all updates</a>
            </p>
<<<<<<< HEAD
=======
=======
      <div className="mx-auto max-w-7xl px-6 pt-24">
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
>>>>>>> cursor/create-and-deploy-new-content-b0b6
>>>>>>> cursor/create-and-deploy-new-content-f175
          </div>
        </div>
      </div>
      {/* Hero section */}
      <div className="relative isolate px-6 pt-8 lg:px-8">
=======
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
>>>>>>> 17fc7cb9c7c9c1144afdca822c756f504221b8d0
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-f175
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
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-24 lg:px-8">
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

      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Advanced Technology</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Everything you need to accelerate innovation</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">Our comprehensive suite of AI and technology solutions empowers organizations to achieve breakthrough results and maintain competitive advantage in the digital age.</p>
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
                  <p className="mt-6"><a href="/solutions" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200">Learn more <span aria-hidden="true">→</span></a></p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

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
                    <p className="font-semibold text-white">
                      <a href={solution.href} className="hover:text-blue-400 transition-colors duration-200"><span className="absolute inset-0" />Learn more</a>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
<<<<<<< HEAD
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Zion Tech Group</h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">AI, automation, and secure infrastructure.</p>
          <div className="mt-8">
            <a href="/updates" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">See all updates →</a>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
<<<<<<< HEAD
=======
=======
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Latest Updates</h2>
            <p className="mt-4 text-lg text-gray-300">Stay informed with our latest content and announcements</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
>>>>>>> cursor/create-and-deploy-new-content-b0b6
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
          </div>
        </div>
      </div>
    </div>
  )
}

