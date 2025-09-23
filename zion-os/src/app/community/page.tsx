import Link from "next/link";

export default function CommunityPage() {
<<<<<<< HEAD
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Community</h1>
        <p className="text-gray-300">Join the Zion OS community to connect, share, and learn.</p>
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
>>>>>>> 45bde326a2e7 (fix(zion-os): repair corrupted pages, add path alias, implement minimal onboarding route; fix signin/signup/dashboard pages; clean homepage duplicates; build zion-website and zion-ai-assistant)
}
