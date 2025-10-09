import React from 'react';
// import { Metadata } from 'next'; // Removed for Vite
const metadata = {
  title: 'Privacy Policy - Zion Tech Group',
  description:
    'Privacy policy and data protection information for Zion Tech Group services and website.',
};
export { metadata };
const PrivacyPage: React.FC = () => {
  return (
    <>
      <div className='min-h-screen bg-slate-50 py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='bg-white rounded-lg shadow-lg p-8'>
              <h1 className='text-4xl font-bold text-gray-900 mb-8'>
                Privacy Policy
              </h1>
              <div className='prose prose-lg max-w-none'>
                <p className='text-gray-600 mb-6'>
                  <strong>Last updated:</strong>{' '}
                  {new Date().toLocaleDateString()}
                </p>
                <section className='mb-8'>
                  <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                    Information We Collect
                  </h2>
                  <p className='text-gray-600 mb-4'>
                    We collect information you provide directly to us, such as
                    when you create an account, contact us, or use our services.
                  </p>
                  <ul className='list-disc list-inside text-gray-600 space-y-2'>
                    <li>
                      Contact information (name, email address, phone number)
                    </li>
                    <li>Account information (username, password)</li>
                    <li>Business information (company name, job title)</li>
                    <li>Communication preferences</li>
                  </ul>
                </section>
                <section className='mb-8'>
                  <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                    How We Use Your Information
                  </h2>
                  <p className='text-gray-600 mb-4'>
                    We use the information we collect to provide, maintain, and
                    improve our services.
                  </p>
                  <ul className='list-disc list-inside text-gray-600 space-y-2'>
                    <li>Provide and maintain our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Improve our services and develop new features</li>
                  </ul>
                </section>
                <section className='mb-8'>
                  <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                    Information Sharing
                  </h2>
                  <p className='text-gray-600 mb-4'>
                    We do not sell, trade, or otherwise transfer your personal
                    information to third parties without your consent, except as
                    described in this policy.
                  </p>
                </section>
                <section className='mb-8'>
                  <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                    Data Security
                  </h2>
                  <p className='text-gray-600 mb-4'>
                    We implement appropriate security measures to protect your
                    personal information against unauthorized access,
                    alteration, disclosure, or destruction.
                  </p>
                </section>
                <section className='mb-8'>
                  <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                    Contact Us
                  </h2>
                  <p className='text-gray-600'>
                    If you have any questions about this Privacy Policy, please
                    contact us at:
                  </p>
                  <div className='mt-4 p-4 bg-gray-50 rounded-lg'>
                    <p className='text-gray-600'>
                      <strong>Email:</strong> privacy@ziontechgroup.com
                      <br />
                      <strong>Phone:</strong> +1 (302) 600-9898
                      <br />
                      <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PrivacyPage;
