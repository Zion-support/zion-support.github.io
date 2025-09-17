>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
'use client'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
=======
>>>>>>> 6b23b02814abc4e2b48cf43d809846f0fbf77db0
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
  { name: 'Contact', href: '/contact' },
=======
  { name: 'Blog', href: '/blog' },
  { name: 'Updates', href: '/updates' },
>>>>>>> cursor/create-and-deploy-new-content-8472
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
=======
=======
  { name: 'Solutions', href: '/solutions' },
  { name: 'Blog', href: '/blog' },
  { name: 'Updates', href: '/updates' },
  { name: 'Contact', href: '/contact' },
>>>>>>> cursor/create-and-deploy-new-content-3afb
=======
>>>>>>> 6b23b02814abc4e2b48cf43d809846f0fbf77db0
]

>>>>>>> cursor/create-and-deploy-new-content-dc9e
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
=======
  { name: 'Blog', href: '/blog' },
  { name: 'Updates', href: '/updates' },
  { name: 'New', href: '/updates/real-time-agent-cost-controller-1-0' },
>>>>>>> cursor/create-and-deploy-new-content-2def
]

>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">Navigation</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default Navigation;
=======
"use client"


const navLinks = [
	{ name: 'About', href: '/about' },
	{ name: 'Services', href: '/services' },
	{ name: 'Solutions', href: '/solutions' },
	{ name: 'Research', href: '/research' },
	{ name: 'Updates', href: '/updates', badge: 'New' },
]

=======
>>>>>>> dfce83fecd5efb7c91a4f4abe3933d9108eb5d24
export default function Navigation() {
	return (
		<header className="fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
			<nav className="mx-auto max-w-7xl flex items-center justify-between p-4" aria-label="Global">
				<a href="/" className="text-white font-bold">Zion</a>
				<div className="hidden md:flex gap-x-6">
					{navLinks.map((item) => (
						<a key={item.name} href={item.href} className="relative inline-flex items-center gap-1 text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200 hover:-translate-y-0.5">
							<span>{item.name}</span>
							{(item as any).badge ? (
								<span className="ml-1 rounded bg-blue-600 px-1.5 py-0.5 text-[10px] font-bold text-white">{(item as any).badge}</span>
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
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
