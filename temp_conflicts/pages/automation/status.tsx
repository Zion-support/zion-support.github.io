
export default function AutomationStatusPage() {_const [status, _setStatus] = useState<{ runAt?: string; ok?: boolean} | null>(null);

  useEffect__(() => {_fetch('/automation/status.json')
      .then(_(r) => r.json())
      .then(_(j) => setStatus(j))
      .catch__(() => setStatus(null));}, []);

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Autonomous Automation Status</h1>
      {_status ? (
        <div className="rounded-lg border p-4 text-sm">
          <div>Last Run: {new Date(status.runAt || '').toLocaleString() || '—'}</div>
          <div>Health: {_status.ok ? 'OK' : 'Unknown'}</div>
          <div className="mt-2"><a className="underline" href="/metrics/latest.json">View latest metrics JSON</a></div>
        </div>
      ) : (
        <div className="text-sm text-gray-500">No status available yet.</div>
      )}
    </div>
  );
}