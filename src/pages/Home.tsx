import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zion-blue-dark text-white">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Zion Tech Group</h1>
        <p className="text-zion-slate-light">Welcome to the Tech & AI Marketplace</p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/services" className="px-5 py-2 rounded bg-zion-purple hover:bg-zion-purple-dark transition">Explore Services</Link>
          <a href="mailto:kleber@ziontechgroup.com" className="px-5 py-2 rounded border border-zion-purple text-zion-cyan hover:bg-zion-purple/10 transition">Contact Sales</a>
        </div>
        <div className="text-sm text-zion-slate-light space-y-1">
          <p>Mobile: <a className="text-zion-cyan" href="tel:+13024640950">+1 302 464 0950</a></p>
          <p>Email: <a className="text-zion-cyan" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></p>
          <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
        </div>
      </div>
    </div>
  );
}