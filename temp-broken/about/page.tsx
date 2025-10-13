<<<<<<< HEAD:app/about/page.tsx
=======
'use client';
<<<<<<< HEAD:temp-broken/about/page.tsx
import React, { Helmet } from 'react-helmet-async';
import React, { Users, Target, Award, Globe } from 'lucide-react';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-9706:temp-broken/about/page.tsx
import React from 'react';
<<<<<<< HEAD:temp-broken/about/page.tsx

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Page</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
<<<<<<< HEAD:app/about/page.tsx
    </div>
  );
}
=======
=======
import { Helmet } from 'react-helmet-async';
import { Users, Target, Award, Globe } from 'lucide-react';

>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc:app/about/page.tsx
const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique needs and challenges.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality solutions and exceptional service.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We help businesses worldwide transform their operations with our advanced technology.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group - Leading provider of AI-powered solutions, cybersecurity, and digital transformation services." />
      </Helmet>
<<<<<<< HEAD:temp-broken/about/page.tsx

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">"
        <div className="max-w-7xl mx-auto text-center">"
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About Zion Tech Group;
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We are a leading technology company specializing in artificial intelligence and IT solutions ;
            that help businesses transform and grow in the digital age.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">"
        <div className="max-w-7xl mx-auto">"
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>"
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
                efficiency, and growth. We believe technology should be accessible, reliable, and transformative.
              </p>
              <p className="text-lg text-gray-600">
                Since our founding, we have been committed to delivering exceptional value to our clients ;
                through innovative solutions and expert guidance.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">"
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>"
              <p className="text-gray-600">"
                To be the world's most trusted partner for AI and IT transformation, '
                helping businesses unlock their full potential through technology.
              </p>
            </div>
=======
      
      <div className="min-h-screen bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, 
              and digital transformation services, helping businesses achieve 300% ROI through innovative technology.
            </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc:app/about/page.tsx
          </div>

<<<<<<< HEAD:temp-broken/about/page.tsx
      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50">"
        <div className="max-w-7xl mx-auto">"
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Core Values;
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">"
                <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />"
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
=======
          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc:app/about/page.tsx
              </div>
            ))}
          </div>

<<<<<<< HEAD:temp-broken/about/page.tsx
      {/* Team Section */}
      <section className="py-20 px-4">"
        <div className="max-w-7xl mx-auto text-center">"
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Team</h2>"
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We are a diverse team of experts in AI, software development, data science, 
            and business strategy, united by our passion for technology and innovation.
          </p>
          <div className="grid md:grid-cols-3 gap-8">"
            <div className="bg-white p-6 rounded-lg shadow-lg">"
              <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">"
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">50+ Experts</h3>"
              <p className="text-gray-600">AI engineers, developers, and consultants</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">"
              <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">"
                <Award className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">10+ Years</h3>"
              <p className="text-gray-600">Combined industry experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">"
              <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">"
                <Globe className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Reach</h3>"
              <p className="text-gray-600">Serving clients worldwide</p>
=======
          {/* Mission Section */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto">
              To empower businesses with cutting-edge AI and IT solutions that drive growth, 
              enhance security, and deliver measurable results. We believe in the transformative 
              power of technology and are committed to helping our clients achieve their goals 
              through innovative, reliable, and scalable solutions.
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-300 mb-8">
              Ready to transform your business with our AI and IT solutions?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Contact Us
              </a>
              <a 
                href="tel:+1-302-464-0950"
                className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Call Us
              </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc:app/about/page.tsx
            </div>
          </div>
        </div>
      </div>
    </>
  );
  );
  );
};

export default AboutPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-9706:temp-broken/about/page.tsx
