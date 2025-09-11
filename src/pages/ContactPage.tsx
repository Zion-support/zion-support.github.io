import React from 'react';
import { Helmet } from 'react-helmet-async';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for your technology needs. Contact our expert team today." />
      </Helmet>
      
      <div className="contact-page">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Ready to start your next project? Get in touch with our team.</p>
        </div>
      </div>
    </>
  );
};

export default ContactPage;