import React, { useState } from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // This effect handles token processing (e.g., from magic link)
    // It runs when component mounts or location.search changes
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (token) {
      // Store token in localStorage for now
      localStorage.setItem('zion_token', token);
      // Clear token from URL to prevent re-processing and clean up history
      navigate(location.pathname, { replace: true });
    }
  }, [location.search, location.pathname, navigate]);

  // Simple login form for now
  return (
    <div className="min-h-screen bg-zion-slate-dark flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Sign In</h2>
          <p className="mt-2 text-zion-slate-light">
            Welcome back to Zion Tech Group
          </p>
        </div>
        
        <div className="bg-zion-slate-light/10 p-6 rounded-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 bg-zion-slate-light/20 border border-zion-cyan/20 rounded-md text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
