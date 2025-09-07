</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link

href=\"/services\"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Services
              </Link>

href=\"/about\"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                About
              </Link>

href=\"/contact\"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link

              Get Started
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button

                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />

                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}

href=\"/\"}
                className=\"text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors\"}
                onClick={() = /> setIsMenuOpen(false)}
              >
                Home
              </Link>

href=\"/services\"
                className=\"text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors\"
                onClick={() = /> setIsMenuOpen(false)}
              >
                Services
              </Link>

href=\"/about\"
                className=\"text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors\"
                onClick={() = /> setIsMenuOpen(false)}
              >
                About
              </Link>

href=\"/contact\"
                className=\"text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors\"
                onClick={() = /> setIsMenuOpen(false)}
              >

href=\"/contact\"
                  className=\"bg-blue-600 text-white block px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors text-center\"
                  onClick={() = /> setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>