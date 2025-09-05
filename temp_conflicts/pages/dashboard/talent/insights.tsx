import React, { useEffect, useState } from 'react';
import SimpleBarChart from '../../../components/charts/SimpleBarChart';
import { KpiBadge } from '../../../components/ui/InteractiveStats';
import { exportCsv } from '../../../utils/exporters';
import useRole from '../../../hooks/useRole';

export default function TalentInsightsPage() {
  const [data, setData] = useState<any>(null);
  const { role, loading } = useRole();

  useEffect(() => {
    fetch('/api/analytics/talent').then(r => r.json()).then(setData).catch(() => setData(null));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (role !== 'talent' && role !== 'admin') return <div>Unauthorized</div>;

  return (
    <div className=&quot;space-y-6&quot;>
      <h1 className=&quot;text-2xl font-semibold&quot;>Talent Insights</h1>

      <div className=&quot;grid grid-cols-2 md:grid-cols-5 gap-4&quot;>
        <KpiBadge label=&quot;Profile Views&quot; value={data?.profileViews ?? 0} />
        <KpiBadge label=&quot;Quote Invites&quot; value={data?.quoteInvites ?? 0} />
        <KpiBadge label=&quot;Applications Sent&quot; value={data?.jobApplications ?? 0} />
        <KpiBadge label=&quot;Success Rate&quot; value={`${(data?.successRate ?? 0).toFixed(1)}%`} tone=&quot;success&quot; />
      </div>

      <div className=&quot;rounded-2xl border border-black/5 dark:border-white/10 p-4&quot;>
        <h2 className=&quot;font-semibold mb-2&quot;>Top Search Tags Matched</h2>
        <SimpleBarChart data={data?.topTags || []} onExportCsv={(rows) => exportCsv('talent-top-tags.csv', rows)} />
      </div>
    </div>
  );
}