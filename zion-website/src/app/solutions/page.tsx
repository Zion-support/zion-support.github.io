<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import { LightBulbIcon, CpuChipIcon, RocketLaunchIcon, ShieldCheckIcon, ChartBarIcon, GlobeAltIcon, UserGroupIcon, CogIcon } from '@heroicons/react/24/outline'
=======
=======
>>>>>>> origin/feat/content-promo
=======
>>>>>>> origin/feat/updates-and-home-whats-new
import { 
  LightBulbIcon, 
  CpuChipIcon, 
  RocketLaunchIcon, 
  ShieldCheckIcon,
  ChartBarIcon,
  GlobeAltIcon,
  UserGroupIcon,
  CogIcon
=======
import { 
	LightBulbIcon, 
	CpuChipIcon, 
	RocketLaunchIcon, 
	ShieldCheckIcon,
	ChartBarIcon,
	GlobeAltIcon,
	UserGroupIcon,
	CogIcon
>>>>>>> origin/feat/new-updates-ads
} from '@heroicons/react/24/outline'
=======
import { LightBulbIcon, CpuChipIcon, RocketLaunchIcon, ShieldCheckIcon, ChartBarIcon, GlobeAltIcon, UserGroupIcon, CogIcon } from '@heroicons/react/24/outline'
>>>>>>> origin/feature/updates-2025-09

const flagshipSolutions = [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { LightBulbIcon, CpuChipIcon, RocketLaunchIcon, ShieldCheckIcon, ChartBarIcon, GlobeAltIcon, UserGroupIcon, CogIcon } from '@heroicons/react/24/outline'

const flagshipSolutions = [
>>>>>>> origin/feat/updates-and-fixes
=======
>>>>>>> origin/feat/updates-and-home-whats-new
  {
    name: 'AI Research Assistant',
    description: 'Revolutionary autonomous research platform that accelerates scientific discovery across all domains.',
    icon: LightBulbIcon,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/feat/updates-and-home-whats-new
    features: [
      'Natural Language Processing',
      'Multi-modal Learning',
      'Real-time Collaboration',
      'Advanced Analytics'
    ],
=======
    features: ['Natural Language Processing', 'Multi-modal Learning', 'Real-time Collaboration', 'Advanced Analytics'],
>>>>>>> origin/feature/updates-2025-09
=======
    features: ['Natural Language Processing', 'Multi-modal Learning', 'Real-time Collaboration', 'Advanced Analytics'],
>>>>>>> origin/feat/updates-and-fixes
    href: '/solutions/ai-autonomous-research',
  },
  {
    name: 'Quantum Neural Networks',
    description: 'Breakthrough quantum computing technology for next-generation AI applications.',
    icon: CpuChipIcon,
    features: ['Quantum Supremacy', 'Neural Architecture Search', 'Hybrid Classical-Quantum', 'Scalable Architecture'],
    href: '/solutions/quantum-neural-networks',
  },
  {
    name: 'Autonomous Business Operations',
    description: 'Self-optimizing business processes that adapt and improve automatically.',
    icon: RocketLaunchIcon,
    features: ['Process Automation', 'Predictive Analytics', 'Continuous Optimization', 'Real-time Monitoring'],
    href: '/solutions/autonomous-business',
  },
  {
    name: 'IT Asset Management',
    description: 'Intelligent asset tracking and optimization for modern enterprise infrastructure.',
    icon: ShieldCheckIcon,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/feat/updates-and-home-whats-new
    features: [
      'Asset Discovery',
      'Lifecycle Management',
      'Security Compliance',
      'Cost Optimization'
    ],
=======
    features: ['Asset Discovery', 'Lifecycle Management', 'Security Compliance', 'Cost Optimization'],
>>>>>>> origin/feature/updates-2025-09
=======
    features: ['Asset Discovery', 'Lifecycle Management', 'Security Compliance', 'Cost Optimization'],
>>>>>>> origin/feat/updates-and-fixes
    href: '/solutions/it-asset-management',
  },
=======
  { name: 'AI Research Assistant', description: 'Revolutionary autonomous research platform that accelerates scientific discovery across all domains.', icon: LightBulbIcon, features: ['Natural Language Processing', 'Multi-modal Learning', 'Real-time Collaboration', 'Advanced Analytics'], href: '/solutions/ai-autonomous-research' },
  { name: 'Quantum Neural Networks', description: 'Breakthrough quantum computing technology for next-generation AI applications.', icon: CpuChipIcon, features: ['Quantum Supremacy', 'Neural Architecture Search', 'Hybrid Classical-Quantum', 'Scalable Architecture'], href: '/solutions/quantum-neural-networks' },
  { name: 'Autonomous Business Operations', description: 'Self-optimizing business processes that adapt and improve automatically.', icon: RocketLaunchIcon, features: ['Process Automation', 'Predictive Analytics', 'Continuous Optimization', 'Real-time Monitoring'], href: '/solutions/autonomous-business' },
  { name: 'IT Asset Management', description: 'Intelligent asset tracking and optimization for modern enterprise infrastructure.', icon: ShieldCheckIcon, features: ['Asset Discovery', 'Lifecycle Management', 'Security Compliance', 'Cost Optimization'], href: '/solutions/it-asset-management' },
>>>>>>> origin/feat/content-promo
]

const industryApplications = [
  { name: 'Healthcare', description: 'AI-powered diagnostics, drug discovery, and patient care optimization.', icon: UserGroupIcon, useCases: ['Medical Imaging Analysis', 'Drug Discovery', 'Patient Risk Assessment', 'Clinical Decision Support'] },
  { name: 'Finance', description: 'Intelligent trading, risk assessment, and fraud detection systems.', icon: ChartBarIcon, useCases: ['Algorithmic Trading', 'Credit Risk Analysis', 'Fraud Detection', 'Portfolio Optimization'] },
  { name: 'Manufacturing', description: 'Predictive maintenance, quality control, and supply chain optimization.', icon: CogIcon, useCases: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Production Planning'] },
  { name: 'Retail', description: 'Customer behavior analysis, inventory management, and personalized marketing.', icon: GlobeAltIcon, useCases: ['Customer Analytics', 'Inventory Management', 'Personalized Marketing', 'Demand Forecasting'] },
]

const implementationSteps = [
  { step: '01', title: 'Discovery & Assessment', description: 'We analyze your current systems, identify opportunities, and develop a comprehensive AI strategy.', icon: LightBulbIcon },
  { step: '02', title: 'Solution Design', description: 'Our experts design custom AI solutions tailored to your specific business needs and objectives.', icon: CpuChipIcon },
  { step: '03', title: 'Development & Testing', description: 'We develop and rigorously test your AI solution to ensure optimal performance and reliability.', icon: CogIcon },
  { step: '04', title: 'Deployment & Training', description: 'Seamless deployment with comprehensive training for your team to maximize solution adoption.', icon: RocketLaunchIcon },
  { step: '05', title: 'Ongoing Support', description: 'Continuous monitoring, optimization, and support to ensure your AI solution delivers lasting value.', icon: ShieldCheckIcon },
<<<<<<< HEAD
=======
import React from 'react'
import { RocketLaunchIcon, LightBulbIcon, CpuChipIcon } from '@heroicons/react/24/outline'

const solutions = [
  { name: 'AI Research Assistant', desc: 'Autonomous research platform accelerating discovery.', href: '/solutions/ai-autonomous-research', icon: LightBulbIcon },
  { name: 'Quantum Neural Networks', desc: 'Next-generation computing for complex problems.', href: '/solutions/quantum-neural-networks', icon: CpuChipIcon },
  { name: 'Autonomous Operations', desc: 'AI-powered automation for enterprise efficiency.', href: '/solutions/autonomous-business', icon: RocketLaunchIcon },
>>>>>>> origin/feat/news-and-fixes
=======
>>>>>>> origin/feat/updates-and-fixes
]
=======
import React from 'react'
>>>>>>> origin/feat/research-article-promo

=======
>>>>>>> origin/feat/updates-front
export default function SolutionsPage() {
  const solutions = [
    { name: 'Autonomous Research Assistant', href: '/solutions/ai-autonomous-research' },
    { name: 'Quantum Neural Networks', href: '/solutions/quantum-neural-networks' },
    { name: 'Autonomous Business Operations', href: '/solutions/autonomous-business' },
  ]
  return (
    <div className="bg-black">
<<<<<<< HEAD
      <div className="relative isolate px-6 pt-14 lg:px-8">
<<<<<<< HEAD
        <div className="mx-auto max-w-2xl py-24 sm:py-40">
          <div className="text-center">
<<<<<<< HEAD
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              AI Solutions for{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Every Industry</span>
            </h1>
<<<<<<< HEAD
<<<<<<< HEAD
            <p className="mt-6 text-lg leading-8 text-gray-300">
<<<<<<< HEAD
              Discover our cutting-edge AI and technology solutions designed to transform your business 
              operations and drive unprecedented growth and innovation.
=======
        <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Solutions</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Explore our flagship platforms and accelerators.
>>>>>>> origin/feat/research-article-promo
=======
              Discover our cutting-edge AI and technology solutions designed to transform your business operations and drive unprecedented growth and innovation.
>>>>>>> origin/feat/updates-and-fixes
            </p>
=======
            <p className="mt-6 text-lg leading-8 text-gray-300">Discover our cutting-edge AI and technology solutions designed to transform your business operations and drive unprecedented growth and innovation.</p>
>>>>>>> origin/feature/updates-2025-09
=======
            <p className="mt-6 text-lg leading-8 text-gray-300">Discover our cutting-edge AI and technology solutions designed to transform your business operations and drive unprecedented growth and innovation.</p>
>>>>>>> origin/feat/content-promo
=======
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Solutions</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">Flagship platforms transforming industries.</p>
>>>>>>> origin/feat/news-and-fixes
          </div>
        </div>
      </div>
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/feat/updates-and-fixes
=======
>>>>>>> origin/feat/updates-and-home-whats-new
      {/* Flagship Solutions */}
=======
>>>>>>> origin/feature/updates-2025-09
=======
>>>>>>> origin/feat/content-promo
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Our Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Flagship AI Platforms</p>
<<<<<<< HEAD
<<<<<<< HEAD
          <p className="mt-6 text-lg leading-8 text-gray-300">Revolutionary technology that pushes the boundaries of what's possible.</p>
=======
          <p className="mt-6 text-lg leading-8 text-gray-300">Revolutionary technology that pushes the boundaries of what's possible in artificial intelligence.</p>
>>>>>>> origin/feat/content-promo
=======
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Revolutionary technology that pushes the boundaries of what's possible in artificial intelligence.
          </p>
>>>>>>> origin/feat/updates-and-fixes
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {flagshipSolutions.map((solution) => (
              <div key={solution.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-x-3 mb-4">
                  <solution.icon className="h-8 w-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">{solution.name}</h3>
                </div>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <div className="space-y-3 mb-6">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
<<<<<<< HEAD
                <a href={solution.href} className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200">Learn more <span aria-hidden="true">→</span></a>
=======
                <a href={solution.href} className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200">
                  Learn more <span aria-hidden="true">→</span>
                </a>
>>>>>>> origin/feat/updates-and-fixes
              </div>
            ))}
          </div>
        </div>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Industry Applications */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Industries</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Transforming Every Sector</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/feat/updates-and-home-whats-new
            Our AI solutions are designed to adapt and excel across diverse industries, 
            delivering measurable results and competitive advantages.
=======
            Our AI solutions are designed to adapt and excel across diverse industries, delivering measurable results and competitive advantages.
>>>>>>> origin/feat/updates-and-fixes
          </p>
=======
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Industries</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Transforming Every Sector</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">Our AI solutions excel across diverse industries, delivering measurable results.</p>
>>>>>>> origin/feature/updates-2025-09
=======
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Industries</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Transforming Every Sector</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">Our AI solutions are designed to adapt and excel across diverse industries, delivering measurable results and competitive advantages.</p>
>>>>>>> origin/feat/content-promo
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {industryApplications.map((industry) => (
              <div key={industry.name} className="flex flex-col group">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <industry.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  {industry.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto mb-4">{industry.description}</p>
                  <div className="space-y-2">
                    {industry.useCases.map((useCase) => (
                      <div key={useCase} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 bg-blue-400 rounded-full"></div>
                        <span className="text-sm text-gray-400">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Implementation Process */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Implementation</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Proven Process</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/feat/updates-and-home-whats-new
            From initial assessment to ongoing optimization, we guide you through every step 
            of your AI transformation journey.
=======
            From initial assessment to ongoing optimization, we guide you through every step of your AI transformation journey.
>>>>>>> origin/feat/updates-and-fixes
          </p>
=======
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Implementation</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Proven Process</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">From assessment to optimization, we guide you at every step.</p>
>>>>>>> origin/feature/updates-2025-09
=======
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Implementation</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Proven Process</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">From initial assessment to ongoing optimization, we guide you through every step of your AI transformation journey.</p>
>>>>>>> origin/feat/content-promo
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-5">
            {implementationSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {index < implementationSteps.length - 1 && (<div className="hidden lg:block absolute top-8 left-8 w-full h-0.5 bg-gray-700"></div>)}
                <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20 mb-4">
                    <step.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <div className="text-sm font-semibold text-blue-400 mb-2">{step.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* CTA section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to transform your business?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/feat/updates-and-home-whats-new
            Let's discuss how our AI solutions can accelerate your growth and give you a 
            competitive edge in your industry.
=======
            Let's discuss how our AI solutions can accelerate your growth and give you a competitive edge in your industry.
>>>>>>> origin/feat/updates-and-fixes
          </p>
=======
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to transform your business?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Let's discuss how our AI solutions can accelerate your growth and give you a competitive edge.</p>
>>>>>>> origin/feature/updates-2025-09
          <div className="mt-10 flex items-center justify-center gap-x-6">
<<<<<<< HEAD
            <a href="/contact" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200 hover:scale-105">Get Started</a>
=======
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to transform your business?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Let's discuss how our AI solutions can accelerate your growth and give you a competitive edge in your industry.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/contact" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105">Get Started</a>
>>>>>>> origin/feat/content-promo
            <a href="/services" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">View Services <span aria-hidden="true">→</span></a>
=======
            <a href="/contact" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105">
              Get Started
            </a>
            <a href="/services" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
              View Services <span aria-hidden="true">→</span>
            </a>
>>>>>>> origin/feat/updates-and-fixes
          </div>
=======
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {solutions.map((s) => (
            <article key={s.name} className="flex flex-col items-start bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center gap-x-3 text-xs">
                <s.icon className="h-5 w-5 text-blue-400" />
                <span className="relative z-10 rounded-full bg-gray-800 px-3 py-1.5 font-medium text-gray-300">AI Platform</span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={s.href}><span className="absolute inset-0" />{s.name}</a>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-300">{s.desc}</p>
              </div>
              <div className="relative mt-8">
                <a href={s.href} className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">Learn more →</a>
              </div>
            </article>
          ))}
>>>>>>> origin/feat/news-and-fixes
        </div>
      </div>
    </div>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
import {

  LightBulbIcon,
  CpuChipIcon,
  RocketLaunchIcon,
=======
=======
>>>>>>> origin/feat/case-studies-content
import { 
  LightBulbIcon, 
  CpuChipIcon, 
  RocketLaunchIcon, 
  ShieldCheckIcon,
  ChartBarIcon,
  GlobeAltIcon,
  UserGroupIcon,
  CogIcon
} from '@heroicons/react/24/outline'
>>>>>>> origin/feature/updates-content

const flagshipSolutions = [
<<<<<<< HEAD
	{ name: 'AI Research Assistant', description: 'Revolutionary autonomous research platform that accelerates scientific discovery across all domains.', icon: LightBulbIcon, features: ['Natural Language Processing', 'Multi-modal Learning', 'Real-time Collaboration', 'Advanced Analytics'], href: '/solutions/ai-autonomous-research' },
	{ name: 'Quantum Neural Networks', description: 'Breakthrough quantum computing technology for next-generation AI applications.', icon: CpuChipIcon, features: ['Quantum Supremacy', 'Neural Architecture Search', 'Hybrid Classical-Quantum', 'Scalable Architecture'], href: '/solutions/quantum-neural-networks' },
	{ name: 'Autonomous Business Operations', description: 'Self-optimizing business processes that adapt and improve automatically.', icon: RocketLaunchIcon, features: ['Process Automation', 'Predictive Analytics', 'Continuous Optimization', 'Real-time Monitoring'], href: '/solutions/autonomous-business' },
	{ name: 'IT Asset Management', description: 'Intelligent asset tracking and optimization for modern enterprise infrastructure.', icon: ShieldCheckIcon, features: ['Asset Discovery', 'Lifecycle Management', 'Security Compliance', 'Cost Optimization'], href: '/solutions/it-asset-management' },
]

const industryApplications = [
	{ name: 'Healthcare', description: 'AI-powered diagnostics, drug discovery, and patient care optimization.', icon: UserGroupIcon, useCases: ['Medical Imaging Analysis', 'Drug Discovery', 'Patient Risk Assessment', 'Clinical Decision Support'] },
	{ name: 'Finance', description: 'Intelligent trading, risk assessment, and fraud detection systems.', icon: ChartBarIcon, useCases: ['Algorithmic Trading', 'Credit Risk Analysis', 'Fraud Detection', 'Portfolio Optimization'] },
	{ name: 'Manufacturing', description: 'Predictive maintenance, quality control, and supply chain optimization.', icon: CogIcon, useCases: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Production Planning'] },
	{ name: 'Retail', description: 'Customer behavior analysis, inventory management, and personalized marketing.', icon: GlobeAltIcon, useCases: ['Customer Analytics', 'Inventory Management', 'Personalized Marketing', 'Demand Forecasting'] },
]

const implementationSteps = [
	{ step: '01', title: 'Discovery & Assessment', description: 'We analyze your current systems, identify opportunities, and develop a comprehensive AI strategy.', icon: LightBulbIcon },
	{ step: '02', title: 'Solution Design', description: 'Our experts design custom AI solutions tailored to your specific business needs and objectives.', icon: CpuChipIcon },
	{ step: '03', title: 'Development & Testing', description: 'We develop and rigorously test your AI solution to ensure optimal performance and reliability.', icon: CogIcon },
	{ step: '04', title: 'Deployment & Training', description: 'Seamless deployment with comprehensive training for your team to maximize solution adoption.', icon: RocketLaunchIcon },
	{ step: '05', title: 'Ongoing Support', description: 'Continuous monitoring, optimization, and support to ensure your AI solution delivers lasting value.', icon: ShieldCheckIcon },
]

export default function SolutionsPage() {
	return (
		<div className="bg-black">
			<div className="relative isolate px-6 pt-14 lg:px-8">
				<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
							AI Solutions for{' '}
							<span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Every Industry</span>
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-300">Discover our cutting-edge AI and technology solutions designed to transform your business operations and drive unprecedented growth and innovation.</p>
					</div>
				</div>
			</div>

			<div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-blue-400">Our Solutions</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Flagship AI Platforms</p>
					<p className="mt-6 text-lg leading-8 text-gray-300">Revolutionary technology that pushes the boundaries of what's possible in artificial intelligence.</p>
=======
	{
		name: 'AI Research Assistant',
		description: 'Revolutionary autonomous research platform that accelerates scientific discovery across all domains.',
		icon: LightBulbIcon,
		features: [
			'Natural Language Processing',
			'Multi-modal Learning',
			'Real-time Collaboration',
			'Advanced Analytics'
		],
		href: '/solutions/ai-autonomous-research',
	},
	{
		name: 'Quantum Neural Networks',
		description: 'Breakthrough quantum computing technology for next-generation AI applications.',
		icon: CpuChipIcon,
		features: [
			'Quantum Supremacy',
			'Neural Architecture Search',
			'Hybrid Classical-Quantum',
			'Scalable Architecture'
		],
		href: '/solutions/quantum-neural-networks',
	},
	{
		name: 'Autonomous Business Operations',
		description: 'Self-optimizing business processes that adapt and improve automatically.',
		icon: RocketLaunchIcon,
		features: [
			'Process Automation',
			'Predictive Analytics',
			'Continuous Optimization',
			'Real-time Monitoring'
		],
		href: '/solutions/autonomous-business',
	},
	{
		name: 'IT Asset Management',
		description: 'Intelligent asset tracking and optimization for modern enterprise infrastructure.',
		icon: ShieldCheckIcon,
		features: [
			'Asset Discovery',
			'Lifecycle Management',
			'Security Compliance',
			'Cost Optimization'
		],
		href: '/solutions/it-asset-management',
	},
]

const industryApplications = [
	{
		name: 'Healthcare',
		description: 'AI-powered diagnostics, drug discovery, and patient care optimization.',
		icon: UserGroupIcon,
		useCases: ['Medical Imaging Analysis', 'Drug Discovery', 'Patient Risk Assessment', 'Clinical Decision Support'],
	},
	{
		name: 'Finance',
		description: 'Intelligent trading, risk assessment, and fraud detection systems.',
		icon: ChartBarIcon,
		useCases: ['Algorithmic Trading', 'Credit Risk Analysis', 'Fraud Detection', 'Portfolio Optimization'],
	},
	{
		name: 'Manufacturing',
		description: 'Predictive maintenance, quality control, and supply chain optimization.',
		icon: CogIcon,
		useCases: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Production Planning'],
	},
	{
		name: 'Retail',
		description: 'Customer behavior analysis, inventory management, and personalized marketing.',
		icon: GlobeAltIcon,
		useCases: ['Customer Analytics', 'Inventory Management', 'Personalized Marketing', 'Demand Forecasting'],
	},
]

const implementationSteps = [
	{
		step: '01',
		title: 'Discovery & Assessment',
		description: 'We analyze your current systems, identify opportunities, and develop a comprehensive AI strategy.',
		icon: LightBulbIcon,
	},
	{
		step: '02',
		title: 'Solution Design',
		description: 'Our experts design custom AI solutions tailored to your specific business needs and objectives.',
		icon: CpuChipIcon,
	},
	{
		step: '03',
		title: 'Development & Testing',
		description: 'We develop and rigorously test your AI solution to ensure optimal performance and reliability.',
		icon: CogIcon,
	},
	{
		step: '04',
		title: 'Deployment & Training',
		description: 'Seamless deployment with comprehensive training for your team to maximize solution adoption.',
		icon: RocketLaunchIcon,
	},
	{
		step: '05',
		title: 'Ongoing Support',
		description: 'Continuous monitoring, optimization, and support to ensure your AI solution delivers lasting value.',
		icon: ShieldCheckIcon,
	},
]

export default function SolutionsPage() {
	return (
		<div className="bg-black">
			{/* Hero section */}
			<div className="relative isolate px-6 pt-14 lg:px-8">
				<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
							AI Solutions for{' '}
							<span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
								Every Industry
							</span>
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-300">
							Discover our cutting-edge AI and technology solutions designed to transform your business 
							operations and drive unprecedented growth and innovation.
						</p>
					</div>
				</div>
			</div>

			{/* Flagship Solutions */}
			<div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-blue-400">Our Solutions</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Flagship AI Platforms
					</p>
					<p className="mt-6 text-lg leading-8 text-gray-300">
						Revolutionary technology that pushes the boundaries of what's possible in artificial intelligence.
					</p>
>>>>>>> origin/feat/new-updates-ads
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
						{flagshipSolutions.map((solution) => (
							<div key={solution.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
								<div className="flex items-center gap-x-3 mb-4">
									<solution.icon className="h-8 w-8 text-blue-400" />
									<h3 className="text-xl font-semibold text-white">{solution.name}</h3>
								</div>
								<p className="text-gray-300 mb-6">{solution.description}</p>
								<div className="space-y-3 mb-6">
									{solution.features.map((feature) => (
										<div key={feature} className="flex items-center gap-2">
											<div className="h-2 w-2 bg-blue-400 rounded-full"></div>
											<span className="text-sm text-gray-300">{feature}</span>
										</div>
									))}
								</div>
<<<<<<< HEAD
								<a href={solution.href} className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200">Learn more <span aria-hidden="true">→</span></a>
=======
								<a
									href={solution.href}
									className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200"
								>
									Learn more <span aria-hidden="true">→</span>
								</a>
>>>>>>> origin/feat/new-updates-ads
							</div>
						))}
					</div>
				</div>
			</div>

<<<<<<< HEAD
			<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-blue-400">Industries</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Transforming Every Sector</p>
					<p className="mt-6 text-lg leading-8 text-gray-300">Our AI solutions are designed to adapt and excel across diverse industries, delivering measurable results and competitive advantages.</p>
=======
			{/* Industry Applications */}
			<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-blue-400">Industries</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Transforming Every Sector
					</p>
					<p className="mt-6 text-lg leading-8 text-gray-300">
						Our AI solutions are designed to adapt and excel across diverse industries, 
						delivering measurable results and competitive advantages.
					</p>
>>>>>>> origin/feat/new-updates-ads
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
						{industryApplications.map((industry) => (
							<div key={industry.name} className="flex flex-col group">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
									<industry.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
									{industry.name}
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
									<p className="flex-auto mb-4">{industry.description}</p>
									<div className="space-y-2">
										{industry.useCases.map((useCase) => (
											<div key={useCase} className="flex items-center gap-2">
												<div className="h-1.5 w-1.5 bg-blue-400 rounded-full"></div>
												<span className="text-sm text-gray-400">{useCase}</span>
											</div>
										))}
									</div>
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>

<<<<<<< HEAD
			<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-blue-400">Implementation</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Proven Process</p>
					<p className="mt-6 text-lg leading-8 text-gray-300">From initial assessment to ongoing optimization, we guide you through every step of your AI transformation journey.</p>
=======
			{/* Implementation Process */}
			<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-blue-400">Implementation</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Our Proven Process
					</p>
					<p className="mt-6 text-lg leading-8 text-gray-300">
						From initial assessment to ongoing optimization, we guide you through every step 
						of your AI transformation journey.
					</p>
>>>>>>> origin/feat/new-updates-ads
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-5">
						{implementationSteps.map((step, index) => (
							<div key={step.step} className="relative">
								{index < implementationSteps.length - 1 && (
									<div className="hidden lg:block absolute top-8 left-8 w-full h-0.5 bg-gray-700"></div>
								)}
								<div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
									<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20 mb-4">
										<step.icon className="h-8 w-8 text-blue-400" />
									</div>
									<div className="text-sm font-semibold text-blue-400 mb-2">{step.step}</div>
									<h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
									<p className="text-sm text-gray-300">{step.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

<<<<<<< HEAD
			<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to transform your business?</h2>
					<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Let's discuss how our AI solutions can accelerate your growth and give you a competitive edge in your industry.</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a href="/contact" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105">Get Started</a>
						<a href="/services" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">View Services <span aria-hidden="true">→</span></a>
					</div>
=======
import React from 'react'
import { LightBulbIcon, CpuChipIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

const solutions = [
	{
		name: 'AI Research Assistant',
		description: 'Autonomous research platform that accelerates scientific discovery.',
		icon: LightBulbIcon,
		href: '/solutions/ai-autonomous-research',
	},
	{
		name: 'Quantum Neural Networks',
		description: 'Next-generation computing for complex problem solving.',
		icon: CpuChipIcon,
		href: '/solutions/quantum-neural-networks',
	},
	{
		name: 'Autonomous Business Operations',
		description: 'AI-powered automation for enterprise efficiency.',
		icon: RocketLaunchIcon,
		href: '/solutions/autonomous-business',
	},
]

export default function SolutionsPage() {
	return (
		<div className="bg-black">
			<div className="relative isolate px-6 pt-14 lg:px-8">
				<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Solutions</h1>
						<p className="mt-6 text-lg leading-8 text-gray-300">Explore our flagship AI platforms designed to transform your organization.</p>
					</div>
				</div>
			</div>

			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
					{solutions.map((s) => (
						<article key={s.name} className="flex flex-col items-start group bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
							<div className="flex items-center gap-x-3 mb-4">
								<s.icon className="h-6 w-6 text-blue-400" />
								<h3 className="text-xl font-semibold text-white">{s.name}</h3>
							</div>
							<p className="text-gray-300 mb-6">{s.description}</p>
							<a href={s.href} className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200">Learn more <span aria-hidden="true">→</span></a>
						</article>
					))}
>>>>>>> origin/feat/new-content-home-20250915
=======
			{/* CTA section */}
			<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Ready to transform your business?
					</h2>
					<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
						Let's discuss how our AI solutions can accelerate your growth and give you a 
						competitive edge in your industry.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a
							href="/contact"
							className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105"
						>
							Get Started
						</a>
						<a href="/services" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
							View Services <span aria-hidden="true">→</span>
						</a>
					</div>
>>>>>>> origin/feat/new-updates-ads
				</div>
			</div>
		</div>
	)
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/feature/updates-2025-09
=======
>>>>>>> origin/feature/content-updates-and-merge-fixes
=======
  {
    name: 'AI Research Assistant',
    description: 'Autonomous research platform accelerating discovery.',
    icon: LightBulbIcon,
    features: ['Natural Language Processing', 'Multi-modal Learning', 'Real-time Collaboration', 'Advanced Analytics'],
    href: '/solutions/ai-autonomous-research',
  },
  {
    name: 'Quantum Neural Networks',
    description: 'Breakthrough quantum computing technology for AI applications.',
    icon: CpuChipIcon,
    features: ['Quantum Supremacy', 'Neural Architecture Search', 'Hybrid Classical-Quantum', 'Scalable Architecture'],
    href: '/solutions/quantum-neural-networks',
  },
  {
    name: 'Autonomous Business Operations',
    description: 'Self-optimizing business processes that adapt and improve automatically.',
    icon: RocketLaunchIcon,
    features: ['Process Automation', 'Predictive Analytics', 'Continuous Optimization', 'Real-time Monitoring'],
    href: '/solutions/autonomous-business',
  },
  {
    name: 'IT Asset Management',
    description: 'Intelligent asset tracking and optimization for enterprise infrastructure.',
    icon: ShieldCheckIcon,
    features: ['Asset Discovery', 'Lifecycle Management', 'Security Compliance', 'Cost Optimization'],
    href: '/solutions/it-asset-management',
  },
]

const industryApplications = [
  { name: 'Healthcare', description: 'Diagnostics, drug discovery, patient care optimization.', icon: UserGroupIcon, useCases: ['Medical Imaging Analysis', 'Drug Discovery', 'Patient Risk Assessment', 'Clinical Decision Support'] },
  { name: 'Finance', description: 'Trading, risk assessment, and fraud detection.', icon: ChartBarIcon, useCases: ['Algorithmic Trading', 'Credit Risk Analysis', 'Fraud Detection', 'Portfolio Optimization'] },
  { name: 'Manufacturing', description: 'Predictive maintenance and supply chain optimization.', icon: CogIcon, useCases: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Production Planning'] },
  { name: 'Retail', description: 'Behavior analysis and personalized marketing.', icon: GlobeAltIcon, useCases: ['Customer Analytics', 'Inventory Management', 'Personalized Marketing', 'Demand Forecasting'] },
]

const implementationSteps = [
  { step: '01', title: 'Discovery & Assessment', description: 'Analyze systems, identify opportunities, define strategy.', icon: LightBulbIcon },
  { step: '02', title: 'Solution Design', description: 'Design custom solutions for business objectives.', icon: CpuChipIcon },
  { step: '03', title: 'Development & Testing', description: 'Build and test for performance and reliability.', icon: CogIcon },
  { step: '04', title: 'Deployment & Training', description: 'Deploy and train teams for adoption.', icon: RocketLaunchIcon },
  { step: '05', title: 'Ongoing Support', description: 'Monitor, optimize, and support long-term success.', icon: ShieldCheckIcon },
]

export default function SolutionsPage() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              AI Solutions for{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Every Industry</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">Discover our cutting-edge AI and technology solutions designed to transform your business operations and drive growth.</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Our Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Flagship AI Platforms</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">Revolutionary technology pushing the boundaries of what's possible.</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {flagshipSolutions.map((solution) => (
              <div key={solution.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-x-3 mb-4">
                  <solution.icon className="h-8 w-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">{solution.name}</h3>
                </div>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <div className="space-y-3 mb-6">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <a href={solution.href} className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200">Learn more <span aria-hidden="true">→</span></a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Industries</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Transforming Every Sector</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">Our AI solutions are designed to adapt and excel across diverse industries, delivering measurable results and competitive advantages.</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {industryApplications.map((industry) => (
              <div key={industry.name} className="flex flex-col group">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <industry.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  {industry.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto mb-4">{industry.description}</p>
                  <div className="space-y-2">
                    {industry.useCases.map((useCase) => (
                      <div key={useCase} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 bg-blue-400 rounded-full"></div>
                        <span className="text-sm text-gray-400">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Implementation</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Proven Process</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">From initial assessment to ongoing optimization, we guide you through every step.</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-5">
            {implementationSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {index < implementationSteps.length - 1 && (<div className="hidden lg:block absolute top-8 left-8 w-full h-0.5 bg-gray-700"></div>)}
                <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20 mb-4">
                    <step.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <div className="text-sm font-semibold text-blue-400 mb-2">{step.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to transform your business?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Let\'s discuss how our AI solutions can accelerate your growth and competitive edge.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/contact" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105">Get Started</a>
            <a href="/services" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">View Services <span aria-hidden="true">→</span></a>
          </div>
=======
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {solutions.map((s) => (
            <a key={s.name} href={s.href} className="group block bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition">
              <h3 className="text-xl font-semibold text-white group-hover:text-blue-400">{s.name}</h3>
              <span className="mt-2 inline-block text-sm text-blue-400">Learn more →</span>
            </a>
          ))}
>>>>>>> origin/feat/research-article-promo
        </div>
      </div>
    </div>
  )
}
<<<<<<< HEAD
>>>>>>> origin/feat/case-studies-content
=======
>>>>>>> origin/feat/content-promo
=======
>>>>>>> origin/feat/new-content-home-20250915
=======
>>>>>>> origin/feat/new-updates-ads
=======
>>>>>>> origin/feat/news-and-fixes
=======

>>>>>>> origin/feat/research-article-promo
=======
>>>>>>> origin/feat/updates-and-fixes
=======
>>>>>>> origin/feat/updates-and-home-whats-new
=======
      <div className="mx-auto max-w-7xl px-6 pt-28 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Solutions</h1>
        <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl">
          Explore flagship AI platforms and industry solutions designed to deliver measurable results.
        </p>
      </div>
    </div>
  )
}
>>>>>>> origin/feat/updates-front
