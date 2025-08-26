import React from 'react';
<<<<<<< HEAD

const Leadership: React.FC = () => {
  const leadershipTeam = [
    {
      name: "Dr. Sarah Chen",
      title: "Chief Executive Officer",
      bio: "Dr. Chen brings over 20 years of experience in AI and technology leadership. She has led multiple successful startups and holds a PhD in Computer Science from MIT. Under her leadership, Zion Tech Group has grown into a leading AI solutions provider.",
      expertise: ["AI Strategy", "Technology Leadership", "Business Development"],
      image: "/images/leadership/sarah-chen.jpg"
    },
    {
      name: "Michael Rodriguez",
      title: "Chief Technology Officer",
      bio: "Michael is a visionary technologist with deep expertise in quantum computing, machine learning, and cloud architecture. He has architected solutions for Fortune 500 companies and holds 15 patents in AI and quantum technologies.",
      expertise: ["Quantum Computing", "AI Architecture", "Cloud Infrastructure"],
      image: "/images/leadership/michael-rodriguez.jpg"
    },
    {
      name: "Dr. Emily Watson",
      title: "Chief Research Officer",
      bio: "Dr. Watson leads our cutting-edge research initiatives in AI, quantum neural networks, and autonomous systems. She has published over 50 peer-reviewed papers and leads collaborations with top research institutions worldwide.",
      expertise: ["AI Research", "Quantum Neural Networks", "Autonomous Systems"],
      image: "/images/leadership/emily-watson.jpg"
    },
    {
      name: "David Kim",
      title: "Chief Operating Officer",
      bio: "David oversees all operational aspects of Zion Tech Group, ensuring seamless delivery of our services. With 18 years in operations management, he has optimized processes for companies serving millions of users globally.",
      expertise: ["Operations Management", "Process Optimization", "Client Success"],
      image: "/images/leadership/david-kim.jpg"
    },
    {
      name: "Lisa Thompson",
      title: "Chief Financial Officer",
      bio: "Lisa brings 25 years of financial leadership experience in the technology sector. She has successfully managed financial operations for companies through rapid growth phases and complex acquisitions.",
      expertise: ["Financial Strategy", "Growth Management", "Risk Assessment"],
      image: "/images/leadership/lisa-thompson.jpg"
    },
    {
      name: "James Wilson",
      title: "Chief Security Officer",
      bio: "James is a cybersecurity expert with extensive experience in protecting critical infrastructure and enterprise systems. He has led security teams at major financial institutions and government agencies.",
      expertise: ["Cybersecurity", "Compliance", "Risk Management"],
      image: "/images/leadership/james-wilson.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Leadership
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the visionary leaders driving innovation and growth at Zion Tech Group. 
              Our executive team combines decades of experience with cutting-edge expertise 
              to deliver exceptional value to our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-4xl font-bold text-white">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                    <p className="text-blue-400 font-semibold mb-4">{leader.title}</p>
                    <p className="text-gray-300 mb-4 leading-relaxed">{leader.bio}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Areas of Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {leader.expertise.map((skill, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Join Our Leadership</h3>
              <p className="text-gray-300 mb-6">
                We're always looking for exceptional leaders to join our team. 
                If you're passionate about AI, technology, and innovation, 
                we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:careers@ziontechgroup.com"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Contact Us
                </a>
                <a
                  href="/careers"
                  className="inline-flex items-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  View Careers
                </a>
              </div>
            </div>
          </div>
=======
import { Link } from 'react-router-dom';
import { CogIcon } from '@heroicons/react/24/outline';

const $page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-600/20 rounded-full">
              <CogIcon className="h-12 w-12 text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            $page
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This page is under development. Contact us for more information.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
          >
            Contact Us for More Information
          </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-56af
        </div>
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default Leadership;
=======
export default $page;
>>>>>>> origin/cursor/website-audit-and-enhancement-56af
