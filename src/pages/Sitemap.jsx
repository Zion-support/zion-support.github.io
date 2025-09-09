import React from 'react';
import SEO from "@/components/SEO";

const Sitemap = () => {
  const sitePages = [
    { path: '/', title: 'Home' },
    { path: '/services', title: 'Services' },
    { path: '/about', title: 'About' },
    { path: '/contact', title: 'Contact' },
    { path: '/privacy', title: 'Privacy Policy' },
    { path: '/terms', title: 'Terms of Service' }
  ];

  return (
    <>
      <SEO
        title="Sitemap"
        description="Site navigation and page structure"
        canonical="/sitemap"
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Sitemap</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Site Pages</h2>
            <ul className="space-y-3">
              {sitePages.map((page, index) => (
                <li key={index}>
                  <a
                    href={page.path}
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {page.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sitemap;