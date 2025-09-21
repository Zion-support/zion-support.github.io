import React from 'react'
import { LightBulbIcon, CpuChipIcon, GlobeAltIcon, ShieldCheckIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const features = [
	{ name: 'AI-Powered Research', description: 'Accelerate research and discovery with advanced AI.', icon: LightBulbIcon },
	{ name: 'Quantum Computing', description: 'Quantum-inspired models for complex problems.', icon: CpuChipIcon },
	{ name: 'Global Solutions', description: 'Worldwide deployment of autonomous operations.', icon: GlobeAltIcon },
	{ name: 'Enterprise Security', description: 'Protect critical assets with robust security.', icon: ShieldCheckIcon },
	{ name: 'Data Analytics', description: 'Insights that drive better decisions.', icon: ChartBarIcon },
	{ name: 'Expert Team', description: 'World-class researchers and engineers.', icon: UserGroupIcon },
]

export default function HomePage() {
	return (
		<div className="bg-black">
			{/* Hero */}
			<div className="relative isolate px-6 pt-14 lg:px-8">
				<div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
							Leading the Future of{' '}
							<span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">AI & Technology</span>
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-300">
							Transform your business with artificial intelligence, automation, and secure infrastructure.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<a href="/contact" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105">Get Started</a>
							<a href="/about" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">Learn More <span aria-hidden="true">→</span></a>
						</div>
					</div>
				</div>
			</div>

			{/* Features */}
			<div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-blue-400">Advanced Technology</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Everything you need to accelerate innovation</p>
					<p className="mt-6 text-lg leading-8 text-gray-300">Our comprehensive suite of solutions empowers organizations to achieve breakthrough results.</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl lg:mt-20 lg:max-w-none">
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
	)
}