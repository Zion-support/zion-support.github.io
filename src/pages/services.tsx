import React from 'react';
import { SEO } from '../components/SEO';

const Services: React.FC = () => {
  return(<>
      <SEO title="Services - Zion Tech Group" />
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Services</h1>
          <p className="text-lg text-gray-600">Content coming soon...</p>
        </div>
    </>
  )};

export default Services;
import { SEO } from '../components/SEO';''const Services: React.FC = () => {'
,"});,"})
import { SEO } from '../components/SEO';,"});,"})
;,"});,"})
export default function Page() {,"});,"})
const Services: React.FC = () => {,"});,"})
  return (<>;,"});,"})
      <SEO title="Services - Zion Tech Group" />;,"});,"})
      <div className="min-h-screen bg-white py-20">;,"});,"})
        <div className="max-w-4xl mx-auto px-4">;,"});,"})
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Services</h1>;,"});,"})
          <p className="text-lg text-gray-600">Content coming soon...</p>;,"});,"})
        </div>;,"});,"})
    </>;,"});,"})
  );,"});,"});
};,"});,"})
export default Services,"});,"})
import { SEO } from '../components/SEO';';

export default function Services() {
  const services = [
    {
      category: 'AI & Machine Learning',
      icon: '🤖',
      color: 'blue',
      services: [
          name: 'AI Business Intelligence',
          description: 'Transform your data into actionable insights with AI-powered analytics and reporting.',
          features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom ML Models', 'Data Visualization']
} {
          name: 'AI Sales Copilot',
          description: 'Automate and optimize your sales process with intelligent lead scoring and follow-up.',
          features: ['Lead Scoring', 'Automated Follow-ups', 'Sales Forecasting', 'CRM Integration']
          name: 'AI Compliance Assistant',
          description: 'Ensure regulatory compliance with automated monitoring and reporting systems.',
          features: ['Regulatory Monitoring', 'Automated Reporting', 'Risk Assessment', 'Audit Trails']
          name: 'AI Workflow Automation',
          description: 'Streamline business processes with intelligent automation and decision-making.',
          features: ['Process Automation', 'Smart Routing', 'Decision Trees', 'Performance Analytics']
}
      ]
      category: 'Cloud & DevOps',
      icon: '☁️',
      color: 'purple',
          name: 'Cloud FinOps Optimizer',
          description: 'Optimize your cloud costs with intelligent resource management and cost analysis.',
          features: ['Cost Optimization', 'Resource Management', 'Budget Tracking', 'Performance Monitoring']
          name: 'Cloud Infrastructure',
          description: 'Design and implement scalable cloud solutions for your business needs.',
          features: ['Multi-cloud Strategy', 'Scalable Architecture', 'Security Implementation', 'Disaster Recovery']
          name: 'DevOps Automation',
          description: 'Accelerate development with automated CI/CD pipelines and infrastructure management.',
          features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Automated Testing', 'Deployment Automation']
          name: 'Edge Computing',
          description: 'Deploy applications closer to users for improved performance and reduced latency.',
          features: ['Edge Deployment', 'Content Delivery', 'IoT Integration', 'Performance Optimization']
      category: 'Cybersecurity',
      icon: '🔒',
      color: 'red',
          name: 'Zero Trust Security',
          description: 'Implement comprehensive security with zero-trust architecture principles.',
          features: ['Identity Verification', 'Access Control', 'Network Segmentation', 'Threat Detection']
          name: 'AI Threat Detection',
          description: 'Detect and respond to security threats using advanced AI algorithms.',
          features: ['Real-time Monitoring', 'Threat Intelligence', 'Automated Response', 'Incident Management']
          name: 'Compliance Automation',
          description: 'Automate compliance processes for various regulatory requirements.',
          features: ['Regulatory Mapping', 'Automated Audits', 'Policy Management', 'Compliance Reporting']
          name: 'Security Operations',
          description: '24/7 security monitoring and incident response services.',
          features: ['Security Monitoring', 'Incident Response', 'Vulnerability Management', 'Security Training']
      category: 'Micro SAAS Solutions',
      icon: '💻',
      color: 'green',
          name: 'Custom Web Applications',
          description: 'Tailored web solutions designed specifically for your business requirements.',
          features: ['Custom Development', 'Responsive Design', 'API Integration', 'Scalable Architecture']
          name: 'Business Process Automation',
          description: 'Automate repetitive tasks and streamline your business operations.',
          features: ['Workflow Automation', 'Process Mapping', 'Integration Services', 'Performance Analytics']
          name: 'Customer Relationship Management',
          description: 'Manage customer interactions and improve relationship building.',
          features: ['Contact Management', 'Sales Tracking', 'Customer Analytics', 'Communication Tools']
          name: 'Enterprise Resource Planning',
          description: 'Comprehensive business management solutions for enterprise operations.',
          features: ['Resource Planning', 'Financial Management', 'Supply Chain', 'Human Resources']
      category: 'Data & Analytics',
      icon: '📊',
      color: 'indigo',
          name: 'Data Analytics Platform',
          description: 'Transform raw data into actionable business intelligence and insights.',
          features: ['Data Processing', 'Advanced Analytics', 'Real-time Reporting', 'Custom Dashboards']
          name: 'Business Intelligence',
          description: 'Comprehensive BI solutions for data-driven decision making.',
          features: ['Data Visualization', 'KPI Tracking', 'Performance Metrics', 'Trend Analysis']
          name: 'Data Governance',
          description: 'Ensure data quality, security, and compliance across your organization.',
          features: ['Data Quality', 'Security Policies', 'Compliance Management', 'Data Lineage']
          name: 'Predictive Analytics',
          description: 'Forecast future trends and outcomes using advanced statistical models.',
          features: ['Statistical Modeling', 'Trend Analysis', 'Risk Assessment', 'Scenario Planning']
      category: 'Emerging Technologies',
      icon: '🚀',
      color: 'yellow',
          name: 'Quantum Computing Solutions',
          description: 'Explore the future of computing with quantum technology applications.',
          features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Research Support']
          name: 'Blockchain Development',
          description: 'Build secure, transparent, and decentralized applications.',
          features: ['Smart Contracts', 'DApp Development', 'Token Creation', 'Blockchain Integration']
          name: 'IoT Platform Development',
          description: 'Connect and manage devices with intelligent IoT solutions.',
          features: ['Device Management', 'Data Collection', 'Real-time Monitoring', 'Analytics Dashboard']
          name: 'AR/VR Applications',
          description: 'Create immersive experiences with augmented and virtual reality.',
          features: ['3D Modeling', 'Interactive Experiences', 'Cross-platform Support', 'Content Creation']
  ]

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-100 text-blue-800 border-blue-200',
      purple: 'bg-purple-100 text-purple-800 border-purple-200',
      red: 'bg-red-100 text-red-800 border-red-200',
      green: 'bg-green-100 text-green-800 border-green-200',
      indigo: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      yellow: 'bg-yellow-100 text-yellow-800 border-yellow-200'};
    return colorMap[color] || 'bg-gray-100 text-gray-800 border-gray-200'};

  return (
    <>
      <Head>
        <title>Services - Zion Tech Group | AI, Cloud, Cybersecurity & More</title>
        <meta name="description" content="Comprehensive technology services including AI solutions, cloud infrastructure, cybersecurity, micro SAAS, and emerging technologies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Navigation */}
        <nav className="bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-gray-900">Zion Tech Group</Link>
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</Link>
                <Link href="/services" className="text-blue-600 font-medium">Services</Link>
                <Link href="/solutions" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Solutions</Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</Link>
                <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Blog</Link>
        </nav>

        {/* Hero Section */}
        <section className="py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive technology solutions designed to drive innovation, efficiency, and growth for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Get Started
              </Link>
              <Link href="/solutions" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                View Solutions
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
            {services.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-20">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
                    <span className="text-3xl">{category.icon}</span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.category}</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Cutting-edge solutions designed to transform your business operations and drive success
                
                <div className="grid md:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="group p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                      
                        <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      
                      <div className="flex justify-between items-center">
                        <Link 
                          href="/contact" 
                          className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group-hover:underline"
                        >
                          Learn More
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={`M17 8l4 4m0 0l-4 4m4-4H3` />
                          </svg>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getColorClasses(category.color)}`}>
                          {category.category}
                        </span>

        {/* CTA Section */}
        <section className=`py-20 bg-gradient-to-r from-blue-600 to-purple-600`}>
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how our technology solutions can drive innovation and growth for your organization
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Schedule Free Consultation
              <Link href="/solutions" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
                Explore Solutions

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
                <p className="text-gray-400 mb-4">
                  Transforming businesses through innovative technology solutions and AI-powered automation.
              
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/services" className="hover:text-white transition-colors">AI Solutions</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Cloud & DevOps</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Cybersecurity</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Micro SAAS</Link></li>
              
                <h4 className="text-lg font-semibold mb-4">Company</h4>
                  <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <div className="space-y-2 text-gray-400">
                  <p>+1 302 464 0950</p>
                  <p>kleber@ziontechgroup.com</p>
                  <p>Middletown, DE 19709</p>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
        </footer>
export: default function Page() {
export default function Page() {
const Services: React.FC: = () => {
  return: (<>;
      <SEO: title='Services - Zion Tech Group' />';';
      <div: className="min-h-screen bg-white py-20">';';
        <div: className="max-w-4xl mx-auto px-4">';';
          <h1: className="text-4xl font-bold text-gray-900 mb-8">Services</h1>';';
          <p: className="text-lg text-gray-600">Content coming soon...</p>';';
;
export: default Services;
  return (<>;
      <SEO title='Services - Zion Tech Group' />;
      <div className="min-h-screen bg-white py-20">;
        <div className="max-w-4xl mx-auto px-4">;
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Services</h1>;
          <p className="text-lg text-gray-600">Content coming soon...</p>;
        </div>;
    </>;
import {SEO } from '../components/SEO';
export default function Page()   {const Services: React.FC = () => {
import { SEO } from &apos;../components/SEO';&apos;&apos;

export default function Page() {}
const Services: React.FC = () =>  {
  return (}<>
      <;<SEO title=&apos;Services - Zion Tech Group&apos; />&apos;
      <div className=&apos;min-h-screen bg-white py-20&apos;>&apos;'
        <div className=&apos;max-w-4xl mx-auto px-4&apos;>&apos;'
          <h1 className=&apos;text-4xl font-bold text-gray-900 mb-8&apos;>Services&apos;</h1>
          <p className=&apos;text-lg text-gray-600&apos;>Content coming soon...&apos;</p>
    <;</>
const Services: React.FC = () => {'
  return (<>""
      <SEO title='Services - Zion Tech Group' /" >""
      <div className="min-h-screen bg-white py-20">""
        <div className="max-w-4xl mx-auto px-4">""
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Services</h1>""
const Services: React.FC = () => {""
      <SEO title='Services - Zion Tech Group' /"" >""
  return (<>
      <SEO title='Services - Zion Tech Group' />
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Services</h1>
const Services: React.FC = () => {"
  return (<>"
      <SEO title='Services - Zion Tech Group' /  >'
      <div className="min-h-screen bg-white py-20">"
        <div className="max-w-4xl mx-auto px-4">"
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Services</h1>"
          <p className="text-lg text-gray-600">Content coming soon...</p>
  )}
""
"
"