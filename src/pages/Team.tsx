import React from 'react';
import { Users, Award, Lightbulb, Shield, Zap, Globe, Building, Heart } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      expertise: "AI & Machine Learning",
      experience: "15+ years",
      avatar: "SC",
      bio: "Leading our AI research and development initiatives with expertise in neural networks and autonomous systems."
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Cybersecurity",
      expertise: "Security & Compliance",
      experience: "12+ years",
      avatar: "MR",
      bio: "Expert in threat detection, incident response, and compliance frameworks including SOC 2 and ISO 27001."
    },
    {
      name: "Dr. James Kim",
      role: "Quantum Computing Lead",
      expertise: "Quantum Systems",
      experience: "18+ years",
      avatar: "JK",
      bio: "Pioneering quantum computing solutions and quantum neural network architectures for enterprise applications."
    },
    {
      name: "Lisa Thompson",
      role: "Cloud & DevOps Director",
      expertise: "Infrastructure & Automation",
      experience: "14+ years",
      avatar: "LT",
      bio: "Specializing in cloud migration, infrastructure as code, and CI/CD pipeline optimization."
    },
    {
      name: "David Park",
      role: "Head of Research",
      expertise: "Emerging Technologies",
      experience: "16+ years",
      avatar: "DP",
      bio: "Leading research initiatives in blockchain, Web3, and next-generation technology solutions."
    },
    {
      name: "Amanda Foster",
      role: "Client Success Director",
      expertise: "Business Strategy",
      experience: "13+ years",
      avatar: "AF",
      bio: "Ensuring client success through strategic technology implementation and ongoing support."
    }
  ];

  const values = [
    {
      icon: Innovation,
      title: "Innovation First",
      description: "We constantly push boundaries and explore new technologies to solve complex challenges."
    },
    {
      icon: Excellence,
      title: "Excellence in Delivery",
      description: "We maintain the highest standards in every project, ensuring exceptional quality and results."
    },
    {
      icon: Collaboration,
      title: "Collaborative Culture",
      description: "We believe in the power of teamwork and diverse perspectives to achieve extraordinary outcomes."
    },
    {
      icon: Integrity,
      title: "Integrity & Trust",
      description: "We build lasting relationships based on honesty, transparency, and ethical business practices."
    }
  ];

  const stats = [
    { number: "50+", label: "Team Members", icon: Users },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "25+", label: "Countries Served", icon: Globe },
    { number: "500+", label: "Projects Completed", icon: Building }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Our Team
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meet the Experts
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Behind the Innovation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Our diverse team of technology experts, researchers, and business strategists 
              work together to deliver cutting-edge solutions that transform businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the visionary leaders who drive innovation and guide our company's strategic direction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-2">{member.role}</p>
                <div className="text-sm text-gray-400 mb-3">
                  <span className="font-medium">{member.expertise}</span> • {member.experience}
                </div>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values & Culture
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide our work and shape our company culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                A Culture of Innovation
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                At Zion Tech Group, we foster an environment where creativity thrives, 
                innovation is celebrated, and every team member has the opportunity to make a difference.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Continuous learning and professional development
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Collaborative problem-solving and knowledge sharing
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Work-life balance and flexible arrangements
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Recognition of achievements and contributions
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30">
              <div className="text-center">
                <Heart className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Join Our Team</h3>
                <p className="text-gray-300 mb-6">
                  We're always looking for talented individuals who share our passion 
                  for innovation and excellence.
                </p>
                <a
                  href="/careers"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  View Open Positions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work with Our Team?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our expertise can help transform your business 
            and achieve your technology goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
            <a
              href="/careers"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// Icon components
const Innovation = ({ className }: { className?: string }) => (
  <Lightbulb className={className} />
);

const Excellence = ({ className }: { className?: string }) => (
  <Award className={className} />
);

const Collaboration = ({ className }: { className?: string }) => (
  <Users className={className} />
);

const Integrity = ({ className }: { className?: string }) => (
  <Shield className={className} />
);

export default Team;