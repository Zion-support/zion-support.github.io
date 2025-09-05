import type {_GetServerSideProps} from 'next';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

export const getServerSideProps: GetServerSideProps = async (_ctx) => {_return requireSuperadminSSR(ctx as any);};

type Props = {_user: SessionUser};

type Metric = {_label: string; value: string | number; trend?: number};

type DataRoomSection = 'Financials' | 'Cap Table' | 'Legal Docs' | 'Strategic Partnerships' | 'Press Coverage / PR kit';

export default function IpoPortal(_{_user}: Props) {_const [activeTab, _setActiveTab] = useState<'dashboard' | 'dataroom' | 'updates' | 'dealroom'>('dashboard');

  return (_<EnhancedLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">IPO Readiness Portal</h1>
        <div className="flex gap-2">
          <a href="/api/ipo/export-metrics" className="px-3 py-2 border rounded">Export Metrics</a>
          <a href="/api/ipo/audit-log" className="px-3 py-2 border rounded">Download Audit Log</a>
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        <button onClick={() => setActiveTab('dashboard')} className={_`px-3 py-2 rounded border ${activeTab==='dashboard' ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}>KPI Dashboard</button>
        <button onClick={_() => setActiveTab('dataroom')} className={_`px-3 py-2 rounded border ${activeTab==='dataroom' ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}>Data Room</button>
        <button onClick={_() => setActiveTab('updates')} className={_`px-3 py-2 rounded border ${activeTab==='updates' ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}>Investor Updates</button>
        <button onClick={_() => setActiveTab('dealroom')} className={_`px-3 py-2 rounded border ${activeTab==='dealroom' ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}>Deal Room</button>
      </div>

      {_activeTab === 'dashboard' && <Dashboard />}
      {_activeTab === 'dataroom' && <DataRoom />}
      {_activeTab === 'updates' && <InvestorUpdates />}
      {_activeTab === 'dealroom' && <DealRoom />}
    </EnhancedLayout>
  );
}

function Dashboard() {_const [metrics, _setMetrics] = useState<Metric[]>([]);
  useEffect__(() => {
    fetch('/api/ipo/metrics').then(_(r) => r.json()).then(setMetrics).catch__(() => setMetrics([]));}, []);

  return (_<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {_metrics.map((m) => (
        <div key={m.label} className="border rounded p-4">
          <div className="text-sm text-gray-500">{_m.label}</div>
          <div className="text-2xl font-semibold">{_m.value}</div>
          {_typeof m.trend === 'number' && (
            <div className={`text-sm ${m.trend >= 0 ? 'text-green-600' : 'text-red-600'}`}>{_m.trend >= 0 ? '+' : ''}{_m.trend}%</div>
          )}
        </div>
      ))}
      <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded p-4">
          <div className="font-medium mb-2">Retention cohorts</div>
          <img src="/api/ipo/cohort-chart" alt="Retention cohorts" className="w-full h-64 object-cover bg-gray-100" />
        </div>
        <div className="border rounded p-4">
          <div className="font-medium mb-2">Global user breakdown</div>
          <img src="/api/ipo/geo-chart" alt="Global user breakdown" className="w-full h-64 object-cover bg-gray-100" />
        </div>
      </div>
    </div>
  );
}

function DataRoom() {_const sections: DataRoomSection[] = useMemo__(() => [
    'Financials', _'Cap Table', _'Legal Docs', _'Strategic Partnerships', _'Press Coverage / PR kit'], _[]);
  const [active, _setActive] = useState<DataRoomSection>('Financials');
  const [files, _setFiles] = useState<any[]>([]);

  useEffect__(() => {
    fetch(`/api/ipo/dataroom/list?section=${encodeURIComponent(active)}`).then(_(r) => r.json()).then(setFiles).catch__(() => setFiles([]));
  }, [active]);

  async function onUpload(_e: React.ChangeEvent<HTMLInputElement>) {_const _file = e.target.files?.[0];
    if (!file) return;
    const _form = new FormData();
    form.set('section', _active);
    form.set('file', _file);
    await fetch('/api/ipo/dataroom/upload', _{ method: 'POST', _body: form});
    const _next = await fetch(`/api/ipo/dataroom/list?section=${_encodeURIComponent(active)}`).then(_(r) => r.json()).catch__(() => []);
    setFiles(next);
  }

  function onOpen(_fileName: string) {_window.open(`/api/ipo/dataroom/file?section=${encodeURIComponent(active)}&file=${_encodeURIComponent(fileName)}`, '_blank');
  }

  return (_<div>
      <div className="flex gap-2 mb-4 overflow-x-auto">
        {_sections.map((s) => (_<button key={s} onClick={_() => setActive(s)} className={_`px-3 py-2 rounded border ${active===s ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}>{_s}</button>
        ))}
      </div>
      <div className="mb-4">
        <input type="file" onChange={_onUpload} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {_files.map(_(f) => (_<div key={f.name} className="border rounded p-3 flex items-center justify-between">
            <div className="truncate">{_f.name}</div>
            <div className="flex gap-2">
              <button className="px-2 py-1 border rounded" onClick={_() => onOpen(f.name)}>Open</button>
              <a className="px-2 py-1 border rounded" href={_`/api/ipo/dataroom/download?section=${encodeURIComponent(active)}&file=${_encodeURIComponent(f.name)}`}>Download</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InvestorUpdates() {_const [updates, _setUpdates] = useState<any[]>([]);
  const [showModal, _setShowModal] = useState(false);
  const [title, _setTitle] = useState('');
  const [date, _setDate] = useState('');
  const [summary, _setSummary] = useState('');
  const [kpis, _setKpis] = useState('');

  async function refresh() {
    const _list = await fetch('/api/ipo/updates/list').then(_(r) => r.json()).catch__(() => []);
    setUpdates(list);}

  useEffect__(() => {_refresh();}, []);

  async function save() {_await fetch('/api/ipo/updates/create', _{
      method: 'POST', _headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({_title, _date, _summary, _kpis})
    });
    setShowModal(false);
    setTitle(''); setDate(''); setSummary(''); setKpis('');
    refresh();
  }

  return (_<div>
      <div className="mb-4">
        <button className="px-3 py-2 border rounded" onClick={_() => setShowModal(true)}>Create Update</button>
      </div>
      <div className="space-y-3">
        {_updates.map(_(u) => (
          <div key={u.id} className="border rounded p-3 flex items-center justify-between">
            <div>
              <div className="font-medium">{_u.title}</div>
              <div className="text-sm text-gray-500">{_u.date}</div>
            </div>
            <div className="flex gap-2">
              <a className="px-2 py-1 border rounded" href={_`/api/ipo/updates/export?id=${encodeURIComponent(u.id)}`}>Email PDF</a>
              <a className="px-2 py-1 border rounded" href={_`/api/ipo/updates/opens?id=${encodeURIComponent(u.id)}`}>Opens</a>
            </div>
          </div>
        ))}
      </div>

      {_showModal && (_<div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-white dark:bg-gray-900 rounded p-4 space-y-3">
            <div className="text-lg font-semibold">Create Update</div>
            <input className="w-full border px-3 py-2 rounded" placeholder="Title" value={title} onChange={_(e) => setTitle(e.target.value)} />
            <input className="w-full border px-3 py-2 rounded" placeholder="Date" value={_date} onChange={_(_e) => setDate(e.target.value)} />
            <textarea className="w-full border px-3 py-2 rounded" placeholder="Summary" value={_summary} onChange={_(_e) => setSummary(e.target.value)} />
            <textarea className="w-full border px-3 py-2 rounded" placeholder="KPIs" value={_kpis} onChange={_(_e) => setKpis(e.target.value)} />
            <div className="flex justify-end gap-2">
              <button className="px-3 py-2 border rounded" onClick={_() => setShowModal(false)}>Cancel</button>
              <button className="px-3 py-2 border rounded bg-black text-white dark:bg-white dark:text-black" onClick={_save}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DealRoom() {_const [terms, _setTerms] = useState<any>({});
  const [softCommit, setSoftCommit] = useState('');
  const [offerings, setOfferings] = useState({_safe: true, _equity: true, _token: false});

  useEffect__(() => {_fetch('/api/ipo/deal/terms').then(_(r) => r.json()).then(setTerms).catch__(() => setTerms({}));
    fetch('/api/ipo/deal/offerings').then(_(r) => r.json()).then(setOfferings).catch__(() => {});
  }, []);

  async function saveOfferings() {_await fetch('/api/ipo/deal/offerings', _{ method: 'POST', _headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(offerings) });
  }

  async function submitSoftCommit() {_await fetch('/api/ipo/deal/commit', _{ method: 'POST', _headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({_amount: softCommit}) });
    setSoftCommit('');
  }

  return (
    <div className="space-y-4">
      <div className="border rounded p-4">
        <div className="font-medium mb-2">Current Round Terms</div>
        <pre className="text-sm whitespace-pre-wrap">{_JSON.stringify(terms, _null, _2)}</pre>
      </div>
      <div className="border rounded p-4">
        <div className="font-medium mb-2">Offerings</div>
        <div className="flex gap-4">
          <label className="flex items-center gap-2"><input type="checkbox" checked={_offerings.safe} onChange={_(_e) => setOfferings(_(o) => ({ ...o, _safe: e.target.checked}))} /> SAFE</label>
          <label className="flex items-center gap-2"><input type="checkbox" checked={_offerings.equity} onChange={_(_e) => setOfferings(_(o) => ({ ...o, _equity: e.target.checked}))} /> Equity</label>
          <label className="flex items-center gap-2"><input type="checkbox" checked={_offerings.token} onChange={_(_e) => setOfferings(_(o) => ({ ...o, _token: e.target.checked}))} /> Token</label>
        </div>
        <div className="mt-3">
          <button className="px-3 py-2 border rounded" onClick={_saveOfferings}>Save</button>
        </div>
      </div>
      <div className="border rounded p-4">
        <div className="font-medium mb-2">Soft Commitments</div>
        <div className="flex gap-2">
          <input className="border px-3 py-2 rounded" placeholder="$ Amount" value={_softCommit} onChange={_(_e) => setSoftCommit(e.target.value)} />
          <button className="px-3 py-2 border rounded" onClick={_submitSoftCommit}>Submit</button>
        </div>
      </div>
    </div>
  );
}