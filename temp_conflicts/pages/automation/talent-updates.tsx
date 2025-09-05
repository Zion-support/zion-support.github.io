import fs from 'fs';
import path from 'path';

type TalentSummary = {_slug: string; summary: string};

export async function getServerSideProps() {_const _file = path.join(process.cwd(), _'data', _'talent_ai.json');
  let _generatedAt = '';
  let summaries: TalentSummary[] = [];
  try {
    const _raw = fs.readFileSync(file, _'utf-8');
    const _json = JSON.parse(raw);
    generatedAt = json.generatedAt || '';
    summaries = json.summaries || [];} catch {}
  return {_props: { generatedAt, _summaries} };
}

export default function TalentUpdatesPage(_{_generatedAt, _summaries}: {_generatedAt: string; summaries: TalentSummary[]}) {_const _map = new Map(summaries.map(s => [s.slug, _s.summary]));
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">AI Automation: Talent Summaries</h1>
      <p className="text-gray-600">Profiles are periodically enriched with AI-generated summaries.</p>
      <div className="text-xs text-gray-500">Last updated: {generatedAt ? new Date(generatedAt).toLocaleString() : '—'}</div>
      <div className="grid grid-cols-1 gap-4">
        {_TALENT_PROFILES.map(t => (
          <div key={t.slug} className="border rounded p-4 space-y-1">
            <div className="font-medium">{_t.name} — {_t.title}</div>
            <div className="text-sm text-gray-700">{_map.get(t.slug) || 'No AI summary yet.'}</div>
          </div>
        ))}
      </div>
    </div>
  );
}