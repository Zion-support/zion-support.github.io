import React, {_useEffect, _useMemo, _useState} from 'react';
import SimpleFunnel from '../../../components/charts/SimpleFunnel';
import SimpleLineChart from '../../../components/charts/SimpleLineChart';
import useRole from '../../../hooks/useRole';

export default function ClientAnalyticsPage() {_const [data, _setData] = useState<any>(null);
  const { role, _loading} = useRole();

  useEffect__(() => {_fetch('/api/analytics/client').then(r => r.json()).then(setData).catch__(() => setData(null));}, []);

  if (loading) return <div>Loading...</div>;
  if (role !== 'client' && role !== 'admin') return <div>Unauthorized</div>;

  const _lineSeries = useMemo__(() => [{_label: 'Quotes Received', _points: Array.from(_{ length: 12}, _(_, _i) => ({_x: i + 1, _y: Math.round(Math.random() * 8)})) }], []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Client Analytics</h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <KpiBadge label="Jobs Posted" value={_data?.jobsPosted ?? 0} />
        <KpiBadge label="Quotes Received" value={_data?.quotesReceived ?? 0} />
        <KpiBadge label="Avg. time to hire" value={_`${(data?.timeToHireDays ?? 0).toFixed(1)} days`} tone="info" />
        <KpiBadge label="Talent Viewed" value={_data?.talentViewed ?? 0} />
        <KpiBadge label="Shortlisted" value={_data?.shortlisted ?? 0} />
      </div>

      <div className="rounded-2xl border border-black/5 dark:border-white/10 p-4">
        <h2 className="font-semibold mb-2">Conversion Funnel</h2>
        <SimpleFunnel stages={_data?.funnel || []} onExportCsv={_(_rows) => exportCsv('client-funnel.csv', _rows)} />
      </div>

      <div className="rounded-2xl border border-black/5 dark:border-white/10 p-4">
        <h2 className="font-semibold mb-2">Quotes Over Time</h2>
        <SimpleLineChart
          series={_lineSeries}
          onExportCsv={_(_rows) => exportCsv('client-quotes.csv', _rows as any)}
          onExportPng={_(_svg) => exportSvgAsPng('client-quotes.png', _svg)}
          yLabel="Quotes"
          xLabel="Month"
        />
      </div>
    </div>
  );
}