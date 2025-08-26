import React, { useState } from 'react';
import { SEO } from "@/components/SEO";
import { Link } from 'react-router-dom';
import { Search, Filter, MapPin, Briefcase, Star, Users, Zap, Building } from 'lucide-react';

export default function TalentDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const categories = [
    'All Categories',
    'AI & Machine Learning',
    'Software Development',
    'Cybersecurity',
    'Data Science',
    'Cloud & DevOps',
    'UI/UX Design',
    'Project Management',
    'Business Analysis'
  ];

  const locations = [
    'All Locations',
    'Remote',
    'United States',
    'Europe',
    'Asia',
    'Canada',
    'Australia'
  ];

  const featuredTalents = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      title: 'Senior AI Engineer',
      category: 'AI & Machine Learning',
      location: 'Remote',
      experience: '8+ years',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'],
      rating: 4.9,
      reviews: 47,
      avatar: 'SC',
      hourlyRate: '$120-150',
      availability: 'Available',
      description: 'Expert in developing and deploying machine learning models for enterprise applications.'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      title: 'Cybersecurity Specialist',
      category: 'Cybersecurity',
      location: 'United States',
      experience: '10+ years',
      skills: ['Penetration Testing', 'SOC2', 'ISO27001', 'Incident Response', 'Threat Hunting'],
      rating: 4.8,
      reviews: 32,
      avatar: 'MR',
      hourlyRate: '$100-130',
      availability: 'Available',
      description: 'Certified security professional with expertise in enterprise security and compliance.'
    },
    {
      id: 3,
      name: 'Dr. James Kim',
      title: 'Cloud Architect',
      category: 'Cloud & DevOps',
      location: 'Remote',
      experience: '12+ years',
      skills: ['AWS', 'Azure', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD'],
      rating: 4.9,
      reviews: 56,
      avatar: 'JK',
      hourlyRate: '$130-160',
      availability: 'Available',
      description: 'Senior cloud architect specializing in scalable infrastructure and DevOps automation.'
    },
    {
      id: 4,
      name: 'Emily Watson',
      title: 'Data Scientist',
      category: 'Data Science',
      location: 'Europe',
      experience: '6+ years',
      skills: ['Python', 'R', 'SQL', 'Tableau', 'Machine Learning', 'Statistics'],
      rating: 4.7,
      reviews: 28,
      avatar: 'EW',
      hourlyRate: '$90-120',
      availability: 'Available',
      description: 'Data scientist with expertise in predictive analytics and business intelligence.'
    },
    {
      id: 5,
      name: 'Alex Thompson',
      title: 'Full Stack Developer',
      category: 'Software Development',
      location: 'Remote',
      experience: '7+ years',
      skills: ['React', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'TypeScript'],
      rating: 4.8,
      reviews: 41,
      avatar: 'AT',
      hourlyRate: '$80-110',
      availability: 'Available',
      description: 'Versatile developer with experience in modern web technologies and cloud platforms.'
    },
    {
      id: 6,
      name: 'Lisa Park',
      title: 'UX/UI Designer',
      category: 'UI/UX Design',
      location: 'United States',
      experience: '5+ years',
      skills: ['Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping', 'Design Systems'],
      rating: 4.6,
      reviews: 23,
      avatar: 'LP',
      hourlyRate: '$70-100',
      availability: 'Available',
      description: 'Creative designer focused on user-centered design and digital product experiences.'
    }
  ];

  const filteredTalents = featuredTalents.filter(talent => {
    const matchesSearch = talent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         talent.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         talent.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || talent.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || talent.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Talent Directory - Zion Tech Group Expert Professionals" 
        description="Discover top technology professionals in AI, cybersecurity, cloud computing, and more. Hire skilled experts for your projects."
        keywords="talent directory, hire developers, AI engineers, cybersecurity experts, cloud architects, remote work"
        canonical="https://ziontechgroup.com/talent"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Talent Directory
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Connect with world-class technology professionals. From AI engineers to cybersecurity experts, 
            find the perfect talent for your next project.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for skills, expertise, or professionals..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category === 'All Categories' ? 'all' : category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-gray-500" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {locations.map((location, index) => (
                    <option key={index} value={location === 'All Locations' ? 'all' : location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Expert Professionals</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Technology Skills</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Talent Listings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Professionals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover top-tier talent across various technology domains. 
              All professionals are vetted and ready to contribute to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredTalents.map((talent) => (
              <div key={talent.id} className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                {/* Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{talent.avatar}</span>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-900">{talent.rating}</span>
                        <span className="text-sm text-gray-500">({talent.reviews})</span>
                      </div>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        talent.availability === 'Available' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {talent.availability}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{talent.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{talent.title}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {talent.experience}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {talent.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3">{talent.description}</p>
                  
                  <div className="text-lg font-bold text-gray-900 mb-3">
                    {talent.hourlyRate}/hr
                  </div>
                </div>

                {/* Skills */}
                <div className="p-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {talent.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex space-x-3">
                    <Link
                      to={`/talent/${talent.id}`}
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors"
                    >
                      View Profile
                    </Link>
                    <Link
                      to="/contact"
                      className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg text-center font-medium hover:bg-blue-50 transition-colors"
                    >
                      Hire Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTalents.length === 0 && (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or browse all categories.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Specialized Talent?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Can't find the right professional? Our team can help you find the perfect match 
            or connect you with custom talent solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Custom Quote
            </Link>
            <Link 
              to="/talent" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Browse All Talent
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}