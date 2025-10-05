import React from 'react';
import { Helmet } from 'react-helmet-async';

const Team: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group</title>
        <meta
          name='description'
          content='Meet the expert team behind Zion Tech Group - AI and technology professionals dedicated to your success.'
        />
      </Helmet>

      <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50'>
        <div className='container mx-auto px-4 py-12'>
          <div className='max-w-4xl mx-auto'>
            <h1 className='text-4xl font-bold text-gray-900 mb-6'>Our Team</h1>
            <div className='bg-white rounded-lg shadow-lg p-8'>
              <p className='text-gray-600 mb-4'>
                This page is currently under development. Please check back soon
                to meet our amazing team.
              </p>
              <p className='text-gray-600'>
                For any team-related questions, please contact us at
                team@ziontechgroup.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
