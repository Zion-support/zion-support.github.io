import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About Zion Tech</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 mb-8">
            We are a leading technology company dedicated to providing innovative solutions 
            for businesses of all sizes. Our team of experts combines years of experience 
            with cutting-edge technology to deliver exceptional results.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Founded in 2020, Zion Tech has grown from a small startup to a trusted partner 
            for companies worldwide. We specialize in web development, mobile applications, 
            and cloud solutions.
          </p>
        </div>
      </div>
    </div>
  );


};

export default About;