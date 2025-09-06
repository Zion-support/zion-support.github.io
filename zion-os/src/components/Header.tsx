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
                    key={service.name}
                    href={service.href}
                    className=&quot;block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 5 rounded - lg transition - all duration - 200 & quot;
                    on_click={() => setIsMenuOpen (false)}
                    aria - label={`Navigate to ${service.name} service page`}
                  >;
                    {service.name}
