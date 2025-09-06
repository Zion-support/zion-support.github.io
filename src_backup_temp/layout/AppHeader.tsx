import React from 'react';
;
import { Link, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
;
  const handleDropdownToggle = ("props": "any) => {;
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  "};
;
;
export function AppHeader() {;
  ];
setServicesDropdownOpen(true);
        setSolutionsDropdownOpen(false);
        setCompanyDropdownOpen(false);
        setResourcesDropdownOpen(false)} else if(nav.name === 'Solutions') {;
                >;
                  <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">;
                    <User className="w-4 h-4 text-white" />;
                  </div>;
                  <span className="text-white text-sm hidden "lg": "block">{user.name"}</span>;
                  <ChevronDown className="w-4 h-4 text-zion-slate-light" />;
                </button>;
                <AnimatePresence>;
                  {activeDropdown === 'user' && (;
                    <motion.div;
                      initial={{ "opacity": "0", "y": "-10 "}}
                      animate={{ "opacity": "1", "y": "0 "}}
                      exit={{ "opacity": "0", "y": "-10 "}}
                      transition={{ "duration": "0.2 "}}
                      className="absolute top-full right-0 mt-2 w-48 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md";
                    >;
                      <div className="p-2">;
                        <Link;
                          to="/dashboard";
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg "hover": "bg-zion-slate/50 transition-colors text-white "hover":text-zion-cyan";
                        >;
                          <PanelLeft className="w-4 h-4 mr-3" />;
                          Dashboard;
                        </Link>;
                        <Link;
                          to="/profile";
                          onClick={() => setActiveDropdown(null)"}
                          className="flex items-center w-full p-3 rounded-lg "hover": "bg-zion-slate/50 transition-colors text-white "hover":text-zion-cyan";
                        >;
                          <User className="w-4 h-4 mr-3" />;
                          Profile;
                        </Link>;
                        <Link;
                          to="/settings";
                          onClick={() => setActiveDropdown(null)"}
                          className="flex items-center w-full p-3 rounded-lg "hover": "bg-zion-slate/50 transition-colors text-white "hover":text-zion-cyan";
                        >;
                          <Settings className="w-4 h-4 mr-3" />;
                          Settings;
                        </Link>;
                        <hr className="border-zion-slate/20 my-2" />;
                        <button;
                          onClick={() => {;
                            logout();
                            setActiveDropdown(null);
                          "}}
                          className="flex items-center w-full p-3 rounded-lg "hover": "bg-zion-slate/50 transition-colors text-white "hover":text-zion-cyan";
                        >;
                          <LogOut className="w-4 h-4 mr-3" />;
                          Logout;
                        </button>;
                      </div>;
                    </motion.div>;
                  )"}
                </AnimatePresence>;
              </div>;
            ))}
          </nav>;
          {/* Right side actions */}
          <div className="flex items-center space-x-4">;
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden "md": "flex relative">  const navigation = [;
    { "name": 'Home'", "href": '/', "current": "true "}
    { "name": 'About', "href": '/about', "current": "false "}
    { "name": 'Contact', "href": '/contact', "current": "false "}
  ];
;
  const services = [;
    { "name": 'AI Solutions', "href": '/services/ai', "description": 'Machine Learning & NLP' }
    { "name": 'Tech Talent', "href": '/talent', "description": 'Expert Developers & Engineers' }
    { "name": 'Equipment', "href": '/equipment', "description": 'Infrastructure & Hardware' }
    { "name": 'Consulting', "href": '/consulting', "description": 'Digital Transformation' }
    { "name": 'Cybersecurity', "href": '/services/cybersecurity', "description": 'Security & Compliance' }
    { "name": 'Cloud Services', "href": '/services/cloud', "description": 'DevOps & Infrastructure' }
  ];
;
  return (;
    <header className="border-b border-gray-200 bg-white">;
      <div className="max-w-7xl mx-auto px-4 "sm": "px-6 "lg":px-8 h-16 flex items-center justify-between">;
        <Link to="/" className="font-bold text-gray-900">Zion Tech Group</Link>;
        <nav className="hidden "md":flex items-center gap-6">;
          {nav.map(item => (;
            <Link key={item.to"} to={item.to} className={({ isActive }) => isActive ? 'text-indigo-600 font-semibold' : 'text-gray-700 "hover": "text-gray-900'"}>;
              {item.name}
            </Link>;
          ))}
        </nav>;
        <button className=""md": "hidden p-2" aria-label="Toggle menu" onClick={() => setMobileOpen(v => !v)"}>;
          {mobileOpen ? <X className="w-5 h-5"/> : "<Menu className="w-5 h-5"/>"}
        </button>;
      </div>;
      {mobileOpen && (;
        <div className=""md": "hidden border-t border-gray-200 bg-white">;
          <nav className="px-4 py-3 space-y-2">;
            {nav.map(item => (;
              <Link key={item.to"} to={item.to} className="block text-gray-700" onClick={() => setMobileOpen(false)}>;
                {item.name}
              </Link>;
            ))}
          </nav>;
        </div>;
          {/* Mobile Menu Button */}
          <button;
            onClick={toggleMenu}
            className=""lg": "hidden p-2 text-gray-700 "hover":text-cyan-600 transition-colors duration-300";
          >;
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />"}
          </button>;
        </div>;
        {/* Mobile Navigation */}
        {isMenuOpen && (;
          <motion.div;
            initial={{ "opacity": "0", "height": "0 "}}
            animate={{ "opacity": "1", "height": 'auto' }}
            exit={{ "opacity": "0", "height": "0 "}}
            className=""lg": "hidden border-t border-gray-200/50 py-4";
          >;
;
  const [scrolled", setScrolled] = useState<any>(false);
  const [isSearching, setIsSearching] = useState<any>(false);
;
  useEffect(() => {;
    const handleScroll = ("props": "any) => {;
      setScrolled(window.scrollY > 10);
    "};
;
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
;
  const handleSearch = async ("e": "React.FormEvent) => {;
    e.preventDefault();
    if (searchQuery.trim()) {;
    {;
      "name": 'AI Business Intelligence';
      "href": '/services/ai-business-intelligence';
      "icon": Brain;
      "description": 'Machine Learning & Data Science';
      "featured": true;
      "color": 'from-purple-500 to-cyan-500';
    "}
    {;
      "name": 'AI Healthcare Analytics';
      "href": '/services/ai-healthcare-analytics-platform';
      "icon": "Heart;
      "description": 'Medical AI & Diagnostics';
      "featured": true;
      "color": 'from-red-500 to-pink-500';
    "}
    {;
      "name": 'AI Cybersecurity';
      "href": '/services/ai-cybersecurity-threat-detection';
      "icon": "Shield;
      "description": 'AI-Powered Security';
      "featured": true;
      "color": 'from-green-500 to-blue-500';
    "}
    {;
      "name": 'Quantum Computing';
      "href": '/services/quantum-computing';
      "icon": "Atom;
      "description": 'Quantum AI & Optimization';
      "featured": true;
      "color": 'from-purple-500 to-pink-500';
    "}
    {;
      "name": 'IoT Edge Computing';
      "href": '/services/iot-edge';
      "icon": "Cpu;
      "description": 'IoT & Real-time Processing';
      "featured": true;
      "color": 'from-blue-500 to-cyan-500';
    "}
    {;
      "name": 'Digital Twin Platform';
      "href": '/services/digital-twin';
      "icon": "Globe;
      "description": 'Virtual Replicas & Simulation';
      "featured": true;
      "color": 'from-green-500 to-emerald-500';
    "}
    {;
      "name": 'Cloud DevOps';
      "href": '/services/cloud-devops';
      "icon": "Cloud;
      "description": 'DevOps & Infrastructure';
      "featured": true;
      "color": 'from-blue-500 to-cyan-500';
    "}
    {;
      "name": 'Micro SaaS Products';
      "href": '/services/micro-saas';
      "icon": "ShoppingCart;
      "description": 'AI automations with transparent pricing';
      "featured": true;
      "color": 'from-orange-500 to-red-500';
    "}
    {;
      "name": 'Data Analytics';
      "href": '/services/data-analytics';
      "icon": "BarChart3;
      "description": 'Business Intelligence & Analytics';
      "featured": false;
      "color": 'from-blue-500 to-indigo-500';
    "}
    {;
      "name": 'IT Infrastructure';
      "href": '/services/it-infrastructure';
      "icon": "Server;
      "description": 'Enterprise IT Solutions';
      "featured": false;
      "color": 'from-gray-500 to-slate-500';
    "}
    {;
      "name": 'Green IT Solutions';
      "href": '/services/green-it';
      "icon": "Leaf;
      "description": 'Sustainable Technology';
      "featured": false;
      "color": 'from-green-500 to-emerald-500';
    "}
    {;
      "name": 'Space Technology';
      "href": '/services/space-tech';
      "icon": "Satellite;
      "description": 'Aerospace & Space Tech';
      "featured": false;
      "color": 'from-indigo-500 to-purple-500';
    "}
  ];
  const solutions = [;
    {;
      "name": 'Healthcare Solutions';
      "href": '/solutions/healthcare';
      "icon": "Heart;
      "description": 'Digital health transformation';
      "featured": true;
    "}
    {;
      "name": 'Financial Solutions';
      "href": '/solutions/financial';
      "icon": "TrendingUp;
      "description": 'Fintech innovation & compliance';
      "featured": true;
    "}
    {;
      "name": 'Manufacturing Solutions';
      "href": '/solutions#manufacturing';
      "icon": "Building;
      "description": 'Smart manufacturing & automation';
      "featured": true;
    "}
    {;
      "name": 'Retail Solutions';
      "href": '/solutions/retail';
      "icon": "ShoppingCart;
      "description": 'E-commerce & retail innovation';
      "featured": true;
    "}
    {;
      "name": 'Education Solutions';
      "href": '/solutions/education';
      "icon": "BookOpen;
      "description": 'EdTech & learning platforms';
      "featured": true;
    "}
    {;
      "name": 'Legal Tech Solutions';
      "href": '/solutions/legal-tech';
      "icon": "Scale;
      "description": 'Legal tech & compliance';
      "featured": true;
    "}
    {;
      "name": 'Research & Development';
      "href": '/research-development';
      "icon": "Code;
      "description": 'Innovation & R&D support';
      "featured": true;
    "}
    {;
      "name": 'Government Solutions';
      "href": '/solutions#government';
      "icon": "Building2;
      "description": 'Public sector digital transformation';
      "featured": false;
    "}
    {;
      "name": 'Education Solutions';
      "href": '/solutions#education';
      "icon": "GraduationCap;
      "description": 'EdTech & learning platforms';
      "featured": false;
    "}
  ];
  const resources = [;
    {;
      "name": 'Blog & Insights';
      "href": '/blog';
      "icon": "BookOpen;
      "description": 'Latest industry trends and insights';
      "featured": true;
    "}
    {;
      "name": 'Case Studies';
      "href": '/case-studies';
      "icon": "Target;
      "description": 'Real-world success stories';
      "featured": true;
    "}
    {;
      "name": 'White Papers';
      "href": '/white-papers';
      "icon": "FileText;
      "description": 'In-depth research and analysis';
      "featured": true;
    "}
    {;
      "name": 'Webinars';
      "href": '/webinars';
      "icon": "Users;
      "description": 'Expert-led learning sessions';
      "featured": true;
    "}
    {;
      "name": 'Documentation';
      "href": '/docs';
      "icon": "Code;
      "description": 'Technical guides and APIs';
      "featured": true;
    "}
    {;
      "name": 'FAQ & Support';
      "href": '/faq';
      "icon": "HelpCircle;
      "description": 'Get help and answers';
      "featured": true;
    "}
    {;
      "name": 'Pricing Guide';
      "href": '/pricing';
      "icon": "DollarSign;
      "description": 'Complete pricing information';
      "featured": true;
    "}
    {;
      "name": 'Training & Certification';
      "href": '/training';
      "icon": "BookOpen;
      "description": 'Professional development';
      "featured": true;
    "}
    {;
      "name": 'Developer Portal';
      "href": '/developers';
      "icon": "Code;
      "description": 'API documentation & tools';
      "featured": false;
    "}
    {;
      "name": 'Community Forum';
      "href": '/community';
      "icon": "Users;
      "description": 'Connect with experts';
      "featured": false;
    "}
  ];
;
  const quickLinks = [;
            <nav className="space-y-4">;
              {navigationItems.map((item) => (;
                <div key={item.name}>;
                  <button;
                    onClick={() => item.dropdown ? handleDropdownToggle(item.name) : "null"}
                    className="flex items-center justify-between w-full text-left text-gray-700 "hover": "text-cyan-600 transition-colors duration-300 font-medium py-2";
                  >;
                    <div className="flex items-center space-x-2">;
                      <item.icon className="w-4 h-4" />;
                      <span>{item.name"}</span>;
                    </div>;
                    {item.dropdown && (;
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${;
                        activeDropdown === item.name ? 'rotate-180' : '';
                      }`} />;
                    )}
                  </button>;
                  {item.dropdown && activeDropdown === item.name && (;
                    <motion.div;
                      initial={{ "opacity": "0", "height": "0 "}}
                      animate={{ "opacity": "1", "height": 'auto' }}
                      exit={{ "opacity": "0", "height": "0 "}}
                      className="ml-6 space-y-2";
                    >;
                      {item.dropdown.map((subItem) => (;
                        <Link;
                          key={subItem.name}
                          to={subItem.href}
                          className="block text-sm text-gray-600 "hover": "text-cyan-600 transition-colors duration-300 py-1";
                          onClick={() => {;
                            setActiveDropdown(null);
                            setIsMenuOpen(false);
                          "}}
                        >;
                          {subItem.name}
                        </Link>;
                      ))}
                    </motion.div>;
                  )}
                </div>;
              ))}
            </nav>;
            {/* Search Bar */}
            <div className="hidden "lg": "flex items-center space-x-4">;
              <form onSubmit={handleSearch"} className="relative">;
                <input;
                  type="text";
                  placeholder="Search services...";
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 "focus": "outline-none "focus":ring-2 "focus":ring-cyan-400 "focus":border-transparent transition-all duration-200";
                />;
                <button;
                  type="submit";
                  disabled={isSearching"}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-slate-400 "hover": "text-cyan-400 transition-colors duration-200";
                >;
                  {isSearching ? (;
                    <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>;
                  ) : (;
                    <Search className="w-5 h-5" />;
                  )"}
                </button>;
              </form>;
              {/* Quick Actions */}
              <div className="flex items-center space-x-2">;
                <Link;
                  to="/request-quote";
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg "hover": "from-cyan-600 "hover":to-blue-700 transition-all duration-200 font-medium";
                >;
                  Get Quote;
                </Link>;
                <ThemeToggle />;
              </div>;
            </div>;
            {/* Mobile menu button */"}
            <div className=""lg": "hidden">;
              <button;
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)"}
                className="p-2 text-slate-300 "hover": "text-cyan-400 transition-colors duration-200";
              >;
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />"}
              </button>;
            </div>;
          </div>;
        </div>;
        {/* Mobile Navigation */}
        {mobileMenuOpen && (;
          <div className=""lg": "hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/20">;
            <div className="container-responsive py-4">;
              <div className="space-y-4">;
                {/* Mobile Search */"}
                <form onSubmit={handleSearch} className="relative">;
                  <input;
                    type="text";
                    placeholder="Search services...";
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 "focus": "outline-none "focus":ring-2 "focus":ring-cyan-400 "focus":border-transparent";
                  />;
                  <button;
                    type="submit";
                    disabled={isSearching"}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-slate-400 "hover": "text-cyan-400";
                  >;
                    {isSearching ? (;
                      <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>;
                    ) : (;
                      <Search className="w-5 h-5" />;
                    )"}
                  </button>;
                </form>;
                {/* Mobile Navigation Links */}
                <div className="space-y-2">;
                  {navigation.map((item) => (;
                    <div key={item.name}>;
                      {item.hasDropdown ? (;
                        <div>;
                          <button;
                            onClick={() => {;
                              if (item.name === 'Services') {;
                                setServicesDropdownOpen(!servicesDropdownOpen);
                                setSolutionsDropdownOpen(false);
                                setResourcesDropdownOpen(false);
                              } else if (item.name === 'Solutions') {;
                                setSolutionsDropdownOpen(!solutionsDropdownOpen);
                                setServicesDropdownOpen(false);
                                setResourcesDropdownOpen(false);
                              } else if (item.name === 'Resources') {;
                                setResourcesDropdownOpen(!resourcesDropdownOpen);
                                setServicesDropdownOpen(false);
                                setSolutionsDropdownOpen(false);
                              }
                            }}
                            className="w-full flex items-center justify-between px-4 py-3 text-left text-slate-300 "hover": "text-cyan-400 "hover":bg-slate-800/50 rounded-lg transition-all duration-200";
                          >;
                            {item.name"}
                            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${;
                              (item.name === 'Services' && servicesDropdownOpen) ||;
                              (item.name === 'Solutions' && solutionsDropdownOpen) ||;
                              (item.name === 'Resources' && resourcesDropdownOpen);
                                ? 'rotate-180' : '';
                            }`} />;
                          </button>;
                          ;
                          {/* Mobile Services Dropdown */}
                          {item.name === 'Services' && servicesDropdownOpen && (;
                            <div className="ml-4 mt-2 space-y-2">;
                              {services.map((service) => (;
                                <Link;
                                  key={service.name}
                                  to={service.href}
                                  className="block px-4 py-2 text-slate-400 "hover": "text-cyan-400 "hover":bg-slate-800/30 rounded transition-all duration-200";
                                  onClick={() => setMobileMenuOpen(false)"}
                                >;
                                  {service.name}
                                </Link>;
                              ))}
                            </div>;
                          )}
                          {/* Mobile Solutions Dropdown */}
                          {item.name === 'Solutions' && solutionsDropdownOpen && (;
                            <div className="ml-4 mt-2 space-y-2">;
                              {solutions.map((solution) => (;
                                <Link;
                                  key={solution.name}
                                  to={solution.href}
                                  className="block px-4 py-2 text-slate-400 "hover": "text-cyan-400 "hover":bg-slate-800/30 rounded transition-all duration-200";
                                  onClick={() => setMobileMenuOpen(false)"}
                                >;
                                  {solution.name}
                                </Link>;
                              ))}
                            </div>;
                          )}
                          {/* Mobile Resources Dropdown */}
                          {item.name === 'Resources' && resourcesDropdownOpen && (;
                            <div className="ml-4 mt-2 space-y-2">;
                              {resources.map((resource) => (;
                                <Link;
                                  key={resource.name}
                                  to={resource.href}
                                  className="block px-4 py-2 text-slate-400 "hover": "text-cyan-400 "hover":bg-slate-800/30 rounded transition-all duration-200";
                                  onClick={() => setMobileMenuOpen(false)"}
                                >;
                                  {resource.name}
                                </Link>;
                              ))}
                            </div>;
                          )}
                        </div>;
                      ) : "(;
                        <Link;
                          to={item.href"}
                          className="block px-4 py-3 text-slate-300 "hover": "text-cyan-400 "hover":bg-slate-800/50 rounded-lg transition-all duration-200";
                          onClick={() => setMobileMenuOpen(false)"}
                        >;
                          {item.name}
                          <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${;
                            (item.name === 'Services' && servicesDropdownOpen) ||;
                            (item.name === 'Solutions' && solutionsDropdownOpen) ||;
                            (item.name === 'Resources' && resourcesDropdownOpen);
                              ? 'rotate-180' : '';
                          }`} />;
                        </button>;
                        {/* Mobile Services Dropdown */}
                        {item.name === 'Services' && servicesDropdownOpen && (;
                          <div className="ml-4 mt-2 space-y-2">;
                            {services.slice(0, 6).map((service) => (;
                              <Link;
                                key={service.name}
                                to={service.href}
                                className="block text-slate-400 "hover": "text-cyan-400 py-1 transition-colors";
                                onClick={() => setMobileMenuOpen(false)"}
                              >;
                                {service.name}
                              </Link>;
                            ))}
                            <Link;
                              to="/services";
                              className="block text-cyan-400 "hover": "text-cyan-300 py-1 font-medium";
                              onClick={() => setMobileMenuOpen(false)"}
                            >;
                              View All Services →;
                            </Link>;
                          </div>;
                        )}
                {/* Mobile Quick Actions */}
                <div className="pt-4 border-t border-slate-700">;
                  <div className="space-y-2">;
                    {quickLinks.map((link) => (;
                      <Link;
                        key={link.name}
                        to={link.href}
                        className="flex items-center px-4 py-2 text-slate-400 "hover": "text-cyan-400 "hover":bg-slate-800/30 rounded transition-all duration-200";
                        onClick={() => setMobileMenuOpen(false)"}
                      >;
                        <link .icon className="w-4 h-4 mr-3"  />;
                        {link.name}
                      </Link>;
                    ))}
                  </div>;
                  ;
                  <div className="mt-4 pt-4 border-t border-slate-700">;
                    <Link;
                      to="/request-quote";
                      className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg "hover": "from-cyan-600 "hover":to-blue-700 transition-all duration-200 font-medium";
                      onClick={() => setMobileMenuOpen(false)"}
                    >;
                      Get Quote;
                    </Link>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        )}
      </header>;
    </>;
;
      )}
    </header>;
  );
}
import { Link } from 'react-router-dom';
;
export function AppHeader() {;
  return (;
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">;
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">;
        <Link to="/" className="text-lg font-bold">Zion Tech Group</Link>;
        <nav className="hidden "md": "flex items-center space-x-6">;
          <Link to="/" className="text-gray-700 "hover":text-cyan-600">Home</Link>;
          <Link to="/services" className="text-gray-700 "hover":text-cyan-600">Services</Link>;
          <Link to="/about" className="text-gray-700 "hover":text-cyan-600">About</Link>;
          <Link to="/contact" className="text-gray-700 "hover":text-cyan-600">Contact</Link>;
        </nav>;
      </div>;
    </header>;
  );
"}
import React, { useState } from 'react';''
import Link from 'next/link';''
import { motion } from 'framer-motion';''
import { Menu, X, ChevronDown } from 'lucide-react';'
const AppHeader: React.FC = () => {}
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigation = [']
    { name: 'Home', href: '/' },'
    { '}
      name: 'Services',''
      href: '/services','
      submenu: [']
        { name: 'AI Services', href: '/ai-services' },''
        { name: 'IT Services', href: '/it-services' },''
        { name: 'Micro SaaS', href: '/micro-saas' },''
        { name: 'All Services', href: '/services' }'];
      ];
    },'
    { name: 'Solutions', href: '/solutions' },''
    { name: 'About', href: '/about' },''
    { name: 'Contact', href: '/contact' }'
  ];
  return (')
    <header className="bg-white shadow-lg sticky top-0 z-50">"
</header>"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
</div>"
        <div className="flex justify-between items-center py-4">"
</div>"
          <div className="flex-shrink-0">"
</div>"
            <Link href="/" className="flex items-center">"
</Link>"
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">"
</div>"
                <span className="text-white font-bold text-xl">Z</span>"
              </div>"
              <span className="ml-3 text-xl font-bold text-gray-900">Zion Tech Group</span>"
            </Link>
          </div>"
          <nav className="hidden md:flex space-x-8">"
</nav>"
              <div key={item.name} className="relative group">"
</div>
                <Link;
                  href={item.href}"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"");
                  onMouseEnter={() => item.submenu && setIsServicesOpen(true)};
</Link>"
                  {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}"
</ChevronDown>
                </Link>
                  <motion.div;
                    initial={{ opacity: 0, y: 10 }};
                    animate={{ opacity: 1, y: 0 }};
                    exit={{ opacity: 0, y: 10 }}"
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50""
                    onMouseEnter={() => setIsServicesOpen(true)};
</motion>
                      <Link;
                        key={subItem.name};
                        href={subItem.href}"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200""
                      >
</Link>
                      </Link>
                  </motion.div>
                )};
              </div>
          </nav>"
          <div className="hidden md:flex items-center space-x-4">"
</div>
            <Link;"
              href="/contact"""
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium""
            >
</Link>
            </Link>
          </div>"
          <div className="md:hidden">"
</div>
            <button;
              onClick={() => setIsMenuOpen(!isMenuOpen)};
</button>"
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}"
</X>
            </button>
          </div>
        </div>
          <motion.div;
            initial={{ opacity: 0, height: 0 }}"
            animate={{ opacity: 1, height: 'auto' }}'
            exit={{ opacity: 0, height: 0 }}'
            className="md:hidden border-t border-gray-200 py-4""
          >
</motion>"
            <nav className="space-y-2">"
</nav>
                <div key={item.name}>
</div>
                  <Link;
                    href={item.href}"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200""
                    onClick={() => setIsMenuOpen(false)};
</Link>
                  </Link>"
                    <div className="ml-4 space-y-1">"
</div>
                        <Link;
                          key={subItem.name};
                          href={subItem.href}"
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200""
                          onClick={() => setIsMenuOpen(false)};
</Link>
                        </Link>
                    </div>
                </div>"
              <div className="pt-4">"
</div>
                <Link;"
                  href="/contact"""
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium""
                  onClick={() => setIsMenuOpen(false)};
</Link>
                </Link>
              </div>
            </nav>
          </motion.div>
        )};
      </div>
    </header>"