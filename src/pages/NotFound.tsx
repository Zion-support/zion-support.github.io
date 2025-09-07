import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="flex items-center">
              <Home className="h-4 w-4 mr-2" />
              Go Home
            </Button>
          </Link>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;