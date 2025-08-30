import React from 'react';
import { SEO } from '../components/SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Home | Zion Tech Group"
        description="Welcome to Zion Tech Group"
        keywords="home, welcome, Zion Tech Group"
        canonical="/"
      />
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Home</h1>
          <p className="text-xl text-slate-300">This page is being updated with new content.</p>
        </div>
      </div>
    </>
  );
};

export default Home;
