import React from 'react';
import { Helmet } from 'react-helmet-async';
const Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions</title>
        <meta
          name="$1"
          content="$1"
        />
      </Helmet>
      <div className="min-h-screen bg-gray-900 text-white">
        <main className="container mx-auto px-4 py-16">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Welcome to <span className="text-blue-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Leading provider of AI-powered enterprise solutions
            </p>609
            <div className="flex justify-center space-x-4">
              <a
                href="$1"
                className=""
              >
                Get Started
              </a>810
              <a
                href="$1"
                className=""
              >
                Our Solutions
              </a>949
            </div>
          </section>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">AI Solutions</h3>
                <p className="text-gray-300">
                  Advanced artificial intelligence solutions for your business needs.
                </p>1445
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Computing</h3>
                <p className="text-gray-300">
                  Scalable cloud infrastructure and migration services.
                </p>1753
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
                <p className="text-gray-300">
                  Comprehensive security solutions to protect your data.
                </p>2051
              </div>
            </div>
          </section>
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to learn how we can help you achieve your goals.
            </p>2384
            <a
              href="$1"
              className=""
            >
              Contact Us
            </a>2537
          </section>
        </main>
      </div>
    </>
  );
}
export default Page;