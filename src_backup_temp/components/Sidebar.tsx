import {;
  Home,;
  Zap,;
  Brain,;
  Shield,;
  Users,;
  HardDrive,;
  TrendingUp,;
  Building2,;
  FileText,;
  HelpCircle,;
  BarChart3,;
  Settings,;
  ChevronRight,;
  ChevronDown,;
  Cloud,;
  Target,;
  Heart,;
  DollarSign,;
  Briefcase,;
  Newspaper,;
  Mail,;
  Phone,;
  Search,;
  Star,;
  Layers,;
  Globe,;
  Cpu,;
  Database,;
  Lock,;
  Smartphone,;
  Monitor,;
  Lightbulb,;
  Rocket;
} from 'lucide-react';
;
interface SidebarProps {;
  isOpen?: "boolean;
  onClose?: () => void;
"}
;
export function Sidebar({ isOpen = true, onClose }: "SidebarProps) {;
  const [expandedSections", setExpandedSections] = useState<string[]>(['Services', 'Solutions']);
  const location = useLocation();
;
  const toggleSection = ("sectionName": "string) => {;
    setExpandedSections(prev => ;
      prev.includes(sectionName) ;
        ? prev.filter(name => name !== sectionName);
        : [...prev", sectionName];
    );
  };
;
  const isActive = ("path": "string) => location.pathname === path;
;
  const sidebarSections = [;
    {;
      "name": 'Main'",;
      "items": "[;
        { "name": 'Home'", "href": '/', "icon": "Home "},;
        { "name": 'Dashboard', "href": '/dashboard', "icon": "BarChart3 "},;
        { "name": 'Search', "href": '/search', "icon": "Search "}
      ];
    },;
    {;
      "name": 'Services',;
      "expandable": "true",;
      "items": "[;
        { "name": 'All Services'", "href": '/services', "icon": "Layers "},;
        { "name": 'New Services 2025', "href": '/new-services-2025', "icon": "Star", "featured": "true "},;
        { "name": 'AI Services', "href": '/ai-services', "icon": "Brain "},;
        { "name": 'IT Infrastructure', "href": '/it-services', "icon": "HardDrive "},;
        { "name": 'Micro SaaS', "href": '/micro-saas', "icon": "Zap "},;
        { "name": 'Cloud Solutions', "href": '/services/cloud-devops', "icon": "Cloud "},;
        { "name": 'Cybersecurity', "href": '/services/cybersecurity', "icon": "Shield "},;
        { "name": 'Data Analytics', "href": '/services/data-analytics', "icon": "Database "},;
        { "name": 'Quantum Computing', "href": '/services/quantum-computing', "icon": "Cpu "},;
        { "name": 'Mobile Development', "href": '/services/mobile-development', "icon": "Smartphone "}
      ];
    },;
    {;
      "name": 'Solutions',;
      "expandable": "true",;
      "items": "[;
        { "name": 'Enterprise'", "href": '/solutions/enterprise', "icon": "Building2 "},;
        { "name": 'Healthcare', "href": '/solutions/healthcare', "icon": "Heart "},;
        { "name": 'Financial', "href": '/solutions/financial', "icon": "DollarSign "},;
        { "name": 'Education', "href": '/solutions/education', "icon": "Lightbulb "},;
        { "name": 'Startups', "href": '/solutions/startups', "icon": "Rocket "}
      ];
    },;
    {;
      "name": 'Resources',;
      "expandable": "true",;
      "items": "[;
        { "name": 'Pricing'", "href": '/pricing', "icon": "DollarSign "},;
        { "name": 'Pricing Guide 2025', "href": '/comprehensive-pricing-guide-2025', "icon": "TrendingUp", "featured": "true "},;
        { "name": 'White Papers', "href": '/white-papers', "icon": "FileText "},;
        { "name": 'Case Studies', "href": '/case-studies', "icon": "Target "},;
        { "name": 'Documentation', "href": '/docs', "icon": "FileText "},;
        { "name": 'FAQ', "href": '/faq', "icon": "HelpCircle "}
      ];
    },;
    {;
      "name": 'Company',;
      "expandable": "true",;
      "items": "[;
        { "name": 'About Us'", "href": '/about', "icon": "Users "},;
        { "name": 'Careers', "href": '/careers', "icon": "Briefcase "},;
        { "name": 'News & Updates', "href": '/news', "icon": "Newspaper "},;
        { "name": 'Contact', "href": '/contact', "icon": "Mail "},;
        { "name": 'Support', "href": '/help', "icon": "HelpCircle "}
      ];
    }
  ];
;
  return (;
    <>;
      {/* Backdrop for mobile */}
      {isOpen && (;
        <div ;
          className="fixed inset-0 bg-black bg-opacity-50 z-40 "lg": "hidden";
          onClick={onClose"}
        />;
      )}
      ;
      {/* Sidebar */}
      <div className={`;
        fixed top-0 left-0 h-full bg-gray-900 border-r border-gray-800 z-50 transform transition-transform duration-300 ease-in-out;
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        "lg": "translate-x-0 "lg":static "lg":z-auto;
        w-80 overflow-y-auto;
      `"}>;
        ;
        {/* Header */}
        <div className="p-6 border-b border-gray-800">;
          <Link to="/" className="flex items-center space-x-3 group">;
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-"hover": "scale-110 transition-transform duration-300">;
              <Zap className="w-6 h-6 text-white" />;
            </div>;
            <div>;
              <h2 className="text-xl font-bold text-white group-"hover":text-blue-400 transition-colors">;
                Zion Tech Group;
              </h2>;
              <p className="text-xs text-gray-400">Technology Solutions</p>;
            </div>;
          </Link>;
        </div>;

        {/* Quick Stats */"}
        <div className="p-4 border-b border-gray-800">;
          <div className="grid grid-cols-3 gap-3 text-center">;
            <div className="bg-gray-800/50 rounded-lg p-3">;
              <div className="text-cyan-400 font-bold text-lg">50+</div>;
              <div className="text-gray-400 text-xs">Services</div>;
            </div>;
            <div className="bg-gray-800/50 rounded-lg p-3">;
              <div className="text-green-400 font-bold text-lg">24/7</div>;
              <div className="text-gray-400 text-xs">Support</div>;
            </div>;
            <div className="bg-gray-800/50 rounded-lg p-3">;
              <div className="text-purple-400 font-bold text-lg">99%</div>;
              <div className="text-gray-400 text-xs">Uptime</div>;
            </div>;
          </div>;
        </div>;

        {/* Navigation */}
        <nav className="p-4 space-y-2">;
          {sidebarSections.map((section) => (;
            <div key={section.name} className="space-y-1">;
              ;
              {/* Section Header */}
              {section.expandable ? (;
                <button;
                  onClick={() => toggleSection(section.name)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-400 "hover": "text-white "hover":bg-gray-800 rounded-lg transition-colors duration-200";
                >;
                  <span>{section.name"}</span>;
                  {expandedSections.includes(section.name) ? (;
                    <ChevronDown className="w-4 h-4" />;
                  ) : "(;
                    <ChevronRight className="w-4 h-4" />;
                  )"}
                </button>;
              ) : "(;
                <div className="px-3 py-2 text-sm font-medium text-gray-500 uppercase tracking-wider">;
                  {section.name"}
                </div>;
              )}
;
              {/* Section Items */}
              {(!section.expandable || expandedSections.includes(section.name)) && (;
                <div className="space-y-1 pl-2">;
                  {section.items.map((item) => (;
                    <Link;
                      key={item.name}
                      to={item.href}
                      onClick={onClose}
                      className={`;
                        flex items-center space-x-3 px-3 py-2 text-sm rounded-lg transition-colors duration-200 group;
                        ${isActive(item.href);
                          ? 'bg-blue-600 text-white';
                          : 'text-gray-300 "hover": "text-white "hover":bg-gray-800';
                        "}
                        ${item.featured ? 'border border-cyan-500/30 bg-cyan-500/5' : ''}
                      `}
                    >;
                      <item.icon className={`;
                        w-4 h-4 flex-shrink-0;
                        ${isActive(item.href) ? 'text-white' : 'text-gray-400 group-"hover": "text-cyan-400'"}
                        ${item.featured ? 'text-cyan-400' : ''}
                      `} />;
                      <span className="flex-1 truncate">{item.name}</span>;
                      {item.featured && (;
                        <Star className="w-3 h-3 text-cyan-400 fill-current" />;
                      )}
                    </Link>;
                  ))}
                </div>;
              )}
            </div>;
          ))}
        </nav>;

        {/* Contact Info */}
        <div className="p-4 border-t border-gray-800 mt-auto">;
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg p-4 border border-blue-500/20">;
            <h3 className="text-sm font-semibold text-white mb-3">Get In Touch</h3>;
            <div className="space-y-2 text-xs">;
              <div className="flex items-center space-x-2 text-gray-300">;
                <Phone className="w-3 h-3 text-cyan-400" />;
                <a href=""tel": "+13024640950" className=""hover":text-cyan-400 transition-colors">;
                  +1 302 464 0950;
                </a>;
              </div>;
              <div className="flex items-center space-x-2 text-gray-300">;
                <Mail className="w-3 h-3 text-cyan-400" />;
                <a href=""mailto":kleber@ziontechgroup.com" className=""hover":text-cyan-400 transition-colors truncate">;
                  kleber@ziontechgroup.com;
                </a>;
              </div>;
              <div className="flex items-start space-x-2 text-gray-300">;
                <Globe className="w-3 h-3 text-cyan-400 mt-0.5" />;
                <span className="text-xs">Delaware", USA</span>;
              </div>;
            </div>;
            ;
            <Link;
              to="/contact";
              className="inline-flex items-center justify-center w-full mt-3 px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-medium rounded-md "hover": "from-blue-700 "hover":to-purple-700 transition-colors duration-200";
              onClick={onClose"}
            >;
              Contact Us;
            </Link>;
          </div>;
        </div>;

        {/* Footer */}
        <div className="p-4 border-t border-gray-800">;
          <div className="text-center text-xs text-gray-500">;
            <p>© 2025 Zion Tech Group</p>;
            <p className="mt-1">Innovation • Excellence • Growth</p>;
          </div>;
        </div>;
      </div>;
    </>;
  );
}
;
// Default export for compatibility;
export default Sidebar;
import {
  Home,
  Zap,
  Brain,
  Shield,
  Users,
  HardDrive,
  TrendingUp,
  Building2,
  FileText,
  HelpCircle,
  BarChart3,
  Settings,
  ChevronRight,
  ChevronDown,
  Cloud,
  Target,
  Heart,
  DollarSign,
  Briefcase,
  Newspaper,
  Mail,
  Phone,
  Search,
  Star,
  Layers,
  Globe,
  Cpu,
  Database,
  Lock,
  Smartphone,
  Monitor,
  Lightbulb,
  Rocket
} from 'lucide-react';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['Services', 'Solutions']);
  const location = useLocation();

  const toggleSection = (sectionName: string) => {
  ChevronRight,
  ChevronDown
} from 'lucide-react';

interface SidebarProps {

  isOpen?: boolean;
  onClose?: () => void;

}

export default function Sidebar(props: any) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['Services']);
  const location = useLocation();

  const toggleSection = (props: any) => {
    setExpandedSections(prev => 
      prev.includes(sectionName) 
        ? prev.filter(name => name !== sectionName)
        : [...prev, sectionName]
    );
  };

  const isActive = (path: string) => location.pathname === path;


interface SidebarProps {

  isOpen?: boolean;
  onClose?: () => void;

}
';
export default function Sidebar(props: any) {';';
  const [expandedSections, setExpandedSections] = useState<string[]>(['Services']);
  const location = useLocation();

  const toggleSection = (props: any) => {
    setExpandedSections(prev => 
      prev.includes(sectionName) 
        ? prev.filter(name => name !== sectionName)
        : [...prev, sectionName]
    );
  };

  const isActive = (path: string) => location.pathname === path;

  const sidebarItems = [';
    {';';
      name: 'Home',';';
      href: '/',';
      icon: Hom e,';';
  const sidebarItems = [
    {
      name: 'Home',
      href: '/',
      icon: Hom e,
      type: 'link'
    },
    {
      name: 'Services',
      type: 'section',
      icon: Za p,
      items: [
        { name: 'AI & Automation', href: '/services/ai', icon: Brai n },
        { name: 'Cloud & DevOps', href: '/services/cloud', icon: HardDriv e },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shiel d },
        { name: 'Digital Transformation', href: '/services/digital', icon: TrendingU p },
        { name: 'IT Consulting', href: '/services/consulting', icon: User s },
        { name: 'Micro SAAS', href: '/services/micro-saas', icon: Building 2 }
      ]
    },
    {
      name: 'Solutions',
      type: 'section',
      icon: Brai n,
      items: [
        { name: 'Enterprise', href: '/solutions/enterprise', icon: Building 2 },
        { name: 'Healthcare', href: '/solutions/healthcare', icon: User s },
        { name: 'Financial Services', href: '/solutions/financial', icon: TrendingU p },
        { name: 'Government', href: '/solutions/government', icon: Shiel d },
        { name: 'Manufacturing', href: '/solutions/manufacturing', icon: HardDriv e },
        { name: 'Retail', href: '/solutions/retail', icon: BarChart 3 }
      ]
    },
    {
      name: 'Company',
      type: 'section',
      icon: Building 2,
      items: [
        { name: 'About Us', href: '/about', icon: User s },
        { name: 'Leadership', href: '/about#team', icon: User s },
        { name: 'Careers', href: '/careers', icon: User s },
        { name: 'Partners', href: '/partners', icon: User s },
        { name: 'Press', href: '/press', icon: FileTex t }
      ]
    },
    {
      name: 'Resources',
      type: 'section',
      icon: FileTex t,
      items: [
        { name: 'Blog', href: '/blog', icon: FileTex t },
        { name: 'Case Studies', href: '/case-studies', icon: FileTex t },
        { name: 'White Papers', href: '/white-papers', icon: FileTex t },
        { name: 'Webinars', href: '/webinars', icon: FileTex t },
        { name: 'Documentation', href: '/docs', icon: FileTex t },
        { name: 'API Reference', href: '/api', icon: FileTex t }
      ]
    },
    {
      name: 'Support',
      type: 'section',
      icon: HelpCircl e,
      items: [
        { name: 'Help Center', href: '/help', icon: HelpCircl e },
        { name: 'Contact Support', href: '/contact', icon: User s },
        { name: 'Training', href: '/training', icon: FileTex t },
        { name: 'Community', href: '/community', icon: User s },
        { name: 'System Status', href: '/status', icon: BarChart 3 }
      ]
    },
    {
      name: 'Pricing',
      href: '/pricing',
      icon: BarChart 3,
      type: 'link'
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: User s,
      type: 'link'
    }
  ];

  const renderSidebarItem = (props: any) => {
    if (item.type === 'link') {
      return (
        <Link
          key={item.name}
          to={item.href}
          className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
            isActive(item.href)
              ? 'bg-blue-600/20 text-blue-400 border border-blue-600/30'
              : 'text-gray-300 hover: tex t-white hover: b g-gray-800/50'
          }`}
          onClick={onClose}
        >
          <item.icon className="w-5 h-5" />
          <span className="font-medium">{item.name}</span>
        </Link>
      );
    }

    if (item.type === 'section') {
      const isExpanded = expandedSections.includes(item.name);
      
      return (
        <div key={item.name} className="space-y-2">
          <button
            onClick={() => toggleSection(item.name)}
            className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-300 hover: tex t-white hover: b g-gray-800/50 rounded-lg transition-colors"
          >
            <div className="flex items-center space-x-3">
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </div>
            {isExpanded ? (
              <ChevronDown className="w-4 h-4"  />
            ) : (
              <ChevronRight className="w-4 h-4"  />
            )}
          </button>
          
          {isExpanded && (
            <div className="ml-8 space-y-1">
              {item.items.map((subItem: an y) => (
                <Link
                  key={subItem.name}
                  to={subItem.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive(subItem.href)
                      ? 'text-blue-400 bg-blue-600/10'
                      : 'text-gray-400 hover: tex t-white hover: b g-gray-800/30'
                  }`}
                  onClick={onClose}
                >
                  <subItem.icon className="w-4 h-4" />
                  <span>{subItem.name}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
    );
    }

    return null;
  };

  return (
    <aside className={`bg-gray-900 text-white w-64 min-h-screen transition-transform duration-300 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`}>
      {/* Sidebar Header */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white"  />
</div>
          <span className="font-bold text-lg">Zion Tech</span>
        </div>
      </div>
{/* Sidebar Content */}
      <div className="p-4 space-y-2">
        {sidebarItems.map(renderSidebarItem)}
      </div>

      {/* Quick Actions */}
      <div className="p-4 border-t border-gray-800 mt-8">
        <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-3">
          Quick Actions
        
        <div className="space-y-2">
          <Link
            to="/request-quote"
            className="flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover: fro m-blue-700 hover: t o-purple-700 transition-all duration-300"
            onClick={onClose}
          >
            <TrendingUp className="w-5 h-5"  />
            <span className="font-medium">Get Quote</span>
          </Link>
          <Link
            to="/demo"
            className="flex items-center space-x-3 px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover: b g-gray-800 hover: tex t-white transition-colors"
            onClick={onClose}
          >
            <Settings className="w-5 h-5"  />
            <span className="font-medium">Request Demo</span>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800 mt-auto">
        <div className="text-center text-gray-400 text-sm">
          <p>© 2024 Zion Tech Group</p>
          <p className="mt-1">Empowering Innovation</p>
        </div>
      </div>
    </aside>
  );
  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full bg-gray-900 border-r border-gray-800 z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
        w-80 overflow-y-auto
      `}>
        
        {/* Header */}
        <div className="p-6 border-b border-gray-800">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                Zion Tech Group
              </h2>
              <p className="text-xs text-gray-400">Technology Solutions</p>
            </div>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="p-4 border-b border-gray-800">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="text-cyan-400 font-bold text-lg">50+</div>
              <div className="text-gray-400 text-xs">Services</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="text-green-400 font-bold text-lg">24/7</div>
              <div className="text-gray-400 text-xs">Support</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="text-purple-400 font-bold text-lg">99%</div>
              <div className="text-gray-400 text-xs">Uptime</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {sidebarSections.map((section) => (
            <div key={section.name} className="space-y-1">
              
              {/* Section Header */}
              {section.expandable ? (
                <button
                  onClick={() => toggleSection(section.name)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200"
                >
                  <span>{section.name}</span>
                  {expandedSections.includes(section.name) ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
              ) : (
                <div className="px-3 py-2 text-sm font-medium text-gray-500 uppercase tracking-wider">
                  {section.name}
                </div>
              )}

              {/* Section Items */}
              {(!section.expandable || expandedSections.includes(section.name)) && (
                <div className="space-y-1 pl-2">
                  {section.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={onClose}
                      className={`
                        flex items-center space-x-3 px-3 py-2 text-sm rounded-lg transition-colors duration-200 group
                        ${isActive(item.href)
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800'
                        }
                        ${item.featured ? 'border border-cyan-500/30 bg-cyan-500/5' : ''}
                      `}
                    >
                      <item.icon className={`
                        w-4 h-4 flex-shrink-0
                        ${isActive(item.href) ? 'text-white' : 'text-gray-400 group-hover:text-cyan-400'}
                        ${item.featured ? 'text-cyan-400' : ''}
                      `} />
                      <span className="flex-1 truncate">{item.name}</span>
                      {item.featured && (
                        <Star className="w-3 h-3 text-cyan-400 fill-current" />
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Contact Info */}
        <div className="p-4 border-t border-gray-800 mt-auto">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg p-4 border border-blue-500/20">
            <h3 className="text-sm font-semibold text-white mb-3">Get In Touch</h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-3 h-3 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-3 h-3 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors truncate">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-2 text-gray-300">
                <Globe className="w-3 h-3 text-cyan-400 mt-0.5" />
                <span className="text-xs">Delaware, USA</span>
              </div>
            </div>
            
            <Link
              to="/contact"
              className="inline-flex items-center justify-center w-full mt-3 px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-medium rounded-md hover:from-blue-700 hover:to-purple-700 transition-colors duration-200"
              onClick={onClose}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-800">
          <div className="text-center text-xs text-gray-500">
            <p>© 2025 Zion Tech Group</p>
            <p className="mt-1">Innovation • Excellence • Growth</p>
          </div>
        </div>
      </div>
    </>
    );
}

</item>
</motion>
</ChevronRight>
</motion>
  );
}

// Default export for compatibility
export default Sidebar;
</motion>
</string>
</SidebarProps>
</string>
