import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Zap, Shield, Globe, Award, TrendingUp, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
;
export default function About() {;
  const values = [;
    {;
      icon: Zap,;
      title: 'Innovation First',;
      description: 'We push the boundaries of what\'s possible with cutting-edge AI and technology solutions.';
    },;
    {;
      icon: Shield,;
      title: 'Trust & Security',;
      description: 'Your data and business security are our top priorities with enterprise-grade protection.';
    },;
    {;
      icon: Users,;
      title: 'Customer Success',;
      description: 'We measure our success by the success of our clients and their digital transformation journey.';
    },;
    {;
      icon: Globe,;
      title: 'Global Impact',;
      description: 'Making technology accessible and beneficial for businesses worldwide.';
    };
  ];
;
  const stats = [;
    { number: '500+', label: 'Happy Clients' },;
    { number: '50+', label: 'AI Solutions' },;
    { number: '99.9%', label: 'Uptime SLA' },;
    { number: '24/7', label: 'Support' };
  ];
;
  const team = [;
    {;
      name: 'Kleber Santos',;
      role: 'CEO & Founder',;
      bio: 'Visionary leader with 15+ years in AI and technology innovation.',;
      image: '/team/kleber-santos.jpg';
    },;
    {;
      name: 'AI Research Team',;
      role: 'AI & Machine Learning',;
      bio: 'World-class researchers pushing the boundaries of artificial intelligence.',;
      image: '/team/ai-team.jpg';
    },;
    {;
      name: 'Technology Team',;
      role: 'Engineering & Development',;
      bio: 'Expert developers building scalable, secure, and innovative solutions.',;
      image: '/team/tech-team.jpg';
    };
  ];
;
  return (;
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;"
      {/* Hero Section */}";"
      <div className="bg-gradient-to-r from-zion-purple to-zion-blue-dark py-20">";"
        <div className="container mx-auto px-4 text-center">;
          <motion.h1;
            initial={{ opacity: 0, y: 20 }};"
            animate={{ opacity: 1, y: 0 }}";"
            className="text-5xl font-bold text-white mb-6";
          >;
            About Zion Tech Group;
          </motion.h1>;
          <motion.p;
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};"
            transition={{ delay: 0.1 }}";"
            className="text-xl text-zion-cyan-light max-w-4xl mx-auto";
          >;
            We are a forward-thinking technology company dedicated to transforming businesses through innovative AI solutions,;
            quantum computing, and cutting-edge digital services. Our mission is to democratize advanced technology and;
            make it accessible to businesses of all sizes.;
          </motion.p>;
        </div>;
      </div>;"
      {/* Mission & Vision */}";"
      <div className="py-20">";"
        <div className="container mx-auto px-4">";"
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">;
            <motion.div;
              initial={{ opacity: 0, x: -20 }};
              animate={{ opacity: 1, x: 0 }};"
            >";"
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>";"
              <p className="text-xl text-zion-cyan-light mb-6">;
                To accelerate digital transformation by providing accessible, scalable, and innovative AI-powered solutions;
                that drive business growth and competitive advantage.;"
              </p>";"
              <p className="text-lg text-zion-slate-light">;
                We believe that every business, regardless of size, should have access to the same cutting-edge technology;
                that powers Fortune 500 companies. Our solutions bridge this gap, enabling businesses to compete in the;
                digital age.;
              </p>;
            </motion.div>;
            <motion.div;
              initial={{ opacity: 0, x: 20 }};
              animate={{ opacity: 1, x: 0 }};
              transition={{ delay: 0.2 }};"
            >";"
              <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>";"
              <p className="text-xl text-zion-cyan-light mb-6">;
                To be the leading force in democratizing AI and quantum computing technology, creating a future where;
                innovation is accessible to all.;"
              </p>";"
              <p className="text-lg text-zion-slate-light">;
                We envision a world where businesses can harness the full power of artificial intelligence and quantum;
                computing to solve complex challenges, drive innovation, and create sustainable growth.;
              </p>;
            </motion.div>;
          </div>;
        </div>;
      </div>;"
      {/* Values Section */}";"
      <div className="py-20 bg-gray-50">";"
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }};"
            animate={{ opacity: 1, y: 0 }}";"
            className="text-center mb-16";"
          >";"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>";"
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>;
          </motion.div>;"
