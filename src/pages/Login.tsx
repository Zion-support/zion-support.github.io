import React from 'react';
import { SEO } from '../components/SEO';

export default function Login() {
  return (
    <>
      <SEO 
        title="Login - Zion Tech Group" 
        description="Login to your account" 
        keywords="login, account, authentication"
      />
      <div className="min-h-screen bg-zion-blue pt-20 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              Login
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              Sign in to your account
            </p>
            <div className="bg-white rounded-lg p-8 max-w-md mx-auto">
              <h2 className="text-2xl font-semibold text-zion-slate-dark mb-4">
                Sign In
              </h2>
              <p className="text-zion-slate-light">
                Login form would go here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}