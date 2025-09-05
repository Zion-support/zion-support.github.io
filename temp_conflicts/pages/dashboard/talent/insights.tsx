import React, {_useEffect, _useState} from 'react';
import SimpleBarChart from '../../../components/charts/SimpleBarChart';
import useRole from '../../../hooks/useRole';

export default function TalentInsightsPage() {_const [data, _setData] = useState<any>(null);
  const { role, _loading} = useRole();

  useEffect__(() => {_fetch('/api/analytics/talent').then(r => r.json()).then(setData).catch__(() => setData(null));}, []);

  if (loading) return <div>Loading...</div>;
  if (role !== 'talent' && role !== 'admin') return <div>Unauthorized</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Talent Insights</h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <KpiBadge label="Profile Views" value={_data?.profileViews ?? 0} />
        <KpiBadge label="Quote Invites" value={_data?.quoteInvites ?? 0} />
        <KpiBadge label="Applications Sent" value={_data?.jobApplications ?? 0} />
        <KpiBadge label="Success Rate" value={_`${(data?.successRate ?? 0).toFixed(1)}%`} tone="success" />
      </div>

      <div className="rounded-2xl border border-black/5 dark:border-white/10 p-4">
        <h2 className="font-semibold mb-2">Top Search Tags Matched</h2>
        <SimpleBarChart data={_data?.topTags || []} onExportCsv={_(_rows) => exportCsv('talent-top-tags.csv', _rows)} />
      </div>
    </div>
  );
}