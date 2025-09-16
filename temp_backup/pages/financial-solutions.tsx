import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======

import { DollarSign, Brain, Shield, Users, Zap, Target, Star, ArrowRight, Activity, TrendingUp, Lock, BarChart3 } from 'lucide-react';
import SEO from '../components/SEO';
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const financial-solutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>financial-solutions | Zion Tech Group</title>
        <meta name="description" content="financial-solutions - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">financial-solutions</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default financial-solutions;