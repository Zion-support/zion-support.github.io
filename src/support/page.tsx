import React from 'react';
<<<<<<< HEAD

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Page
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This page is under development. Content will be added soon.
          </p>
        </div>
      </div>
    </div>
  );
}
=======
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SupportPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Support</h1>
          <p className="text-gray-300 mb-8">Coming Soon - Advanced support solutions</p>
          <Link 
            to="/contact" 
            className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SupportPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-11dc
