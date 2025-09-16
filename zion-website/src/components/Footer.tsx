import React from 'react'

const navigation = {
	main: [
		{ name: 'About', href: '/about' },
		{ name: 'Services', href: '/services' },
		{ name: 'Solutions', href: '/solutions' },
		{ name: 'Research', href: '/research' },
		{ name: 'Contact', href: '/contact' },
		{ name: 'Privacy', href: '/privacy' },
		{ name: 'Terms', href: '/terms' },
	],
}

export default function Footer() {
	return (
		<footer className="bg-gray-900 border-t border-white/10">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
				<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
					{navigation.main.map((item) => (
						<a key={item.name} href={item.href} className="text-base text-gray-300 hover:text-white transition-colors duration-200">
							{item.name}
						</a>
					))}
				</div>
				<div className="mt-12 border-t border-gray-800 pt-8">
					<p className="text-base text-gray-400 text-center">&copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}
