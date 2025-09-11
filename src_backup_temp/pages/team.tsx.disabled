import React from 'react';
import { ;
  Users,
  Award,
  Star,
  Linkedin,
  Twitter,
  Mail,
  Building2,
  Lightbulb,
  Rocket,
  Shield,
  Brain,
  Zap;
} from 'lucide-react';
export default function TeamPage() {;
  const leadership = [;
    {;
      name: "Kleber Santos",
      title: "Founder & CEO",
      bio: "Visionary leader with over 15 years of experience in technology innovation and business transformation. Passionate about leveraging AI and emerging technologies to solve complex business challenges.",
      image: "/images/team/kleber-santos.jpg",
      linkedin: "https://linkedin.com/in/klebersantos",
      twitter: "https://twitter.com/klebersantos",
      email: "kleber@ziontechgroup.com",
      expertise: ["AI Strategy", "Business Innovation", "Technology Leadership"];
},
    {;
      name: "Dr. Sarah Chen",
      title: "Chief Technology Officer",
      bio: "Former Google AI researcher with a PhD in Computer Science from Stanford. Expert in machine learning, quantum computing, and scalable AI systems.",
      image: "/images/team/sarah-chen.jpg",
      linkedin: "https://linkedin.com/in/sarahchen",
      twitter: "https://twitter.com/sarahchen",
      email: "sarah@ziontechgroup.com",
      expertise: ["Machine Learning", "Quantum Computing", "AI Architecture"];
},
    {;
      name: "Marcus Rodriguez",
      title: "Chief Operations Officer",
      bio: "Operations expert with 20+ years in scaling technology companies. Previously led operations at Microsoft and Amazon, specializing in process optimization and team scaling.",
      image: "/images/team/marcus-rodriguez.jpg",
      linkedin: "https://linkedin.com/in/marcusrodriguez",
      twitter: "https://twitter.com/marcusrodriguez",
      email: "marcus@ziontechgroup.com",
      expertise: ["Operations", "Process Optimization", "Team Scaling"];
}
  ];
  const advisors = [;
    {;
      name: "Dr. Emily Watson",
      title: "AI Ethics Advisor",
      bio: "Leading expert in AI ethics and responsible AI development. Former advisor to the White House Office of Science and Technology Policy.",
      image: "/images/team/emily-watson.jpg",
      linkedin: "https://linkedin.com/in/emilywatson",
      expertise: ["AI Ethics", "Responsible AI", "Policy"];
},
    {;
      name: "James Kim",
      title: "Cybersecurity Advisor",
      bio: "Retired NSA cybersecurity expert with deep knowledge of threat intelligence and secure system design.",
      image: "/images/team/james-kim.jpg",
      linkedin: "https://linkedin.com/in/jameskim",
      expertise: ["Cybersecurity", "Threat Intelligence", "Secure Systems"];
}
  ];
  return (;
    <div className="min-h-screen bg-zion-slate-dark text-white">;
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">;
        <div className="container mx-auto max-w-7xl">;
          <div className="text-center">;
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6">;
              <Users className="w-4 h-4 mr-2" />;
              Meet Our Team;
            </div>;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              The Minds Behind Zion Tech Group;
            </h1>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">;
              Our diverse team of experts brings together decades of experience in AI, technology, and business innovation to deliver cutting-edge solutions that transform industries.;
            </p>;
          </div>;
        </div>;
      </section>;

      {/* Leadership Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">;
        <div className="container mx-auto max-w-7xl">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Leadership Team;
            </h2>;
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">;
              Meet the visionary leaders who are driving innovation and shaping the future of technology at Zion Tech Group.;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {leadership.map((member, index) => (;
              <div key={index} className="bg-zion-blue-dark p-6 rounded-lg border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300">;
                <div className="text-center mb-6">;
                  <div className="w-32 h-32 bg-zion-cyan/20 rounded-full mx-auto mb-4 flex items-center justify-center">;
                    <Users className="w-16 h-16 text-zion-cyan" />;
                  </div>;
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>;
                  <p className="text-zion-cyan font-semibold mb-3">{member.title}</p>;
                  <p className="text-zion-slate-light text-sm mb-4">{member.bio}</p>;
                  <div className="flex flex-wrap gap-2 mb-4 justify-center">;
                    {member.expertise.map((skill, skillIndex) => (;
                      <span key={skillIndex} className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full">;
                        {skill}
                      </span>;
                    ))}
                  </div>;

                  <div className="flex justify-center space-x-4">;
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" ;
                       className="text-zion-slate-light hover:text-zion-cyan transition-colors">;
                      <Linkedin className="w-5 h-5" />;
                    </a>;
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" ;
                       className="text-zion-slate-light hover:text-zion-cyan transition-colors">;
                      <Twitter className="w-5 h-5" />;
                    </a>;
                    <a href={`mailto:${member.email}`} ;
                       className="text-zion-slate-light hover:text-zion-cyan transition-colors">;
                      <Mail className="w-5 h-5" />;
                    </a>;
                  </div>;
                </div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Advisors Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="container mx-auto max-w-7xl">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Advisory Board;
            </h2>;
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">;
              Our distinguished advisors provide strategic guidance and industry expertise to ensure we stay at the forefront of technology innovation.;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">;
            {advisors.map((advisor, index) => (;
              <div key={index} className="bg-zion-blue-dark p-6 rounded-lg border border-zion-purple/30">;
                <div className="text-center">;
                  <div className="w-24 h-24 bg-zion-purple/20 rounded-full mx-auto mb-4 flex items-center justify-center">;
                    <Award className="w-12 h-12 text-zion-purple" />;
                  </div>;
                  <h3 className="text-xl font-bold text-white mb-2">{advisor.name}</h3>;
                  <p className="text-zion-purple font-semibold mb-3">{advisor.title}</p>;
                  <p className="text-zion-slate-light text-sm mb-4">{advisor.bio}</p>;
                  <div className="flex flex-wrap gap-2 justify-center">;
                    {advisor.expertise.map((skill, skillIndex) => (;
                      <span key={skillIndex} className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">;
                        {skill}
                      </span>;
                    ))}
                  </div>;
                </div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">;
        <div className="container mx-auto max-w-7xl">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Our Core Values;
            </h2>;
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">;
              The principles that guide our team and shape our culture of innovation and excellence.;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            <div className="text-center">;
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full mx-auto mb-4 flex items-center justify-center">;
                <Lightbulb className="w-8 h-8 text-zion-cyan" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>;
              <p className="text-zion-slate-light text-sm">;
                We constantly push boundaries and explore new technologies to solve complex challenges.;
              </p>;
            </div>;

            <div className="text-center">;
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full mx-auto mb-4 flex items-center justify-center">;
                <Shield className="w-8 h-8 text-zion-cyan" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-3">Integrity</h3>;
              <p className="text-zion-slate-light text-sm">;
                We maintain the highest ethical standards in all our business practices and technology solutions.;
              </p>;
            </div>;

            <div className="text-center">;
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full mx-auto mb-4 flex items-center justify-center">;
                <Users className="w-8 h-8 text-zion-cyan" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-3">Collaboration</h3>;
              <p className="text-zion-slate-light text-sm">;
                We believe in the power of diverse perspectives and collaborative problem-solving.;
              </p>;
            </div>;

            <div className="text-center">;
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full mx-auto mb-4 flex items-center justify-center">;
                <Rocket className="w-8 h-8 text-zion-cyan" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>;
              <p className="text-zion-slate-light text-sm">;
                We strive for excellence in everything we do, from code quality to customer experience.;
              </p>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Join Our Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20">;
        <div className="container mx-auto max-w-4xl text-center">;
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
            Join Our Growing Team;
          </h2>;
          <p className="text-lg text-zion-slate-light mb-8">;
            We're always looking for talented individuals who are passionate about technology and innovation. ;
            Explore our current opportunities and become part of our mission to transform the future.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <a href="/careers" className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105">;
              View Open Positions;
            </a>;
            <a href="/contact" className="px-8 py-4 border border-zion-purple text-zion-purple font-semibold rounded-lg hover:bg-zion-purple hover:text-white transition-all duration-300">;
              Contact Us;
            </a>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
}
