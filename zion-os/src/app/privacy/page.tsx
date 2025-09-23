export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-gray-600 to-gray-800 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-100">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">
          <h2>Last Updated: January 2024</h2>
          <p>
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
            website or use our services.
          </p>
          <h3>Information We Collect</h3>
          <ul>
            <li>Personal details you provide (e.g., name, email)</li>
            <li>Technical data (e.g., IP, browser, device)</li>
          </ul>
          <h3>How We Use Information</h3>
          <ul>
            <li>To provide and improve services</li>
            <li>To communicate with you</li>
            <li>To ensure security and compliance</li>
          </ul>
          <h3>Contact</h3>
          <p>
            Questions? Email privacy@ziontechgroup.com
          </p>
        </div>
      </section>
    </div>
  );
}