import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import Head from 'next/head';
import Link from 'next/link';

import { 
  Shield, Cloud, Globe, Zap, Star, Users, TrendingUp, 
  CheckCircle, ArrowRight, Phone, Mail, MapPin,
  Rocket, Target, Cpu, Lock, Server, Database
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const 2025-innovative-it-infrastructure-services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>2025-innovative-it-infrastructure-services | Zion Tech Group</title>
        <meta name="description" content="2025-innovative-it-infrastructure-services - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">2025-innovative-it-infrastructure-services</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default 2025-innovative-it-infrastructure-services;