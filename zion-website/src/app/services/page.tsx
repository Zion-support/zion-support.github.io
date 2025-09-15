import React from 'react'
import { UserGroupIcon, LightBulbIcon, CogIcon, ShieldCheckIcon, ChartBarIcon, RocketLaunchIcon, AcademicCapIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

const professionalServices = [
	{ name: 'AI Strategy & Consulting', description: 'Assessment and strategic planning for AI transformation.', icon: LightBulbIcon, features: ['Technology Assessment', 'ROI Analysis', 'Implementation Roadmap', 'Change Management'], duration: '4-8 weeks' },
	{ name: 'Custom AI Development', description: 'Tailored AI solutions for your business needs.', icon: CogIcon, features: ['Custom Algorithms', 'Integration Services', 'Testing & Validation', 'Documentation & Training'], duration: '8-24 weeks' },
	{ name: 'AI Integration & Deployment', description: 'Seamless integration into your infrastructure.', icon: RocketLaunchIcon, features: ['System Integration', 'API Development', 'Performance Optimization', 'Go-live Support'], duration: '4-12 weeks' },
	{ name: 'AI Training & Education', description: 'Train your teams to maximize AI value.', icon: AcademicCapIcon, features: ['Technical Training', 'Best Practices', 'Ongoing Support', 'Certification Programs'], duration: '2-4 weeks' },
	{ name: 'AI Maintenance & Support', description: 'Continuous monitoring and optimization.', icon: ShieldCheckIcon, features: ['24/7 Monitoring', 'Performance Optimization', 'Security Updates', 'Technical Support'], duration: 'Ongoing' },
	{ name: 'AI Audit & Compliance', description: 'Ensure regulatory and ethical compliance.', icon: ChartBarIcon, features: ['Compliance Assessment', 'Ethical AI Review', 'Security Audits', 'Risk Mitigation'], duration: '2-6 weeks' }
]

const serviceProcess = [
	{ step: '01', title: 'Discovery & Assessment', description: 'Understand challenges and objectives.', icon: LightBulbIcon },
	{ step: '02', title: 'Solution Design', description: 'Design a solution tailored to your needs.', icon: CogIcon },
	{ step: '03', title: 'Development & Testing', description: 'Implement and validate the solution.', icon: RocketLaunchIcon },
	{ step: '04', title: 'Deployment & Training', description: 'Deploy and train teams for adoption.', icon: AcademicCapIcon },
	{ step: '05', title: 'Ongoing Support', description: 'Monitor and optimize for long-term success.', icon: ShieldCheckIcon }
]

const reasonsToChoose = [
	{ name: 'Expert Team', description: 'World-class AI researchers and engineers.', icon: UserGroupIcon },
	{ name: 'Proven Track Record', description: 'Delivered 500+ AI solutions globally.', icon: ChartBarIcon },
	{ name: 'Cutting-Edge Technology', description: 'Access to the latest AI research and innovation.', icon: LightBulbIcon },
	{ name: 'Global Support', description: '24/7 support across time zones.', icon: GlobeAltIcon }
]

export default function ServicesPage() {
	return (
		<div className="bg-black">
			<div className="relative isolate px-6 pt-24 lg:px-8">
				<div className="mx-auto max-w-2xl py-16">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
							Professional <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">AI Services</span>
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-300">From strategy to implementation, our services help you navigate AI and achieve results.</p>
					</div>
				</div>
			</div>

			<div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-blue-400">Our Services</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Comprehensive AI Solutions</p>
					<p className="mt-6 text-lg leading-8 text-gray-300">End-to-end services designed to accelerate digital transformation and drive outcomes.</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
						{professionalServices.map((service) => (
							<div key={service.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
								<div className="flex items-center gap-x-3 mb-4">
									<service.icon className="h-8 w-8 text-blue-400" />
									<h3 className="text-xl font-semibold text-white">{service.name}</h3>
								</div>
								<p className="text-gray-300 mb-6">{service.description}</p>
								<div className="space-y-3 mb-6">
									{service.features.map((feature) => (
										<div key={feature} className="flex items-center gap-2">
											<div className="h-2 w-2 bg-blue-400 rounded-full" />
											<span className="text-sm text-gray-300">{feature}</span>
										</div>
									))}
								</div>
								<div className="flex items-center justify-between">
									<span className="text-sm text-blue-400 font-medium">Duration: {service.duration}</span>
									<a href="/contact" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200">Learn more <span aria-hidden="true">→</span></a>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-blue-400">Our Process</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">How We Deliver Results</p>
					<p className="mt-6 text-lg leading-8 text-gray-300">Our proven methodology ensures successful delivery and maximum value.</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-5">
						{serviceProcess.map((step, index) => (
							<div key={step.step} className="relative">
								{index < serviceProcess.length - 1 && <div className="hidden lg:block absolute top-8 left-8 w-full h-0.5 bg-gray-700" />}
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
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-blue-400">Why Choose Us</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">The Zion Tech Group Advantage</p>
					<p className="mt-6 text-lg leading-8 text-gray-300">Discover what sets us apart and why organizations choose us for AI transformation.</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
						{reasonsToChoose.map((reason) => (
							<div key={reason.name} className="flex flex-col group">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
									<reason.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
									{reason.name}
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
									<p className="flex-auto">{reason.description}</p>
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>

			<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to get started?</h2>
					<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Let's discuss how our AI services can transform your business and accelerate your growth.</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a href="/contact" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105">Schedule Consultation</a>
						<a href="/solutions" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">View Solutions <span aria-hidden="true">→</span></a>
					</div>
				</div>
			</div>
		</div>
	)
}
