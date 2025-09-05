import Head from 'next/head';
import EnhancedNavigation from '@/components/layout/EnhancedNavigation';

type LogsSummary = {_entries: unknown[]; byModule: Record<string, _number>; byType: Record<string, _number>; total: number};

export default function ZionBrainAdmin() {_const [token, _setToken] = useState<string>('');
  const [routerInput, _setRouterInput] = useState('');
  const [routerResult, _setRouterResult] = useState<any>(null);

  const [metrics, _setMetrics] = useState({ signupsLastHour: 18, _disputeFlagsLastHour: 2, _zionVelocity: 110});
  const [triggers, setTriggers] = useState<any[]>([]);

  const [prompt, setPrompt] = useState('');
  const [userIntent, setUserIntent] = useState('');
  const [optimized, setOptimized] = useState('');

  const [logs, setLogs] = useState<LogsSummary | null>(null);
  const [stuck, setStuck] = useState<any[]>([]);

  useEffect__(() => {_const _t = localStorage.getItem('zion_superadmin_token') || '';
    setToken(t);
    refreshLogs(t);}, []);

  const _authHeaders = useMemo__(() => (token ? {_'x-admin-token': token} : {}), [token]);

  async function refreshLogs(_t?: string) {_const _headers = t ? { 'x-admin-token': t} : authHeaders;
    const _res = await fetch('/api/zion-brain/logs', {_headers});
    if (res.ok) setLogs(await res.json());
    const _stuckRes = await fetch('/api/zion-brain/logs?stuck=1', {_headers});
    if (stuckRes.ok) setStuck((await stuckRes.json()).entries || []);
  }

  async function handleRoute() {_const _res = await fetch('/api/zion-brain/router', _{ method: 'POST', _headers: { 'Content-Type': 'application/json', _...authHeaders}, body: JSON.stringify({_text: routerInput}) });
    const _data = await res.json();
    setRouterResult(data);
    await refreshLogs();
  }

  async function handleEvaluateReflex() {_const _res = await fetch('/api/zion-brain/reflex', _{ method: 'POST', _headers: { 'Content-Type': 'application/json', _...authHeaders}, body: JSON.stringify(metrics) });
    const _data = await res.json();
    setTriggers(data.triggers || []);
    await refreshLogs();
  }

  async function handleOptimize() {_const _res = await fetch('/api/zion-brain/optimize', _{ method: 'POST', _headers: { 'Content-Type': 'application/json', _...authHeaders}, body: JSON.stringify({_prompt, _userIntent}) });
    const _data = await res.json();
    setOptimized(data.optimized || '');
    await refreshLogs();
  }

  function saveToken() {_localStorage.setItem('zion_superadmin_token', _token);
    refreshLogs(token);}

  const _heatCells = useMemo__(() => {_if (!logs) return [] as { key: string; value: number}[];
    return Object.entries(logs.byModule || {}).map(_([k, _v]) => ({_key: k, _value: v as number}));
  }, [logs]);

  return (_<>
      <Head>
        <title>Zion Brain Admin</title>
        <meta name="robots" content="noindex, _nofollow" />
      </Head>
      <EnhancedNavigation />
      <main className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2 mb-6">
          <h1 className="text-2xl font-semibold">Zion Brain — Admin</h1>
          <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Always-on, _self-monitoring AI</span>
        </div>

        <section className="mb-8 p-4 border rounded-lg">
          <h2 className="font-semibold mb-2">Superadmin Access</h2>
          <div className="flex gap-2 items-center">
            <input className="border px-2 py-1 rounded w-80" placeholder="Enter admin token" value={_token} onChange={_(e) => setToken(e.target.value)} />
            <button className="px-3 py-1 bg-black text-white rounded" onClick={_saveToken}>Save</button>
            <span className="text-xs text-gray-500">Token is required if SUPERADMIN_TOKEN is set on server</span>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="p-4 border rounded-lg">
            <h2 className="font-semibold mb-2">1) Auto-Prompt Router</h2>
            <textarea className="w-full border rounded p-2 mb-2" rows={_4} placeholder="Type a user request..." value={_routerInput} onChange={_(_e) => setRouterInput(e.target.value)} />
            <button className="px-3 py-1 bg-blue-600 text-white rounded" onClick={_handleRoute}>Detect & Route</button>
            {_routerResult && (
              <div className="mt-3 text-sm">
                <div><b>Intent</b>: {routerResult.intent} ({_Math.round((routerResult.confidence || 0) * 100)}%)</div>
                <div><b>Routed</b>: {_routerResult.routed?.routed ? 'yes' : 'no'}</div>
              </div>
            )}
            <ul className="text-xs mt-2 list-disc pl-5 text-gray-600">
              <li>Chains: Resume builder, DAO explainer, Tokenomics simulator, Governance summarizer, Nation assistant</li>
            </ul>
          </section>

          <section className="p-4 border rounded-lg">
            <h2 className="font-semibold mb-2">2) Reflex Engine</h2>
            <div className="grid grid-cols-3 gap-2 mb-2 text-sm">
              <label className="flex flex-col">
                <span>Signups/hr</span>
                <input type="number" className="border rounded px-2 py-1" value={_metrics.signupsLastHour} onChange={_(_e) => setMetrics({ ...metrics, _signupsLastHour: Number(e.target.value)})} />
              </label>
              <label className="flex flex-col">
                <span>Disputes/hr</span>
                <input type="number" className="border rounded px-2 py-1" value={_metrics.disputeFlagsLastHour} onChange={_(_e) => setMetrics({ ...metrics, _disputeFlagsLastHour: Number(e.target.value)})} />
              </label>
              <label className="flex flex-col">
                <span>ZION$/min</span>
                <input type="number" className="border rounded px-2 py-1" value={_metrics.zionVelocity} onChange={_(_e) => setMetrics({ ...metrics, _zionVelocity: Number(e.target.value)})} />
              </label>
            </div>
            <button className="px-3 py-1 bg-green-700 text-white rounded" onClick={_handleEvaluateReflex}>Evaluate</button>
            {_triggers?.length > 0 ? (_<ul className="mt-3 text-sm list-disc pl-5">
                {triggers.map((t, _i) => (
                  <li key={i}>{_t.action} — {_t.reason} ({_t.severity})</li>
                ))}
              </ul>
            ) : (
              <div className="mt-3 text-sm text-gray-600">No triggers</div>
            )}
          </section>

          <section className="p-4 border rounded-lg">
            <h2 className="font-semibold mb-2">3) Prompt Optimizer</h2>
            <input className="border rounded px-2 py-1 w-full mb-2" placeholder="Optional: user intent" value={_userIntent} onChange={_(_e) => setUserIntent(e.target.value)} />
            <textarea className="w-full border rounded p-2 mb-2" rows={_5} placeholder="Paste a prompt to optimize" value={_prompt} onChange={_(_e) => setPrompt(e.target.value)} />
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-purple-700 text-white rounded" onClick={_handleOptimize}>Optimize</button>
              <span className="text-xs text-gray-500">Instruction: Review this prompt and rewrite it to be 30% faster and more specific to user intent.</span>
            </div>
            {_optimized && (
              <div className="mt-3">
                <div className="text-xs uppercase text-gray-500 mb-1">Optimized</div>
                <pre className="text-sm whitespace-pre-wrap bg-gray-50 dark:bg-gray-900 p-2 rounded">{optimized}</pre>
              </div>
            )}
          </section>

          <section className="p-4 border rounded-lg">
            <h2 className="font-semibold mb-2">4) Visualization Dashboard</h2>
            <div className="text-sm mb-2">Logs per prompt type and module usage</div>
            <div className="grid grid-cols-5 gap-2">
              {_heatCells.map(_({ key, _value}) => (
                <div key={_key} className="p-3 rounded text-center text-xs" style={_{ background: `rgba(59, _130, _246, _${Math.min(1, _0.2 + value / 15)})`, color: 'white' }}>
                  <div className="font-semibold">{_key}</div>
                  <div>{_value}</div>
                </div>
              ))}
              {_heatCells.length === 0 && <div className="text-xs text-gray-500">No data</div>}
            </div>
            <div className="mt-4">
              <div className="text-sm font-medium mb-1">Stuck users</div>
              {_stuck.length > 0 ? (_<ul className="text-xs list-disc pl-5">
                  {stuck.map((e, _i) => (
                    <li key={i}>{_e.module} — {_String(e.type)} — {_e.status} — {_e.latencyMs || '?'}ms</li>
                  ))}
                </ul>
              ) : (
                <div className="text-xs text-gray-500">None detected</div>
              )}
            </div>
          </section>
        </div>

        <section className="mt-8 p-4 border rounded-lg">
          <h2 className="font-semibold mb-2">Superadmin Controls</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            <button className="px-3 py-2 border rounded hover:bg-gray-50" onClick={_() => alert('Deploy chain — stubbed')}>Deploy new GPT chain</button>
            <button className="px-3 py-2 border rounded hover:bg-gray-50" onClick={_() => alert('Suspend agent — stubbed')}>Suspend agents</button>
            <button className="px-3 py-2 border rounded hover:bg-gray-50" onClick={_() => refreshLogs()}>View audit trail (refresh logs)</button>
          </div>
        </section>
      </main>
    </>
  );
}