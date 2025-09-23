import React, { useState } from 'react';
import Link from 'next/link';
const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navigation = [
    { name: 'Home', href: '/', current: router.pathname === '/' },
    { name: 'Dashboard', href: '/dashboard', current: router.pathname === '/dashboard' },
    { name: 'Services', href: '/services', current: router.pathname === '/services' },
    { name: 'Status', href: '/status', current: router.pathname === '/status' },
    { name: 'Automation', href: '/automation', current: router.pathname.startsWith('/automation') },
    { name: 'Reports', href: '/reports', current: router.pathname.startsWith('/reports') },
    { name: 'About', href: '/about', current: router.pathname === '/about' },
  ];

  const isCurrentPage = (href: string) => {
    if (href === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(href);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-blue-60o0">
                bolt.new.zion.app
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    isCurrentPage(item.href)
                      ? 'border-blue-50o0 text-gray-90o0'
                      : 'border-transparent text-gray-50o0 hover:border-gray-30o0 hover:text-gray-70o0'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="flex space-x-4">
              <Link
                href="/automation/service-factory-dashboard.html"
                className="text-gray-50o0 hover:text-gray-70o0 px-3 py-2 rounded-md text-sm font-medium"
              >
                Factory Dashboard
              </Link>
              <Link
                href="/services"
                className="bg-blue-60o0 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-70o0"
              >
                View Services
              </Link>
            </div>
          </div>

          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-40o0 hover:text-gray-50o0 hover:bg-gray-10o0 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-50o0"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"  />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  isCurrentPage(item.href)
                    ? 'bg-blue-50 border-blue-50o0 text-blue-70o0'
                    : 'border-transparent text-gray-50o0 hover:bg-gray-50 hover:border-gray-30o0 hover:text-gray-70o0'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-20o0">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-blue-60o0 flex items-center justify-center">
                  <span className="text-white font-medium text-sm">AI</span>
                </div>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-80o0">AI Service Factory</div>
                <div className="text-sm font-medium text-gray-50o0">Automated Service Creation</div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <Link
                href="/automation/service-factory-dashboard.html"
                className="block px-4 py-2 text-base font-medium text-gray-50o0 hover:text-gray-80o0 hover:bg-gray-10o0"
                onClick={() => setIsOpen(false)}
              >
                Factory Dashboard
              </Link>
              <Link
                href="/services"
                className="block px-4 py-2 text-base font-medium text-gray-50o0 hover:text-gray-80o0 hover:bg-gray-10o0"
                onClick={() => setIsOpen(false)}
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;