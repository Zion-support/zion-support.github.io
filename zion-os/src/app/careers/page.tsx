export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Lead development of AI-powered automation systems and machine learning models."
    },
    {
      title: "Quantum Computing Specialist",
      department: "Research",
      location: "Remote",
      type: "Full-time", 
      description: "Research and develop quantum computing algorithms and applications."
    },
    {
      title: "Blockchain Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build decentralized applications and blockchain infrastructure."
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our Team</h1>
        <p className="text-xl md:text-2xl opacity-80 mb-8 max-w-3xl mx-auto">
          Help us build the future of AI-powered digital economies and autonomous business operations.
        </p>
        <p className="text-lg opacity-70 max-w-2xl mx-auto">
          We&apos;re looking for passionate innovators who want to push the boundaries of what&apos;s possible in artificial intelligence, quantum computing, and blockchain technology.
        </p>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
        <div className="space-y-6">
          {openPositions.map((position, index) => (
            <div key={index} className="p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm opacity-70">
                    <span>{position.department}</span>
                    <span>{position.location}</span>
                    <span>{position.type}</span>
                  </div>
                </div>
                <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                  Apply Now
                </button>
              </div>
              <p className="text-gray-300">{position.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Join Zion Tech Group?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Innovation</h3>
            <p className="opacity-70">Work on cutting-edge technologies that shape the future.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Growth</h3>
            <p className="opacity-70">Continuous learning opportunities and career development.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Impact</h3>
            <p className="opacity-70">Make a meaningful difference in the tech industry.</p>
          </div>
        </div>
      </section>
    </div>
  );
}