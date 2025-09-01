import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Search, 
  ArrowLeft, 
  ArrowRight,
  AlertTriangle,
  Globe,
  Rocket,
  Phone,
  Mail
} from 'lucide-react';

const NotFound = () => {
  const navigationOptions = [
    {
      icon: Home,
      title: 'Go Home',
      description: 'Return to our homepage and explore our services',
      link: '/',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Rocket,
      title: 'Our Services',
      description: 'Discover what we can do for your business',
      link: '/services',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Search,
      title: 'Search',
      description: 'Find what you\'re looking for',
      link: '/sitemap',
      color: 'from-green-500 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* 404 Number */}
        <div className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-8">
          404
        </div>

        {/* Error Message */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Page Not Found
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track to exploring our amazing services.
        </p>

        {/* Navigation Options */}
        <div className="space-y-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {navigationOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Link
                  key={index}
                  to={option.link}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {option.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            to="/"
            className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Contact Support
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        {/* Additional Help */}
        <div className="mt-16 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-blue-900">Need Help?</h3>
          </div>
          <p className="text-blue-700 mb-4">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Us
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </a>
          </div>
        </div>

        {/* Sitemap Link */}
        <div className="mt-8">
          <Link
            to="/sitemap"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <Globe className="w-4 h-4 mr-2" />
            View Complete Sitemap
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;