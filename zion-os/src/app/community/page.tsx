import Link from "next/link";

export default function CommunityPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center py-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Community</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with developers, researchers, and innovators building the future of technology
          </p>
        </section>

        {/* Community Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Developer Forums</h3>
            <p className="text-gray-600 mb-4">
              Join discussions about AI, quantum computing, and emerging technologies
            </p>
            <Link href="#" className="text-blue-600 hover:underline">Visit Forums →</Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Open Source Projects</h3>
            <p className="text-gray-600 mb-4">
              Contribute to our open source initiatives and collaborative projects
            </p>
            <Link href="#" className="text-blue-600 hover:underline">View Projects →</Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Events & Meetups</h3>
            <p className="text-gray-600 mb-4">
              Attend virtual and in-person events to network and learn
            </p>
            <Link href="#" className="text-blue-600 hover:underline">See Events →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}