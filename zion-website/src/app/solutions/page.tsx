import React from 'react'
import { LightBulbIcon, CpuChipIcon, RocketLaunchIcon, ShieldCheckIcon, ChartBarIcon, GlobeAltIcon, UserGroupIcon, CogIcon } from '@heroicons/react/24/outline'

const flagshipSolutions = [
	{ name: 'AI Research Assistant', description: 'Autonomous research platform accelerating discovery.', icon: LightBulbIcon, features: ['Natural Language Processing', 'Multi-modal Learning', 'Real-time Collaboration', 'Advanced Analytics'], href: '/solutions/ai-autonomous-research' },
	{ name: 'Quantum Neural Networks', description: 'Next-gen quantum computing for AI.', icon: CpuChipIcon, features: ['Quantum Supremacy', 'Neural Architecture Search', 'Hybrid Classical-Quantum', 'Scalable Architecture'], href: '/solutions/quantum-neural-networks' },
	{ name: 'Autonomous Business Operations', description: 'Self-optimizing business processes.', icon: RocketLaunchIcon, features: ['Process Automation', 'Predictive Analytics', 'Continuous Optimization', 'Real-time Monitoring'], href: '/solutions/autonomous-business' },
	{ name: 'IT Asset Management', description: 'Intelligent asset tracking and optimization.', icon: ShieldCheckIcon, features: ['Asset Discovery', 'Lifecycle Management', 'Security Compliance', 'Cost Optimization'], href: '/solutions/it-asset-management' }
]

const industryApplications = [
	{ name: 'Healthcare', description: 'AI-powered diagnostics, drug discovery, and patient care.', icon: UserGroupIcon, useCases: ['Medical Imaging Analysis', 'Drug Discovery', 'Patient Risk Assessment', 'Clinical Decision Support'] },
	{ name: 'Finance', description: 'Intelligent trading, risk assessment, and fraud detection.', icon: ChartBarIcon, useCases: ['Algorithmic Trading', 'Credit Risk Analysis', 'Fraud Detection', 'Portfolio Optimization'] },
	{ name: 'Manufacturing', description: 'Predictive maintenance, quality control, and supply chain.', icon: CogIcon, useCases: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Production Planning'] },
	{ name: 'Retail', description: 'Customer analytics, inventory, and personalization.', icon: GlobeAltIcon, useCases: ['Customer Analytics', 'Inventory Management', 'Personalized Marketing', 'Demand Forecasting'] }
]

const implementationSteps = [
	{ step: '01', title: 'Discovery & Assessment', description: 'Analyze systems, identify opportunities, define strategy.', icon: LightBulbIcon },
	{ step: '02', title: 'Solution Design', description: 'Design custom AI solutions for your needs.', icon: CpuChipIcon },
	{ step: '03', title: 'Development & Testing', description: 'Build and validate for reliability and performance.', icon: CogIcon },
	{ step: '04', title: 'Deployment & Training', description: 'Deploy with training to maximize adoption.', icon: RocketLaunchIcon },
	{ step: '05', title: 'Ongoing Support', description: 'Monitor, optimize, and support long-term value.', icon: ShieldCheckIcon }
]

export default function SolutionsPage() {
	return (
		<div className="bg-black">
			<div className="relative isolate px-6 pt-24 lg:px-8">
				<div className="mx-auto max-w-2xl py-16">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
							AI Solutions for <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Every Industry</span>
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-300">Discover cutting-edge AI and technology solutions designed to transform your business operations and drive growth.</p>
					</div>
				</div>
			</div>

			<div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-blue-400">Our Solutions</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Flagship AI Platforms</p>
					<p className="mt-6 text-lg leading-8 text-gray-300">Revolutionary technology pushing the boundaries of what's possible in AI.</p>
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
											<div className="h-2 w-2 bg-blue-400 rounded-full" />
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
					<p className="mt-6 text-lg leading-8 text-gray-300">Our AI solutions adapt across industries, delivering measurable results and competitive advantages.</p>
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
												<div className="h-1.5 w-1.5 bg-blue-400 rounded-full" />
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
								{index < implementationSteps.length - 1 && <div className="hidden lg:block absolute top-8 left-8 w-full h-0.5 bg-gray-700" />}
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
					<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Let's discuss how our AI solutions can accelerate your growth and give you a competitive edge.</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a href="/contact" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105">Get Started</a>
						<a href="/services" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">View Services <span aria-hidden="true">→</span></a>
					</div>
				</div>
			</div>
		</div>
	)
}
