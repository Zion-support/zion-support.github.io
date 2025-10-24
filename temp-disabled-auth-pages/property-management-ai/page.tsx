'use client';

export const dynamic = 'force-dynamic';

import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, BarChart, Target, CheckCircle, Home, TrendingUp, Users, Settings } from 'lucide-react';

const Page: React.FC = () => {
  // Set document title for SEO
  React.useEffect(() => {
    document.title = 'Property Management AI - Zion Tech Group';
  }, []);

  const features = [
    {
      icon: 'home',
      title: 'Smart Property Management',
      description: 'AI-powered property management solutions for modern real estate operations.',
      benefits: ['Automated rent collection', 'Maintenance scheduling', 'Tenant screening', 'Property analytics']
    },
    {
      icon: 'trending-up',
      title: 'Predictive Analytics',
      description: 'Advanced analytics to optimize property performance and maximize ROI.',
      benefits: ['Market analysis', 'Rent optimization', 'Occupancy forecasting', 'Investment insights']
    },
    {
      icon: 'users',
      title: 'Tenant Experience',
      description: 'Enhanced tenant experience through AI-driven communication and services.',
      benefits: ['Chatbot support', 'Maintenance requests', 'Payment processing', 'Community features']
    }
  ];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'home':
        return <Home className="w-12 h-12 text-emerald-400 mb-4" />;
      case 'trending-up':
        return <TrendingUp className="w-12 h-12 text-emerald-400 mb-4" />;
      case 'users':
        return <Users className="w-12 h-12 text-emerald-400 mb-4" />;
      default:
        return <Home className="w-12 h-12 text-emerald-400 mb-4" />;
    }
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">

        <div className="container mx-auto px-4 py-20">

          <div className="text-center mb-16">

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Property Management AI
            </h1>
            <p className="text-xl text-emerald-400 max-w-3xl mx-auto">
              Revolutionary AI-powered property management solutions for modern real estate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

            <div className="bg-slate-800 p-6 rounded-lg">

              <div className="w-12 h-12 text-emerald-400 mb-4 flex items-center justify-center bg-emerald-500/20 rounded-lg">

                <span className="text-2xl">🚀</span>
              </div>
            ))}
          </div>

            <div className="bg-slate-800 p-6 rounded-lg">

              <div className="w-12 h-12 text-emerald-400 mb-4 flex items-center justify-center bg-emerald-500/20 rounded-lg">

                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Analytics & Insights</h3>
              <p className="text-gray-300 mb-4">Comprehensive analytics and reporting capabilities.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Real-time monitoring
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Custom dashboards
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Data visualization
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Performance metrics
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">

              <div className="w-12 h-12 text-emerald-400 mb-4 flex items-center justify-center bg-emerald-500/20 rounded-lg">

                <span className="text-2xl">🎯</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">

            <Link 
              href="/contact" 
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors inline-flex items-center"
            >
              Get Started
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Page;
