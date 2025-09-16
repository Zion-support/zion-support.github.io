import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import Head from 'next/head';
import Link from 'next/link';

import { 
  FileText, 
  Download, 
  Calendar, 
  User, 
  ArrowRight, 
  Tag, 
  ExternalLink 
} from 'lucide-react';
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const white-papers: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>white-papers | Zion Tech Group</title>
        <meta name="description" content="white-papers - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">white-papers</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default white-papers;