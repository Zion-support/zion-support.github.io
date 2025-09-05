import React, { useEffect, useMemo, useState } from 'react';
import SimpleLineChart from '../../components/charts/SimpleLineChart';
import SimpleBarChart from '../../components/charts/SimpleBarChart';
import SimpleDoughnutChart from '../../components/charts/SimpleDoughnutChart';
import { KpiBadge } from '../../components/ui/InteractiveStats';
import { exportCsv, exportSvgAsPng } from '../../utils/exporters';
import useRole from '../../hooks/useRole';

export default function AdminAnalyticsPage() {
  const [data, setData] = useState<any>(null);
  const { role, loading } = useRole();

  useEffect(() => {
    fetch('/api/analytics/admin').then(r => r.json()).then(setData).catch(() => setData(null));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (role !== 'admin') return <div>Unauthorized</div>;

  const totals = data?.totals || {};
  const geo = data?.geo || [];
  const topCategories = data?.topCategories || [];

  const lineSeries = useMemo(() => [{ label: 'Jobs Filled', points: Array.from({ length: 12 }, (_, i) => ({ x: i + 1, y: Math.round(Math.random() * 10) })) }], []);

  return (
    <div className=&quot;space-y-6&quot;>
      <h1 className=&quot;text-2xl font-semibold&quot;>Admin Analytics</h1>

      <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-4&quot;>
        <KpiBadge label=&quot;Total Users&quot; value={totals.totalUsers ?? 0} />
        <KpiBadge label=&quot;Talents&quot; value={totals.totalTalents ?? 0} tone=&quot;info&quot; />
        <KpiBadge label=&quot;Clients&quot; value={totals.totalClients ?? 0} tone=&quot;info&quot; />
        <KpiBadge label=&quot;Active Projects&quot; value={totals.activeProjects ?? 0} tone=&quot;success&quot; />
        <KpiBadge label=&quot;Jobs Posted&quot; value={totals.jobsPosted ?? 0} />
        <KpiBadge label=&quot;Jobs Filled&quot; value={totals.jobsFilled ?? 0} tone=&quot;success&quot; />
        <KpiBadge label=&quot;Quotes Sent&quot; value={totals.quotesSent ?? 0} />
        <KpiBadge label=&quot;Quotes Accepted&quot; value={totals.quotesAccepted ?? 0} tone=&quot;success&quot; />
      </div>

      <div className=&quot;grid md:grid-cols-2 gap-6&quot;>
        <div className=&quot;rounded-2xl border border-black/5 dark:border-white/10 p-4&quot;>
          <h2 className=&quot;font-semibold mb-2&quot;>Jobs Filled Over Time</h2>
          <SimpleLineChart
            series={lineSeries}
            onExportCsv={(rows) => exportCsv('admin-jobs-filled.csv', rows as any)}
            onExportPng={(svg) => exportSvgAsPng('admin-jobs-filled.png', svg)}
            yLabel=&quot;Filled&quot;
            xLabel=&quot;Month&quot;
          />
        </div>
        <div className=&quot;rounded-2xl border border-black/5 dark:border-white/10 p-4&quot;>
          <h2 className=&quot;font-semibold mb-2&quot;>Top Performing Categories</h2>
          <SimpleBarChart data={topCategories} onExportCsv={(rows) => exportCsv('admin-top-categories.csv', rows)} />
        </div>
      </div>

      <div className=&quot;grid md:grid-cols-2 gap-6&quot;>
        <div className=&quot;rounded-2xl border border-black/5 dark:border-white/10 p-4&quot;>
          <h2 className=&quot;font-semibold mb-2&quot;>Referral Conversions</h2>
          <SimpleDoughnutChart
            data={[{ label: 'Converted', value: data?.referralConversions || 0 }, { label: 'Others', value: Math.max((totals.totalUsers || 0) - (data?.referralConversions || 0), 0) }]}
            onExportCsv={(rows) => exportCsv('admin-referrals.csv', rows)}
            onExportPng={(svg) => exportSvgAsPng('admin-referrals.png', svg)}
          />
        </div>
        <div className=&quot;rounded-2xl border border-black/5 dark:border-white/10 p-4&quot;>
          <h2 className=&quot;font-semibold mb-2&quot;>Geo Heat Grid (Users)</h2>
          <div className=&quot;grid grid-cols-2 md:grid-cols-3 gap-2&quot;>
            {geo.map((g: any) => (
              <div key={g.label} className=&quot;rounded p-2 bg-gray-100 dark:bg-gray-800 flex justify-between text-xs&quot;>
                <span>{g.label}</span>
                <span>{g.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}