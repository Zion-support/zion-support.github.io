<<<<<<< HEAD
import React from "react";";
import Head from "next/head";";
import Link from "next/link";";
const index = () => {;
  return (;
    <>;
      <Head>;
        <title>index - Zion Tech Group</title>;
        <meta name="description" content="Professional index services"  />;";
      </Head>;
      <div className="min-h-screen bg-gray-50">;";
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">;";,
          <div className="text-center">;";
            <h1 className="text-4xl font-bold text-gray-900 mb-8">;";
              index;
            </h1>;
            <p className="text-xl text-gray-600 mb-12">;";
              Professional index services and solutions;
            </p>;
            <div className="grid md: grid-cols-2 gap-8 mb-12">;";,
              <div className="bg-white p-6 rounded-lg shadow-md">;";
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>;";
                <ul className="text-gray-600 space-y-2">;";
                  <li>• Professional Solutions</li>;
                  <li>• Expert Implementation</li>;
                  <li>• 24/7 Support</li>;
                  <li>• Custom Development</li>;
                </ul>;
              </div>;
              <div className="bg-white p-6 rounded-lg shadow-md">;";
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>;";
                <ul className="text-gray-600 space-y-2">;";
                  <li>• Industry Expertise</li>;
                  <li>• Proven Results</li>;
                  <li>• Scalable Solutions</li>;
                  <li>• Competitive Pricing</li>;
                </ul>;
              </div>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;";,
              <Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors">;";,
                View Pricing;
              </Link>;
              <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover: bg-gray-700 transition-colors">;";,
                Contact Us;
              </Link>;
            </div>;
    </>;
  );,
};
export default index;
=======
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Shield, Zap, Users, Globe, Phone, Mail, MapPin } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Revolutionary AI & IT Services
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions, cloud infrastructure, and innovative micro SAAS platforms designed for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-lg font-semibold"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-indigo-600 text-indigo-400 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors text-lg font-semibold"
              >
                <span>Get Started Today</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              We deliver enterprise-grade solutions with cutting-edge technology and unmatched expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-lg p-6 border border-zion-slate">
              <div className="flex items-center mb-4">
                <Brain className="w-8 h-8 text-indigo-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">AI-Powered Solutions</h3>
              </div>
              <p className="text-zion-slate-light">Advanced artificial intelligence for business automation, analytics, and decision-making.</p>
            </div>
            <div className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-lg p-6 border border-zion-slate">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-indigo-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Enterprise Security</h3>
              </div>
              <p className="text-zion-slate-light">Comprehensive cybersecurity solutions with SOC 2 compliance and 99.9% uptime SLA.</p>
            </div>
            <div className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-lg p-6 border border-zion-slate">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-indigo-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Cloud Infrastructure</h3>
              </div>
              <p className="text-zion-slate-light">Scalable cloud solutions with DevOps automation and microservices architecture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
        <div className="max-w-7xl mx-auto">
          <div className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-lg p-8 border border-zion-slate">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
                Contact us today to discuss your AI and IT needs. Our experts are ready to help you achieve your goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-zion-slate-light">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-lg font-semibold"
              >
                <span>Contact Us Now</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> cursor/add-new-services-and-advertise-them-6239
