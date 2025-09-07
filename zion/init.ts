import React from 'react';
import Layout from '../components/Layout';

export default function ZionInit() {
  return (
    <Layout 
      title="Zion Init - Genesis" 
      description="The beginning of something extraordinary"
    >
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-8">
              Zion Genesis
            </h1>
            <p className="text-2xl mb-12 opacity-90">
              The beginning of something extraordinary
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-8 opacity-80">
                Welcome to the genesis of Zion Tech Group - where innovation meets
                purpose, and technology transforms the world.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-16">
                <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-4">Vision</h3>
                  <p className="opacity-90">
                    To create a world where technology serves humanity's highest potential.
                  </p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-4">Mission</h3>
                  <p className="opacity-90">
                    Building the future through innovative AI and technology solutions.
                  </p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-4">Purpose</h3>
                  <p className="opacity-90">
                    Empowering businesses and individuals to achieve their greatest potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}