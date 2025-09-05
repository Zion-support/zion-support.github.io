export const metadata = {
  title: 'Careers - Zion Tech Group',
  description: 'Join our team of AI innovators and help shape the future of autonomous business operations and digital economies.',
  keywords: 'careers, jobs, Zion Tech Group, AI jobs, technology careers, quantum computing jobs'};

export default function CareersPage() {
  const openPositions = [
    {
      title: 'Senior AI Research Engineer',
      department: 'Research & Development',
      location: 'Remote / Global',
      type: 'Full-time',
      description: 'Lead cutting-edge research in AI consciousness, autonomous systems, and quantum neural networks.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        '5+ years experience in AI research',
        'Expertise in machine learning and neural networks',
        'Experience with quantum computing concepts']},
    {
      title: 'Quantum Computing Engineer',
      department: 'Quantum Solutions',
      location: 'Remote / Global',
      type: 'Full-time',
      description: 'Develop next-generation quantum algorithms and quantum computing infrastructure.',
      requirements: [
        'MS/PhD in Physics, Computer Science, or related field',
        '3+ years experience in quantum computing',
        'Knowledge of quantum algorithms and quantum programming',
        'Experience with Qiskit, Cirq, or similar frameworks']},
    {
      title: 'Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote / Global',
      type: 'Full-time',
      description: 'Build scalable web applications and APIs for our AI-powered platforms.',
      requirements: [
        '3+ years experience in full-stack development',
        'Proficiency in React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Knowledge of database design and optimization']},
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Global',
      type: 'Full-time',
      description: 'Implement and maintain advanced security protocols for our AI systems.',
      requirements: [
        '5+ years experience in cybersecurity',
        'Expertise in threat detection and prevention',
        'Knowledge of AI security and adversarial attacks',
        'Relevant certifications (CISSP, CEH, etc.)']}];

  const benefits = [
    {
      title: 'Remote First',
      description: 'Work from anywhere in the world with our distributed team.',
      icon: '🌍'},
    {
      title: 'Cutting-Edge Technology',
      description: 'Work with the latest AI, quantum computing, and blockchain technologies.',
      icon: '🚀'},
    {
      title: 'Flexible Hours',
      description: 'Work when you\'re most productive with flexible scheduling.',
      icon: '⏰'},
    {
      title: 'Learning & Development',
      description: 'Continuous learning opportunities and professional development.',
      icon: '📚'},
    {
      title: 'Competitive Compensation',
      description: 'Attractive salary packages with equity options.',
      icon: '💰'},
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health coverage and wellness programs.',
      icon: '🏥'}];

  return (
    <div className=&quot;space-y-16&quot;>
      {/* Hero Section */}
      <section className=&quot;text-center py-16&quot;>
        <h1 className=&quot;text-4xl md:text-6xl font-bold mb-6&quot;>Join Our Team</h1>
        <p className=&quot;text-xl md:text-2xl opacity-80 mb-8 max-w-3xl mx-auto&quot;>
          Help us build the future of AI-powered digital economies and autonomous business operations.
        </p>
        <p className=&quot;text-lg opacity-70 max-w-2xl mx-auto&quot;>
          We're looking for passionate innovators who want to push the boundaries of what's possible 
          in artificial intelligence, quantum computing, and blockchain technology.
        </p>
      </section>

      {/* Open Positions */}
      <section className=&quot;py-16&quot;>
        <h2 className=&quot;text-3xl font-bold text-center mb-12&quot;>Open Positions</h2>
        <div className=&quot;space-y-6&quot;>
          {openPositions.map((position, index) => (
            <div key={index} className=&quot;p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200&quot;>
              <div className=&quot;flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4&quot;>
                <div>
                  <h3 className=&quot;text-xl font-semibold mb-2&quot;>{position.title}</h3>
                  <div className=&quot;flex flex-wrap gap-4 text-sm opacity-70&quot;>
                    <span>{position.department}</span>
                    <span>•</span>
                    <span>{position.location}</span>
                    <span>•</span>
                    <span className=&quot;text-blue-400&quot;>{position.type}</span>
                  </div>
                </div>
                <button className=&quot;px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200&quot;>
                  Apply Now
                </button>
              </div>
              <p className=&quot;opacity-80 mb-4&quot;>{position.description}</p>
              <div>
                <h4 className=&quot;font-semibold mb-2&quot;>Requirements:</h4>
                <ul className=&quot;list-disc list-inside space-y-1 text-sm opacity-70&quot;>
                  {position.requirements.map((req, reqIndex) => (
                    <li key={reqIndex}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className=&quot;py-16&quot;>
        <h2 className=&quot;text-3xl font-bold text-center mb-12&quot;>Why Work With Us</h2>
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
          {benefits.map((benefit, index) => (
            <div key={index} className=&quot;text-center p-6&quot;>
              <div className=&quot;text-4xl mb-4&quot;>{benefit.icon}</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>{benefit.title}</h3>
              <p className=&quot;opacity-80 text-sm&quot;>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Company Culture */}
      <section className=&quot;py-16&quot;>
        <h2 className=&quot;text-3xl font-bold text-center mb-12&quot;>Our Culture</h2>
        <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12&quot;>
          <div>
            <h3 className=&quot;text-2xl font-bold mb-6&quot;>Innovation First</h3>
            <p className=&quot;opacity-80 leading-relaxed mb-4&quot;>
              We believe in pushing the boundaries of what's possible. Our team is constantly 
              exploring new technologies and approaches to solve complex problems.
            </p>
            <p className=&quot;opacity-80 leading-relaxed&quot;>
              From AI consciousness research to quantum computing breakthroughs, we're not afraid 
              to tackle the most challenging problems in technology.
            </p>
          </div>
          <div>
            <h3 className=&quot;text-2xl font-bold mb-6&quot;>Collaboration & Growth</h3>
            <p className=&quot;opacity-80 leading-relaxed mb-4&quot;>
              We foster a culture of continuous learning and collaboration. Every team member 
              has the opportunity to contribute to our mission and grow their skills.
            </p>
            <p className=&quot;opacity-80 leading-relaxed&quot;>
              Whether you're a seasoned expert or just starting your career, we provide the 
              support and resources you need to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;text-center py-16&quot;>
        <h2 className=&quot;text-3xl md:text-4xl font-bold mb-6&quot;>Ready to Make a Difference?</h2>
        <p className=&quot;text-xl opacity-80 mb-8 max-w-2xl mx-auto&quot;>
          Join our team and help us build the future of autonomous business operations.
        </p>
        <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
          <a
            href=&quot;/contact&quot;
            className=&quot;px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200&quot;
          >
            Contact Us
          </Link>
          <a
            href=&quot;mailto:careers@ziontechgroup.com&quot;
            className=&quot;px-8 py-4 border border-white/20 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200&quot;
          >
            Send Resume
          </Link>
        </div>
      </section>
    </div>
  );
}