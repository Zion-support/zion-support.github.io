<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
=======
=======
import { AppLayout } from "@/layout/AppLayout";
>>>>>>> origin/cursor/website-audit-and-enhancement-ac60
import { SEO } from "@/components/SEO";
import TermsOfService from "@/legal/TermsOfService";
import { AppLayout } from "@/layout";
>>>>>>> origin/cursor/website-audit-and-enhancement-50d5

const Terms: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
=======
import { Helmet } from 'react-helmet-async';

const Terms: React.FC = () => {
  return (
<<<<<<< HEAD
    <>
      <Helmet>
        <title>Terms of Service — Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group. Learn about the terms and conditions governing our services." />
        <meta property="og:title" content="Terms of Service — Zion Tech Group" />
        <meta property="og:description" content="Terms of Service for Zion Tech Group. Learn about the terms and conditions governing our services." />
        <meta property="og:url" content="https://ziontechgroup.com/terms" />
        <link rel="canonical" href="https://ziontechgroup.com/terms" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bb5a
=======
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
>>>>>>> origin/cursor/website-audit-and-enhancement-67e4
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Service
              </span>
            </h1>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-67e4
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Please read these terms carefully before using our services
            </p>
          </div>
          
<<<<<<< HEAD
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
                <p className="text-gray-300 mb-4">
                  These Terms of Service ("Terms") govern your use of Zion Tech Group's services, including our website and technology solutions. By accessing or using our Services, you agree to be bound by these Terms.
                </p>
=======
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              These terms and conditions govern your use of Zion Tech Group's services and website.
            </p>
            <p className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
=======
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              These terms and conditions govern your use of Zion Tech Group's services and website.
            </p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bb5a
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-6">Acceptance of Terms</h2>
                <p className="text-gray-300 mb-6">
                  By accessing and using Zion Tech Group's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>

<<<<<<< HEAD
              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Use License</h3>
              <p className="text-gray-300 mb-4">Permission is granted to temporarily download one copy of the materials (information or software) on Zion Tech Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
=======
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Please read these terms carefully before using our services. By using our services, 
              you agree to be bound by these terms.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: January 15, 2025
=======
import { Link } from 'react-router-dom';
import { DocumentTextIcon, ScaleIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-600/20 rounded-full">
                <DocumentTextIcon className="h-12 w-12 text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              These terms govern your use of Zion Tech Group's services and website. 
              Please read them carefully before using our services.
            </p>
            <p className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
>>>>>>> origin/cursor/website-audit-and-enhancement-56af
            </p>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using the services provided by Zion Tech Group ("we," "our," or "us"), 
                you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-600">
                These Terms of Service ("Terms") govern your use of our website, services, and any 
                related applications (collectively, the "Services").
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Description of Services</h2>
              <p className="text-gray-600 mb-4">
                Zion Tech Group provides technology consulting, development, and implementation services, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>AI and machine learning solutions</li>
                <li>Cloud infrastructure and DevOps services</li>
                <li>Cybersecurity consulting and implementation</li>
                <li>Digital transformation consulting</li>
                <li>IT infrastructure design and management</li>
                <li>Custom software development</li>
                <li>Technology strategy and advisory services</li>
              </ul>
              <p className="text-gray-600">
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Accounts and Registration</h2>
              <p className="text-gray-600 mb-4">
                To access certain features of our services, you may be required to create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your account information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>
              <p className="text-gray-600">
                We reserve the right to terminate accounts that violate these terms or for any other reason at our discretion.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Acceptable Use Policy</h2>
              <p className="text-gray-600 mb-4">
                You agree not to use our services to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of our services</li>
                <li>Use our services for any illegal or unauthorized purpose</li>
                <li>Attempt to reverse engineer or decompile our software</li>
>>>>>>> origin/cursor/website-audit-and-enhancement-cf0c
              </ul>

<<<<<<< HEAD
              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Service Terms</h3>
              <p className="text-gray-300 mb-4">When you engage our services, the following terms apply:</p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>We will provide services as outlined in the agreed-upon scope of work</li>
                <li>Services will be performed in a professional and timely manner</li>
                <li>We will communicate regularly about project progress and any issues</li>
                <li>Payment terms will be as specified in the service agreement</li>
                <li>Intellectual property rights will be as outlined in the service agreement</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Payment Terms</h3>
              <p className="text-gray-300 mb-6">
                Our payment terms vary by service type. For consulting services, payment is typically due upon completion of deliverables. 
                For ongoing services, payment is due monthly or as specified in the service agreement.
              </p>
              <p className="text-gray-300 mb-6">
                Late payments may result in suspension of services and may incur additional fees. We reserve the right to charge interest 
                on overdue amounts at the rate of 1.5% per month.
=======
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Intellectual Property Rights</h2>
              <p className="text-gray-600 mb-4">
                All content, features, and functionality of our services, including but not limited to text, 
                graphics, logos, icons, images, audio clips, digital downloads, and software, are owned by 
                Zion Tech Group or its licensors and are protected by copyright, trademark, and other 
                intellectual property laws.
              </p>
              <p className="text-gray-600 mb-4">
                You may not:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Copy, reproduce, distribute, or create derivative works</li>
                <li>Modify, adapt, or reverse engineer our software</li>
                <li>Remove or alter copyright or trademark notices</li>
                <li>Use our intellectual property for commercial purposes without permission</li>
              </ul>
              <p className="text-gray-600">
                Any content you submit to our services remains your property, but you grant us a 
                non-exclusive, worldwide, royalty-free license to use, modify, and distribute such content.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Privacy and Data Protection</h2>
              <p className="text-gray-600 mb-4">
                Your privacy is important to us. Our collection and use of personal information is 
                governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
              <p className="text-gray-600">
                By using our services, you consent to the collection and use of information as described 
                in our Privacy Policy.
>>>>>>> origin/cursor/website-audit-and-enhancement-cf0c
              </p>

<<<<<<< HEAD
              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Intellectual Property</h3>
              <p className="text-gray-300 mb-6">
                The content on this website, including but not limited to text, graphics, logos, images, and software, is the property 
                of Zion Tech Group and is protected by copyright laws. You may not reproduce, distribute, or create derivative works 
                without our express written consent.
              </p>
              <p className="text-gray-300 mb-6">
                For custom development projects, intellectual property rights will be specified in the individual service agreement. 
                Typically, custom code developed for clients becomes their property upon full payment.
=======
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Service Level Agreements</h2>
              <p className="text-gray-600 mb-4">
                For certain services, we may provide specific Service Level Agreements (SLAs) that outline 
                performance standards, availability guarantees, and support response times.
              </p>
              <p className="text-gray-600">
                SLAs are provided separately and may be subject to additional terms and conditions.
>>>>>>> origin/cursor/website-audit-and-enhancement-cf0c
              </p>

<<<<<<< HEAD
              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Confidentiality</h3>
              <p className="text-gray-300 mb-6">
                We understand the sensitive nature of business information and maintain strict confidentiality standards. We will not 
                disclose any confidential information shared with us during the course of our engagement, except as required by law 
                or with your express written consent.
=======
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Payment Terms</h2>
              <p className="text-gray-600 mb-4">
                Payment terms for our services are as follows:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Invoices are due within 30 days of receipt unless otherwise specified</li>
                <li>Late payments may incur additional charges</li>
                <li>We reserve the right to suspend services for non-payment</li>
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>Prices are subject to change with 30 days' notice</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                To the maximum extent permitted by law, Zion Tech Group shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages, including but not 
                limited to loss of profits, data, use, goodwill, or other intangible losses.
              </p>
              <p className="text-gray-600 mb-4">
                Our total liability to you for any claims arising from the use of our services shall 
                not exceed the amount you paid us for the services in the 12 months preceding the claim.
              </p>
              <p className="text-gray-600">
                Some jurisdictions do not allow the exclusion or limitation of liability for consequential 
                or incidental damages, so the above limitation may not apply to you.
>>>>>>> origin/cursor/website-audit-and-enhancement-cf0c
              </p>

<<<<<<< HEAD
              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Limitation of Liability</h3>
              <p className="text-gray-300 mb-6">
                In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable 
                for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, 
                data, use, goodwill, or other intangible losses, resulting from your use of our services.
=======
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Indemnification</h2>
              <p className="text-gray-600">
                You agree to indemnify, defend, and hold harmless Zion Tech Group and its officers, 
                directors, employees, agents, and affiliates from and against any claims, damages, 
                losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising 
                from your use of our services or violation of these Terms.
>>>>>>> origin/cursor/website-audit-and-enhancement-cf0c
              </p>

<<<<<<< HEAD
              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Warranty Disclaimer</h3>
              <p className="text-gray-300 mb-6">
                The information on this website is provided on an "as is" basis. Zion Tech Group makes no warranties, expressed or implied, 
                and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of 
                merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
=======
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Disclaimers</h2>
              <p className="text-gray-600 mb-4">
                Our services are provided "as is" and "as available" without warranties of any kind, 
                either express or implied, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Warranties of merchantability or fitness for a particular purpose</li>
                <li>Warranties that the services will be uninterrupted or error-free</li>
                <li>Warranties regarding the accuracy or reliability of any information</li>
                <li>Warranties that defects will be corrected</li>
              </ul>
              <p className="text-gray-600">
                We do not warrant that our services will meet your specific requirements or that the 
                results obtained from using our services will be accurate or reliable.
>>>>>>> origin/cursor/website-audit-and-enhancement-cf0c
              </p>

<<<<<<< HEAD
              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Termination</h3>
              <p className="text-gray-300 mb-6">
                Either party may terminate the service agreement with written notice. Upon termination:
=======
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Termination</h2>
              <p className="text-gray-600 mb-4">
                These Terms are effective until terminated. We may terminate or suspend your access 
                to our services immediately, without prior notice, for any reason, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Violation of these Terms</li>
                <li>Fraudulent or illegal activity</li>
                <li>Non-payment of fees</li>
                <li>At our sole discretion</li>
              </ul>
              <p className="text-gray-600">
                Upon termination, your right to use our services will cease immediately, and we may 
                delete your account and data.
>>>>>>> origin/cursor/website-audit-and-enhancement-cf0c
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>We will complete any work in progress up to the termination date</li>
                <li>You will pay for services rendered up to the termination date</li>
                <li>We will return any materials or data belonging to you</li>
                <li>Confidentiality obligations will continue to apply</li>
              </ul>

<<<<<<< HEAD
              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Governing Law</h3>
              <p className="text-gray-300 mb-6">
                These terms shall be governed by and construed in accordance with the laws of the State of California, United States, 
                without regard to its conflict of law provisions. Any disputes arising from these terms or our services will be resolved 
                through binding arbitration in San Francisco, California.
=======
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Governing Law and Dispute Resolution</h2>
              <p className="text-gray-600 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the 
                State of California, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-600 mb-4">
                Any disputes arising from these Terms or your use of our services shall be resolved 
                through binding arbitration in accordance with the rules of the American Arbitration 
                Association, with the venue in San Francisco, California.
              </p>
              <p className="text-gray-600">
                You agree to waive any right to a jury trial or to participate in a class action lawsuit.
>>>>>>> origin/cursor/website-audit-and-enhancement-cf0c
              </p>

<<<<<<< HEAD
              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Changes to Terms</h3>
              <p className="text-gray-300 mb-6">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. 
                Your continued use of our services after changes are posted constitutes acceptance of the new terms.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Contact Information</h3>
              <p className="text-gray-300 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-white/5 rounded-lg p-4 mb-6">
                <p className="text-gray-300"><strong>Email:</strong> legal@ziontechgroup.com</p>
                <p className="text-gray-300"><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p className="text-gray-300"><strong>Address:</strong> San Francisco, CA</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Services Description</h2>
                <p className="text-gray-300 mb-4">
                  Zion Tech Group provides technology consulting, AI solutions, cloud services, cybersecurity, and digital transformation services. We reserve the right to modify or discontinue any service at any time.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">User Responsibilities</h2>
                <p className="text-gray-300 mb-4">
                  When using our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Respect intellectual property rights</li>
                  <li>Maintain the security of your account</li>
                </ul>
              </div>

<<<<<<< HEAD
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>
                <p className="text-gray-300 mb-4">
                  Payment for our services is due according to the terms specified in your service agreement. We offer various payment plans and can customize terms for enterprise clients.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
                <p className="text-gray-300 mb-4">
                  All content, features, and functionality on our website and services are owned by Zion Tech Group and are protected by copyright, trademark, and other intellectual property laws.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                <p className="text-gray-300 mb-4">
                  Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
                <p className="text-gray-300 mb-4">
                  We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including breach of these Terms.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
                <p className="text-gray-300 mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                <p className="text-gray-300 mb-4">
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-gray-300">
                    <strong>Email:</strong> legal@ziontechgroup.com<br />
                    <strong>Phone:</strong> +1 (555) 123-4567<br />
                    <strong>Address:</strong> San Francisco, CA
                  </p>
                </div>
              </div>

              <div className="text-center pt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
=======
                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Service Description</h3>
                <p className="text-gray-300 mb-6">
                  Zion Tech Group provides technology consulting, development, and digital transformation services including but not limited to:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• AI Solutions and Machine Learning</li>
                  <li>• Cloud Migration and DevOps</li>
                  <li>• Cybersecurity and IT Infrastructure</li>
                  <li>• Digital Transformation Consulting</li>
                  <li>• Custom Software Development</li>
                  <li>• Technology Strategy and Planning</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Service Terms</h3>
                <p className="text-gray-300 mb-4">When you engage our services, the following terms apply:</p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• Services are provided on an "as-is" basis</li>
                  <li>• Project timelines and deliverables are estimates and may vary</li>
                  <li>• Payment terms are specified in individual service agreements</li>
                  <li>• Intellectual property rights are governed by separate agreements</li>
                  <li>• Confidentiality obligations apply to all engagements</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">User Responsibilities</h3>
                <p className="text-gray-300 mb-4">As a user of our services, you agree to:</p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• Provide accurate and complete information</li>
                  <li>• Maintain the security of your account credentials</li>
                  <li>• Use services only for lawful purposes</li>
                  <li>• Not interfere with service operation</li>
                  <li>• Comply with all applicable laws and regulations</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Intellectual Property</h3>
                <p className="text-gray-300 mb-6">
                  All content, features, and functionality on this website, including but not limited to text, graphics, logos, and software, are owned by Zion Tech Group and are protected by copyright, trademark, and other intellectual property laws.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Confidentiality</h3>
                <p className="text-gray-300 mb-6">
                  We maintain strict confidentiality regarding client information and project details. All proprietary and confidential information shared with us is protected and will not be disclosed to third parties without explicit consent, except as required by law.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Limitation of Liability</h3>
                <p className="text-gray-300 mb-6">
                  Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Warranty Disclaimer</h3>
                <p className="text-gray-300 mb-6">
                  Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Termination</h3>
                <p className="text-gray-300 mb-6">
                  Either party may terminate this agreement at any time with written notice. Upon termination:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• All outstanding obligations must be fulfilled</li>
                  <li>• Access to services will be discontinued</li>
                  <li>• Confidentiality obligations will continue to apply</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Governing Law</h3>
                <p className="text-gray-300 mb-6">
                  These terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved in the courts of San Francisco County, California.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Changes to Terms</h3>
                <p className="text-gray-300 mb-6">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after such changes constitutes acceptance of the modified terms.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Entire Agreement</h3>
                <p className="text-gray-300 mb-6">
                  These terms constitute the entire agreement between you and Zion Tech Group regarding the use of our services, superseding any prior agreements between you and Zion Tech Group relating to your use of our services.
                </p>
              </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bb5a
            </div>
=======
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Force Majeure</h2>
              <p className="text-gray-600">
                We shall not be liable for any failure to perform our obligations under these Terms 
                due to circumstances beyond our reasonable control, including but not limited to acts 
                of God, natural disasters, war, terrorism, riots, fire, labor disputes, or government actions.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">15. Severability</h2>
              <p className="text-gray-600">
                If any provision of these Terms is found to be unenforceable or invalid, that provision 
                will be limited or eliminated to the minimum extent necessary so that these Terms will 
                otherwise remain in full force and effect and enforceable.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">16. Entire Agreement</h2>
              <p className="text-gray-600">
                These Terms, together with our Privacy Policy and any other agreements referenced herein, 
                constitute the entire agreement between you and Zion Tech Group regarding the use of our services.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">17. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these Terms at any time. We will notify you of any 
                changes by posting the new Terms on this page and updating the "Last updated" date.
              </p>
              <p className="text-gray-600">
                Your continued use of our services after any changes constitutes acceptance of the new Terms.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">18. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> legal@ziontechgroup.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Address:</strong> 123 Tech Street, Innovation District, CA 90210
                </p>
                <p className="text-gray-700">
                  <strong>Legal Department:</strong> legal@ziontechgroup.com
                </p>
              </div>
            </div>
=======
      {/* Terms Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Acceptance of Terms */}
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <ScaleIcon className="h-8 w-8 text-green-400 mr-3" />
                Acceptance of Terms
              </h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300">
                  By accessing and using Zion Tech Group's website and services, you accept and agree to be 
                  bound by the terms and provision of this agreement. If you do not agree to abide by the 
                  above, please do not use this service.
                </p>
              </div>
            </div>

            {/* Services Description */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Description of Services</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">
                  Zion Tech Group provides technology consulting and implementation services including:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• AI and machine learning solutions</li>
                  <li>• Quantum computing services</li>
                  <li>• Cybersecurity and IT infrastructure</li>
                  <li>• Digital transformation consulting</li>
                  <li>• Custom software development</li>
                  <li>• Technology strategy and planning</li>
                </ul>
              </div>
            </div>

            {/* User Responsibilities */}
            <div>
              <h2 className="text-3xl font-bold mb-6">User Responsibilities</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">As a user of our services, you agree to:</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Provide accurate and complete information</li>
                  <li>• Maintain the security of your account credentials</li>
                  <li>• Use our services in compliance with applicable laws</li>
                  <li>• Not attempt to reverse engineer or hack our systems</li>
                  <li>• Respect intellectual property rights</li>
                  <li>• Report any security vulnerabilities you discover</li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Intellectual Property Rights</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">
                  All content, features, and functionality on our website and in our services, including but 
                  not limited to text, graphics, logos, software, and designs, are owned by Zion Tech Group 
                  and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-gray-300">
                  You may not reproduce, distribute, modify, or create derivative works without our express 
                  written consent.
                </p>
              </div>
            </div>

            {/* Privacy and Data */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Privacy and Data Protection</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">
                  Your privacy is important to us. Our collection and use of personal information is governed 
                  by our Privacy Policy, which is incorporated into these Terms of Service by reference.
                </p>
                <p className="text-gray-300">
                  By using our services, you consent to the collection and use of information as outlined in 
                  our{' '}
                  <Link to="/privacy" className="text-blue-400 hover:text-blue-300 underline">
                    Privacy Policy
                  </Link>.
                </p>
              </div>
            </div>

            {/* Service Availability */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Service Availability</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">
                  We strive to maintain high availability of our services, but we do not guarantee uninterrupted 
                  access. Our services may be temporarily unavailable due to:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Scheduled maintenance and updates</li>
                  <li>• Technical issues or system failures</li>
                  <li>• Force majeure events</li>
                  <li>• Network or infrastructure problems</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  We will provide reasonable notice for scheduled maintenance when possible.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Limitation of Liability</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">
                  To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including but not limited to:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Loss of profits or business opportunities</li>
                  <li>• Data loss or corruption</li>
                  <li>• Service interruptions</li>
                  <li>• Third-party actions or content</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  Our total liability shall not exceed the amount paid by you for the specific service in question.
                </p>
              </div>
            </div>

            {/* Disclaimers */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Disclaimers</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">
                  Our services are provided "as is" and "as available" without warranties of any kind, either 
                  express or implied. We disclaim all warranties including:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Warranties of merchantability</li>
                  <li>• Fitness for a particular purpose</li>
                  <li>• Non-infringement</li>
                  <li>• Accuracy or completeness of information</li>
                </ul>
              </div>
            </div>

            {/* Indemnification */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Indemnification</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300">
                  You agree to indemnify and hold harmless Zion Tech Group, its officers, directors, employees, 
                  and agents from and against any claims, damages, losses, and expenses arising from your use 
                  of our services or violation of these terms.
                </p>
              </div>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Termination</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">
                  We may terminate or suspend your access to our services at any time, with or without cause, 
                  with or without notice, effective immediately.
                </p>
                <p className="text-gray-300">
                  Upon termination, your right to use the services will cease immediately, and we may delete 
                  or deactivate your account and related information.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Governing Law and Dispute Resolution</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">
                  These terms shall be governed by and construed in accordance with the laws of the United States, 
                  without regard to conflict of law principles.
                </p>
                <p className="text-gray-300">
                  Any disputes arising from these terms or your use of our services shall be resolved through 
                  binding arbitration in accordance with the rules of the American Arbitration Association.
                </p>
              </div>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Changes to Terms</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300">
                  We reserve the right to modify these terms at any time. We will notify users of any material 
                  changes by posting the updated terms on our website and updating the "Last updated" date. 
                  Your continued use of our services after such changes constitutes acceptance of the new terms.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a></p>
                  <p>Phone: <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 (302) 464-0950</a></p>
                  <p>Address: Zion Tech Group, Global Operations</p>
                </div>
              </div>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-56af
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Questions About Our Terms?</h2>
          <p className="text-xl text-blue-100 mb-8">
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-56af
            We're here to help clarify any questions you may have about our terms of service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
<<<<<<< HEAD
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Us
            </Link>
            <a
              href="mailto:legal@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Email Legal Team
            </a>
>>>>>>> origin/cursor/website-audit-and-enhancement-cf0c
=======
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing and using Zion Tech Group's services, you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Description of Service</h2>
              <p className="text-gray-300 mb-4">
                Zion Tech Group provides technology consulting, AI solutions, cloud services, 
                cybersecurity, and digital transformation services. We reserve the right to modify, 
                suspend, or discontinue any part of our services at any time.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
              <p className="text-gray-300 mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Report any security vulnerabilities you discover</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
              <p className="text-gray-300 mb-4">
                All content, features, and functionality of our services are owned by Zion Tech Group 
                and are protected by international copyright, trademark, and other intellectual property laws. 
                You may not reproduce, distribute, or create derivative works without our express written consent.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">
                In no event shall Zion Tech Group be liable for any indirect, incidental, special, 
                consequential, or punitive damages, including without limitation, loss of profits, data, 
                use, goodwill, or other intangible losses, resulting from your use of our services.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Privacy and Data Protection</h2>
              <p className="text-gray-300 mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs 
                your use of our services, to understand our practices regarding the collection and use 
                of your information.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Termination</h2>
              <p className="text-gray-300 mb-4">
                We may terminate or suspend your access to our services immediately, without prior notice 
                or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
              <p className="text-gray-300 mb-4">
                These Terms shall be interpreted and governed by the laws of the United States, 
                without regard to its conflict of law provisions.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
              <p className="text-gray-300 mb-4">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, 
                we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-gray-300">
                  <strong>Email:</strong> legal@ziontechgroup.com<br />
                  <strong>Phone:</strong> +1 (302) 464-0950<br />
                  <strong>Address:</strong> Zion Tech Group, Legal Department
                </p>
              </div>
            </div>
            
            <div className="text-center pt-8 space-x-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link
                to="/privacy"
                className="inline-flex items-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Privacy Policy
              </Link>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-67e4
=======
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
            >
              Contact Us
            </Link>
            <Link
              to="/privacy"
              className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg"
            >
              View Privacy Policy
            </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-56af
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About Our Terms?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us if you need clarification on any of our terms and conditions.
            </p>
            <a
              href="mailto:legal@ziontechgroup.com"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Contact Legal Team
            </a>
          </div>
        </section>
      </div>
    </>
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bb5a
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-67e4
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-56af
=======
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-ac60
    <AppLayout>
      <SEO
<<<<<<< HEAD
        title="Terms of Service | Zion Tech Group"
        description="The terms and conditions for using the Zion Tech Group platform."
=======
        title="Terms of Service"
        description="The terms and conditions for using the Zion platform."
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-39b5
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-35e5
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-ac60
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-aa85
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-beb3
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-24ce
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-45a9
        canonical="https://ziontechgroup.com/terms"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <TermsOfService />
        </div>
      </main>
    </AppLayout>
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-50d5
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-ac60
  );
};

export default Terms;