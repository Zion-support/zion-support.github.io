import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

const AICustomerService: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI Customer Service - Zion Tech Group</title>
        <meta name="description" content="Automate and augment customer support experiences with AI agents and analytics" />
      </Head>
      <main className="min-h-screen bg-black text-white">
        <section className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-6">AI Customer Service</h1>
          <p className="text-gray-300">
            Automate and augment customer support experiences with AI agents and analytics.
          </p>
        </section>
      </main>
    </Layout>
  );
};

export default AICustomerService;