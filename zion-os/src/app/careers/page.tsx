export const metadata = {
  title: 'Careers - Zion Tech Group',
  description: 'Join our team of AI innovators and help shape the future of autonomous business operations and digital economies.',
  keywords: 'careers, jobs, Zion Tech Group, AI jobs, technology careers, quantum computing jobs',
};

export default function CareersPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
        <p className="text-gray-300 mb-8">
          We're looking for passionate individuals who want to shape the future of AI and autonomous systems.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg border border-white/10">
            <h3 className="text-xl font-semibold mb-2">Software Engineer</h3>
            <p className="text-gray-400 mb-4">Full-time • Remote</p>
            <p className="text-sm">Join our team to build cutting-edge AI solutions and autonomous systems.</p>
          </div>
          <div className="p-6 rounded-lg border border-white/10">
            <h3 className="text-xl font-semibold mb-2">AI Researcher</h3>
            <p className="text-gray-400 mb-4">Full-time • Remote</p>
            <p className="text-sm">Research and develop next-generation AI algorithms and models.</p>
          </div>
        </div>
      </div>
    </div>
  );
}