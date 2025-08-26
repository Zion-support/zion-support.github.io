import React from 'react';
import { Link } from 'react-router-dom';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      bio: "Visionary leader with 20+ years in technology innovation and business transformation. Former CTO at Fortune 500 companies.",
      expertise: ["AI Strategy", "Digital Transformation", "Business Innovation"],
      image: "/images/team/sarah-chen.jpg",
      linkedin: "https://linkedin.com/in/sarah-chen-zion"
    },
    {
      name: "Marcus Rodriguez",
      role: "Chief Technology Officer",
      bio: "Technology architect and AI researcher with deep expertise in machine learning, cloud infrastructure, and cybersecurity.",
      expertise: ["AI/ML", "Cloud Architecture", "Cybersecurity"],
      image: "/images/team/marcus-rodriguez.jpg",
      linkedin: "https://linkedin.com/in/marcus-rodriguez-zion"
    },
    {
      name: "Dr. Emily Watson",
      role: "Chief AI Officer",
      bio: "Leading AI researcher specializing in autonomous systems, neural networks, and ethical AI development.",
      expertise: ["Autonomous AI", "Neural Networks", "AI Ethics"],
      image: "/images/team/emily-watson.jpg",
      linkedin: "https://linkedin.com/in/emily-watson-zion"
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "Experienced engineering leader with expertise in scalable systems, DevOps, and software architecture.",
      expertise: ["System Architecture", "DevOps", "Scalability"],
      image: "/images/team/david-kim.jpg",
      linkedin: "https://linkedin.com/in/david-kim-zion"
    },
    {
      name: "Lisa Thompson",
      role: "VP of Client Success",
      bio: "Client success expert with deep understanding of enterprise technology adoption and digital transformation.",
      expertise: ["Client Success", "Digital Adoption", "Change Management"],
      image: "/images/team/lisa-thompson.jpg",
      linkedin: "https://linkedin.com/in/lisa-thompson-zion"
    },
    {
      name: "Dr. James Wilson",
      role: "VP of Research & Development",
      bio: "Research leader focused on emerging technologies, quantum computing, and next-generation AI systems.",
      expertise: ["Emerging Tech", "Quantum Computing", "AI Research"],
      image: "/images/team/james-wilson.jpg",
      linkedin: "https://linkedin.com/in/james-wilson-zion"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible, constantly exploring new technologies and approaches.",
      icon: "🚀"
    },
    {
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering measurable business value.",
      icon: "🎯"
    },
    {
      title: "Ethical AI",
      description: "We develop AI solutions that are not only powerful but also responsible and ethical.",
      icon: "🤝"
    },
    {
      title: "Continuous Learning",
      description: "Our team never stops learning, staying ahead of the latest technology trends.",
      icon: "📚"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The brilliant minds behind Zion Tech Group's innovative solutions. 
              Our diverse team brings together decades of experience in AI, cloud computing, 
              cybersecurity, and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and every solution we create.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the executives and leaders who drive our company's vision and success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <div className="text-6xl text-white font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.032-3.047-1.033 0-1.191.805-1.191 2.951v5.665H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    View Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about technology 
            and innovation. Join us in shaping the future of AI and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/careers"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              View Open Positions
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Patents Filed</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;