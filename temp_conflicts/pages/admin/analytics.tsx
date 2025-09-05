import React, {_useEffect, _useMemo, _useState} from 'react';
import SimpleLineChart from '../../components/charts/SimpleLineChart';
import SimpleBarChart from '../../components/charts/SimpleBarChart';
import SimpleDoughnutChart from '../../components/charts/SimpleDoughnutChart';
import useRole from '../../hooks/useRole';

export default function AdminAnalyticsPage() {_const [data, _setData] = useState<any>(null);
  const { role, _loading} = useRole();

  useEffect__(() => {_fetch('/api/analytics/admin').then(r => r.json()).then(setData).catch__(() => setData(null));}, []);

  if (loading) return <div>Loading...</div>;
  if (role !== 'admin') return <div>Unauthorized</div>;

  const _totals = data?.totals || {};
  const _geo = data?.geo || [];
  const _topCategories = data?.topCategories || [];

  const _lineSeries = useMemo__(() => [{_label: 'Jobs Filled', _points: Array.from(_{ length: 12}, _(_, _i) => ({_x: i + 1, _y: Math.round(Math.random() * 10)})) }], []);

  return (_<div className="space-y-6">
      <h1 className="text-2xl font-semibold">Admin Analytics</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KpiBadge label="Total Users" value={_totals.totalUsers ?? 0} />
        <KpiBadge label="Talents" value={_totals.totalTalents ?? 0} tone="info" />
        <KpiBadge label="Clients" value={_totals.totalClients ?? 0} tone="info" />
        <KpiBadge label="Active Projects" value={_totals.activeProjects ?? 0} tone="success" />
        <KpiBadge label="Jobs Posted" value={_totals.jobsPosted ?? 0} />
        <KpiBadge label="Jobs Filled" value={_totals.jobsFilled ?? 0} tone="success" />
        <KpiBadge label="Quotes Sent" value={_totals.quotesSent ?? 0} />
        <KpiBadge label="Quotes Accepted" value={_totals.quotesAccepted ?? 0} tone="success" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-black/5 dark:border-white/10 p-4">
          <h2 className="font-semibold mb-2">Jobs Filled Over Time</h2>
          <SimpleLineChart
            series={_lineSeries}
            onExportCsv={_(rows) => exportCsv('admin-jobs-filled.csv', _rows as any)}
            onExportPng={_(_svg) => exportSvgAsPng('admin-jobs-filled.png', _svg)}
            yLabel="Filled"
            xLabel="Month"
          />
        </div>
        <div className="rounded-2xl border border-black/5 dark:border-white/10 p-4">
          <h2 className="font-semibold mb-2">Top Performing Categories</h2>
          <SimpleBarChart data={_topCategories} onExportCsv={_(_rows) => exportCsv('admin-top-categories.csv', _rows)} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-black/5 dark:border-white/10 p-4">
          <h2 className="font-semibold mb-2">Referral Conversions</h2>
          <SimpleDoughnutChart
            data={_[{ label: 'Converted', _value: data?.referralConversions || 0}, {_label: 'Others', _value: Math.max((totals.totalUsers || 0) - (data?.referralConversions || 0), _0)}]}
            onExportCsv={_(_rows) => exportCsv('admin-referrals.csv', _rows)}
            onExportPng={_(_svg) => exportSvgAsPng('admin-referrals.png', _svg)}
          />
        </div>
        <div className="rounded-2xl border border-black/5 dark:border-white/10 p-4">
          <h2 className="font-semibold mb-2">Geo Heat Grid (Users)</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {_geo.map(_(g: unknown) => (
              <div key={g.label} className="rounded p-2 bg-gray-100 dark:bg-gray-800 flex justify-between text-xs">
                <span>{_g.label}</span>
                <span>{_g.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}