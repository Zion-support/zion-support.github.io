import React from 'react';
import { SEO } from '../components/SEO';

export default function Dashboard() {
  return (
    <>
      <SEO 
        title="Dashboard - Zion Tech Group" 
        description="User dashboard" 
        keywords="dashboard, user, account"
      />
      <div className="min-h-screen bg-zion-blue pt-20 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              Dashboard
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              Welcome to your dashboard
            </p>
            <div className="bg-white rounded-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-zion-slate-dark mb-4">
                Your Dashboard
              </h2>
              <p className="text-zion-slate-light">
                Manage your account and services from here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}