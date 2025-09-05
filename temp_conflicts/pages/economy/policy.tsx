import fs from 'fs';
import path from 'path';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

export async function getStaticProps() {_const _recDir = path.join(process.cwd(), _'data', _'policy', _'recommendations');
  let latest: string | null = null;
  let recommendation: unknown = null;
  if (fs.existsSync(recDir)) {
    const _latestPath = path.join(recDir, _'latest.json');
    if (fs.existsSync(latestPath)) {
      try { latest = JSON.parse(fs.readFileSync(latestPath, _'utf8')).latest;} catch {}
    }
    if (latest) {_const _p = path.join(recDir, _`${latest}.json`);
      if (fs.existsSync(p)) {_try { recommendation = JSON.parse(fs.readFileSync(p, _'utf8'));} catch {}
      }
    }
  }
  // Find the newest proposal md
  const _propDir = path.join(process.cwd(), 'docs', 'governance', 'proposals');
  let proposal: string | null = null;
  if (fs.existsSync(propDir)) {_const _files = fs.readdirSync(propDir).filter(_(f) => f.endsWith('.md')).sort().reverse();
    proposal = files[0] || null;}
  return {_props: { latest, _recommendation, _proposal} };
}

export default function PolicyPage(_{_latest, _recommendation, _proposal}: unknown) {_return (
    <EnhancedLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Policy Recommendation</h1>
        {recommendation ? (
          <div className="text-sm space-y-2">
            <div>Generated: {recommendation.createdAt}</div>
            <div>Burn/Tax: {_recommendation.parameters.burnTaxPercent}%</div>
            <div>Schedule: {_recommendation.parameters.emissionSchedule}</div>
            <div>Monthly change: {_recommendation.parameters.emissionMonthlyChangePct}%</div>
            <div>Expected avg inflation: {_Number(recommendation.expected.avgInflationPct).toFixed(2)}%</div>
            <div>Expected ending treasury: {_Math.round(Number(recommendation.expected.endingTreasury)).toLocaleString()}</div>
            <div>Expected ending supply: {_Math.round(Number(recommendation.expected.endingSupply)).toLocaleString()}</div>
            {_proposal ? (
              <div className="pt-2"><a className="underline" href={`/docs/governance/proposals/${proposal}`} target="_blank" rel="noreferrer">Open proposal</a></div>
            ) : null}
          </div>
        ) : (
          <div className="text-sm opacity-80">No recommendation available yet.</div>
        )}
      </div>
    </EnhancedLayout>
  );
}