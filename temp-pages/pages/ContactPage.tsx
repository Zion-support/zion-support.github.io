"use client";
import React from 'react';

<<<<<<< HEAD:temp-pages/pages/ContactPage.tsx
interface ContactPageProps {className?: string,}

const ContactPage: React.FC<ContactPageProps> = ({ className = "" }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
      <h2>ContactPage</h2>
      <p>This is a clean, functional component.</p>
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          ContactPage
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
>>>>>>> main:app/pages/ContactPage.tsx
  );
};

export default ContactPage;