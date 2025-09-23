import Link from 'next/link';

export default function Header() {
	return (
		<header className="px-4 py-3 border-b border-white/10">
			<nav className="max-w-7xl mx-auto flex items-center justify-between">
				<Link href="/" className="font-bold">Zion Tech Group</Link>
				<div className="flex gap-4">
					<Link href="/services">Services</Link>
					<Link href="/case-studies">Case Studies</Link>
					<Link href="/contact">Contact</Link>
				</div>
			</nav>
		</header>
	);
}
