  const navigation = [;
    { name: 'Home', href: '/' }'
    { name: 'About', href: '/about' }'
    { name: 'Services', href: '/services' }'
    { name: 'AI Solutions', href: '/ai-solutions' }'
    { name: 'Quantum Computing', href: '/quantum-computing' }'
    { name: 'Research & Development', href: '/research-development' }'
    { name: 'Case Studies', href: '/case-studies' }'
    { name: 'News', href: '/news' }'
    { name: 'Contact', href: '/contact' }];

    { name: 'Research Automation', href: '/ai-autonomous-research-assistant' }];
  return (;
    <header;
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled;'
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/20 shadow-2xl';'
          : 'bg-black/60 backdrop-blur-md border-b border-white/10';`
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
        <div className="flex justify-between items-center py-4">

          {/* Logo */}

          <div className="flex items - center & quot;>;
            <Link href="/" className="flex items - center space - x-3 group & quot; aria - label="Zion Tech Group Home & quot;>;
          : 'bg-black/60 backdrop-blur-md border-b border-white/10';`;
      }`}
    >
</header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
</div>"
        <div className="flex justify-between items-center py-4">"
</div>
          <div className="flex items - center & quot;>;
            <Link href="/" className="flex items - center space - x-3 group & quot; aria - label="Zion Tech Group Home & quot;>;

pr-12325
              <div className="w - 12 h - 12 bg - gradient - to - r from - purple - 500 to - blue - 500 rounded - xl flex items - center justify - center group - hover:scale - 110 transition - transform duration - 300 shadow - lg & quot;>;
                <span className="text - white font - bold text - xl & quot;>Z</span>;
              </div>;
              <span className="text - xl font - bold gradient - text text - shadow & quot;>;
                Zion Tech Group;
              </span>;
            </Link>;
          </div>;

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items - center space - x-8 & quot; role="navigation & quot; aria - label="Main menu & quot;>;
            {navigation.map ((item) => (
              <Link;
                key={item.name}
                href={item.href}
                className="text - gray - 300 hover:text - white transition - all duration - 200 font - medium relative group & quot;`
                aria - label={`Navigate to ${item.name} page`}
              >;
                {item.name}
              </Link>
            ))}
;
            {/* Services Dropdown */}
              <button "
                className="text-gray-300 hover:text-white transition-all duration-200 font-medium flex items-center group""
                aria-expanded="false""
                aria-haspopup="true""
                aria-label="Services menu"
              >
                Services;
                <svg className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-6 grid grid-cols-1 gap-3">
                  {services.map((service) => (
                    <Link
<span className="absolute -bottom - 1 left - 0 w - 0 h - 0.5 bg - gradient - to - r from - purple - 400 to - blue - 400 transition - all duration - 300 group - hover:w - full & quot;></span>;
              </Link>))}
            {/* Services Dropdown */}
</span>
              </span>;
            ;
          <nav className="hidden lg:flex items - center space - x-8 & quot; role="navigation & quot; aria - label="Main menu & quot;>;
</nav>
              <Link;
                key={item.name}
                href={item.href}
                className="text - gray - 300 hover:text - white transition - all duration - 200 font - medium relative group & quot;`;
                aria - label={`Navigate to ${item.name} page`}
              >;

              <button;"
                className="text-gray-300 hover:text-white transition-all duration-200 font-medium flex items-center group"""
                aria-expanded="false"""
                aria-haspopup="true"""
                aria-label="Services menu""
</button>
                <svg className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
</svg>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
</path>
              <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-6 grid grid-cols-1 gap-3">
<span className="absolute -bottom - 1 left - 0 w - 0 h - 0.5 bg - gradient - to - r from - purple - 400 to - blue - 400 transition - all duration - 300 group - hover:w - full & quot;></span>;
)
              ))}
pr-12325
<div className="relative group & quot;>;
              <button;
                className="text - gray - 300 hover:text - white transition - all duration - 200 font - medium flex items - center group & quot;
                aria - expanded="false & quot;
                aria - haspopup="true & quot;
                aria - label="Services menu & quot;
              >;
                Services;
                <svg className="ml - 1 w - 4 h - 4 transition - transform duration - 200 group - hover:rotate - 180 & quot; fill="none & quot; stroke="current_color & quot; viewBox="0 0 24 24 & quot; aria - hidden="true & quot;>;
                  <path strokeLinecap="round & quot; strokeLinejoin="round & quot; strokeWidth={2} d="M19 9l - 7 7 - 7-7 & quot; />;
                </svg>;
              </button>;
              <div className="absolute top - full left - 0 mt - 2 w - 80 bg - black / 95 backdrop - blur - xl border border - white / 20 rounded - xl shadow - 2xl opacity - 0 invisible group - hover:opacity - 100 group - hover:visible transition - all duration - 300 transform translate - y-2 group - hover:translate - y-0 & quot;>;
                <div className="p - 6 grid grid - cols - 1 gap - 3">;
                  {services.map ((service) => (
                    <Link;
                      key={service.name}
                      href={service.href}
                      className="text - gray - 300 hover:text - white p - 3 rounded - lg hover:bg - white / 10 transition - all duration - 200 group / item & quot;`
                      aria - label={`Navigate to ${service.name} service page`}
                    >;
                      <div className="flex items - center justify - between & quot;>;
                        <span>{service.name}</span>;
                        <svg className="w - 4 h - 4 opacity - 0 group - hover / item:opacity - 100 transition - opacity duration - 200 & quot; fill="none & quot; stroke="current_color & quot; viewBox="0 0 24 24 & quot;>;
                          <path strokeLinecap="round & quot; strokeLinejoin="round & quot; strokeWidth={2} d="M9 5l7 7 - 7 7 & quot; />;
                        </svg>;
                      </div>;
                    </Link>))}
  );
};