import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 text-zinc-900">Contact Us</h1>
        <p className="text-zinc-600 mb-8">
          Have questions? Reach out and we'll get back to you shortly.
        </p>
        <div className="space-y-4">
          <div>
            <div className="text-zinc-900 font-semibold">Email</div>
            <a className="text-blue-600" href="mailto:hello@ziontechgroup.com">hello@ziontechgroup.com</a>
          </div>
          <div>
            <div className="text-zinc-900 font-semibold">Support</div>
            <Link className="text-blue-600" href="/community">Join the community</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
