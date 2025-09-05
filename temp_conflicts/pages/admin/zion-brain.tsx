import { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import EnhancedNavigation from '@/components/layout/EnhancedNavigation';

type LogsSummary = { entries: any[]; byModule: Record<string, number>; byType: Record<string, number>; total: number };

export default function ZionBrainAdmin() {
  const [token, setToken] = useState<string>('');
  const [routerInput, setRouterInput] = useState('');
  const [routerResult, setRouterResult] = useState<any>(null);

  const [metrics, setMetrics] = useState({ signupsLastHour: 18, disputeFlagsLastHour: 2, zionVelocity: 110 });
  const [triggers, setTriggers] = useState<any[]>([]);

  const [prompt, setPrompt] = useState('');
  const [userIntent, setUserIntent] = useState('');
  const [optimized, setOptimized] = useState('');

  const [logs, setLogs] = useState<LogsSummary | null>(null);
  const [stuck, setStuck] = useState<any[]>([]);

  useEffect(() => {
    const t = localStorage.getItem('zion_superadmin_token') || '';
    setToken(t);
    refreshLogs(t);
  }, []);

  const authHeaders = useMemo(() => (token ? { 'x-admin-token': token } : {}), [token]);

  async function refreshLogs(t?: string) {
    const headers = t ? { 'x-admin-token': t } : authHeaders;
    const res = await fetch('/api/zion-brain/logs', { headers });
    if (res.ok) setLogs(await res.json());
    const stuckRes = await fetch('/api/zion-brain/logs?stuck=1', { headers });
    if (stuckRes.ok) setStuck((await stuckRes.json()).entries || []);
  }

  async function handleRoute() {
    const res = await fetch('/api/zion-brain/router', { method: 'POST', headers: { 'Content-Type': 'application/json', ...authHeaders }, body: JSON.stringify({ text: routerInput }) });
    const data = await res.json();
    setRouterResult(data);
    await refreshLogs();
  }

  async function handleEvaluateReflex() {
    const res = await fetch('/api/zion-brain/reflex', { method: 'POST', headers: { 'Content-Type': 'application/json', ...authHeaders }, body: JSON.stringify(metrics) });
    const data = await res.json();
    setTriggers(data.triggers || []);
    await refreshLogs();
  }

  async function handleOptimize() {
    const res = await fetch('/api/zion-brain/optimize', { method: 'POST', headers: { 'Content-Type': 'application/json', ...authHeaders }, body: JSON.stringify({ prompt, userIntent }) });
    const data = await res.json();
    setOptimized(data.optimized || '');
    await refreshLogs();
  }

  function saveToken() {
    localStorage.setItem('zion_superadmin_token', token);
    refreshLogs(token);
  }

  const heatCells = useMemo(() => {
    if (!logs) return [] as { key: string; value: number }[];
    return Object.entries(logs.byModule || {}).map(([k, v]) => ({ key: k, value: v as number }));
  }, [logs]);

  return (
    <>
      <Head>
        <title>Zion Brain Admin</title>
        <meta name=&quot;robots&quot; content=&quot;noindex,nofollow&quot; />
      </Head>
      <EnhancedNavigation />
      <main className=&quot;container mx-auto px-4 py-6&quot;>
        <div className=&quot;flex items-center gap-2 mb-6&quot;>
          <h1 className=&quot;text-2xl font-semibold&quot;>Zion Brain — Admin</h1>
          <span className=&quot;text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded&quot;>Always-on, self-monitoring AI</span>
        </div>

        <section className=&quot;mb-8 p-4 border rounded-lg&quot;>
          <h2 className=&quot;font-semibold mb-2&quot;>Superadmin Access</h2>
          <div className=&quot;flex gap-2 items-center&quot;>
            <input className=&quot;border px-2 py-1 rounded w-80&quot; placeholder=&quot;Enter admin token&quot; value={token} onChange={(e) => setToken(e.target.value)} />
            <button className=&quot;px-3 py-1 bg-black text-white rounded&quot; onClick={saveToken}>Save</button>
            <span className=&quot;text-xs text-gray-500&quot;>Token is required if SUPERADMIN_TOKEN is set on server</span>
          </div>
        </section>

        <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-6&quot;>
          <section className=&quot;p-4 border rounded-lg&quot;>
            <h2 className=&quot;font-semibold mb-2&quot;>1) Auto-Prompt Router</h2>
            <textarea className=&quot;w-full border rounded p-2 mb-2&quot; rows={4} placeholder=&quot;Type a user request...&quot; value={routerInput} onChange={(e) => setRouterInput(e.target.value)} />
            <button className=&quot;px-3 py-1 bg-blue-600 text-white rounded&quot; onClick={handleRoute}>Detect & Route</button>
            {routerResult && (
              <div className=&quot;mt-3 text-sm&quot;>
                <div><b>Intent</b>: {routerResult.intent} ({Math.round((routerResult.confidence || 0) * 100)}%)</div>
                <div><b>Routed</b>: {routerResult.routed?.routed ? 'yes' : 'no'}</div>
              </div>
            )}
            <ul className=&quot;text-xs mt-2 list-disc pl-5 text-gray-600&quot;>
              <li>Chains: Resume builder, DAO explainer, Tokenomics simulator, Governance summarizer, Nation assistant</li>
            </ul>
          </section>

          <section className=&quot;p-4 border rounded-lg&quot;>
            <h2 className=&quot;font-semibold mb-2&quot;>2) Reflex Engine</h2>
            <div className=&quot;grid grid-cols-3 gap-2 mb-2 text-sm&quot;>
              <label className=&quot;flex flex-col&quot;>
                <span>Signups/hr</span>
                <input type=&quot;number&quot; className=&quot;border rounded px-2 py-1&quot; value={metrics.signupsLastHour} onChange={(e) => setMetrics({ ...metrics, signupsLastHour: Number(e.target.value) })} />
              </label>
              <label className=&quot;flex flex-col&quot;>
                <span>Disputes/hr</span>
                <input type=&quot;number&quot; className=&quot;border rounded px-2 py-1&quot; value={metrics.disputeFlagsLastHour} onChange={(e) => setMetrics({ ...metrics, disputeFlagsLastHour: Number(e.target.value) })} />
              </label>
              <label className=&quot;flex flex-col&quot;>
                <span>ZION$/min</span>
                <input type=&quot;number&quot; className=&quot;border rounded px-2 py-1&quot; value={metrics.zionVelocity} onChange={(e) => setMetrics({ ...metrics, zionVelocity: Number(e.target.value) })} />
              </label>
            </div>
            <button className=&quot;px-3 py-1 bg-green-700 text-white rounded&quot; onClick={handleEvaluateReflex}>Evaluate</button>
            {triggers?.length > 0 ? (
              <ul className=&quot;mt-3 text-sm list-disc pl-5&quot;>
                {triggers.map((t, i) => (
                  <li key={i}>{t.action} — {t.reason} ({t.severity})</li>
                ))}
              </ul>
            ) : (
              <div className=&quot;mt-3 text-sm text-gray-600&quot;>No triggers</div>
            )}
          </section>

          <section className=&quot;p-4 border rounded-lg&quot;>
            <h2 className=&quot;font-semibold mb-2&quot;>3) Prompt Optimizer</h2>
            <input className=&quot;border rounded px-2 py-1 w-full mb-2&quot; placeholder=&quot;Optional: user intent&quot; value={userIntent} onChange={(e) => setUserIntent(e.target.value)} />
            <textarea className=&quot;w-full border rounded p-2 mb-2&quot; rows={5} placeholder=&quot;Paste a prompt to optimize&quot; value={prompt} onChange={(e) => setPrompt(e.target.value)} />
            <div className=&quot;flex gap-2&quot;>
              <button className=&quot;px-3 py-1 bg-purple-700 text-white rounded&quot; onClick={handleOptimize}>Optimize</button>
              <span className=&quot;text-xs text-gray-500&quot;>Instruction: Review this prompt and rewrite it to be 30% faster and more specific to user intent.</span>
            </div>
            {optimized && (
              <div className=&quot;mt-3&quot;>
                <div className=&quot;text-xs uppercase text-gray-500 mb-1&quot;>Optimized</div>
                <pre className=&quot;text-sm whitespace-pre-wrap bg-gray-50 dark:bg-gray-900 p-2 rounded&quot;>{optimized}</pre>
              </div>
            )}
          </section>

          <section className=&quot;p-4 border rounded-lg&quot;>
            <h2 className=&quot;font-semibold mb-2&quot;>4) Visualization Dashboard</h2>
            <div className=&quot;text-sm mb-2&quot;>Logs per prompt type and module usage</div>
            <div className=&quot;grid grid-cols-5 gap-2&quot;>
              {heatCells.map(({ key, value }) => (
                <div key={key} className=&quot;p-3 rounded text-center text-xs&quot; style={{ background: `rgba(59,130,246,${Math.min(1, 0.2 + value / 15)})`, color: 'white' }}>
                  <div className=&quot;font-semibold&quot;>{key}</div>
                  <div>{value}</div>
                </div>
              ))}
              {heatCells.length === 0 && <div className=&quot;text-xs text-gray-500&quot;>No data</div>}
            </div>
            <div className=&quot;mt-4&quot;>
              <div className=&quot;text-sm font-medium mb-1&quot;>Stuck users</div>
              {stuck.length > 0 ? (
                <ul className=&quot;text-xs list-disc pl-5&quot;>
                  {stuck.map((e, i) => (
                    <li key={i}>{e.module} — {String(e.type)} — {e.status} — {e.latencyMs || '?'}ms</li>
                  ))}
                </ul>
              ) : (
                <div className=&quot;text-xs text-gray-500&quot;>None detected</div>
              )}
            </div>
          </section>
        </div>

        <section className=&quot;mt-8 p-4 border rounded-lg&quot;>
          <h2 className=&quot;font-semibold mb-2&quot;>Superadmin Controls</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-3 text-sm&quot;>
            <button className=&quot;px-3 py-2 border rounded hover:bg-gray-50&quot; onClick={() => alert('Deploy chain — stubbed')}>Deploy new GPT chain</button>
            <button className=&quot;px-3 py-2 border rounded hover:bg-gray-50&quot; onClick={() => alert('Suspend agent — stubbed')}>Suspend agents</button>
            <button className=&quot;px-3 py-2 border rounded hover:bg-gray-50&quot; onClick={() => refreshLogs()}>View audit trail (refresh logs)</button>
          </div>
        </section>
      </main>
    </>
  );
}