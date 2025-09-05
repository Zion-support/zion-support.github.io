import { useEffect, useState } from 'react';
import type { Vendor } from '../../utils/vendor-types';

export default function AdminVendorsPage() {
  const [vendors, setVendors] = useState<Vendor[]>([]);

  async function load() {
    const res = await fetch('/api/vendors');
    const data = await res.json();
    setVendors(data.vendors || []);
  }

  useEffect(() => { load(); }, []);

  async function call(action: string, vendorId: string, value?: any) {
    await fetch('/api/admin/vendors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, vendorId, value })});
    load();
  }

  return (
    <div className=&quot;space-y-6&quot;>
      <h1 className=&quot;text-2xl font-semibold&quot;>Admin • Vendors</h1>
      <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
        {vendors.map(v => (
          <div key={v.id} className=&quot;border border-gray-200 dark:border-gray-800 rounded p-4 space-y-2&quot;>
            <div className=&quot;flex items-center justify-between&quot;>
              <div className=&quot;font-medium flex items-center gap-2&quot;>
                {v.name}
                {v.verified && <span className=&quot;text-xs px-2 py-0.5 rounded bg-green-100 text-green-700&quot;>Verified</span>}
                {v.suspended && <span className=&quot;text-xs px-2 py-0.5 rounded bg-red-100 text-red-700&quot;>Suspended</span>}
              </div>
              <div className=&quot;text-xs text-gray-500&quot;>Team: {v.teamSize || 0}</div>
            </div>
            <div className=&quot;text-sm text-gray-500&quot;>Services: {v.servicesOffered?.join(', ') || '—'}</div>
            <div className=&quot;flex items-center gap-2 text-sm&quot;>
              <button onClick={() => call(v.verified ? 'revoke' : 'approve', v.id)} className=&quot;px-3 py-1 rounded border&quot;>{v.verified ? 'Revoke' : 'Approve'}</button>
              <button onClick={() => call(v.suspended ? 'unsuspend' : 'suspend', v.id)} className=&quot;px-3 py-1 rounded border&quot;>{v.suspended ? 'Unsuspend' : 'Suspend'}</button>
              <div className=&quot;flex items-center gap-1&quot;>
                <span>Commission %</span>
                <input type=&quot;number&quot; defaultValue={v.commissionSplitPct || 10} onBlur={e => call('commission', v.id, Number(e.target.value))} className=&quot;w-20 border rounded px-2 py-1 bg-transparent&quot; />
              </div>
            </div>
            <div className=&quot;text-xs text-gray-500&quot;>Revenue: $0 (placeholder)</div>
          </div>
        ))}
      </div>
      <div className=&quot;text-center text-xs text-gray-500&quot;>Powered by Zion</div>
    </div>
  );
}