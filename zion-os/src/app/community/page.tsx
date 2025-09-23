import Link from "next/link";

export default function CommunityPage() {
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