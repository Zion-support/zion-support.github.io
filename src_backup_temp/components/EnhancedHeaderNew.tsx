import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Search,
  Zap,
  ChevronDown,
  Brain,
  Cloud,
  Shield,
  ShoppingCart,
  Building,
  Heart,
  Factory,
  CreditCard,
  GraduationCap,
  ShoppingBag,
  Users,
  Globe,
  Cpu,
  Lock,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Code,
  Database,
  Network,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  Headphones,
  Mail,
  Clock,
  DollarSign,
  Target,
  Workflow,
  Atom,
  Truck,
  Leaf,
  Satellite,
  Gauge,
  MessageCircle,
  Calendar,
  Package,
  Globe2,
  ShieldCheck,
  Award,
  Lightbulb,
  Settings,
  Eye,
  Search as SearchIcon,
  Phone,
  MapPin ';';
} from 'lucide-react';
const "EnhancedHeaderNew": React.FC = (props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<any>(false);
  const [searchQuery, setSearchQuery] = useState<any>(");
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState<any>(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState<any>(false);
  const [scrolled, setScrolled] = useState<any>(false);
  const [isSearching, setIsSearching] = useState<any>(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = (props) => {
      setScrolled(window.scrollY > 50);
    };';
    window.addEventListener('scroll', handleScroll);';';
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleSearch = async ("e": React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {;
      setIsSearching(true);
      try {;
        await new Promise(resolve => setTimeout(resolve", 1000));
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      } finally {;
        setIsSearching(false);
      }
    }
  };
  const serviceCategories = [{
      "title": 'AI & Machine Learning',
      "icon": Brain,
      "color": 'from-purple-500 to-pink-600',
      "services": [
        { name: 'AI Content Creation Suite', "href": '/services/ai-content-creation-suite', "price": 'From $199/month' },
        { "name": 'AI Customer Support Automation', "href": '/services/ai-customer-support-automation', "price": 'From $299/month' },
        { "name": 'AI Marketing Automation', "href": '/services/ai-marketing-automation', "price": 'From $399/month' },
        { "name": 'AI Financial Analytics', "href": '/services/ai-financial-analytics', "price": 'From $599/month' }
      ]
    },
    {
      "title": 'Micro SaaS Solutions',
      "icon": ShoppingCart,
      "color": 'from-green-500 to-teal-600',
      "services": [{ name: 'Affiliate Marketing Tracking', "href": '/services/affiliate-tracking', "price": 'From $99/month' },
        { "name": 'Event Management Dashboard', "href": '/services/event-management-dashboard', "price": 'From $149/month' },
        { "name": 'Helpdesk Platform', "href": '/services/helpdesk-platform', "price": 'From $79/month' },
        { "name": 'Email Automation Sequencer', "href": '/services/email-sequencer', "price": 'From $129/month' }
      ]
    },
    {
      "title": 'IT Services',
      "icon": Cloud,
      "color": 'from-blue-500 to-cyan-600',
      "services": [{ name: 'Cloud Migration Services', "href": '/services/cloud-migration', "price": 'From $2,999/project' },
        { "name": 'DevOps & CI/CD Implementation', "href": '/services/devops-cicd', "price": 'From $1,999/month' },
        { "name": 'Cybersecurity Assessment', "href": '/services/cybersecurity-assessment', "price": 'From $1,499/assessment' },
        { "name": 'IT Infrastructure Management', "href": '/services/it-infrastructure-management', "price": 'From $999/month' }
      ]
    },
    {
      "title": 'Emerging Technologies',
      "icon": Atom,
      "color": 'from-indigo-500 to-purple-600',
      "services": [{ name: 'Quantum Computing Solutions', "href": '/services/quantum-computing', "price": 'From $4,999/month' },
        { "name": 'IoT Edge Computing', "href": '/services/iot-edge-computing', "price": 'From $1,999/month' },
        { "name": 'Blockchain Development', "href": '/services/blockchain-development', "price": 'From $2,999/project' }
      ]
    };
  ];
  const industrySolutions = [{ "name": 'Healthcare', "icon": Heart, "href": '/solutions/healthcare' },
    { "name": 'Manufacturing', "icon": Factory, "href": '/solutions/manufacturing' },
    { "name": 'Financial', "icon": CreditCard, "href": '/solutions/financial' },
    { "name": 'Education', "icon": GraduationCap, "href": '/solutions/education' },
    { "name": 'Retail', "icon": ShoppingBag, "href": '/solutions/retail' },
    { "name": 'Enterprise', "icon": Building, "href": '/solutions/enterprise' };
  ];
  const mainNavigation = [{ "name": 'Home', "href": '/' },
    { "name": 'Services', "href": '/services', "hasDropdown": true },
    { "name": 'Solutions', "href": '/solutions', "hasDropdown": true },
    { "name": 'About', "href": '/about' },
    { "name": 'Contact', "href": '/contact' };
  ];
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">EnhancedHeaderNew</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};
export default EnhancedHeaderNew;
</motion>
</motion>
</any>
</any>
</any>;';';
import React,{ useState,useEffect } from 'react'; import { Link,useLocation } from 'react-router-dom'; import { motion,AnimatePresence } from 'framer-motion'; import { Menu,X,Search,Zap,ChevronDown,Brain,Cloud,Shield,ShoppingCart,Building,Heart,Factory,CreditCard,GraduationCap,ShoppingBag,Users,Globe,Cpu,Lock,Star,ArrowRight,CheckCircle,TrendingUp,Code,Database,Network,Smartphone,BarChart3,MessageSquare,FileText,Headphones,Mail,Clock,DollarSign,Target,Workflow,Atom,Truck,Leaf,Satellite,Gauge,MessageCircle,Calendar,Package,Globe2,ShieldCheck,Award,Lightbulb,Settings,Eye,Search as SearchIcon,Phone,MapPin ';'} from 'lucide-react'; const EnhancedHeaderNew: React.FC = (props) => { const [mobileMenuOpen,setMobileMenuOpen] = useState<any>(false); const [searchQuery,setSearchQuery] = useState<any>("); const [servicesDropdownOpen,setServicesDropdownOpen] = useState<any>(false); const [solutionsDropdownOpen,setSolutionsDropdownOpen] = useState<any>(false); const [scrolled,setScrolled] = useState<any>(false); const [isSearching,setIsSearching] = useState<any>(false); const location = useLocation(); useEffect(() => { const handleScroll = (props) => { setScrolled(window.scrollY > 50)};'; window.addEventListener('scroll',handleScroll);';'; return () => window.removeEventListener('scroll',handleScroll)},[]); const handleSearch = async (e: React.FormEvent) => { e.preventDefault(); if (searchQuery.trim()) { setIsSearching(true); try { await new Promise(resolve => setTimeout(resolve,1000)); window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`} finally { setIsSearching(false)} } }; const serviceCategories = [ { title: 'AI & Machine Learning',icon: Brain,color: 'from-purple-500 to-pink-600',services: [ { name: 'AI Content Creation Suite',href: '/services/ai-content-creation-suite',price: 'From $199/month' },{ name: 'AI Customer Support Automation',href: '/services/ai-customer-support-automation',price: 'From $299/month' },{ name: 'AI Marketing Automation',href: '/services/ai-marketing-automation',price: 'From $399/month' },{ name: 'AI Financial Analytics',href: '/services/ai-financial-analytics',price: 'From $599/month' } ] },{ title: 'Micro SaaS Solutions',icon: ShoppingCart,color: 'from-green-500 to-teal-600',services: [ { name: 'Affiliate Marketing Tracking',href: '/services/affiliate-tracking',price: 'From $99/month' },{ name: 'Event Management Dashboard',href: '/services/event-management-dashboard',price: 'From $149/month' },{ name: 'Helpdesk Platform',href: '/services/helpdesk-platform',price: 'From $79/month' },{ name: 'Email Automation Sequencer',href: '/services/email-sequencer',price: 'From $129/month' } ] },{ title: 'IT Services',icon: Cloud,color: 'from-blue-500 to-cyan-600',services: [ { name: 'Cloud Migration Services',href: '/services/cloud-migration',price: 'From $2,999/project' },{ name: 'DevOps & CI/CD Implementation',href: '/services/devops-cicd',price: 'From $1,999/month' },{ name: 'Cybersecurity Assessment',href: '/services/cybersecurity-assessment',price: 'From $1,499/assessment' },{ name: 'IT Infrastructure Management',href: '/services/it-infrastructure-management',price: 'From $999/month' } ] },{ title: 'Emerging Technologies',icon: Atom,color: 'from-indigo-500 to-purple-600',services: [ { name: 'Quantum Computing Solutions',href: '/services/quantum-computing',price: 'From $4,999/month' },{ name: 'IoT Edge Computing',href: '/services/iot-edge-computing',price: 'From $1,999/month' },{ name: 'Blockchain Development',href: '/services/blockchain-development',price: 'From $2,999/project' } ] }; ]; const industrySolutions = [ { name: 'Healthcare',icon: Heart,href: '/solutions/healthcare' },{ name: 'Manufacturing',icon: Factory,href: '/solutions/manufacturing' },{ name: 'Financial',icon: CreditCard,href: '/solutions/financial' },{ name: 'Education',icon: GraduationCap,href: '/solutions/education' },{ name: 'Retail',icon: ShoppingBag,href: '/solutions/retail' },{ name: 'Enterprise',icon: Building,href: '/solutions/enterprise' }; ]; const mainNavigation = [ { name: 'Home',href: '/' },{ name: 'Services',href: '/services',hasDropdown: true },{ name: 'Solutions',href: '/solutions',hasDropdown: true },{ name: 'About',href: '/about' },{ name: 'Contact',href: '/contact' }; ]; return ( <> {} <div className="bg-gray-800 text-white py-2"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex flex-col md:flex-row items-center justify-between text-sm"> <div className="flex items-center space-x-6 mb-2 md:mb-0"> <div className="flex items-center"> <Mail className="w-4 h-4 mr-2 text-cyan-400" /> <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors"> kleber@ziontechgroup.com </a> </div> <div className="flex items-center"> <Phone className="w-4 h-4 mr-2 text-cyan-400" /> <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors"> +1 302 464 0950 </a> </div> </div> <div className="flex items-center space-x-4"> <div className="flex items-center"> <MapPin className="w-4 h-4 mr-2 text-cyan-400" /> <span>Middletown,DE</span> </div> <div className="flex items-center"> <Clock className="w-4 h-4 mr-2 text-cyan-400" /> <span>24/7 Support</span> </div> </div> </div> </div> </div> {} <motion.header className={`sticky top-0 z-50 transition-all duration-500 ${ scrolled'; ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg' : 'bg-white border-b border-gray-200' }`} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8,ease: 'easeOut' }} > <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex items-center justify-between h-20"> {} <Link to="/" className="flex items-center space-x-3 group"> <motion.div className="relative" whileHover={{ scale: 1.05,rotate: 5 }} whileTap={{ scale: 0.95 }} > <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/50"> <Zap className="w-7 h-7 text-white" /> </div> <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" /> </motion.div> <div className="flex flex-col"> <span className="text-2xl font-bold text-gray-900"> Zion Tech </span> <span className="text-xs text-cyan-600 font-medium tracking-wider"> Innovation Group </span> </div> </Link> {} <nav className="hidden xl:flex items-center space-x-8"> {mainNavigation.map((item) => ( <div key={item.name} className="relative"> <Link to={item.href} className={`font-medium transition-all duration-300 ${ location.pathname === item.href';'; ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-gray-700 hover:text-cyan-600' }`} onMouseEnter={() => { if (item.hasDropdown) { if (item.name === 'Services') setServicesDropdownOpen(true);';'; if (item.name === 'Solutions') setSolutionsDropdownOpen(true)} }} > {item.name} {item.hasDropdown && <ChevronDown className="w-4 h-4 inline ml-1" />} </Link> </div> ))} </nav> {} <div className="hidden md:flex items-center space-x-4"> <form onSubmit={handleSearch} className="relative"> <input type="text" placeholder="Search services..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-64 px-4 py-2 pl-10 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" /> <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" /> {isSearching && ( <div className="absolute right-3 top-2.5"> <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-500"></div> </div> )} </form> <Link to="/contact" className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors" > Get Quote </Link> </div> {} <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="xl:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors" > {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />} </button> </div> </div> {} <AnimatePresence> {servicesDropdownOpen && ( <motion.div initial={{ opacity: 0,y: -20 }} animate={{ opacity: 1,y: 0 }} exit={{ opacity: 0,y: -20 }} className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-xl" onMouseLeave={() => setServicesDropdownOpen(false)} > <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {serviceCategories.map((category,index) => ( <div key={index} className="space-y-4"> <div className="flex items-center space-x-3"> <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}> <category.icon className="w-5 h-5 text-white" /> </div> <h3 className="font-semibold text-gray-900">{category.title}</h3> </div> <ul className="space-y-2"> {category.services.map((service,serviceIndex) => ( <li key={serviceIndex}> <Link to={service.href} className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group" > <div className="font-medium text-gray-900 group-hover:text-cyan-600"> {service.name} </div> <div className="text-sm text-cyan-600 font-semibold"> {service.price} </div> </Link> </li> ))} </ul> </div> ))} </div> <div className="mt-8 pt-6 border-t border-gray-200"> <div className="flex items-center justify-between"> <div> <h4 className="font-semibold text-gray-900 mb-2">Need a custom solution?</h4> <p className="text-gray-600">We can build tailored solutions for your specific needs.</p> </div> <Link to="/contact" className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors" > Contact Us </Link> </div> </div> </div> </motion.div> )} </AnimatePresence> {} <AnimatePresence> {solutionsDropdownOpen && ( <motion.div initial={{ opacity: 0,y: -20 }} animate={{ opacity: 1,y: 0 }} exit={{ opacity: 0,y: -20 }} className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-xl" onMouseLeave={() => setSolutionsDropdownOpen(false)} > <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {industrySolutions.map((industry,index) => ( <Link key={index} to={industry.href} className="group p-6 rounded-xl border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300" > <div className="flex items-center space-x-4 mb-4"> <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center group-hover:bg-cyan-200 transition-colors"> <industry.icon className="w-6 h-6 text-cyan-600" /> </div> <h3 className="text-xl font-semibold text-gray-900 group-hover:text-cyan-600"> {industry.name} Solutions </h3> </div> <p className="text-gray-600"> Specialized technology solutions designed for the {industry.name.toLowerCase()} industry with compliance and best practices. </p> </Link> ))} </div> </div> </motion.div> )} </AnimatePresence> {} <AnimatePresence> {mobileMenuOpen && ( <motion.div'; initial={{ opacity: 0,height: 0 }} animate={{ opacity: 1,height: 'auto' }} exit={{ opacity: 0,height: 0 }} className="xl:hidden bg-white border-b border-gray-200" > <div className="px-4 py-6 space-y-4"> {mainNavigation.map((item) => ( <Link key={item.name} to={item.href} className="block px-4 py-2 text-lg font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)} > {item.name} </Link> ))} <div className="pt-4 border-t border-gray-200"> <form onSubmit={handleSearch} className="mb-4"> <div className="relative"> <input type="text" placeholder="Search services..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full px-4 py-2 pl-10 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" /> <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" /> </div> </form> <Link to="/contact" className="block w-full bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors" onClick={() => setMobileMenuOpen(false)} > Get Quote </Link> </div> </div> </motion.div> )} </AnimatePresence> </motion.header> </> )}; export default EnhancedHeaderNew; </motion> </motion> </any> </any> </any>;';';
