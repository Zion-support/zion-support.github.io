import Link from "next/link";

export default function CommunityPage() {
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
=======
	return (
		<div className="min-h-screen py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<h1 className="text-4xl font-bold mb-6">Join Our Community</h1>
				<p className="text-lg opacity-80 mb-8">Connect with fellow developers, entrepreneurs, and innovators building the future of digital economies.</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<Link href="https://discord.gg/ziontechgroup" className="p-6 rounded-lg border border-white/10">Discord</Link>
					<Link href="https://linkedin.com/company/ziontechgroup" className="p-6 rounded-lg border border-white/10">LinkedIn</Link>
					<Link href="https://github.com/ziontechgroup" className="p-6 rounded-lg border border-white/10">GitHub</Link>
				</div>
			</div>
		</div>
	);
}
