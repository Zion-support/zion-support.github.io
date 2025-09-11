import React from 'react';


'use client'
import React from 'react';
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
  { name: 'Home', href: '/' }
  { name: 'About', href: '/about' }
  { name: 'Services', href: '/services' }
  { name: 'Solutions', href: '/solutions' }
  { name: 'Research', href: '/research' }
  { name: 'Contact', href: '/contact' }]
export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

'use client';
import { useState } from 'react';
import { Dialog } from '@headlessui / react';
import { Bars3Icon, XMarkIcon } from '@heroicons / react / 24 / outline';
const navigation = [;
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Research', href: '/research' },
  { name: 'Contact', href: '/contact' }];
export default /**
 * Navigation - Function description
 */
function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState (false);


;
  return (;
    <header className=&quot;fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10&quot;>
      <nav className=&quot;flex items-center justify-between p-6 lg:px-8&quot; aria-label=&quot;Global&quot;>
        <div className=&quot;flex lg:flex-1&quot;>
          <a href=&quot;/&quot; className=&quot;-m-1.5 p-1.5&quot;>
            <span className=&quot;sr-only&quot;>Zion Tech Group</span>
            <div className=&quot;text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200&quot;>

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Zion Tech Group</span>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">
              Zion Tech Group
            </div>
          </Link>
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
            <a              key={item.name}
              href={item.href}
              className=&quot;text - sm font - semibold leading - 6 text - white hover:text - blue - 400 transition - colors duration - 200 hover:-translate - y-0.5 & quot;
            >;
              {item.name}
            </Link>))}
        </div>;
        <div className=&quot;hidden lg:flex lg:flex - 1 lg:justify - end & quot;>;
          <a;
            href=&quot;/contact & quot;
            className=&quot;text - sm font - semibold leading - 6 text - white bg - blue - 600 hover:bg - blue - 700 px - 4 py - 2 rounded - lg transition - all duration - 200 hover:scale - 105 & quot;
          >;
            Get Started;
          </Link>;
        </div>;
      </nav>;
      <Dialog as=&quot;div & quot; className=&quot;lg:hidden & quot; open={mobileMenuOpen} on_close={setMobileMenuOpen}>;
        <div className=&quot;fixed inset - 0 z - 50 & quot; />;
        <Dialog.Panel className=&quot;fixed inset - y-0 right - 0 z - 50 w - full overflow - y-auto bg - black / 95 px - 6 py - 6 sm:max - w-sm sm:ring - 1 sm:ring - white / 10 & quot;>;
          <div className=&quot;flex items - center justify - between & quot;>;
            <a href=&quot;/&quot; className=&quot;-m - 1.5 p - 1.5 & quot;>;
              <span className=&quot;sr - only & quot;>Zion Tech Group</span>;
              <div className=&quot;text - xl font - bold bg - gradient - to - r from - blue - 400 to - purple - 600 bg - clip - text text - transparent & quot;>;
                Zion Tech Group;
              </div>;
            </Link>;
            <button;
              type=&quot;button & quot;
              className=&quot;-m - 2.5 rounded - md p - 2.5 text - gray - 400 & quot;
              on_click={() => setMobileMenuOpen (false)}
            >;
              <span className=&quot;sr - only & quot;>Close menu</span>;
              <XMarkIcon className=&quot;h - 6 w - 6&quot; aria - hidden=&quot;true & quot; />;
            </button>;
          </div>;
          <div className=&quot;mt - 6 flow - root & quot;>;
            <div className=&quot;-my - 6 divide - y divide - gray - 700 & quot;>;
              <div className=&quot;space - y-2 py - 6&quot;>;
                {navigation.map ((item) => (
                  <a;
                    key={item.name}
                    href={item.href}
                    className=&quot;-mx - 3 block rounded - lg px - 3 py - 2 text - base font - semibold leading - 7 text - white hover:bg - gray - 800 transition - colors duration - 200 & quot;
                    on_click={() => setMobileMenuOpen (false)}
                  >;
                    {item.name}
</Link>))}
              </div>;
              <div className=&quot;py - 6&quot;>;
                <a;
                  href=&quot;/contact & quot;
                  className=&quot;-mx - 3 block rounded - lg px - 3 py - 2.5 text - base font - semibold leading - 7 text - white bg - blue - 600 hover:bg - blue - 700 transition - colors duration - 200 & quot;
                  on_click={() => setMobileMenuOpen (false)}
                >;
                  Get Started;
                </Link>;
              </div>;
            </div>;
          </div>;
        </Dialog.Panel>;
      </Dialog>;
    </header>);
'use client'
import React from 'react';

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
const navigation = [
  { name: 'Home', href: '/' }
  { name: 'About', href: '/about' }
  { name: 'Services', href: '/services' }
  { name: 'Solutions', href: '/solutions' }
  { name: 'Research', href: '/research' }
  { name: 'Contact', href: '/contact' }]
export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
;
  return (;
    <header className=&quot;fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10&quot;>
      <nav className=&quot;flex items-center justify-between p-6 lg:px-8&quot; aria-label=&quot;Global&quot;>
        <div className=&quot;flex lg:flex-1&quot;>
          <a href=&quot;/&quot; className=&quot;-m-1.5 p-1.5&quot;>
            <span className=&quot;sr-only&quot;>Zion Tech Group</span>
            <div className=&quot;text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200&quot;>

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Zion Tech Group</span>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">
              Zion Tech Group
            </div>
          </Link>
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
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/contact"
            className="text-sm font-semibold leading-6 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
          >
            Get Started
          </Link>
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
            </Link>
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
                  >;
                    {item.name}
</Link>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
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