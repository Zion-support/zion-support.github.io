import React from 'react';
import Link from 'next/link';
import { 
  Eye, 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  BarChart3, 
  Users, 
  Globe,
  Zap,
  Target,
  Award,
  ArrowRight,
  Accessibility,
  Monitor,
  Smartphone,
  Tablet,
  Laptop
} from 'lucide-react';

export default function AccessibilityAuditor() {
  const features = [
    {
      icon: Eye,
      title: 'Comprehensive Auditing',
      description: 'Complete accessibility assessment across all digital touchpoints',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Compliance Standards',
      description: 'WCAG 2.1 AA/AAA, Section 508, and international accessibility guidelines',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Detailed Reporting',
      description: 'Actionable insights with prioritized recommendations and compliance scores',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'User Experience Focus',
      description: 'Real-world testing with assistive technologies and diverse user groups',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const auditAreas = [
    {
      title: 'Web Accessibility',
      description: 'Comprehensive testing of websites, web applications, and digital content',
      icon: Globe,
      items: ['Keyboard navigation', 'Screen reader compatibility', 'Color contrast', 'Alt text for images']
    },
    {
      title: 'Mobile Accessibility',
      description: 'Mobile app and responsive design accessibility testing',
      icon: Smartphone,
      items: ['Touch target sizes', 'Voice control compatibility', 'Mobile screen readers', 'Gesture alternatives']
    },
    {
      title: 'Document Accessibility',
      description: 'PDF, Word documents, and other digital document formats',
      icon: Monitor,
      items: ['Document structure', 'Reading order', 'Alternative text', 'Form accessibility']
    },
    {
      title: 'Software Applications',
      description: 'Desktop and enterprise software accessibility assessment',
      icon: Laptop,
      items: ['Interface navigation', 'Keyboard shortcuts', 'High contrast modes', 'Assistive technology support']
    }
  ];

  const complianceStandards = [
    { standard: 'WCAG 2.1 AA', level: 'Advanced', compliance: '99%' },
    { standard: 'WCAG 2.1 AAA', level: 'Expert', compliance: '95%' },
    { standard: 'Section 508', level: 'Federal', compliance: '100%' },
    { standard: 'ADA Title III', level: 'Legal', compliance: '98%' },
    { standard: 'EN 301 549', level: 'European', compliance: '97%' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20"></div>
        <div className="relative container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
              <Accessibility className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Accessibility Auditor
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Comprehensive digital accessibility auditing and compliance testing for inclusive digital experiences. 
            Ensure your digital products meet global accessibility standards and serve all users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30 transform hover:scale-105"
            >
              Start Accessibility Audit
            </Link>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              View Sample Report
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Accessibility Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our accessibility auditing platform provides end-to-end testing, compliance verification, 
              and actionable recommendations for digital accessibility.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-zion-slate-light">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Audit Areas Section */}
      <section className="py-20 px-4 bg-zion-slate-dark/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              What We Audit
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive accessibility testing across all digital platforms and content types
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {auditAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div key={index} className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{area.title}</h3>
                      <p className="text-zion-slate-light">{area.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {area.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Standards Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Global Compliance Standards
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Meet international accessibility standards and legal requirements across all jurisdictions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300">
                <div className="text-3xl font-bold text-zion-cyan mb-2">{standard.compliance}</div>
                <div className="text-lg font-semibold text-white mb-2">{standard.standard}</div>
                <div className="text-sm text-zion-slate-light">{standard.level}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make Your Digital Products Accessible?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Join thousands of organizations that trust Zion Tech Group for comprehensive accessibility auditing 
            and compliance solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/case-studies"
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}