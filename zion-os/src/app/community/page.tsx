import Link from "next/link";

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Community
          </h1>
          <p className="text-xl text-gray-600">
            Connect with developers, share ideas, and build together
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Developer Forums
            </h3>
            <p className="text-gray-600 mb-4">
              Ask questions, share solutions, and collaborate with fellow developers.
            </p>
            <Link href="#" className="text-indigo-600 hover:text-indigo-500">
              Join Discussion →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Code Sharing
            </h3>
            <p className="text-gray-600 mb-4">
              Share your projects and discover amazing code from the community.
            </p>
            <Link href="#" className="text-indigo-600 hover:text-indigo-500">
              Browse Projects →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Events & Meetups
            </h3>
            <p className="text-gray-600 mb-4">
              Join virtual and in-person events to learn and network.
            </p>
            <Link href="#" className="text-indigo-600 hover:text-indigo-500">
              View Events →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}