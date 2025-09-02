import React from 'react';
import { SEO } from '../components/SEO';

const About: React.FC = () => {
  return (
    <>
      <SEO 
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge technology solutions."
      />
      <div className="max-w-5xl mx-auto px-4 py-12 text-white">
        <h1 className="text-4xl font-bold mb-4">About Zion Tech Group</h1>
        <p className="text-gray-300 mb-4">
          Zion Tech Group is a leading technology solutions provider dedicated to helping 
          organizations transform their digital infrastructure and achieve their business goals.
        </p>
        <p className="text-gray-300">
          Our team of experts specializes in AI, cybersecurity, cloud infrastructure, 
          and digital transformation services.
        </p>
      </div>
    </>
  );
};

export default About;
