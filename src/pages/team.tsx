import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Rocket, 
  Globe, 
  Heart,
  Linkedin,
  Twitter,
  Mail,
  Github,
  Star,
  Award,
  Trophy
} from 'lucide-react';

const TeamPage = () => {
  const leadership = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief Executive Officer',
      bio: 'Visionary leader with 15+ years in AI and technology innovation. Former CTO at Fortune 500 companies.',
      expertise: ['AI Strategy', 'Digital Transformation', 'Innovation Leadership'],
      image: '/team/sarah-chen.jpg',
      linkedin: 'https://linkedin.com/in/sarah-chen',
      twitter: 'https://twitter.com/sarahchen'
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Chief Technology Officer',
      bio: 'Technology architect with deep expertise in cloud computing, cybersecurity, and emerging technologies.',
      expertise: ['Cloud Architecture', 'Cybersecurity', 'Emerging Tech'],
      image: '/team/marcus-rodriguez.jpg',
      linkedin: 'https://linkedin.com/in/marcus-rodriguez',
      twitter: 'https://twitter.com/marcusrodriguez'
    },
    {
      name: 'Dr. Emily Watson',
      title: 'Chief Innovation Officer',
      bio: 'Research scientist specializing in quantum computing, machine learning, and breakthrough technologies.',
      expertise: ['Quantum Computing', 'Machine Learning', 'Research & Development'],
      image: '/team/emily-watson.jpg',
      linkedin: 'https://linkedin.com/in/emily-watson',
      twitter: 'https://twitter.com/emilywatson'
    }
  ];

  const advisors = [;
    {};
},;
    {};
}
  ];

  return (;
    <div className="min-h-screen bg-zion-slate-dark text-white">;
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <Users className="w-16 h-16 text-zion-cyan mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-gradient">
                Our Team
              </h1>
            </div>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Meet the brilliant minds behind Zion Tech Group. Our diverse team of experts, innovators, 
              and visionaries is dedicated to transforming the future through technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/careers"
                className="btn-neon px-8 py-4 text-lg font-semibold"
              >
                Join Our Team
              </Link>
              <Link
                to="/contact"
                className="btn-futuristic px-8 py-4 text-lg font-semibold"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Visionary leaders driving innovation and growth across all aspects of our organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {};
              <div key={index} className="bg-zion-blue-dark p-6 rounded-lg border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300">;
                <div className="text-center mb-6">;
                  <div className="w-32 h-32 bg-zion-cyan/20 rounded-full mx-auto mb-4 flex items-center justify-center">;
                    <Users className="w-16 h-16 text-zion-cyan" />;
                  </div>;
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>;
                  <p className="text-zion-cyan font-semibold mb-3">{member.title}</p>;
                  <p className="text-zion-slate-light text-sm mb-4">{member.bio}</p>;

                  <div className="flex flex-wrap gap-2 mb-4 justify-center">;
                    {};
                      <span key={skillIndex} className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full">;
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center space-x-4">
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={leader.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${leader.name.toLowerCase().replace(' ', '.')}@ziontechgroup.com`}
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Departments
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Specialized teams working together to deliver innovative solutions across all technology domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">;
            {};
              <div key={index} className="bg-zion-blue-dark p-6 rounded-lg border border-zion-purple/30">;
                <div className="text-center">;
                  <div className="w-24 h-24 bg-zion-purple/20 rounded-full mx-auto mb-4 flex items-center justify-center">;
                    <Award className="w-12 h-12 text-zion-purple" />;
                  </div>;
                  <h3 className="text-xl font-bold text-white mb-2">{advisor.name}</h3>;
                  <p className="text-zion-purple font-semibold mb-3">{advisor.title}</p>;
                  <p className="text-zion-slate-light text-sm mb-4">{advisor.bio}</p>;

                  <div className="flex flex-wrap gap-2 justify-center">;
                    {};
                      <span key={skillIndex} className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">;
                        {skill}
                      </span>;
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The principles that guide our decisions and shape our culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20 border border-zion-cyan/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Ready to be part of something extraordinary? Join our team of innovators and help us 
              shape the future of technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/careers"
                className="btn-neon px-8 py-4 text-lg font-semibold"
              >
                View Open Positions
              </Link>
              <Link
                to="/contact"
                className="btn-futuristic px-8 py-4 text-lg font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

            <div className="text-center">;
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full mx-auto mb-4 flex items-center justify-center">;
                <Users className="w-8 h-8 text-zion-cyan" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-3">Collaboration</h3>;
              <p className="text-zion-slate-light text-sm">;
                We believe in the power of diverse perspectives and collaborative problem-solving.;
              </p>;
            </div>;

            <div className="text-center">;
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full mx-auto mb-4 flex items-center justify-center">;
                <Rocket className="w-8 h-8 text-zion-cyan" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>;
              <p className="text-zion-slate-light text-sm">;
                We strive for excellence in everything we do, from code quality to customer experience.;
              </p>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Join Our Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20">;
        <div className="container mx-auto max-w-4xl text-center">;
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
            Join Our Growing Team;
          </h2>;
          <p className="text-lg text-zion-slate-light mb-8">;
            We're always looking for talented individuals who are passionate about technology and innovation. ;
            Explore our current opportunities and become part of our mission to transform the future.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <a href="/careers" className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105">;
              View Open Positions;
            </a>;
            <a href="/contact" className="px-8 py-4 border border-zion-purple text-zion-purple font-semibold rounded-lg hover:bg-zion-purple hover:text-white transition-all duration-300">;
              Contact Us;
            </a>;
          </div>;
        </div>;
      </section>;
    </div>;
  )}
