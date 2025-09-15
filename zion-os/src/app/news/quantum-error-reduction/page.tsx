import Link from "next/link";

export const metadata = {
  title: "Quantum algorithm reduces error rates by 60%",
  description:
    "Zion OS research announces a quantum error mitigation technique that reduces error rates by 60% on NISQ devices.",
  keywords: "quantum computing, error mitigation, research, Zion OS",
};

export default function Article() {
  return (
    <div className="min-h-screen">
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 text-sm text-gray-400">
            <Link href="/news" className="hover:text-blue-400">
              ← Back to News
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Quantum algorithm reduces error rates by 60%
          </h1>
          <p className="text-gray-400">Published Sep 15, 2025 • Quantum • Research</p>
          <div className="h-1 w-24 bg-purple-600 rounded my-6" />
          <p className="text-lg leading-8 text-gray-300">
            Our research team developed a composite error mitigation technique combining symmetry
            verification with zero-noise extrapolation. Benchmarks on NISQ hardware show a median
            60% reduction in effective error rates across representative workloads.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-white">Key results</h2>
          <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
            <li>Consistent gains across 8 distinct quantum circuits</li>
            <li>No hardware changes required; purely algorithmic</li>
            <li>Compatible with leading providers and SDKs</li>
          </ul>
          <p className="mt-8 text-lg leading-8 text-gray-300">
            We will open-source reference implementations for community validation and iteration.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary">
              Collaborate with our research team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

