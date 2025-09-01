import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function SimplePage() {
  const location = useLocation();
  const pathname = location.pathname;

  // Generate a title based on the pathname
  const getTitle = () => {
    const path = pathname.replace('/', '').replace(/-/g, ' ');
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  // Generate content based on the pathname
  const getContent = () => {
    if (pathname.includes('pricing')) {
      return {
        title: 'Pricing & Plans',
        description: 'Transparent pricing for our technology solutions and services.',
        content: 'Our pricing is designed to be transparent and scalable. Contact us for a custom quote tailored to your specific needs and requirements.'
      };
    } else if (pathname.includes('case-studies')) {
      return {
        title: 'Case Studies',
        description: 'Real-world examples of how we\'ve helped businesses transform with technology.',
        content: 'Explore our case studies to see how we\'ve delivered measurable results for clients across various industries.'
      };
    } else if (pathname.includes('blog')) {
      return {
        title: 'Blog & Insights',
        description: 'Latest insights, trends, and thought leadership in technology.',
        content: 'Stay updated with the latest technology trends, industry insights, and expert perspectives from our team.'
      };
    } else {
      return {
        title: getTitle(),
        description: 'Welcome to this page.',
        content: 'This page is under development. Please check back soon for updated content.'
      };
    }
  };

  const pageInfo = getContent();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {pageInfo.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {pageInfo.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {pageInfo.content}
            </p>
            
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Need More Information?
              </h3>
              <p className="text-gray-600 mb-6">
                Our team is here to help you find the right solution for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}