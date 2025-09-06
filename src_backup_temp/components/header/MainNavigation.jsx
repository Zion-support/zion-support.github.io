import React, {useState} from 'react';';';
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Zap, Shield, Cloud, Brain, Users, Mail, ChevronDown } from 'lucide-react';
export default function MainNavigation(props) {
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Zap, Shield, Cloud, Brain, Users, Mail, ChevronDown } from 'lucide-react';
;
export default function MainNavigation(props) {;
  const [isOpen, setIsOpen] = useState(false);
;
  const navigation = [;
    { "name": 'Home', "href": '/', "icon": "Home "}
    { "name": 'Services', "href": '/services', "icon": "Zap "}
    { "name": 'AI Solutions', "href": '/ai-solutions', "icon": "Brain "}
    { "name": 'Cybersecurity', "href": '/services/cybersecurity', "icon": "Shield "}
    { "name": 'Cloud Services', "href": '/services/cloud-devops', "icon": "Cloud "}
    { "name": 'About', "href": '/about', "icon": "Users "}
    { "name": 'Contact', "href": '/contact', "icon": "Mail "}
  ];
  const handleDropdownToggle = (props: any) => {setActiveDropdown(activeDropdown === index ? null : index)};"
    {"""
      name: "Home", """
      href: "/","""
      current: location.pathname = == "/"} {"""
      name: "Services", """
      href: "/services","""
      current: location.pathname.startsWith("/services"), children: [""",
        { name: "AI Services", href: "/services/ai" }, """
        {name: "Cloud Solutions", href: "/services/cloud"}, """
        {name: "Cybersecurity", href: "/services/cybersecurity"}, """
        {name: "IT Infrastructure", href: "/services/infrastructure"}, """
        {name: "Digital Transformation", href: "/services/transformation"}, ""
        {name: "Consulting", href: "/services/consulting"}"
      ]} {"""
      name: "Solutions", """
      href: "/solutions","""
      current: location.pathname.startsWith("/solutions"), children: [""",
        { name: "Industry Solutions", href: "/solutions/industry" }, """
        {name: "Manufacturing", href: "/solutions/manufacturing"}, """
        {name: "Financial Services", href: "/solutions/financial"}, """
        {name: "Healthcare", href: "/solutions/healthcare"}, ""
        {name: "Retail", href: "/solutions/retail"}""
      name: "About", """
      href: "/about","""
      current: location.pathname.startsWith("/about"), children: [""",
        {name: "Company", href: "/about"}, """
        {name: "Team", href: "/about/team"}, """
        {name: "Careers", href: "/careers"}, ""
        {name: "Partners", href: "/partners"}""
      name: "Resources", """
  {"
      name: "Home,"
      href: "/,""
      current: location.pathname === "/"} {"
      name: "Services,"
      href: "/services,"
      children: ["",
        { name: "AI Services", href: "/services/ai" },""
        {name: "Cloud Solutions", href: "/services/cloud"},""
        {name: "Cybersecurity", href: "/services/cybersecurity"},""
        {name: "IT Infrastructure", href: "/services/infrastructure"},""
        {name: "Digital Transformation", href: "/services/transformation"},""
      ]} {"
      name: "Solutions,"
      href: "/solutions,""
        { name: "Industry Solutions", href: "/solutions/industry" },""
        {name: "Manufacturing", href: "/solutions/manufacturing"},""
        {name: "Financial Services", href: "/solutions/financial"},""
        {name: "Healthcare", href: "/solutions/healthcare"},""
      name: "About,"
      href: "/about,"
        {name: "Company", href: "/about"},""
        {name: "Team", href: "/about/team"},""
        {name: "Careers", href: "/careers"},""
      name: "Resources,"
      current: false, children: [""",
        {name: "Case Studies", href: "/case-studies"}, """
        {name: "Research & Development", href: "/research-development"}, """
        {name: "Events", href: "/events"}, """
        {name: "News", href: "/news"}, """
        {name: "Blog", href: "/blog"}, """
        {name: "White Papers", href: "/white-papers"}, ""
        {name: "Webinars", href: "/webinars"}""
      name: "Support", """
      href: "/support","""
      current: location.pathname.startsWith("/support"), children: [""",
        {name: "Help Center", href: "/support"}, """
        {name: "Documentation", href: "/docs"}, """
        {name: "Training", href: "/training"}, ""
      name: "Support,"
      href: "/support,""
        {name: "Help Center", href: "/support"},""
        {name: "Documentation", href: "/docs"},""
        {name: "Training", href: "/training"},""
        {name: "Contact", href: "/contact"}
      ]}
"
  return ("
    <nav className="flex space-x-8">"
      {navigationItems.map((item, index) => (""
        <div key="{item.name}" className="relative">"
          {item.children ? (""
            <div className="relative">"
              <button onClick="{()" => handleDropdownToggle(index)}""
                className="{"flex" items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  item.current""
                    ? "text-zion-cyan bg-zion-purple/10"""
                    : "text-zion-slate-light hover:text-white hove,"
    r: bg-zion-purple/10""}"}
              >
                <span>{item.name}</span>
                <ChevronDown ""
                  className="{"h-4" w-4 transition-transform ${""
                    activeDropdown === index ? "rotate-180" : """   />
              </button>
              {/* comment */}
              {activeDropdown === index && (""
                <div className=""absolute" top-full left-0 mt-2 w-64 bg-zion-blue-dark/95 backdrop-blur-xl border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50">""
                  <div className="py-2">
                    {item.children.map((child) => ("
                      <Link key="{child.name}""
                        to={child.href}""
                        className="block px-4 py-3 text-sm text-zion-slate-light hover:text-white hove,"
    r: bg-zion-purple/10 transition-colors"">
                        onClick="{()" => setActiveDropdown(null)}
  const handleDropdownToggle = (props: any) => {setActiveDropdown(activeDropdown === index ? null : index)}
"
  return ("""
      {navigationItems.map((item, index) => ("""
          {item.children ? ("""
              <button onClick = "{()" => handleDropdownToggle(index)}"
              <button onClick="{()" =" > handleDropdownToggle(index)}""
                  item.current"""
                    ? "text-zion-cyan bg-zion-purple/10""
                    : "text-zion-slate-light hover: text-white hover:bg-zion-purple/10",
                <ChevronDown className="{"h-4" w-4 transition-transform ${ activeDropdown === index ? "rotate-180" : "" }"}        />
              {/* comment */} {activeDropdown === index && ("
                <div className=""absolute" top-full left-0 mt-2 w-64 bg-zion-blue-dark/95 backdrop-blur-xl border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50">"
                      <Link key="{child.name}" to="{child.href}" className="{"block" px-4 py-3 text-sm text-zion-slate-light hover: text-white hover:bg-zion-purple/10 transition-colors" onClick="{()" => setActiveDropdown(null)}"
                    : "text-zion-slate-light hover:text-white hover:bg-zion-purple/10", "
                <span>{item.name}</span>""
                <ChevronDown className="{"h-4" w-4 transition-transform ${""
                    activeDropdown === index ? "rotate-180" : "",""
                /" >""
                <ChevronDown className="{"h-4" w-4 transition-transform ${"
                    activeDropdown === index ? "rotate-180" :  ,""
                /" >
              "
              {activeDropdown === index && ("""
                <div className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark/95 backdrop-blur-xl border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50">"""
                      <Link key="{child.name}""
                        to="{child.href}""}""
                        className="block px-4 py-3 text-sm text-zion-slate-light hover: text-white hover:bg-zion-purple/10 transition-colors"">
                        onClick="{()" =" > setActiveDropdown(null)}"
                        {child.name}
                      </Link>
                    ))}
                      </div>
  );
}
          ) : ("
              to="{item.href}"""
              className="{"px-3" py-2 rounded-md text-sm font-medium transition-colors ${"
            <Link to="{item.href}" className="{"px-3" py-2 rounded-md text-sm font-medium transition-colors ${ item.current ? "text-zion-cyan bg-zion-purple/10" : "text-zion-slate-light hover: text-white hover:bg-zion-purple/10" }"} >"
            <Link to="{item.href}";""
}"}" >"
              {item.name}
    </nav>"
  )} ("")"}""
