import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      image: '👨‍💼',
      bio: 'Visionary leader with 15+ years in tech innovation and business strategy.'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      image: '👩‍💻',
      bio: 'Technical architect specializing in AI, cloud infrastructure, and scalable systems.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead Developer',
      image: '👨‍🔧',
      bio: 'Full-stack expert with expertise in React, Node.js, and modern web technologies.'
    },
    {
      name: 'Emily Watson',
      role: 'UX/UI Designer',
      image: '👩‍🎨',
      bio: 'Creative designer focused on user experience and modern interface design.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and commitment to delivering innovative IT solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue to-zion-purple">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center text-white mb-16">
            <h1 className="text-5xl font-bold mb-6">
              About <span className="text-zion-cyan">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We are a team of passionate technologists dedicated to delivering innovative IT solutions that drive business growth and digital transformation.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-zion-slate-light mb-6">
                To empower businesses with cutting-edge technology solutions that drive innovation, 
                efficiency, and growth. We believe in the transformative power of technology and 
                its ability to solve complex business challenges.
              </p>
              <p className="text-zion-slate-light">
                Our commitment is to deliver exceptional value through innovative solutions, 
                expert guidance, and unwavering support for our clients' success.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-zion-slate-light mb-6">
                To be the leading provider of innovative IT solutions, recognized for our 
                technical excellence, client satisfaction, and commitment to pushing the 
                boundaries of what's possible with technology.
              </p>
              <p className="text-zion-slate-light">
                We envision a future where every business has access to the tools and 
                technologies they need to thrive in the digital age.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-zion-cyan mb-2">{stat.number}</div>
                <div className="text-zion-slate-light">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-zion-cyan mb-4">{member.role}</p>
                  <p className="text-sm text-zion-slate-light">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
                <p className="text-zion-slate-light">
                  We constantly explore new technologies and methodologies to deliver cutting-edge solutions.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-white mb-4">Collaboration</h3>
                <p className="text-zion-slate-light">
                  We work closely with our clients as partners, ensuring their success is our success.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 text-center">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-xl font-semibold text-white mb-4">Excellence</h3>
                <p className="text-zion-slate-light">
                  We maintain the highest standards in everything we do, from code quality to client service.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Work With Us?</h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan/80">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-zion-blue">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;