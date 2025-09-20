import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

const ZeroTrustNetworkArchitecture: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-green-600/20 rounded-full">
              <ShieldCheckIcon className="h-12 w-12 text-green-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Zero Trust Network Architecture
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced zero-trust security architecture for modern enterprise networks. This page is under development.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 text-lg"
          >
            Contact Us for More Information
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ZeroTrustNetworkArchitecture;