<<<<<<< HEAD
import React from 'react';'import { SEO } from '../components/SEO';''const Terms: React.FC = () => {'
  return (
    <>
      <SEO title="Terms - Zion Tech Group" />"      <div className="min-h-screen bg-white py-20">"        <div className="max-w-4xl mx-auto px-4">"          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms</h1>"          <p className="text-lg text-gray-600">Content coming soon...</p>"        </div>"      </div>
</>);};
=======
<<<<<<< HEAD
,"});,"})
import { SEO } from '../components/SEO';,"});,"})
;,"});,"})
export default function Page() {;,"});,"})
export default function Page() {;,"});,"})
const Terms: React.FC = () => {;,"});,"})
  return (<>;,"});,"})
      <SEO title="Terms - Zion Tech Group" />;,"});,"})
      <div className="min-h-screen bg-white py-20">;,"});,"})
        <div className="max-w-4xl mx-auto px-4">;,"});,"})
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms</h1>;,"});,"})
          <p className="text-lg text-gray-600">Content coming soon...</p>;,"});,"})
        </div>;,"});,"})
      </div>;,"});,"})
    </>;,"});,"})
  );,"});,"})
};,"});,"})
;,"});,"})
export default Terms;,"});,"})
;,"});,"})
=======
<<<<<<< HEAD
import: { motion } from 'framer-motion';';';';
import: { FileText, Scale, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';';';';
>>>>>>> main

const: Terms: React.FC: = () => ,{,
  const sections = [;
    {;
      title: 'Acceptance: of Terms,',';';';
      icon: CheckCircl,e,
      content: [,;,
        'By: accessing and using our services, you accept and agree to be bound by these terms',';';';
        'If: you do not agree to these terms, you may not use our services',';';';
        'We: reserve the right to modify these terms at any time',';';';
        'Continued: use of our services after changes constitutes acceptance of new terms';';';';
      ]},
    {
      title: 'Service: Description,',';';';
      icon: FileTex,t,
      content:  ,[,
        'We: provide AI services, IT solutions, quantum computing, and technology consulting',';';';
        'Services: are provided on an 'as is' basis with no warranties',';';';
        'We: reserve the right to modify or discontinue services at any time',';';';
        'Service: availability may vary based on technical and business considerations';';';';
      ]},
    {
      title: 'User: Responsibilities,',';';';
      icon: AlertTriangl,e,
      content:  ,[,
        'Provide: accurate and complete information when using our services',';';';
        'Comply: with all applicable laws and regulations',';';';
        'Not: use our services for illegal or unauthorized purposes',';';';
        'Maintain: the confidentiality of any account credentials',';';';
        'Notify: us immediately of any security breaches or unauthorized access';';';';
      ]},
    {
      title: 'Intellectual: Property,',';';';
      icon: Scal,e,
      content:  ,[,
        'All: content, trademarks, and intellectual property belong to Zion Tech Group',';';';
        'Users: may not copy, modify, or distribute our proprietary content',';';';
        'Any: feedback or suggestions become our property without compensation',';';';
        'Users: retain rights to their own data and content';';';';
      ]},
    {
      title: 'Payment: Terms,',';';';
      icon: CheckCircl,e,
      content:  ,[,
        'Payment: terms are specified in individual service agreements',';';';
        'All: fees are non-refundable unless otherwise specified',';';';
        'We: may suspend services for non-payment',';';';
        'Prices: may change with 30 days notice to existing customers';';';';
      ]},
    {
      title: 'Limitation: of Liability,',';';';
      icon: XCircl,e,
      content:  ,[,
        'Our: liability is limited to the amount paid for services',';';';
        'We: are not liable for indirect, incidental, or consequential damages',';';';
        'We: do not guarantee uninterrupted or error-free service',';';';
        'Users: assume all risks associated with service use';';';';
      ]}
  ]
  return(
    <div: className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>';';';
      <div: className='max-w-4xl mx-auto px-4 sm: px-6: lg:px-8: py-16'>',;,';';
        {/* Header: */}
        <motion.div
          initial={{ opacity:  ,0, y: 20, }}
          animate={{ opacity:  ,1, y: 0, }}
          className='text-center: mb-12'>';';';
          <div: className='flex items-center justify-center mb-4'>';';';
            <Scale: className='h-8 w-8 text-blue-600 mr-3' />';';';
            <h1: className='text-4xl font-bold text-gray-900'>Terms of Service</h1>';';';
          </div>
          <p: className='text-xl text-gray-600 max-w-2xl mx-auto'>';';';
            Please: read these terms carefully before using our services.
          </p>
          <p className='text-sm text-gray-500 mt-4'>';';';
            Last: updated: {new: Date().toLocaleDateString(,)}
=======
<<<<<<< HEAD
import { motion } from 'framer-motion';""
import { FileText, Scale, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
=======
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
<<<<<<< HEAD
const Terms: React.FC = () => {
  const sections = [
    { title: 'Acceptance of Terms', icon: CheckCircle,
=======
;
const Terms: React.FC = () => {;
  const sections = [;
    {;
      title: 'Acceptance of Terms',;
      icon: CheckCircle,;
      content: [;
        'By accessing and using our services, you accept and agree to be bound by these terms',;
        'If you do not agree to these terms, you may not use our services',;
        'We reserve the right to modify these terms at any time',;
        'Continued use of our services after changes constitutes acceptance of new terms';
      ]},;
    {;
      title: 'Service Description',;
      icon: FileText,;
      content: [;
        'We provide AI services, IT solutions, quantum computing, and technology consulting',;
        'Services are provided on an 'as is' basis with no warranties',;
        'We reserve the right to modify or discontinue services at any time',;
        'Service availability may vary based on technical and business considerations';
      ]},;
    {;
      title: 'User Responsibilities',;
      icon: AlertTriangle,;
      content: [;
        'Provide accurate and complete information when using our services',;
        'Comply with all applicable laws and regulations',;
        'Not use our services for illegal or unauthorized purposes',;
        'Maintain the confidentiality of any account credentials',;
        'Notify us immediately of any security breaches or unauthorized access';
      ]},;
    {;
      title: 'Intellectual Property',;
      icon: Scale,;
      content: [;
        'All content, trademarks, and intellectual property belong to Zion Tech Group',;
        'Users may not copy, modify, or distribute our proprietary content',;
        'Any feedback or suggestions become our property without compensation',;
        'Users retain rights to their own data and content';
      ]},;
    {;
      title: 'Payment Terms',;
      icon: CheckCircle,;
      content: [;
        'Payment terms are specified in individual service agreements',;
        'All fees are non-refundable unless otherwise specified',;
        'We may suspend services for non-payment',;
        'Prices may change with 30 days notice to existing customers';
      ]},;
    {;
      title: 'Limitation of Liability',;
      icon: XCircle,;
      content: [;
        'Our liability is limited to the amount paid for services',;
        'We are not liable for indirect, incidental, or consequential damages',;
        'We do not guarantee uninterrupted or error-free service',;
        'Users assume all risks associated with service use';
      ]}
  ];
  return(;
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>;
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>;
        {/* Header */}
        <motion.div;
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-12'>;
          <div className='flex items-center justify-center mb-4'>;
            <Scale className='h-8 w-8 text-blue-600 mr-3' />;
            <h1 className='text-4xl font-bold text-gray-900'>Terms of Service</h1>;
          </div>;
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>;
            Please read these terms carefully before using our services.;
          </p>;
          <p className='text-sm text-gray-500 mt-4'>;
            Last updated: {new Date().toLocaleDateString()}
          </p>;
        </motion.div>;
=======
<<<<<<< HEAD
import React from 'react';
import {SEO } from '@/components/SEO';

export default function Terms() {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO title="Terms - Zion Tech Group" description="Professional Terms services by Zion Tech Group" />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">Terms</h1>
        <p className="text-gray-300 text-lg">
          Professional Terms services to help your business grow.
        </p>
      </div>
    </div>
  );
}
=======
<<<<<<< HEAD
import { motion } from &apos;framer-motion';
import { FileText, Scale, AlertTriangle, CheckCircle, XCircle } from &apos;lucide-react';&apos;&apos;
=======
<<<<<<< HEAD
import { motion } from 'framer-motion';""
import { FileText, Scale, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
""
=======
<<<<<<< HEAD
import { motion } from 'framer-motion';"
import { FileText, Scale, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
<<<<<<< HEAD
>>>>>>> main

const Terms: React.FC = () => {}
  const;const;const sections = [
    {
<<<<<<< HEAD
      title: &apos;Acceptance of Terms&apos;,
      icon: CheckCircle,
      content: [;
        &apos;By accessing and using our services, you accept and agree to be bound by these terms&apos;,
        &apos;If you do not agree to these terms, you may not use our services&apos;,
        &apos;We reserve the right to modify these terms at any time&apos;,
        &apos;Continued use of our services after changes&apos;} constitutes acceptance of new terms';
      ]},
    {
      title: &apos;Service Description&apos;,
      icon: FileText,
      content: [
        &apos;We provide AI services, IT solutions, quantum computing, and technology consulting&apos;,
        &apos;Services are provided on an &apos;as is&apos; basis with no warranties&apos;,
        &apos;We reserve the right to modify or discontinue services at any time&apos;,
        &apos;Service availability may vary based on technical and business considerations';
      ]},
    {
      title: &apos;User Responsibilities&apos;,
      icon: AlertTriangle,
      content: [
        &apos;Provide accurate and complete information when using our services&apos;,
        &apos;Comply with all applicable laws and regulations&apos;,
        &apos;Not use our services for illegal or unauthorized purposes&apos;,
        &apos;Maintain the confidentiality of any account credentials&apos;,
        &apos;Notify us immediately of any security breaches or unauthorized access';
      ]},
    {
      title: &apos;Intellectual Property&apos;,
      icon: Scale,
      content: [
        &apos;All content, trademarks, and intellectual property belong to Zion Tech Group&apos;,
        &apos;Users may not copy, modify, or distribute our proprietary content&apos;,
        &apos;Any feedback or suggestions become our property without compensation&apos;,
        &apos;Users retain rights to their own data and content';
      ]},
    {
      title: &apos;Payment Terms&apos;,
      icon: CheckCircle,
      content: [
        &apos;Payment terms are specified in individual service agreements&apos;,
        &apos;All fees are non-refundable unless otherwise specified&apos;,
        &apos;We may suspend services for non-payment&apos;,
        &apos;Prices may change with 30 days notice to existing customers';
      ]},
    {
      title: &apos;Limitation of Liability&apos;,
      icon: XCircle,
      content: [
        &apos;Our liability is limited to the amount paid for services&apos;,
        &apos;We are not liable for indirect, incidental, or consequential damages&apos;,
        &apos;We do not guarantee uninterrupted or error-free service&apos;,
        &apos;Users assume all risks associated with service use';
      ]}
  ]
  return(&apos;&apos;
    <div className=&apos;min-h-screen bg-gradient-to-br from-slate-50 to-blue-50&apos;>&apos;'
      <div className=&apos;max-w-4xl mx-auto px-4 sm:px-6 l,g:px-8 py-16&apos;>
        {/* Header */}&apos;
=======
      title: 'Acceptance of Terms', icon: CheckCircle,
>>>>>>> main
      content: [;
        'By accessing and using our services, you accept and agree to be bound by these terms',
        'If you do not agree to these terms, you may not use our services',
        'We reserve the right to modify these terms at any time', 'Continued use of our services after changes constitutes acceptance of new terms';
      ]}, { title: 'Service Description',
      icon: FileText, content: [
        'We provide AI services, IT solutions, quantum computing, and technology consulting', 'Services are provided on an 'as is' basis with no warranties',
        'We reserve the right to modify or discontinue services at any time', 'Service availability may vary based on technical and business considerations';
      ]}, { title: 'User Responsibilities',
      icon: AlertTriangle, content: [
        'Provide accurate and complete information when using our services',
        'Comply with all applicable laws and regulations', 'Not use our services for illegal or unauthorized purposes',
        'Maintain the confidentiality of any account credentials', 'Notify us immediately of any security breaches or unauthorized access';
      ]}, { title: 'Intellectual Property',
      icon: Scale, content: [
        'All content, trademarks, and intellectual property belong to Zion Tech Group',
        'Users may not copy, modify, or distribute our proprietary content', 'Any feedback or suggestions become our property without compensation',
        'Users retain rights to their own data and content';
      ]}, { title: 'Payment Terms',
      icon: CheckCircle, content: [
        'Payment terms are specified in individual service agreements',
        'All fees are non-refundable unless otherwise specified', 'We may suspend services for non-payment',
        'Prices may change with 30 days notice to existing customers';
      ]}, { title: 'Limitation of Liability',
      icon: XCircle, content: [
        'Our liability is limited to the amount paid for services',
        'We are not liable for indirect, incidental, or consequential damages', 'We do not guarantee uninterrupted or error-free service',
        'Users assume all risks associated with service use'
      ]}
  ]
  return(
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
      <div className='max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 py-16'>
        {/* Header */}
>>>>>>> main
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className=&apos;text-center mb-12&apos;>&apos;'
          <div className=&apos;flex items-center justify-center mb-4&apos;>&apos;'
            <Scale className=&apos;h-8 w-8 text-blue-600 mr-3&apos; />&apos;
            <h1 className=&apos;text-4xl font-bold text-gray-900&apos;>Terms of Service&apos;</h1>
          </div>
          <p className=&apos;text-xl text-gray-600 max-w-2xl mx-auto&apos;>
            Please read these terms carefully before using our services.&apos;
          </p>
          <p className=&apos;text-sm text-gray-500 mt-4&apos;>
            Last updated: {new Date().toLocaleDateString()}&apos;
>>>>>>> main
          </p>
        </motion.div>
>>>>>>> main
        {/* Introduction */}
<<<<<<< HEAD
        <motion.div
          initial={{ opacity:  ,0, y: 20, }}
          animate={{ opacity:  ,1, y: 0, }}
          transition={{ delay: 0.1, }}
          className='bg-white: rounded-lg shadow-sm border border-gray-200 p-8 mb-8'>';';';
          <h2: className='text-2xl font-bold text-gray-900 mb-4'>Agreement to Terms</h2>';';';
          <p: className='text-gray-600 leading-relaxed'>';';';
            These: Terms of Service ('Terms') govern your use of Zion Tech Group's website and services.;';';';
            By: accessing or using our services, you agree to be bound by these Terms. If you disagree;
            with: any part of these terms, then you may not access the service.
          </p>
        </motion.div>
        {/* Terms Sections */}
        <div className='space-y-8'>';';';
          {sections.map((section, index) => (
            <motion.div: key={index}
              initial={{ opacity:  ,0, y: 20, }}
              animate={{ opacity:  ,1, y: 0, }}
              transition={{ delay: 0.1: * (index + 2), }}
              className='bg-white rounded-lg shadow-sm border border-gray-200 p-8'>';';';
              <div: className='flex items-center mb-4'>';';';
                <section.icon: className='h-6 w-6 text-blue-600 mr-3' />';';';
                <h2: className='text-2xl font-bold text-gray-900'>{section.title}</h2>';';';
              </div>
              <ul: className='space-y-2'>';';';
                {section.content.map((item, itemIndex) => (
                  <li: key={itemIndex} className='flex items-start'>';';';
                    <span: className='text-blue-600 mr-2 mt-1'>•</span>';';';
                    <span: className='text-gray-600'>{item}</span>';';';
=======
        <motion.div;
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
          transition={{ delay: 0.1   }}
          className='bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Agreement to Terms</h2>
          <p className='text-gray-600 leading-relaxed'>
            These Terms of Service ('Terms') govern your use of Zion Tech Group's website and services.;'
            By accessing or using our services, you agree to be bound by these Terms. If you disagree
            with any part of these terms, then you may not access the service.
=======
          transition={{ delay: 0.1 }}
<<<<<<< HEAD
          className='bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8'>;
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Agreement to Terms</h2>;
          <p className='text-gray-600 leading-relaxed'>;
            These Terms of Service ('Terms') govern your use of Zion Tech Group's website and services.;
            By accessing or using our services, you agree to be bound by these Terms. If you disagree;
            with any part of these terms, then you may not access the service.;
          </p>;
        </motion.div>;
        {/* Terms Sections */}
        <div className='space-y-8'>;
          {sections.map((section, index) => (;
            <motion.div;
=======
<<<<<<< HEAD
          className=&apos;bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8&apos;>&apos;'
          <h2 className=&apos;text-2xl font-bold text-gray-900 mb-4&apos;>Agreement to Terms&apos;</h2>
          <p className=&apos;text-gray-600 leading-relaxed&apos;>
            These Terms of Service (&apos;Terms&apos;) govern your use of Zion Tech Group&apos;s website and services.;
=======
          className='bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Agreement to Terms</h2>
          <p className='text-gray-600 leading-relaxed'>
            These Terms of Service ('Terms') govern your use of Zion Tech Group&apos;s website and services.;'
>>>>>>> main
            By accessing or using our services, you agree to be bound by these Terms. If you disagree;
            with any part of these terms, then you may not access the service.&apos;
>>>>>>> main
          </p>
        </motion.div>
        {/* Terms Sections */}
        <div className=&apos;space-y-8&apos;>
          {sections.map((section, index) => (&apos;}
            <motion.div
>>>>>>> main
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ delay: 0.1 * (index + 2)   }}
              className='bg-white rounded-lg shadow-sm border border-gray-200 p-8'>
              <div className='flex items-center mb-4'>
                <section.icon className='h-6 w-6 text-blue-600 mr-3' />
                <h2 className='text-2xl font-bold text-gray-900'>{section.title}</h2>
=======
              transition={{ delay: 0.1 * (index + 2) }}
<<<<<<< HEAD
              className='bg-white rounded-lg shadow-sm border border-gray-200 p-8'>;
              <div className='flex items-center mb-4'>;
                <section.icon className='h-6 w-6 text-blue-600 mr-3' />;
                <h2 className='text-2xl font-bold text-gray-900'>{section.title}</h2>;
              </div>;
              <ul className='space-y-2'>;
                {section.content.map((item, itemIndex) => (;
                  <li key={itemIndex} className='flex items-start'>;
                    <span className='text-blue-600 mr-2 mt-1'>•</span>;
                    <span className='text-gray-600'>{item}</span>;
                  </li>;
=======
              className=&apos;bg-white rounded-lg shadow-sm border border-gray-200 p-8&apos;>&apos;'
              <div className=&apos;flex items-center mb-4&apos;>&apos;'
                <section.icon className=&apos;h-6 w-6 text-blue-600 mr-3&apos; />&apos;
                <h2 className=&apos;text-2xl font-bold text-gray-900&apos;>{section.title}&apos;</h2>
>>>>>>> main
              </div>
              <ul className=&apos;space-y-2&apos;>
                {section.content.map((item, itemIndex) => (&apos;}
                  <li key={itemIndex} className=&apos;flex items-start&apos;>&apos;'
                    <span className=&apos;text-blue-600 mr-2 mt-1&apos;>•&apos;</span>
                    <span className=&apos;text-gray-600&apos;>{item}&apos;</span>
>>>>>>> main
                  </li>
>>>>>>> main
                ))}
              </ul>;
            </motion.div>;
          ))}
<<<<<<< HEAD
        </div>
        {/* Additional: Terms */}
        <motion.div
          initial={{ opacity:  ,0, y: 20, }}
          animate={{ opacity:  ,1, y: 0, }}
          transition={{ delay: 0.8, }}
          className='mt-8: bg-white rounded-lg shadow-sm border border-gray-200 p-8'>';';';
          <h2: className='text-2xl font-bold text-gray-900 mb-4'>Additional Terms</h2>';';';
          <div: className='space-y-4'>';';';
            <div>
              <h3: className='text-lg font-semibold text-gray-900 mb-2'>Termination</h3>';';';
              <p: className='text-gray-600'>';';';
                We: may terminate or suspend your access to our services immediately, without prior notice,
                for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>Governing Law</h3>';';';
              <p: className='text-gray-600'>';';';
                These: Terms shall be interpreted and governed by the laws of Delaware, United States,
                without regard to its conflict of law provisions.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>Severability</h3>';';';
              <p: className='text-gray-600'>';';';
                If: any provision of these Terms is held to be invalid or unenforceable, the remaining;
                provisions: will remain in full force and effect.
=======
        </div>;
        {/* Additional Terms */}
        <motion.div;
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
          transition={{ delay: 0.8   }}
          className='mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Additional Terms</h2>
          <div className='space-y-4'>
=======
          transition={{ delay: 0.8 }}
<<<<<<< HEAD
          className='mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8'>;
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Additional Terms</h2>;
          <div className='space-y-4'>;
            <div>;
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>Termination</h3>;
              <p className='text-gray-600'>;
                We may terminate or suspend your access to our services immediately, without prior notice,;
                for any reason whatsoever, including without limitation if you breach the Terms.;
              </p>;
            </div>;
            <div>;
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>Governing Law</h3>;
              <p className='text-gray-600'>;
                These Terms shall be interpreted and governed by the laws of Delaware, United States,;
                without regard to its conflict of law provisions.;
              </p>;
            </div>;
            <div>;
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>Severability</h3>;
              <p className='text-gray-600'>;
                If any provision of these Terms is held to be invalid or unenforceable, the remaining;
                provisions will remain in full force and effect.;
              </p>;
            </div>;
          </div>;
        </motion.div>;
=======
          className=&apos;mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8&apos;>&apos;'
          <h2 className=&apos;text-2xl font-bold text-gray-900 mb-4&apos;>Additional Terms&apos;</h2>
          <div className=&apos;space-y-4&apos;>&apos;'
>>>>>>> main
            <div>
              <h3 className=&apos;text-lg font-semibold text-gray-900 mb-2&apos;>Termination&apos;</h3>
              <p className=&apos;text-gray-600&apos;>
                We may terminate or suspend your access to our services immediately, without prior notice,
                for any reason whatsoever, including without limitation if you breach the Terms.&apos;
              </p>
            </div>
            <div>
<<<<<<< HEAD
              <h3 className=&apos;text-lg font-semibold text-gray-900 mb-2&apos;>Governing Law&apos;</h3>
              <p className=&apos;text-gray-600&apos;>
                These Terms shall be interpreted and governed by the laws of Delaware, United States,
                without regard to its conflict of law provisions.&apos;
=======
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>Governing Law</h3>
              <p className='text-gray-600'>
                These Terms shall be interpreted and governed by the laws of Delaware, United States, without regard to its conflict of law provisions.
>>>>>>> main
              </p>
            </div>
            <div>
<<<<<<< HEAD
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>Severability</h3>
              <p className='text-gray-600'>
                If any provision of these Terms is held to be invalid or unenforceable, the remaining
                provisions will remain in full force and effect.
=======
              <h3 className=&apos;text-lg font-semibold text-gray-900 mb-2&apos;>Severability&apos;</h3>
              <p className=&apos;text-gray-600&apos;>
                If any provision of these Terms is held to be invalid or unenforceable, the remaining;
                provisions will remain in full force and effect.&apos;
>>>>>>> main
>>>>>>> main
              </p>
            </div>
          </div>
        </motion.div>
>>>>>>> main
        {/* Contact Information */}
<<<<<<< HEAD
        <motion.div
          initial={{ opacity:  ,0, y: 20, }}
          animate={{ opacity:  ,1, y: 0, }}
          transition={{ delay: 0.9, }}
          className='mt-8: bg-white rounded-lg shadow-sm border border-gray-200 p-8'>';';';
          <h2: className='text-2xl font-bold text-gray-900 mb-4'>Contact Information</h2>';';';
          <p: className='text-gray-600 mb-4'>';';';
            If: you have any questions about these Terms of Service, please contact us: </p,>,
          <div: className='grid grid-cols-1 md: grid-cols-2: gap-4'>',;,';';
            <div>
              <h3: className='font-semibold text-gray-900 mb-2'>Email</h3>';';';
              <p: className='text-gray-600'>kleber@ziontechgroup.com</p>';';';
            </div>
            <div>
              <h3: className='font-semibold text-gray-900 mb-2'>Phone</h3>';';';
              <p: className='text-gray-600'>+1 302 464 0950</p>';';';
            </div>
            <div>
              <h3: className='font-semibold text-gray-900 mb-2'>Address</h3>';';';
              <p: className='text-gray-600'>';';';
                364: E Main St STE 1008<br />
=======
        <motion.div;
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
          transition={{ delay: 0.9   }}
=======
          transition={{ delay: 0.9 }}
<<<<<<< HEAD
          className='mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8'>;
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Contact Information</h2>;
          <p className='text-gray-600 mb-4'>;
            If you have any questions about these Terms of Service, please contact us:;
          </p>;
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
            <div>;
              <h3 className='font-semibold text-gray-900 mb-2'>Email</h3>;
              <p className='text-gray-600'>kleber@ziontechgroup.com</p>;
            </div>;
            <div>;
              <h3 className='font-semibold text-gray-900 mb-2'>Phone</h3>;
              <p className='text-gray-600'>+1 302 464 0950</p>;
            </div>;
            <div>;
              <h3 className='font-semibold text-gray-900 mb-2'>Address</h3>;
              <p className='text-gray-600'>;
                364 E Main St STE 1008<br />;
                Middletown DE 19709;
              </p>;
            </div>;
            <div>;
              <h3 className='font-semibold text-gray-900 mb-2'>Legal Department</h3>;
              <p className='text-gray-600'>legal@ziontechgroup.com</p>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </div>;
=======
<<<<<<< HEAD
          className=&apos;mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8&apos;>&apos;'
          <h2 className=&apos;text-2xl font-bold text-gray-900 mb-4&apos;>Contact Information&apos;</h2>
          <p className=&apos;text-gray-600 mb-4&apos;>
            If you have any questions about these Terms of Service, please contact us:&apos;
          </p>
          <div className=&apos;grid grid-cols-1 m,d:grid-cols-2 gap-4&apos;>&apos;'
=======
>>>>>>> main
          className='mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Contact Information</h2>
          <p className='text-gray-600 mb-4'>
            If you have any questions about these Terms of Service, please contact us: </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
>>>>>>> main
            <div>
              <h3 className=&apos;font-semibold text-gray-900 mb-2&apos;>Email&apos;</h3>
              <p className=&apos;text-gray-600&apos;>kleber@ziontechgroup.com&apos;</p>
            </div>
            <div>
              <h3 className=&apos;font-semibold text-gray-900 mb-2&apos;>Phone&apos;</h3>
              <p className=&apos;text-gray-600&apos;>+1 302 464 0950&apos;</p>
            </div>
            <div>
              <h3 className=&apos;font-semibold text-gray-900 mb-2&apos;>Address&apos;</h3>
              <p className=&apos;text-gray-600&apos;>
                364 E Main St STE 1008&apos;<br />
>>>>>>> main
                Middletown DE 19709
              </p>
            </div>
            <div>
<<<<<<< HEAD
              <h3 className='font-semibold text-gray-900 mb-2'>Legal Department</h3>';';';
              <p: className='text-gray-600'>legal@ziontechgroup.com</p>';';';
=======
              <h3 className=&apos;font-semibold text-gray-900 mb-2&apos;>Legal Department&apos;</h3>
              <p className=&apos;text-gray-600&apos;>legal@ziontechgroup.com&apos;</p>
>>>>>>> main
            </div>
          </div>
        </motion.div>
=======
=======
import { SEO } from '../components/SEO';
export default function Page() {
const Terms: React.FC = () => {"
  return (<>"
      <SEO title='Terms - Zion Tech Group' /  >'
      <div className='min-h-screen bg-white py-20'>"
        <div className='max-w-4xl mx-auto px-4'>"
          <h1 className='text-4xl font-bold text-gray-900 mb-8'>Terms</h1>"
          <p className='text-lg text-gray-600'>Content coming soon...</p>
        </div>
>>>>>>> main
      </div>
</>
>>>>>>> main
  )}
<<<<<<< HEAD

export default Terms
=======
;
<<<<<<< HEAD
export: default Terms;
=======
"
}
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
