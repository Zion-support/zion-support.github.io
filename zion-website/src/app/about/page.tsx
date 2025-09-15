import React from 'react'
import { UserGroupIcon, LightBulbIcon, GlobeAltIcon, ShieldCheckIcon, AcademicCapIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

const values = [
	{ name: 'Innovation First', description: "We push the boundaries of what's possible, exploring new frontiers in AI and technology.", icon: LightBulbIcon },
	{ name: 'Global Impact', description: 'Our solutions transform industries and improve lives worldwide.', icon: GlobeAltIcon },
	{ name: 'Trust & Security', description: 'We uphold the highest standards of security and ethical AI.', icon: ShieldCheckIcon },
	{ name: 'Research Excellence', description: 'World-class researchers drive breakthrough discoveries.', icon: AcademicCapIcon },
]

const team = [
	{ name: 'Dr. Sarah Chen', role: 'Chief Executive Officer', bio: "Former AI researcher at Stanford, leading Zion Tech Group's vision.", image: '/images/team/sarah-chen.jpg' },
	{ name: 'Dr. Marcus Rodriguez', role: 'Chief Technology Officer', bio: 'Quantum computing expert focused on advanced AI systems.', image: '/images/team/marcus-rodriguez.jpg' },
]

export default function AboutPage() {
	return (
		<div className="bg-black">
			<div className="relative isolate px-6 pt-14 lg:px-8">
				<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
							About <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Zion Tech Group</span>
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-300">We pioneer AI, quantum computing, and autonomous systems to advance human potential.</p>
					</div>
				</div>
			</div>

			<div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-blue-400">Our Purpose</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Mission & Vision</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
						<div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
							<div className="flex items-center gap-x-3 mb-4"><RocketLaunchIcon className="h-8 w-8 text-blue-400" /><h3 className="text-xl font-semibold text-white">Our Mission</h3></div>
							<p className="text-gray-300">Accelerate progress through trustworthy AI and technology solutions.</p>
						</div>
						<div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
							<div className="flex items-center gap-x-3 mb-4"><LightBulbIcon className="h-8 w-8 text-purple-400" /><h3 className="text-xl font-semibold text-white">Our Vision</h3></div>
							<p className="text-gray-300">A future where AI augments human capability, efficiently and sustainably.</p>
						</div>
					</div>
				</div>
			</div>

			<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-blue-400">What Drives Us</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Core Values</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
						{values.map((value) => (
							<div key={value.name} className="flex flex-col group">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white"><value.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />{value.name}</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300"><p className="flex-auto">{value.description}</p></dd>
							</div>
						))}
					</dl>
				</div>
			</div>

			<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-blue-400">Leadership</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet Our Team</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					{team.map((person) => (
						<article key={person.name} className="flex flex-col items-start group">
							<div className="relative w-full"><div className="aspect-[16/9] w-full rounded-2xl bg-gray-900" /></div>
							<div className="max-w-xl">
								<div className="group relative">
									<h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-blue-400 transition-colors duration-200">{person.name}</h3>
									<p className="mt-2 text-sm text-blue-400">{person.role}</p>
									<p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">{person.bio}</p>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</div>
	)
}