import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist. Return to Zion Tech Group's homepage for AI solutions and digital transformation services."
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />
        
        <main className="pt-16">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center">
              {/* 404 Illustration */}
              <div className="mb-8">
                <div className="text-9xl font-bold text-indigo-600 mb-4">404</div>
                <div className="text-6xl mb-4">🤖</div>
              </div>

              {/* Error Message */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Page Not Found
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                The page you're looking for seems to have wandered off into the digital void. 
                Don't worry, our AI is working on finding it!
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/"
                  className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                >
                  Go Home
                </Link>
                <Link
                  to="/contact"
                  className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                >
                  Contact Support
                </Link>
              </div>

              {/* Helpful Links */}
              <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Maybe you were looking for:
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link
                    to="/solutions"
                    className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="text-3xl mb-2">🤖</div>
                    <h3 className="font-semibold text-gray-900 mb-2">AI Solutions</h3>
                    <p className="text-sm text-gray-600">Explore our AI services</p>
                  </Link>
                  <Link
                    to="/about"
                    className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="text-3xl mb-2">👥</div>
                    <h3 className="font-semibold text-gray-900 mb-2">About Us</h3>
                    <p className="text-sm text-gray-600">Learn about our mission</p>
                  </Link>
                  <Link
                    to="/blog"
                    className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="text-3xl mb-2">📝</div>
                    <h3 className="font-semibold text-gray-900 mb-2">Blog</h3>
                    <p className="text-sm text-gray-600">Read our latest insights</p>
                  </Link>
                  <Link
                    to="/contact"
                    className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="text-3xl mb-2">📞</div>
                    <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
                    <p className="text-sm text-gray-600">Get in touch with us</p>
                  </Link>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-4">
                  Still can't find what you're looking for?
                </p>
                <a
                  href="tel:+13026009898"
                  className="text-indigo-600 hover:text-indigo-700 font-semibold text-lg"
                >
                  Call us at (302) 600-9898
                </a>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default NotFoundPage;