";"
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">;
            {values.map((value, index) => (;
              <motion.div;
                key={value.title};
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};"
                transition={{ delay: index * 0.1 }}";"
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300";"
              >";"
                <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white mb-4">";"
                  <value.icon className="w-8 h-8" />;"
                </div>";"
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>";"
                <p className="text-gray-600">{value.description}</p>;
              </motion.div>;
            ))};
          </div>;
        </div>;
      </div>;"
      {/* Stats Section */}";"
      <div className="py-20">";"
        <div className="container mx-auto px-4">";"
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">;
            {stats.map((stat, index) => (;
              <motion.div;
                key={stat.label};
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};"
                transition={{ delay: index * 0.1 }}";"
                className="text-center";"
              >";"
                <div className="text-5xl font-bold text-zion-cyan mb-2">{stat.number}</div>";"
                <div className="text-xl text-zion-slate-light">{stat.label}</div>;
              </motion.div>;
            ))};
          </div>;
        </div>;
      </div>;"
      {/* Team Section */}";"
      <div className="py-20 bg-gray-50">";"
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }};"
            animate={{ opacity: 1, y: 0 }}";"
            className="text-center mb-16";"
          >";"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>";"
            <p className="text-xl text-gray-600">The brilliant minds behind our innovative solutions</p>;
          </motion.div>;"
";"
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">;
            {team.map((member, index) => (;
              <motion.div;
                key={member.name};
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};"
                transition={{ delay: index * 0.1 }}";"
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300";"
              >";"
                <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full mx-auto mb-4 flex items-center justify-center">";"
                  <Users className="w-12 h-12 text-white" />;"
                </div>";"
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>";"
                <p className="text-zion-cyan font-medium mb-3">{member.role}</p>";"
                <p className="text-gray-600">{member.bio}</p>;
              </motion.div>;
            ))};
          </div>;
        </div>;
      </div>;"
      {/* Story Section */}";"
      <div className="py-20">";"
        <div className="container mx-auto px-4">";"
          <div className="max-w-4xl mx-auto text-center">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};"
            >";"
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>";"
              <p className="text-xl text-zion-cyan-light mb-8">;
                Founded in 2020, Zion Tech Group emerged from a vision to democratize advanced technology.;
                What started as a small team of AI enthusiasts has grown into a comprehensive technology;
                company serving businesses worldwide.;"
              </p>";"
              <p className="text-lg text-zion-slate-light mb-8">;
                We've consistently pushed the boundaries of what's possible, from developing cutting-edge;
                AI solutions to pioneering quantum computing applications. Our journey has been marked by;
                innovation, growth, and an unwavering commitment to our clients' success.;"
              </p>";"
              <p className="text-lg text-zion-slate-light">;
                Today, we continue to lead the industry with our comprehensive suite of AI-powered services,;
                helping businesses transform their operations and achieve unprecedented growth.;
              </p>;
            </motion.div>;
          </div>;
        </div>;
      </div>;"
      {/* CTA Section */}";"
      <div className="py-20 bg-gradient-to-r from-zion-purple to-zion-blue-dark">";"
        <div className="container mx-auto px-4 text-center">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }};"
            animate={{ opacity: 1, y: 0 }}";"
            className="max-w-4xl mx-auto";"
          >";"
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready to Work With Us?;"
            </h2>";"
            <p className="text-xl text-zion-cyan-light mb-8">;
              Join hundreds of businesses that have transformed their operations with Zion Tech Group;"
            </p>";"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;"
              <Link";"
                to="/contact";"
                className="bg-white text-zion-purple px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300";
              >;
                Get Started;
              </Link>;"
              <Link";"
                to="/services";"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-zion-purple transition-colors duration-300";
              >;
                Explore Services;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </div>;
    </div>;
  );"
}";"
