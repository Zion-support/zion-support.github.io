import fs from 'fs';
import path from 'path';
import type { GetStaticProps } from 'next';

type Item = { source: string; title: string; url: string; date?: string; summary?: string };

type Props = { items: Item[] };

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const file = path.join(process.cwd(), 'public', 'automation', 'innovation-digest.json');
    const raw = fs.readFileSync(file, 'utf8');
    const data = JSON.parse(raw);
    return { props: { items: data.items || [] }, revalidate: 1800 };
  } catch {
    return { props: { items: [] }, revalidate: 1800 };
  }
};

export default function InnovationDigest({ items }: Props) {
  return (
    <div className=&quot;space-y-6&quot;>
      <header className=&quot;space-y-2&quot;>
        <h1 className=&quot;text-3xl font-bold&quot;>Innovation Digest</h1>
        <p className=&quot;text-gray-600 dark:text-gray-300&quot;>Latest AI research and tools—auto-curated.</p>
      </header>
      {items.length === 0 && (
        <div className=&quot;text-gray-600 dark:text-gray-400&quot;>No entries yet. The automation will populate this feed shortly.</div>
      )}
      <ul className=&quot;space-y-4&quot;>
        {items.map((it, idx) => (
          <li key={idx} className=&quot;p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900&quot;>
            <div className=&quot;flex items-center justify-between gap-4&quot;>
              <div className=&quot;text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400&quot;>{it.source}</div>
              {it.date && <div className=&quot;text-xs text-gray-500 dark:text-gray-400&quot;>{new Date(it.date).toLocaleString()}</div>}
            </div>
            <a href={it.url} target=&quot;_blank&quot; rel=&quot;noreferrer&quot; className=&quot;mt-1 block font-medium text-blue-600 dark:text-cyan-400&quot;>{it.title}</Link>
            {it.summary && <p className=&quot;mt-2 text-sm text-gray-600 dark:text-gray-300&quot;>{it.summary}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}