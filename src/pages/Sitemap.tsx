import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  '/', '/about', '/contact', '/blog', '/services', '/solutions', '/case-studies',
  '/partners', '/news', '/careers', '/faq', '/team', '/help', '/security', '/status',
  '/privacy', '/terms', '/cookies'
];

const Sitemap: React.FC = () => {
  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold mb-4">Sitemap</h1>
      <ul className="list-disc ml-6 space-y-2">
        {links.map((href) => (
          <li key={href}>
            <Link to={href} className="text-blue-600 hover:underline">{href || '/'}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sitemap;

