import React from 'react';
import SEO from '../components/SEO';

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Login - Zion Tech Group"
        description="Sign in to your Zion Tech Group account to access your services and dashboard."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-white">
          <h1 className="text-4xl font-bold mb-8 text-center">Login</h1>
          <div className="text-center">
            <p className="text-lg text-gray-400">Login form coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;