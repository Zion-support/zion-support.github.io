export const metadata = {
  title: 'Careers - Zion Tech Group',
  description: 'Join our team of innovators and build the future of technology with Zion Tech Group.',
  keywords: 'careers, jobs, Zion Tech Group, AI jobs, technology careers, quantum computing jobs',
};

export default function CareersPage() {
	const openPositions = [
		{
			title: 'Senior AI Research Engineer',
			department: 'Research & Development',
			location: 'Remote / Global',
			type: 'Full-time',
			description:
				'Lead cutting-edge research in AI consciousness, autonomous systems, and quantum neural networks.',
			requirements: [
				'PhD in Computer Science, AI, or related field',
				'5+ years experience in AI research',
				'Expertise in machine learning and neural networks',
				'Familiarity with quantum computing concepts',
			],
		},
	];

	const benefits = [
		{ title: 'Remote First', description: 'Work from anywhere in the world with our distributed team.', icon: '🌍' },
		{ title: 'Cutting-Edge Technology', description: 'Work with the latest AI and quantum technologies.', icon: '🚀' },
		{ title: 'Flexible Hours', description: "Work when you're most productive with flexible scheduling.", icon: '⏰' },
	];
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our Team</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Build the future of technology with innovative minds at Zion Tech Group
        </p>
      </section>

      {/* Open Positions */}
      <section className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
        <div className="space-y-6">
          {openPositions.map((position, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{position.title}</h3>
                  <p className="text-gray-600">{position.department}</p>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <span className="text-sm text-gray-500">{position.location}</span>
                  <span className="text-sm font-medium text-blue-600">{position.type}</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{position.description}</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}