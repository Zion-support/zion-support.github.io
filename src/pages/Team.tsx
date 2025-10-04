import React from "react";
import { Helmet } from "react-helmet-async";
import { Users, Mail, Linkedin } from "lucide-react";

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Kleber Santos",
      role: "CEO & Founder",
      bio: "Technology visionary with 15+ years in AI and enterprise solutions.",
      email: "kleber@ziontechgroup.com",
      linkedin: "https://linkedin.com/in/kleber-santos"
    },
    {
      name: "AI Engineering Team",
      role: "Machine Learning Specialists",
      bio: "Expert team of AI engineers specializing in cutting-edge machine learning technologies.",
      email: "ai-team@ziontechgroup.com",
      linkedin: "https://linkedin.com/company/zion-tech-group"
    },
    {
      name: "DevOps Specialists",
      role: "Infrastructure Experts",
      bio: "Cloud and DevOps professionals ensuring scalable and secure infrastructure solutions.",
      email: "devops@ziontechgroup.com",
      linkedin: "https://linkedin.com/company/zion-tech-group"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group | Expert AI & Technology Professionals</title>
        <meta name="description" content="Meet the expert team behind Zion Tech Group. Our professionals bring decades of experience in AI, cloud computing, and enterprise solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in AI, technology, and business transformation.
            </p>
          </div>

          {/* Team Members */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 mb-6">{member.bio}</p>
                
                <div className="flex justify-center space-x-4">
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    title="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Join Our Team CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation and excellence. 
              Explore career opportunities with Zion Tech Group.
            </p>
            <a 
              href="mailto:careers@ziontechgroup.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
