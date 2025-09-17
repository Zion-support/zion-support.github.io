import Link from "next/link";

export const metadata = {
  title: "Cybersecurity Services - Zion Tech Group | Advanced Threat Protection",
  description: "Protect your organization with Zion Tech Group's comprehensive cybersecurity solutions. From threat detection to compliance management, we secure your digital assets.",
  keywords: "cybersecurity, threat protection, security services, compliance, Zion Tech Group, security solutions, threat detection"
};

export default function CybersecurityPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cybersecurity Services
          </h1>
          <p className="text-xl text-gray-600">
            Protect your organization with our comprehensive security solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Threat Detection
            </h3>
            <p className="text-gray-600 mb-4">
              Advanced AI-powered threat detection and response systems to keep your data safe.
            </p>
            <Link href="#" className="text-indigo-600 hover:text-indigo-500">
              Learn More →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Compliance Management
            </h3>
            <p className="text-gray-600 mb-4">
              Ensure your organization meets industry standards and regulatory requirements.
            </p>
            <Link href="#" className="text-indigo-600 hover:text-indigo-500">
              Learn More →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Security Audits
            </h3>
            <p className="text-gray-600 mb-4">
              Comprehensive security assessments to identify and address vulnerabilities.
            </p>
            <Link href="#" className="text-indigo-600 hover:text-indigo-500">
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}