import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Privacy() {
  return (
    <Layout
      title='Privacy Policy - Zion Tech Group'
      description='Our commitment to protecting your privacy and data'
    >
      <div className='min-h-screen bg-gray-50'>
        <div className='container mx-auto px-4 py-16'>
          <div className='max-w-4xl mx-auto'>
            <h1 className='text-5xl font-bold text-gray-900 mb-8'>
              Privacy Policy
            </h1>

            <div className='prose prose-lg max-w-none'>
              <p className='text-xl text-gray-600 mb-8'>
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <section className='mb-12'>
                <h2 className='text-3xl font-semibold text-gray-900 mb-6'>
                  Information We Collect
                </h2>
                <p className='text-gray-600 mb-4'>
                  We collect information you provide directly to us, such as
                  when you create an account, use our services, or contact us
                  for support.
                </p>
                <ul className='list-disc list-inside text-gray-600 space-y-2'>
                  <li>Account information (name, email, company)</li>
                  <li>Usage data and analytics</li>
                  <li>Communication preferences</li>
                  <li>Payment information (processed securely)</li>
                </ul>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-semibold text-gray-900 mb-6'>
                  How We Use Your Information
                </h2>
                <p className='text-gray-600 mb-4'>
                  We use the information we collect to provide, maintain, and
                  improve our services, including:
                </p>
                <ul className='list-disc list-inside text-gray-600 space-y-2'>
                  <li>Providing and maintaining our services</li>
                  <li>
                    Processing transactions and sending related information
                  </li>
                  <li>Sending technical notices and support messages</li>
                  <li>Responding to your comments and questions</li>
                  <li>Improving our services and developing new features</li>
                </ul>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-semibold text-gray-900 mb-6'>
                  Information Sharing
                </h2>
                <p className='text-gray-600 mb-4'>
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except as
                  described in this policy.
                </p>
                <p className='text-gray-600'>
                  We may share your information in the following circumstances:
                </p>
                <ul className='list-disc list-inside text-gray-600 space-y-2 mt-4'>
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>
                    With trusted service providers who assist us in operating
                    our services
                  </li>
                </ul>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-semibold text-gray-900 mb-6'>
                  Data Security
                </h2>
                <p className='text-gray-600'>
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. However, no
                  method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-semibold text-gray-900 mb-6'>
                  Your Rights
                </h2>
                <p className='text-gray-600 mb-4'>You have the right to:</p>
                <ul className='list-disc list-inside text-gray-600 space-y-2'>
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of certain communications</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent where applicable</li>
                </ul>
              </section>

              <section className='mb-12'>
                <h2 className='text-3xl font-semibold text-gray-900 mb-6'>
                  Contact Us
                </h2>
                <p className='text-gray-600'>
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                </p>
                <div className='mt-4 p-4 bg-gray-100 rounded-lg'>
                  <p className='text-gray-900 font-medium'>Zion Tech Group</p>
                  <p className='text-gray-600'>
                    Email: privacy@ziontechgroup.com
                  </p>
                  <p className='text-gray-600'>Phone: +1 (555) 123-4567</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
