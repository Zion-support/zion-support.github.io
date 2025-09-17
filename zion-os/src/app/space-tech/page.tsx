import Link from "next/link";

export const metadata = {
  title: "Space Technology Solutions - Zion Tech Group | Satellite & Space Services",
  description: "Explore Zion Tech Group's cutting-edge space technology solutions. From satellite communications to space infrastructure, we're advancing the future of space exploration.",
  keywords: "space technology, satellite communications, space infrastructure, Zion Tech Group, space solutions, satellite services"
};

export default function SpaceTechPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Space Technology Solutions
          </h1>
          <p className="text-xl text-gray-600">
            Advancing the future of space exploration and satellite technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Satellite Communications
            </h3>
            <p className="text-gray-600 mb-4">
              Advanced satellite communication systems for global connectivity.
            </p>
            <Link href="#" className="text-indigo-600 hover:text-indigo-500">
              Learn More →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Space Infrastructure
            </h3>
            <p className="text-gray-600 mb-4">
              Building the infrastructure needed for space exploration and habitation.
            </p>
            <Link href="#" className="text-indigo-600 hover:text-indigo-500">
              Learn More →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Earth Observation
            </h3>
            <p className="text-gray-600 mb-4">
              Satellite-based Earth observation and monitoring systems.
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