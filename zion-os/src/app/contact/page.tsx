import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-gray-600 mb-8">
          We'd love to hear from you. Reach out for product questions, partnerships, or support.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Email</h2>
              <a className="text-blue-600" href="mailto:hello@ziontechgroup.com">hello@ziontechgroup.com</a>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Community</h2>
              <Link href="/community" className="text-blue-600">Join our community →</Link>
            </div>
          </div>

          <form className="space-y-4">
            <input className="w-full border rounded px-3 py-2" placeholder="Your name" />
            <input className="w-full border rounded px-3 py-2" placeholder="Your email" />
            <textarea className="w-full border rounded px-3 py-2" rows={5} placeholder="How can we help?" />
            <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
