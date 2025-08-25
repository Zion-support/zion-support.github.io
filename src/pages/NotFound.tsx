import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  const popularPages = [
    { name: 'Home', path: '/', description: 'Return to homepage' },
    { name: 'Services', path: '/services', description: 'Explore our services' },
    { name: 'About', path: '/about', description: 'Learn about us' },
    { name: 'Contact', path: '/contact', description: 'Get in touch' },
    { name: 'Pricing', path: '/pricing', description: 'View pricing plans' },
    { name: 'Case Studies', path: '/case-studies', description: 'Success stories' }
  ];

  const serviceCategories = [
    { name: 'AI Solutions', path: '/services/ai-autonomous-systems', description: 'AI & Machine Learning' },
    { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Security & Compliance' },
    { name: 'Cloud & DevOps', path: '/cloud-devops', description: 'Infrastructure & Operations' },
    { name: 'Quantum Technology', path: '/services/quantum-technology', description: 'Next-gen Computing' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-red-500/20 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-12 h-12 text-red-400" />
          </div>
        </div>

        {/* Main Error Message */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          The page you're looking for doesn't exist or has been moved. 
          Don't worry, we've got plenty of amazing content for you to explore.
        </p>

        {/* Search Section */}
        <div className="mb-12">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for services, solutions..."
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
              Search
            </button>
          </div>
        </div>

        {/* Popular Pages */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">Popular Pages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularPages.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className="group p-4 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-700/50 hover:border-blue-500 transition-all duration-200"
              >
                <div className="text-blue-400 group-hover:text-blue-300 font-medium">
                  {page.name}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300">
                  {page.description}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">Explore Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceCategories.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="group p-4 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-700/50 hover:border-green-500 transition-all duration-200"
              >
                <div className="text-green-400 group-hover:text-green-300 font-medium">
                  {service.name}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300">
                  {service.description}
=======
import { Link, useNavigate } from 'react-router-dom';
import { 
  Home, 
  Search, 
  ArrowLeft, 
  ArrowRight,
  Brain,
  Cloud,
  Shield,
  Code,
  Rocket,
  Users,
  Target,
  Cpu,
  Globe,
  Zap,
  Building
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const popularServices = [
    {
      title: "AI Solutions",
      description: "AI-powered business solutions and automation",
      icon: Brain,
      path: "/ai-solutions",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and development",
      icon: Cloud,
      path: "/services/it-infrastructure",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security and compliance",
      icon: Shield,
      path: "/services/cybersecurity",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Micro-SaaS",
      description: "Custom software solutions for businesses",
      icon: Code,
      path: "/services/micro-saas-solutions",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end business transformation",
      icon: Rocket,
      path: "/digital-transformation",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Enterprise Solutions",
      description: "Large-scale business solutions",
      icon: Building,
      path: "/solutions/enterprise",
      color: "from-gray-500 to-slate-500"
    }
  ];

  const quickLinks = [
    { label: "Home", path: "/", icon: Home },
    { label: "Services", path: "/services", icon: Target },
    { label: "About", path: "/about", icon: Users },
    { label: "Contact", path: "/contact", icon: Globe },
    { label: "AI Solutions", path: "/ai-solutions", icon: Brain },
    { label: "Case Studies", path: "/case-studies", icon: Cpu }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <SEOHead 
        title="Page Not Found - Zion Tech Group"
        description="The page you're looking for doesn't exist. Explore our AI solutions, cloud services, and technology offerings."
        keywords="404, page not found, AI solutions, cloud services, cybersecurity, Zion Tech Group"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 404 Header */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-none">
              404
            </h1>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Page Not Found
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let us help you find what you're looking for or explore our services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-200 hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
            
            <Link
              to="/"
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </Link>
          </div>
        </div>

        {/* Popular Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            Explore Our Popular Services
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularServices.map((service) => (
              <Link
                key={service.title}
                to={service.path}
                className="group block p-6 bg-gray-800/50 hover:bg-gray-700/70 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-200 hover:scale-105"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                  {service.title}
                </h4>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center mt-4 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-fbd9
                </div>
              </Link>
            ))}
          </div>
        </div>

<<<<<<< HEAD
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>

        {/* Contact Support */}
        <div className="mt-12 p-6 bg-gray-800/30 rounded-lg border border-gray-700">
          <p className="text-gray-400 mb-4">
            Can't find what you're looking for? Our team is here to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Contact Support
          </Link>
=======
        {/* Quick Navigation */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            Quick Navigation
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="group flex flex-col items-center p-4 bg-gray-800/30 hover:bg-gray-700/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-200 hover:scale-105"
              >
                <link.icon className="w-8 h-8 text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors duration-200" />
                <span className="text-sm font-medium text-center group-hover:text-white transition-colors duration-200">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Search Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8">
            Can't Find What You're Looking For?
          </h3>
          
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Search our services, solutions, or content..."
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                <Search className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-gray-400 mt-4 text-sm">
              Or contact us directly for personalized assistance
            </p>
          </div>
          
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-fbd9
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
};

export default NotFound;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-fbd9
