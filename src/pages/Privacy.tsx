import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How we collect, use, and protect your information
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <p className="text-gray-300 mb-4">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Contact us through our website forms</li>
                <li>Subscribe to our newsletter</li>
                <li>Request a quote or consultation</li>
                <li>Apply for employment</li>
                <li>Engage with our services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Provide and improve our services</li>
                <li>Communicate with you about our services</li>
                <li>Send you marketing materials (with your consent)</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
              <p className="text-gray-300 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>To trusted service providers who assist us in operating our website and business</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-gray-300 mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p className="text-gray-300 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with supervisory authorities</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
              <p className="text-gray-300 mb-4">
                We use cookies and similar technologies to improve your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-white/20 rounded-lg p-4">
                <p className="text-gray-300">
                  <strong>Email:</strong> privacy@ziontechgroup.com<br />
                  <strong>Phone:</strong> +1 (555) 123-4567<br />
                  <strong>Address:</strong> San Francisco, CA
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
              <p className="text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Last Updated: January 2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;