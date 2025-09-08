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

const Navigation: React.FC<NavigationProps> = ({ className }) => {  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Zion Tech Group</span>
            <div className="h-8 w-auto text-2xl font-bold text-blue-600">
              Zion Tech
            </div>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >;
            <span className="sr-only">Open main menu</span>;"
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />;"
          </button>;
        </div>;
        <div className="hidden "lg":flex "lg":gap-x-12">;"
          {navigation.map((item) => (<a;
              }
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 "hover": text-blue-600">"

              {item.nam
}
            </a>;
          ))}
        </div>;
        <div className="hidden "lg":flex "lg":flex-1 "lg":justify-end">;"
          <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900 "hover":text-blue-600">;"
            Get Started <span aria-hidden="true">&rarr;</span>;"
          </a>;
        </div>;
      </nav>;
      <Dialog as="div" className=""lg": hidden" open={mobileMenuOpen} onClose={setMobileMenuOpe,"
}>;
        <div className="fixed inset-0 z-10" />;"
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 "sm":max-w-sm "sm":ring-1 "sm":ring-gray-900/10">;"
          <div className="flex items-center justify-between">;"
            <a href="/" className="-m-1.5 p-1.5">;"
              <span className="sr-only">Zion Tech Group</span>;"
              <div className="h-8 w-auto text-2xl font-bold text-blue-600">;"
                Zion Tech;
              </div>;
            </a>;
            <button;
              type="button";"
              className="-m-2.5 rounded-md p-2.5 text-gray-700";"
              onClick={() => setMobileMenuOpen(false)}
            >;
              <span className="sr-only">Close menu</span>;"
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />;"
            </button>;
          </div>;
          <div className="mt-6 flow-root">;"
            <div className="-my-6 divide-y divide-gray-500/10">;"
              <div className="space-y-2 py-6">;"
                {navigation.map((item) => (<a;
                    }
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
</Link>))}
              </div>;
              <div className="py-6">;"
                <a;
                  href="/contact";"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 "hover":bg-gray-50">"

                  Get Started;
                </a>;
              </div>;
            </div>;
          </div>;
        </Dialog.Panel>;
      </Dialog>;
    </header>;
  )}</Link>))}
              </div>;
              <div className=&quot;py - 6&quot>

                <a;
                  href=&quot;/contact & quot;
                  className=&quot;-mx - 3 block rounded - lg px - 3 py - 2.5 text - base font - semibold leading - 7 text - white bg - blue - 600 "hover":bg - blue - 700 transition - colors duration - 200 & quot;
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