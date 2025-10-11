'use client'
import React from 'react'
import { Shield, Lock, Eye, Database, User, Mail, Phone, Calendar, CheckCircle, ArrowRight, Globe, Server, Key, FileText, AlertTriangle } from 'lucide-react'
export default function PrivacyPage() {
  const lastUpdated = 'January 1, 2024'
  const dataTypes = [
    {
      category: 'Personal Information',
      icon: User,
      description: 'Name, email address, phone number, company information',
      examples: ['Contact forms', 'Newsletter signups', 'Account creation']

    },
    {
      category: 'Usage Data',
      icon: Eye,
      description: 'Website interactions, pages visited, time spent',
      examples: ['Analytics data', 'User behavior', 'Performance metrics']

    },
    {
      category: 'Technical Data',
      icon: Server,
      description: 'IP address, browser type, device information',
      examples: ['Log files', 'Error reports', 'System diagnostics']

    },
    {
      category: 'Communication Data',
      icon: Mail,
      description: 'Messages, emails, support tickets',
      examples: ['Contact forms', 'Support requests', 'Email correspondence']

    }

  ]

  const rights = [
    {
      title: 'Right to Access',
      description: 'Request a copy of your personal data',
      icon: Eye
    },
    {
      title: 'Right to Rectification',
      description: 'Correct inaccurate or incomplete data',
      icon: FileText
    },
    {
      title: 'Right to Erasure',
      description: 'Request deletion of your personal data',
      icon: Database
    },
    {
      title: 'Right to Portability',
      description: 'Receive your data in a structured format',
      icon: ArrowRight
    },
    {
      title: 'Right to Object',
      description: 'Object to processing of your data',
      icon: AlertTriangle
    },
    {
      title: 'Right to Restrict',
      description: 'Limit how we process your data',
      icon: Lock
    }

  ]

  const securityMeasures = [
    'SSL/TLS encryption for data transmission',
    'Regular security audits and penetration testing',
    'Access controls and authentication systems',
    'Data backup and disaster recovery procedures',
    'Employee training on data protection',
    'Incident response and breach notification procedures'
  ]

  return (
    <div>
      {/* Hero Section */}

      <section className="relative py-20 lg: py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div>
          <div>
            <h1 className="text-4xl lg: text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Privacy Policy,
  
            <p className="text-xl lg: text-2xl text-gray-300 mb-8 leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            <div>
          <div>
                <Shield />
                <span className="text-white font-medium">GDPR Compliant
              <div>
                <Lock />
                <span className="text-white font-medium">Secure Data
              <div>
                <CheckCircle />
                <span className="text-white font-medium">Transparent
      {/* Last Updated */}

      <section className="py-8">
        <div>
          <div>
            <div>
              <p className="text-gray-300">
                <strong>Last Updated:</strong> {lastUpdated}

              <p className="text-sm text-gray-400 mt-2">
                This privacy policy may be updated from time to time. We will notify you of any changes.
      {/* Introduction */}

      <section className="py-20">
        <div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Introduction
            <div>
              <p className="text-gray-300 mb-6">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                our website or use our services.
              <p className="text-gray-300 mb-6">
                By using our website or services, you agree to the collection and use of information in accordance with 
                this policy. If you do not agree with the terms of this Privacy Policy, please do not access the site.
      {/* Information We Collect */}

      <section className="py-20 bg-slate-800/50">
        <div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Information We Collect
            <div>
              {dataTypes.map((type, index) => (
                <div>
          <div>
                    <type.icon className="w-8 h-8 text-cyan-400" />
                    <h3 className="text-xl font-bold text-white">{type.category}

                  <p className="text-gray-300 mb-4">{type.description}

                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400">Examples:
                    <ul className="space-y-1">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle />
                          {example}

                      ))}

              ))}

      {/* How We Use Your Information */}

      <section className="py-20">
        <div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">How We Use Your Information
            <div>
          <div>
                <h3 className="text-xl font-bold text-white mb-3">Service Delivery
                <p className="text-gray-300">
                  To provide, maintain, and improve our services, including AI solutions, IT services, and customer support.
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Communication
                <p className="text-gray-300">
                  To respond to your inquiries, send important updates, and provide customer support.
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Marketing
                <p className="text-gray-300">
                  To send you newsletters, promotional materials, and information about our services (with your consent).
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Analytics
                <p className="text-gray-300">
                  To analyze website usage, improve user experience, and understand how our services are used.
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Legal Compliance
                <p className="text-gray-300">
                  To comply with legal obligations, resolve disputes, and enforce our agreements.
      {/* Data Security */}

      <section className="py-20 bg-slate-800/50">
        <div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Data Security
            <p className="text-gray-300 mb-8 text-center">
              We implement appropriate technical and organizational measures to protect your personal information.
            <div>
              {securityMeasures.map((measure, index) => (
                <div>
                  <CheckCircle />
                  <span className="text-gray-300">{measure}

              ))}

      {/* Your Rights */}

      <section className="py-20">
        <div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Your Rights
            <div>
              {rights.map((right, index) => (
                <div>
                  <right.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{right.title}

                  <p className="text-gray-300 text-sm">{right.description}

              ))}

      {/* Contact Information */}

      <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
        <div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Questions About Your Privacy?
            <p className="text-xl text-gray-300 mb-8">
              If you have any questions about this Privacy Policy or our data practices, please contact us.
            <div>
          <div>
                <Mail />
                <span className="text-white">kleber@ziontechgroup.com
              <div>
                <Phone />
                <span className="text-white">+1 (302) 464-0950
              <div>
                <Globe />
                <span className="text-white">Middletown, DE
            <$2 />
              href="/contact"
              className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-cyan-600 transition-colors inline-flex items-center">
              <Mail />
              Contact Us
  
          </div>
        </div>
      </section>
    </div>
  ) }

  </a>
  </h1>
</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></span></span></span></span></span></span></p></p></p></p></p></p></p></p></p></p></p></p></p></p></h2></h2></h2></h2></h2></h2></h3></h3></h3></h3></h3></h3></h3></h4></ul></li></section></section></section></section></section></section></section>