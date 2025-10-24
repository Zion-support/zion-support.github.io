<<<<<<< HEAD
'use client'
import React from 'react';

const setupTests: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Setup Tests
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This is a placeholder page for Setup Tests.
=======
import React from "react";

interface SetupTestsProps {
  // Add props here
}

const SetupTests: React.FC<SetupTestsProps> = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          SetupTests
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            This is a placeholder for the SetupTests page.
>>>>>>> origin/main
          </p>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default setupTests;
=======
export default SetupTests;
>>>>>>> origin/main
