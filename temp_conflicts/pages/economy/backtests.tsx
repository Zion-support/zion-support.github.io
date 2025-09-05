import fs from 'fs';
import path from 'path';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'data', 'reports', 'economy', 'backtests');
  let runs: string[] = [];
  if (fs.existsSync(dir)) {
    runs = fs.readdirSync(dir).filter((f) => f.startsWith('backtest-') && f.endsWith('.csv')).sort().reverse();
  }
  return { props: { runs } };
}

export default function BacktestsPage({ runs }: { runs: string[] }) {
  return (
    <EnhancedLayout>
      <div className=&quot;space-y-6&quot;>
        <h1 className=&quot;text-2xl font-semibold&quot;>Economy Backtests</h1>
        {runs.length ? (
          <ul className=&quot;list-disc pl-5 text-sm&quot;>
            {runs.slice(0, 30).map((f) => (
              <li key={f}><a className=&quot;underline&quot; href={`/reports/economy/backtests/${f}`} target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>{f}</Link></li>
            ))}
          </ul>
        ) : (
          <div className=&quot;text-sm opacity-80&quot;>No backtests available yet.</div>
        )}
      </div>
    </EnhancedLayout>
  );
}