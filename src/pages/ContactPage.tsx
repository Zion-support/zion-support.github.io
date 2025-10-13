import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ContactPage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Contact Us | Zion Tech Group
        <meta
          name="description"
          content="Get in touch with Zion Tech Group for AI solutions, digital transformation, and enterprise automation services."
        />
        <meta
          name="keywords"
          content="contact, get in touch, AI consulting, enterprise solutions"
        />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us
            <div className="grid md:grid-cols-2 gap-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch
                <p className="text-gray-600 mb-6">
                  Ready to transform your business with AI? Contact our team of experts to discuss
                  your project and discover how we can help.
                <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Phone
                    <a href="tel:+13024640950" className="text-indigo-600 hover:text-indigo-800">
                      (302) 464-0950
                    <h3 className="font-semibold text-gray-900">Email
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      kleber@ziontechgroup.com
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Send us a Message
                <form className="space-y-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    >
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Send Message
  );
}
