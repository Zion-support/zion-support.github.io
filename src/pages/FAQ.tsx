import React from 'react';

const FAQ: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300">
          Find answers to common questions about our services.
        </p>
      </div>
    </div>
  );
};

export default FAQ;