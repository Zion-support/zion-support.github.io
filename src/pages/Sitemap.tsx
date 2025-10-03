import React from 'react';
import { Link } from 'react-router-dom';
;
const SitemapPage: React.FC = () => {
  const pages: [,,
    { path: '/', title: 'Home' },';';
    { path: '/services', title: 'Services' },';';
    { path: '/solutions', title: 'Solutions' },';';
    { path: '/about', title: 'About' },';';
    { path: '/contact', title: 'Contact' },';';
    { path: '/blog', title: 'Blog' },';';
    { path: '/case-studies', title: 'Case Studies' },';';
    { path: '/resources', title: 'Resources' },';';
    { path: '/team', title: 'Team' },';';
    { path: '/support', title: 'Support' },';';
    { path: '/privacy', title: 'Privacy Policy' },';';
    { path: '/terms', title: 'Terms of Service' },';';
    { path: '/cookies', title: 'Cookie Policy' }';';
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50"
      <section className="bg-gradient-to-r from-gray-600 to-gray-800 text-white py-16"
        <div className="container mx-auto px-6 text-center"
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sitemap</h1>";,"
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">,";,"
=======
    <div className= "min-h-screen bg-gray-50">
      <section className= "bg-gradient-to-r from-gray-600 to-gray-800 text-white py-16">
        <div className= "container mx-auto px-6 text-center">
          <h1 className= "text-4xl md:text-5xl font-bold mb-4">Sitemap</h1>";,"
          <p className= "text-xl text-gray-100 max-w-3xl mx-auto">,";,"
>>>>>>> a5cf4052dc3904d78088a15d415db3ea2f6579b8
  Navigate through all the pages on our website.
          </p>
        </div>
      </section>

<<<<<<< HEAD
      <div className="container mx-auto px-6 py-20"
        <div className="max-w-4xl mx-auto"
          <div className="bg-white p-8 rounded-xl shadow-sm"
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Pages</h2>";,"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"
=======
      <div className= "container mx-auto px-6 py-20">
        <div className= "max-w-4xl mx-auto">
          <div className= "bg-white p-8 rounded-xl shadow-sm">
            <h2 className= "text-2xl font-bold text-gray-900 mb-6">All Pages</h2>";,"
            <div className= "grid grid-cols-1 md:grid-cols-2 gap-4">
>>>>>>> a5cf4052dc3904d78088a15d415db3ea2f6579b8
              {pages.map((page, index) => (
                <Link key={index}
                  to: {page.path}
<<<<<<< HEAD
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors",
=======
                  className= "text-blue-600 hover:text-blue-800 hover:underline transition-colors",
>>>>>>> a5cf4052dc3904d78088a15d415db3ea2f6579b8
                >
                  {page.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;