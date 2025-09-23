import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-zinc-600 mb-8">We'd love to hear from you. Reach out using any of the methods below.</p>
        <div className="space-y-4">
          <p>Email: <a className="text-blue-600" href="mailto:hello@ziontechgroup.com">hello@ziontechgroup.com</a></p>
          <p>Phone: <a className="text-blue-600" href="tel:+13024640950">+1 302 464 0950</a></p>
          <p>
            Or use our <Link className="text-blue-600" href="/contact/form">contact form</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
