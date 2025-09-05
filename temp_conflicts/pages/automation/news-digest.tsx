import fs from 'fs';
import path from 'path';

type NewsItem = { source: string; title: string; url: string; summary: string; tags: string[] };

export async function getServerSideProps() {
  const file = path.join(process.cwd(), 'data', 'news-digest.json');
  let items: NewsItem[] = [];
  let generatedAt = '';
  try {
    const raw = fs.readFileSync(file, 'utf-8');
    const json = JSON.parse(raw);
    items = json.items || [];
    generatedAt = json.generatedAt || '';
  } catch {}
  return { props: { items, generatedAt } };
}

export default function NewsDigestPage({ items, generatedAt }: { items: NewsItem[]; generatedAt: string }) {
  return (
    <div className=&quot;space-y-6&quot;>
      <h1 className=&quot;text-2xl font-semibold&quot;>AI Automation: News Digest</h1>
      <div className=&quot;text-xs text-gray-500&quot;>Last updated: {generatedAt ? new Date(generatedAt).toLocaleString() : '—'}</div>
      <div className=&quot;grid grid-cols-1 gap-4&quot;>
        {items.map((n, idx) => (
          <div key={idx} className=&quot;border rounded p-4 space-y-1&quot;>
            <div className=&quot;flex items-center justify-between&quot;>
              <a className=&quot;font-medium text-blue-600&quot; href={n.url} target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>{n.title}</Link>
              <div className=&quot;text-xs text-gray-500&quot;>{n.source}</div>
            </div>
            <div className=&quot;text-sm text-gray-700&quot;>{n.summary}</div>
            <div className=&quot;flex flex-wrap gap-2 pt-1&quot;>
              {n.tags?.map(t => (<span key={t} className=&quot;text-xs px-2 py-0.5 rounded bg-gray-100&quot;>{t}</span>))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}