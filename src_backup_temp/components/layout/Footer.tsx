import React from 'react';
import { Link } from 'react-router-dom';
import {;
  Mail;
  Phone;
  MapPin;
  Globe;
  Linkedin;
  Twitter;
  Github;
  Facebook;
  Instagram;
  Zap;
  Brain;
  Server;
  Shield;
  Users;
  Building2;
  FileText;
  Rocket;
  Target;
  Atom;
  Network;
  Cloud;
  Lock;
  TrendingUp;
  Workflow;
  MessageCircle;
  Calendar;
  PenTool;
  Activity;
  Cpu;
  Wifi;
  Satellite;
  Handshake;
  BookOpen;
  Video;
  GraduationCap;
  Lightbulb;
  Star;
  HelpCircle;
  BarChart3;
  ShoppingCart;
  Heart;
  Factory;
  DollarSign;
  Briefcase;
  Award;
  ExternalLink;
  ArrowUp;
  Sparkles;
  CheckCircle;
  Monitor;
  Headphones;
  Truck;
  Search;
  Layers;
  Database;
  Home;
  Leaf;
} from 'lucide-react';
;
export function Footer("props": "any) {;
  const currentYear = new Date().getFullYear();
;
  const footerSections = [;
    {;
      "title": "Pricing & Plans";
      "icon": DollarSig n;
      "links": [;
        { "name": "Comprehensive Pricing 2025"", "href": "/comprehensive-pricing-guide-2025", "icon": "DollarSig n "}
        { "name": "Pricing Overview", "href": "/pricing", "icon": "BarChart 3 "}
        { "name": "Get Custom Quote", "href": "/contact", "icon": "MessageCircl e "}
      ];
    }
    {;
      "title": "AI & Automation Services";
      "icon": "Brai n;
      "links": [;
        { "name": "AI Business Intelligence"", "href": "/services/ai-business-intelligence-dashboard", "icon": "BarChart 3 "}
        { "name": "AI Customer Support", "href": "/services/ai-customer-support-automation", "icon": "MessageCircl e "}
        { "name": "AI Project Management", "href": "/services/ai-project-management-platform", "icon": "Workflo w "}
        { "name": "Enhanced Services 2025", "href": "/enhanced-services-showcase-2025", "icon": "Sta r "}
        { "name": "AI Marketing Automation", "href": "/services/ai-marketing-automation-platform", "icon": "TrendingU p "}
        { "name": "AI Enterprise Automation", "href": "/services/ai-enterprise-automation-platform", "icon": "Building 2 "}
        { "name": "AI Workflow Orchestrator", "href": "/services/ai-workflow-orchestrator", "icon": "Workflo w "}
        { "name": "AI Financial Trading", "href": "/services/ai-financial-trading-platform", "icon": "TrendingU p "}
        { "name": "AI Healthcare Analytics", "href": "/services/ai-healthcare-analytics-platform", "icon": "Hear t "}
        { "name": "AI Educational Content Creation", "href": "/services/ai-educational-content-creation-platform", "icon": "BookOpe n "}
        { "name": "AI Legal Automation", "href": "/services/ai-legal-document-automation-platform", "icon": "FileTex t "}
        { "name": "AI Legal Research Platform", "href": "/services/ai-autonomous-legal-research-platform", "icon": "FileTex t "}
        { "name": "AI HR Platform", "href": "/services/ai-hr-platform", "icon": "User s "}
        { "name": "AI Real Estate Investment Analytics", "href": "/services/ai-real-estate-investment-analytics-platform", "icon": "Hom e "}
        { "name": "AI Autonomous Logistics", "href": "/services/ai-autonomous-logistics-platform", "icon": "Truc k "}
        { "name": "AI Enterprise Resource Planning", "href": "/services/ai-enterprise-resource-planning", "icon": "Databas e "}
        { "name": "AI Autonomous Manufacturing", "href": "/services/ai-autonomous-manufacturing-platform", "icon": "Factor y "}
        { "name": "AI Quantum Neural Network", "href": "/services/ai-quantum-neural-network-platform", "icon": "Ato m "}
        { "name": "AI Space Technology", "href": "/services/ai-space-technology-platform", "icon": "Satellit e "}
        { "name": "AI Cybersecurity", "href": "/services/ai-cybersecurity-threat-intelligence", "icon": "Shiel d "}
      ];
    }
    {;
      "title": "Quantum Computing";
      "icon": "Ato m;
      "links": [;
        { "name": "Quantum AI Platform"", "href": "/services/quantum-ai-platform", "icon": "Brai n "}
        { "name": "Quantum Trading Platform", "href": "/services/quantum-ai-trading-platform", "icon": "TrendingU p "}
        { "name": "Quantum Computing as a Service", "href": "/services/quantum-computing-as-a-service", "icon": "Clou d "}
        { "name": "Quantum Machine Learning", "href": "/services/quantum-machine-learning", "icon": "Cp u "}
        { "name": "Quantum Edge Computing", "href": "/services/quantum-edge-computing-solutions", "icon": "Networ k "}
      ];
    }
    {;
      "title": "IT Infrastructure";
      "icon": "Serve r;
      "links": [;
        { "name": "Cloud DevOps"", "href": "/services/cloud-devops", "icon": "Clou d "}
        { "name": "IT Infrastructure Management", "href": "/services/it-infrastructure-management", "icon": "Serve r "}
        { "name": "Cybersecurity Solutions", "href": "/services/cybersecurity", "icon": "Shiel d "}
        { "name": "Digital Transformation", "href": "/services/digital-transformation", "icon": "Rocke t "}
        { "name": "Green IT Solutions", "href": "/services/green-it", "icon": "Lea f "}
        { "name": "Space Technology", "href": "/services/space-tech", "icon": "Satellit e "}
      ];
    }
    {;
      "title": "Micro SAAS Solutions";
      "icon": "Building 2;
      "links": [;
        { "name": "Micro CRM"", "href": "/services/micro-crm", "icon": "User s "}
        { "name": "Micro SAAS Platform", "href": "/services/micro-saas-solutions", "icon": "Building 2 "}
        { "name": "Micro SAAS Solutions Comprehensive", "href": "/services/micro-saas-solutions-comprehensive", "icon": "Layer s "}
        { "name": "Micro SAAS Innovation Hub", "href": "/micro-saas-innovation-hub-2029", "icon": "Sparkle s "}
      ];
    }
  ];
;
  const quickLinks = [;
    { "name": "About Us", "href": "/about", "icon": "Building 2 "}
    { "name": "Services", "href": "/services", "icon": "Serve r "}
    { "name": "Pricing", "href": "/pricing", "icon": "DollarSig n "}
    { "name": "Contact", "href": "/contact", "icon": "MessageCircl e "}
    { "name": "Careers", "href": "/careers", "icon": "Briefcas e "}
    { "name": "Blog", "href": "/blog", "icon": "FileTex t "}
    { "name": "Support", "href": "/help-center", "icon": "HelpCircl e "}
    { "name": "Documentation", "href": "/documentation", "icon": "BookOpe n "}
  ];
;
  const contactInfo = [;
    {;
      "icon": "Phon e;
      "text": "+1 302 464 0950";
      "href": ""tel":+13024640950";
    "}
    {;
      "icon": "Mai l;
      "text": "kleber@ziontechgroup.com";
      "href": ""mailto": klebe r@ziontechgroup.com";
    "}
    {;
      "icon": "MapPi n;
      "text": "364 E Main St STE 1008 Middletown DE 19709";
      "href": ""https"://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709";
    "}
  ];
;
  const socialLinks = [;
    { "name": "LinkedIn", "href": ""https": "//linkedin.com/company/ziontechgroup"", "icon": "Linkedi n "}
    { "name": "Twitter", "href": ""https": "//twitter.com/ziontechgroup"", "icon": "Twitte r "}
    { "name": "GitHub", "href": ""https": "//github.com/ziontechgroup"", "icon": "Githu b "}
    { "name": "Facebook", "href": ""https": "//facebook.com/ziontechgroup"", "icon": "Faceboo k "}
    { "name": "Instagram", "href": ""https": "//instagram.com/ziontechgroup"", "icon": "Instagra m "}
  ];
;
  return (;
    <footer className="bg-zion-slate-darker border-t border-zion-purple/20">;
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 "sm": "p x-6 "lg": p x-8 py-12">;
        <div className="grid grid-cols-1 "md": gri d-cols-2 "lg": gri d-cols-4 gap-8">;
          {/* Company Info */"}
          <div className="space-y-4">;
            <div className="flex items-center space-x-2">;
              <Zap className="h-8 w-8 text-zion-purple"  />;
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>;
            </div>;
            <p className="text-gray-300 text-sm leading-relaxed">;
              Leading the future of technology with cutting-edge AI solutions, quantum computing, and innovative micro SAAS services.;
            </p>;
            <div className="flex space-x-4">;
              {socialLinks.map((social) => (;
                <a;
                  key={social.name}
                  href={social.href}
                  target="_blank";
                  rel="noopener noreferrer";
                  className="text-gray-400 "hover": "tex t-zion-purple transition-colors";
                >;
                  <social.icon className="h-5 w-5" />;
                </a>;
              ))"}
            </div>;
          </div>;
          {/* Quick Links */}
          <div className="space-y-4">;
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">;
              <Target className="h-5 w-5 text-zion-purple"  />;
              <span>Quick Links</span>;
            </h3>;
            <ul className="space-y-2">;
              {quickLinks.map((link) => (;
                <li key={link.name}>;
                  <Link;
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Target className="h-5 w-5 text-zion-purple"  />
              <span>Quick Links</span>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 "hover": "tex t-zion-purple transition-colors text-sm flex items-center space-x-2 group";
                  >;
                    <link .icon className="h-4 w-4 group-"hover": tex t-zion-purple"  />;
                    <span>{link.name"}</span>;
                  </Link>;
                </li>;
              ));
      )}
    </div>;
  );
    </div>
    );
}
            </ul>;
          </div>;
          {/* Contact Information */}
          <div className="space-y-4">;
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">;
              <MessageCircle className="h-5 w-5 text-zion-purple"  />;
              <span>Contact Us</span>;
            </h3>;
            <div className="space-y-3">;
              {contactInfo.map((contact, index) => (;
                <a;
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <MessageCircle className="h-5 w-5 text-zion-purple"  />
              <span>Contact Us</span>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="text-gray-300 "hover": "tex t-zion-purple transition-colors text-sm flex items-start space-x-2 group";
                >;
                  <contact.icon className="h-4 w-4 mt-0.5 group-"hover": tex t-zion-purple flex-shrink-0" />;
                  <span className="leading-relaxed">{contact.text"}</span>;
                </a>;
              ))}
            </div>;
          </div>;
          {/* Newsletter */}
          <div className="space-y-4">;
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">;
              <Mail className="h-5 w-5 text-zion-purple"  />;
              <span>Stay Updated</span>;
            </h3>;
            <p className="text-gray-300 text-sm">;
              Get the latest updates on our innovative services and technology solutions.;
            </p>;
            <div className="flex space-x-2">;
              <input type="email";
                placeholder="Enter your email";
                className="flex-1 px-3 py-2 bg-zion-slate border border-zion-slate-light rounded-lg text-white placeholder-gray-400 "focus": "outlin e-none "focus": rin g-2 "focus": rin g-zion-purple "focus": borde r-transparent";
                />;
              <button className="px-4 py-2 bg-zion-purple "hover": b g-zion-purple-dark text-white rounded-lg transition-colors">;
                Subscribe;
              </button>;
            </div>;
          </div>;
        </div>;
        {/* Service Categories */"}
        <div className="mt-12 pt-8 border-t border-zion-slate">;
          <h3 className="text-xl font-semibold text-white text-center mb-8">;
            Our Comprehensive Service Portfolio;
          </h3>;
          <div className="grid grid-cols-1 "md": "gri d-cols-2 "lg": gri d-cols-4 gap-6">;
            {footerSections.map((section) => (;
              <div key={section.title"} className="space-y-4">;
                <h4 className="text-lg font-semibold text-white flex items-center space-x-2">;
                  <section.icon className="h-5 w-5 text-zion-purple" />;
                  <span>{section.title}</span>;
                </h4>;
                <ul className="space-y-2">;
                  {section.links.slice(0, 5).map((link) => (;
                    <li key={link.name}>;
                      <Link;
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Mail className="h-5 w-5 text-zion-purple"  />
              <span>Stay Updated</span>
            <p className="text-gray-300 text-sm">
              Get the latest updates on our innovative services and technology solutions.
            </p>
            <div className="flex space-x-2">
              <input type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-zion-slate border border-zion-slate-light rounded-lg text-white placeholder-gray-400 focus: outlin e-none focus: rin g-2 focus: rin g-zion-purple focus: borde r-transparent"
                />
              <button className="px-4 py-2 bg-zion-purple hover: b g-zion-purple-dark text-white rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* Service Categories */}
        <div className="mt-12 pt-8 border-t border-zion-slate">
          <h3 className="text-xl font-semibold text-white text-center mb-8">
            Our Comprehensive Service Portfolio
          <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-6">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                  <section.icon className="h-5 w-5 text-zion-purple" />
                  <span>{section.title}</span>
                </h4>
                <ul className="space-y-2">
                  {section.links.slice(0, 5).map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-300 "hover": "tex t-zion-purple transition-colors text-sm flex items-center space-x-2 group";
                      >;
                        <link .icon className="h-4 w-4 group-"hover": tex t-zion-purple"  />;
                        <span>{link.name"}</span>;
                      </Link>;
                    </li>;
                  ))}
                </ul>;
              </div>;
            ))}
          </div>;
        </div>;
      </div>;
      {/* Bottom Footer */}
      <div className="bg-zion-slate-darkest border-t border-zion-slate">;
        <div className="container mx-auto px-4 "sm": "p x-6 "lg": p x-8 py-6">;
          <div className="flex flex-col "md": fle x-row justify-between items-center space-y-4 "md": spac e-y-0">;
            <div className="flex items-center space-x-4 text-sm text-gray-400">;
              <span>&copy {currentYear"} Zion Tech Group. All rights reserved.</span>;
              <span>•</span>;
              <Link to="/privacy" className=""hover": "tex t-zion-purple transition-colors">;
                Privacy Policy;
              </Link>;
              <span>•</span>;
              <Link to="/terms" className=""hover": tex t-zion-purple transition-colors">;
                Terms of Service;
              </Link>;
            </div>;
            ;
            <div className="flex items-center space-x-4">;
              <span className="text-sm text-gray-400">Powered by</span>;
              <div className="flex items-center space-x-2">;
                <Brain className="h-5 w-5 text-zion-purple"  />;
                <span className="text-sm font-semibold text-white">AI Technology</span>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Back to Top Button */"}
      <button;
        onClick={() => window.scrollTo({ "top": "0", "behavior": 'smooth' })}
        className="fixed bottom-6 right-6 bg-zion-purple "hover": "b g-zion-purple-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 "hover": scal e-110";
        aria-label="Back to top";
      >;
        <ArrowUp className="h-5 w-5"  />;
      </button>;
    </footer>;
  );
"}
}
import React from &apos;react&apos;; import { Link } from &apos;react-router-dom&apos;; import { Mail,Phone,MapPin,Globe,Linkedin,Twitter,Github,Facebook,Instagram,Zap,Brain,Server,Shield,Users,Building2,FileText,Rocket,Target,Atom,Network,Cloud,Lock,TrendingUp,Workflow,MessageCircle,Calendar,PenTool,Activity,Cpu,Wifi,Satellite,Handshake,BookOpen,Video,GraduationCap,Lightbulb,Star,HelpCircle,BarChart3,ShoppingCart,Heart,Factory,DollarSign,Briefcase,Award,ExternalLink,ArrowUp,Sparkles,CheckCircle,Monitor,Headphones,Truck,Search,Layers,Database,Home,Leaf&apos;;&apos;} from &apos;lucide-react&apos;; export function Footer($1) { const currentYear = new Date().getFullYear(); const footerSections = [ { title: &quot;Pricing & Plans&quot;,icon: DollarSig n,links: [ { name: &quot;Comprehensive Pricing 2025&quot;,href: &quot;/comprehensive-pricing-guide-2025&quot;,icon: DollarSig n },{ name: &quot;Pricing Overview&quot;,href: &quot;/pricing&quot;,icon: BarChart 3 },{ name: &quot;Get Custom Quote&quot;,href: &quot;/contact&quot;,icon: MessageCircl e },] },{ title: &quot;AI & Automation Services&quot;,icon: Brai n,links: [ { name: &quot;AI Business Intelligence&quot;,href: &quot;/services/ai-business-intelligence-dashboard&quot;,icon: BarChart 3 },{ name: &quot;AI Customer Support&quot;,href: &quot;/services/ai-customer-support-automation&quot;,icon: MessageCircl e },{ name: &quot;AI Project Management&quot;,href: &quot;/services/ai-project-management-platform&quot;,icon: Workflo w },{ name: &quot;Enhanced Services 2025&quot;,href: &quot;/enhanced-services-showcase-2025&quot;,icon: Sta r },{ name: &quot;AI Marketing Automation&quot;,href: &quot;/services/ai-marketing-automation-platform&quot;,icon: TrendingU p },{ name: &quot;AI Enterprise Automation&quot;,href: &quot;/services/ai-enterprise-automation-platform&quot;,icon: Building 2 },{ name: &quot;AI Workflow Orchestrator&quot;,href: &quot;/services/ai-workflow-orchestrator&quot;,icon: Workflo w },{ name: &quot;AI Financial Trading&quot;,href: &quot;/services/ai-financial-trading-platform&quot;,icon: TrendingU p },{ name: &quot;AI Healthcare Analytics&quot;,href: &quot;/services/ai-healthcare-analytics-platform&quot;,icon: Hear t },{ name: &quot;AI Educational Content Creation&quot;,href: &quot;/services/ai-educational-content-creation-platform&quot;,icon: BookOpe n },{ name: &quot;AI Legal Automation&quot;,href: &quot;/services/ai-legal-document-automation-platform&quot;,icon: FileTex t },{ name: &quot;AI Legal Research Platform&quot;,href: &quot;/services/ai-autonomous-legal-research-platform&quot;,icon: FileTex t },{ name: &quot;AI HR Platform&quot;,href: &quot;/services/ai-hr-platform&quot;,icon: User s },{ name: &quot;AI Real Estate Investment Analytics&quot;,href: &quot;/services/ai-real-estate-investment-analytics-platform&quot;,icon: Hom e },{ name: &quot;AI Autonomous Logistics&quot;,href: &quot;/services/ai-autonomous-logistics-platform&quot;,icon: Truc k },{ name: &quot;AI Enterprise Resource Planning&quot;,href: &quot;/services/ai-enterprise-resource-planning&quot;,icon: Databas e },{ name: &quot;AI Autonomous Manufacturing&quot;,href: &quot;/services/ai-autonomous-manufacturing-platform&quot;,icon: Factor y },{ name: &quot;AI Quantum Neural Network&quot;,href: &quot;/services/ai-quantum-neural-network-platform&quot;,icon: Ato m },{ name: &quot;AI Space Technology&quot;,href: &quot;/services/ai-space-technology-platform&quot;,icon: Satellit e },{ name: &quot;AI Cybersecurity&quot;,href: &quot;/services/ai-cybersecurity-threat-intelligence&quot;,icon: Shiel d } ] },{ title: &quot;Quantum Computing&quot;,icon: Ato m,links: [ { name: &quot;Quantum AI Platform&quot;,href: &quot;/services/quantum-ai-platform&quot;,icon: Brai n },{ name: &quot;Quantum Trading Platform&quot;,href: &quot;/services/quantum-ai-trading-platform&quot;,icon: TrendingU p },{ name: &quot;Quantum Computing as a Service&quot;,href: &quot;/services/quantum-computing-as-a-service&quot;,icon: Clou d },{ name: &quot;Quantum Machine Learning&quot;,href: &quot;/services/quantum-machine-learning&quot;,icon: Cp u },{ name: &quot;Quantum Edge Computing&quot;,href: &quot;/services/quantum-edge-computing-solutions&quot;,icon: Networ k } ] },{ title: &quot;IT Infrastructure&quot;,icon: Serve r,links: [ { name: &quot;Cloud DevOps&quot;,href: &quot;/services/cloud-devops&quot;,icon: Clou d },{ name: &quot;IT Infrastructure Management&quot;,href: &quot;/services/it-infrastructure-management&quot;,icon: Serve r },{ name: &quot;Cybersecurity Solutions&quot;,href: &quot;/services/cybersecurity&quot;,icon: Shiel d },{ name: &quot;Digital Transformation&quot;,href: &quot;/services/digital-transformation&quot;,icon: Rocke t },{ name: &quot;Green IT Solutions&quot;,href: &quot;/services/green-it&quot;,icon: Lea f },{ name: &quot;Space Technology&quot;,href: &quot;/services/space-tech&quot;,icon: Satellit e } ] },{ title: &quot;Micro SAAS Solutions&quot;,icon: Building 2,links: [ { name: &quot;Micro CRM&quot;,href: &quot;/services/micro-crm&quot;,icon: User s },{ name: &quot;Micro SAAS Platform&quot;,href: &quot;/services/micro-saas-solutions&quot;,icon: Building 2 },{ name: &quot;Micro SAAS Solutions Comprehensive&quot;,href: &quot;/services/micro-saas-solutions-comprehensive&quot;,icon: Layer s },{ name: &quot;Micro SAAS Innovation Hub&quot;,href: &quot;/micro-saas-innovation-hub-2029&quot;,icon: Sparkle s } ] }; ]; const quickLinks = [ { name: &quot;About Us&quot;,href: &quot;/about&quot;,icon: Building 2 },{ name: &quot;Services&quot;,href: &quot;/services&quot;,icon: Serve r },{ name: &quot;Pricing&quot;,href: &quot;/pricing&quot;,icon: DollarSig n },{ name: &quot;Contact&quot;,href: &quot;/contact&quot;,icon: MessageCircl e },{ name: &quot;Careers&quot;,href: &quot;/careers&quot;,icon: Briefcas e },{ name: &quot;Blog&quot;,href: &quot;/blog&quot;,icon: FileTex t },{ name: &quot;Support&quot;,href: &quot;/help-center&quot;,icon: HelpCircl e },{ name: &quot;Documentation&quot;,href: &quot;/documentation&quot;,icon: BookOpe n }; ]; const contactInfo = [ { icon: Phon e,text: &quot;+1 302 464 0950&quot;,href: &quot;tel:+13024640950&quot; },{ icon: Mai l,text: &quot;kleber@ziontechgroup.com&quot;,href: &quot;mailto: klebe r@ziontechgroup.com&quot; },{ icon: MapPi n,text: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;,href: &quot;https: }; ]; const socialLinks = [ { name: &quot;LinkedIn&quot;,href: &quot;https: { name: &quot;Twitter&quot;,href: &quot;https: { name: &quot;GitHub&quot;,href: &quot;https: { name: &quot;Facebook&quot;,href: &quot;https: { name: &quot;Instagram&quot;,href: &quot;https: ]; return ( <footer className=&quot;bg-zion-slate-darker border-t border-zion-purple/20&quot;> {} <div className=&quot;container mx-auto px-4 sm: p x-6 lg: p x-8 py-12&quot;> <div className=&quot;grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8&quot;> {} <div className=&quot;space-y-4&quot;> <div className=&quot;flex items-center space-x-2&quot;> <Zap className=&quot;h-8 w-8 text-zion-purple&quot; /> <span className=&quot;text-2xl font-bold text-white&quot;>Zion Tech Group</span> </div> <p className=&quot;text-gray-300 text-sm leading-relaxed&quot;> Leading the future of technology with cutting-edge AI solutions,quantum computing,and innovative micro SAAS services. </p> <div className=&quot;flex space-x-4&quot;> {socialLinks.map((social) => ( <a key={social.name} href={social.href} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;text-gray-400 hover: tex t-zion-purple transition-colors&quot; > <social.icon className=&quot;h-5 w-5&quot; /> </a> ))} </div> </div> {} <div className=&quot;space-y-4&quot;> <h3 className=&quot;text-lg font-semibold text-white flex items-center space-x-2&quot;> <Target className=&quot;h-5 w-5 text-zion-purple&quot; /> <span>Quick Links</span> </h3> <ul className=&quot;space-y-2&quot;> {quickLinks.map((link) => ( <li key={link.name}> <Link to={link.href} className=&quot;text-gray-300 hover: tex t-zion-purple transition-colors text-sm flex items-center space-x-2 group&quot; > <link .icon className=&quot;h-4 w-4 group-hover: tex t-zion-purple&quot; /> <span>{link.name}</span> </Link> </li> )) )} </div> )} </ul> </div> {} <div className=&quot;space-y-4&quot;> <h3 className=&quot;text-lg font-semibold text-white flex items-center space-x-2&quot;> <MessageCircle className=&quot;h-5 w-5 text-zion-purple&quot; /> <span>Contact Us</span> </h3> <div className=&quot;space-y-3&quot;> {contactInfo.map((contact,index) => ( <a key={index} href={contact.href} target={contact.href.startsWith(&apos;http&apos;) ? &apos;_blank&apos; : &apos;_self&apos;} rel={contact.href.startsWith(&apos;http&apos;) ? &apos;noopener noreferrer&apos; : &quot;} className=&quot;text-gray-300 hover: tex t-zion-purple transition-colors text-sm flex items-start space-x-2 group&quot; > <contact.icon className=&quot;h-4 w-4 mt-0.5 group-hover: tex t-zion-purple flex-shrink-0&quot; /> <span className=&quot;leading-relaxed&quot;>{contact.text}</span> </a> ))} </div> </div> {} <div className=&quot;space-y-4&quot;> <h3 className=&quot;text-lg font-semibold text-white flex items-center space-x-2&quot;> <Mail className=&quot;h-5 w-5 text-zion-purple&quot; /> <span>Stay Updated</span> </h3> <p className=&quot;text-gray-300 text-sm&quot;> Get the latest updates on our innovative services and technology solutions. </p> <div className=&quot;flex space-x-2&quot;> <input type=&quot;email&quot; placeholder=&quot;Enter your email&quot; className=&quot;flex-1 px-3 py-2 bg-zion-slate border border-zion-slate-light rounded-lg text-white placeholder-gray-400 focus: outlin e-none focus: rin g-2 focus: rin g-zion-purple focus: borde r-transparent&quot; /> <button className=&quot;px-4 py-2 bg-zion-purple hover: b g-zion-purple-dark text-white rounded-lg transition-colors&quot;> Subscribe </button> </div> </div> </div> {} <div className=&quot;mt-12 pt-8 border-t border-zion-slate&quot;> <h3 className=&quot;text-xl font-semibold text-white text-center mb-8&quot;> Our Comprehensive Service Portfolio </h3> <div className=&quot;grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-6&quot;> {footerSections.map((section) => ( <div key={section.title} className=&quot;space-y-4&quot;> <h4 className=&quot;text-lg font-semibold text-white flex items-center space-x-2&quot;> <section.icon className=&quot;h-5 w-5 text-zion-purple&quot; /> <span>{section.title}</span> </h4> <ul className=&quot;space-y-2&quot;> {section.links.slice(0,5).map((link) => ( <li key={link.name}> <Link to={link.href} className=&quot;text-gray-300 hover: tex t-zion-purple transition-colors text-sm flex items-center space-x-2 group&quot; > <link .icon className=&quot;h-4 w-4 group-hover: tex t-zion-purple&quot; /> <span>{link.name}</span> </Link> </li> ))} </ul> </div> ))} </div> </div> </div> {} <div className=&quot;bg-zion-slate-darkest border-t border-zion-slate&quot;> <div className=&quot;container mx-auto px-4 sm: p x-6 lg: p x-8 py-6&quot;> <div className=&quot;flex flex-col md: fle x-row justify-between items-center space-y-4 md: spac e-y-0&quot;> <div className=&quot;flex items-center space-x-4 text-sm text-gray-400&quot;> <span>&copy {currentYear} Zion Tech Group. All rights reserved.</span> <span>•</span> <Link to=&quot;/privacy&quot; className=&quot;hover: tex t-zion-purple transition-colors&quot;> Privacy Policy </Link> <span>•</span> <Link to=&quot;/terms&quot; className=&quot;hover: tex t-zion-purple transition-colors&quot;> Terms of Service </Link> </div> <div className=&quot;flex items-center space-x-4&quot;> <span className=&quot;text-sm text-gray-400&quot;>Powered by</span> <div className=&quot;flex items-center space-x-2&quot;> <Brain className=&quot;h-5 w-5 text-zion-purple&quot; /> <span className=&quot;text-sm font-semibold text-white&quot;>AI Technology</span> </div> </div> </div> </div> </div> {} <button&apos;;&apos;; onClick={() => window.scrollTo({ top: 0,behavior: &apos;smooth&apos; })} className=&quot;fixed bottom-6 right-6 bg-zion-purple hover: b g-zion-purple-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 hover: scal e-110&quot; aria-label=&quot;Back to top&quot; > <ArrowUp className=&quot;h-5 w-5&quot; /> </button> </footer> )} ;&apos;;&apos;;
const React from "react"; import { Link } from "react-router-dom"; import { Mail,Phone,MapPin,Globe,Linkedin,Twitter,Github,Facebook,Instagram,Zap,Brain,Server,Shield,Users,Building2,FileText,Rocket,Target,Atom,Network,Cloud,Lock,TrendingUp,Workflow,MessageCircle,Calendar,PenTool,Activity,Cpu,Wifi,Satellite,Handshake,BookOpen,Video,GraduationCap,Lightbulb,Star,HelpCircle,BarChart3,ShoppingCart,Heart,Factory,DollarSign,Briefcase,Award,ExternalLink,ArrowUp,Sparkles,CheckCircle,Monitor,Headphones,Truck,Search,Layers,Database,Home,Leaf";"} from "lucide-react"; export function Footer($1) { const currentYear = new Date().getFullYear(); const footerSections = [ { title: "Pricing & Plans",icon: DollarSig n,links: [ { name: "Comprehensive Pricing 2025",href: "/comprehensive-pricing-guide-2025",icon: DollarSig n },{ name: "Pricing Overview",href: "/pricing",icon: BarChart 3 },{ name: "Get Custom Quote",href: "/contact",icon: MessageCircl e },] },{ title: "AI & Automation Services",icon: Brai n,links: [ { name: "AI Business Intelligence",href: "/services/ai-business-intelligence-dashboard",icon: BarChart 3 },{ name: "AI Customer Support",href: "/services/ai-customer-support-automation",icon: MessageCircl e },{ name: "AI Project Management",href: "/services/ai-project-management-platform",icon: Workflo w },{ name: "Enhanced Services 2025",href: "/enhanced-services-showcase-2025",icon: Sta r },{ name: "AI Marketing Automation",href: "/services/ai-marketing-automation-platform",icon: TrendingU p },{ name: "AI Enterprise Automation",href: "/services/ai-enterprise-automation-platform",icon: Building 2 },{ name: "AI Workflow Orchestrator",href: "/services/ai-workflow-orchestrator",icon: Workflo w },{ name: "AI Financial Trading",href: "/services/ai-financial-trading-platform",icon: TrendingU p },{ name: "AI Healthcare Analytics",href: "/services/ai-healthcare-analytics-platform",icon: Hear t },{ name: "AI Educational Content Creation",href: "/services/ai-educational-content-creation-platform",icon: BookOpe n },{ name: "AI Legal Automation",href: "/services/ai-legal-document-automation-platform",icon: FileTex t },{ name: "AI Legal Research Platform",href: "/services/ai-autonomous-legal-research-platform",icon: FileTex t },{ name: "AI HR Platform",href: "/services/ai-hr-platform",icon: User s },{ name: "AI Real Estate Investment Analytics",href: "/services/ai-real-estate-investment-analytics-platform",icon: Hom e },{ name: "AI Autonomous Logistics",href: "/services/ai-autonomous-logistics-platform",icon: Truc k },{ name: "AI Enterprise Resource Planning",href: "/services/ai-enterprise-resource-planning",icon: Databas e },{ name: "AI Autonomous Manufacturing",href: "/services/ai-autonomous-manufacturing-platform",icon: Factor y },{ name: "AI Quantum Neural Network",href: "/services/ai-quantum-neural-network-platform",icon: Ato m },{ name: "AI Space Technology",href: "/services/ai-space-technology-platform",icon: Satellit e },{ name: "AI Cybersecurity",href: "/services/ai-cybersecurity-threat-intelligence",icon: Shiel d } ] },{ title: "Quantum Computing",icon: Ato m,links: [ { name: "Quantum AI Platform",href: "/services/quantum-ai-platform",icon: Brai n },{ name: "Quantum Trading Platform",href: "/services/quantum-ai-trading-platform",icon: TrendingU p },{ name: "Quantum Computing as a Service",href: "/services/quantum-computing-as-a-service",icon: Clou d },{ name: "Quantum Machine Learning",href: "/services/quantum-machine-learning",icon: Cp u },{ name: "Quantum Edge Computing",href: "/services/quantum-edge-computing-solutions",icon: Networ k } ] },{ title: "IT Infrastructure",icon: Serve r,links: [ { name: "Cloud DevOps",href: "/services/cloud-devops",icon: Clou d },{ name: "IT Infrastructure Management",href: "/services/it-infrastructure-management",icon: Serve r },{ name: "Cybersecurity Solutions",href: "/services/cybersecurity",icon: Shiel d },{ name: "Digital Transformation",href: "/services/digital-transformation",icon: Rocke t },{ name: "Green IT Solutions",href: "/services/green-it",icon: Lea f },{ name: "Space Technology",href: "/services/space-tech",icon: Satellit e } ] },{ title: "Micro SAAS Solutions",icon: Building 2,links: [ { name: "Micro CRM",href: "/services/micro-crm",icon: User s },{ name: "Micro SAAS Platform",href: "/services/micro-saas-solutions",icon: Building 2 },{ name: "Micro SAAS Solutions Comprehensive",href: "/services/micro-saas-solutions-comprehensive",icon: Layer s },{ name: "Micro SAAS Innovation Hub",href: "/micro-saas-innovation-hub-2029",icon: Sparkle s } ] }; ]; const quickLinks = [ { name: "About Us",href: "/about",icon: Building 2 },{ name: "Services",href: "/services",icon: Serve r },{ name: "Pricing",href: "/pricing",icon: DollarSig n },{ name: "Contact",href: "/contact",icon: MessageCircl e },{ name: "Careers",href: "/careers",icon: Briefcas e },{ name: "Blog",href: "/blog",icon: FileTex t },{ name: "Support",href: "/help-center",icon: HelpCircl e },{ name: "Documentation",href: "/documentation",icon: BookOpe n }; ]; const contactInfo = [ { icon: Phon e,text: "+1 302 464 0950",href: "tel:+13024640950" },{ icon: Mai l,text: "kleber@ziontechgroup.com",href: "mailto: klebe r@ziontechgroup.com" },{ icon: MapPi n,text: "364 E Main St STE 1008 Middletown DE 19709",href: "https: }; ]; const socialLinks = [ { name: "LinkedIn",href: "https: { name: "Twitter",href: "https: { name: "GitHub",href: "https: { name: "Facebook",href: "https: { name: "Instagram",href: "https: ]; return ( <footer className="bg-zion-slate-darker border-t border-zion-purple/20"> {} <div className="container mx-auto px-4 sm: p x-6 lg: p x-8 py-12"> <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8"> {} <div className="space-y-4"> <div className="flex items-center space-x-2"> <Zap className="h-8 w-8 text-zion-purple" /> <span className="text-2xl font-bold text-white">Zion Tech Group</span> </div> <p className="text-gray-300 text-sm leading-relaxed"> Leading the future of technology with cutting-edge AI solutions,quantum computing,and innovative micro SAAS services. </p> <div className="flex space-x-4"> {socialLinks.map((social) => ( <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover: tex t-zion-purple transition-colors" > <social.icon className="h-5 w-5" /> </a> ))} </div> </div> {} <div className="space-y-4"> <h3 className="text-lg font-semibold text-white flex items-center space-x-2"> <Target className="h-5 w-5 text-zion-purple" /> <span>Quick Links</span> </h3> <ul className="space-y-2"> {quickLinks.map((link) => ( <li key={link.name}> <Link to={link.href} className="text-gray-300 hover: tex t-zion-purple transition-colors text-sm flex items-center space-x-2 group" > <link .icon className="h-4 w-4 group-hover: tex t-zion-purple" /> <span>{link.name}</span> </Link> </li> )) )} </div> )} </ul> </div> {} <div className="space-y-4"> <h3 className="text-lg font-semibold text-white flex items-center space-x-2"> <MessageCircle className="h-5 w-5 text-zion-purple" /> <span>Contact Us</span> </h3> <div className="space-y-3"> {contactInfo.map((contact,index) => ( <a key={index} href={contact.href} target={contact.href.startsWith("http") ? "_blank" : "_self"} rel={contact.href.startsWith("http") ? "noopener noreferrer" : "} className="text-gray-300 hover: tex t-zion-purple transition-colors text-sm flex items-start space-x-2 group" > <contact.icon className="h-4 w-4 mt-0.5 group-hover: tex t-zion-purple flex-shrink-0" /> <span className="leading-relaxed">{contact.text}</span> </a> ))} </div> </div> {} <div className="space-y-4"> <h3 className="text-lg font-semibold text-white flex items-center space-x-2"> <Mail className="h-5 w-5 text-zion-purple" /> <span>Stay Updated</span> </h3> <p className="text-gray-300 text-sm"> Get the latest updates on our innovative services and technology solutions. </p> <div className="flex space-x-2"> <input type="email" placeholder="Enter your email" className="flex-1 px-3 py-2 bg-zion-slate border border-zion-slate-light rounded-lg text-white placeholder-gray-400 focus: outlin e-none focus: rin g-2 focus: rin g-zion-purple focus: borde r-transparent" /> <button className="px-4 py-2 bg-zion-purple hover: b g-zion-purple-dark text-white rounded-lg transition-colors"> Subscribe </button> </div> </div> </div> {} <div className="mt-12 pt-8 border-t border-zion-slate"> <h3 className="text-xl font-semibold text-white text-center mb-8"> Our Comprehensive Service Portfolio </h3> <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-6"> {footerSections.map((section) => ( <div key={section.title} className="space-y-4"> <h4 className="text-lg font-semibold text-white flex items-center space-x-2"> <section.icon className="h-5 w-5 text-zion-purple" /> <span>{section.title}</span> </h4> <ul className="space-y-2"> {section.links.slice(0,5).map((link) => ( <li key={link.name}> <Link to={link.href} className="text-gray-300 hover: tex t-zion-purple transition-colors text-sm flex items-center space-x-2 group" > <link .icon className="h-4 w-4 group-hover: tex t-zion-purple" /> <span>{link.name}</span> </Link> </li> ))} </ul> </div> ))} </div> </div> </div> {} <div className="bg-zion-slate-darkest border-t border-zion-slate"> <div className="container mx-auto px-4 sm: p x-6 lg: p x-8 py-6"> <div className="flex flex-col md: fle x-row justify-between items-center space-y-4 md: spac e-y-0"> <div className="flex items-center space-x-4 text-sm text-gray-400"> <span>&copy {currentYear} Zion Tech Group. All rights reserved.</span> <span></span> <Link to="/privacy" className="hover: tex t-zion-purple transition-colors"> Privacy Policy </Link> <span></span> <Link to="/terms" className="hover: tex t-zion-purple transition-colors"> Terms of Service </Link> </div> <div className="flex items-center space-x-4"> <span className="text-sm text-gray-400">Powered by</span> <div className="flex items-center space-x-2"> <Brain className="h-5 w-5 text-zion-purple" /> <span className="text-sm font-semibold text-white">AI Technology</span> </div> </div> </div> </div> </div> {} <button";"; onClick={() => window.scrollTo({ top: 0,behavior: "smooth" })} className="fixed bottom-6 right-6 bg-zion-purple hover: b g-zion-purple-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 hover: scal e-110" aria-label="Back to top" > <ArrowUp className="h-5 w-5" /> </button> </footer> )} ;";";'"'"
import _React from 'react'; import { Link } from 'react-router-dom'; import { Mail,Phone,MapPin,Globe,Linkedin,Twitter,Github,Facebook,Instagram,Zap,Brain,Server,Shield,Users,Building2,FileText,Rocket,Target,Atom,Network,Cloud,Lock,TrendingUp,Workflow,MessageCircle,Calendar,PenTool,Activity,Cpu,Wifi,Satellite,Handshake,BookOpen,Video,GraduationCap,Lightbulb,Star,HelpCircle,BarChart3,ShoppingCart,Heart,Factory,DollarSign,Briefcase,Award,ExternalLink,ArrowUp,Sparkles,CheckCircle,Monitor,Headphones,Truck,Search,Layers,Database,Home,Leaf';'} from 'lucide-react'; export function Footer(_) { const currentYear = new Date().getFullYear(); const footerSections = [ { title: "Pricing & Plans",icon: DollarSig n,links: [ { name: "Comprehensive Pricing 2025",href: "/comprehensive-pricing-guide-2025",icon: DollarSig n },{ name: "Pricing Overview",href: "/pricing",icon: BarChart 3 },{ name: "Get Custom Quote",href: "/contact",icon: MessageCircl e },] },{ title: "AI & Automation Services",icon: Brai n,links: [ { name: "AI Business Intelligence",href: "/services/ai-business-intelligence-dashboard",icon: BarChart 3 },{ name: "AI Customer Support",href: "/services/ai-customer-support-automation",icon: MessageCircl e },{ name: "AI Project Management",href: "/services/ai-project-management-platform",icon: Workflo w },{ name: "Enhanced Services 2025",href: "/enhanced-services-showcase-2025",icon: Sta r },{ name: "AI Marketing Automation",href: "/services/ai-marketing-automation-platform",icon: TrendingU p },{ name: "AI Enterprise Automation",href: "/services/ai-enterprise-automation-platform",icon: Building 2 },{ name: "AI Workflow Orchestrator",href: "/services/ai-workflow-orchestrator",icon: Workflo w },{ name: "AI Financial Trading",href: "/services/ai-financial-trading-platform",icon: TrendingU p },{ name: "AI Healthcare Analytics",href: "/services/ai-healthcare-analytics-platform",icon: Hear t },{ name: "AI Educational Content Creation",href: "/services/ai-educational-content-creation-platform",icon: BookOpe n },{ name: "AI Legal Automation",href: "/services/ai-legal-document-automation-platform",icon: FileTex t },{ name: "AI Legal Research Platform",href: "/services/ai-autonomous-legal-research-platform",icon: FileTex t },{ name: "AI HR Platform",href: "/services/ai-hr-platform",icon: User s },{ name: "AI Real Estate Investment Analytics",href: "/services/ai-real-estate-investment-analytics-platform",icon: Hom e },{ name: "AI Autonomous Logistics",href: "/services/ai-autonomous-logistics-platform",icon: Truc k },{ name: "AI Enterprise Resource Planning",href: "/services/ai-enterprise-resource-planning",icon: Databas e },{ name: "AI Autonomous Manufacturing",href: "/services/ai-autonomous-manufacturing-platform",icon: Factor y },{ name: "AI Quantum Neural Network",href: "/services/ai-quantum-neural-network-platform",icon: Ato m },{ name: "AI Space Technology",href: "/services/ai-space-technology-platform",icon: Satellit e },{ name: "AI Cybersecurity",href: "/services/ai-cybersecurity-threat-intelligence",icon: Shiel d } ] },{ title: "Quantum Computing",icon: Ato m,links: [ { name: "Quantum AI Platform",href: "/services/quantum-ai-platform",icon: Brai n },{ name: "Quantum Trading Platform",href: "/services/quantum-ai-trading-platform",icon: TrendingU p },{ name: "Quantum Computing as a Service",href: "/services/quantum-computing-as-a-service",icon: Clou d },{ name: "Quantum Machine Learning",href: "/services/quantum-machine-learning",icon: Cp u },{ name: "Quantum Edge Computing",href: "/services/quantum-edge-computing-solutions",icon: Networ k } ] },{ title: "IT Infrastructure",icon: Serve r,links: [ { name: "Cloud DevOps",href: "/services/cloud-devops",icon: Clou d },{ name: "IT Infrastructure Management",href: "/services/it-infrastructure-management",icon: Serve r },{ name: "Cybersecurity Solutions",href: "/services/cybersecurity",icon: Shiel d },{ name: "Digital Transformation",href: "/services/digital-transformation",icon: Rocke t },{ name: "Green IT Solutions",href: "/services/green-it",icon: Lea f },{ name: "Space Technology",href: "/services/space-tech",icon: Satellit e } ] },{ title: "Micro SAAS Solutions",icon: Building 2,links: [ { name: "Micro CRM",href: "/services/micro-crm",icon: User s },{ name: "Micro SAAS Platform",href: "/services/micro-saas-solutions",icon: Building 2 },{ name: "Micro SAAS Solutions Comprehensive",href: "/services/micro-saas-solutions-comprehensive",icon: Layer s },{ name: "Micro SAAS Innovation Hub",href: "/micro-saas-innovation-hub-2029",icon: Sparkle s } ] }; ]; const quickLinks = [ { name: "About Us",href: "/about",icon: Building 2 },{ name: "Services",href: "/services",icon: Serve r },{ name: "Pricing",href: "/pricing",icon: DollarSig n },{ name: "Contact",href: "/contact",icon: MessageCircl e },{ name: "Careers",href: "/careers",icon: Briefcas e },{ name: "Blog",href: "/blog",icon: FileTex t },{ name: "Support",href: "/help-center",icon: HelpCircl e },{ name: "Documentation",href: "/documentation",icon: BookOpe n }; ]; const contactInfo = [ { icon: Phon e,text: "+1 302 464 0950",href: "tel:+13024640950" },{ icon: Mai l,text: "kleber@ziontechgroup.com",href: "mailto: klebe r@ziontechgroup.com" },{ icon: MapPi n,text: "364 E Main St STE 1008 Middletown DE 19709",href: "https: }; ]; const socialLinks = [ { name: "LinkedIn",href: "https: { name: "Twitter",href: "https: { name: "GitHub",href: "https: { name: "Facebook",href: "https: { name: "Instagram",href: "https: ]; return ( <footer className="bg-zion-slate-darker border-t border-zion-purple/20"> {} <div className="container mx-auto px-4 sm: p x-6 lg: p x-8 py-12"> <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8"> {} <div className="space-y-4"> <div className="flex items-center space-x-2"> <Zap className="h-8 w-8 text-zion-purple" /> <span className="text-2xl font-bold text-white">Zion Tech Group</span> </div> <p className="text-gray-300 text-sm leading-relaxed"> Leading the future of technology with cutting-edge AI solutions,quantum computing,and innovative micro SAAS services. </p> <div className="flex space-x-4"> {socialLinks.map((social) => ( <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover: tex t-zion-purple transition-colors" > <social.icon className="h-5 w-5" /> </a> ))} </div> </div> {} <div className="space-y-4"> <h3 className="text-lg font-semibold text-white flex items-center space-x-2"> <Target className="h-5 w-5 text-zion-purple" /> <span>Quick Links</span> </h3> <ul className="space-y-2"> {quickLinks.map((link) => ( <li key={link.name}> <Link to={link.href} className="text-gray-300 hover: tex t-zion-purple transition-colors text-sm flex items-center space-x-2 group" > <link .icon className="h-4 w-4 group-hover: tex t-zion-purple" /> <span>{link.name}</span> </Link> </li> )) )} </div> )} </ul> </div> {} <div className="space-y-4"> <h3 className="text-lg font-semibold text-white flex items-center space-x-2"> <MessageCircle className="h-5 w-5 text-zion-purple" /> <span>Contact Us</span> </h3> <div className="space-y-3"> {contactInfo.map((contact,index) => ( <a key={index} href={contact.href} target={contact.href.startsWith('http') ? '_blank' : '_self'} rel={contact.href.startsWith('http') ? 'noopener noreferrer' : "} className="text-gray-300 hover: tex t-zion-purple transition-colors text-sm flex items-start space-x-2 group" > <contact.icon className="h-4 w-4 mt-0.5 group-hover: tex t-zion-purple flex-shrink-0" /> <span className="leading-relaxed">{contact.text}</span> </a> ))} </div> </div> {} <div className="space-y-4"> <h3 className="text-lg font-semibold text-white flex items-center space-x-2"> <Mail className="h-5 w-5 text-zion-purple" /> <span>Stay Updated</span> </h3> <p className="text-gray-300 text-sm"> Get the latest updates on our innovative services and technology solutions. </p> <div className="flex space-x-2"> <input type="email" placeholder="Enter your email" className="flex-1 px-3 py-2 bg-zion-slate border border-zion-slate-light rounded-lg text-white placeholder-gray-400 focus: outlin e-none focus: rin g-2 focus: rin g-zion-purple focus: borde r-transparent" /> <button className="px-4 py-2 bg-zion-purple hover: b g-zion-purple-dark text-white rounded-lg transition-colors"> Subscribe </button> </div> </div> </div> {} <div className="mt-12 pt-8 border-t border-zion-slate"> <h3 className="text-xl font-semibold text-white text-center mb-8"> Our Comprehensive Service Portfolio </h3> <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-6"> {footerSections.map((section) => ( <div key={section.title} className="space-y-4"> <h4 className="text-lg font-semibold text-white flex items-center space-x-2"> <section.icon className="h-5 w-5 text-zion-purple" /> <span>{section.title}</span> </h4> <ul className="space-y-2"> {section.links.slice(0,5).map((link) => ( <li key={link.name}> <Link to={link.href} className="text-gray-300 hover: tex t-zion-purple transition-colors text-sm flex items-center space-x-2 group" > <link .icon className="h-4 w-4 group-hover: tex t-zion-purple" /> <span>{link.name}</span> </Link> </li> ))} </ul> </div> ))} </div> </div> </div> {} <div className="bg-zion-slate-darkest border-t border-zion-slate"> <div className="container mx-auto px-4 sm: p x-6 lg: p x-8 py-6"> <div className="flex flex-col md: fle x-row justify-between items-center space-y-4 md: spac e-y-0"> <div className="flex items-center space-x-4 text-sm text-gray-400"> <span>&copy {currentYear} Zion Tech Group. All rights reserved.</span> <span>•</span> <Link to="/privacy" className="hover: tex t-zion-purple transition-colors"> Privacy Policy </Link> <span>•</span> <Link to="/terms" className="hover: tex t-zion-purple transition-colors"> Terms of Service </Link> </div> <div className="flex items-center space-x-4"> <span className="text-sm text-gray-400">Powered by</span> <div className="flex items-center space-x-2"> <Brain className="h-5 w-5 text-zion-purple" /> <span className="text-sm font-semibold text-white">AI Technology</span> </div> </div> </div> </div> </div> {} <button';'; onClick={() => window.scrollTo({ top: 0,behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-zion-purple hover: b g-zion-purple-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 hover: scal e-110" aria-label="Back to top" > <ArrowUp className="h-5 w-5" /> </button> </footer> )} ;';';