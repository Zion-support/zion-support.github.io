<<<<<<< HEAD
'use client';
;
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
;
const navigation = [;
  { name:'Home', href:'/' },;
  { name:'About', href:'/about' },;
  { name:'Services', href:'/services' },;
  { name:'Solutions', href:'/solutions' },;
  { name:'Research', href:'/research' },;
  { name:'Contact', href:'/contact' }];
;
export default function Navigation() {;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
;
  return (;
    <header className="fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">;
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">;
        <div className="flex lg:flex-1">;
          <a href="/" className="-m-1.5 p-1.5">;
            <span className="sr-only">Zion Tech Group</span>;
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">;
              Zion Tech Group;
            </div>;
          </a>;
        </div>;
        <div className="flex lg:hidden">;
          <button;
            type="button";
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400";
            onClick={() => setMobileMenuOpen(true)}
          >;
            <span className="sr-only">Open main menu</span>;
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />;
          </button>;
        </div>;
        <div className="hidden lg:flex lg:gap-x-12">;
          {navigation.map((item) => (;
            <a;
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200 hover:-translate-y-0.5";
            >;
              {item.name}
            </a>;
          ))}
        </div>;
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">;
          <a;
            href="/contact";
            className="text-sm font-semibold leading-6 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105";
          >;
            Get Started;
          </a>;
        </div>;
      </nav>;
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>;
        <div className="fixed inset-0 z-50" />;
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black/95 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">;
          <div className="flex items-center justify-between">;
            <a href="/" className="-m-1.5 p-1.5">;
              <span className="sr-only">Zion Tech Group</span>;
              <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">;
                Zion Tech Group;
              </div>;
            </a>;
            <button;
              type="button";
              className="-m-2.5 rounded-md p-2.5 text-gray-400";
              onClick={() => setMobileMenuOpen(false)}
            >;
              <span className="sr-only">Close menu</span>;
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />;
            </button>;
          </div>;
          <div className="mt-6 flow-root">;
            <div className="-my-6 divide-y divide-gray-700">;
              <div className="space-y-2 py-6">;
                {navigation.map((item) => (;
                  <a;
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800 transition-colors duration-200";
                    onClick={() => setMobileMenuOpen(false)}
                  >;
                    {item.name}
                  </a>;
                ))}
              </div>;
              <div className="py-6">;
                <a;
                  href="/contact";
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200";
                  onClick={() => setMobileMenuOpen(false)}
                >;
                  Get Started;
                </a>;
              </div>;
            </div>;
          </div>;
        </Dialog.Panel>;
      </Dialog>;
    </header>;
  );
=======
'use client'

import { useState } from 'react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Research', href: '/research' },
  { name: 'Contact', href: '/contact' }
]
export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white text-xl font-bold">Zion Tech Group</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}          </div>
        </div>
      )}
    </nav>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}