import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Press: React.FC = () => {
  const pressReleases = [
    {
      id: 1,
      title: 'Zion Tech Group Secures $50M Series B Funding for AI Innovation',
      date: '2025-01-15',
      excerpt: 'Funding will accelerate development of next-generation AI solutions and expand global operations.',
      category: 'Funding'
    },
    {
      id: 2,
      title: 'Zion Tech Group Named to Inc. 5000 List of Fastest-Growing Companies',
      date: '2024-12-10',
      excerpt: 'Company recognized for exceptional growth and innovation in the technology sector.',
      category: 'Recognition'
    },
    {
      id: 3,
      title: 'Zion Tech Group Launches Revolutionary Quantum Computing Platform',
      date: '2024-11-20',
      excerpt: 'New platform brings quantum computing capabilities to enterprise applications.',
      category: 'Product Launch'
    },
    {
      id: 4,
      title: 'Zion Tech Group Expands Leadership Team with Industry Veterans',
      date: '2024-10-15',
      excerpt: 'Strategic hires strengthen company\'s position in AI and cybersecurity markets.',
      category: 'Leadership'
    }
  ];

  const mediaAssets = [
    {
      name: 'Company Logo',
      description: 'High-resolution Zion Tech Group logo in various formats',
      formats: ['PNG', 'SVG', 'PDF'],
      downloadUrl: '/assets/press/zion-tech-group-logo.zip'
    },
    {
      name: 'Executive Headshots',
      description: 'Professional photos of key leadership team members',
      formats: ['JPG', 'PNG'],
      downloadUrl: '/assets/press/executive-headshots.zip'
    },
    {
      name: 'Product Screenshots',
      description: 'High-quality screenshots of our key products and platforms',
      formats: ['PNG', 'JPG'],
      downloadUrl: '/assets/press/product-screenshots.zip'
    },
    {
      name: 'Company Fact Sheet',
      description: 'Comprehensive overview of Zion Tech Group',
      formats: ['PDF'],
      downloadUrl: '/assets/press/company-fact-sheet.pdf'
    }
  ];

  const companyStats = [
    { metric: 'Founded', value: '2010' },
    { metric: 'Employees', value: '500+' },
    { metric: 'Global Offices', value: '12' },
    { metric: 'Clients Served', value: '1000+' },
    { metric: 'Projects Completed', value: '2500+' },
    { metric: 'Countries', value: '25+' }
  ];

  return (
    <>
      <Helmet>
        <title>Press Kit - Zion Tech Group | Media Resources & Information</title>
        <meta name="description" content="Access Zion Tech Group's press kit, company information, media assets, and press releases. Resources for journalists and media professionals." />
        <meta name="keywords" content="Zion Tech Group press kit, media resources, company information, press releases, media assets" />
        <link rel="canonical" href="https://ziontechgroup.com/press" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Press <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Kit</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Welcome to Zion Tech Group's press room. Find company information, press releases, 
              media assets, and resources for journalists and media professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Media Inquiries
              </Link>
              <a
                href="mailto:press@ziontechgroup.com"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                press@ziontechgroup.com
              </a>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  About Zion Tech Group
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Zion Tech Group is a leading technology solutions provider specializing in AI-powered services, 
                  cybersecurity, cloud computing, and digital transformation. Founded in 2010, we've grown from 
                  a small startup to a global technology leader serving over 1,000 clients across 25 countries.
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Our mission is to empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and competitive advantage. We combine deep technical expertise with business 
                  acumen to deliver transformative results for our clients.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Headquartered in New York with offices across North America, Europe, and Asia, we're 
                  committed to building the future of technology through innovation, collaboration, and 
                  unwavering commitment to excellence.
                </p>
              </div>
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Company Statistics</h3>
                <div className="grid grid-cols-2 gap-6">
                  {companyStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-2">{stat.value}</div>
                      <div className="text-gray-300 text-sm">{stat.metric}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Latest Press Releases
            </h2>
            <div className="space-y-6">
              {pressReleases.map((release) => (
                <div key={release.id} className="bg-slate-700/50 p-6 rounded-xl border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full">
                          {release.category}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {new Date(release.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{release.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{release.excerpt}</p>
                    </div>
                    <button className="mt-4 lg:mt-0 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                      Read Full Release
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/news"
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
              >
                View All News & Press Releases →
              </Link>
            </div>
          </div>
        </section>

        {/* Media Assets */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Media Assets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mediaAssets.map((asset, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">{asset.name}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{asset.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {asset.formats.map((format, formatIndex) => (
                        <span key={formatIndex} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                          {format}
                        </span>
                      ))}
                    </div>
                    <a
                      href={asset.downloadUrl}
                      className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
                    >
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Kleber Santos",
                  role: "CEO & Founder",
                  bio: "Visionary leader with over 15 years of experience in technology innovation and business transformation.",
                  email: "kleber@ziontechgroup.com"
                },
                {
                  name: "Sarah Chen",
                  role: "CTO",
                  bio: "Technology expert specializing in AI, cloud architecture, and digital transformation strategies.",
                  email: "sarah.chen@ziontechgroup.com"
                },
                {
                  name: "Michael Rodriguez",
                  role: "Head of Engineering",
                  bio: "Experienced engineer leading our development teams in creating cutting-edge solutions.",
                  email: "michael.rodriguez@ziontechgroup.com"
                }
              ].map((member, index) => (
                <div key={index} className="bg-slate-700/50 p-6 rounded-xl border border-white/10 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 mb-4 leading-relaxed">{member.bio}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-blue-400 hover:text-blue-300 text-sm transition-colors duration-300"
                  >
                    {member.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Media Contact Information
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              For media inquiries, interviews, or additional information, please contact our press team.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Press Team</h3>
                <div className="space-y-3 text-gray-300">
                  <p><strong>Email:</strong> press@ziontechgroup.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Response Time:</strong> Within 24 hours</p>
                </div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Company Address</h3>
                <div className="space-y-3 text-gray-300">
                  <p>Zion Tech Group</p>
                  <p>123 Innovation Drive</p>
                  <p>New York, NY 10001</p>
                  <p>United States</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Press Team
              </Link>
              <a
                href="mailto:press@ziontechgroup.com"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Send Email
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Press;