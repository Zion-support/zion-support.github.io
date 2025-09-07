import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300">
          Learn about how we protect your privacy and data.
        </p>
      </div>
    </div>
  );
};

export default Privacy;