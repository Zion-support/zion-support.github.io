import fs from 'fs';
import path from 'path';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'data', 'reports', 'economy', 'optimizer');
  let latest: string | null = null;
  let top: any[] = [];
  if (fs.existsSync(dir)) {
    const latestPath = path.join(dir, 'latest.json');
    if (fs.existsSync(latestPath)) {
      try { latest = JSON.parse(fs.readFileSync(latestPath, 'utf8')).latest; } catch {}
    }
    if (latest) {
      const p = path.join(dir, `${latest}.json`);
      if (fs.existsSync(p)) {
        try { top = JSON.parse(fs.readFileSync(p, 'utf8'))?.top || []; } catch {}
      }
    }
  }
  return { props: { latest, top } };
}

export default function OptimizerPage({ latest, top }: any) {
  return (
    <EnhancedLayout>
      <div className=&quot;space-y-6&quot;>
        <h1 className=&quot;text-2xl font-semibold&quot;>Economy Optimizer</h1>
        {latest ? (
          <div className=&quot;text-sm opacity-80&quot;>Latest: {latest}</div>
        ) : (
          <div className=&quot;text-sm opacity-80&quot;>No optimizer runs yet.</div>
        )}
        {top?.length ? (
          <div className=&quot;overflow-x-auto&quot;>
            <table className=&quot;w-full text-sm&quot;>
              <thead>
                <tr className=&quot;text-left border-b border-gray-200 dark:border-gray-800&quot;>
                  <th className=&quot;py-2 pr-3&quot;>Burn%</th>
                  <th className=&quot;py-2 pr-3&quot;>Schedule</th>
                  <th className=&quot;py-2 pr-3&quot;>Monthly Δ%</th>
                  <th className=&quot;py-2 pr-3&quot;>Score</th>
                  <th className=&quot;py-2 pr-3&quot;>Avg Infl%</th>
                  <th className=&quot;py-2 pr-3&quot;>End Treasury</th>
                </tr>
              </thead>
              <tbody>
                {top.slice(0, 20).map((s: any, idx: number) => (
                  <tr key={idx} className=&quot;border-b border-gray-100 dark:border-gray-900&quot;>
                    <td className=&quot;py-1 pr-3&quot;>{s.burnTaxPercent}%</td>
                    <td className=&quot;py-1 pr-3&quot;>{s.emissionSchedule}</td>
                    <td className=&quot;py-1 pr-3&quot;>{s.emissionMonthlyChangePct}%</td>
                    <td className=&quot;py-1 pr-3&quot;>{Number(s.score).toFixed(3)}</td>
                    <td className=&quot;py-1 pr-3&quot;>{Number(s.avgInflationPct).toFixed(2)}%</td>
                    <td className=&quot;py-1 pr-3&quot;>{Math.round(s.endingTreasury).toLocaleString()}</td>
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