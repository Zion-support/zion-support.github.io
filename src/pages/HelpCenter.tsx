import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Phone, Mail, MapPin, BookOpen, MessageCircle, FileText } from 'lucide-react';

const HelpCenter: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Help Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to your questions and get the support you need
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        {/* Quick Help Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800/30 backdrop-blur-md border border-gray-700 rounded-2xl p-8 hover:border-cyan-500 transition-all duration-300">
            <BookOpen className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Documentation</h3>
            <p className="text-gray-300 mb-4">Comprehensive guides and API documentation</p>
            <Link to="/docs" className="text-cyan-400 hover:text-cyan-300 font-medium">
              Browse Docs →
            </Link>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-md border border-gray-700 rounded-2xl p-8 hover:border-cyan-500 transition-all duration-300">
            <MessageCircle className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Live Chat</h3>
            <p className="text-gray-300 mb-4">Get instant help from our support team</p>
            <button className="text-green-400 hover:text-green-300 font-medium">
              Start Chat →
            </button>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-md border border-gray-700 rounded-2xl p-8 hover:border-cyan-500 transition-all duration-300">
            <FileText className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Tutorials</h3>
            <p className="text-gray-300 mb-4">Step-by-step tutorials and how-to guides</p>
            <Link to="/tutorials" className="text-purple-400 hover:text-purple-300 font-medium">
              View Tutorials →
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-800/30 backdrop-blur-md border border-gray-700 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Contact Support</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+1 (302) 464-0950</p>
              <p className="text-sm text-gray-400">Available 24/7</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
              <p className="text-sm text-gray-400">Response within 2 hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">364 E Main St STE 1008</p>
              <p className="text-sm text-gray-400">Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;