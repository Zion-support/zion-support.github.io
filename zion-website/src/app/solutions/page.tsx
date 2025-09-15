import React from 'react'
import { LightBulbIcon, CpuChipIcon, RocketLaunchIcon, ShieldCheckIcon, ChartBarIcon, GlobeAltIcon, UserGroupIcon, CogIcon } from '@heroicons/react/24/outline'

const flagshipSolutions = [
	{ name: 'AI Research Assistant', description: 'Autonomous research platform accelerating discovery.', icon: LightBulbIcon, features: ['NLP', 'Multimodal', 'Collaboration', 'Analytics'], href: '/solutions/ai-autonomous-research' },
	{ name: 'Quantum Neural Networks', description: 'Next-gen quantum computing for AI applications.', icon: CpuChipIcon, features: ['Quantum Supremacy', 'NAS', 'Hybrid Classical-Quantum', 'Scalable'], href: '/solutions/quantum-neural-networks' },
	{ name: 'Autonomous Business Operations', description: 'Self-optimizing business processes.', icon: RocketLaunchIcon, features: ['Automation', 'Predictive Analytics', 'Optimization', 'Monitoring'], href: '/solutions/autonomous-business' },
	{ name: 'IT Asset Management', description: 'Intelligent asset tracking and optimization.', icon: ShieldCheckIcon, features: ['Discovery', 'Lifecycle', 'Compliance', 'Cost Optimization'], href: '/solutions/it-asset-management' },
]

const industryApplications = [
	{ name: 'Healthcare', description: 'Diagnostics, discovery, and care optimization.', icon: UserGroupIcon, useCases: ['Imaging Analysis', 'Drug Discovery', 'Risk Assessment', 'Clinical Support'] },
	{ name: 'Finance', description: 'Trading, risk, and fraud detection.', icon: ChartBarIcon, useCases: ['Algorithmic Trading', 'Credit Risk', 'Fraud Detection', 'Portfolio Optimization'] },
	{ name: 'Manufacturing', description: 'Maintenance, quality, and supply chain.', icon: CogIcon, useCases: ['Predictive Maintenance', 'Quality Control', 'Supply Chain', 'Production Planning'] },
	{ name: 'Retail', description: 'Behavior, inventory, and personalization.', icon: GlobeAltIcon, useCases: ['Customer Analytics', 'Inventory', 'Personalized Marketing', 'Demand Forecasting'] },
]

const implementationSteps = [
	{ step: '01', title: 'Discovery & Assessment', description: 'Analyze systems and opportunities.', icon: LightBulbIcon },
	{ step: '02', title: 'Solution Design', description: 'Design tailored AI solutions.', icon: CpuChipIcon },
	{ step: '03', title: 'Development & Testing', description: 'Build and test for performance.', icon: CogIcon },
	{ step: '04', title: 'Deployment & Training', description: 'Deploy and train for adoption.', icon: RocketLaunchIcon },
	{ step: '05', title: 'Ongoing Support', description: 'Monitor, optimize, and support.', icon: ShieldCheckIcon },
]

export default function SolutionsPage() {
	return (
		<div className="bg-black">
			<div className="relative isolate px-6 pt-14 lg:px-8">
				<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">AI Solutions for <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Every Industry</span></h1>
						<p className="mt-6 text-lg leading-8 text-gray-300">Discover solutions designed to transform your business operations and drive innovation.</p>
					</div>
				</div>
			</div>

			<div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-blue-400">Our Solutions</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Flagship AI Platforms</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
						{flagshipSolutions.map((solution) => (
							<div key={solution.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
								<div className="flex items-center gap-x-3 mb-4"><solution.icon className="h-8 w-8 text-blue-400" /><h3 className="text-xl font-semibold text-white">{solution.name}</h3></div>
								<p className="text-gray-300 mb-6">{solution.description}</p>
								<div className="space-y-3 mb-6">
									{solution.features.map((feature) => (
										<div key={feature} className="flex items-center gap-2"><div className="h-2 w-2 bg-blue-400 rounded-full"></div><span className="text-sm text-gray-300">{feature}</span></div>
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
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
						{industryApplications.map((industry) => (
							<div key={industry.name} className="flex flex-col group">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white"><industry.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />{industry.name}</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
									<p className="flex-auto mb-4">{industry.description}</p>
									<div className="space-y-2">
										{industry.useCases.map((useCase) => (
											<div key={useCase} className="flex items-center gap-2"><div className="h-1.5 w-1.5 bg-blue-400 rounded-full"></div><span className="text-sm text-gray-400">{useCase}</span></div>
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
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-5">
						{implementationSteps.map((step, index) => (
							<div key={step.step} className="relative">
								{index < implementationSteps.length - 1 && (<div className="hidden lg:block absolute top-8 left-8 w-full h-0.5 bg-gray-700"></div>)}
								<div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
									<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20 mb-4"><step.icon className="h-8 w-8 text-blue-400" /></div>
									<div className="text-sm font-semibold text-blue-400 mb-2">{step.step}</div>
									<h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
									<p className="text-sm text-gray-300">{step.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}