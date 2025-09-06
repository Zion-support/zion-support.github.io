  const navigation = [;
    { name: 'Home', href: '/' }
    { name: 'About', href: '/about' }
    { name: 'Services', href: '/services' }
    { name: 'AI Solutions', href: '/ai-solutions' }
    { name: 'Quantum Computing', href: '/quantum-computing' }
    { name: 'Research & Development', href: '/research-development' }
    { name: 'Case Studies', href: '/case-studies' }
    { name: 'News', href: '/news' }
    { name: 'Contact', href: '/contact' }];
  const services = [;
    { name: 'Research Automation', href: '/ai-autonomous-research-assistant' }];
  return (;
    <header;
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled;
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/20 shadow-2xl';
          : 'bg-black/60 backdrop-blur-md border-b border-white/10';
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
              </div>
              <span className=&quot;text-xl font-bold gradient-text text-shadow&quot;>
                Zion Tech Group
              </span>
            </Link>
          </div>
          {/* Desktop Navigation */}
              </Link>
            ))}
            {/* Services Dropdown */}
              <button 
                className="text-gray-300 hover:text-white transition-all duration-200 font-medium flex items-center group"
                aria-expanded="false"
                aria-haspopup="true"
                aria-label="Services menu"
              >
                Services
                <svg className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-6 grid grid-cols-1 gap-3">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                </div>;
              </div>;
            </div>;
          </nav>;
          {/* CTA Button */}

          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              aria-label="Get started with Zion Tech Group"
            >
              Get Started
            </Link>
          </div>
          {/* Mobile menu button */}
          <button;
            onClick={() => setIsMenuOpen(!isMenuOpen)}
className=&quot;lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200&quot;
            className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isMenuOpen ? (
            </svg>;
          </button>;
        </div>;
        {/* Mobile Navigation */}
          >
            <div className=&quot;px-2 pt-2 pb-3 space-y-1&quot;>
              {navigation.map((item) => (
                <Link
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className=&quot;block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 5 rounded - lg transition - all duration - 200 & quot;
                    on_click={() => setIsMenuOpen (false)}
                    aria - label={`Navigate to ${service.name} service page`}
                  >;
                    {service.name}
                  </Link>;
                ))}
</div>
              <div className=&quot;pt-4&quot;>
              </div>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Get started with Zion Tech Group"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>;
    </header>);
}