""""
"`"
"
export default Component
</ChevronDown>
</div>
</button>
</div>
</ChevronDown>
</div>';
</div>;';;';
  return (
    <nav className="hidden md:flex space-x-8">
      {navigation.map((item) => (
        <Link
          key={item.name}
;
  return (;
    <nav className="hidden "md": "flex space-x-8">;
      {navigation.map((item) => (;
        <Link;
          key={item.name"}
          to={item.href}
          className="flex items-center text-gray-600 "hover": "text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors";
        >;
          <item.icon className="w-4 h-4 mr-1" />;
          {item.name"}
        </Link>;
      ))}
    </nav>;
  );
}
 import React,{ useState } from 'react'; import { Link,useLocation } from 'react-router-dom'; import { ChevronDown,Home,Briefcase,Target,Building,FileText,HelpCircle } from 'lucide-react';  import React,{useState} from 'react'; import {Link} from 'react-router-dom';  export default function MainNavigation() { const location = useLocation(); const [activeDropdown,setActiveDropdown] = useState(null); const navigationItems = [ { name: 'Home',href: '/',current: location.pathname === '/',icon: Home },{ name: 'Services',href: '/services',current: location.pathname.startsWith('/services'),children: [ { name: 'AI Services',href: '/ai-services' },{ name: 'IT Services',href: '/it-services' },{ name: 'Micro SaaS',href: '/micro-saas' },{ name: 'Cloud Solutions',href: '/services/cloud' },{ name: 'Cybersecurity',href: '/services/cybersecurity' },{ name: 'IT Infrastructure',href: '/services/infrastructure' } ] },{ name: 'Solutions',href: '/solutions',current: location.pathname.startsWith('/solutions'),children: [ { name: 'Industry Solutions',href: '/solutions/industry' },{ name: 'Manufacturing',href: '/solutions/manufacturing' },{ name: 'Financial Services',href: '/solutions/financial' },{ name: 'Healthcare',href: '/solutions/healthcare' },{ name: 'Retail',href: '/solutions/retail' } ] },{ name: 'About',href: '/about',current: location.pathname.startsWith('/about'),children: [ { name: 'Company',href: '/about' },{ name: 'Team',href: '/about/team' },{ name: 'Careers',href: '/careers' },{ name: 'Partners',href: '/partners' } ] },{ name: 'Resources',href: '/resources',current: false,children: [ { name: 'Case Studies',href: '/case-studies' },{ name: 'Research & Development',href: '/research-development' },{ name: 'Events',href: '/events' },{ name: 'News',href: '/news' },{ name: 'Blog',href: '/blog' },{ name: 'White Papers',href: '/white-papers' },{ name: 'Webinars',href: '/webinars' } ] },{ name: 'Support',href: '/support',current: location.pathname.startsWith('/support'),children: [ { name: 'Help Center',href: '/support' },{ name: 'Documentation',href: '/docs' },{ name: 'Training',href: '/training' },{ name: 'Contact',href: '/contact' } ] }; ];  const handleDropdownToggle = (index) => { setActiveDropdown(activeDropdown === index ? null : index)}; return ( <nav className="flex space-x-8"> {navigationItems.map((item,index) => ( <div key={item.name} className="relative"> {item.children ? ( <div className="relative"> <button onClick={() => handleDropdownToggle(index)} className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${ item.current ? 'text-zion-cyan bg-zion-purple/10' : 'text-zion-slate-light hover:text-white hover:bg-zion-purple/10' }`} > <span>{item.name}</span> <ChevronDown className={`h-4 w-4 transition-transform ${ activeDropdown === index ? 'rotate-180' : " }`} /> </button> {activeDropdown === index && ( <div className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark/95 backdrop-blur-xl border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"> <div className="py-2"> {item.children.map((child) => ( <Link key={child.name} to={child.href} className="block px-4 py-3 text-sm text-zion-slate-light hover:text-white hover:bg-zion-purple/10 transition-colors" onClick={() => setActiveDropdown(null)} > {child.name} </Link> ))} </div> </div> )} </div> ) : ( <Link to={item.href} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${ item.current ? 'text-zion-cyan bg-zion-purple/10' : 'text-zion-slate-light hover:text-white hover:bg-zion-purple/10' }`} > {item.name} </Link> )} </div> ))} </nav>  const handleDropdownToggle = (props) => {setActiveDropdown(activeDropdown === index ? null : index)};;" {" name: "Home"," href: "/"," current: location.pathname = == "/"} {" name: "Services"," href: "/services"," current: location.pathname.startsWith("/services"),children: [",{ name: "AI Services",href: "/services/ai" }," {name: "Cloud Solutions",href: "/services/cloud"}," {name: "Cybersecurity",href: "/services/cybersecurity"}," {name: "IT Infrastructure",href: "/services/infrastructure"}," {name: "Digital Transformation",href: "/services/transformation"}," {name: "Consulting",href: "/services/consulting"}" ]} {" name: "Solutions"," href: "/solutions"," current: location.pathname.startsWith("/solutions"),children: [",{ name: "Industry Solutions",href: "/solutions/industry" }," {name: "Manufacturing",href: "/solutions/manufacturing"}," {name: "Financial Services",href: "/solutions/financial"}," {name: "Healthcare",href: "/solutions/healthcare"}," {name: "Retail",href: "/solutions/retail"}" name: "About"," href: "/about"," current: location.pathname.startsWith("/about"),children: [",{name: "Company",href: "/about"}," {name: "Team",href: "/about/team"}," {name: "Careers",href: "/careers"}," {name: "Partners",href: "/partners"}" name: "Resources"," {" name: "Home," href: "/," current: location.pathname === "/"} {" name: "Services," href: "/services," children: [",{ name: "AI Services",href: "/services/ai" }," {name: "Cloud Solutions",href: "/services/cloud"}," {name: "Cybersecurity",href: "/services/cybersecurity"}," {name: "IT Infrastructure",href: "/services/infrastructure"}," {name: "Digital Transformation",href: "/services/transformation"}," ]} {" name: "Solutions," href: "/solutions," { name: "Industry Solutions",href: "/solutions/industry" }," {name: "Manufacturing",href: "/solutions/manufacturing"}," {name: "Financial Services",href: "/solutions/financial"}," {name: "Healthcare",href: "/solutions/healthcare"}," name: "About," href: "/about," {name: "Company",href: "/about"}," {name: "Team",href: "/about/team"}," {name: "Careers",href: "/careers"}," name: "Resources," current: false,children: [",{name: "Case Studies",href: "/case-studies"}," {name: "Research & Development",href: "/research-development"}," {name: "Events",href: "/events"}," {name: "News",href: "/news"}," {name: "Blog",href: "/blog"}," {name: "White Papers",href: "/white-papers"}," {name: "Webinars",href: "/webinars"}" name: "Support"," href: "/support"," current: location.pathname.startsWith("/support"),children: [",{name: "Help Center",href: "/support"}," {name: "Documentation",href: "/docs"}," {name: "Training",href: "/training"}," name: "Support," href: "/support," {name: "Help Center",href: "/support"}," {name: "Documentation",href: "/docs"}," {name: "Training",href: "/training"}," {name: "Contact",href: "/contact"} ]} " return (" <nav className="flex space-x-8">" {navigationItems.map((item,index) => (" <div key="{item.name}" className="relative">" {item.children ? (" <div className="relative">" <button onClick="{()" => handleDropdownToggle(index)}" className="{"flex" items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${ item.current" ? "text-zion-cyan bg-zion-purple/10" : "text-zion-slate-light hover:text-white hove," r: bg-zion-purple/10"}"} > <span>{item.name}</span> <ChevronDown " className="{"h-4" w-4 transition-transform ${" activeDropdown === index ? "rotate-180" : " /> </button> {} {activeDropdown === index && (" <div className="absolute" top-full left-0 mt-2 w-64 bg-zion-blue-dark/95 backdrop-blur-xl border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50">" <div className="py-2"> {item.children.map((child) => (" <Link key="{child.name}" to={child.href}" className="block px-4 py-3 text-sm text-zion-slate-light hover:text-white hove," r: bg-zion-purple/10 transition-colors"> onClick="{()" => setActiveDropdown(null)} const handleDropdownToggle = (props) => {setActiveDropdown(activeDropdown === index ? null : index)} " return (" {navigationItems.map((item,index) => (" {item.children ? (" <button onClick = "{()" => handleDropdownToggle(index)}" <button onClick="{()" =" > handleDropdownToggle(index)}" item.current" ? "text-zion-cyan bg-zion-purple/10" : "text-zion-slate-light hover: text-white hover:bg-zion-purple/10",<ChevronDown className="{"h-4" w-4 transition-transform ${ activeDropdown === index ? "rotate-180" : " }"} /> {} {activeDropdown === index && (" <div className="absolute" top-full left-0 mt-2 w-64 bg-zion-blue-dark/95 backdrop-blur-xl border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50">" <Link key="{child.name}" to="{child.href}" className="{"block" px-4 py-3 text-sm text-zion-slate-light hover: text-white hover:bg-zion-purple/10 transition-colors" onClick="{()" => setActiveDropdown(null)}" : "text-zion-slate-light hover:text-white hover:bg-zion-purple/10"," <span>{item.name}</span>" <ChevronDown className="{"h-4" w-4 transition-transform ${" activeDropdown === index ? "rotate-180" : "," /" >" <ChevronDown className="{"h-4" w-4 transition-transform ${" activeDropdown === index ? "rotate-180" : ," /" > " {activeDropdown === index && (" <div className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark/95 backdrop-blur-xl border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50">" <Link key="{child.name}" to="{child.href}"}" className="block px-4 py-3 text-sm text-zion-slate-light hover: text-white hover:bg-zion-purple/10 transition-colors"> onClick="{()" =" > setActiveDropdown(null)}" {child.name} </Link> ))}; </div>  )} ) : (" to="{item.href}" className="{"px-3" py-2 rounded-md text-sm font-medium transition-colors ${" <Link to="{item.href}" className="{"px-3" py-2 rounded-md text-sm font-medium transition-colors ${ item.current ? "text-zion-cyan bg-zion-purple/10" : "text-zion-slate-light hover: text-white hover:bg-zion-purple/10" }"} >" <Link to="{item.href}";" }"}" >" {item.name} </nav>" )} (")"}" " "`" " export default Component </ChevronDown> </div> </button> </div> </ChevronDown> </div> </div>;';';