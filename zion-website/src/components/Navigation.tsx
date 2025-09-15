<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 17fc7cb9c7c9c1144afdca822c756f504221b8d0
=======
>>>>>>> cursor/create-and-deploy-new-content-f175
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
>>>>>>> cursor/create-and-deploy-new-content-cc9d
'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
<<<<<<< HEAD
  { name: 'Solutions', href: '/solutions' },
  { name: 'Research', href: '/research' },
  { name: 'Contact', href: '/contact' },
]

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-634d
=======
>>>>>>> 17fc7cb9c7c9c1144afdca822c756f504221b8d0
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-b0b6
>>>>>>> cursor/create-and-deploy-new-content-f175
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
  { name: 'Solutions', href: '/solutions' },
  { name: 'Blog', href: '/blog' },
  { name: 'Updates', href: '/updates' },
=======
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
<<<<<<< HEAD
  { name: 'Solutions', href: '/solutions' },
  { name: 'Research', href: '/research', tag: 'New' },
  { name: 'New', href: '/updates/real-time-ai-analytics-dashboard-v3-0' },
<<<<<<< HEAD
=======
>>>>>>> 8431d4330936f866c5677d40e9bd7fbc17755535
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
  { name: 'Contact', href: '/contact' },
=======
  { name: 'Blog', href: '/blog' },
  { name: 'Updates', href: '/updates' },
>>>>>>> cursor/create-and-deploy-new-content-8472
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
=======
  { name: 'Solutions', href: '/solutions' },
  { name: 'Blog', href: '/blog' },
  { name: 'Updates', href: '/updates' },
  { name: 'Contact', href: '/contact' },
>>>>>>> cursor/create-and-deploy-new-content-3afb
<<<<<<< HEAD
]

>>>>>>> cursor/create-and-deploy-new-content-dc9e
=======
>>>>>>> 8431d4330936f866c5677d40e9bd7fbc17755535
]

>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
>>>>>>> cursor/create-and-deploy-new-content-cc9d
export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Zion Tech Group</span>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">Zion Tech Group</div>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200 hover:-translate-y-0.5">{item.name}</a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/contact" className="text-sm font-semibold leading-6 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105">Get Started</a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black/95 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Zion Tech Group</span>
              <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Zion Tech Group</div>
            </a>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-400" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-700">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800 transition-colors duration-200" onClick={() => setMobileMenuOpen(false)}>
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a href="/contact" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200" onClick={() => setMobileMenuOpen(false)}>
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

