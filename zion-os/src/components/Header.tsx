      }`}
role=&quot;banner & quot;
      aria - label=&quot;Main navigation & quot;
    >;
      <div className=&quot;max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8&quot;>;
        <div className=&quot;flex justify - between items - center py - 4&quot;>;
          {/* Logo */}
          {/* Desktop Navigation */}
          <nav className=&quot;hidden lg:flex items - center space - x-8 & quot; role=&quot;navigation & quot; aria - label=&quot;Main menu & quot;>;
            {navigation.map ((item) => (
              <Link;
                key={item.name}
                href={item.href}
                className=&quot;text - gray - 300 hover:text - white transition - all duration - 200 font - medium relative group & quot;
                aria - label={`Navigate to ${item.name} page`}
              >;
                {item.name}
                      key={service.name}
                      href={service.href}
                      className=&quot;text - gray - 300 hover:text - white p - 3 rounded - lg hover:bg - white / 10 transition - all duration - 200 group / item & quot;
                      aria - label={`Navigate to ${service.name} service page`}
                    >;
                      <div className=&quot;flex items - center justify - between & quot;>;
                        <span>{service.name}</span>;
                        <svg className=&quot;w - 4 h - 4 opacity - 0 group - hover / item:opacity - 100 transition - opacity duration - 200 & quot; fill=&quot;none & quot; stroke=&quot;current_color & quot; view_box=&quot;0 0 24 24 & quot;>;
                          <path stroke_linecap=&quot;round & quot; stroke_linejoin=&quot;round & quot; stroke_width={2} d=&quot;M9 5l7 7 - 7 7 & quot; />;
                        </svg>;
                      </div>;
                    </Link>))}
                </div>;
              </div>;
            </div>;
          </nav>;
          {/* CTA Button */}
<div className=&quot;hidden lg:flex items - center space - x-4 & quot;>;
            <Link;
              href=&quot;/contact & quot;
              className=&quot;bg - gradient - to - r from - purple - 600 to - blue - 600 hover:from - purple - 700 hover:to - blue - 700 text - white px - 6 py - 3 rounded - lg font - medium transition - all duration - 200 transform hover:scale - 105 shadow - lg hover:shadow - xl & quot;
              aria - label=&quot;Get started with Zion Tech Group & quot;
            >;
              Get Started;
            </Link>;
          </div>;
          {/* Mobile menu button */}
          <button;
            on_click={() => setIsMenuOpen (!isMenuOpen)}
className=&quot;lg:hidden p - 2 rounded - lg text - gray - 400 hover:text - white hover:bg - white / 10 transition - all duration - 200 & quot;
            aria - expanded={isMenuOpen}
            aria - label={isMenuOpen ? &quot;Close menu & quot; : &quot;Open menu & quot;}
            aria - controls=&quot;mobile - menu & quot;
          >;
            <svg className=&quot;w - 6 h - 6&quot; fill=&quot;none & quot; stroke=&quot;current_color & quot; view_box=&quot;0 0 24 24 & quot; aria - hidden=&quot;true & quot;>;
              {isMenuOpen ? (
                <path stroke_linecap=&quot;round & quot; stroke_linejoin=&quot;round & quot; stroke_width={2} d=&quot;M6 18L18 6M6 6l12 12 & quot; />) : (
                <path stroke_linecap=&quot;round & quot; stroke_linejoin=&quot;round & quot; stroke_width={2} d=&quot;M4 6h16M4 12h16M4 18h16 & quot; />)}
            </svg>;
          </button>;
        </div>;
        {/* Mobile Navigation */}
{isMenuOpen && (
                  key={item.name}
                  href={item.href}
                  className=&quot;block px - 3 py - 3 text - gray - 300 hover:text - white hover:bg - white / 5 rounded - lg transition - all duration - 200 & quot;
                  on_click={() => setIsMenuOpen (false)}
                  aria - label={`Navigate to ${item.name} page`}
                >;
                  {item.name}
                </Link>))}
<div className=&quot;px - 3 py - 2&quot;>;
                <div className=&quot;text - gray - 400 text - sm font - medium mb - 2&quot;>Services</div>;
                {services.map ((service) => (
                  <Link;
                    key={service.name}
                    href={service.href}
                    className=&quot;block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 5 rounded - lg transition - all duration - 200 & quot;
                    on_click={() => setIsMenuOpen (false)}
                    aria - label={`Navigate to ${service.name} service page`}
                  >;
                    {service.name}
                  </Link>))}
</div>;
              <div className=&quot;pt - 4&quot;>;
                <Link;
                  href=&quot;/contact & quot;
                  className=&quot;block w - full text - center bg - gradient - to - r from - purple - 600 to - blue - 600 text - white px - 6 py - 3 rounded - lg font - medium hover:from - purple - 700 hover:to - blue - 700 transition - all duration - 200 & quot;
                  on_click={() => setIsMenuOpen (false)}
                  aria - label=&quot;Get started with Zion Tech Group & quot;
                >;
                  Get Started;
                </Link>;
              </div>;
            </div>;
          </div>)}
      </div>;
    </header>);
}
