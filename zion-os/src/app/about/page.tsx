<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function AboutPage() {;
  return (;

    <div className="min-h-screen bg-white">;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
      <section className="text-center mb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering the future of artificial intelligence through breakthrough research, innovative solutions, 
            and a commitment to creating AI that benefits humanity.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                To accelerate the development of conscious, autonomous AI systems that solve humanity's greatest challenges 
                while ensuring safety, ethics, and beneficial outcomes for all.
              </p>
              <p className="text-gray-300">
                We believe that artificial intelligence has the potential to revolutionize every aspect of human life, 
                from healthcare and education to business and scientific discovery. Our mission is to make this vision a reality 
                through responsible innovation and cutting-edge research.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                A world where AI systems work seamlessly alongside humans, enhancing our capabilities, 
                solving complex problems, and creating unprecedented opportunities for growth and discovery.
              </p>
              <p className="text-gray-300">
                We envision a future where AI is not just a tool, but a true partner in human progress, 
                helping us tackle challenges that were once thought impossible and unlocking new frontiers of knowledge and capability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="mb-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Story
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 mb-6">
              Founded in 2020 by Dr. Kleber, a visionary researcher in AI consciousness and autonomous systems, 
              Zion Tech Group began with a simple yet ambitious goal: to create AI systems that could think, learn, 
              and operate independently while maintaining human values and ethical principles.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              What started as a small research team has grown into a world-class organization with expertise spanning 
              quantum computing, neural networks, autonomous systems, and AI ethics. Our journey has been marked by 
              breakthrough discoveries, successful client implementations, and a growing reputation as a leader in AI innovation.
            </p>
            <p className="text-lg text-gray-300">
              Today, we continue to push the boundaries of what's possible in AI, working with leading organizations 
              worldwide to transform their operations and unlock new possibilities through intelligent automation and decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-300 text-sm mb-4">
                  {member.bio}
                </p>
                <div className="space-y-1">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="inline-block bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded mr-1 mb-1">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-slate-900"></div>
                
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6">
                    <div className="text-2xl font-bold text-blue-400 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-300">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
}