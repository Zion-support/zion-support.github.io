import React from 'react';
import Link from 'next/link';
const SitemapPage: React.FC = () => {
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Sitemap</h1>
            <p className="text-xl text-gray-300">
//               Complete directory of all pages on our website
            </p>
          </header>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">All Pages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pages.map((page, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-4">
                    <Link
                      href={page.url}
                      className="text-blue-400 hover:text-blue-300 font-medium block mb-2"
//                     >
                      {page.title}
                    </Link>
                    <div className="text-sm text-gray-400">
                      Priority: {page.priority}
                    </div>
                    <div className="text-sm text-gray-500">
                      {page.url}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Link
                  href="/"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
//                 >
//                   Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SitemapPage;