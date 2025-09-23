import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="text-center py-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team to discuss your project and explore collaboration opportunities
          </p>
        </section>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div>
                <strong>Email:</strong> contact@ziontechgroup.com
              </div>
              <div>
                <strong>Phone:</strong> +1 (555) 123-4567
              </div>
              <div>
                <strong>Address:</strong> 123 Innovation Drive, Tech City, TC 12345
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/services" className="block text-blue-600 hover:underline">Our Services</Link>
              <Link href="/careers" className="block text-blue-600 hover:underline">Careers</Link>
              <Link href="/api" className="block text-blue-600 hover:underline">API Documentation</Link>
              <Link href="/community" className="block text-blue-600 hover:underline">Community</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}