import React from 'react';
import { Helmet } from 'react-helmet-async';
import { EnhancedContact } from '@/components/EnhancedContact';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group. Contact our team for technology solutions, AI services, cloud consulting, and digital transformation." />
        <meta name="keywords" content="contact, technology consulting, AI solutions, cloud services, digital transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Helmet>
      
      <EnhancedContact />
    </>
  );
}
