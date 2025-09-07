<<<<<<< HEAD
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
const SEOAudit: NextPage = $2;
export default SEOAudit,
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function seoaudit() {
  return (
    <Layout>
      <Head>
        <title>Seo Audit - Zion Tech Group</title>
        <meta name="description" content="Seo Audit solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Seo Audit</h1>
          <p className="text-lg text-gray-600">
            Professional seo audit solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
