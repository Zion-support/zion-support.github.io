export const _metadata = {_title: 'Careers - Zion Tech Group', _description: 'Join our team of AI innovators and help shape the future of autonomous business operations and digital economies.', _keywords: 'careers, _jobs, _Zion Tech Group, _AI jobs, _technology careers, _quantum computing jobs'};

export default function CareersPage() {_const _openPositions = [
    {
      title: 'Senior AI Research Engineer', _department: 'Research & Development', _location: 'Remote / Global', _type: 'Full-time', _description: 'Lead cutting-edge research in AI consciousness, _autonomous systems, _and quantum neural networks.', _requirements: [
        'PhD in Computer Science, _AI, _or related field', _'5+ years experience in AI research', _'Expertise in machine learning and neural networks', _'Experience with quantum computing concepts']},
    {_title: 'Quantum Computing Engineer', _department: 'Quantum Solutions', _location: 'Remote / Global', _type: 'Full-time', _description: 'Develop next-generation quantum algorithms and quantum computing infrastructure.', _requirements: [
        'MS/PhD in Physics, _Computer Science, _or related field', _'3+ years experience in quantum computing', _'Knowledge of quantum algorithms and quantum programming', _'Experience with Qiskit, _Cirq, _or similar frameworks']},
    {_title: 'Full-Stack Developer', _department: 'Engineering', _location: 'Remote / Global', _type: 'Full-time', _description: 'Build scalable web applications and APIs for our AI-powered platforms.', _requirements: [
        '3+ years experience in full-stack development', _'Proficiency in React, _Node.js, _and TypeScript', _'Experience with cloud platforms (AWS, _GCP, _Azure)', _'Knowledge of database design and optimization']},
    {_title: 'Cybersecurity Specialist', _department: 'Security', _location: 'Remote / Global', _type: 'Full-time', _description: 'Implement and maintain advanced security protocols for our AI systems.', _requirements: [
        '5+ years experience in cybersecurity', _'Expertise in threat detection and prevention', _'Knowledge of AI security and adversarial attacks', _'Relevant certifications (CISSP, _CEH, _etc.)']}];

  const _benefits = [
    {_title: 'Remote First', _description: 'Work from anywhere in the world with our distributed team.', _icon: '🌍'},
    {_title: 'Cutting-Edge Technology', _description: 'Work with the latest AI, _quantum computing, _and blockchain technologies.', _icon: '🚀'},
    {_title: 'Flexible Hours', _description: 'Work when you\'re most productive with flexible scheduling.', _icon: '⏰'},
    {_title: 'Learning & Development', _description: 'Continuous learning opportunities and professional development.', _icon: '📚'},
    {_title: 'Competitive Compensation', _description: 'Attractive salary packages with equity options.', _icon: '💰'},
    {_title: 'Health & Wellness', _description: 'Comprehensive health coverage and wellness programs.', _icon: '🏥'}];

  return (_<div className="space-y-16">
      {_/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our Team</h1>
        <p className="text-xl md:text-2xl opacity-80 mb-8 max-w-3xl mx-auto">
          Help us build the future of AI-powered digital economies and autonomous business operations.
        </p>
        <p className="text-lg opacity-70 max-w-2xl mx-auto">
          We're looking for passionate innovators who want to push the boundaries of what's possible 
          in artificial intelligence, _quantum computing, _and blockchain technology.
        </p>
      </section>

      {_/* Open Positions */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
        <div className="space-y-6">
          {_openPositions.map((position, _index) => (_<div key={index} className="p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{_position.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm opacity-70">
                    <span>{_position.department}</span>
                    <span>•</span>
                    <span>{_position.location}</span>
                    <span>•</span>
                    <span className="text-blue-400">{_position.type}</span>
                  </div>
                </div>
                <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
                  Apply Now
                </button>
              </div>
              <p className="opacity-80 mb-4">{_position.description}</p>
              <div>
                <h4 className="font-semibold mb-2">Requirements:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm opacity-70">
                  {_position.requirements.map((req, _reqIndex) => (
                    <li key={reqIndex}>{_req}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {_/* Benefits */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {_benefits.map(_(benefit, _index) => (
            <div key={index} className="text-center p-6">
              <div className="text-4xl mb-4">{_benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{_benefit.title}</h3>
              <p className="opacity-80 text-sm">{_benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {_/* Company Culture */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Culture</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Innovation First</h3>
            <p className="opacity-80 leading-relaxed mb-4">
              We believe in pushing the boundaries of what's possible. Our team is constantly 
              exploring new technologies and approaches to solve complex problems.
            </p>
            <p className="opacity-80 leading-relaxed">
              From AI consciousness research to quantum computing breakthroughs, we're not afraid 
              to tackle the most challenging problems in technology.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Collaboration & Growth</h3>
            <p className="opacity-80 leading-relaxed mb-4">
              We foster a culture of continuous learning and collaboration. Every team member 
              has the opportunity to contribute to our mission and grow their skills.
            </p>
            <p className="opacity-80 leading-relaxed">
              Whether you're a seasoned expert or just starting your career, we provide the 
              support and resources you need to succeed.
            </p>
          </div>
        </div>
      </section>

      {_/* CTA Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
        <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
          Join our team and help us build the future of autonomous business operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
          >
            Contact Us
          </a>
          <a
            href="mailto:careers@ziontechgroup.com"
            className="px-8 py-4 border border-white/20 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
          >
            Send Resume
          </a>
        </div>
      </section>
    </div>
  );
}