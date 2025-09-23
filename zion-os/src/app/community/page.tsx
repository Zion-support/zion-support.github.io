import Link from "next/link";

export default function CommunityPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Community</h1>
        <p className="text-zinc-300 mb-6">Join our community and connect with other builders.</p>
        <div className="space-x-4">
          <Link className="text-blue-400 hover:text-blue-300" href="/community/events">Events</Link>
          <Link className="text-blue-400 hover:text-blue-300" href="/community/forum">Forum</Link>
        </div>
      </div>
    </div>
  );
}
