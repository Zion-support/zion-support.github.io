import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======

import { Atom, Dna, Zap, Target, Users, Globe, ArrowRight, Activity } from 'lucide-react';
import Layout from '../components/layout/Layout';
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const quantum-bio-computing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>quantum-bio-computing | Zion Tech Group</title>
        <meta name="description" content="quantum-bio-computing - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">quantum-bio-computing</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default quantum-bio-computing;