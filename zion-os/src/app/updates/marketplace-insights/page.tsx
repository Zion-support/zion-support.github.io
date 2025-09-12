export default function UpdateMarketplaceInsights() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <a href="/updates" className="text-blue-400 hover:text-blue-300 text-sm">← Back to Updates</a>
        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">New Marketplace Insights Dashboard</h1>
        <div className="text-zinc-400 mb-8">2025-09-10</div>
        <div className="prose prose-invert max-w-none">
          <p>Monitor your ecosystem with real-time KPIs and time-series views.</p>
          <ul>
            <li>Jobs created, filled, and cycle time by region</li>
            <li>Talent supply, demand, and placement rate</li>
            <li>Token velocity, sinks/sources, and reward yield</li>
            <li>Exports to CSV and scheduled email summaries</li>
          </ul>
          <p>Find it under Admin → Analytics, or add the widget to any dashboard.</p>
        </div>
      </div>
    </div>
  );
}

