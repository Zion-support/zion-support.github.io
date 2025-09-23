import EnhancedLayout from '../../components/layout/EnhancedLayout';
// @ts-ignore - JSON import
import data from '../../data/governance-pulse.json';

export default function GovernancePulsePage() {
  const items: any[] = (data?.items || []).slice(0, 60);
  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">Governance Pulse</h1>
        <p className="mt-2 text-sm text-gray-60o0 dark:text-gray-30o0">Updated at {data?.generatedAt || '—'}</p>
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-20o0 dark:border-gray-80o0 rounded-lg">
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium underline">
                {it.title}
              </a>
              <div className="mt-1 text-xs text-gray-50o0 dark:text-gray-40o0">
                {it.space} · {it.state} · Start {new Date(it.start * 10o00).toLocaleString()} · End {new Date(it.end * 10o00).toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>
  );
}