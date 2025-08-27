import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Create Account</h1>
            <p className="text-zion-slate-light">
              Join Zion Tech Group and transform your business with cutting-edge technology
            </p>
          </div>
          
          <div className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-lg p-8 border border-zion-cyan/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-zion-slate-light mb-2">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required 
                    className="w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan" 
                    placeholder="First Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-zion-slate-light mb-2">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required 
                    className="w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan" 
                    placeholder="Last Name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan" 
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-zion-slate-light mb-2">
                  Company (Optional)
                </label>
                <input 
                  type="text" 
                  id="company" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan" 
                  placeholder="Company Name"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-zion-slate-light mb-2">
                  Phone (Optional)
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan" 
                  placeholder="Phone Number"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-zion-slate-light mb-2">
                  Password
                </label>
                <input 
                  type="password" 
                  id="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required 
                  className="w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan" 
                  placeholder="Create a password"
                />
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-zion-slate-light mb-2">
                  Confirm Password
                </label>
                <input 
                  type="password" 
                  id="confirmPassword" 
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required 
                  className="w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan" 
                  placeholder="Confirm your password"
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-2 px-4 rounded-md hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300"
              >
                Create Account
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-zion-slate-light">
                Already have an account?{' '}
                <Link to="/login" className="text-zion-cyan hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
