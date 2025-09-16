import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import Head from 'next/head';

import { 
  TrendingUp, Brain, Shield, Zap, Target, 
  BarChart3, Cpu, Globe, Users, Award,
  CheckCircle, ArrowRight, Star, Phone, Mail, MapPin
} from 'lucide-react';
import Layout from '../components/layout/Layout';
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const defi-nexus-platform: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>defi-nexus-platform | Zion Tech Group</title>
        <meta name="description" content="defi-nexus-platform - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">defi-nexus-platform</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default defi-nexus-platform;