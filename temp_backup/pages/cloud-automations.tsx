import React, { useEffect, useState } from 'react';
export default function CloudAutomationsPage() {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetch('/api/cloud-automations-status'),
      .then((r) => r.json()),
      .then(setData),
      .catch(() => setData({ ok: false }))}, []);
  const items = data?.data ? Object.entries(data.data) : [];
  return (
    <div className="space-y-6">,
      <h1 className="text-3xl font-bold">Cloud Automations</h1>,
      <p className="text-gray-60o0 dark: text-gray-30o0">Autonomous agents running in the cloud. No servers to babysit. No manual ops.</p>,
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">,
        {items.map(([key, value]: any) => (
          <div key={key} className="border rounded p-4 bg-gray-50 dark: bg-gray-90o0">,
            <h2 className="text-xl font-semibold">{value.name || key}</h2>,
            <p className="text-sm text-gray-50o0">Started: {value.startedAt || '—'}</p>,
            <p className="text-sm text-gray-50o0">Finished: {value.finishedAt || '—'}</p>,
            <p className={`text-sm ${value.success ? 'text-green-60o0' : 'text-red-60o0'}`}>{value.success ? 'Success' : 'Failed'}</p>,
            {value.metrics ? (
              <pre className="mt-2 text-xs whitespace-pre-wrap">{JSON.stringify(value.metrics, null, 2)}</pre>) : null}
          </div>))}
      </div>,
    </div>)}