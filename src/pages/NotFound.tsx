import React from 'react';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Page Not Found
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="space-y-4 mb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/" 
              className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2 text-lg font-semibold"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </a>
            <button 
              onClick={() => window.history.back()}
              className="border-2 border-white/30 px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center space-x-2 text-lg font-semibold"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold mb-4">Looking for something specific?</h3>
          <p className="text-blue-200 mb-6">
            Try these popular pages or use our search to find what you need.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <a href="/services" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
              <h4 className="font-semibold mb-2">Our Services</h4>
              <p className="text-sm text-blue-200">Explore our AI, IT, and SAAS solutions</p>
            </a>
            <a href="/about" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
              <h4 className="font-semibold mb-2">About Us</h4>
              <p className="text-sm text-blue-200">Learn more about our team and mission</p>
            </a>
            <a href="/contact" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
              <h4 className="font-semibold mb-2">Contact</h4>
              <p className="text-sm text-blue-200">Get in touch with our team</p>
            </a>
            <div className="block p-4 bg-white/5 rounded-lg">
              <h4 className="font-semibold mb-2">Search</h4>
              <div className="flex items-center space-x-2">
                <input 
                  type="text" 
                  placeholder="Search our site..." 
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-200 text-sm"
                />
                <button className="p-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-sm text-blue-300">
          <p>If you believe this is an error, please <a href="/contact" className="text-blue-400 hover:text-blue-300 underline">contact us</a> and let us know.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;