

export const metadata = {
  title: 'Careers - Zion Tech Group',''
  description: 'Join our team of AI innovators and help shape the future of autonomous business operations and digital economies.',''
  keywords: 'careers, jobs, Zion Tech Group, AI jobs, technology careers, quantum computing jobs'},'
export default /**
 * CareersPage - Function description;
 */
function CareersPage() {
  const open_positions = [;
    {'
      title: 'Senior AI Research Engineer',''
      department: 'Research & Development',''
      location: 'Remote / Global',''
      type: 'Full - time',''
      description: 'Lead cutting - edge research in AI consciousness, autonomous systems, and quantum neural networks.','
export const metadata = {;'
  title: 'Careers - Zion Tech Group',;''
  description: 'Join our team of AI innovators and help shape the future of autonomous business operations and digital economies.',;''
  keywords: 'careers, jobs, Zion Tech Group, AI jobs, technology careers, quantum computing jobs'},;'
export default function CareersPage() {;
  const openPositions = [;
    {;'
      title: 'Senior AI Research Engineer',;''
      department: 'Research & Development',;''
      location: 'Remote / Global',;''
      type: 'Full-time',;''
      description: 'Lead cutting-edge research in AI consciousness, autonomous systems, and quantum neural networks.',;'
      requirements: [;]'
        'MS/PhD in Physics, Computer Science, or related field3+ years experience in quantum computingKnowledge of quantum algorithms and quantum programmingExperience with Qiskit, Cirq, or similar frameworks']}''
    {title: 'Full-Stack Developer';','
  department: 'Engineering';''
      location: 'Remote / Global';','
  type: 'Full-time';''
      description: 'Build scalable web applications and APIs for our AI-powered platforms.';',
  requirements: [;]'
        '3+ years experience in full-stack developmentProficiency in React, Node.js, and TypeScriptExperience with cloud platforms (AWS, GCP, Azure)Knowledge of database design and optimization']}''
    {title: 'Cybersecurity Specialist';','
  department: 'Security';''
      location: 'Remote / Global';','
  type: 'Full-time';''
      description: 'Implement and maintain advanced security protocols for our AI systems.';',
  requirements: [;]'
        '5+ years experience in cybersecurityExpertise in threat detection and preventionKnowledge of AI security and adversarial attacksRelevant certifications (CISSP, CEH, etc.)']}];'
  const benefits = [;


    {;'
      title: 'Remote First',;''
      description: 'Work from anywhere in the world with our distributed team.',;''
      icon: '🌍'},;'
    {;'
      title: 'Cutting-Edge Technology',;''
      description: 'Work with the latest AI, quantum computing, and blockchain technologies.',;''
      icon: '🚀'},;'
    {;'
      title: 'Flexible Hours',;''
      description: 'Work when you\'re most productive with flexible scheduling.',;''
      icon: '⏰'},;'
    {;'
      title: 'Learning & Development',;''
      description: 'Continuous learning opportunities and professional development.',;''
      icon: '📚'},;'
    {;'
      title: 'Competitive Compensation',;''
      description: 'Attractive salary packages with equity options.',;''
      icon: '💰'},;'
    {;'
      title: 'Health & Wellness',;''
      description: 'Comprehensive health coverage and wellness programs.',;']'
      icon: '🏥'}];'
  return ('
    <div className="space - y-16">;"
</div>"
      <section className="text - center py - 16">;"
</section>"
        <h1 className="text - 4xl md:text - 6xl font - bold mb - 6">Join Our Team</h1>;""
        <p className="text - xl md:text - 2xl opacity - 80 mb - 8 max - w-3xl mx - auto">;"
</p>
        </p>;"
        <p className="text - lg opacity - 70 max - w-2xl mx - auto">;"
</p>
        </p>;
      </section>;"
      <section className="py - 16">;"
</section>"
        <h2 className="text - 3xl font - bold text - center mb - 12">Open Positions</h2>;""
        <div className="space - y-6">;"
</div>"
            <div key={index} className="p - 6 rounded - lg border border - white / 10 hover:border - white / 20 transition - all duration - 200">;"
</div>"
              <div className="flex flex - col lg:flex - row lg:items - center lg:justify - between gap - 4 mb - 4">;"
</div>
                <div>;
</div>"
                  <h3 className="text - xl font - semibold mb - 2">{position.title}</h3>;""
                  <div className="flex flex - wrap gap - 4 text - sm opacity - 70">;"
</div>
                    <span>{position.department}</span>;
                    <span>•</span>;
                    <span>{position.location}</span>;
                    <span>•</span>;"
                    <span className="text - blue - 400">{position.type}</span>;"
                  </div>;
                </div>;"
                <button className="px - 6 py - 2 bg - gradient - to - r from - blue - 500 to - purple - 600 rounded - lg font - semibold hover:from - blue - 600 hover:to - purple - 700 transition - all duration - 200">;"
</button>
                </button>;
              </div>;"
              <p className="opacity - 80 mb - 4">{position.description}</p>;"
              <div>;
</div>"
                <h4 className="font - semibold mb - 2">Requirements:</h4>;""
                <ul className="list - disc list - inside space - y-1 text - sm opacity - 70">;"
</ul>)
                    <li key={req_index}>{req}</li>))}
                </ul>;
              </div>;
            </div>))}
        </div>;
      </section>;"
      <section className="py - 16">;"
</section>"
        <h2 className="text - 3xl font - bold text - center mb - 12">Why Work With Us</h2>;""
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;"
</div>"
            <div key={index} className="text - center p - 6">;"
</div>"
              <div className="text - 4xl mb - 4">{benefit.icon}</div>;""
              <h3 className="text - xl font - semibold mb - 3">{benefit.title}</h3>;""
              <p className="opacity - 80 text - sm">{benefit.description}</p>;"
            </div>))}
        </div>;
      </section>;"
      <section className="py - 16">;"
</section>"
        <h2 className="text - 3xl font - bold text - center mb - 12">Our Culture</h2>;""
        <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 12">;"
</div>
          <div>;
</div>"
            <h3 className="text - 2xl font - bold mb - 6">Innovation First</h3>;""
            <p className="opacity - 80 leading - relaxed mb - 4">;"
</p>
            </p>;"
            <p className="opacity - 80 leading - relaxed">;"
</p>
            </p>;
          </div>;
          <div>;
</div>"
            <h3 className="text - 2xl font - bold mb - 6">Collaboration & Growth</h3>;""
            <p className="opacity - 80 leading - relaxed mb - 4">;"
</p>
            </p>;"
            <p className="opacity - 80 leading - relaxed">;"
</p>
            </p>;
          </div>;
        </div>;
      </section>;"
      <section className="text - center py - 16">;"
</section>"
        <h2 className="text - 3xl md: text - 4xl font - bold mb - 6">Ready to Make a Difference?</h2>;""
        <p className="text - xl opacity - 80 mb - 8 max - w-2xl mx - auto">;"
</p>
        </p>;"
        <div className="flex flex - col sm:flex - row gap - 4 justify - center">;"
</div>
          <a;"
            href="/contact";""
            className="px - 8 py - 4 bg - gradient - to - r from - blue - 500 to - purple - 600 rounded - lg font - semibold hover:from - blue - 600 hover:to - purple - 700 transition - all duration - 200";"
          >;
</a>
          </a>;
          <a;"
            href="mailto:careers@ziontechgroup.com";""
            className="px - 8 py - 4 border border - white / 20 rounded - lg font - semibold hover:bg - white / 10 transition - all duration - 200";"
          >;
</a>
          </a>;
        </div>;
      </section>;
    </div>);"