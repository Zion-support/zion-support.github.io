import React from 'react';
import { Link } from 'react-router-dom';
import { ;
  Users,
  Search,
  Filter,
  MapPin,
  Clock,
  Star,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Code,
  Database,
  Shield,
  Cloud,
  Brain,
  Zap;
} from 'lucide-react';
export function TalentPage() {;
  const talentCategories = [;
    {;
      title: 'AI & Machine Learning',
      icon: Brain,
      count: 45,
      skills: ['TensorFlow', 'PyTorch', 'Computer Vision', 'NLP', 'Deep Learning'];
},
    {;
      title: 'Cloud & DevOps',
      icon: Cloud,
      count: 32,
      skills: ['AWS', 'Azure', 'Kubernetes', 'Docker', 'Terraform'];
},
    {;
      title: 'Cybersecurity',
      icon: Shield,
      count: 28,
      skills: ['Penetration Testing', 'SOC', 'Compliance', 'Risk Assessment', 'Incident Response'];
},
    {;
      title: 'Full Stack Development',
      icon: Code,
      count: 67,
      skills: ['React', 'Node.js', 'Python', 'TypeScript', 'PostgreSQL'];
},
    {;
      title: 'Data Science',
      icon: Database,
      count: 23,
      skills: ['Python', 'R', 'SQL', 'Tableau', 'Machine Learning'];
},
    {;
      title: 'Blockchain',
      icon: Zap,
      count: 15,
      skills: ['Solidity', 'Web3', 'DeFi', 'Smart Contracts', 'Ethereum'];
}
  ];
  const featuredProfessionals = [;
    {;
      name: 'Sarah Chen',
      title: 'Senior AI Engineer',
      location: 'San Francisco, CA',
      rating: 4.9,
      projects: 47,
      skills: ['Machine Learning', 'Python', 'TensorFlow', 'Computer Vision'],
      availability: 'Available',
      hourlyRate: '$120-150',
      avatar: '👩‍💻';
},
    {;
      name: 'Marcus Rodriguez',
      title: 'Cloud Solutions Architect',
      location: 'Austin, TX',
      rating: 4.8,
      projects: 32,
      skills: ['AWS', 'Kubernetes', 'Terraform', 'DevOps'],
      availability: 'Available',
      hourlyRate: '$100-130',
      avatar: '👨‍💻';
},
    {;
      name: 'Dr. Emily Watson',
      title: 'Cybersecurity Expert',
      location: 'New York, NY',
      rating: 5.0,
      projects: 28,
      skills: ['Penetration Testing', 'SOC', 'Compliance', 'Risk Assessment'],
      availability: 'Available',
      hourlyRate: '$150-200',
      avatar: '👩‍🔬';
},
    {;
      name: 'Alex Kim',
      title: 'Full Stack Developer',
      location: 'Seattle, WA',
      rating: 4.9,
      projects: 56,
      skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
      availability: 'Available',
      hourlyRate: '$80-120',
      avatar: '👨‍💻';
}
  ];
  return (;
    <div className="min-h-screen bg-zion-slate-dark">;
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-darker py-20">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center max-w-4xl mx-auto">;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              Find Top Tech Talent;
            </h1>;
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">;
              Connect with vetted professionals, AI experts, and technology specialists ;
              ready to accelerate your projects and drive innovation.;
            </p>;
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">;
              <div className="relative">;
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />;
                <input;
                  type="text";
                  placeholder="Search by skills, location, or expertise...";
                  className="w-full pl-12 pr-4 py-4 bg-zion-slate-darker border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent";
                />;
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-zion-cyan text-white px-6 py-2 rounded-lg hover:bg-zion-cyan-light transition-colors">;
                  Search;
                </button>;
              </div>;
            </div>;

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">;
              <div className="text-center">;
                <div className="text-3xl font-bold text-zion-cyan">500+</div>;
                <div className="text-sm text-zion-slate-light">Active Professionals</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl font-bold text-zion-cyan">98%</div>;
                <div className="text-sm text-zion-slate-light">Success Rate</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl font-bold text-zion-cyan">24h</div>;
                <div className="text-sm text-zion-slate-light">Average Response</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl font-bold text-zion-cyan">4.9★</div>;
                <div className="text-sm text-zion-slate-light">Average Rating</div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Talent Categories */}
      <section className="py-16 bg-zion-slate-darker">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Browse by Expertise;
            </h2>;
            <p className="text-zion-slate-light max-w-2xl mx-auto">;
              Find professionals across all major technology domains and specializations;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {talentCategories.map((category, index) => (;
              <div key={index} className="bg-zion-slate-dark border border-zion-purple/20 rounded-lg p-6 hover:border-zion-cyan/50 transition-all duration-300 group">;
                <div className="flex items-center justify-between mb-4">;
                  <div className="flex items-center space-x-3">;
                    <category.icon className="w-8 h-8 text-zion-cyan" />;
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>;
                  </div>;
                  <span className="text-sm text-zion-slate-light bg-zion-purple/20 px-2 py-1 rounded">;
                    {category.count} available;
                  </span>;
                </div>;
                <div className="flex flex-wrap gap-2 mb-4">;
                  {category.skills.map((skill, skillIndex) => (;
                    <span key={skillIndex} className="text-xs bg-zion-blue-dark text-zion-cyan px-2 py-1 rounded">;
                      {skill}
                    </span>;
                  ))}
                </div>;
                <Link;
                  to={`/talent?category=${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors flex items-center group-hover:translate-x-1 transform duration-300">;
                  View Professionals;
                  <ArrowRight className="w-4 h-4 ml-2" />;
                </Link>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Featured Professionals */}
      <section className="py-16 bg-zion-slate-dark">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Featured Professionals;
            </h2>;
            <p className="text-zion-slate-light max-w-2xl mx-auto">;
              Top-rated experts ready to join your next project;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
            {featuredProfessionals.map((professional, index) => (;
              <div key={index} className="bg-zion-slate-darker border border-zion-purple/20 rounded-lg p-6 hover:border-zion-cyan/50 transition-all duration-300">;
                <div className="text-center mb-4">;
                  <div className="text-4xl mb-2">{professional.avatar}</div>;
                  <h3 className="text-lg font-semibold text-white">{professional.name}</h3>;
                  <p className="text-zion-cyan text-sm">{professional.title}</p>;
                  <div className="flex items-center justify-center space-x-1 mt-1">;
                    <MapPin className="w-3 h-3 text-zion-slate-light" />;
                    <span className="text-xs text-zion-slate-light">{professional.location}</span>;
                  </div>;
                </div>;

                <div className="space-y-3 mb-4">;
                  <div className="flex items-center justify-between">;
                    <span className="text-sm text-zion-slate-light">Rating</span>;
                    <div className="flex items-center space-x-1">;
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />;
                      <span className="text-sm text-white">{professional.rating}</span>;
                    </div>;
                  </div>;
                  <div className="flex items-center justify-between">;
                    <span className="text-sm text-zion-slate-light">Projects</span>;
                    <span className="text-sm text-white">{professional.projects}</span>;
                  </div>;
                  <div className="flex items-center justify-between">;
                    <span className="text-sm text-zion-slate-light">Rate</span>;
                    <span className="text-sm text-zion-cyan">{professional.hourlyRate}/hr</span>;
                  </div>;
                  <div className="flex items-center justify-between">;
                    <span className="text-sm text-zion-slate-light">Status</span>;
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">;
                      {professional.availability}
                    </span>;
                  </div>;
                </div>;

                <div className="mb-4">;
                  <div className="flex flex-wrap gap-1">;
                    {professional.skills.map((skill, skillIndex) => (;
                      <span key={skillIndex} className="text-xs bg-zion-blue-dark text-zion-cyan px-2 py-1 rounded">;
                        {skill}
                      </span>;
                    ))}
                  </div>;
                </div>;

                <button className="w-full bg-zion-cyan text-white py-2 rounded-lg hover:bg-zion-cyan-light transition-colors">;
                  View Profile;
                </button>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* How It Works */}
      <section className="py-16 bg-zion-slate-darker">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              How It Works;
            </h2>;
            <p className="text-zion-slate-light max-w-2xl mx-auto">;
              Simple steps to find and hire the perfect talent for your project;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            <div className="text-center">;
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                <Search className="w-8 h-8 text-zion-cyan" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">1. Search & Filter</h3>;
              <p className="text-zion-slate-light">;
                Use our advanced filters to find professionals with the exact skills and experience you need.;
              </p>;
            </div>;

            <div className="text-center">;
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                <Briefcase className="w-8 h-8 text-zion-cyan" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">2. Review & Connect</h3>;
              <p className="text-zion-slate-light">;
                Review profiles, portfolios, and ratings. Connect directly with candidates that match your requirements.;
              </p>;
            </div>;

            <div className="text-center">;
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                <CheckCircle className="w-8 h-8 text-zion-cyan" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">3. Hire & Collaborate</h3>;
              <p className="text-zion-slate-light">;
                Make an offer, set up contracts, and start collaborating with your new team member.;
              </p>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-blue">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
            Ready to Find Your Next Team Member?;
          </h2>;
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">;
            Join thousands of companies that trust Zion Tech Group to connect them with top talent.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <Link;
              to="/request-quote";
              className="bg-white text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-slate-light transition-colors">;
              Post a Job;
            </Link>;
            <Link;
              to="/contact";
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-zion-cyan transition-colors">;
              Contact Us;
            </Link>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
}

export default TalentPage;