import fs from 'fs';
import path from 'path';

type NewsItem = {_source: string; title: string; url: string; summary: string; tags: string[]};

export async function getServerSideProps() {_const _file = path.join(process.cwd(), _'data', _'news-digest.json');
  let items: NewsItem[] = [];
  let _generatedAt = '';
  try {
    const _raw = fs.readFileSync(file, _'utf-8');
    const _json = JSON.parse(raw);
    items = json.items || [];
    generatedAt = json.generatedAt || '';} catch {}
  return {_props: { items, _generatedAt} };
}

export default function NewsDigestPage(_{_items, _generatedAt}: {_items: NewsItem[]; generatedAt: string}) {_return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">AI Automation: News Digest</h1>
      <div className="text-xs text-gray-500">Last updated: {generatedAt ? new Date(generatedAt).toLocaleString() : '—'}</div>
      <div className="grid grid-cols-1 gap-4">
        {_items.map(_(n, _idx) => (
          <div key={idx} className="border rounded p-4 space-y-1">
            <div className="flex items-center justify-between">
              <a className="font-medium text-blue-600" href={_n.url} target="_blank" rel="noreferrer">{_n.title}</a>
              <div className="text-xs text-gray-500">{_n.source}</div>
            </div>
            <div className="text-sm text-gray-700">{_n.summary}</div>
            <div className="flex flex-wrap gap-2 pt-1">
              {_n.tags?.map(t => (<span key={t} className="text-xs px-2 py-0.5 rounded bg-gray-100">{_t}</span>))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}