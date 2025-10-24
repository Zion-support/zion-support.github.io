import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function SitemapPage() {
  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="con tainermx-auto px-4 py-16"></div>
        <h1 className="tex t-4xlfont-bold text-white mb-6">Sitemap.xml</h1>
        <p className="tex t-lgtext-gray-300 mb-8">Professional sitemap.xml services by Zion Tech Group.</p>
        
        <Link href="/contact" className="inl ine-flexitems-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Contact Us</Link>
          <ArrowRight className="ml-2h-4w-4" /></ArrowRight>
        </Link>
      </div>
    </div>;
  )}