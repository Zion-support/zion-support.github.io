import React from 'react';

const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Meet the talented professionals behind Zion Tech Group's innovative solutions.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Team Profiles Coming Soon</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're preparing detailed profiles of our team members and their expertise.
          </p>
          <a 
            href="/contact" 
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-block"
          >
            Meet Our Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;