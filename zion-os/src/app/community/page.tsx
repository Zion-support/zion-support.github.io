import Link from "next/link";

export default function CommunityPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Community</h1>
        <p className="text-gray-300 mb-8">
          Join our community to collaborate, share knowledge, and help shape the future of Zion OS.
        </p>
        <div className="space-y-4">
          <Link className="text-blue-400 hover:text-blue-300" href="/discord">Discord</Link>
          <br />
          <Link className="text-blue-400 hover:text-blue-300" href="/forums">Forums</Link>
          <br />
          <Link className="text-blue-400 hover:text-blue-300" href="/events">Events</Link>
        </div>
      </div>
    </div>
  );
}
