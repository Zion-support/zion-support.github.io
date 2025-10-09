
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TeamPage: React.FC = () => {
      return (
    <div>
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">Meet Our Team</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our diverse team of AI experts, engineers, and innovators is dedicated to transforming businesses through cutting-edge technology.
          </p>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-16">
          <div>
            {stats.map((stat, index) => (
              <div>
                <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Grid */}
        <section className="container mx-auto px-4 py-16">
          <div>
            {teamMembers.map((member, index) => (
              <div>
                <div>
                  <span className="text-4xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <div className="text-cyan-400 font-semibold mb-4">{member.role}</div>
                <p className="text-gray-300 mb-6">{member.bio}</p>
                
                <div>
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Culture Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Our Culture & Values</h2>
          <div>
            <div>
              <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Innovation First</h3>
              <p className="text-gray-300">We constantly push the boundaries of what's possible with AI and technology.</p>
            </div>
            <div>
              <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Collaboration</h3>
              <p className="text-gray-300">We believe in the power of diverse teams working together to solve complex problems.</p>
            </div>
            <div>
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Ethical AI</h3>
              <p className="text-gray-300">We develop AI solutions that are fair, transparent, and beneficial to society.</p>
            </div>
            <div>
              <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
              <p className="text-gray-300">We strive for the highest quality in everything we do, from code to customer service.</p>
            </div>
            <div>
              <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Continuous Learning</h3>
              <p className="text-gray-300">We invest in our team's growth and stay ahead of the latest technological advances.</p>
            </div>
            <div>
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Client Success</h3>
              <p className="text-gray-300">Our success is measured by the success of our clients and their business outcomes.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Team</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for AI and innovation. Explore our open positions.
            </p>
            <div>
              <Link
                to="/careers"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
              >View Open Positions</Link>
              <Link
                to="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >Contact Us</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>);
}
export default TeamPage