import React from 'react';
// import Footer from '../components/Footer';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in technology and business strategy.',
      image: '👨‍💼'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Expert in AI and machine learning with a passion for innovation.',
      image: '👩‍💻'
    },
    {
      name: 'Mike Chen',
      role: 'Lead Developer',
      bio: 'Full-stack developer specializing in scalable cloud solutions.',
      image: '👨‍🔧'
    },
    {
      name: 'Emily Davis',
      role: 'Head of Design',
      bio: 'Creative director focused on user experience and interface design.',
      image: '👩‍🎨'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the talented individuals who make Zion Tech Group a leader in technology innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Team;