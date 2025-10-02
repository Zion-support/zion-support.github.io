import React from 'react';';
import {
Helmet
} from 'react-helmet-async';';

const Team: React.FC = () => {,
  const teamMembers = [
    {
      name: 'Kleber Santos',';,
      role: 'CEO & Founder',';,
      bio: 'Visionary leader with 15+ years in AI and enterprise technology',';,
      image: '/images/team/kleber-santos.jpg',';,
      linkedin: 'https://linkedin.com/in/kleber-santos',
    },
    {
      name: 'Dr. Sarah Chen',';,
      role: 'Chief Technology Officer',';,
      bio: 'AI research expert with PhD in Machine Learning from MIT',';,
      image: '/images/team/sarah-chen.jpg',';,
      linkedin: 'https://linkedin.com/in/sarah-chen-ai',
    },
    {
      name: 'Michael Rodriguez',';,
      role: 'Head of Engineering',';,
      bio: 'Full-stack architect with expertise in scalable cloud systems',';,
      image: '/images/team/michael-rodriguez.jpg',';,
      linkedin: 'https://linkedin.com/in/michael-rodriguez-eng',
    },
    {
      name: 'Dr. Emily Watson',';,
      role: 'AI Research Director',';,
      bio: 'Quantum computing specialist and AI ethics researcher',';,
      image: '/images/team/emily-watson.jpg',';,
      linkedin: 'https://linkedin.com/in/emily-watson-ai',
    },
    {
      name: 'James Park',';,
      role: 'Head of Product',';,
      bio: 'Product strategy expert with focus on user experience and innovation',';,
      image: '/images/team/james-park.jpg',';,
      linkedin: 'https://linkedin.com/in/james-park-product',
    },
    {
      name: 'Lisa Thompson',';,
      role: 'Head of Customer Success',';,
      bio: 'Customer success leader with 10+ years in enterprise software',';,
      image: '/images/team/lisa-thompson.jpg',';,
      linkedin: 'https://linkedin.com/in/lisa-thompson-cs',
    }
  ];

  const values = [
    {
      title: 'Innovation First',';,
      description: 'We push the boundaries of what\'s possible with AI and technology',';,
      icon: '🚀',
    },
    {
      title: 'Customer Success',';,
      description: 'Our clients\' success is our ultimate measure of achievement',';,
      icon: '🎯',
    },
    {
      title: 'Ethical AI',';,
      description: 'We build AI systems that are fair, transparent, and beneficial',';,
      icon: '⚖️',
    },
    {
      title: 'Collaboration',';,
      description: 'Great results come from great teams working together',';,
      icon: '🤝',
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet the talented team of AI experts, engineers, and innovators behind Zion Tech Group's cutting-edge solutions." />";
        <link rel="canonical" href="https: //ziontechgroup.com/team" />";,
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">";
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">";
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";,
            <div className="text-center">";
              <h1 className="text-4xl md: text-5xl font-bold mb-4">";,
                Meet Our Team
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">";
                The brilliant minds behind Zion Tech Group's innovative AI and IT solutions. ';
                We're passionate about transforming businesses through technology.';
              </p>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16">";,
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">";,
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover: shadow-xl transition-all duration-300",
              >
                <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">";
                  <div className="text-6xl text-white">👤</div>";
                </div>
                <div className="p-6">";
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">";
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">";
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">";
                    {member.bio}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover: text-blue-700 transition-colors",
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">";
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />";
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Values */}
        <div className="bg-white py-16">";
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";,
            <div className="text-center mb-12">";
              <h2 className="text-3xl font-bold text-gray-900 mb-4">";
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">";
                The principles that guide everything we do at Zion Tech Group
              </p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">";,
              {values.map((value, index) => (
                <div key={index} className="text-center">";
                  <div className="text-4xl mb-4">{value.icon}</div>";
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">";
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">";
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Join Our Team */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">";
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">";,
            <h2 className="text-3xl font-bold mb-4">";
              Join Our Team
            </h2>
            <p className="text-xl text-purple-100 mb-8">";
              We're always looking for talented individuals who share our passion for AI and innovation.';
            </p>
            <a
              href="/careers"
              className="inline-flex items-center px-8 py-3 bg-white text-purple-600 rounded-lg hover: bg-gray-100 transition-colors font-medium",
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