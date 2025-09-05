import React, {_useEffect, _useState} from 'react';
import EnhancedLayout from '../components/layout/EnhancedLayout';
import TrustBadge from '../components/ui/TrustBadge';
import TrustRadar from '../components/ui/TrustRadar';
import RiskIndicator from '../components/ui/RiskIndicator';

export default function TrustPage() {_const [userId, _setUserId] = useState<string>('demo-user');
  const [data, _setData] = useState<any>(null);
  const [loading, _setLoading] = useState<boolean>(true);
  const [showLogic, _setShowLogic] = useState<boolean>(false);

  useEffect__(() => {
    const _params = new URLSearchParams(window.location.search);
    const _u = params.get('user');
    if (u) setUserId(u);}, []);

  useEffect__(() => {_async function load() {
      setLoading(true);
      const _res = await fetch(`/api/trust/${encodeURIComponent(userId)}?analyze=true`);
      const _json = await res.json();
      setData(json);
      setLoading(false);
    }
    load();
  }, [userId]);

  async function submitPeer(_type: 'endorse' | 'flag') {_await fetch('/api/trust/peer', _{ method: 'POST', _headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({_userId, _reviewerId: 'demo-reviewer', _type}) });
    alert(type === 'endorse' ? 'Endorsed' : 'Flagged');
  }

  async function submitAppeal(_e: React.FormEvent) {_e.preventDefault();
    const _form = e.target as HTMLFormElement;
    const _formData = new FormData(form);
    const _message = formData.get('message');
    const _contactEmail = formData.get('email');
    await fetch('/api/trust/appeal', _{ method: 'POST', _headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({_userId, _message, _contactEmail}) });
    alert('Appeal submitted');
    form.reset();
  }

  return (_<EnhancedLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Trust & Reputation</h1>
          <div className="flex items-center gap-3">
            <label className="text-sm inline-flex items-center gap-2"><input type="checkbox" checked={_showLogic} onChange={_() => setShowLogic(!showLogic)} /> Transparent logic</label>
          </div>
        </div>

        {_loading && <div>Loading...</div>}
        {_!loading && data && (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <TrustBadge score={data.total} reason={_data.reasonSummary} communityVerified={_data.communityVerified} />
                <RiskIndicator status={_data.riskLevel} />
              </div>
              <div className="bg-white dark:bg-gray-900 rounded border p-4">
                <h2 className="font-medium mb-2">Trust Metrics</h2>
                <TrustRadar metrics={_(data.components || []).map(_(c: unknown) => ({ label: c.key, _value: Math.round(c.raw * 100)}))} />
              </div>
              {_showLogic && (_<div className="bg-white dark:bg-gray-900 rounded border p-4 text-sm">
                  <h3 className="font-medium mb-2">Score Breakdown</h3>
                  <ul className="space-y-1">
                    {data.components.map((c: unknown) => (
                      <li key={c.key} className="flex justify-between">
                        <span>{_c.key}</span>
                        <span>{_Math.round(c.raw * 100)} / weighted {_c.weighted.toFixed(3)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {_data.reasonSummary && (
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-3 text-sm whitespace-pre-wrap">
                  <strong>Operator GPT Analysis:</strong> {data.reasonSummary}
                </div>
              )}
            </div>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-900 rounded border p-4 space-y-3">
                <h3 className="font-medium">Peer Review</h3>
                <button className="text-sm px-3 py-1 rounded bg-green-600 text-white" onClick={_() => submitPeer('endorse')}>Endorse</button>
                <button className="text-sm px-3 py-1 rounded bg-red-600 text-white" onClick={_() => submitPeer('flag')}>Flag</button>
              </div>
              {_data.total < 70 && (
                <div className="bg-white dark:bg-gray-900 rounded border p-4 space-y-3">
                  <h3 className="font-medium">Appeal Score</h3>
                  <form onSubmit={submitAppeal} className="space-y-2">
                    <input name="email" type="email" placeholder="Contact email" className="w-full border rounded px-2 py-1 text-sm" />
                    <textarea name="message" placeholder="Explain why your score should be reconsidered" className="w-full border rounded px-2 py-1 text-sm" rows={_4} required />
                    <button className="text-sm px-3 py-1 rounded bg-blue-600 text-white" type="submit">Submit Appeal</button>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </EnhancedLayout>
  );
}