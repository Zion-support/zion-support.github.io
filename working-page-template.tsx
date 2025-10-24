'use client'
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface WorkingPageProps {
  title: string;
  description: string;
}

const WorkingPage: React.FC<WorkingPageProps> = ({ title, description }) => {
  return (
    <>
      <Head>
        <title>{title} | Zion Tech Group</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${title} | Zion Tech Group`} />
        <meta property="og:description" content={description} />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">{title}</h1>
          <p className="text-lg text-gray-300 mb-8">{description}</p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default WorkingPage;