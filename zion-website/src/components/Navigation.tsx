'use client'

<<<<<<< HEAD
import { Fragment } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '/solutions/analytics', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '/solutions/engagement', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers\' data will be safe and secure', href: '/solutions/security', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '/solutions/integrations', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '/solutions/automations', icon: ArrowPathIcon },
]

const callsToAction = [
  { name: 'Watch demo', href: '/demo', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '/contact', icon: PhoneIcon },
]

const navigation = [
<<<<<<< HEAD
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  { name: 'Blog', href: '/blog' },
=======
=======
  { name: 'Updates', href: '/updates' },
>>>>>>> origin/feature/updates-2025-09
  { name: 'Research', href: '/research' },
>>>>>>> origin/feature/updates-content
  { name: 'Updates', href: '/updates' },
  { name: 'Contact', href: '/contact' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

<<<<<<< HEAD
export default function Navigation() {
=======
>>>>>>> origin/feature/updates-content
  return (
    <header className="bg-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Zion</span>
            <img className="h-8 w-auto" src="/logo.svg" alt="Zion" />
=======
=======
  { name: 'Case Studies', href: '/case-studies' },
>>>>>>> origin/feat/case-studies-content
  { name: 'Research', href: '/research' },
  { name: 'Contact', href: '/contact' },
=======
import React from 'react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
<<<<<<< HEAD
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/about' },
	{ name: 'Services', href: '/services' },
	{ name: 'Solutions', href: '/solutions' },
	{ name: 'Research', href: '/research' },
	{ name: 'Contact', href: '/contact' },
>>>>>>> origin/feat/new-content-home-20250915
=======
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Research', href: '/research' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
>>>>>>> origin/feat/news-and-fixes
]

export default function Navigation() {
<<<<<<< HEAD
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/feat/news-and-fixes
=======
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
>>>>>>> origin/feat/research-article-promo
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Zion Tech Group</span>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">
              Zion Tech Group
            </div>
>>>>>>> origin/feature/content-updates-and-merge-fixes
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
<<<<<<< HEAD
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
=======
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
>>>>>>> origin/feature/content-updates-and-merge-fixes
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
<<<<<<< HEAD
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Product
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
              {item.name}
            </a>
          ))}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/contact" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
<<<<<<< HEAD
    </header>
  )
}
=======
=======
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200 hover:-translate-y-0.5"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/contact"
            className="text-sm font-semibold leading-6 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </nav>
>>>>>>> origin/feature/content-updates-and-merge-fixes
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black/95 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Zion Tech Group</span>
              <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-700">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/feature/updates-content
=======
>>>>>>> origin/feature/updates-2025-09
=======
>>>>>>> origin/feature/content-updates-and-merge-fixes
=======
>>>>>>> origin/feat/case-studies-content
=======
>>>>>>> origin/feat/content-promo
=======
=======
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/about' },
	{ name: 'Services', href: '/services' },
	{ name: 'Solutions', href: '/solutions' },
	{ name: 'Research', href: '/research' },
	{ name: 'Contact', href: '/contact' },
]

export default function Navigation() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

>>>>>>> origin/feat/new-updates-ads
	return (
		<header className="fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
			<nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
				<div className="flex lg:flex-1">
					<a href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">Zion Tech Group</span>
						<div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">
							Zion Tech Group
						</div>
					</a>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200 hover:-translate-y-0.5"
						>
							{item.name}
						</a>
					))}
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<a
						href="/contact"
						className="text-sm font-semibold leading-6 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
					>
						Get Started
					</a>
				</div>
			</nav>
			<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
				<div className="fixed inset-0 z-50" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black/95 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
					<div className="flex items-center justify-between">
						<a href="/" className="-m-1.5 p-1.5">
							<span className="sr-only">Zion Tech Group</span>
							<div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
								Zion Tech Group
							</div>
						</a>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-400"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-700">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800 transition-colors duration-200"
										onClick={() => setMobileMenuOpen(false)}
									>
										{item.name}
										</a>
								))}
							</div>
							<div className="py-6">
								<a
									href="/contact"
									className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
									onClick={() => setMobileMenuOpen(false)}
								>
									Get Started
<<<<<<< HEAD
									</a>
=======
								</a>
>>>>>>> origin/feat/new-updates-ads
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	)
}
<<<<<<< HEAD
>>>>>>> origin/feat/new-content-home-20250915
=======
>>>>>>> origin/feat/new-updates-ads
=======

>>>>>>> origin/feat/news-and-fixes
=======

>>>>>>> origin/feat/research-article-promo
