"use client"

import React from 'react'

const navLinks = [
	{ name: 'About', href: '/about' },
	{ name: 'Services', href: '/services' },
	{ name: 'Solutions', href: '/solutions' },
	{ name: 'Research', href: '/research' },
	{ name: 'Updates', href: '/updates', badge: 'New' },
]

export default function Navigation() {
	return (
		<header className="fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
			<nav className="mx-auto max-w-7xl flex items-center justify-between p-4" aria-label="Global">
				<a href="/" className="text-white font-bold">Zion</a>
				<div className="hidden md:flex gap-x-6">
					{navLinks.map((item) => (
						<a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200 hover:-translate-y-0.5">
							{item.name}
							{item.badge ? (
								<span className="ml-2 align-middle inline-flex items-center rounded-full bg-blue-500/20 px-2 py-0.5 text-[10px] font-semibold text-blue-300 ring-1 ring-inset ring-blue-500/30">{item.badge}</span>
							) : null}
						</a>
					))}
				</div>
				<div className="hidden md:flex">
					<a href="/contact" className="text-sm font-semibold leading-6 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105">Get Started</a>
				</div>
			</nav>
		</header>
	)
}
