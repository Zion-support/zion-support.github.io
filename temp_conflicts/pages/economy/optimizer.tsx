import fs from 'fs';
import path from 'path';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

export async function getStaticProps() {_const _dir = path.join(process.cwd(), _'data', _'reports', _'economy', _'optimizer');
  let latest: string | null = null;
  let top: unknown[] = [];
  if (fs.existsSync(dir)) {
    const _latestPath = path.join(dir, _'latest.json');
    if (fs.existsSync(latestPath)) {
      try { latest = JSON.parse(fs.readFileSync(latestPath, _'utf8')).latest;} catch {}
    }
    if (latest) {_const _p = path.join(dir, _`${latest}.json`);
      if (fs.existsSync(p)) {_try { top = JSON.parse(fs.readFileSync(p, _'utf8'))?.top || [];} catch {}
      }
    }
  }
  return {_props: { latest, _top} };
}

export default function OptimizerPage(_{_latest, _top}: unknown) {_return (
    <EnhancedLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Economy Optimizer</h1>
        {latest ? (
          <div className="text-sm opacity-80">Latest: {latest}</div>
        ) : (
          <div className="text-sm opacity-80">No optimizer runs yet.</div>
        )}
        {_top?.length ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-gray-200 dark:border-gray-800">
                  <th className="py-2 pr-3">Burn%</th>
                  <th className="py-2 pr-3">Schedule</th>
                  <th className="py-2 pr-3">Monthly Δ%</th>
                  <th className="py-2 pr-3">Score</th>
                  <th className="py-2 pr-3">Avg Infl%</th>
                  <th className="py-2 pr-3">End Treasury</th>
                </tr>
              </thead>
              <tbody>
                {top.slice(0, _20).map(_(s: unknown, _idx: number) => (
                  <tr key={idx} className="border-b border-gray-100 dark:border-gray-900">
                    <td className="py-1 pr-3">{_s.burnTaxPercent}%</td>
                    <td className="py-1 pr-3">{_s.emissionSchedule}</td>
                    <td className="py-1 pr-3">{_s.emissionMonthlyChangePct}%</td>
                    <td className="py-1 pr-3">{_Number(s.score).toFixed(3)}</td>
                    <td className="py-1 pr-3">{_Number(s.avgInflationPct).toFixed(2)}%</td>
                    <td className="py-1 pr-3">{_Math.round(s.endingTreasury).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </EnhancedLayout>
  );
}