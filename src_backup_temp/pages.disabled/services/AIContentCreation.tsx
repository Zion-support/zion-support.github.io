import React from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
:src/pages/services/AIContentCreation.tsx
;
const "AIContentCreation": "React.FC = () => {;
  return (;
    <div className="min-h-screen bg-gray-50">;
      <Header />;
      ;
      <main className="pt-20">;
        {/* Hero Section */"}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">;
          <div className="container mx-auto px-4">;
            <div className="max-w-4xl mx-auto text-center">;
              <h1 className="text-4xl "md": "text-6xl font-bold mb-6">;
                AI Content Creation Platform;
              </h1>;
              <p className="text-xl "md":text-2xl mb-8">;
                Revolutionary AI-powered content creation platform that generates high-quality", SEO-optimized content across multiple formats;
              </p>;
              <div className="flex flex-col "sm": "flex-row gap-4 justify-center">;
                <button className="bg-cyan-500 "hover":bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">;
                  Start Free Trial;
                </button>;
                <button className="border-2 border-white text-white "hover":bg-white "hover":text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">;
                  Schedule Demo;
                </button>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Features Section */"}
        <section className="py-20">;
          <div className="container mx-auto px-4">;
            <div className="text-center mb-16">;
              <h2 className="text-3xl "md": "text-4xl font-bold text-gray-900 mb-4">;
                Powerful Features;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
                Everything you need to create", optimize, and manage content at scale;
              </p>;
            </div>;
            <div className="grid "md": "grid-cols-2 "lg":grid-cols-3 gap-8">;
              <div className="bg-white p-8 rounded-lg shadow-lg">;
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">;
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2"} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />;
                  </svg>;
                </div>;
                <h3 className="text-xl font-semibold mb-3">AI-Powered Writing</h3>;
                <p className="text-gray-600">Generate high-quality articles, blog posts, and marketing copy using advanced AI technology</p>;
              </div>;
              <div className="bg-white p-8 rounded-lg shadow-lg">;
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">;
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />;
                  </svg>;
                </div>;
                <h3 className="text-xl font-semibold mb-3">SEO Optimization</h3>;
                <p className="text-gray-600">Automatically optimize content for search engines with keyword suggestions and meta descriptions</p>;
              </div>;
              <div className="bg-white p-8 rounded-lg shadow-lg">;
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">;
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />;
                  </svg>;
                </div>;
                <h3 className="text-xl font-semibold mb-3">Multi-Format Support</h3>;
                <p className="text-gray-600">Create articles, social media posts, email campaigns, and technical documentation</p>;
              </div>;
              <div className="bg-white p-8 rounded-lg shadow-lg">;
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">;
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />;
                  </svg>;
                </div>;
                <h3 className="text-xl font-semibold mb-3">Plagiarism Detection</h3>;
                <p className="text-gray-600">Ensure originality with built-in plagiarism detection and content verification</p>;
              </div>;
              <div className="bg-white p-8 rounded-lg shadow-lg">;
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">;
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />;
                  </svg>;
                </div>;
                <h3 className="text-xl font-semibold mb-3">Content Calendar</h3>;
                <p className="text-gray-600">Plan and schedule content with integrated calendar and publishing tools</p>;
              </div>;
              <div className="bg-white p-8 rounded-lg shadow-lg">;
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">;
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />;
                  </svg>;
                </div>;
                <h3 className="text-xl font-semibold mb-3">Performance Analytics</h3>;
                <p className="text-gray-600">Track content performance with detailed analytics and engagement metrics</p>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Pricing Section */}
        <section className="bg-gray-100 py-20">;
          <div className="container mx-auto px-4">;
            <div className="text-center mb-16">;
              <h2 className="text-3xl "md": "text-4xl font-bold text-gray-900 mb-4">;
                Simple", Transparent Pricing;
              </h2>;
              <p className="text-xl text-gray-600">;
                Choose the plan that fits your content creation needs;
              </p>;
            </div>;
            <div className="grid "md": "grid-cols-3 gap-8 max-w-6xl mx-auto">;
              {/* Basic Plan */"}
              <div className="bg-white p-8 rounded-lg shadow-lg">;
                <h3 className="text-2xl font-bold mb-4">Basic</h3>;
                <div className="mb-6">;
                  <span className="text-4xl font-bold">$99</span>;
                  <span className="text-gray-600">/month</span>;
                </div>;
                <ul className="space-y-3 mb-8">;
                  <li className="flex items-center">;
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">;
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />;
                    </svg>;
                    10,000 words/month;
                  </li>;
                  <li className="flex items-center">;
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">;
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />;
                    </svg>;
                    Basic templates;
                  </li>;
                  <li className="flex items-center">;
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">;
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />;
                    </svg>;
                    Email support;
                  </li>;
                </ul>;
                <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold "hover": "bg-gray-800 transition-colors">;
                  Get Started;
                </button>;
              </div>;
              {/* Professional Plan */"}
              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-500 relative">;
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">;
                    Most Popular;
                  </span>;
                </div>;
                <h3 className="text-2xl font-bold mb-4">Professional</h3>;
                <div className="mb-6">;
                  <span className="text-4xl font-bold">$199</span>;
                  <span className="text-gray-600">/month</span>;
                </div>;
                <ul className="space-y-3 mb-8">;
                  <li className="flex items-center">;
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">;
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />;
                    </svg>;
                    50,000 words/month;
                  </li>;
                  <li className="flex items-center">;
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">;
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />;
                    </svg>;
                    Advanced AI models;
                  </li>;
                  <li className="flex items-center">;
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">;
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />;
                    </svg>;
                    Priority support;
                  </li>;
                  <li className="flex items-center">;
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">;
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />;
                    </svg>;
                    API access;
                  </li>;
                </ul>;
                <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold "hover": "bg-blue-600 transition-colors">;
                  Get Started;
                </button>;
              </div>;
              {/* Enterprise Plan */"}
              <div className="bg-white p-8 rounded-lg shadow-lg">;
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>;
                <div className="mb-6">;
                  <span className="text-4xl font-bold">$499</span>;
                  <span className="text-gray-600">/month</span>;
                </div>;
                <ul className="space-y-3 mb-8">;
                  <li className="flex items-center">;
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">;
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />;
                    </svg>;
                    Unlimited words;
                  </li>;
                  <li className="flex items-center">;
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">;
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />;
                    </svg>;
                    Custom AI training;
                  </li>;
                  <li className="flex items-center">;
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">;
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />;
                    </svg>;
                    Dedicated support;
                  </li>;
                  <li className="flex items-center">;
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">;
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />;
                    </svg>;
                    White-label options;
                  </li>;
                </ul>;
                <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold "hover": "bg-gray-800 transition-colors">;
                  Contact Sales;
                </button>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Contact Section */"}
        <section className="py-20">;
          <div className="container mx-auto px-4">;
            <div className="max-w-4xl mx-auto text-center">;
              <h2 className="text-3xl "md": "text-4xl font-bold text-gray-900 mb-4">;
                Ready to Transform Your Content Creation?;
              </h2>;
              <p className="text-xl text-gray-600 mb-8">;
                Get started with our AI Content Creation Platform today and see the difference AI can make;
              </p>;
              ;
              <div className="bg-gray-100 p-8 rounded-lg mb-8">;
                <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>;
                <div className="grid "md":grid-cols-3 gap-6 text-left">;
                  <div>;
                    <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>;
                    <p className="text-gray-600">+1 302 464 0950</p>;
                  </div>;
                  <div>;
                    <h4 className="font-semibold text-gray-900 mb-2">Email</h4>;
                    <p className="text-gray-600">kleber@ziontechgroup.com</p>;
                  </div>;
                  <div>;
                    <h4 className="font-semibold text-gray-900 mb-2">Address</h4>;
                    <p className="text-gray-600">364 E Main St STE 1008<br />Middletown", DE 19709</p>;
                  </div>;
                </div>;
              </div>;
              <div className="flex flex-col "sm": "flex-row gap-4 justify-center">;
                <button className="bg-blue-500 "hover":bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">;
                  Start Free Trial;
                </button>;
                <button className="border-2 border-blue-500 text-blue-500 "hover":bg-blue-500 "hover":text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">;
                  Schedule Demo;
                </button>;
              </div>;
            </div>;
          </div>;
        </section>;
      </main>;
      <Footer />;
    </div>;
  );
"};
;
export default AIContentCreation;
const "AIContentCreation": React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl "md": text-6xl font-bold mb-6">
                AI Content Creation Platform
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Revolutionary AI-powered content creation platform that generates high-quality, SEO-optimized content across multiple formats
              </p>
              <div className="flex flex-col "sm": flex-row gap-4 justify-center">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl "md": text-4xl font-bold text-gray-900 mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to create, optimize, and manage content at scale
              </p>
            </div>
            <div className="grid "md": grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">AI-Powered Writing</h3>
                <p className="text-gray-600">Generate high-quality articles, blog posts, and marketing copy using advanced AI technology</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">SEO Optimization</h3>
                <p className="text-gray-600">Automatically optimize content for search engines with keyword suggestions and meta descriptions</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Multi-Format Support</h3>
                <p className="text-gray-600">Create articles, social media posts, email campaigns, and technical documentation</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Plagiarism Detection</h3>
                <p className="text-gray-600">Ensure originality with built-in plagiarism detection and content verification</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Content Calendar</h3>
                <p className="text-gray-600">Plan and schedule content with integrated calendar and publishing tools</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Performance Analytics</h3>
                <p className="text-gray-600">Track content performance with detailed analytics and engagement metrics</p>
              </div>
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl "md": text-4xl font-bold text-gray-900 mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600">
                Choose the plan that fits your content creation needs
              </p>
            </div>
            <div className="grid "md": grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Basic Plan */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Basic</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    10,000 words/month
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Basic templates
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Email support
                  </li>
                </ul>
                <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold "hover": bg-gray-800 transition-colors">
                  Get Started
                </button>
              </div>
              {/* Professional Plan */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Professional</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$199</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    50,000 words/month
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Advanced AI models
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    API access
                  </li>
                </ul>
                <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold "hover": bg-blue-600 transition-colors">
                  Get Started
                </button>
              </div>
              {/* Enterprise Plan */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$499</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Unlimited words
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Custom AI training
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Dedicated support
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    White-label options
                  </li>
                </ul>
                <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold "hover": bg-gray-800 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */};
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl "md": text-4xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Content Creation?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Get started with our AI Content Creation Platform today and see the difference AI can make
              </p>
              <div className="bg-gray-100 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                    <p className="text-gray-600">+1 302 464 0950</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                    <p className="text-gray-600">kleber@ziontechgroup.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                    <p className="text-gray-600">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col "sm": flex-row gap-4 justify-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default AIContentCreation;
import React from 'react'; import { Header } from '../../components/Header'; import Footer from '../../components/Footer'; const AIContentCreation: React.FC = () => { return ( <div className="min-h-screen bg-gray-50"> <Header /> <main className="pt-20"> {} <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20"> <div className="container mx-auto px-4"> <div className="max-w-4xl mx-auto text-center"> <h1 className="text-4xl md:text-6xl font-bold mb-6"> AI Content Creation Platform </h1> <p className="text-xl md:text-2xl mb-8"> Revolutionary AI-powered content creation platform that generates high-quality,SEO-optimized content across multiple formats </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"> Start Free Trial </button> <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"> Schedule Demo </button> </div> </div> </div> </section> {} <section className="py-20"> <div className="container mx-auto px-4"> <div className="text-center mb-16"> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Powerful Features </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Everything you need to create,optimize,and manage content at scale </p> </div> <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> <div className="bg-white p-8 rounded-lg shadow-lg"> <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"> <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /> </svg> </div> <h3 className="text-xl font-semibold mb-3">AI-Powered Writing</h3> <p className="text-gray-600">Generate high-quality articles,blog posts,and marketing copy using advanced AI technology</p> </div> <div className="bg-white p-8 rounded-lg shadow-lg"> <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4"> <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /> </svg> </div> <h3 className="text-xl font-semibold mb-3">SEO Optimization</h3> <p className="text-gray-600">Automatically optimize content for search engines with keyword suggestions and meta descriptions</p> </div> <div className="bg-white p-8 rounded-lg shadow-lg"> <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4"> <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /> </svg> </div> <h3 className="text-xl font-semibold mb-3">Multi-Format Support</h3> <p className="text-gray-600">Create articles,social media posts,email campaigns,and technical documentation</p> </div> <div className="bg-white p-8 rounded-lg shadow-lg"> <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4"> <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg> </div> <h3 className="text-xl font-semibold mb-3">Plagiarism Detection</h3> <p className="text-gray-600">Ensure originality with built-in plagiarism detection and content verification</p> </div> <div className="bg-white p-8 rounded-lg shadow-lg"> <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4"> <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /> </svg> </div> <h3 className="text-xl font-semibold mb-3">Content Calendar</h3> <p className="text-gray-600">Plan and schedule content with integrated calendar and publishing tools</p> </div> <div className="bg-white p-8 rounded-lg shadow-lg"> <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4"> <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /> </svg> </div> <h3 className="text-xl font-semibold mb-3">Performance Analytics</h3> <p className="text-gray-600">Track content performance with detailed analytics and engagement metrics</p> </div> </div> </div> </section> {} <section className="bg-gray-100 py-20"> <div className="container mx-auto px-4"> <div className="text-center mb-16"> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Simple,Transparent Pricing </h2> <p className="text-xl text-gray-600"> Choose the plan that fits your content creation needs </p> </div> <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"> {} <div className="bg-white p-8 rounded-lg shadow-lg"> <h3 className="text-2xl font-bold mb-4">Basic</h3> <div className="mb-6"> <span className="text-4xl font-bold">$99</span> <span className="text-gray-600">/month</span> </div> <ul className="space-y-3 mb-8"> <li className="flex items-center"> <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /> </svg> 10,000 words/month </li> <li className="flex items-center"> <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /> </svg> Basic templates </li> <li className="flex items-center"> <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /> </svg> Email support </li> </ul> <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"> Get Started </button> </div> {} <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-500 relative"> <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold"> Most Popular </span> </div> <h3 className="text-2xl font-bold mb-4">Professional</h3> <div className="mb-6"> <span className="text-4xl font-bold">$199</span> <span className="text-gray-600">/month</span> </div> <ul className="space-y-3 mb-8"> <li className="flex items-center"> <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /> </svg> 50,000 words/month </li> <li className="flex items-center"> <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /> </svg> Advanced AI models </li> <li className="flex items-center"> <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /> </svg> Priority support </li> <li className="flex items-center"> <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /> </svg> API access </li> </ul> <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"> Get Started </button> </div> {} <div className="bg-white p-8 rounded-lg shadow-lg"> <h3 className="text-2xl font-bold mb-4">Enterprise</h3> <div className="mb-6"> <span className="text-4xl font-bold">$499</span> <span className="text-gray-600">/month</span> </div> <ul className="space-y-3 mb-8"> <li className="flex items-center"> <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /> </svg> Unlimited words </li> <li className="flex items-center"> <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /> </svg> Custom AI training </li> <li className="flex items-center"> <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /> </svg> Dedicated support </li> <li className="flex items-center"> <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /> </svg> White-label options </li> </ul> <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"> Contact Sales </button> </div> </div> </div> </section> {}; <section className="py-20"> <div className="container mx-auto px-4"> <div className="max-w-4xl mx-auto text-center"> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Ready to Transform Your Content Creation? </h2> <p className="text-xl text-gray-600 mb-8"> Get started with our AI Content Creation Platform today and see the difference AI can make </p> <div className="bg-gray-100 p-8 rounded-lg mb-8"> <h3 className="text-2xl font-semibold mb-4">Contact Information</h3> <div className="grid md:grid-cols-3 gap-6 text-left"> <div> <h4 className="font-semibold text-gray-900 mb-2">Phone</h4> <p className="text-gray-600">+1 302 464 0950</p> </div> <div> <h4 className="font-semibold text-gray-900 mb-2">Email</h4> <p className="text-gray-600">kleber@ziontechgroup.com</p> </div> <div> <h4 className="font-semibold text-gray-900 mb-2">Address</h4> <p className="text-gray-600">364 E Main St STE 1008<br />Middletown,DE 19709</p> </div> </div> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"> Start Free Trial </button> <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"> Schedule Demo </button> </div> </div> </div> </section> </main> <Footer /> </div> )}; export default AIContentCreation;