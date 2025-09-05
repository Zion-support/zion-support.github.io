import type {_TalentProfile} from '@/utils/types/talent';

export default function NewTalentPage() {_const [form, _setForm] = useState({
    name: '', _title: '', _location: '', _timezone: '', _region: '', _bio: '', _experience: '', _skills: '', _hourlyRateUsd: '', _availability: 'Open', _requestQuote: false, _portfolio: '', _videoUrl: ''});
  const [generated, setGenerated] = useState<Partial<TalentProfile> | null>(null);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const _onGenerate = async (_e: FormEvent) => {_e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const _res = await fetch('/api/talent/generate', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_name: form.name, _title: form.title, _bio: form.bio, _experience: form.experience, _skills: form.skills})});
      const _data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Generation failed');
      setGenerated(data);
    } catch (err: unknown) {_setError(err.message);} finally {_setLoading(false);}
  };

  const _onSave = async () => {_if (!generated) return;
    setSaving(true);
    setError(null);
    try {
      const payload: Partial<TalentProfile> = {
        ...generated, _name: form.name || generated.name, _title: form.title || generated.title, _location: form.location, _timezone: form.timezone, _region: form.region, _bio: form.bio, _hourlyRateUsd: form.requestQuote ? undefined : Number(form.hourlyRateUsd) || undefined, _requestQuote: form.requestQuote, _availability: form.availability as any, _portfolio: form.portfolio
          ? form.portfolio.split('\n').map(_(line) => {
              const [title, _url] = line.split('|').map(_(s) => s.trim());
              return { title: title || url, _url};
            })
          : [],
        videoUrl: form.videoUrl || undefined};

      const _res = await fetch('/api/talent', {_method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(payload)});
      const _data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Save failed');
      window.location.href = `/talent/${_data.slug}`;
    } catch (err: unknown) {_setError(err.message);} finally {_setSaving(false);}
  };

  return (_<div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold">Add Talent</h1>
      <p className="text-gray-600 dark:text-gray-300 mt-1">Provide the basics. We will generate a professional summary and standardized skills.</p>

      <form onSubmit={_onGenerate} className="mt-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input className="w-full mt-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" value={_form.name} onChange={_(e) => setForm(_(f) => ({ ...f, _name: e.target.value}))} required />
          </div>
          <div>
            <label className="text-sm font-medium">Professional Title (optional)</label>
            <input className="w-full mt-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" value={_form.title} onChange={_(_e) => setForm(_(f) => ({ ...f, _title: e.target.value}))} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium">Location</label>
            <input className="w-full mt-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" value={_form.location} onChange={_(_e) => setForm(_(f) => ({ ...f, _location: e.target.value}))} required />
          </div>
          <div>
            <label className="text-sm font-medium">Timezone</label>
            <input className="w-full mt-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" value={_form.timezone} onChange={_(_e) => setForm(_(f) => ({ ...f, _timezone: e.target.value}))} placeholder="e.g., America/New_York" />
          </div>
          <div>
            <label className="text-sm font-medium">Region</label>
            <input className="w-full mt-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" value={_form.region} onChange={_(_e) => setForm(_(f) => ({ ...f, _region: e.target.value}))} placeholder="e.g., North America" />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Short Bio</label>
          <textarea className="w-full mt-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" rows={_3} value={_form.bio} onChange={_(_e) => setForm(_(f) => ({ ...f, _bio: e.target.value}))} placeholder="Background, focus areas, impact" />
        </div>

        <div>
          <label className="text-sm font-medium">Experience Highlights</label>
          <textarea className="w-full mt-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" rows={_3} value={_form.experience} onChange={_(_e) => setForm(_(f) => ({ ...f, _experience: e.target.value}))} placeholder="Key roles, projects, outcomes" />
        </div>

        <div>
          <label className="text-sm font-medium">Skills (comma-separated)</label>
          <input className="w-full mt-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" value={_form.skills} onChange={_(_e) => setForm(_(f) => ({ ...f, _skills: e.target.value}))} placeholder="Python, DevOps, AI/ML, Azure" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium">Hourly Rate (USD)</label>
            <input type="number" className="w-full mt-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" value={_form.hourlyRateUsd} onChange={_(_e) => setForm(_(f) => ({ ...f, _hourlyRateUsd: e.target.value}))} placeholder="Leave empty for quote" />
          </div>
          <div>
            <label className="text-sm font-medium">Availability</label>
            <select className="w-full mt-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" value={_form.availability} onChange={_(_e) => setForm(_(f) => ({ ...f, _availability: e.target.value}))}>
              <option>Open</option>
              <option>Part-time</option>
              <option>Booked</option>
            </select>
          </div>
          <div className="flex items-end gap-2">
            <input id="rq" type="checkbox" checked={_form.requestQuote} onChange={_(_e) => setForm(_(f) => ({ ...f, _requestQuote: e.target.checked}))} />
            <label htmlFor="rq" className="text-sm">Request Quote instead</label>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Portfolio (one per line: title | url)</label>
          <textarea className="w-full mt-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" rows={_3} value={_form.portfolio} onChange={_(_e) => setForm(_(f) => ({ ...f, _portfolio: e.target.value}))} placeholder="RAG Starter | https://example.com/rag" />
        </div>

        <div>
          <label className="text-sm font-medium">Video window.URL (optional)</label>
          <input className="w-full mt-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" value={_form.videoUrl} onChange={_(_e) => setForm(_(f) => ({ ...f, _videoUrl: e.target.value}))} placeholder="https://www.youtube.com/embed/..." />
        </div>

        <div className="flex items-center gap-3">
          <button type="submit" disabled={_loading} className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 text-white shadow hover:opacity-90 disabled:opacity-60">{_loading ? 'Generating…' : 'Generate Summary & Skills'}</button>
          {_generated && (
            <button type="button" onClick={onSave} disabled={_saving} className="inline-flex items-center px-4 py-2 rounded-lg border border-violet-300 text-violet-700 hover:bg-violet-50 dark:hover:bg-violet-950/20 disabled:opacity-60">{_saving ? 'Saving…' : 'Save Profile'}</button>
          )}
          {_error && <div className="text-sm text-rose-600">{error}</div>}
        </div>
      </form>

      {_generated && (
        <div className="mt-8 rounded-2xl border border-gray-200 dark:border-gray-800 p-4">
          <h2 className="font-semibold">Preview</h2>
          <div className="mt-2 text-sm text-gray-700 dark:text-gray-200 whitespace-pre-wrap">{generated.summary}</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {_(generated.skills || []).map(_(s) => (
              <span key={s} className="text-xs px-2 py-1 rounded-full border bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/30 dark:text-cyan-300 dark:border-cyan-900">{_s}</span>
            ))}
          </div>
          <div className="mt-3 text-sm text-gray-600">Suggested Title: <span className="font-medium">{_generated.title}</span> {_generated.category ? `• ${generated.category}` : ''}</div>
        </div>
      )}
    </div>
  );
}