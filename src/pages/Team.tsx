import React from 'react';
import { Link } from 'react-router-dom';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Kleber Santos",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in technology innovation and business transformation.",
      expertise: ["AI Strategy", "Business Development", "Technology Leadership"]
    },
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      bio: "AI researcher and technology architect with expertise in machine learning and cloud infrastructure.",
      expertise: ["Machine Learning", "Cloud Architecture", "AI Research"]
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Cybersecurity",
      bio: "Cybersecurity expert with deep knowledge in threat detection and enterprise security solutions.",
      expertise: ["Threat Detection", "Security Architecture", "Compliance"]
    },
    {
      name: "Emily Watson",
      role: "VP of Client Success",
      bio: "Client relationship expert focused on delivering exceptional value and ensuring project success.",
      expertise: ["Client Relations", "Project Management", "Business Strategy"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Meet Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experienced professionals dedicated to delivering innovative technology solutions 
              and exceptional client experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-semibold">{member.role}</p>
                </div>
                
                <p className="text-gray-300 text-center mb-6">{member.bio}</p>
                
                <div>
                  <h4 className="font-semibold text-white mb-3">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, idx) => (
                      <span key={idx} className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Join Our Growing Team</h3>
              <p className="text-gray-300 mb-6">
                We're always looking for talented individuals who share our passion for innovation 
                and technology excellence.
              </p>
              <Link
                to="/careers"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                View Open Positions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;