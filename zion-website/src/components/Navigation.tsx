'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Research', href: '/research' },
  { name: 'Contact', href: '/contact' }]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className=&quot;fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10&quot;>
      <nav className=&quot;flex items-center justify-between p-6 lg:px-8&quot; aria-label=&quot;Global&quot;>
        <div className=&quot;flex lg:flex-1&quot;>
          <a href=&quot;/&quot; className=&quot;-m-1.5 p-1.5&quot;>
            <span className=&quot;sr-only&quot;>Zion Tech Group</span>
            <div className=&quot;text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200&quot;>
              Zion Tech Group
            </div>
          </Link>
        </div>
        <div className=&quot;flex lg:hidden&quot;>
          <button
            type=&quot;button&quot;
            className=&quot;-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400&quot;
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className=&quot;sr-only&quot;>Open main menu</span>
            <Bars3Icon className=&quot;h-6 w-6&quot; aria-hidden=&quot;true&quot; />
          </button>
        </div>
        <div className=&quot;hidden lg:flex lg:gap-x-12&quot;>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className=&quot;text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200 hover:-translate-y-0.5&quot;
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className=&quot;hidden lg:flex lg:flex-1 lg:justify-end&quot;>
          <a
            href=&quot;/contact&quot;
            className=&quot;text-sm font-semibold leading-6 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105&quot;
          >
            Get Started
          </Link>
        </div>
      </nav>
      <Dialog as=&quot;div&quot; className=&quot;lg:hidden&quot; open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className=&quot;fixed inset-0 z-50&quot; />
        <Dialog.Panel className=&quot;fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black/95 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10&quot;>
          <div className=&quot;flex items-center justify-between&quot;>
            <a href=&quot;/&quot; className=&quot;-m-1.5 p-1.5&quot;>
              <span className=&quot;sr-only&quot;>Zion Tech Group</span>
              <div className=&quot;text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent&quot;>
                Zion Tech Group
              </div>
            </Link>
            <button
              type=&quot;button&quot;
              className=&quot;-m-2.5 rounded-md p-2.5 text-gray-400&quot;
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className=&quot;sr-only&quot;>Close menu</span>
              <XMarkIcon className=&quot;h-6 w-6&quot; aria-hidden=&quot;true&quot; />
            </button>
          </div>
          <div className=&quot;mt-6 flow-root&quot;>
            <div className=&quot;-my-6 divide-y divide-gray-700&quot;>
              <div className=&quot;space-y-2 py-6&quot;>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className=&quot;-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800 transition-colors duration-200&quot;
                    onClick={() => setMobileMenuOpen(false)}
                  >;
                    {item.name}
</Link>
                ))}
              </div>
              <div className=&quot;py-6&quot;>
                <a
                  href=&quot;/contact&quot;
                  className=&quot;-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200&quot;
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}