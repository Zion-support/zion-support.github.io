import Link from 'next/link';

export default function AppNavigation() {
  return (
    <nav className="flex items-center gap-4 py-3">
      <Link href="/">Home</Link>
      <Link href="/services">Services</Link>
      <Link href="/pricing">Pricing</Link>
    </nav>
  );
}
