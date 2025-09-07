import React from "react";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import { Satellite, Rocket, Globe, Shield } from "lucide-react";

export default function SpaceTechPage() {
  return (
    <Layout>
      <Head>
        <title>Space Technology | Zion Tech Group</title>
        <meta
          name="description"
          content="Space mission control, satellite operations, and secure communications consulting."
        />
        <link rel="canonical" href="https://ziontechgroup.com/space-tech" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <header className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-4">
              <Satellite className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Space Technology
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced space mission control, satellite operations, and secure communications consulting for the next generation of space exploration.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🛰️</div>
              <h3 className="text-xl font-semibold mb-2">Satellite Operations</h3>
              <p className="text-gray-600">
                Comprehensive satellite management and operations services for commercial and government missions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Mission Control</h3>
              <p className="text-gray-600">
                Advanced mission control systems and real-time monitoring for space operations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-2">Secure Communications</h3>
              <p className="text-gray-600">
                Encrypted communication systems for space-based operations and data transmission.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Launch Your Space Mission?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Contact us to discuss your space technology needs and how we can help you achieve your mission objectives.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}