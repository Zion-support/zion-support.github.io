import React from 'react';
import SEO from '../components/SEO';

export default function Login() {
  return (
    <>
      <SEO 
        title="Login - Zion Tech Group"
        description="Sign in to your Zion Tech Group account."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Login</h1>
            <p className="text-xl text-slate-300">Sign in to your account.</p>
          </div>
        </div>
      </div>
    </>
  );
}