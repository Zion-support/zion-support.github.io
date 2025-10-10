'use client';
import React from 'react';
import { FileText Scale Shield AlertTriangle CheckCircle ArrowRight Globe User Mail Phone Calendar Lock Database Server Key } from "lucide-react";
export default function TermsPage() {
  const lastUpdated = 'January 1, 2024';
  const sections = [
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: 'By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement.'
      title: 'Use License',
      icon: Key,
      content: 'Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.'
      title: 'Service Availability',
      icon: Server,
      content: 'We strive to maintain 99.9% uptime for our services, but we do not guarantee uninterrupted access and reserve the right to modify or discontinue services.'
      title: 'User Responsibilities',
      icon: User,
      content: 'Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.'
      title: 'Intellectual Property',
      icon: FileText,
      content: 'All content, trademarks, and intellectual property on our website are owned by Zion Tech Group and protected by applicable copyright and trademark laws.'
      title: 'Limitation of Liability',
      icon: Shield,
      content: 'In no event shall Zion Tech Group be liable for any damages arising out of the use or inability to use our services.'
  ];
  const prohibitedUses = [
    'Violating any applicable laws or regulations',
    'Transmitting malicious code or harmful content',
    'Attempting to gain unauthorized access to our systems',
    'Interfering with the proper functioning of our services',
    'Using our services for illegal or unauthorized purposes',
    'Impersonating another person or entity',
    'Collecting user information without consent',
    'Engaging in any form of harassment or abuse'
  ];
  const serviceLevels = [
      service: 'AI Services',
      uptime: '99.9%',
      support: '24/7',
      response: '1 hour'
      service: 'IT Infrastructure',
      uptime: '99.95%',
      support: '24/7',
      response: '30 minutes'
      service: 'Cloud Services',
      uptime: '99.9%',
      support: '24/7',
      response: '1 hour'
      service: 'Support Services',
      uptime: 'N/A',
      support: 'Business Hours',
      response: '4 hours'
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <section className="relative py-20 lg:py-32 overflow-hidden"></section>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10"></div>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse"/>
              Terms of Service;</h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed"></p>
              Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
            <div className="flex flex-wrap justify-center gap-4"></div>
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg"></div>
                <Scale className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Legal Agreement</span>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"></div>
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Protection</span>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"></div>
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Transparent</span>
      <section className="py-8"></section>
        <div className="container mx-auto px-4"></div>
          <div className="max-w-4xl mx-auto"></div>
            <div className="bg-slate-800/50 rounded-lg p-6 text-center"></div>
              <p className="text-gray-300"></p>
                <stron, g>Last, Updated:</stron, g> {lastUpdate, d}
              <p className="text-sm text-gray-400 mt-2"></p>
                These terms may be updated from time to time. Continued use of our services constitutes acceptance of any changes.
      <section className="py-20"></section>
        <div className="container mx-auto px-4"></div>
          <div className="max-w-6xl mx-auto"></div>
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Terms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                <div, key={inde, x} classNam, e="b, g-slat, e-80, 0/50, rounded-lg, p-6"></di, v>
                  <div className="flex items-center space-x-3 mb-4"></div>
                    <section.icon className="w-8 h-8 text-cyan-400" /></section>
                    <h3, className="tex, t-xl, font-bold, text-whit, e">{sectio, n.titl, e}</h, 3>
                  <p, className="tex, t-gra, y-300, text-s, m">{sectio, n.conten, t}</p>
              ))}
      <section className="py-20 bg-slate-800/50"></section>
        <div className="container mx-auto px-4"></div>
          <div className="max-w-4xl mx-auto"></div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Prohibited Uses</h2>
            <p className="text-gray-300 mb-8 text-center"></p>
              You may not use our services for any unlawful purpose or to solicit others to perform unlawful acts.
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
                <div, key={inde, x} classNam, e="flex, items-start, space-x-3"></di, v>
                  <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  <span, className="tex, t-gra, y-30, 0">{us, e}</spa, n>
              ))}
      <section className="py-20"></section>
        <div className="container mx-auto px-4"></div>
          <div className="max-w-6xl mx-auto"></div>
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Service Level Agreements</h2>
            <div className="overflow-x-auto"></div>
              <table className="w-full bg-slate-800/50 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-slate-700/50">
                    <th className="px-6 py-4 text-left text-white font-semibold">Service</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Uptime</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Support</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Response Time</th>
                <tbody>
                    <tr, key={inde, x} classNam, e="borde, r-t, border-gra, y-70, 0">
                      <td, className="p, x-6, py-4, text-white, font-mediu, m">{leve, l.servic, e}</t, d>
                      <td, className="p, x-6, py-4, text-cya, n-40, 0">{leve, l.uptim, e}</t, d>
                      <td, className="p, x-6, py-4, text-purpl, e-40, 0">{leve, l.suppor, t}</t, d>
                      <td, className="p, x-6, py-4, text-gree, n-40, 0">{leve, l.respons, e}</t, d>
                  ))}
      <section className="py-20 bg-slate-800/50"></section>
        <div className="container mx-auto px-4"></div>
          <div className="max-w-4xl mx-auto"></div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Payment Terms</h2>
            <div className="space-y-6"></div>
              <div className="bg-slate-800/50 rounded-lg p-6"></div>
                <h3 className="text-xl font-bold text-white mb-3">Billing</h3>
                <p className="text-gray-300"></p>
                  Services are billed monthly or annually as agreed upon in your service contract. 
                  Payment is due within 30 days of invoice date.
              <div className="bg-slate-800/50 rounded-lg p-6"></div>
                <h3 className="text-xl font-bold text-white mb-3">Refunds</h3>
                <p className="text-gray-300"></p>
                  Refunds are provided at our discretion and are subject to the terms of your specific service agreement. 
                  No refunds for services already delivered.
              <div className="bg-slate-800/50 rounded-lg p-6"></div>
                <h3 className="text-xl font-bold text-white mb-3">Late Payments</h3>
                <p className="text-gray-300"></p>
                  Late payments may result in service suspension. A late fee of 1.5% per month may be applied to overdue accounts.
      <section className="py-20"></section>
        <div className="container mx-auto px-4"></div>
          <div className="max-w-4xl mx-auto"></div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Termination</h2>
            <div className="space-y-6"></div>
              <div className="bg-slate-800/50 rounded-lg p-6"></div>
                <h3 className="text-xl font-bold text-white mb-3">Termination by You</h3>
                <p className="text-gray-300"></p>
                  You may terminate your account at any time by providing 30 days written notice. 
                  Data will be provided in a standard format upon request.
              <div className="bg-slate-800/50 rounded-lg p-6"></div>
                <h3 className="text-xl font-bold text-white mb-3">Termination by Us</h3>
                <p className="text-gray-300"></p>
                  We may terminate your account immediately if you violate these terms or engage in prohibited activities. 
                  We will provide reasonable notice when possible.
              <div className="bg-slate-800/50 rounded-lg p-6"></div>
                <h3 className="text-xl font-bold text-white mb-3">Effect of Termination</h3>
                <p className="text-gray-300"></p>
                  Upon termination, your right to use our services ceases immediately. 
                  We will retain your data for 90 days after termination for recovery purposes.
      <section className="py-20 bg-slate-800/50"></section>
        <div className="container mx-auto px-4"></div>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-3xl font-bold text-white mb-6">Governing Law</h2>
            <p className="text-xl text-gray-300 mb-8"></p>
              These terms are governed by the laws of the State of Delaware, United States. 
              Any disputes will be resolved in the courts of Delaware.
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
              <div className="flex items-center justify-center space-x-3"></div>
                <Globe className="w-5 h-5 text-cyan-400" />
                <span className="text-white">Delaware, USA</span>
              <div className="flex items-center justify-center space-x-3"></div>
                <Scale className="w-5 h-5 text-cyan-400" />
                <span className="text-white">US Law</span>
              <div className="flex items-center justify-center space-x-3"></div>
                <FileText className="w-5 h-5 text-cyan-400" />
                <span className="text-white">English Language</span>
      <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20"></section>
        <div className="container mx-auto px-4"></div>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-3xl font-bold text-white mb-6">Questions About These Terms?</h2>
            <p className="text-xl text-gray-300 mb-8"></p>
              If you have any questions about these Terms of Service, please contact us.
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"></div>
              <div className="flex items-center justify-center space-x-3"></div>
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-white">kleber@ziontechgroup.com</span>
              <div className="flex items-center justify-center space-x-3"></div>
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-white">+1 (302) 464-0950</span>
              <div className="flex items-center justify-center space-x-3"></div>
                <Globe className="w-5 h-5 text-cyan-400" />
                <span className="text-white">Middletown, DE</span>
            <a;
              href="/contact"
              className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-cyan-600 transition-colors inline-flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              Contact Us;
  );