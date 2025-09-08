import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Zion</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue to-zion-purple flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-zion-slate-light mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan/80">
            <Link to="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;