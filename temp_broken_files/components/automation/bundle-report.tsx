export default function BundleReportPage() {
  return (
    <div className=&quot;py-10&quot;>
      <h1 className=&quot;text-2xl font-semibold text-white&quot;>Bundle Size Report</h1>
      <p className=&quot;text-white/80 mt-2&quot;>Build artifact sizes are summarized in <code className=&quot;text-white/90&quot;>data/perf/bundles.json</code>.</p>
      <p className=&quot;text-white/70 mt-2&quot;>Runs every 30 minutes and auto-PRs updates.</p>
    </div>
  )
}