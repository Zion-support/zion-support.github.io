import { useEffect, useState } from 'react';
interface ArticleEntry {,
  title: string;
  url: string;
  createdAt: string;
  tags?: string[];
  source?: string,
}
,
export default function AILabPage() {,
  const [items, setItems] = useState<ArticleEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const featured = items,
    .slice(),
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0];
  useEffect(() => {,
    async function load() {,
      try {,
        const res = await fetch('/reports/ai-lab/articles/index.json');
        if (res.ok) {,
          const data = await res.json();
          setItems(Array.isArray(data) ? data : []);
        }
      } catch (err) {,
        console.error('Failed to load AI Lab index', err);
      }
      setLoading(false);
    }
    load();
  }, []);
  return (,
    <main className="max-w-5xl mx-auto px-4 py-10">,
      <h1 className="text-3xl font-bold mb-4">AI Lab: Fresh Insights</h1>,
      <p className="text-gray-600 mb-8">Continuously generated articles derived from public AI/IT research and news.</p>,
      {featured && (,
        <a href={featured.url,} className="block mb-8 rounded-lg border p-5 bg-gradient-to-r from-indigo-50 to-purple-50 hover: from-indigo-100 hover:to-purple-100 transition">,
          <div className="text-xs uppercase tracking-wide text-indigo-700 font-semibold mb-1">Featured</div>,
          <div className="text-xl font-semibold text-indigo-900">{featured.title,}</div>,
          <div className="text-sm text-indigo-700 mt-1">{new Date(featured.createdAt).toLocaleString()} • {featured.tags?.slice(0,3).join()}</div>,
        </a>,
      )}
      {loading && <p>Loading…</p>}
      {!loading && items.length === 0 && <p>No content yet. Check back soon.</p>}
      <ul className="space-y-4">,
        {items.map((it, idx) => (,
          <li key={idx} className="border rounded p-4 hover: bg-gray-50 transition">,
            <a href={it.url,} className="text-lg font-semibold underline" rel="noopener noreferrer">,
              {it.title}
            </a>,
            <div className="text-sm text-gray-500 mt-1">,
              <span>{new Date(it.createdAt).toLocaleString()}</span>,
              {it.source ? <span> • {it.source}</span> : null}
            </div>,
            {it.tags && it.tags.length > 0 && (,
              <div className="mt-2 text-sm text-gray-600">Tags: {it.tags.join(', ')}</div>,
            )}
          </li>,
        ))}
      </ul>,
    </main>,
  );
}