<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { SEO } from '@/components/SEO';
=======

import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/Button";
import { Leaf, Server, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974

export default function GreenIT() {
  return (
    <>
      <SEO
        title="Green IT Solutions | Zion Tech Group"
        description="Sustainable technology solutions to reduce your carbon footprint and improve environmental impact"
        keywords="green IT, sustainable technology, eco-friendly IT, carbon footprint reduction, green computing"
        canonical="https://ziontechgroup.com/green-it"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Green IT Solutions
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Transform your technology infrastructure with sustainable solutions that reduce environmental impact 
              while improving efficiency and cost-effectiveness.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose Green IT?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Environmental Impact</h3>
                <p className="text-zion-slate-light">
                  Reduce your carbon footprint and contribute to a more sustainable future for generations to come.
                </p>
              </div>

              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Cost Savings</h3>
                <p className="text-zion-slate-light">
                  Lower energy bills and reduced operational costs through efficient technology solutions.
                </p>
              </div>

              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Compliance Ready</h3>
                <p className="text-zion-slate-light">
                  Meet environmental regulations and sustainability standards with certified green solutions.
                </p>
              </div>

              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Performance Boost</h3>
                <p className="text-zion-slate-light">
                  Modern, energy-efficient technology often provides better performance and reliability.
                </p>
              </div>

              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Brand Enhancement</h3>
                <p className="text-zion-slate-light">
                  Strengthen your brand reputation by demonstrating commitment to environmental responsibility.
                </p>
              </div>

              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Future-Proof</h3>
                <p className="text-zion-slate-light">
                  Invest in technology that aligns with evolving sustainability trends and regulations.
                </p>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our Green IT Services
            </h2>
            <div className="space-y-8">
              {/* Service 1 */}
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Energy-Efficient Infrastructure
                    </h3>
                    <p className="text-zion-slate-light mb-6">
                      Design and implement data centers and IT infrastructure that minimize energy consumption 
                      while maximizing performance. Our solutions include:
                    </p>
                    <ul className="text-zion-slate-light space-y-2 mb-6">
                      <li>• High-efficiency servers and storage systems</li>
                      <li>• Smart cooling and power management</li>
                      <li>• Virtualization and consolidation strategies</li>
                      <li>• Renewable energy integration</li>
                    </ul>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      Learn More
                    </button>
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-6 text-center">
                    <svg className="w-24 h-24 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="order-2 lg:order-1 bg-blue-500/10 rounded-lg p-6 text-center">
                    <svg className="w-24 h-24 text-blue-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div className="order-1 lg:order-2">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Sustainable Software Solutions
                    </h3>
                    <p className="text-zion-slate-light mb-6">
                      Develop and optimize software applications that consume fewer resources and promote 
                      sustainable business practices:
                    </p>
                    <ul className="text-zion-slate-light space-y-2 mb-6">
                      <li>• Cloud-native applications with auto-scaling</li>
                      <li>• Energy-aware algorithm optimization</li>
                      <li>• Paperless workflow automation</li>
                      <li>• Carbon footprint tracking tools</li>
                    </ul>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              {/* Service 3 */}
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      E-Waste Management & Recycling
                    </h3>
                    <p className="text-zion-slate-light mb-6">
                      Responsible disposal and recycling of electronic equipment to minimize environmental impact:
                    </p>
                    <ul className="text-zion-slate-light space-y-2 mb-6">
                      <li>• Secure data destruction services</li>
                      <li>• Certified e-waste recycling partners</li>
                      <li>• Equipment refurbishment programs</li>
                      <li>• Circular economy initiatives</li>
                    </ul>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      Learn More
                    </button>
                  </div>
                  <div className="bg-yellow-500/10 rounded-lg p-6 text-center">
                    <svg className="w-24 h-24 text-yellow-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Success Story: TechCorp's Green Transformation
            </h2>
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    From High Energy Costs to Sustainable Success
                  </h3>
                  <p className="text-zion-slate-light mb-6">
                    TechCorp, a mid-sized software company, was struggling with skyrocketing energy bills 
                    and wanted to improve their environmental impact. We helped them implement a comprehensive 
                    green IT strategy.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">40%</div>
                      <div className="text-zion-slate-light text-sm">Energy Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400">$85K</div>
                      <div className="text-zion-slate-light text-sm">Annual Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400">60%</div>
                      <div className="text-zion-slate-light text-sm">Carbon Footprint</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400">12</div>
                      <div className="text-zion-slate-light text-sm">Months ROI</div>
                    </div>
                  </div>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Read Full Case Study
                  </button>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <blockquote className="text-zion-slate-light italic text-lg">
                    "Zion Tech Group's green IT solutions transformed our infrastructure and significantly 
                    reduced our environmental impact while saving us money. It's a win-win for our business 
                    and the planet."
                  </blockquote>
                  <div className="mt-4 text-white font-semibold">
                    — Sarah Johnson, CTO at TechCorp
                  </div>
=======
import { motion } from 'framer-motion';
import { Leaf, Zap, Globe, Sun, Wind, Droplets, Recycle, TreePine } from 'lucide-react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from '@/components/SEO';

const GreenIT = () => {
  const greenSolutions = [
    {
      title: 'Energy-Efficient Infrastructure',
      description: 'Design and implement IT infrastructure that minimizes energy consumption',
      icon: '⚡',
      features: [
        'Server virtualization and consolidation',
        'Energy-efficient hardware selection',
        'Smart power management systems',
        'Renewable energy integration'
      ]
    },
    {
      title: 'Cloud Optimization',
      description: 'Optimize cloud resources to reduce carbon footprint and costs',
      icon: '☁️',
      features: [
        'Green cloud provider selection',
        'Resource optimization and scaling',
        'Carbon-aware workload scheduling',
        'Sustainable data center practices'
      ]
    },
    {
      title: 'Sustainable Software Development',
      description: 'Build applications with environmental impact in mind',
      icon: '💻',
      features: [
        'Code optimization for efficiency',
        'Green hosting and deployment',
        'Sustainable development practices',
        'Environmental impact monitoring'
      ]
    },
    {
      title: 'Digital Transformation',
      description: 'Help businesses go paperless and reduce physical resource consumption',
      icon: '🔄',
      features: [
        'Paperless office solutions',
        'Digital workflow automation',
        'Remote work infrastructure',
        'Sustainable business processes'
      ]
    }
  ];

  const environmentalBenefits = [
    {
      benefit: 'Reduced Carbon Footprint',
      description: 'Lower energy consumption and greenhouse gas emissions',
      icon: '🌱',
      impact: 'Up to 40% reduction in IT carbon emissions'
    },
    {
      benefit: 'Energy Cost Savings',
      description: 'Lower electricity bills and operational costs',
      icon: '💰',
      impact: '20-30% reduction in energy costs'
    },
    {
      benefit: 'Resource Efficiency',
      description: 'Optimized use of computing resources and materials',
      icon: '♻️',
      impact: 'Improved resource utilization by 25-35%'
    },
    {
      benefit: 'Compliance & Certification',
      description: 'Meet environmental standards and regulations',
      icon: '✅',
      impact: 'Achieve green IT certifications and compliance'
    }
  ];

  const greenPractices = [
    {
      category: 'Hardware Management',
      practices: [
        'Energy Star certified equipment',
        'Hardware lifecycle optimization',
        'Responsible e-waste disposal',
        'Equipment refurbishment and reuse'
      ]
    },
    {
      category: 'Data Center Efficiency',
      practices: [
        'Cooling system optimization',
        'Efficient power distribution',
        'Heat recovery systems',
        'Renewable energy integration'
      ]
    },
    {
      category: 'Software Optimization',
      practices: [
        'Efficient algorithms and code',
        'Resource usage monitoring',
        'Automated power management',
        'Green software development practices'
      ]
    },
    {
      category: 'Workplace Sustainability',
      practices: [
        'Remote work infrastructure',
        'Digital collaboration tools',
        'Paperless office solutions',
        'Sustainable procurement policies'
      ]
    }
  ];

  const caseStudies = [
    {
      company: 'TechCorp Solutions',
      industry: 'Software Development',
      challenge: 'High energy costs and carbon footprint from on-premise infrastructure',
      solution: 'Migrated to optimized cloud infrastructure with green hosting',
      results: [
        '40% reduction in energy consumption',
        '30% decrease in operational costs',
        'Improved scalability and performance',
        'Achieved carbon-neutral status'
      ]
    },
    {
      company: 'Green Manufacturing Co.',
      industry: 'Manufacturing',
      challenge: 'Inefficient IT systems and paper-based processes',
      solution: 'Implemented digital transformation with sustainable IT practices',
      results: [
        '60% reduction in paper usage',
        '25% improvement in process efficiency',
        'Reduced carbon footprint by 35%',
        'Enhanced employee productivity'
      ]
    },
    {
      company: 'EcoRetail Inc.',
      industry: 'Retail',
      challenge: 'Multiple data centers with high energy consumption',
      solution: 'Consolidated infrastructure and implemented green IT solutions',
      results: [
        '50% reduction in data center energy use',
        '45% decrease in IT infrastructure costs',
        'Improved system reliability',
        'Enhanced sustainability credentials'
      ]
    }
  ];

  const greenCertifications = [
    {
      name: 'ISO 14001',
      description: 'Environmental Management Systems',
      icon: '🌍'
    },
    {
      name: 'Energy Star',
      description: 'Energy Efficiency Certification',
      icon: '⭐'
    },
    {
      name: 'LEED',
      description: 'Leadership in Energy and Environmental Design',
      icon: '🏗️'
    },
    {
      name: 'Carbon Trust',
      description: 'Carbon Reduction Certification',
      icon: '🌱'
    }
  ];

  return (
    <>
      <SEO
<<<<<<< HEAD
        title="Green IT Solutions - Sustainable Technology | Zion Tech Group"
        description="Transform your technology infrastructure with sustainable, energy-efficient Green IT solutions. Reduce environmental impact and costs while improving performance."
        keywords="Green IT, sustainable technology, energy efficiency, environmental impact, carbon footprint, Zion Tech Group"
        canonical="https://ziontechgroup.com/green-it"
=======
        title="Green IT Solutions - Sustainable Technology"
        description="Explore eco-friendly IT solutions and sustainable technology practices that reduce environmental impact while maintaining performance." 
        keywords="green IT, sustainable technology, eco-friendly computing, energy efficient hardware"
        canonical="https://ziontechgroup.com/marketplace/category/green-it"
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-3805
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-a0eb
      />
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <main className="pt-12">
          <div className="container mx-auto px-4 py-16">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Green IT Solutions
              </h1>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                Transform your technology infrastructure with sustainable, energy-efficient solutions. 
                Our Green IT services help you reduce environmental impact, lower costs, and improve 
                performance while contributing to a more sustainable future.
              </p>
            </div>

            {/* Green Solutions */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Our Green IT Solutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {greenSolutions.map((solution, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 hover:bg-white/20 transition-colors duration-200">
                    <div className="text-4xl mb-4 text-center">{solution.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3 text-center">
                      {solution.title}
                    </h3>
                    <p className="text-blue-100 mb-4 text-sm text-center">
                      {solution.description}
                    </p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-blue-200 text-sm flex items-center">
                          <span className="text-green-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Environmental Benefits */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Environmental Impact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {environmentalBenefits.map((benefit, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center hover:bg-white/20 transition-colors duration-200">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {benefit.benefit}
                    </h3>
                    <p className="text-blue-100 mb-4 text-sm">
                      {benefit.description}
                    </p>
                    <div className="text-green-400 font-medium text-sm">
                      {benefit.impact}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Green Practices */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Sustainable IT Practices
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {greenPractices.map((practice, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {practice.category}
                    </h3>
                    <ul className="space-y-2">
                      {practice.practices.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-blue-200 text-sm flex items-center">
                          <span className="text-green-400 mr-2">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Studies */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Success Stories
              </h2>
              <div className="space-y-8 max-w-6xl mx-auto">
                {caseStudies.map((study, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8 hover:bg-white/20 transition-colors duration-200">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">
                          {study.company}
                        </h3>
                        <p className="text-blue-200 text-sm">
                          {study.industry}
                        </p>
                      </div>
                      <div className="mt-4 lg:mt-0">
                        <span className="inline-block bg-green-600/30 text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                          Green IT Success
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-white font-semibold mb-3">Challenge:</h4>
                        <p className="text-blue-100 text-sm mb-4">
                          {study.challenge}
                        </p>
                        <h4 className="text-white font-semibold mb-3">Solution:</h4>
                        <p className="text-blue-100 text-sm">
                          {study.solution}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-3">Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="text-blue-200 text-sm flex items-start">
                              <span className="text-green-400 mr-2 mt-1">•</span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Green Certifications */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Green IT Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {greenCertifications.map((cert, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center hover:bg-white/20 transition-colors duration-200">
                    <div className="text-4xl mb-4">{cert.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {cert.name}
                    </h3>
                    <p className="text-blue-100 text-sm">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-lg border border-green-500/30 p-8 text-center">
                <h2 className="text-3xl font-semibold text-white mb-4">
                  Ready to Go Green with Your IT?
                </h2>
                <p className="text-blue-100 mb-6 text-lg">
                  Let's discuss how our Green IT solutions can help you reduce environmental impact, 
                  lower costs, and improve your technology infrastructure's sustainability.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
                  >
                    Start Green IT Journey
                  </a>
                  <a
                    href="/request-quote"
                    className="border border-green-500/50 hover:bg-green-500/20 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
                  >
                    Get Green IT Quote
                  </a>
>>>>>>> origin/cursor/build-and-fix-errors-e276
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Go Green?
            </h2>
            <p className="text-zion-slate-light text-lg mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help your organization implement sustainable technology solutions 
              that benefit both your bottom line and the environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Schedule Consultation
              </button>
              <button className="bg-transparent border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Download Green IT Guide
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
=======
        </main>
      </div>
      <Footer />
    </>
  );
};

export default GreenIT;
>>>>>>> origin/cursor/build-and-fix-errors-e276
