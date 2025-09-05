import React, { useEffect, useState } from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

export default function AdminTrustPage() {
  const [weights, setWeights] = useState<any>(null);
  const [defaults, setDefaults] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const res = await fetch('/api/trust/weights');
      const json = await res.json();
      setWeights(json.current);
      setDefaults(json.defaults);
      setLoading(false);
    }
    load();
  }, []);

  async function save() {
    const res = await fetch('/api/trust/weights', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(weights) });
    const json = await res.json();
    setWeights(json.updated);
    alert('Weights updated');
  }

  return (
    <EnhancedLayout>
      <div className=&quot;space-y-6&quot;>
        <h1 className=&quot;text-2xl font-semibold&quot;>Trust Engine Admin</h1>
        {loading && <div>Loading...</div>}
        {!loading && weights && (
          <div className=&quot;grid md:grid-cols-2 gap-6&quot;>
            <div className=&quot;bg-white dark:bg-gray-900 rounded border p-4 space-y-3&quot;>
              <h2 className=&quot;font-medium&quot;>Adjust Weightings</h2>
              <div className=&quot;grid grid-cols-2 gap-2 text-sm&quot;>
                {Object.keys(weights).map((k) => (
                  <label key={k} className=&quot;flex items-center justify-between gap-2&quot;>
                    <span>{k}</span>
                    <input type=&quot;number&quot; step=&quot;0.01&quot; value={weights[k]} onChange={(e) => setWeights({ ...weights, [k]: parseFloat(e.target.value) })} className=&quot;w-24 border rounded px-2 py-1&quot; />
                  </label>
                ))}
              </div>
              <div className=&quot;flex gap-2&quot;>
                <button className=&quot;text-sm px-3 py-1 rounded bg-blue-600 text-white&quot; onClick={save}>Save</button>
                <button className=&quot;text-sm px-3 py-1 rounded&quot; onClick={() => setWeights(defaults)}>Reset Defaults</button>
              </div>
            </div>
            <div className=&quot;bg-white dark:bg-gray-900 rounded border p-4 space-y-3&quot;>
              <h2 className=&quot;font-medium&quot;>Flagged Anomalies</h2>
              <p className=&quot;text-sm text-gray-600&quot;>Coming soon: detection of rating manipulation, copy/paste proposals, etc.</p>
            </div>
          </div>
        )}
      </div>
    </EnhancedLayout>
  );
}