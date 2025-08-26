import React from 'react';
import { SEO } from '@/components/SEO';

export default function Team() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Executive Officer',
      bio: 'Visionary leader with 15+ years of experience in technology and AI. Former CTO at Fortune 500 companies.',
      image: '👩‍💼',
      expertise: ['AI Strategy', 'Digital Transformation', 'Leadership'],
      linkedin: 'https://linkedin.com/in/sarahchen',
      email: 'sarah.chen@ziontechgroup.com'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'Expert in cloud architecture and DevOps with deep knowledge of enterprise-scale systems.',
      image: '👨‍💻',
      expertise: ['Cloud Architecture', 'DevOps', 'System Design'],
      linkedin: 'https://linkedin.com/in/michaelrodriguez',
      email: 'michael.rodriguez@ziontechgroup.com'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of AI Research',
      bio: 'Leading researcher in machine learning and AI ethics. PhD from Stanford with 20+ publications.',
      image: '👩‍🔬',
      expertise: ['Machine Learning', 'AI Ethics', 'Research'],
      linkedin: 'https://linkedin.com/in/emilywatson',
      email: 'emily.watson@ziontechgroup.com'
    },
    {
      name: 'David Kim',
      role: 'VP of Cybersecurity',
      bio: 'Cybersecurity expert with certifications in CISSP, CISM, and extensive experience in threat intelligence.',
      image: '👨‍🔒',
      expertise: ['Cybersecurity', 'Threat Intelligence', 'Compliance'],
      linkedin: 'https://linkedin.com/in/davidkim',
      email: 'david.kim@ziontechgroup.com'
    },
    {
      name: 'Lisa Thompson',
      role: 'VP of Client Success',
      bio: 'Dedicated to ensuring client satisfaction and successful project delivery across all engagements.',
      image: '👩‍💼',
      expertise: ['Client Relations', 'Project Management', 'Success Metrics'],
      linkedin: 'https://linkedin.com/in/lisathompson',
      email: 'lisa.thompson@ziontechgroup.com'
    },
    {
      name: 'James Wilson',
      role: 'Head of Infrastructure',
      bio: 'Infrastructure specialist with expertise in network design, system administration, and scalability.',
      image: '👨‍🏗️',
      expertise: ['Network Design', 'System Administration', 'Scalability'],
      linkedin: 'https://linkedin.com/in/jameswilson',
      email: 'james.wilson@ziontechgroup.com'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Our Team - Zion Tech Group"
        description="Meet the exceptional team of experts at Zion Tech Group. Our leadership brings decades of experience in AI, cloud computing, cybersecurity, and digital transformation."
        keywords="team, leadership, experts, AI specialists, technology leaders, Zion Tech Group"
        canonical="https://ziontechgroup.com/team"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Exceptional talent driving innovation and delivering transformative technology solutions
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our leadership brings together decades of experience across technology, AI, and business transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                      {member.image}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium">{member.role}</p>
                  </div>
                  
                  <p className="text-gray-600 text-center mb-6 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.032-3.047-1.033 0-1.191.805-1.191 2.951v5.665H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about technology and innovation. 
            Join us in shaping the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/careers"
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              View Open Positions
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}