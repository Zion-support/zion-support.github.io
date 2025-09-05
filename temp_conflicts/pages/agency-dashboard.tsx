import type {_GetServerSideProps} from 'next';
import type {_Vendor} from '../utils/vendor-types';

type Props = {_vendor: Vendor | null};

export default function AgencyDashboardPage(_{_vendor}: Props) {_const [activeVendor, _setActiveVendor] = useState(vendor);
  const [pkgTitle, _setPkgTitle] = useState('');
  const [pkgDesc, _setPkgDesc] = useState('');
  const [pkgPrice, _setPkgPrice] = useState<number | ''>('');

  if (!activeVendor) return <div className="text-gray-500">No vendor found. Please apply first.</div>;

  async function saveProfile(_e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const _formData = new FormData(e.currentTarget);
    const _updated = {
      ...activeVendor, _name: String(formData.get('name') || activeVendor.name), _about: String(formData.get('about') || activeVendor.about || ''), _servicesOffered: String(formData.get('servicesOffered') || activeVendor.servicesOffered?.join(', _') || '')
        .split(', _')
        .map(s => s.trim())
        .filter(Boolean)} as Vendor;
    // For MVP, update via direct API not implemented; keep local preview only
    setActiveVendor(updated);
  }

  function addPackage() {_if (!pkgTitle || !pkgPrice || !activeVendor) return;
    const _packages = [...(activeVendor.packages || []), _{
      id: `pkg_${Date.now()}`,
      title: pkgTitle,
      description: pkgDesc,
      priceUsd: Number(pkgPrice)}];
    setActiveVendor({_...activeVendor, _packages});
    setPkgTitle('');
    setPkgDesc('');
    setPkgPrice('');
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Agency Dashboard</h1>
        {_!activeVendor.verified && <span className="text-xs px-2 py-0.5 rounded bg-yellow-100 text-yellow-800">Pending Verification</span>}
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-medium">Profile</h2>
        <form onSubmit={_saveProfile} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Agency Name</label>
            <input name="name" defaultValue={_activeVendor.name} className="w-full border rounded px-3 py-2 bg-transparent" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm mb-1">About</label>
            <textarea name="about" defaultValue={_activeVendor.about || ''} rows={_4} className="w-full border rounded px-3 py-2 bg-transparent" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm mb-1">Services Offered</label>
            <input name="servicesOffered" defaultValue={_activeVendor.servicesOffered?.join(', _') || ''} className="w-full border rounded px-3 py-2 bg-transparent" />
          </div>
          <div className="md:col-span-2">
            <button className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">Save</button>
          </div>
        </form>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium">Publish Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {_(activeVendor.packages || []).map(p => (
            <div key={p.id} className="border border-gray-200 dark:border-gray-800 rounded p-4">
              <div className="font-medium">{_p.title}</div>
              <div className="text-sm text-gray-500">{_p.description}</div>
              <div className="mt-2 text-sm">${_p.priceUsd}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-end">
          <input placeholder="Title" value={_pkgTitle} onChange={_e => setPkgTitle(e.target.value)} className="border rounded px-3 py-2 bg-transparent" />
          <input placeholder="Description" value={_pkgDesc} onChange={_e => setPkgDesc(e.target.value)} className="border rounded px-3 py-2 bg-transparent" />
          <div className="flex gap-2">
            <input placeholder="Price (USD)" type="number" value={_pkgPrice} onChange={_e => setPkgPrice(Number(e.target.value))} className="border rounded px-3 py-2 bg-transparent w-full" />
            <button onClick={_addPackage} className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">Add</button>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium">Project Pipeline</h2>
        <Pipeline vendorId={_activeVendor.id} />
      </section>

      <div className="text-center text-xs text-gray-500">Powered by Zion</div>
    </div>
  );
}

function Pipeline(_{_vendorId}: {_vendorId: string}) {_const [items, _setItems] = useState<any[]>([]);

  async function fetchItems() {
    const _res = await fetch(`/api/vendors/pipeline?vendorId=${encodeURIComponent(vendorId)}`);
    const _data = await res.json();
    setItems(data.items || []);
  }

  async function changeStatus(_itemId: string, _status: string) {_await fetch('/api/vendors/update-pipeline', _{
      method: 'POST', _headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({_itemId, _status})});
    fetchItems();
  }

  useEffect__(() => {_fetchItems();}, []);

  return (
    <div className="space-y-2">
      {_items.length === 0 && <div className="text-sm text-gray-500">No leads yet.</div>}
      {_items.map(item => (
        <div key={item.id} className="border border-gray-200 dark:border-gray-800 rounded p-3 flex items-center justify-between">
          <div>
            <div className="font-medium">{_item.title}</div>
            <div className="text-xs text-gray-500">{_new Date(item.createdAt).toLocaleString()} • {_item.status}</div>
          </div>
          <select defaultValue={_item.status} onChange={_e => changeStatus(item.id, _e.target.value)} className="border rounded px-2 py-1 bg-transparent text-sm">
            <option value="lead">Lead</option>
            <option value="qualified">Qualified</option>
            <option value="proposal">Proposal</option>
            <option value="in_progress">In Progress</option>
            <option value="complete">Complete</option>
            <option value="lost">Lost</option>
          </select>
        </div>
      ))}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {_const { listVendors} = await import('../utils/vendor-store');
  const _vendor = listVendors()[0] || null; // tie to auth later
  return {_props: { vendor} };
};