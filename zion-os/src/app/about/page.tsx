<<<<<<< HEAD
import Link from 'next/link';

export default function AboutPage() {
  const values = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI and autonomous systems, constantly exploring new frontiers in technology.",
      icon: "🚀"
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards of quality in everything we do, from research to implementation.",
      icon: "⭐"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of partnership and work closely with clients to achieve transformative results.",
      icon: "🤝"
    },
    {
      title: "Sustainability",
      description: "Our solutions are designed to create long-term value and sustainable growth for our clients.",
      icon: "🌱"
    }
  ];

  const achievements = [
    {
      number: "50+",
      label: "AI Systems Deployed",
      description: "Successfully implemented autonomous AI systems across various industries"
    },
    {
      number: "100+",
      label: "Enterprise Clients",
      description: "Trusted by leading companies worldwide for AI solutions"
    },
    {
      number: "99.9%",
      label: "Uptime Reliability",
      description: "Consistent performance and reliability across all our systems"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical support and maintenance services"
    }
  ];

  const team = [
    {
      name: "Dr. Kleber",
      role: "CEO & Chief AI Architect",
      description: "Leading expert in AI consciousness and autonomous systems with over 15 years of experience.",
      expertise: ["AI Consciousness", "Autonomous Systems", "Quantum Computing"]
    },
    {
      name: "AI Research Team",
      role: "Research & Development",
      description: "World-class researchers pushing the boundaries of AI technology and consciousness evolution.",
      expertise: ["AI Research", "Neural Networks", "Cognitive Systems"]
    },
    {
      name: "Engineering Team",
      role: "Software Engineering",
      description: "Expert engineers building scalable, enterprise-grade AI solutions and platforms.",
      expertise: ["Software Architecture", "AI Platforms", "Enterprise Systems"]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering the future of AI-powered enterprise solutions and autonomous systems. 
            We're building the next generation of intelligent business technology.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              To democratize AI technology and enable businesses to operate autonomously, 
              driving innovation and sustainable growth across industries. We believe that 
              every organization should have access to cutting-edge AI solutions that 
              transform their operations and unlock new possibilities.
            </p>
            <p className="text-gray-300">
              Through our advanced autonomous systems, quantum computing capabilities, 
              and enterprise AI platforms, we're building the foundation for the 
              intelligent business ecosystem of tomorrow.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300 mb-6">
              To create a world where businesses operate with unprecedented intelligence 
              and autonomy, where AI systems work seamlessly alongside human teams to 
              solve complex challenges and drive innovation.
            </p>
            <p className="text-gray-300">
              We envision a future where autonomous AI systems handle routine operations, 
              while human creativity and strategic thinking focus on breakthrough innovations 
              and growth opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The principles that guide everything we do and every solution we create.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Achievements</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Milestones that demonstrate our commitment to excellence and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">{achievement.number}</div>
              <div className="text-lg font-semibold text-white mb-2">{achievement.label}</div>
              <p className="text-gray-300 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            World-class experts in AI, autonomous systems, and enterprise technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-blue-400 mb-3">{member.role}</p>
              <p className="text-gray-300 mb-4">{member.description}</p>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white">Areas of Expertise:</h4>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full text-xs text-blue-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Company History */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Journey</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From startup to industry leader in AI-powered enterprise solutions.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-8">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">2019 - Foundation</h3>
                <p className="text-gray-300">
                  Zion Tech Group was founded with a vision to democratize AI technology 
                  and make autonomous systems accessible to businesses of all sizes.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">2021 - First AI Systems</h3>
                <p className="text-gray-300">
                  Successfully deployed our first autonomous AI systems for enterprise clients, 
                  proving the viability of self-operating business technology.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">2023 - Quantum Computing</h3>
                <p className="text-gray-300">
                  Launched our quantum computing division, expanding our capabilities 
                  to include next-generation computing solutions for complex problem solving.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">4</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">2024 - Global Expansion</h3>
                <p className="text-gray-300">
                  Expanded our global presence, serving clients across multiple continents 
                  and industries with our comprehensive AI solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join the AI Revolution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI solutions can transform your business and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Get Started Today
            </Link>
            <Link href="/services" className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:bg-white/10">
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
=======
export default function AboutPage() {;
  return (;

    <div className="min-h-screen bg-white">;
export default /**
 * AboutPage - Function description
 */
function AboutPage() {
  return (
    <div className="min - h-screen bg - white">;
export default function AboutPage() {return (;
export default function AboutPage() {;
  return (;
    <div className="min-h-screen bg-white">;
      {/* Hero Section */}
      <section className="bg - gradient - to - r from - blue - 600 to - indigo - 700 text - white py - 20">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center">;
          <h1 className="text - 4xl md:text - 6xl font - bold mb - 6">;
            About Zion Tech Group;
          </h1>;
          <p className="text - xl md:text - 2xl text - blue - 100 max - w-3xl mx - auto">;
            Pioneering the future of AI - powered technology solutions and autonomous business operations.;
          </p>;
        </div>;
      </section>;
      {/* Company Overview */}
      <section className="py - 20">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 12 items - center">;
            <div>;
              <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 6">;
                Leading the AI Revolution;
              </h2>;
              <p className="text - lg text - gray - 600 mb - 6">;
                Founded with a vision to democratize advanced AI technology, Zion Tech Group has been at the forefront of innovation in artificial intelligence, quantum computing, and autonomous systems.;
              </p>;
              <p className="text - lg text - gray - 600 mb - 6">;
                Our mission is to empower businesses of all sizes with cutting - edge technology solutions that drive growth, efficiency, and competitive advantage in an increasingly digital world.;
              </p>;
              <p className="text - lg text - gray - 600">;
                With a team of world - class engineers, researchers, and business strategists, we're building the future of intelligent automation and decision - making systems.;
              </p>;
            </div>;
            <div className="bg - gray - 100 p - 8 rounded - xl">;
              <div className="space - y-6">;
                <div className="flex items - center space - x-4">;
                  <div className="w - 12 h - 12 bg - blue - 100 rounded - lg flex items - center justify - center">;
                    <svg className="w - 6 h - 6 text - blue - 600" fill="none" stroke="current_color" view_box="0 0 24 24">;
                      <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M13 10V3L4 14h7v7l9 - 11h - 7z" />;
                    </svg>;
                  </div>;
                  <div>;
                    <h3 className="font - semibold text - gray - 900">Innovation First</h3>;
                    <p className="text - gray - 600">Pioneering breakthrough technologies</p>;
                  </div>;
                </div>;
                <div className="flex items - center space - x-4">;
                  <div className="w - 12 h - 12 bg - green - 100 rounded - lg flex items - center justify - center">;
                    <svg className="w - 6 h - 6 text - green - 600" fill="none" stroke="current_color" view_box="0 0 24 24">;
                      <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M9 12l2 2 4 - 4m5.618 - 4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01 - 8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176 - 1.332 9 - 6.03 9 - 11.622 0 - 1.042-.133 - 2.052-.382 - 3.016z" />;
                    </svg>;
                  </div>;
                  <div>;
                    <h3 className="font - semibold text - gray - 900">Security Focused</h3>;
                    <p className="text - gray - 600">Enterprise - grade security standards</p>;
                  </div>;
                </div>;
                <div className="flex items - center space - x-4">;
                  <div className="w - 12 h - 12 bg - purple - 100 rounded - lg flex items - center justify - center">;
                    <svg className="w - 6 h - 6 text - purple - 600" fill="none" stroke="current_color" view_box="0 0 24 24">;
                      <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M17 20h5v - 2a3 3 0 00 - 5.356 - 1.857M17 20H7m10 0v - 2c0-.656-.126 - 1.283-.356 - 1.857M7 20H2v - 2a3 3 0 015.356 - 1.857M7 20v - 2c0-.656.126 - 1.283.356 - 1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11 - 6 0 3 3 0 016 0zm6 3a2 2 0 11 - 4 0 2 2 0 014 0zM7 10a2 2 0 11 - 4 0 2 2 0 014 0z" />;
                    </svg>;
                  </div>;
                  <div>;
                    <h3 className="font - semibold text - gray - 900">Customer Success</h3>;
                    <p className="text - gray - 600">Dedicated support and success teams</p>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Mission & Values */}
      <section className="py - 20 bg - gray - 50">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <div className="text - center mb - 16">;
            <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 4">;
              Our Mission & Values;
            </h2>;
            <p className="text - xl text - gray - 600 max - w-2xl mx - auto">;
              Driving innovation while maintaining the highest standards of ethics and responsibility;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8">;
            <div className="text - center">;
              <div className="w - 16 h - 16 bg - blue - 100 rounded - full flex items - center justify - center mx - auto mb - 6">;
                <svg className="w - 8 h - 8 text - blue - 600" fill="none" stroke="current_color" view_box="0 0 24 24">;
                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h - 1M4 12H3m3.343 - 5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11 - 4 0v-.531c0-.895-.356 - 1.754-.988 - 2.386l-.548-.547z" />;
                </svg>;
              </div>;
              <h3 className="text - xl font - semibold text - gray - 900 mb - 4">Innovation</h3>;
              <p className="text - gray - 600">;
                Continuously pushing the boundaries of what's possible with AI and emerging technologies.;
              </p>;
            </div>;
            <div className="text - center">;
              <div className="w - 16 h - 16 bg - green - 100 rounded - full flex items - center justify - center mx - auto mb - 6">;
                <svg className="w - 8 h - 8 text - green - 600" fill="none" stroke="current_color" view_box="0 0 24 24">;
                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682 - 7.682a4.5 4.5 0 00 - 6.364 - 6.364L12 7.636l - 1.318 - 1.318a4.5 4.5 0 00 - 6.364 0z" />;
                </svg>;
              </div>;
              <h3 className="text - xl font - semibold text - gray - 900 mb - 4">Integrity</h3>;
              <p className="text - gray - 600">;
                Building trust through transparent, ethical, and responsible technology development.;
              </p>;
            </div>;
            <div className="text - center">;
              <div className="w - 16 h - 16 bg - purple - 100 rounded - full flex items - center justify - center mx - auto mb - 6">;
                <svg className="w - 8 h - 8 text - purple - 600" fill="none" stroke="current_color" view_box="0 0 24 24">;
                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M17 20h5v - 2a3 3 0 00 - 5.356 - 1.857M17 20H7m10 0v - 2c0-.656-.126 - 1.283-.356 - 1.857M7 20H2v - 2a3 3 0 015.356 - 1.857M7 20v - 2c0-.656.126 - 1.283.356 - 1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11 - 6 0 3 3 0 016 0zm6 3a2 2 0 11 - 4 0 2 2 0 014 0zM7 10a2 2 0 11 - 4 0 2 2 0 014 0z" />;
                </svg>;
              </div>;
              <h3 className="text - xl font - semibold text - gray - 900 mb - 4">Collaboration</h3>;
              <p className="text - gray - 600">;
                Working together with clients, partners, and communities to create lasting impact.;
              </p>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Company Stats */}
      <section className="py - 20 bg - white">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <div className="text - center mb - 16">;
            <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 4">;
              Zion Tech Group by the Numbers;
            </h2>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 4 gap - 8 text - center">;
            <div>;
              <div className="text - 4xl font - bold text - blue - 600 mb - 2">2018</div>;
              <div className="text - gray - 600">Founded</div>;
            </div>;
            <div>;
              <div className="text - 4xl font - bold text - blue - 600 mb - 2">100+</div>;
              <div className="text - gray - 600">Team Members</div>;
            </div>;
            <div>;
              <div className="text - 4xl font - bold text - blue - 600 mb - 2">25+</div>;
              <div className="text - gray - 600">Countries Served</div>;
            </div>;
            <div>;
              <div className="text - 4xl font - bold text - blue - 600 mb - 2">$50M+</div>;
              <div className="text - gray - 600">Revenue Generated</div>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Leadership Team */}
      <section className="py - 20 bg - gray - 50">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <div className="text - center mb - 16">;
            <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 4">;
              Leadership Team;
            </h2>;
            <p className="text - xl text - gray - 600 max - w-2xl mx - auto">;
              Experienced leaders driving innovation and growth across all aspects of our business;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
            <div className="bg - white p - 8 rounded - xl shadow - sm">;
              <div className="w - 24 h - 24 bg - gray - 200 rounded - full mx - auto mb - 6"></div>;
              <h3 className="text - xl font - semibold text - gray - 900 text - center mb - 2">Dr. Sarah Chen</h3>;
              <p className="text - blue - 600 text - center mb - 4">Chief Executive Officer</p>;
              <p className="text - gray - 600 text - center">;
                Former AI Research Director at Google, PhD in Computer Science from Stanford;
              </p>;
            </div>;
            <div className="bg - white p - 8 rounded - xl shadow - sm">;
              <div className="w - 24 h - 24 bg - gray - 200 rounded - full mx - auto mb - 6"></div>;
              <h3 className="text - xl font - semibold text - gray - 900 text - center mb - 2">Michael Rodriguez</h3>;
              <p className="text - blue - 600 text - center mb - 4">Chief Technology Officer</p>;
              <p className="text - gray - 600 text - center">;
                Quantum computing expert with 15+ years in advanced technology development;
              </p>;
            </div>;
            <div className="bg - white p - 8 rounded - xl shadow - sm">;
              <div className="w - 24 h - 24 bg - gray - 200 rounded - full mx - auto mb - 6"></div>;
              <h3 className="text - xl font - semibold text - gray - 900 text - center mb - 2">Dr. James Kim</h3>;
              <p className="text - blue - 600 text - center mb - 4">Chief Research Officer</p>;
              <p className="text - gray - 600 text - center">;
                Leading researcher in autonomous systems and AI consciousness evolution;
              </p>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py - 20 bg - blue - 600 text - white">;
        <div className="max - w-7xl mx - auto px - 4 sm: px - 6 lg:px - 8 text - center">;
          <h2 className="text - 3xl md:text - 4xl font - bold mb - 6">;
            Join Us in Shaping the Future;
          </h2>;
          <p className="text - xl text - blue - 100 mb - 8 max - w-2xl mx - auto">;
            Ready to partner with a company that's redefining what's possible with AI and technology?;
          </p>;
          <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
            <a href="/contact" className="bg - white text - blue - 600 px - 8 py - 3 rounded - lg text - lg font - semibold hover:bg - gray - 100 transition - colors">;
              Get in Touch;
            </a>;
            <a href="/careers" className="border - 2 border - white text - white px - 8 py - 3 rounded - lg text - lg font - semibold hover:bg - white hover:text - blue - 600 transition - colors">;
              View Careers;
            </a>;
          </div>;
        </div>;
      </section>;
    </div>);
>>>>>>> main
}