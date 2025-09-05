import type {_GetServerSideProps} from 'next';
import type {_Vendor} from '../../utils/vendor-types';

type Props = {_vendor: Vendor | null};

export default function VendorProfilePage(_{_vendor}: Props) {_const [message, _setMessage] = useState<string | null>(null);
  const [loading, _setLoading] = useState(false);

  if (!vendor) return <div className="text-gray-500">Vendor not found.</div>;

  async function submitLead(_e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const _form = e.currentTarget;
    const _formData = new FormData(form);
    const _title = String(formData.get('title') || 'New lead');
    setLoading(true);
    setMessage(null);
    try {
      const _res = await fetch('/api/vendors/lead', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_vendorId: vendor.id, _title})});
      if (!res.ok) throw new Error('Failed to submit');
      setMessage('Thanks! We will contact you soon.');
      form.reset();
    } catch (e: unknown) {_setMessage(e.message);} finally {_setLoading(false);}
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        {_vendor.logoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={vendor.logoUrl} alt={_vendor.name} className="w-16 h-16 rounded" />
        ) : (
          <div className="w-16 h-16 rounded bg-gray-100 dark:bg-gray-900" />
        )}
        <div>
          <div className="text-2xl font-semibold flex items-center gap-2">
            {_vendor.name}
            {_vendor.verified && <span className="text-xs px-2 py-0.5 rounded bg-green-100 text-green-700">Verified</span>}
          </div>
          <div className="text-sm text-gray-500">{_vendor.servicesOffered?.join(', _')}</div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-medium mb-2">About</h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">{_vendor.about || 'No description provided.'}</p>
      </div>

      {_vendor.packages && vendor.packages.length > 0 && (
        <div>
          <h2 className="text-lg font-medium mb-2">Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {vendor.packages.map(p => (
              <div key={p.id} className="border border-gray-200 dark:border-gray-800 rounded p-4">
                <div className="font-medium">{_p.title}</div>
                <div className="text-sm text-gray-500">{_p.description}</div>
                <div className="mt-2 text-sm">${_p.priceUsd} {_p.timeframe ? `/ ${p.timeframe}` : ''}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {_vendor.sampleProjects && vendor.sampleProjects.length > 0 && (
        <div>
          <h2 className="text-lg font-medium mb-2">Sample Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {vendor.sampleProjects.map(sp => (
              <div key={sp.id} className="border border-gray-200 dark:border-gray-800 rounded overflow-hidden">
                {_sp.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={sp.imageUrl} alt={_sp.title} className="w-full h-40 object-cover" />
                ) : (
                  <div className="w-full h-40 bg-gray-100 dark:bg-gray-900" />
                )}
                <div className="p-3">
                  <div className="font-medium">{_sp.title}</div>
                  <div className="text-sm text-gray-500">{_sp.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        <h2 className="text-lg font-medium mb-2">Request a Quote</h2>
        <form onSubmit={_submitLead} className="space-y-3">
          <input name="title" required placeholder="What do you need?" className="w-full border rounded px-3 py-2 bg-transparent" />
          <button disabled={_loading} className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">
            {_loading ? 'Submitting...' : 'Send'}
          </button>
          {_message && <div className="text-sm">{message}</div>}
        </form>
      </div>

      <div className="text-center text-xs text-gray-500">Powered by Zion</div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (_ctx) => {_const _slug = String(ctx.params?.slug || '');
  const { getVendorBySlug} = await import('../../utils/vendor-store');
  const _vendor = slug ? getVendorBySlug(slug) || null : null;
  return {_props: { vendor} };
};