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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg: py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Privacy Policy,
  
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">GDPR Compliant
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Lock className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Secure Data
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Transparent
      {/* Last Updated */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 rounded-lg p-6 text-center">
              <p className="text-gray-300">
                <strong>Last Updated:</strong> {lastUpdated}
              <p className="text-sm text-gray-400 mt-2">
                This privacy policy may be updated from time to time. We will notify you of any changes.
      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Introduction
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                our website or use our services.
              <p className="text-gray-300 mb-6">
                By using our website or services, you agree to the collection and use of information in accordance with 
                this policy. If you do not agree with the terms of this Privacy Policy, please do not access the site.
      {/* Information We Collect */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Information We Collect
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dataTypes.map((type, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <type.icon className="w-8 h-8 text-cyan-400" />
                    <h3 className="text-xl font-bold text-white">{type.category}
                  <p className="text-gray-300 mb-4">{type.description}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-cyan-400">Examples:
                    <ul className="space-y-1">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {example}
                      ))}
              ))}
      {/* How We Use Your Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">How We Use Your Information
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Service Delivery
                <p className="text-gray-300">
                  To provide, maintain, and improve our services, including AI solutions, IT services, and customer support.
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Communication
                <p className="text-gray-300">
                  To respond to your inquiries, send important updates, and provide customer support.
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Marketing
                <p className="text-gray-300">
                  To send you newsletters, promotional materials, and information about our services (with your consent).
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Analytics
                <p className="text-gray-300">
                  To analyze website usage, improve user experience, and understand how our services are used.
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Legal Compliance
                <p className="text-gray-300">
                  To comply with legal obligations, resolve disputes, and enforce our agreements.
      {/* Data Security */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Data Security
            <p className="text-gray-300 mb-8 text-center">
              We implement appropriate technical and organizational measures to protect your personal information.
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityMeasures.map((measure, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{measure}
              ))}
      {/* Your Rights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Your Rights
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rights.map((right, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center">
                  <right.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{right.title}
                  <p className="text-gray-300 text-sm">{right.description}
              ))}
      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Questions About Your Privacy?
            <p className="text-xl text-gray-300 mb-8">
              If you have any questions about this Privacy Policy or our data practices, please contact us.
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-white">kleber@ziontechgroup.com
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-white">+1 (302) 464-0950
              <div className="flex items-center justify-center space-x-3">
                <Globe className="w-5 h-5 text-cyan-400" />
                <span className="text-white">Middletown, DE
            <$2 />
              href="/contact"
              className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-bold hover: bg-cyan-600 transition-colors inline-flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
  
          </div>
        </div>
      </section>
    </div>
  ),
}
  </a>
  </h1>
</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></span></span></span></span></span></span></p></p></p></p></p></p></p></p></p></p></p></p></p></p></h2></h2></h2></h2></h2></h2></h3></h3></h3></h3></h3></h3></h3></h4></ul></li></section></section></section></section></section></section></section>