import React from 'react';
import { motion } from 'framer-motion';
import { Star, Rocket, Sparkles, Brain, Atom, Cpu, Building, Calculator, DollarSign, Grid, ArrowRight, Play, Target, Zap } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function Showcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>showcase | Zion Tech Group</title>
        <meta name="description" content="showcase - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">showcase</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};
export default showcase;