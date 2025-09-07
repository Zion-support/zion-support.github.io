import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300">
          Read our terms and conditions for using our services.
        </p>
      </div>
    </div>
  );
};

export default Terms;