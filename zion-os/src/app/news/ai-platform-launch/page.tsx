import Link from "next/link";

export const metadata = {
  title: "Zion OS unveils AI Business Intelligence Platform",
  description:
    "Zion OS launches a real-time AI Business Intelligence platform delivering predictive insights for enterprises.",
  keywords:
    "AI, business intelligence, predictive analytics, platform launch, Zion OS",
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
            Zion OS unveils AI Business Intelligence Platform
          </h1>
          <p className="text-gray-400">Published Sep 15, 2025 • AI • Platform</p>
          <div className="h-1 w-24 bg-blue-600 rounded my-6" />
          <p className="text-lg leading-8 text-gray-300">
            Today we introduced our next-generation AI Business Intelligence platform. Built on
            production-proven models and streaming pipelines, it transforms raw operational data
            into actionable, real-time insights for teams across finance, operations, and product.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-white">What’s inside</h2>
          <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
            <li>Predictive KPIs with confidence bands</li>
            <li>Self-serve semantic search across your data</li>
            <li>Alerts on leading indicators, not just outcomes</li>
            <li>Privacy-first controls and auditability</li>
          </ul>
          <p className="mt-8 text-lg leading-8 text-gray-300">
            Early adopters report 18% faster decision cycles and measurable lift in revenue
            efficiency. We’re rolling out to select customers this quarter.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary">
              Request a demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

