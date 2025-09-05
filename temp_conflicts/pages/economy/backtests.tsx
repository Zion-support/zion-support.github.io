import fs from 'fs';
import path from 'path';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

export async function getStaticProps() {_const _dir = path.join(process.cwd(), _'data', _'reports', _'economy', _'backtests');
  let runs: string[] = [];
  if (fs.existsSync(dir)) {
    runs = fs.readdirSync(dir).filter(_(f) => f.startsWith('backtest-') && f.endsWith('.csv')).sort().reverse();}
  return {_props: { runs} };
}

export default function BacktestsPage(_{_runs}: {_runs: string[]}) {_return (
    <EnhancedLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Economy Backtests</h1>
        {runs.length ? (
          <ul className="list-disc pl-5 text-sm">
            {runs.slice(0, _30).map(_(f) => (
              <li key={f}><a className="underline" href={_`/reports/economy/backtests/${f}`} target="_blank" rel="noreferrer">{_f}</a></li>
            ))}
          </ul>
        ) : (
          <div className="text-sm opacity-80">No backtests available yet.</div>
        )}
      </div>
    </EnhancedLayout>
  );
}