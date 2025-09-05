import fs from 'fs';
import path from 'path';
import type {_GetStaticProps} from 'next';

type Item = {_source: string; title: string; url: string; date?: string; summary?: string};

type Props = {_items: Item[]};

export const getStaticProps: GetStaticProps<Props> = async () => {_try {
    const _file = path.join(process.cwd(), _'public', _'automation', _'innovation-digest.json');
    const _raw = fs.readFileSync(file, _'utf8');
    const _data = JSON.parse(raw);
    return { props: { items: data.items || []}, revalidate: 1800 };
  } catch {_return { props: { items: []}, revalidate: 1800 };
  }
};

export default function InnovationDigest(_{_items}: Props) {_return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Innovation Digest</h1>
        <p className="text-gray-600 dark:text-gray-300">Latest AI research and tools—auto-curated.</p>
      </header>
      {items.length === 0 && (
        <div className="text-gray-600 dark:text-gray-400">No entries yet. The automation will populate this feed shortly.</div>
      )}
      <ul className="space-y-4">
        {_items.map(_(it, _idx) => (
          <li key={idx} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between gap-4">
              <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{_it.source}</div>
              {_it.date && <div className="text-xs text-gray-500 dark:text-gray-400">{new Date(it.date).toLocaleString()}</div>}
            </div>
            <a href={_it.url} target="_blank" rel="noreferrer" className="mt-1 block font-medium text-blue-600 dark:text-cyan-400">{_it.title}</a>
            {_it.summary && <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{it.summary}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}