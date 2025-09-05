import { useEffect, useMemo, useState } from 'react';
import type { GetServerSideProps } from 'next';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import { requireSuperadminSSR, SessionUser } from '../../utils/auth-utils';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return requireSuperadminSSR(ctx as any);
};

type Props = { user: SessionUser };

type Metric = { label: string; value: string | number; trend?: number };

type DataRoomSection = 'Financials' | 'Cap Table' | 'Legal Docs' | 'Strategic Partnerships' | 'Press Coverage / PR kit';

export default function IpoPortal({ user }: Props) {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'dataroom' | 'updates' | 'dealroom'>('dashboard');

  return (
    <EnhancedLayout>
      <div className=&quot;flex items-center justify-between mb-6&quot;>
        <h1 className=&quot;text-2xl font-semibold&quot;>IPO Readiness Portal</h1>
        <div className=&quot;flex gap-2&quot;>
          <a href=&quot;/api/ipo/export-metrics&quot; className=&quot;px-3 py-2 border rounded&quot;>Export Metrics</Link>
          <a href=&quot;/api/ipo/audit-log&quot; className=&quot;px-3 py-2 border rounded&quot;>Download Audit Log</Link>
        </div>
      </div>

      <div className=&quot;flex gap-2 mb-6&quot;>
        <button onClick={() => setActiveTab('dashboard')} className={`px-3 py-2 rounded border ${activeTab==='dashboard' ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}>KPI Dashboard</button>
        <button onClick={() => setActiveTab('dataroom')} className={`px-3 py-2 rounded border ${activeTab==='dataroom' ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}>Data Room</button>
        <button onClick={() => setActiveTab('updates')} className={`px-3 py-2 rounded border ${activeTab==='updates' ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}>Investor Updates</button>
        <button onClick={() => setActiveTab('dealroom')} className={`px-3 py-2 rounded border ${activeTab==='dealroom' ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}>Deal Room</button>
      </div>

      {activeTab === 'dashboard' && <Dashboard />}
      {activeTab === 'dataroom' && <DataRoom />}
      {activeTab === 'updates' && <InvestorUpdates />}
      {activeTab === 'dealroom' && <DealRoom />}
    </EnhancedLayout>
  );
}

function Dashboard() {
  const [metrics, setMetrics] = useState<Metric[]>([]);
  useEffect(() => {
    fetch('/api/ipo/metrics').then((r) => r.json()).then(setMetrics).catch(() => setMetrics([]));
  }, []);

  return (
    <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-4&quot;>
      {metrics.map((m) => (
        <div key={m.label} className=&quot;border rounded p-4&quot;>
          <div className=&quot;text-sm text-gray-500&quot;>{m.label}</div>
          <div className=&quot;text-2xl font-semibold&quot;>{m.value}</div>
          {typeof m.trend === 'number' && (
            <div className={`text-sm ${m.trend >= 0 ? 'text-green-600' : 'text-red-600'}`}>{m.trend >= 0 ? '+' : ''}{m.trend}%</div>
          )}
        </div>
      ))}
      <div className=&quot;md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
        <div className=&quot;border rounded p-4&quot;>
          <div className=&quot;font-medium mb-2&quot;>Retention cohorts</div>
          <img src=&quot;/api/ipo/cohort-chart&quot; alt=&quot;Retention cohorts&quot; className=&quot;w-full h-64 object-cover bg-gray-100&quot; />
        </div>
        <div className=&quot;border rounded p-4&quot;>
          <div className=&quot;font-medium mb-2&quot;>Global user breakdown</div>
          <img src=&quot;/api/ipo/geo-chart&quot; alt=&quot;Global user breakdown&quot; className=&quot;w-full h-64 object-cover bg-gray-100&quot; />
        </div>
      </div>
    </div>
  );
}

function DataRoom() {
  const sections: DataRoomSection[] = useMemo(() => [
    'Financials',
    'Cap Table',
    'Legal Docs',
    'Strategic Partnerships',
    'Press Coverage / PR kit'], []);
  const [active, setActive] = useState<DataRoomSection>('Financials');
  const [files, setFiles] = useState<any[]>([]);

  useEffect(() => {
    fetch(`/api/ipo/dataroom/list?section=${encodeURIComponent(active)}`).then((r) => r.json()).then(setFiles).catch(() => setFiles([]));
  }, [active]);

  async function onUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const form = new FormData();
    form.set('section', active);
    form.set('file', file);
    await fetch('/api/ipo/dataroom/upload', { method: 'POST', body: form });
    const next = await fetch(`/api/ipo/dataroom/list?section=${encodeURIComponent(active)}`).then((r) => r.json()).catch(() => []);
    setFiles(next);
  }

  function onOpen(fileName: string) {
    window.open(`/api/ipo/dataroom/file?section=${encodeURIComponent(active)}&file=${encodeURIComponent(fileName)}`, '_blank');
  }

  return (
    <div>
      <div className=&quot;flex gap-2 mb-4 overflow-x-auto&quot;>
        {sections.map((s) => (
          <button key={s} onClick={() => setActive(s)} className={`px-3 py-2 rounded border ${active===s ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}>{s}</button>
        ))}
      </div>
      <div className=&quot;mb-4&quot;>
        <input type=&quot;file&quot; onChange={onUpload} />
      </div>
      <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-3&quot;>
        {files.map((f) => (
          <div key={f.name} className=&quot;border rounded p-3 flex items-center justify-between&quot;>
            <div className=&quot;truncate&quot;>{f.name}</div>
            <div className=&quot;flex gap-2&quot;>
              <button className=&quot;px-2 py-1 border rounded&quot; onClick={() => onOpen(f.name)}>Open</button>
              <a className=&quot;px-2 py-1 border rounded&quot; href={`/api/ipo/dataroom/download?section=${encodeURIComponent(active)}&file=${encodeURIComponent(f.name)}`}>Download</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InvestorUpdates() {
  const [updates, setUpdates] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [summary, setSummary] = useState('');
  const [kpis, setKpis] = useState('');

  async function refresh() {
    const list = await fetch('/api/ipo/updates/list').then((r) => r.json()).catch(() => []);
    setUpdates(list);
  }

  useEffect(() => { refresh(); }, []);

  async function save() {
    await fetch('/api/ipo/updates/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, date, summary, kpis })
    });
    setShowModal(false);
    setTitle(''); setDate(''); setSummary(''); setKpis('');
    refresh();
  }

  return (
    <div>
      <div className=&quot;mb-4&quot;>
        <button className=&quot;px-3 py-2 border rounded&quot; onClick={() => setShowModal(true)}>Create Update</button>
      </div>
      <div className=&quot;space-y-3&quot;>
        {updates.map((u) => (
          <div key={u.id} className=&quot;border rounded p-3 flex items-center justify-between&quot;>
            <div>
              <div className=&quot;font-medium&quot;>{u.title}</div>
              <div className=&quot;text-sm text-gray-500&quot;>{u.date}</div>
            </div>
            <div className=&quot;flex gap-2&quot;>
              <a className=&quot;px-2 py-1 border rounded&quot; href={`/api/ipo/updates/export?id=${encodeURIComponent(u.id)}`}>Email PDF</Link>
              <a className=&quot;px-2 py-1 border rounded&quot; href={`/api/ipo/updates/opens?id=${encodeURIComponent(u.id)}`}>Opens</Link>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className=&quot;fixed inset-0 bg-black/50 flex items-center justify-center p-4&quot;>
          <div className=&quot;w-full max-w-lg bg-white dark:bg-gray-900 rounded p-4 space-y-3&quot;>
            <div className=&quot;text-lg font-semibold&quot;>Create Update</div>
            <input className=&quot;w-full border px-3 py-2 rounded&quot; placeholder=&quot;Title&quot; value={title} onChange={(e) => setTitle(e.target.value)} />
            <input className=&quot;w-full border px-3 py-2 rounded&quot; placeholder=&quot;Date&quot; value={date} onChange={(e) => setDate(e.target.value)} />
            <textarea className=&quot;w-full border px-3 py-2 rounded&quot; placeholder=&quot;Summary&quot; value={summary} onChange={(e) => setSummary(e.target.value)} />
            <textarea className=&quot;w-full border px-3 py-2 rounded&quot; placeholder=&quot;KPIs&quot; value={kpis} onChange={(e) => setKpis(e.target.value)} />
            <div className=&quot;flex justify-end gap-2&quot;>
              <button className=&quot;px-3 py-2 border rounded&quot; onClick={() => setShowModal(false)}>Cancel</button>
              <button className=&quot;px-3 py-2 border rounded bg-black text-white dark:bg-white dark:text-black&quot; onClick={save}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DealRoom() {
  const [terms, setTerms] = useState<any>({});
  const [softCommit, setSoftCommit] = useState('');
  const [offerings, setOfferings] = useState({ safe: true, equity: true, token: false });

  useEffect(() => {
    fetch('/api/ipo/deal/terms').then((r) => r.json()).then(setTerms).catch(() => setTerms({}));
    fetch('/api/ipo/deal/offerings').then((r) => r.json()).then(setOfferings).catch(() => {});
  }, []);

  async function saveOfferings() {
    await fetch('/api/ipo/deal/offerings', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(offerings) });
  }

  async function submitSoftCommit() {
    await fetch('/api/ipo/deal/commit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ amount: softCommit }) });
    setSoftCommit('');
  }

  return (
    <div className=&quot;space-y-4&quot;>
      <div className=&quot;border rounded p-4&quot;>
        <div className=&quot;font-medium mb-2&quot;>Current Round Terms</div>
        <pre className=&quot;text-sm whitespace-pre-wrap&quot;>{JSON.stringify(terms, null, 2)}</pre>
      </div>
      <div className=&quot;border rounded p-4&quot;>
        <div className=&quot;font-medium mb-2&quot;>Offerings</div>
        <div className=&quot;flex gap-4&quot;>
          <label className=&quot;flex items-center gap-2&quot;><input type=&quot;checkbox&quot; checked={offerings.safe} onChange={(e) => setOfferings((o) => ({ ...o, safe: e.target.checked }))} /> SAFE</label>
          <label className=&quot;flex items-center gap-2&quot;><input type=&quot;checkbox&quot; checked={offerings.equity} onChange={(e) => setOfferings((o) => ({ ...o, equity: e.target.checked }))} /> Equity</label>
          <label className=&quot;flex items-center gap-2&quot;><input type=&quot;checkbox&quot; checked={offerings.token} onChange={(e) => setOfferings((o) => ({ ...o, token: e.target.checked }))} /> Token</label>
        </div>
        <div className=&quot;mt-3&quot;>
          <button className=&quot;px-3 py-2 border rounded&quot; onClick={saveOfferings}>Save</button>
        </div>
      </div>
      <div className=&quot;border rounded p-4&quot;>
        <div className=&quot;font-medium mb-2&quot;>Soft Commitments</div>
        <div className=&quot;flex gap-2&quot;>
          <input className=&quot;border px-3 py-2 rounded&quot; placeholder=&quot;$ Amount&quot; value={softCommit} onChange={(e) => setSoftCommit(e.target.value)} />
          <button className=&quot;px-3 py-2 border rounded&quot; onClick={submitSoftCommit}>Submit</button>
        </div>
      </div>
    </div>
  );
}