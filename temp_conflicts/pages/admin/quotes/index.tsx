import { useEffect, useMemo, useState } from 'react';

export type QuoteRequest = {
  id: string;
  name: string;
  email: string;
  budget: string;
  timeline: string;
  description: string;
  talentSlug: string | null;
  aiSummary: string;
  aiType: string;
  status: 'new' | 'in_review' | 'replied' | 'archived';
  createdAt: string;
  updatedAt: string;
};

export default function AdminQuotesPage() {
  const [data, setData] = useState<QuoteRequest[]>([]);
  const [q, setQ] = useState('');
  const [status, setStatus] = useState<'all' | QuoteRequest['status']>('all');
  const [talent, setTalent] = useState('all');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await fetch('/api/requests/list');
      const json = await res.json();
      setData(json.items || []);
      setLoading(false);
    })();
  }, []);

  const filtered = useMemo(() => {
    return data.filter((r) => {
      if (status !== 'all' && r.status !== status) return false;
      if (talent !== 'all' && r.talentSlug !== talent) return false;
      if (q) {
        const hay = `${r.name} ${r.email} ${r.description} ${r.aiSummary}`.toLowerCase();
        if (!hay.includes(q.toLowerCase())) return false;
      }
      if (dateFrom && new Date(r.createdAt) < new Date(dateFrom)) return false;
      if (dateTo && new Date(r.createdAt) > new Date(dateTo)) return false;
      return true;
    });
  }, [data, q, status, talent, dateFrom, dateTo]);

  const exportCsv = () => {
    const header = ['id','name','email','budget','timeline','talentSlug','aiType','status','createdAt'];
    const rows = filtered.map(r => [r.id,r.name,r.email,r.budget,r.timeline,r.talentSlug||'',r.aiType,r.status,r.createdAt]);
    const csv = [header.join(','), ...rows.map(r => r.map(v => `&quot;${String(v).replace(/&quot;/g,'"&quot;')}&quot;`).join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'quotes.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const changeStatus = async (id: string, status: QuoteRequest['status']) => {
    await fetch('/api/requests/status', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, status }) });
    setData(prev => prev.map(r => r.id === id ? { ...r, status, updatedAt: new Date().toISOString() } : r));
  };

  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;flex items-center justify-between&quot;>
        <h1 className=&quot;text-2xl font-semibold&quot;>Quote Requests</h1>
        <div className=&quot;flex items-center gap-2&quot;>
          <button onClick={exportCsv} className=&quot;px-3 py-1 rounded bg-gray-100&quot;>Export CSV</button>
        </div>
      </div>
      <div className=&quot;grid sm:grid-cols-2 lg:grid-cols-5 gap-3&quot;>
        <input placeholder=&quot;Search&quot; className=&quot;border rounded px-3 py-2&quot; value={q} onChange={(e)=>setQ(e.target.value)} />
        <select className=&quot;border rounded px-3 py-2&quot; value={status} onChange={(e)=>setStatus(e.target.value as any)}>
          <option value=&quot;all&quot;>All Status</option>
          <option value=&quot;new&quot;>New</option>
          <option value=&quot;in_review&quot;>In Review</option>
          <option value=&quot;replied&quot;>Replied</option>
          <option value=&quot;archived&quot;>Archived</option>
        </select>
        <input type=&quot;date&quot; className=&quot;border rounded px-3 py-2&quot; value={dateFrom} onChange={(e)=>setDateFrom(e.target.value)} />
        <input type=&quot;date&quot; className=&quot;border rounded px-3 py-2&quot; value={dateTo} onChange={(e)=>setDateTo(e.target.value)} />
        <select className=&quot;border rounded px-3 py-2&quot; value={talent} onChange={(e)=>setTalent(e.target.value)}>
          <option value=&quot;all&quot;>All Talent</option>
          <option value=&quot;ava-chen&quot;>Ava Chen</option>
          <option value=&quot;marco-silva&quot;>Marco Silva</option>
          <option value=&quot;nina-patel&quot;>Nina Patel</option>
          <option value=&quot;kenji-yamada&quot;>Kenji Yamada</option>
          <option value=&quot;lena-mueller&quot;>Lena Müller</option>
        </select>
      </div>

      {loading ? (
        <div>Loading…</div>
      ) : (
        <div className=&quot;overflow-auto border rounded&quot;>
          <table className=&quot;min-w-full text-sm&quot;>
            <thead className=&quot;bg-gray-50&quot;>
              <tr>
                <th className=&quot;text-left p-2&quot;>ID</th>
                <th className=&quot;text-left p-2&quot;>Name</th>
                <th className=&quot;text-left p-2&quot;>Email</th>
                <th className=&quot;text-left p-2&quot;>Budget</th>
                <th className=&quot;text-left p-2&quot;>Talent</th>
                <th className=&quot;text-left p-2&quot;>Type</th>
                <th className=&quot;text-left p-2&quot;>Status</th>
                <th className=&quot;text-left p-2&quot;>Created</th>
                <th className=&quot;text-left p-2&quot;>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(r => (
                <tr key={r.id} className=&quot;border-t&quot;>
                  <td className=&quot;p-2 whitespace-nowrap&quot;>{r.id}</td>
                  <td className=&quot;p-2&quot;>{r.name}</td>
                  <td className=&quot;p-2&quot;>{r.email}</td>
                  <td className=&quot;p-2&quot;>{r.budget}</td>
                  <td className=&quot;p-2&quot;>{r.talentSlug || '-'}</td>
                  <td className=&quot;p-2&quot;>{r.aiType}</td>
                  <td className=&quot;p-2&quot;>
                    <span className=&quot;px-2 py-1 rounded bg-gray-100&quot;>{r.status}</span>
                  </td>
                  <td className=&quot;p-2&quot;>{new Date(r.createdAt).toLocaleDateString()}</td>
                  <td className=&quot;p-2&quot;>
                    <div className=&quot;flex items-center gap-2&quot;>
                      <button onClick={()=>changeStatus(r.id,'in_review')} className=&quot;text-xs px-2 py-1 rounded bg-blue-100&quot;>In Review</button>
                      <button onClick={()=>changeStatus(r.id,'replied')} className=&quot;text-xs px-2 py-1 rounded bg-green-100&quot;>Replied</button>
                      <button onClick={()=>changeStatus(r.id,'archived')} className=&quot;text-xs px-2 py-1 rounded bg-gray-200&quot;>Archive</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}