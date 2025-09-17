import Link from "next/link";

export const metadata = {
  title: "Enterprise IT Solutions - Zion Tech Group | Digital Transformation Services",
  description: "Transform your enterprise with Zion Tech Group's comprehensive IT solutions. From cloud migration to DevOps automation, we help organizations modernize their technology infrastructure.",
  keywords: "enterprise IT, digital transformation, cloud migration, DevOps, infrastructure, Zion Tech Group, enterprise solutions"
};

export default function EnterpriseITPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Enterprise IT Solutions
          </h1>
          <p className="text-xl text-gray-600">
            Transform your enterprise with our comprehensive technology solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Cloud Migration
            </h3>
            <p className="text-gray-600 mb-4">
              Seamlessly migrate your infrastructure to the cloud with zero downtime.
            </p>
            <Link href="#" className="text-indigo-600 hover:text-indigo-500">
              Learn More →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              DevOps Automation
            </h3>
            <p className="text-gray-600 mb-4">
              Streamline your development and deployment processes with automated workflows.
            </p>
            <Link href="#" className="text-indigo-600 hover:text-indigo-500">
              Learn More →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Infrastructure Modernization
            </h3>
            <p className="text-gray-600 mb-4">
              Upgrade your legacy systems to modern, scalable infrastructure.
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