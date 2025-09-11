import React, {useState} from 'react',;',';';';';
    ';';';';';';
import {Link, useLocation} from 'react-router-dom',;';';';';
    ';';';';';
import {ChevronDown, ;';';';';';';
import React, { useState } from 'react';""',';';';';
    ';';';';';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Home, Zap, Shield, Cloud, Brain, Settings, Users, BarChart3, Mail, Phone, MapPin } from 'lucide-react';
;
export function Sidebar() {;
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
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
;
  return (;
    <div className="hidden "lg": "flex "lg":flex-shrink-0">;
      <div className="flex flex-col w-80">;
        <div className="flex flex-col flex-grow bg-white border-r border-gray-200 pt-5 pb-4 overflow-y-auto">;
          <div className="flex items-center flex-shrink-0 px-4">;
            <h2 className="text-lg font-semibold text-gray-900">Navigation</h2>;
          </div>;
          <div className="mt-5 flex-grow flex flex-col">;
            <nav className="flex-1 px-2 space-y-1">;
              {navigation.map((item) => {;
                const isActive = location.pathname === item.href;
                return (;
                  <Link;
                    key={item.name"}
                    to={item.href}
                    className={`${;
                      isActive;
                        ? 'bg-blue-50 border-blue-500 text-blue-700';
                        : 'border-transparent text-gray-600 "hover": "bg-gray-50 "hover":text-gray-900';
                    "} group flex items-center px-2 py-2 text-sm font-medium rounded-md border-l-4`}
                  >;
                    <item.icon;
                      className={`${;
                        isActive ? 'text-blue-500' : 'text-gray-400 group-"hover": "text-gray-500';
                      "} mr-3 flex-shrink-0 h-6 w-6`}
                    />;
                    {item.name}
                  </Link>;
                );
              })}
            </nav>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
}
import React, {useState} from 'react',;',';';
    ';';';';
import {Link, useLocation} from 'react-router-dom',;';';
    ';';';
import {ChevronDown, ;';';';';
import React, { useState } from 'react';""',';';
    ';';';
import {Link, useLocation} from 'react-router-dom';
import {ChevronDown, ChevronRight,
  Home, Zap,
  Brain, Shield,
  Cloud, Cpu,
  Users, ShoppingCart,
  BookOpen, MessageCircle,
  HelpCircle, DollarSign,
  Star, Target,
  TrendingUp, Award,
  Settings, Globe,
  Rocket, Heart,
  Lock, Database,
  Network, Palette,
  Video, PenTool,
  Atom, Server,
  Smartphone, BarChart3,
  Search, FileText,
  Calendar, Briefcase,;
  Info, Phone,;
  Mail, MapPin,;';
  Building, TestTube,;';';
  Newspaper, X,;';';';
  Code;", ";',';';
    ';';';} from 'lucide-react';';';
export function Sidebar(props: any) {';';';
  const location = useLocation();""',';';
    ';';';
import React, { useState } from 'react',;',';';
    ';';';';
import Link from 'next/link',;';';
    ';';';';
import {useRouter} from 'next/router';
import {ChevronDown,
  ChevronRight,
  Home,
  Zap,
  Brain,
  Shield,
  Cloud,
  Cpu,
  Users,
  ShoppingCart,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Star,
  Target,
  TrendingUp,
  Award,
  Settings,
  Globe,
  Rocket,
  Heart,
  Lock,
  Database,
  Network,
  Palette,
  Video,
  PenTool,
  Atom,
  Server,
  Smartphone,
  BarChart3,
  Search,
  FileText,
  Calendar,
  Briefcase,
  Info,
  Phone,
  Mail,
  MapPin,
  Building,;';
  TestTube,;';';
  Newspaper,;';';';
  X,;',';';
    ';';';
  Code';';';
  Newspaper,;';';';
  X,;',';';
    ';';';
  Code} from 'lucide-react';';
export function Sidebar(props: any) {const location = useLocation();';';
export function Sidebar(props: any) {';';';
  const router = useRouter();',';';
    ';';';
  const [expandedSections, setExpandedSections] = useState(['services', 'solutions']);
  const toggleSection = (props: any) => {
    setExpandedSections(prev =>
      prev.includes(sectionName);
        ? prev.filter(s => s !== sectionName);
        : [...prev, sectionName]';
    );};';';
  const navigationSections = [';';';
    {""',';';
    ';';';
      title: 'Main', items: [""',';';
    ';';';
        { name: 'Home', href: '/', icon: Home },""',';';
    ';';';
        {name: 'About', href: '/about', icon: Building}, ""',';';
    ';';';
        {name: 'Services', href: '/services', icon: Briefcase},""',';';
    ';';';
        {name: 'Solutions', href: '/solutions', icon: Target}, ""',';';
    ';';';
        {name: 'AI Solutions', href: '/ai-solutions', icon: Brain},""',';';
    ';';';
        {name: 'Case Studies', href: '/case-studies', icon: FileText}, ""',';';
    ';';';
        {name: 'Research', href: '/research-development', icon: TestTube},""',';';
    ';';';
        {name: 'Events', href: '/events', icon: Video}, ""',';';
    ';';';
        {name: 'News', href: '/news', icon: Newspaper},""',';';
    ';';';
        {name: 'Contact', href: '/contact', icon: Mail}, ""',';';
    ';';';
        {name: 'Blog', href: '/blog', icon: FileText}';';
      ]},';';';
    {""',';';
    ';';';
      title: 'Core Services', items: [""',';';
    ';';';
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure & Automation' }, ""',';';
    ';';';
        {name: 'Digital Twin', href: '/services/digital-twin', icon: Globe, description: 'Simulation & Monitoring'}, ""',';';
    ';';';
        {name: 'AI & Machine Learning', href: '/services/ai-ml', icon: Brain, description: 'Intelligent Solutions'}, ""',';';
    ';';';
        {name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Protection & Compliance'}, ""',';';
    ';';';
        {name: 'IT Infrastructure', href: '/services/infrastructure', icon: Server, description: 'Hardware & Networks'}, ""',';';
    ';';';
        {name: 'Digital Transformation', href: '/services/transformation', icon: Rocket, description: 'Business Evolution'}';';
      ]},';';';
    {""',';';
    ';';';
      title: 'Industry Solutions', items: [""',';';
    ';';';
        { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Cpu, description: 'Smart Factory Solutions' }, ""',';';
    ';';';
        {name: 'Financial Services', href: '/solutions/financial', icon: DollarSign, description: 'FinTech & Banking'}, ""',';';
    ';';';
        {name: 'Healthcare', href: '/solutions/healthcare', icon: Heart, description: 'Digital Health'}, ""',';';
    ';';';
        {name: 'Retail', href: '/solutions/retail', icon: ShoppingCart, description: 'E-commerce & Omnichannel'}, ""',';';
    ';';';
        {name: 'Education', href: '/solutions/education', icon: BookOpen, description: 'EdTech & Learning'}, ""',';';
    ';';';
        {name: 'Energy', href: '/solutions/energy', icon: Zap, description: 'Renewable & Smart Grid'}';';
      ]},';';';
    {""',';';
    ';';';
      title: 'Resources', items: [""',';';
    ';';';
        { name: 'White Papers', href: '/white-papers', icon: FileText, description: 'Industry Insights' }, ""',';';
    ';';';
        {name: 'Webinars', href: '/webinars', icon: Video, description: 'Expert Knowledge'}, ""',';';
    ';';';
        {name: 'Training', href: '/training', icon: Award, description: 'Skill Development'}, ""',';';
    ';';';
        {name: 'Documentation', href: '/docs', icon: BookOpen, description: 'Technical Guides'}, ""',';';
    ';';';
        {name: 'API Reference', href: '/api', icon: Code, description: 'Developer Resources'}, ""',';';
    ';';';
        {name: 'Status Page', href: '/status', icon: BarChart3, description: 'System Health'}';';
      ]},';';';
    {""',';';
    ';';';
      title: 'Support', items: [""',';';
    ';';';
        { name: 'Help Center', href: '/support', icon: HelpCircle, description: 'Self-Service Support' }, ""',';';
    ';';';
        {name: 'Contact Us', href: '/contact', icon: MessageCircle, description: 'Get in Touch'}, ""',';';
    ';';';
        {name: 'Request Quote', href: '/request-quote', icon: DollarSign, description: 'Custom Pricing'}, ""',';';
    ';';';
        {name: 'Partnership', href: '/partners', icon: Users, description: 'Become a Partner'}, ""',';';
    ';';';
        {name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join Our Team'}';
      ]}';';
  ]';';';
  const isActive = (props: any) => {""',';';
    ';';';
    if (href === '/') {""',';';
    ';';';
      return location.pathname === '/';}
    return location.pathname.startsWith(href);};';
    );';';
  };';';';
  const navigationSections = [',';';
    ';';';
    {'';';';';
      title: 'Main',',';';
    ';';';
      items: ['';';';
        { nam,',';';
    ';';';
    e: 'Home', href: '/', icon: Home },',';';
    ';';';
  const navigationSections = [{title: 'Main',';';';
      items: [',';';
    ';';';
        { name: 'Home', href: '/', icon: Home },',';';
    ';';';
        {name: 'About', href: '/about', icon: Building},',';';
    ';';';
        {name: 'Services', href: '/services', icon: Briefcase},',';';
    ';';';
        {name: 'Solutions', href: '/solutions', icon: Target},',';';
    ';';';
        {name: 'AI Solutions', href: '/ai-solutions', icon: Brain},',';';
    ';';';
        {name: 'Case Studies', href: '/case-studies', icon: FileText},',';';
    ';';';
        {name: 'Research', href: '/research-development', icon: TestTube},',';';
    ';';';
        {name: 'Events', href: '/events', icon: Video},',';';
    ';';';
        {name: 'News', href: '/news', icon: Newspaper},',';';
    ';';';
        {name: 'Contact', href: '/contact', icon: Mail},',';';
    ';';';
        {name: 'Blog', href: '/blog', icon: FileText}';';
      ]';';';
},',';';
    ';';';
    {title: 'Core Services',',';';
    ';';';
      items: [{ name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure & Automation' },',';';
    ';';';
        {name: 'Digital Twin', href: '/services/digital-twin', icon: Globe, description: 'Simulation & Monitoring'},',';';
    ';';';
        {name: 'AI & Machine Learning', href: '/services/ai-ml', icon: Brain, description: 'Intelligent Solutions'},',';';
    ';';';
        {name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Protection & Compliance'},',';';
    ';';';
        {name: 'IT Infrastructure', href: '/services/infrastructure', icon: Server, description: 'Hardware & Networks'},',';';
    ';';';
        {name: 'Digital Transformation', href: '/services/transformation', icon: Rocket, description: 'Business Evolution'}';';
      ]';';';
},',';';
    ';';';
    {title: 'Industry Solutions',',';';
    ';';';
      items: [{ name: 'Manufacturing', href: '/solutions/manufacturing', icon: Cpu, description: 'Smart Factory Solutions' },',';';
    ';';';
        {name: 'Financial Services', href: '/solutions/financial', icon: DollarSign, description: 'FinTech & Banking'},',';';
    ';';';
        {name: 'Healthcare', href: '/solutions/healthcare', icon: Heart, description: 'Digital Health'},',';';
    ';';';
        {name: 'Retail', href: '/solutions/retail', icon: ShoppingCart, description: 'E-commerce & Omnichannel'},',';';
    ';';';
        {name: 'Education', href: '/solutions/education', icon: BookOpen, description: 'EdTech & Learning'},',';';
    ';';';
        {name: 'Energy', href: '/solutions/energy', icon: Zap, description: 'Renewable & Smart Grid'}';';
      ]';';';
},',';';
    ';';';
    {title: 'Resources',',';';
    ';';';
      items: [{ name: 'White Papers', href: '/white-papers', icon: FileText, description: 'Industry Insights' },',';';
    ';';';
        {name: 'Webinars', href: '/webinars', icon: Video, description: 'Expert Knowledge'},',';';
    ';';';
        {name: 'Training', href: '/training', icon: Award, description: 'Skill Development'},',';';
    ';';';
        {name: 'Documentation', href: '/docs', icon: BookOpen, description: 'Technical Guides'},',';';
    ';';';
        {name: 'API Reference', href: '/api', icon: Code, description: 'Developer Resources'},',';';
    ';';';
        {name: 'Status Page', href: '/status', icon: BarChart3, description: 'System Health'}';';
      ]';';';
},',';';
    ';';';
    {title: 'Support',',';';
    ';';';
      items: [{ name: 'Help Center', href: '/support', icon: HelpCircle, description: 'Self-Service Support' },',';';
    ';';';
        {name: 'Contact Us', href: '/contact', icon: MessageCircle, description: 'Get in Touch'},',';';
    ';';';
        {name: 'Request Quote', href: '/request-quote', icon: DollarSign, description: 'Custom Pricing'},',';';
    ';';';
        {name: 'Partnership', href: '/partners', icon: Users, description: 'Become a Partner'},',';';
    ';';';
        {name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join Our Team'}',';';
    ';';';
        {name: 'About', href: '/about', icon: Building},',';';
    ';';';
        {name: 'Services', href: '/services', icon: Briefcase},',';';
    ';';';
        {name: 'Solutions', href: '/solutions', icon: Target},',';';
    ';';';
        {name: 'AI Services', href: '/ai-services', icon: Brain},',';';
    ';';';
        {name: 'Case Studies', href: '/case-studies', icon: FileText},',';';
    ';';';
        {name: 'Contact', href: '/contact', icon: Mail},',';';
    ';';';
        {name: 'Blog', href: '/blog', icon: FileText}';';
      ]';';';
},',';';
    ';';';
    {'';';';';
      title: 'Core Services',',';';
    ';';';
      items: ['';';';
        { nam,',';';
    ';';';
    e: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure & Automation' },',';';
    ';';';
        {name: 'Digital Twin', href: '/services/digital-twin', icon: Globe, description: 'Simulation & Monitoring'},',';';
    ';';';
        {name: 'AI & Machine Learning', href: '/services/ai-ml', icon: Brain, description: 'Intelligent Solutions'},',';';
    ';';';
        {name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Protection & Compliance'},',';';
    ';';';
        {name: 'IT Infrastructure', href: '/services/infrastructure', icon: Server, description: 'Hardware & Networks'},',';';
    ';';';
        {name: 'Digital Transformation', href: '/services/transformation', icon: Rocket, description: 'Business Evolution'}';';
      ]';';';
},',';';
    ';';';
    {'';';';';
      title: 'Industry Solutions',',';';
    ';';';
      items: ['';';';
        { nam,',';';
    ';';';
    e: 'Manufacturing', href: '/solutions/manufacturing', icon: Cpu, description: 'Smart Factory Solutions' },',';';
    ';';';
        {name: 'Financial Services', href: '/solutions/financial', icon: DollarSign, description: 'FinTech & Banking'},',';';
    ';';';
        {name: 'Healthcare', href: '/solutions/healthcare', icon: Heart, description: 'Digital Health'},',';';
    ';';';
        {name: 'Retail', href: '/solutions/retail', icon: ShoppingCart, description: 'E-commerce & Omnichannel'},',';';
    ';';';
        {name: 'Education', href: '/solutions/education', icon: BookOpen, description: 'EdTech & Learning'},',';';
    ';';';
        {name: 'Energy', href: '/solutions/energy', icon: Zap, description: 'Renewable & Smart Grid'}';';';
      items: [',';';
    ';';';
        {name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Intelligent Solutions'},',';';
    ';';';
        {name: 'IT Services', href: '/it-services', icon: Network, description: 'Comprehensive IT Solutions'},',';';
    ';';';
        {name: 'Micro SaaS', href: '/micro-saas', icon: Cloud, description: 'Scalable SaaS Solutions'},',';';
    ';';';
        {name: 'Web Development', href: '/services/web-development', icon: Code, description: 'Custom Web Applications'},',';';
    ';';';
        {name: 'Cloud Services', href: '/services/cloud-services', icon: Cloud, description: 'Cloud Infrastructure'},',';';
    ';';';
        {name: 'AI Development', href: '/services/ai-development', icon: Brain, description: 'AI Development Services'}';
      ]';';
},';';';
    {',';';
    ';';';
      title: 'Solutions',';';';
      items: [',';';
    ';';';
        { name: 'AI Content Creation', href: '/solutions/ai-content-creation', icon: Brain, description: 'AI-Powered Content' },',';';
    ';';';
        {name: 'Customer Support', href: '/solutions/customer-support', icon: MessageCircle, description: 'Support Automation'},',';';
    ';';';
        {name: 'Email Automation', href: '/solutions/email-automation', icon: Mail, description: 'Email Marketing'},',';';
    ';';';
        {name: 'Event Management', href: '/solutions/event-management', icon: Calendar, description: 'Event Planning'},',';';
    ';';';
        {name: 'Project Management', href: '/solutions/project-management', icon: Briefcase, description: 'Project Tracking'},',';';
    ';';';
        {name: 'Workflow Automation', href: '/solutions/workflow-automation', icon: Zap, description: 'Process Automation'}';';
      ]';';';
},',';';
    ';';';
    {'';';';';
      title: 'Resources',',';';
    ';';';
      items: ['';';';
        { nam,',';';
    ';';';
    e: 'White Papers', href: '/white-papers', icon: FileText, description: 'Industry Insights' },',';';
    ';';';
        {name: 'Webinars', href: '/webinars', icon: Video, description: 'Expert Knowledge'},',';';
    ';';';
        {name: 'Training', href: '/training', icon: Award, description: 'Skill Development'},';';';
      items: [',';';
    ';';';
        {name: 'Documentation', href: '/docs', icon: BookOpen, description: 'Technical Guides'},',';';
    ';';';
        {name: 'API Reference', href: '/api', icon: Code, description: 'Developer Resources'},',';';
    ';';';
        {name: 'Training', href: '/training', icon: Award, description: 'Skill Development'},',';';
    ';';';
        {name: 'Help Center', href: '/help', icon: HelpCircle, description: 'Support Resources'},',';';
    ';';';
        {name: 'Search', href: '/search', icon: Search, description: 'Find Content'},',';';
    ';';';
        {name: 'Press', href: '/press', icon: Newspaper, description: 'News & Updates'}';';
      ]';';';
},',';';
    ';';';
    {'';';';';
      title: 'Support',',';';
    ';';';
      items: ['';';';
        { nam,',';';
    ';';';
    e: 'Help Center', href: '/support', icon: HelpCircle, description: 'Self-Service Support' },',';';
    ';';';
        {name: 'Contact Us', href: '/contact', icon: MessageCircle, description: 'Get in Touch'},',';';
    ';';';
        {name: 'Partners', href: '/partners', icon: Users, description: 'Become a Partner'},',';';
    ';';';
        {name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join Our Team'},',';';
    ';';';
        {name: 'Team', href: '/team', icon: Users, description: 'Meet Our Team'}';
      ]';';
}';';';
  ]',';';
    ';';';
  const isActive = (props: any) => {'';';';';
    if (href === '/') {'',';';
    ';';';
      return location.pathname === '/',',';';
    ';';';';
  const isActive = (props: any) => {if (href === '/') {',';';
    ';';';
      return location.pathname === '/';';';';
  const isActive = (props: any) => {',';';
    ';';';
    if (href === '/') {',';';
    ';';';
      return router.pathname === '/';
    }
    return router.pathname.startsWith(href);
  };
  return (
    <>';
      {/* Overlay */}, {isOpen && (';';
        <div className={`fixed inset-0 bg-black/50 z-40 lg: hidden` onClick={onClose}  />';';';
      )}, {/* Sidebar */}',';';
    ';';';
      <div className={` fixed top-0 left-0 h-full w-64 bg-zion-blue-dark border-r border-zion-purple/20 transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full lg: translate-x-0'} lg: relative lg:inset-0 `}>';';
      {/* Overlay */}';';';
      {isOpen && (',';';
    ';';';
        <div '
        <div ``}
          className="fixed inset-0 bg-black/50 z-40 lg: hidden"
          onClick={onClose}
        /" >"
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
         />
      )
      )}
    </div>
    );
}
      {/* Sidebar */}`';
      <div className={`';';
        fixed top-0 left-0 h-full w-64 bg-zion-blue-dark border-r border-zion-purple/20';';';
        transform transition-transform duration-300 ease-in-out z-50`',';';
    ';';';
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}';';';
        lg:relative l,',';';
    ';';';
    g:inset-0'
      `}>
        {/* Header */}`
        <div className=`flex items-center justify-between p-4 border-b border-zion-purple/20">"';
          <div className="flex items-center space-x-2">"';';
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center">"';';';
        transform transition-transform duration-300 ease-in-out z-50"`',';';
    ';';';
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        lg:relative lg:inset-0`
      `}` >"
        {/* Header */}""
        <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">""
          <div className="flex items-center space-x-2">""
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center">""
              <span className="text-white font-bold text-lg">Z</span>
            </div>""
            <span className="text-white font-semibold">Zion Tech</span>
          </div>
          <button onClick={onClose}""
            className="lg:hidden p-1 text-zion-slate-light hover:text-white hover:bg-zion-purple/10 rounded"" >"
            <X className="h-5 w-5" /" >"
          </button>
        </div>
        {/* Navigation */}""
        <div className="flex-1 overflow-y-auto py-4">
          {navigationSections.map((section, sectionIndex) => (""
            <div key={section.title} className="mb-6">""
              <h3 className="px-4 text-xs font-semibold text-zion-cyan uppercase tracking-wider mb-3">
                {section.title}
              ""
              <div className="space-y-1">
                {section.items.map((item, itemIndex) => (';
                  <div key={item.name}" >`';';
        fixed top-0 left-0 h-full w-64 bg-gray-900 border-r border-gray-700';';';
        transform transition-transform duration-300 ease-in-out z-50',';';
    ';';';
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        lg: relative lg:inset-0`}>
        {/* Header */}
        <div className=`flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>"
            <span className="text-white font-semibold">Zion Tech</span>
          </div>
          <button
            onClick={onClose}"
            className="lg: hidden p-1 text-zion-slate-light hove
    r:text-white hove
    r:bg-zion-purple/10 rounded"
          >"
          <button onClick={onClose} className="lg: hidden p-1 text-zion-slate-light hover:text-white hover:bg-zion-purple/10 rounded" >
          <button onClick={onClose}
            className="lg:hidden p-1 text-gray-400 hover:text-white hover:bg-gray-800 rounded">
            <X className="h-5 w-5"  />
          </button>
        </div>
        {/* Navigation */}"
        <div className="flex-1 overflow-y-auto py-4">
          {navigationSections.map((section, sectionIndex) => ("
            <div key={section.title} className="mb-6">"
              <h3 className="px-4 text-xs font-semibold text-zion-cyan uppercase tracking-wider mb-3">
                {section.title}
              "
          {navigationSections.map((section, sectionIndex) => (
            <div key={section.title} className="mb-6">
              <h3 className="px-4 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-3">
                {section.title}
              <div className="space-y-1">
                {section.items.map((item, itemIndex) => (
                  <div key={item.name}>
                    {item.href ? (
                      <Link to={item.href}`';
                        className={`';';
                          flex items-center px-4 py-2 text-sm transition-colors group';';';
                          ${isActive(item.href)`',';';
    ';';';
                            ? 'text-zion-cyan bg-zion-purple/10 border-r-2 border-zion-cyan''',';';
    ';';';
                            : 'text-zion-slate-light hover:text-white hove,';';';';
    r: bg-zion-purple/10'}
                        `}
                        onClick={onClose}
                      >`
                        <item .icon className=`h-4 w-4 mr-3 flex-shrink-0"  />"';
                        <span className="flex-1">{item.name}</span>';';
                        {item.description && ("';';';
                          <span className={`text-xs text-zion-slate-light opacity-0 group-hover:opacity-100 transition-opacity`>',';';
    ';';';
                      <Link to={item.href} className={` flex items-center px-4 py-2 text-sm transition-colors group ${isActive(item.href) ? 'text-zion-cyan bg-zion-purple/10 border-r-2 border-zion-cyan' : 'text-zion-slate-light hover: text-white hover:bg-zion-purple/10' } `} onClick={onClose} >
                        <item .icon className=`h-4 w-4 mr-3 flex-shrink-0`}  />
                        <span className="flex-1">{item.name}</span>
                        {item.description && (
                          <span className={`text-xs text-zion-slate-light opacity-0 group-hover: opacity-100 transition-opacity`>
                      <Link href={item.href}';
                        className={`';';
                          flex items-center px-4 py-2 text-sm transition-colors group';';';
                          ${isActive(item.href)""',';';
    ';';';
                            ? 'text-zion-cyan bg-zion-purple/10 border-r-2 border-zion-cyan'',';';
    ';';';
                            : 'text-zion-slate-light hover:text-white hover:bg-zion-purple/10'}`
                        `}
                        onClick={onClose}` >`}
                        <item .icon className="h-4 w-4 mr-3 flex-shrink-0" /" >"
                        <span className="flex-1">{item.name}</span>';
                        {item.description && (""';';
                          <span className={`text-xs text-zion-slate-light opacity-0 group-hover: opacity-100 transition-opacity`>';';';
                          ${isActive(item.href)',';';
    ';';';
                            ? 'text-blue-400 bg-blue-900/20 border-r-2 border-blue-400'',';';
    ';';';
                            : 'text-gray-300 hover:text-white hover:bg-gray-800'}`;
}
                        onClick={onClose}>
                        <item .icon className=`h-4 w-4 mr-3 flex-shrink-0`}  />
                        <span className="flex-1">{item.name}</span>
                        {item.description && (
                          <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            {item.description}
                          </span>
                        )
      )}
    </div>
    );
}
                      </Link>
                    ) : (
                      <button
                        onClick={() => toggleSection(item.name.toLowerCase());"
                        className="w-full flex items-center justify-between px-4 py-2 text-sm text-zion-slate-light hover:text-white hove
    r:bg-zion-purple/10 transition-colors"
                      >"
                        <div className="flex items-center">"
                      <button onClick={() => toggleSection(item.name.toLowerCase())
      )}
    </div>
    );
}
                        className="w-full flex items-center justify-between px-4 py-2 text-sm text-zion-slate-light hover: text-white hover:bg-zion-purple/10 transition-colors"
                      <button onClick={() =" > toggleSection(item.name.toLowerCase())}"
                        className="w-full flex items-center justify-between px-4 py-2 text-sm text-zion-slate-light hover: text-white hover:bg-zion-purple/10 transition-colors"
                      >""
                        <div className="flex items-center">""
                          <item .icon className="h-4 w-4 mr-3 flex-shrink-0" /" >"
                          <span>{item.name}</span>
                        </div>
                        {expandedSections.includes(item.name.toLowerCase()) ? (""
                          <ChevronDown className="h-4 w-4" /" >"
                        ) : (""
                          <ChevronRight className="h-4 w-4" /" >"
                      <button onClick={() => toggleSection(item.name.toLowerCase())
      )}
    </div>
    );
}
                        className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                      >
                        <div className="flex items-center">
                          <item .icon className="h-4 w-4 mr-3 flex-shrink-0"  />
                          <span>{item.name}</span>
                        </div>
                        {expandedSections.includes(item.name.toLowerCase()) ? ("
                          <ChevronDown className="h-4 w-4"  />
                        ) : ("
                          <ChevronRight className="h-4 w-4"  />
                        )
      )}
    </div>
    );
}
                      </button>
                    )
      )}
    </div>
    );
}
                  </div>
                ))
      )}
    </div>
    );
}
              </div>
            </div>
          ))
      )}
    </div>
    );
}
        </div>
        {/* Footer */}"
        <div className="p-4 border-t border-zion-purple/20">"
          <div className="text-center">"
            <p className="text-xs text-zion-slate-light mb-2">
              Need help? Contact our support team
            </p>
            <Link"
              to="/contact""
              className="inline-flex items-center text-xs text-zion-cyan hover:text-white transition-colors"
              onClick={onClose}
            >"
        {/* Footer */}""
        <div className="p-4 border-t border-zion-purple/20">""
          <div className="text-center">""
            <p className="text-xs text-zion-slate-light mb-2">
              Need help? Contact our support team
            </p>
            <Link to="/contact" className="inline-flex items-center text-xs text-zion-cyan hover: text-white transition-colors" onClick={onClose} >
            <Link ""
              to="/contact"
              className="inline-flex items-center text-xs text-zion-cyan hover: text-white transition-colors"
              onClick={onClose}" >"
              <MessageCircle className="h-3 w-3 mr-1" /" >"
        {/* Footer */}
        <div className="p-4 border-t border-gray-700">
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-2">
              Need help? Contact our support team
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-xs text-blue-400 hover:text-white transition-colors"
              onClick={onClose}>
              <MessageCircle className="h-3 w-3 mr-1"  />
              Get Support
            </Link>
          </div>
        </div>
      </div>
</>
  );}"`"
    </>
  );';
}";';';
}';';';
"';';';';
</MessageCircle>
</div>
</div>
</div>
</ChevronRight>
</ChevronDown>
</item>
</button>
</button>
</button>
</span>
</item>
</span>
</span>
</button>
</button>
</X>
</div>
</div>';
</div>;';;';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Home, Zap, Shield, Cloud, Brain, Settings, Users, BarChart3, Mail, Phone, MapPin } from 'lucide-react';
export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Zap },
    { name: 'AI Solutions', href: '/ai-solutions', icon: Brain },
    { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
    { name: 'Cloud Services', href: '/services/cloud-devops', icon: Cloud },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];
  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-80">
        <div className="flex flex-col flex-grow bg-white border-r border-gray-200 pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <h2 className="text-lg font-semibold text-gray-900">Navigation</h2>
          </div>
          <div className="mt-5 flex-grow flex flex-col">
            <nav className="flex-1 px-2 space-y-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`${
                      isActive
                        ? 'bg-blue-50 border-blue-500 text-blue-700'
                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    } group flex items-center px-2 py-2 text-sm font-medium rounded-md border-l-4`}
                  >
                    <item.icon
                      className={`${
                        isActive ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'
                      } mr-3 flex-shrink-0 h-6 w-6`}
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
</div>
</div>
</div>
</div>
</div>
 import React,{ useState } from 'react'; import { Link,useLocation } from 'react-router-dom'; import { ChevronDown, import React,{useState} from 'react',;','; ';';';';';'; import {Link,useLocation} from 'react-router-dom',;'; ';';';';'; import {ChevronDown,;';';'; import React,{ useState } from 'react';",'; ';';';';'; import {Link,useLocation} from 'react-router-dom'; import {ChevronDown,ChevronRight,Home,Zap,Brain,Shield,Cloud,Cpu,Users,ShoppingCart,BookOpen,MessageCircle,HelpCircle,DollarSign,Star,Target,TrendingUp,Award,Settings,Globe,Rocket,Heart,Lock,Database,Network,Palette,Video,PenTool,Atom,Server,Smartphone,BarChart3,Search,FileText,Calendar,Briefcase,; Info,Phone,;';'; Mail,MapPin,;';';'; Building,TestTube,;';';';'; Newspaper,X,;';';';';'; Code;",";','; ';';'} from "lucide-react";'; export function Sidebar($1) {';'; const location = useLocation();",'; ';';';';'; import React,{ useState } from 'react',;','; ';';';';';'; import Link from 'next/link',;'; ';';';';';'; import {useRouter} from 'next/router'; import {ChevronDown, ChevronRight,Home,Zap,Brain,Shield,Cloud,Cpu,Users,ShoppingCart,BookOpen,MessageCircle,HelpCircle,DollarSign,Star,Target,TrendingUp,Award,Settings,Globe,Rocket,Heart,Lock,Database,Network,Palette,Video,PenTool,Atom,Server,Smartphone,BarChart3,Search,FileText,Calendar,Briefcase,Info,Phone, Mail,MapPin,Building,TestTube,Newspaper,X,Code } from 'lucide-react'; export function Sidebar({ isOpen,onClose }) { const location = useLocation(); const [expandedSections,setExpandedSections] = useState(['services','solutions']); const toggleSection = (sectionName) => { setExpandedSections(prev => prev.includes(sectionName) ? prev.filter(s => s !== sectionName) : [...prev,sectionName] )}; const navigationSections = [ { title: 'Main',items: [ { name: 'Home',href: '/',icon: Home },{ name: 'About',href: '/about',icon: Building },{ name: 'Services',href: '/services',icon: Briefcase },{ name: 'Solutions',href: '/solutions',icon: Target },{ name: 'AI Solutions',href: '/ai-solutions',icon: Brain },{ name: 'Case Studies',href: '/case-studies',icon: FileText },{ name: 'Research',href: '/research-development',icon: TestTube },{ name: 'Events',href: '/events',icon: Video },{ name: 'News',href: '/news',icon: Newspaper },{ name: 'Contact',href: '/contact',icon: Mail },{ name: 'Blog',href: '/blog',icon: FileText } ] },{ title: 'Core Services',items: [ { name: 'Cloud & DevOps',href: '/services/cloud-devops',icon: Cloud,description: 'Infrastructure & Automation' },{ name: 'Digital Twin',href: '/services/digital-twin',icon: Globe,description: 'Simulation & Monitoring' },{ name: 'AI & Machine Learning',href: '/services/ai-ml',icon: Brain,description: 'Intelligent Solutions' },{ name: 'Cybersecurity',href: '/services/cybersecurity',icon: Shield,description: 'Protection & Compliance' },{ name: 'IT Infrastructure',href: '/services/infrastructure',icon: Server,description: 'Hardware & Networks' },{ name: 'Digital Transformation',href: '/services/transformation',icon: Rocket,description: 'Business Evolution' } ] },{ title: 'Industry Solutions',items: [ { name: 'Manufacturing',href: '/solutions/manufacturing',icon: Cpu,description: 'Smart Factory Solutions' },{ name: 'Financial Services',href: '/solutions/financial',icon: DollarSign,description: 'FinTech & Banking' },{ name: 'Healthcare',href: '/solutions/healthcare',icon: Heart,description: 'Digital Health' },{ name: 'Retail',href: '/solutions/retail',icon: ShoppingCart,description: 'E-commerce & Omnichannel' },{ name: 'Education',href: '/solutions/education',icon: BookOpen,description: 'EdTech & Learning' },{ name: 'Energy',href: '/solutions/energy',icon: Zap,description: 'Renewable & Smart Grid' } ] },{ title: 'Resources',items: [ { name: 'White Papers',href: '/white-papers',icon: FileText,description: 'Industry Insights' },{ name: 'Webinars',href: '/webinars',icon: Video,description: 'Expert Knowledge' },{ name: 'Training',href: '/training',icon: Award,description: 'Skill Development' },{ name: 'Documentation',href: '/docs',icon: BookOpen,description: 'Technical Guides' },{ name: 'API Reference',href: '/api',icon: Code,description: 'Developer Resources' },{ name: 'Status Page',href: '/status',icon: BarChart3,description: 'System Health' } ] },{ title: 'Support',items: [ { name: 'Help Center',href: '/support',icon: HelpCircle,description: 'Self-Service Support' },{ name: 'Contact Us',href: '/contact',icon: MessageCircle,description: 'Get in Touch' },{ name: 'Request Quote',href: '/request-quote',icon: DollarSign,description: 'Custom Pricing' },{ name: 'Partnership',href: '/partners',icon: Users,description: 'Become a Partner' },{ name: 'Careers',href: '/careers',icon: Briefcase,description: 'Join Our Team' } ] }; ]; const isActive = (href) => { if (href === '/') { return location.pathname === '/'} return location.pathname.startsWith(href)}; return ( <> {} {isOpen && ( <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} /> )} {} <div className={` fixed top-0 left-0 h-full w-64 bg-zion-blue-dark border-r border-zion-purple/20 transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} lg:relative lg:inset-0 `}> {} <div className="flex items-center justify-between p-4 border-b border-zion-purple/20"> <div className="flex items-center space-x-2"> <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center"> <span className="text-white font-bold text-lg">Z</span> </div> <span className="text-white font-semibold">Zion Tech</span> </div> <button onClick={onClose} className="lg:hidden p-1 text-zion-slate-light hover:text-white hover:bg-zion-purple/10 rounded" > <X className="h-5 w-5" /> </button> </div> {} <div className="flex-1 overflow-y-auto py-4"> {navigationSections.map((section,sectionIndex) => ($1) {const location = useLocation();'; export function Sidebar($1) {';'; const router = useRouter();','; ';';';';'; const [expandedSections,setExpandedSections] = useState(['services','solutions']); const toggleSection = (props) => { setExpandedSections(prev => prev.includes(sectionName); ? prev.filter(s => s !== sectionName);';'; : [...prev,sectionName] )};';';';'; const navigationSections = [ {",'; ';';';';'; title: 'Main',items: [",'; ';';';';'; { name: 'Home',href: '/',icon: Home },",'; ';';';';'; {name: 'About',href: '/about',icon: Building},",'; ';';';';'; {name: 'Services',href: '/services',icon: Briefcase},",'; ';';';';'; {name: 'Solutions',href: '/solutions',icon: Target},",'; ';';';';'; {name: 'AI Solutions',href: '/ai-solutions',icon: Brain},",'; ';';';';'; {name: 'Case Studies',href: '/case-studies',icon: FileText},",'; ';';';';'; {name: 'Research',href: '/research-development',icon: TestTube},",'; ';';';';'; {name: 'Events',href: '/events',icon: Video},",'; ';';';';'; {name: 'News',href: '/news',icon: Newspaper},",'; ';';';';'; {name: 'Contact',href: '/contact',icon: Mail},",'; ';';';';'; {name: 'Blog',href: '/blog',icon: FileText}'; ]},';'; {",'; ';';';';'; title: 'Core Services',items: [",'; ';';';';'; { name: 'Cloud & DevOps',href: '/services/cloud-devops',icon: Cloud,description: 'Infrastructure & Automation' },",'; ';';';';'; {name: 'Digital Twin',href: '/services/digital-twin',icon: Globe,description: 'Simulation & Monitoring'},",'; ';';';';'; {name: 'AI & Machine Learning',href: '/services/ai-ml',icon: Brain,description: 'Intelligent Solutions'},",'; ';';';';'; {name: 'Cybersecurity',href: '/services/cybersecurity',icon: Shield,description: 'Protection & Compliance'},",'; ';';';';'; {name: 'IT Infrastructure',href: '/services/infrastructure',icon: Server,description: 'Hardware & Networks'},",'; ';';';';'; {name: 'Digital Transformation',href: '/services/transformation',icon: Rocket,description: 'Business Evolution'}'; ]},';'; {",'; ';';';';'; title: 'Industry Solutions',items: [",'; ';';';';'; { name: 'Manufacturing',href: '/solutions/manufacturing',icon: Cpu,description: 'Smart Factory Solutions' },",'; ';';';';'; {name: 'Financial Services',href: '/solutions/financial',icon: DollarSign,description: 'FinTech & Banking'},",'; ';';';';'; {name: 'Healthcare',href: '/solutions/healthcare',icon: Heart,description: 'Digital Health'},",'; ';';';';'; {name: 'Retail',href: '/solutions/retail',icon: ShoppingCart,description: 'E-commerce & Omnichannel'},",'; ';';';';'; {name: 'Education',href: '/solutions/education',icon: BookOpen,description: 'EdTech & Learning'},",'; ';';';';'; {name: 'Energy',href: '/solutions/energy',icon: Zap,description: 'Renewable & Smart Grid'}'; ]},';'; {",'; ';';';';'; title: 'Resources',items: [",'; ';';';';'; { name: 'White Papers',href: '/white-papers',icon: FileText,description: 'Industry Insights' },",'; ';';';';'; {name: 'Webinars',href: '/webinars',icon: Video,description: 'Expert Knowledge'},",'; ';';';';'; {name: 'Training',href: '/training',icon: Award,description: 'Skill Development'},",'; ';';';';'; {name: 'Documentation',href: '/docs',icon: BookOpen,description: 'Technical Guides'},",'; ';';';';'; {name: 'API Reference',href: '/api',icon: Code,description: 'Developer Resources'},",'; ';';';';'; {name: 'Status Page',href: '/status',icon: BarChart3,description: 'System Health'}'; ]},';'; {",'; ';';';';'; title: 'Support',items: [",'; ';';';';'; { name: 'Help Center',href: '/support',icon: HelpCircle,description: 'Self-Service Support' },",'; ';';';';'; {name: 'Contact Us',href: '/contact',icon: MessageCircle,description: 'Get in Touch'},",'; ';';';';'; {name: 'Request Quote',href: '/request-quote',icon: DollarSign,description: 'Custom Pricing'},",'; ';';';';'; {name: 'Partnership',href: '/partners',icon: Users,description: 'Become a Partner'},",'; ';';';';'; {name: 'Careers',href: '/careers',icon: Briefcase,description: 'Join Our Team'} ]}'; ]';'; const isActive = (props) => {",';';';';'; if (href === '/') {",'; ';';';';'; return location.pathname === '/'} return location.pathname.startsWith(href)};';';'; );';';';'};';';';';'; const navigationSections = [',';';';';'; {";';'; title: 'Main',','; ';';';';'; items: [";'; { nam,','; ';';';';'; e: 'Home',href: '/',icon: Home },','; ';';';';'; const navigationSections = [{title: 'Main',items: [','; ';';';';'; { name: 'Home',href: '/',icon: Home },','; ';';';';'; {name: 'About',href: '/about',icon: Building},','; ';';';';'; {name: 'Services',href: '/services',icon: Briefcase},','; ';';';';'; {name: 'Solutions',href: '/solutions',icon: Target},','; ';';';';'; {name: 'AI Solutions',href: '/ai-solutions',icon: Brain},','; ';';';';'; {name: 'Case Studies',href: '/case-studies',icon: FileText},','; ';';';';'; {name: 'Research',href: '/research-development',icon: TestTube},','; ';';';';'; {name: 'Events',href: '/events',icon: Video},','; ';';';';'; {name: 'News',href: '/news',icon: Newspaper},','; ';';';';'; {name: 'Contact',href: '/contact',icon: Mail},','; ';';';';'; {name: 'Blog',href: '/blog',icon: FileText}'; ]';'},','; ';';';';'; {title: 'Core Services',','; ';';';';'; items: [{ name: 'Cloud & DevOps',href: '/services/cloud-devops',icon: Cloud,description: 'Infrastructure & Automation' },','; ';';';';'; {name: 'Digital Twin',href: '/services/digital-twin',icon: Globe,description: 'Simulation & Monitoring'},','; ';';';';'; {name: 'AI & Machine Learning',href: '/services/ai-ml',icon: Brain,description: 'Intelligent Solutions'},','; ';';';';'; {name: 'Cybersecurity',href: '/services/cybersecurity',icon: Shield,description: 'Protection & Compliance'},','; ';';';';'; {name: 'IT Infrastructure',href: '/services/infrastructure',icon: Server,description: 'Hardware & Networks'},','; ';';';';'; {name: 'Digital Transformation',href: '/services/transformation',icon: Rocket,description: 'Business Evolution'}'; ]';'},','; ';';';';'; {title: 'Industry Solutions',','; ';';';';'; items: [{ name: 'Manufacturing',href: '/solutions/manufacturing',icon: Cpu,description: 'Smart Factory Solutions' },','; ';';';';'; {name: 'Financial Services',href: '/solutions/financial',icon: DollarSign,description: 'FinTech & Banking'},','; ';';';';'; {name: 'Healthcare',href: '/solutions/healthcare',icon: Heart,description: 'Digital Health'},','; ';';';';'; {name: 'Retail',href: '/solutions/retail',icon: ShoppingCart,description: 'E-commerce & Omnichannel'},','; ';';';';'; {name: 'Education',href: '/solutions/education',icon: BookOpen,description: 'EdTech & Learning'},','; ';';';';'; {name: 'Energy',href: '/solutions/energy',icon: Zap,description: 'Renewable & Smart Grid'}'; ]';'},','; ';';';';'; {title: 'Resources',','; ';';';';'; items: [{ name: 'White Papers',href: '/white-papers',icon: FileText,description: 'Industry Insights' },','; ';';';';'; {name: 'Webinars',href: '/webinars',icon: Video,description: 'Expert Knowledge'},','; ';';';';'; {name: 'Training',href: '/training',icon: Award,description: 'Skill Development'},','; ';';';';'; {name: 'Documentation',href: '/docs',icon: BookOpen,description: 'Technical Guides'},','; ';';';';'; {name: 'API Reference',href: '/api',icon: Code,description: 'Developer Resources'},','; ';';';';'; {name: 'Status Page',href: '/status',icon: BarChart3,description: 'System Health'}'; ]';'},','; ';';';';'; {title: 'Support',','; ';';';';'; items: [{ name: 'Help Center',href: '/support',icon: HelpCircle,description: 'Self-Service Support' },','; ';';';';'; {name: 'Contact Us',href: '/contact',icon: MessageCircle,description: 'Get in Touch'},','; ';';';';'; {name: 'Request Quote',href: '/request-quote',icon: DollarSign,description: 'Custom Pricing'},','; ';';';';'; {name: 'Partnership',href: '/partners',icon: Users,description: 'Become a Partner'},','; ';';';';'; {name: 'Careers',href: '/careers',icon: Briefcase,description: 'Join Our Team'}','; ';';';';'; {name: 'About',href: '/about',icon: Building},','; ';';';';'; {name: 'Services',href: '/services',icon: Briefcase},','; ';';';';'; {name: 'Solutions',href: '/solutions',icon: Target},','; ';';';';'; {name: 'AI Services',href: '/ai-services',icon: Brain},','; ';';';';'; {name: 'Case Studies',href: '/case-studies',icon: FileText},','; ';';';';'; {name: 'Contact',href: '/contact',icon: Mail},','; ';';';';'; {name: 'Blog',href: '/blog',icon: FileText}'; ]';'},','; ';';';';'; {";';'; title: 'Core Services',','; ';';';';'; items: [";'; { nam,','; ';';';';'; e: 'Cloud & DevOps',href: '/services/cloud-devops',icon: Cloud,description: 'Infrastructure & Automation' },','; ';';';';'; {name: 'Digital Twin',href: '/services/digital-twin',icon: Globe,description: 'Simulation & Monitoring'},','; ';';';';'; {name: 'AI & Machine Learning',href: '/services/ai-ml',icon: Brain,description: 'Intelligent Solutions'},','; ';';';';'; {name: 'Cybersecurity',href: '/services/cybersecurity',icon: Shield,description: 'Protection & Compliance'},','; ';';';';'; {name: 'IT Infrastructure',href: '/services/infrastructure',icon: Server,description: 'Hardware & Networks'},','; ';';';';'; {name: 'Digital Transformation',href: '/services/transformation',icon: Rocket,description: 'Business Evolution'}'; ]';'},','; ';';';';'; {";';'; title: 'Industry Solutions',','; ';';';';'; items: [";'; { nam,','; ';';';';'; e: 'Manufacturing',href: '/solutions/manufacturing',icon: Cpu,description: 'Smart Factory Solutions' },','; ';';';';'; {name: 'Financial Services',href: '/solutions/financial',icon: DollarSign,description: 'FinTech & Banking'},','; ';';';';'; {name: 'Healthcare',href: '/solutions/healthcare',icon: Heart,description: 'Digital Health'},','; ';';';';'; {name: 'Retail',href: '/solutions/retail',icon: ShoppingCart,description: 'E-commerce & Omnichannel'},','; ';';';';'; {name: 'Education',href: '/solutions/education',icon: BookOpen,description: 'EdTech & Learning'},','; ';';';';'; {name: 'Energy',href: '/solutions/energy',icon: Zap,description: 'Renewable & Smart Grid'}';'; items: [','; ';';';';'; {name: 'AI Services',href: '/ai-services',icon: Brain,description: 'Intelligent Solutions'},','; ';';';';'; {name: 'IT Services',href: '/it-services',icon: Network,description: 'Comprehensive IT Solutions'},','; ';';';';'; {name: 'Micro SaaS',href: '/micro-saas',icon: Cloud,description: 'Scalable SaaS Solutions'},','; ';';';';'; {name: 'Web Development',href: '/services/web-development',icon: Code,description: 'Custom Web Applications'},','; ';';';';'; {name: 'Cloud Services',href: '/services/cloud-services',icon: Cloud,description: 'Cloud Infrastructure'},','; ';';';';'; {name: 'AI Development',href: '/services/ai-development',icon: Brain,description: 'AI Development Services'} ]'},';'; {','; ';';';';'; title: 'Solutions',';'; items: [','; ';';';';'; { name: 'AI Content Creation',href: '/solutions/ai-content-creation',icon: Brain,description: 'AI-Powered Content' },','; ';';';';'; {name: 'Customer Support',href: '/solutions/customer-support',icon: MessageCircle,description: 'Support Automation'},','; ';';';';'; {name: 'Email Automation',href: '/solutions/email-automation',icon: Mail,description: 'Email Marketing'},','; ';';';';'; {name: 'Event Management',href: '/solutions/event-management',icon: Calendar,description: 'Event Planning'},','; ';';';';'; {name: 'Project Management',href: '/solutions/project-management',icon: Briefcase,description: 'Project Tracking'},','; ';';';';'; {name: 'Workflow Automation',href: '/solutions/workflow-automation',icon: Zap,description: 'Process Automation'}'; ]';'},','; ';';';';'; {";';'; title: 'Resources',','; ';';';';'; items: [";'; { nam,','; ';';';';'; e: 'White Papers',href: '/white-papers',icon: FileText,description: 'Industry Insights' },','; ';';';';'; {name: 'Webinars',href: '/webinars',icon: Video,description: 'Expert Knowledge'},','; ';';';';'; {name: 'Training',href: '/training',icon: Award,description: 'Skill Development'},';'; items: [','; ';';';';'; {name: 'Documentation',href: '/docs',icon: BookOpen,description: 'Technical Guides'},','; ';';';';'; {name: 'API Reference',href: '/api',icon: Code,description: 'Developer Resources'},','; ';';';';'; {name: 'Training',href: '/training',icon: Award,description: 'Skill Development'},','; ';';';';'; {name: 'Help Center',href: '/help',icon: HelpCircle,description: 'Support Resources'},','; ';';';';'; {name: 'Search',href: '/search',icon: Search,description: 'Find Content'},','; ';';';';'; {name: 'Press',href: '/press',icon: Newspaper,description: 'News & Updates'}'; ]';'},','; ';';';';'; {";';'; title: 'Support',','; ';';';';'; items: [";'; { nam,','; ';';';';'; e: 'Help Center',href: '/support',icon: HelpCircle,description: 'Self-Service Support' },','; ';';';';'; {name: 'Contact Us',href: '/contact',icon: MessageCircle,description: 'Get in Touch'},','; ';';';';'; {name: 'Partners',href: '/partners',icon: Users,description: 'Become a Partner'},','; ';';';';'; {name: 'Careers',href: '/careers',icon: Briefcase,description: 'Join Our Team'},','; ';';';';'; {name: 'Team',href: '/team',icon: Users,description: 'Meet Our Team'} ]'}';'; ]','; ';';';';'; const isActive = (props) => {' if (href === '/') {",'; ';';';';'; return location.pathname === '/',',';';';';';'; const isActive = (props) => {if (href === '/') {',';';';';'; return location.pathname === '/';';'; const isActive = (props) => {',';';';';'; if (href === '/') {','; ';';';';'; return router.pathname === '/'} return router.pathname.startsWith(href)};'; return ('; <>';';'; {},{isOpen && (';';';'; <divclassName={`fixed inset-0 bg-black/50 z-40 lg: hidden` onClick={onClose} />';';';'; )},{}','; ';';';';'; <divclassName={` fixed top-0 left-0 h-full w-64 bg-zion-blue-dark border-r border-zion-purple/20 transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full lg: translate-x-0'} lg: relative lg:inset-0 `}>';';'; {}';'; {isOpen && (','; ';';';';'; <div ' <div ``} className="fixed inset-0 bg-black/50 z-40 lg: hidden" onClick={onClose} /" >" <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} /> ) )} </div> );'} {}` <divclassName={`'; fixed top-0 left-0 h-full w-64 bg-zion-blue-dark border-r border-zion-purple/20';';';';'; transform transition-transform duration-300 ease-in-out z-50`','; ';';';';'; ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}';'; lg:relative l,','; ';';';';'; g:inset-0' `}> {}` <div className=`flex items-center justify-between p-4 border-b border-zion-purple/20">";';'; <div className="flex items-center space-x-2">";';';'; <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center">";';';';'; transform transition-transform duration-300 ease-in-out z-50"`','; ';';';';'; ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} lg:relative lg:inset-0` `}` >" {}" <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">" <div className="flex items-center space-x-2">" <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center">" <span className="text-white font-bold text-lg">Z</span> </div>" <span className="text-white font-semibold">Zion Tech</span> </div> <button onClick={onClose}" className="lg:hidden p-1 text-zion-slate-light hover:text-white hover:bg-zion-purple/10 rounded" >" <X className="h-5 w-5" /" >" </button> </div> {}" <div className="flex-1 overflow-y-auto py-4"> {navigationSections.map((section,sectionIndex) => (" <div key={section.title} className="mb-6">" <h3 className="px-4 text-xs font-semibold text-zion-cyan uppercase tracking-wider mb-3"> {section.title} </h3> "; <divclassName="space-y-1">'; {section.items.map((item,itemIndex) => (';';'; <div key={item.name}" >`'; fixed top-0 left-0 h-full w-64 bg-gray-900 border-r border-gray-700';';';';'; transform transition-transform duration-300 ease-in-out z-50','; ';';';';'; ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} lg: relative lg:inset-0`}> {} <div className=`flex items-center justify-between p-4 border-b border-gray-700"> <div className="flex items-center space-x-2"> <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"> <span className="text-white font-bold text-lg">Z</span> </div>" <span className="text-white font-semibold">Zion Tech</span> </div> <button onClick={onClose}" className="lg: hidden p-1 text-zion-slate-light hove r:text-white hove r:bg-zion-purple/10 rounded" >" <button onClick={onClose} className="lg: hidden p-1 text-zion-slate-light hover:text-white hover:bg-zion-purple/10 rounded" > <button onClick={onClose} className="lg:hidden p-1 text-gray-400 hover:text-white hover:bg-gray-800 rounded"> <X className="h-5 w-5" /> </button> </div> {}" <div className="flex-1 overflow-y-auto py-4"> {navigationSections.map((section,sectionIndex) => (" <div key={section.title} className="mb-6">" <h3 className="px-4 text-xs font-semibold text-zion-cyan uppercase tracking-wider mb-3"> {section.title} </h3> " {navigationSections.map((section,sectionIndex) => ( <div key={section.title} className="mb-6"> <h3 className="px-4 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-3">  {section.title} </h3> <div className="space-y-1"> {section.items.map((item,itemIndex) => (  <div key={item.name}> {item.href ? ( <Link to={item.href} className={` flex items-center px-4 py-2 text-sm transition-colors group ${isActive(item.href) ? 'text-zion-cyan bg-zion-purple/10 border-r-2 border-zion-cyan' : 'text-zion-slate-light hover:text-white hover:bg-zion-purple/10' } `} onClick={onClose} > <item.icon className="h-4 w-4 mr-3 flex-shrink-0" /> <span className="flex-1">{item.name}</span> {item.description && ( <span className="text-xs text-zion-slate-light opacity-0 group-hover:opacity-100 transition-opacity"> {item.description} </span> )} </Link> ) : ( <button onClick={() => toggleSection(item.name.toLowerCase())} className="w-full flex items-center justify-between px-4 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-zion-purple/10 transition-colors" > <div className="flex items-center"> <item.icon className="h-4 w-4 mr-3 flex-shrink-0" /> <span>{item.name}</span> </div> {expandedSections.includes(item.name.toLowerCase()) ? ( <ChevronDown className="h-4 w-4" /> ) : ( <ChevronRight className="h-4 w-4" /> )} </button> )} </div> ))} </div> </div> ))} </div> {} <div className="p-4 border-t border-zion-purple/20"> <div className="text-center"> <p className="text-xs text-zion-slate-light mb-2"> Need help? Contact our support team </p> <Link to="/contact" className="inline-flex items-center text-xs text-zion-cyan hover:text-white transition-colors" onClick={onClose} > <MessageCircle className="h-3 w-3 mr-1" />  <divkey={item.name}> {item.href ? (';'; <Link to={item.href}` className={`'; flex items-center px-4 py-2 text-sm transition-colors group';';';';'; ${isActive(item.href)`','; ';';';';'; ? 'text-zion-cyan bg-zion-purple/10 border-r-2 border-zion-cyan",'; ';';';';'; : 'text-zion-slate-light hover:text-white hove,';';'; r: bg-zion-purple/10'} `} onClick={onClose} >` <item .icon className=`h-4 w-4 mr-3 flex-shrink-0" />";';'; <span className="flex-1">{item.name}</span>';';'; {item.description && (";';';';'; <span className={`text-xs text-zion-slate-light opacity-0 group-hover:opacity-100 transition-opacity`>','; ';';';';'; <Link to={item.href} className={` flex items-center px-4 py-2 text-sm transition-colors group ${isActive(item.href) ? 'text-zion-cyan bg-zion-purple/10 border-r-2 border-zion-cyan' : 'text-zion-slate-light hover: text-white hover:bg-zion-purple/10' } `} onClick={onClose} > <item .icon className=`h-4 w-4 mr-3 flex-shrink-0`} /> <span className="flex-1">{item.name}</span> {item.description && ('; <spanclassName={`text-xs text-zion-slate-light opacity-0 group-hover: opacity-100 transition-opacity`>'; <Link href={item.href} className={`'; flex items-center px-4 py-2 text-sm transition-colors group';';';';'; ${isActive(item.href)",'; ';';';';'; ? 'text-zion-cyan bg-zion-purple/10 border-r-2 border-zion-cyan",'; ';';';';'; : 'text-zion-slate-light hover:text-white hover:bg-zion-purple/10'}` `} onClick={onClose}` >`} <item .icon className="h-4 w-4 mr-3 flex-shrink-0" /" >";'; <span className="flex-1">{item.name}</span>';'; {item.description && (";';';'; <spanclassName={`text-xs text-zion-slate-light opacity-0 group-hover: opacity-100 transition-opacity`>';';';'; ${isActive(item.href)','; ';';';';'; ? 'text-blue-400 bg-blue-900/20 border-r-2 border-blue-400",'; ';';';';'; : 'text-gray-300 hover:text-white hover:bg-gray-800'}`} onClick={onClose}> <item .icon className=`h-4 w-4 mr-3 flex-shrink-0`} /> <span className="flex-1">{item.name}</span> {item.description && ( <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"> {item.description} </span> ) )} </div> )} </Link> ) : ( <button onClick={() => toggleSection(item.name.toLowerCase());" className="w-full flex items-center justify-between px-4 py-2 text-sm text-zion-slate-light hover:text-white hove r:bg-zion-purple/10 transition-colors" >" <div className="flex items-center">" <button onClick={() => toggleSection(item.name.toLowerCase()) )} </div> )} className="w-full flex items-center justify-between px-4 py-2 text-sm text-zion-slate-light hover: text-white hover:bg-zion-purple/10 transition-colors" <button onClick={() =" > toggleSection(item.name.toLowerCase())}" className="w-full flex items-center justify-between px-4 py-2 text-sm text-zion-slate-light hover: text-white hover:bg-zion-purple/10 transition-colors" >" <div className="flex items-center">" <item .icon className="h-4 w-4 mr-3 flex-shrink-0" /" >" <span>{item.name}</span> </div> {expandedSections.includes(item.name.toLowerCase()) ? (" <ChevronDown className="h-4 w-4" /" >" ) : (" <ChevronRight className="h-4 w-4" /" >" <button onClick={() => toggleSection(item.name.toLowerCase()) )} </div> )} className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors" > <div className="flex items-center"> <item .icon className="h-4 w-4 mr-3 flex-shrink-0" /> <span>{item.name}</span> </div> {expandedSections.includes(item.name.toLowerCase()) ? (" <ChevronDown className="h-4 w-4" /> ) : (" <ChevronRight className="h-4 w-4" /> ) )} </div> )} </button> ) )} </div> )} </div> )) )} </div> )} </div> </div> )) )} </div> )} </div> {}" <div className="p-4 border-t border-zion-purple/20">" <div className="text-center">" <p className="text-xs text-zion-slate-light mb-2"> Need help? Contact our support team </p> <Link" to="/contact" className="inline-flex items-center text-xs text-zion-cyan hover:text-white transition-colors" onClick={onClose} >" {}" <div className="p-4 border-t border-zion-purple/20">" <div className="text-center">" <p className="text-xs text-zion-slate-light mb-2"> Need help? Contact our support team </p> <Link to="/contact" className="inline-flex items-center text-xs text-zion-cyan hover: text-white transition-colors" onClick={onClose} > <Link " to="/contact" className="inline-flex items-center text-xs text-zion-cyan hover: text-white transition-colors" onClick={onClose}" >" <MessageCircle className="h-3 w-3 mr-1" /" >" {} <div className="p-4 border-t border-gray-700"> <div className="text-center"> <p className="text-xs text-gray-400 mb-2"> Need help? Contact our support team </p> <Link href="/contact" className="inline-flex items-center text-xs text-blue-400 hover:text-white transition-colors" onClick={onClose}> <MessageCircle className="h-3 w-3 mr-1" />  Get Support </Link> </div> </div> </div>  </> )}  </> )}"`"; </>';'; );';';'}";';';';'}';'; ";';';'; </MessageCircle> </div> </ChevronRight> </ChevronDown> </item> </button> </span> </item> </span> </button> </X> </div> </div> </div>;';';