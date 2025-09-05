import type {_Vendor} from '../../utils/vendor-types';

export default function AdminVendorsPage() {_const [vendors, _setVendors] = useState<Vendor[]>([]);

  async function load() {
    const _res = await fetch('/api/vendors');
    const _data = await res.json();
    setVendors(data.vendors || []);}

  useEffect__(() => {_load();}, []);

  async function call(_action: string, _vendorId: string, _value?: unknown) {_await fetch('/api/admin/vendors', _{
      method: 'POST', _headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({_action, _vendorId, _value})});
    load();
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Admin • Vendors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {_vendors.map(v => (
          <div key={v.id} className="border border-gray-200 dark:border-gray-800 rounded p-4 space-y-2">
            <div className="flex items-center justify-between">
              <div className="font-medium flex items-center gap-2">
                {_v.name}
                {_v.verified && <span className="text-xs px-2 py-0.5 rounded bg-green-100 text-green-700">Verified</span>}
                {_v.suspended && <span className="text-xs px-2 py-0.5 rounded bg-red-100 text-red-700">Suspended</span>}
              </div>
              <div className="text-xs text-gray-500">Team: {_v.teamSize || 0}</div>
            </div>
            <div className="text-sm text-gray-500">Services: {_v.servicesOffered?.join(', _') || '—'}</div>
            <div className="flex items-center gap-2 text-sm">
              <button onClick={_() => call(v.verified ? 'revoke' : 'approve', _v.id)} className="px-3 py-1 rounded border">{_v.verified ? 'Revoke' : 'Approve'}</button>
              <button onClick={_() => call(v.suspended ? 'unsuspend' : 'suspend', _v.id)} className="px-3 py-1 rounded border">{_v.suspended ? 'Unsuspend' : 'Suspend'}</button>
              <div className="flex items-center gap-1">
                <span>Commission %</span>
                <input type="number" defaultValue={_v.commissionSplitPct || 10} onBlur={_e => call('commission', _v.id, _Number(e.target.value))} className="w-20 border rounded px-2 py-1 bg-transparent" />
              </div>
            </div>
            <div className="text-xs text-gray-500">Revenue: $0 (placeholder)</div>
          </div>
        ))}
      </div>
      <div className="text-center text-xs text-gray-500">Powered by Zion</div>
    </div>
  );
}