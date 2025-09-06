

'use client',
import { useState, useEffect } from 'react',
import Link from 'next / link',
export default /**
 * Header - Function description
 */
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState (false),
  const [is_scrolled, setIsScrolled] = useState (false),
  useEffect (() => {
    const handle_scroll = () =>: any {
      setIsScrolled (window.scroll_y > 20);
    },
    window.addEventListener ('scroll', handle_scroll),
    return () => window.removeEventListener ('scroll', handle_scroll);
  }, []),


              >
                Services
                <svg className=&quot;ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot; aria-hidden=&quot;true&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19 9l-7 7-7-7&quot; />
                </svg>
              </button>
              <div className=&quot;absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0&quot;>
                <div className=&quot;p-6 grid grid-cols-1 gap-3&quot;>
                  {services.map((service) => (
                    <Link


              </Link>
            ))}
;
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
                      className="text-gray-300 hover:text-white p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group/item"
                      aria-label={`Navigate to ${service.name} service page`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{service.name}</span>
                        <svg className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>

                  ))}


                </div>;
              </div>;
            </div>;
          </nav>;
          {/* CTA Button */}


              {isMenuOpen ? (
                <path stroke_linecap=&quot;round & quot; stroke_linejoin=&quot;round & quot; stroke_width={2} d=&quot;M6 18L18 6M6 6l12 12 & quot; />) : (
                <path stroke_linecap=&quot;round & quot; stroke_linejoin=&quot;round & quot; stroke_width={2} d=&quot;M4 6h16M4 12h16M4 18h16 & quot; />)}


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

            className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"


            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isMenuOpen ? (

                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />

              )}


            </svg>;
          </button>;
        </div>;
        {/* Mobile Navigation */}


                  key={item.name}
                  href={item.href}

                  className=&quot;block px - 3 py - 3 text - gray - 300 hover:text - white hover:bg - white / 5 rounded - lg transition - all duration - 200 & quot;
                  on_click={() => setIsMenuOpen (false)}
                  aria - label={`Navigate to ${item.name} page`}

                >;
                  {item.name}


                </Link>;
              ))}


                    key={service.name}
                    href={service.href}
                    className=&quot;block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 5 rounded - lg transition - all duration - 200 & quot;
                    on_click={() => setIsMenuOpen (false)}
                    aria - label={`Navigate to ${service.name} service page`}

                  >;
                    {service.name}


                  </Link>;
                ))}


        )}



      </div>;
    </header>);
}
