<<<<<<< HEAD

import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Leaf, Server, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
=======
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
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7

export default function GreenIT() {
  const greenITSolutions = [
    {
      title: "Energy-Efficient Hardware",
      description: "Modern processors, storage solutions, and networking equipment delivering significant performance improvements while consuming less power.",
      icon: Server,
    },
    {
      title: "Optimized Cooling Systems",
      description: "Advanced cooling technologies that reduce energy consumption while maintaining optimal operating temperatures.",
      icon: Cloud,
    },
    {
      title: "Renewable Energy Integration",
      description: "Solutions for leveraging on-site renewable generation or virtual power purchase agreements to offset carbon footprint.",
      icon: Leaf,
    }
  ];

  return (
    <>
      <SEO
        title="Green IT Solutions - Sustainable Technology"
        description="Explore eco-friendly IT solutions and sustainable technology practices that reduce environmental impact while maintaining performance." 
        keywords="green IT, sustainable technology, eco-friendly computing, energy efficient hardware"
        canonical="https://ziontechgroup.com/marketplace/category/green-it"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Green IT Solutions</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Sustainable technology solutions that reduce environmental impact without compromising performance
            </p>
          </div>
          
          <div className="mb-16">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8 md:p-12 mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Sustainable IT for a Better Future</h2>
                  <p className="text-zion-slate-light text-lg mb-6">
                    As AI and cloud computing demand grows exponentially, so does the environmental impact of data centers. 
                    Our Green IT solutions help organizations implement sustainable practices in their IT infrastructure 
                    while maintaining performance and reliability.
                  </p>
                  <p className="text-zion-slate-light text-lg mb-6">
                    From energy-efficient hardware to renewable energy integration, we offer comprehensive solutions 
                    for reducing your carbon footprint.
                  </p>
                  <div className="mt-8">
                    <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                      Explore Green IT Solutions
                    </Button>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1473876637954-4b493d59fd97?auto=format&fit=crop&w=800&h=600" 
                    alt="Green IT sustainability" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8">Our Green IT Solutions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {greenITSolutions.map((solution, index) => (
                  <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-purple transition-colors">
                    <div className="flex justify-center mb-4">
                      <solution.icon className="h-12 w-12 text-zion-cyan" />
                    </div>
                    <h3 className="text-white font-medium text-xl text-center mb-3">{solution.title}</h3>
                    <p className="text-zion-slate-light text-center">{solution.description}</p>
                  </div>
<<<<<<< HEAD
                ))}
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-6">Why Choose Green IT?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
                  <h3 className="text-white font-medium text-xl mb-4">Environmental Benefits</h3>
                  <ul className="text-zion-slate-light space-y-2">
                    <li>• Reduced carbon footprint and greenhouse gas emissions</li>
                    <li>• Lower energy consumption and resource utilization</li>
                    <li>• Decreased electronic waste through better lifecycle management</li>
                    <li>• Support for renewable energy initiatives</li>
                  </ul>
                </div>
                
                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
                  <h3 className="text-white font-medium text-xl mb-4">Business Benefits</h3>
                  <ul className="text-zion-slate-light space-y-2">
                    <li>• Significant cost savings on energy and cooling</li>
                    <li>• Enhanced brand reputation and stakeholder relations</li>
                    <li>• Compliance with emerging environmental regulations</li>
                    <li>• Improved operational efficiency and performance</li>
                  </ul>
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-3805
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
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD
          
          <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to implement Green IT solutions?</h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Connect with our experts to discuss how we can help you build a more sustainable IT infrastructure.
=======
<<<<<<< HEAD

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Go Green?
            </h2>
            <p className="text-zion-slate-light text-lg mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help your organization implement sustainable technology solutions 
              that benefit both your bottom line and the environment.
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
            </p>
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple" asChild>
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
<<<<<<< HEAD
=======
=======
        </main>
      </div>
      <Footer />
    </>
  );
};

export default GreenIT;
>>>>>>> origin/cursor/build-and-fix-errors-e276
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
