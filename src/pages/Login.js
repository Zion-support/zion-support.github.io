<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import SEO from '@/components/SEO';
const Login = () => {
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Login - Zion Tech Group", description: "Sign in to your Zion Tech Group account to access your dashboard and services." }), _jsx("div", { className: "min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark", children: _jsxs("div", { className: "container mx-auto px-4 py-20", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h1", { className: "text-5xl font-bold text-white mb-6", children: "Login" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: "Sign in to your Zion Tech Group account to access your dashboard and services." })] }), _jsx("div", { className: "bg-zion-blue-dark/50 backdrop-blur-sm rounded-xl p-8 border border-zion-blue-light/30", children: _jsxs("div", { className: "text-center", children: [_jsx("h2", { className: "text-2xl font-semibold text-white mb-4", children: "Coming Soon" }), _jsx("p", { className: "text-zion-slate-light mb-6", children: "Our login system is currently under development." })] }) })] }) })] }));
};
export default Login;
=======
import React, { useState } from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempt:', { email, password });
    };
    return (<div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO title="Login" description="Access your Zion Tech Group account" keywords="login, sign in, account access, Zion Tech Group" canonical="https://ziontechgroup.com/login"/>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <GradientHeading>Welcome Back</GradientHeading>
            <p className="text-zion-slate-light mt-2">
              Sign in to your account to continue
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-2">
                  Email Address
                </label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan" placeholder="Enter your email"/>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-zion-slate-light mb-2">
                  Password
                </label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan" placeholder="Enter your password"/>
              </div>

              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-zion-slate-light">
                Don't have an account?{' '}
                <a href="/signup" className="text-zion-cyan hover:underline">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>);
}
>>>>>>> origin/chore/fix-links-and-build
