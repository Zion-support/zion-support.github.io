import React from 'react';
import { Helmet } from 'react-helmet-async';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta
          name='description'
          content='Explore our comprehensive range of technology services including AI, blockchain, cloud computing, and cybersecurity solutions.'
        />
      </Helmet>

      <div className='services-page'>
        <div className='container'>
          <h1>Our Services</h1>
          <p>
            Comprehensive technology solutions to drive your business forward.
          </p>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
