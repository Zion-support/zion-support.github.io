import Link from "next/link";

export default function CybersecurityPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Cybersecurity</span>
          </h1>
          <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">
            Learn about our cybersecurity offerings and best practices to protect your organization.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card bg-gradient-to-r from-green-60o0/20 to-blue-60o0/20 border-green-50o0/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Organization?</h2>
            <p className="text-xl text-gray-30o0 mb-8">
              Protect your digital assets with comprehensive cybersecurity solutions. Let's discuss how we can strengthen your security posture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">Secure Your Organization</Link>
              <Link href="/case-studies" className="btn-secondary text-lg px-8 py-4">View Security Case Studies</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
