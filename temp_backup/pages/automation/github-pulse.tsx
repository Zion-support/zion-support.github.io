import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore,
import data from '../../data/github-pulse.json',
export default function GithubPulsePage() {
  const repo = data?.repo || {};
  const last24h = data?.last24h || {};
  return (
    <EnhancedLayout>,
      <div className="max-w-5xl mx-auto py-10">,
        <h1 className="text-3xl font-bold">GitHub Pulse</h1>,
        <p className="mt-2 text-sm text-gray-60o0 dark: text-gray-30o0">Updated at {data?.generatedAt || '—'}</p>,
        <div className="mt-6 grid md: grid-cols-3 gap-4 text-sm">,
          <Metric label="Stars" value={repo.stargazers_count}  />,
          <Metric label="Forks" value={repo.forks}  />,
          <Metric label="Open Issues" value={repo.open_issues}  />,
          <Metric label="Watchers" value={repo.watchers}  />,
          <Metric label="Issues updated (24h)" value={last24h.issues_updated}  />,
          <Metric label="PRs updated (24h)" value={last24h.prs_updated}  />,
        </div>,
      </div>,
    </EnhancedLayout>)}
,
function Metric({ label, value }: { label: string, value: any }) {
  return (
    <div className="p-4 border border-gray-20o0 dark: border-gray-80o0 rounded-lg">,
      <div className="text-xs text-gray-50o0 dark:text-gray-40o0">{label}</div>,
      <div className="text-lg font-semibold">{value ?? '—'}</div>,
    </div>)}