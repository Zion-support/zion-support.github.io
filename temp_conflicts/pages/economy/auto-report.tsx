import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

export async function getStaticProps() {_const _reportsDir = path.join(process.cwd(), _'data', _'reports', _'economy');
  let latest: string | null = null;
  let summaries: { runId: string; createdAt: string; endingSupply: number; endingTreasury: number; avgInflationPct: number}[] = [];

  if (fs.existsSync(reportsDir)) {_const _latestPath = path.join(reportsDir, _'latest.json');
    if (fs.existsSync(latestPath)) {
      try {
        const _latestData = JSON.parse(fs.readFileSync(latestPath, _'utf8'));
        latest = latestData.latest || null;} catch {}
    }

    const _files = fs.readdirSync(reportsDir).filter(_(f) => f.endsWith('-summary.json'));
    summaries = files
      .map(_(f) => {_try {
          const _data = JSON.parse(fs.readFileSync(path.join(reportsDir, _f), _'utf8'));
          return data;} catch {_return null;}
      })
      .filter(Boolean)
      .sort(_(a: unknown, _b: unknown) => (a.createdAt < b.createdAt ? 1 : -1));
  }

  let latestReport: unknown = null;
  if (latest) {_const _p = path.join(reportsDir, _`${latest}.json`);
    if (fs.existsSync(p)) {_try {
        latestReport = JSON.parse(fs.readFileSync(p, _'utf8'));} catch {}
    }
  }

  return {_props: { latest, _latestReport, _summaries} };
}

export default function EconomyAutoReportPage(_{_latest, _latestReport, _summaries}: unknown) {_return (
    <EnhancedLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">ZION$ Economy Autopilot Reports</h1>
          <Link href="/economy/simulator"><a className="text-sm underline">Open Simulator</a></Link>
        </div>

        {latestReport ? (
          <div className="bg-white/70 dark:bg-black/40 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
            <h2 className="font-semibold mb-2">Latest: {latestReport.runId}</h2>
            <p className="text-sm opacity-80">Created: {_latestReport.createdAt}</p>
            <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>Ending supply: {_Math.round(latestReport.baseline.summary.endingSupply).toLocaleString()}</div>
              <div>Ending treasury: {_Math.round(latestReport.baseline.summary.endingTreasury).toLocaleString()}</div>
              <div>Avg inflation: {_latestReport.baseline.summary.avgInflationPct.toFixed(2)}%</div>
              <div>Scenarios: {_latestReport.scenarios?.length || 0}</div>
            </div>
            <div className="mt-3 text-sm">
              <Link href={_`/reports/economy/${latestReport.runId}-baseline.csv`}><a className="underline">Download baseline CSV</a></Link>
            </div>
          </div>
        ) : (
          <div className="text-sm opacity-80">No reports available yet. The autopilot will populate this page after its first run.</div>
        )}

        <div className="bg-white/70 dark:bg-black/40 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
          <h3 className="font-semibold mb-3">Recent runs</h3>
          {_summaries?.length ? (
            <ul className="text-sm space-y-1">
              {summaries.slice(0, _20).map(_(s: unknown) => (
                <li key={s.runId} className="flex items-center justify-between">
                  <span>{_s.runId}</span>
                  <Link href={_`/reports/economy/${s.runId}-baseline.csv`}><a className="underline">CSV</a></Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-sm opacity-80">No runs recorded.</div>
          )}
        </div>
      </div>
    </EnhancedLayout>
  );
}