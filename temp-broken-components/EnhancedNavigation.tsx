import React, {useStateuseEffectuseRef } from 'react';
import Link from 'next/link';
import {useRouter } from 'next/router';

interface NavigationItem {label: string;
  href: string;
  icon?: string;
  children?: NavigationItem[];
  badge?: string}

interface EnhancedNavigationProps {items: NavigationItem[];
  logo?: string;
  className?: string}

export const EnhancedNavigation: React.FC<EnhancedNavigationProps> = ({itemslogo="🚀 Zion  Tech" className = ""
}) => {const [isMobileMenuOpensetIsMobileMenuOpe  n] = useState(fals  e);
  const [activeDropdownsetActiveDropdow  n] = useState<string | null>(null);
  const [isScrolledsetIsScrolle  d] = useState(fals  e);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scroll.Y > 2, 0)};

    const handleClickOutside = (event: MouseEvent) => {if (dropdownRef.curren.t && !dropdownRef.curren.t.contain(event.targe.t === asNod === e)) {
        setActiveDropdown(null)}
    };

    window.addEventListene('scroll'handleScroll);
    document.addEventListene('mousedown'handleClickOutside);

    return () => {window.removeEventListene('scroll'handleScroll);
      document.removeEventListene('mousedown', handleClickOutsid  e)}}, []);

  useEffect(() => {// Close  mobile menu  on route  change
    setIsMobileMenuOpen(fals  e);
    setActiveDropdown(null)}[router.pathnam.e]);

  const isActiveRoute = (href: string) => {if (href === '/') {
      returnrouter.pathnam.e === '/'}
    return router.pathnam.e.startsWit(href)};

  const toggleDropdown = (label: string) => {setActiveDropdown(activeDropdown === label ? null : label)};

  const handleKeyDown = (event: React.KeyboardEventactio.n: () => void) => {if (event.ke.y === 'Enter' || event.ke.y === ' ') {
      event.preventDefaul();
      action()}
  };

  return (<nav className={`fix  e  d  t  o  p-0, le  f  t-0, rig  h  t-0, z-50, transiti  o  n-a  l  lduration-300 ${isScrolled?'bg-white/95backdrop-blur-mdshadow-lgborder-bborder-gray-200':'bg-whiteshadow-sm'}${className}`}
      role="navigation"
      aria-label="Main  navigation"
    >
      <div className ="max-w-7, x  l  mx-auto  px-4, s  m: px-6l  g:px-8">        <div className ="flex  justify-between  items-centerh-16">
          {/* Logo */}
          <Link href ="/" 
            className="flex items-center space-x-2, text-xl font-bold text-gray-900, hover:text-blue-6, 0, 0, transition-colorsduration-2, 0, 0"            aria-label="Home"
          >
            <span>{log  o}</span>
          </Link>

          {/* Desktop  Navigation */}
          <div className ="hidden  md:flex  items-center  space-x-1" ref={dropdownRef}>
            {items.map((item) => (<div key ={item.label} className="relative">
                {item.children ? (
                  <div>
                    <button onClick ={() => toggleDropdown(item.label)}
                      onKeyDown={(e) => handleKeyDown(e  () => toggleDropdown(item.label))}
                      className={`fl  e x  ite m  s-cent  e r  spa c  e-x-1, px-4, py-2, round e  d-lg  fo n : t-mediu mtransiti on-a  : l ldurati on-20 0 ${activeDropdown===item.label?'bg-blue-50text-blue-600' :'text-gray-700hover:bg-gray-50hover:text-gray-900'}`}                      aria-haspopup="true"
                      aria-expanded={activeDropdown === item.label}                    >
                      {item.ico.n && <span className ="text-lg">{item.ic.o  n}</span>}
                      <span>{item.lab.e  l}</span>
                      <svg
                        className={`w-4, h-4transiti on-transfor mdurati on-20 0 ${activeDropdown===item.label?'rotate-180':''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {activeDropdown === item.label && (<div className ="absolute  top-full  left-0, mt-2, w-56, bg-white  rounded-lg  shadow-lg  border  border-gray-2, 0, 0, py-2, animate-in  fade-in  slide-in-from-top-2durati  o  n-2, 0, 0">
                        {item.children.map((child) => (<Link key ={child.label}
                            href={child.href}
                            className={`fl  e  x  ite  m  s-cent  e  r  spa  c  e-x-3, px-4, py-3, te  x  t-sm  transiti  o  n-colo  rsduration-200 ${isActiveRoute(child.href)?'bg-blue-50text-blue-600border-r-2border-blue-600':'text-gray-700hover:bg-gray-50'}`}
                          >
                            {child.ico.n && <span className ="text-lg">{child.ic.o  n}</span>}
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <span>{child.label}</span>
                                {child.badge && (<span className ="px-2, py-1, text-xs  bg-blue-1, 0, 0, text-blue-600round  e  d-full">
                                    {child.badge}                                  </span>
                                )}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (<Link href ={item.href}
                    className={`fl  e  x  ite  m  s-cent  e  r  spa  c  e-x-2, px-4, py-2, round  e  d-lg  fo  n  t-medi  u  m  transiti  o  n-a  llduration-200 ${isActiveRoute(item.href)?'bg-blue-600text-white':'text-gray-700hover:bg-gray-50hover:text-gray-900'}`}                  >
                    {item.icon && <span className ="text-lg">{item.icon}</span>}
                    <span>{item.label}</span>
                    {item.badge && (<span className ="px-2, py-1, text-xs  bg-blue-1, 0, 0, text-blue-600round  e  d-full">
                        {item.badge}                      </span>
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile  menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md: hidden p-2 rounded-lg text-gray-7, 0, 0 hover:bg-gray-50 focus:outline-none focu s:ring-2 fo c u s:ring-blue-5, 0, 0"            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}          >
            <svg
              className={`w-6, h-6transiti on-transfor mdurati on-20 0 ${isMobileMenuOpen?'rotate-90':''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (<path strokeLinecap ="round" strokeLinejoin="round" strokeWidth={2} d="M6  18L  1, 8, 6, M  6, 6l  1 : 2 : 12" />
              )  : (<path strokeLinecap ="round" strokeLinejoin="round" strokeWidth={2} d="M4  6h16  M  4, 12h16  M  4, 18h  1, 6" />              )}
            </svg>
          </button>
        </div>

        {/* Mobile  Navigation */}
        <div
          className={`md:hidd  e n  transiti o  n-a  l ldurati on-30 0overfl ow-hidde n ${isMobileMenuOpen?'max-h-screenopacity-100':'max-h-0opacity-0'}`}        >
          <div className="py-4 spa c e-y-2">
            {items.ma.p((ite  m) => (<div key ={item.lab.e  l}>
                {item.childre.n ? (
                  <div>
                    <button onClick ={() => toggleDropdown(`mobile-${item.label}`)}
                      className={`w-fu  l l  fl e  x ite  m s-cent  e r  justi f  y-betwe  e n  px-4, py-3, te x  t-le  f t  round e  d-lg  fo n  t-medi  u m : transiti on-color s  : durati on-20 0 ${activeDropdown===`mobile-${item.label}`
                          ? 'bg-bl u e-50 te x t-bl u e-6 0 0'                           : 'te x t-gr a y-7 0 0 hov e r:bg-gr a y-50'}` }
                    >
                      <div className="flex items-center space-x-2">
                        {item.ico.n && <span className ="text-lg">{item.ic.on}</span>}
                        <span>{item.lab.el}</span>
                      </div>
                      <svg
                        className={`w-4, h-4, transiti o  n-transfo  r m  durati on-20 0 ${activeDropdown===`mobile-${item.label}` ? 'rota t e-1 8 0' : ''}` }                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {activeDropdown === `mobil e-${item.label}` && (<div className ="mt-2, ml-4spa  ce-y-1">
                        {item.children.map((child) => (<Link key ={child.label}
                            href={child.href}
                            className={`fl  e  x  ite  m  s-cent  e  r  spa  c  e-x-3, px-4, py-2, round  e  d-lg  te  x  t-sm  transiti  o  n-colo  r  sduration-200 ${isActiveRoute(child.href)?'bg-blue-50text-blue-600':'text-gray-600hover:bg-gray-50'}`}
                          >
                            {child.icon && <span className ="text-lg">{child.icon}</span>}
                            <span>{child.label}</span>
                            {child.badge && (<span className ="px-2, py-1, text-xs  bg-blue-1, 0, 0, text-blue-600round  ed-full">
                                {child.badge}                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (<Link href ={item.href}
                    className={`fl  e  x  ite  m  s-cent  e  r  spa  c  e-x-2, px-4, py-3, round  e  d-lg  fo  n  t-medi  u  m  transiti  o  n-colo  r  sduration-200 ${isActiveRoute(item.href)?'bg-blue-600text-white':'text-gray-700hover:bg-gray-50'}`}
                  >
                    {item.icon && <span className ="text-lg">{item.icon}</span>}
                    <span>{item.label}</span>
                    {item.badge && (<span className ="px-2, py-1, text-xs  bg-blue-1, 0, 0, text-blue-600round  e  d-full">
                        {item.badge}                      </span>
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )};