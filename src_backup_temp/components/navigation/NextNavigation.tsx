<<<<<<< HEAD
    </div>
    );
}
                      className={`flex items-center space-x-1 text-gray-300 "hover": "tex t-cyan-300 transition-colors duration-200 py-2`';
                    >';';
                      <span>{item.name"}</span>';';';
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${',';';
    ';';';
                        activeDropdown === item.name ? 'rotate-180' : '';
}`}  />;
                    </button>;
                    <AnimatePresence>;
                      {activeDropdown === item.name && (;
                        <motion.div;
                          initial={{ "opacity": "0", "y": "1 0", "scale": "0.95 "}}
                          animate={{ "opacity": "1", "y": "0", "scale": "1 "}}
                          exit={{ "opacity": "0", "y": "1 0", "scale": "0.95 "}}
                          transition={{ "duration": "0.2 "}}
                          className=`absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-cyan-400/20 rounded-xl shadow-2xl shadow-cyan-400/10 overflow-hidden`}
                        >;
                          <div className="p-4">;
                            {item.dropdown.map((dropdownItem) => (;
                              <Link;
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                onClick={() => setActiveDropdown(null);
      )}
    </div>
    );
}
                                className="flex items-start space-x-3 p-3 rounded-lg "hover": "b g-gray-800/50 transition-colors duration-200 group";
                              >;
                                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-"hover": fro m-cyan-400/30 group-"hover": t o-blue-400/30 transition-all duration-200">;
                                  <dropdownItem.icon className="w-5 h-5 text-cyan-400" />;
                                </div>;
                                <div className="flex-1 min-w-0">;
                                  <p className="text-sm font-medium text-white group-"hover": tex t-cyan-300 transition-colors">;
                                    {dropdownItem.name"}
                                  </p>;
                                  <p className={`text-xs text-gray-400 mt-1`>;
                                    {dropdownItem.description}
                                  </p>;
                                </div>;
                              </Link>;
                            ));
      )}
    </div>
    );
}
                          </div>;
                        </motion.div>;
                      );
      )}
    </div>
    );
}
                    </AnimatePresence>;
                  </div>';
                ) : "(';';
                  <Link href={item.href"}';';';
                    className={`text-gray-300 "hover": "tex t-cyan-300 transition-colors duration-200 py-2 ${'",';';
    ';';';
                      router.pathname === item.href ? 'text-cyan-400' : ''}`}
                  >;
                    {item.name}
                  </Link>;
                );
      )}
    </div>
    );
}
              </div>;
            ));
      )}
    </div>
    );
}
          </div>;
          {/* CTA Button */}
          <div className=`hidden "lg": "bloc k`"}>;
            <Link;
              href="/contact";
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg "hover": "fro m-cyan-600 "hover": t o-blue-700 transition-all duration-300 transform "hover": scal e-105 shadow-lg "hover": shado w-cyan-500/25";
            >;
              Get Started;
            </Link>;
          </div>;
          {/* Mobile Menu Button */"}
          <button;
            onClick={() => setIsOpen(!isOpen);
      )}
    </div>
    );
}
            className=""lg": "hidden p-2 rounded-lg text-gray-300 "hover": tex t-cyan-300 "hover": b g-gray-800/50 transition-colors duration-200";
            aria-label="Toggle mobile menu";
          >;
            {isOpen ? <X className="w-6 h-6"  /> : <Menu className="w-6 h-6"  />"}
          </button>;
        </div>;
      </div>;
      {/* Mobile Menu */}
      <AnimatePresence>' {isOpen && (';';
          <motion.div';';';
            initial={{ "opacity": "0", "height": "0 "}}',';';
    ';';';
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg: hidden bg-gray-900/95 backdrop-blur-md border-t border-cyan-400/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Contact Information */}
              <div className="pb-4 border-b border-gray-700">
                <h3 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">
                  Contact Information
                <div className="space-y-2">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center space-x-3 text-sm text-gray-300 "hover": "tex t-cyan-300 transition-colors";
                    >;
                      <contact.icon className="w-4 h-4 text-cyan-400" />;
                      <span>{contact.text"}</span>;
                    </a>;
                  ));
      )}
    </div>
    );
}
                </div>;
              </div>;
              {/* Navigation Items */}
              <div className="space-y-2">;
                { navigationItems.map((item) => (;
                  <div key={item.name}>;
                    {item.dropdown ? (;
                      <div>;
                        <button;
                          onClick={() => toggleDropdown(item.name);
      )}
    </div>
    );
}
                          className={`flex items-center justify-between w-full text-left px-3 py-2 text-gray-300 "hover": "tex t-cyan-300 "hover": b g-gray-800/50 rounded-lg transition-colors duration-200`';
                        >';';
                          <span>{item.name"}</span>';';';
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${',';';
    ';';';
                            activeDropdown === item.name ? 'rotate-180' : '';
}`}  />;
                        </button>;
                        <AnimatePresence>' {activeDropdown === item.name && (';';
                            <motion.div';';';
                              initial={{ "opacity": "0", "height": "0 "}}',';';
    ';';';
                              animate={{ "opacity": "1", "height": 'auto' }}
                              exit={{ "opacity": "0", "height": "0 "}}
                              transition={{ "duration": "0.2 "}}
                              className=`ml-4 mt-2 space-y-1`}
                            >;
                              {item.dropdown.map((dropdownItem) => (;
                                <Link;
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  onClick={closeMobileMenu}
                                  className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-400 "hover": "tex t-cyan-300 "hover": b g-gray-800/50 rounded-lg transition-colors duration-200";
                                >;
                                  <dropdownItem.icon className={`w-4 h-4 text-cyan-400` />;
                                  <span>{dropdownItem.name"}</span>;
                                </Link>;
                              ));
      )}
    </div>
    );
}
                            </motion.div>;
                          );
      )}
    </div>
    );
}
                        </AnimatePresence>;
                      </div>;
                    ) : "(;
                      <Link href={item.href"}';
                        onClick={closeMobileMenu}';';
                        className={`block px-3 py-2 rounded-lg transition-colors duration-200 ${';';';
                          router.pathname === item.href',';';
    ';';';
                            ? 'text-cyan-400 bg-cyan-400/10'',';';
    ';';';
                            : 'text-gray-300 "hover": "tex t-cyan-300 "hover": b g-gray-800/50'"}`}
                      >;
                        {item.name}
                      </Link>;
                    );
      )}
    </div>
    );
}
                  </div>;
                ));
      )}
    </div>
    );
}
              </div>;
              {/* Mobile CTA */}
              <div className=`pt-4 border-t border-gray-700`}>;
                <Link;
                  href="/contact";
                  onClick={closeMobileMenu}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-center rounded-lg hover: fro m-cyan-600 hover: t o-blue-700 transition-all duration-300 transform hover: scal e-105 shadow-lg hover: shado w-cyan-500/25"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.div>
        )
      )}
    </div>
    );
}
      </AnimatePresence>;
    </nav>';
  );';';
};';';';
export default NextNavigation;"';';';';
</motion>
</ChevronDown>
</motion>
</motion>
</ChevronDown>
</string>
</any>
</any>
import { useEffect } from 'react';,
import { useState } from 'react';,
import _React,{ useState,useEffect } from 'react',;'; ';';';';';'; import Link from 'next/link',;'; ';';';';';'; import { useRouter } from 'next/router',;'; ';';';';';'; import { motion,AnimatePresence } from 'framer-motion'; import { Menu,X,ChevronDown,Globe,Brain,Cloud,Shield,Zap,Users,Phone,Mail,;';'; MapPin,;';';'; Code,;';';';'; Database,;';';';';'; Network,;','; ';';';';'; Settings} from 'lucide-react'; const NextNavigation = (props) => { const [isOpen,setIsOpen] = useState<any>(false); const [isScrolled,setIsScrolled] = useState<any>(false); const [activeDropdown,setActiveDropdown] = useState<string | null>(null); const router = useRouter(); useEffect(() => { const handleScroll = (props) => { setIsScrolled(window.scrollY > 20);';';';';'};','; ';';';';'; window.addEventListener('scroll',handleScroll);','; ';';';';'; return () => window.removeEventListener('scroll',handleScroll);'},[]);';';';';'; const navigationItems = [',';';' { name: 'Home,href: '/' },' {','; ';';';';'; name: 'Services,','; ';';';';'; href: '/services,'; dropdown: [' {,'; ';';';';'; name: 'AI Services,','; ';';';';'; href: '/ai-services,';'; icon: Brai n,','; ';';';';'; description: 'Cutting-edge AI solutions' },' {','; ';';';';'; name: 'IT Services,','; ';';';';'; href: '/it-services,';'; icon: Clou d,','; ';';';';'; description: 'Enterprise IT infrastructure' },' {','; ';';';';'; name: 'Micro SaaS,','; ';';';';'; href: '/micro-saas,';'; icon: Cod e,','; ';';';';'; description: 'Custom software solutions' },' {','; ';';';';'; name: 'Cybersecurity,','; ';';';';'; href: '/services#cybersecurity,';'; icon: Shiel d,','; ';';';';'; description: 'Advanced security solutions' },' {','; ';';';';'; name: 'Cloud & DevOps,','; ';';';';'; href: '/services#cloud,';'; icon: Databas e,','; ';';';';'; description: 'Scalable cloud infrastructure' },' {','; ';';';';'; name: 'Digital Transformation,','; ';';';';'; href: '/services#ai,';'; icon: Za p,','; ';';';';'; description: 'Business transformation' }'; ] ;';';';';'},','; ';';' { name: 'About,href: '/about' },','; ';';' { name: 'Contact,href: '/contact' } ] const contactInfo = [' {';'; icon: Phon e,','; ';';';';'; text: '+1 302 464 0950,','; ';';';';'; href: 'tel:+13024640950' },' {';'; icon: Mai l,','; ';';';';'; text: 'kleber@ziontechgroup.com,','; ';';';';'; href: 'mailto: klebe r@ziontechgroup.com' },' {';'; icon: MapPi n,','; ';';';';'; text: '364 E Main St STE 1008,Middletown DE 19709',','; ';';';';'; href: '#' } ] const toggleDropdown = (props) => { setActiveDropdown(activeDropdown === name ? null : name)};; const closeMobileMenu = (props) => { setIsOpen(false);';'; setActiveDropdown(null);';';'};';';';'; return (';'; <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${','; ';';';';'; isScrolled ? 'bg-gray-900/95 backdrop-blur-md border-b border-cyan-400/20' : 'bg-transparent'}`}> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <div className="flex items-center justify-between h-16 lg:h-20"> {} <Link href="/" className="flex items-center space-x-2 group"> <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover: scal e-110 transition-transform duration-300"> <Globe className="w-6 h-6 text-white" /> </div> <span className="text-xl font-bold text-white group-hover: tex t-cyan-300 transition-colors"> Zion Tech Group </span> </Link> {} <div className="hidden lg: flex items-center space-x-8"> { navigationItems.map((item) => ( <div key={item.name} className="relative"> {item.dropdown ? ( <div className="relative"> <button onClick={() => toggleDropdown(item.name) )} </div> );'} className={`flex items-center space-x-1 text-gray-300 hover: tex t-cyan-300 transition-colors duration-200 py-2` >';';';'; <span>{item.name}</span>';';';'; <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${','; ';';';';'; activeDropdown === item.name ? 'rotate-180' : ' }`} /> </button> <AnimatePresence> {activeDropdown === item.name && ( <motion.div initial={{ opacity: 0,y: 1 0,scale: 0.95 }} animate={{ opacity: 1,y: 0,scale: 1 }} exit={{ opacity: 0,y: 1 0,scale: 0.95 }} transition={{ duration: 0.2 }} className=`absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-cyan-400/20 rounded-xl shadow-2xl shadow-cyan-400/10 overflow-hidden`} > <div className="p-4"> {item.dropdown.map((dropdownItem) => ( <Link key={dropdownItem.name} href={dropdownItem.href} onClick={() => setActiveDropdown(null) )} </div> )} className="flex items-start space-x-3 p-3 rounded-lg hover: b g-gray-800/50 transition-colors duration-200 group" > <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover: fro m-cyan-400/30 group-hover: t o-blue-400/30 transition-all duration-200"> <dropdownItem.icon className="w-5 h-5 text-cyan-400" /> </div> <div className="flex-1 min-w-0"> <p className="text-sm font-medium text-white group-hover: tex t-cyan-300 transition-colors"> {dropdownItem.name} </p> <p className={`text-xs text-gray-400 mt-1`> {dropdownItem.description} </p> </div> </Link> )) )} </div> )} </div> </motion.div> ) )} </div> )} </AnimatePresence>'; </div>';'; ) : (';';';'; <Link href={item.href}';'; className={`text-gray-300 hover: tex t-cyan-300 transition-colors duration-200 py-2 ${,'; ';';';';'; router.pathname === item.href ? 'text-cyan-400' : "}`} > {item.name} </Link> ) )} </div> )} </div> )) )} </div> )} </div> {} <div className=`hidden lg: bloc k`}> <Link href="/contact" className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover: fro m-cyan-600 hover: t o-blue-700 transition-all duration-300 transform hover: scal e-105 shadow-lg hover: shado w-cyan-500/25" > Get Started </Link> </div> {} <button onClick={() => setIsOpen(!isOpen) )} </div> )} className="lg: hidden p-2 rounded-lg text-gray-300 hover: tex t-cyan-300 hover: b g-gray-800/50 transition-colors duration-200" aria-label="Toggle mobile menu" > {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />} </button> </div> </div> {} <AnimatePresence>' {isOpen && (';';';'; <motion.div';';';';'; initial={{ opacity: 0,height: 0 }}','; ';';';';'; animate={{ opacity: 1,height: 'auto' }} exit={{ opacity: 0,height: 0 }} transition={{ duration: 0.3 }} className="lg: hidden bg-gray-900/95 backdrop-blur-md border-t border-cyan-400/20" > <div className="px-4 py-6 space-y-4"> {} <div className="pb-4 border-b border-gray-700"> <h3 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide"> Contact Information </h3> <div className="space-y-2"> {contactInfo.map((contact,index) => ( <a key={index} href={contact.href} className="flex items-center space-x-3 text-sm text-gray-300 hover: tex t-cyan-300 transition-colors" > <contact.icon className="w-4 h-4 text-cyan-400" /> <span>{contact.text}</span> </a> )) )} </div> )} </div> </div> {} <div className="space-y-2"> { navigationItems.map((item) => ( <div key={item.name}> {item.dropdown ? ( <div> <button onClick={() => toggleDropdown(item.name) )} </div> );'} className={`flex items-center justify-between w-full text-left px-3 py-2 text-gray-300 hover: tex t-cyan-300 hover: b g-gray-800/50 rounded-lg transition-colors duration-200` >';';';'; <span>{item.name}</span>';';';'; <ChevronDownclassName={`w-4 h-4 transition-transform duration-200 ${','; ';';';';'; activeDropdown === item.name ? 'rotate-180' : ' }`} /> </button>'; <AnimatePresence>' {activeDropdown === item.name && (';';';'; <motion.div';';';';'; initial={{ opacity: 0,height: 0 }}','; ';';';';'; animate={{ opacity: 1,height: 'auto' }} exit={{ opacity: 0,height: 0 }} transition={{ duration: 0.2 }} className=`ml-4 mt-2 space-y-1`} > {item.dropdown.map((dropdownItem) => ( <Link key={dropdownItem.name} href={dropdownItem.href} onClick={closeMobileMenu} className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-400 hover: tex t-cyan-300 hover: b g-gray-800/50 rounded-lg transition-colors duration-200" > <dropdownItem.icon className={`w-4 h-4 text-cyan-400` /> <span>{dropdownItem.name}</span> </Link> )) )} </div> )} </motion.div> ) )} </div> )} </AnimatePresence> </div> ) : (';'; <Link href={item.href} onClick={closeMobileMenu}'; className={`block px-3 py-2 rounded-lg transition-colors duration-200 ${';'; router.pathname === item.href','; ';';';';'; ? 'text-cyan-400 bg-cyan-400/10",'; ';';';';'; : 'text-gray-300 hover: tex t-cyan-300 hover: b g-gray-800/50'}`} > {item.name} </Link> ) )} </div> )} </div> )) )} </div> )} </div> {} <div className=`pt-4 border-t border-gray-700`}> <Link href="/contact" onClick={closeMobileMenu} className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-center rounded-lg hover: fro m-cyan-600 hover: t o-blue-700 transition-all duration-300 transform hover: scal e-105 shadow-lg hover: shado w-cyan-500/25" > Get Started Today </Link> </div> </div> </motion.div> ) )} </div> )} </AnimatePresence>'; </nav>';'; );';';';'};';';';';'; export default NextNavigation;";';';'; </motion> </ChevronDown> </motion> </ChevronDown> </string> </any> </any>;';';
=======
import React from 'react';

const NextNavigation: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">NextNavigation</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
