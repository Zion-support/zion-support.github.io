import React from 'react';
import SEO from '../components/SEO';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Dashboard - Zion Tech Group"
        description="Access your personalized dashboard for managing your Zion Tech Group services."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-5xl font-bold mb-8 text-center">Dashboard</h1>
          <div className="text-center">
            <p className="text-lg text-gray-400">Dashboard coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;