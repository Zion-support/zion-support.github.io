import React from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'

const contactMethods = [
	{ name: 'Email', description: 'Get in touch with our team', value: 'contact@ziontechgroup.com', href: 'mailto:contact@ziontechgroup.com', icon: EnvelopeIcon },
	{ name: 'Phone', description: 'Speak with an expert', value: '+1 (555) 123-4567', href: 'tel:+15551234567', icon: PhoneIcon },
	{ name: 'Office', description: 'Visit our headquarters', value: '1234 Innovation Drive, Silicon Valley, CA 94025', href: '#', icon: MapPinIcon },
]

const officeLocations = [
	{ name: 'Silicon Valley', address: '1234 Innovation Drive, San Jose, CA 94025', phone: '+1 (555) 123-4567', email: 'sv@ziontechgroup.com', hours: 'Mon-Fri: 9:00 AM - 6:00 PM PST' },
	{ name: 'London', address: '456 Tech Square, London, UK EC2A 4BX', phone: '+44 20 1234 5678', email: 'london@ziontechgroup.com', hours: 'Mon-Fri: 9:00 AM - 6:00 PM GMT' },
]

export default function ContactPage() {
	return (
		<div className="bg-black">
			<div className="relative isolate px-6 pt-14 lg:px-8">
				<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Get in <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Touch</span></h1>
						<p className="mt-6 text-lg leading-8 text-gray-300">Let's discuss how our technology can accelerate your growth.</p>
					</div>
				</div>
			</div>

			<div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-blue-400">Contact Us</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Multiple ways to reach us</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
						{contactMethods.map((method) => (
							<div key={method.name} className="flex flex-col group">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white"><method.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />{method.name}</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
									<p className="flex-auto">{method.description}</p>
									<p className="mt-6"><a href={method.href} className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200">{method.value} <span aria-hidden="true">→</span></a></p>
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>

			<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-blue-400">Send us a message</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Let's start a conversation</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
					<form className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
						<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
							<div>
								<label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">First name</label>
								<div className="mt-2.5"><input type="text" id="first-name" className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" /></div>
							</div>
							<div>
								<label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">Last name</label>
								<div className="mt-2.5"><input type="text" id="last-name" className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" /></div>
							</div>
							<div className="sm:col-span-2">
								<label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">Email</label>
								<div className="mt-2.5"><input type="email" id="email" className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" /></div>
							</div>
							<div className="sm:col-span-2">
								<label htmlFor="company" className="block text-sm font-semibold leading-6 text-white">Company</label>
								<div className="mt-2.5"><input type="text" id="company" className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" /></div>
							</div>
							<div className="sm:col-span-2">
								<label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">Message</label>
								<div className="mt-2.5"><textarea id="message" rows={4} className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" defaultValue="" /></div>
							</div>
						</div>
						<div className="mt-8 flex justify-end"><button type="submit" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105">Send message</button></div>
					</form>
				</div>
			</div>

			<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-blue-400">Global Presence</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Visit our offices worldwide</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
						{officeLocations.map((office) => (
							<div key={office.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
								<div className="flex items-center gap-x-3 mb-4"><MapPinIcon className="h-8 w-8 text-blue-400" /><h3 className="text-xl font-semibold text-white">{office.name}</h3></div>
								<div className="space-y-3 text-gray-300">
									<p className="flex items-start gap-2"><MapPinIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />{office.address}</p>
									<p className="flex items-center gap-2"><PhoneIcon className="h-5 w-5 text-blue-400" />{office.phone}</p>
									<p className="flex items-center gap-2"><EnvelopeIcon className="h-5 w-5 text-blue-400" />{office.email}</p>
									<p className="flex items-center gap-2"><ClockIcon className="h-5 w-5 text-blue-400" />{office.hours}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}