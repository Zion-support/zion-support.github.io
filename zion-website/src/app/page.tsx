import React from 'react'
import { getLatestUpdates } from '@/data/updates'
import {
  ChartBarIcon,
  CpuChipIcon,
  GlobeAltIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

export default function HomePage() {
  const latestUpdates = getLatestUpdates(3)

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-4xl py-12 lg:py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Autonomous AI Operations
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
              Deploy, monitor, and scale autonomous AI agents with enterprise-grade reliability, 
              observability, and governance.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200"
              >
                Get Started
              </a>
              <a
                href="/solutions"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors"
              >
                Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-400">Platform</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything you need to run AI agents in production
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              From deployment to monitoring, our platform provides the tools and infrastructure 
              to build, deploy, and scale autonomous AI systems with confidence.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <CpuChipIcon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  Agent Runtime
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    Deploy and manage autonomous AI agents with built-in reliability, 
                    monitoring, and auto-scaling capabilities.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <ChartBarIcon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  Observability
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    Real-time monitoring, logging, and analytics for AI agent performance, 
                    behavior, and business impact.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <ShieldCheckIcon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  Governance
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    Enterprise-grade security, compliance, and governance controls 
                    for AI agent operations and decision-making.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <GlobeAltIcon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  Multi-Cloud
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    Deploy across AWS, Azure, GCP, and on-premises with consistent 
                    management and monitoring capabilities.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <LightBulbIcon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  AI Copilots
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    Pre-built AI copilots for common enterprise use cases including 
                    IT operations, customer support, and business intelligence.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <UserGroupIcon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  Enterprise Support
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    24/7 enterprise support, training, and professional services 
                    to ensure successful AI agent deployments.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Latest Updates Section */}
      <div className="py-24 sm:py-32 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-400">Latest Updates</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stay updated with our latest features
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Discover the latest capabilities, improvements, and insights from our platform.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {latestUpdates.map((update) => (
              <article key={update.href} className="flex flex-col items-start">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={update.date} className="text-gray-400">
                    {update.date ? new Date(update.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    }) : 'Recent'}
                  </time>
                  <span className="relative z-10 rounded-full bg-blue-500 px-3 py-1 text-xs font-medium text-white">
                    {update.tag}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-blue-400 transition-colors">
                    <a href={update.href}>
                      <span className="absolute inset-0" />
                      {update.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">
                    {update.summary}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <a
                    href={update.href}
                    className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Read more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to deploy autonomous AI?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Get started with our platform and deploy your first autonomous AI agent in minutes.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-all duration-200"
              >
                Start Free Trial
              </a>
              <a
                href="/solutions"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
              >
                View Solutions <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}