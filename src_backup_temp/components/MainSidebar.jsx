import {Link, useLocation} from 'react-router-dom';
import {cn} from '@/lib/utils';
import { Home, ShoppingCart, Users, Settings, FileText, HelpCircle, Code, BarChart3, Briefcase, Leaf, Building, Mail, Calendar, Globe, Zap export function MainSidebar("props": "any) {;
    const location = useLocation();
    const sidebarSections = [;
        {;
            "title": 'Main'",;
            items[;
                { "key": 'home', "href": '/', "icon": "<Home className="w-4 h-4" />", "label": 'Home' },;
                {"key": 'marketplace', "href": '/marketplace', "icon": "<ShoppingCart className="w-4 h-4" />", "label": 'Marketplace'},;
                {"key": 'services', "href": '/services', "icon": "<Settings className="w-4 h-4" />", "label": 'Services'},;
                {"key": 'talent', "href": '/talent', "icon": "<Users className="w-4 h-4" />", "label": 'Talent'},;
                {"key": 'equipment', "href": '/equipment', "icon": "<BarChart3 className="w-4 h-4" />", "label": 'Equipment'},;
            ];
        },;
        {;
            "title": 'Comp',;
            items[;
                { "key": 'about', "href": '/about', "icon": "<Building className="w-4 h-4" />", "label": 'About Us' },;
                {"key": 'careers', "href": '/careers', "icon": "<Briefcase className="w-4 h-4" />", "label": 'Careers'},;
                {"key": 'partners', "href": '/partners', "icon": "<Users className="w-4 h-4" />", "label": 'Partners'},;
                {"key": 'contact', "href": '/contact', "icon": "<Mail className="w-4 h-4" />", "label": 'Contact'},;
            ];
        },;
        {;
            "title": 'Resources',;
            items[;
                { "key": 'blog', "href": '/blog', "icon": "<FileText className="w-4 h-4" />", "label": 'Blog' },;
                {"key": 'community', "href": '/community', "icon": "<Globe className="w-4 h-4" />", "label": 'Community'},;
                {"key": 'green-it', "href": '/green-it', "icon": "<Leaf className="w-4 h-4" />", "label": 'Green IT'},;
                {"key": 'zion-hire-ai', "href": '/zion-hire-ai', "icon": "<Zap className="w-4 h-4" />", "label": 'AI Hiring'},;
            ];
        },;
        {;
            "title": 'Support',;
            items[;
                { "key": 'help', "href": '/help', "icon": "<HelpCircle className="w-4 h-4" />", "label": 'Help Center' },;
                {"key": 'developers', "href": '/developers', "icon": "<Code className="w-4 h-4" />", "label": 'Developer Portal'},;
                {"key": 'api-docs', "href": '/api-docs', "icon": "<Code className="w-4 h-4" />", "label": 'API Docs'},;
                {"key": 'sitemap', "href": '/sitemap', "icon": "<Calendar className="w-4 h-4" />", "label": 'Sitemap'},;
            ];
    ];
    const isActive = ("props": "any) => {;
        if (href === '/') {;
            return location.pathname === '/'"}
        return location.pathname.startsWith(href)};
    return (<aside className="w-64 bg-zion-blue-dark border-r border-zion-blue-light min-h-screen p-4">;
      <div className="mb-8">;
        <Link to="/" className="flex items-center space-x-2">;
          <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">;
            ZION;
          </span>;
        </Link>;
        <p className="text-zion-slate-light text-sm mt-2">;
          Tech & AI Marketplace;
        </p>;
      </div>;
      <nav className="space-y-6">;
        {sidebarSections.map((section) => (<div key={section.title}>;
            <h3 className="text-zion-slate-light text-xs font-semibold uppercase tracking-wider mb-3">;
              {section.title}
            </h3>;
            <ul className="space-y-1">;
              {section.items.map((item) => (<li key={item.key}>;
                  <Link to={item.href} className = {cn("flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",;
  isActive(item.href);
                    ? "bg-zion-purple/20 text-zion-cyan";
                    : "text-zion-slate-light "hover": "bg-zion-purple/10 "hover":text-zion-cyan")"}>;
            <ul className="space-y-1">
              {section.items.map((item) => (<li key={item.key}>
                  <Link to={item.href} className = {cn("flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
  isActive(item.href)
                    ? "bg-zion-purple/20 text-zion-cyan"
                    : "text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan")}>
                    {item.icon}
                    <span>{item.label}</span>;
                  </Link>;
                </li>))}
            </ul>;
          </div>))}
      </nav>;
      <div className="mt-8 pt-6 border-t border-zion-blue-light">;
        <div className="text-zion-slate-light text-xs">;
          <p className="mb-2">Need help?</p>;
          <Link to="/contact" className="text-zion-cyan "hover": "text-zion-purple transition-colors">;
            Contact Support;
          </Link>;
        </div>;
      </div>;
    </aside>)"}
;
export default MainSidebar;
import {Link,useLocation} from &apos;react-router-dom&apos;; import {cn} from &apos;@/lib/utils&apos;; import { Home,ShoppingCart,Users,Settings,FileText,HelpCircle,Code,BarChart3,Briefcase,Leaf,Building,Mail,Calendar,Globe,Zap export function MainSidebar($1) { const location = useLocation(); const sidebarSections = [ { title: &apos;Main&apos;,items[;&apos;;&apos;; { key: &apos;home&apos;,href: &apos;/&apos;,icon: <Home className=&quot;w-4 h-4&quot; />,label: &apos;Home&apos; },{key: &apos;marketplace&apos;,href: &apos;/marketplace&apos;,icon: <ShoppingCart className=&quot;w-4 h-4&quot; />,label: &apos;Marketplace&apos;},{key: &apos;services&apos;,href: &apos;/services&apos;,icon: <Settings className=&quot;w-4 h-4&quot; />,label: &apos;Services&apos;},{key: &apos;talent&apos;,href: &apos;/talent&apos;,icon: <Users className=&quot;w-4 h-4&quot; />,label: &apos;Talent&apos;},{key: &apos;equipment&apos;,href: &apos;/equipment&apos;,icon: <BarChart3 className=&quot;w-4 h-4&quot; />,label: &apos;Equipment&apos;},] },;&apos;; { title: &apos;Comp&apos;,items[;&apos;;&apos;; { key: &apos;about&apos;,href: &apos;/about&apos;,icon: <Building className=&quot;w-4 h-4&quot; />,label: &apos;About Us&apos; },{key: &apos;careers&apos;,href: &apos;/careers&apos;,icon: <Briefcase className=&quot;w-4 h-4&quot; />,label: &apos;Careers&apos;},{key: &apos;partners&apos;,href: &apos;/partners&apos;,icon: <Users className=&quot;w-4 h-4&quot; />,label: &apos;Partners&apos;},{key: &apos;contact&apos;,href: &apos;/contact&apos;,icon: <Mail className=&quot;w-4 h-4&quot; />,label: &apos;Contact&apos;},] },;&apos;; { title: &apos;Resources&apos;,items[;&apos;;&apos;; { key: &apos;blog&apos;,href: &apos;/blog&apos;,icon: <FileText className=&quot;w-4 h-4&quot; />,label: &apos;Blog&apos; },{key: &apos;community&apos;,href: &apos;/community&apos;,icon: <Globe className=&quot;w-4 h-4&quot; />,label: &apos;Community&apos;},{key: &apos;green-it&apos;,href: &apos;/green-it&apos;,icon: <Leaf className=&quot;w-4 h-4&quot; />,label: &apos;Green IT&apos;},{key: &apos;zion-hire-ai&apos;,href: &apos;/zion-hire-ai&apos;,icon: <Zap className=&quot;w-4 h-4&quot; />,label: &apos;AI Hiring&apos;},] },;&apos;; { title: &apos;Support&apos;,items[;&apos;;&apos;; { key: &apos;help&apos;,href: &apos;/help&apos;,icon: <HelpCircle className=&quot;w-4 h-4&quot; />,label: &apos;Help Center&apos; },{key: &apos;developers&apos;,href: &apos;/developers&apos;,icon: <Code className=&quot;w-4 h-4&quot; />,label: &apos;Developer Portal&apos;},{key: &apos;api-docs&apos;,href: &apos;/api-docs&apos;,icon: <Code className=&quot;w-4 h-4&quot; />,label: &apos;API Docs&apos;},{key: &apos;sitemap&apos;,href: &apos;/sitemap&apos;,icon: <Calendar className=&quot;w-4 h-4&quot; />,label: &apos;Sitemap&apos;},] ];&apos;; const isActive = (props) => { if (href === &apos;/&apos;) { return location.pathname === &apos;/&apos;} return location.pathname.startsWith(href)};; return (<aside className=&quot;w-64 bg-zion-blue-dark border-r border-zion-blue-light min-h-screen p-4&quot;> <div className=&quot;mb-8&quot;> <Link to=&quot;/&quot; className=&quot;flex items-center space-x-2&quot;> <span className=&quot;text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent&quot;> ZION </span> </Link> <p className=&quot;text-zion-slate-light text-sm mt-2&quot;> Tech & AI Marketplace </p> </div> <nav className=&quot;space-y-6&quot;> {sidebarSections.map((section) => (<div key={section.title}> <h3 className=&quot;text-zion-slate-light text-xs font-semibold uppercase tracking-wider mb-3&quot;> {section.title} </h3> <ul className=&quot;space-y-1&quot;> {section.items.map((item) => (<li key={item.key}> <Link to={item.href} className = {cn(&quot;flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors&quot;,isActive(item.href) ? &quot;bg-zion-purple/20 text-zion-cyan&quot; : &quot;text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan&quot;)}> {item.icon} <span>{item.label}</span> </Link> </li>))} </ul> </div>))} </nav> <div className=&quot;mt-8 pt-6 border-t border-zion-blue-light&quot;> <div className=&quot;text-zion-slate-light text-xs&quot;> <p className=&quot;mb-2&quot;>Need help?</p> <Link to=&quot;/contact&quot; className=&quot;text-zion-cyan hover:text-zion-purple transition-colors&quot;> Contact Support </Link> </div> </div> </aside>)} export default MainSidebar;&apos;;&apos;;
const {Link,useLocation} from "react-router-dom"; import {cn} from "@/lib/utils"; import { Home,ShoppingCart,Users,Settings,FileText,HelpCircle,Code,BarChart3,Briefcase,Leaf,Building,Mail,Calendar,Globe,Zap export function MainSidebar($1) { const location = useLocation(); const sidebarSections = [ { title: "Main",items[;";"; { key: "home",href: "/",icon: <Home className="w-4 h-4" />,label: "Home" },{key: "marketplace",href: "/marketplace",icon: <ShoppingCart className="w-4 h-4" />,label: "Marketplace"},{key: "services",href: "/services",icon: <Settings className="w-4 h-4" />,label: "Services"},{key: "talent",href: "/talent",icon: <Users className="w-4 h-4" />,label: "Talent"},{key: "equipment",href: "/equipment",icon: <BarChart3 className="w-4 h-4" />,label: "Equipment"},] },;"; { title: "Comp",items[;";"; { key: "about",href: "/about",icon: <Building className="w-4 h-4" />,label: "About Us" },{key: "careers",href: "/careers",icon: <Briefcase className="w-4 h-4" />,label: "Careers"},{key: "partners",href: "/partners",icon: <Users className="w-4 h-4" />,label: "Partners"},{key: "contact",href: "/contact",icon: <Mail className="w-4 h-4" />,label: "Contact"},] },;"; { title: "Resources",items[;";"; { key: "blog",href: "/blog",icon: <FileText className="w-4 h-4" />,label: "Blog" },{key: "community",href: "/community",icon: <Globe className="w-4 h-4" />,label: "Community"},{key: "green-it",href: "/green-it",icon: <Leaf className="w-4 h-4" />,label: "Green IT"},{key: "zion-hire-ai",href: "/zion-hire-ai",icon: <Zap className="w-4 h-4" />,label: "AI Hiring"},] },;"; { title: "Support",items[;";"; { key: "help",href: "/help",icon: <HelpCircle className="w-4 h-4" />,label: "Help Center" },{key: "developers",href: "/developers",icon: <Code className="w-4 h-4" />,label: "Developer Portal"},{key: "api-docs",href: "/api-docs",icon: <Code className="w-4 h-4" />,label: "API Docs"},{key: "sitemap",href: "/sitemap",icon: <Calendar className="w-4 h-4" />,label: "Sitemap"},] ];"; const isActive = (props) => { if (href === "/") { return location.pathname === "/"} return location.pathname.startsWith(href)}; return (<aside className="w-64 bg-zion-blue-dark border-r border-zion-blue-light min-h-screen p-4"> <div className="mb-8"> <Link to="/" className="flex items-center space-x-2"> <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent"> ZION </span> </Link> <p className="text-zion-slate-light text-sm mt-2"> Tech & AI Marketplace </p> </div> <nav className="space-y-6"> {sidebarSections.map((section) => (<div key={section.title}> <h3 className="text-zion-slate-light text-xs font-semibold uppercase tracking-wider mb-3"> {section.title} </h3> <ul className="space-y-1"> {section.items.map((item) => (<li key={item.key}> <Link to={item.href} className = {cn("flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",isActive(item.href) ? "bg-zion-purple/20 text-zion-cyan" : "text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan")}> {item.icon} <span>{item.label}</span> </Link> </li>))} </ul> </div>))} </nav> <div className="mt-8 pt-6 border-t border-zion-blue-light"> <div className="text-zion-slate-light text-xs"> <p className="mb-2">Need help?</p> <Link to="/contact" className="text-zion-cyan hover:text-zion-purple transition-colors"> Contact Support </Link> </div> </div> </aside>)} export default MainSidebar;";";'"'"
import {Link,useLocation} from 'react-router-dom'; import {cn} from '@/lib/utils'; import { Home,ShoppingCart,Users,Settings,FileText,HelpCircle,Code,BarChart3,Briefcase,Leaf,Building,Mail,Calendar,Globe,Zap export function MainSidebar(_) { const location = useLocation(); const sidebarSections = [ { title: 'Main,items[;';'; { key: 'home,href: '/,icon: <Home className="w-4 h-4" />,label: 'Home' },{key: 'marketplace,href: '/marketplace,icon: <ShoppingCart className="w-4 h-4" />,label: 'Marketplace'},{key: 'services,href: '/services,icon: <Settings className="w-4 h-4" />,label: 'Services'},{key: 'talent,href: '/talent,icon: <Users className="w-4 h-4" />,label: 'Talent'},{key: 'equipment,href: '/equipment,icon: <BarChart3 className="w-4 h-4" />,label: 'Equipment'},] },;'; { title: 'Comp,items[;';'; { key: 'about,href: '/about,icon: <Building className="w-4 h-4" />,label: 'About Us' },{key: 'careers,href: '/careers,icon: <Briefcase className="w-4 h-4" />,label: 'Careers'},{key: 'partners,href: '/partners,icon: <Users className="w-4 h-4" />,label: 'Partners'},{key: 'contact,href: '/contact,icon: <Mail className="w-4 h-4" />,label: 'Contact'},] },;'; { title: 'Resources,items[;';'; { key: 'blog,href: '/blog,icon: <FileText className="w-4 h-4" />,label: 'Blog' },{key: 'community,href: '/community,icon: <Globe className="w-4 h-4" />,label: 'Community'},{key: 'green-it,href: '/green-it,icon: <Leaf className="w-4 h-4" />,label: 'Green IT'},{key: 'zion-hire-ai,href: '/zion-hire-ai,icon: <Zap className="w-4 h-4" />,label: 'AI Hiring'},] },;'; { title: 'Support,items[;';'; { key: 'help,href: '/help,icon: <HelpCircle className="w-4 h-4" />,label: 'Help Center' },{key: 'developers,href: '/developers,icon: <Code className="w-4 h-4" />,label: 'Developer Portal'},{key: 'api-docs,href: '/api-docs,icon: <Code className="w-4 h-4" />,label: 'API Docs'},{key: 'sitemap,href: '/sitemap,icon: <Calendar className="w-4 h-4" />,label: 'Sitemap'},] ];'; const isActive = (props) => { if (href === '/') { return location.pathname === '/'} return location.pathname.startsWith(href)};; return (<aside className="w-64 bg-zion-blue-dark border-r border-zion-blue-light min-h-screen p-4"> <div className="mb-8"> <Link to="/" className="flex items-center space-x-2"> <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent"> ZION </span> </Link> <p className="text-zion-slate-light text-sm mt-2"> Tech & AI Marketplace </p> </div> <nav className="space-y-6"> {sidebarSections.map((section) => (<div key={section.title}> <h3 className="text-zion-slate-light text-xs font-semibold uppercase tracking-wider mb-3"> {section.title} </h3> <ul className="space-y-1"> {section.items.map((item) => (<li key={item.key}> <Link to={item.href} className = {cn("flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",isActive(item.href) ? "bg-zion-purple/20 text-zion-cyan" : "text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan")}> {item.icon} <span>{item.label}</span> </Link> </li>))} </ul> </div>))} </nav> <div className="mt-8 pt-6 border-t border-zion-blue-light"> <div className="text-zion-slate-light text-xs"> <p className="mb-2">Need help?</p> <Link to="/contact" className="text-zion-cyan hover:text-zion-purple transition-colors"> Contact Support </Link> </div> </div> </aside>)} export default MainSidebar;';';