import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Welcome Back</h1>
            <p className="text-zion-slate-light">
              Sign in to your account to continue
            </p>
          </div>
          
          <div className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-lg p-8 border border-zion-cyan/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                  className="w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan" 
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-zion-slate-light mb-2">
                  Password
                </label>
                <input 
                  type="password" 
                  id="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                  className="w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan" 
                  placeholder="Enter your password"
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-2 px-4 rounded-md hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300"
              >
                Sign In
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-zion-slate-light">
                Don't have an account?{' '}
                <Link to="/signup" className="text-zion-cyan hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
