import React from 'react';
import { Link } from 'react-router-dom';
import { Cog } from 'lucide-react';
const $service = () => {
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-600/20 rounded-full">
              <Cog className="h-12 w-12 text-blue-400"/>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            $service
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This service page is under development. Contact us for more information.
          </p>
          <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg">
            Contact Us for More Information
          </Link>
        </div>
      </section>
    </div>);
};
export default $service;
