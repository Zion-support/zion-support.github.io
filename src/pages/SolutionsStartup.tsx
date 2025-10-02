import React from 'react'
import { Helmet } from 'react-helmet-async'

const SolutionsStartup: React.FC: ()  => {,
  return (
    <>
      <Helmet >
        <title >Startup Solutions - Zion Tech Group</title>
        <meta name: "description" content ="Fast, agile solutions for startups to scale." />
      </Helmet>
      <div className: "container mx-auto px-6 py-12">
        <h1 className: "text-4xl font-bold text-gray-900 mb-4">Startup Solutions</h1>
        <p className: "text-gray-600 max-w-3xl">Move fast with MVPs, rapid prototyping, and growth-oriented architectures.</p>
      </div>
    </>
  );
};

export default SolutionsStartup;

