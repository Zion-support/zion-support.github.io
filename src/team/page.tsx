import { Mail, Link } from 'lucide-react';
import React from 'react';
import { Users, Brain, Code, Shield, BarChart, Zap, Award, Globe, Mail, Linkedin, Github, Twitter, CheckCircle, Star, Clock, Target, DollarSign } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4"></section>"
        <div className="max-w-7xl mx-auto text-center"></div>"
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>"
            Meet Our <span className="text-cyan-400">Team</span>"
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>"
            The brilliant minds behind our innovative AI and IT solutions. We're passionate about technology and dedicated to your success.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white"></section>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>"
            {stats.map((stat, index) => (
              <div key={index} className="text-center"></div>"
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>"
                  <stat.icon className="w-8 h-8 text-white" />"
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>"
                <div className="text-gray-600 font-medium">{stat.label}</div>"
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gray-50"></section>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>"
          <div className="text-center mb-16"></div>"
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>"
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600"></p>"
              Experienced professionals leading the future of AI and IT solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>"
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"></div>"
                <div className="h-64 bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center"></div>"
                  <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center"></div>"
                    <Users className="w-16 h-16 text-gray-600" />"
                  </div>
                </div>
                <div className="p-6"></div>"
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>"
                  <p className="text-cyan-600 font-semibold mb-3">{member.role}</p>"
                  <p className="text-gray-600 mb-4">{member.bio}</p>"
                  
                  <div className="mb-4"></div>"
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Expertise</h4>"
                    <div className="flex flex-wrap gap-2"></div>"
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded-full"></span>"
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3"></div>"
                    <a,
href={member.linkedin}
                      target="_blank""
                      rel="noopener noreferrer""
                      className="text-gray-400 hover:text-cyan-600 transition-colors""
                    ></a>
                      <Linkedin className="w-5 h-5" />"
                    </a>
                    <a,
href={`mailto:${member.email}`}
                      className="text-gray-400 hover:text-cyan-600 transition-colors""
                    ></a>
                      <Mail className="w-5 h-5" />"
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white"></section>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>"
          <div className="text-center mb-16"></div>"
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>"
              Our Values
            </h2>
            <p className="text-xl text-gray-600"></p>"
              The principles that guide our team and our work
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>"
            {values.map((value, index) => (
              <div key={index} className="text-center"></div>"
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>"
                  <value.icon className="w-8 h-8 text-white" />"
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>"
                <p className="text-gray-600">{value.description}</p>"
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600"></section>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>"
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>"
            Join Our Team
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto"></p>"
            We're always looking for talented individuals who share our passion for innovation and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"
            <Link,
to="/careers""
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300""
            ></Link>
              View Open Positions
            </Link>
            <Link,
to="/contact""
              className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-cyan-600 transition-all duration-300""
            ></Link>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamPage;