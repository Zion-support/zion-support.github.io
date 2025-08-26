import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Star, MapPin, Briefcase, Filter } from 'lucide-react';

const TalentsPage = () => {
  // Mock data for talents
  const talents = [
    {
      id: 1,
      name: 'Sarah Chen',
      title: 'Senior AI Engineer',
      rating: 4.9,
      location: 'San Francisco, CA',
      skills: ['Machine Learning', 'Python', 'TensorFlow', 'Computer Vision'],
      hourlyRate: 85,
      avatar: 'https://placehold.co/64x64?text=SC'
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      title: 'Cybersecurity Specialist',
      rating: 4.8,
      location: 'Austin, TX',
      skills: ['Network Security', 'Penetration Testing', 'Compliance', 'Incident Response'],
      hourlyRate: 95,
      avatar: 'https://placehold.co/64x64?text=MR'
    },
    {
      id: 3,
      name: 'Priya Patel',
      title: 'Cloud Architect',
      rating: 4.9,
      location: 'Seattle, WA',
      skills: ['AWS', 'Kubernetes', 'DevOps', 'Microservices'],
      hourlyRate: 90,
      avatar: 'https://placehold.co/64x64?text=PP'
    },
    {
      id: 4,
      name: 'David Kim',
      title: 'Data Scientist',
      rating: 4.7,
      location: 'New York, NY',
      skills: ['Data Analysis', 'SQL', 'R', 'Statistical Modeling'],
      hourlyRate: 80,
      avatar: 'https://placehold.co/64x64?text=DK'
    },
    {
      id: 5,
      name: 'Emily Watson',
      title: 'Full Stack Developer',
      rating: 4.8,
      location: 'Boston, MA',
      skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
      hourlyRate: 75,
      avatar: 'https://placehold.co/64x64?text=EW'
    },
    {
      id: 6,
      name: 'Alex Thompson',
      title: 'DevOps Engineer',
      rating: 4.9,
      location: 'Denver, CO',
      skills: ['Docker', 'Jenkins', 'Terraform', 'Monitoring'],
      hourlyRate: 85,
      avatar: 'https://placehold.co/64x64?text=AT'
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Find Top Tech Talent</h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Connect with skilled professionals in AI, cybersecurity, cloud computing, and more.
            Build your dream team with verified experts.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search for skills, titles, or names..."
                className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-purple/50 focus:border-zion-purple/50"
              />
            </div>
            <div className="flex gap-3">
              <select className="px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-purple/50 focus:border-zion-purple/50">
                <option value="">All Skills</option>
                <option value="ai">AI & Machine Learning</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="cloud">Cloud & DevOps</option>
                <option value="data">Data Science</option>
                <option value="web">Web Development</option>
              </select>
              <select className="px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-purple/50 focus:border-zion-purple/50">
                <option value="">All Locations</option>
                <option value="remote">Remote</option>
                <option value="onsite">On-site</option>
                <option value="hybrid">Hybrid</option>
              </select>
              <button className="px-6 py-3 bg-zion-purple text-white rounded-lg hover:bg-zion-purple/80 transition-colors flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Talent Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {talents.map((talent) => (
            <div key={talent.id} className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 hover:border-zion-purple/50 transition-colors">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-zion-purple/20 rounded-full flex items-center justify-center text-zion-cyan font-semibold">
                    {talent.avatar ? (
                      <img src={talent.avatar} alt={talent.name} className="w-12 h-12 rounded-full" />
                    ) : (
                      talent.name.split(' ').map(n => n[0]).join('')
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{talent.name}</h3>
                    <p className="text-zion-slate-light">{talent.title}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-white text-sm">{talent.rating}</span>
                </div>
              </div>

              {/* Location and Rate */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-zion-slate-light">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{talent.location}</span>
                </div>
                <div className="text-zion-cyan font-semibold">
                  ${talent.hourlyRate}/hr
                </div>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-zion-slate-light" />
                  <span className="text-sm text-zion-slate-light">Skills</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {talent.skills.slice(0, 3).map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                  {talent.skills.length > 3 && (
                    <span className="px-2 py-1 bg-zion-slate-dark text-zion-slate-light text-xs rounded-md">
                      +{talent.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Link
                  to={`/talent/${talent.id}`}
                  className="flex-1 px-4 py-2 bg-zion-purple text-white text-center rounded-lg hover:bg-zion-purple/80 transition-colors"
                >
                  View Profile
                </Link>
                <button className="px-4 py-2 border border-zion-purple text-zion-purple rounded-lg hover:bg-zion-purple hover:text-white transition-colors">
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-zion-purple text-zion-purple rounded-lg hover:bg-zion-purple hover:text-white transition-colors">
            Load More Talent
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-zion-cyan" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">500+</h3>
            <p className="text-zion-slate-light">Verified Professionals</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-zion-cyan" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">4.8</h3>
            <p className="text-zion-slate-light">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-zion-cyan" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">200+</h3>
            <p className="text-zion-slate-light">Projects Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentsPage;