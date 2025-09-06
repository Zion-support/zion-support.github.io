import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="hero bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to Zion Tech</h1>
          <p className="text-xl mb-8">Leading technology solutions for modern businesses</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-600">Modern, responsive websites built with the latest technologies.</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Mobile Apps</h3>
              <p className="text-gray-600">Native and cross-platform mobile applications.</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Cloud Solutions</h3>
              <p className="text-gray-600">Scalable cloud infrastructure and deployment solutions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;