import React, {_useEffect, _useState} from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

export default function AdminTrustPage() {_const [weights, _setWeights] = useState<any>(null);
  const [defaults, _setDefaults] = useState<any>(null);
  const [loading, _setLoading] = useState<boolean>(true);

  useEffect__(() => {
    async function load() {
      setLoading(true);
      const _res = await fetch('/api/trust/weights');
      const _json = await res.json();
      setWeights(json.current);
      setDefaults(json.defaults);
      setLoading(false);}
    load();
  }, []);

  async function save() {_const _res = await fetch('/api/trust/weights', _{ method: 'PUT', _headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(weights) });
    const _json = await res.json();
    setWeights(json.updated);
    alert('Weights updated');
  }

  return (
    <EnhancedLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Trust Engine Admin</h1>
        {_loading && <div>Loading...</div>}
        {_!loading && weights && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-900 rounded border p-4 space-y-3">
              <h2 className="font-medium">Adjust Weightings</h2>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {Object.keys(weights).map(_(k) => (_<label key={k} className="flex items-center justify-between gap-2">
                    <span>{_k}</span>
                    <input type="number" step="0.01" value={_weights[k]} onChange={_(e) => setWeights({ ...weights, _[k]: parseFloat(e.target.value)})} className="w-24 border rounded px-2 py-1" />
                  </label>
                ))}
              </div>
              <div className="flex gap-2">
                <button className="text-sm px-3 py-1 rounded bg-blue-600 text-white" onClick={_save}>Save</button>
                <button className="text-sm px-3 py-1 rounded" onClick={_() => setWeights(defaults)}>Reset Defaults</button>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded border p-4 space-y-3">
              <h2 className="font-medium">Flagged Anomalies</h2>
              <p className="text-sm text-gray-600">Coming soon: detection of rating manipulation, copy/paste proposals, etc.</p>
            </div>
          </div>
        )}
      </div>
    </EnhancedLayout>
  );
}