import Link from "next/link";

export const metadata = {
  title: "AI-Powered Business Intelligence Platform Launch | Zion Tech Group",
  description: "Details on Zion Tech Group's new AI-powered business intelligence platform, features, and impact.",
  keywords: "AI platform, business intelligence, launch, Zion Tech Group",
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex items-center gap-3 text-sm text-gray-400">
            <Link href="/news" className="hover:text-blue-400">News</Link>
            <span>/</span>
            <span>Company</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Zion Tech Group Launches Revolutionary AI-Powered Business Intelligence Platform</h1>
          <div className="flex items-center gap-3 text-gray-400 mb-8">
            <span className="bg-blue-500/20 text-blue-400 text-xs font-bold px-2 py-1 rounded-full">LAUNCH</span>
            <span>December 15, 2024</span>
            <span>•</span>
            <span>7 min read</span>
          </div>

          <div className="prose prose-invert max-w-none">
            <p>
              Today we are excited to unveil our next-generation AI-powered Business Intelligence platform. Built on
              state-of-the-art machine learning, the platform delivers real-time insights, predictive analytics, and
              automated decision support for enterprises across industries.
            </p>
            <h2>Key Capabilities</h2>
            <ul>
              <li>Streaming analytics with millisecond latency</li>
              <li>Automated anomaly detection and forecasting</li>
              <li>Natural-language querying and dashboard generation</li>
              <li>Secure role-based data governance and auditability</li>
            </ul>
            <h2>Business Outcomes</h2>
            <p>
              Early customers reported faster decision cycles, lower operational costs, and improved revenue forecasting
              accuracy. The platform integrates with leading data warehouses and cloud providers, enabling rapid time to value.
            </p>
            <h2>Availability</h2>
            <p>
              The platform is available today for enterprise customers. To request a demo or deployment, contact our team.
            </p>
          </div>

          <div className="mt-10 flex gap-4">
            <Link href="/contact" className="btn-primary">Request a Demo</Link>
            <Link href="/services" className="btn-secondary">Explore Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

