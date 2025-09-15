import React from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

const contactMethods = [
	{ name: 'Email', value: 'contact@ziontechgroup.com', icon: EnvelopeIcon },
	{ name: 'Phone', value: '+1 (555) 123-4567', icon: PhoneIcon },
	{ name: 'Address', value: '123 Innovation Way, San Francisco, CA', icon: MapPinIcon },
	{ name: 'Hours', value: 'Mon–Fri, 9:00am–6:00pm PT', icon: ClockIcon },
]

export default function ContactPage() {
	return (
		<div className="bg-black">
			<div className="relative isolate px-6 pt-14 lg:px-8">
				<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Get in touch</h1>
						<p className="mt-6 text-lg leading-8 text-gray-300">We’d love to hear from you. Send us a message and we’ll respond as soon as possible.</p>
					</div>
				</div>
			</div>

			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
					<div className="space-y-6 lg:col-span-1">
						{contactMethods.map((m) => (
							<div key={m.name} className="flex items-center gap-3 bg-white/5 rounded-xl p-4">
								<m.icon className="h-6 w-6 text-blue-400" />
								<div>
									<p className="text-sm text-gray-400">{m.name}</p>
									<p className="text-base text-gray-200">{m.value}</p>
								</div>
							</div>
						))}
					</div>
					<div className="lg:col-span-2">
						<form className="bg-white/5 rounded-2xl p-8 grid grid-cols-1 gap-6">
							<div>
								<label className="block text-sm text-gray-300">Name</label>
								<input type="text" className="mt-2 w-full rounded-md bg-black/40 border border-gray-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600" />
							</div>
							<div>
								<label className="block text-sm text-gray-300">Email</label>
								<input type="email" className="mt-2 w-full rounded-md bg-black/40 border border-gray-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600" />
							</div>
							<div>
								<label className="block text-sm text-gray-300">Message</label>
								<textarea rows={5} className="mt-2 w-full rounded-md bg-black/40 border border-gray-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600" />
							</div>
							<button className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all">
								<ChatBubbleLeftRightIcon className="h-5 w-5" />
								Send message
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
