import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

export async function getStaticProps() {
  const reportsDir = path.join(process.cwd(), 'data', 'reports', 'economy');
  let latest: string | null = null;
  let summaries: { runId: string; createdAt: string; endingSupply: number; endingTreasury: number; avgInflationPct: number }[] = [];

  if (fs.existsSync(reportsDir)) {
    const latestPath = path.join(reportsDir, 'latest.json');
    if (fs.existsSync(latestPath)) {
      try {
        const latestData = JSON.parse(fs.readFileSync(latestPath, 'utf8'));
        latest = latestData.latest || null;
      } catch {}
    }

    const files = fs.readdirSync(reportsDir).filter((f) => f.endsWith('-summary.json'));
    summaries = files
      .map((f) => {
        try {
          const data = JSON.parse(fs.readFileSync(path.join(reportsDir, f), 'utf8'));
          return data;
        } catch {
          return null;
        }
      })
      .filter(Boolean)
      .sort((a: any, b: any) => (a.createdAt < b.createdAt ? 1 : -1));
  }

  let latestReport: any = null;
  if (latest) {
    const p = path.join(reportsDir, `${latest}.json`);
    if (fs.existsSync(p)) {
      try {
        latestReport = JSON.parse(fs.readFileSync(p, 'utf8'));
      } catch {}
    }
  }

  return { props: { latest, latestReport, summaries } };
}

export default function EconomyAutoReportPage({ latest, latestReport, summaries }: any) {
  return (
    <EnhancedLayout>
      <div className=&quot;space-y-6&quot;>
        <div className=&quot;flex items-center justify-between&quot;>
          <h1 className=&quot;text-2xl font-semibold&quot;>ZION$ Economy Autopilot Reports</h1>
          <Link href=&quot;/economy/simulator&quot;><a className=&quot;text-sm underline&quot;>Open Simulator</Link></Link>
        </div>

        {latestReport ? (
          <div className=&quot;bg-white/70 dark:bg-black/40 rounded-lg p-4 border border-gray-200 dark:border-gray-800&quot;>
            <h2 className=&quot;font-semibold mb-2&quot;>Latest: {latestReport.runId}</h2>
            <p className=&quot;text-sm opacity-80&quot;>Created: {latestReport.createdAt}</p>
            <div className=&quot;mt-3 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm&quot;>
              <div>Ending supply: {Math.round(latestReport.baseline.summary.endingSupply).toLocaleString()}</div>
              <div>Ending treasury: {Math.round(latestReport.baseline.summary.endingTreasury).toLocaleString()}</div>
              <div>Avg inflation: {latestReport.baseline.summary.avgInflationPct.toFixed(2)}%</div>
              <div>Scenarios: {latestReport.scenarios?.length || 0}</div>
            </div>
            <div className=&quot;mt-3 text-sm&quot;>
              <Link href={`/reports/economy/${latestReport.runId}-baseline.csv`}><a className=&quot;underline&quot;>Download baseline CSV</Link></Link>
            </div>
          </div>
        ) : (
          <div className=&quot;text-sm opacity-80&quot;>No reports available yet. The autopilot will populate this page after its first run.</div>
        )}

        <div className=&quot;bg-white/70 dark:bg-black/40 rounded-lg p-4 border border-gray-200 dark:border-gray-800&quot;>
          <h3 className=&quot;font-semibold mb-3&quot;>Recent runs</h3>
          {summaries?.length ? (
            <ul className=&quot;text-sm space-y-1&quot;>
              {summaries.slice(0, 20).map((s: any) => (
                <li key={s.runId} className=&quot;flex items-center justify-between&quot;>
                  <span>{s.runId}</span>
                  <Link href={`/reports/economy/${s.runId}-baseline.csv`}><a className=&quot;underline&quot;>CSV</Link></Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className=&quot;text-sm opacity-80&quot;>No runs recorded.</div>
          )}
        </div>
      </div>
    </EnhancedLayout>
  );
}