import React from 'react';
import { Helmet } from 'react-helmet-async';

const Team: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Team - Zion Tech Group</title>
        <meta name="description" content="Meet the expert team behind Zion Tech Group's AI and IT solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Team
              </h1>
              <p className="text-xl md:text-2xl">
                Meet the experts behind our innovative solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Coming Soon</h2>
              <p className="text-lg text-gray-600">
                We're working on introducing our team members. Check back soon!
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Team;